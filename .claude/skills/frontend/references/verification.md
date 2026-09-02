# Verifying changes in this repo

`pnpm lint` and `pnpm build` catch almost nothing about whether a page *looks* right. Look at
the result.

## Checks that need no browser

Run these first. They are fast and catch the most common regressions.

**Dead anchors.** Nav and footer links come from arrays (`href: '#about'`), so a plain grep for
`href="#..."` misses them:

```bash
python3 - <<'PY'
import re, pathlib
ids = set(); targets = set()
for f in pathlib.Path('src').rglob('*.jsx'):
    t = f.read_text()
    ids     |= set(re.findall(r'id="([a-z-]+)"', t))
    targets |= set(re.findall(r'href="#([a-z-]+)"', t)) | set(re.findall(r"href:\s*'#([a-z-]+)'", t))
print("DEAD:", sorted(targets - ids) or "none")
PY
```

**Assets resolve** (dev server running):

```bash
for f in $(grep -rhoE "assets/images/[a-zA-Z0-9/-]+\.(jpg|png)" src/ | sed 's|assets/images/||' | sort -u); do
  printf "%-38s " "$f"; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:5199/src/assets/images/$f"
done
```

Note imports use both `'...'` and `"..."` quoting, so match both or you'll miss files.

**Orphaned assets:**

```bash
cd src/assets/images && find . -type f | sed 's|^\./||' |
  while read f; do grep -rq "$f" ../../../src/ || echo "ORPHAN: $f"; done
```

**Stale strings** after a content change:

```bash
grep -rn "945 286 9314\|P. Herrera\|2,500\|4,500" src/ index.html
```

## Headless screenshots

The Chrome extension may be unavailable; `google-chrome-stable` is installed and works.

### The gotcha: scroll reveals never settle

Every `AnimatedSection` uses framer-motion `whileInView`, driven by IntersectionObserver.
**In headless captures the observer callback does not fire before the screenshot**, so ~90
elements stay at `opacity: 0` and most of the page renders blank. This is a capture artifact,
not a bug. Confirm with `--dump-dom` that the content is present.

`--force-prefers-reduced-motion` fixes elements animated with `animate` (the hero stats), but
**not** `whileInView`.

The reliable method is to temporarily stub the wrapper, capture, restore, then prove it's restored:

```bash
cp src/components/shared/AnimatedSection.jsx /tmp/AS.bak
cat > src/components/shared/AnimatedSection.jsx <<'EOF'
export default function AnimatedSection({ children, className = '', as = 'div' }) {
  const Comp = as
  return <Comp className={className}>{children}</Comp>
}
EOF
sleep 3   # let Vite HMR pick it up

google-chrome-stable --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --force-prefers-reduced-motion --virtual-time-budget=25000 \
  --window-size=1440,16000 --screenshot=/tmp/full.png http://localhost:5199/

cp /tmp/AS.bak src/components/shared/AnimatedSection.jsx
git diff --quiet src/components/shared/AnimatedSection.jsx && echo "restored ✓"
```

Always finish with the `git diff --quiet` check, and say in the report that it was restored.

### Reading a tall screenshot

A 16000px-tall PNG is unreadable when downsampled whole. Slice it:

```bash
for i in 0 1 2 3 4 5; do
  ffmpeg -v error -i /tmp/full.png -vf "crop=1440:2700:0:$((i*2700)),scale=780:-1" -y /tmp/v$i.png
done
```

Then read the slices. To inspect one component, crop a narrow band at its y offset.

### Viewports

1440 (desktop), 768 (tablet), 390 (mobile). For the navbar specifically also check 1280 and
1100, where `wide` links switch at `xl`.

The Google Maps iframe renders blank in headless (no network to Google). Expected, not a bug.

## Diff hygiene before finishing

```bash
git checkout -- dist          # builds touch the 18 still-tracked dist files
git status --short
grep -rn "console\.\|debugger\|TODO\|FIXME" src/
```

`AUTODOME` contains the substring `TODO`, a known false positive in `surveillanceData.js`.

## Reporting

State what actually ran. There is no test suite in this project; say that rather than
implying tests passed. If a check was impossible (no browser extension, no network), say which
and what was substituted.

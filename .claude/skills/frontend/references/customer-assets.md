# Customer asset batches: compare, extract, implement

Read this when a new batch of customer flyers, decks, or videos arrives to be turned into site
changes.

## Where batches land

```
~/workspace/radarprofiles/                  # older, loose files
~/workspace/radarprofiles/<YYYY-MM-DD>_files/   # dated batches
```

Batches often contain a `.zip` that just duplicates the loose files. Check with `unzip -l`
before extracting anything.

## The workflow that actually works

**The customer sends marketing collateral, not website mockups.** Treat them as a content
spec, never as a pixel target. The critical move is finding which new asset is a *revision of
an asset the site was already built from*:

```bash
md5sum ~/workspace/radarprofiles/*.jpg src/assets/images/*.jpg
```

In Aug 2026 this proved `fliers.jpg` → `flyer-overview.jpg` and `fliers_2.jpg` →
`flyer-pricing.jpg` were byte-identical, meaning the site was built from that flyer pair. The
new `radarpro_img_1.png` used the same template as `fliers_2.jpg`, which turned a vague "here
are some images" into an exact old→new diff (prices, phone, address, tagline, one new
disclaimer line).

Do that comparison **before** planning anything.

**Expect the batch to contradict itself.** The Aug 2026 batch carried six different logos, six
taglines, and four incompatible business definitions (monitoring service / security solutions /
security & IT solutions / systems integrator / a subscription card for motorists). Contact
details disagreed across assets and with the live site. Do not silently pick one. Surface the
conflicts and ask which is authoritative. Assets that contradict the agreed positioning stay
unimplemented, and say so explicitly in the final report.

**Read every asset visually.** Never infer content from a filename. Read images directly; read
PDFs page by page; sample video frames into a contact sheet.

## Toolchain

`pdfimages`, `pdftoppm`, `pdftotext`, `ffmpeg`, and headless `google-chrome-stable` are
available. **ImageMagick is not installed** (`magick` / `convert` both missing), so use `ffmpeg`
for all cropping, scaling, and format conversion.

### Text, verbatim

```bash
pdftotext -layout deck.pdf out.txt
```

Use this for company statements rather than transcribing from the rendered page. Watch for
source defects: the RadarPro deck had "RESPPONSIVENESS", a Vision slide whose body text began
"RadarPro's *mission* is to…", and leftover "Lorem ipsum" on the Mission/Vision slide.

### Images: prefer embedded objects over page renders

```bash
pdfimages -list -f 6 -l 6 deck.pdf          # inventory one page
pdfimages -png  -f 6 -l 6 deck.pdf out/p6   # extract originals
```

Embedded objects are the original bitmaps, sharper than re-rasterising. The six "Industries
We Serve" photos came out this way as separate objects.

**Audit every page before declaring completeness.** This loop finds substantial images while
skipping the repeated header/logo objects:

```bash
for p in $(seq 1 15); do
  pdfimages -list -f $p -l $p deck.pdf |
    awk -v P=$p 'NR>2 && $3=="image" && $4>250 && $10!=54 && $10!=57 {print P, $10, $4"x"$5}'
done
```

Skipping this once meant shipping ATEX product cards with no product photos.

### When to render the page instead

Some slides bleed an image off the edge, so the embedded object is a *partial* subject. Render
and crop the composed page instead:

```bash
pdftoppm -r 200 -f 12 -l 12 -png deck.pdf out/p    # 960x540pt page -> 2667x1500
```

**Page-number badges sit in the bottom-right corner of rendered slides.** Crop boxes must
dodge them; check the corner of every crop.

### Nailing crop boxes

Overlay a grid, read coordinates off it, then crop:

```bash
ffmpeg -i page.png -vf "crop=800:1400:1867:100,drawgrid=w=80:h=140:t=3:c=red@0.9,scale=400:-1" grid.png
ffmpeg -i page.png -vf "crop=W:H:X:Y,scale=420:-2" -q:v 4 out.jpg
```

Always view the result before accepting it.

### Logos

Partner logos come in two flavours and need different treatment, so `partnersData.js` carries
a `plate` field:

- `plate: 'light'`: dark-on-white artwork, needs a white chip
- `plate: 'dark'`: white/bright-on-dark artwork, sits on the page's own dark surface

Prefer a source where logos sit on genuine white cards (the "Stronger Together" poster) over a
deck slide with a grey wash. For a logo only available on a wash, lift the background toward
white with `curves`, because **`colorlevels` segfaults** in this ffmpeg build:

```bash
ffmpeg -i in.png -vf "crop=W:H:X:Y,curves=all='0/0 0.55/0.58 0.86/1 1/1'" out.png
```

### Video

Customer video may be absurdly encoded (the promo was 120 fps, 6.9 MB for 30 s). Re-encode:

```bash
ffmpeg -i in.mp4 -vf "fps=30,scale=960:-2" -c:v libx264 -crf 28 -preset slow \
  -profile:v high -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart out.mp4
```

That got 6.9 MB → 1.2 MB. It also **fully demuxes and remuxes the container**, which discards
malformed structure from the original, a real sanitisation benefit rather than just a size win.

Video lives in `public/` and is referenced as an absolute path (`/radarpro-promo.mp4`), not
imported. Posters: subtitles are often burned in from frame 0, so there may be no clean frame.
The title card (`-ss 0.1`) is usually the best available.

Contact sheet for choosing frames:

```bash
ffmpeg -i in.mp4 -vf "fps=1/2.5,scale=480:-1,tile=4x3" -frames:v 1 grid.png
```

## Before deleting an old asset

Grep first, and check `README.md` too, since it embeds a preview image.

```bash
grep -rn "flyer-" src/ index.html README.md
```

Old flyers showing superseded pricing **must not stay on the page**. When one is removed,
something current has to replace it.

## Provenance: flag, don't assume

Images embedded in a customer deck are usually stock or unattributed. They are *not* photos of
the customer's own sites, and licence status is unknown. Reuse on a live commercial site is a
stronger claim than use in a pitch deck. Always raise this in the final report, especially for
identifiable real places, recognisable people, and AI-generated video depicting people.

Do not publish a named individual's headshot from a deck unless asked.

## Report format

Finish with a per-asset breakdown: `Changed / Added / Removed / Unchanged`, then components
and data touched, then **actual** validation results, then open questions. Never claim a check
ran that didn't. Call out large commercial changes (a 20–33% price rise, a changed phone
number) explicitly rather than burying them in a list.

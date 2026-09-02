# Design direction: for new surfaces only

Adapted from `anthropics/skills` → `skills/frontend-design` (Apache 2.0, see `../LICENSE.txt`).

Read this only when the visual direction is **not** already decided: a new page, a rebrand,
a "make it look different" request. For ordinary work on the existing landing page, the
direction is settled, so go back to `SKILL.md` and follow the design system.

Approach it as the design lead at a small studio known for giving every client an identity
that couldn't be mistaken for anyone else's. Make deliberate, opinionated choices about
palette, typography, and layout that are specific to this brief, and take one real
aesthetic risk you can justify.

## Ground it in the subject

If the brief doesn't pin down what the product is, pin it yourself before designing: name
the concrete subject, its audience, and the page's single job, then say which you chose.
The subject's own world, meaning its materials, instruments, artifacts, and vernacular, is where
distinctive choices come from. For radar/monitoring work that means sweeps, returns,
signal, coverage, uptime, latency, the actual visual language of instruments, not stock
SaaS gradients. Build with the brief's real content throughout, and use anything you
already know about the user's preferences and past work as a hint.

## Principles

**The hero is a thesis.** Open with the most characteristic thing in the subject's world,
in whatever form fits: a headline, an image, an animation, a live demo, an interactive
moment. A big number with a small label plus supporting stats plus a gradient accent is the
template answer, so use it only if it is genuinely the best one.

**Typography carries the personality.** Pair display and body faces deliberately, not the
families you'd reach for on any project. Set a clear scale with intentional weights,
widths, and spacing. The type treatment should itself be memorable, not a neutral delivery
vehicle. (This project currently runs Inter for everything, which is a default, and a new
surface is the place to question it.)

**Structure is information.** Numbering, eyebrows, dividers, and labels should encode
something true about the content. `01 / 02 / 03` is only right when the content really is a
sequence such as a process or a typed timeline. Question the device before you reach for it.

**Motion is deliberate.** Decide where, and whether, animation serves the subject: a
page-load sequence, a scroll reveal, hover micro-interactions, ambient atmosphere. One
orchestrated moment lands harder than scattered effects. Extra animation is a leading
signal that a design was AI-generated.

**Match complexity to the vision.** Maximalist directions need elaborate execution; minimal
directions need precision in spacing, type, and detail. Elegance is executing the chosen
vision well.

## Anti-default calibration

Right now AI-generated design clusters around three looks:

1. Warm cream background (near `#F4F1EA`), high-contrast serif display, terracotta accent.
2. Near-black background with a single bright acid-green or vermilion accent.
3. Broadsheet layout: hairline rules, zero border-radius, dense newspaper columns.

All three are legitimate for some briefs, but they show up regardless of subject, which
makes them defaults rather than choices. Where the brief pins down a direction, the brief's
own words win, including when it asks for one of these. Where it leaves an axis free,
don't spend that freedom on a default.

Worth naming a fourth, because it's the one this repo is closest to: **dark navy + glass
cards + blue glow + `backdrop-blur`**. That is the committed identity of the current
landing page and correct to maintain there, but if you're designing a *new* surface, it is
a default too, and reaching for it again should be a decision, not a reflex.

## Process: brainstorm → plan → critique → build → critique again

**Pass 1, a compact token system**, written down before any code:

- **Color**: 4–6 named hex values.
- **Type**: faces for 2+ roles: a characterful display face used with restraint, a
  complementary body face, and a utility face for captions or data if needed.
- **Layout**: a layout concept in one-sentence prose plus ASCII wireframes, so you can
  compare alternatives cheaply.
- **Signature**: the single element this page will be remembered by, embodying the brief.

**Pass 2, review the plan against the brief before building.** Work through a similar
generic prompt in your head; if you'd have arrived at the same place, that part is a
default, not a choice. Revise it and say what changed and why. Only once the plan is
confirmably specific do you write code, then follow it exactly, deriving every color and
type decision from it.

Do this planning in thinking. Show the user ideas only when confidence is high enough that
they'll delight.

## Restraint and self-critique

Spend boldness in one place: let the signature element be the memorable thing and keep
everything around it quiet. Cut decoration that doesn't serve the brief, though not taking
a risk is itself a risk. Hold the quality floor without announcing it: responsive to
mobile, visible keyboard focus, reduced motion respected. Critique your own work as you
build, with screenshots where the environment allows.

Chanel's rule applies: before leaving the house, look in the mirror and take one accessory
off.

## Writing

Words are design material, not decoration, with the same intentionality as spacing and color.
Before writing, ask what the design needs to say and how it best helps someone navigate.

- Write from the end user's side of the screen. Name things by what people control and
  recognize, never by how the system is built. A person manages notifications, not webhook
  config. Describe what something does plainly instead of selling it. Specific beats clever.
- Active voice by default. A control says exactly what happens: "Save changes," not
  "Submit." An action keeps its name through the whole flow, so "Publish" produces
  "Published."
- Failure and emptiness are moments for direction, not mood. Say what went wrong and how to
  fix it, in the interface's voice. Errors don't apologize and are never vague. An empty
  screen is an invitation to act.
- Conversational, tuned register: plain verbs, sentence case, no filler, tone matched to
  brand and audience. Each element does exactly one job.

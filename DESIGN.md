---
name: Decolonial Dialogues
description: The Alhambra's own red clay as the ground, real Nasrid tilework as the page's material, and gold as the one colour that reads on it.
colors:
  clay: "#6b2e22"
  clay-raised: "#7a382a"
  clay-sunk: "#4a1e16"
  paper: "#f4eadc"
  muted: "#cfae9f"
  faint: "#b48675"
  rule: "#8c4635"
  saffron: "#d9a93b"
  saffron-lit: "#efc463"
  teal: "#6bc4b0"
  azure: "#8fbce0"
typography:
  display:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.9rem, 9vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2rem, 4.4vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(1.3rem, 2.1vw, 1.7rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  quote:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(1.45rem, 3vw, 2.15rem)"
    fontWeight: 500
    lineHeight: 1.32
    letterSpacing: "-0.018em"
  numeral:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(3.25rem, 8vw, 5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-large:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  ui:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  ui-nav:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Alegreya Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.14em"
rounded:
  none: "0"
  hairline: "2px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-lg: "32px"
  rule-gap: "36px"
  block: "80px"
  section: "112px"
  section-sm: "144px"
  section-lg: "176px"
components:
  button-primary:
    backgroundColor: "{colors.saffron}"
    textColor: "{colors.clay-sunk}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.saffron-lit}"
    textColor: "{colors.clay-sunk}"
  button-primary-compact:
    backgroundColor: "{colors.saffron}"
    textColor: "{colors.clay-sunk}"
    typography: "{typography.ui-nav}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.ui-nav}"
  nav-link-hover:
    textColor: "{colors.paper}"
  field-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  rule-item:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "36px 0"
---

# Design System: Decolonial Dialogues

## Overview

**Creative North Star: "The Red Fort"**

The Alhambra is named for the colour it is built from — *al-qal'a al-hamra*, the red fort, rammed earth the colour of dried blood in the sun. Granada is also the Spanish word for pomegranate, and the fruit is the city's own emblem. Those two facts resolved into one decision: the ground of the page is the clay, which means the ground of the page is the pomegranate. The fruit stopped being a small red mark on a dark page and became the page.

What reads on a red ground is gold. That is not a preference; it is what the Nasrids did — the inscriptions that run around every hall of the Alhambra are gold on red, because red absorbs every other hue and returns only the metal. Saffron therefore carries the booking action, the price, and every accent that has words in it. Teal and azure come off the same glazed tile and stay silent: they are drawn marks, never text.

The page's material is the tilework itself. Real photographs of Nasrid *alicatado* — hand-cut glazed tile, not a drawn pattern and not a repeating CSS motif — run full-bleed at the seams between the page's three held moments. In the palaces the tiled dado runs along the base of every plastered wall and is how a change of surface is announced; the page uses it the same way.

The arrangement is still the category standard: the familiar course page a visitor already knows how to read, with Emergence Magazine and Orion as the quality bar. The ambition is spent on execution — generous typography, restrained density, real photography carrying the weight, and exactly one authored moment of motion.

**Key Characteristics:**
- Clay ground (`clay`), three tonal steps, never a light theme and never a neutral dark
- One superfamily — Alegreya and Alegreya Sans — for display, body, and UI alike
- Saffron carries every accent that has words; teal and azure are drawn marks only
- Full-bleed photography and full-bleed tilework; no framed or inset images
- Hairline rules and tonal ground shifts instead of cards, panels, or shadows
- Square corners everywhere except pill actions and circular portraits
- One authored reveal in the entire page

## Colors

A three-step clay ramp taken from the Alhambra's rammed earth, limewash for type, and four glaze colours lifted from the tile the client supplied as the reference.

### Grounds
- **Clay** (`{colors.clay}`): The page ground and the default section ground. The Alhambra's own red earth, and Granada's pomegranate.
- **Clay Raised** (`{colors.clay-raised}`): The alternate band ground. Every second major section (manifesto, on-the-ground, voices, getting-there) sits on it. This tonal step is the sectioning device; it replaces the card.
- **Clay Sunk** (`{colors.clay-sunk}`): The well behind every photograph, set both on the `Photo` wrapper and on the base `img` element so no image can ever flash white while it loads. It is also the type colour inside a filled saffron pill.

### Type
- **Paper** (`{colors.paper}`): Body and heading text — 8.7:1 on clay. Warm limewash, never pure white.
- **Muted** (`{colors.muted}`): Secondary running text — supporting paragraphs, captions, attributions, nav at rest, field labels. 5.0:1, and tinted from the ground rather than greyed.
- **Faint** (`{colors.faint}`): Decorative and structural only — link underline strokes, the excluded-item minus marks, the hero separator dot. 3.2:1 clears the graphics floor and nothing more.
- **Rule** (`{colors.rule}`): The one divider value, at 1.5:1. Every hairline in the build is a 1px border in this colour.

### Glazes
- **Saffron** (`{colors.saffron}`): 4.8:1. The booking action's fill, the early-rate line, the pomegranate mark, the follow link, the focus ring. Gold on red is the Alhambra's own contrast.
- **Saffron Lit** (`{colors.saffron-lit}`): The hover ground for the primary pill. The contrast lifts rather than dimming; the type stays `clay-sunk`.
- **Teal** (`{colors.teal}`): 4.9:1. The included-item checks. A drawn mark, never words.
- **Azure** (`{colors.azure}`): 5.1:1. The mail glyph and the Instagram glyph. A drawn mark, never words.

### Named Rules

**The Gold Voice Rule.** Anything the accent has to say, it says in saffron. Teal and azure exist to mark, not to speak: a check, a glyph, a stroke. If a teal or azure element acquires words, it becomes saffron or `paper`. This is what keeps four colours from reading as four colours.

**The Ground Is The Fruit Rule.** There is no red accent, because the page is already red. A pomegranate-coloured mark on clay measures 1.5:1 and disappears. The pomegranate survives as the drawn icon — in saffron — and as the ground itself.

**The Legibility Floor Rule.** Anything carrying text on clay clears 4.5:1, and the values above are the measured figures, not estimates. Below that floor a value is decoration — a rule, a marker, an underline stroke — and may never be given words to carry. This is why the closing section's wash is capped at 60% clay: any heavier and `paper` fails over the brightest passage of sky above the gate; any lighter and the gate itself stops being visible.

**The Two-Ground Rule.** Depth comes from alternating `clay` and `clay-raised` bands with a hairline at the seam. That alternation is the whole sectioning vocabulary. A section that "needs" a card is a section that needs the other ground.

## Typography

**Display Font:** Alegreya (with Georgia, serif)
**Body Font:** Alegreya (with Georgia, serif)
**Label / UI Font:** Alegreya Sans (with system-ui, sans-serif)

**Character:** Alegreya is a literature face by Juan Pablo del Peral — calligraphic, warm, and built for long passages of argument, which is exactly what this page asks a stranger to read. Its sans is the same superfamily, so labels and running text share one skeleton instead of being two unrelated fonts bolted together. Headings run at weight 500 with a slight negative tracking (`-0.018em`) and a tight 1.08 leading; body runs loose at 1.7. The gap between those two leadings is where the page's editorial calm comes from.

### Hierarchy
- **Display** (500, `clamp(2.9rem, 9vw, 6rem)`, 1.08): The programme name in the hero, over the scrim. One per page.
- **Headline** (500, `clamp(2rem, 4.4vw, 3.1rem)`, 1.08): Major section headings. Secondary sections step down to `clamp(1.75rem, 3.6vw, 2.5rem)`; the manifesto statement steps up to `clamp(1.85rem, 4.6vw, 3.1rem)` at 1.22 leading because it is a sentence, not a label.
- **Title** (500, `clamp(1.3rem, 2.1vw, 1.7rem)`, 1.08): Curriculum entries, on-the-ground blocks, section sub-headings. Faculty names sit at a fixed `1.4rem`.
- **Quote** (500, `clamp(1.45rem, 3vw, 2.15rem)`, 1.32): The featured testimonial only. Supporting testimonials drop to body scale (`1.05rem`) on `paper/90`.
- **Numeral** (500, `clamp(3.25rem, 8vw, 5rem)`, 1): The price. The only place a number is given display treatment; the superseded price sits beside it in `ui` at `1.5rem`, struck through with a 1px decoration.
- **Body** (400, `1.0625rem`, 1.7): All running text. Constrained to the single measure (34rem, ~68ch) by the `.measure` class. Lead paragraphs step to `1.125rem` at 1.625.
- **UI** (500, `0.875rem`–`1.125rem`, 1.5): Alegreya Sans wherever the text is an instrument rather than a passage — buttons, prices, captions, attributions, footer.
- **UI Nav** (500, `1.0625rem`, 1.5): The header's own step. The bar is the only permanent chrome on a page of otherwise generous type, and at the plain `ui` size — or without its weight, which the build had dropped — it read as a strip laid over the design rather than part of it. Used for the section anchors and the header pill from `sm` up.
- **Label** (600, `0.75rem`, `0.14em`, uppercase, `muted`): Field labels in the cost specification list and the included/excluded column heads. A name for a value, never a decorative line above a heading.

### Named Rules

**The One Family Rule.** Alegreya and Alegreya Sans, and nothing else. Display and body are the same face at different sizes; the sans is the same superfamily. Do not pair in a third typeface for "contrast" — the contrast here is size and leading, not family. System display faces are out entirely.

**The Corrected Word Space Rule.** Alegreya Sans ships a 0.175em word space against Arial's 0.278em, which at nav and label sizes reads as run-together words. Every use of the sans therefore carries `word-spacing: 0.09em` — it is baked into both `.ui` and `.label`. There is no legitimate use of Alegreya Sans in this system without it.

**The One Measure Rule.** Every passage of running text is capped at 34rem (~68ch) via `.measure`. A paragraph wider than the measure is a bug, not a layout choice.

**The Label Is Not A Kicker Rule.** The uppercase tracked label is a name for an adjacent value — "Dates", "Included", "To book". It never appears above a heading as an eyebrow or category tag.

## Layout

A single centred column: `max-width: 72rem` with a 20px gutter, opening to 32px from 640px up. The container is one constant applied identically to every section, so section grounds and full-bleed photographs change but the text spine never shifts.

Vertical rhythm is deliberately generous and stepped by breakpoint: major sections run 112px → 144px (≥640px) → 176px (≥1024px); secondary sections (getting-there, the Instagram panel) run 96px → 128px. Inside a section, the heading block is followed by an 80px gap before its content grid, growing to 96px on desktop. Rule-separated list items carry 36px of padding above and below.

Two breakpoints do all the work — 640px (`sm`) and 1024px (`lg`). Below `lg`, everything is a single column. At `lg`, the recurring split is an asymmetric two-column grid: a narrow rail (`minmax(0, 22rem)`) holding the heading and its standfirst, against a fluid content column, separated by a 96px gutter. In the curriculum this rail is sticky (`top: 8rem`) so the section heading stays present while its five entries scroll past. The cost section inverts the same grid — fluid content first, a 26rem rail of specification second.

Photographs are either absolutely positioned to fill a `100svh` hero (or, for the closing section, the section's own natural height), or block wells with an explicit aspect ratio: 4/3 on phones widening to 16/9 for the "on the ground" arch view; 5/1 widening to 9/1 and, for the tile course only, on to 12/1 — the inscription course stays capped at 9/1, since fine carved relief needs more height to read than bold glazed colour; 4/5 for the paired portrait-format city views. The two city plates sit level and equal in a two-column grid — they are a pair, not a stagger.

The header is fixed and 72px tall, growing to 80px from 640px and 88px at `lg`. Anchor jumps are cleared by `scroll-padding-top: 9rem`, tightening to `6.5rem` at `lg` where the header no longer carries its second anchor row.

### Named Rules

**The Full-Bleed Rule.** Photographs run to the edges of their section or fill a defined aspect well. They are never inset in a frame, never given a border, never rounded, and never captioned inside a box. The only exception is the circular faculty portrait.

**The Hairline Rule.** A 1px `rule`-coloured border is the only divider in the system: section seams, list separators, disclosure edges. No thick rules, no double rules, no decorative dividers other than the Tile Course.

## Elevation & Depth

This system has no shadows at all. There is not a single `box-shadow` in the build, and none should be added.

Depth is built from three devices instead. First, **tonal layering**: `clay-sunk` sits behind photography, `clay` is the page, `clay-raised` lifts alternate bands — a three-step ramp with roughly 8–10 points of lightness between steps. Second, **scrims**: type over a photograph always sits on a gradient of the page ground, which is what creates the sense of the image receding behind the words. The hero uses a bottom-anchored gradient — solid `clay` from 6%, clearing through 58% at 26% and 18% at 46%, gone entirely by 64% — so the wash covers the copy and lets go fast: the Alhambra and the Sierra Nevada read clean above it rather than sitting under a tint. An earlier build carried that tint all the way to the top at 40% and read as the clay flooding the page; the closing section still uses a flat `clay/60` wash plus a short clay fade at each seam, because there the wash is the point — it is what makes `paper` legible over the overcast sky behind the gate. Third, **translucency and blur on the one floating surface**: once scrolled past the hero the header takes a `clay/92` ground with a medium backdrop blur, so it reads as glass over the page rather than as a bar sitting on top of it.

### Named Rules

**The No-Shadow Rule.** Depth is tone, scrim, and hairline. If an element seems to need a shadow to separate from its surroundings, it is on the wrong ground.

**The Scrim Rule.** Type is never set directly on a photograph. Any text over an image sits on a gradient or wash of the page ground, and the header carries its own top scrim whenever it is transparent over the hero — the Granada sky is bright enough to swallow a nav.

## Shapes

Square by default. Every section, every photograph, every rule, every disclosure, and every list item has a 0px radius; the page's geometry is rectangles and hairlines.

Curves are reserved and meaningful. The **full pill** (`9999px`) belongs to the booking action and to it alone — it is the one shape on the page that looks pressable, which is how a visitor finds the single conversion route without hunting. The **full circle** holds faculty portraits at 96px (112px from 640px). Focus rings carry a 2px radius so the outline doesn't come to a hard point.

Borders are always 1px and always `rule`, except the outline button, which lifts its border to `faint` on hover. Photographs clip with `overflow: hidden` on their wrapper so an object-position adjustment can never spill.

**The Square Corner Rule.** Radius 0 unless the element is an action pill or a portrait. A rounded card is a contradiction in this system twice over: it is a card, and it is rounded.

**The No Cards Rule.** No bordered boxes, no filled panels, no tiles. This is enforced, not aspirational — the Instagram panel was rebuilt from a bordered box into a hairline row to honour it. Content is separated by rules and grounds; if a group needs to feel distinct, give it a hairline above it and space around it.

## Components

### Buttons
- **Shape:** Fully rounded pill (`9999px`) for the primary action; square (0px) for the outline action.
- **Primary:** Saffron ground with `clay-sunk` `ui` type at weight 500, 14px/28px padding (10px/24px in the header, 16px/32px in the closing section). Carries a trailing 16px ArrowRight.
- **Hover / Focus:** Ground lifts to Saffron Lit and the type stays `clay-sunk` — the contrast rises rather than dimming. The arrow slides 4px right over 500ms. Focus shows the standard 2px Saffron ring at 3px offset.
- **Outline (secondary):** Transparent ground, 1px `rule` border, square corners, 12px/24px padding, an Azure Mail glyph on the left. Hover lifts the border to `faint`. Used exactly once, for the travel enquiry — a secondary route, visibly not the booking pill.
- **Text link:** `paper` type with a `faint` 1px underline at 4px offset; hover shifts the underline (or the text) to Saffron. Underlines are never removed.

### Navigation
- Fixed full-width header, 72px tall and growing to 80px from 640px and 88px at `lg`. Transparent over the hero with its own top scrim, taking a `clay/92` + backdrop-blur ground and a hairline bottom border once scrolled past 72px. The transition between the two states runs 500ms.
- Wordmark: Pomegranate glyph at 24px, 28px from 640px, in Saffron, beside the programme name at 18px rising to 20px, weight 500, tight tracking. Hover fades the whole lockup to 80% opacity.
- Anchors: `ui-nav` at 15px in `muted`, 36px apart, hover to `paper`. Desktop only (`≥1024px`).
- Mobile treatment: below `lg` the anchors move to their own horizontally scrollable row beneath the bar, revealed by a max-height + opacity transition only once the visitor leaves the hero — wayfinding exists everywhere it is needed without laying chrome over the opening photograph. Scrollbars are hidden in both engines.

### Photograph
The single image primitive. A caller-positioned wrapper (`overflow: hidden`, `clay-sunk` ground) around a filled `next/image`, always `object-cover`. Every local image carries generated intrinsic dimensions and a base64 blur placeholder (produced by `scripts/optimize-images.mjs` into `data/image-meta.ts`), so nothing reflows or flashes while a photograph loads. The caller owns aspect ratio and positioning; the primitive owns the well, the cover behaviour, and the placeholder. The hero image additionally settles once on load, scaling from 1.07 to 1 over 2000ms.

### Field Label + Value
The specification pattern: an uppercase tracked `label` in `muted` above an 8px gap and a body-scale value in `paper`. Rendered as a two-column definition list above a hairline. This is how any factual block — dates, place, length, route — is presented; it is the system's replacement for an info card.

### Rule-Separated List
The recurring content unit. Items are stacked with a 1px `rule` top border and 36px of vertical padding, with the first item's border and top padding suppressed and the last item's bottom padding removed, so the group reads as a single ruled column rather than a stack of rows. Used for the curriculum, the supporting testimonials, and the Instagram row.

### Disclosure
Native `<details>` with the browser marker suppressed in both engines and replaced by a drawn Chevron that rotates 90° over 300ms when open. Summary is `ui` at 14px in `muted`, hover to `paper`, sitting above a hairline. The photography credits ship `open` by default, because CC BY and CC BY-SA require visible attribution and a collapsed panel does not meet that; it stays collapsible so a reader can put it away.

### Icon Set
Seven authored SVGs on a 24×24 viewbox, all at a single 1.4 stroke weight with round caps and joins, `fill: none`, `stroke: currentColor`: Pomegranate, Check, Minus, ArrowRight, Mail, Instagram, Chevron. Sized 14–40px at the call site and coloured by text colour. The Pomegranate leads with its crown, because the crown is what makes the fruit legible at 24px, and it is drawn in Saffron — a red fruit on a red ground is not a mark.

### Tile Course
The system's one ornamental device, and it is a photograph rather than a drawing: a full-bleed band of the Alhambra's own surfaces. In the palaces the tiled dado runs along the base of every plastered wall and is how a change of surface gets announced; here it opens the page's three held movements, and each one is a different surface:

- **The promise** (manifesto): hand-cut zellij from the Alhambra — a diamond lattice of turquoise, deep green and gold, each cell bordered in white. Runs 5/1 on phones, 9/1 from 640px and 12/1 at `lg` — bold repeating colour reads fine even at the thinnest slice.
- **The place** (on the ground): the city itself, seen through a carved Nasrid arch, run at full photograph scale, 4/3 on phones widening to 16/9 — not the ground underfoot but the argument in the distance, because that section's whole claim is that Granada is not the backdrop. An earlier crop pushed this to 21/9 and lost the arch itself, reading as an abstract sliver rather than a frame; kept gentler, the whole arch stays legible.
- **The testimony** (voices): carved plaster from the Alhambra, a band of repeating Arabic inscription in deep relief. Written words above written words. Capped at 5/1 on phones and 9/1 from 640px up — fine carved relief needs more height to read than bold glazed colour does, so this one never reaches the tile course's 12/1.

Both the tile course and the inscription course, and both paired plates in "On the ground," are sourced Unsplash photography rather than Wikimedia Commons — see `imageCredits` for photographer and licence. The tile course and the inscription course are two crops of the same wall, tile below and carved plaster above, which is honest rather than accidental: it is how the Alhambra itself is built.

It replaced a drawn ornament — a pomegranate flanked by two hairlines — which could not survive standing next to real tile.

**The Three Courses Rule.** Three bands in the page, one per held movement, each a different surface. A fourth is decoration, and a repeat is wallpaper.

**The Prepared Slice Rule.** A course is a thin horizontal slice: at 12/1 on a retina desktop the browser keeps roughly the middle 40% of a band and throws the rest away, so a source that looks fine in a viewer lands visibly soft on the page. Every course is therefore cropped to 5/1 — the tallest ratio it ever runs at — from an original of 5,000px or more, kept at 3,600–3,840px wide, and exempted from the 2,400px cap in `scripts/optimize-images.mjs`. Judge a candidate by a 1:1 crop at device pixels, never by a thumbnail.

## Do's and Don'ts

### Do:
- **Do** give saffron every accent that has words in it, and keep teal and azure to drawn marks. Four colours read as one system only while that line holds.
- **Do** clear 4.5:1 on the clay ground for anything carrying words, and measure it rather than eyeballing it — a saturated mid-tone ground flatters colours that fail.
- **Do** ship `word-spacing: 0.09em` with every use of Alegreya Sans — it is already in `.ui` and `.label`, and any new sans rule must carry it too.
- **Do** cap running text at the single 34rem measure (~68ch).
- **Do** separate content with a hairline and a change of ground tone.
- **Do** put a gradient scrim under any type that sits over a photograph.
- **Do** draw new icons at 1.4 stroke on a 24×24 viewbox, `fill: none` / `stroke: currentColor`, to match the set.
- **Do** route every image through the `Photo` primitive so it inherits its blur placeholder, its `clay-sunk` well, and its intrinsic dimensions.
- **Do** caption a photograph that shows a specific place, and keep captions off photographs used as material. A plate names what it shows; a tile course names nothing.
- **Do** credit every sourced photograph in `imageCredits` with its licence and source URL before it appears on the page, and set `cropped: true` where the original was cut down — CC BY-SA asks that changes be stated.
- **Do** keep the pill shape exclusive to the booking action, so the single conversion route is findable by shape alone.

### Don't:
- **Don't** add a card, a bordered box, a filled panel, or a framed block. The Instagram panel was rebuilt from a box into a hairline row to hold this line.
- **Don't** add a `box-shadow`. There are none in this system; depth is tone, scrim, and hairline.
- **Don't** round anything that is not the booking pill or a portrait.
- **Don't** introduce a third typeface, or a system display face. One superfamily, two sizes of idea.
- **Don't** use a unicode glyph, emoji, or icon font anywhere. Icons are authored SVG, including the disclosure marker — the native `<details>` triangle is suppressed on purpose.
- **Don't** set the uppercase tracked label as an eyebrow or kicker above a heading. It names an adjacent value or nothing.
- **Don't** add a second authored motion. See the rule below.
- **Don't** invert to a light ground or drift the clay toward brown, maroon or terracotta-orange. The value is the Alhambra's rammed earth and it is the single decision the whole palette hangs from.
- **Don't** stagger a pair of photographs, or hang a photograph above a text block it does not describe. If an image sits above a heading, a reader will read it as that heading's illustration — so either make it one, or separate them.
- **Don't** reproduce a tile pattern as CSS, SVG or a repeating background. The tilework on this page is photographs of hand-cut glazed tile, and the irregularity is the point.
- **Don't** let a photograph render without a placeholder or an explicit aspect — a white flash or a reflow on this page reads as a broken page, because the photography is the material.

### Named Rules

**The One Moment Rule.** The page has exactly one authored reveal: the curriculum list, whose items rise 18px out of a 6px blur on a 900ms exponential ease-out, staggered 70ms apart. It was removed from every other section during the finish review, and that is the standing rule — motion elsewhere is state response only (hover colour, the 4px arrow nudge, the 500ms header settle, the 300ms chevron, the one-time 2000ms hero scale). Adding a second reveal does not double the effect; it destroys the first one.

**The Visible-By-Default Rule.** Content ships visible in the served HTML. The reveal is opted into by a pre-paint inline script that only hides elements once it has confirmed it can bring them back — gated on `IntersectionObserver` support and `prefers-reduced-motion: no-preference`, with a 1.5s watchdog that reveals anything still hidden. No-JS, reduced-motion, and failed-observer visitors get the whole page immediately. Any future motion must be built the same way round.

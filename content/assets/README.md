# Image assets

Everything currently in `from-pdf-lowres/` was extracted from the Canva prospectus
(`content/Decolonial Dialogues-8_compressed.pdf`). It is **reference only** — every file is
too small to build with. Nothing in a `from-pdf-lowres/` folder should ship.

## Drop faculty photos here → `faculty/`

Four files, these exact names (lowercase, hyphens, `.jpg` or `.png`):

| File | Person |
|---|---|
| `chaimaa-boukharsa.jpg` | Chaimaa Boukharsa |
| `ramon-grosfoguel.jpg` | Ramón Grosfoguel |
| `medina-whiteman.jpg` | Medina Whiteman |
| `katya-colmenares.jpg` | Katya Colmenares |

Put them directly in `faculty/`, next to the `from-pdf-lowres/` folder — not inside it.

**What works best:**
- **Square, at least 1000×1000.** Larger is fine; oversized gets downscaled at build time.
- **Head and shoulders, face roughly centred** and not near an edge. Portraits get cropped to
  a circle or a rounded shape, so anything important near the corners is lost.
- **Original camera or headshot files**, not screenshots, not re-exports from Instagram or a
  slide deck. The current versions are 270–381px because they went through Canva.
- Backgrounds don't need removing.

If any of the four can't be re-supplied at that size, say which — a deliberate treatment for
one small portrait is fine; four mismatched sizes is not.

## Drop Granada photography here → `granada/`

No fixed filenames. Descriptive names are enough (`alhambra-courtyard.jpg`,
`albaicin-rooftops.jpg`).

**Ranked by what actually serves the site:**

1. **Your own photos from past editions.** Participants in the Albaicín, faculty mid-lecture,
   the group somewhere in the city. These outrank any Alhambra stock shot, because the primary
   visitor's real question is *"would I be out of place here?"* — and only a photo with actual
   people in it answers that. If any exist from 2024, 2025 or April 2026, they are the single
   most valuable thing you could add.
2. **Alhambra and Albaicín architecture** — courtyards, tilework, arches, the city from the
   Mirador de San Nicolás. **At least 2400px on the long edge** for anything full-width.
3. Landscape and light: the Sierra Nevada behind the city, late afternoon on the walls.

**On sourcing, two things to know.** Wikimedia Commons and Unsplash both carry high-resolution
freely-licensed Alhambra imagery, and Commons requires attribution under CC BY-SA — worth
checking each file's specific licence rather than assuming. Separately, the Patronato de la
Alhambra has its own rules on **commercial** photography inside the monument; if you're supplying
your own shots taken there and the site is selling places on a paid course, that's worth a check
with them. Neither is a blocker, both are cheaper to resolve now than after launch.

## `textures/`

The two background textures from the prospectus. Also low-resolution, also reference only —
whether the site uses anything like them is a `DESIGN.md` decision, not a given.

# Monierate — Style Reference (Compact)
> dense rate data in Crayola blue on clean white

**Theme:** light (companion mobile app: dark navy)

Monierate renders currency data as a utilitarian, airy dashboard-site: hairline-bordered white cards on near-white canvases, one saturated blue doing all the interactive work, and green/red reserved strictly for rate movement. Type is a three-font system: Onest for headings and buttons (600, -1% tracking), Instrument Sans for body and UI, and JetBrains Mono for every numeral — ticker prices, rate tables, % changes.

## Colors

| Token | Value | Role |
|---|---|---|
| `brand` | `#1F75FE` | Buttons, links, active states, focus glow |
| `brand-deep` | `#134698` | Gradient end, pressed states |
| `ink` | `#000000` | Primary text |
| `text-secondary` | `#737373` | Supporting copy |
| `text-tertiary` | `#B3B0B0` | Metadata, placeholders |
| `paper` | `#FFFFFF` | Cards, page canvas |
| `surface` | `#F8F8F8` | Section backgrounds |
| `surface-tint` | `#F2F7FF` | Brand-tinted panels |
| `border` | `#F2F2F2` | Default hairline stroke |
| `border-strong` | `#DDDDDD` | Inputs, dividers |
| `positive` | `#03D418` | Rate up |
| `negative` | `#E31D1C` | Rate down |
| `warning` | `#EFB255` | Alerts |
| `navy` | `#010C20` | Dark app surfaces, footer |

## Typography — three-font system (all via Google Fonts)

| Font | Token | Role |
|---|---|---|
| **Onest** | `--font-head` | h1–h6 (600, -1% LS), buttons (600), tab pills, highlight-card figures |
| **Instrument Sans** | `--font-body` | Default on body/html + a/button/input/p/span/div — all UI and copy (400) |
| **JetBrains Mono** | `--font-mono` | Every numeral: ticker prices, % changes, buy/sell table cells (bold, 17px desktop) |

| Role | Font / Size / Weight | LH / LS |
|---|---|---|
| Micro label | Instrument Sans 10 · 500 | 1.0 / 0 |
| UI default / table cell | Instrument Sans 12 · 500 | 1.0 / -1% |
| Body | Instrument Sans 14 · 400–500 | 1.0–1.5 / -1% |
| Rate numeral | JetBrains Mono 12–17 · 700 | 1.0 / 0 |
| Card title | Onest 16 · 600 | 1.0 / -1% |
| Subhead | Onest 18–20 · 500–600 | 1.0 / -1% |
| Section heading | Onest 24 · 600 | 1.5 / -1.9% |
| Page title | Onest 28–32 · 600 | 1.0 / -1% |
| Hero | Onest 48 · 600 | 1.0 / -1% |
| Display stat | Onest 80–100 · 600 | 1.0 / 0 |

## Shape & Space

- **Radius:** 5 (inputs/chips) · 10 (cards) · 50+ (pill buttons)
- **Spacing scale:** 2 · 4/5 · 8 · **10 (default gap & padding)** · 15 · 20 · 25 · 30
- **Borders:** 1px hairline `#F2F2F2`
- **Shadows:** `0 4 15 #F2F2F2` (cards) · `0 0 0 rgba(31,117,254,.08)` (brand glow)
- **Buttons:** pill, 30–36px tall, brand fill, white 12–14px Onest 600 label
- **Gradients:** brand `#1F75FE→#134698`; bitcoin `#F9AA4B→#F7931A`

## Layout

Desktop 1512px, content column ~1372px; mobile 430px. Long-scroll pages end in News → Converter → CTA banner → footer (8 nav columns).

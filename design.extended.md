# Monierate — Style Reference (Extended)
> dense rate data in Crayola blue on clean white

**Theme:** light (companion mobile app runs a dark navy theme)

Monierate renders currency-exchange data as a utilitarian, airy dashboard-site. White hairline-bordered cards float on near-white section canvases; a single saturated blue (#1F75FE) carries every interactive affordance — buttons, links, active tabs, focus glows — while green and red are rationed strictly to rate movement. Typography is a three-instrument system with strict division of labor: Onest (600, -1% tracking) speaks in headings, buttons, and tab pills; Instrument Sans carries all body and UI text; and JetBrains Mono owns every numeral — ticker prices, % changes, and rate-table cells — so columns of naira figures align like a terminal. Components read as flat and data-first: 1px #F2F2F2 strokes, whisper shadows, 5px radii on inputs, 10px on cards, and fully-round pills for primary actions. Pages are long-scroll editorial stacks that always resolve into the same closing sequence — Latest Exchange News, a currency converter module, a full-bleed CTA banner, then a deep 8-column footer.

---

## Tokens — Colors

| Name | Value | Token | Role |
|---|---|---|---|
| Crayola Blue | `#1F75FE` | `--color-brand` | Primary buttons, links, active tabs, chart lines, focus glow — the only interactive hue in the system |
| Royal Navy | `#134698` | `--color-brand-deep` | Deep end of the brand gradient, pressed/hover states |
| Ice Blue | `#F2F7FF` | `--color-brand-tint` | Brand-tinted card and banner backgrounds |
| Powder Blue | `#EDF0F4` | `--color-surface-cool` | Table headers, cool panels, chart plot areas |
| Ink Black | `#000000` | `--color-ink` | Primary text, headline numerals |
| Slate Gray | `#737373` | `--color-text-secondary` | Supporting copy, rate context lines, timestamps |
| Silver Gray | `#B3B0B0` | `--color-text-tertiary` | Metadata, placeholders, disabled labels; also mid-weight strokes |
| Dim Gray | `#A3A3A3` / `#858585` | `--color-text-muted` | Least-emphasized captions |
| Paper White | `#FFFFFF` | `--color-paper` | Page canvas, cards, button labels — the dominant surface |
| Fog White | `#F8F8F8` | `--color-surface` | Alternating section backgrounds |
| Snow | `#FBFBFB` / `#FAFAFA` | `--color-surface-raised` | Card fills one step off white, hover surfaces |
| Mist Gray | `#F2F2F2` | `--color-border` | The default hairline stroke (2,465 uses) and the card shadow tint |
| Pale Gray | `#ECECEC` / `#E9E9E9` | `--color-border-soft` | Inner dividers |
| Gainsboro | `#DDDDDD` | `--color-border-strong` | Input outlines, emphasized dividers |
| Signal Green | `#03D418` | `--color-positive` | Rate increase, positive % change chips |
| Forest Green | `#05A615` | `--color-positive-deep` | Positive text on light green washes |
| Signal Red | `#E31D1C` | `--color-negative` | Rate decrease, negative % change |
| Crimson | `#CE1312` | `--color-negative-deep` | Negative text, error states |
| Amber | `#EFB255` | `--color-warning` | Alert accents |
| Midnight Navy | `#010C20` | `--color-navy` | Dark app theme canvas, dark footer |
| Deep Space | `#0E182B` / `#263238` | `--color-navy-raised` | Dark theme cards and panels |

### Gradients

| Token | Stops | Role |
|---|---|---|
| `--gradient-brand` | `#1F75FE → #134698` (linear) | Hero panels, feature cards, primary banners |
| `--gradient-bitcoin` | `#F9AA4B → #F7931A` (linear) | Bitcoin product surfaces |
| `--gradient-alt` | `#46EFFA → #2000E3` (linear) | Occasional promo art |

---

## Tokens — Typography

A three-font system with strict division of labor, all loaded from Google Fonts. (The Figma source file is ~95% Onest; production deliberately splits the roles below — follow production.)

### Onest — display, headings, and actions — `--font-head`
- **Substitute:** Instrument Sans, or ui-sans-serif/system-ui stack
- **Weights:** 600 (SemiBold — the heading weight), 500 for softer subheads
- **Applied to:** `h1–h6` (600, -1% tracking), `.button` components (600, 14px), currency tab pills, rate figures inside highlight cards
- **Line height:** 1.0–1.3 headings; 1.5 at 24px section headings
- **Letter spacing:** -1% (set globally on headings); -1.9% at 24px; 0 on display numerals
- **Role:** The voice of the brand — anywhere the product speaks a headline or asks for a click.

### Instrument Sans — body, UI, and navigation — `--font-body`
- **Substitute:** Inter, or ui-sans-serif/system-ui stack
- **Weights:** 400 (default), 500 (emphasis), 600 (labels)
- **Applied to:** `body, html` default plus explicitly on `a, button, input, p, span, div` — all copy, nav links, table provider names, form fields, explainer sections
- **Line height:** 1.0 for dense UI; 1.5 for paragraphs
- **Role:** The workhorse — everything that isn't a headline or a number.

### JetBrains Mono — numerals and rates — `--font-mono`
- **Substitute:** IBM Plex Mono, or ui-monospace stack
- **Weights:** 400 (ticker), 700 (rate cells)
- **Applied to:** ticker strip pair prices and % changes (green/red), buy/sell cells in rate tables (`font-bold`, 17px desktop), every naira/dollar figure
- **Role:** Tabular integrity — fixed-width digits keep columns of rates aligned like a terminal. If it's a number the user compares, it's mono.

Stray fonts present in the Figma file (flag assets, unreplaced kit pieces) that should NOT ship: Roboto Bold, **Aeonik TRIAL** (unlicensed trial), Groteska, Lexend, Arial, Satoshi, Public Sans, Codec Pro.

### Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing | Token |
|---|---|---|---|---|---|---|
| Micro caption | Instrument Sans | 8px | 500 | 1.0 | -1% | `--text-2xs` |
| Micro label / tag | Instrument Sans | 10px | 500 | 1.0 | 0 | `--text-xs` |
| UI default / table cell | Instrument Sans | 12px | 500 | 1.0 | -1% | `--text-sm` |
| Body / row text | Instrument Sans | 14px | 400–500 | 1.0 (UI) / 1.5 (copy) | -1% | `--text-base` |
| Rate numeral | JetBrains Mono | 12–14px | 400–700 | 1.0 | 0 | `--text-rate` |
| Rate numeral lg (desktop tables) | JetBrains Mono | 17px | 700 | 1.0 | 0 | `--text-rate-lg` |
| Emphasized body / card title | Onest | 16px | 600 | 1.0 | -1% | `--text-md` |
| Subhead | Onest | 18px | 500 | 1.0 | -1% | `--text-lg` |
| Card heading | Onest | 20px | 600 | 1.0 | -1% | `--text-xl` |
| Section heading | Onest | 24px | 600 | 1.5 | -1.9% | `--text-2xl` |
| Page title | Onest | 28px | 500–600 | 1.0 | -1% | `--text-3xl` |
| Large page title | Onest | 32px | 600 | 1.0 | -1% to -3% | `--text-4xl` |
| Hero headline | Onest | 48px | 600 | 1.0 | -1% | `--text-5xl` |
| Display stat | Onest | 80px | 600 | 1.0 | 0 | `--text-display` |
| Display stat XL | Onest | 100px | 600 | 1.0 | 0 | `--text-display-xl` |

---

## Tokens — Spacing

10px is the system's atomic unit: it is simultaneously the default auto-layout gap (5,734 uses) and the default padding (11,616 uses).

| Token | Value | Role |
|---|---|---|
| `--space-2xs` | 2px | Icon-to-text micro gaps |
| `--space-xs` | 4–5px | Chip internals, tight stacks |
| `--space-sm` | 8px | Small element gaps |
| `--space-md` | **10px** | Default gap and padding everywhere |
| `--space-lg` | 15–16px | Card internals |
| `--space-xl` | 20px | Card-to-card gaps |
| `--space-2xl` | 25px | Section internals |
| `--space-3xl` | 30–32px | Section padding |
| `--space-4xl` | 40px+ | Page-level rhythm |

## Tokens — Radius

| Token | Value | Role |
|---|---|---|
| `--radius-xs` | 2px | Micro chips, checkbox |
| `--radius-sm` | 4px | Tags, small buttons |
| `--radius-md` | **5px** | The default — inputs, chips, small cards (3,056 uses) |
| `--radius-lg` | 8px | Buttons, medium cards |
| `--radius-xl` | 10px | Cards, panels (1,121 uses) |
| `--radius-2xl` | 15px | Large feature cards |
| `--radius-full` | 50px / 9999px | Pill buttons, avatars, toggles |

## Tokens — Borders & Elevation

| Token | Value | Role |
|---|---|---|
| `--border-hairline` | 1px solid `#F2F2F2` | Default card/table stroke (3,847 × 1px strokes) |
| `--border-input` | 1px solid `#DDDDDD` | Form fields |
| `--border-focus` | 1.5px solid `#1F75FE` | Focused/active elements |
| `--shadow-card` | `0 4px 15px #F2F2F2` | Default card lift — a gray wash, not a true shadow |
| `--shadow-float` | `-1px 9px 15px rgba(0,0,0,.10)` | Dropdowns, floating panels |
| `--shadow-brand-glow` | `0 0 0 rgba(31,117,254,.08–.10)` | Blue halo on active converter/CTA cards |
| `--shadow-brand-card` | `0 10px 28px rgba(39,84,186,.10)` | Elevated brand-blue cards |

---

## Components

- **Buttons:** pill (`--radius-full`), 30–36px tall, `--color-brand` fill, white 12–14px Onest 600 label; secondary = white fill + hairline border; tab triplet **BUY / SELL / SEND** as segmented control.
- **Rate table row:** provider logo + flag chip, provider name (Instrument Sans), rate figures (JetBrains Mono 700, 17px desktop), % change chip in `--color-positive`/`--color-negative`, 1px `#F2F2F2` row divider.
- **Ticker strip:** header-level pair prices (USD/NGN, USDT/NGN, BTC/NGN…) in JetBrains Mono 400 with green/red arrows for movement.
- **Converter module:** Amount / From / To selects with flag icons, big result line ("1 US Dollar = 1,510 Nigerian Naira"), rate-source disclaimer in `--color-text-secondary`, cross-rate tables (1/5/10/25/50 units).
- **Highlight card** (+ 394×185 mobile variant): stat headline, trend chip, sparkline.
- **Currency selectors:** full country-flag component set (60+ flags: `NG - Nigeria`, `GH - Ghana`, `US`, `GB-UKM`, …).
- **Pagination:** First / Prev / Next icon components + "Showing 1 to 100 of 14,639 results".
- **Pricing card** (API page): tier name, large price ("$9"), feature checklist, pill CTA — 3-across grid.
- **Alert subscription:** email input + cadence picker ("Every Monday") + Telegram CTA.
- **Nav:** desktop header with mega-menu columns; `Mobile Nav` bottom bar (Home / Wallet / Profile) at 430×68.
- **iOS kit:** status bars (battery/charge/dark variants), home indicator — for app mockups.

## Layout

- **Desktop:** 1512px canvas (MacBook Pro 16); content column ~1,372–1,412px; some legacy frames at 1440px.
- **Mobile web:** 430px (iPhone 14/15 Pro Max), one legacy 375px frame; pages run 3,400–8,500px tall.
- **Mobile app:** 430×956 dark-theme frames; bottom-nav 3-tab shell.
- **Page skeleton:** hero/title block → content modules → Latest Exchange News → Currency Converter → CTA banner ("Sending money from Nigeria to your supplier abroad just got easier" / "Contact us now") → footer.
- **Footer IA:** Company · Service · Tools · Send & Receive Money · Bitcoin · Resources · Legal · Donation.

## Voice & Content Patterns

- Sentence-case headings with benefit-led phrasing ("Stay Ahead with Monierate", "Access Our API: Power Your Solutions").
- Data timestamps carry full precision: "Last updated Thu Sep 05 2024 16:25:35 GMT+0100 (West Africa Standard Time)".
- Every rate surface carries the disclaimer pattern: "This is for informational purposes only."
- ALL-CAPS reserved for the CTA banner and footer column headers.

## Implementation Notes & Cleanup

1. Replace Aeonik TRIAL before shipping; purge Roboto/Satoshi/Public Sans strays. When implementing from the Figma file, map its all-Onest text to the production stack: headings/buttons stay Onest, body/UI becomes Instrument Sans, and all rate numerals become JetBrains Mono.
2. Promote raw hex usage (thousands of hard-coded `#1F75FE`, `#F2F2F2`) into the variable set (only ~23 variables exist today).
3. Normalize radius drift (3.7 / 8.4 / 13.3 / 22.9px from scaled components) to the 4/5/8/10/50 scale.
4. Fix design-copy typos: "Exchages", "informatoin", "1 nGN"/"uSD" casing; reconcile mismatched sample rates (1510 vs 1607.16 NGN on one page).
5. Rename `Frame 16188xxxxx` working frames and deduplicate the ten "compare exchange page" frames.

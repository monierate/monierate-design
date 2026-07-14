# Monierate — Design Documentation

> Source: `monierate.fig` (Figma file, exported 2026-07-12). 53,249 nodes across 3 pages, 1,058 components, 184 embedded images.
> Monierate is a currency exchange-rate aggregator focused on the Nigerian market: it compares dollar-to-naira (and crypto) rates across ~49 exchange providers, with converters, alerts, an API product, and a companion mobile app.

---

## 1. File Structure

| Figma page | Contents |
|---|---|
| **Page 1** | The core product: full desktop website (1512px "MacBook Pro 16" frames and 1440px frames) plus mobile-web versions of every page (430px "iPhone 14 & 15 Pro Max" frames, one 375px iPhone 13 mini). ~460 top-level frames including working/scratch frames. |
| **Internal Only Canvas** | Design-system internals: color variables, grey ramps, iOS status bar / home indicator components, brush assets, arrow/nav primitives. |
| **Page 2** | Mobile **app** concept (dark themed): Buy/Sell/Send flows, wallet, dashboard, settings — 430x956 iPhone frames plus a written app IA note (Dashboard, Wallets, Settings, Support). |

## 2. Screen Inventory (Desktop Web, 1512px)

**Core rate pages**
- **Homepage** (2,925px tall) — hero, rate tables, "Latest Exchange News", currency converter, CTA banner ("Sending money from Nigeria to your supplier abroad just got easier").
- **Highlight Page / Category** — "Today's dollar to naira rates on exchanges — compare 49 providers", currency filter chips (NGN/GHS/KES), "Trending Globally" section.
- **Exchange profile** (e.g. GT Bank) — provider overview, "GT Currency Market" pair list, embedded converter (1 USD = 1,510 NGN), historical-rate section, cross-sell cards ("Convert USDT on ByBit / Bitnob / CoinProfile").
- **Coin profile** (Bitcoin) — price + 24h change, market cap, trading volume, supply stats, INFO panel (website, community, Monierate ID, tags), BTC→NGN converter.
- **Compare Exchange page** (10+ variants) — provider comparison tables with currency explainer copy.
- **Converter Page** (4,593px) — USD↔NGN converter with conversion tables (1/5/10/25/50 units both directions) and rate-difference section.

**Tools**
- **Bitcoin ETF Tracker** — table with 30d/1y/All range toggles, pagination ("Showing 1 to 100 of 14,639 results").
- **Bitcoin Treasury** — corporate BTC holdings tracker with stat cards (Total Holdings, Dominance %, Total Value, Companies).
- **Inflation Calculator** — amount/start-year/end-year inputs, result narrative, historical chart.
- **Price Alert / Alert Page** — "Naira Rate Alerts" email subscription (weekly cadence picker), Telegram group CTA, manage-alerts magic link.

**Business & marketing**
- **Get API Page** — 3 pricing tiers: Starter $9 (5k req/mo), Growth $19 (30k), Scaling $29 (100k); each with support level, update frequency, historical data, SSL, conversion endpoint; FAQ + docs link.
- **Advertise with us** (5,008px) — ad products (sponsored blog, in-app ads, sponsored rate placement, sponsored link, newsletter placement, rate listing, native buttons), lead form with budget ranges.
- **Partnership** — partner pitch, press inquiries, brand-guide download, remittance widget demo (send USD → NGN via partner, rate/fee/recipient-gets breakdown).
- **Exchange Request Form** (+ New Listing / Update Info variants) — listing request flows.

**Content & company**
- **Blog Page Content** (+ category and article views), **Glossary** (A–Z index), **FAQ** (tabs: Widget, Data, API Documentation, Ads Placement), **About Us** (story, milestones timeline, stats: 10M monthly views / 5M users / 10K API subscribers), **Career** (+ Submit Info), **Contact Us**, **Suggest a Feature** (NPS-style 1–10 scale).

Nearly every page repeats two shared modules before the footer: **Latest Exchange News** and **Currency Converter**, plus the supplier-payment **CTA banner**.

## 3. Screen Inventory (Mobile)

- **Mobile web:** 28+ frames at **430×(3,400–8,500)px** mirroring every desktop page 1:1, plus dedicated mobile components (Mobile Nav symbol 430×68, Highlight Card Mobile 394×185, subnav, mobile tables at 401×3,101).
- **Mobile app (Page 2, dark theme):** Buy/Sell/Send flow screens, wallet (non-custody, multichain, backup phrase), dashboard with platform-rate list, calculator, settings (password, PIN, language/mode/currency/country), support (FAQ, email/WhatsApp). Bottom nav: **Home / Wallet / Profile**.

## 4. Design Tokens

### 4.1 Color

| Role | Value | Notes |
|---|---|---|
| Primary / Brand | **#1F75FE** ("Crayola Blue") | Buttons, links, active states, focus glow |
| Primary dark | #2754BA | Shadow tint on elevated cards |
| Text primary | #000000 | Headings/body |
| Text secondary | #737373 | Supporting copy |
| Text tertiary / disabled | #B3B0B0, #A3A3A3, #858585 | Metadata, placeholders |
| Background base | #FFFFFF | |
| Background subtle | #F8F8F8 / #FBFBFB / #FAFAFA / #F2F7FF | Section + card fills |
| Surface tint | #EDF0F4, #E9ECF1 | Table rows, panels |
| Border default | **#F2F2F2** | Most-used stroke by far |
| Border strong | #DDDDDD, #ECECEC, #B3B0B0 | Inputs, dividers |
| Success | #03D418 / #05A615 | Rate up / positive change |
| Error | #E31D1C / #CE1312 | Rate down / negative change |
| Warning | #EFB255 | Alerts |
| Dark navy | #010C20 / #0E182B / #263238 | Dark app theme, footer surfaces |

Named variables exist but are sparsely populated: `Crayola Blue Primary`, `Lavender Indigo Primary`, `Grey Base`, `stroke`, `text-tertiary`, `icon-primary`, `Buy`, `warning`, `Brand/800`, `Brand/100`, `Background/Brand/Default`, `Gray/900`, `White/1000`, Black ramp (`Black 50/200/500`). Most colors are applied as raw hex — see §7.

### 4.2 Typography

Primary typeface: **Onest** (used in ~95% of text nodes).

| Style | Usage count | Role |
|---|---|---|
| Onest Medium | 5,643 | Default UI text |
| Onest Regular | 1,393 | Body / long copy |
| Onest SemiBold | 1,296 | Card titles, emphasis |
| Onest Bold | 179 | Page headings |
| Onest Black | 11 | Display / hero numerals |

Type scale (px, by frequency): **12 and 14 dominate (≈5,000 uses)**, then 16, 18, 10, 20, 24, 28, 32, 48; display sizes 80/100/160 for hero stats.

Stray fonts to clean up: Roboto Bold (flag/icon assets), **Aeonik TRIAL** (unlicensed trial font — replace), Groteska, Lexend, Arial, Satoshi, Public Sans, Codec Pro.

### 4.3 Corner Radius

| Radius | Usage | Typical element |
|---|---|---|
| 5px | 3,056 | Inputs, small cards, chips (de-facto default) |
| 10px | 1,121 | Cards, panels |
| 50px+ / 256px | 790 + 376 | Pills, fully-rounded buttons, avatars |
| 4px / 8px | 584 / 396 | Buttons, tags |

### 4.4 Elevation

| Shadow | Usage |
|---|---|
| 0 4 15 #F2F2F2 | Default card shadow |
| -1 9 15 rgba(0,0,0,.10) | Floating panels |
| 0 0 0 rgba(31,117,254,.08–.10) | Brand-blue focus/glow ring |
| 0 10 28 rgba(39,84,186,.10) | Elevated brand cards |

## 5. Components (1,058)

- **Flags:** full country-flag set (`NG - Nigeria`, `GH - Ghana`, `US`, `GB-UKM`, ~60+ African + global) — used in currency selectors and rate rows.
- **Rate/table primitives:** Highlight card (+ mobile variant), profile filter, pagination icons (First/Prev/Next), table rows, category chips.
- **Converter:** `currency converter` instances (desktop + mobile), amount/from/to fields.
- **Navigation:** header nav, `Mobile Nav` (Home/Wallet/Profile), subnav symbols, footer nav blocks.
- **iOS kit:** status bars (battery charge/dark variants), home indicator, device orientation variants.
- **Misc:** ETF Tracker, BTC Treasury, Bank Codes, African Currencies, social icons (Facebook etc.).

## 6. Information Architecture (Footer / Menu)

| Column | Links |
|---|---|
| Company | About, Careers, Press, Suggest A Feature |
| Service | Get our API, List your Platform Exchanges, Advertising, Partnership |
| Tools | Send Money, Price Alert, Currency Converter, Compare Exchanges, Bank Codes, Historical Data, Currency Charts, Inflation Charts |
| Send & Receive Money | Buy USDT, Buy Dollar, Send Money, Sell USDT |
| Bitcoin | Bitcoin Price, Buy/Sell Bitcoin, Bitcoin ETF Tracker, Bitcoin Treasury, Bitcoin Diploma |
| Resources | Blog, Glossary, Research, Newsletter, African Currencies |
| Legal | Privacy Policy, T&C, Disclaimer, Ads Policy, FAQ |
| Donation | Bitcoin, USDT |

Primary action tabs across rate pages: **BUY / SELL / SEND** (+ planned SWAP in the app).

## 7. Layout & Breakpoints

- Desktop canvas: **1512px** (MacBook Pro 16); some earlier frames at 1440px. Content column ≈1,372–1,412px for tables.
- Mobile web: **430px** (iPhone 14/15 Pro Max); one legacy 375px frame.
- Long-scroll pattern: pages run 1,900–5,100px, ending in News → Converter → CTA banner → footer.

## 8. Known Gaps & Cleanup Notes

1. **Placeholder copy:** extensive Lorem Ipsum on About, Career, Compare, Glossary, Blog, Advertise FAQ.
2. **Typos in designs:** "Exchages", "informatoin", "tot your request", "1 nGN / uSD" casing in converter tables.
3. **Trial font in production designs:** Aeonik TRIAL must be licensed or replaced.
4. **Token adoption is low:** brand blue #1F75FE and greys are hard-coded thousands of times; the `Colours` variable set covers only ~23 tokens. Recommend consolidating to a full variable set (brand, greys, semantic success/error/warning, borders).
5. **Naming:** hundreds of `Frame 16188xxxxx` top-level frames and 10 identically named "compare exchange page" frames make navigation hard; adopt `Page / Variant — State` naming.
6. **Radius drift:** 3.7 / 8.4 / 13.3 / 22.9px values suggest scaled components; normalize to the 4/5/8/10/50 scale.
7. **Data inconsistencies:** converter tables show non-matching sample rates (1 USD = 1510 vs 1607.16 NGN on the same page).

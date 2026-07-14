# Monierate Design System

Style reference for [monierate.com](https://monierate.com) — hosted at [design.monierate.com](https://design.monierate.com).

Derived from the Monierate Figma file and verified against production CSS.

## Contents

| File | Purpose |
|---|---|
| `index.html` | The style-reference site (self-contained, no build step) — palette, type scale, spacing, guidelines, and a tabbed code viewer |
| `design.compact.md` | One-page style reference |
| `design.extended.md` | Full reference: color tokens with roles, three-font typography system, type scale, spacing, elevation, components, guidelines |
| `design-tokens.compact.json` | Core design tokens (W3C format) |
| `design-tokens.extended.json` | Full token set (W3C format) |
| `monierate.tailwind.css` | Tailwind v4 theme (`@theme`) — import after `tailwindcss` |
| `monierate.variables.css` | Framework-agnostic CSS custom properties with dark-theme block |
| `design.md` | Original long-form design documentation from the Figma extraction |

## The system at a glance

- **Brand:** #1F75FE (Crayola Blue) — the only interactive hue
- **Fonts:** Onest (headings/buttons, 600) · Instrument Sans (body/UI, 400) · JetBrains Mono (all rate numerals, 700 in tables)
- **Shape:** 5px inputs · 10px cards · pill buttons · 1px #F2F2F2 hairlines
- **Spacing:** 10px atomic unit

## Figma → GitHub token pipeline

Tokens are the source of truth in `tokens/monierate.json` (Tokens Studio format). `monierate.variables.css`, `monierate.tailwind.css`, and `index.html` are **generated** — don't edit them by hand.

### How it flows

1. A designer edits a token in Figma via the **Tokens Studio** plugin and clicks Push
2. The plugin commits the updated `tokens/monierate.json` to this repo (direct or as a PR)
3. The `Build design tokens` GitHub Action fires, runs `npm run build`, and commits the regenerated CSS + site
4. GitHub Pages redeploys — design.monierate.com updates within a minute or two

### Connecting Tokens Studio (one-time setup)

1. Install the [Tokens Studio for Figma](https://tokens.studio) plugin (free tier is enough)
2. Create a GitHub personal access token with `repo` scope (Settings → Developer settings → Personal access tokens)
3. In the plugin: Settings → Add new sync provider → **GitHub**, then enter:
   - Repository: `<owner>/monierate-design` (use the org name after transfer)
   - Branch: `main`
   - File path: `tokens/monierate.json`
4. Pull once to load the existing tokens into the plugin, then Push on every change

### Building locally

```bash
npm run build          # regenerate CSS outputs + index.html
node build/build-tokens.js   # tokens only
node build/build-site.js     # site only
```

No dependencies to install — the build is plain Node (v18+).

## Deploying the site

`index.html` is fully self-contained. Any static host works:

- **GitHub Pages:** Settings → Pages → deploy from branch → root
- Then point `design.monierate.com` at it with a CNAME record and add the custom domain in Pages settings

## License

© Monierate. Internal design documentation.

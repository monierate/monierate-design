// Monierate token build: tokens/monierate.json (Tokens Studio format)
//   → monierate.variables.css  (framework-agnostic :root vars)
//   → monierate.tailwind.css   (Tailwind v4 @theme)
// Zero-dependency on purpose: deterministic output, no transform-library drift.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'tokens/monierate.json'), 'utf8')).global;

const hexA = h => { // #RRGGBBAA → rgb(r g b / a)
  if (!/^#[0-9a-fA-F]{8}$/.test(h)) return h;
  const [r, g, b, a] = [1, 3, 5, 7].map(i => parseInt(h.slice(i, i + 2), 16));
  return `rgb(${r} ${g} ${b} / ${(a / 255).toFixed(2)})`;
};
const shadowCss = v => `${v.x}px ${v.y}px ${v.blur}px${+v.spread ? ` ${v.spread}px` : ''} ${hexA(v.color)}`;

const lines = [];   // [varName, value, description]
for (const [group, set] of Object.entries(tokens)) {
  for (const [name, t] of Object.entries(set)) {
    const varName = `--${group}-${name}`.toLowerCase();
    const value = t.type === 'boxShadow' ? shadowCss(t.value) : t.value;
    lines.push([varName, value, t.description]);
  }
}

const stamp = `/* GENERATED from tokens/monierate.json — do not edit by hand.
   Edit tokens in Figma (Tokens Studio) or tokens/monierate.json and run: npm run build */`;

const renderVars = pad =>
  lines.map(([n, v, d]) => `${pad}${n}: ${v};${d ? ` /* ${d} */` : ''}`).join('\n');

// ---------- monierate.variables.css ----------
const darkBlock = `
/* Dark theme (mobile app / footer) */
[data-theme="dark"] {
  --color-paper: var(--color-navy);
  --color-surface: var(--color-navy-raised);
  --color-surface-raised: var(--color-navy-panel);
  --color-ink: #ffffff;
  --color-text-secondary: var(--color-text-tertiary);
  --color-border: rgb(255 255 255 / 0.08);
}`;
fs.writeFileSync(path.join(root, 'monierate.variables.css'),
  `${stamp}\n\n:root {\n${renderVars('  ')}\n}\n${darkBlock}\n`);

// ---------- monierate.tailwind.css ----------
const base = `
@layer base {
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-head);
    font-weight: 600;
    letter-spacing: -0.01em;
  }
}

@layer components {
  .btn-primary {
    display: inline-flex; align-items: center; justify-content: center;
    height: var(--size-button-md); padding-inline: var(--spacing-xl);
    border-radius: var(--radius-full); background: var(--color-brand);
    color: var(--color-paper); font-family: var(--font-head);
    font-size: var(--text-base); font-weight: 600; letter-spacing: -0.01em;
  }
  .btn-secondary {
    display: inline-flex; align-items: center; justify-content: center;
    height: var(--size-button-md); padding-inline: var(--spacing-xl);
    border-radius: var(--radius-full); background: var(--color-paper);
    border: 1px solid var(--color-border); color: var(--color-ink);
    font-family: var(--font-head); font-size: var(--text-base); font-weight: 600;
  }
  .rate-numeral { font-family: var(--font-mono); font-weight: 700; font-variant-numeric: tabular-nums; }
  .rate-up   { color: var(--color-positive); }
  .rate-down { color: var(--color-negative); }
  .gradient-brand   { background-image: linear-gradient(135deg, var(--color-brand), var(--color-brand-deep)); }
}`;
fs.writeFileSync(path.join(root, 'monierate.tailwind.css'),
  `${stamp}\n/* Usage: @import "tailwindcss"; @import "./monierate.tailwind.css"; */\n\n@theme {\n${renderVars('  ')}\n  --font-sans: var(--font-body); /* body/UI default */\n}\n${base}\n`);

console.log(`built ${lines.length} tokens → monierate.variables.css, monierate.tailwind.css`);

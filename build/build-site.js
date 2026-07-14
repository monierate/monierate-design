// Rebuild index.html from build/template.html, embedding the current
// docs + generated token outputs into the tabbed code viewer.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');

let html = read('build/template.html');
const inject = {
  __DESIGN_COMPACT__: 'design.compact.md',
  __DESIGN_EXTENDED__: 'design.extended.md',
  __TAILWIND__: 'monierate.tailwind.css',
  __CSSVARS__: 'monierate.variables.css',
  __TOKENS_COMPACT__: 'design-tokens.compact.json',
  __TOKENS_EXTENDED__: 'design-tokens.extended.json'
};
for (const [ph, file] of Object.entries(inject)) {
  html = html.replaceAll(ph, JSON.stringify(read(file)));
}
if (/__[A-Z_]+__/.test(html.replace(/<script>[\s\S]*<\/script>/, ''))) {
  console.warn('warning: unreplaced placeholder may remain');
}
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log(`built index.html (${html.length} bytes)`);

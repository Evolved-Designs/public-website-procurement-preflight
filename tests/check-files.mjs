import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const styles = await readFile(new URL('../styles.css', import.meta.url), 'utf8');

assert.match(html, /<h1[^>]*>Make the hard decisions visible/);
assert.equal((html.match(/<link rel="canonical"/g) ?? []).length, 1);
assert.equal((html.match(/type="checkbox"/g) ?? []).length, 11);
assert.match(html, /utm_campaign=procurement_preflight/);
assert.match(html, /section508\.gov\/buy\//);
assert.match(html, /Excelsior_Springs_Website_RFP_2026\.pdf/);
assert.match(html, /data-consult/);
assert.match(html, /aria-live="polite"/);
assert.match(styles, /prefers-reduced-motion/);

const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(jsonLd, 'WebApplication structured data is present');
assert.equal(JSON.parse(jsonLd[1])['@type'], 'WebApplication');

console.log('Static checks passed.');

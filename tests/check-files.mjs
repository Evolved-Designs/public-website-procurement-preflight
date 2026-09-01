import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const styles = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
const scorecard = await readFile(new URL('../WEBSITE-VENDOR-EVALUATION-SCORECARD.md', import.meta.url), 'utf8');

assert.match(html, /<h1[^>]*>Make the hard decisions visible/);
assert.equal((html.match(/<link rel="canonical"/g) ?? []).length, 1);
assert.equal((html.match(/type="checkbox"/g) ?? []).length, 12);
assert.match(html, /utm_campaign=procurement_preflight/);
assert.match(html, /section508\.gov\/buy\//);
assert.match(html, /Excelsior_Springs_Website_RFP_2026\.pdf/);
assert.match(html, /27-05_rfp_economic-development-website-redesign\.pdf/);
assert.match(html, /Submission logistics and authority/);
assert.match(html, /contact click carries only the readiness band/);
assert.match(html, /data-consult/);
assert.match(html, /aria-live="polite"/);
assert.match(styles, /prefers-reduced-motion/);
assert.match(readme, /Website Vendor Evaluation Scorecard/);
assert.match(scorecard, /\| \*\*Total\*\* \| \*\*100\*\*/);
assert.match(scorecard, /factor points = weight × rating ÷ 5/);
assert.match(scorecard, /utm_campaign=website_vendor_scorecard/);
assert.match(scorecard, /section508\.gov\/buy\//);
assert.match(scorecard, /csrc\.nist\.gov\/pubs\/sp\/800\/218\/final/);

const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(jsonLd, 'WebApplication structured data is present');
assert.equal(JSON.parse(jsonLd[1])['@type'], 'WebApplication');

console.log('Static checks passed.');


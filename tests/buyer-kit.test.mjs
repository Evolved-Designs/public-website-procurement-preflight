import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const buyerKit = await readFile(new URL('../WEBSITE-PROCUREMENT-BUYER-KIT.md', import.meta.url), 'utf8');

test('buyer kit routes every existing focused resource', () => {
  const expectedResources = [
    'WEBSITE-RFP-REQUIREMENTS-CHECKLIST.md',
    'WEBSITE-VENDOR-EVALUATION-SCORECARD.md',
    'AI-SEARCH-PROGRAM-RFP-REQUIREMENTS-CHECKLIST.md',
    'LARGE-WEBSITE-MIGRATION-SCOPE-ESTIMATOR.md',
  ];

  for (const resource of expectedResources) {
    assert.match(buyerKit, new RegExp(resource.replaceAll('.', '\\.')));
  }
});

test('buyer kit preserves the full acquisition-to-acceptance route', () => {
  const stages = [
    '### 1. Define the need',
    '### 2. Research the market',
    '### 3. Develop the solicitation',
    '### 4. Request comparable evidence',
    '### 5. Evaluate and preserve rationale',
    '### 6. Validate delivery',
  ];

  for (const stage of stages) assert.match(buyerKit, new RegExp(stage.replace('.', '\\.')));
  assert.match(buyerKit, /This is a planning aid, not legal or procurement advice/);
  assert.match(buyerKit, /Keep confidential, procurement-sensitive, personal, and security information only in an approved system/);
});

test('buyer kit CTA is measurable and asks only for non-confidential scope', () => {
  assert.match(buyerKit, /non-confidential need/);
  assert.match(buyerKit, /utm_source=github/);
  assert.match(buyerKit, /utm_medium=resource/);
  assert.match(buyerKit, /utm_campaign=website_procurement_buyer_kit/);
});

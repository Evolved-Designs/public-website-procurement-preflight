import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const artifact = await readFile(new URL('MULTIFAMILY-LEASE-UP-WEBSITE-AND-LISTING-FEED-HANDOFF-CHECKLIST.md', root), 'utf8');
const readme = await readFile(new URL('README.md', root), 'utf8');

const wordCount = artifact.match(/\b[\w’'-]+\b/g)?.length ?? 0;

test('publishes a substantial prospect-safe planning resource', () => {
  assert.ok(wordCount >= 1800, `expected at least 1800 words, found ${wordCount}`);
  assert.match(artifact, /^# Multifamily Lease-Up Website and Listing-Feed Handoff Checklist/m);
  assert.match(artifact, /operational website-planning aid, not legal/i);
});

test('defines ownership, parity, release, measurement, and rollback', () => {
  for (const term of [
    'controlling source',
    'source-of-truth register',
    'Website-to-feed parity',
    'Clear visitor handoffs',
    'Accessible interaction',
    'Truthful discovery data',
    'Measure three layers separately',
    'rollback',
  ]) assert.match(artifact, new RegExp(term, 'i'));
});

test('preserves the provider system and separates prospect from resident journeys', () => {
  assert.match(artifact, /preserving the property-management platform/i);
  assert.match(artifact, /Prospect and resident actions are visually and semantically separated/i);
  assert.match(artifact, /Resident login/i);
});

test('uses current primary guidance without promising search placement', () => {
  const sources = [
    'https://support.google.com/business/answer/9174409',
    'https://developers.google.com/search/docs/appearance/structured-data/local-business',
    'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
    'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html',
    'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
    'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html',
  ];
  for (const source of sources) assert.ok(artifact.includes(source), `missing ${source}`);
  assert.match(artifact, /eligibility, not a guaranteed placement/i);
});

test('does not leak recent prospect identifiers or individual operating values', () => {
  for (const forbidden of [
    'Emory at North Grove',
    'Mia Rose Holdings',
    'Capital Eleven',
    'AppFolio',
    'emoryatnorthgrove.com',
    '$1,735',
    '$2,785',
  ]) assert.equal(artifact.toLowerCase().includes(forbidden.toLowerCase()), false, `found ${forbidden}`);
});

test('does not claim legal certification or guaranteed outcomes', () => {
  for (const forbidden of [
    'guaranteed compliance',
    'guaranteed leads',
    'guaranteed leases',
    'certifies fair housing',
    'WCAG certified',
  ]) assert.equal(artifact.toLowerCase().includes(forbidden.toLowerCase()), false, `found ${forbidden}`);
});

test('surfaces the new resource from the public README', () => {
  assert.match(readme, /\[Multifamily Lease-Up Website and Listing-Feed Handoff Checklist\]\(MULTIFAMILY-LEASE-UP-WEBSITE-AND-LISTING-FEED-HANDOFF-CHECKLIST\.md\)/);
});

test('includes an Evolved Designs service handoff without a false promise', () => {
  assert.match(artifact, /Evolved Designs can turn this brief/i);
  assert.doesNotMatch(artifact, /Evolved Designs (guarantees|will guarantee|will ensure)/i);
});

test('contains executable release evidence and review cadence', () => {
  for (const term of ['Release day', 'Day 7', 'Day 30', 'status codes', 'hashes', 'next review date']) {
    assert.match(artifact, new RegExp(term, 'i'));
  }
});


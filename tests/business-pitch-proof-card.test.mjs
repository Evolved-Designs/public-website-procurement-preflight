import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const card = await readFile(new URL('../BUSINESS-PITCH-TO-WEBSITE-PROOF-CARD.md', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('publishes a measurable pitch-to-website proof card', () => {
  assert.match(card, /^# Business Pitch-to-Website Proof Card/m);
  assert.match(card, /Claim parity rate = matching applicable claims \/ applicable claims x 100/);
  assert.match(card, /Decision-path completion rate = passed applicable journey-device checks \/ applicable journey-device checks x 100/);
  assert.match(card, /Pass six release gates/);
  assert.match(card, /Use the 72-hour pitch window/);
  assert.match(card, /Do not call a click, form start, registration, RSVP, waitlist entry, or payment handoff a completed sale/);
  assert.match(card, /synthetic names, email addresses, phone numbers, and order details/i);
  assert.match(card, /utm_campaign=business_pitch_website_proof_card/);
});

test('uses current first-party and implementation sources', () => {
  assert.match(card, /midlothian\.tx\.us\/Calendar\.aspx\?EID=19934/);
  assert.match(card, /midlothianchamber\.org\/event\/midlothian-business-pitch-competition/);
  assert.match(card, /midlothian-tx\.org\/local-business-resources/);
  assert.match(card, /developers\.google\.com\/search\/docs\/appearance\/structured-data\/local-business/);
  assert.match(card, /w3\.org\/WAI\/tutorials\/forms\/instructions/);
});

test('does not guess or expose finalist or pipeline identities', () => {
  assert.match(card, /did not identify the finalists/);
  for (const disallowed of [
    'Family Nest',
    'FS8',
    'The Emory',
    'SYMONE',
    'Sweet Peas',
    'RAISED Aesthetics',
    'Olivia Jayde',
    'T&C Venues',
    'triggerReportId',
    'prospectId',
  ]) {
    assert.doesNotMatch(card, new RegExp(disallowed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

test('surfaces the card from the repository start page', () => {
  assert.match(readme, /Business Pitch-to-Website Proof Card/);
  assert.match(readme, /BUSINESS-PITCH-TO-WEBSITE-PROOF-CARD\.md/);
});

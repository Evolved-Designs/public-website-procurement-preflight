import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const card = await readFile(new URL('../WEBSITE-CONTACT-FORM-DELIVERY-VERIFICATION-CARD.md', import.meta.url), 'utf8');

test('contact-form card separates field state, provider acceptance, and internal receipt', () => {
  assert.match(card, /verify every required field still contains the exact intended value/i);
  assert.match(card, /Provider acceptance, page text, analytics traffic, and internal receipt are different facts/);
  assert.match(card, /do not read, synthesize, solve, or bypass the challenge/i);
});

test('contact-form card provides a bounded Evolved Designs next step', () => {
  assert.match(card, /utm_campaign=contact_form_delivery_verification/);
  assert.match(card, /instead of assuming a rebuild/i);
});


import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const card = await readFile(new URL('../LOCAL-SERVICE-DISCOVERY-TO-BOOKING-MEASUREMENT-CARD.md', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('publishes a prospect-safe discovery-to-booking measurement card', () => {
  assert.match(card, /^# Local Service Discovery-to-Booking Measurement Card/m);
  assert.match(card, /source-and-ownership map/i);
  assert.match(card, /discovery parity rate = matching applicable fields \/ applicable fields x 100/);
  assert.match(card, /Mobile \| Desktop \| Keyboard/);
  assert.match(card, /three-layer measurement ladder/i);
  assert.match(card, /Do not call an outbound click a booking/);
  assert.match(card, /Release with rollback evidence/);
  assert.match(card, /developers\.google\.com\/search\/docs\/appearance\/structured-data\/local-business/);
  assert.match(card, /support\.google\.com\/business\/answer\/6218037/);
  assert.match(card, /w3\.org\/WAI\/WCAG22\/Understanding\/link-purpose-in-context\.html/);
  assert.match(card, /utm_campaign=local_discovery_booking_handoff/);
});

test('surfaces the new card from the repository start page', () => {
  assert.match(readme, /Local Service Discovery-to-Booking Measurement Card/);
  assert.match(readme, /LOCAL-SERVICE-DISCOVERY-TO-BOOKING-MEASUREMENT-CARD\.md/);
});

test('does not expose qualification-record identifiers', () => {
  for (const disallowed of [
    'SYMONE',
    'VIBEFAM',
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


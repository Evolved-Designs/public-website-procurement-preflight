import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const card = await readFile(new URL('../RESTAURANT-EVENT-TO-ORDER-AND-CONTACT-HANDOFF-QA-CARD.md', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('publishes a bounded restaurant event handoff card', () => {
  assert.match(card, /Assign the controlling source/);
  assert.match(card, /Event name, date, start time, and status/);
  assert.match(card, /Run three protected journeys/);
  assert.match(card, /mobile, desktop, and keyboard/);
  assert.match(card, /Provider acceptance and internal receipt are separate checks/);
  assert.match(card, /button click, page view, form start, or order-provider redirect is not a completed order/);
  assert.match(card, /Do not place a real order, make a reservation, join a marketing list, or submit a guest-service form/);
  assert.match(card, /Pass the release gate/);
  assert.match(card, /utm_campaign=restaurant_event_order_handoff/);
  assert.match(card, /w3\.org\/WAI\/tutorials\/forms\/instructions/);
  assert.match(card, /developers\.google\.com\/search\/docs\/appearance\/structured-data\/local-business/);
});

test('surfaces the restaurant card from the public start menu', () => {
  assert.match(readme, /Restaurant Event-to-Order and Contact Handoff QA Card/);
  assert.match(readme, /RESTAURANT-EVENT-TO-ORDER-AND-CONTACT-HANDOFF-QA-CARD\.md/);
});

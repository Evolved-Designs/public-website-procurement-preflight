import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const checklist = await readFile(new URL('../SERVICE-WEBSITE-OPERATIONS-PARITY-CHECKLIST.md', import.meta.url), 'utf8');

test('parity checklist covers every comparison field', () => {
  const fields = [
    'Business identity',
    'Location and service area',
    'Contact route',
    'Hours and availability',
    'Services',
    'Providers or delivery team',
    'Price and scope language',
    'Policies',
    'Primary action',
    'Intake requirements',
    'Search presentation',
    'Measurement and ownership',
  ];

  for (const field of fields) assert.match(checklist, new RegExp(field));
});

test('parity checklist distinguishes handoff from business outcome', () => {
  assert.match(checklist, /successful handoff tasks divided by tested priority tasks/);
  assert.match(checklist, /Do not label a booking-link click as a completed booking/);
  assert.match(checklist, /confirmation signal/);
});

test('parity checklist preserves evidence, rollback, privacy, and accessibility', () => {
  assert.match(checklist, /Snapshot date and time/);
  assert.match(checklist, /Do not enter a real person's information/);
  assert.match(checklist, /keyboard-only navigation/);
  assert.match(checklist, /Rollback/);
  assert.match(checklist, /This is a planning checklist/);
});

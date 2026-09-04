import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const text = await readFile(new URL('../COMMERCIAL-CONTRACTOR-CAPABILITY-TO-INQUIRY-HANDOFF-QA-CARD.md', import.meta.url), 'utf8');

test('contractor handoff card keeps proof, delivery, and outcomes separate', () => {
  assert.match(text, /Do not infer an internal owner, certification, geographic reach, or bid capability/);
  assert.match(text, /Provider acceptance and internal receipt are separate checks/);
  assert.match(text, /is not a qualified opportunity/);
});

test('contractor handoff card includes accessible journeys and rollback', () => {
  assert.match(text, /Keyboard-only buyer/);
  assert.match(text, /do not bypass it/i);
  assert.match(text, /rollback reference/i);
});

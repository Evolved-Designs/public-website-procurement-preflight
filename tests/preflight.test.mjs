import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreReadiness } from '../app.js';

test('maps incomplete briefs to discovery', () => {
  assert.deepEqual(scoreReadiness(3), {
    selected: 3,
    total: 10,
    percentage: 30,
    min: 0,
    label: 'Start with a discovery brief',
    summary: 'Clarify the resident journeys, ownership, and acceptance criteria before asking vendors to compare solutions.'
  });
});

test('maps six decisions to a gap-closing scope', () => {
  assert.equal(scoreReadiness(6).label, 'Scope the gaps before release');
});

test('caps the score at the available decisions', () => {
  const result = scoreReadiness(99, 10);
  assert.equal(result.selected, 10);
  assert.equal(result.percentage, 100);
  assert.equal(result.label, 'Ready for vendor comparison');
});

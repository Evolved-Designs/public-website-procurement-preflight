import test from 'node:test';
import assert from 'node:assert/strict';
import { consultationCta, scoreReadiness } from '../app.js';

test('maps incomplete briefs to discovery', () => {
  assert.deepEqual(scoreReadiness(3), {
    selected: 3,
    total: 11,
    percentage: 27,
    min: 0,
    label: 'Start with a discovery brief',
    summary: 'Clarify the resident journeys, ownership, and acceptance criteria before asking vendors to compare solutions.'
  });
});

test('maps seven decisions to a gap-closing scope', () => {
  assert.equal(scoreReadiness(7).label, 'Scope the gaps before release');
});

test('caps the score at the available decisions', () => {
  const result = scoreReadiness(99, 11);
  assert.equal(result.selected, 11);
  assert.equal(result.percentage, 100);
  assert.equal(result.label, 'Ready for vendor comparison');
});

test('matches the consultation action to readiness', () => {
  assert.equal(consultationCta(2), 'Scope the first phase with Evolved');
  assert.equal(consultationCta(7), 'Stress-test the brief with Evolved');
  assert.equal(consultationCta(10), 'Compare implementation options with Evolved');
});

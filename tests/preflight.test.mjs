import test from 'node:test';
import assert from 'node:assert/strict';
import { consultationBand, consultationCta, scoreReadiness } from '../app.js';

test('maps incomplete briefs to discovery', () => {
  assert.deepEqual(scoreReadiness(3), {
    selected: 3,
    total: 12,
    percentage: 25,
    min: 0,
    label: 'Start with a discovery brief',
    summary: 'Clarify the resident journeys, ownership, and acceptance criteria before asking vendors to compare solutions.'
  });
});

test('maps eight decisions to a gap-closing scope', () => {
  assert.equal(scoreReadiness(8).label, 'Scope the gaps before release');
});

test('caps the score at the available decisions', () => {
  const result = scoreReadiness(99, 12);
  assert.equal(result.selected, 12);
  assert.equal(result.percentage, 100);
  assert.equal(result.label, 'Ready for vendor comparison');
});

test('matches the consultation action to readiness', () => {
  assert.equal(consultationCta(2), 'Scope the first phase with Evolved');
  assert.equal(consultationCta(8), 'Stress-test the brief with Evolved');
  assert.equal(consultationCta(11), 'Compare implementation options with Evolved');
});

test('attributes only the readiness band at contact handoff', () => {
  assert.equal(consultationBand(2), 'discovery');
  assert.equal(consultationBand(8), 'scope_gaps');
  assert.equal(consultationBand(11), 'vendor_ready');
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateMigrationScope, finitePopulationSample } from '../tools/migration-scope-estimator.mjs';

test('calculates a finite-population sample', () => {
  assert.equal(finitePopulationSample(100, { confidence: 0.95, margin: 0.1 }), 50);
});

test('estimates each migration inventory stratum independently', () => {
  const estimate = estimateMigrationScope(
    { pages: 600, documents: 8000, records: 4000, media: 0 },
    { confidence: 0.95, margin: 0.1 },
  );

  assert.deepEqual(estimate.manualSamples, {
    pages: 83,
    documents: 95,
    records: 94,
    media: 0,
  });
  assert.equal(estimate.totals.inventoryItems, 12600);
  assert.equal(estimate.totals.manualSampleItems, 272);
});

test('rejects unsupported statistical assumptions', () => {
  assert.throws(() => finitePopulationSample(10, { confidence: 0.8 }), /confidence/);
  assert.throws(() => finitePopulationSample(10, { margin: 0 }), /margin/);
});

test('rejects negative or fractional inventory counts', () => {
  assert.throws(() => estimateMigrationScope({ pages: -1 }), /pages/);
  assert.throws(() => estimateMigrationScope({ pages: 1.5 }), /pages/);
});

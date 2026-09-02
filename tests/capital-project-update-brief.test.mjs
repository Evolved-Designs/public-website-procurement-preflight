import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const brief = await readFile(new URL('../CAPITAL-PROJECT-WEBSITE-UPDATE-BRIEF.md', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('publishes a copy-ready capital project update brief', () => {
  assert.match(brief, /^# Capital Project Website Update Brief/m);
  assert.match(brief, /Start with the controlled facts/);
  assert.match(brief, /Copy this public update/);
  assert.match(brief, /What visitors need to know today/);
  assert.match(brief, /Update freshness:/);
  assert.match(brief, /Operational-impact coverage:/);
  assert.match(brief, /outbound registration click is not a completed registration/);
  assert.match(brief, /w3\.org\/WAI\/WCAG22\/Understanding\/status-messages\.html/);
  assert.match(brief, /designsystem\.digital\.gov\/components\/site-alert/);
  assert.match(brief, /developers\.google\.com\/search\/docs\/appearance\/structured-data\/article/);
  assert.match(brief, /utm_campaign=capital_project_update_brief/);
});

test('surfaces the brief from both repository entry points', () => {
  assert.match(readme, /Capital Project Website Update Brief/);
  assert.match(readme, /CAPITAL-PROJECT-WEBSITE-UPDATE-BRIEF\.md/);
  assert.match(index, /Capital Project Website Update Brief/);
  assert.match(index, /CAPITAL-PROJECT-WEBSITE-UPDATE-BRIEF\.md/);
});

test('keeps prospect and scheduler identifiers out of the public asset', () => {
  for (const disallowed of [
    'Waxahachie',
    'YMCA',
    'TABS2026027680',
    'ZDC-100-2026',
    'triggerReportId',
    'prospectId',
    'departmentReportId',
  ]) {
    assert.doesNotMatch(brief, new RegExp(disallowed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

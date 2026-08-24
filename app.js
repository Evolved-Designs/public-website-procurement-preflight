export const readinessBands = Object.freeze([
  {
    min: 11,
    label: 'Ready for vendor comparison',
    summary: 'Your brief exposes the decisions a capable partner needs to price, plan, and validate the work.'
  },
  {
    min: 8,
    label: 'Scope the gaps before release',
    summary: 'The direction is visible, but unanswered requirements could widen estimates or create change orders.'
  },
  {
    min: 0,
    label: 'Start with a discovery brief',
    summary: 'Clarify the resident journeys, ownership, and acceptance criteria before asking vendors to compare solutions.'
  }
]);

export function scoreReadiness(selected, total = 12) {
  const safeTotal = Math.max(1, Number(total) || 12);
  const safeSelected = Math.min(safeTotal, Math.max(0, Number(selected) || 0));
  const band = readinessBands.find((candidate) => safeSelected >= candidate.min) ?? readinessBands.at(-1);

  return {
    selected: safeSelected,
    total: safeTotal,
    percentage: Math.round((safeSelected / safeTotal) * 100),
    ...band
  };
}

export function consultationCta(selected, total = 12) {
  const { percentage } = scoreReadiness(selected, total);
  if (percentage >= 85) return 'Compare implementation options with Evolved';
  if (percentage >= 55) return 'Stress-test the brief with Evolved';
  return 'Scope the first phase with Evolved';
}

export function consultationBand(selected, total = 12) {
  const { percentage } = scoreReadiness(selected, total);
  if (percentage >= 85) return 'vendor_ready';
  if (percentage >= 55) return 'scope_gaps';
  return 'discovery';
}

function initPreflight() {
  const form = document.querySelector('[data-preflight]');
  if (!form) return;

  const checks = [...form.querySelectorAll('input[type="checkbox"]')];
  const score = document.querySelector('[data-score]');
  const status = document.querySelector('[data-status]');
  const summary = document.querySelector('[data-summary]');
  const next = document.querySelector('[data-next]');
  const meter = document.querySelector('[data-meter]');
  const copyButton = document.querySelector('[data-copy]');
  const resetButton = document.querySelector('[data-reset]');
  const consult = document.querySelector('[data-consult]');

  function render() {
    const selected = checks.filter((item) => item.checked);
    const result = scoreReadiness(selected.length, checks.length);
    const firstGap = checks.find((item) => !item.checked)?.dataset.gap;

    score.textContent = `${result.selected}/${result.total}`;
    status.textContent = result.label;
    summary.textContent = result.summary;
    next.textContent = firstGap
      ? `Best next decision: ${firstGap}`
      : 'Best next step: publish the acceptance matrix beside the solicitation.';
    meter.style.setProperty('--score', `${result.percentage}%`);
    meter.setAttribute('aria-valuenow', String(result.percentage));
    consult.textContent = consultationCta(result.selected, result.total);
    const consultUrl = new URL('https://evolveddesigns.net/contact-us/');
    consultUrl.searchParams.set('utm_source', 'github_pages');
    consultUrl.searchParams.set('utm_medium', 'owned_tool');
    consultUrl.searchParams.set('utm_campaign', 'procurement_preflight');
    consultUrl.searchParams.set('utm_content', `readiness_${consultationBand(result.selected, result.total)}`);
    consult.href = consultUrl.toString();
  }

  async function copySummary() {
    const selected = checks.filter((item) => item.checked).map((item) => `- ${item.dataset.short}: ready`);
    const gaps = checks.filter((item) => !item.checked).map((item) => `- ${item.dataset.short}: decision needed`);
    const text = [
      'Public Website Procurement Preflight',
      `${score.textContent} — ${status.textContent}`,
      '',
      ...selected,
      ...gaps,
      '',
      next.textContent,
      'Generated locally; no responses were transmitted.'
    ].join('\n');

    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'Summary copied';
    window.setTimeout(() => { copyButton.textContent = 'Copy brief summary'; }, 1800);
  }

  checks.forEach((item) => item.addEventListener('change', render));
  copyButton.addEventListener('click', () => copySummary().catch(() => {
    copyButton.textContent = 'Copy unavailable';
  }));
  resetButton.addEventListener('click', () => {
    form.reset();
    render();
    checks[0]?.focus();
  });
  render();
}

if (typeof document !== 'undefined') {
  initPreflight();
}

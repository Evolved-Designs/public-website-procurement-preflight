import { pathToFileURL } from 'node:url';

const Z_SCORES = new Map([
  [0.9, 1.644854],
  [0.95, 1.959964],
  [0.99, 2.575829],
]);

function requirePopulation(value, name) {
  const parsed = Number(value ?? 0);
  if (!Number.isInteger(parsed) || parsed < 0) {
    throw new TypeError(`${name} must be a non-negative integer`);
  }
  return parsed;
}

export function finitePopulationSample(population, { confidence = 0.95, margin = 0.1 } = {}) {
  const size = requirePopulation(population, 'population');
  if (size === 0) return 0;

  const z = Z_SCORES.get(Number(confidence));
  if (!z) throw new RangeError('confidence must be 0.90, 0.95, or 0.99');
  if (!(Number(margin) > 0 && Number(margin) < 1)) {
    throw new RangeError('margin must be greater than 0 and less than 1');
  }

  const initial = (z ** 2 * 0.25) / (Number(margin) ** 2);
  return Math.ceil((size * initial) / (size + initial - 1));
}

export function estimateMigrationScope(input, options = {}) {
  const inventory = {
    pages: requirePopulation(input.pages, 'pages'),
    documents: requirePopulation(input.documents, 'documents'),
    records: requirePopulation(input.records, 'records'),
    media: requirePopulation(input.media, 'media'),
  };
  const confidence = Number(options.confidence ?? 0.95);
  const margin = Number(options.margin ?? 0.1);
  const manualSamples = Object.fromEntries(
    Object.entries(inventory).map(([name, population]) => [
      name,
      finitePopulationSample(population, { confidence, margin }),
    ]),
  );

  return {
    assumptions: {
      confidence,
      margin,
      maximumVariability: 0.5,
      note: 'Manual planning sample only; run deterministic automated checks across the full inventory.',
    },
    inventory,
    totals: {
      inventoryItems: Object.values(inventory).reduce((sum, value) => sum + value, 0),
      manualSampleItems: Object.values(manualSamples).reduce((sum, value) => sum + value, 0),
    },
    manualSamples,
  };
}

function parseArguments(args) {
  const values = {};
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index]?.replace(/^--/, '');
    const value = args[index + 1];
    if (!key || value === undefined) throw new Error('Arguments must use --name value pairs');
    values[key] = Number(value);
  }
  return values;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const values = parseArguments(process.argv.slice(2));
    const result = estimateMigrationScope(values, {
      confidence: values.confidence,
      margin: values.margin,
    });
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}

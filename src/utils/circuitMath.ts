export type PriorityTier = 1 | 2 | 3 | 4;

export type NoteBlockType = 'definition' | 'theory' | 'memorize' | 'example' | 'pyq';

export interface FilterableBlock {
  id: string;
  type: NoteBlockType;
  priorityTier: PriorityTier;
  secondaryPriorityTiers?: PriorityTier[];
  title: string;
  sourceCitation: string;
  summaryText?: string;
  memorizeStatements?: string[];
  examYears?: string[];
  equations?: { label: string; formula: string; units?: string; note?: string }[];
  table?: { caption?: string; headers: string[]; rows: string[][] };
}

export interface ParsedCourseCode {
  rawCode: string;
  department: string;
  yearDigit: number;
  semesterDigit: number;
  courseSeries: string;
  isSessionalLab: boolean;
  semesterCode: string;
  yearLabel: string;
  semesterLabel: string;
}

/**
 * Parses a compact 4-digit PUST course code such as EECE1111, MATH1101, PHY1101, CSE1101.
 * 1st digit = Year (1-4)
 * 2nd digit = Semester (1-2)
 * Last 2 digits = Course number series (odd = theory, even = lab/sessional)
 */
export function parseCourseCode(code: string): ParsedCourseCode {
  const cleaned = code.trim().toUpperCase().replace(/\s+/g, '');
  const match = cleaned.match(/^([A-Z]{3,4})(\d)(\d)(\d{2})$/);

  if (!match) {
    return {
      rawCode: cleaned,
      department: 'EECE',
      yearDigit: 1,
      semesterDigit: 1,
      courseSeries: '01',
      isSessionalLab: false,
      semesterCode: 'EECE11',
      yearLabel: '1st Year',
      semesterLabel: '1st Semester',
    };
  }

  const [, department, yearStr, semStr, series] = match;
  const yearDigit = Number(yearStr);
  const semesterDigit = Number(semStr);
  const seriesNum = Number(series);
  const isSessionalLab = seriesNum % 2 === 0;

  const ordinals: Record<number, string> = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
  };

  return {
    rawCode: cleaned,
    department,
    yearDigit,
    semesterDigit,
    courseSeries: series,
    isSessionalLab,
    semesterCode: `EECE${yearDigit}${semesterDigit}`,
    yearLabel: `${ordinals[yearDigit] || `${yearDigit}th`} Year`,
    semesterLabel: `${ordinals[semesterDigit] || `${semesterDigit}th`} Semester`,
  };
}

export interface PriorityTierMeta {
  tier: PriorityTier;
  stars: string;
  shortLabel: string;
  fullTitle: string;
  description: string;
}

export const PRIORITY_TIER_META: Record<PriorityTier, PriorityTierMeta> = {
  1: {
    tier: 1,
    stars: '★★★★★',
    shortLabel: 'Class Note',
    fullTitle: 'Priority 1 (P1) · Class Note (Professor Provided)',
    description:
      'Highest priority. Professor-provided lecture notes, class questions, board examples, and exam tips.',
  },
  2: {
    tier: 2,
    stars: '★★★★',
    shortLabel: 'Previous Year Question',
    fullTitle: 'Priority 2 (P2) · Previous Year Question (PYQ)',
    description:
      'Second most important. Questions, topics, derivations, theories, and definitions from past semester exams.',
  },
  3: {
    tier: 3,
    stars: '★★★',
    shortLabel: 'Professor-Followed Book',
    fullTitle: 'Priority 3 (P3) · Professor-Followed Textbook',
    description:
      'Third priority. Core textbook chapters, derivations, and worked examples followed by the course teacher.',
  },
  4: {
    tier: 4,
    stars: '★',
    shortLabel: 'Syllabus Book',
    fullTitle: 'Priority 4 (P4) · Syllabus Recommended Book',
    description:
      'Fourth priority. Supplementary topics and reference problems from other recommended books in the syllabus.',
  },
};

export function getBlockPriorityStars(
  block: Pick<FilterableBlock, 'priorityTier' | 'examYears'>
): string {
  if (block.priorityTier === 1) {
    return '★★★★★';
  }
  if (block.priorityTier === 2) {
    return (block.examYears?.length ?? 0) >= 3 ? '★★★★★' : '★★★★';
  }
  if (block.priorityTier === 3) {
    return '★★★';
  }
  return '★';
}

export interface PassiveSignResult {
  signedPowerWatts: number;
  absPowerWatts: number;
  state: 'ABSORBING' | 'SUPPLYING' | 'NEUTRAL';
  stateLabel: string;
  formulaUsed: string;
  energy10SecJoules: number;
}

/**
 * Passive Sign Convention (PSC):
 * - When current i enters the positive (+) voltage terminal: p = +v * i
 * - When current i enters the negative (-) voltage terminal (leaves +): p = -v * i
 * p > 0 => Element is ABSORBING power (acts like a resistor / load)
 * p < 0 => Element is SUPPLYING power (acts like a source / battery)
 */
export function calculatePassiveSignPower(
  voltageVolts: number,
  currentAmps: number,
  entersPositiveTerminal: boolean
): PassiveSignResult {
  const rawProduct = voltageVolts * currentAmps;
  const signedPower = entersPositiveTerminal ? rawProduct : -rawProduct;
  const roundedPower = Math.round(signedPower * 100) / 100;
  const normalizedPower = Object.is(roundedPower, -0) ? 0 : roundedPower;

  let state: 'ABSORBING' | 'SUPPLYING' | 'NEUTRAL' = 'NEUTRAL';
  let stateLabel = 'STATE: ZERO POWER TRANSFER (0 W)';

  if (normalizedPower > 0) {
    state = 'ABSORBING';
    stateLabel = 'STATE: ABSORBING POWER (Load / Passive Behavior)';
  } else if (normalizedPower < 0) {
    state = 'SUPPLYING';
    stateLabel = 'STATE: SUPPLYING POWER (Generator / Source Behavior)';
  }

  return {
    signedPowerWatts: normalizedPower,
    absPowerWatts: Math.abs(normalizedPower),
    state,
    stateLabel,
    formulaUsed: entersPositiveTerminal ? 'p = +v · i' : 'p = −v · i',
    energy10SecJoules: Math.round(normalizedPower * 10 * 100) / 100,
  };
}

export interface OhmsLawState {
  currentMilliamps: number;
  currentAmps: number;
  conductanceMillisievert: number;
  powerMilliwatts: number;
  powerWatts: number;
}

export function calculateOhmsLawState(
  voltageVolts: number,
  resistanceOhms: number
): OhmsLawState {
  const safeR = Math.max(1, resistanceOhms);
  const currentAmps = voltageVolts / safeR;
  const currentMilliamps = Math.round(currentAmps * 1000 * 100) / 100;
  const conductanceMillisievert = Math.round((1000 / safeR) * 100) / 100;
  const powerWatts = Math.round(voltageVolts * currentAmps * 1000) / 1000;
  const powerMilliwatts = Math.round(powerWatts * 1000 * 10) / 10;

  return {
    currentMilliamps,
    currentAmps: Math.round(currentAmps * 10000) / 10000,
    conductanceMillisievert,
    powerMilliwatts,
    powerWatts,
  };
}

export interface TwoLoopKclKvlResult {
  nodeVoltageVa: number;
  i1Milliamps: number;
  i2Milliamps: number;
  i3Milliamps: number;
  kclResidualMilliamps: number;
  loop1KvlSumVolts: number;
  loop2KvlSumVolts: number;
}

/**
 * Solves a 2-loop T-network circuit:
 * Left source V1 connected through R1 to central Node A.
 * Right source V2 connected through R2 to central Node A.
 * Central branch R3 from Node A to Ground (0V).
 *
 * KCL at Node A (with i1 entering from left, i2 entering from right, i3 leaving to ground):
 * i1 = (V1 - Va) / R1
 * i2 = (V2 - Va) / R2
 * i3 = Va / R3
 * i1 + i2 = i3
 */
export function solveTwoLoopKclKvl(
  v1Volts: number,
  v2Volts: number,
  r1Ohms: number,
  r2Ohms: number,
  r3Ohms: number
): TwoLoopKclKvlResult {
  const g1 = 1 / Math.max(1, r1Ohms);
  const g2 = 1 / Math.max(1, r2Ohms);
  const g3 = 1 / Math.max(1, r3Ohms);

  const va = (v1Volts * g1 + v2Volts * g2) / (g1 + g2 + g3);
  const i1 = (v1Volts - va) * g1;
  const i2 = (v2Volts - va) * g2;
  const i3 = va * g3;

  const i1mA = Math.round(i1 * 1000 * 100) / 100;
  const i2mA = Math.round(i2 * 1000 * 100) / 100;
  const i3mA = Math.round(i3 * 1000 * 100) / 100;

  const kclResidual = Math.round((i1 + i2 - i3) * 1000 * 1000) / 1000;
  // Loop 1: -V1 + i1*R1 + i3*R3 = 0
  const loop1Sum = Math.round((-v1Volts + i1 * r1Ohms + i3 * r3Ohms) * 1000) / 1000;
  // Loop 2: -V2 + i2*R2 + i3*R3 = 0
  const loop2Sum = Math.round((-v2Volts + i2 * r2Ohms + i3 * r3Ohms) * 1000) / 1000;

  return {
    nodeVoltageVa: Math.round(va * 100) / 100,
    i1Milliamps: i1mA,
    i2Milliamps: i2mA,
    i3Milliamps: i3mA,
    kclResidualMilliamps: Object.is(kclResidual, -0) ? 0 : kclResidual,
    loop1KvlSumVolts: Object.is(loop1Sum, -0) ? 0 : loop1Sum,
    loop2KvlSumVolts: Object.is(loop2Sum, -0) ? 0 : loop2Sum,
  };
}

export interface RcTransientState {
  tauMilliseconds: number;
  vAt1Tau: number;
  vAt3Tau: number;
  vAt5Tau: number;
  initialCurrentMilliamps: number;
}

export function calculateRcTransient(
  sourceVolts: number,
  rKiloOhms: number,
  cMicroFarads: number
): RcTransientState {
  // tau = R (kOhm = 10^3) * C (uF = 10^-6) = RC * 10^-3 seconds = RC milliseconds
  const tauMs = Math.round(rKiloOhms * cMicroFarads * 100) / 100;
  const vAt1Tau = Math.round(sourceVolts * (1 - Math.exp(-1)) * 100) / 100;
  const vAt3Tau = Math.round(sourceVolts * (1 - Math.exp(-3)) * 100) / 100;
  const vAt5Tau = Math.round(sourceVolts * (1 - Math.exp(-5)) * 100) / 100;
  const initialCurrentMilliamps = Math.round((sourceVolts / Math.max(0.1, rKiloOhms)) * 100) / 100;

  return {
    tauMilliseconds: tauMs,
    vAt1Tau,
    vAt3Tau,
    vAt5Tau,
    initialCurrentMilliamps,
  };
}

export type PriorityFilter = PriorityTier | 'all' | 'exam';

export function matchesPriorityTier(
  block: FilterableBlock,
  priorityFilter: PriorityFilter
): boolean {
  if (priorityFilter === 'all') {
    return true;
  }
  if (priorityFilter === 'exam') {
    return matchesPriorityTier(block, 1) || matchesPriorityTier(block, 2);
  }
  if (block.priorityTier === priorityFilter) {
    return true;
  }
  if (block.secondaryPriorityTiers && block.secondaryPriorityTiers.includes(priorityFilter)) {
    return true;
  }
  if (priorityFilter === 2) {
    return (
      block.type === 'pyq' ||
      Boolean(block.examYears && block.examYears.length > 0)
    );
  }
  return false;
}

export function getMemorizeBlockTitle(
  block: Pick<FilterableBlock, 'title'>
): string {
  return block.title.trim();
}

export function getMemorizeStatements(
  block: Pick<FilterableBlock, 'memorizeStatements'>
): string[] {
  return block.memorizeStatements ?? [];
}

export function matchesBlockType(
  block: FilterableBlock,
  blockTypeFilter: NoteBlockType | 'all'
): boolean {
  if (blockTypeFilter === 'all') {
    return true;
  }
  if (blockTypeFilter === 'memorize') {
    const hasEquations = Boolean(block.equations && block.equations.length > 0);
    const hasTable = Boolean(block.table);
    const hasFormalStatement = getMemorizeStatements(block).length > 0;
    return (
      hasEquations ||
      hasTable ||
      ((block.type === 'memorize' ||
        block.type === 'definition' ||
        block.type === 'theory') &&
        hasFormalStatement)
    );
  }
  if (blockTypeFilter === 'definition') {
    return (
      block.type === 'definition' ||
      /\b(?:definition|define|law|theorem|criterion|identity|axiom|principle)\b/i.test(
        `${block.title} ${block.summaryText ?? ''}`
      )
    );
  }
  if (blockTypeFilter === 'theory') {
    return (
      block.type === 'theory' ||
      block.type === 'definition' ||
      /\b(?:theory|theorem|law|derivation|proof|principle|properties|formula)\b/i.test(
        `${block.title} ${block.summaryText ?? ''}`
      )
    );
  }
  return block.type === blockTypeFilter;
}

export function filterNoteBlocks<T extends FilterableBlock>(
  blocks: T[],
  priorityFilter: PriorityFilter,
  blockTypeFilter: NoteBlockType | 'all',
  searchQuery: string
): T[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return blocks.filter((block) => {
    if (!matchesPriorityTier(block, priorityFilter)) {
      return false;
    }
    if (!matchesBlockType(block, blockTypeFilter)) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const yearsText = block.examYears ? block.examYears.join(' ') : '';
      const hay = `${block.title} ${block.sourceCitation} ${block.summaryText ?? ''} ${yearsText}`.toLowerCase();
      if (!hay.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}



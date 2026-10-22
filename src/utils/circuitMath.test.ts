import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseCourseCode,
  calculatePassiveSignPower,
  calculateOhmsLawState,
  solveTwoLoopKclKvl,
  calculateRcTransient,
  filterNoteBlocks,
  type FilterableBlock,
} from './circuitMath.ts';

test('parseCourseCode decodes 4-digit PUST course codes accurately', () => {
  const eece = parseCourseCode('EECE1111');
  assert.equal(eece.department, 'EECE');
  assert.equal(eece.yearDigit, 1);
  assert.equal(eece.semesterDigit, 1);
  assert.equal(eece.courseSeries, '11');
  assert.equal(eece.semesterCode, 'EECE11');
  assert.equal(eece.isSessionalLab, false);

  const math = parseCourseCode('MATH1101');
  assert.equal(math.department, 'MATH');
  assert.equal(math.yearDigit, 1);
  assert.equal(math.semesterDigit, 1);
  assert.equal(math.courseSeries, '01');
  assert.equal(math.semesterCode, 'EECE11');

  const eece21 = parseCourseCode('EECE2112');
  assert.equal(eece21.yearDigit, 2);
  assert.equal(eece21.semesterDigit, 1);
  assert.equal(eece21.semesterCode, 'EECE21');
  assert.equal(eece21.isSessionalLab, true);
});

test('calculatePassiveSignPower enforces Passive Sign Convention', () => {
  // Current enters + terminal with +12V and +2A => p = +24W (Absorbing)
  const absorbing = calculatePassiveSignPower(12, 2, true);
  assert.equal(absorbing.signedPowerWatts, 24);
  assert.equal(absorbing.state, 'ABSORBING');
  assert.equal(absorbing.formulaUsed, 'p = +v · i');

  // Current enters - terminal (leaves +) with +12V and +2A => p = -24W (Supplying)
  const supplying = calculatePassiveSignPower(12, 2, false);
  assert.equal(supplying.signedPowerWatts, -24);
  assert.equal(supplying.state, 'SUPPLYING');
  assert.equal(supplying.formulaUsed, 'p = −v · i');
});

test('calculateOhmsLawState computes current, conductance, and power', () => {
  const res = calculateOhmsLawState(10, 100);
  assert.equal(res.currentAmps, 0.1);
  assert.equal(res.currentMilliamps, 100);
  assert.equal(res.conductanceMillisievert, 10);
  assert.equal(res.powerWatts, 1);
});

test('solveTwoLoopKclKvl satisfies both KCL at Node A and KVL around loops', () => {
  const solved = solveTwoLoopKclKvl(12, 6, 100, 200, 300);
  assert.equal(solved.kclResidualMilliamps, 0);
  assert.equal(solved.loop1KvlSumVolts, 0);
  assert.equal(solved.loop2KvlSumVolts, 0);
});

test('calculateRcTransient computes time constant and charging milestones', () => {
  const rc = calculateRcTransient(10, 2, 5); // R=2kOhm, C=5uF => tau = 10ms
  assert.equal(rc.tauMilliseconds, 10);
  assert.equal(rc.vAt1Tau, 6.32);
  assert.equal(rc.initialCurrentMilliamps, 5);
});

test('filterNoteBlocks filters by 4-tier source priority and block type', () => {
  const sampleBlocks: FilterableBlock[] = [
    {
      id: 'b1',
      type: 'definition',
      priorityTier: 1,
      title: 'Passive Sign Convention',
      sourceCitation: 'Class Note · Lecture 01',
    },
    {
      id: 'b2',
      type: 'pyq',
      priorityTier: 2,
      title: 'Power Balance Verification',
      sourceCitation: 'PUST Final Exam 2023',
    },
    {
      id: 'b3',
      type: 'theory',
      priorityTier: 3,
      title: 'Alexander & Sadiku Derivation',
      sourceCitation: 'Alexander & Sadiku Ch. 1',
    },
  ];

  assert.equal(filterNoteBlocks(sampleBlocks, 1, 'all', '').length, 1);
  assert.equal(filterNoteBlocks(sampleBlocks, 'all', 'pyq', '').length, 1);
  assert.equal(filterNoteBlocks(sampleBlocks, 'all', 'all', 'sadiku').length, 1);
});

test('MATH1101_CHAPTERS contains all 8 syllabus modules with P1, P2 (PYQ), P3, and P4 blocks, boxed formulas, and vertical solutions', async () => {
  const { MATH1101_CHAPTERS } = await import('../data/math1101Data.ts');
  assert.equal(MATH1101_CHAPTERS.length, 8);

  for (const mod of MATH1101_CHAPTERS) {
    assert.ok(
      mod.blocks.length >= 5,
      `Module ${mod.unitNumber} should have at least 5 note blocks`
    );
    for (const tier of [1, 2, 3, 4] as const) {
      const tierMatches = filterNoteBlocks(mod.blocks, tier, 'all', '');
      assert.ok(
        tierMatches.length >= 1,
        `Module ${mod.unitNumber} (${mod.title}) must have at least 1 block for Priority Tier P${tier}`
      );
    }
    const pyqMatches = filterNoteBlocks(mod.blocks, 'all', 'pyq', '');
    assert.ok(
      pyqMatches.length >= 2,
      `Module ${mod.unitNumber} (${mod.title}) must have at least 2 PYQ blocks`
    );

    const hasEquations = mod.blocks.some((b) => b.equations && b.equations.length > 0);
    const hasVerticalSolution = mod.blocks.some(
      (b) =>
        b.solutionSteps &&
        b.solutionSteps.length > 0 &&
        (Boolean(b.finalAnswer) || b.solutionSteps.some((s) => s.equation?.includes('∴')))
    );
    assert.ok(hasEquations, `Module ${mod.unitNumber} should include boxed formulas`);
    assert.ok(
      hasVerticalSolution,
      `Module ${mod.unitNumber} should include vertical step-by-step solutions with boxed answers`
    );
  }
});


test('KaTeX math renderer converts radical expressions, fractions, and limits into valid KaTeX HTML', async () => {
  const { normalizeMathString, exprToLatex, renderKatexToHtml } = await import(
    './mathLatex.ts'
  );

  const rootLatex = exprToLatex(normalizeMathString('√(a² − x²)'));
  assert.equal(rootLatex, '\\sqrt{a^{2} - x^{2}}');
  const rootHtml = renderKatexToHtml(rootLatex);
  assert.ok(rootHtml.includes('katex'), 'Should output KaTeX markup');
  assert.ok(rootHtml.includes('sqrt'), 'Should output KaTeX connected radical sqrt element');

  const nestedFracRoot = exprToLatex(normalizeMathString('√((x − 2) / (3 − x))'));
  assert.equal(nestedFracRoot, '\\sqrt{\\frac{x - 2}{3 - x}}');
  const nestedHtml = renderKatexToHtml(nestedFracRoot);
  assert.ok(nestedHtml.includes('mfrac') || nestedHtml.includes('vlist'), 'Should render stacked fraction inside radical');

  const { segmentMathAndProse, splitProblemStatementLines } = await import('./mathLatex.ts');
  const invTrigSegs = segmentMathAndProse(
    normalizeMathString('sin⁻¹ x, cos⁻¹ x (on principal branches)')
  );
  assert.equal(invTrigSegs[0].type, 'math');
  assert.equal(exprToLatex(invTrigSegs[0].text), '\\sin^{-1} x, \\cos^{-1} x');

  const lines = splitProblemStatementLines(
    'Find the domain and range: (1) f(x) = 1 / (x − 3), (2) f(x) = √(x² − 5x + 6), and (3) f(x) = √((x − 2) / (3 − x)).'
  );
  assert.equal(lines.length, 4);
  assert.ok(lines[1].startsWith('(1)'));
  assert.ok(lines[2].startsWith('(2)'));
  assert.ok(lines[3].startsWith('(3)'));
});

test('hashRouter builds and parses chapter, subject, semester, and block links accurately', async () => {
  const { buildRouteHash, parseRouteHash } = await import('./hashRouter.ts');
  const { CURRICULUM_SEMESTERS } = await import('../data/curriculumData.ts');

  const chHash = buildRouteHash({
    viewLevel: 'note',
    semesterId: 'eece11',
    subjectId: 'math1101',
    chapterId: 'math1101-ch01',
  });
  assert.equal(chHash, '#/eece11/math1101/math1101-ch01');

  const parsedCh = parseRouteHash(chHash, CURRICULUM_SEMESTERS);
  assert.equal(parsedCh.viewLevel, 'note');
  assert.equal(parsedCh.semesterId, 'eece11');
  assert.equal(parsedCh.subjectId, 'math1101');
  assert.equal(parsedCh.chapterId, 'math1101-ch01');
  assert.equal(parsedCh.blockId, null);

  const parsedShorthand = parseRouteHash('#math1101-ch03', CURRICULUM_SEMESTERS);
  assert.equal(parsedShorthand.viewLevel, 'note');
  assert.equal(parsedShorthand.subjectId, 'math1101');
  assert.equal(parsedShorthand.chapterId, 'math1101-ch03');

  const parsedBlock = parseRouteHash(
    '#/eece11/math1101/math1101-ch01/math-m1-b2',
    CURRICULUM_SEMESTERS
  );
  assert.equal(parsedBlock.viewLevel, 'note');
  assert.equal(parsedBlock.chapterId, 'math1101-ch01');
  assert.equal(parsedBlock.blockId, 'math-m1-b2');
});





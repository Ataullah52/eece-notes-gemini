import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseCourseCode,
  calculatePassiveSignPower,
  calculateOhmsLawState,
  solveTwoLoopKclKvl,
  calculateRcTransient,
  filterNoteBlocks,
  PRIORITY_TIER_META,
  getBlockPriorityStars,
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

test('globalSearch indexes all courses and chapters and matches titles, summaries, paragraphs, and PYQ years', async () => {
  const { buildGlobalSearchIndex, searchGlobalIndex } = await import(
    './globalSearch.ts'
  );
  const { CURRICULUM_SEMESTERS } = await import('../data/curriculumData.ts');

  const index = buildGlobalSearchIndex(CURRICULUM_SEMESTERS);
  assert.ok(index.length >= 60, 'Should index all note blocks across EECE1111 and MATH1101');

  const leibnizGroups = searchGlobalIndex(index, 'leibniz');
  assert.ok(leibnizGroups.length >= 1, 'Should find Leibniz theorem in MATH1101');
  assert.equal(leibnizGroups[0].subjectCode, 'MATH1101');

  const pyqYearGroups = searchGlobalIndex(index, '2022–23');
  assert.ok(pyqYearGroups.length >= 1, 'Should match PYQ exam years across courses');
});

test('revisionState toggles bookmark, weak, and done flags and exam filter selects Priority 1 and Priority 2 blocks', async () => {
  const {
    REVISION_STORAGE_KEY,
    toggleRevisionField,
  } = await import('./revisionState.ts');
  type RevisionStateMap = import('./revisionState.ts').RevisionStateMap;
  assert.equal(REVISION_STORAGE_KEY, 'eece-notes-revision-v1');

  let state: RevisionStateMap = {};
  state = toggleRevisionField(state, 'math-m1-b1', 'bookmarked');
  assert.equal(state['math-m1-b1']?.bookmarked, true);
  assert.equal(state['math-m1-b1']?.weak, false);
  assert.equal(state['math-m1-b1']?.done, false);

  state = toggleRevisionField(state, 'math-m1-b1', 'weak');
  assert.equal(state['math-m1-b1']?.weak, true);

  state = toggleRevisionField(state, 'math-m1-b1', 'bookmarked');
  state = toggleRevisionField(state, 'math-m1-b1', 'weak');
  assert.equal(state['math-m1-b1'], undefined, 'Should clean up entry when all flags are false');

  const sampleBlocks: FilterableBlock[] = [
    { id: 'b1', type: 'definition', priorityTier: 1, title: 'P1', sourceCitation: 'C1' },
    { id: 'b2', type: 'pyq', priorityTier: 2, title: 'P2', sourceCitation: 'C2' },
    { id: 'b3', type: 'theory', priorityTier: 3, title: 'P3', sourceCitation: 'C3' },
    { id: 'b4', type: 'example', priorityTier: 4, title: 'P4', sourceCitation: 'C4' },
  ];
  const examFiltered = filterNoteBlocks(sampleBlocks, 'exam', 'all', '');
  assert.equal(examFiltered.length, 2);
  assert.deepEqual(
    examFiltered.map((b) => b.id),
    ['b1', 'b2']
  );
});

test('courseLoader dynamically imports course chapter data on demand', async () => {
  const {
    INITIAL_CURRICULUM_SEMESTERS,
    loadCourseChapters,
    mergeCourseChaptersIntoSemesters,
  } = await import('../data/courseLoader.ts');

  const eeceChapters = await loadCourseChapters('eece1111');
  assert.ok(eeceChapters && eeceChapters.length === 6);

  const mathChapters = await loadCourseChapters('math1101');
  assert.ok(mathChapters && mathChapters.length === 8);

  const chemChapters = await loadCourseChapters('chem1101');
  assert.ok(chemChapters && chemChapters.length === 9);

  const merged = mergeCourseChaptersIntoSemesters(
    INITIAL_CURRICULUM_SEMESTERS,
    'math1101',
    mathChapters!
  );
  const mathSub = merged[0].subjects.find((s) => s.id === 'math1101');
  assert.ok(mathSub && mathSub.chapters[0].blocks.length >= 5);

  const mergedChem = mergeCourseChaptersIntoSemesters(
    merged,
    'chem1101',
    chemChapters!
  );
  const chemSub = mergedChem[0].subjects.find((s) => s.id === 'chem1101');
  assert.ok(chemSub && chemSub.chapters.length === 9 && chemSub.chapters[0].blocks.length >= 5);
});

test('getBlockPriorityStars maps P1->★★★★★, P2->★★★★ or ★★★★★, P3->★★★, P4->★', () => {
  assert.equal(PRIORITY_TIER_META[1].stars, '★★★★★');
  assert.equal(PRIORITY_TIER_META[2].stars, '★★★★');
  assert.equal(PRIORITY_TIER_META[3].stars, '★★★');
  assert.equal(PRIORITY_TIER_META[4].stars, '★');

  assert.equal(getBlockPriorityStars({ priorityTier: 1 }), '★★★★★');
  assert.equal(
    getBlockPriorityStars({ priorityTier: 2, examYears: ['2022–23', '2020–21'] }),
    '★★★★'
  );
  assert.equal(
    getBlockPriorityStars({
      priorityTier: 2,
      examYears: ['2022–23', '2021–22', '2020–21'],
    }),
    '★★★★★'
  );
  assert.equal(getBlockPriorityStars({ priorityTier: 3 }), '★★★');
  assert.equal(getBlockPriorityStars({ priorityTier: 4 }), '★');
});

test('matchesBlockType and memorize helpers include only definitions, laws, theorems, formulas, and tables without explanations or examples', async () => {
  const {
    matchesBlockType,
    getMemorizeBlockTitle,
    getMemorizeStatements,
  } = await import('./circuitMath.ts');
  const { MATH1101_CHAPTERS } = await import('../data/math1101Data.ts');
  const { EECE1111_CHAPTERS } = await import('../data/eece1111Data.ts');
  const { CHEM1101_CHAPTERS } = await import('../data/chem1101Data.ts');
  const { PHY1101_CHAPTERS } = await import('../data/phy1101Data.ts');

  const defBlock: FilterableBlock = {
    id: 'math-m1-b1',
    type: 'definition',
    priorityTier: 1,
    title: 'Definition of a Function, Classification & Domain Rules',
    sourceCitation: 'Class Note',
    summaryText:
      'If for every permissible input x ∈ D there corresponds one and only one finite real output y, then y = f(x) is a function of x.',
    memorizeStatements: [
      'If for every permissible input x ∈ D there corresponds one and only one finite real output y, then y = f(x) is a function of x.',
    ],
  };
  assert.equal(matchesBlockType(defBlock, 'memorize'), true);
  assert.equal(matchesBlockType(defBlock, 'definition'), true);
  assert.equal(
    getMemorizeBlockTitle(defBlock),
    'Definition of a Function, Classification & Domain Rules'
  );
  assert.equal(getMemorizeStatements(defBlock).length, 1);

  assert.equal(
    getMemorizeStatements({}).length,
    0,
    'Should return empty array when block has no memorizeStatements'
  );

  for (const ch of [
    ...MATH1101_CHAPTERS,
    ...EECE1111_CHAPTERS,
    ...CHEM1101_CHAPTERS,
    ...PHY1101_CHAPTERS,
  ]) {
    const memorizeBlocks = filterNoteBlocks(ch.blocks, 'all', 'memorize', '');
    assert.ok(
      memorizeBlocks.length >= 2,
      `Chapter ${ch.id} should have at least 2 blocks in the Memorize category`
    );
    for (const block of ch.blocks) {
      const wordCount = block.title.trim().split(/\s+/).length;
      assert.ok(
        wordCount <= 10,
        `Block ${block.id} title "${block.title}" has ${wordCount} words (must be at most 10)`
      );
      assert.ok(
        !block.title.includes("'"),
        `Block ${block.id} title "${block.title}" must use curly apostrophe ’ instead of '`
      );
      assert.ok(
        !/\b(?:PUST|Howard Anton|Syllabus Book|Rahman|Askwith|Class Lecture|Class Handout)\b/i.test(
          block.title
        ),
        `Block ${block.id} title "${block.title}" must not contain book or exam names`
      );
    }
  }
});

test('splitTextIntoVerticalItems and splitFormulaPipeItems convert dense paragraphs and pipe-separated formulas into vertical lists', async () => {
  const { splitTextIntoVerticalItems, splitFormulaPipeItems } = await import(
    './mathLatex.ts'
  );

  const fourWays = splitTextIntoVerticalItems(
    'A function can be expressed in four ways: (1) Analytically/Algebraically by a formula, (2) Numerically by a table of values, (3) Geometrically by its graph in the xy-plane, and (4) Verbally in plain language.'
  );
  assert.equal(fourWays.length, 5);
  assert.equal(fourWays[0], 'A function can be expressed in four ways:');
  assert.ok(fourWays[1].startsWith('(1)'));
  assert.ok(fourWays[4].startsWith('(4)'));

  const multiSentence = splitTextIntoVerticalItems(
    'A function y = f(x) assigns to each input x in the domain D_f a unique finite real number y in the range R_f. For example, y = x² + 1 is a valid function (x = 1 ⇒ y = 2; x = 2 ⇒ y = 5), whereas y² = x ⇒ y = ±√x is not a function.'
  );
  assert.equal(multiSentence.length, 3);

  const pipeFormulas = splitFormulaPipeItems(
    'lim_{x→0} (sin x) / x = 1  |  lim_{x→0} (tan x) / x = 1  |  lim_{x→±∞} 1 / |x| = 0'
  );
  assert.equal(pipeFormulas.length, 3);
  assert.ok(pipeFormulas[2].includes('|x|'), 'Should preserve absolute value bars');
});


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

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateRegularPolygonGeometry,
  parseAutoCadCoordinateSequence,
  lookupAutoCadCommand,
} from './cadMath.ts';

describe('calculateRegularPolygonGeometry (Experiment 02)', () => {
  it('computes exact interior angles for Square, Pentagon, Hexagon, Heptagon, and Octagon', () => {
    assert.equal(calculateRegularPolygonGeometry(4, 5).interiorAngleDeg, 90);
    assert.equal(calculateRegularPolygonGeometry(5, 5).interiorAngleDeg, 108);
    assert.equal(calculateRegularPolygonGeometry(6, 5).interiorAngleDeg, 120);
    assert.equal(calculateRegularPolygonGeometry(7, 5).interiorAngleDeg, 128.57);
    assert.equal(calculateRegularPolygonGeometry(8, 5).interiorAngleDeg, 135);
  });

  it('generates n vertices starting with horizontal arm AB from (0,0) to (s,0)', () => {
    const hex = calculateRegularPolygonGeometry(6, 4);
    assert.equal(hex.vertices.length, 6);
    assert.deepEqual(hex.vertices[0], { index: 1, label: 'A', x: 0, y: 0 });
    assert.deepEqual(hex.vertices[1], { index: 2, label: 'B', x: 4, y: 0 });
    assert.equal(hex.perimeter, 24);
  });
});

describe('parseAutoCadCoordinateSequence (Experiment 05)', () => {
  it('parses absolute rectangular coordinates for the stepped pyramid profile', () => {
    const steps = [
      '0,0',
      '15,0',
      '15,3',
      '12,3',
      '12,6',
      '9,6',
      '9,9',
      '6,9',
      '6,6',
      '3,6',
      '3,3',
      '0,3',
      '0,0',
    ];
    const parsed = parseAutoCadCoordinateSequence(steps);
    assert.equal(parsed.vertices.length, 13);
    assert.equal(parsed.isClosed, true);
    assert.equal(parsed.boundingBox.width, 15);
    assert.equal(parsed.boundingBox.height, 9);
  });

  it('parses relative rectangular coordinates (@dx,dy) for the 3-step staircase', () => {
    const steps = [
      '0,0',
      '@6,0',
      '@0,2',
      '@-2,0',
      '@0,2',
      '@-2,0',
      '@0,2',
      '@-2,0',
      '@0,-6',
    ];
    const parsed = parseAutoCadCoordinateSequence(steps);
    assert.equal(parsed.vertices.length, 9);
    assert.equal(parsed.isClosed, true);
    assert.equal(parsed.totalLength, 24);
    assert.equal(parsed.boundingBox.width, 6);
    assert.equal(parsed.boundingBox.height, 6);
  });

  it('parses relative polar coordinates (@r<theta) for a 5.0" equilateral triangle', () => {
    const steps = ['0,0', '@5<0', '@5<120', '@5<240'];
    const parsed = parseAutoCadCoordinateSequence(steps);
    assert.equal(parsed.vertices.length, 4);
    assert.equal(parsed.isClosed, true);
    assert.equal(parsed.totalLength, 15);
  });
});

describe('lookupAutoCadCommand (Practical Exam Prep)', () => {
  it('resolves professor-taught command aliases accurately', () => {
    const dimAli = lookupAutoCadCommand('dimali');
    assert.ok(dimAli);
    assert.equal(dimAli.alias, 'DIMALI');
    assert.equal(dimAli.category, 'Annotation & Measurement');

    const trimCmd = lookupAutoCadCommand('TR');
    assert.ok(trimCmd);
    assert.equal(trimCmd.commandName, 'TRIM');
  });
});

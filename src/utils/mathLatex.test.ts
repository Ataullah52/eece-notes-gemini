import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { segmentMathAndProse, normalizeMathString, exprToLatex } from './mathLatex.ts';

describe('segmentMathAndProse', () => {
  it('keeps "v = iR (under PSC)" as one math segment for the formula part and prose for "(under PSC)"', () => {
    const segments = segmentMathAndProse(normalizeMathString('v = iR (under PSC)'));
    const mathSegments = segments.filter((s) => s.type === 'math');
    assert.equal(mathSegments.length, 1);
    assert.deepEqual(segments, [
      { type: 'math', text: 'v = iR' },
      { type: 'prose', text: ' (under PSC)' },
    ]);
  });

  it('keeps "Rth = Vth/Isc" as a single math segment', () => {
    const segments = segmentMathAndProse(normalizeMathString('Rth = Vth/Isc'));
    assert.deepEqual(segments, [{ type: 'math', text: 'Rth = Vth/Isc' }]);
    assert.equal(exprToLatex('Rth = Vth/Isc'), 'Rth = \\frac{Vth}{Isc}');
  });

  it('keeps "V_{rms} = V_m / sqrt(2)" as a single math segment without splitting subscript or sqrt', () => {
    const segments = segmentMathAndProse(normalizeMathString('V_{rms} = V_m / sqrt(2)'));
    assert.deepEqual(segments, [{ type: 'math', text: 'V_{rms} = V_m / sqrt(2)' }]);
    assert.equal(exprToLatex('V_{rms} = V_m / sqrt(2)'), 'V_{rms} = \\frac{V_{m}}{\\sqrt{2}}');
  });

  it('keeps "L.H.L. = R.H.L. = f(a)" as a single math segment', () => {
    const segments = segmentMathAndProse(normalizeMathString('L.H.L. = R.H.L. = f(a)'));
    assert.deepEqual(segments, [{ type: 'math', text: 'L.H.L. = R.H.L. = f(a)' }]);
  });

  it('keeps "The integral of f dx is area" as all prose', () => {
    const segments = segmentMathAndProse(normalizeMathString('The integral of f dx is area'));
    assert.deepEqual(segments, [{ type: 'prose', text: 'The integral of f dx is area' }]);
  });

  it('never puts an em dash (—) inside math', () => {
    const segments = segmentMathAndProse(normalizeMathString('v = iR — Ohm’s Law'));
    for (const seg of segments) {
      if (seg.type === 'math') {
        assert.equal(seg.text.includes('—'), false);
      }
    }
    assert.deepEqual(segments, [
      { type: 'math', text: 'v = iR' },
      { type: 'prose', text: ' — Ohm’s Law' },
    ]);
  });

  it('supports explicit \\( ... \\) math delimiters', () => {
    const segments = segmentMathAndProse('Ohm’s Law is \\(v = iR\\) under PSC.');
    assert.deepEqual(segments, [
      { type: 'prose', text: 'Ohm’s Law is ' },
      { type: 'math', text: 'v = iR' },
      { type: 'prose', text: ' under PSC.' },
    ]);
  });
});

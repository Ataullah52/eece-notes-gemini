import type { ChapterNote } from '../../types';

export const CE1101_EXP01: ChapterNote = {
  id: 'ce1101-exp01',
  unitNumber: 'Experiment 01',
  title: 'Experiment 01: Letter Drawing',
  summary:
    'Lab Report 01 — Uppercase (A–Z) and lowercase (a–z) engineering lettering drawn between horizontal guidelines.',
  estimatedMinutes: 15,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'ce-e1-b1',
      type: 'theory',
      priorityTier: 1,
      sourceCitation: 'Lab Report 01 (Pages 1–3)',
      title: 'Experiment No. 01: Letter Drawing (A–Z and a–z)',
      summaryText:
        'Name of the Experiment: Letter drawing.',
      bulletPoints: [
        'Objective: To draw standard uppercase (A–Z) and lowercase (a–z) engineering letters neatly between horizontal guidelines.',
      ],
      svgFigureId: 'lettering-sheet-az',
    },
  ],
};

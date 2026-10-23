import type { ChapterNote } from '../../types';

export const CE1101_EXP02: ChapterNote = {
  id: 'ce1101-exp02',
  unitNumber: 'Experiment 02',
  title: 'Experiment 02: Drawing of Regular Polygons of a Given Length of Arm',
  summary:
    'Rewritten Lab Report 02 — Grammatically corrected procedures for Method 1 and Method 2 (Square, Pentagon, Hexagon, Heptagon, and Octagon) and Discussion.',
  estimatedMinutes: 30,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'ce-e2-b1',
      type: 'theory',
      priorityTier: 1,
      sourceCitation: 'Lab Report 02 (Pages 4–7)',
      title: 'Experiment No. 02: Objective & Procedure (Method-1)',
      summaryText:
        'Experiment Name: Drawing of regular polygons of a given length of arm.',
      bulletPoints: [
        'Objective: To draw regular polygons of a given length of arm.',
        'Procedure: Two methods are applied to draw any regular polygon.',
        'Method-1:',
        '1. Draw a straight line AB of the given length.',
        '2. At point B, erect a perpendicular BC = AB, and join AC.',
        '3. Draw two arcs from points A and C with a radius equal to the given length AB so that they intersect at point D. Join AD and DC to complete the square ABCD.',
        '4. Draw interior angles of 108° at points A, E, F, and G (where AB = AE = EF = FG = GB) to complete a regular pentagon AEFGB.',
        '5. Draw interior angles of 120° at points A, H, I, J, and K (where AB = AH = HI = IJ = JK = KB) to complete a regular hexagon AHIJKB.',
        '6. Draw interior angles of 128.5° at points A, L, M, N, O, and P (where AB = AL = LM = MN = NO = OP = PB) to complete a regular heptagon ALMNOPB.',
      ],
      svgFigureId: 'polygon-interior-angle',
    },
    {
      id: 'ce-e2-b2',
      type: 'theory',
      priorityTier: 1,
      sourceCitation: 'Lab Report 02 (Pages 6, 8–10)',
      title: 'Method-2: Perpendicular Bisector Method & Discussion',
      summaryText:
        'Construction of a Square, Pentagon, Hexagon, Heptagon, and Octagon using the perpendicular bisector framework shown in Fig. 2.2(b).',
      bulletPoints: [
        'Method-2:',
        '1. Draw a straight line AB of the given length.',
        '2. At point B, erect a perpendicular BC = AB, and join AC.',
        '3. Draw the perpendicular bisector of AB, intersecting AB at point M.',
        '4. Locate point 4 at the intersection of the diagonal AC and the perpendicular bisector.',
        '5. With center A or B and radius equal to AB, draw an arc to cut the perpendicular bisector at point 6.',
        '6. Locate the midpoint 5 between points 4 and 6 on the perpendicular bisector.',
        '7. Along the perpendicular bisector, mark points 7, 8, 9, etc., such that 6–7 = 7–8 = 8–9 = 5–6. The basic framework for constructing any regular polygon is now ready.',
        'Figure 2.2(b) illustrates how to construct a regular polygon of any number of sides using this framework:',
        'Square: With 4 as the center and radius 4A, draw a circle. With A and B as centers and radius = AB, mark off arcs cutting the circle at D and C, respectively. Join ABCD to obtain the required square.',
        'Pentagon: With 5 as the center and radius 5A, draw a circle. Mark off arcs successively cutting the circle at E, F, and G with radius = AB and centers B, E, and F, respectively. Join ABEFG to obtain the required pentagon.',
        'Hexagon: With 6 as the center and radius 6A, draw a circle. Mark off arcs successively cutting the circle at H, I, J, and K with radius = AB and centers B, H, I, and J, respectively. Join ABHIJK to obtain the required hexagon.',
        'Heptagon: With 7 as the center and radius 7A, draw a circle. Mark off arcs successively cutting the circle at L, M, N, O, and P with radius = AB. Join ABLMNOP to obtain the required heptagon.',
        'Octagon: With 8 as the center and radius 8A, draw a circle. Mark off arcs successively cutting the circle at Q, R, S, T, U, and V with radius = AB. Join ABQRSTUV to obtain the required octagon.',
        'Discussion: Two methods are applied to draw a regular polygon of a given arm length AB. In Method-1, regular polygons are constructed by measuring their interior angles. In Method-2, regular polygons are constructed using circumcircles and a perpendicular bisector. Method-2 is faster and more convenient. Although Method-1 is simple to describe, Method-2 is very useful for drawing accurate regular polygons.',
      ],
      svgFigureId: 'polygon-perpendicular-bisector',
    },
  ],
};

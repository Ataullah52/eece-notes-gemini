import type { ChapterNote } from './curriculumData';

export const MATH1101_CHAPTERS: ChapterNote[] = [
  // ===========================================================================
  // MODULE 01: FUNCTIONS, LIMIT AND CONTINUITY (Units 1–3)
  // ===========================================================================
  {
    id: 'math1101-ch01',
    unitNumber: 'Module 01',
    title: 'Functions, Limit and Continuity',
    summary:
      '1.1 Functions: kinds (polynomial, rational, transcendental, even, odd, periodic), Domain, range, inverse function and graphs of standard functions. 1.2 Limit and continuity: epsilon-delta definition and geometric interpretations.',
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m1-b1',
        type: 'definition',
        priorityTier: 1,
        sourceCitation: 'Class Note · Unit 1 (Concept of Function, Classification, Domain & Range)',
        title: 'Definition of a Function, Classification & Domain Restriction Rules',
        summaryText:
          'If for every permissible input x ∈ D there corresponds one and only one finite real output y, then y = f(x) is a function of x.',
        paragraphs: [
          'A function y = f(x) assigns to each input x in the domain D_f a unique finite real number y in the range R_f. For example, y = x² + 1 is a valid function (x = 1 ⇒ y = 2; x = 2 ⇒ y = 5), whereas y² = x ⇒ y = ±√x is not a function because a single input x = 4 produces two distinct outputs y = +2 and y = −2.',
          'A function can be expressed in four ways: (1) Analytically/Algebraically by a formula, (2) Numerically by a table of values, (3) Geometrically by its graph in the xy-plane, and (4) Verbally in plain language.',
        ],
        equations: [
          {
            label: '1. Rational Function Domain Rule',
            formula: 'f(x) = P(x) / Q(x)   ⇒   Defined when Q(x) ≠ 0',
            note: 'Exclude all real zeros of the denominator Q(x)',
          },
          {
            label: '2. Even Root in Numerator',
            formula: 'f(x) = √g(x)   ⇒   Defined when g(x) ≥ 0',
            note: 'Boundary zeros where g(x) = 0 are included',
          },
          {
            label: '3. Even Root in Denominator',
            formula: 'f(x) = 1 / √g(x)   ⇒   Defined when g(x) > 0',
            note: 'Strict inequality since denominator cannot be zero',
          },
          {
            label: '4. Logarithmic & Inverse Trig Domain Rules',
            formula: 'ln(g(x)) ⇒ g(x) > 0  |  sin⁻¹(g(x)), cos⁻¹(g(x)) ⇒ −1 ≤ g(x) ≤ 1',
            note: 'Transcendental domain conditions',
          },
        ],
        table: {
          caption: 'Table 1.1 — Classification of Functions in Differential Calculus',
          headers: ['Main Family', 'Sub-Type', 'General Form & Standard Examples'],
          rows: [
            [
              '1. Algebraic',
              '(a) Polynomial',
              'f(x) = a₀ + a₁x + a₂x² + ··· + a_nxⁿ (n ∈ ℕ ∪ {0}, a_n ≠ 0). Domain D_f = ℝ.',
            ],
            [
              '1. Algebraic',
              '(b) Rational',
              'f(x) = P(x) / Q(x), where P(x), Q(x) are polynomials and Q(x) ≠ 0.',
            ],
            [
              '1. Algebraic',
              '(c) Irrational',
              'Expressions involving radicals or fractional powers, e.g., f(x) = √(x² − 5x + 6).',
            ],
            [
              '1. Algebraic',
              '(d) Piecewise',
              'Defined by different formulas on distinct intervals of the domain, e.g., f(x) = |x|.',
            ],
            [
              '2. Transcendental',
              '(a) Trigonometric',
              'sin x, cos x, tan x, cot x, sec x, csc x (angle x measured in radians).',
            ],
            [
              '2. Transcendental',
              '(b) Inverse Trig',
              'sin⁻¹x, cos⁻¹x, tan⁻¹x, cot⁻¹x, sec⁻¹x, csc⁻¹x (on principal branches).',
            ],
            [
              '2. Transcendental',
              '(c) Exponential',
              'f(x) = a^x (a > 0, a ≠ 1), especially natural exponential f(x) = e^x.',
            ],
            [
              '2. Transcendental',
              '(d) Logarithmic',
              'f(x) = log_a x (a > 0, a ≠ 1, x > 0), especially ln x = log_e x.',
            ],
          ],
        },
      },
      {
        id: 'math-m1-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Lecture & PUST EECE 2020–21 Q1(a), 2021–22 Q1(a) [5 Marks]',
        title: 'Solved Exam Problems on Domain and Range (Rational & Radical Functions)',
        summaryText:
          'Vertical exam-style solutions for rational functions, quadratic radicals, rational radicals, and semicircle functions.',
        examYears: ['2021–22', '2020–21'],
        marks: '5 Marks',
        problemStatement:
          'Find the domain and range of the following functions: (1) f(x) = (x − 2)/(3 − x) [PUST 2020–21 Q1a], (2) f(x) = √(x² − 5x + 6) and g(x) = 1/√(x² − 5x + 6) [Class Lecture], (3) f(x) = √((x − 2)/(3 − x)) [Class Homework], and (4) f(x) = √(16 − x²) [PUST 2021–22 Q1a].',
        solutionSteps: [
          {
            stepTitle: 'Problem 1 (PUST 2020–21 Q1a): f(x) = (x − 2) / (3 − x)',
            explanation:
              'Find the excluded denominator zero for Domain, then express x in terms of y for Range:',
            equation:
              'Step 1 (Domain):\n  Given,  f(x) = (x − 2) / (3 − x)\n  For f(x) to be real and finite, denominator ≠ 0:\n  3 − x = 0\n  ⇒  x = 3   [Excluded point]\n  ∴  Domain, D_f = ℝ \\ {3} = (−∞, 3) ∪ (3, ∞)\n\nStep 2 (Range):\n  Let  y = (x − 2) / (3 − x)\n  ⇒  y(3 − x) = x − 2\n  ⇒  3y − xy = x − 2\n  ⇒  x + xy = 3y + 2\n  ⇒  x(1 + y) = 3y + 2\n  ⇒  x = (3y + 2) / (y + 1)   [Undefined when y + 1 = 0 ⇒ y = −1]\n  ∴  Range, R_f = ℝ \\ {−1} = (−∞, −1) ∪ (−1, ∞)',
          },
          {
            stepTitle:
              'Problem 2 (Class Lecture): f(x) = √(x² − 5x + 6) and g(x) = 1 / √(x² − 5x + 6)',
            explanation:
              'Factor the quadratic inside the square root and test interval signs across critical points x = 2, 3:',
            equation:
              'For f(x) = √(x² − 5x + 6):\n  f(x) = √((x − 2)(x − 3))\n  For real values, radicand ≥ 0:\n  x² − 5x + 6 ≥ 0\n  ⇒  (x − 2)(x − 3) ≥ 0   [Critical points: x = 2, 3]\n  Sign analysis:\n    • On (−∞, 2): (−) × (−) = +  (Valid)\n    • On (2, 3):  (+) × (−) = −  (Invalid)\n    • On (3, ∞):  (+) × (+) = +  (Valid)\n  Checking endpoints: f(2) = 0 and f(3) = 0 are defined.\n  ∴  Domain, D_f = (−∞, 2] ∪ [3, ∞)\n  ∴  Range, R_f = [0, ∞)\n\nFor g(x) = 1 / √(x² − 5x + 6):\n  Since the radical is in the denominator, strict inequality holds:\n  (x − 2)(x − 3) > 0\n  ∴  Domain, D_g = (−∞, 2) ∪ (3, ∞)\n  ∴  Range, R_g = (0, ∞)',
          },
          {
            stepTitle: 'Problem 3 (Class Homework): f(x) = √((x − 2) / (3 − x))',
            explanation:
              'Enforce non-negative radicand (x − 2)/(3 − x) ≥ 0 and non-zero denominator 3 − x ≠ 0:',
            equation:
              'Step 1 (Domain):\n  (x − 2) / (3 − x) ≥ 0   and   3 − x ≠ 0\n  Sign of (x − 2) / (3 − x):\n    • On (−∞, 2): (−) / (+) = −  (Invalid)\n    • On (2, 3):  (+) / (+) = +  (Valid)\n    • On (3, ∞):  (+) / (−) = −  (Invalid)\n  At x = 2:\n    f(2) = √(0 / 1)\n         = 0   (Included)\n  At x = 3:\n    f(3) = √(1 / 0)   (Undefined, excluded)\n  ∴  Domain, D_f = [2, 3)\n\nStep 2 (Range):\n  Let  y = √((x − 2) / (3 − x))   where y ≥ 0\n  ⇒  y² = (x − 2) / (3 − x)\n  ⇒  3y² − xy² = x − 2\n  ⇒  x(1 + y²) = 3y² + 2\n  ⇒  x = (3y² + 2) / (y² + 1)   [Defined for all real y ≥ 0]\n  ∴  Range, R_f = [0, ∞)',
          },
          {
            stepTitle: 'Problem 4 (PUST 2021–22 Q1a): f(x) = √(16 − x²)',
            explanation:
              'Determine the domain, range, and geometric locus of the upper semicircle:',
            equation:
              'For Domain:\n  16 − x² ≥ 0\n  ⇒  x² ≤ 16\n  ⇒  −4 ≤ x ≤ 4\n  ∴  Domain, D_f = [−4, 4]\n\nFor Range:\n  Since x ∈ [−4, 4]:\n  0 ≤ x² ≤ 16\n  ⇒  0 ≤ 16 − x² ≤ 16\n  ⇒  0 ≤ √(16 − x²) ≤ 4\n  ∴  Range, R_f = [0, 4]\n\nGraph Description:\n  y = √(16 − x²)  (y ≥ 0)\n  ⇔  x² + y² = 4²  (y ≥ 0)\n  which is the upper semicircle centered at (0, 0) with radius r = 4.',
          },
        ],
      },
      {
        id: 'math-m1-b3',
        type: 'example',
        priorityTier: 3,
        sourceCitation: 'Professor-Followed Book · Howard Anton Sec. 0.1 (Ex. 8, 9, 10, 12, 13, 14, 19, 35)',
        title: 'Solved Anton Homework Problems on Domain & Range (Section 0.1)',
        summaryText:
          'Complete vertical step-by-step solutions for Anton Section 0.1 homework problems.',
        problemStatement:
          'Find the domain and range for Anton Sec. 0.1 Exercises: (1) f(x) = 1 / (5x + 7), (2) g(x) = √(x² − 3) and √(x² + 3), (3) h(x) = √(x − 3x²), (4) φ(x) = x / (|x| + 1), (5) F(x) = 3 − √(x − 2), (6) f(x) = √(x² − 2x + 5), and (7) f(x) = (x² − 4) / (x − 2).',
        solutionSteps: [
          {
            stepTitle: 'Ex. 8, 9, 10 & 12 (Algebraic & Quadratic Radicals)',
            explanation: 'Vertical derivations for each function:',
            equation:
              '1. Ex. 8: f(x) = 1 / (5x + 7)\n   5x + 7 ≠ 0\n   ⇒  x ≠ −7 / 5\n   ∴  Domain, D_f = (−∞, −7 / 5) ∪ (−7 / 5, ∞)\n   ∴  Range, R_f = (−∞, 0) ∪ (0, ∞)\n\n2. Ex. 9 & 10: (a) g(x) = √(x² − 3)  and  (b) g(x) = √(x² + 3)\n   (a) x² − 3 ≥ 0\n       ⇒  |x| ≥ √3\n       ∴  Domain, D_g = (−∞, −√3] ∪ [√3, ∞)\n       ∴  Range, R_g = [0, ∞)\n   (b) x² + 3 ≥ 3 > 0  for all x ∈ ℝ\n       ∴  Domain, D_g = (−∞, ∞)\n       ∴  Range, R_g = [√3, ∞)\n\n3. Ex. 12: h(x) = √(x − 3x²)\n   x − 3x² ≥ 0\n   ⇒  x(1 − 3x) ≥ 0\n   ⇒  0 ≤ x ≤ 1 / 3\n   Maximum of x − 3x² occurs at vertex x = 1 / 6:\n   h(1 / 6) = √(1 / 12)\n            = 1 / (2√3)\n   ∴  Domain, D_h = [0, 1 / 3]\n   ∴  Range, R_h = [0, 1 / (2√3)]',
          },
          {
            stepTitle: 'Ex. 13, 14, 19 & 35 (Modulus, Shifted Radicals & Removable Holes)',
            explanation: 'Completing the square and checking removable point discontinuities:',
            equation:
              '4. Ex. 13: φ(x) = x / (|x| + 1)\n   Since |x| + 1 ≥ 1 ≠ 0 for all x ∈ ℝ:\n   ∴  Domain, D_φ = (−∞, ∞)\n   Also 0 ≤ |x| / (|x| + 1) < 1\n   ⇒  −1 < x / (|x| + 1) < 1\n   ∴  Range, R_φ = (−1, 1)\n\n5. Ex. 14: F(x) = 3 − √(x − 2)\n   x − 2 ≥ 0\n   ⇒  x ≥ 2\n   ∴  Domain, D_F = [2, ∞)\n   Since √(x − 2) ≥ 0:\n   ⇒  3 − √(x − 2) ≤ 3\n   ∴  Range, R_F = (−∞, 3]\n\n6. Ex. 19: f(x) = √(x² − 2x + 5)\n   x² − 2x + 5 = (x − 1)² + 4 ≥ 4 > 0  for all x ∈ ℝ\n   ∴  Domain, D_f = (−∞, ∞)\n   ∴  Range, R_f = [2, ∞)\n\n7. Ex. 35: f(x) = (x² − 4) / (x − 2)\n   x − 2 ≠ 0\n   ⇒  x ≠ 2\n   ∴  Domain, D_f = ℝ \\ {2}\n   For x ≠ 2:\n   f(x) = (x − 2)(x + 2) / (x − 2)\n        = x + 2   [Missing value at x = 2 is y = 4]\n   ∴  Range, R_f = ℝ \\ {4}',
          },
        ],
      },
      {
        id: 'math-m1-b4',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 2 & PUST EECE 2022–23 Q1(a), 2020–21 Q1(a) [4–5 Marks]',
        title:
          'Graph Transformations, Piecewise Functions, Inverse Functions & Even/Odd/Periodic Symmetry',
        summaryText:
          'Shifting/scaling/reflecting rules, piecewise graph sketching (PUST 22–23 Q1a), bijective inverse derivations (Anton 0.4), and Even/Odd/Periodic tests.',
        examYears: ['2022–23', '2020–21'],
        marks: '4–5 Marks',
        equations: [
          {
            label: 'Graph Shifting & Reflecting Rules (c > 0)',
            formula:
              'y = f(x ± c) [Left/Right by c]  |  y = f(x) ± c [Up/Down by c]  |  y = −f(x) [x-axis]  |  y = f(−x) [y-axis]',
          },
          {
            label: 'Inverse Function Existence & Properties',
            formula:
              'f⁻¹ exists ⇔ f is Bijective (One-to-One & Onto)  |  D_{f⁻¹} = R_f,  R_{f⁻¹} = D_f',
            note: 'Graph of y = f⁻¹(x) is the reflection of y = f(x) across the line y = x',
          },
          {
            label: 'Even & Odd Function Symmetry',
            formula:
              'Even: f(−x) = f(x) [y-axis symmetry]  |  Odd: f(−x) = −f(x) [Origin (0,0) symmetry]',
          },
          {
            label: 'Periodic Function & Fundamental Periods',
            formula:
              'f(x + T) = f(x) (T > 0)  |  sin(ax+b), cos(ax+b): T = 2π / |a|  |  tan(ax+b): T = π / |a|',
          },
        ],
        problemStatement:
          '(A) [PUST 2022–23 Q1a] Define a piecewise function and find the domain, range, and graph behavior of f(x) = { x² + 1 (x < 0); 3x + 1 (0 ≤ x ≤ 3); 10 (x > 3) }. (B) [Anton Sec. 0.4 Ex. 20, 23, 25, 37] Find the inverse function f⁻¹(x) for (i) f(x) = (x + 1) / (x − 1), (ii) f(x) = 3 / x² (x < 0), and (iii) f(x) = (e^x + e^{-x}) / 2 (x ≥ 0).',
        solutionSteps: [
          {
            stepTitle: 'Part (A) — PUST 2022–23 Q1(a): Piecewise Function Analysis',
            explanation:
              'Analyze each branch over its interval to determine the combined domain and range:',
            equation:
              'Branch 1 (x < 0):\n  y = x² + 1  is the left half of an upward parabola approaching (0, 1) as x → 0⁻\n  and rising to +∞ as x → −∞.\n  ⇒  y ∈ (1, ∞)\n\nBranch 2 (0 ≤ x ≤ 3):\n  y = 3x + 1  is a line segment from (0, 1) to (3, 10).\n  ⇒  y ∈ [1, 10]\n\nBranch 3 (x > 3):\n  y = 10  is a horizontal ray starting at (3, 10) extending to +∞.\n  ⇒  y = 10\n\nCombining all three branches:\n  ∴  Domain, D_f = (−∞, 0) ∪ [0, 3] ∪ (3, ∞) = ℝ\n  ∴  Range, R_f = [1, ∞)',
          },
          {
            stepTitle: 'Part (B) — Inverse Function Derivations (Anton Sec. 0.4)',
            explanation:
              'Solve y = f(x) vertically for x in terms of y, respecting domain restrictions:',
            equation:
              '(i) f(x) = (x + 1) / (x − 1):\n    Let  y = (x + 1) / (x − 1)\n    ⇒  yx − y = x + 1\n    ⇒  x(y − 1) = y + 1\n    ⇒  x = (y + 1) / (y − 1)\n    ∴  f⁻¹(x) = (x + 1) / (x − 1),   x ≠ 1\n\n(ii) f(x) = 3 / x²  (x < 0):\n    Let  y = 3 / x²,   y > 0\n    ⇒  x² = 3 / y\n    ⇒  x = −√(3 / y)   [Negative root chosen because x < 0]\n    ∴  f⁻¹(x) = −√(3 / x),   x > 0\n\n(iii) f(x) = (e^x + e^{-x}) / 2 = cosh x  (x ≥ 0):\n    Let  y = (e^x + e^{-x}) / 2   [For x ≥ 0, y ≥ 1]\n    ⇒  2y = e^x + 1 / e^x\n    ⇒  (e^x)² − 2y(e^x) + 1 = 0   [Quadratic in e^x]\n    ⇒  e^x = (2y ± √(4y² − 4)) / 2\n           = y ± √(y² − 1)\n    ⇒  e^x = y + √(y² − 1)   [Since x ≥ 0 ⇒ e^x ≥ 1]\n    ⇒  x = ln(y + √(y² − 1))\n    ∴  f⁻¹(x) = ln(x + √(x² − 1)),   x ≥ 1',
          },
        ],
      },
      {
        id: 'math-m1-b5',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Lecture & PUST EECE 2020–21 Exam Q1(c) [4.5 Marks] · Anton Sec. 1.1–1.4',
        title:
          'Existence of Limit, Formal (ε-δ) Definition & Proof, and Limits at Infinity',
        summaryText:
          'lim_{x→a} f(x) = L exists ⇔ L.H.L. = R.H.L. = L (finite). Formal ε-δ proof: ∀ ε > 0, ∃ δ > 0 such that 0 < |x − a| < δ ⇒ |f(x) − L| < ε.',
        examYears: ['2020–21'],
        marks: '4.5 Marks',
        equations: [
          {
            label: 'Two-Sided Limit Existence Criterion',
            formula: 'L.H.L. = lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = R.H.L. = L',
          },
          {
            label: 'Formal Cauchy (ε-δ) Definition of Limit',
            formula: '∀ ε > 0,  ∃ δ > 0  such that  0 < |x − a| < δ  ⇒  |f(x) − L| < ε',
          },
          {
            label: 'Fundamental Trigonometric & Infinity Limits',
            formula:
              'lim_{x→0} (sin x) / x = 1  |  lim_{x→0} (tan x) / x = 1  |  lim_{x→0} (1 − cos x) / x = 0  |  lim_{x→±∞} 1 / xⁿ = 0 (n > 0)',
          },
          {
            label: 'Square Root Sign Rule as x → −∞',
            formula: '√(x²) = |x| = { +x if x > 0 (x → +∞);  −x if x < 0 (x → −∞) }',
            note: 'Critical rule when dividing radicals by x as x → −∞',
          },
        ],
        problemStatement:
          '(1) [PUST 2020–21 Q1c] Using the ε-δ definition of limit, prove that lim_{x→2}(3x − 5) = 1. (2) [Anton 1.3 Ex. 25, 26 & 32] Evaluate lim_{x→−∞} √(5x² − 2) / (x + 3), lim_{x→+∞} √(5x² − 2) / (x + 3), and lim_{x→+∞} (√(x² − 3x) − x). (3) [Anton 1.6 Ex. 27, 28] Evaluate lim_{θ→0} θ² / (1 − cos θ) and lim_{h→0} (1 − cos 3h) / (cos² 5h − 1).',
        solutionSteps: [
          {
            stepTitle: '1. Formal ε-δ Proof (PUST 2020–21 Q1c): Prove lim_{x→2}(3x − 5) = 1',
            explanation:
              'Let ε > 0 be arbitrary. Here f(x) = 3x − 5, a = 2, and L = 1. Find δ > 0 in terms of ε:',
            equation:
              'Scratch / Backward Simplification:\n  |(3x − 5) − 1| < ε   whenever   0 < |x − 2| < δ\n  ⇒  |3x − 6| < ε\n  ⇒  |3(x − 2)| < ε\n  ⇒  3|x − 2| < ε\n  ⇒  |x − 2| < ε / 3\n\nFormal Deduction:\n  Choose  δ = ε / 3 > 0.\n  Then whenever  0 < |x − 2| < δ:\n    |(3x − 5) − 1| = |3x − 6|\n                    = 3|x − 2|\n                    < 3δ          [∵ |x − 2| < δ]\n                    = 3(ε / 3)\n                    = ε\n  ∴  lim_{x→2}(3x − 5) = 1   (with δ = ε / 3)',
          },
          {
            stepTitle:
              '2. Radical Limits at ±∞ (Anton 1.3 Ex. 25, 26 & 32)',
            explanation:
              'Use √(x²) = |x| = −x for x → −∞ and conjugate rationalization for ∞ − ∞:',
            equation:
              'Ex. 25 (x → −∞):\n  L = lim_{x→−∞} √(5x² − 2) / (x + 3)\n    = lim_{x→−∞} (|x| · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n    = lim_{x→−∞} (−x · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n    = −√(5 − 0) / (1 + 0)\n  ∴  L = −√5\n\nEx. 26 (x → +∞):\n  L = lim_{x→+∞} (+x · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n  ∴  L = +√5\n\nEx. 32 (Conjugate Rationalization):\n  L = lim_{x→+∞} (√(x² − 3x) − x)\n    = lim_{x→+∞} ((x² − 3x) − x²) / (√(x² − 3x) + x)\n    = lim_{x→+∞} (−3x) / (x · (√(1 − 3 / x) + 1))\n    = −3 / (1 + 1)\n  ∴  L = −3 / 2',
          },
          {
            stepTitle: '3. Trigonometric Limit Derivations (Anton 1.6 Ex. 27, 28)',
            explanation: 'Use half-angle and Pythagorean identities to reduce to (sin u)/u → 1:',
            equation:
              'Ex. 27:\n  L = lim_{θ→0} θ² / (1 − cos θ)\n    = lim_{θ→0} (θ²(1 + cos θ)) / (1 − cos²θ)\n    = lim_{θ→0} (θ / sin θ)² · (1 + cos θ)\n    = (1)² · (1 + 1)\n  ∴  L = 2\n\nEx. 28:\n  L = lim_{h→0} (1 − cos 3h) / (cos² 5h − 1)\n    = lim_{h→0} (2 sin²(3h / 2)) / (−sin²(5h))\n    = −2 · (9 / 4) / 25\n  ∴  L = −9 / 50',
          },
        ],
      },
      {
        id: 'math-m1-b6',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q1(b) [4.5 Marks] & 2020–21 Q1(b) [4.5 Marks] · Anton Sec. 1.5',
        title:
          'Continuity at a Point, Types of Discontinuity, Intermediate Value Theorem & Solved PYQs',
        summaryText:
          'f(x) is continuous at x = a if (1) f(a) is defined, (2) lim_{x→a} f(x) exists (L.H.L. = R.H.L.), and (3) lim_{x→a} f(x) = f(a).',
        examYears: ['2022–23', '2020–21'],
        marks: '4.5 Marks',
        equations: [
          {
            label: 'Three Conditions for Continuity at x = a',
            formula: 'L.H.L. = lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = R.H.L. = f(a)',
          },
          {
            label: 'Classification of Discontinuities',
            formula:
              'Removable: lim exists ≠ f(a)  |  Jump: LHL ≠ RHL (both finite)  |  Infinite: LHL or RHL = ±∞',
            note: 'Correction to PDF Note p.17 (Anton 1.5 Ex. 35b): For f(x) = (x² − 9) / (x + 3) at x = −3, removable limit is lim_{x→−3}(x − 3) = −6 (not −3)',
          },
        ],
        problemStatement:
          '(1) [PUST 2022–23 Q1b] For what values of a and b is f(x) = { −2 (x ≤ −1); ax − b (−1 < x < 1); 3 (x ≥ 1) } continuous at every x? (2) [PUST 2020–21 Q1b] Find a and b so that f(x) = { x² + 2 (x < 0); ax + b (0 ≤ x < 1); 3 + 2x − x² (x ≥ 1) } is continuous at x = 0 and x = 1. (3) [Anton 1.5 Ex. 47] Use the Intermediate Value Theorem to show x³ + x² − 2x = 1 has a root in [−1, 1].',
        solutionSteps: [
          {
            stepTitle: '1. PUST EECE 2022–23 Q1(b) [4.5 Marks]',
            explanation: 'Enforce L.H.L. = R.H.L. = f(a) at the boundary points x = −1 and x = 1:',
            equation:
              'Step 1 (Continuity at x = −1):\n  L.H.L. = lim_{x→−1⁻} (−2)\n         = −2\n  R.H.L. = lim_{x→−1⁺} (ax − b)\n         = −a − b\n  Since L.H.L. = R.H.L.:\n    −a − b = −2\n    ⇒  a + b = 2   --- (1)\n\nStep 2 (Continuity at x = 1):\n  L.H.L. = lim_{x→1⁻} (ax − b)\n         = a − b\n  R.H.L. = lim_{x→1⁺} (3)\n         = 3\n  Since L.H.L. = R.H.L.:\n    a − b = 3       --- (2)\n\nStep 3 (Solving (1) and (2)):\n  Adding (1) and (2):\n    2a = 5\n    ⇒  a = 5 / 2\n  From (1):\n    b = 2 − 5 / 2\n      = −1 / 2\n  ∴  a = 5 / 2,   b = −1 / 2',
          },
          {
            stepTitle: '2. PUST EECE 2020–21 Q1(b) [4.5 Marks]',
            explanation: 'Enforce continuity at x = 0 and x = 1:',
            equation:
              'At x = 0:\n  L.H.L. = lim_{x→0⁻} (x² + 2)\n         = 2\n  R.H.L. = lim_{x→0⁺} (ax + b)\n         = b\n  ⇒  b = 2\n\nAt x = 1:\n  L.H.L. = lim_{x→1⁻} (ax + b)\n         = a + b\n  R.H.L. = lim_{x→1⁺} (3 + 2x − x²)\n         = 3 + 2 − 1\n         = 4\n  ⇒  a + b = 4\n  ⇒  a + 2 = 4\n  ⇒  a = 2\n  ∴  a = 2,   b = 2',
          },
          {
            stepTitle: '3. Intermediate Value Theorem Proof (Anton 1.5 Ex. 47)',
            explanation: 'Show sign change of continuous polynomial f(x) = x³ + x² − 2x − 1 on [−1, 1]:',
            equation:
              'Let  f(x) = x³ + x² − 2x − 1   [Continuous on [−1, 1]]\n  f(−1) = (−1)³ + (−1)² − 2(−1) − 1\n        = −1 + 1 + 2 − 1\n        = +1 > 0\n  f(1)  = (1)³ + (1)² − 2(1) − 1\n        = 1 + 1 − 2 − 1\n        = −1 < 0\n  ∴  Since f(1) < 0 < f(−1), by IVT there exists c ∈ (−1, 1) such that f(c) = 0.',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // MODULE 02: DIFFERENTIABILITY, SUCCESSIVE DIFFERENTIATIONS & LEIBNIZ THEOREM (Units 4–5)
  // ===========================================================================
  {
    id: 'math1101-ch02',
    unitNumber: 'Module 02',
    title: 'Differentiability, Successive Differentiations and Leibniz Theorem',
    summary:
      '2.1 Differentiability: Elementary properties, geometric interpretation, Absolute maxima and minima. 2.2 Successive differentiations and Leibniz theorem.',
    estimatedMinutes: 60,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m2-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Lecture & PUST EECE 2022–23 Q1(c) [5.5 Marks], 2021–22 Q2(a) [5 Marks]',
        title:
          'Differentiability at a Point, Continuity vs. Differentiability & Geometric Meaning',
        summaryText:
          'f(x) is differentiable at x = a iff L.H.D. = R.H.D. (both finite). Every differentiable function is continuous, but the converse is false.',
        examYears: ['2022–23', '2021–22'],
        marks: '5–5.5 Marks',
        equations: [
          {
            label: 'Left-Hand & Right-Hand Derivatives at x = a',
            formula:
              'Lf′(a) = lim_{h→0⁻} [f(a + h) − f(a)] / h  |  Rf′(a) = lim_{h→0⁺} [f(a + h) − f(a)] / h',
          },
          {
            label: 'Slope of Tangent Line & Non-Differentiable Points',
            formula:
              'm_tan = tan θ = f′(a)  |  Fails at: (1) Corner (LHD ≠ RHD), (2) Vertical Tangent (f′ = ±∞), (3) Cusp',
          },
        ],
        problemStatement:
          '(1) Prove that differentiability implies continuity. (2) [PUST 2022–23 Q1c] Prove that f(x) = |x| is continuous at x = 0, but not differentiable at x = 0. (3) [PUST 2021–22 Q2a] Discuss the continuity and differentiability of f(x) = { 2x (x < 0); 2x² (0 ≤ x < 1); 4 − 2x (x ≥ 1) } at x = 1.',
        solutionSteps: [
          {
            stepTitle: '1. Theorem Proof: Differentiability Implies Continuity',
            explanation:
              'Assume f′(a) = lim_{x→a} [f(x) − f(a)] / (x − a) exists finitely:',
            equation:
              'lim_{x→a} [f(x) − f(a)]\n  = lim_{x→a} [ ((f(x) − f(a)) / (x − a)) · (x − a) ]\n  = [ lim_{x→a} (f(x) − f(a)) / (x − a) ] · [ lim_{x→a} (x − a) ]\n  = f′(a) · 0 = 0\n⇒  lim_{x→a} f(x) = f(a)\n∴  f(x) is continuous at x = a.  ■',
          },
          {
            stepTitle:
              '2. PUST 2022–23 Q1(c): Prove f(x) = |x| is continuous but not differentiable at x = 0',
            explanation: 'Test continuity and one-sided derivatives at x = 0:',
            equation:
              'Step 1 (Continuity at x = 0):\n  f(0) = 0\n  L.H.L. = lim_{x→0⁻} (−x) = 0\n  R.H.L. = lim_{x→0⁺} (+x) = 0\n  Since L.H.L. = R.H.L. = f(0) = 0,  f(x) = |x| is continuous at x = 0.\n\nStep 2 (Differentiability at x = 0):\n  L.H.D. = lim_{h→0⁻} [f(0 + h) − f(0)] / h\n         = lim_{h→0⁻} |h| / h\n         = lim_{h→0⁻} (−h) / h = −1   [∵ for h < 0, |h| = −h]\n\n  R.H.D. = lim_{h→0⁺} [f(0 + h) − f(0)] / h\n         = lim_{h→0⁺} |h| / h\n         = lim_{h→0⁺} (+h) / h = +1   [∵ for h > 0, |h| = +h]\n\n  Since L.H.D. (−1) ≠ R.H.D. (+1), f′(0) does not exist.\n  ∴  f(x) = |x| is not differentiable at x = 0.  ■',
          },
          {
            stepTitle: '3. PUST 2021–22 Q2(a): Continuity & Differentiability at x = 1',
            explanation: 'Evaluate L.H.L., R.H.L., L.H.D., and R.H.D. at x = 1:',
            equation:
              'Step 1 (Continuity at x = 1):\n  f(1) = 4 − 2(1) = 2\n  L.H.L. = lim_{x→1⁻} (2x²) = 2(1)² = 2\n  R.H.L. = lim_{x→1⁺} (4 − 2x) = 4 − 2(1) = 2\n  Since L.H.L. = R.H.L. = f(1) = 2,  f(x) is continuous at x = 1.\n\nStep 2 (Differentiability at x = 1):\n  L.H.D. = lim_{h→0⁻} [f(1 + h) − f(1)] / h\n         = lim_{h→0⁻} [2(1 + h)² − 2] / h\n         = lim_{h→0⁻} (4h + 2h²) / h = lim_{h→0⁻} (4 + 2h) = 4\n\n  R.H.D. = lim_{h→0⁺} [f(1 + h) − f(1)] / h\n         = lim_{h→0⁺} [4 − 2(1 + h) − 2] / h\n         = lim_{h→0⁺} (−2h) / h = −2\n\n  Since L.H.D. (4) ≠ R.H.D. (−2),  f(x) is not differentiable at x = 1.',
          },
        ],
        finalAnswer:
          'PUST 22–23 Q1c: Continuous (LHL=RHL=0), Not Differentiable (LHD=−1 ≠ RHD=+1)  |  PUST 21–22 Q2a: Continuous at x=1, Not Differentiable (LHD=4 ≠ RHD=−2)',
      },
      {
        id: 'math-m2-b2',
        type: 'example',
        priorityTier: 2,
        sourceCitation: 'Class Note · Unit 4.4 & Anton Sec. 4.4',
        title: 'Absolute (Global) Maxima and Minima on a Closed Interval [a, b]',
        summaryText:
          'Evaluate f(x) at all critical points c ∈ (a, b) where f′(c) = 0 or f′(c) DNE, and at the endpoints x = a, b.',
        problemStatement:
          'Find the absolute maximum and minimum values of f(x) = 2x³ − 15x² + 36x on the closed interval [1, 5].',
        solutionSteps: [
          {
            stepTitle: 'Step 1: Find critical points inside (1, 5)',
            explanation: 'Differentiate f(x) and set f′(x) = 0:',
            equation:
              'f(x) = 2x³ − 15x² + 36x\n⇒  f′(x) = 6x² − 30x + 36 = 6(x − 2)(x − 3)\nSetting f′(x) = 0  ⇒  x = 2, 3 ∈ (1, 5)',
          },
          {
            stepTitle: 'Step 2: Compare values at critical points and endpoints',
            explanation: 'Evaluate f(x) at x = 1, 2, 3, 5:',
            equation:
              'f(1) = 2(1)³ − 15(1)² + 36(1) = 23   [Smallest value ⇒ Absolute Minimum]\n  f(2) = 2(8) − 15(4) + 36(2)   = 28\n  f(3) = 2(27) − 15(9) + 36(3)  = 27\n  f(5) = 2(125) − 15(25) + 36(5) = 55  [Largest value  ⇒ Absolute Maximum]',
          },
        ],
        finalAnswer: 'Absolute Maximum = 55 (at x = 5),   Absolute Minimum = 23 (at x = 1)',
      },
      {
        id: 'math-m2-b3',
        type: 'memorize',
        priorityTier: 1,
        sourceCitation: 'Class Note · Unit 5.1 (Standard n-th Derivative Formulas y_n = Dⁿy)',
        title: 'Standard n-th Derivative Formulas, Partial Fractions & Trig Reduction',
        summaryText:
          'Complete reference table of n-th derivatives and worked solutions for rational partial fractions and trigonometric powers/products.',
        table: {
          caption: 'Table 2.1 — Standard n-th Derivative Formulas (y_n = dⁿy / dxⁿ)',
          headers: ['Function y = f(x)', 'n-th Derivative Formula y_n = Dⁿy'],
          rows: [
            [
              'y = x^m',
              'y_n = m(m − 1)···(m − n + 1) x^{m−n}. For m ∈ ℕ: D^m(x^m) = m!, and Dⁿ(x^m) = 0 for n > m.',
            ],
            [
              'y = (ax + b)^m',
              'y_n = m(m − 1)···(m − n + 1) aⁿ (ax + b)^{m−n}',
            ],
            [
              'y = 1 / (ax + b)',
              'y_n = [(−1)ⁿ · n! · aⁿ] / (ax + b)^{n+1}   (Special case: Dⁿ(1/x) = (−1)ⁿ n! / x^{n+1})',
            ],
            [
              'y = ln(ax + b)',
              'y_n = [(−1)^{n−1} · (n − 1)! · aⁿ] / (ax + b)ⁿ',
            ],
            [
              'y = e^{mx}  /  y = a^{mx}',
              'Dⁿ(e^{mx}) = mⁿ e^{mx}   |   Dⁿ(a^{mx}) = mⁿ (ln a)ⁿ a^{mx}',
            ],
            [
              'y = sin(ax + b)',
              'y_n = aⁿ · sin(ax + b + nπ/2)',
            ],
            [
              'y = cos(ax + b)',
              'y_n = aⁿ · cos(ax + b + nπ/2)',
            ],
            [
              'y = e^{ax} sin(bx + c)',
              'y_n = (a² + b²)^{n/2} · e^{ax} · sin(bx + c + n·tan⁻¹(b/a))',
            ],
            [
              'y = e^{ax} cos(bx + c)',
              'y_n = (a² + b²)^{n/2} · e^{ax} · cos(bx + c + n·tan⁻¹(b/a))',
            ],
            [
              'y = 1 / (x² + a²)',
              'y_n = [(−1)ⁿ · n! / a] · sin^{n+1}θ · sin((n + 1)θ),  where θ = tan⁻¹(a/x)',
            ],
          ],
        },
        problemStatement:
          'Find the n-th derivative y_n for: (1) y = x / [(x − 1)(x − 2)(x − 3)], (2) y = sin³x, and (3) y = sin x · sin 3x.',
        solutionSteps: [
          {
            stepTitle: '1. Partial Fraction Decomposition: y = x / [(x − 1)(x − 2)(x − 3)]',
            explanation: 'Use the cover-up rule to find A, B, C and apply Dⁿ[1/(x − k)]:',
            equation:
              'Let  x / [(x − 1)(x − 2)(x − 3)] = A/(x − 1) + B/(x − 2) + C/(x − 3)\n  For x = 1:  A = 1 / [(1 − 2)(1 − 3)] = +1/2\n  For x = 2:  B = 2 / [(2 − 1)(2 − 3)] = −2\n  For x = 3:  C = 3 / [(3 − 1)(3 − 2)] = +3/2\n\n⇒  y = 1/[2(x − 1)] − 2/(x − 2) + 3/[2(x − 3)]\n⇒  y_n = (−1)ⁿ n! · [ 1/(2(x − 1)^{n+1}) − 2/(x − 2)^{n+1} + 3/(2(x − 3)^{n+1}) ]',
          },
          {
            stepTitle: '2. Trigonometric Reduction: (a) y = sin³x and (b) y = sin x sin 3x',
            explanation: 'Linearize powers and products of sines/cosines before differentiating:',
            equation:
              '(a) y = sin³x = ¼ (3 sin x − sin 3x)   [∵ sin 3x = 3 sin x − 4 sin³x]\n    ⇒  y_n = (3/4) sin(x + nπ/2) − (3ⁿ / 4) sin(3x + nπ/2)\n\n(b) y = sin x sin 3x = ½ (2 sin 3x sin x)\n      = ½ (cos 2x − cos 4x)   [∵ 2 sin A sin B = cos(A − B) − cos(A + B)]\n    ⇒  y_n = ½ [ 2ⁿ cos(2x + nπ/2) − 4ⁿ cos(4x + nπ/2) ]',
          },
        ],
        finalAnswer:
          'y_n = (−1)ⁿn! [1/(2(x−1)^{n+1}) − 2/(x−2)^{n+1} + 3/(2(x−3)^{n+1})]  |  Dⁿ(sin³x) = (3/4)sin(x+nπ/2) − (3ⁿ/4)sin(3x+nπ/2)',
      },
      {
        id: 'math-m2-b4',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q2(b) [4.5 Marks], Q4(c) [5 Marks], 2021–22 Q2(b) [5 Marks], 2020–21 Q2(a) [5 Marks]',
        title:
          'Leibniz’s Theorem: Statement, Induction Proof & Complete PUST Exam Derivations (with y_n(0))',
        summaryText:
          '(uv)_n = u_n v + ⁿC₁ u_{n−1} v₁ + ⁿC₂ u_{n−2} v₂ + ··· + ⁿC_r u_{n−r} v_r + ··· + u v_n.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4.5–5 Marks',
        equations: [
          {
            label: 'Leibniz’s Theorem Formula',
            formula:
              '(u · v)_n = u_n v + ⁿC₁ u_{n−1} v₁ + ⁿC₂ u_{n−2} v₂ + ··· + ⁿC_r u_{n−r} v_r + ··· + u v_n',
          },
          {
            label: 'Standard Leibniz Term Expansions',
            formula:
              'Dⁿ[(1 − x²)y₂] = (1 − x²)y_{n+2} − 2nx y_{n+1} − n(n − 1)y_n  |  Dⁿ[x y₁] = x y_{n+1} + n y_n',
            note: 'Always eliminate radicals by cross-multiplying and squaring y₁ before differentiating for y₂',
          },
        ],
        problemStatement:
          '(1) [PUST 2022–23 Q2b] State and prove Leibniz’s Theorem by mathematical induction. (2) [PUST 2020–21 Q2a] If y = sin(m sin⁻¹x), show that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} + (m² − n²)y_n = 0 and find y_n(0). (3) [PUST 2022–23 Q4c] If y = e^{a sin⁻¹x}, show that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + a²)y_n = 0 and find y_n(0). (4) [PUST 2021–22 Q2b] If y = (x² − 1)ⁿ, prove (x² − 1)y_{n+2} + 2xy_{n+1} − n(n + 1)y_n = 0. (5) [Class Lecture] (a) y = a cos(ln x) + b sin(ln x) and (b) y^{1/m} + y^{−1/m} = 2x.',
        solutionSteps: [
          {
            stepTitle: '1. Proof of Leibniz’s Theorem by Mathematical Induction (PUST 2022–23 Q2b)',
            explanation: 'Verify base step n = 1, 2 and inductive step n = m → m + 1 using Pascal’s identity:',
            equation:
              'Step 1 (Base Step n = 1, 2):\n  (uv)₁ = u₁v + uv₁ = u₁v + ¹C₁ u v₁\n  (uv)₂ = u₂v + 2u₁v₁ + uv₂ = u₂v + ²C₁ u₁v₁ + ²C₂ u v₂\n  Hence the theorem holds for n = 1 and n = 2.\n\nStep 2 (Inductive Hypothesis):\n  Assume the formula holds for n = m:\n  (uv)_m = u_m v + ^mC₁ u_{m−1} v₁ + ^mC₂ u_{m−2} v₂ + ··· + ^mC_r u_{m−r} v_r + ··· + u v_m\n\nStep 3 (Inductive Step for n = m + 1):\n  Differentiating both sides once more with respect to x:\n  (uv)_{m+1} = (u_{m+1}v + u_m v₁) + ^mC₁(u_m v₁ + u_{m−1}v₂) + ··· + (u₁v_m + u v_{m+1})\n             = u_{m+1}v + [^mC₀ + ^mC₁] u_m v₁ + ··· + [^mC_{r−1} + ^mC_r] u_{m+1−r} v_r + ··· + u v_{m+1}\n             = u_{m+1}v + ^{m+1}C₁ u_m v₁ + ··· + ^{m+1}C_r u_{m+1−r} v_r + ··· + u v_{m+1}\n               [∵ ^mC_{r−1} + ^mC_r = ^{m+1}C_r]\n  ∴  By mathematical induction, Leibniz’s Theorem holds for all n ∈ ℕ.  ■',
          },
          {
            stepTitle:
              '2. PUST 2020–21 Q2(a): y = sin(m sin⁻¹x) and evaluation of y_n(0)',
            explanation: 'Cross-multiply √(1 − x²), square both sides, differentiate, and apply Leibniz’s Theorem:',
            equation:
              'Given,  y = sin(m sin⁻¹x)\n  ⇒  y₁ = [m cos(m sin⁻¹x)] / √(1 − x²)\n  ⇒  (1 − x²)y₁² = m² cos²(m sin⁻¹x)\n  ⇒  (1 − x²)y₁² = m²(1 − y²)          [∵ cos²θ = 1 − sin²θ = 1 − y²]\n  ⇒  (1 − x²)(2y₁y₂) − 2x y₁² = −2m² y y₁   [Differentiating w.r.t. x]\n  ⇒  (1 − x²)y₂ − x y₁ + m² y = 0      [Dividing by 2y₁ ≠ 0]  --- (1)\n\nApplying Leibniz’s Theorem (Dⁿ) to (1):\n  [(1 − x²)y_{n+2} − 2nx y_{n+1} − n(n − 1)y_n] − [x y_{n+1} + n y_n] + m² y_n = 0\n  ⇒  (1 − x²)y_{n+2} − (2n + 1)x y_{n+1} + (m² − n²)y_n = 0    --- (2)\n\nFinding y_n(0): Put x = 0 in y, y₁, (1), and (2):\n  y(0) = 0,   y₁(0) = m,   y₂(0) = 0,\n  y_{n+2}(0) = (n² − m²) y_n(0)\n  • When n is even:  y_n(0) = 0\n  • When n is odd (n ≥ 3):  y_n(0) = m(1² − m²)(3² − m²)(5² − m²)···((n − 2)² − m²)  ■',
          },
          {
            stepTitle:
              '3. PUST 2022–23 Q4(c) & 2021–22 Q2(b): y = e^{a sin⁻¹x} (with y_n(0)) and y = (x² − 1)ⁿ',
            explanation: 'Vertical derivations for exponential inverse-sine and Legendre polynomial forms:',
            equation:
              'Problem A (PUST 2022–23 Q4c):  y = e^{a sin⁻¹x}\n  ⇒  y₁ = a e^{a sin⁻¹x} / √(1 − x²) = a y / √(1 − x²)\n  ⇒  (1 − x²)y₁² = a² y²\n  ⇒  (1 − x²)(2y₁y₂) − 2x y₁² = 2a² y y₁\n  ⇒  (1 − x²)y₂ − x y₁ − a² y = 0\n  ⇒  (1 − x²)y_{n+2} − (2n + 1)x y_{n+1} − (n² + a²)y_n = 0   [By Leibniz’s Theorem]\n  At x = 0:  y(0) = 1,  y₁(0) = a,  y₂(0) = a²,  and  y_{n+2}(0) = (n² + a²)y_n(0):\n    • Even n: y_n(0) = a²(2² + a²)(4² + a²)···((n − 2)² + a²)\n    • Odd n:  y_n(0) = a(1² + a²)(3² + a²)···((n − 2)² + a²)\n\nProblem B (PUST 2021–22 Q2b):  y = (x² − 1)ⁿ\n  ⇒  y₁ = 2nx(x² − 1)^{n−1}\n  ⇒  (x² − 1)y₁ = 2nxy\n  ⇒  (x² − 1)y₂ + 2xy₁ = 2n(xy₁ + y)\n  ⇒  (x² − 1)y₂ − 2(n − 1)xy₁ − 2ny = 0\n  ⇒  [(x² − 1)y_{n+2} + 2nx y_{n+1} + n(n − 1)y_n] − 2(n − 1)[x y_{n+1} + n y_n] − 2n y_n = 0\n  ⇒  (x² − 1)y_{n+2} + 2x y_{n+1} − n(n + 1)y_n = 0  ■',
          },
          {
            stepTitle:
              '4. Class Problems: y = a cos(ln x) + b sin(ln x) and y^{1/m} + y^{−1/m} = 2x',
            explanation: 'Eliminating denominators before applying Leibniz’s Theorem:',
            equation:
              '(a) Given,  y = a cos(ln x) + b sin(ln x)\n    ⇒  y₁ = [−a sin(ln x) + b cos(ln x)] / x\n    ⇒  x y₁ = −a sin(ln x) + b cos(ln x)\n    ⇒  x y₂ + y₁ = [−a cos(ln x) − b sin(ln x)] / x = −y / x\n    ⇒  x² y₂ + x y₁ + y = 0\n    ⇒  x² y_{n+2} + (2n + 1)x y_{n+1} + (n² + 1)y_n = 0  ■\n\n(b) Given,  y^{1/m} + 1 / y^{1/m} = 2x\n    ⇒  (y^{1/m})² − 2x(y^{1/m}) + 1 = 0\n    ⇒  y^{1/m} = x ± √(x² − 1)  ⇒  y = (x ± √(x² − 1))^m\n    ⇒  y₁ = ±m y / √(x² − 1)  ⇒  (x² − 1)y₁² = m² y²\n    ⇒  (x² − 1)y₂ + x y₁ − m² y = 0\n    ⇒  (x² − 1)y_{n+2} + (2n + 1)x y_{n+1} + (n² − m²)y_n = 0  ■',
          },
        ],
        finalAnswer:
          'All Leibniz Differential Equations & y_n(0) Recurrences Proved (■)',
      },
    ],
  },

  // ===========================================================================
  // MODULE 03: MEAN VALUE THEOREMS, SERIES EXPANSION & MAXIMA/MINIMA (Units 6–9)
  // ===========================================================================
  {
    id: 'math1101-ch03',
    unitNumber: 'Module 03',
    title: 'Mean Value Theorems, Series Expansion and Maxima/Minima',
    summary:
      "3.1 Rolle's Theorem, Mean value Theorem, Taylor's and Maclaurin's Theorems, approximation of a function by polynomials and series, indeterminate forms and L'Hospital's rule. 3.2 Application of derivative for curve tracing, maxima and minima of functions of a single variable.",
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m3-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Lecture & PUST EECE 2022–23 Q2(a) [5.5 Marks], 2021–22 Q1(b,c) [9 Marks], 2020–21 Q2(b) [4.5 Marks]',
        title:
          'Rolle’s Theorem, Lagrange’s Mean Value Theorem (MVT) & Cauchy’s MVT: Proofs & Handout Solutions',
        summaryText:
          'Rolle’s Theorem: f(a) = f(b) ⇒ f′(c) = 0 for some c ∈ (a, b). Lagrange’s MVT: f′(c) = [f(b) − f(a)] / (b − a) for some c ∈ (a, b).',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4.5–5.5 Marks',
        equations: [
          {
            label: 'Rolle’s Theorem Condition & Conclusion',
            formula:
              'Continuous on [a, b], Differentiable on (a, b), f(a) = f(b)  ⇒  ∃ c ∈ (a, b) : f′(c) = 0',
          },
          {
            label: 'Lagrange’s Mean Value Theorem (MVT)',
            formula:
              'Continuous on [a, b], Differentiable on (a, b)  ⇒  ∃ c ∈ (a, b) : f′(c) = [f(b) − f(a)] / (b − a)',
          },
          {
            label: 'Cauchy’s Generalized Mean Value Theorem',
            formula:
              'f′(c) / g′(c) = [f(b) − f(a)] / [g(b) − g(a)]   (where g′(x) ≠ 0 on (a, b))',
          },
        ],
        problemStatement:
          '(1) [PUST 2022–23 Q2a] State and prove Rolle’s Theorem. (2) [PUST 2021–22 Q1b] State and prove Lagrange’s Mean Value Theorem. (3) [PUST 2021–22 Q1c] Verify Rolle’s Theorem for f(x) = x(x − 3)² on [0, 3]. (4) [PUST 2020–21 Q2b & Handout #3] Verify Lagrange’s MVT for f(x) = x(x − 1)(x − 2) on [0, 1/2]. (5) [Handout #2, #5, #6, #9] Solve the key Rolle’s & MVT Handout problems.',
        solutionSteps: [
          {
            stepTitle: '1. Proof of Rolle’s Theorem (PUST 2022–23 Q2a)',
            explanation:
              'By the Extreme Value Theorem, continuous f(x) on [a, b] attains an absolute maximum M and absolute minimum m:',
            equation:
              'Case 1 (M = m):\n  Then f(x) is constant on [a, b], so f′(c) = 0 for every c ∈ (a, b).\n\nCase 2 (M > m):\n  Since f(a) = f(b), at least one of M or m differs from the endpoint value f(a)\n  and must occur at an interior point c ∈ (a, b).\n  Because f(x) has a local extremum at c and is differentiable at c,\n  Fermat’s Theorem gives  f′(c) = 0.  ■',
          },
          {
            stepTitle: '2. Proof of Lagrange’s Mean Value Theorem (PUST 2021–22 Q1b)',
            explanation:
              'Construct the auxiliary function φ(x) = f(x) + Ax such that φ(a) = φ(b):',
            equation:
              'Let  φ(x) = f(x) + Ax,  where constant A is chosen so that φ(a) = φ(b):\n  f(a) + Aa = f(b) + Ab\n  ⇒  A(b − a) = −[f(b) − f(a)]\n  ⇒  A = −[f(b) − f(a)] / (b − a)\n\nSince φ(x) is continuous on [a, b], differentiable on (a, b), and φ(a) = φ(b),\nby Rolle’s Theorem there exists c ∈ (a, b) such that φ′(c) = 0:\n  f′(c) + A = 0\n  ⇒  f′(c) = −A = [f(b) − f(a)] / (b − a).  ■',
          },
          {
            stepTitle: '3. PUST 2021–22 Q1(c) & PUST 2020–21 Q2(b) Verifications',
            explanation: 'Verify hypotheses and solve for c strictly inside the open interval (a, b):',
            equation:
              '(a) PUST 2021–22 Q1(c):  f(x) = x(x − 3)² = x³ − 6x² + 9x  on [0, 3]\n    f(0) = 0,  f(3) = 0  ⇒  f(0) = f(3) = 0\n    f′(c) = 3c² − 12c + 9 = 3(c − 1)(c − 3) = 0\n    ⇒  c = 1, 3\n    Since c = 1 ∈ (0, 3), Rolle’s Theorem is verified.\n\n(b) PUST 2020–21 Q2(b) (Handout #3):  f(x) = x(x − 1)(x − 2) = x³ − 3x² + 2x  on [0, 1/2]\n    f(0) = 0,   f(1/2) = (1/2)(−1/2)(−3/2) = 3/8\n    f′(c) = [f(1/2) − f(0)] / (1/2 − 0)\n    ⇒  3c² − 6c + 2 = (3/8) / (1/2) = 3/4\n    ⇒  12c² − 24c + 5 = 0\n    ⇒  c = [24 ± √(576 − 240)] / 24 = (6 ± √21) / 6\n    ∴  c = (6 − √21) / 6 ≈ 0.236 ∈ (0, 1/2)   [Verified]',
          },
          {
            stepTitle: '4. Rolle’s & MVT Handout Problems (#2, #5, #6, #9)',
            explanation: 'Vertical solutions for logarithmic, exponential-trig, and inverse-parameter problems:',
            equation:
              '• Handout #2:  f(x) = ln[(x² + ab) / (x(a + b))]  on [a, b]  (0 ∉ [a, b])\n    f(a) = ln 1 = 0,   f(b) = ln 1 = 0\n    f′(c) = 2c/(c² + ab) − 1/c = (c² − ab) / [c(c² + ab)] = 0\n    ⇒  c = √(ab) ∈ (a, b)   [Geometric mean]\n\n• Handout #5:  f(x) = e^x sin x  on [0, π]\n    f(0) = f(π) = 0\n    f′(c) = e^c(sin c + cos c) = 0  ⇒  tan c = −1  ⇒  c = 3π/4 ∈ (0, π)\n\n• Handout #6:  f(x) = e^{2x}(sin 2x − cos 2x)  on [π/8, 5π/8]\n    f′(c) = 4e^{2c} sin 2c = 0  ⇒  2c = π  ⇒  c = π/2 ∈ (π/8, 5π/8)\n\n• Handout #9:  f(x) = x³ + ax² + bx  on [1, 2] with c = 4/3\n    f(1) = f(2)  ⇒  1 + a + b = 8 + 4a + 2b  ⇒  3a + b = −7\n    f′(4/3) = 0  ⇒  3(16/9) + 2a(4/3) + b = 0  ⇒  8a + 3b = −16\n    ∴  a = −5,   b = 8',
          },
        ],
        finalAnswer:
          'PUST 21–22 Q1c: c = 1 ∈ (0, 3)  |  PUST 20–21 Q2b: c = (6 − √21)/6  |  Handout #2: c = √(ab)  |  Handout #9: a = −5, b = 8',
      },
      {
        id: 'math-m3-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q4(a) [4 Marks] & 2021–22 Q4(a) [4.5 Marks] · Anton Sec. 9.8–9.9',
        title:
          'Power Series, Taylor’s Series (with Remainder) & Maclaurin’s Series Expansions',
        summaryText:
          'Taylor’s Series about x = a: f(x) = ∑ [f^{(n)}(a)/n!](x − a)ⁿ. Maclaurin’s Series (a = 0): f(x) = ∑ [f^{(n)}(0)/n!]xⁿ.',
        examYears: ['2022–23', '2021–22'],
        marks: '4–4.5 Marks',
        equations: [
          {
            label: 'Taylor’s Series with Lagrange’s Remainder R_n(x)',
            formula:
              'f(x) = f(a) + (x−a)f′(a) + [(x−a)²/2!]f′′(a) + ··· + [(x−a)ⁿ/n!]f^{(n)}(c)  (c between a and x)',
          },
          {
            label: 'Maclaurin’s Series Formula (a = 0)',
            formula:
              'f(x) = f(0) + x f′(0) + (x²/2!) f′′(0) + (x³/3!) f′′′(0) + ··· = ∑_{n=0}^∞ [f^{(n)}(0) / n!] xⁿ',
          },
          {
            label: 'Standard Maclaurin Expansions (e^x, sin x, cos x)',
            formula:
              'e^x = 1 + x + x²/2! + x³/3! + ···  |  sin x = x − x³/3! + x⁵/5! − ···  |  cos x = 1 − x²/2! + x⁴/4! − ···',
          },
          {
            label: 'Logarithmic & Binomial Maclaurin Series',
            formula:
              'ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + ··· (−1 < x ≤ 1)  |  (1 + x)^m = 1 + mx + [m(m−1)/2!]x² + ··· (|x| < 1)',
          },
        ],
        problemStatement:
          '(1) [PUST 2021–22 Q4a] State Maclaurin’s theorem and expand ln(1 + x) in an infinite series. (2) [PUST 2022–23 Q4a] Expand y = e^x sec x in ascending powers of x up to the x³ term using Maclaurin’s series. (3) [Anton 9.8 Ex. 45] Find the radius and interval of convergence of ∑ (−1)^{k+1}(x + 1)^k / k.',
        solutionSteps: [
          {
            stepTitle: '1. PUST 2021–22 Q4(a): Maclaurin Expansion of ln(1 + x)',
            explanation: 'Compute derivatives of f(x) = ln(1 + x) at x = 0:',
            equation:
              'f(x)    = ln(1 + x)       ⇒  f(0)    = ln 1 = 0\nf′(x)   = (1 + x)⁻¹       ⇒  f′(0)   = 1\nf′′(x)  = −(1 + x)⁻²      ⇒  f′′(0)  = −1\nf′′′(x) = 2!(1 + x)⁻³     ⇒  f′′′(0) = 2!\nf^{(iv)}(x) = −3!(1 + x)⁻⁴ ⇒  f^{(iv)}(0) = −3!\n\nSubstituting into Maclaurin’s series f(x) = f(0) + x f′(0) + (x²/2!)f′′(0) + ···:\n  ∴  ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + ··· + (−1)^{n−1} (xⁿ / n) + ···',
          },
          {
            stepTitle: '2. PUST 2022–23 Q4(a): Maclaurin Expansion of y = e^x sec x up to x³',
            explanation: 'Use implicit/recursive differentiation y₁ = y(1 + tan x) for rapid evaluation at x = 0:',
            equation:
              'y  = e^x sec x                                  ⇒  y(0)  = 1(1) = 1\ny₁ = e^x sec x + e^x sec x tan x = y(1 + tan x)  ⇒  y₁(0) = 1(1 + 0) = 1\ny₂ = y₁(1 + tan x) + y sec²x                   ⇒  y₂(0) = 1(1) + 1(1) = 2\ny₃ = y₂(1 + tan x) + 2y₁ sec²x + 2y sec²x tan x ⇒  y₃(0) = 2(1) + 2(1)(1) + 0 = 4\n\nSubstituting into Maclaurin’s series:\n  e^x sec x = y(0) + x y₁(0) + (x²/2!) y₂(0) + (x³/3!) y₃(0) + ···\n           = 1 + x + (2/2)x² + (4/6)x³ + ···\n           = 1 + x + x² + (2/3)x³ + ···',
          },
          {
            stepTitle: '3. Anton 9.8 Ex. 45: Radius & Interval of Convergence',
            explanation: 'Apply the Ratio Test and check both endpoints x = −2 and x = 0:',
            equation:
              'u_k = (−1)^{k+1} (x + 1)^k / k\nlim_{k→∞} |u_{k+1} / u_k| = lim_{k→∞} [k / (k + 1)] · |x + 1| = |x + 1| < 1\n⇒  Radius of convergence R = 1,  and  −2 < x < 0\nEndpoint checks:\n  • At x = −2:  ∑ (−1)^{2k+1} / k = −∑ 1/k  (Diverges, harmonic series)\n  • At x = 0:   ∑ (−1)^{k+1} / k            (Converges, alternating harmonic series)\n∴  Interval of Convergence, I = (−2, 0]',
          },
        ],
        finalAnswer:
          'ln(1+x) = x − x²/2 + x³/3 − x⁴/4 + ···  |  e^x sec x = 1 + x + x² + (2/3)x³ + ···  |  R = 1, I = (−2, 0]',
      },
      {
        id: 'math-m3-b3',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q4(b) [5 Marks], 2021–22 Q4(b) [5 Marks], 2020–21 Q2(c) [4.5 Marks] · Anton Sec. 3.6',
        title: 'Indeterminate Forms & L’Hôpital’s Rule (Complete Past Exam & Anton 3.6 Solutions)',
        summaryText:
          'The 7 indeterminate forms are 0/0, ∞/∞, 0·∞, ∞ − ∞, 0⁰, 1^∞, ∞⁰. Reduce all forms to 0/0 or ∞/∞ before differentiating numerator and denominator separately.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4.5–5 Marks',
        equations: [
          {
            label: 'L’Hôpital’s Rule (for 0/0 or ∞/∞)',
            formula: 'lim_{x→a} [f(x) / g(x)] = lim_{x→a} [f′(x) / g′(x)]',
          },
          {
            label: 'Logarithmic Reduction for Exponential Indeterminate Forms (0⁰, 1^∞, ∞⁰)',
            formula:
              'y = [f(x)]^{g(x)}  ⇒  ln y = [ln f(x)] / [1 / g(x)]  ⇒  lim_{x→a} y = e^{lim ln y}',
            note: 'Never forget to exponentiate e^L at the final step!',
          },
        ],
        problemStatement:
          'Evaluate using L’Hôpital’s Rule: (1) [PUST 2020–21 Q2c] (i) lim_{x→0} (1/x − 1/sin x) and (ii) lim_{x→0} (1 + sin x)^{1/x}; (2) [PUST 2022–23 Q4b & 2021–22 Q4b] (i) lim_{x→0} (e^x + e^{-x} − 2 cos x)/(x sin x), (ii) lim_{x→0} (cos x)^{cot²x}, (iii) lim_{x→0} (tan x − x)/(x² tan x), and (iv) lim_{x→π/2} (sin x)^{tan x}; (3) [Anton 3.6 Ex. 66] Find k and l given lim_{x→0} (k + cos lx)/x² = −4.',
        solutionSteps: [
          {
            stepTitle: '1. PUST 2020–21 Q2(c) [4.5 Marks]',
            explanation: 'Combine fractions for ∞ − ∞ and take natural log for 1^∞:',
            equation:
              '(i) L = lim_{x→0} (1/x − 1/sin x)                              [Form ∞ − ∞]\n      = lim_{x→0} (sin x − x) / (x sin x)                      [Form 0/0, apply L’Hôpital]\n      = lim_{x→0} (cos x − 1) / (sin x + x cos x)              [Form 0/0, apply L’Hôpital]\n      = lim_{x→0} (−sin x) / (2 cos x − x sin x) = 0 / 2 = 0\n\n(ii) Let  y = (1 + sin x)^{1/x}                                [Form 1^∞]\n     ⇒  ln y = ln(1 + sin x) / x                             [Form 0/0]\n     ⇒  lim_{x→0} ln y = lim_{x→0} [cos x / (1 + sin x)] / 1 = 1\n     ∴   lim_{x→0} y = e¹ = e',
          },
          {
            stepTitle: '2. PUST 2022–23 Q4(b) & 2021–22 Q4(b) [5 Marks]',
            explanation: 'Vertical step-by-step evaluation of all four past-paper limits:',
            equation:
              '(i) L = lim_{x→0} (e^x + e^{-x} − 2 cos x) / (x sin x)            [Form 0/0]\n      = lim_{x→0} (e^x − e^{-x} + 2 sin x) / (sin x + x cos x)    [Form 0/0]\n      = lim_{x→0} (e^x + e^{-x} + 2 cos x) / (2 cos x − x sin x)\n      = (1 + 1 + 2) / (2 − 0) = 2\n\n(ii) Let  y = (cos x)^{cot²x}  ⇒  ln y = ln(cos x) / tan²x    [Form 0/0]\n     ⇒  lim_{x→0} ln y = lim_{x→0} (−tan x) / (2 tan x sec²x)\n                        = lim_{x→0} (−1) / (2 sec²x) = −1/2\n     ∴   lim_{x→0} y = e^{−1/2} = 1 / √e\n\n(iii) L = lim_{x→0} [ (tan x − x)/x³ · (x / tan x) ]\n        = lim_{x→0} [ (sec²x − 1) / (3x²) ] · 1\n        = (1/3) lim_{x→0} (tan x / x)² = 1/3\n\n(iv) Let  y = (sin x)^{tan x}  ⇒  ln y = ln(sin x) / cot x    [Form 0/0 at x = π/2]\n     ⇒  lim_{x→π/2} ln y = lim_{x→π/2} cot x / (−csc²x)\n                          = lim_{x→π/2} (−sin x cos x) = 0\n     ∴   lim_{x→π/2} y = e⁰ = 1',
          },
          {
            stepTitle: '3. Anton 3.6 Ex. 66: Unknown Parameters k and l',
            explanation: 'Enforce numerator → 0 at x = 0 for finite limit existence:',
            equation:
              'Given,  lim_{x→0} (k + cos lx) / x² = −4\nSince denominator x² → 0, numerator must also approach 0:\n  k + cos 0 = 0  ⇒  k = −1\nNow apply L’Hôpital’s Rule:\n  lim_{x→0} (−1 + cos lx) / x² = lim_{x→0} (−l sin lx) / (2x) = −l² / 2 = −4\n  ⇒  l² = 8  ⇒  l = ±2√2',
          },
        ],
        finalAnswer:
          '20–21 Q2c: (i) 0, (ii) e  |  22–23 Q4b: (i) 2, (ii) 1/√e, (iii) 1/3, (iv) 1  |  Anton Ex. 66: k = −1, l = ±2√2',
      },
      {
        id: 'math-m3-b4',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q2(c) [4 Marks], 2021–22 Q2(c) [4 Marks], Q3(c) [4.5 Marks], 2020–21 Q4(a) [5 Marks]',
        title:
          'Maxima/Minima, Concavity, Inflection Points & Curve Tracing (with Worked Example)',
        summaryText:
          'f′(x) > 0 ⇒ increasing; f′(x) < 0 ⇒ decreasing. f′′(x) > 0 ⇒ concave up (∪); f′′(x) < 0 ⇒ concave down (∩). Inflection point occurs where f′′(x) changes sign.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4–5 Marks',
        equations: [
          {
            label: 'First & Second Derivative Tests at Critical Point f′(c) = 0',
            formula:
              'f′′(c) < 0 ⇒ Local Maximum  |  f′′(c) > 0 ⇒ Local Minimum  |  f′′(c) = 0 ⇒ Use 1st-Derivative Sign Chart',
          },
          {
            label: 'Four-Step Curve Tracing Working Rule',
            formula:
              '1. Symmetry (x/y/origin/y=x)  →  2. Origin & Tangents  →  3. Intercepts & Asymptotes  →  4. Excluded Regions & Extrema',
          },
        ],
        problemStatement:
          '(1) [PUST 2021–22 Q2c] Find critical points, inflection points, relative extrema, and intervals of monotonicity/concavity for f(x) = 3x⁵ − 5x³ + 2. (2) Solve PUST 2022–23 Q2(c) [f(x) = x³ − 6x² + 9x + 1], PUST 2021–22 Q3(c) [f(x) = 2x³ − 21x² + 36x − 20], and PUST 2020–21 Q4(a) [f(x) = x⁴ − 4x³ + 10]. (3) Trace the curve y²(2a − x) = x³ (Cissoid of Diocles).',
        solutionSteps: [
          {
            stepTitle: '1. PUST 2021–22 Q2(c): Complete Analysis of f(x) = 3x⁵ − 5x³ + 2',
            explanation:
              'Note that f′′(0) = 0, so use the First Derivative sign chart at x = −1, 0, 1:',
            equation:
              'Given,  f(x) = 3x⁵ − 5x³ + 2\n  f′(x)  = 15x⁴ − 15x² = 15x²(x + 1)(x − 1) = 0  ⇒  Critical points: x = −1, 0, 1\n  f′′(x) = 60x³ − 30x  = 30x(2x² − 1) = 0        ⇒  Inflection x = −1/√2, 0, +1/√2\n\nSign of f′(x):\n  • On (−∞, −1):  f′(x) > 0  (Strictly Increasing)\n  • On (−1, 0):   f′(x) < 0  (Strictly Decreasing)\n  • On (0, 1):    f′(x) < 0  (Strictly Decreasing — x = 0 is a stationary inflection point)\n  • On (1, ∞):    f′(x) > 0  (Strictly Increasing)\n  ∴  Increasing on (−∞, −1] ∪ [1, ∞);   Decreasing on [−1, 1]\n\nRelative Extrema:\n  • At x = −1:  f′ changes + → −  ⇒  Local Maximum  f(−1) = −3 + 5 + 2 = 4\n  • At x = +1:  f′ changes − → +  ⇒  Local Minimum  f(1)  = 3 − 5 + 2  = 0\n\nConcavity & Inflection Points:\n  • Concave Up (f′′ > 0):    (−1/√2, 0) ∪ (1/√2, ∞)\n  • Concave Down (f′′ < 0):  (−∞, −1/√2) ∪ (0, 1/√2)\n  • Inflection Points:       x = −1/√2,  0,  +1/√2',
          },
          {
            stepTitle: '2. PUST 2022–23 Q2(c), 2021–22 Q3(c) & 2020–21 Q4(a)',
            explanation: 'Vertical solutions for the three polynomial extrema past exam questions:',
            equation:
              '• PUST 2022–23 Q2(c):  f(x) = x³ − 6x² + 9x + 1\n    f′(x) = 3(x − 1)(x − 3) = 0  ⇒  x = 1, 3;   f′′(x) = 6x − 12\n    At x = 1: f′′(1) = −6 < 0  ⇒  Local Max f(1) = 5\n    At x = 3: f′′(3) = +6 > 0  ⇒  Local Min f(3) = 1\n\n• PUST 2021–22 Q3(c):  f(x) = 2x³ − 21x² + 36x − 20\n    f′(x) = 6(x − 1)(x − 6) = 0  ⇒  x = 1, 6;   f′′(x) = 12x − 42\n    At x = 1: f′′(1) = −30 < 0  ⇒  Local Max f(1) = −3\n    At x = 6: f′′(6) = +30 > 0  ⇒  Local Min f(6) = −128\n\n• PUST 2020–21 Q4(a):  f(x) = x⁴ − 4x³ + 10\n    f′(x) = 4x²(x − 3) = 0  ⇒  x = 0, 3\n    Decreasing on (−∞, 3],  Increasing on [3, ∞),  Local Min f(3) = −17\n    f′′(x) = 12x(x − 2) = 0  ⇒  Inflection points at (0, 10) and (2, −6)',
          },
          {
            stepTitle: '3. Worked Curve Tracing Example: Cissoid y²(2a − x) = x³ (a > 0)',
            explanation: 'Apply the 4-step curve tracing procedure:',
            equation:
              '1. Symmetry: Only even power of y (y²) appears  ⇒  Symmetric about the x-axis.\n2. Origin & Tangent at Origin: Passes through (0, 0). Equating lowest degree terms\n   2ay² = 0  ⇒  y = 0 (repeated)  ⇒  Origin (0, 0) is a cusp with x-axis as tangent.\n3. Asymptotes: Equating coefficient of highest power of y (y²) to zero:\n   2a − x = 0  ⇒  x = 2a  is the vertical asymptote.\n4. Region of Exclusion: y² = x³ / (2a − x) < 0 when x < 0 or x > 2a.\n   ∴  The entire curve lies strictly inside the strip  0 ≤ x < 2a.',
          },
        ],
        finalAnswer:
          'PUST 21–22 Q2c: Max f(−1)=4, Min f(1)=0, Inflection x=0, ±1/√2  |  22–23 Q2c: Max=5, Min=1  |  20–21 Q4a: Min=−17',
      },
    ],
  },

  // ===========================================================================
  // MODULE 04: TANGENT, NORMAL, CURVATURE & FUNCTIONS OF DOUBLE VARIABLES (Units 10–13)
  // ===========================================================================
  {
    id: 'math1101-ch04',
    unitNumber: 'Module 04',
    title: 'Tangent, Normal, Curvature and Functions of Double Variables',
    summary:
      "4.1 Tangent, normal, Asymptote, curvature. 4.2 Function of double variables, domain, continuity, partial derivatives and total derivative, Euler's Theorem, Jacobian and Hessian.",
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m4-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q3(b,c) [9 Marks], 2021–22 Q3(b) [5 Marks], 2020–21 Q3(c), Q4(b,c) [13.5 Marks]',
        title:
          'Tangent & Normal Lines, Oblique Asymptotes, and Radius of Curvature (ρ)',
        summaryText:
          'Complete formulas and solved PUST past exam problems for implicit tangents/normals, oblique asymptotes φ_n(m) = 0, and Cartesian/Parametric/Polar/Origin radius of curvature.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4–5 Marks',
        equations: [
          {
            label: 'Equations of Tangent & Normal at P(x₁, y₁)',
            formula:
              'Tangent: y − y₁ = m(x − x₁)  |  Normal: y − y₁ = −(1/m)(x − x₁),  where m = (dy/dx)_{(x₁,y₁)}',
          },
          {
            label: 'Oblique Asymptotes y = mx + c of Degree-n Curve',
            formula:
              'Slopes m from φ_n(m) = 0  |  Intercept c = − φ_{n−1}(m) / φ′_n(m)   (for non-repeated roots)',
          },
          {
            label: 'Radius of Curvature (Cartesian, Parametric & Polar Forms)',
            formula:
              'Cartesian: ρ = (1 + y₁²)^{3/2} / |y₂|  |  Parametric: ρ = (x′² + y′²)^{3/2} / |x′y′′ − y′x′′|  |  Polar: ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|',
          },
          {
            label: 'Newton’s Formula for Radius of Curvature at Origin (0, 0)',
            formula:
              'Tangent x-axis (y = 0): ρ = lim_{x→0} |x² / (2y)|  |  Tangent y-axis (x = 0): ρ = lim_{y→0} |y² / (2x)|',
          },
        ],
        problemStatement:
          '(1) [PUST 2020–21 Q4c] Find the tangent and normal to x² + xy + y² = 7 at (1, 2). (2) [PUST 2022–23 Q3b] Find the asymptotes of x³ + y³ − 3axy = 0. (3) [PUST 2020–21 Q3c] Find the asymptotes of y³ − x²y − 2xy² + 2x³ − 7xy + 3y² + 2x² + 2x + 2y + 1 = 0. (4) [PUST 2022–23 Q3c] Find ρ at (a/4, a/4) on √x + √y = √a. (5) [PUST 2020–21 Q4b] Show ρ = 3(axy)^{1/3} on x^{2/3} + y^{2/3} = a^{2/3}. (6) [PUST 2021–22 Q3b] Find ρ at (a, 0) on xy² = a³ − x³.',
        solutionSteps: [
          {
            stepTitle: '1. Tangent & Normal (PUST 2020–21 Q4c): x² + xy + y² = 7 at (1, 2)',
            explanation: 'Differentiate implicitly with respect to x:',
            equation:
              '2x + (x dy/dx + y) + 2y dy/dx = 0\n  ⇒  dy/dx = −(2x + y) / (x + 2y)\n  At (1, 2):  m = −[2(1) + 2] / [1 + 2(2)] = −4/5\n\n  • Tangent at (1, 2):  y − 2 = (−4/5)(x − 1)  ⇒  4x + 5y − 14 = 0\n  • Normal at (1, 2):   y − 2 = (+5/4)(x − 1)  ⇒  5x − 4y + 3 = 0',
          },
          {
            stepTitle: '2. Asymptotes of Algebraic Curves (PUST 2022–23 Q3b & 2020–21 Q3c)',
            explanation: 'Put x = 1, y = m in degree-3 and degree-2 homogeneous parts:',
            equation:
              '(a) PUST 2022–23 Q3(b):  x³ + y³ − 3axy = 0  (Folium of Descartes)\n    φ₃(m) = 1 + m³ = 0  ⇒  (m + 1)(m² − m + 1) = 0  ⇒  m = −1 (only real root)\n    φ′₃(m) = 3m²,   φ₂(m) = −3am\n    c = −φ₂(m) / φ′₃(m) = −(−3am) / (3m²) = a / m = a / (−1) = −a\n    ∴  Asymptote:  y = −x − a  ⇔  x + y + a = 0\n\n(b) PUST 2020–21 Q3(c):  y³ − x²y − 2xy² + 2x³ − 7xy + 3y² + 2x² + 2x + 2y + 1 = 0\n    φ₃(m) = m³ − 2m² − m + 2 = (m − 1)(m + 1)(m − 2) = 0  ⇒  m = 1, −1, 2\n    φ′₃(m) = 3m² − 4m − 1,   φ₂(m) = 3m² − 7m + 2\n    c = −(3m² − 7m + 2) / (3m² − 4m − 1):\n      • For m = 1:   c = −(−2)/(−2) = −1  ⇒  x − y − 1 = 0\n      • For m = −1:  c = −(12)/(6)  = −2  ⇒  x + y + 2 = 0\n      • For m = 2:   c = −(0)/(3)   = 0   ⇒  2x − y = 0',
          },
          {
            stepTitle:
              '3. Radius of Curvature Derivations (PUST 22–23 Q3c, 20–21 Q4b & 21–22 Q3b)',
            explanation: 'Vertical step-by-step curvature solutions:',
            equation:
              '(a) PUST 2022–23 Q3(c):  √x + √y = √a  at (a/4, a/4)\n    y₁ = −√y / √x = −1  at (a/4, a/4)\n    y₂ = (√x + √y) / (2x^{3/2}) = √a / [2(a/4)^{3/2}] = 4 / a\n    ∴  ρ = (1 + y₁²)^{3/2} / |y₂| = (1 + 1)^{3/2} / (4/a) = (2√2 a) / 4 = a / √2\n\n(b) PUST 2020–21 Q4(b):  x^{2/3} + y^{2/3} = a^{2/3}\n    y₁ = −(y / x)^{1/3}  ⇒  1 + y₁² = (x^{2/3} + y^{2/3}) / x^{2/3} = a^{2/3} / x^{2/3}\n    y₂ = a^{2/3} / (3 x^{4/3} y^{1/3})\n    ∴  ρ = (a / x) / [a^{2/3} / (3 x^{4/3} y^{1/3})] = 3(axy)^{1/3}  ■\n\n(c) PUST 2021–22 Q3(b):  xy² = a³ − x³  at (a, 0)\n    Shift origin to (a, 0) by putting x = a + X, y = Y:\n    (a + X)Y² = a³ − (a + X)³ = −3a²X − 3aX² − X³\n    Tangent at new origin is X = 0 (Y-axis), so by Newton’s formula:\n    ∴  ρ = lim_{Y→0} |Y² / (2X)| = lim_{X→0} |(−3a² − 3aX − X²) / [2(a + X)]| = 3a / 2',
          },
        ],
        finalAnswer:
          'Tangent: 4x+5y−14=0, Normal: 5x−4y+3=0  |  Folium Asymptote: x+y+a=0  |  ρ = a/√2,  3(axy)^{1/3},  3a/2',
      },
      {
        id: 'math-m4-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'PUST EECE 2022–23 Q3(a) [5 Marks], 2021–22 Q3(a) [4.5 Marks], 2020–21 Q3(a,b) [9.5 Marks]',
        title:
          'Functions of Two Variables, Partial/Total Derivatives & Euler’s Theorem (1st & 2nd Order Proofs + PYQs)',
        summaryText:
          'If u = f(x, y) is homogeneous of degree n, then (i) x ∂u/∂x + y ∂u/∂y = nu and (ii) x² ∂²u/∂x² + 2xy ∂²u/∂x∂y + y² ∂²u/∂y² = n(n − 1)u.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4.5–5 Marks',
        equations: [
          {
            label: 'Euler’s Theorem on Homogeneous Functions (1st & 2nd Order)',
            formula:
              '(i) x u_x + y u_y = n u   |   (ii) x² u_{xx} + 2xy u_{xy} + y² u_{yy} = n(n − 1)u',
          },
          {
            label: 'Composite Homogeneous Function Shortcut (z = f(u) of degree n)',
            formula:
              'x u_x + y u_y = n · f(u) / f′(u)   |   Total Differential: dz = u_x dx + u_y dy',
          },
        ],
        problemStatement:
          '(1) [PUST 2020–21 Q3a] State and prove Euler’s Theorem on homogeneous functions (both 1st and 2nd order). (2) [PUST 2021–22 Q3a] If u = sin⁻¹[(x² + y²)/(x + y)], show that x ∂u/∂x + y ∂u/∂y = tan u. (3) [PUST 2022–23 Q3a] If u = tan⁻¹[(x³ + y³)/(x − y)], prove that x ∂u/∂x + y ∂u/∂y = sin 2u. (4) [PUST 2020–21 Q3b] If u = cos⁻¹[(x + y)/(√x + √y)], show that x ∂u/∂x + y ∂u/∂y + ½ cot u = 0.',
        solutionSteps: [
          {
            stepTitle:
              '1. Complete Proof of 1st-Order & 2nd-Order Euler’s Theorem (PUST 2020–21 Q3a)',
            explanation:
              'Write u = xⁿ φ(y/x), differentiate partially with respect to x and y, and extend to 2nd order:',
            equation:
              'Part (i) — First-Order Proof:\n  Since u is homogeneous of degree n, let  u = xⁿ φ(y/x).\n  ∂u/∂x = n x^{n−1} φ(y/x) + xⁿ φ′(y/x) · (−y / x²) = n x^{n−1} φ(y/x) − x^{n−2} y φ′(y/x)\n  ∂u/∂y = xⁿ φ′(y/x) · (1 / x) = x^{n−1} φ′(y/x)\n  Multiplying by x and y respectively and adding:\n    x ∂u/∂x + y ∂u/∂y = n xⁿ φ(y/x) − x^{n−1} y φ′(y/x) + x^{n−1} y φ′(y/x)\n                      = n xⁿ φ(y/x) = n u.  --- (1)\n\nPart (ii) — Second-Order Proof (Added to complete PDF note):\n  Differentiating (1) partially with respect to x and y:\n    x ∂²u/∂x² + ∂u/∂x + y ∂²u/∂x∂y = n ∂u/∂x  ⇒  x u_{xx} + y u_{xy} = (n − 1) u_x  --- (2)\n    x ∂²u/∂x∂y + ∂u/∂y + y ∂²u/∂y² = n ∂u/∂y  ⇒  x u_{xy} + y u_{yy} = (n − 1) u_y  --- (3)\n  Multiplying (2) by x and (3) by y and adding:\n    x² u_{xx} + 2xy u_{xy} + y² u_{yy} = (n − 1)(x u_x + y u_y) = n(n − 1)u.  ■',
          },
          {
            stepTitle:
              '2. Solved PUST Past Exam Problems (2021–22 Q3a, 2022–23 Q3a & 2020–21 Q3b)',
            explanation: 'Rewrite as z = trig(u) so z is homogeneous of degree n, then apply Euler’s Theorem:',
            equation:
              '(a) PUST 2021–22 Q3(a):  u = sin⁻¹[(x² + y²) / (x + y)]\n    Let  z = sin u = (x² + y²) / (x + y) = x¹ · [1 + (y/x)²] / [1 + (y/x)]   [Degree n = 1]\n    By Euler’s Theorem:  x ∂z/∂x + y ∂z/∂y = 1 · z\n    ⇒  x cos u (∂u/∂x) + y cos u (∂u/∂y) = sin u\n    ⇒  x ∂u/∂x + y ∂u/∂y = tan u  ■\n\n(b) PUST 2022–23 Q3(a):  u = tan⁻¹[(x³ + y³) / (x − y)]\n    Let  z = tan u = (x³ + y³) / (x − y) = x² · [1 + (y/x)³] / [1 − (y/x)]   [Degree n = 3 − 1 = 2]\n    By Euler’s Theorem:  x ∂z/∂x + y ∂z/∂y = 2z\n    ⇒  x sec²u (∂u/∂x) + y sec²u (∂u/∂y) = 2 tan u\n    ⇒  x ∂u/∂x + y ∂u/∂y = (2 tan u) / sec²u = 2 sin u cos u = sin 2u  ■\n\n(c) PUST 2020–21 Q3(b):  u = cos⁻¹[(x + y) / (√x + √y)]\n    Let  z = cos u = (x + y) / (√x + √y) = x^{1/2} · [1 + (y/x)] / [1 + (y/x)^{1/2}]   [Degree n = 1/2]\n    By Euler’s Theorem:  x ∂z/∂x + y ∂z/∂y = (1/2) z\n    ⇒  −x sin u (∂u/∂x) − y sin u (∂u/∂y) = (1/2) cos u\n    ⇒  x ∂u/∂x + y ∂u/∂y + (1/2) cot u = 0  ■',
          },
        ],
        finalAnswer:
          '21–22 Q3a: tan u  |  22–23 Q3a: sin 2u  |  20–21 Q3b: x u_x + y u_y + ½ cot u = 0 (Proved)',
      },
      {
        id: 'math-m4-b3',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Lecture & PUST EECE 2021–22 Exam Q4(c) [4.5 Marks]',
        title:
          'Jacobian (J) & Hessian (H) Determinants with Worked Two-Variable Extrema Example',
        summaryText:
          'J = ∂(u, v)/∂(x, y) = u_x v_y − u_y v_x (Chain rule: J · J′ = 1). Hessian H(x, y) = f_{xx}f_{yy} − (f_{xy})² classifies stationary points.',
        examYears: ['2021–22'],
        marks: '4.5 Marks',
        equations: [
          {
            label: 'Jacobian Determinant & Chain Rule',
            formula:
              '∂(u, v)/∂(x, y) = u_x v_y − u_y v_x  |  ∂(u, v)/∂(r, θ) = [∂(u, v)/∂(x, y)] · [∂(x, y)/∂(r, θ)]',
          },
          {
            label: 'Hessian Determinant & 2D Extrema Classification at f_x = f_y = 0',
            formula:
              'H = f_{xx}f_{yy} − (f_{xy})²  |  H > 0, f_{xx} < 0 ⇒ Max  |  H > 0, f_{xx} > 0 ⇒ Min  |  H < 0 ⇒ Saddle',
          },
        ],
        problemStatement:
          '(1) [PUST 2021–22 Q4c] If u = x² − 2y² and v = 2x² − y², where x = r cos θ and y = r sin θ, show that ∂(u, v)/∂(r, θ) = 6r³ sin 2θ. (2) Find and classify the stationary points of f(x, y) = x³ + y³ − 3axy (a > 0) using the Hessian determinant.',
        solutionSteps: [
          {
            stepTitle: '1. PUST 2021–22 Q4(c): Jacobian Chain Rule Derivation',
            explanation: 'Compute ∂(u, v)/∂(x, y) and polar Jacobian ∂(x, y)/∂(r, θ) = r:',
            equation:
              '∂(u, v)/∂(x, y) = | 2x   −4y | = (2x)(−2y) − (−4y)(4x) = −4xy + 16xy = 12xy\n                  | 4x   −2y |\n\n∂(x, y)/∂(r, θ) = | cos θ   −r sin θ | = r cos²θ + r sin²θ = r\n                  | sin θ    r cos θ |\n\nBy the Jacobian Chain Rule:\n  ∂(u, v)/∂(r, θ) = [∂(u, v)/∂(x, y)] · [∂(x, y)/∂(r, θ)]\n                  = (12xy) · r\n                  = 12(r cos θ)(r sin θ) · r\n                  = 6r³ (2 sin θ cos θ)\n                  = 6r³ sin 2θ.  ■',
          },
          {
            stepTitle:
              '2. Worked Hessian Example: Extrema of f(x, y) = x³ + y³ − 3axy (a > 0)',
            explanation:
              'Solve f_x = 0, f_y = 0 for stationary points and evaluate H(x, y) = f_{xx}f_{yy} − f_{xy}²:',
            equation:
              'f_x = 3x² − 3ay = 0  ⇒  y = x² / a\nf_y = 3y² − 3ax = 0  ⇒  x⁴ / a² − ax = 0  ⇒  x(x³ − a³) = 0  ⇒  (0, 0) and (a, a)\n\nSecond-order partials:  f_{xx} = 6x,   f_{yy} = 6y,   f_{xy} = −3a\nHessian:  H(x, y) = (6x)(6y) − (−3a)² = 36xy − 9a²\n\n• At (0, 0):  H(0, 0) = −9a² < 0  ⇒  (0, 0) is a Saddle Point.\n• At (a, a):  H(a, a) = 36a² − 9a² = 27a² > 0  and  f_{xx}(a, a) = 6a > 0\n              ⇒  Local Minimum at (a, a) with f_min = −a³.',
          },
        ],
        finalAnswer:
          '∂(u, v)/∂(r, θ) = 6r³ sin 2θ (Proved)  |  (0, 0) Saddle Point; (a, a) Local Min f = −a³',
      },
    ],
  },

  // ===========================================================================
  // MODULE 05: CO-ORDINATE SYSTEMS AND PAIR OF STRAIGHT LINES (Units 14–15)
  // ===========================================================================
  {
    id: 'math1101-ch05',
    unitNumber: 'Module 05',
    title: 'Co-ordinate Systems and Pair of Straight Lines',
    summary:
      '1.1 Co-ordinate systems: Cartesian co-ordinates, Polar co-ordinates, Parameters, Standard Equations in different co-ordinates systems and their parametric representations, Transformation of co-ordinates. 1.2 Pair of straight lines: Condition for a general equation of 2nd degree in two variables to represent pair of straight lines, Properties of pair of straight lines.',
    estimatedMinutes: 55,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m5-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 14 & PUST Past Exam Questions · Anton Ch. 10 & Rahman & Bhattacharjee',
        title:
          '2D Coordinate Systems, Translation & Rotation of Axes, and Orthogonal Invariants',
        summaryText:
          'Translation to center (α, β) via ∂F/∂x = 0, ∂F/∂y = 0 removes first-degree terms (c′ = gα + fβ + c); rotation by tan 2θ = 2h/(a − b) removes the xy-term via λ² − (a + b)λ + (ab − h²) = 0.',
        examYears: ['2022–23', '2020–21'],
        marks: '7 Marks',
        equations: [
          {
            label: 'Cartesian ↔ Polar Conversion & Polar Distance Formula',
            formula:
              'x = r cos θ, y = r sin θ, r² = x² + y²  |  d = √[r₁² + r₂² − 2r₁r₂ cos(θ₁ − θ₂)]',
          },
          {
            label: 'Translation of Origin to (α, β) to Remove First-Degree Terms',
            formula:
              'ax + hy + g = 0,  hx + by + f = 0  ⇒  aX² + 2hXY + bY² + c′ = 0  (where c′ = gα + fβ + c)',
          },
          {
            label: 'Rotation of Axes Through Angle θ & Orthogonal Invariants',
            formula:
              'tan 2θ = 2h / (a − b)  |  a′ + b′ = a + b,  a′b′ = ab − h²  ⇒  λ² − (a + b)λ + (ab − h²) = 0',
          },
        ],
        problemStatement:
          '(1) [PUST Past Exam — 7 Marks] Transform the equation 17x² + 18xy − 7y² − 16x − 32y − 18 = 0 to one in which there are no first-degree terms and no xy-term. (2) [PUST Past Exam] Transform x² + 4xy + y² − 2x + 2y − 6 = 0 to standard form.',
        solutionSteps: [
          {
            stepTitle:
              '1. PUST Exam Problem: 17x² + 18xy − 7y² − 16x − 32y − 18 = 0',
            explanation:
              'Compare with ax² + 2hxy + by² + 2gx + 2fy + c = 0: a = 17, h = 9, b = −7, g = −8, f = −16, c = −18:',
            equation:
              'Step 1 (Translation of Origin to (α, β) to Remove First-Degree Terms):\n  ½ ∂F/∂x = 17α + 9β − 8 = 0\n  ½ ∂F/∂y = 9α − 7β − 16 = 0\n  Solving simultaneously gives:  α = 1,   β = −1\n  New constant term:\n    c′ = gα + fβ + c = (−8)(1) + (−16)(−1) − 18 = −10\n  Translated equation:  17X² + 18XY − 7Y² − 10 = 0\n\nStep 2 (Rotation of Axes to Remove the XY-Term):\n  By orthogonal invariants:\n    a′ + b′ = a + b = 17 − 7 = 10\n    a′b′ = ab − h² = (17)(−7) − 9² = −119 − 81 = −200\n  Characteristic quadratic:\n    λ² − 10λ − 200 = 0  ⇒  (λ − 20)(λ + 10) = 0  ⇒  a′ = 20,  b′ = −10\n  Substituting into a′x′² + b′y′² + c′ = 0:\n    20x′² − 10y′² − 10 = 0\n    ∴  2x′² − y′² = 1',
          },
          {
            stepTitle: '2. PUST Exam Problem: x² + 4xy + y² − 2x + 2y − 6 = 0',
            explanation: 'Here a = 1, h = 2, b = 1, g = −1, f = 1, c = −6:',
            equation:
              'Center equations:  α + 2β − 1 = 0  and  2α + β + 1 = 0  ⇒  α = −1,  β = 1\nNew constant:      c′ = gα + fβ + c = (−1)(−1) + (1)(1) − 6 = −4\nCharacteristic eq: λ² − (1 + 1)λ + (1 − 4) = 0  ⇒  λ² − 2λ − 3 = 0  ⇒  λ = 3, −1\n∴  3x′² − y′² − 4 = 0  ⇔  x′²/(4/3) − y′²/4 = 1',
          },
        ],
        finalAnswer:
          '(1) Center (1, −1), Transformed Eq: 2x′² − y′² = 1  |  (2) Center (−1, 1), Transformed Eq: 3x′² − y′² = 4',
      },
      {
        id: 'math-m5-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 15 & PUST Past Exam Questions [5 Marks Each] · Rahman & Bhattacharjee',
        title:
          'Pair of Straight Lines in 2D: Angle, Bisectors, Condition Δ = 0 & Homogenization',
        summaryText:
          'S ≡ ax² + 2hxy + by² + 2gx + 2fy + c = 0 represents a pair of straight lines iff Δ = abc + 2fgh − af² − bg² − ch² = 0 (with h² ≥ ab).',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        equations: [
          {
            label: 'Angle θ & Bisectors of Homogeneous Pair ax² + 2hxy + by² = 0',
            formula:
              'tan θ = 2√(h² − ab) / |a + b|  (⊥ ⇔ a + b = 0; ∥ ⇔ h² = ab)  |  Bisectors: (x² − y²)/(a − b) = xy/h',
          },
          {
            label: 'Condition for General 2nd-Degree Equation to Represent Pair of Lines',
            formula:
              'Δ = abc + 2fgh − af² − bg² − ch² = 0   (Point of intersection: ((hf−bg)/(ab−h²), (gh−af)/(ab−h²)))',
          },
          {
            label: 'Homogenization of Curve S = 0 with Line lx + my + n = 0',
            formula:
              'Isolate 1 = (lx + my)/(−n)  and  write  ax² + 2hxy + by² + (2gx + 2fy)[(lx + my)/(−n)] + c[(lx + my)/(−n)]² = 0',
          },
        ],
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Prove that 2x² + 7xy + 3y² + 8x + 14y + 8 = 0 represents a pair of straight lines. Find their separate equations, point of intersection, and angle between them. (2) [PUST Past Exam — 5 Marks] Show that the straight lines joining the origin to the points of intersection of the circle x² + y² = a² and the line lx + my = 1 are at right angles if a²(l² + m²) = 2.',
        solutionSteps: [
          {
            stepTitle:
              '1. General Pair of Straight Lines: 2x² + 7xy + 3y² + 8x + 14y + 8 = 0',
            explanation: 'Identify a = 2, h = 7/2, b = 3, g = 4, f = 7, c = 8 and verify Δ = 0:',
            equation:
              'Step 1 (Testing Δ = 0):\n  Δ = abc + 2fgh − af² − bg² − ch²\n    = (2)(3)(8) + 2(7)(4)(7/2) − 2(49) − 3(16) − 8(49/4)\n    = 48 + 196 − 98 − 48 − 98 = 0   [Also h² − ab = 49/4 − 6 = 25/4 > 0]\n  Hence the equation represents a pair of real straight lines.\n\nStep 2 (Separate Equations & Point of Intersection):\n  2x² + 7xy + 3y² = (2x + y)(x + 3y)\n  Let  2x² + 7xy + 3y² + 8x + 14y + 8 ≡ (2x + y + c₁)(x + 3y + c₂)\n  Equating coefficients of x and y:\n    c₁ + 2c₂ = 8   and   3c₁ + c₂ = 14  ⇒  c₁ = 4,   c₂ = 2\n  Separate lines:  2x + y + 4 = 0   and   x + 3y + 2 = 0\n  Solving simultaneously gives Point of Intersection:  (−2, 0)\n\nStep 3 (Angle θ Between the Lines):\n  tan θ = 2√(h² − ab) / |a + b| = [2 · (5/2)] / (2 + 3) = 5 / 5 = 1\n  ⇒  θ = 45°',
          },
          {
            stepTitle:
              '2. Homogenization Proof: Circle x² + y² = a² and Line lx + my = 1',
            explanation: 'Homogenize x² + y² = a²(1)² using lx + my = 1 and enforce a + b = 0:',
            equation:
              'Given circle:  x² + y² = a²\nGiven line:    lx + my = 1\nHomogenizing the circle with the line:\n  x² + y² = a²(lx + my)²\n  ⇒  x² + y² = a²(l²x² + 2lm xy + m²y²)\n  ⇒  (1 − a²l²)x² − 2a²lm xy + (1 − a²m²)y² = 0   [Pair of lines through (0, 0)]\n\nThe two lines are mutually perpendicular iff (coeff. of x²) + (coeff. of y²) = 0:\n  (1 − a²l²) + (1 − a²m²) = 0\n  ⇒  a²(l² + m²) = 2.  ■',
          },
        ],
        finalAnswer:
          'Lines: 2x+y+4=0, x+3y+2=0; Intersection: (−2, 0); Angle: θ = 45°  |  Homogenization: a²(l² + m²) = 2 (Proved)',
      },
    ],
  },

  // ===========================================================================
  // MODULE 06: CONICS AND SYSTEM OF CIRCLES (Units 16–18)
  // ===========================================================================
  {
    id: 'math1101-ch06',
    unitNumber: 'Module 06',
    title: 'Conics and System of Circles',
    summary:
      '2.1 Conics: The general equation of 2nd degree in two variables and reduction to standard forms, identification of conics, Parabola, Ellipse and Hyperbola: Derivation of standard forms and properties. 2.2 System of circles: Circles and system of circles, General properties, Orthogonality of two circles, limiting circle, radical axis, co-axial circles.',
    estimatedMinutes: 60,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m6-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 16–17 & PUST Past Exam Questions [7 Marks Each] · Rahman & Bhattacharjee',
        title:
          'Identification & Reduction of Conics to Standard Form (Central Conics & Parabola)',
        summaryText:
          'With Δ ≠ 0: ab − h² > 0 ⇒ Ellipse; ab − h² < 0 ⇒ Hyperbola; ab − h² = 0 ⇒ Parabola. Axis equation for eigenvalue λ_i is (a − λ_i)(x − α) + h(y − β) = 0.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '7 Marks',
        equations: [
          {
            label: 'Conic Discriminant Classification (Δ ≠ 0)',
            formula:
              'ab − h² > 0 ⇒ Ellipse  |  ab − h² < 0 ⇒ Hyperbola  |  ab − h² = 0 ⇒ Parabola',
          },
          {
            label: 'Principal Axis Equation of a Central Conic for Eigenvalue λ_i',
            formula: '(a − λ_i)(x − α) + h(y − β) = 0',
          },
          {
            label: 'Polar Equation of a Conic (Focus at the Pole)',
            formula: 'l / r = 1 + e cos θ   (where l = ed is the semi-latus rectum)',
          },
        ],
        table: {
          caption: 'Table 6.1 — Standard Equations & Properties of Parabola, Ellipse & Hyperbola',
          headers: [
            'Property',
            'Parabola (y² = 4ax)',
            'Ellipse (x²/a² + y²/b² = 1, a > b)',
            'Hyperbola (x²/a² − y²/b² = 1)',
          ],
          rows: [
            [
              'Eccentricity e',
              'e = 1',
              'e = √(1 − b²/a²) < 1',
              'e = √(1 + b²/a²) > 1',
            ],
            ['Vertices', '(0, 0)', '(±a, 0)', '(±a, 0)'],
            ['Foci', '(a, 0)', '(±ae, 0)', '(±ae, 0)'],
            ['Directrices', 'x = −a', 'x = ±a/e', 'x = ±a/e'],
            ['Latus Rectum', '4a', '2b² / a', '2b² / a'],
            [
              'Tangent at (x₁, y₁)',
              'yy₁ = 2a(x + x₁)',
              'xx₁/a² + yy₁/b² = 1',
              'xx₁/a² − yy₁/b² = 1',
            ],
          ],
        },
        problemStatement:
          '(1) [PUST Past Exam — 7 Marks] Reduce 11x² + 24xy + 4y² − 20x − 40y − 5 = 0 to standard form. Identify the conic and find its center, lengths of axes, eccentricity, latus rectum, and equations of the axes. (2) [PUST Past Exam — 7 Marks] Reduce 9x² − 24xy + 16y² − 18x − 101y + 19 = 0 to standard form, and find its vertex, focus, axis, latus rectum, and directrix.',
        solutionSteps: [
          {
            stepTitle:
              '1. Central Conic Reduction: 11x² + 24xy + 4y² − 20x − 40y − 5 = 0',
            explanation:
              'Here a = 11, h = 12, b = 4, g = −10, f = −20, c = −5, so ab − h² = 44 − 144 = −100 < 0 (Hyperbola):',
            equation:
              'Step 1 (Center (α, β) and New Constant c′):\n  ½ ∂F/∂x = 11α + 12β − 10 = 0\n  ½ ∂F/∂y = 12α + 4β − 20 = 0  ⇒  3α + β = 5\n  ⇒  Center (α, β) = (2, −1)\n  c′ = gα + fβ + c = (−10)(2) + (−20)(−1) − 5 = −5\n\nStep 2 (Characteristic Roots & Standard Form):\n  λ² − (a + b)λ + (ab − h²) = 0\n  ⇒  λ² − 15λ − 100 = 0  ⇒  (λ − 20)(λ + 5) = 0  ⇒  λ₁ = 20,  λ₂ = −5\n  ⇒  20X² − 5Y² − 5 = 0\n  ⇒  X² / (1/4) − Y² / 1 = 1   [Hyperbola with A = 1/2, B = 1]\n\nStep 3 (Axes, Eccentricity & Latus Rectum):\n  • Transverse axis length = 2A = 1;   Conjugate axis length = 2B = 2\n  • Eccentricity e = √(1 + B²/A²) = √(1 + 4) = √5;   Latus rectum = 2B²/A = 4\n  • Transverse axis (λ₁ = 20):  (11 − 20)(x − 2) + 12(y + 1) = 0  ⇒  3x − 4y − 10 = 0\n  • Conjugate axis (λ₂ = −5):   (11 + 5)(x − 2) + 12(y + 1) = 0   ⇒  4x + 3y − 5 = 0',
          },
          {
            stepTitle:
              '2. Parabola Reduction (ab − h² = 0): 9x² − 24xy + 16y² − 18x − 101y + 19 = 0',
            explanation:
              'Since 9x² − 24xy + 16y² = (3x − 4y)², introduce parameter λ to make the linear part perpendicular to 3x − 4y + λ = 0:',
            equation:
              '(3x − 4y + λ)² = (6λ + 18)x + (101 − 8λ)y + (λ² − 19)\nFor perpendicular lines:\n  3(6λ + 18) − 4(101 − 8λ) = 0\n  ⇒  50λ = 350  ⇒  λ = 7\n\nSubstituting λ = 7 and normalizing by 5² = 25:\n  (3x − 4y + 7)² = 15(4x + 3y + 2)\n  ⇒  [(3x − 4y + 7) / 5]² = 3 · [(4x + 3y + 2) / 5]\n  ⇒  Y² = 3X   [Standard parabola Y² = 4aX with 4a = 3 ⇒ a = 3/4]\n\nGeometric Elements:\n  • Latus Rectum:  4a = 3\n  • Axis (Y = 0):  3x − 4y + 7 = 0;   Tangent at Vertex (X = 0):  4x + 3y + 2 = 0\n  • Vertex (X = 0, Y = 0):     (−29/25, 22/25)\n  • Focus (X = 3/4, Y = 0):    (−14/25, 43/100)\n  • Directrix (X = −3/4):      16x + 12y + 23 = 0',
          },
        ],
        finalAnswer:
          'Hyperbola: X²/(1/4) − Y²/1 = 1, Center (2, −1), e = √5  |  Parabola: Y² = 3X, Vertex (−29/25, 22/25), LR = 3',
      },
      {
        id: 'math-m6-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 18 & PUST Past Exam Questions [5 Marks Each] · Rahman & Bhattacharjee',
        title:
          'System of Circles: Orthogonality, Radical Axis, Coaxial System & Limiting Points',
        summaryText:
          'Two circles cut orthogonally iff 2g₁g₂ + 2f₁f₂ = c₁ + c₂. Radical axis is S₁ − S₂ = 0; coaxial family is S₁ + λ(S₁ − S₂) = 0 with limiting points where radius R = 0.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        equations: [
          {
            label: 'Condition for Orthogonal Circles (90° Intersection)',
            formula: '2g₁g₂ + 2f₁f₂ = c₁ + c₂',
          },
          {
            label: 'Radical Axis & Coaxial Family of Circles',
            formula:
              'Radical Axis L ≡ S₁ − S₂ = 0  |  Coaxial Family: S₁ + λL = 0  (Limiting points: set R = 0)',
          },
        ],
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the equation of the circle that cuts orthogonally the three circles x² + y² + 2x + 17y + 4 = 0, x² + y² + 7x + 6y + 11 = 0, and x² + y² − x + 22y + 3 = 0. (2) [PUST Past Exam — 5 Marks] Find the radical axis and the limiting points of the coaxial system determined by S₁ ≡ x² + y² + 2x + 4y + 7 = 0 and S₂ ≡ x² + y² + 4x + 2y + 5 = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Circle Orthogonal to Three Given Circles',
            explanation:
              'Let the required circle be x² + y² + 2gx + 2fy + c = 0 and apply 2gg_i + 2ff_i = c + c_i:',
            equation:
              '2g + 17f − c = 4    --- (1)\n7g + 6f  − c = 11   --- (2)\n−g + 22f − c = 3    --- (3)\n\nSubtracting (1) from (2), and (3) from (1):\n  5g − 11f = 7\n  3g − 5f  = 1\n  ⇒  g = −3,   f = −2\nSubstituting into (1):\n  c = 2(−3) + 17(−2) − 4 = −44\n∴  Required orthogonal circle:  x² + y² − 6x − 4y − 44 = 0',
          },
          {
            stepTitle: '2. Radical Axis & Limiting Points of a Coaxial System',
            explanation: 'Form S₁ + 2λ(S₁ − S₂)/2 = 0 and set radius R² = 0:',
            equation:
              'Radical axis:  S₁ − S₂ = −2x + 2y + 2 = 0  ⇒  L ≡ x − y − 1 = 0\nCoaxial family S₁ + 2λL = 0:\n  x² + y² + 2(1 + λ)x + 2(2 − λ)y + (7 − 2λ) = 0\n  Center C = (−(1 + λ), −(2 − λ))\n  Radius R² = (1 + λ)² + (2 − λ)² − (7 − 2λ) = 2λ² − 2\n\nFor limiting points, set R = 0:\n  2λ² − 2 = 0  ⇒  λ = ±1\n  • For λ = +1:  C₁ = (−2, −1)\n  • For λ = −1:  C₂ = (0, −3)\n∴  Limiting points are (−2, −1) and (0, −3).',
          },
        ],
        finalAnswer:
          'Orthogonal Circle: x² + y² − 6x − 4y − 44 = 0  |  Radical Axis: x − y − 1 = 0, Limiting Points: (−2, −1), (0, −3)',
      },
    ],
  },

  // ===========================================================================
  // MODULE 07: 3D CO-ORDINATE SYSTEMS, PLANES AND STRAIGHT LINES (Units 19–21)
  // ===========================================================================
  {
    id: 'math1101-ch07',
    unitNumber: 'Module 07',
    title: '3D Co-ordinate Systems, Planes and Straight Lines',
    summary:
      '3.1 Co-ordinate systems: Cartesian, Cylindrical and Spherical systems, Direction cosines and direction ratios, Projection, Angle between two lines. 3.2 Planes and Straight lines: Planes, different form of planes and conversions, angle between two planes, Lines, different form of lines and conversions, angle between two lines, angle between a line and a plane, Plane containing a line, plane containing two lines, shortest distance between two lines.',
    estimatedMinutes: 60,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m7-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 19–20 & PUST Past Exam Questions [5 Marks Each] · Anton Ch. 11 & Rahman & Bhattacharjee',
        title:
          '3D Coordinate Systems (Cartesian, Cylindrical, Spherical), Direction Cosines & Cube Diagonal Theorems',
        summaryText:
          'Direction cosines l = cos α, m = cos β, n = cos γ satisfy l² + m² + n² = 1. Angle between two diagonals of a cube is cos⁻¹(1/3), and ∑ cos²α = 4/3.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        equations: [
          {
            label: 'Direction Cosines Identity & Normalization from Direction Ratios (a, b, c)',
            formula:
              'l² + m² + n² = 1   |   l = ±a / √(a² + b² + c²),  m = ±b / √(a² + b² + c²),  n = ±c / √(a² + b² + c²)',
          },
          {
            label: 'Projection of Segment PQ on Line (l, m, n) & Angle θ Between Two Lines',
            formula:
              'Proj = l(x₂ − x₁) + m(y₂ − y₁) + n(z₂ − z₁)   |   cos θ = l₁l₂ + m₁m₂ + n₁n₂',
          },
        ],
        table: {
          caption: 'Table 7.1 — 3D Coordinate Conversions (Cartesian, Cylindrical & Spherical)',
          headers: ['Conversion', 'Forward Equations', 'Inverse Equations & Restrictions'],
          rows: [
            [
              'Cylindrical (r, θ, z) ↔ Cartesian (x, y, z)',
              'x = r cos θ,  y = r sin θ,  z = z',
              'r² = x² + y²,  tan θ = y/x,  z = z  (r ≥ 0, 0 ≤ θ < 2π)',
            ],
            [
              'Spherical (ρ, φ, θ) ↔ Cartesian (x, y, z)',
              'x = ρ sin φ cos θ,  y = ρ sin φ sin θ,  z = ρ cos φ',
              'ρ² = x² + y² + z²,  cos φ = z/ρ,  tan θ = y/x  (0 ≤ φ ≤ π)',
            ],
            [
              'Spherical (ρ, φ, θ) ↔ Cylindrical (r, θ, z)',
              'r = ρ sin φ,  θ = θ,  z = ρ cos φ',
              'ρ = √(r² + z²),  tan φ = r/z,  θ = θ',
            ],
          ],
        },
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] (a) Find the angle between any two diagonals of a cube. (b) Prove that if a line makes angles α, β, γ, δ with the four diagonals of a cube, then cos²α + cos²β + cos²γ + cos²δ = 4/3. (2) [PUST Past Exam — 5 Marks] Find the angle between the two lines whose direction cosines satisfy l + m + n = 0 and l² + m² − n² = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Cube Diagonal Theorems (Part a & Part b)',
            explanation:
              'Take a cube of side a with edges along the coordinate axes; the four diagonals have DRs (±a, a, a):',
            equation:
              'Direction cosines of the four diagonals OP, AL, BM, CN are:\n  (1/√3, 1/√3, 1/√3),  (−1/√3, 1/√3, 1/√3),  (1/√3, −1/√3, 1/√3),  (1/√3, 1/√3, −1/√3)\n\nPart (a) — Angle between any two diagonals:\n  cos θ = |−1/3 + 1/3 + 1/3| = 1/3  ⇒  θ = cos⁻¹(1/3)\n\nPart (b) — Sum of squares of cosines with a line of DCs (l, m, n):\n  cos α = (l + m + n)/√3,    cos β = (−l + m + n)/√3,\n  cos γ = (l − m + n)/√3,    cos δ = (l + m − n)/√3\n  Squaring and adding (all cross-products cancel in pairs):\n  cos²α + cos²β + cos²γ + cos²δ = 4(l² + m² + n²) / 3 = 4(1) / 3 = 4/3.  ■',
          },
          {
            stepTitle: '2. Algebraic Direction Cosine Relations: l + m + n = 0 and l² + m² − n² = 0',
            explanation: 'Eliminate n = −(l + m) to find the direction ratios of the two lines:',
            equation:
              'l + m + n = 0  ⇒  n = −(l + m)\nSubstituting into l² + m² − n² = 0:\n  l² + m² − (l + m)² = 0\n  ⇒  −2lm = 0  ⇒  l = 0   or   m = 0\n\n• When l = 0:  n = −m  ⇒  DRs of Line 1: (0, m, −m) ∝ (0, 1, −1)\n• When m = 0:  n = −l  ⇒  DRs of Line 2: (l, 0, −l) ∝ (1, 0, −1)\n\n∴  cos θ = [(0)(1) + (1)(0) + (−1)(−1)] / [√2 · √2] = 1/2  ⇒  θ = 60° = π/3',
          },
        ],
        finalAnswer:
          'Cube Diagonals: θ = cos⁻¹(1/3),  ∑ cos²α = 4/3 (Proved)  |  Algebraic DCs Angle: θ = 60° (π/3)',
      },
      {
        id: 'math-m7-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 21 & PUST Past Exam Questions [5–7 Marks] · Rahman & Bhattacharjee',
        title:
          'Planes, Straight Lines in 3D, Coplanarity & Shortest Distance (S.D.) Between Skew Lines',
        summaryText:
          'Complete formulas and solved PUST past exam problems on plane families P₁ + λP₂ = 0, centroid locus, and the length & equation of the line of shortest distance between skew lines.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5–7 Marks',
        equations: [
          {
            label: 'Equations of a Plane & Perpendicular Distance from (x₁, y₁, z₁)',
            formula:
              'Intercept Form: x/a + y/b + z/c = 1  |  Intersection: P₁ + λP₂ = 0  |  d = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²)',
          },
          {
            label: 'Symmetric Line Equation & Coplanarity Determinant',
            formula:
              '(x − x₁)/l = (y − y₁)/m = (z − z₁)/n = r   |   Coplanar iff det[[x₂−x₁, y₂−y₁, z₂−z₁], [l₁, m₁, n₁], [l₂, m₂, n₂]] = 0',
          },
        ],
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the plane through the intersection of x + 2y + 3z − 4 = 0 and 2x + y − z + 5 = 0 perpendicular to 5x + 3y + 6z + 8 = 0. (2) [PUST Past Exam — 5 Marks] A variable plane at constant distance p from the origin meets the axes at A, B, C. Show that the locus of the centroid of △ABC is x⁻² + y⁻² + z⁻² = 9p⁻². (3) [PUST Past Exam — 7 Marks] Find the length and equations of the line of shortest distance between (x − 3)/3 = (y − 8)/(−1) = (z − 3)/1 and (x + 3)/(−3) = (y + 7)/2 = (z − 6)/4.',
        solutionSteps: [
          {
            stepTitle: '1. Plane Through Intersection & Centroid Locus Proof',
            explanation: 'Vertical solutions for Plane Problems A and B:',
            equation:
              'Problem A (Intersection Plane):\n  Plane family:  (x + 2y + 3z − 4) + λ(2x + y − z + 5) = 0\n  ⇒  (1 + 2λ)x + (2 + λ)y + (3 − λ)z + (5λ − 4) = 0\n  Perpendicular to 5x + 3y + 6z + 8 = 0:\n    5(1 + 2λ) + 3(2 + λ) + 6(3 − λ) = 0  ⇒  7λ + 29 = 0  ⇒  λ = −29/7\n  ⇒  7(x + 2y + 3z − 4) − 29(2x + y − z + 5) = 0\n  ∴  51x + 15y − 50z + 173 = 0\n\nProblem B (Centroid Locus):\n  Let the plane be  x/a + y/b + z/c = 1   [Meets axes at A(a,0,0), B(0,b,0), C(0,0,c)]\n  Centroid (α, β, γ) = (a/3, b/3, c/3)  ⇒  a = 3α,  b = 3β,  c = 3γ\n  Distance from origin:  p = 1 / √(a⁻² + b⁻² + c⁻²)  ⇒  a⁻² + b⁻² + c⁻² = p⁻²\n  ⇒  1/(9α²) + 1/(9β²) + 1/(9γ²) = 1/p²\n  ∴  x⁻² + y⁻² + z⁻² = 9p⁻²  ■',
          },
          {
            stepTitle:
              '2. Shortest Distance & Equations of S.D. Line (7 Marks)',
            explanation:
              'Take general points P(r₁) on Line 1 and Q(r₂) on Line 2 and enforce PQ ⊥ Line 1 and PQ ⊥ Line 2:',
            equation:
              'Let  P(3r₁ + 3, −r₁ + 8, r₁ + 3)  be on Line 1,\nand  Q(−3r₂ − 3, 2r₂ − 7, 4r₂ + 6)  be on Line 2.\nDirection ratios of PQ:\n  (−3r₂ − 3r₁ − 6,   2r₂ + r₁ − 15,   4r₂ − r₁ + 3)\n\nSince PQ ⊥ Line 1 (DRs: 3, −1, 1) and PQ ⊥ Line 2 (DRs: −3, 2, 4):\n  3(−3r₂ − 3r₁ − 6) − 1(2r₂ + r₁ − 15) + 1(4r₂ − r₁ + 3) = 0  ⇒  −11r₁ − 7r₂ = 0\n  −3(−3r₂ − 3r₁ − 6) + 2(2r₂ + r₁ − 15) + 4(4r₂ − r₁ + 3) = 0  ⇒   7r₁ + 29r₂ = 0\n  ⇒  r₁ = 0,   r₂ = 0\n\nFeet of the common perpendicular:\n  P = (3, 8, 3),   Q = (−3, −7, 6),   DRs of PQ = (−6, −15, 3) ∝ (2, 5, −1)\n  • Length of S.D. = |PQ| = √[(−6)² + (−15)² + 3²] = √(36 + 225 + 9) = 3√30\n  • Equation of S.D. Line:  (x − 3)/2 = (y − 8)/5 = (z − 3)/(−1)',
          },
        ],
        finalAnswer:
          'Plane: 51x + 15y − 50z + 173 = 0  |  Locus: x⁻² + y⁻² + z⁻² = 9p⁻²  |  S.D. = 3√30, Line: (x−3)/2 = (y−8)/5 = (z−3)/(−1)',
      },
    ],
  },

  // ===========================================================================
  // MODULE 08: CONICOIDS AND SPHERE (Units 22–24)
  // ===========================================================================
  {
    id: 'math1101-ch08',
    unitNumber: 'Module 08',
    title: 'Conicoids and Sphere',
    summary:
      '4.1 The general equations of second degree and reduction to standard forms, identification of conicoids, cone, Generators, condition for a general equation of second degree to represent Cylinder or Cone, right circular cone, right circular Cylinder. 4.2 Sphere: Equation of sphere, a plane and a sphere, a line and a sphere, plane of contact, tangent planes, polar planes, angle of intersections of two spheres, condition of orthogonality, radical line, plane and centers, co-axial spheres.',
    estimatedMinutes: 60,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m8-b1',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 22 & PUST Past Exam Questions [5 Marks Each] · Rahman & Bhattacharjee',
        title:
          'The Sphere: General & Diameter Forms, Plane Section Circle, Tangent Plane & Orthogonal Spheres',
        summaryText:
          'General sphere S ≡ x² + y² + z² + 2ux + 2vy + 2wz + d = 0 has center C = (−u, −v, −w) and radius R = √(u² + v² + w² − d). Plane section at distance p < R is a circle of radius r = √(R² − p²).',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        equations: [
          {
            label: 'General Sphere Equation, Center & Radius',
            formula:
              'S ≡ x² + y² + z² + 2ux + 2vy + 2wz + d = 0  ⇒  C = (−u, −v, −w),  R = √(u² + v² + w² − d)',
          },
          {
            label: 'Diameter Form & Sphere Family Through Circle (S = 0, P = 0)',
            formula:
              '(x − x₁)(x − x₂) + (y − y₁)(y − y₂) + (z − z₁)(z − z₂) = 0   |   Family: S + λP = 0',
          },
          {
            label: 'Plane Section Circle Radius & Orthogonal Spheres Condition',
            formula:
              'Circle radius r = √(R² − p²)   |   Orthogonal: 2u₁u₂ + 2v₁v₂ + 2w₁w₂ = d₁ + d₂',
          },
        ],
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the center and radius of the circle x² + y² + z² − 2y − 4z − 11 = 0, x + 2y + 2z = 15. (2) [PUST Past Exam — 5 Marks] Find the equations of the spheres through the circle x² + y² + z² = 5, x + 2y + 3z = 3 that touch the plane 4x + 3y = 15.',
        solutionSteps: [
          {
            stepTitle: '1. Center & Radius of Circle of Intersection',
            explanation:
              'Find sphere center C, sphere radius R, perpendicular distance p to the plane, and foot of perpendicular N:',
            equation:
              'Sphere center:  C = (0, 1, 2),   Sphere radius:  R = √(0 + 1 + 4 + 11) = 4\nDistance from C(0, 1, 2) to plane x + 2y + 2z − 15 = 0:\n  p = |0 + 2(1) + 2(2) − 15| / √(1² + 2² + 2²) = 9 / 3 = 3\n  ⇒  Circle radius,  r = √(R² − p²) = √(16 − 9) = √7\n\nNormal line through C(0, 1, 2) perpendicular to x + 2y + 2z = 15:\n  (x − 0)/1 = (y − 1)/2 = (z − 2)/2 = t  ⇒  N = (t, 2t + 1, 2t + 2)\nSince N lies on x + 2y + 2z = 15:\n  t + 2(2t + 1) + 2(2t + 2) = 15  ⇒  9t + 6 = 15  ⇒  t = 1\n  ∴  Circle center N = (1, 3, 4),   Circle radius r = √7',
          },
          {
            stepTitle: '2. Spheres Through a Circle Touching a Given Plane',
            explanation: 'Form S + λP = 0 and equate perpendicular distance from center to radius:',
            equation:
              'Sphere family S + λP = 0:\n  x² + y² + z² + λx + 2λy + 3λz − (5 + 3λ) = 0\n  Center C = (−λ/2, −λ, −3λ/2),   Radius R = √(7λ²/2 + 3λ + 5)\n\nTangency condition (distance to 4x + 3y − 15 = 0 equals R):\n  |4(−λ/2) + 3(−λ) − 15| / √(4² + 3²) = √(7λ²/2 + 3λ + 5)\n  ⇒  |−5λ − 15| / 5 = √(7λ²/2 + 3λ + 5)\n  ⇒  (λ + 3)² = 7λ²/2 + 3λ + 5\n  ⇒  5λ² − 6λ − 8 = 0  ⇒  λ = 2,  −4/5\n\n∴  Two spheres:\n   x² + y² + z² + 2x + 4y + 6z − 11 = 0   and   5(x² + y² + z²) − 4x − 8y − 12z − 13 = 0',
          },
        ],
        finalAnswer:
          'Circle Center N = (1, 3, 4), r = √7  |  Spheres: x²+y²+z²+2x+4y+6z−11=0 and 5(x²+y²+z²)−4x−8y−12z−13=0',
      },
      {
        id: 'math-m8-b2',
        type: 'pyq',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 23–24 & PUST Past Exam Questions [5–7 Marks] · Rahman & Bhattacharjee',
        title:
          'Cones, Right Circular Cylinders & Reduction of 3D Second-Degree Conicoids (with Corrected Eigenvalues)',
        summaryText:
          'Complete formulas and solved PUST past exam problems for cones, right circular cylinders, and 3D quadric surface reduction.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5–7 Marks',
        equations: [
          {
            label: 'Right Circular Cone (Vertex (α, β, γ), Axis DRs (l, m, n), Semi-Vertical Angle θ)',
            formula:
              '[l(x − α) + m(y − β) + n(z − γ)]² = (l² + m² + n²)[(x − α)² + (y − β)² + (z − γ)²] cos²θ',
          },
          {
            label: 'Right Circular Cylinder (Axis through (α, β, γ) with DRs (l, m, n) and Radius R)',
            formula:
              '(x − α)² + (y − β)² + (z − γ)² − [l(x − α) + m(y − β) + n(z − γ)]² / (l² + m² + n²) = R²',
          },
        ],
        table: {
          caption: 'Table 8.1 — Classification of Standard 3D Quadric Surfaces (Conicoids)',
          headers: ['Quadric Surface', 'Standard Equation', 'Key Geometric Features'],
          rows: [
            [
              '1. Ellipsoid',
              'x²/a² + y²/b² + z²/c² = 1',
              'Bounded central conicoid; all plane sections are ellipses.',
            ],
            [
              '2. Hyperboloid of 1 Sheet',
              'x²/a² + y²/b² − z²/c² = 1',
              'Connected central conicoid (1 minus sign); doubly ruled surface.',
            ],
            [
              '3. Hyperboloid of 2 Sheets',
              'x²/a² − y²/b² − z²/c² = 1',
              'Two disconnected sheets (2 minus signs).',
            ],
            [
              '4. Elliptic Paraboloid',
              'x²/a² + y²/b² = 2cz',
              'Non-central conicoid opening along the z-axis.',
            ],
            [
              '5. Hyperbolic Paraboloid',
              'x²/a² − y²/b² = 2cz',
              'Saddle-shaped non-central conicoid; doubly ruled surface.',
            ],
          ],
        },
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the cone with vertex (1, 2, 3) and guiding curve x² + y² = 4, z = 0. (2) [PUST Past Exam — 5 Marks] Find the right circular cylinder of radius R = 2 with axis (x − 1)/2 = (y − 2)/1 = (z − 3)/2. (3) [PUST Past Exam — Corrected PDF Problem 24.1] Reduce 2x² − 7y² + 2z² − 10yz − 8zx − 10xy + 6x + 12y − 6z + 2 = 0 to standard form.',
        solutionSteps: [
          {
            stepTitle: '1. Cone with Vertex (1, 2, 3) & Guiding Circle x² + y² = 4, z = 0',
            explanation: 'Write generator through (1, 2, 3), intersect with z = 0, and eliminate l, m, n:',
            equation:
              'Generator through (1, 2, 3):  (x − 1)/l = (y − 2)/m = (z − 3)/n\nAt z = 0:  x = 1 − 3l/n,   y = 2 − 3m/n\nSubstituting into x² + y² = 4:\n  (1 − 3l/n)² + (2 − 3m/n)² = 4\nUsing l/n = (x − 1)/(z − 3) and m/n = (y − 2)/(z − 3):\n  [1 − 3(x − 1)/(z − 3)]² + [2 − 3(y − 2)/(z − 3)]² = 4\n  ⇒  (z − 3x)² + (2z − 3y)² = 4(z − 3)²\n  ∴  9x² + 9y² + z² − 6xz − 12yz + 24z − 36 = 0',
          },
          {
            stepTitle: '2. Right Circular Cylinder of Radius R = 2',
            explanation: 'Apply the cylinder projection formula with point (1, 2, 3) and axis DRs (2, 1, 2):',
            equation:
              '(x − 1)² + (y − 2)² + (z − 3)² − [2(x − 1) + 1(y − 2) + 2(z − 3)]² / (2² + 1² + 2²) = 2²\n⇒  9[(x − 1)² + (y − 2)² + (z − 3)²] − (2x + y + 2z − 10)² = 36\n∴  5x² + 8y² + 5z² − 4xy − 4yz − 8zx + 22x − 16y − 14z + 26 = 0',
          },
          {
            stepTitle:
              '3. Reduction of 3D Conicoid (Corrected Eigenvalues & Center for Problem 24.1)',
            explanation:
              'Note: In the PDF note (p. 4), the discriminating cubic had a sign error (−3 instead of +3) and center typo. Here is the exact verified solution:',
            equation:
              'Given:  2x² − 7y² + 2z² − 10yz − 8zx − 10xy + 6x + 12y − 6z + 2 = 0\nHere  a = 2, b = −7, c = 2,  f = −5, g = −4, h = −5,  u = 3, v = 6, w = −3, d = 2.\n\nStep 1 (Discriminating Cubic det(A − λI) = 0):\n  | 2 − λ    −5      −4   |\n  |  −5    −7 − λ    −5   | = 0\n  |  −4      −5     2 − λ |\n  ⇒  λ³ + 3λ² − 90λ + 216 = 0\n  ⇒  (λ − 6)(λ − 3)(λ + 12) = 0  ⇒  λ₁ = 6,  λ₂ = 3,  λ₃ = −12\n\nStep 2 (Center (α, β, γ) from ½ ∂F/∂x = ½ ∂F/∂y = ½ ∂F/∂z = 0):\n  2α − 5β − 4γ + 3 = 0\n  −5α − 7β − 5γ + 6 = 0\n  −4α − 5β + 2γ − 3 = 0\n  Solving simultaneously gives:  (α, β, γ) = (1/3, −1/3, 4/3)\n  New constant:  d′ = uα + vβ + wγ + d = 3(1/3) + 6(−1/3) − 3(4/3) + 2 = −3\n\nStep 3 (Standard Equation):\n  6X² + 3Y² − 12Z² − 3 = 0  ⇔  2X² + Y² − 4Z² = 1  [Hyperboloid of One Sheet]',
          },
        ],
        finalAnswer:
          'Cone: 9x²+9y²+z²−6xz−12yz+24z−36=0  |  Cylinder: 5x²+8y²+5z²−4xy−4yz−8zx+22x−16y−14z+26=0  |  Conicoid: 2X²+Y²−4Z²=1',
      },
    ],
  },
];

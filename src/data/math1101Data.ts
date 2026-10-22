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
    estimatedMinutes: 75,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m1-b1',
        type: 'definition',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 1 (Concept of Function, Classification, Domain & Range)',
        title:
          'Definition of a Function, Classification & Class Lecture Domain/Range Problems',
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
            label: '4. Logarithmic Function Domain Rule',
            formula: 'f(x) = ln(g(x))   ⇒   Defined when g(x) > 0',
            note: 'Argument of a logarithm must be strictly positive',
          },
          {
            label: '5. Inverse Trigonometric Function Domain Rule',
            formula:
              'f(x) = sin⁻¹(g(x)) or cos⁻¹(g(x))   ⇒   Defined when −1 ≤ g(x) ≤ 1',
            note: 'Principal inverse sine and cosine domain restriction',
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
        problemStatement:
          'Find the domain and range of the following Class Lecture & Homework functions:\n(1) f(x) = 1 / (x − 3)\n(2) f(x) = √(x² − 5x + 6) and g(x) = 1 / √(x² − 5x + 6)\n(3) f(x) = √((x − 2) / (3 − x))',
        solutionSteps: [
          {
            stepTitle: 'Problem 1.1 (Class Lecture): f(x) = 1 / (x − 3)',
            explanation:
              'Exclude the denominator zero for Domain, then solve for x in terms of y for Range:',
            equation:
              'Step 1 (Domain):\n  Given,  f(x) = 1 / (x − 3)\n  Denominator ≠ 0:\n  x − 3 = 0\n  ⇒  x = 3   [Excluded point]\n  ∴  Domain, D_f = ℝ \\ {3} = (−∞, 3) ∪ (3, ∞)\n\nStep 2 (Range):\n  Let  y = 1 / (x − 3)\n  ⇒  x − 3 = 1 / y\n  ⇒  x = (1 + 3y) / y   [Undefined when y = 0]\n  ∴  Range, R_f = ℝ \\ {0} = (−∞, 0) ∪ (0, ∞)',
          },
          {
            stepTitle:
              'Problem 1.2 & 1.5 (Class Lecture): f(x) = √(x² − 5x + 6) and g(x) = 1 / √(x² − 5x + 6)',
            explanation:
              'Factor the quadratic inside the square root and test interval signs across critical points x = 2, 3:',
            equation:
              'For f(x) = √(x² − 5x + 6):\n  f(x) = √((x − 2)(x − 3))\n  For real values, radicand ≥ 0:\n  x² − 5x + 6 ≥ 0\n  ⇒  (x − 2)(x − 3) ≥ 0   [Critical points: x = 2, 3]\n  Sign analysis:\n    • On (−∞, 2): (−) × (−) = +  (Valid)\n    • On (2, 3):  (+) × (−) = −  (Invalid)\n    • On (3, ∞):  (+) × (+) = +  (Valid)\n  Checking endpoints: f(2) = 0 and f(3) = 0 are defined.\n  ∴  Domain, D_f = (−∞, 2] ∪ [3, ∞)\n  ∴  Range, R_f = [0, ∞)\n\nFor g(x) = 1 / √(x² − 5x + 6):\n  Since the radical is in the denominator, strict inequality holds:\n  (x − 2)(x − 3) > 0\n  ∴  Domain, D_g = (−∞, 2) ∪ (3, ∞)\n  ∴  Range, R_g = (0, ∞)',
          },
          {
            stepTitle: 'Problem 1.4 (Class Homework): f(x) = √((x − 2) / (3 − x))',
            explanation:
              'Enforce non-negative radicand (x − 2)/(3 − x) ≥ 0 and non-zero denominator 3 − x ≠ 0:',
            equation:
              'Step 1 (Domain):\n  (x − 2) / (3 − x) ≥ 0   and   3 − x ≠ 0\n  Sign of (x − 2) / (3 − x):\n    • On (−∞, 2): (−) / (+) = −  (Invalid)\n    • On (2, 3):  (+) / (+) = +  (Valid)\n    • On (3, ∞):  (+) / (−) = −  (Invalid)\n  At x = 2:\n    f(2) = √(0 / 1)\n         = 0   (Included)\n  At x = 3:\n    f(3) = √(1 / 0)   (Undefined, excluded)\n  ∴  Domain, D_f = [2, 3)\n\nStep 2 (Range):\n  Let  y = √((x − 2) / (3 − x))   where y ≥ 0\n  ⇒  y² = (x − 2) / (3 − x)\n  ⇒  3y² − xy² = x − 2\n  ⇒  x(1 + y²) = 3y² + 2\n  ⇒  x = (3y² + 2) / (y² + 1)   [Defined for all real y ≥ 0]\n  ∴  Range, R_f = [0, ∞)',
          },
        ],
      },
      {
        id: 'math-m1-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q1(a) [4 Marks], 2021–22 Q1(a) [5 Marks], 2020–21 Q1(a) [5 Marks]',
        title:
          'PUST Past Exam Questions on Domain, Range, Piecewise Functions & Even/Odd/Periodic Symmetry',
        summaryText:
          'Complete exam-style vertical solutions for PUST 2020–21 Q1(a), 2021–22 Q1(a), and 2022–23 Q1(a).',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4–5 Marks',
        equations: [
          {
            label: 'Even & Odd Function Symmetry (PUST 2020–21 Q1a)',
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
          '(1) [PUST EECE 2020–21 Q1(a) — 5 Marks] Define even, odd, and periodic functions with examples, and find the domain and range of f(x) = (x − 2) / (3 − x).\n(2) [PUST EECE 2021–22 Q1(a) — 5 Marks] Define function, domain and range; find the domain and range of f(x) = √(16 − x²) and describe its graph.\n(3) [PUST EECE 2022–23 Q1(a) — 4 Marks] Define a piecewise function and find the domain, range, and graph behavior of f(x) = { x² + 1 (x < 0); 3x + 1 (0 ≤ x ≤ 3); 10 (x > 3) }.',
        solutionSteps: [
          {
            stepTitle: '1. PUST EECE 2020–21 Q1(a) [5 Marks]: f(x) = (x − 2) / (3 − x)',
            explanation:
              'Find the excluded denominator zero for Domain, then express x in terms of y for Range:',
            equation:
              'Step 1 (Domain):\n  Given,  f(x) = (x − 2) / (3 − x)\n  For f(x) to be real and finite, denominator ≠ 0:\n  3 − x = 0\n  ⇒  x = 3   [Excluded point]\n  ∴  Domain, D_f = ℝ \\ {3} = (−∞, 3) ∪ (3, ∞)\n\nStep 2 (Range):\n  Let  y = (x − 2) / (3 − x)\n  ⇒  y(3 − x) = x − 2\n  ⇒  3y − xy = x − 2\n  ⇒  x + xy = 3y + 2\n  ⇒  x(1 + y) = 3y + 2\n  ⇒  x = (3y + 2) / (y + 1)   [Undefined when y + 1 = 0 ⇒ y = −1]\n  ∴  Range, R_f = ℝ \\ {−1} = (−∞, −1) ∪ (−1, ∞)',
          },
          {
            stepTitle: '2. PUST EECE 2021–22 Q1(a) [5 Marks]: f(x) = √(16 − x²)',
            explanation:
              'Determine the domain, range, and geometric locus of the upper semicircle:',
            equation:
              'For Domain:\n  16 − x² ≥ 0\n  ⇒  x² ≤ 16\n  ⇒  −4 ≤ x ≤ 4\n  ∴  Domain, D_f = [−4, 4]\n\nFor Range:\n  Since x ∈ [−4, 4]:\n  0 ≤ x² ≤ 16\n  ⇒  0 ≤ 16 − x² ≤ 16\n  ⇒  0 ≤ √(16 − x²) ≤ 4\n  ∴  Range, R_f = [0, 4]\n\nGraph Description:\n  y = √(16 − x²)  (y ≥ 0)\n  ⇔  x² + y² = 4²  (y ≥ 0)\n  which is the upper semicircle centered at (0, 0) with radius r = 4.',
          },
          {
            stepTitle:
              '3. PUST EECE 2022–23 Q1(a) [4 Marks]: Piecewise Function Domain & Range',
            explanation:
              'Analyze each branch over its interval to determine the combined domain and range:',
            equation:
              'Branch 1 (x < 0):\n  y = x² + 1  is the left half of an upward parabola approaching (0, 1) as x → 0⁻\n  and rising to +∞ as x → −∞.\n  ⇒  y ∈ (1, ∞)\n\nBranch 2 (0 ≤ x ≤ 3):\n  y = 3x + 1  is a line segment from (0, 1) to (3, 10).\n  ⇒  y ∈ [1, 10]\n\nBranch 3 (x > 3):\n  y = 10  is a horizontal ray starting at (3, 10) extending to +∞.\n  ⇒  y = 10\n\nCombining all three branches:\n  ∴  Domain, D_f = (−∞, 0) ∪ [0, 3] ∪ (3, ∞) = ℝ\n  ∴  Range, R_f = [1, ∞)',
          },
        ],
      },
      {
        id: 'math-m1-b3',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Howard Anton Sec. 0.1 (Ex. 8–14, 19, 35) & Sec. 0.4 (Ex. 20–25, 37)',
        title:
          'Howard Anton Sec. 0.1 & Sec. 0.4: Solved Exercises on Domain, Range & Inverse Functions',
        summaryText:
          'Complete vertical step-by-step solutions for Anton Section 0.1 (Domain & Range) and Section 0.4 (Bijective Inverse Functions).',
        equations: [
          {
            label: 'Inverse Function Existence & Properties',
            formula:
              'f⁻¹ exists ⇔ f is Bijective (One-to-One & Onto)  |  D_{f⁻¹} = R_f,  R_{f⁻¹} = D_f',
            note: 'Graph of y = f⁻¹(x) is the reflection of y = f(x) across the line y = x',
          },
        ],
        problemStatement:
          '(A) [Anton Sec. 0.1] Find the domain and range for:\n(1) f(x) = 1 / (5x + 7)\n(2) g(x) = √(x² − 3) and g(x) = √(x² + 3)\n(3) h(x) = √(x − 3x²)\n(4) φ(x) = x / (|x| + 1)\n(5) F(x) = 3 − √(x − 2)\n(6) f(x) = √(x² − 2x + 5)\n(7) f(x) = (x² − 4) / (x − 2)\n(B) [Anton Sec. 0.4] Find the inverse function f⁻¹(x) for:\n(i) f(x) = (x + 1) / (x − 1)\n(ii) f(x) = 3 / x² (x < 0)\n(iii) f(x) = (e^x + e^{-x}) / 2 (x ≥ 0)',
        solutionSteps: [
          {
            stepTitle: 'Part (A1) — Anton Sec. 0.1 Ex. 8, 9, 10 & 12',
            explanation: 'Vertical derivations for each function:',
            equation:
              '1. Ex. 8: f(x) = 1 / (5x + 7)\n   5x + 7 ≠ 0\n   ⇒  x ≠ −7 / 5\n   ∴  Domain, D_f = (−∞, −7 / 5) ∪ (−7 / 5, ∞)\n   ∴  Range, R_f = (−∞, 0) ∪ (0, ∞)\n\n2. Ex. 9 & 10: (a) g(x) = √(x² − 3)  and  (b) g(x) = √(x² + 3)\n   (a) x² − 3 ≥ 0\n       ⇒  |x| ≥ √3\n       ∴  Domain, D_g = (−∞, −√3] ∪ [√3, ∞)\n       ∴  Range, R_g = [0, ∞)\n   (b) x² + 3 ≥ 3 > 0  for all x ∈ ℝ\n       ∴  Domain, D_g = (−∞, ∞)\n       ∴  Range, R_g = [√3, ∞)\n\n3. Ex. 12: h(x) = √(x − 3x²)\n   x − 3x² ≥ 0\n   ⇒  x(1 − 3x) ≥ 0\n   ⇒  0 ≤ x ≤ 1 / 3\n   Maximum of x − 3x² occurs at vertex x = 1 / 6:\n   h(1 / 6) = √(1 / 12)\n            = 1 / (2√3)\n   ∴  Domain, D_h = [0, 1 / 3]\n   ∴  Range, R_h = [0, 1 / (2√3)]',
          },
          {
            stepTitle: 'Part (A2) — Anton Sec. 0.1 Ex. 13, 14, 19 & 35',
            explanation:
              'Completing the square and checking removable point discontinuities:',
            equation:
              '4. Ex. 13: φ(x) = x / (|x| + 1)\n   Since |x| + 1 ≥ 1 ≠ 0 for all x ∈ ℝ:\n   ∴  Domain, D_φ = (−∞, ∞)\n   Also 0 ≤ |x| / (|x| + 1) < 1\n   ⇒  −1 < x / (|x| + 1) < 1\n   ∴  Range, R_φ = (−1, 1)\n\n5. Ex. 14: F(x) = 3 − √(x − 2)\n   x − 2 ≥ 0\n   ⇒  x ≥ 2\n   ∴  Domain, D_F = [2, ∞)\n   Since √(x − 2) ≥ 0:\n   ⇒  3 − √(x − 2) ≤ 3\n   ∴  Range, R_F = (−∞, 3]\n\n6. Ex. 19: f(x) = √(x² − 2x + 5)\n   x² − 2x + 5 = (x − 1)² + 4 ≥ 4 > 0  for all x ∈ ℝ\n   ∴  Domain, D_f = (−∞, ∞)\n   ∴  Range, R_f = [2, ∞)\n\n7. Ex. 35: f(x) = (x² − 4) / (x − 2)\n   x − 2 ≠ 0\n   ⇒  x ≠ 2\n   ∴  Domain, D_f = ℝ \\ {2}\n   For x ≠ 2:\n   f(x) = (x − 2)(x + 2) / (x − 2)\n        = x + 2   [Missing value at x = 2 is y = 4]\n   ∴  Range, R_f = ℝ \\ {4}',
          },
          {
            stepTitle: 'Part (B) — Anton Sec. 0.4 Inverse Function Derivations (Ex. 20, 23, 37)',
            explanation:
              'Solve y = f(x) vertically for x in terms of y, respecting domain restrictions:',
            equation:
              '(i) f(x) = (x + 1) / (x − 1):\n    Let  y = (x + 1) / (x − 1)\n    ⇒  yx − y = x + 1\n    ⇒  x(y − 1) = y + 1\n    ⇒  x = (y + 1) / (y − 1)\n    ∴  f⁻¹(x) = (x + 1) / (x − 1),   x ≠ 1\n\n(ii) f(x) = 3 / x²  (x < 0):\n    Let  y = 3 / x²,   y > 0\n    ⇒  x² = 3 / y\n    ⇒  x = −√(3 / y)   [Negative root chosen because x < 0]\n    ∴  f⁻¹(x) = −√(3 / x),   x > 0\n\n(iii) f(x) = (e^x + e^{-x}) / 2  (x ≥ 0):\n    Let  y = (e^x + e^{-x}) / 2   [For x ≥ 0, y ≥ 1]\n    ⇒  2y = e^x + 1 / e^x\n    ⇒  (e^x)² − 2y(e^x) + 1 = 0   [Quadratic in e^x]\n    ⇒  e^x = (2y ± √(4y² − 4)) / 2\n           = y ± √(y² − 1)\n    ⇒  e^x = y + √(y² − 1)   [Since x ≥ 0 ⇒ e^x ≥ 1]\n    ⇒  x = ln(y + √(y² − 1))\n    ∴  f⁻¹(x) = ln(x + √(x² − 1)),   x ≥ 1',
          },
        ],
      },
      {
        id: 'math-m1-b4',
        type: 'theory',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 2.1 & Unit 3.1–3.3 (Graph Transformations & Existence of Limits)',
        title:
          'Graph Transformations (Shifting, Scaling, Reflecting) & One-Sided Existence of Limits',
        summaryText:
          'lim_{x→a} f(x) = L exists if and only if both L.H.L. = lim_{x→a⁻} f(x) and R.H.L. = lim_{x→a⁺} f(x) exist finitely and are equal.',
        equations: [
          {
            label: 'Graph Shifting & Reflecting Rules (c > 0)',
            formula:
              'y = f(x ± c) [Left/Right by c]  |  y = f(x) ± c [Up/Down by c]  |  y = −f(x) [x-axis]  |  y = f(−x) [y-axis]',
          },
          {
            label: 'Two-Sided Limit Existence Criterion',
            formula: 'L.H.L. = lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = R.H.L. = L',
          },
          {
            label: 'Fundamental Trigonometric & Infinity Limits',
            formula:
              'lim_{x→0} (sin x) / x = 1  |  lim_{x→0} (tan x) / x = 1  |  lim_{x→0} (1 − cos x) / x = 0  |  lim_{x→±∞} 1 / xⁿ = 0 (n > 0)',
          },
        ],
        problemStatement:
          'Solve the Class Lecture problems:\n(1) [Problem 2.1] Analyze and find the domain and range of f(x) = 1 + |x − 1|.\n(2) [Problem 3.1] Examine the existence of limits at x = 0 and x = 3 for f(x) = { x² + 5 (x < 0); x + 5 (0 ≤ x ≤ 3); 2x + 1 (x > 3) }.\n(3) [Problem 3.2] Evaluate lim_{x→3} |x − 3| / (x − 3).\n(4) [Problem 3.3] Evaluate lim_{x→∞} (2x + 3)³(3x − 2)² / (x⁵ + 5).',
        solutionSteps: [
          {
            stepTitle: '1. Class Lecture Problem 2.1: f(x) = 1 + |x − 1|',
            explanation:
              'Split the absolute value at x = 1 and identify the shifted V-shaped graph vertex:',
            equation:
              '|x − 1| = { 1 − x,  if x < 1;   x − 1,  if x ≥ 1 }\nAdding 1 to both branches:\n  f(x) = 1 + |x − 1| = { 2 − x,  if x < 1;   x,  if x ≥ 1 }\n  Vertex is shifted 1 unit right and 1 unit up to (1, 1).\n  ∴  Domain, D_f = (−∞, ∞),   Range, R_f = [1, ∞)',
          },
          {
            stepTitle: '2. Class Lecture Problem 3.1 & 3.2: One-Sided Limits (L.H.L. vs R.H.L.)',
            explanation: 'Compare L.H.L. and R.H.L. at each boundary point:',
            equation:
              'Problem 3.1 (i) At x = 0:\n  L.H.L. = lim_{x→0⁻} (x² + 5)\n         = 0² + 5\n         = 5\n  R.H.L. = lim_{x→0⁺} (x + 5)\n         = 0 + 5\n         = 5\n  ∴  lim_{x→0} f(x) = 5   (Exists)\n\nProblem 3.1 (ii) At x = 3:\n  L.H.L. = lim_{x→3⁻} (x + 5)\n         = 3 + 5\n         = 8\n  R.H.L. = lim_{x→3⁺} (2x + 1)\n         = 2(3) + 1\n         = 7\n  ∴  Since L.H.L. (8) ≠ R.H.L. (7), lim_{x→3} f(x) does not exist.\n\nProblem 3.2: Evaluate lim_{x→3} |x − 3| / (x − 3):\n  L.H.L. = lim_{x→3⁻} −(x − 3) / (x − 3)\n         = −1\n  R.H.L. = lim_{x→3⁺} +(x − 3) / (x − 3)\n         = +1\n  ∴  Since L.H.L. (−1) ≠ R.H.L. (+1), lim_{x→3} |x − 3| / (x − 3) does not exist.',
          },
          {
            stepTitle:
              '3. Class Lecture Problem 3.3: lim_{x→∞} (2x + 3)³(3x − 2)² / (x⁵ + 5)',
            explanation: 'Divide numerator and denominator by x⁵ = x³ · x²:',
            equation:
              'L = lim_{x→∞} (2x + 3)³(3x − 2)² / (x⁵ + 5)\n  = lim_{x→∞} [ (2 + 3 / x)³ (3 − 2 / x)² ] / (1 + 5 / x⁵)\n  = (2 + 0)³ (3 − 0)² / (1 + 0)\n  = 8 × 9\n∴  L = 72',
          },
        ],
      },
      {
        id: 'math-m1-b5',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q1(b) [4.5 Marks], 2020–21 Q1(b) [4.5 Marks], 2020–21 Q1(c) [4.5 Marks]',
        title:
          'PUST Past Exam Questions on Formal (ε-δ) Limit Proof & Piecewise Continuity (Finding a and b)',
        summaryText:
          'Formal Cauchy ε-δ proof (PUST 2020–21 Q1c) and piecewise continuity parameter problems (PUST 2022–23 Q1b & 2020–21 Q1b).',
        examYears: ['2022–23', '2020–21'],
        marks: '4.5 Marks',
        equations: [
          {
            label: 'Formal Cauchy (ε-δ) Definition of Limit',
            formula: '∀ ε > 0,  ∃ δ > 0  such that  0 < |x − a| < δ  ⇒  |f(x) − L| < ε',
          },
          {
            label: 'Three Conditions for Continuity at x = a',
            formula: 'L.H.L. = lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = R.H.L. = f(a)',
          },
        ],
        problemStatement:
          '(1) [PUST EECE 2020–21 Q1(c) — 4.5 Marks] Using the ε-δ definition of limit, prove that lim_{x→2}(3x − 5) = 1.\n(2) [PUST EECE 2022–23 Q1(b) — 4.5 Marks] What are the conditions for a function to be continuous at x = a? For what values of a and b is f(x) = { −2 (x ≤ −1); ax − b (−1 < x < 1); 3 (x ≥ 1) } continuous at every x?\n(3) [PUST EECE 2020–21 Q1(b) — 4.5 Marks] Find a and b so that f(x) = { x² + 2 (x < 0); ax + b (0 ≤ x < 1); 3 + 2x − x² (x ≥ 1) } is continuous at x = 0 and x = 1.',
        solutionSteps: [
          {
            stepTitle:
              '1. PUST EECE 2020–21 Q1(c) [4.5 Marks]: Prove lim_{x→2}(3x − 5) = 1',
            explanation:
              'Let ε > 0 be arbitrary. Here f(x) = 3x − 5, a = 2, and L = 1. Find δ > 0 in terms of ε:',
            equation:
              'Scratch / Backward Simplification:\n  |(3x − 5) − 1| < ε   whenever   0 < |x − 2| < δ\n  ⇒  |3x − 6| < ε\n  ⇒  |3(x − 2)| < ε\n  ⇒  3|x − 2| < ε\n  ⇒  |x − 2| < ε / 3\n\nFormal Deduction:\n  Choose  δ = ε / 3 > 0.\n  Then whenever  0 < |x − 2| < δ:\n    |(3x − 5) − 1| = |3x − 6|\n                    = 3|x − 2|\n                    < 3δ          [∵ |x − 2| < δ]\n                    = 3(ε / 3)\n                    = ε\n  ∴  lim_{x→2}(3x − 5) = 1   (with δ = ε / 3)',
          },
          {
            stepTitle: '2. PUST EECE 2022–23 Q1(b) [4.5 Marks]: Continuity at x = −1 and x = 1',
            explanation:
              'Enforce L.H.L. = R.H.L. = f(a) at the boundary points x = −1 and x = 1:',
            equation:
              'Step 1 (Continuity at x = −1):\n  L.H.L. = lim_{x→−1⁻} (−2)\n         = −2\n  R.H.L. = lim_{x→−1⁺} (ax − b)\n         = −a − b\n  Since L.H.L. = R.H.L.:\n    −a − b = −2\n    ⇒  a + b = 2   --- (1)\n\nStep 2 (Continuity at x = 1):\n  L.H.L. = lim_{x→1⁻} (ax − b)\n         = a − b\n  R.H.L. = lim_{x→1⁺} (3)\n         = 3\n  Since L.H.L. = R.H.L.:\n    a − b = 3       --- (2)\n\nStep 3 (Solving (1) and (2)):\n  Adding (1) and (2):\n    2a = 5\n    ⇒  a = 5 / 2\n  From (1):\n    b = 2 − 5 / 2\n      = −1 / 2\n  ∴  a = 5 / 2,   b = −1 / 2',
          },
          {
            stepTitle: '3. PUST EECE 2020–21 Q1(b) [4.5 Marks]: Continuity at x = 0 and x = 1',
            explanation: 'Enforce continuity at x = 0 and x = 1:',
            equation:
              'At x = 0:\n  L.H.L. = lim_{x→0⁻} (x² + 2)\n         = 2\n  R.H.L. = lim_{x→0⁺} (ax + b)\n         = b\n  ⇒  b = 2\n\nAt x = 1:\n  L.H.L. = lim_{x→1⁻} (ax + b)\n         = a + b\n  R.H.L. = lim_{x→1⁺} (3 + 2x − x²)\n         = 3 + 2 − 1\n         = 4\n  ⇒  a + b = 4\n  ⇒  a + 2 = 4\n  ⇒  a = 2\n  ∴  a = 2,   b = 2',
          },
        ],
      },
      {
        id: 'math-m1-b6',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Howard Anton Sec. 1.2, 1.3, 1.5 & 1.6 (Limits & Continuity Homework Sets)',
        title:
          'Howard Anton Sec. 1.2, 1.3, 1.5 & 1.6: Radical Limits at ±∞, Trig Limits & Intermediate Value Theorem',
        summaryText:
          'When factoring x² out of a square root as x → −∞, always use √(x²) = |x| = −x.',
        equations: [
          {
            label: 'Square Root Sign Rule as x → −∞',
            formula: '√(x²) = |x| = { +x if x > 0 (x → +∞);  −x if x < 0 (x → −∞) }',
            note: 'Critical rule when dividing radicals by x as x → −∞',
          },
          {
            label: 'Classification of Discontinuities (Anton Sec. 1.5)',
            formula:
              'Removable: lim exists ≠ f(a)  |  Jump: LHL ≠ RHL (both finite)  |  Infinite: LHL or RHL = ±∞',
            note: 'Correction to PDF Note p.17 (Anton 1.5 Ex. 35b): For f(x) = (x² − 9) / (x + 3) at x = −3, removable limit is lim_{x→−3}(x − 3) = −6 (not −3)',
          },
        ],
        problemStatement:
          '(1) [Anton 1.2 Ex. 13, 29] Evaluate lim_{t→2} (t³ + 3t² − 12t + 4) / (t³ − 4t) and lim_{x→9} (x − 9) / (√x − 3).\n(2) [Anton 1.3 Ex. 25, 26 & 32] Evaluate lim_{x→−∞} √(5x² − 2) / (x + 3), lim_{x→+∞} √(5x² − 2) / (x + 3), and lim_{x→+∞} (√(x² − 3x) − x).\n(3) [Anton 1.6 Ex. 27, 28, 41] Evaluate lim_{θ→0} θ² / (1 − cos θ), lim_{h→0} (1 − cos 3h) / (cos² 5h − 1), and find k ≠ 0 so f(x) = { (tan kx)/x (x < 0); 3x + 2k² (x ≥ 0) } is continuous at x = 0.\n(4) [Anton 1.5 Ex. 47] Use the Intermediate Value Theorem to show x³ + x² − 2x = 1 has a root in [−1, 1].',
        solutionSteps: [
          {
            stepTitle: '1. Anton 1.2 Ex. 13 & Ex. 29 (Factoring & Radical Conjugate)',
            explanation: 'Factor out common zero factors before substituting the limit:',
            equation:
              'Ex. 13:\n  L = lim_{t→2} (t³ + 3t² − 12t + 4) / (t³ − 4t)\n    = lim_{t→2} [ (t − 2)(t² + 5t − 2) ] / [ t(t − 2)(t + 2) ]\n    = (4 + 10 − 2) / (2 × 4)\n    = 12 / 8\n  ∴  L = 3 / 2\n\nEx. 29:\n  L = lim_{x→9} (x − 9) / (√x − 3)\n    = lim_{x→9} [ (√x − 3)(√x + 3) ] / (√x − 3)\n    = √9 + 3\n  ∴  L = 6',
          },
          {
            stepTitle: '2. Anton 1.3 Ex. 25, 26 & 32 (Radical Limits at ±∞)',
            explanation:
              'Use √(x²) = |x| = −x for x → −∞ and conjugate rationalization for ∞ − ∞:',
            equation:
              'Ex. 25 (x → −∞):\n  L = lim_{x→−∞} √(5x² − 2) / (x + 3)\n    = lim_{x→−∞} (|x| · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n    = lim_{x→−∞} (−x · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n    = −√(5 − 0) / (1 + 0)\n  ∴  L = −√5\n\nEx. 26 (x → +∞):\n  L = lim_{x→+∞} (+x · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n  ∴  L = +√5\n\nEx. 32 (Conjugate Rationalization):\n  L = lim_{x→+∞} (√(x² − 3x) − x)\n    = lim_{x→+∞} ((x² − 3x) − x²) / (√(x² − 3x) + x)\n    = lim_{x→+∞} (−3x) / (x · (√(1 − 3 / x) + 1))\n    = −3 / (1 + 1)\n  ∴  L = −3 / 2',
          },
          {
            stepTitle: '3. Anton 1.6 Ex. 27, 28, 41 & Anton 1.5 Ex. 47 (IVT Proof)',
            explanation:
              'Use trigonometric identities and the Intermediate Value Theorem on [−1, 1]:',
            equation:
              'Ex. 27:\n  L = lim_{θ→0} θ² / (1 − cos θ)\n    = lim_{θ→0} (θ / sin θ)² · (1 + cos θ)\n    = (1)² · (1 + 1)\n  ∴  L = 2\n\nEx. 28:\n  L = lim_{h→0} (1 − cos 3h) / (cos² 5h − 1)\n    = lim_{h→0} (2 sin²(3h / 2)) / (−sin²(5h))\n    = −2 · (9 / 4) / 25\n  ∴  L = −9 / 50\n\nEx. 41 (Continuity at x = 0):\n  L.H.L. = lim_{x→0⁻} k · (tan kx) / (kx)\n         = k\n  R.H.L. = f(0)\n         = 2k²\n  ⇒  2k² = k  (k ≠ 0)\n  ∴  k = 1 / 2\n\nAnton 1.5 Ex. 47 (IVT):\n  Let  f(x) = x³ + x² − 2x − 1   [Continuous on [−1, 1]]\n  f(−1) = +1 > 0,   f(1) = −1 < 0\n  ∴  Since f(1) < 0 < f(−1), by IVT there exists c ∈ (−1, 1) such that f(c) = 0.',
          },
        ],
      },
      {
        id: 'math-m1-b7',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · G. B. Thomas & R. L. Finney (Ch. 1) & M. R. Spiegel (Advanced Calculus)',
        title:
          'Syllabus Book Problems: Squeeze (Sandwich) Theorem, Exponential Jump Discontinuity & Non-Linear ε-δ Proof',
        summaryText:
          'If g(x) ≤ f(x) ≤ h(x) near x = a and lim_{x→a} g(x) = lim_{x→a} h(x) = L, then lim_{x→a} f(x) = L.',
        equations: [
          {
            label: 'Squeeze (Sandwich) Theorem Criterion',
            formula:
              'g(x) ≤ f(x) ≤ h(x)  and  lim_{x→a} g(x) = lim_{x→a} h(x) = L   ⇒   lim_{x→a} f(x) = L',
          },
          {
            label: 'Bounded Oscillating Product Rule',
            formula: 'lim_{x→0} xⁿ sin(1 / x) = 0   and   lim_{x→0} xⁿ cos(1 / x) = 0   (for n > 0)',
          },
        ],
        problemStatement:
          '(1) [Thomas & Finney] Use the Squeeze Theorem to prove that lim_{x→0} x² sin(1 / x) = 0.\n(2) [Spiegel, Advanced Calculus] Examine the continuity of f(x) = 1 / (1 + 2^{1/x}) at x = 0.\n(3) [F. Ayres, Schaum’s Calculus] Prove using the ε-δ definition that lim_{x→3} x² = 9.',
        solutionSteps: [
          {
            stepTitle: '1. Squeeze Theorem Proof: lim_{x→0} x² sin(1 / x) = 0',
            explanation:
              'Bound sin(1/x) between −1 and +1 for all x ≠ 0 and multiply by x² > 0:',
            equation:
              'For all x ≠ 0:\n  −1 ≤ sin(1 / x) ≤ 1\n  ⇒  −x² ≤ x² sin(1 / x) ≤ x²   [∵ x² > 0]\nTaking limits as x → 0:\n  lim_{x→0} (−x²) = 0   and   lim_{x→0} (+x²) = 0\n  ∴  By the Squeeze Theorem,  lim_{x→0} x² sin(1 / x) = 0',
          },
          {
            stepTitle:
              '2. Exponential Jump Discontinuity at x = 0: f(x) = 1 / (1 + 2^{1/x})',
            explanation:
              'Evaluate 1/x → −∞ as x → 0⁻ and 1/x → +∞ as x → 0⁺:',
            equation:
              'As x → 0⁻:  1 / x → −∞  ⇒  2^{1/x} → 0\n  L.H.L. = lim_{x→0⁻} 1 / (1 + 2^{1/x})\n         = 1 / (1 + 0)\n         = 1\n\nAs x → 0⁺:  1 / x → +∞  ⇒  2^{1/x} → +∞\n  R.H.L. = lim_{x→0⁺} 1 / (1 + 2^{1/x})\n         = 0\n  ∴  Since L.H.L. (1) ≠ R.H.L. (0), f(x) has a finite jump discontinuity at x = 0.',
          },
          {
            stepTitle: '3. Non-Linear ε-δ Proof: lim_{x→3} x² = 9',
            explanation:
              'Restrict δ ≤ 1 so that |x + 3| < 7, then choose δ = min(1, ε / 7):',
            equation:
              'We have:\n  |x² − 9| = |x + 3| · |x − 3|\nFirst restrict δ ≤ 1:\n  |x − 3| < 1\n  ⇒  2 < x < 4\n  ⇒  5 < x + 3 < 7\n  ⇒  |x + 3| < 7\n\nChoose  δ = min(1, ε / 7) > 0.\nThen whenever 0 < |x − 3| < δ:\n  |x² − 9| = |x + 3| · |x − 3|\n           < 7 · (ε / 7)\n           = ε\n  ∴  lim_{x→3} x² = 9   (with δ = min(1, ε / 7))',
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
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m2-b1',
        type: 'memorize',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Unit 5.1 (Standard n-th Derivative Formulas y_n = Dⁿy & Class Problems)',
        title:
          'Standard n-th Derivative Formulas, Partial Fractions & Trigonometric Reduction',
        summaryText:
          'Complete reference table of n-th derivatives and worked solutions for rational partial fractions, trigonometric powers/products, and log-trig differential equations.',
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
          'Find the n-th derivative y_n for: (1) y = x / [(x − 1)(x − 2)(x − 3)], (2) y = sin³x and y = sin x · sin 3x, and (3) if y = a cos(ln x) + b sin(ln x), show that x² y_{n+2} + (2n + 1)x y_{n+1} + (n² + 1)y_n = 0.',
        solutionSteps: [
          {
            stepTitle:
              '1. Partial Fraction Decomposition: y = x / [(x − 1)(x − 2)(x − 3)]',
            explanation: 'Use the cover-up rule to find A, B, C and apply Dⁿ[1/(x − k)]:',
            equation:
              'Let  x / [(x − 1)(x − 2)(x − 3)] = A / (x − 1) + B / (x − 2) + C / (x − 3)\n  For x = 1:  A = 1 / [(1 − 2)(1 − 3)] = +1 / 2\n  For x = 2:  B = 2 / [(2 − 1)(2 − 3)] = −2\n  For x = 3:  C = 3 / [(3 − 1)(3 − 2)] = +3 / 2\n\n⇒  y = 1 / [2(x − 1)] − 2 / (x − 2) + 3 / [2(x − 3)]\n∴  y_n = (−1)ⁿ n! [ 1 / (2(x − 1)^{n+1}) − 2 / (x − 2)^{n+1} + 3 / (2(x − 3)^{n+1}) ]',
          },
          {
            stepTitle:
              '2. Trigonometric Reduction: (a) y = sin³x and (b) y = sin x sin 3x',
            explanation:
              'Linearize powers and products of sines/cosines before differentiating:',
            equation:
              '(a) Given,  y = sin³x\n    ⇒  y = (1 / 4)(3 sin x − sin 3x)   [∵ sin 3x = 3 sin x − 4 sin³x]\n    ∴  y_n = (3 / 4) sin(x + nπ / 2) − (3ⁿ / 4) sin(3x + nπ / 2)\n\n(b) Given,  y = sin x sin 3x\n    ⇒  y = (1 / 2)(cos 2x − cos 4x)   [∵ 2 sin A sin B = cos(A − B) − cos(A + B)]\n    ∴  y_n = (1 / 2)[ 2ⁿ cos(2x + nπ / 2) − 4ⁿ cos(4x + nπ / 2) ]',
          },
          {
            stepTitle: '3. Class Lecture Problem: y = a cos(ln x) + b sin(ln x)',
            explanation: 'Multiply by x before differentiating a second time:',
            equation:
              'Given,  y = a cos(ln x) + b sin(ln x)\n  ⇒  y₁ = [−a sin(ln x) + b cos(ln x)] / x\n  ⇒  x y₁ = −a sin(ln x) + b cos(ln x)\n  ⇒  x y₂ + y₁ = [−a cos(ln x) − b sin(ln x)] / x\n  ⇒  x y₂ + y₁ = −y / x\n  ⇒  x² y₂ + x y₁ + y = 0\nApplying Leibniz’s Theorem (Dⁿ):\n  ∴  x² y_{n+2} + (2n + 1)x y_{n+1} + (n² + 1)y_n = 0',
          },
        ],
      },
      {
        id: 'math-m2-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q1(c) [5.5 Marks], 2021–22 Q2(a) [5 Marks]',
        title:
          'PUST Past Exam Questions on Differentiability at a Point & Continuity vs. Differentiability',
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
          '(1) Prove that differentiability implies continuity. (2) [PUST EECE 2022–23 Q1(c) — 5.5 Marks] Prove that f(x) = |x| is continuous at x = 0, but not differentiable at x = 0. (3) [PUST EECE 2021–22 Q2(a) — 5 Marks] Discuss the continuity and differentiability of f(x) = { 2x (x < 0); 2x² (0 ≤ x < 1); 4 − 2x (x ≥ 1) } at x = 1.',
        solutionSteps: [
          {
            stepTitle: '1. Theorem Proof: Differentiability Implies Continuity',
            explanation:
              'Assume f′(a) = lim_{x→a} [f(x) − f(a)] / (x − a) exists finitely:',
            equation:
              'lim_{x→a} [f(x) − f(a)]\n  = lim_{x→a} [ ((f(x) − f(a)) / (x − a)) · (x − a) ]\n  = [ lim_{x→a} (f(x) − f(a)) / (x − a) ] · [ lim_{x→a} (x − a) ]\n  = f′(a) · 0\n  = 0\n⇒  lim_{x→a} f(x) = f(a)\n∴  Every function differentiable at x = a is continuous at x = a.',
          },
          {
            stepTitle:
              '2. PUST EECE 2022–23 Q1(c) [5.5 Marks]: f(x) = |x| at x = 0',
            explanation: 'Test continuity and one-sided derivatives at x = 0:',
            equation:
              'Step 1 (Continuity at x = 0):\n  f(0) = 0\n  L.H.L. = lim_{x→0⁻} (−x)\n         = 0\n  R.H.L. = lim_{x→0⁺} (+x)\n         = 0\n  Since L.H.L. = R.H.L. = f(0) = 0,  f(x) = |x| is continuous at x = 0.\n\nStep 2 (Differentiability at x = 0):\n  L.H.D. = lim_{h→0⁻} [f(0 + h) − f(0)] / h\n         = lim_{h→0⁻} (−h) / h\n         = −1\n  R.H.D. = lim_{h→0⁺} [f(0 + h) − f(0)] / h\n         = lim_{h→0⁺} (+h) / h\n         = +1\n  ∴  Since L.H.D. (−1) ≠ R.H.D. (+1), f(x) = |x| is continuous but not differentiable at x = 0.',
          },
          {
            stepTitle:
              '3. PUST EECE 2021–22 Q2(a) [5 Marks]: Piecewise Continuity & Differentiability at x = 1',
            explanation: 'Evaluate L.H.L., R.H.L., L.H.D., and R.H.D. at x = 1:',
            equation:
              'Step 1 (Continuity at x = 1):\n  f(1) = 4 − 2(1)\n       = 2\n  L.H.L. = lim_{x→1⁻} (2x²)\n         = 2\n  R.H.L. = lim_{x→1⁺} (4 − 2x)\n         = 2\n  Since L.H.L. = R.H.L. = f(1) = 2,  f(x) is continuous at x = 1.\n\nStep 2 (Differentiability at x = 1):\n  L.H.D. = lim_{h→0⁻} [2(1 + h)² − 2] / h\n         = lim_{h→0⁻} (4h + 2h²) / h\n         = 4\n  R.H.D. = lim_{h→0⁺} [4 − 2(1 + h) − 2] / h\n         = lim_{h→0⁺} (−2h) / h\n         = −2\n  ∴  f(x) is continuous at x = 1, but not differentiable at x = 1 (∵ L.H.D. = 4 ≠ R.H.D. = −2).',
          },
        ],
      },
      {
        id: 'math-m2-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q2(b) [4.5 Marks], Q4(c) [5 Marks], 2021–22 Q2(b) [5 Marks], 2020–21 Q2(a) [5 Marks]',
        title:
          'PUST Past Exam Questions on Leibniz’s Theorem: Induction Proof, Differential Equations & y_n(0)',
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
          '(1) [PUST 2022–23 Q2b] State and prove Leibniz’s Theorem by mathematical induction. (2) [PUST 2020–21 Q2a] If y = sin(m sin⁻¹x), show that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} + (m² − n²)y_n = 0 and find y_n(0). (3) [PUST 2022–23 Q4c] If y = e^{a sin⁻¹x}, show that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + a²)y_n = 0 and find y_n(0). (4) [PUST 2021–22 Q2b] If y = (x² − 1)ⁿ, prove (x² − 1)y_{n+2} + 2xy_{n+1} − n(n + 1)y_n = 0.',
        solutionSteps: [
          {
            stepTitle:
              '1. Proof of Leibniz’s Theorem by Mathematical Induction (PUST 2022–23 Q2b)',
            explanation:
              'Verify base step n = 1, 2 and inductive step n = m → m + 1 using Pascal’s identity:',
            equation:
              'Step 1 (Base Step n = 1):\n  (uv)₁ = u₁v + u v₁\n        = u₁v + ¹C₁ u v₁   (Holds for n = 1)\n\nStep 2 (Inductive Hypothesis for n = m):\n  Assume  (uv)_m = u_m v + ^mC₁ u_{m−1} v₁ + ··· + ^mC_r u_{m−r} v_r + ··· + u v_m\n\nStep 3 (Inductive Step for n = m + 1):\n  Differentiating w.r.t. x and using ^mC_{r−1} + ^mC_r = ^{m+1}C_r:\n  (uv)_{m+1} = u_{m+1}v + [^mC₀ + ^mC₁] u_m v₁ + ··· + [^mC_{r−1} + ^mC_r] u_{m+1−r} v_r + ··· + u v_{m+1}\n  ∴  (uv)_{m+1} = u_{m+1}v + ^{m+1}C₁ u_m v₁ + ··· + ^{m+1}C_r u_{m+1−r} v_r + ··· + u v_{m+1}',
          },
          {
            stepTitle:
              '2. PUST 2020–21 Q2(a): y = sin(m sin⁻¹x) and evaluation of y_n(0)',
            explanation:
              'Cross-multiply √(1 − x²), square both sides, differentiate, and apply Leibniz’s Theorem:',
            equation:
              'Given,  y = sin(m sin⁻¹x)\n  ⇒  y₁ = [m cos(m sin⁻¹x)] / √(1 − x²)\n  ⇒  (1 − x²)y₁² = m²(1 − y²)\n  ⇒  (1 − x²)(2y₁y₂) − 2x y₁² = −2m² y y₁\n  ⇒  (1 − x²)y₂ − x y₁ + m² y = 0   [Dividing by 2y₁ ≠ 0]\nApplying Leibniz’s Theorem (Dⁿ):\n  ∴  (1 − x²)y_{n+2} − (2n + 1)x y_{n+1} + (m² − n²)y_n = 0\n\nAt x = 0:  y(0) = 0,  y₁(0) = m,  y₂(0) = 0,  y_{n+2}(0) = (n² − m²) y_n(0)\n  ∴  y_n(0) = 0 (even n);   y_n(0) = m(1² − m²)(3² − m²)···((n − 2)² − m²) (odd n ≥ 3)',
          },
          {
            stepTitle:
              '3. PUST 2022–23 Q4(c) & 2021–22 Q2(b): y = e^{a sin⁻¹x} and y = (x² − 1)ⁿ',
            explanation:
              'Vertical derivations for exponential inverse-sine and Legendre polynomial forms:',
            equation:
              'Problem A (PUST 2022–23 Q4c):  y = e^{a sin⁻¹x}\n  ⇒  (1 − x²)y₁² = a² y²\n  ⇒  (1 − x²)y₂ − x y₁ − a² y = 0\n  ∴  (1 − x²)y_{n+2} − (2n + 1)x y_{n+1} − (n² + a²)y_n = 0\n  ∴  y_n(0) = a²(2² + a²)···((n − 2)² + a²) [even n];   a(1² + a²)···((n − 2)² + a²) [odd n]\n\nProblem B (PUST 2021–22 Q2b):  y = (x² − 1)ⁿ\n  ⇒  y₁ = 2nx(x² − 1)^{n−1}\n  ⇒  (x² − 1)y₁ = 2nxy\n  ⇒  (x² − 1)y₂ − 2(n − 1)xy₁ − 2ny = 0\n  ∴  (x² − 1)y_{n+2} + 2x y_{n+1} − n(n + 1)y_n = 0',
          },
        ],
      },
      {
        id: 'math-m2-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Howard Anton Sec. 2.2 & Sec. 4.4 (Differentiability & Absolute Extrema)',
        title:
          'Howard Anton Sec. 4.4: Absolute (Global) Maxima and Minima on a Closed Interval [a, b]',
        summaryText:
          'By the Extreme Value Theorem, evaluate f(x) at all critical points c ∈ (a, b) where f′(c) = 0 or f′(c) DNE, and at the endpoints x = a, b.',
        equations: [
          {
            label: 'Closed-Interval Absolute Extrema Procedure',
            formula:
              'Max / Min on [a, b] = max / min { f(a),  f(c₁), f(c₂), ...,  f(b) }   where f′(c_i) = 0 or DNE',
          },
        ],
        problemStatement:
          '(1) [Anton Sec. 4.4] Find the absolute maximum and minimum values of f(x) = 2x³ − 15x² + 36x on the closed interval [1, 5]. (2) [Anton Sec. 4.4] Find the absolute extrema of g(x) = x − 2 sin x on [0, 2π].',
        solutionSteps: [
          {
            stepTitle: '1. Polynomial on [1, 5]: f(x) = 2x³ − 15x² + 36x',
            explanation: 'Differentiate f(x), find critical points in (1, 5), and compare values:',
            equation:
              'f(x) = 2x³ − 15x² + 36x\n  ⇒  f′(x) = 6x² − 30x + 36\n           = 6(x − 2)(x − 3)\nSetting f′(x) = 0  ⇒  x = 2, 3 ∈ (1, 5)\n\nEvaluating at critical points and endpoints:\n  f(1) = 2(1) − 15(1) + 36(1) = 23\n  f(2) = 2(8) − 15(4) + 36(2) = 28\n  f(3) = 2(27) − 15(9) + 36(3) = 27\n  f(5) = 2(125) − 15(25) + 36(5) = 55\n  ∴  Absolute Maximum = 55 (at x = 5),   Absolute Minimum = 23 (at x = 1)',
          },
          {
            stepTitle: '2. Trigonometric Function on [0, 2π]: g(x) = x − 2 sin x',
            explanation: 'Solve g′(x) = 1 − 2 cos x = 0 on (0, 2π):',
            equation:
              'g′(x) = 1 − 2 cos x = 0\n  ⇒  cos x = 1 / 2\n  ⇒  x = π / 3,   5π / 3\n\nEvaluating g(x) at x = 0, π/3, 5π/3, 2π:\n  g(0) = 0\n  g(π / 3) = π / 3 − √3 ≈ −0.685\n  g(5π / 3) = 5π / 3 + √3 ≈ 6.968\n  g(2π) = 2π ≈ 6.283\n  ∴  Absolute Maximum = 5π / 3 + √3 (at x = 5π / 3),   Absolute Minimum = π / 3 − √3 (at x = π / 3)',
          },
        ],
      },
      {
        id: 'math-m2-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · J. Edwards (Differential Calculus, Ch. III) & F. Ayres (Schaum’s Calculus)',
        title:
          'Syllabus Book Derivations: n-th Derivative of tan⁻¹(x/a) & Implicit Power-Sum Leibniz Theorem',
        summaryText:
          'Using the polar substitution x = a cot θ reduces y = tan⁻¹(x/a) and y = 1/(x² + a²) to compact trigonometric n-th derivatives.',
        equations: [
          {
            label: 'Edwards’ Polar Substitution for y = tan⁻¹(x / a)',
            formula:
              'y_n = [(−1)^{n−1} (n − 1)! / aⁿ] · sinⁿθ · sin(nθ),   where θ = cot⁻¹(x / a)',
          },
        ],
        problemStatement:
          '(1) [J. Edwards, Differential Calculus] If y = tan⁻¹(x), prove that (1 + x²)y_{n+2} + 2(n + 1)x y_{n+1} + n(n + 1)y_n = 0 and find y_n(0). (2) [J. Edwards & F. Ayres] If y^{1/m} + y^{−1/m} = 2x, prove that (x² − 1)y_{n+2} + (2n + 1)x y_{n+1} + (n² − m²)y_n = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Edwards’ Derivation for y = tan⁻¹(x)',
            explanation:
              'Differentiate y₁ = 1 / (1 + x²) to get (1 + x²)y₁ = 1 and apply Leibniz’s Theorem:',
            equation:
              'Given,  y = tan⁻¹(x)\n  ⇒  y₁ = 1 / (1 + x²)\n  ⇒  (1 + x²)y₁ = 1\n  ⇒  (1 + x²)y₂ + 2x y₁ = 0\nApplying Leibniz’s Theorem (Dⁿ):\n  [(1 + x²)y_{n+2} + 2nx y_{n+1} + n(n − 1)y_n] + 2[x y_{n+1} + n y_n] = 0\n  ∴  (1 + x²)y_{n+2} + 2(n + 1)x y_{n+1} + n(n + 1)y_n = 0\n  ∴  At x = 0:  y_n(0) = 0 (even n);   y_n(0) = (−1)^{(n−1)/2} (n − 1)! (odd n)',
          },
          {
            stepTitle: '2. Implicit Power-Sum Equation: y^{1/m} + y^{−1/m} = 2x',
            explanation: 'Solve the quadratic in y^{1/m} and eliminate the radical:',
            equation:
              'Given,  y^{1/m} + 1 / y^{1/m} = 2x\n  ⇒  (y^{1/m})² − 2x(y^{1/m}) + 1 = 0\n  ⇒  y^{1/m} = x ± √(x² − 1)\n  ⇒  y = (x ± √(x² − 1))^m\n  ⇒  y₁ = ±m y / √(x² − 1)\n  ⇒  (x² − 1)y₁² = m² y²\n  ⇒  (x² − 1)y₂ + x y₁ − m² y = 0\n  ∴  (x² − 1)y_{n+2} + (2n + 1)x y_{n+1} + (n² − m²)y_n = 0',
          },
        ],
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
    estimatedMinutes: 75,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m3-b1',
        type: 'theory',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Units 6–7 & Professor’s Rolle’s / MVT Handout (#2, #5, #6, #9)',
        title:
          'Rolle’s Theorem, Lagrange’s MVT, Cauchy’s MVT & Class Handout Solutions',
        summaryText:
          'Rolle’s Theorem: f(a) = f(b) ⇒ f′(c) = 0 for some c ∈ (a, b). Lagrange’s MVT: f′(c) = [f(b) − f(a)] / (b − a) for some c ∈ (a, b).',
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
          'Solve the Professor’s Rolle’s & Mean Value Theorem Handout problems: (1) [Handout #2] Verify Rolle’s Theorem for f(x) = ln[(x² + ab) / (x(a + b))] on [a, b] (0 < a < b). (2) [Handout #5 & #6] Verify Rolle’s Theorem for f(x) = e^x sin x on [0, π] and g(x) = e^{2x}(sin 2x − cos 2x) on [π/8, 5π/8]. (3) [Handout #9] If Rolle’s Theorem holds for f(x) = x³ + ax² + bx on [1, 2] with c = 4/3, find a and b.',
        solutionSteps: [
          {
            stepTitle: '1. Handout #2: f(x) = ln[(x² + ab) / (x(a + b))] on [a, b]',
            explanation: 'Verify f(a) = f(b) = 0 and solve f′(c) = 0 for c ∈ (a, b):',
            equation:
              'f(x) = ln(x² + ab) − ln x − ln(a + b)\n  f(a) = ln(2ab / (2ab)) = ln 1 = 0\n  f(b) = ln(2ab / (2ab)) = ln 1 = 0\nDifferentiating w.r.t. x:\n  f′(c) = 2c / (c² + ab) − 1 / c\n        = (c² − ab) / [c(c² + ab)] = 0\n  ⇒  c² = ab\n  ∴  c = √(ab) ∈ (a, b)   (Geometric mean of a and b)',
          },
          {
            stepTitle: '2. Handout #5 & #6: Exponential-Trigonometric Rolle’s Verifications',
            explanation: 'Set f′(c) = 0 inside the open intervals:',
            equation:
              'Handout #5:  f(x) = e^x sin x  on [0, π]\n  f(0) = 0,   f(π) = 0\n  f′(c) = e^c(sin c + cos c) = 0\n  ⇒  tan c = −1\n  ∴  c = 3π / 4 ∈ (0, π)\n\nHandout #6:  g(x) = e^{2x}(sin 2x − cos 2x)  on [π / 8, 5π / 8]\n  g′(c) = 4e^{2c} sin 2c = 0\n  ⇒  2c = π\n  ∴  c = π / 2 ∈ (π / 8, 5π / 8)',
          },
          {
            stepTitle: '3. Handout #9: Finding Unknown Constants a and b',
            explanation: 'Enforce f(1) = f(2) and f′(4/3) = 0:',
            equation:
              'f(1) = f(2)\n  ⇒  1 + a + b = 8 + 4a + 2b\n  ⇒  3a + b = −7   --- (1)\nf′(4 / 3) = 0\n  ⇒  3(16 / 9) + 2a(4 / 3) + b = 0\n  ⇒  8a + 3b = −16  --- (2)\nSolving (1) and (2):\n  ∴  a = −5,   b = 8',
          },
        ],
      },
      {
        id: 'math-m3-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q2(a), Q4(a), 2021–22 Q1(b,c), Q4(a), 2020–21 Q2(b)',
        title:
          'PUST Past Exam Questions on Rolle’s Theorem, Lagrange’s MVT & Maclaurin’s Series Expansions',
        summaryText:
          'Proofs of Rolle’s and Lagrange’s MVT, interval verifications, and Maclaurin expansions of ln(1 + x) and e^x sec x.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4–5.5 Marks',
        equations: [
          {
            label: 'Taylor’s & Maclaurin’s Series Formulas',
            formula:
              'Taylor: f(x) = ∑ [f^{(n)}(a)/n!](x − a)ⁿ  |  Maclaurin (a = 0): f(x) = f(0) + x f′(0) + (x²/2!)f′′(0) + ···',
          },
          {
            label: 'Standard Maclaurin Expansions (e^x, sin x, cos x, ln(1+x))',
            formula:
              'e^x = 1 + x + x²/2! + ···  |  sin x = x − x³/3! + ···  |  cos x = 1 − x²/2! + ···  |  ln(1+x) = x − x²/2 + x³/3 − ···',
          },
        ],
        problemStatement:
          '(1) [PUST 2022–23 Q2a — 5.5 Marks] State and prove Rolle’s Theorem. (2) [PUST 2021–22 Q1b — 4.5 Marks] State and prove Lagrange’s Mean Value Theorem. (3) [PUST 2021–22 Q1c & 2020–21 Q2b] Verify Rolle’s Theorem for f(x) = x(x − 3)² on [0, 3] and Lagrange’s MVT for f(x) = x(x − 1)(x − 2) on [0, 1/2]. (4) [PUST 2021–22 Q4a & 2022–23 Q4a] Expand ln(1 + x) and y = e^x sec x (up to x³) by Maclaurin’s theorem.',
        solutionSteps: [
          {
            stepTitle:
              '1. Proofs of Rolle’s Theorem (22–23 Q2a) & Lagrange’s MVT (21–22 Q1b)',
            explanation:
              'Use Fermat’s interior extremum theorem for Rolle’s Theorem, and auxiliary function φ(x) = f(x) + Ax for MVT:',
            equation:
              'Rolle’s Theorem Proof:\n  • Case 1 (M = m): f(x) is constant on [a, b], so f′(c) = 0 for all c ∈ (a, b).\n  • Case 2 (M > m): Since f(a) = f(b), at least one extremum occurs at an interior point c ∈ (a, b),\n    where Fermat’s Theorem gives:\n  ∴  f′(c) = 0   for some c ∈ (a, b)\n\nLagrange’s MVT Proof:\n  Let  φ(x) = f(x) + Ax  with φ(a) = φ(b)  ⇒  A = −[f(b) − f(a)] / (b − a).\n  Applying Rolle’s Theorem to φ(x) gives φ′(c) = f′(c) + A = 0:\n  ∴  f′(c) = [f(b) − f(a)] / (b − a)   for some c ∈ (a, b)',
          },
          {
            stepTitle: '2. PUST 2021–22 Q1(c) & PUST 2020–21 Q2(b) Verifications',
            explanation: 'Solve for c strictly inside the open interval (a, b):',
            equation:
              '(a) PUST 2021–22 Q1(c):  f(x) = x(x − 3)² = x³ − 6x² + 9x  on [0, 3]\n    f(0) = f(3) = 0\n    f′(c) = 3(c − 1)(c − 3) = 0\n    ∴  c = 1 ∈ (0, 3)   [Rolle’s Theorem verified]\n\n(b) PUST 2020–21 Q2(b):  f(x) = x(x − 1)(x − 2) = x³ − 3x² + 2x  on [0, 1 / 2]\n    f(0) = 0,   f(1 / 2) = 3 / 8\n    f′(c) = 3c² − 6c + 2 = (3 / 8) / (1 / 2) = 3 / 4\n    ⇒  12c² − 24c + 5 = 0\n    ∴  c = (6 − √21) / 6 ≈ 0.236 ∈ (0, 1 / 2)   [MVT verified]',
          },
          {
            stepTitle:
              '3. PUST 2021–22 Q4(a) & 2022–23 Q4(a): Maclaurin Series of ln(1 + x) and e^x sec x',
            explanation: 'Evaluate derivatives at x = 0 and substitute into Maclaurin’s series:',
            equation:
              '(a) For f(x) = ln(1 + x):\n    f(0) = 0,  f′(0) = 1,  f′′(0) = −1,  f′′′(0) = 2!,  f^{(iv)}(0) = −3!\n    ∴  ln(1 + x) = x − x² / 2 + x³ / 3 − x⁴ / 4 + ··· + (−1)^{n−1} (xⁿ / n) + ···\n\n(b) For y = e^x sec x:\n    y(0) = 1\n    y₁ = y(1 + tan x)  ⇒  y₁(0) = 1\n    y₂ = y₁(1 + tan x) + y sec²x  ⇒  y₂(0) = 2\n    y₃ = y₂(1 + tan x) + 2y₁ sec²x + 2y sec²x tan x  ⇒  y₃(0) = 4\n    ∴  e^x sec x = 1 + x + x² + (2 / 3)x³ + ···',
          },
        ],
      },
      {
        id: 'math-m3-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q2(c), Q4(b), 2021–22 Q2(c), Q3(c), Q4(b), 2020–21 Q2(c), Q4(a)',
        title:
          'PUST Past Exam Questions on L’Hôpital’s Rule (Indeterminate Forms) & Maxima/Minima/Inflection Points',
        summaryText:
          'Complete solutions to all PUST L’Hôpital limits (0/0, ∞ − ∞, 1^∞, 0⁰) and polynomial relative extrema & concavity problems.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4–5 Marks',
        equations: [
          {
            label: 'L’Hôpital’s Rule & Exponential Indeterminate Forms (0⁰, 1^∞, ∞⁰)',
            formula:
              'lim_{x→a} [f(x)/g(x)] = lim_{x→a} [f′(x)/g′(x)]   |   y = [f(x)]^{g(x)} ⇒ lim y = e^{lim [g(x) ln f(x)]}',
          },
          {
            label: 'First & Second Derivative Tests at Critical Point f′(c) = 0',
            formula:
              'f′′(c) < 0 ⇒ Local Max  |  f′′(c) > 0 ⇒ Local Min  |  f′′(c) = 0 ⇒ Use 1st-Derivative Sign Chart',
          },
        ],
        problemStatement:
          '(1) [PUST 2020–21 Q2c] Evaluate (i) lim_{x→0} (1/x − 1/sin x) and (ii) lim_{x→0} (1 + sin x)^{1/x}. (2) [PUST 2022–23 Q4b & 2021–22 Q4b] Evaluate (i) lim_{x→0} (e^x + e^{-x} − 2 cos x)/(x sin x), (ii) lim_{x→0} (cos x)^{cot²x}, (iii) lim_{x→0} (tan x − x)/(x² tan x), and (iv) lim_{x→π/2} (sin x)^{tan x}. (3) [PUST 2021–22 Q2c, 2022–23 Q2c, 2021–22 Q3c, 2020–21 Q4a] Find relative extrema, inflection points, and intervals of monotonicity/concavity for f(x) = 3x⁵ − 5x³ + 2 and f(x) = x³ − 6x² + 9x + 1.',
        solutionSteps: [
          {
            stepTitle: '1. PUST 2020–21 Q2(c) & 2022–23 / 2021–22 Q4(b): L’Hôpital Limits',
            explanation: 'Vertical step-by-step evaluation of all past-paper indeterminate limits:',
            equation:
              '2020–21 Q2c(i):\n  L = lim_{x→0} (1 / x − 1 / sin x)\n    = lim_{x→0} (sin x − x) / (x sin x)\n    = lim_{x→0} (cos x − 1) / (sin x + x cos x)\n    = lim_{x→0} (−sin x) / (2 cos x − x sin x)\n  ∴  L = 0\n\n2020–21 Q2c(ii):  y = (1 + sin x)^{1/x}\n  lim_{x→0} ln y = lim_{x→0} ln(1 + sin x) / x\n                 = lim_{x→0} [cos x / (1 + sin x)] / 1\n                 = 1\n  ∴  lim_{x→0} (1 + sin x)^{1/x} = e\n\n2022–23 & 2021–22 Q4b(i)–(iv):\n  (i)   lim_{x→0} (e^x + e^{-x} − 2 cos x) / (x sin x)\n        = lim_{x→0} (e^x + e^{-x} + 2 cos x) / (2 cos x − x sin x)\n        ∴  L = 2\n  (ii)  y = (cos x)^{cot²x}  ⇒  lim_{x→0} ln y = lim_{x→0} (−tan x) / (2 tan x sec²x) = −1 / 2\n        ∴  lim_{x→0} (cos x)^{cot²x} = 1 / √e\n  (iii) lim_{x→0} (tan x − x) / (x² tan x) = lim_{x→0} (sec²x − 1) / (3x²)\n        ∴  L = 1 / 3\n  (iv)  y = (sin x)^{tan x}  ⇒  lim_{x→π/2} ln y = lim_{x→π/2} cot x / (−csc²x) = 0\n        ∴  lim_{x→π/2} (sin x)^{tan x} = 1',
          },
          {
            stepTitle:
              '2. PUST 2021–22 Q2(c), 2022–23 Q2(c), 2021–22 Q3(c) & 2020–21 Q4(a): Extrema & Concavity',
            explanation: 'Find critical points f′(x) = 0 and inflection points f′′(x) = 0:',
            equation:
              '(a) PUST 2021–22 Q2(c):  f(x) = 3x⁵ − 5x³ + 2\n    f′(x)  = 15x²(x + 1)(x − 1) = 0  ⇒  x = −1, 0, 1\n    f′′(x) = 30x(2x² − 1) = 0        ⇒  Inflection x = −1 / √2,  0,  +1 / √2\n    ∴  Local Max f(−1) = 4,   Local Min f(1) = 0,   Inflection points: x = 0, ±1 / √2\n\n(b) PUST 2022–23 Q2(c):  f(x) = x³ − 6x² + 9x + 1\n    f′(x) = 3(x − 1)(x − 3) = 0,   f′′(x) = 6x − 12\n    ∴  Local Max f(1) = 5,   Local Min f(3) = 1,   Inflection point: (2, 3)\n\n(c) PUST 2021–22 Q3(c) & 2020–21 Q4(a):\n    • For f(x) = 2x³ − 21x² + 36x − 20:\n      ∴  Local Max f(1) = −3,   Local Min f(6) = −128\n    • For f(x) = x⁴ − 4x³ + 10:\n      ∴  Local Min f(3) = −17,   Inflection points: (0, 10) and (2, −6)',
          },
        ],
      },
      {
        id: 'math-m3-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Howard Anton Sec. 3.6 (Ex. 66) & Sec. 9.8–9.9 (Ex. 45)',
        title:
          'Howard Anton Sec. 3.6 & Sec. 9.8: Unknown L’Hôpital Parameters & Power Series Interval of Convergence',
        summaryText:
          'Use the Ratio Test lim_{k→∞} |u_{k+1}/u_k| < 1 for the radius of convergence R, and test both endpoints x = x₀ ± R separately.',
        equations: [
          {
            label: 'Ratio Test for Radius of Convergence R of ∑ c_k (x − a)^k',
            formula:
              'lim_{k→∞} |u_{k+1} / u_k| = |x − a| / R < 1   ⇒   Radius R,  check endpoints x = a − R and x = a + R',
          },
        ],
        problemStatement:
          '(1) [Anton 3.6 Ex. 66] Find the values of k and l given that lim_{x→0} (k + cos lx) / x² = −4. (2) [Anton 9.8 Ex. 45] Find the radius and interval of convergence of the power series ∑_{k=1}^∞ (−1)^{k+1} (x + 1)^k / k. (3) [Anton 9.7] Expand f(x) = cos x in a Taylor series about a = π / 3.',
        solutionSteps: [
          {
            stepTitle: '1. Anton 3.6 Ex. 66: Unknown Parameters k and l',
            explanation: 'Enforce numerator → 0 at x = 0 for finite limit existence:',
            equation:
              'Given,  lim_{x→0} (k + cos lx) / x² = −4\nSince denominator x² → 0, numerator must also approach 0:\n  k + cos 0 = 0\n  ⇒  k = −1\nNow apply L’Hôpital’s Rule:\n  lim_{x→0} (−1 + cos lx) / x² = lim_{x→0} (−l sin lx) / (2x)\n                               = −l² / 2 = −4\n  ⇒  l² = 8\n  ∴  k = −1,   l = ±2√2',
          },
          {
            stepTitle: '2. Anton 9.8 Ex. 45: Radius & Interval of Convergence',
            explanation: 'Apply the Ratio Test and check both endpoints x = −2 and x = 0:',
            equation:
              'u_k = (−1)^{k+1} (x + 1)^k / k\nlim_{k→∞} |u_{k+1} / u_k| = lim_{k→∞} [k / (k + 1)] · |x + 1|\n                          = |x + 1| < 1\n⇒  Radius of convergence R = 1,  and  −2 < x < 0\nEndpoint checks:\n  • At x = −2:  ∑ (−1)^{2k+1} / k = −∑ 1 / k   (Diverges, harmonic series)\n  • At x = 0:   ∑ (−1)^{k+1} / k              (Converges, alternating harmonic series)\n  ∴  Radius R = 1,   Interval of Convergence I = (−2, 0]',
          },
          {
            stepTitle: '3. Taylor Series of f(x) = cos x about a = π / 3',
            explanation: 'Evaluate derivatives of cos x at a = π / 3:',
            equation:
              'f(π / 3) = 1 / 2,   f′(π / 3) = −√3 / 2,   f′′(π / 3) = −1 / 2,   f′′′(π / 3) = +√3 / 2\n∴  cos x = 1 / 2 − (√3 / 2)(x − π / 3) − (1 / 4)(x − π / 3)² + (√3 / 12)(x − π / 3)³ + ···',
          },
        ],
      },
      {
        id: 'math-m3-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · J. Edwards (Differential Calculus, Ch. XII) & G. B. Thomas & R. L. Finney',
        title:
          'Syllabus Book Curve Tracing: Complete 4-Step Working Rule & Classical Algebraic Curves',
        summaryText:
          'Systematic curve tracing using (1) Symmetry, (2) Origin & Tangents at Origin, (3) Intercepts & Asymptotes, and (4) Regions of Exclusion.',
        equations: [
          {
            label: 'Four-Step Curve Tracing Working Rule (J. Edwards)',
            formula:
              '1. Symmetry (x/y/origin/y=x)  →  2. Origin & Tangents  →  3. Intercepts & Asymptotes  →  4. Excluded Regions',
          },
        ],
        problemStatement:
          'Trace the following classical algebraic curves completely: (1) Cissoid of Diocles: y²(2a − x) = x³ (a > 0), and (2) Looping Cubic Curve: a y² = x²(a − x) (a > 0).',
        solutionSteps: [
          {
            stepTitle: '1. Cissoid of Diocles: y²(2a − x) = x³ (a > 0)',
            explanation: 'Apply the 4-step curve tracing procedure:',
            equation:
              '1. Symmetry: Only even power of y (y²) appears  ⇒  Symmetric about the x-axis.\n2. Origin & Tangent: Passes through (0, 0). Lowest degree terms: 2ay² = 0  ⇒  y = 0, 0\n   ⇒  Origin (0, 0) is a cusp with the x-axis as double tangent.\n3. Asymptote: Coefficient of y² is 2a − x = 0  ⇒  x = 2a is the vertical asymptote.\n4. Excluded Region: y² = x³ / (2a − x) < 0 when x < 0 or x > 2a.\n∴  Symmetric about x-axis, cusp at (0, 0), asymptote x = 2a, exists on 0 ≤ x < 2a',
          },
          {
            stepTitle: '2. Nodal Cubic Curve: a y² = x²(a − x) (a > 0)',
            explanation: 'Identify the node at (0, 0) and loop between x = 0 and x = a:',
            equation:
              '1. Symmetry: Even power of y (y²)  ⇒  Symmetric about the x-axis.\n2. Origin & Tangents: Lowest degree terms a(y² − x²) = 0  ⇒  y = ±x\n   ⇒  Origin (0, 0) is a Node with two distinct tangents y = +x and y = −x.\n3. Intercepts: Meets x-axis at (0, 0) and (a, 0) with vertical tangent at (a, 0).\n4. Region: y² = x²(a − x) / a < 0 for x > a (no curve for x > a).\n∴  Closed loop between x = 0 and x = a, node at (0, 0) with tangents y = ±x',
          },
        ],
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
    estimatedMinutes: 75,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m4-b1',
        type: 'theory',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Units 10–13 (Tangents, Asymptotes, Curvature, Euler’s Theorem & Jacobian Formulas)',
        title:
          'Core Formulas & Proofs: Tangents, Oblique Asymptotes φ_n(m) = 0, Curvature ρ & Euler’s Theorem',
        summaryText:
          'Complete reference formulas for tangent/normal lines, oblique asymptotes, Cartesian/Parametric/Polar/Newton curvature ρ, and 1st & 2nd order Euler’s Theorem.',
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
            label: 'Radius of Curvature (Cartesian, Parametric, Polar & Newton’s Origin Formula)',
            formula:
              'Cartesian: ρ = (1 + y₁²)^{3/2} / |y₂|  |  Polar: ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|  |  Origin: ρ = lim |x²/(2y)|',
          },
          {
            label: 'Euler’s Theorem (1st & 2nd Order) & Jacobian / Hessian Determinants',
            formula:
              'x u_x + y u_y = n u  |  x² u_{xx} + 2xy u_{xy} + y² u_{yy} = n(n − 1)u  |  J = ∂(u,v)/∂(x,y)  |  H = f_{xx}f_{yy} − f_{xy}²',
          },
        ],
        problemStatement:
          '[Class Lecture & PUST 2020–21 Q3a] State and prove Euler’s Theorem on homogeneous functions of degree n in two variables x and y for both (i) First-Order Partial Derivatives and (ii) Second-Order Partial Derivatives.',
        solutionSteps: [
          {
            stepTitle: 'Part (i) — First-Order Proof of Euler’s Theorem',
            explanation:
              'Write u = xⁿ φ(y/x) and differentiate partially with respect to x and y:',
            equation:
              'Since u(x, y) is homogeneous of degree n, let:\n  u = xⁿ φ(y / x)\nDifferentiating partially w.r.t. x and y:\n  ∂u / ∂x = n x^{n−1} φ(y / x) − x^{n−2} y φ′(y / x)\n  ∂u / ∂y = x^{n−1} φ′(y / x)\nMultiplying by x and y respectively and adding:\n  x(∂u / ∂x) + y(∂u / ∂y) = n xⁿ φ(y / x)\n  ∴  x(∂u / ∂x) + y(∂u / ∂y) = n u',
          },
          {
            stepTitle: 'Part (ii) — Second-Order Extension Proof',
            explanation:
              'Differentiate the first-order Euler identity partially with respect to x and y:',
            equation:
              'Differentiating x u_x + y u_y = n u w.r.t. x and y:\n  x u_{xx} + y u_{xy} = (n − 1) u_x   --- (1)\n  x u_{xy} + y u_{yy} = (n − 1) u_y   --- (2)\nMultiplying (1) by x and (2) by y and adding:\n  x² u_{xx} + 2xy u_{xy} + y² u_{yy} = (n − 1)(x u_x + y u_y)\n  ∴  x²(∂²u / ∂x²) + 2xy(∂²u / ∂x∂y) + y²(∂²u / ∂y²) = n(n − 1)u',
          },
        ],
      },
      {
        id: 'math-m4-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q3(b,c) [9 Marks], 2021–22 Q3(b) [5 Marks], 2020–21 Q3(c), Q4(b,c) [13.5 Marks]',
        title:
          'PUST Past Exam Questions on Tangents, Normals, Oblique Asymptotes & Radius of Curvature (ρ)',
        summaryText:
          'Complete vertical exam solutions for implicit tangent/normal, degree-3 asymptotes, and Cartesian/Astroid/Newton radius of curvature.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4–5 Marks',
        problemStatement:
          '(1) [PUST 2020–21 Q4c] Find the tangent and normal to x² + xy + y² = 7 at (1, 2). (2) [PUST 2022–23 Q3b & 2020–21 Q3c] Find the asymptotes of x³ + y³ − 3axy = 0 and y³ − x²y − 2xy² + 2x³ − 7xy + 3y² + 2x² + 2x + 2y + 1 = 0. (3) [PUST 2022–23 Q3c, 2020–21 Q4b & 2021–22 Q3b] Find ρ at (a/4, a/4) on √x + √y = √a; show ρ = 3(axy)^{1/3} on x^{2/3} + y^{2/3} = a^{2/3}; and find ρ at (a, 0) on xy² = a³ − x³.',
        solutionSteps: [
          {
            stepTitle: '1. PUST 2020–21 Q4(c): Tangent & Normal to x² + xy + y² = 7 at (1, 2)',
            explanation: 'Differentiate implicitly with respect to x:',
            equation:
              '2x + (x dy / dx + y) + 2y dy / dx = 0\n  ⇒  dy / dx = −(2x + y) / (x + 2y)\n  At (1, 2):  m = −[2(1) + 2] / [1 + 2(2)]\n                = −4 / 5\n  • Tangent:  y − 2 = (−4 / 5)(x − 1)\n  • Normal:   y − 2 = (+5 / 4)(x − 1)\n  ∴  Tangent: 4x + 5y − 14 = 0,   Normal: 5x − 4y + 3 = 0',
          },
          {
            stepTitle:
              '2. PUST 2022–23 Q3(b) & 2020–21 Q3(c): Oblique Asymptotes of Cubic Curves',
            explanation: 'Put x = 1, y = m in degree-3 and degree-2 homogeneous parts:',
            equation:
              '(a) PUST 2022–23 Q3(b):  x³ + y³ − 3axy = 0\n    φ₃(m) = 1 + m³ = 0  ⇒  m = −1\n    c = −φ₂(m) / φ′₃(m) = −(−3am) / (3m²) = a / m = −a\n    ∴  Asymptote:  x + y + a = 0\n\n(b) PUST 2020–21 Q3(c):  y³ − x²y − 2xy² + 2x³ − 7xy + 3y² + 2x² + 2x + 2y + 1 = 0\n    φ₃(m) = m³ − 2m² − m + 2 = (m − 1)(m + 1)(m − 2) = 0  ⇒  m = 1, −1, 2\n    c = −(3m² − 7m + 2) / (3m² − 4m − 1)  ⇒  c = −1, −2, 0\n    ∴  Asymptotes:  x − y − 1 = 0,   x + y + 2 = 0,   2x − y = 0',
          },
          {
            stepTitle:
              '3. PUST 2022–23 Q3(c), 2020–21 Q4(b) & 2021–22 Q3(b): Radius of Curvature ρ',
            explanation: 'Vertical step-by-step curvature derivations:',
            equation:
              '(a) PUST 2022–23 Q3(c):  √x + √y = √a  at (a / 4, a / 4)\n    y₁ = −√y / √x = −1,   y₂ = √a / [2(a / 4)^{3/2}] = 4 / a\n    ρ = (1 + 1)^{3/2} / (4 / a)\n    ∴  ρ = a / √2\n\n(b) PUST 2020–21 Q4(b):  x^{2/3} + y^{2/3} = a^{2/3}\n    y₁ = −(y / x)^{1/3},   1 + y₁² = a^{2/3} / x^{2/3},   y₂ = a^{2/3} / (3 x^{4/3} y^{1/3})\n    ∴  ρ = 3(axy)^{1/3}\n\n(c) PUST 2021–22 Q3(b):  xy² = a³ − x³  at (a, 0)\n    Shift origin to (a, 0) via x = a + X, y = Y:\n    (a + X)Y² = −3a²X − 3aX² − X³   [Tangent at new origin is X = 0]\n    ρ = lim_{Y→0} |Y² / (2X)|\n    ∴  ρ = 3a / 2',
          },
        ],
      },
      {
        id: 'math-m4-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 Q3(a) [5 Marks], 2021–22 Q3(a) [4.5 Marks], Q4(c) [4.5 Marks], 2020–21 Q3(b) [4.5 Marks]',
        title:
          'PUST Past Exam Questions on Euler’s Homogeneous Theorem & Jacobian Chain Rule',
        summaryText:
          'For composite homogeneous functions z = trig(u) of degree n, apply x z_x + y z_y = n z and simplify.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '4.5–5 Marks',
        problemStatement:
          '(1) [PUST 2021–22 Q3a] If u = sin⁻¹[(x² + y²)/(x + y)], show that x ∂u/∂x + y ∂u/∂y = tan u. (2) [PUST 2022–23 Q3a] If u = tan⁻¹[(x³ + y³)/(x − y)], prove that x ∂u/∂x + y ∂u/∂y = sin 2u. (3) [PUST 2020–21 Q3b] If u = cos⁻¹[(x + y)/(√x + √y)], show that x ∂u/∂x + y ∂u/∂y + (1/2) cot u = 0. (4) [PUST 2021–22 Q4c] If u = x² − 2y² and v = 2x² − y², where x = r cos θ, y = r sin θ, show that ∂(u, v)/∂(r, θ) = 6r³ sin 2θ.',
        solutionSteps: [
          {
            stepTitle:
              '1. PUST 2021–22 Q3(a), 2022–23 Q3(a) & 2020–21 Q3(b): Euler’s Theorem Problems',
            explanation:
              'Rewrite as z = trig(u) so z is homogeneous of degree n, then apply x z_x + y z_y = n z:',
            equation:
              '(a) PUST 2021–22 Q3(a):  z = sin u = (x² + y²) / (x + y)   [Homogeneous of degree n = 1]\n    x ∂z / ∂x + y ∂z / ∂y = 1 · z\n    ⇒  cos u (x ∂u / ∂x + y ∂u / ∂y) = sin u\n    ∴  x(∂u / ∂x) + y(∂u / ∂y) = tan u\n\n(b) PUST 2022–23 Q3(a):  z = tan u = (x³ + y³) / (x − y)   [Homogeneous of degree n = 2]\n    x ∂z / ∂x + y ∂z / ∂y = 2z\n    ⇒  sec²u (x ∂u / ∂x + y ∂u / ∂y) = 2 tan u\n    ∴  x(∂u / ∂x) + y(∂u / ∂y) = sin 2u\n\n(c) PUST 2020–21 Q3(b):  z = cos u = (x + y) / (√x + √y)   [Homogeneous of degree n = 1 / 2]\n    −sin u (x ∂u / ∂x + y ∂u / ∂y) = (1 / 2) cos u\n    ∴  x(∂u / ∂x) + y(∂u / ∂y) + (1 / 2) cot u = 0',
          },
          {
            stepTitle: '2. PUST 2021–22 Q4(c): Jacobian Chain Rule Derivation',
            explanation:
              'Compute ∂(u, v)/∂(x, y) and polar Jacobian ∂(x, y)/∂(r, θ) = r:',
            equation:
              '∂(u, v) / ∂(x, y) = (2x)(−2y) − (−4y)(4x)\n                  = −4xy + 16xy\n                  = 12xy\n∂(x, y) / ∂(r, θ) = r cos²θ + r sin²θ\n                  = r\nBy the Jacobian Chain Rule:\n  ∂(u, v) / ∂(r, θ) = [∂(u, v) / ∂(x, y)] · [∂(x, y) / ∂(r, θ)]\n                    = (12 r cos θ · r sin θ) · r\n  ∴  ∂(u, v) / ∂(r, θ) = 6r³ sin 2θ',
          },
        ],
      },
      {
        id: 'math-m4-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Howard Anton Ch. 13 (Multivariable Limits, Chain Rule & Hessian Extrema)',
        title:
          'Howard Anton Ch. 13: Two-Variable Limit Path Test, Total Derivative & Hessian Extrema Classification',
        summaryText:
          'If f(x, y) approaches different values along different paths y = mx as (x, y) → (0, 0), the two-variable limit does not exist.',
        equations: [
          {
            label: 'Hessian Determinant & 2D Extrema Classification at f_x = f_y = 0',
            formula:
              'H = f_{xx}f_{yy} − (f_{xy})²  |  H > 0, f_{xx} < 0 ⇒ Max  |  H > 0, f_{xx} > 0 ⇒ Min  |  H < 0 ⇒ Saddle',
          },
        ],
        problemStatement:
          '(1) [Anton 13.2] Show that lim_{(x,y)→(0,0)} (xy) / (x² + y²) does not exist. (2) [Anton 13.8] Find and classify the stationary points of f(x, y) = x³ + y³ − 3axy (a > 0) using the Hessian determinant.',
        solutionSteps: [
          {
            stepTitle: '1. Two-Variable Path Test: lim_{(x,y)→(0,0)} (xy) / (x² + y²)',
            explanation: 'Approach (0, 0) along the family of straight lines y = mx:',
            equation:
              'Along path y = mx:\n  lim_{x→0} (x · mx) / (x² + m²x²) = lim_{x→0} m / (1 + m²)\n                                   = m / (1 + m²)\n  • For m = 0 (along x-axis):  Limit = 0\n  • For m = 1 (along y = x):   Limit = 1 / 2\n  ∴  Since the limit depends on the slope m, lim_{(x,y)→(0,0)} (xy) / (x² + y²) does not exist.',
          },
          {
            stepTitle:
              '2. Worked Hessian Example: Extrema of f(x, y) = x³ + y³ − 3axy (a > 0)',
            explanation:
              'Solve f_x = 0, f_y = 0 for stationary points and evaluate H(x, y) = f_{xx}f_{yy} − f_{xy}²:',
            equation:
              'f_x = 3x² − 3ay = 0  ⇒  y = x² / a\nf_y = 3y² − 3ax = 0  ⇒  x(x³ − a³) = 0  ⇒  Stationary points: (0, 0) and (a, a)\n\nSecond-order partials:  f_{xx} = 6x,   f_{yy} = 6y,   f_{xy} = −3a\nHessian:  H(x, y) = 36xy − 9a²\n  • At (0, 0):  H(0, 0) = −9a² < 0  ⇒  Saddle Point\n  • At (a, a):  H(a, a) = 27a² > 0 and f_{xx}(a, a) = 6a > 0  ⇒  Local Minimum\n  ∴  (0, 0) is a Saddle Point;   (a, a) gives Local Minimum f_min = −a³',
          },
        ],
      },
      {
        id: 'math-m4-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · J. Edwards (Differential Calculus) & M. R. Spiegel (Advanced Calculus)',
        title:
          'Syllabus Book Problems: Polar Radius of Curvature of Cardioid & Inverse Jacobian Identity J · J′ = 1',
        summaryText:
          'For polar curve r = f(θ), radius of curvature is ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|.',
        equations: [
          {
            label: 'Inverse Jacobian Product Identity & Implicit Derivative Formula',
            formula:
              '[∂(x, y) / ∂(r, θ)] · [∂(r, θ) / ∂(x, y)] = 1   |   F(x, y) = 0  ⇒  dy / dx = − (∂F / ∂x) / (∂F / ∂y)',
          },
        ],
        problemStatement:
          '(1) [J. Edwards] Find the radius of curvature at any point (r, θ) on the cardioid r = a(1 + cos θ). (2) [M. R. Spiegel] Verify that J · J′ = 1 for the transformation x = r cos θ, y = r sin θ.',
        solutionSteps: [
          {
            stepTitle: '1. Polar Radius of Curvature of Cardioid r = a(1 + cos θ)',
            explanation: 'Compute r₁ = dr/dθ and r₂ = d²r/dθ² and substitute into the polar ρ formula:',
            equation:
              'Given,  r = a(1 + cos θ)\n  r₁ = −a sin θ,   r₂ = −a cos θ\n  r² + r₁² = a²(1 + cos θ)² + a² sin²θ\n           = 2a²(1 + cos θ)\n           = 4a² cos²(θ / 2)\n  r² + 2r₁² − r r₂ = 3a²(1 + cos θ)\n                   = 6a² cos²(θ / 2)\n\nSubstituting into ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|:\n  ρ = [8a³ cos³(θ / 2)] / [6a² cos²(θ / 2)]\n  ∴  ρ = (4a / 3) cos(θ / 2) = (2 / 3)√(2ar)',
          },
          {
            stepTitle: '2. Verification of Inverse Jacobian Identity J · J′ = 1',
            explanation: 'Compute J = ∂(x,y)/∂(r,θ) and J′ = ∂(r,θ)/∂(x,y) from r² = x² + y², θ = tan⁻¹(y/x):',
            equation:
              'J = ∂(x, y) / ∂(r, θ) = r cos²θ + r sin²θ = r\nFrom r = √(x² + y²) and θ = tan⁻¹(y / x):\n  r_x = x / r = cos θ,     r_y = y / r = sin θ\n  θ_x = −y / r² = −(sin θ) / r,   θ_y = x / r² = (cos θ) / r\n  J′ = ∂(r, θ) / ∂(x, y) = (cos²θ) / r + (sin²θ) / r = 1 / r\n  ∴  J · J′ = r · (1 / r) = 1',
          },
        ],
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
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m5-b1',
        type: 'definition',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Units 14–15 (2D Coordinate Systems, Axis Transformations & Pair of Straight Lines)',
        title:
          '2D Coordinate Systems, Translation & Rotation Formulas, Orthogonal Invariants & Pair of Lines Theory',
        summaryText:
          'Translation to center (α, β) removes first-degree terms; rotation by tan 2θ = 2h/(a − b) removes the xy-term. S = 0 represents a pair of lines iff Δ = abc + 2fgh − af² − bg² − ch² = 0.',
        equations: [
          {
            label: 'Cartesian ↔ Polar Conversion & Polar Distance Formula',
            formula:
              'x = r cos θ, y = r sin θ, r² = x² + y²  |  d = √[r₁² + r₂² − 2r₁r₂ cos(θ₁ − θ₂)]',
          },
          {
            label: 'Translation to (α, β) & Rotation Invariants',
            formula:
              'ax + hy + g = 0, hx + by + f = 0  |  c′ = gα + fβ + c  |  λ² − (a + b)λ + (ab − h²) = 0',
          },
          {
            label: 'Angle θ & Bisectors of Homogeneous Pair ax² + 2hxy + by² = 0',
            formula:
              'tan θ = 2√(h² − ab) / |a + b|  (⊥ ⇔ a + b = 0; ∥ ⇔ h² = ab)  |  Bisectors: (x² − y²)/(a − b) = xy/h',
          },
          {
            label: 'Condition for General 2nd-Degree Equation to Represent Pair of Lines',
            formula:
              'Δ = abc + 2fgh − af² − bg² − ch² = 0   |   Intersection: ((hf−bg)/(ab−h²), (gh−af)/(ab−h²))',
          },
        ],
        table: {
          caption: 'Table 5.1 — Summary of 2D Coordinate Transformations & Line Pair Conditions',
          headers: ['Operation / Concept', 'Governing Formula', 'Geometric Purpose'],
          rows: [
            [
              '1. Translation of Origin to (α, β)',
              'x = X + α,  y = Y + β',
              'Eliminates linear terms 2gx and 2fy when ½∂F/∂x = ½∂F/∂y = 0.',
            ],
            [
              '2. Rotation of Axes by Angle θ',
              'x = x′cos θ − y′sin θ,  y = x′sin θ + y′cos θ',
              'Eliminates cross-product term 2hxy when tan 2θ = 2h / (a − b).',
            ],
            [
              '3. Homogeneous Pair ax² + 2hxy + by² = 0',
              'm₁ + m₂ = −2h / b,  m₁m₂ = a / b',
              'Pair of straight lines passing through the origin (0, 0).',
            ],
            [
              '4. Homogenization with lx + my + n = 0',
              'Replace degree-1 & degree-0 terms using 1 = (lx + my) / (−n)',
              'Gives the pair of lines joining (0, 0) to the curve-line intersections.',
            ],
          ],
        },
      },
      {
        id: 'math-m5-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23 & 2020–21 Semester Final Exams [7 Marks]',
        title:
          'PUST Past Exam Questions on Transformation of Coordinates (Removing First-Degree & XY Terms)',
        summaryText:
          'Complete vertical exam solutions for removing linear terms via center translation and removing the xy-term via orthogonal invariants.',
        examYears: ['2022–23', '2020–21'],
        marks: '7 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 7 Marks] Transform the equation 17x² + 18xy − 7y² − 16x − 32y − 18 = 0 to one in which there are no first-degree terms and no xy-term. (2) [PUST Past Exam — 5 Marks] Transform x² + 4xy + y² − 2x + 2y − 6 = 0 to standard form without linear or xy-terms.',
        solutionSteps: [
          {
            stepTitle:
              '1. PUST Exam Problem: 17x² + 18xy − 7y² − 16x − 32y − 18 = 0',
            explanation:
              'Compare with ax² + 2hxy + by² + 2gx + 2fy + c = 0: a = 17, h = 9, b = −7, g = −8, f = −16, c = −18:',
            equation:
              'Step 1 (Translation of Origin to (α, β) to Remove First-Degree Terms):\n  17α + 9β − 8 = 0\n  9α − 7β − 16 = 0\n  ⇒  α = 1,   β = −1\n  New constant term:\n    c′ = gα + fβ + c\n       = (−8)(1) + (−16)(−1) − 18\n       = −10\n  Translated equation:  17X² + 18XY − 7Y² − 10 = 0\n\nStep 2 (Rotation of Axes to Remove the XY-Term):\n  a′ + b′ = a + b = 17 − 7 = 10\n  a′b′ = ab − h² = (17)(−7) − 9² = −200\n  Characteristic quadratic:\n    λ² − 10λ − 200 = 0\n    ⇒  (λ − 20)(λ + 10) = 0\n    ⇒  a′ = 20,   b′ = −10\n  Substituting into a′x′² + b′y′² + c′ = 0:\n    20x′² − 10y′² − 10 = 0\n  ∴  2x′² − y′² = 1',
          },
          {
            stepTitle: '2. PUST Exam Problem: x² + 4xy + y² − 2x + 2y − 6 = 0',
            explanation: 'Here a = 1, h = 2, b = 1, g = −1, f = 1, c = −6:',
            equation:
              'Center equations:\n  α + 2β − 1 = 0   and   2α + β + 1 = 0\n  ⇒  α = −1,   β = 1\nNew constant:\n  c′ = gα + fβ + c = (−1)(−1) + (1)(1) − 6 = −4\nCharacteristic equation:\n  λ² − 2λ − 3 = 0\n  ⇒  λ = 3, −1\n  ∴  3x′² − y′² = 4',
          },
        ],
      },
      {
        id: 'math-m5-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]',
        title:
          'PUST Past Exam Questions on General Pair of Straight Lines (Δ = 0) & Homogenization',
        summaryText:
          'Verify Δ = 0, factor into separate linear equations, find intersection and angle θ, and homogenize curve-line intersections.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Prove that 2x² + 7xy + 3y² + 8x + 14y + 8 = 0 represents a pair of straight lines. Find their separate equations, point of intersection, and angle between them. (2) [PUST Past Exam — 5 Marks] Show that the straight lines joining the origin to the points of intersection of the circle x² + y² = a² and the line lx + my = 1 are at right angles if a²(l² + m²) = 2.',
        solutionSteps: [
          {
            stepTitle:
              '1. General Pair of Straight Lines: 2x² + 7xy + 3y² + 8x + 14y + 8 = 0',
            explanation: 'Identify a = 2, h = 7/2, b = 3, g = 4, f = 7, c = 8 and verify Δ = 0:',
            equation:
              'Step 1 (Testing Δ = 0):\n  Δ = abc + 2fgh − af² − bg² − ch²\n    = 48 + 196 − 98 − 48 − 98\n    = 0\n\nStep 2 (Separate Equations & Point of Intersection):\n  2x² + 7xy + 3y² + 8x + 14y + 8 ≡ (2x + y + 4)(x + 3y + 2) = 0\n  Solving 2x + y + 4 = 0 and x + 3y + 2 = 0 gives (−2, 0).\n  ∴  Lines: 2x + y + 4 = 0 and x + 3y + 2 = 0;   Intersection: (−2, 0)\n\nStep 3 (Angle θ Between the Lines):\n  tan θ = 2√(h² − ab) / |a + b|\n        = [2 · (5 / 2)] / (2 + 3)\n        = 1\n  ∴  θ = 45°',
          },
          {
            stepTitle:
              '2. Homogenization Proof: Circle x² + y² = a² and Line lx + my = 1',
            explanation: 'Homogenize x² + y² = a²(1)² using lx + my = 1 and enforce a + b = 0:',
            equation:
              'Homogenizing x² + y² = a² with lx + my = 1:\n  x² + y² = a²(lx + my)²\n  ⇒  (1 − a²l²)x² − 2a²lm xy + (1 − a²m²)y² = 0\nFor perpendicular lines through the origin, (coeff. of x²) + (coeff. of y²) = 0:\n  (1 − a²l²) + (1 − a²m²) = 0\n  ∴  a²(l² + m²) = 2',
          },
        ],
      },
      {
        id: 'math-m5-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Rahman & Bhattacharjee (Co-ordinate Geometry, Ch. 2)',
        title:
          'Rahman & Bhattacharjee Worked Problems: Angle Bisectors & Perpendicular Line Pairs',
        summaryText:
          'The pair of lines through the origin perpendicular to ax² + 2hxy + by² = 0 is bx² − 2hxy + ay² = 0, and the angle bisectors (x² − y²)/(a − b) = xy/h are always orthogonal.',
        problemStatement:
          '(1) [Rahman & Bhattacharjee] Prove that the bisectors of the angles between the lines ax² + 2hxy + by² = 0 are given by (x² − y²)/(a − b) = xy/h and are always mutually perpendicular. (2) Find the equation of the pair of straight lines through the origin perpendicular to 5x² − 8xy + 3y² = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Equation & Orthogonality of Angle Bisectors',
            explanation: 'Let ax² + 2hxy + by² ≡ b(y − m₁x)(y − m₂x) with m₁ + m₂ = −2h/b, m₁m₂ = a/b:',
            equation:
              'Equating perpendicular distances to y − m₁x = 0 and y − m₂x = 0 gives:\n  h(x² − y²) − (a − b)xy = 0\n  ⇔  (x² − y²) / (a − b) = xy / h\nHere (coeff. of x²) + (coeff. of y²) = h + (−h) = 0.\n∴  Bisectors: (x² − y²) / (a − b) = xy / h   (Always mutually perpendicular)',
          },
          {
            stepTitle: '2. Pair of Lines Through Origin Perpendicular to 5x² − 8xy + 3y² = 0',
            explanation: 'Interchange a and b and reverse the sign of 2h (bx² − 2hxy + ay² = 0):',
            equation:
              'Given pair:  5x² − 8xy + 3y² = 0   (a = 5, 2h = −8, b = 3)\nReplacing (a, 2h, b) by (b, −2h, a):\n  ∴  3x² + 8xy + 5y² = 0',
          },
        ],
      },
      {
        id: 'math-m5-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · E. H. Askwith (Analytic Geometry of Conic Sections, Ch. III)',
        title:
          'Syllabus Book Problems (Askwith): Area of Triangle Formed by ax² + 2hxy + by² = 0 and lx + my + n = 0',
        summaryText:
          'The area of the triangle formed by the pair of lines ax² + 2hxy + by² = 0 and the line lx + my + n = 0 is Δ = n²√(h² − ab) / |am² − 2hlm + bl²|.',
        equations: [
          {
            label: 'Askwith’s Triangle Area & Parallel Line-Pair Distance Formulas',
            formula:
              'Area = n²√(h² − ab) / |am² − 2hlm + bl²|   |   Parallel Distance (h² = ab): d = 2√[(g² − ac) / (a(a + b))]',
          },
        ],
        problemStatement:
          '(1) [E. H. Askwith] Find the area of the triangle formed by the lines x² − 4xy + y² = 0 and the line x + y − 2 = 0. (2) Find the distance between the parallel straight lines 9x² − 24xy + 16y² − 12x + 16y − 12 = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Area of Triangle Formed by x² − 4xy + y² = 0 and x + y − 2 = 0',
            explanation: 'Here a = 1, h = −2, b = 1 and l = 1, m = 1, n = −2:',
            equation:
              '√(h² − ab) = √(4 − 1) = √3\nam² − 2hlm + bl² = 1(1)² − 2(−2)(1)(1) + 1(1)² = 6\nArea = n² √(h² − ab) / |am² − 2hlm + bl²|\n     = (−2)² √3 / 6\n∴  Area = (2√3) / 3 = 2 / √3  sq. units',
          },
          {
            stepTitle:
              '2. Distance Between Parallel Pair 9x² − 24xy + 16y² − 12x + 16y − 12 = 0',
            explanation: 'Factor as a quadratic in (3x − 4y) and apply the parallel line distance formula:',
            equation:
              '(3x − 4y)² − 4(3x − 4y) − 12 = 0\n  ⇒  (3x − 4y − 6)(3x − 4y + 2) = 0\nDistance between 3x − 4y − 6 = 0 and 3x − 4y + 2 = 0:\n  d = |−6 − 2| / √(3² + (−4)²)\n  ∴  d = 8 / 5  units',
          },
        ],
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
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m6-b1',
        type: 'memorize',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Units 16–18 (Conic Sections Classification, Properties & System of Circles)',
        title:
          'Classification of Conics, Standard Properties Table & System of Circles Formulas',
        summaryText:
          'With Δ ≠ 0: ab − h² > 0 ⇒ Ellipse; ab − h² < 0 ⇒ Hyperbola; ab − h² = 0 ⇒ Parabola. Two circles cut orthogonally iff 2g₁g₂ + 2f₁f₂ = c₁ + c₂.',
        equations: [
          {
            label: 'Conic Discriminant Classification (Δ ≠ 0) & Principal Axis Equation',
            formula:
              'ab − h² > 0 ⇒ Ellipse  |  ab − h² < 0 ⇒ Hyperbola  |  ab − h² = 0 ⇒ Parabola  |  Axis: (a − λ_i)(x − α) + h(y − β) = 0',
          },
          {
            label: 'Condition for Orthogonal Circles, Radical Axis & Coaxial Family',
            formula:
              'Orthogonal: 2g₁g₂ + 2f₁f₂ = c₁ + c₂  |  Radical Axis L ≡ S₁ − S₂ = 0  |  Coaxial Family: S₁ + λL = 0',
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
      },
      {
        id: 'math-m6-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [7 Marks]',
        title:
          'PUST Past Exam Questions on Reduction of Central Conics (Hyperbola) & Parabola to Standard Form',
        summaryText:
          'Complete exam-style vertical derivations for reducing general second-degree equations to canonical hyperbola and parabola forms.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '7 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 7 Marks] Reduce 11x² + 24xy + 4y² − 20x − 40y − 5 = 0 to standard form. Identify the conic and find its center, lengths of axes, eccentricity, latus rectum, and equations of the axes. (2) [PUST Past Exam — 7 Marks] Reduce 9x² − 24xy + 16y² − 18x − 101y + 19 = 0 to standard form, and find its vertex, focus, axis, latus rectum, and directrix.',
        solutionSteps: [
          {
            stepTitle:
              '1. Central Conic Reduction: 11x² + 24xy + 4y² − 20x − 40y − 5 = 0',
            explanation:
              'Here a = 11, h = 12, b = 4, g = −10, f = −20, c = −5, so ab − h² = 44 − 144 = −100 < 0 (Hyperbola):',
            equation:
              'Step 1 (Center (α, β) and New Constant c′):\n  11α + 12β − 10 = 0   and   3α + β = 5\n  ⇒  Center (α, β) = (2, −1),   c′ = gα + fβ + c = −5\n\nStep 2 (Characteristic Roots & Standard Form):\n  λ² − 15λ − 100 = 0  ⇒  λ₁ = 20,   λ₂ = −5\n  ⇒  20X² − 5Y² − 5 = 0\n  ∴  X² / (1 / 4) − Y² / 1 = 1   [Hyperbola with A = 1 / 2, B = 1]\n\nStep 3 (Axes, Eccentricity & Latus Rectum):\n  • Eccentricity e = √(1 + B² / A²) = √5;   Latus rectum = 2B² / A = 4\n  ∴  Center: (2, −1),  e = √5,  LR = 4,  Axes: 3x − 4y − 10 = 0 and 4x + 3y − 5 = 0',
          },
          {
            stepTitle:
              '2. Parabola Reduction (ab − h² = 0): 9x² − 24xy + 16y² − 18x − 101y + 19 = 0',
            explanation:
              'Write (3x − 4y + λ)² = (6λ + 18)x + (101 − 8λ)y + (λ² − 19) and enforce orthogonality:',
            equation:
              'For perpendicular lines:\n  3(6λ + 18) − 4(101 − 8λ) = 0\n  ⇒  50λ = 350\n  ⇒  λ = 7\nNormalizing by 5² = 25:\n  [(3x − 4y + 7) / 5]² = 3 · [(4x + 3y + 2) / 5]\n  ∴  Y² = 3X   (Parabola with 4a = 3,  a = 3 / 4)\n  ∴  Vertex: (−29 / 25, 22 / 25),   Focus: (−14 / 25, 43 / 100),   Directrix: 16x + 12y + 23 = 0',
          },
        ],
      },
      {
        id: 'math-m6-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]',
        title:
          'PUST Past Exam Questions on Orthogonal Circles, Radical Axis & Limiting Points of Coaxial Systems',
        summaryText:
          'Solve 2gg_i + 2ff_i = c + c_i for the orthogonal circle, and set radius R = 0 in S₁ + λ(S₁ − S₂) = 0 for limiting points.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the equation of the circle that cuts orthogonally the three circles x² + y² + 2x + 17y + 4 = 0, x² + y² + 7x + 6y + 11 = 0, and x² + y² − x + 22y + 3 = 0. (2) [PUST Past Exam — 5 Marks] Find the radical axis and the limiting points of the coaxial system determined by S₁ ≡ x² + y² + 2x + 4y + 7 = 0 and S₂ ≡ x² + y² + 4x + 2y + 5 = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Circle Orthogonal to Three Given Circles',
            explanation:
              'Let the required circle be x² + y² + 2gx + 2fy + c = 0 and apply 2gg_i + 2ff_i = c + c_i:',
            equation:
              '2g + 17f − c = 4    --- (1)\n7g + 6f  − c = 11   --- (2)\n−g + 22f − c = 3    --- (3)\nSubtracting (1) from (2), and (3) from (1):\n  5g − 11f = 7   and   3g − 5f = 1\n  ⇒  g = −3,   f = −2,   c = −44\n  ∴  x² + y² − 6x − 4y − 44 = 0',
          },
          {
            stepTitle: '2. Radical Axis & Limiting Points of a Coaxial System',
            explanation: 'Form S₁ + 2λ(S₁ − S₂)/2 = 0 and set radius R² = 0:',
            equation:
              'Radical axis:  S₁ − S₂ = 0  ⇒  L ≡ x − y − 1 = 0\nCoaxial family S₁ + 2λL = 0:\n  x² + y² + 2(1 + λ)x + 2(2 − λ)y + (7 − 2λ) = 0\n  Center C = (−(1 + λ), −(2 − λ)),   Radius R² = 2λ² − 2 = 0\n  ⇒  λ = ±1\n  ∴  Radical Axis: x − y − 1 = 0;   Limiting Points: (−2, −1) and (0, −3)',
          },
        ],
      },
      {
        id: 'math-m6-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Rahman & Bhattacharjee (Ch. 4) & Howard Anton (Sec. 10.6)',
        title:
          'Rahman & Bhattacharjee & Anton: Reduction of Ellipse to Standard Form & Polar Equations of Conics',
        summaryText:
          'When ab − h² > 0 and λ₁, λ₂ have the same sign opposite to c′, the second-degree equation reduces to a real ellipse X²/A² + Y²/B² = 1.',
        equations: [
          {
            label: 'Polar Equation of a Conic (Focus at the Pole)',
            formula: 'l / r = 1 + e cos θ   (where l = ed is the semi-latus rectum)',
          },
        ],
        problemStatement:
          '(1) [Rahman & Bhattacharjee] Reduce 5x² − 6xy + 5y² + 18x − 14y + 9 = 0 to standard form and find its center, lengths of axes, eccentricity, and equations of axes. (2) [Anton 10.6] Identify and find the directrix and vertices of the polar conic r = 6 / (2 + cos θ).',
        solutionSteps: [
          {
            stepTitle: '1. Ellipse Reduction: 5x² − 6xy + 5y² + 18x − 14y + 9 = 0',
            explanation: 'Here a = 5, h = −3, b = 5, g = 9, f = −7, c = 9, so ab − h² = 25 − 9 = 16 > 0 (Ellipse):',
            equation:
              'Center equations:\n  5α − 3β + 9 = 0   and   −3α + 5β − 7 = 0\n  ⇒  Center (α, β) = (−3 / 2, 1 / 2)\n  c′ = gα + fβ + c = 9(−3 / 2) + (−7)(1 / 2) + 9 = −8\nCharacteristic equation:\n  λ² − 10λ + 16 = 0  ⇒  λ₁ = 2,   λ₂ = 8\n  ⇒  2X² + 8Y² − 8 = 0\n  ∴  X² / 4 + Y² / 1 = 1   (Ellipse with A = 2, B = 1, e = √3 / 2)',
          },
          {
            stepTitle: '2. Polar Conic Analysis: r = 6 / (2 + cos θ)',
            explanation: 'Divide numerator and denominator by 2 to match l / r = 1 + e cos θ:',
            equation:
              'r = 3 / (1 + (1 / 2) cos θ)\n  ⇒  Eccentricity e = 1 / 2 < 1  (Ellipse),   l = ed = 3  ⇒  Directrix distance d = 6\n  Vertices at θ = 0 and θ = π:\n    r(0) = 3 / (3 / 2) = 2,   r(π) = 3 / (1 / 2) = 6\n  ∴  Ellipse with e = 1 / 2,  major axis 2a = 2 + 6 = 8,  directrix x = 6',
          },
        ],
      },
      {
        id: 'math-m6-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · E. H. Askwith (Analytic Geometry of Conic Sections, Ch. V)',
        title:
          'Syllabus Book Problems (Askwith): Radical Center of Three Circles & Coaxial System from Limiting Points',
        summaryText:
          'If (α₁, β₁) and (α₂, β₂) are the limiting points (point-circles R = 0) of a coaxial system, the system is S₁ + λS₂ = 0 where S_i = (x − α_i)² + (y − β_i)² = 0.',
        problemStatement:
          '(1) [E. H. Askwith] Find the Radical Center of the three circles x² + y² − 2x − 4y + 1 = 0, x² + y² − 4x − 2y + 1 = 0, and x² + y² + 2x − 6y − 3 = 0. (2) Find the equation of the coaxial system of circles whose limiting points are (1, −1) and (3, 1).',
        solutionSteps: [
          {
            stepTitle: '1. Radical Center of Three Given Circles',
            explanation: 'Find the intersection of the radical axes S₁ − S₂ = 0 and S₂ − S₃ = 0:',
            equation:
              'Radical axis S₁ − S₂ = 0:\n  2x − 2y = 0  ⇒  x = y\nRadical axis S₂ − S₃ = 0:\n  −6x + 4y + 4 = 0  ⇒  3x − 2y = 2\nSubstituting y = x gives:\n  3x − 2x = 2  ⇒  x = 2,   y = 2\n  ∴  Radical Center = (2, 2)',
          },
          {
            stepTitle: '2. Coaxial System Given Two Limiting Points (1, −1) and (3, 1)',
            explanation: 'Treat each limiting point as a point-circle of zero radius:',
            equation:
              'Point-circle S₁ at (1, −1):  (x − 1)² + (y + 1)² = x² + y² − 2x + 2y + 2 = 0\nPoint-circle S₂ at (3, 1):   (x − 3)² + (y − 1)² = x² + y² − 6x − 2y + 10 = 0\nRadical axis S₁ − S₂ = 0:\n  4x + 4y − 8 = 0  ⇔  x + y − 2 = 0\n  ∴  Coaxial Family: x² + y² − 2x + 2y + 2 + λ(x + y − 2) = 0',
          },
        ],
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
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m7-b1',
        type: 'memorize',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Units 19–21 (3D Coordinate Systems, Direction Cosines/Ratios, Planes & Skew Lines)',
        title:
          '3D Coordinate Conversions (Cartesian, Cylindrical, Spherical), Direction Cosines & Plane/Line Formulas',
        summaryText:
          'Direction cosines l = cos α, m = cos β, n = cos γ satisfy l² + m² + n² = 1. Two lines in 3D are coplanar iff their 3×3 determinant vanishes.',
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
      },
      {
        id: 'math-m7-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]',
        title:
          'PUST Past Exam Questions on Cube Diagonal Theorems & Direction Cosine Algebraic Relations',
        summaryText:
          'Angle between any two diagonals of a cube is cos⁻¹(1/3), and a line making angles α, β, γ, δ with the four diagonals satisfies cos²α + cos²β + cos²γ + cos²δ = 4/3.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] (a) Find the angle between any two diagonals of a cube. (b) Prove that if a line makes angles α, β, γ, δ with the four diagonals of a cube, then cos²α + cos²β + cos²γ + cos²δ = 4/3. (2) [PUST Past Exam — 5 Marks] Find the angle between the two lines whose direction cosines satisfy l + m + n = 0 and l² + m² − n² = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Cube Diagonal Theorems (Part a & Part b)',
            explanation:
              'Take a cube of side a with edges along the coordinate axes; the four diagonals have DCs (±1/√3, 1/√3, 1/√3):',
            equation:
              'Part (a) — Angle between any two diagonals:\n  cos θ = |−1 / 3 + 1 / 3 + 1 / 3|\n        = 1 / 3\n  ∴  θ = cos⁻¹(1 / 3)\n\nPart (b) — Sum of squares of cosines with a line of DCs (l, m, n):\n  cos α = (l + m + n) / √3,    cos β = (−l + m + n) / √3,\n  cos γ = (l − m + n) / √3,    cos δ = (l + m − n) / √3\n  Squaring and adding:\n  cos²α + cos²β + cos²γ + cos²δ = 4(l² + m² + n²) / 3\n  ∴  cos²α + cos²β + cos²γ + cos²δ = 4 / 3',
          },
          {
            stepTitle:
              '2. Algebraic Direction Cosine Relations: l + m + n = 0 and l² + m² − n² = 0',
            explanation: 'Eliminate n = −(l + m) to find the direction ratios of the two lines:',
            equation:
              'Substituting n = −(l + m) into l² + m² − n² = 0:\n  l² + m² − (l + m)² = 0\n  ⇒  −2lm = 0\n  ⇒  l = 0   or   m = 0\n  • When l = 0:  DRs of Line 1: (0, 1, −1)\n  • When m = 0:  DRs of Line 2: (1, 0, −1)\n  cos θ = [(0)(1) + (1)(0) + (−1)(−1)] / (√2 · √2)\n        = 1 / 2\n  ∴  θ = 60° = π / 3',
          },
        ],
      },
      {
        id: 'math-m7-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5–7 Marks]',
        title:
          'PUST Past Exam Questions on Plane Families, Centroid Locus & Shortest Distance Between Skew Lines',
        summaryText:
          'Complete exam solutions for plane families P₁ + λP₂ = 0, centroid locus x⁻² + y⁻² + z⁻² = 9p⁻², and length & equation of the line of shortest distance.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5–7 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the plane through the intersection of x + 2y + 3z − 4 = 0 and 2x + y − z + 5 = 0 perpendicular to 5x + 3y + 6z + 8 = 0. (2) [PUST Past Exam — 5 Marks] A variable plane at constant distance p from the origin meets the axes at A, B, C. Show that the locus of the centroid of △ABC is x⁻² + y⁻² + z⁻² = 9p⁻². (3) [PUST Past Exam — 7 Marks] Find the length and equations of the line of shortest distance between (x − 3)/3 = (y − 8)/(−1) = (z − 3)/1 and (x + 3)/(−3) = (y + 7)/2 = (z − 6)/4.',
        solutionSteps: [
          {
            stepTitle: '1. Plane Through Intersection & Centroid Locus Proof',
            explanation: 'Vertical solutions for Plane Problems (1) and (2):',
            equation:
              'Problem 1 (Intersection Plane):\n  (x + 2y + 3z − 4) + λ(2x + y − z + 5) = 0\n  Perpendicular to 5x + 3y + 6z + 8 = 0:\n    5(1 + 2λ) + 3(2 + λ) + 6(3 − λ) = 0  ⇒  λ = −29 / 7\n  ∴  51x + 15y − 50z + 173 = 0\n\nProblem 2 (Centroid Locus):\n  Plane x / a + y / b + z / c = 1  has centroid (x, y, z) = (a / 3, b / 3, c / 3)\n  Since a⁻² + b⁻² + c⁻² = p⁻²:\n    (3x)⁻² + (3y)⁻² + (3z)⁻² = p⁻²\n  ∴  x⁻² + y⁻² + z⁻² = 9p⁻²',
          },
          {
            stepTitle: '2. Shortest Distance & Equations of S.D. Line (7 Marks)',
            explanation:
              'Take general points P(r₁) on Line 1 and Q(r₂) on Line 2 and enforce PQ ⊥ Line 1 and PQ ⊥ Line 2:',
            equation:
              'Let  P(3r₁ + 3, −r₁ + 8, r₁ + 3)  and  Q(−3r₂ − 3, 2r₂ − 7, 4r₂ + 6).\nEnforcing PQ ⊥ (3, −1, 1) and PQ ⊥ (−3, 2, 4):\n  −11r₁ − 7r₂ = 0   and   7r₁ + 29r₂ = 0\n  ⇒  r₁ = 0,   r₂ = 0\nFeet of perpendicular:  P = (3, 8, 3),  Q = (−3, −7, 6),  DRs of PQ = (−6, −15, 3) ∝ (2, 5, −1)\n  ∴  Shortest Distance, S.D. = 3√30\n  ∴  S.D. Line: (x − 3) / 2 = (y − 8) / 5 = (z − 3) / (−1)',
          },
        ],
      },
      {
        id: 'math-m7-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Rahman & Bhattacharjee (3D Geometry, Ch. 3) & Anton Ch. 11',
        title:
          'Rahman & Bhattacharjee: Unsymmetric-to-Symmetric Line Conversion & Coplanar Lines Plane Equation',
        summaryText:
          'Find the direction ratios (l, m, n) of the intersection of two planes by taking the cross product of their normal vectors, and find a point by setting z = 0.',
        problemStatement:
          '(1) [Rahman & Bhattacharjee] Reduce the unsymmetric line x + y + z + 1 = 0 = 4x + y − 2z + 2 to symmetric form. (2) Show that the lines (x + 1)/(−3) = (y − 3)/2 = (z + 2)/1 and x/1 = (y − 7)/(−3) = (z + 7)/2 are coplanar, and find the equation of the plane containing them.',
        solutionSteps: [
          {
            stepTitle: '1. Unsymmetric to Symmetric Form: x + y + z + 1 = 0, 4x + y − 2z + 2 = 0',
            explanation: 'Cross-multiply plane normals (1, 1, 1) × (4, 1, −2) for DRs and set z = 0 for a point:',
            equation:
              'Direction ratios (l, m, n) = (1, 1, 1) × (4, 1, −2)\n                           = (−2 − 1,  4 − (−2),  1 − 4)\n                           = (−3, 6, −3) ∝ (1, −2, 1)\nPutting z = 0 in x + y = −1 and 4x + y = −2 gives:\n  x = −1 / 3,   y = −2 / 3,   z = 0\n  ∴  Symmetric Form: (x + 1 / 3) / 1 = (y + 2 / 3) / (−2) = z / 1',
          },
          {
            stepTitle: '2. Coplanarity Verification & Plane Containing Two Lines',
            explanation: 'Evaluate the 3×3 coplanarity determinant:',
            equation:
              'Here (x₁, y₁, z₁) = (−1, 3, −2),  (x₂, y₂, z₂) = (0, 7, −7)\nDeterminant:\n  1 · (4 − 3) − 4 · (−6 − 1) − 5 · (9 − 2) = 1 + 28 − 35 + 6 = 0   (Coplanar)\nNormal to the plane = (−3, 2, 1) × (1, −3, 2) = (7, 7, 7) ∝ (1, 1, 1)\nPlane through (−1, 3, −2):\n  1(x + 1) + 1(y − 3) + 1(z + 2) = 0\n  ∴  x + y + z = 0',
          },
        ],
      },
      {
        id: 'math-m7-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · G. B. Thomas & R. L. Finney (Ch. 10) & M. R. Spiegel',
        title:
          'Syllabus Book Problems: Angle Between Line & Plane (sin φ) and Mirror Image of a Point in a Plane',
        summaryText:
          'The angle φ between a line (l, m, n) and a plane Ax + By + Cz + D = 0 is complementary to the angle with the plane normal: sin φ = |Al + Bm + Cn| / [√(A² + B² + C²)√(l² + m² + n²)].',
        equations: [
          {
            label: 'Angle φ Between a Line (l, m, n) and a Plane Ax + By + Cz + D = 0',
            formula:
              'sin φ = |Al + Bm + Cn| / [ √(A² + B² + C²) · √(l² + m² + n²) ]',
          },
        ],
        problemStatement:
          '(1) [Thomas & Finney] Find the angle between the line (x − 1)/2 = (y − 2)/1 = (z − 3)/(−2) and the plane x + 2y + 2z − 5 = 0. (2) Find the foot of the perpendicular and the mirror image of the point P(1, 3, 4) in the plane 2x − y + z + 3 = 0.',
        solutionSteps: [
          {
            stepTitle: '1. Angle φ Between Line (2, 1, −2) and Plane x + 2y + 2z − 5 = 0',
            explanation: 'Apply sin φ = |Al + Bm + Cn| / [√(A²+B²+C²)√(l²+m²+n²)]:',
            equation:
              'sin φ = |1(2) + 2(1) + 2(−2)| / [ √(1² + 2² + 2²) · √(2² + 1² + (−2)²) ]\n      = |2 + 2 − 4| / (3 × 3)\n      = 0\n  ∴  φ = 0°   (The line is parallel to the plane)',
          },
          {
            stepTitle: '2. Foot of Perpendicular N and Mirror Image P′ of P(1, 3, 4)',
            explanation: 'Write the normal line through P(1, 3, 4) with DRs (2, −1, 1):',
            equation:
              'Any point on the normal line is  Q(2t + 1, −t + 3, t + 4).\nFor foot of perpendicular N on 2x − y + z + 3 = 0:\n  2(2t + 1) − (−t + 3) + (t + 4) + 3 = 0\n  ⇒  6t + 6 = 0\n  ⇒  t = −1\n  ⇒  Foot N = (−1, 4, 3)\nFor mirror image P′ (t = 2(−1) = −2):\n  ∴  Foot N = (−1, 4, 3),   Mirror Image P′ = (−3, 5, 2)',
          },
        ],
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
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [
      {
        id: 'math-m8-b1',
        type: 'memorize',
        priorityTier: 1,
        sourceCitation:
          'Class Note · Units 22–24 (Sphere, Right Circular Cone/Cylinder & 3D Quadric Surfaces)',
        title:
          'Standard Equations of Sphere, Right Circular Cone, Right Circular Cylinder & 3D Quadric Surfaces',
        summaryText:
          'General sphere S ≡ x² + y² + z² + 2ux + 2vy + 2wz + d = 0 has center C = (−u, −v, −w) and radius R = √(u² + v² + w² − d). Plane section at distance p < R is a circle of radius r = √(R² − p²).',
        equations: [
          {
            label: 'General Sphere Equation, Center, Radius & Plane Section Circle',
            formula:
              'C = (−u, −v, −w),  R = √(u² + v² + w² − d)  |  Circle radius r = √(R² − p²)  |  Family: S + λP = 0',
          },
          {
            label: 'Diameter Form & Orthogonal Spheres Condition',
            formula:
              '(x − x₁)(x − x₂) + (y − y₁)(y − y₂) + (z − z₁)(z − z₂) = 0   |   Orthogonal: 2u₁u₂ + 2v₁v₂ + 2w₁w₂ = d₁ + d₂',
          },
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
      },
      {
        id: 'math-m8-b2',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]',
        title:
          'PUST Past Exam Questions on Sphere Plane Sections (Circle Center & Radius) & Spheres Through a Circle',
        summaryText:
          'Find circle center N as the foot of the normal from sphere center C to the cutting plane, and use S + λP = 0 for spheres passing through a circle.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the center and radius of the circle x² + y² + z² − 2y − 4z − 11 = 0, x + 2y + 2z = 15. (2) [PUST Past Exam — 5 Marks] Find the equations of the spheres through the circle x² + y² + z² = 5, x + 2y + 3z = 3 that touch the plane 4x + 3y = 15.',
        solutionSteps: [
          {
            stepTitle: '1. Center & Radius of Circle of Intersection',
            explanation:
              'Find sphere center C, sphere radius R, perpendicular distance p to the plane, and foot of perpendicular N:',
            equation:
              'Sphere center:  C = (0, 1, 2),   Sphere radius:  R = √(0 + 1 + 4 + 11) = 4\nDistance from C(0, 1, 2) to plane x + 2y + 2z − 15 = 0:\n  p = |0 + 2(1) + 2(2) − 15| / 3\n    = 3\n  ⇒  Circle radius,  r = √(R² − p²) = √(16 − 9) = √7\nNormal line N = (t, 2t + 1, 2t + 2) on x + 2y + 2z = 15 gives t = 1:\n  ∴  Circle Center N = (1, 3, 4),   Circle Radius r = √7',
          },
          {
            stepTitle: '2. Spheres Through a Circle Touching a Given Plane',
            explanation: 'Form S + λP = 0 and equate perpendicular distance from center to radius:',
            equation:
              'Sphere family S + λP = 0:\n  x² + y² + z² + λx + 2λy + 3λz − (5 + 3λ) = 0\n  Center C = (−λ / 2, −λ, −3λ / 2),   Radius R = √(7λ² / 2 + 3λ + 5)\nTangency condition to 4x + 3y − 15 = 0:\n  (λ + 3)² = 7λ² / 2 + 3λ + 5\n  ⇒  5λ² − 6λ − 8 = 0  ⇒  λ = 2,  −4 / 5\n  ∴  Spheres: x² + y² + z² + 2x + 4y + 6z − 11 = 0 and 5(x² + y² + z²) − 4x − 8y − 12z − 13 = 0',
          },
        ],
      },
      {
        id: 'math-m8-b3',
        type: 'pyq',
        priorityTier: 2,
        secondaryPriorityTiers: [1],
        sourceCitation:
          'Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5–7 Marks]',
        title:
          'PUST Past Exam Questions on Guiding-Curve Cone, Right Circular Cylinder & 3D Conicoid Reduction',
        summaryText:
          'Complete exam derivations for cones with a given vertex and guiding curve, right circular cylinders, and 3D central conicoid reduction.',
        examYears: ['2022–23', '2021–22', '2020–21'],
        marks: '5–7 Marks',
        problemStatement:
          '(1) [PUST Past Exam — 5 Marks] Find the cone with vertex (1, 2, 3) and guiding curve x² + y² = 4, z = 0. (2) [PUST Past Exam — 5 Marks] Find the right circular cylinder of radius R = 2 with axis (x − 1)/2 = (y − 2)/1 = (z − 3)/2. (3) [PUST Past Exam — 7 Marks] Reduce 2x² − 7y² + 2z² − 10yz − 8zx − 10xy + 6x + 12y − 6z + 2 = 0 to standard form.',
        solutionSteps: [
          {
            stepTitle: '1. Cone with Vertex (1, 2, 3) & Guiding Circle x² + y² = 4, z = 0',
            explanation: 'Write generator through (1, 2, 3), intersect with z = 0, and eliminate l, m, n:',
            equation:
              'Generator through (1, 2, 3):  (x − 1) / l = (y − 2) / m = (z − 3) / n\nAt z = 0:  x = 1 − 3l / n,   y = 2 − 3m / n\nSubstituting into x² + y² = 4 and using l/n = (x − 1)/(z − 3), m/n = (y − 2)/(z − 3):\n  (z − 3x)² + (2z − 3y)² = 4(z − 3)²\n  ∴  9x² + 9y² + z² − 6xz − 12yz + 24z − 36 = 0',
          },
          {
            stepTitle: '2. Right Circular Cylinder of Radius R = 2',
            explanation: 'Apply the cylinder projection formula with point (1, 2, 3) and axis DRs (2, 1, 2):',
            equation:
              '(x − 1)² + (y − 2)² + (z − 3)² − [2(x − 1) + 1(y − 2) + 2(z − 3)]² / 9 = 2²\n  ⇒  9[(x − 1)² + (y − 2)² + (z − 3)²] − (2x + y + 2z − 10)² = 36\n  ∴  5x² + 8y² + 5z² − 4xy − 4yz − 8zx + 22x − 16y − 14z + 26 = 0',
          },
          {
            stepTitle:
              '3. Reduction of 3D Conicoid (Corrected Eigenvalues & Center for Problem 24.1)',
            explanation:
              'Solve det(A − λI) = 0 for eigenvalues λ₁, λ₂, λ₃ and ½∂F/∂x = ½∂F/∂y = ½∂F/∂z = 0 for center:',
            equation:
              'Discriminating cubic det(A − λI) = 0:\n  λ³ + 3λ² − 90λ + 216 = 0\n  ⇒  (λ − 6)(λ − 3)(λ + 12) = 0  ⇒  λ₁ = 6,  λ₂ = 3,  λ₃ = −12\nCenter equations:\n  2α − 5β − 4γ + 3 = 0,  −5α − 7β − 5γ + 6 = 0,  −4α − 5β + 2γ − 3 = 0\n  ⇒  Center (α, β, γ) = (1 / 3, −1 / 3, 4 / 3),   d′ = uα + vβ + wγ + d = −3\n  ⇒  6X² + 3Y² − 12Z² − 3 = 0\n  ∴  2X² + Y² − 4Z² = 1   (Hyperboloid of One Sheet)',
          },
        ],
      },
      {
        id: 'math-m8-b4',
        type: 'example',
        priorityTier: 3,
        sourceCitation:
          'Professor-Followed Book · Rahman & Bhattacharjee (3D Geometry: Sphere & Cone)',
        title:
          'Rahman & Bhattacharjee Worked Problems: Sphere Through Four Points & Mutually Perpendicular Cone Generators',
        summaryText:
          'A homogeneous second-degree cone ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 has sets of three mutually perpendicular generators iff a + b + c = 0.',
        problemStatement:
          '(1) [Rahman & Bhattacharjee] Find the equation of the sphere passing through the origin (0, 0, 0) and the three axial intercepts (a, 0, 0), (0, b, 0), (0, 0, c). (2) Find the equation of the cone with vertex at the origin (0, 0, 0) that passes through the circle x² + y² + z² + 2ux + d = 0, lx + my + nz = p.',
        solutionSteps: [
          {
            stepTitle:
              '1. Sphere Through (0, 0, 0), (a, 0, 0), (0, b, 0), (0, 0, c)',
            explanation: 'Substitute the four points into x² + y² + z² + 2ux + 2vy + 2wz + d = 0:',
            equation:
              'At (0, 0, 0):  d = 0\nAt (a, 0, 0):  a² + 2ua = 0  ⇒  2u = −a\nAt (0, b, 0):  b² + 2vb = 0  ⇒  2v = −b\nAt (0, 0, c):  c² + 2wc = 0  ⇒  2w = −c\n∴  x² + y² + z² − ax − by − cz = 0',
          },
          {
            stepTitle: '2. Homogenizing Sphere & Plane to Form Cone with Vertex at (0, 0, 0)',
            explanation: 'Use 1 = (lx + my + nz) / p to make the sphere equation homogeneous of degree 2:',
            equation:
              'Given sphere:  x² + y² + z² + 2ux(1) + d(1)² = 0\nSubstituting 1 = (lx + my + nz) / p:\n  ∴  p²(x² + y² + z²) + 2upx(lx + my + nz) + d(lx + my + nz)² = 0',
          },
        ],
      },
      {
        id: 'math-m8-b5',
        type: 'example',
        priorityTier: 4,
        sourceCitation:
          'Syllabus Book · E. H. Askwith & G. B. Thomas & R. L. Finney (Quadric Surfaces)',
        title:
          'Syllabus Book Problems: Radical Plane, Limiting Points of Coaxial Spheres & Enveloping Cone SS₁ = T²',
        summaryText:
          'The tangent cone (enveloping cone) from an external point P(x₁, y₁, z₁) to a sphere S = 0 is given by SS₁ = T².',
        equations: [
          {
            label: 'Enveloping Cone from (x₁, y₁, z₁) & Radical Plane of Two Spheres',
            formula:
              'Enveloping Cone: S · S₁ = T²   |   Radical Plane: S₁ − S₂ = 0',
          },
        ],
        problemStatement:
          '(1) [Askwith] Find the limiting points of the coaxial system of spheres determined by S₁ ≡ x² + y² + z² − 8x − 2y − 4z + 15 = 0 and S₂ ≡ x² + y² + z² − 2x + 4y + 2z + 9 = 0. (2) Find the enveloping cone of the sphere x² + y² + z² = 4 with vertex at (1, 1, 3).',
        solutionSteps: [
          {
            stepTitle: '1. Limiting Points of Coaxial System of Spheres',
            explanation: 'Find the radical plane S₁ − S₂ = 0 and set radius R² = 0 in S₁ + 2λ(S₁ − S₂)/6 = 0:',
            equation:
              'Radical plane S₁ − S₂ = 0:\n  −6x − 6y − 6z + 6 = 0  ⇔  x + y + z − 1 = 0\nCoaxial sphere family S₁ + 2λ(x + y + z − 1) = 0:\n  Center C = (4 − λ,  1 − λ,  2 − λ)\n  Radius R² = (4 − λ)² + (1 − λ)² + (2 − λ)² − (15 − 2λ)\n            = 3λ² − 12λ + 6 = 0\n  ⇒  λ = 2 ± √2\n  ∴  Limiting Points: (2 ∓ √2, −1 ∓ √2, ∓√2)',
          },
          {
            stepTitle: '2. Enveloping Cone of x² + y² + z² − 4 = 0 from Vertex (1, 1, 3)',
            explanation: 'Apply SS₁ = T² with S₁ = 1² + 1² + 3² − 4 = 7 and T = x + y + 3z − 4:',
            equation:
              'Here  S = x² + y² + z² − 4,   S₁ = 1 + 1 + 9 − 4 = 7,   T = x + y + 3z − 4\nUsing S · S₁ = T²:\n  7(x² + y² + z² − 4) = (x + y + 3z − 4)²\n  ∴  6x² + 6y² − 2z² − 2xy − 6yz − 6zx + 8x + 8y + 24z − 44 = 0',
          },
        ],
      },
    ],
  },
];

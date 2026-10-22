import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH01: ChapterNote = {
  "id": "math1101-ch01",
  "unitNumber": "Module 01",
  "title": "Functions, Limit and Continuity",
  "summary": "1.1 Functions: kinds (polynomial, rational, transcendental, even, odd, periodic), Domain, range, inverse function and graphs of standard functions. 1.2 Limit and continuity: epsilon-delta definition and geometric interpretations.",
  "estimatedMinutes": 75,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m1-b1",
      "type": "definition",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Unit 1 (Concept of Function, Classification, Domain & Range)",
      "title": "Definition of a Function, Classification & Domain Rules",
      "summaryText": "If for every permissible input x ∈ D there corresponds one and only one finite real output y, then y = f(x) is a function of x.",
      "memorizeStatements": [
        "If for every permissible input x ∈ D there corresponds one and only one finite real output y, then y = f(x) is a function of x."
      ],
      "paragraphs": [
        "A function y = f(x) assigns to each input x in the domain D_f a unique finite real number y in the range R_f. For example, y = x² + 1 is a valid function (x = 1 ⇒ y = 2; x = 2 ⇒ y = 5), whereas y² = x ⇒ y = ±√x is not a function because a single input x = 4 produces two distinct outputs y = +2 and y = −2.",
        "A function can be expressed in four ways: (1) Analytically/Algebraically by a formula, (2) Numerically by a table of values, (3) Geometrically by its graph in the xy-plane, and (4) Verbally in plain language."
      ],
      "equations": [
        {
          "label": "1. Rational Function Domain Rule",
          "formula": "f(x) = P(x) / Q(x)   ⇒   Defined when Q(x) ≠ 0",
          "note": "Exclude all real zeros of the denominator Q(x)"
        },
        {
          "label": "2. Even Root in Numerator",
          "formula": "f(x) = √g(x)   ⇒   Defined when g(x) ≥ 0",
          "note": "Boundary zeros where g(x) = 0 are included"
        },
        {
          "label": "3. Even Root in Denominator",
          "formula": "f(x) = 1 / √g(x)   ⇒   Defined when g(x) > 0",
          "note": "Strict inequality since denominator cannot be zero"
        },
        {
          "label": "4. Logarithmic Function Domain Rule",
          "formula": "f(x) = ln(g(x))   ⇒   Defined when g(x) > 0",
          "note": "Argument of a logarithm must be strictly positive"
        },
        {
          "label": "5. Inverse Trigonometric Function Domain Rule",
          "formula": "f(x) = sin⁻¹(g(x)) or cos⁻¹(g(x))   ⇒   Defined when −1 ≤ g(x) ≤ 1",
          "note": "Principal inverse sine and cosine domain restriction"
        }
      ],
      "table": {
        "caption": "Table 1.1 — Classification of Functions in Differential Calculus",
        "headers": [
          "Main Family",
          "Sub-Type",
          "General Form & Condition"
        ],
        "rows": [
          [
            "1. Algebraic",
            "(a) Polynomial",
            "f(x) = a₀ + a₁x + a₂x² + ··· + a_nxⁿ (n ∈ ℕ ∪ {0}, a_n ≠ 0). Domain D_f = ℝ."
          ],
          [
            "1. Algebraic",
            "(b) Rational",
            "f(x) = P(x) / Q(x), where P(x), Q(x) are polynomials and Q(x) ≠ 0."
          ],
          [
            "1. Algebraic",
            "(c) Irrational",
            "f(x) = [g(x)]^{p/q} involving radicals or non-integer rational exponents (p, q ∈ ℤ, q ≥ 2)."
          ],
          [
            "1. Algebraic",
            "(d) Piecewise",
            "Defined by distinct analytical formulas on disjoint sub-intervals of the domain D_f."
          ],
          [
            "2. Transcendental",
            "(a) Trigonometric",
            "sin x, cos x, tan x, cot x, sec x, csc x (angle x measured in radians)."
          ],
          [
            "2. Transcendental",
            "(b) Inverse Trig",
            "sin⁻¹x, cos⁻¹x, tan⁻¹x, cot⁻¹x, sec⁻¹x, csc⁻¹x (on principal branches)."
          ],
          [
            "2. Transcendental",
            "(c) Exponential",
            "f(x) = a^x (a > 0, a ≠ 1), especially natural exponential f(x) = e^x."
          ],
          [
            "2. Transcendental",
            "(d) Logarithmic",
            "f(x) = log_a x (a > 0, a ≠ 1, x > 0), especially ln x = log_e x."
          ]
        ]
      },
      "problemStatement": "Find the domain and range of the following Class Lecture & Homework functions:\n(1) f(x) = 1 / (x − 3)\n(2) f(x) = √(x² − 5x + 6) and g(x) = 1 / √(x² − 5x + 6)\n(3) f(x) = √((x − 2) / (3 − x))",
      "solutionSteps": [
        {
          "stepTitle": "Problem 1.1 (Class Lecture): f(x) = 1 / (x − 3)",
          "explanation": "Exclude the denominator zero for Domain, then solve for x in terms of y for Range:",
          "equation": "Step 1 (Domain):\n  Given,  f(x) = 1 / (x − 3)\n  Denominator ≠ 0:\n  x − 3 = 0\n  ⇒  x = 3   [Excluded point]\n  ∴  Domain, D_f = ℝ \\ {3} = (−∞, 3) ∪ (3, ∞)\n\nStep 2 (Range):\n  Let  y = 1 / (x − 3)\n  ⇒  x − 3 = 1 / y\n  ⇒  x = (1 + 3y) / y   [Undefined when y = 0]\n  ∴  Range, R_f = ℝ \\ {0} = (−∞, 0) ∪ (0, ∞)"
        },
        {
          "stepTitle": "Problem 1.2 & 1.5 (Class Lecture): f(x) = √(x² − 5x + 6) and g(x) = 1 / √(x² − 5x + 6)",
          "explanation": "Factor the quadratic inside the square root and test interval signs across critical points x = 2, 3:",
          "equation": "For f(x) = √(x² − 5x + 6):\n  f(x) = √((x − 2)(x − 3))\n  For real values, radicand ≥ 0:\n  x² − 5x + 6 ≥ 0\n  ⇒  (x − 2)(x − 3) ≥ 0   [Critical points: x = 2, 3]\n  Sign analysis:\n    • On (−∞, 2): (−) × (−) = +  (Valid)\n    • On (2, 3):  (+) × (−) = −  (Invalid)\n    • On (3, ∞):  (+) × (+) = +  (Valid)\n  Checking endpoints: f(2) = 0 and f(3) = 0 are defined.\n  ∴  Domain, D_f = (−∞, 2] ∪ [3, ∞)\n  ∴  Range, R_f = [0, ∞)\n\nFor g(x) = 1 / √(x² − 5x + 6):\n  Since the radical is in the denominator, strict inequality holds:\n  (x − 2)(x − 3) > 0\n  ∴  Domain, D_g = (−∞, 2) ∪ (3, ∞)\n  ∴  Range, R_g = (0, ∞)"
        },
        {
          "stepTitle": "Problem 1.4 (Class Homework): f(x) = √((x − 2) / (3 − x))",
          "explanation": "Enforce non-negative radicand (x − 2)/(3 − x) ≥ 0 and non-zero denominator 3 − x ≠ 0:",
          "equation": "Step 1 (Domain):\n  (x − 2) / (3 − x) ≥ 0   and   3 − x ≠ 0\n  Sign of (x − 2) / (3 − x):\n    • On (−∞, 2): (−) / (+) = −  (Invalid)\n    • On (2, 3):  (+) / (+) = +  (Valid)\n    • On (3, ∞):  (+) / (−) = −  (Invalid)\n  At x = 2:\n    f(2) = √(0 / 1)\n         = 0   (Included)\n  At x = 3:\n    f(3) = √(1 / 0)   (Undefined, excluded)\n  ∴  Domain, D_f = [2, 3)\n\nStep 2 (Range):\n  Let  y = √((x − 2) / (3 − x))   where y ≥ 0\n  ⇒  y² = (x − 2) / (3 − x)\n  ⇒  3y² − xy² = x − 2\n  ⇒  x(1 + y²) = 3y² + 2\n  ⇒  x = (3y² + 2) / (y² + 1)   [Defined for all real y ≥ 0]\n  ∴  Range, R_f = [0, ∞)"
        }
      ]
    },
    {
      "id": "math-m1-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q1(a) [4 Marks], 2021–22 Q1(a) [5 Marks], 2020–21 Q1(a) [5 Marks]",
      "title": "Domain, Range, Piecewise Functions & Symmetry",
      "summaryText": "Complete exam-style vertical solutions for PUST 2020–21 Q1(a), 2021–22 Q1(a), and 2022–23 Q1(a).",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "4–5 Marks",
      "equations": [
        {
          "label": "Even & Odd Function Symmetry",
          "formula": "Even: f(−x) = f(x) [y-axis symmetry]  |  Odd: f(−x) = −f(x) [Origin (0,0) symmetry]"
        },
        {
          "label": "Periodic Function & Fundamental Periods",
          "formula": "f(x + T) = f(x) (T > 0)  |  sin(ax+b), cos(ax+b): T = 2π / |a|  |  tan(ax+b): T = π / |a|"
        }
      ],
      "problemStatement": "(1) [PUST EECE 2020–21 Q1(a) — 5 Marks] Define even, odd, and periodic functions with examples, and find the domain and range of f(x) = (x − 2) / (3 − x).\n(2) [PUST EECE 2021–22 Q1(a) — 5 Marks] Define function, domain and range; find the domain and range of f(x) = √(16 − x²) and describe its graph.\n(3) [PUST EECE 2022–23 Q1(a) — 4 Marks] Define a piecewise function and find the domain, range, and graph behavior of f(x) = { x² + 1 (x < 0); 3x + 1 (0 ≤ x ≤ 3); 10 (x > 3) }.",
      "solutionSteps": [
        {
          "stepTitle": "1. PUST EECE 2020–21 Q1(a) [5 Marks]: f(x) = (x − 2) / (3 − x)",
          "explanation": "Find the excluded denominator zero for Domain, then express x in terms of y for Range:",
          "equation": "Step 1 (Domain):\n  Given,  f(x) = (x − 2) / (3 − x)\n  For f(x) to be real and finite, denominator ≠ 0:\n  3 − x = 0\n  ⇒  x = 3   [Excluded point]\n  ∴  Domain, D_f = ℝ \\ {3} = (−∞, 3) ∪ (3, ∞)\n\nStep 2 (Range):\n  Let  y = (x − 2) / (3 − x)\n  ⇒  y(3 − x) = x − 2\n  ⇒  3y − xy = x − 2\n  ⇒  x + xy = 3y + 2\n  ⇒  x(1 + y) = 3y + 2\n  ⇒  x = (3y + 2) / (y + 1)   [Undefined when y + 1 = 0 ⇒ y = −1]\n  ∴  Range, R_f = ℝ \\ {−1} = (−∞, −1) ∪ (−1, ∞)"
        },
        {
          "stepTitle": "2. PUST EECE 2021–22 Q1(a) [5 Marks]: f(x) = √(16 − x²)",
          "explanation": "Determine the domain, range, and geometric locus of the upper semicircle:",
          "equation": "For Domain:\n  16 − x² ≥ 0\n  ⇒  x² ≤ 16\n  ⇒  −4 ≤ x ≤ 4\n  ∴  Domain, D_f = [−4, 4]\n\nFor Range:\n  Since x ∈ [−4, 4]:\n  0 ≤ x² ≤ 16\n  ⇒  0 ≤ 16 − x² ≤ 16\n  ⇒  0 ≤ √(16 − x²) ≤ 4\n  ∴  Range, R_f = [0, 4]\n\nGraph Description:\n  y = √(16 − x²)  (y ≥ 0)\n  ⇔  x² + y² = 4²  (y ≥ 0)\n  which is the upper semicircle centered at (0, 0) with radius r = 4."
        },
        {
          "stepTitle": "3. PUST EECE 2022–23 Q1(a) [4 Marks]: Piecewise Function Domain & Range",
          "explanation": "Analyze each branch over its interval to determine the combined domain and range:",
          "equation": "Branch 1 (x < 0):\n  y = x² + 1  is the left half of an upward parabola approaching (0, 1) as x → 0⁻\n  and rising to +∞ as x → −∞.\n  ⇒  y ∈ (1, ∞)\n\nBranch 2 (0 ≤ x ≤ 3):\n  y = 3x + 1  is a line segment from (0, 1) to (3, 10).\n  ⇒  y ∈ [1, 10]\n\nBranch 3 (x > 3):\n  y = 10  is a horizontal ray starting at (3, 10) extending to +∞.\n  ⇒  y = 10\n\nCombining all three branches:\n  ∴  Domain, D_f = (−∞, 0) ∪ [0, 3] ∪ (3, ∞) = ℝ\n  ∴  Range, R_f = [1, ∞)"
        }
      ]
    },
    {
      "id": "math-m1-b3",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Howard Anton Sec. 0.1 (Ex. 8–14, 19, 35) & Sec. 0.4 (Ex. 20–25, 37)",
      "title": "Domain, Range & Inverse Function Derivations",
      "summaryText": "Complete vertical step-by-step solutions for Anton Section 0.1 (Domain & Range) and Section 0.4 (Bijective Inverse Functions).",
      "equations": [
        {
          "label": "Inverse Function Existence & Properties",
          "formula": "f⁻¹ exists ⇔ f is Bijective (One-to-One & Onto)  |  D_{f⁻¹} = R_f,  R_{f⁻¹} = D_f",
          "note": "Graph of y = f⁻¹(x) is the reflection of y = f(x) across the line y = x"
        }
      ],
      "problemStatement": "(A) [Anton Sec. 0.1] Find the domain and range for:\n(1) f(x) = 1 / (5x + 7)\n(2) g(x) = √(x² − 3) and g(x) = √(x² + 3)\n(3) h(x) = √(x − 3x²)\n(4) φ(x) = x / (|x| + 1)\n(5) F(x) = 3 − √(x − 2)\n(6) f(x) = √(x² − 2x + 5)\n(7) f(x) = (x² − 4) / (x − 2)\n(B) [Anton Sec. 0.4] Find the inverse function f⁻¹(x) for:\n(i) f(x) = (x + 1) / (x − 1)\n(ii) f(x) = 3 / x² (x < 0)\n(iii) f(x) = (e^x + e^{-x}) / 2 (x ≥ 0)",
      "solutionSteps": [
        {
          "stepTitle": "Part (A1) — Anton Sec. 0.1 Ex. 8, 9, 10 & 12",
          "explanation": "Vertical derivations for each function:",
          "equation": "1. Ex. 8: f(x) = 1 / (5x + 7)\n   5x + 7 ≠ 0\n   ⇒  x ≠ −7 / 5\n   ∴  Domain, D_f = (−∞, −7 / 5) ∪ (−7 / 5, ∞)\n   ∴  Range, R_f = (−∞, 0) ∪ (0, ∞)\n\n2. Ex. 9 & 10: (a) g(x) = √(x² − 3)  and  (b) g(x) = √(x² + 3)\n   (a) x² − 3 ≥ 0\n       ⇒  |x| ≥ √3\n       ∴  Domain, D_g = (−∞, −√3] ∪ [√3, ∞)\n       ∴  Range, R_g = [0, ∞)\n   (b) x² + 3 ≥ 3 > 0  for all x ∈ ℝ\n       ∴  Domain, D_g = (−∞, ∞)\n       ∴  Range, R_g = [√3, ∞)\n\n3. Ex. 12: h(x) = √(x − 3x²)\n   x − 3x² ≥ 0\n   ⇒  x(1 − 3x) ≥ 0\n   ⇒  0 ≤ x ≤ 1 / 3\n   Maximum of x − 3x² occurs at vertex x = 1 / 6:\n   h(1 / 6) = √(1 / 12)\n            = 1 / (2√3)\n   ∴  Domain, D_h = [0, 1 / 3]\n   ∴  Range, R_h = [0, 1 / (2√3)]"
        },
        {
          "stepTitle": "Part (A2) — Anton Sec. 0.1 Ex. 13, 14, 19 & 35",
          "explanation": "Completing the square and checking removable point discontinuities:",
          "equation": "4. Ex. 13: φ(x) = x / (|x| + 1)\n   Since |x| + 1 ≥ 1 ≠ 0 for all x ∈ ℝ:\n   ∴  Domain, D_φ = (−∞, ∞)\n   Also 0 ≤ |x| / (|x| + 1) < 1\n   ⇒  −1 < x / (|x| + 1) < 1\n   ∴  Range, R_φ = (−1, 1)\n\n5. Ex. 14: F(x) = 3 − √(x − 2)\n   x − 2 ≥ 0\n   ⇒  x ≥ 2\n   ∴  Domain, D_F = [2, ∞)\n   Since √(x − 2) ≥ 0:\n   ⇒  3 − √(x − 2) ≤ 3\n   ∴  Range, R_F = (−∞, 3]\n\n6. Ex. 19: f(x) = √(x² − 2x + 5)\n   x² − 2x + 5 = (x − 1)² + 4 ≥ 4 > 0  for all x ∈ ℝ\n   ∴  Domain, D_f = (−∞, ∞)\n   ∴  Range, R_f = [2, ∞)\n\n7. Ex. 35: f(x) = (x² − 4) / (x − 2)\n   x − 2 ≠ 0\n   ⇒  x ≠ 2\n   ∴  Domain, D_f = ℝ \\ {2}\n   For x ≠ 2:\n   f(x) = (x − 2)(x + 2) / (x − 2)\n        = x + 2   [Missing value at x = 2 is y = 4]\n   ∴  Range, R_f = ℝ \\ {4}"
        },
        {
          "stepTitle": "Part (B) — Anton Sec. 0.4 Inverse Function Derivations (Ex. 20, 23, 37)",
          "explanation": "Solve y = f(x) vertically for x in terms of y, respecting domain restrictions:",
          "equation": "(i) f(x) = (x + 1) / (x − 1):\n    Let  y = (x + 1) / (x − 1)\n    ⇒  yx − y = x + 1\n    ⇒  x(y − 1) = y + 1\n    ⇒  x = (y + 1) / (y − 1)\n    ∴  f⁻¹(x) = (x + 1) / (x − 1),   x ≠ 1\n\n(ii) f(x) = 3 / x²  (x < 0):\n    Let  y = 3 / x²,   y > 0\n    ⇒  x² = 3 / y\n    ⇒  x = −√(3 / y)   [Negative root chosen because x < 0]\n    ∴  f⁻¹(x) = −√(3 / x),   x > 0\n\n(iii) f(x) = (e^x + e^{-x}) / 2  (x ≥ 0):\n    Let  y = (e^x + e^{-x}) / 2   [For x ≥ 0, y ≥ 1]\n    ⇒  2y = e^x + 1 / e^x\n    ⇒  (e^x)² − 2y(e^x) + 1 = 0   [Quadratic in e^x]\n    ⇒  e^x = (2y ± √(4y² − 4)) / 2\n           = y ± √(y² − 1)\n    ⇒  e^x = y + √(y² − 1)   [Since x ≥ 0 ⇒ e^x ≥ 1]\n    ⇒  x = ln(y + √(y² − 1))\n    ∴  f⁻¹(x) = ln(x + √(x² − 1)),   x ≥ 1"
        }
      ]
    },
    {
      "id": "math-m1-b4",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Unit 2.1 & Unit 3.1–3.3 (Graph Transformations & Existence of Limits)",
      "title": "Graph Transformations & Existence of One-Sided Limits",
      "summaryText": "lim_{x→a} f(x) = L exists if and only if both L.H.L. = lim_{x→a⁻} f(x) and R.H.L. = lim_{x→a⁺} f(x) exist finitely and are equal.",
      "memorizeStatements": [
        "lim_{x→a} f(x) = L exists if and only if both L.H.L. = lim_{x→a⁻} f(x) and R.H.L. = lim_{x→a⁺} f(x) exist finitely and are equal."
      ],
      "equations": [
        {
          "label": "Graph Shifting & Reflecting Rules (c > 0)",
          "formula": "y = f(x ± c) [Left/Right by c]  |  y = f(x) ± c [Up/Down by c]  |  y = −f(x) [x-axis]  |  y = f(−x) [y-axis]"
        },
        {
          "label": "Two-Sided Limit Existence Criterion",
          "formula": "L.H.L. = lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = R.H.L. = L"
        },
        {
          "label": "Fundamental Trigonometric & Infinity Limits",
          "formula": "lim_{x→0} (sin x) / x = 1  |  lim_{x→0} (tan x) / x = 1  |  lim_{x→0} (1 − cos x) / x = 0  |  lim_{x→±∞} 1 / xⁿ = 0 (n > 0)"
        }
      ],
      "problemStatement": "Solve the Class Lecture problems:\n(1) [Problem 2.1] Analyze and find the domain and range of f(x) = 1 + |x − 1|.\n(2) [Problem 3.1] Examine the existence of limits at x = 0 and x = 3 for f(x) = { x² + 5 (x < 0); x + 5 (0 ≤ x ≤ 3); 2x + 1 (x > 3) }.\n(3) [Problem 3.2] Evaluate lim_{x→3} |x − 3| / (x − 3).\n(4) [Problem 3.3] Evaluate lim_{x→∞} (2x + 3)³(3x − 2)² / (x⁵ + 5).",
      "solutionSteps": [
        {
          "stepTitle": "1. Class Lecture Problem 2.1: f(x) = 1 + |x − 1|",
          "explanation": "Split the absolute value at x = 1 and identify the shifted V-shaped graph vertex:",
          "equation": "|x − 1| = { 1 − x,  if x < 1;   x − 1,  if x ≥ 1 }\nAdding 1 to both branches:\n  f(x) = 1 + |x − 1| = { 2 − x,  if x < 1;   x,  if x ≥ 1 }\n  Vertex is shifted 1 unit right and 1 unit up to (1, 1).\n  ∴  Domain, D_f = (−∞, ∞),   Range, R_f = [1, ∞)"
        },
        {
          "stepTitle": "2. Class Lecture Problem 3.1 & 3.2: One-Sided Limits (L.H.L. vs R.H.L.)",
          "explanation": "Compare L.H.L. and R.H.L. at each boundary point:",
          "equation": "Problem 3.1 (i) At x = 0:\n  L.H.L. = lim_{x→0⁻} (x² + 5)\n         = 0² + 5\n         = 5\n  R.H.L. = lim_{x→0⁺} (x + 5)\n         = 0 + 5\n         = 5\n  ∴  lim_{x→0} f(x) = 5   (Exists)\n\nProblem 3.1 (ii) At x = 3:\n  L.H.L. = lim_{x→3⁻} (x + 5)\n         = 3 + 5\n         = 8\n  R.H.L. = lim_{x→3⁺} (2x + 1)\n         = 2(3) + 1\n         = 7\n  ∴  Since L.H.L. (8) ≠ R.H.L. (7), lim_{x→3} f(x) does not exist.\n\nProblem 3.2: Evaluate lim_{x→3} |x − 3| / (x − 3):\n  L.H.L. = lim_{x→3⁻} −(x − 3) / (x − 3)\n         = −1\n  R.H.L. = lim_{x→3⁺} +(x − 3) / (x − 3)\n         = +1\n  ∴  Since L.H.L. (−1) ≠ R.H.L. (+1), lim_{x→3} |x − 3| / (x − 3) does not exist."
        },
        {
          "stepTitle": "3. Class Lecture Problem 3.3: lim_{x→∞} (2x + 3)³(3x − 2)² / (x⁵ + 5)",
          "explanation": "Divide numerator and denominator by x⁵ = x³ · x²:",
          "equation": "L = lim_{x→∞} (2x + 3)³(3x − 2)² / (x⁵ + 5)\n  = lim_{x→∞} [ (2 + 3 / x)³ (3 − 2 / x)² ] / (1 + 5 / x⁵)\n  = (2 + 0)³ (3 − 0)² / (1 + 0)\n  = 8 × 9\n∴  L = 72"
        }
      ]
    },
    {
      "id": "math-m1-b5",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q1(b) [4.5 Marks], 2020–21 Q1(b) [4.5 Marks], 2020–21 Q1(c) [4.5 Marks]",
      "title": "Formal (ε-δ) Limit Definition & Piecewise Continuity",
      "summaryText": "Formal Cauchy ε-δ proof (PUST 2020–21 Q1c) and piecewise continuity parameter problems (PUST 2022–23 Q1b & 2020–21 Q1b).",
      "examYears": [
        "2022–23",
        "2020–21"
      ],
      "marks": "4.5 Marks",
      "equations": [
        {
          "label": "Formal Cauchy (ε-δ) Definition of Limit",
          "formula": "∀ ε > 0,  ∃ δ > 0  such that  0 < |x − a| < δ  ⇒  |f(x) − L| < ε"
        },
        {
          "label": "Three Conditions for Continuity at x = a",
          "formula": "L.H.L. = lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = R.H.L. = f(a)"
        }
      ],
      "problemStatement": "(1) [PUST EECE 2020–21 Q1(c) — 4.5 Marks] Using the ε-δ definition of limit, prove that lim_{x→2}(3x − 5) = 1.\n(2) [PUST EECE 2022–23 Q1(b) — 4.5 Marks] What are the conditions for a function to be continuous at x = a? For what values of a and b is f(x) = { −2 (x ≤ −1); ax − b (−1 < x < 1); 3 (x ≥ 1) } continuous at every x?\n(3) [PUST EECE 2020–21 Q1(b) — 4.5 Marks] Find a and b so that f(x) = { x² + 2 (x < 0); ax + b (0 ≤ x < 1); 3 + 2x − x² (x ≥ 1) } is continuous at x = 0 and x = 1.",
      "solutionSteps": [
        {
          "stepTitle": "1. PUST EECE 2020–21 Q1(c) [4.5 Marks]: Prove lim_{x→2}(3x − 5) = 1",
          "explanation": "Let ε > 0 be arbitrary. Here f(x) = 3x − 5, a = 2, and L = 1. Find δ > 0 in terms of ε:",
          "equation": "Scratch / Backward Simplification:\n  |(3x − 5) − 1| < ε   whenever   0 < |x − 2| < δ\n  ⇒  |3x − 6| < ε\n  ⇒  |3(x − 2)| < ε\n  ⇒  3|x − 2| < ε\n  ⇒  |x − 2| < ε / 3\n\nFormal Deduction:\n  Choose  δ = ε / 3 > 0.\n  Then whenever  0 < |x − 2| < δ:\n    |(3x − 5) − 1| = |3x − 6|\n                    = 3|x − 2|\n                    < 3δ          [∵ |x − 2| < δ]\n                    = 3(ε / 3)\n                    = ε\n  ∴  lim_{x→2}(3x − 5) = 1   (with δ = ε / 3)"
        },
        {
          "stepTitle": "2. PUST EECE 2022–23 Q1(b) [4.5 Marks]: Continuity at x = −1 and x = 1",
          "explanation": "Enforce L.H.L. = R.H.L. = f(a) at the boundary points x = −1 and x = 1:",
          "equation": "Step 1 (Continuity at x = −1):\n  L.H.L. = lim_{x→−1⁻} (−2)\n         = −2\n  R.H.L. = lim_{x→−1⁺} (ax − b)\n         = −a − b\n  Since L.H.L. = R.H.L.:\n    −a − b = −2\n    ⇒  a + b = 2   --- (1)\n\nStep 2 (Continuity at x = 1):\n  L.H.L. = lim_{x→1⁻} (ax − b)\n         = a − b\n  R.H.L. = lim_{x→1⁺} (3)\n         = 3\n  Since L.H.L. = R.H.L.:\n    a − b = 3       --- (2)\n\nStep 3 (Solving (1) and (2)):\n  Adding (1) and (2):\n    2a = 5\n    ⇒  a = 5 / 2\n  From (1):\n    b = 2 − 5 / 2\n      = −1 / 2\n  ∴  a = 5 / 2,   b = −1 / 2"
        },
        {
          "stepTitle": "3. PUST EECE 2020–21 Q1(b) [4.5 Marks]: Continuity at x = 0 and x = 1",
          "explanation": "Enforce continuity at x = 0 and x = 1:",
          "equation": "At x = 0:\n  L.H.L. = lim_{x→0⁻} (x² + 2)\n         = 2\n  R.H.L. = lim_{x→0⁺} (ax + b)\n         = b\n  ⇒  b = 2\n\nAt x = 1:\n  L.H.L. = lim_{x→1⁻} (ax + b)\n         = a + b\n  R.H.L. = lim_{x→1⁺} (3 + 2x − x²)\n         = 3 + 2 − 1\n         = 4\n  ⇒  a + b = 4\n  ⇒  a + 2 = 4\n  ⇒  a = 2\n  ∴  a = 2,   b = 2"
        }
      ]
    },
    {
      "id": "math-m1-b6",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Howard Anton Sec. 1.2, 1.3, 1.5 & 1.6 (Limits & Continuity Homework Sets)",
      "title": "Radical Limits at Infinity, Trig Limits & IVT",
      "summaryText": "When factoring x² out of a square root as x → −∞, always use √(x²) = |x| = −x.",
      "equations": [
        {
          "label": "Square Root Sign Rule as x → −∞",
          "formula": "√(x²) = |x| = { +x if x > 0 (x → +∞);  −x if x < 0 (x → −∞) }",
          "note": "Critical rule when dividing radicals by x as x → −∞"
        },
        {
          "label": "Classification of Discontinuities",
          "formula": "Removable: lim exists ≠ f(a)  |  Jump: LHL ≠ RHL (both finite)  |  Infinite: LHL or RHL = ±∞",
          "note": "Correction to PDF Note p.17 (Anton 1.5 Ex. 35b): For f(x) = (x² − 9) / (x + 3) at x = −3, removable limit is lim_{x→−3}(x − 3) = −6 (not −3)"
        }
      ],
      "problemStatement": "(1) [Anton 1.2 Ex. 13, 29] Evaluate lim_{t→2} (t³ + 3t² − 12t + 4) / (t³ − 4t) and lim_{x→9} (x − 9) / (√x − 3).\n(2) [Anton 1.3 Ex. 25, 26 & 32] Evaluate lim_{x→−∞} √(5x² − 2) / (x + 3), lim_{x→+∞} √(5x² − 2) / (x + 3), and lim_{x→+∞} (√(x² − 3x) − x).\n(3) [Anton 1.6 Ex. 27, 28, 41] Evaluate lim_{θ→0} θ² / (1 − cos θ), lim_{h→0} (1 − cos 3h) / (cos² 5h − 1), and find k ≠ 0 so f(x) = { (tan kx)/x (x < 0); 3x + 2k² (x ≥ 0) } is continuous at x = 0.\n(4) [Anton 1.5 Ex. 47] Use the Intermediate Value Theorem to show x³ + x² − 2x = 1 has a root in [−1, 1].",
      "solutionSteps": [
        {
          "stepTitle": "1. Anton 1.2 Ex. 13 & Ex. 29 (Factoring & Radical Conjugate)",
          "explanation": "Factor out common zero factors before substituting the limit:",
          "equation": "Ex. 13:\n  L = lim_{t→2} (t³ + 3t² − 12t + 4) / (t³ − 4t)\n    = lim_{t→2} [ (t − 2)(t² + 5t − 2) ] / [ t(t − 2)(t + 2) ]\n    = (4 + 10 − 2) / (2 × 4)\n    = 12 / 8\n  ∴  L = 3 / 2\n\nEx. 29:\n  L = lim_{x→9} (x − 9) / (√x − 3)\n    = lim_{x→9} [ (√x − 3)(√x + 3) ] / (√x − 3)\n    = √9 + 3\n  ∴  L = 6"
        },
        {
          "stepTitle": "2. Anton 1.3 Ex. 25, 26 & 32 (Radical Limits at ±∞)",
          "explanation": "Use √(x²) = |x| = −x for x → −∞ and conjugate rationalization for ∞ − ∞:",
          "equation": "Ex. 25 (x → −∞):\n  L = lim_{x→−∞} √(5x² − 2) / (x + 3)\n    = lim_{x→−∞} (|x| · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n    = lim_{x→−∞} (−x · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n    = −√(5 − 0) / (1 + 0)\n  ∴  L = −√5\n\nEx. 26 (x → +∞):\n  L = lim_{x→+∞} (+x · √(5 − 2 / x²)) / (x · (1 + 3 / x))\n  ∴  L = +√5\n\nEx. 32 (Conjugate Rationalization):\n  L = lim_{x→+∞} (√(x² − 3x) − x)\n    = lim_{x→+∞} ((x² − 3x) − x²) / (√(x² − 3x) + x)\n    = lim_{x→+∞} (−3x) / (x · (√(1 − 3 / x) + 1))\n    = −3 / (1 + 1)\n  ∴  L = −3 / 2"
        },
        {
          "stepTitle": "3. Anton 1.6 Ex. 27, 28, 41 & Anton 1.5 Ex. 47 (IVT Proof)",
          "explanation": "Use trigonometric identities and the Intermediate Value Theorem on [−1, 1]:",
          "equation": "Ex. 27:\n  L = lim_{θ→0} θ² / (1 − cos θ)\n    = lim_{θ→0} (θ / sin θ)² · (1 + cos θ)\n    = (1)² · (1 + 1)\n  ∴  L = 2\n\nEx. 28:\n  L = lim_{h→0} (1 − cos 3h) / (cos² 5h − 1)\n    = lim_{h→0} (2 sin²(3h / 2)) / (−sin²(5h))\n    = −2 · (9 / 4) / 25\n  ∴  L = −9 / 50\n\nEx. 41 (Continuity at x = 0):\n  L.H.L. = lim_{x→0⁻} k · (tan kx) / (kx)\n         = k\n  R.H.L. = f(0)\n         = 2k²\n  ⇒  2k² = k  (k ≠ 0)\n  ∴  k = 1 / 2\n\nAnton 1.5 Ex. 47 (IVT):\n  Let  f(x) = x³ + x² − 2x − 1   [Continuous on [−1, 1]]\n  f(−1) = +1 > 0,   f(1) = −1 < 0\n  ∴  Since f(1) < 0 < f(−1), by IVT there exists c ∈ (−1, 1) such that f(c) = 0."
        }
      ]
    },
    {
      "id": "math-m1-b7",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · G. B. Thomas & R. L. Finney (Ch. 1) & M. R. Spiegel (Advanced Calculus)",
      "title": "Squeeze Theorem & Jump Discontinuity",
      "summaryText": "If g(x) ≤ f(x) ≤ h(x) near x = a and lim_{x→a} g(x) = lim_{x→a} h(x) = L, then lim_{x→a} f(x) = L.",
      "memorizeStatements": [
        "If g(x) ≤ f(x) ≤ h(x) near x = a and lim_{x→a} g(x) = lim_{x→a} h(x) = L, then lim_{x→a} f(x) = L."
      ],
      "equations": [
        {
          "label": "Squeeze (Sandwich) Theorem Criterion",
          "formula": "g(x) ≤ f(x) ≤ h(x)  and  lim_{x→a} g(x) = lim_{x→a} h(x) = L   ⇒   lim_{x→a} f(x) = L"
        },
        {
          "label": "Bounded Oscillating Product Rule",
          "formula": "lim_{x→0} xⁿ sin(1 / x) = 0   and   lim_{x→0} xⁿ cos(1 / x) = 0   (for n > 0)"
        }
      ],
      "problemStatement": "(1) [Thomas & Finney] Use the Squeeze Theorem to prove that lim_{x→0} x² sin(1 / x) = 0.\n(2) [Spiegel, Advanced Calculus] Examine the continuity of f(x) = 1 / (1 + 2^{1/x}) at x = 0.\n(3) [F. Ayres, Schaum’s Calculus] Prove using the ε-δ definition that lim_{x→3} x² = 9.",
      "solutionSteps": [
        {
          "stepTitle": "1. Squeeze Theorem Proof: lim_{x→0} x² sin(1 / x) = 0",
          "explanation": "Bound sin(1/x) between −1 and +1 for all x ≠ 0 and multiply by x² > 0:",
          "equation": "For all x ≠ 0:\n  −1 ≤ sin(1 / x) ≤ 1\n  ⇒  −x² ≤ x² sin(1 / x) ≤ x²   [∵ x² > 0]\nTaking limits as x → 0:\n  lim_{x→0} (−x²) = 0   and   lim_{x→0} (+x²) = 0\n  ∴  By the Squeeze Theorem,  lim_{x→0} x² sin(1 / x) = 0"
        },
        {
          "stepTitle": "2. Exponential Jump Discontinuity at x = 0: f(x) = 1 / (1 + 2^{1/x})",
          "explanation": "Evaluate 1/x → −∞ as x → 0⁻ and 1/x → +∞ as x → 0⁺:",
          "equation": "As x → 0⁻:  1 / x → −∞  ⇒  2^{1/x} → 0\n  L.H.L. = lim_{x→0⁻} 1 / (1 + 2^{1/x})\n         = 1 / (1 + 0)\n         = 1\n\nAs x → 0⁺:  1 / x → +∞  ⇒  2^{1/x} → +∞\n  R.H.L. = lim_{x→0⁺} 1 / (1 + 2^{1/x})\n         = 0\n  ∴  Since L.H.L. (1) ≠ R.H.L. (0), f(x) has a finite jump discontinuity at x = 0."
        },
        {
          "stepTitle": "3. Non-Linear ε-δ Proof: lim_{x→3} x² = 9",
          "explanation": "Restrict δ ≤ 1 so that |x + 3| < 7, then choose δ = min(1, ε / 7):",
          "equation": "We have:\n  |x² − 9| = |x + 3| · |x − 3|\nFirst restrict δ ≤ 1:\n  |x − 3| < 1\n  ⇒  2 < x < 4\n  ⇒  5 < x + 3 < 7\n  ⇒  |x + 3| < 7\n\nChoose  δ = min(1, ε / 7) > 0.\nThen whenever 0 < |x − 3| < δ:\n  |x² − 9| = |x + 3| · |x − 3|\n           < 7 · (ε / 7)\n           = ε\n  ∴  lim_{x→3} x² = 9   (with δ = min(1, ε / 7))"
        }
      ]
    }
  ]
};

import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH03: ChapterNote = {
  "id": "math1101-ch03",
  "unitNumber": "Module 03",
  "title": "Mean Value Theorems, Series Expansion and Maxima/Minima",
  "summary": "3.1 Rolle’s Theorem, Mean value Theorem, Taylor’s and Maclaurin’s Theorems, approximation of a function by polynomials and series, indeterminate forms and L’Hospital’s rule. 3.2 Application of derivative for curve tracing, maxima and minima of functions of a single variable.",
  "estimatedMinutes": 75,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m3-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Units 6–7 & Professor’s Rolle’s / MVT Handout (#2, #5, #6, #9)",
      "title": "Rolle’s Theorem, Lagrange’s MVT & Cauchy’s MVT",
      "summaryText": "Rolle’s Theorem: f(a) = f(b) ⇒ f′(c) = 0 for some c ∈ (a, b). Lagrange’s MVT: f′(c) = [f(b) − f(a)] / (b − a) for some c ∈ (a, b).",
      "memorizeStatements": [
        "Rolle’s Theorem: f(a) = f(b) ⇒ f′(c) = 0 for some c ∈ (a, b).",
        "Lagrange’s MVT: f′(c) = [f(b) − f(a)] / (b − a) for some c ∈ (a, b)."
      ],
      "equations": [
        {
          "label": "Rolle’s Theorem Condition & Conclusion",
          "formula": "Continuous on [a, b], Differentiable on (a, b), f(a) = f(b)  ⇒  ∃ c ∈ (a, b) : f′(c) = 0"
        },
        {
          "label": "Lagrange’s Mean Value Theorem (MVT)",
          "formula": "Continuous on [a, b], Differentiable on (a, b)  ⇒  ∃ c ∈ (a, b) : f′(c) = [f(b) − f(a)] / (b − a)"
        },
        {
          "label": "Cauchy’s Generalized Mean Value Theorem",
          "formula": "f′(c) / g′(c) = [f(b) − f(a)] / [g(b) − g(a)]   (where g′(x) ≠ 0 on (a, b))"
        }
      ],
      "problemStatement": "Solve the Professor’s Rolle’s & Mean Value Theorem Handout problems: (1) [Handout #2] Verify Rolle’s Theorem for f(x) = ln[(x² + ab) / (x(a + b))] on [a, b] (0 < a < b). (2) [Handout #5 & #6] Verify Rolle’s Theorem for f(x) = e^x sin x on [0, π] and g(x) = e^{2x}(sin 2x − cos 2x) on [π/8, 5π/8]. (3) [Handout #9] If Rolle’s Theorem holds for f(x) = x³ + ax² + bx on [1, 2] with c = 4/3, find a and b.",
      "solutionSteps": [
        {
          "stepTitle": "1. Handout #2: f(x) = ln[(x² + ab) / (x(a + b))] on [a, b]",
          "explanation": "Verify f(a) = f(b) = 0 and solve f′(c) = 0 for c ∈ (a, b):",
          "equation": "f(x) = ln(x² + ab) − ln x − ln(a + b)\n  f(a) = ln(2ab / (2ab)) = ln 1 = 0\n  f(b) = ln(2ab / (2ab)) = ln 1 = 0\nDifferentiating w.r.t. x:\n  f′(c) = 2c / (c² + ab) − 1 / c\n        = (c² − ab) / [c(c² + ab)] = 0\n  ⇒  c² = ab\n  ∴  c = √(ab) ∈ (a, b)   (Geometric mean of a and b)"
        },
        {
          "stepTitle": "2. Handout #5 & #6: Exponential-Trigonometric Rolle’s Verifications",
          "explanation": "Set f′(c) = 0 inside the open intervals:",
          "equation": "Handout #5:  f(x) = e^x sin x  on [0, π]\n  f(0) = 0,   f(π) = 0\n  f′(c) = e^c(sin c + cos c) = 0\n  ⇒  tan c = −1\n  ∴  c = 3π / 4 ∈ (0, π)\n\nHandout #6:  g(x) = e^{2x}(sin 2x − cos 2x)  on [π / 8, 5π / 8]\n  g′(c) = 4e^{2c} sin 2c = 0\n  ⇒  2c = π\n  ∴  c = π / 2 ∈ (π / 8, 5π / 8)"
        },
        {
          "stepTitle": "3. Handout #9: Finding Unknown Constants a and b",
          "explanation": "Enforce f(1) = f(2) and f′(4/3) = 0:",
          "equation": "f(1) = f(2)\n  ⇒  1 + a + b = 8 + 4a + 2b\n  ⇒  3a + b = −7   --- (1)\nf′(4 / 3) = 0\n  ⇒  3(16 / 9) + 2a(4 / 3) + b = 0\n  ⇒  8a + 3b = −16  --- (2)\nSolving (1) and (2):\n  ∴  a = −5,   b = 8"
        }
      ]
    },
    {
      "id": "math-m3-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q2(a), Q4(a), 2021–22 Q1(b,c), Q4(a), 2020–21 Q2(b)",
      "title": "Mean Value Theorem Proofs & Maclaurin’s Series",
      "summaryText": "Proofs of Rolle’s and Lagrange’s MVT, interval verifications, and Maclaurin expansions of ln(1 + x) and e^x sec x.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "4–5.5 Marks",
      "equations": [
        {
          "label": "Taylor’s & Maclaurin’s Series Formulas",
          "formula": "Taylor: f(x) = ∑ [f^{(n)}(a)/n!](x − a)ⁿ  |  Maclaurin (a = 0): f(x) = f(0) + x f′(0) + (x²/2!)f′′(0) + ···"
        },
        {
          "label": "Standard Maclaurin Expansions (e^x, sin x, cos x, ln(1+x))",
          "formula": "e^x = 1 + x + x²/2! + ···  |  sin x = x − x³/3! + ···  |  cos x = 1 − x²/2! + ···  |  ln(1+x) = x − x²/2 + x³/3 − ···"
        }
      ],
      "problemStatement": "(1) [PUST 2022–23 Q2a — 5.5 Marks] State and prove Rolle’s Theorem. (2) [PUST 2021–22 Q1b — 4.5 Marks] State and prove Lagrange’s Mean Value Theorem. (3) [PUST 2021–22 Q1c & 2020–21 Q2b] Verify Rolle’s Theorem for f(x) = x(x − 3)² on [0, 3] and Lagrange’s MVT for f(x) = x(x − 1)(x − 2) on [0, 1/2]. (4) [PUST 2021–22 Q4a & 2022–23 Q4a] Expand ln(1 + x) and y = e^x sec x (up to x³) by Maclaurin’s theorem.",
      "solutionSteps": [
        {
          "stepTitle": "1. Proofs of Rolle’s Theorem (22–23 Q2a) & Lagrange’s MVT (21–22 Q1b)",
          "explanation": "Use Fermat’s interior extremum theorem for Rolle’s Theorem, and auxiliary function φ(x) = f(x) + Ax for MVT:",
          "equation": "Rolle’s Theorem Proof:\n  • Case 1 (M = m): f(x) is constant on [a, b], so f′(c) = 0 for all c ∈ (a, b).\n  • Case 2 (M > m): Since f(a) = f(b), at least one extremum occurs at an interior point c ∈ (a, b),\n    where Fermat’s Theorem gives:\n  ∴  f′(c) = 0   for some c ∈ (a, b)\n\nLagrange’s MVT Proof:\n  Let  φ(x) = f(x) + Ax  with φ(a) = φ(b)  ⇒  A = −[f(b) − f(a)] / (b − a).\n  Applying Rolle’s Theorem to φ(x) gives φ′(c) = f′(c) + A = 0:\n  ∴  f′(c) = [f(b) − f(a)] / (b − a)   for some c ∈ (a, b)"
        },
        {
          "stepTitle": "2. PUST 2021–22 Q1(c) & PUST 2020–21 Q2(b) Verifications",
          "explanation": "Solve for c strictly inside the open interval (a, b):",
          "equation": "(a) PUST 2021–22 Q1(c):  f(x) = x(x − 3)² = x³ − 6x² + 9x  on [0, 3]\n    f(0) = f(3) = 0\n    f′(c) = 3(c − 1)(c − 3) = 0\n    ∴  c = 1 ∈ (0, 3)   [Rolle’s Theorem verified]\n\n(b) PUST 2020–21 Q2(b):  f(x) = x(x − 1)(x − 2) = x³ − 3x² + 2x  on [0, 1 / 2]\n    f(0) = 0,   f(1 / 2) = 3 / 8\n    f′(c) = 3c² − 6c + 2 = (3 / 8) / (1 / 2) = 3 / 4\n    ⇒  12c² − 24c + 5 = 0\n    ∴  c = (6 − √21) / 6 ≈ 0.236 ∈ (0, 1 / 2)   [MVT verified]"
        },
        {
          "stepTitle": "3. PUST 2021–22 Q4(a) & 2022–23 Q4(a): Maclaurin Series of ln(1 + x) and e^x sec x",
          "explanation": "Evaluate derivatives at x = 0 and substitute into Maclaurin’s series:",
          "equation": "(a) For f(x) = ln(1 + x):\n    f(0) = 0,  f′(0) = 1,  f′′(0) = −1,  f′′′(0) = 2!,  f^{(iv)}(0) = −3!\n    ∴  ln(1 + x) = x − x² / 2 + x³ / 3 − x⁴ / 4 + ··· + (−1)^{n−1} (xⁿ / n) + ···\n\n(b) For y = e^x sec x:\n    y(0) = 1\n    y₁ = y(1 + tan x)  ⇒  y₁(0) = 1\n    y₂ = y₁(1 + tan x) + y sec²x  ⇒  y₂(0) = 2\n    y₃ = y₂(1 + tan x) + 2y₁ sec²x + 2y sec²x tan x  ⇒  y₃(0) = 4\n    ∴  e^x sec x = 1 + x + x² + (2 / 3)x³ + ···"
        }
      ]
    },
    {
      "id": "math-m3-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q2(c), Q4(b), 2021–22 Q2(c), Q3(c), Q4(b), 2020–21 Q2(c), Q4(a)",
      "title": "L’Hôpital’s Rule for Indeterminate Forms & Extrema",
      "summaryText": "Complete solutions to all PUST L’Hôpital limits (0/0, ∞ − ∞, 1^∞, 0⁰) and polynomial relative extrema & concavity problems.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "4–5 Marks",
      "equations": [
        {
          "label": "L’Hôpital’s Rule & Exponential Indeterminate Forms (0⁰, 1^∞, ∞⁰)",
          "formula": "lim_{x→a} [f(x)/g(x)] = lim_{x→a} [f′(x)/g′(x)]   |   y = [f(x)]^{g(x)} ⇒ lim y = e^{lim [g(x) ln f(x)]}"
        },
        {
          "label": "First & Second Derivative Tests at Critical Point f′(c) = 0",
          "formula": "f′′(c) < 0 ⇒ Local Max  |  f′′(c) > 0 ⇒ Local Min  |  f′′(c) = 0 ⇒ Use 1st-Derivative Sign Chart"
        }
      ],
      "problemStatement": "(1) [PUST 2020–21 Q2c] Evaluate (i) lim_{x→0} (1/x − 1/sin x) and (ii) lim_{x→0} (1 + sin x)^{1/x}. (2) [PUST 2022–23 Q4b & 2021–22 Q4b] Evaluate (i) lim_{x→0} (e^x + e^{-x} − 2 cos x)/(x sin x), (ii) lim_{x→0} (cos x)^{cot²x}, (iii) lim_{x→0} (tan x − x)/(x² tan x), and (iv) lim_{x→π/2} (sin x)^{tan x}. (3) [PUST 2021–22 Q2c, 2022–23 Q2c, 2021–22 Q3c, 2020–21 Q4a] Find relative extrema, inflection points, and intervals of monotonicity/concavity for f(x) = 3x⁵ − 5x³ + 2 and f(x) = x³ − 6x² + 9x + 1.",
      "solutionSteps": [
        {
          "stepTitle": "1. PUST 2020–21 Q2(c) & 2022–23 / 2021–22 Q4(b): L’Hôpital Limits",
          "explanation": "Vertical step-by-step evaluation of all past-paper indeterminate limits:",
          "equation": "2020–21 Q2c(i):\n  L = lim_{x→0} (1 / x − 1 / sin x)\n    = lim_{x→0} (sin x − x) / (x sin x)\n    = lim_{x→0} (cos x − 1) / (sin x + x cos x)\n    = lim_{x→0} (−sin x) / (2 cos x − x sin x)\n  ∴  L = 0\n\n2020–21 Q2c(ii):  y = (1 + sin x)^{1/x}\n  lim_{x→0} ln y = lim_{x→0} ln(1 + sin x) / x\n                 = lim_{x→0} [cos x / (1 + sin x)] / 1\n                 = 1\n  ∴  lim_{x→0} (1 + sin x)^{1/x} = e\n\n2022–23 & 2021–22 Q4b(i)–(iv):\n  (i)   lim_{x→0} (e^x + e^{-x} − 2 cos x) / (x sin x)\n        = lim_{x→0} (e^x + e^{-x} + 2 cos x) / (2 cos x − x sin x)\n        ∴  L = 2\n  (ii)  y = (cos x)^{cot²x}  ⇒  lim_{x→0} ln y = lim_{x→0} (−tan x) / (2 tan x sec²x) = −1 / 2\n        ∴  lim_{x→0} (cos x)^{cot²x} = 1 / √e\n  (iii) lim_{x→0} (tan x − x) / (x² tan x) = lim_{x→0} (sec²x − 1) / (3x²)\n        ∴  L = 1 / 3\n  (iv)  y = (sin x)^{tan x}  ⇒  lim_{x→π/2} ln y = lim_{x→π/2} cot x / (−csc²x) = 0\n        ∴  lim_{x→π/2} (sin x)^{tan x} = 1"
        },
        {
          "stepTitle": "2. PUST 2021–22 Q2(c), 2022–23 Q2(c), 2021–22 Q3(c) & 2020–21 Q4(a): Extrema & Concavity",
          "explanation": "Find critical points f′(x) = 0 and inflection points f′′(x) = 0:",
          "equation": "(a) PUST 2021–22 Q2(c):  f(x) = 3x⁵ − 5x³ + 2\n    f′(x)  = 15x²(x + 1)(x − 1) = 0  ⇒  x = −1, 0, 1\n    f′′(x) = 30x(2x² − 1) = 0        ⇒  Inflection x = −1 / √2,  0,  +1 / √2\n    ∴  Local Max f(−1) = 4,   Local Min f(1) = 0,   Inflection points: x = 0, ±1 / √2\n\n(b) PUST 2022–23 Q2(c):  f(x) = x³ − 6x² + 9x + 1\n    f′(x) = 3(x − 1)(x − 3) = 0,   f′′(x) = 6x − 12\n    ∴  Local Max f(1) = 5,   Local Min f(3) = 1,   Inflection point: (2, 3)\n\n(c) PUST 2021–22 Q3(c) & 2020–21 Q4(a):\n    • For f(x) = 2x³ − 21x² + 36x − 20:\n      ∴  Local Max f(1) = −3,   Local Min f(6) = −128\n    • For f(x) = x⁴ − 4x³ + 10:\n      ∴  Local Min f(3) = −17,   Inflection points: (0, 10) and (2, −6)"
        }
      ]
    },
    {
      "id": "math-m3-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Howard Anton Sec. 3.6 (Ex. 66) & Sec. 9.8–9.9 (Ex. 45)",
      "title": "Indeterminate Parameters & Power Series Convergence",
      "summaryText": "Use the Ratio Test lim_{k→∞} |u_{k+1}/u_k| < 1 for the radius of convergence R, and test both endpoints x = x₀ ± R separately.",
      "memorizeStatements": [
        "Use the Ratio Test lim_{k→∞} |u_{k+1}/u_k| < 1 for the radius of convergence R, and test both endpoints x = x₀ ± R separately."
      ],
      "equations": [
        {
          "label": "Ratio Test for Radius of Convergence R of ∑ c_k (x − a)^k",
          "formula": "lim_{k→∞} |u_{k+1} / u_k| = |x − a| / R < 1   ⇒   Radius R,  check endpoints x = a − R and x = a + R"
        }
      ],
      "problemStatement": "(1) [Anton 3.6 Ex. 66] Find the values of k and l given that lim_{x→0} (k + cos lx) / x² = −4. (2) [Anton 9.8 Ex. 45] Find the radius and interval of convergence of the power series ∑_{k=1}^∞ (−1)^{k+1} (x + 1)^k / k. (3) [Anton 9.7] Expand f(x) = cos x in a Taylor series about a = π / 3.",
      "solutionSteps": [
        {
          "stepTitle": "1. Anton 3.6 Ex. 66: Unknown Parameters k and l",
          "explanation": "Enforce numerator → 0 at x = 0 for finite limit existence:",
          "equation": "Given,  lim_{x→0} (k + cos lx) / x² = −4\nSince denominator x² → 0, numerator must also approach 0:\n  k + cos 0 = 0\n  ⇒  k = −1\nNow apply L’Hôpital’s Rule:\n  lim_{x→0} (−1 + cos lx) / x² = lim_{x→0} (−l sin lx) / (2x)\n                               = −l² / 2 = −4\n  ⇒  l² = 8\n  ∴  k = −1,   l = ±2√2"
        },
        {
          "stepTitle": "2. Anton 9.8 Ex. 45: Radius & Interval of Convergence",
          "explanation": "Apply the Ratio Test and check both endpoints x = −2 and x = 0:",
          "equation": "u_k = (−1)^{k+1} (x + 1)^k / k\nlim_{k→∞} |u_{k+1} / u_k| = lim_{k→∞} [k / (k + 1)] · |x + 1|\n                          = |x + 1| < 1\n⇒  Radius of convergence R = 1,  and  −2 < x < 0\nEndpoint checks:\n  • At x = −2:  ∑ (−1)^{2k+1} / k = −∑ 1 / k   (Diverges, harmonic series)\n  • At x = 0:   ∑ (−1)^{k+1} / k              (Converges, alternating harmonic series)\n  ∴  Radius R = 1,   Interval of Convergence I = (−2, 0]"
        },
        {
          "stepTitle": "3. Taylor Series of f(x) = cos x about a = π / 3",
          "explanation": "Evaluate derivatives of cos x at a = π / 3:",
          "equation": "f(π / 3) = 1 / 2,   f′(π / 3) = −√3 / 2,   f′′(π / 3) = −1 / 2,   f′′′(π / 3) = +√3 / 2\n∴  cos x = 1 / 2 − (√3 / 2)(x − π / 3) − (1 / 4)(x − π / 3)² + (√3 / 12)(x − π / 3)³ + ···"
        }
      ]
    },
    {
      "id": "math-m3-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · J. Edwards (Differential Calculus, Ch. XII) & G. B. Thomas & R. L. Finney",
      "title": "Algebraic Curve Tracing Rules & Classical Curves",
      "summaryText": "Systematic curve tracing using (1) Symmetry, (2) Origin & Tangents at Origin, (3) Intercepts & Asymptotes, and (4) Regions of Exclusion.",
      "memorizeStatements": [
        "Systematic curve tracing using (1) Symmetry, (2) Origin & Tangents at Origin, (3) Intercepts & Asymptotes, and (4) Regions of Exclusion."
      ],
      "equations": [
        {
          "label": "Four-Step Curve Tracing Working Rule",
          "formula": "1. Symmetry (x/y/origin/y=x)  →  2. Origin & Tangents  →  3. Intercepts & Asymptotes  →  4. Excluded Regions"
        }
      ],
      "problemStatement": "Trace the following classical algebraic curves completely: (1) Cissoid of Diocles: y²(2a − x) = x³ (a > 0), and (2) Looping Cubic Curve: a y² = x²(a − x) (a > 0).",
      "solutionSteps": [
        {
          "stepTitle": "1. Cissoid of Diocles: y²(2a − x) = x³ (a > 0)",
          "explanation": "Apply the 4-step curve tracing procedure:",
          "equation": "1. Symmetry: Only even power of y (y²) appears  ⇒  Symmetric about the x-axis.\n2. Origin & Tangent: Passes through (0, 0). Lowest degree terms: 2ay² = 0  ⇒  y = 0, 0\n   ⇒  Origin (0, 0) is a cusp with the x-axis as double tangent.\n3. Asymptote: Coefficient of y² is 2a − x = 0  ⇒  x = 2a is the vertical asymptote.\n4. Excluded Region: y² = x³ / (2a − x) < 0 when x < 0 or x > 2a.\n∴  Symmetric about x-axis, cusp at (0, 0), asymptote x = 2a, exists on 0 ≤ x < 2a"
        },
        {
          "stepTitle": "2. Nodal Cubic Curve: a y² = x²(a − x) (a > 0)",
          "explanation": "Identify the node at (0, 0) and loop between x = 0 and x = a:",
          "equation": "1. Symmetry: Even power of y (y²)  ⇒  Symmetric about the x-axis.\n2. Origin & Tangents: Lowest degree terms a(y² − x²) = 0  ⇒  y = ±x\n   ⇒  Origin (0, 0) is a Node with two distinct tangents y = +x and y = −x.\n3. Intercepts: Meets x-axis at (0, 0) and (a, 0) with vertical tangent at (a, 0).\n4. Region: y² = x²(a − x) / a < 0 for x > a (no curve for x > a).\n∴  Closed loop between x = 0 and x = a, node at (0, 0) with tangents y = ±x"
        }
      ]
    }
  ]
};

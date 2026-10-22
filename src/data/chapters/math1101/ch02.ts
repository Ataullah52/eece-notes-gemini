import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH02: ChapterNote = {
  "id": "math1101-ch02",
  "unitNumber": "Module 02",
  "title": "Differentiability, Successive Differentiations and Leibniz Theorem",
  "summary": "2.1 Differentiability: Elementary properties, geometric interpretation, Absolute maxima and minima. 2.2 Successive differentiations and Leibniz theorem.",
  "estimatedMinutes": 65,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m2-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Unit 5.1 (Standard n-th Derivative Formulas y_n = Dⁿy & Class Problems)",
      "title": "Standard n-th Derivative Formulas",
      "summaryText": "Complete reference table of n-th derivatives and worked solutions for rational partial fractions, trigonometric powers/products, and log-trig differential equations.",
      "table": {
        "caption": "Table 2.1 — Standard n-th Derivative Formulas (y_n = dⁿy / dxⁿ)",
        "headers": [
          "Function y = f(x)",
          "n-th Derivative Formula y_n = Dⁿy"
        ],
        "rows": [
          [
            "y = x^m",
            "y_n = m(m − 1)···(m − n + 1) x^{m−n}. For m ∈ ℕ: D^m(x^m) = m!, and Dⁿ(x^m) = 0 for n > m."
          ],
          [
            "y = (ax + b)^m",
            "y_n = m(m − 1)···(m − n + 1) aⁿ (ax + b)^{m−n}"
          ],
          [
            "y = 1 / (ax + b)",
            "y_n = [(−1)ⁿ · n! · aⁿ] / (ax + b)^{n+1}   (Special case: Dⁿ(1/x) = (−1)ⁿ n! / x^{n+1})"
          ],
          [
            "y = ln(ax + b)",
            "y_n = [(−1)^{n−1} · (n − 1)! · aⁿ] / (ax + b)ⁿ"
          ],
          [
            "y = e^{mx}  /  y = a^{mx}",
            "Dⁿ(e^{mx}) = mⁿ e^{mx}   |   Dⁿ(a^{mx}) = mⁿ (ln a)ⁿ a^{mx}"
          ],
          [
            "y = sin(ax + b)",
            "y_n = aⁿ · sin(ax + b + nπ/2)"
          ],
          [
            "y = cos(ax + b)",
            "y_n = aⁿ · cos(ax + b + nπ/2)"
          ],
          [
            "y = e^{ax} sin(bx + c)",
            "y_n = (a² + b²)^{n/2} · e^{ax} · sin(bx + c + n·tan⁻¹(b/a))"
          ],
          [
            "y = e^{ax} cos(bx + c)",
            "y_n = (a² + b²)^{n/2} · e^{ax} · cos(bx + c + n·tan⁻¹(b/a))"
          ],
          [
            "y = 1 / (x² + a²)",
            "y_n = [(−1)ⁿ · n! / a] · sin^{n+1}θ · sin((n + 1)θ),  where θ = tan⁻¹(a/x)"
          ]
        ]
      },
      "problemStatement": "Find the n-th derivative y_n for: (1) y = x / [(x − 1)(x − 2)(x − 3)], (2) y = sin³x and y = sin x · sin 3x, and (3) if y = a cos(ln x) + b sin(ln x), show that x² y_{n+2} + (2n + 1)x y_{n+1} + (n² + 1)y_n = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Partial Fraction Decomposition: y = x / [(x − 1)(x − 2)(x − 3)]",
          "explanation": "Use the cover-up rule to find A, B, C and apply Dⁿ[1/(x − k)]:",
          "equation": "Let  x / [(x − 1)(x − 2)(x − 3)] = A / (x − 1) + B / (x − 2) + C / (x − 3)\n  For x = 1:  A = 1 / [(1 − 2)(1 − 3)] = +1 / 2\n  For x = 2:  B = 2 / [(2 − 1)(2 − 3)] = −2\n  For x = 3:  C = 3 / [(3 − 1)(3 − 2)] = +3 / 2\n\n⇒  y = 1 / [2(x − 1)] − 2 / (x − 2) + 3 / [2(x − 3)]\n∴  y_n = (−1)ⁿ n! [ 1 / (2(x − 1)^{n+1}) − 2 / (x − 2)^{n+1} + 3 / (2(x − 3)^{n+1}) ]"
        },
        {
          "stepTitle": "2. Trigonometric Reduction: (a) y = sin³x and (b) y = sin x sin 3x",
          "explanation": "Linearize powers and products of sines/cosines before differentiating:",
          "equation": "(a) Given,  y = sin³x\n    ⇒  y = (1 / 4)(3 sin x − sin 3x)   [∵ sin 3x = 3 sin x − 4 sin³x]\n    ∴  y_n = (3 / 4) sin(x + nπ / 2) − (3ⁿ / 4) sin(3x + nπ / 2)\n\n(b) Given,  y = sin x sin 3x\n    ⇒  y = (1 / 2)(cos 2x − cos 4x)   [∵ 2 sin A sin B = cos(A − B) − cos(A + B)]\n    ∴  y_n = (1 / 2)[ 2ⁿ cos(2x + nπ / 2) − 4ⁿ cos(4x + nπ / 2) ]"
        },
        {
          "stepTitle": "3. Class Lecture Problem: y = a cos(ln x) + b sin(ln x)",
          "explanation": "Multiply by x before differentiating a second time:",
          "equation": "Given,  y = a cos(ln x) + b sin(ln x)\n  ⇒  y₁ = [−a sin(ln x) + b cos(ln x)] / x\n  ⇒  x y₁ = −a sin(ln x) + b cos(ln x)\n  ⇒  x y₂ + y₁ = [−a cos(ln x) − b sin(ln x)] / x\n  ⇒  x y₂ + y₁ = −y / x\n  ⇒  x² y₂ + x y₁ + y = 0\nApplying Leibniz’s Theorem (Dⁿ):\n  ∴  x² y_{n+2} + (2n + 1)x y_{n+1} + (n² + 1)y_n = 0"
        }
      ]
    },
    {
      "id": "math-m2-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q1(c) [5.5 Marks], 2021–22 Q2(a) [5 Marks]",
      "title": "Differentiability at a Point & Continuity Relation",
      "summaryText": "f(x) is differentiable at x = a iff L.H.D. = R.H.D. (both finite). Every differentiable function is continuous, but the converse is false.",
      "memorizeStatements": [
        "f(x) is differentiable at x = a iff L.H.D. = R.H.D. (both finite).",
        "Every differentiable function is continuous, but the converse is false."
      ],
      "examYears": [
        "2022–23",
        "2021–22"
      ],
      "marks": "5–5.5 Marks",
      "equations": [
        {
          "label": "Left-Hand & Right-Hand Derivatives at x = a",
          "formula": "Lf′(a) = lim_{h→0⁻} [f(a + h) − f(a)] / h  |  Rf′(a) = lim_{h→0⁺} [f(a + h) − f(a)] / h"
        },
        {
          "label": "Slope of Tangent Line & Non-Differentiable Points",
          "formula": "m_tan = tan θ = f′(a)  |  Fails at: (1) Corner (LHD ≠ RHD), (2) Vertical Tangent (f′ = ±∞), (3) Cusp"
        }
      ],
      "problemStatement": "(1) Prove that differentiability implies continuity. (2) [PUST EECE 2022–23 Q1(c) — 5.5 Marks] Prove that f(x) = |x| is continuous at x = 0, but not differentiable at x = 0. (3) [PUST EECE 2021–22 Q2(a) — 5 Marks] Discuss the continuity and differentiability of f(x) = { 2x (x < 0); 2x² (0 ≤ x < 1); 4 − 2x (x ≥ 1) } at x = 1.",
      "solutionSteps": [
        {
          "stepTitle": "1. Theorem Proof: Differentiability Implies Continuity",
          "explanation": "Assume f′(a) = lim_{x→a} [f(x) − f(a)] / (x − a) exists finitely:",
          "equation": "lim_{x→a} [f(x) − f(a)]\n  = lim_{x→a} [ ((f(x) − f(a)) / (x − a)) · (x − a) ]\n  = [ lim_{x→a} (f(x) − f(a)) / (x − a) ] · [ lim_{x→a} (x − a) ]\n  = f′(a) · 0\n  = 0\n⇒  lim_{x→a} f(x) = f(a)\n∴  Every function differentiable at x = a is continuous at x = a."
        },
        {
          "stepTitle": "2. PUST EECE 2022–23 Q1(c) [5.5 Marks]: f(x) = |x| at x = 0",
          "explanation": "Test continuity and one-sided derivatives at x = 0:",
          "equation": "Step 1 (Continuity at x = 0):\n  f(0) = 0\n  L.H.L. = lim_{x→0⁻} (−x)\n         = 0\n  R.H.L. = lim_{x→0⁺} (+x)\n         = 0\n  Since L.H.L. = R.H.L. = f(0) = 0,  f(x) = |x| is continuous at x = 0.\n\nStep 2 (Differentiability at x = 0):\n  L.H.D. = lim_{h→0⁻} [f(0 + h) − f(0)] / h\n         = lim_{h→0⁻} (−h) / h\n         = −1\n  R.H.D. = lim_{h→0⁺} [f(0 + h) − f(0)] / h\n         = lim_{h→0⁺} (+h) / h\n         = +1\n  ∴  Since L.H.D. (−1) ≠ R.H.D. (+1), f(x) = |x| is continuous but not differentiable at x = 0."
        },
        {
          "stepTitle": "3. PUST EECE 2021–22 Q2(a) [5 Marks]: Piecewise Continuity & Differentiability at x = 1",
          "explanation": "Evaluate L.H.L., R.H.L., L.H.D., and R.H.D. at x = 1:",
          "equation": "Step 1 (Continuity at x = 1):\n  f(1) = 4 − 2(1)\n       = 2\n  L.H.L. = lim_{x→1⁻} (2x²)\n         = 2\n  R.H.L. = lim_{x→1⁺} (4 − 2x)\n         = 2\n  Since L.H.L. = R.H.L. = f(1) = 2,  f(x) is continuous at x = 1.\n\nStep 2 (Differentiability at x = 1):\n  L.H.D. = lim_{h→0⁻} [2(1 + h)² − 2] / h\n         = lim_{h→0⁻} (4h + 2h²) / h\n         = 4\n  R.H.D. = lim_{h→0⁺} [4 − 2(1 + h) − 2] / h\n         = lim_{h→0⁺} (−2h) / h\n         = −2\n  ∴  f(x) is continuous at x = 1, but not differentiable at x = 1 (∵ L.H.D. = 4 ≠ R.H.D. = −2)."
        }
      ]
    },
    {
      "id": "math-m2-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q2(b) [4.5 Marks], Q4(c) [5 Marks], 2021–22 Q2(b) [5 Marks], 2020–21 Q2(a) [5 Marks]",
      "title": "Leibniz’s Theorem for Successive Differentiation",
      "summaryText": "(uv)_n = u_n v + ⁿC₁ u_{n−1} v₁ + ⁿC₂ u_{n−2} v₂ + ··· + ⁿC_r u_{n−r} v_r + ··· + u v_n.",
      "memorizeStatements": [
        "(uv)_n = u_n v + ⁿC₁ u_{n−1} v₁ + ⁿC₂ u_{n−2} v₂ + ··· + ⁿC_r u_{n−r} v_r + ··· + u v_n."
      ],
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "4.5–5 Marks",
      "equations": [
        {
          "label": "Leibniz’s Theorem Formula",
          "formula": "(u · v)_n = u_n v + ⁿC₁ u_{n−1} v₁ + ⁿC₂ u_{n−2} v₂ + ··· + ⁿC_r u_{n−r} v_r + ··· + u v_n"
        },
        {
          "label": "Standard Leibniz Term Expansions",
          "formula": "Dⁿ[(1 − x²)y₂] = (1 − x²)y_{n+2} − 2nx y_{n+1} − n(n − 1)y_n  |  Dⁿ[x y₁] = x y_{n+1} + n y_n",
          "note": "Always eliminate radicals by cross-multiplying and squaring y₁ before differentiating for y₂"
        }
      ],
      "problemStatement": "(1) [PUST 2022–23 Q2b] State and prove Leibniz’s Theorem by mathematical induction. (2) [PUST 2020–21 Q2a] If y = sin(m sin⁻¹x), show that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} + (m² − n²)y_n = 0 and find y_n(0). (3) [PUST 2022–23 Q4c] If y = e^{a sin⁻¹x}, show that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + a²)y_n = 0 and find y_n(0). (4) [PUST 2021–22 Q2b] If y = (x² − 1)ⁿ, prove (x² − 1)y_{n+2} + 2xy_{n+1} − n(n + 1)y_n = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Proof of Leibniz’s Theorem by Mathematical Induction (PUST 2022–23 Q2b)",
          "explanation": "Verify base step n = 1, 2 and inductive step n = m → m + 1 using Pascal’s identity:",
          "equation": "Step 1 (Base Step n = 1):\n  (uv)₁ = u₁v + u v₁\n        = u₁v + ¹C₁ u v₁   (Holds for n = 1)\n\nStep 2 (Inductive Hypothesis for n = m):\n  Assume  (uv)_m = u_m v + ^mC₁ u_{m−1} v₁ + ··· + ^mC_r u_{m−r} v_r + ··· + u v_m\n\nStep 3 (Inductive Step for n = m + 1):\n  Differentiating w.r.t. x and using ^mC_{r−1} + ^mC_r = ^{m+1}C_r:\n  (uv)_{m+1} = u_{m+1}v + [^mC₀ + ^mC₁] u_m v₁ + ··· + [^mC_{r−1} + ^mC_r] u_{m+1−r} v_r + ··· + u v_{m+1}\n  ∴  (uv)_{m+1} = u_{m+1}v + ^{m+1}C₁ u_m v₁ + ··· + ^{m+1}C_r u_{m+1−r} v_r + ··· + u v_{m+1}"
        },
        {
          "stepTitle": "2. PUST 2020–21 Q2(a): y = sin(m sin⁻¹x) and evaluation of y_n(0)",
          "explanation": "Cross-multiply √(1 − x²), square both sides, differentiate, and apply Leibniz’s Theorem:",
          "equation": "Given,  y = sin(m sin⁻¹x)\n  ⇒  y₁ = [m cos(m sin⁻¹x)] / √(1 − x²)\n  ⇒  (1 − x²)y₁² = m²(1 − y²)\n  ⇒  (1 − x²)(2y₁y₂) − 2x y₁² = −2m² y y₁\n  ⇒  (1 − x²)y₂ − x y₁ + m² y = 0   [Dividing by 2y₁ ≠ 0]\nApplying Leibniz’s Theorem (Dⁿ):\n  ∴  (1 − x²)y_{n+2} − (2n + 1)x y_{n+1} + (m² − n²)y_n = 0\n\nAt x = 0:  y(0) = 0,  y₁(0) = m,  y₂(0) = 0,  y_{n+2}(0) = (n² − m²) y_n(0)\n  ∴  y_n(0) = 0 (even n);   y_n(0) = m(1² − m²)(3² − m²)···((n − 2)² − m²) (odd n ≥ 3)"
        },
        {
          "stepTitle": "3. PUST 2022–23 Q4(c) & 2021–22 Q2(b): y = e^{a sin⁻¹x} and y = (x² − 1)ⁿ",
          "explanation": "Vertical derivations for exponential inverse-sine and Legendre polynomial forms:",
          "equation": "Problem A (PUST 2022–23 Q4c):  y = e^{a sin⁻¹x}\n  ⇒  (1 − x²)y₁² = a² y²\n  ⇒  (1 − x²)y₂ − x y₁ − a² y = 0\n  ∴  (1 − x²)y_{n+2} − (2n + 1)x y_{n+1} − (n² + a²)y_n = 0\n  ∴  y_n(0) = a²(2² + a²)···((n − 2)² + a²) [even n];   a(1² + a²)···((n − 2)² + a²) [odd n]\n\nProblem B (PUST 2021–22 Q2b):  y = (x² − 1)ⁿ\n  ⇒  y₁ = 2nx(x² − 1)^{n−1}\n  ⇒  (x² − 1)y₁ = 2nxy\n  ⇒  (x² − 1)y₂ − 2(n − 1)xy₁ − 2ny = 0\n  ∴  (x² − 1)y_{n+2} + 2x y_{n+1} − n(n + 1)y_n = 0"
        }
      ]
    },
    {
      "id": "math-m2-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Howard Anton Sec. 2.2 & Sec. 4.4 (Differentiability & Absolute Extrema)",
      "title": "Absolute Maxima and Minima on Closed Intervals",
      "summaryText": "By the Extreme Value Theorem, evaluate f(x) at all critical points c ∈ (a, b) where f′(c) = 0 or f′(c) DNE, and at the endpoints x = a, b.",
      "memorizeStatements": [
        "By the Extreme Value Theorem, evaluate f(x) at all critical points c ∈ (a, b) where f′(c) = 0 or f′(c) DNE, and at the endpoints x = a, b."
      ],
      "equations": [
        {
          "label": "Closed-Interval Absolute Extrema Procedure",
          "formula": "Max / Min on [a, b] = max / min { f(a),  f(c₁), f(c₂), ...,  f(b) }   where f′(c_i) = 0 or DNE"
        }
      ],
      "problemStatement": "(1) [Anton Sec. 4.4] Find the absolute maximum and minimum values of f(x) = 2x³ − 15x² + 36x on the closed interval [1, 5]. (2) [Anton Sec. 4.4] Find the absolute extrema of g(x) = x − 2 sin x on [0, 2π].",
      "solutionSteps": [
        {
          "stepTitle": "1. Polynomial on [1, 5]: f(x) = 2x³ − 15x² + 36x",
          "explanation": "Differentiate f(x), find critical points in (1, 5), and compare values:",
          "equation": "f(x) = 2x³ − 15x² + 36x\n  ⇒  f′(x) = 6x² − 30x + 36\n           = 6(x − 2)(x − 3)\nSetting f′(x) = 0  ⇒  x = 2, 3 ∈ (1, 5)\n\nEvaluating at critical points and endpoints:\n  f(1) = 2(1) − 15(1) + 36(1) = 23\n  f(2) = 2(8) − 15(4) + 36(2) = 28\n  f(3) = 2(27) − 15(9) + 36(3) = 27\n  f(5) = 2(125) − 15(25) + 36(5) = 55\n  ∴  Absolute Maximum = 55 (at x = 5),   Absolute Minimum = 23 (at x = 1)"
        },
        {
          "stepTitle": "2. Trigonometric Function on [0, 2π]: g(x) = x − 2 sin x",
          "explanation": "Solve g′(x) = 1 − 2 cos x = 0 on (0, 2π):",
          "equation": "g′(x) = 1 − 2 cos x = 0\n  ⇒  cos x = 1 / 2\n  ⇒  x = π / 3,   5π / 3\n\nEvaluating g(x) at x = 0, π/3, 5π/3, 2π:\n  g(0) = 0\n  g(π / 3) = π / 3 − √3 ≈ −0.685\n  g(5π / 3) = 5π / 3 + √3 ≈ 6.968\n  g(2π) = 2π ≈ 6.283\n  ∴  Absolute Maximum = 5π / 3 + √3 (at x = 5π / 3),   Absolute Minimum = π / 3 − √3 (at x = π / 3)"
        }
      ]
    },
    {
      "id": "math-m2-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · J. Edwards (Differential Calculus, Ch. III) & F. Ayres (Schaum’s Calculus)",
      "title": "n-th Derivative of Inverse Tangent & Implicit Functions",
      "summaryText": "Using the polar substitution x = a cot θ reduces y = tan⁻¹(x/a) and y = 1/(x² + a²) to compact trigonometric n-th derivatives.",
      "equations": [
        {
          "label": "Polar Substitution for y = tan⁻¹(x / a)",
          "formula": "y_n = [(−1)^{n−1} (n − 1)! / aⁿ] · sinⁿθ · sin(nθ),   where θ = cot⁻¹(x / a)"
        }
      ],
      "problemStatement": "(1) [J. Edwards, Differential Calculus] If y = tan⁻¹(x), prove that (1 + x²)y_{n+2} + 2(n + 1)x y_{n+1} + n(n + 1)y_n = 0 and find y_n(0). (2) [J. Edwards & F. Ayres] If y^{1/m} + y^{−1/m} = 2x, prove that (x² − 1)y_{n+2} + (2n + 1)x y_{n+1} + (n² − m²)y_n = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Edwards’ Derivation for y = tan⁻¹(x)",
          "explanation": "Differentiate y₁ = 1 / (1 + x²) to get (1 + x²)y₁ = 1 and apply Leibniz’s Theorem:",
          "equation": "Given,  y = tan⁻¹(x)\n  ⇒  y₁ = 1 / (1 + x²)\n  ⇒  (1 + x²)y₁ = 1\n  ⇒  (1 + x²)y₂ + 2x y₁ = 0\nApplying Leibniz’s Theorem (Dⁿ):\n  [(1 + x²)y_{n+2} + 2nx y_{n+1} + n(n − 1)y_n] + 2[x y_{n+1} + n y_n] = 0\n  ∴  (1 + x²)y_{n+2} + 2(n + 1)x y_{n+1} + n(n + 1)y_n = 0\n  ∴  At x = 0:  y_n(0) = 0 (even n);   y_n(0) = (−1)^{(n−1)/2} (n − 1)! (odd n)"
        },
        {
          "stepTitle": "2. Implicit Power-Sum Equation: y^{1/m} + y^{−1/m} = 2x",
          "explanation": "Solve the quadratic in y^{1/m} and eliminate the radical:",
          "equation": "Given,  y^{1/m} + 1 / y^{1/m} = 2x\n  ⇒  (y^{1/m})² − 2x(y^{1/m}) + 1 = 0\n  ⇒  y^{1/m} = x ± √(x² − 1)\n  ⇒  y = (x ± √(x² − 1))^m\n  ⇒  y₁ = ±m y / √(x² − 1)\n  ⇒  (x² − 1)y₁² = m² y²\n  ⇒  (x² − 1)y₂ + x y₁ − m² y = 0\n  ∴  (x² − 1)y_{n+2} + (2n + 1)x y_{n+1} + (n² − m²)y_n = 0"
        }
      ]
    }
  ]
};

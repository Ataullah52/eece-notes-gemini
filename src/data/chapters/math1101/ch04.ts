import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH04: ChapterNote = {
  "id": "math1101-ch04",
  "unitNumber": "Module 04",
  "title": "Tangent, Normal, Curvature and Functions of Double Variables",
  "summary": "4.1 Tangent, normal, Asymptote, curvature. 4.2 Function of double variables, domain, continuity, partial derivatives and total derivative, Euler’s Theorem, Jacobian and Hessian.",
  "estimatedMinutes": 75,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m4-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Units 10–13 (Tangents, Asymptotes, Curvature, Euler’s Theorem & Jacobian Formulas)",
      "title": "Tangents, Oblique Asymptotes, Curvature & Euler’s Theorem",
      "summaryText": "Complete reference formulas for tangent/normal lines, oblique asymptotes, Cartesian/Parametric/Polar/Newton curvature ρ, and 1st & 2nd order Euler’s Theorem.",
      "equations": [
        {
          "label": "Equations of Tangent & Normal at P(x₁, y₁)",
          "formula": "Tangent: y − y₁ = m(x − x₁)  |  Normal: y − y₁ = −(1/m)(x − x₁),  where m = (dy/dx)_{(x₁,y₁)}"
        },
        {
          "label": "Oblique Asymptotes y = mx + c of Degree-n Curve",
          "formula": "Slopes m from φ_n(m) = 0  |  Intercept c = − φ_{n−1}(m) / φ′_n(m)   (for non-repeated roots)"
        },
        {
          "label": "Radius of Curvature (Cartesian, Parametric, Polar & Newton’s Origin Formula)",
          "formula": "Cartesian: ρ = (1 + y₁²)^{3/2} / |y₂|  |  Polar: ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|  |  Origin: ρ = lim |x²/(2y)|"
        },
        {
          "label": "Euler’s Theorem (1st & 2nd Order) & Jacobian / Hessian Determinants",
          "formula": "x u_x + y u_y = n u  |  x² u_{xx} + 2xy u_{xy} + y² u_{yy} = n(n − 1)u  |  J = ∂(u,v)/∂(x,y)  |  H = f_{xx}f_{yy} − f_{xy}²"
        }
      ],
      "problemStatement": "[Class Lecture & PUST 2020–21 Q3a] State and prove Euler’s Theorem on homogeneous functions of degree n in two variables x and y for both (i) First-Order Partial Derivatives and (ii) Second-Order Partial Derivatives.",
      "solutionSteps": [
        {
          "stepTitle": "Part (i) — First-Order Proof of Euler’s Theorem",
          "explanation": "Write u = xⁿ φ(y/x) and differentiate partially with respect to x and y:",
          "equation": "Since u(x, y) is homogeneous of degree n, let:\n  u = xⁿ φ(y / x)\nDifferentiating partially w.r.t. x and y:\n  ∂u / ∂x = n x^{n−1} φ(y / x) − x^{n−2} y φ′(y / x)\n  ∂u / ∂y = x^{n−1} φ′(y / x)\nMultiplying by x and y respectively and adding:\n  x(∂u / ∂x) + y(∂u / ∂y) = n xⁿ φ(y / x)\n  ∴  x(∂u / ∂x) + y(∂u / ∂y) = n u"
        },
        {
          "stepTitle": "Part (ii) — Second-Order Extension Proof",
          "explanation": "Differentiate the first-order Euler identity partially with respect to x and y:",
          "equation": "Differentiating x u_x + y u_y = n u w.r.t. x and y:\n  x u_{xx} + y u_{xy} = (n − 1) u_x   --- (1)\n  x u_{xy} + y u_{yy} = (n − 1) u_y   --- (2)\nMultiplying (1) by x and (2) by y and adding:\n  x² u_{xx} + 2xy u_{xy} + y² u_{yy} = (n − 1)(x u_x + y u_y)\n  ∴  x²(∂²u / ∂x²) + 2xy(∂²u / ∂x∂y) + y²(∂²u / ∂y²) = n(n − 1)u"
        }
      ]
    },
    {
      "id": "math-m4-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q3(b,c) [9 Marks], 2021–22 Q3(b) [5 Marks], 2020–21 Q3(c), Q4(b,c) [13.5 Marks]",
      "title": "Implicit Tangents, Oblique Asymptotes & Radius of Curvature",
      "summaryText": "Complete vertical exam solutions for implicit tangent/normal, degree-3 asymptotes, and Cartesian/Astroid/Newton radius of curvature.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "4–5 Marks",
      "problemStatement": "(1) [PUST 2020–21 Q4c] Find the tangent and normal to x² + xy + y² = 7 at (1, 2). (2) [PUST 2022–23 Q3b & 2020–21 Q3c] Find the asymptotes of x³ + y³ − 3axy = 0 and y³ − x²y − 2xy² + 2x³ − 7xy + 3y² + 2x² + 2x + 2y + 1 = 0. (3) [PUST 2022–23 Q3c, 2020–21 Q4b & 2021–22 Q3b] Find ρ at (a/4, a/4) on √x + √y = √a; show ρ = 3(axy)^{1/3} on x^{2/3} + y^{2/3} = a^{2/3}; and find ρ at (a, 0) on xy² = a³ − x³.",
      "solutionSteps": [
        {
          "stepTitle": "1. PUST 2020–21 Q4(c): Tangent & Normal to x² + xy + y² = 7 at (1, 2)",
          "explanation": "Differentiate implicitly with respect to x:",
          "equation": "2x + (x dy / dx + y) + 2y dy / dx = 0\n  ⇒  dy / dx = −(2x + y) / (x + 2y)\n  At (1, 2):  m = −[2(1) + 2] / [1 + 2(2)]\n                = −4 / 5\n  • Tangent:  y − 2 = (−4 / 5)(x − 1)\n  • Normal:   y − 2 = (+5 / 4)(x − 1)\n  ∴  Tangent: 4x + 5y − 14 = 0,   Normal: 5x − 4y + 3 = 0"
        },
        {
          "stepTitle": "2. PUST 2022–23 Q3(b) & 2020–21 Q3(c): Oblique Asymptotes of Cubic Curves",
          "explanation": "Put x = 1, y = m in degree-3 and degree-2 homogeneous parts:",
          "equation": "(a) PUST 2022–23 Q3(b):  x³ + y³ − 3axy = 0\n    φ₃(m) = 1 + m³ = 0  ⇒  m = −1\n    c = −φ₂(m) / φ′₃(m) = −(−3am) / (3m²) = a / m = −a\n    ∴  Asymptote:  x + y + a = 0\n\n(b) PUST 2020–21 Q3(c):  y³ − x²y − 2xy² + 2x³ − 7xy + 3y² + 2x² + 2x + 2y + 1 = 0\n    φ₃(m) = m³ − 2m² − m + 2 = (m − 1)(m + 1)(m − 2) = 0  ⇒  m = 1, −1, 2\n    c = −(3m² − 7m + 2) / (3m² − 4m − 1)  ⇒  c = −1, −2, 0\n    ∴  Asymptotes:  x − y − 1 = 0,   x + y + 2 = 0,   2x − y = 0"
        },
        {
          "stepTitle": "3. PUST 2022–23 Q3(c), 2020–21 Q4(b) & 2021–22 Q3(b): Radius of Curvature ρ",
          "explanation": "Vertical step-by-step curvature derivations:",
          "equation": "(a) PUST 2022–23 Q3(c):  √x + √y = √a  at (a / 4, a / 4)\n    y₁ = −√y / √x = −1,   y₂ = √a / [2(a / 4)^{3/2}] = 4 / a\n    ρ = (1 + 1)^{3/2} / (4 / a)\n    ∴  ρ = a / √2\n\n(b) PUST 2020–21 Q4(b):  x^{2/3} + y^{2/3} = a^{2/3}\n    y₁ = −(y / x)^{1/3},   1 + y₁² = a^{2/3} / x^{2/3},   y₂ = a^{2/3} / (3 x^{4/3} y^{1/3})\n    ∴  ρ = 3(axy)^{1/3}\n\n(c) PUST 2021–22 Q3(b):  xy² = a³ − x³  at (a, 0)\n    Shift origin to (a, 0) via x = a + X, y = Y:\n    (a + X)Y² = −3a²X − 3aX² − X³   [Tangent at new origin is X = 0]\n    ρ = lim_{Y→0} |Y² / (2X)|\n    ∴  ρ = 3a / 2"
        }
      ]
    },
    {
      "id": "math-m4-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 Q3(a) [5 Marks], 2021–22 Q3(a) [4.5 Marks], Q4(c) [4.5 Marks], 2020–21 Q3(b) [4.5 Marks]",
      "title": "Euler’s Homogeneous Theorem & Jacobian Chain Rule",
      "summaryText": "For composite homogeneous functions z = trig(u) of degree n, apply x z_x + y z_y = n z and simplify.",
      "memorizeStatements": [
        "For composite homogeneous functions z = trig(u) of degree n, apply x z_x + y z_y = n z and simplify."
      ],
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "4.5–5 Marks",
      "problemStatement": "(1) [PUST 2021–22 Q3a] If u = sin⁻¹[(x² + y²)/(x + y)], show that x ∂u/∂x + y ∂u/∂y = tan u. (2) [PUST 2022–23 Q3a] If u = tan⁻¹[(x³ + y³)/(x − y)], prove that x ∂u/∂x + y ∂u/∂y = sin 2u. (3) [PUST 2020–21 Q3b] If u = cos⁻¹[(x + y)/(√x + √y)], show that x ∂u/∂x + y ∂u/∂y + (1/2) cot u = 0. (4) [PUST 2021–22 Q4c] If u = x² − 2y² and v = 2x² − y², where x = r cos θ, y = r sin θ, show that ∂(u, v)/∂(r, θ) = 6r³ sin 2θ.",
      "solutionSteps": [
        {
          "stepTitle": "1. PUST 2021–22 Q3(a), 2022–23 Q3(a) & 2020–21 Q3(b): Euler’s Theorem Problems",
          "explanation": "Rewrite as z = trig(u) so z is homogeneous of degree n, then apply x z_x + y z_y = n z:",
          "equation": "(a) PUST 2021–22 Q3(a):  z = sin u = (x² + y²) / (x + y)   [Homogeneous of degree n = 1]\n    x ∂z / ∂x + y ∂z / ∂y = 1 · z\n    ⇒  cos u (x ∂u / ∂x + y ∂u / ∂y) = sin u\n    ∴  x(∂u / ∂x) + y(∂u / ∂y) = tan u\n\n(b) PUST 2022–23 Q3(a):  z = tan u = (x³ + y³) / (x − y)   [Homogeneous of degree n = 2]\n    x ∂z / ∂x + y ∂z / ∂y = 2z\n    ⇒  sec²u (x ∂u / ∂x + y ∂u / ∂y) = 2 tan u\n    ∴  x(∂u / ∂x) + y(∂u / ∂y) = sin 2u\n\n(c) PUST 2020–21 Q3(b):  z = cos u = (x + y) / (√x + √y)   [Homogeneous of degree n = 1 / 2]\n    −sin u (x ∂u / ∂x + y ∂u / ∂y) = (1 / 2) cos u\n    ∴  x(∂u / ∂x) + y(∂u / ∂y) + (1 / 2) cot u = 0"
        },
        {
          "stepTitle": "2. PUST 2021–22 Q4(c): Jacobian Chain Rule Derivation",
          "explanation": "Compute ∂(u, v)/∂(x, y) and polar Jacobian ∂(x, y)/∂(r, θ) = r:",
          "equation": "∂(u, v) / ∂(x, y) = (2x)(−2y) − (−4y)(4x)\n                  = −4xy + 16xy\n                  = 12xy\n∂(x, y) / ∂(r, θ) = r cos²θ + r sin²θ\n                  = r\nBy the Jacobian Chain Rule:\n  ∂(u, v) / ∂(r, θ) = [∂(u, v) / ∂(x, y)] · [∂(x, y) / ∂(r, θ)]\n                    = (12 r cos θ · r sin θ) · r\n  ∴  ∂(u, v) / ∂(r, θ) = 6r³ sin 2θ"
        }
      ]
    },
    {
      "id": "math-m4-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Howard Anton Ch. 13 (Multivariable Limits, Chain Rule & Hessian Extrema)",
      "title": "Two-Variable Limit Path Test & Hessian Extrema",
      "summaryText": "If f(x, y) approaches different values along different paths y = mx as (x, y) → (0, 0), the two-variable limit does not exist.",
      "memorizeStatements": [
        "If f(x, y) approaches different values along different paths y = mx as (x, y) → (0, 0), the two-variable limit does not exist."
      ],
      "equations": [
        {
          "label": "Hessian Determinant & 2D Extrema Classification at f_x = f_y = 0",
          "formula": "H = f_{xx}f_{yy} − (f_{xy})²  |  H > 0, f_{xx} < 0 ⇒ Max  |  H > 0, f_{xx} > 0 ⇒ Min  |  H < 0 ⇒ Saddle"
        }
      ],
      "problemStatement": "(1) [Anton 13.2] Show that lim_{(x,y)→(0,0)} (xy) / (x² + y²) does not exist. (2) [Anton 13.8] Find and classify the stationary points of f(x, y) = x³ + y³ − 3axy (a > 0) using the Hessian determinant.",
      "solutionSteps": [
        {
          "stepTitle": "1. Two-Variable Path Test: lim_{(x,y)→(0,0)} (xy) / (x² + y²)",
          "explanation": "Approach (0, 0) along the family of straight lines y = mx:",
          "equation": "Along path y = mx:\n  lim_{x→0} (x · mx) / (x² + m²x²) = lim_{x→0} m / (1 + m²)\n                                   = m / (1 + m²)\n  • For m = 0 (along x-axis):  Limit = 0\n  • For m = 1 (along y = x):   Limit = 1 / 2\n  ∴  Since the limit depends on the slope m, lim_{(x,y)→(0,0)} (xy) / (x² + y²) does not exist."
        },
        {
          "stepTitle": "2. Worked Hessian Example: Extrema of f(x, y) = x³ + y³ − 3axy (a > 0)",
          "explanation": "Solve f_x = 0, f_y = 0 for stationary points and evaluate H(x, y) = f_{xx}f_{yy} − f_{xy}²:",
          "equation": "f_x = 3x² − 3ay = 0  ⇒  y = x² / a\nf_y = 3y² − 3ax = 0  ⇒  x(x³ − a³) = 0  ⇒  Stationary points: (0, 0) and (a, a)\n\nSecond-order partials:  f_{xx} = 6x,   f_{yy} = 6y,   f_{xy} = −3a\nHessian:  H(x, y) = 36xy − 9a²\n  • At (0, 0):  H(0, 0) = −9a² < 0  ⇒  Saddle Point\n  • At (a, a):  H(a, a) = 27a² > 0 and f_{xx}(a, a) = 6a > 0  ⇒  Local Minimum\n  ∴  (0, 0) is a Saddle Point;   (a, a) gives Local Minimum f_min = −a³"
        }
      ]
    },
    {
      "id": "math-m4-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · J. Edwards (Differential Calculus) & M. R. Spiegel (Advanced Calculus)",
      "title": "Polar Radius of Curvature & Inverse Jacobian Identity",
      "summaryText": "For polar curve r = f(θ), radius of curvature is ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|.",
      "memorizeStatements": [
        "For polar curve r = f(θ), radius of curvature is ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|."
      ],
      "equations": [
        {
          "label": "Inverse Jacobian Product Identity & Implicit Derivative Formula",
          "formula": "[∂(x, y) / ∂(r, θ)] · [∂(r, θ) / ∂(x, y)] = 1   |   F(x, y) = 0  ⇒  dy / dx = − (∂F / ∂x) / (∂F / ∂y)"
        }
      ],
      "problemStatement": "(1) [J. Edwards] Find the radius of curvature at any point (r, θ) on the cardioid r = a(1 + cos θ). (2) [M. R. Spiegel] Verify that J · J′ = 1 for the transformation x = r cos θ, y = r sin θ.",
      "solutionSteps": [
        {
          "stepTitle": "1. Polar Radius of Curvature of Cardioid r = a(1 + cos θ)",
          "explanation": "Compute r₁ = dr/dθ and r₂ = d²r/dθ² and substitute into the polar ρ formula:",
          "equation": "Given,  r = a(1 + cos θ)\n  r₁ = −a sin θ,   r₂ = −a cos θ\n  r² + r₁² = a²(1 + cos θ)² + a² sin²θ\n           = 2a²(1 + cos θ)\n           = 4a² cos²(θ / 2)\n  r² + 2r₁² − r r₂ = 3a²(1 + cos θ)\n                   = 6a² cos²(θ / 2)\n\nSubstituting into ρ = (r² + r₁²)^{3/2} / |r² + 2r₁² − r r₂|:\n  ρ = [8a³ cos³(θ / 2)] / [6a² cos²(θ / 2)]\n  ∴  ρ = (4a / 3) cos(θ / 2) = (2 / 3)√(2ar)"
        },
        {
          "stepTitle": "2. Verification of Inverse Jacobian Identity J · J′ = 1",
          "explanation": "Compute J = ∂(x,y)/∂(r,θ) and J′ = ∂(r,θ)/∂(x,y) from r² = x² + y², θ = tan⁻¹(y/x):",
          "equation": "J = ∂(x, y) / ∂(r, θ) = r cos²θ + r sin²θ = r\nFrom r = √(x² + y²) and θ = tan⁻¹(y / x):\n  r_x = x / r = cos θ,     r_y = y / r = sin θ\n  θ_x = −y / r² = −(sin θ) / r,   θ_y = x / r² = (cos θ) / r\n  J′ = ∂(r, θ) / ∂(x, y) = (cos²θ) / r + (sin²θ) / r = 1 / r\n  ∴  J · J′ = r · (1 / r) = 1"
        }
      ]
    }
  ]
};

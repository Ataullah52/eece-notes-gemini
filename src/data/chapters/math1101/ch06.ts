import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH06: ChapterNote = {
  "id": "math1101-ch06",
  "unitNumber": "Module 06",
  "title": "Conics and System of Circles",
  "summary": "2.1 Conics: The general equation of 2nd degree in two variables and reduction to standard forms, identification of conics, Parabola, Ellipse and Hyperbola: Derivation of standard forms and properties. 2.2 System of circles: Circles and system of circles, General properties, Orthogonality of two circles, limiting circle, radical axis, co-axial circles.",
  "estimatedMinutes": 70,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m6-b1",
      "type": "memorize",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Units 16–18 (Conic Sections Classification, Properties & System of Circles)",
      "title": "Conic Classification, Standard Properties & System of Circles",
      "summaryText": "With Δ ≠ 0: ab − h² > 0 ⇒ Ellipse; ab − h² < 0 ⇒ Hyperbola; ab − h² = 0 ⇒ Parabola. Two circles cut orthogonally iff 2g₁g₂ + 2f₁f₂ = c₁ + c₂.",
      "memorizeStatements": [
        "With Δ ≠ 0: ab − h² > 0 ⇒ Ellipse; ab − h² < 0 ⇒ Hyperbola; ab − h² = 0 ⇒ Parabola.",
        "Two circles cut orthogonally iff 2g₁g₂ + 2f₁f₂ = c₁ + c₂."
      ],
      "equations": [
        {
          "label": "Conic Discriminant Classification (Δ ≠ 0) & Principal Axis Equation",
          "formula": "ab − h² > 0 ⇒ Ellipse  |  ab − h² < 0 ⇒ Hyperbola  |  ab − h² = 0 ⇒ Parabola  |  Axis: (a − λ_i)(x − α) + h(y − β) = 0"
        },
        {
          "label": "Condition for Orthogonal Circles, Radical Axis & Coaxial Family",
          "formula": "Orthogonal: 2g₁g₂ + 2f₁f₂ = c₁ + c₂  |  Radical Axis L ≡ S₁ − S₂ = 0  |  Coaxial Family: S₁ + λL = 0"
        }
      ],
      "table": {
        "caption": "Table 6.1 — Standard Equations & Properties of Parabola, Ellipse & Hyperbola",
        "headers": [
          "Property",
          "Parabola (y² = 4ax)",
          "Ellipse (x²/a² + y²/b² = 1, a > b)",
          "Hyperbola (x²/a² − y²/b² = 1)"
        ],
        "rows": [
          [
            "Eccentricity e",
            "e = 1",
            "e = √(1 − b²/a²) < 1",
            "e = √(1 + b²/a²) > 1"
          ],
          [
            "Vertices",
            "(0, 0)",
            "(±a, 0)",
            "(±a, 0)"
          ],
          [
            "Foci",
            "(a, 0)",
            "(±ae, 0)",
            "(±ae, 0)"
          ],
          [
            "Directrices",
            "x = −a",
            "x = ±a/e",
            "x = ±a/e"
          ],
          [
            "Latus Rectum",
            "4a",
            "2b² / a",
            "2b² / a"
          ],
          [
            "Tangent at (x₁, y₁)",
            "yy₁ = 2a(x + x₁)",
            "xx₁/a² + yy₁/b² = 1",
            "xx₁/a² − yy₁/b² = 1"
          ]
        ]
      }
    },
    {
      "id": "math-m6-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [7 Marks]",
      "title": "Reduction of Central Conics & Parabolas to Standard Form",
      "summaryText": "Complete exam-style vertical derivations for reducing general second-degree equations to canonical hyperbola and parabola forms.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "7 Marks",
      "problemStatement": "(1) [PUST Past Exam — 7 Marks] Reduce 11x² + 24xy + 4y² − 20x − 40y − 5 = 0 to standard form. Identify the conic and find its center, lengths of axes, eccentricity, latus rectum, and equations of the axes. (2) [PUST Past Exam — 7 Marks] Reduce 9x² − 24xy + 16y² − 18x − 101y + 19 = 0 to standard form, and find its vertex, focus, axis, latus rectum, and directrix.",
      "solutionSteps": [
        {
          "stepTitle": "1. Central Conic Reduction: 11x² + 24xy + 4y² − 20x − 40y − 5 = 0",
          "explanation": "Here a = 11, h = 12, b = 4, g = −10, f = −20, c = −5, so ab − h² = 44 − 144 = −100 < 0 (Hyperbola):",
          "equation": "Step 1 (Center (α, β) and New Constant c′):\n  11α + 12β − 10 = 0   and   3α + β = 5\n  ⇒  Center (α, β) = (2, −1),   c′ = gα + fβ + c = −5\n\nStep 2 (Characteristic Roots & Standard Form):\n  λ² − 15λ − 100 = 0  ⇒  λ₁ = 20,   λ₂ = −5\n  ⇒  20X² − 5Y² − 5 = 0\n  ∴  X² / (1 / 4) − Y² / 1 = 1   [Hyperbola with A = 1 / 2, B = 1]\n\nStep 3 (Axes, Eccentricity & Latus Rectum):\n  • Eccentricity e = √(1 + B² / A²) = √5;   Latus rectum = 2B² / A = 4\n  ∴  Center: (2, −1),  e = √5,  LR = 4,  Axes: 3x − 4y − 10 = 0 and 4x + 3y − 5 = 0"
        },
        {
          "stepTitle": "2. Parabola Reduction (ab − h² = 0): 9x² − 24xy + 16y² − 18x − 101y + 19 = 0",
          "explanation": "Write (3x − 4y + λ)² = (6λ + 18)x + (101 − 8λ)y + (λ² − 19) and enforce orthogonality:",
          "equation": "For perpendicular lines:\n  3(6λ + 18) − 4(101 − 8λ) = 0\n  ⇒  50λ = 350\n  ⇒  λ = 7\nNormalizing by 5² = 25:\n  [(3x − 4y + 7) / 5]² = 3 · [(4x + 3y + 2) / 5]\n  ∴  Y² = 3X   (Parabola with 4a = 3,  a = 3 / 4)\n  ∴  Vertex: (−29 / 25, 22 / 25),   Focus: (−14 / 25, 43 / 100),   Directrix: 16x + 12y + 23 = 0"
        }
      ]
    },
    {
      "id": "math-m6-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]",
      "title": "Orthogonal Circles, Radical Axis & Limiting Points",
      "summaryText": "Solve 2gg_i + 2ff_i = c + c_i for the orthogonal circle, and set radius R = 0 in S₁ + λ(S₁ − S₂) = 0 for limiting points.",
      "memorizeStatements": [
        "Solve 2gg_i + 2ff_i = c + c_i for the orthogonal circle, and set radius R = 0 in S₁ + λ(S₁ − S₂) = 0 for limiting points."
      ],
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "5 Marks",
      "problemStatement": "(1) [PUST Past Exam — 5 Marks] Find the equation of the circle that cuts orthogonally the three circles x² + y² + 2x + 17y + 4 = 0, x² + y² + 7x + 6y + 11 = 0, and x² + y² − x + 22y + 3 = 0. (2) [PUST Past Exam — 5 Marks] Find the radical axis and the limiting points of the coaxial system determined by S₁ ≡ x² + y² + 2x + 4y + 7 = 0 and S₂ ≡ x² + y² + 4x + 2y + 5 = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Circle Orthogonal to Three Given Circles",
          "explanation": "Let the required circle be x² + y² + 2gx + 2fy + c = 0 and apply 2gg_i + 2ff_i = c + c_i:",
          "equation": "2g + 17f − c = 4    --- (1)\n7g + 6f  − c = 11   --- (2)\n−g + 22f − c = 3    --- (3)\nSubtracting (1) from (2), and (3) from (1):\n  5g − 11f = 7   and   3g − 5f = 1\n  ⇒  g = −3,   f = −2,   c = −44\n  ∴  x² + y² − 6x − 4y − 44 = 0"
        },
        {
          "stepTitle": "2. Radical Axis & Limiting Points of a Coaxial System",
          "explanation": "Form S₁ + 2λ(S₁ − S₂)/2 = 0 and set radius R² = 0:",
          "equation": "Radical axis:  S₁ − S₂ = 0  ⇒  L ≡ x − y − 1 = 0\nCoaxial family S₁ + 2λL = 0:\n  x² + y² + 2(1 + λ)x + 2(2 − λ)y + (7 − 2λ) = 0\n  Center C = (−(1 + λ), −(2 − λ)),   Radius R² = 2λ² − 2 = 0\n  ⇒  λ = ±1\n  ∴  Radical Axis: x − y − 1 = 0;   Limiting Points: (−2, −1) and (0, −3)"
        }
      ]
    },
    {
      "id": "math-m6-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Rahman & Bhattacharjee (Ch. 4) & Howard Anton (Sec. 10.6)",
      "title": "Ellipse Reduction & Polar Equations of Conics",
      "summaryText": "When ab − h² > 0 and λ₁, λ₂ have the same sign opposite to c′, the second-degree equation reduces to a real ellipse X²/A² + Y²/B² = 1.",
      "memorizeStatements": [
        "When ab − h² > 0 and λ₁, λ₂ have the same sign opposite to c′, the second-degree equation reduces to a real ellipse X²/A² + Y²/B² = 1."
      ],
      "equations": [
        {
          "label": "Polar Equation of a Conic (Focus at the Pole)",
          "formula": "l / r = 1 + e cos θ   (where l = ed is the semi-latus rectum)"
        }
      ],
      "problemStatement": "(1) [Rahman & Bhattacharjee] Reduce 5x² − 6xy + 5y² + 18x − 14y + 9 = 0 to standard form and find its center, lengths of axes, eccentricity, and equations of axes. (2) [Anton 10.6] Identify and find the directrix and vertices of the polar conic r = 6 / (2 + cos θ).",
      "solutionSteps": [
        {
          "stepTitle": "1. Ellipse Reduction: 5x² − 6xy + 5y² + 18x − 14y + 9 = 0",
          "explanation": "Here a = 5, h = −3, b = 5, g = 9, f = −7, c = 9, so ab − h² = 25 − 9 = 16 > 0 (Ellipse):",
          "equation": "Center equations:\n  5α − 3β + 9 = 0   and   −3α + 5β − 7 = 0\n  ⇒  Center (α, β) = (−3 / 2, 1 / 2)\n  c′ = gα + fβ + c = 9(−3 / 2) + (−7)(1 / 2) + 9 = −8\nCharacteristic equation:\n  λ² − 10λ + 16 = 0  ⇒  λ₁ = 2,   λ₂ = 8\n  ⇒  2X² + 8Y² − 8 = 0\n  ∴  X² / 4 + Y² / 1 = 1   (Ellipse with A = 2, B = 1, e = √3 / 2)"
        },
        {
          "stepTitle": "2. Polar Conic Analysis: r = 6 / (2 + cos θ)",
          "explanation": "Divide numerator and denominator by 2 to match l / r = 1 + e cos θ:",
          "equation": "r = 3 / (1 + (1 / 2) cos θ)\n  ⇒  Eccentricity e = 1 / 2 < 1  (Ellipse),   l = ed = 3  ⇒  Directrix distance d = 6\n  Vertices at θ = 0 and θ = π:\n    r(0) = 3 / (3 / 2) = 2,   r(π) = 3 / (1 / 2) = 6\n  ∴  Ellipse with e = 1 / 2,  major axis 2a = 2 + 6 = 8,  directrix x = 6"
        }
      ]
    },
    {
      "id": "math-m6-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · E. H. Askwith (Analytic Geometry of Conic Sections, Ch. V)",
      "title": "Radical Center & Coaxial System from Limiting Points",
      "summaryText": "If (α₁, β₁) and (α₂, β₂) are the limiting points (point-circles R = 0) of a coaxial system, the system is S₁ + λS₂ = 0 where S_i = (x − α_i)² + (y − β_i)² = 0.",
      "memorizeStatements": [
        "If (α₁, β₁) and (α₂, β₂) are the limiting points (point-circles R = 0) of a coaxial system, the system is S₁ + λS₂ = 0 where S_i = (x − α_i)² + (y − β_i)² = 0."
      ],
      "problemStatement": "(1) [E. H. Askwith] Find the Radical Center of the three circles x² + y² − 2x − 4y + 1 = 0, x² + y² − 4x − 2y + 1 = 0, and x² + y² + 2x − 6y − 3 = 0. (2) Find the equation of the coaxial system of circles whose limiting points are (1, −1) and (3, 1).",
      "solutionSteps": [
        {
          "stepTitle": "1. Radical Center of Three Given Circles",
          "explanation": "Find the intersection of the radical axes S₁ − S₂ = 0 and S₂ − S₃ = 0:",
          "equation": "Radical axis S₁ − S₂ = 0:\n  2x − 2y = 0  ⇒  x = y\nRadical axis S₂ − S₃ = 0:\n  −6x + 4y + 4 = 0  ⇒  3x − 2y = 2\nSubstituting y = x gives:\n  3x − 2x = 2  ⇒  x = 2,   y = 2\n  ∴  Radical Center = (2, 2)"
        },
        {
          "stepTitle": "2. Coaxial System Given Two Limiting Points (1, −1) and (3, 1)",
          "explanation": "Treat each limiting point as a point-circle of zero radius:",
          "equation": "Point-circle S₁ at (1, −1):  (x − 1)² + (y + 1)² = x² + y² − 2x + 2y + 2 = 0\nPoint-circle S₂ at (3, 1):   (x − 3)² + (y − 1)² = x² + y² − 6x − 2y + 10 = 0\nRadical axis S₁ − S₂ = 0:\n  4x + 4y − 8 = 0  ⇔  x + y − 2 = 0\n  ∴  Coaxial Family: x² + y² − 2x + 2y + 2 + λ(x + y − 2) = 0"
        }
      ]
    }
  ]
};

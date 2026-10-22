import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH05: ChapterNote = {
  "id": "math1101-ch05",
  "unitNumber": "Module 05",
  "title": "Co-ordinate Systems and Pair of Straight Lines",
  "summary": "1.1 Co-ordinate systems: Cartesian co-ordinates, Polar co-ordinates, Parameters, Standard Equations in different co-ordinates systems and their parametric representations, Transformation of co-ordinates. 1.2 Pair of straight lines: Condition for a general equation of 2nd degree in two variables to represent pair of straight lines, Properties of pair of straight lines.",
  "estimatedMinutes": 65,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m5-b1",
      "type": "definition",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Units 14–15 (2D Coordinate Systems, Axis Transformations & Pair of Straight Lines)",
      "title": "2D Coordinate Transformations & Pair of Straight Lines",
      "summaryText": "Translation to center (α, β) removes first-degree terms; rotation by tan 2θ = 2h/(a − b) removes the xy-term. S = 0 represents a pair of lines iff Δ = abc + 2fgh − af² − bg² − ch² = 0.",
      "memorizeStatements": [
        "Translation to center (α, β) removes first-degree terms; rotation by tan 2θ = 2h/(a − b) removes the xy-term.",
        "S = 0 represents a pair of lines iff Δ = abc + 2fgh − af² − bg² − ch² = 0."
      ],
      "equations": [
        {
          "label": "Cartesian ↔ Polar Conversion & Polar Distance Formula",
          "formula": "x = r cos θ, y = r sin θ, r² = x² + y²  |  d = √[r₁² + r₂² − 2r₁r₂ cos(θ₁ − θ₂)]"
        },
        {
          "label": "Translation to (α, β) & Rotation Invariants",
          "formula": "ax + hy + g = 0, hx + by + f = 0  |  c′ = gα + fβ + c  |  λ² − (a + b)λ + (ab − h²) = 0"
        },
        {
          "label": "Angle θ & Bisectors of Homogeneous Pair ax² + 2hxy + by² = 0",
          "formula": "tan θ = 2√(h² − ab) / |a + b|  (⊥ ⇔ a + b = 0; ∥ ⇔ h² = ab)  |  Bisectors: (x² − y²)/(a − b) = xy/h"
        },
        {
          "label": "Condition for General 2nd-Degree Equation to Represent Pair of Lines",
          "formula": "Δ = abc + 2fgh − af² − bg² − ch² = 0   |   Intersection: ((hf−bg)/(ab−h²), (gh−af)/(ab−h²))"
        }
      ],
      "table": {
        "caption": "Table 5.1 — Summary of 2D Coordinate Transformations & Line Pair Conditions",
        "headers": [
          "Operation / Concept",
          "Governing Formula",
          "Geometric Purpose"
        ],
        "rows": [
          [
            "1. Translation of Origin to (α, β)",
            "x = X + α,  y = Y + β",
            "Eliminates linear terms 2gx and 2fy when ½∂F/∂x = ½∂F/∂y = 0."
          ],
          [
            "2. Rotation of Axes by Angle θ",
            "x = x′cos θ − y′sin θ,  y = x′sin θ + y′cos θ",
            "Eliminates cross-product term 2hxy when tan 2θ = 2h / (a − b)."
          ],
          [
            "3. Homogeneous Pair ax² + 2hxy + by² = 0",
            "m₁ + m₂ = −2h / b,  m₁m₂ = a / b",
            "Pair of straight lines passing through the origin (0, 0)."
          ],
          [
            "4. Homogenization with lx + my + n = 0",
            "Replace degree-1 & degree-0 terms using 1 = (lx + my) / (−n)",
            "Gives the pair of lines joining (0, 0) to the curve-line intersections."
          ]
        ]
      }
    },
    {
      "id": "math-m5-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23 & 2020–21 Semester Final Exams [7 Marks]",
      "title": "Removing First-Degree & Cross-Product Terms via Axis Transformation",
      "summaryText": "Complete vertical exam solutions for removing linear terms via center translation and removing the xy-term via orthogonal invariants.",
      "examYears": [
        "2022–23",
        "2020–21"
      ],
      "marks": "7 Marks",
      "problemStatement": "(1) [PUST Past Exam — 7 Marks] Transform the equation 17x² + 18xy − 7y² − 16x − 32y − 18 = 0 to one in which there are no first-degree terms and no xy-term. (2) [PUST Past Exam — 5 Marks] Transform x² + 4xy + y² − 2x + 2y − 6 = 0 to standard form without linear or xy-terms.",
      "solutionSteps": [
        {
          "stepTitle": "1. PUST Exam Problem: 17x² + 18xy − 7y² − 16x − 32y − 18 = 0",
          "explanation": "Compare with ax² + 2hxy + by² + 2gx + 2fy + c = 0: a = 17, h = 9, b = −7, g = −8, f = −16, c = −18:",
          "equation": "Step 1 (Translation of Origin to (α, β) to Remove First-Degree Terms):\n  17α + 9β − 8 = 0\n  9α − 7β − 16 = 0\n  ⇒  α = 1,   β = −1\n  New constant term:\n    c′ = gα + fβ + c\n       = (−8)(1) + (−16)(−1) − 18\n       = −10\n  Translated equation:  17X² + 18XY − 7Y² − 10 = 0\n\nStep 2 (Rotation of Axes to Remove the XY-Term):\n  a′ + b′ = a + b = 17 − 7 = 10\n  a′b′ = ab − h² = (17)(−7) − 9² = −200\n  Characteristic quadratic:\n    λ² − 10λ − 200 = 0\n    ⇒  (λ − 20)(λ + 10) = 0\n    ⇒  a′ = 20,   b′ = −10\n  Substituting into a′x′² + b′y′² + c′ = 0:\n    20x′² − 10y′² − 10 = 0\n  ∴  2x′² − y′² = 1"
        },
        {
          "stepTitle": "2. PUST Exam Problem: x² + 4xy + y² − 2x + 2y − 6 = 0",
          "explanation": "Here a = 1, h = 2, b = 1, g = −1, f = 1, c = −6:",
          "equation": "Center equations:\n  α + 2β − 1 = 0   and   2α + β + 1 = 0\n  ⇒  α = −1,   β = 1\nNew constant:\n  c′ = gα + fβ + c = (−1)(−1) + (1)(1) − 6 = −4\nCharacteristic equation:\n  λ² − 2λ − 3 = 0\n  ⇒  λ = 3, −1\n  ∴  3x′² − y′² = 4"
        }
      ]
    },
    {
      "id": "math-m5-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]",
      "title": "General Pair of Straight Lines & Homogenization",
      "summaryText": "Verify Δ = 0, factor into separate linear equations, find intersection and angle θ, and homogenize curve-line intersections.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "5 Marks",
      "problemStatement": "(1) [PUST Past Exam — 5 Marks] Prove that 2x² + 7xy + 3y² + 8x + 14y + 8 = 0 represents a pair of straight lines. Find their separate equations, point of intersection, and angle between them. (2) [PUST Past Exam — 5 Marks] Show that the straight lines joining the origin to the points of intersection of the circle x² + y² = a² and the line lx + my = 1 are at right angles if a²(l² + m²) = 2.",
      "solutionSteps": [
        {
          "stepTitle": "1. General Pair of Straight Lines: 2x² + 7xy + 3y² + 8x + 14y + 8 = 0",
          "explanation": "Identify a = 2, h = 7/2, b = 3, g = 4, f = 7, c = 8 and verify Δ = 0:",
          "equation": "Step 1 (Testing Δ = 0):\n  Δ = abc + 2fgh − af² − bg² − ch²\n    = 48 + 196 − 98 − 48 − 98\n    = 0\n\nStep 2 (Separate Equations & Point of Intersection):\n  2x² + 7xy + 3y² + 8x + 14y + 8 ≡ (2x + y + 4)(x + 3y + 2) = 0\n  Solving 2x + y + 4 = 0 and x + 3y + 2 = 0 gives (−2, 0).\n  ∴  Lines: 2x + y + 4 = 0 and x + 3y + 2 = 0;   Intersection: (−2, 0)\n\nStep 3 (Angle θ Between the Lines):\n  tan θ = 2√(h² − ab) / |a + b|\n        = [2 · (5 / 2)] / (2 + 3)\n        = 1\n  ∴  θ = 45°"
        },
        {
          "stepTitle": "2. Homogenization Proof: Circle x² + y² = a² and Line lx + my = 1",
          "explanation": "Homogenize x² + y² = a²(1)² using lx + my = 1 and enforce a + b = 0:",
          "equation": "Homogenizing x² + y² = a² with lx + my = 1:\n  x² + y² = a²(lx + my)²\n  ⇒  (1 − a²l²)x² − 2a²lm xy + (1 − a²m²)y² = 0\nFor perpendicular lines through the origin, (coeff. of x²) + (coeff. of y²) = 0:\n  (1 − a²l²) + (1 − a²m²) = 0\n  ∴  a²(l² + m²) = 2"
        }
      ]
    },
    {
      "id": "math-m5-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Rahman & Bhattacharjee (Co-ordinate Geometry, Ch. 2)",
      "title": "Angle Bisectors & Perpendicular Line Pairs Through Origin",
      "summaryText": "The pair of lines through the origin perpendicular to ax² + 2hxy + by² = 0 is bx² − 2hxy + ay² = 0, and the angle bisectors (x² − y²)/(a − b) = xy/h are always orthogonal.",
      "memorizeStatements": [
        "The pair of lines through the origin perpendicular to ax² + 2hxy + by² = 0 is bx² − 2hxy + ay² = 0, and the angle bisectors (x² − y²)/(a − b) = xy/h are always orthogonal."
      ],
      "problemStatement": "(1) [Rahman & Bhattacharjee] Prove that the bisectors of the angles between the lines ax² + 2hxy + by² = 0 are given by (x² − y²)/(a − b) = xy/h and are always mutually perpendicular. (2) Find the equation of the pair of straight lines through the origin perpendicular to 5x² − 8xy + 3y² = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Equation & Orthogonality of Angle Bisectors",
          "explanation": "Let ax² + 2hxy + by² ≡ b(y − m₁x)(y − m₂x) with m₁ + m₂ = −2h/b, m₁m₂ = a/b:",
          "equation": "Equating perpendicular distances to y − m₁x = 0 and y − m₂x = 0 gives:\n  h(x² − y²) − (a − b)xy = 0\n  ⇔  (x² − y²) / (a − b) = xy / h\nHere (coeff. of x²) + (coeff. of y²) = h + (−h) = 0.\n∴  Bisectors: (x² − y²) / (a − b) = xy / h   (Always mutually perpendicular)"
        },
        {
          "stepTitle": "2. Pair of Lines Through Origin Perpendicular to 5x² − 8xy + 3y² = 0",
          "explanation": "Interchange a and b and reverse the sign of 2h (bx² − 2hxy + ay² = 0):",
          "equation": "Given pair:  5x² − 8xy + 3y² = 0   (a = 5, 2h = −8, b = 3)\nReplacing (a, 2h, b) by (b, −2h, a):\n  ∴  3x² + 8xy + 5y² = 0"
        }
      ]
    },
    {
      "id": "math-m5-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · E. H. Askwith (Analytic Geometry of Conic Sections, Ch. III)",
      "title": "Triangle Area & Distance Between Parallel Line Pairs",
      "summaryText": "The area of the triangle formed by the pair of lines ax² + 2hxy + by² = 0 and the line lx + my + n = 0 is Δ = n²√(h² − ab) / |am² − 2hlm + bl²|.",
      "memorizeStatements": [
        "The area of the triangle formed by the pair of lines ax² + 2hxy + by² = 0 and the line lx + my + n = 0 is Δ = n²√(h² − ab) / |am² − 2hlm + bl²|."
      ],
      "equations": [
        {
          "label": "Triangle Area & Parallel Line-Pair Distance Formulas",
          "formula": "Area = n²√(h² − ab) / |am² − 2hlm + bl²|   |   Parallel Distance (h² = ab): d = 2√[(g² − ac) / (a(a + b))]"
        }
      ],
      "problemStatement": "(1) [E. H. Askwith] Find the area of the triangle formed by the lines x² − 4xy + y² = 0 and the line x + y − 2 = 0. (2) Find the distance between the parallel straight lines 9x² − 24xy + 16y² − 12x + 16y − 12 = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Area of Triangle Formed by x² − 4xy + y² = 0 and x + y − 2 = 0",
          "explanation": "Here a = 1, h = −2, b = 1 and l = 1, m = 1, n = −2:",
          "equation": "√(h² − ab) = √(4 − 1) = √3\nam² − 2hlm + bl² = 1(1)² − 2(−2)(1)(1) + 1(1)² = 6\nArea = n² √(h² − ab) / |am² − 2hlm + bl²|\n     = (−2)² √3 / 6\n∴  Area = (2√3) / 3 = 2 / √3  sq. units"
        },
        {
          "stepTitle": "2. Distance Between Parallel Pair 9x² − 24xy + 16y² − 12x + 16y − 12 = 0",
          "explanation": "Factor as a quadratic in (3x − 4y) and apply the parallel line distance formula:",
          "equation": "(3x − 4y)² − 4(3x − 4y) − 12 = 0\n  ⇒  (3x − 4y − 6)(3x − 4y + 2) = 0\nDistance between 3x − 4y − 6 = 0 and 3x − 4y + 2 = 0:\n  d = |−6 − 2| / √(3² + (−4)²)\n  ∴  d = 8 / 5  units"
        }
      ]
    }
  ]
};

import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH07: ChapterNote = {
  "id": "math1101-ch07",
  "unitNumber": "Module 07",
  "title": "3D Co-ordinate Systems, Planes and Straight Lines",
  "summary": "3.1 Co-ordinate systems: Cartesian, Cylindrical and Spherical systems, Direction cosines and direction ratios, Projection, Angle between two lines. 3.2 Planes and Straight lines: Planes, different form of planes and conversions, angle between two planes, Lines, different form of lines and conversions, angle between two lines, angle between a line and a plane, Plane containing a line, plane containing two lines, shortest distance between two lines.",
  "estimatedMinutes": 70,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m7-b1",
      "type": "memorize",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Units 19–21 (3D Coordinate Systems, Direction Cosines/Ratios, Planes & Skew Lines)",
      "title": "3D Coordinate Conversions, Direction Cosines & Plane/Line Formulas",
      "summaryText": "Direction cosines l = cos α, m = cos β, n = cos γ satisfy l² + m² + n² = 1. Two lines in 3D are coplanar iff their 3×3 determinant vanishes.",
      "memorizeStatements": [
        "Direction cosines l = cos α, m = cos β, n = cos γ satisfy l² + m² + n² = 1.",
        "Two lines in 3D are coplanar iff their 3×3 determinant vanishes."
      ],
      "equations": [
        {
          "label": "Direction Cosines Identity & Normalization from Direction Ratios (a, b, c)",
          "formula": "l² + m² + n² = 1   |   l = ±a / √(a² + b² + c²),  m = ±b / √(a² + b² + c²),  n = ±c / √(a² + b² + c²)"
        },
        {
          "label": "Projection of Segment PQ on Line (l, m, n) & Angle θ Between Two Lines",
          "formula": "Proj = l(x₂ − x₁) + m(y₂ − y₁) + n(z₂ − z₁)   |   cos θ = l₁l₂ + m₁m₂ + n₁n₂"
        },
        {
          "label": "Equations of a Plane & Perpendicular Distance from (x₁, y₁, z₁)",
          "formula": "Intercept Form: x/a + y/b + z/c = 1  |  Intersection: P₁ + λP₂ = 0  |  d = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²)"
        },
        {
          "label": "Symmetric Line Equation & Coplanarity Determinant",
          "formula": "(x − x₁)/l = (y − y₁)/m = (z − z₁)/n = r   |   Coplanar iff det[[x₂−x₁, y₂−y₁, z₂−z₁], [l₁, m₁, n₁], [l₂, m₂, n₂]] = 0"
        }
      ],
      "table": {
        "caption": "Table 7.1 — 3D Coordinate Conversions (Cartesian, Cylindrical & Spherical)",
        "headers": [
          "Conversion",
          "Forward Equations",
          "Inverse Equations & Restrictions"
        ],
        "rows": [
          [
            "Cylindrical (r, θ, z) ↔ Cartesian (x, y, z)",
            "x = r cos θ,  y = r sin θ,  z = z",
            "r² = x² + y²,  tan θ = y/x,  z = z  (r ≥ 0, 0 ≤ θ < 2π)"
          ],
          [
            "Spherical (ρ, φ, θ) ↔ Cartesian (x, y, z)",
            "x = ρ sin φ cos θ,  y = ρ sin φ sin θ,  z = ρ cos φ",
            "ρ² = x² + y² + z²,  cos φ = z/ρ,  tan θ = y/x  (0 ≤ φ ≤ π)"
          ],
          [
            "Spherical (ρ, φ, θ) ↔ Cylindrical (r, θ, z)",
            "r = ρ sin φ,  θ = θ,  z = ρ cos φ",
            "ρ = √(r² + z²),  tan φ = r/z,  θ = θ"
          ]
        ]
      }
    },
    {
      "id": "math-m7-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]",
      "title": "Cube Diagonal Theorems & Direction Cosine Relations",
      "summaryText": "Angle between any two diagonals of a cube is cos⁻¹(1/3), and a line making angles α, β, γ, δ with the four diagonals satisfies cos²α + cos²β + cos²γ + cos²δ = 4/3.",
      "memorizeStatements": [
        "Angle between any two diagonals of a cube is cos⁻¹(1/3), and a line making angles α, β, γ, δ with the four diagonals satisfies cos²α + cos²β + cos²γ + cos²δ = 4/3."
      ],
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "5 Marks",
      "problemStatement": "(1) [PUST Past Exam — 5 Marks] (a) Find the angle between any two diagonals of a cube. (b) Prove that if a line makes angles α, β, γ, δ with the four diagonals of a cube, then cos²α + cos²β + cos²γ + cos²δ = 4/3. (2) [PUST Past Exam — 5 Marks] Find the angle between the two lines whose direction cosines satisfy l + m + n = 0 and l² + m² − n² = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Cube Diagonal Theorems (Part a & Part b)",
          "explanation": "Take a cube of side a with edges along the coordinate axes; the four diagonals have DCs (±1/√3, 1/√3, 1/√3):",
          "equation": "Part (a) — Angle between any two diagonals:\n  cos θ = |−1 / 3 + 1 / 3 + 1 / 3|\n        = 1 / 3\n  ∴  θ = cos⁻¹(1 / 3)\n\nPart (b) — Sum of squares of cosines with a line of DCs (l, m, n):\n  cos α = (l + m + n) / √3,    cos β = (−l + m + n) / √3,\n  cos γ = (l − m + n) / √3,    cos δ = (l + m − n) / √3\n  Squaring and adding:\n  cos²α + cos²β + cos²γ + cos²δ = 4(l² + m² + n²) / 3\n  ∴  cos²α + cos²β + cos²γ + cos²δ = 4 / 3"
        },
        {
          "stepTitle": "2. Algebraic Direction Cosine Relations: l + m + n = 0 and l² + m² − n² = 0",
          "explanation": "Eliminate n = −(l + m) to find the direction ratios of the two lines:",
          "equation": "Substituting n = −(l + m) into l² + m² − n² = 0:\n  l² + m² − (l + m)² = 0\n  ⇒  −2lm = 0\n  ⇒  l = 0   or   m = 0\n  • When l = 0:  DRs of Line 1: (0, 1, −1)\n  • When m = 0:  DRs of Line 2: (1, 0, −1)\n  cos θ = [(0)(1) + (1)(0) + (−1)(−1)] / (√2 · √2)\n        = 1 / 2\n  ∴  θ = 60° = π / 3"
        }
      ]
    },
    {
      "id": "math-m7-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5–7 Marks]",
      "title": "Plane Families, Centroid Locus & Shortest Distance",
      "summaryText": "Complete exam solutions for plane families P₁ + λP₂ = 0, centroid locus x⁻² + y⁻² + z⁻² = 9p⁻², and length & equation of the line of shortest distance.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "5–7 Marks",
      "problemStatement": "(1) [PUST Past Exam — 5 Marks] Find the plane through the intersection of x + 2y + 3z − 4 = 0 and 2x + y − z + 5 = 0 perpendicular to 5x + 3y + 6z + 8 = 0. (2) [PUST Past Exam — 5 Marks] A variable plane at constant distance p from the origin meets the axes at A, B, C. Show that the locus of the centroid of △ABC is x⁻² + y⁻² + z⁻² = 9p⁻². (3) [PUST Past Exam — 7 Marks] Find the length and equations of the line of shortest distance between (x − 3)/3 = (y − 8)/(−1) = (z − 3)/1 and (x + 3)/(−3) = (y + 7)/2 = (z − 6)/4.",
      "solutionSteps": [
        {
          "stepTitle": "1. Plane Through Intersection & Centroid Locus Proof",
          "explanation": "Vertical solutions for Plane Problems (1) and (2):",
          "equation": "Problem 1 (Intersection Plane):\n  (x + 2y + 3z − 4) + λ(2x + y − z + 5) = 0\n  Perpendicular to 5x + 3y + 6z + 8 = 0:\n    5(1 + 2λ) + 3(2 + λ) + 6(3 − λ) = 0  ⇒  λ = −29 / 7\n  ∴  51x + 15y − 50z + 173 = 0\n\nProblem 2 (Centroid Locus):\n  Plane x / a + y / b + z / c = 1  has centroid (x, y, z) = (a / 3, b / 3, c / 3)\n  Since a⁻² + b⁻² + c⁻² = p⁻²:\n    (3x)⁻² + (3y)⁻² + (3z)⁻² = p⁻²\n  ∴  x⁻² + y⁻² + z⁻² = 9p⁻²"
        },
        {
          "stepTitle": "2. Shortest Distance & Equations of S.D. Line (7 Marks)",
          "explanation": "Take general points P(r₁) on Line 1 and Q(r₂) on Line 2 and enforce PQ ⊥ Line 1 and PQ ⊥ Line 2:",
          "equation": "Let  P(3r₁ + 3, −r₁ + 8, r₁ + 3)  and  Q(−3r₂ − 3, 2r₂ − 7, 4r₂ + 6).\nEnforcing PQ ⊥ (3, −1, 1) and PQ ⊥ (−3, 2, 4):\n  −11r₁ − 7r₂ = 0   and   7r₁ + 29r₂ = 0\n  ⇒  r₁ = 0,   r₂ = 0\nFeet of perpendicular:  P = (3, 8, 3),  Q = (−3, −7, 6),  DRs of PQ = (−6, −15, 3) ∝ (2, 5, −1)\n  ∴  Shortest Distance, S.D. = 3√30\n  ∴  S.D. Line: (x − 3) / 2 = (y − 8) / 5 = (z − 3) / (−1)"
        }
      ]
    },
    {
      "id": "math-m7-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Rahman & Bhattacharjee (3D Geometry, Ch. 3) & Anton Ch. 11",
      "title": "Symmetric Line Conversion & Coplanar Lines Plane",
      "summaryText": "Find the direction ratios (l, m, n) of the intersection of two planes by taking the cross product of their normal vectors, and find a point by setting z = 0.",
      "problemStatement": "(1) [Rahman & Bhattacharjee] Reduce the unsymmetric line x + y + z + 1 = 0 = 4x + y − 2z + 2 to symmetric form. (2) Show that the lines (x + 1)/(−3) = (y − 3)/2 = (z + 2)/1 and x/1 = (y − 7)/(−3) = (z + 7)/2 are coplanar, and find the equation of the plane containing them.",
      "solutionSteps": [
        {
          "stepTitle": "1. Unsymmetric to Symmetric Form: x + y + z + 1 = 0, 4x + y − 2z + 2 = 0",
          "explanation": "Cross-multiply plane normals (1, 1, 1) × (4, 1, −2) for DRs and set z = 0 for a point:",
          "equation": "Direction ratios (l, m, n) = (1, 1, 1) × (4, 1, −2)\n                           = (−2 − 1,  4 − (−2),  1 − 4)\n                           = (−3, 6, −3) ∝ (1, −2, 1)\nPutting z = 0 in x + y = −1 and 4x + y = −2 gives:\n  x = −1 / 3,   y = −2 / 3,   z = 0\n  ∴  Symmetric Form: (x + 1 / 3) / 1 = (y + 2 / 3) / (−2) = z / 1"
        },
        {
          "stepTitle": "2. Coplanarity Verification & Plane Containing Two Lines",
          "explanation": "Evaluate the 3×3 coplanarity determinant:",
          "equation": "Here (x₁, y₁, z₁) = (−1, 3, −2),  (x₂, y₂, z₂) = (0, 7, −7)\nDeterminant:\n  1 · (4 − 3) − 4 · (−6 − 1) − 5 · (9 − 2) = 1 + 28 − 35 + 6 = 0   (Coplanar)\nNormal to the plane = (−3, 2, 1) × (1, −3, 2) = (7, 7, 7) ∝ (1, 1, 1)\nPlane through (−1, 3, −2):\n  1(x + 1) + 1(y − 3) + 1(z + 2) = 0\n  ∴  x + y + z = 0"
        }
      ]
    },
    {
      "id": "math-m7-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · G. B. Thomas & R. L. Finney (Ch. 10) & M. R. Spiegel",
      "title": "Line-Plane Angle & Mirror Image in a Plane",
      "summaryText": "The angle φ between a line (l, m, n) and a plane Ax + By + Cz + D = 0 is complementary to the angle with the plane normal: sin φ = |Al + Bm + Cn| / [√(A² + B² + C²)√(l² + m² + n²)].",
      "memorizeStatements": [
        "The angle φ between a line (l, m, n) and a plane Ax + By + Cz + D = 0 is complementary to the angle with the plane normal: sin φ = |Al + Bm + Cn| / [√(A² + B² + C²)√(l² + m² + n²)]."
      ],
      "equations": [
        {
          "label": "Angle φ Between a Line (l, m, n) and a Plane Ax + By + Cz + D = 0",
          "formula": "sin φ = |Al + Bm + Cn| / [ √(A² + B² + C²) · √(l² + m² + n²) ]"
        }
      ],
      "problemStatement": "(1) [Thomas & Finney] Find the angle between the line (x − 1)/2 = (y − 2)/1 = (z − 3)/(−2) and the plane x + 2y + 2z − 5 = 0. (2) Find the foot of the perpendicular and the mirror image of the point P(1, 3, 4) in the plane 2x − y + z + 3 = 0.",
      "solutionSteps": [
        {
          "stepTitle": "1. Angle φ Between Line (2, 1, −2) and Plane x + 2y + 2z − 5 = 0",
          "explanation": "Apply sin φ = |Al + Bm + Cn| / [√(A²+B²+C²)√(l²+m²+n²)]:",
          "equation": "sin φ = |1(2) + 2(1) + 2(−2)| / [ √(1² + 2² + 2²) · √(2² + 1² + (−2)²) ]\n      = |2 + 2 − 4| / (3 × 3)\n      = 0\n  ∴  φ = 0°   (The line is parallel to the plane)"
        },
        {
          "stepTitle": "2. Foot of Perpendicular N and Mirror Image P′ of P(1, 3, 4)",
          "explanation": "Write the normal line through P(1, 3, 4) with DRs (2, −1, 1):",
          "equation": "Any point on the normal line is  Q(2t + 1, −t + 3, t + 4).\nFor foot of perpendicular N on 2x − y + z + 3 = 0:\n  2(2t + 1) − (−t + 3) + (t + 4) + 3 = 0\n  ⇒  6t + 6 = 0\n  ⇒  t = −1\n  ⇒  Foot N = (−1, 4, 3)\nFor mirror image P′ (t = 2(−1) = −2):\n  ∴  Foot N = (−1, 4, 3),   Mirror Image P′ = (−3, 5, 2)"
        }
      ]
    }
  ]
};

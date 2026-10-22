import type { ChapterNote } from "../../types.ts";

export const MATH1101_CH08: ChapterNote = {
  "id": "math1101-ch08",
  "unitNumber": "Module 08",
  "title": "Conicoids and Sphere",
  "summary": "4.1 The general equations of second degree and reduction to standard forms, identification of conicoids, cone, Generators, condition for a general equation of second degree to represent Cylinder or Cone, right circular cone, right circular Cylinder. 4.2 Sphere: Equation of sphere, a plane and a sphere, a line and a sphere, plane of contact, tangent planes, polar planes, angle of intersections of two spheres, condition of orthogonality, radical line, plane and centers, co-axial spheres.",
  "estimatedMinutes": 70,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "math-m8-b1",
      "type": "memorize",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Units 22–24 (Sphere, Right Circular Cone/Cylinder & 3D Quadric Surfaces)",
      "title": "Sphere, Right Circular Cone, Cylinder & Quadric Surfaces",
      "summaryText": "General sphere S ≡ x² + y² + z² + 2ux + 2vy + 2wz + d = 0 has center C = (−u, −v, −w) and radius R = √(u² + v² + w² − d). Plane section at distance p < R is a circle of radius r = √(R² − p²).",
      "memorizeStatements": [
        "General sphere S ≡ x² + y² + z² + 2ux + 2vy + 2wz + d = 0 has center C = (−u, −v, −w) and radius R = √(u² + v² + w² − d).",
        "Plane section at distance p < R is a circle of radius r = √(R² − p²)."
      ],
      "equations": [
        {
          "label": "General Sphere Equation, Center, Radius & Plane Section Circle",
          "formula": "C = (−u, −v, −w),  R = √(u² + v² + w² − d)  |  Circle radius r = √(R² − p²)  |  Family: S + λP = 0"
        },
        {
          "label": "Diameter Form & Orthogonal Spheres Condition",
          "formula": "(x − x₁)(x − x₂) + (y − y₁)(y − y₂) + (z − z₁)(z − z₂) = 0   |   Orthogonal: 2u₁u₂ + 2v₁v₂ + 2w₁w₂ = d₁ + d₂"
        },
        {
          "label": "Right Circular Cone (Vertex (α, β, γ), Axis DRs (l, m, n), Semi-Vertical Angle θ)",
          "formula": "[l(x − α) + m(y − β) + n(z − γ)]² = (l² + m² + n²)[(x − α)² + (y − β)² + (z − γ)²] cos²θ"
        },
        {
          "label": "Right Circular Cylinder (Axis through (α, β, γ) with DRs (l, m, n) and Radius R)",
          "formula": "(x − α)² + (y − β)² + (z − γ)² − [l(x − α) + m(y − β) + n(z − γ)]² / (l² + m² + n²) = R²"
        }
      ],
      "table": {
        "caption": "Table 8.1 — Classification of Standard 3D Quadric Surfaces (Conicoids)",
        "headers": [
          "Quadric Surface",
          "Standard Equation",
          "Key Geometric Features"
        ],
        "rows": [
          [
            "1. Ellipsoid",
            "x²/a² + y²/b² + z²/c² = 1",
            "Bounded central conicoid; all plane sections are ellipses."
          ],
          [
            "2. Hyperboloid of 1 Sheet",
            "x²/a² + y²/b² − z²/c² = 1",
            "Connected central conicoid (1 minus sign); doubly ruled surface."
          ],
          [
            "3. Hyperboloid of 2 Sheets",
            "x²/a² − y²/b² − z²/c² = 1",
            "Two disconnected sheets (2 minus signs)."
          ],
          [
            "4. Elliptic Paraboloid",
            "x²/a² + y²/b² = 2cz",
            "Non-central conicoid opening along the z-axis."
          ],
          [
            "5. Hyperbolic Paraboloid",
            "x²/a² − y²/b² = 2cz",
            "Saddle-shaped non-central conicoid; doubly ruled surface."
          ]
        ]
      }
    },
    {
      "id": "math-m8-b2",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5 Marks]",
      "title": "Sphere Plane Sections & Spheres Through a Circle",
      "summaryText": "Find circle center N as the foot of the normal from sphere center C to the cutting plane, and use S + λP = 0 for spheres passing through a circle.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "5 Marks",
      "problemStatement": "(1) [PUST Past Exam — 5 Marks] Find the center and radius of the circle x² + y² + z² − 2y − 4z − 11 = 0, x + 2y + 2z = 15. (2) [PUST Past Exam — 5 Marks] Find the equations of the spheres through the circle x² + y² + z² = 5, x + 2y + 3z = 3 that touch the plane 4x + 3y = 15.",
      "solutionSteps": [
        {
          "stepTitle": "1. Center & Radius of Circle of Intersection",
          "explanation": "Find sphere center C, sphere radius R, perpendicular distance p to the plane, and foot of perpendicular N:",
          "equation": "Sphere center:  C = (0, 1, 2),   Sphere radius:  R = √(0 + 1 + 4 + 11) = 4\nDistance from C(0, 1, 2) to plane x + 2y + 2z − 15 = 0:\n  p = |0 + 2(1) + 2(2) − 15| / 3\n    = 3\n  ⇒  Circle radius,  r = √(R² − p²) = √(16 − 9) = √7\nNormal line N = (t, 2t + 1, 2t + 2) on x + 2y + 2z = 15 gives t = 1:\n  ∴  Circle Center N = (1, 3, 4),   Circle Radius r = √7"
        },
        {
          "stepTitle": "2. Spheres Through a Circle Touching a Given Plane",
          "explanation": "Form S + λP = 0 and equate perpendicular distance from center to radius:",
          "equation": "Sphere family S + λP = 0:\n  x² + y² + z² + λx + 2λy + 3λz − (5 + 3λ) = 0\n  Center C = (−λ / 2, −λ, −3λ / 2),   Radius R = √(7λ² / 2 + 3λ + 5)\nTangency condition to 4x + 3y − 15 = 0:\n  (λ + 3)² = 7λ² / 2 + 3λ + 5\n  ⇒  5λ² − 6λ − 8 = 0  ⇒  λ = 2,  −4 / 5\n  ∴  Spheres: x² + y² + z² + 2x + 4y + 6z − 11 = 0 and 5(x² + y² + z²) − 4x − 8y − 12z − 13 = 0"
        }
      ]
    },
    {
      "id": "math-m8-b3",
      "type": "pyq",
      "priorityTier": 2,
      "secondaryPriorityTiers": [
        1
      ],
      "sourceCitation": "Previous Year Question · PUST EECE 2022–23, 2021–22 & 2020–21 Semester Final Exams [5–7 Marks]",
      "title": "Guiding-Curve Cone, Right Circular Cylinder & Conicoid Reduction",
      "summaryText": "Complete exam derivations for cones with a given vertex and guiding curve, right circular cylinders, and 3D central conicoid reduction.",
      "examYears": [
        "2022–23",
        "2021–22",
        "2020–21"
      ],
      "marks": "5–7 Marks",
      "problemStatement": "(1) [PUST Past Exam — 5 Marks] Find the cone with vertex (1, 2, 3) and guiding curve x² + y² = 4, z = 0. (2) [PUST Past Exam — 5 Marks] Find the right circular cylinder of radius R = 2 with axis (x − 1)/2 = (y − 2)/1 = (z − 3)/2. (3) [PUST Past Exam — 7 Marks] Reduce 2x² − 7y² + 2z² − 10yz − 8zx − 10xy + 6x + 12y − 6z + 2 = 0 to standard form.",
      "solutionSteps": [
        {
          "stepTitle": "1. Cone with Vertex (1, 2, 3) & Guiding Circle x² + y² = 4, z = 0",
          "explanation": "Write generator through (1, 2, 3), intersect with z = 0, and eliminate l, m, n:",
          "equation": "Generator through (1, 2, 3):  (x − 1) / l = (y − 2) / m = (z − 3) / n\nAt z = 0:  x = 1 − 3l / n,   y = 2 − 3m / n\nSubstituting into x² + y² = 4 and using l/n = (x − 1)/(z − 3), m/n = (y − 2)/(z − 3):\n  (z − 3x)² + (2z − 3y)² = 4(z − 3)²\n  ∴  9x² + 9y² + z² − 6xz − 12yz + 24z − 36 = 0"
        },
        {
          "stepTitle": "2. Right Circular Cylinder of Radius R = 2",
          "explanation": "Apply the cylinder projection formula with point (1, 2, 3) and axis DRs (2, 1, 2):",
          "equation": "(x − 1)² + (y − 2)² + (z − 3)² − [2(x − 1) + 1(y − 2) + 2(z − 3)]² / 9 = 2²\n  ⇒  9[(x − 1)² + (y − 2)² + (z − 3)²] − (2x + y + 2z − 10)² = 36\n  ∴  5x² + 8y² + 5z² − 4xy − 4yz − 8zx + 22x − 16y − 14z + 26 = 0"
        },
        {
          "stepTitle": "3. Reduction of 3D Conicoid (Corrected Eigenvalues & Center for Problem 24.1)",
          "explanation": "Solve det(A − λI) = 0 for eigenvalues λ₁, λ₂, λ₃ and ½∂F/∂x = ½∂F/∂y = ½∂F/∂z = 0 for center:",
          "equation": "Discriminating cubic det(A − λI) = 0:\n  λ³ + 3λ² − 90λ + 216 = 0\n  ⇒  (λ − 6)(λ − 3)(λ + 12) = 0  ⇒  λ₁ = 6,  λ₂ = 3,  λ₃ = −12\nCenter equations:\n  2α − 5β − 4γ + 3 = 0,  −5α − 7β − 5γ + 6 = 0,  −4α − 5β + 2γ − 3 = 0\n  ⇒  Center (α, β, γ) = (1 / 3, −1 / 3, 4 / 3),   d′ = uα + vβ + wγ + d = −3\n  ⇒  6X² + 3Y² − 12Z² − 3 = 0\n  ∴  2X² + Y² − 4Z² = 1   (Hyperboloid of One Sheet)"
        }
      ]
    },
    {
      "id": "math-m8-b4",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Rahman & Bhattacharjee (3D Geometry: Sphere & Cone)",
      "title": "Sphere Through Four Points & Orthogonal Cone Generators",
      "summaryText": "A homogeneous second-degree cone ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 has sets of three mutually perpendicular generators iff a + b + c = 0.",
      "memorizeStatements": [
        "A homogeneous second-degree cone ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 has sets of three mutually perpendicular generators iff a + b + c = 0."
      ],
      "problemStatement": "(1) [Rahman & Bhattacharjee] Find the equation of the sphere passing through the origin (0, 0, 0) and the three axial intercepts (a, 0, 0), (0, b, 0), (0, 0, c). (2) Find the equation of the cone with vertex at the origin (0, 0, 0) that passes through the circle x² + y² + z² + 2ux + d = 0, lx + my + nz = p.",
      "solutionSteps": [
        {
          "stepTitle": "1. Sphere Through (0, 0, 0), (a, 0, 0), (0, b, 0), (0, 0, c)",
          "explanation": "Substitute the four points into x² + y² + z² + 2ux + 2vy + 2wz + d = 0:",
          "equation": "At (0, 0, 0):  d = 0\nAt (a, 0, 0):  a² + 2ua = 0  ⇒  2u = −a\nAt (0, b, 0):  b² + 2vb = 0  ⇒  2v = −b\nAt (0, 0, c):  c² + 2wc = 0  ⇒  2w = −c\n∴  x² + y² + z² − ax − by − cz = 0"
        },
        {
          "stepTitle": "2. Homogenizing Sphere & Plane to Form Cone with Vertex at (0, 0, 0)",
          "explanation": "Use 1 = (lx + my + nz) / p to make the sphere equation homogeneous of degree 2:",
          "equation": "Given sphere:  x² + y² + z² + 2ux(1) + d(1)² = 0\nSubstituting 1 = (lx + my + nz) / p:\n  ∴  p²(x² + y² + z²) + 2upx(lx + my + nz) + d(lx + my + nz)² = 0"
        }
      ]
    },
    {
      "id": "math-m8-b5",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · E. H. Askwith & G. B. Thomas & R. L. Finney (Quadric Surfaces)",
      "title": "Radical Plane, Coaxial Spheres & Enveloping Cone",
      "summaryText": "The tangent cone (enveloping cone) from an external point P(x₁, y₁, z₁) to a sphere S = 0 is given by SS₁ = T².",
      "memorizeStatements": [
        "The tangent cone (enveloping cone) from an external point P(x₁, y₁, z₁) to a sphere S = 0 is given by SS₁ = T²."
      ],
      "equations": [
        {
          "label": "Enveloping Cone from (x₁, y₁, z₁) & Radical Plane of Two Spheres",
          "formula": "Enveloping Cone: S · S₁ = T²   |   Radical Plane: S₁ − S₂ = 0"
        }
      ],
      "problemStatement": "(1) [Askwith] Find the limiting points of the coaxial system of spheres determined by S₁ ≡ x² + y² + z² − 8x − 2y − 4z + 15 = 0 and S₂ ≡ x² + y² + z² − 2x + 4y + 2z + 9 = 0. (2) Find the enveloping cone of the sphere x² + y² + z² = 4 with vertex at (1, 1, 3).",
      "solutionSteps": [
        {
          "stepTitle": "1. Limiting Points of Coaxial System of Spheres",
          "explanation": "Find the radical plane S₁ − S₂ = 0 and set radius R² = 0 in S₁ + 2λ(S₁ − S₂)/6 = 0:",
          "equation": "Radical plane S₁ − S₂ = 0:\n  −6x − 6y − 6z + 6 = 0  ⇔  x + y + z − 1 = 0\nCoaxial sphere family S₁ + 2λ(x + y + z − 1) = 0:\n  Center C = (4 − λ,  1 − λ,  2 − λ)\n  Radius R² = (4 − λ)² + (1 − λ)² + (2 − λ)² − (15 − 2λ)\n            = 3λ² − 12λ + 6 = 0\n  ⇒  λ = 2 ± √2\n  ∴  Limiting Points: (2 ∓ √2, −1 ∓ √2, ∓√2)"
        },
        {
          "stepTitle": "2. Enveloping Cone of x² + y² + z² − 4 = 0 from Vertex (1, 1, 3)",
          "explanation": "Apply SS₁ = T² with S₁ = 1² + 1² + 3² − 4 = 7 and T = x + y + 3z − 4:",
          "equation": "Here  S = x² + y² + z² − 4,   S₁ = 1 + 1 + 9 − 4 = 7,   T = x + y + 3z − 4\nUsing S · S₁ = T²:\n  7(x² + y² + z² − 4) = (x + y + 3z − 4)²\n  ∴  6x² + 6y² − 2z² − 2xy − 6yz − 6zx + 8x + 8y + 24z − 44 = 0"
        }
      ]
    }
  ]
};

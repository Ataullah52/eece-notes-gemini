import type { ChapterNote } from "../../types.ts";

export const EECE1111_CH03: ChapterNote = {
  "id": "eece1111-ch03",
  "unitNumber": "Module 03",
  "title": "Techniques for Circuit Analysis",
  "summary": "Nodal and mesh analysis including supernode, supermesh. Techniques of General DC/AC Circuit Analysis (Containing both independent and dependent sources) Node-voltage method, Mesh-current method, Source Transformations.",
  "estimatedMinutes": 40,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "u03-b1",
      "type": "definition",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 07 (Professor’s Supernode & Supermesh Rules)",
      "title": "Supernode & Supermesh Constraint Equations",
      "summaryText": "A Supernode encloses a floating voltage source between two non-reference nodes; a Supermesh bypasses a current source shared by two adjacent meshes.",
      "memorizeStatements": [
        "A Supernode encloses a floating voltage source between two non-reference nodes; a Supermesh bypasses a current source shared by two adjacent meshes."
      ],
      "paragraphs": [
        "When a voltage source (independent or dependent) is connected between two non-reference nodes, the current through that voltage source is unknown, preventing a standalone KCL equation at either node. Enclose both nodes and the voltage source inside a dashed surface called a Supernode.",
        "Similarly, when a current source lies on the boundary shared by two meshes, exclude the shared branch to form a single outer KVL loop (Supermesh), and write the current source relation at the shared branch."
      ],
      "table": {
        "caption": "Table 3.1 — Comparison of Supernode vs. Supermesh Formulations",
        "headers": [
          "Feature",
          "Supernode (Nodal Analysis)",
          "Supermesh (Mesh Analysis)"
        ],
        "rows": [
          [
            "Triggering Element",
            "Voltage source between two non-reference nodes",
            "Current source shared between two meshes"
          ],
          [
            "Equation 1 (Conservation)",
            "Apply KCL across the outer Supernode boundary",
            "Apply KVL around the combined outer Supermesh perimeter"
          ],
          [
            "Equation 2 (Constraint)",
            "Apply KVL inside the Supernode: v_plus − v_minus = V_source",
            "Apply KCL at the shared branch: i_mesh2 − i_mesh1 = I_source"
          ]
        ]
      },
      "professorTip": "Each Supernode reduces the number of required KCL equations by 1 (replaced by 1 simple voltage constraint equation). Never write KCL at an individual node inside a Supernode alone!"
    },
    {
      "id": "u03-b2",
      "type": "pyq",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · Final Exam 2023 Q3(b) & 2021 Q3(a)",
      "title": "Nodal Analysis with Floating Supernode & Dependent Source",
      "summaryText": "Solve for node voltages v₁ and v₂ when a 10 V source connects Node 1 and Node 2.",
      "examYears": [
        "2023",
        "2021"
      ],
      "marks": "7 Marks",
      "problemStatement": "In a two-node circuit with reference ground at the bottom, an independent current source of 2 A enters Node 1, a 2 Ω resistor connects Node 1 to ground, a 4 Ω resistor connects Node 2 to ground, a 10 Ω resistor lies in parallel with a 10 V voltage source (+ terminal at Node 1, − terminal at Node 2), and a 7 A current source leaves Node 2. Find node voltages v₁ and v₂.",
      "givenData": [
        "Current entering Node 1: I_in = 2 A; Current leaving Node 2: I_out = 7 A",
        "Shunt resistors to ground: R₁ = 2 Ω (at Node 1), R₂ = 4 Ω (at Node 2)",
        "Supernode voltage source: v₁ − v₂ = 10 V"
      ],
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Discard the 10 Ω resistor in parallel with the ideal 10 V source during Supernode KCL",
          "explanation": "Any resistor connected strictly between the two nodes of a Supernode has its current both leaving and re-entering the same Supernode surface, canceling out in KCL:",
          "equation": "∑ i_entering = ∑ i_leaving  ⇒  2 = (v₁ / 2) + (v₂ / 4) + 7"
        },
        {
          "stepTitle": "Step 2: Simplify the Supernode KCL equation",
          "explanation": "Multiply through by 4 to clear fractions:",
          "equation": "2v₁ + v₂ = −20   (Equation 1)"
        },
        {
          "stepTitle": "Step 3: Apply the Supernode voltage constraint and solve",
          "explanation": "Substitute v₁ = v₂ + 10 into Equation 1:",
          "equation": "2(v₂ + 10) + v₂ = −20  ⇒  3v₂ = −40  ⇒  v₂ = −13.33 V\nv₁ = −13.33 + 10 = −3.33 V"
        }
      ],
      "finalAnswer": "v₁ = −3.33 V,  v₂ = −13.33 V"
    },
    {
      "id": "u03-b3",
      "type": "theory",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Alexander & Sadiku (6th Ed.), Ch. 3 & Ch. 4",
      "title": "Source Transformation & Nodal/Mesh Equations by Inspection",
      "summaryText": "A practical voltage source V_s in series with R converts to an equivalent current source I_s = V_s/R in parallel with R.",
      "memorizeStatements": [
        "A practical voltage source V_s in series with R converts to an equivalent current source I_s = V_s/R in parallel with R."
      ],
      "paragraphs": [
        "Source Transformation replaces a voltage source v_s in series with a resistor R by a current source i_s = v_s / R in parallel with the same resistor R (or vice versa), preserving terminal v-i characteristics.",
        "When a linear resistive network contains no dependent sources, the Nodal Conductance Matrix [G][v] = [i] and Mesh Resistance Matrix [R][i] = [v] are symmetric and can be written directly by inspection."
      ],
      "equations": [
        {
          "label": "Source Transformation Equivalence",
          "formula": "v_s = i_s · R   ⟺   i_s = v_s / R",
          "units": "Applies to both independent and dependent sources"
        }
      ]
    },
    {
      "id": "u03-b4",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · R. C. Dorf & J. A. Svoboda (Introduction to Electric Circuits, Ch. 4)",
      "title": "Two-Mesh Network with Dependent CCVS via Cramer’s Rule",
      "summaryText": "Move all dependent source terms involving mesh currents to the left-hand resistance matrix before applying Cramer’s Rule.",
      "problemStatement": "A two-mesh circuit has Mesh 1 with a 20 V source, a 2 Ω series resistor, and a shared 4 Ω resistor with Mesh 2. Mesh 2 contains the shared 4 Ω resistor, a 6 Ω resistor, and a dependent voltage source 2i₁ opposing i₂. Find mesh currents i₁ and i₂.",
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Write KVL for Mesh 1 and Mesh 2",
          "explanation": "Group coefficients of i₁ and i₂:",
          "equation": "Mesh 1:  6i_1 − 4i_2 = 20\nMesh 2:  −2i_1 + 10i_2 = 0  ⇒  i_1 = 5i_2\nSubstituting i_1 = 5i_2 into Mesh 1:\n  6(5i_2) − 4i_2 = 20  ⇒  26i_2 = 20\n∴  i_2 = 10 / 13 ≈ 0.77 A,   i_1 = 50 / 13 ≈ 3.85 A"
        }
      ]
    }
  ]
};

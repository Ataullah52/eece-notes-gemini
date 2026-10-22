import type { ChapterNote } from "../../types.ts";

export const EECE1111_CH04: ChapterNote = {
  "id": "eece1111-ch04",
  "unitNumber": "Module 04",
  "title": "DC Network Theorem",
  "summary": "Thevenin’s theorem, Norton’s theorem and superposition theorem with applications in circuits having independent and dependent sources, Millman’s theorem, Substitution theorem, Maximum power transfer theorem and Reciprocity Theorem.",
  "estimatedMinutes": 40,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "u04-b1",
      "type": "memorize",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 10 (Three Cases for Finding R_Th)",
      "title": "Three Cases for Computing Thevenin Resistance (R_Th)",
      "summaryText": "How to find R_Th for circuits with (Case 1) only independent sources, (Case 2) both independent & dependent sources, and (Case 3) only dependent sources.",
      "paragraphs": [
        "Choosing the right method to compute R_Th depends strictly on whether dependent sources exist inside the linear two-terminal network."
      ],
      "table": {
        "caption": "Table 4.1 — Complete Procedure for Finding Thevenin Equivalent (V_Th, R_Th)",
        "headers": [
          "Circuit Case",
          "V_Th Calculation",
          "R_Th Calculation Procedure"
        ],
        "rows": [
          [
            "Case 1: Independent Sources Only",
            "Find open-circuit voltage v_oc across terminals a-b",
            "Turn off all independent sources (Voltage source → Short, Current source → Open) and find R_eq."
          ],
          [
            "Case 2: Both Independent & Dependent Sources",
            "Find open-circuit voltage v_oc across terminals a-b",
            "Keep dependent sources active! Either (a) apply test source v_o = 1 V after deactivating independent sources (R_Th = v_o/i_o), or (b) find i_sc and compute R_Th = v_oc / i_sc."
          ],
          [
            "Case 3: Dependent Sources Only (No Independent Sources)",
            "V_Th = 0 V identically (dead active network)",
            "Apply external test voltage v_o = 1 V (or i_o = 1 A) at terminals a-b and calculate R_Th = v_o / i_o."
          ]
        ]
      },
      "professorTip": "Never turn off a dependent source when calculating R_Th or using Superposition! Also remember that power cannot be found by summing individual Superposition powers (p ≠ p₁ + p₂) because p = i²R is nonlinear."
    },
    {
      "id": "u04-b2",
      "type": "definition",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · Final Exam 2023 Q4(a), 2022 Q4(a), 2020 Q4(b)",
      "title": "Maximum Power Transfer Theorem & Proof",
      "summaryText": "A resistive load R_L receives maximum power from a linear DC network when R_L = R_Th, yielding P_max = V_Th² / (4R_Th) at 50% efficiency.",
      "memorizeStatements": [
        "A resistive load R_L receives maximum power from a linear DC network when R_L = R_Th, yielding P_max = V_Th² / (4R_Th) at 50% efficiency."
      ],
      "examYears": [
        "2023",
        "2022",
        "2020"
      ],
      "marks": "6 Marks",
      "paragraphs": [
        "Replacing any linear circuit connected to a variable load resistor R_L with its Thevenin equivalent (V_Th in series with R_Th), the load current is I_L = V_Th / (R_Th + R_L) and the load power is P_L = I_L² · R_L.",
        "Differentiating P_L with respect to R_L using the quotient rule and setting dP_L/dR_L = 0 proves that maximum power is transferred when the load resistance matches the internal Thevenin resistance (R_L = R_Th)."
      ],
      "equations": [
        {
          "label": "Load Power as Function of R_L",
          "formula": "P_L = [V_{Th} / (R_{Th} + R_L)]² · R_L",
          "units": "Watts (W)"
        },
        {
          "label": "Zero-Derivative Optimality Condition",
          "formula": "dP_L / dR_L = V_{Th}² · [(R_{Th} + R_L)² − 2R_L(R_{Th} + R_L)] / (R_{Th} + R_L)⁴ = 0  ⇒  R_L = R_{Th}",
          "units": "Ohms (Ω)"
        },
        {
          "label": "Maximum Transferred Power Formula",
          "formula": "P_{max} = V_{Th}² / (4 · R_{Th})",
          "units": "Watts (W) at η = 50% efficiency"
        }
      ]
    },
    {
      "id": "u04-b3",
      "type": "theory",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · B. L. Theraja Vol. I & Boylestad Ch. 9",
      "title": "Millman’s, Substitution & Reciprocity Theorems",
      "summaryText": "Millman’s Theorem combines N parallel voltage branches into a single equivalent source V_eq = (∑ V_k G_k) / (∑ G_k).",
      "memorizeStatements": [
        "Millman’s Theorem combines N parallel voltage branches into a single equivalent source V_eq = (∑ V_k G_k) / (∑ G_k)."
      ],
      "paragraphs": [
        "Millman’s Theorem simplifies parallel branches of voltage sources in series with resistors by converting each branch to its Norton current equivalent, summing the parallel conductances G_k = 1/R_k, and converting back to a single Thevenin source.",
        "The Reciprocity Theorem states that in any linear bilateral single-source network, the ratio of excitation voltage in loop A to the response current in loop B remains invariant when the positions of the voltage source and ammeter are interchanged."
      ],
      "equations": [
        {
          "label": "Millman’s Equivalent Voltage & Resistance",
          "formula": "V_{eq} = (∑_{k=1}^N V_k · G_k) / (∑_{k=1}^N G_k),   R_{eq} = 1 / (∑_{k=1}^N G_k)",
          "units": "G_k = 1 / R_k (Siemens)"
        }
      ]
    },
    {
      "id": "u04-b4",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · Robert L. Boylestad & R. P. Ward (Ch. 9)",
      "title": "Millman’s Theorem for Parallel Battery Branches",
      "summaryText": "Find the terminal voltage V_L across a 10 Ω load fed by three parallel branches: (12 V, 2 Ω), (6 V, 3 Ω), and (24 V, 6 Ω).",
      "problemStatement": "Three parallel DC voltage branches — Branch 1 (12 V in series with 2 Ω), Branch 2 (6 V in series with 3 Ω), and Branch 3 (24 V in series with 6 Ω) — supply a common load resistor R_L = 9 Ω. Find V_eq, R_eq, and load current I_L using Millman’s Theorem.",
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Compute ∑ V_k G_k and ∑ G_k",
          "explanation": "With G₁ = 1/2 S, G₂ = 1/3 S, G₃ = 1/6 S:",
          "equation": "∑ G_k = 1 / 2 + 1 / 3 + 1 / 6 = 1.0 S  ⇒  R_{eq} = 1.0 Ω\n∑ V_k G_k = 12(1 / 2) + 6(1 / 3) + 24(1 / 6) = 6 + 2 + 4 = 12 A\n∴  V_{eq} = 12 V,   R_{eq} = 1.0 Ω,   I_L = 12 / (1 + 9) = 1.2 A"
        }
      ]
    }
  ]
};

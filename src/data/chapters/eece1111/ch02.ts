import type { ChapterNote } from "../../types.ts";

export const EECE1111_CH02: ChapterNote = {
  "id": "eece1111-ch02",
  "unitNumber": "Module 02",
  "title": "Basic Laws",
  "summary": "Ohm’s law, Kirchhoff’s current and voltage laws, Voltage divider and current divider rules, Delt-Wye equivalent circuits. Series, parallel and series-parallel circuits and their equivalents.",
  "estimatedMinutes": 45,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "u02-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 04 (Professor Board Derivation & Curve Analysis)",
      "title": "Ohm’s Law, Conductance & Power Dissipation",
      "summaryText": "v = iR (under PSC), Conductance G = 1/R = i/v (Siemens), and non-negative resistor power p = i²R = v²/R ≥ 0.",
      "memorizeStatements": [
        "v = iR (under PSC), Conductance G = 1/R = i/v (Siemens), and non-negative resistor power p = i²R = v²/R ≥ 0."
      ],
      "paragraphs": [
        "Ohm’s Law states that the voltage v across a linear resistor is directly proportional to the current i flowing through it, provided the current enters the positive terminal (v = +iR). If the reference current enters the negative terminal, v = −iR.",
        "Conductance G is the reciprocal of resistance (G = 1/R), measured in Siemens (S) or mhos (℧). Because a passive resistor cannot generate energy, its absorbed power p = i²R = v²G is always non-negative regardless of voltage or current polarity."
      ],
      "equations": [
        {
          "label": "Ohm’s Law (Voltage & Current Forms)",
          "formula": "v = i · R   ⟺   i = G · v = v / R",
          "units": "V, A, Ω, S"
        },
        {
          "label": "Resistor Power Dissipation",
          "formula": "p = v · i = i²R = v² / R = v²G = i² / G",
          "units": "Watts (W ≥ 0)"
        }
      ],
      "interactiveDiagramId": "ohms-law",
      "professorTip": "Remember the two extreme limits of resistance: a Short Circuit has R = 0 Ω (G → ∞ S), meaning v = 0 V for any finite current i; an Open Circuit has R → ∞ Ω (G = 0 S), meaning i = 0 A for any finite voltage v."
    },
    {
      "id": "u02-b2",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 05 (Kirchhoff’s Laws & Two-Loop T-Network)",
      "title": "Kirchhoff’s Current Law (KCL) & Voltage Law (KVL)",
      "summaryText": "KCL (Conservation of Charge): ∑ i_in = ∑ i_out at any node. KVL (Conservation of Energy): ∑ v_m = 0 around any closed path.",
      "memorizeStatements": [
        "KCL (Conservation of Charge): ∑ i_in = ∑ i_out at any node.",
        "KVL (Conservation of Energy): ∑ v_m = 0 around any closed path."
      ],
      "paragraphs": [
        "Kirchhoff’s Current Law (KCL) is based on the conservation of electric charge: a node cannot store net charge, so the algebraic sum of currents entering a node (or closed Gaussian boundary) must equal zero at every instant.",
        "Kirchhoff’s Voltage Law (KVL) is based on the conservation of energy: the work done moving a unit charge around a complete closed loop returns to the same potential, so the algebraic sum of all branch voltages around any closed loop is identically zero."
      ],
      "equations": [
        {
          "label": "Kirchhoff’s Current Law (KCL)",
          "formula": "∑_{n=1}^{N} i_n = 0   ⟺   ∑ i_{entering} = ∑ i_{leaving}",
          "units": "Amperes (A)"
        },
        {
          "label": "Kirchhoff’s Voltage Law (KVL)",
          "formula": "∑_{m=1}^{M} v_m = 0   ⟺   ∑ v_{drops} = ∑ v_{rises}",
          "units": "Volts (V)"
        },
        {
          "label": "Fundamental Theorem of Network Topology",
          "formula": "b = l + n − 1",
          "units": "b = branches, l = independent loops, n = nodes"
        }
      ],
      "interactiveDiagramId": "kcl-kvl"
    },
    {
      "id": "u02-b3",
      "type": "memorize",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · Final Exam 2023 Q2(a), 2022 Q2(b), 2019 Q2(a)",
      "title": "Divider Rules & Wye-Delta (Y-Δ) Conversion Formulas",
      "summaryText": "Complete formula sheet for two-resistor dividers and Δ ↔ Y bridge conversions.",
      "examYears": [
        "2023",
        "2022",
        "2019"
      ],
      "paragraphs": [
        "When a bridge network (such as a Wheatstone bridge) has neither series nor parallel resistor pairs, apply a Delta-to-Wye (Δ → Y) or Wye-to-Delta (Y → Δ) transformation to collapse the network."
      ],
      "table": {
        "caption": "Table 2.1 — Divider Rules & Wye-Delta (Y ↔ Δ) Equivalent Transformations",
        "headers": [
          "Transformation / Rule",
          "Governing Equation",
          "Balanced Case (Equal R)"
        ],
        "rows": [
          [
            "Voltage Divider (Series R₁, R₂)",
            "v₁ = [R₁ / (R₁ + R₂)] · v_total",
            "v₁ = v₂ = 0.5 · v_total"
          ],
          [
            "Current Divider (Parallel R₁, R₂)",
            "i₁ = [R₂ / (R₁ + R₂)] · i_total",
            "i₁ = i₂ = 0.5 · i_total"
          ],
          [
            "Delta to Wye (Δ → Y)",
            "R₁ = (R_b · R_c) / (R_a + R_b + R_c)",
            "R_Y = R_Δ / 3"
          ],
          [
            "Wye to Delta (Y → Δ)",
            "R_a = (R₁R₂ + R₂R₃ + R₃R₁) / R₁",
            "R_Δ = 3 · R_Y"
          ]
        ]
      }
    },
    {
      "id": "u02-b4",
      "type": "pyq",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · Final Exam 2022 Q2(c) & 2020 Q2(b)",
      "title": "Bridge Equivalent Resistance Using Δ → Y Transformation",
      "summaryText": "Find total equivalent resistance R_ab and source current I_s for an unbalanced 5-resistor bridge.",
      "examYears": [
        "2022",
        "2020"
      ],
      "marks": "8 Marks",
      "problemStatement": "An unbalanced bridge circuit connected to a 24 V DC source consists of upper delta resistors R_a = 30 Ω, R_b = 10 Ω, R_c = 20 Ω, and lower arm resistors R_left = 11 Ω and R_right = 7 Ω. Find the total equivalent resistance R_ab and the source current I_s.",
      "givenData": [
        "Upper Δ network: R_a = 30 Ω, R_b = 10 Ω, R_c = 20 Ω (Sum = 60 Ω)",
        "Lower series arms after Δ → Y conversion: R_left = 11 Ω, R_right = 7 Ω",
        "Applied DC source voltage V_s = 24 V"
      ],
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Convert the upper Δ (R_a, R_b, R_c) into an equivalent Y (R₁, R₂, R₃)",
          "explanation": "Using the Δ → Y denominator R_a + R_b + R_c = 30 + 10 + 20 = 60 Ω:",
          "equation": "R₁ (top) = (R_b·R_c)/60 = (10×20)/60 = 3.33 Ω\nR₂ (left) = (R_a·R_c)/60 = (30×20)/60 = 10 Ω\nR₃ (right) = (R_a·R_b)/60 = (30×10)/60 = 5 Ω"
        },
        {
          "stepTitle": "Step 2: Combine series & parallel branches with lower arms",
          "explanation": "Left branch R_L = R₂ + 11 = 10 + 11 = 21 Ω; Right branch R_R = R₃ + 7 = 5 + 7 = 12 Ω:",
          "equation": "R_parallel = (21 × 12) / (21 + 12) = 252 / 33 = 7.64 Ω\nR_ab = R₁ + R_parallel = 3.33 + 7.64 = 10.97 Ω"
        },
        {
          "stepTitle": "Step 3: Calculate total source current I_s",
          "explanation": "Apply Ohm’s Law at the input terminals:",
          "equation": "I_s = V_s / R_ab = 24 V / 10.97 Ω = 2.19 A"
        }
      ],
      "finalAnswer": "R_ab = 10.97 Ω,  I_s = 2.19 A"
    },
    {
      "id": "u02-b5",
      "type": "example",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Alexander & Sadiku (6th Ed.), Ch. 2",
      "title": "Ladder Network Reduction & Current Division",
      "summaryText": "Reduce a resistive ladder from the load end back to the source, then use current division at each node.",
      "problemStatement": "In a resistive ladder connected to a 30 V source, series resistor R₁ = 4 Ω feeds a parallel combination of R₂ = 6 Ω and a right-hand branch of R₃ = 2 Ω in series with R₄ = 4 Ω. Find the total equivalent resistance R_eq, source current I_s, and current I₄ through R₄.",
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Collapse ladder from right to left",
          "explanation": "Combine R₃ + R₄ in series, then in parallel with R₂:",
          "equation": "R_{34} = R_3 + R_4 = 2 + 4 = 6 Ω\nR_p = (R_2 × R_{34}) / (R_2 + R_{34}) = (6 × 6) / 12 = 3 Ω\n∴  R_{eq} = R_1 + R_p = 4 + 3 = 7 Ω"
        },
        {
          "stepTitle": "Step 2: Find source current I_s and branch current I₄",
          "explanation": "Apply Ohm’s Law and the Current Divider Rule:",
          "equation": "I_s = 30 / 7 = 4.29 A\nI_4 = I_s · [ R_2 / (R_2 + R_{34}) ]\n∴  I_4 = 4.29 × (6 / 12) = 2.14 A"
        }
      ]
    },
    {
      "id": "u02-b6",
      "type": "theory",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · Robert L. Boylestad (Introductory Circuit Analysis, Ch. 7)",
      "title": "Balanced Wheatstone Bridge Condition",
      "summaryText": "A 4-arm Wheatstone bridge is balanced (I_G = 0 A) when the products of opposite arm resistances are equal: R₁R₄ = R₂R₃.",
      "memorizeStatements": [
        "A 4-arm Wheatstone bridge is balanced (I_G = 0 A) when the products of opposite arm resistances are equal: R₁R₄ = R₂R₃."
      ],
      "equations": [
        {
          "label": "Balanced Wheatstone Bridge Ratio",
          "formula": "R_1 / R_2 = R_3 / R_4   ⟺   R_1 R_4 = R_2 R_3   (when I_G = 0)"
        }
      ]
    }
  ]
};

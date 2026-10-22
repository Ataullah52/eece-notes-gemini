import type { ChapterNote } from "../../types.ts";

export const EECE1111_CH05: ChapterNote = {
  "id": "eece1111-ch05",
  "unitNumber": "Module 05",
  "title": "AC Network Theorem",
  "summary": "Thevenin’s theorem, Norton’s theorem, superposition theorem, Millman’s theorem, Substitution theorem, Maximum power transfer theorem and Reciprocity Theorem.",
  "estimatedMinutes": 35,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "u05-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · AC Network Theorems & Complex Conjugate Matching",
      "title": "Maximum Average Power Transfer in AC Networks",
      "summaryText": "For a complex load impedance Z_L = R_L + jX_L connected to an AC Thevenin network Z_Th = R_Th + jX_Th, maximum average power occurs when Z_L = Z_Th* = R_Th − jX_Th.",
      "memorizeStatements": [
        "For a complex load impedance Z_L = R_L + jX_L connected to an AC Thevenin network Z_Th = R_Th + jX_Th, maximum average power occurs when Z_L = Z_Th* = R_Th − jX_Th."
      ],
      "paragraphs": [
        "In sinusoidal steady-state AC circuits, all DC network theorems (Superposition, Thevenin, Norton, Millman, Substitution, and Reciprocity) extend directly to the frequency domain by replacing real voltages/currents with phasors (V, I) and resistances with complex impedances (Z = R + jX).",
        "For Maximum Average Power Transfer to a variable complex load Z_L = R_L + jX_L, the load reactance must first cancel the Thevenin reactance (X_L = −X_Th) and the load resistance must match the Thevenin resistance (R_L = R_Th)."
      ],
      "equations": [
        {
          "label": "Complex Conjugate Impedance Matching Condition",
          "formula": "Z_L = Z_{Th}^*   ⟺   R_L = R_{Th}  and  X_L = −X_{Th}",
          "units": "Ohms (Ω)"
        },
        {
          "label": "Maximum Average AC Power Transferred (using RMS V_Th)",
          "formula": "P_{max} = |V_{Th,rms}|² / (4 · R_{Th}) = |V_{Th,peak}|² / (8 · R_{Th})",
          "units": "Watts (W)"
        },
        {
          "label": "Purely Resistive Load Restriction (X_L = 0)",
          "formula": "R_L = |Z_{Th}| = √(R_{Th}² + X_{Th}²)",
          "units": "Ohms (Ω) when load reactance cannot be varied"
        }
      ]
    },
    {
      "id": "u05-b2",
      "type": "pyq",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · PUST EECE Final Exam 2022 Q5(b) & 2021 Q5(c)",
      "title": "AC Thevenin Equivalent & Maximum Average Power",
      "summaryText": "Given Z_Th = 4 + j3 Ω and V_Th = 20∠0° V (RMS), find Z_L for maximum average power and compute P_max.",
      "examYears": [
        "2022",
        "2021"
      ],
      "marks": "6 Marks",
      "problemStatement": "An AC two-terminal network has a Thevenin open-circuit RMS voltage V_Th = 20∠0° V and Thevenin impedance Z_Th = 4 + j3 Ω. Determine (a) the complex load impedance Z_L for maximum average power transfer and P_max, and (b) the value of a purely resistive load R_L for maximum power.",
      "solutionSteps": [
        {
          "stepTitle": "Part (a) & Part (b): Complex Conjugate vs. Purely Resistive Load",
          "explanation": "Apply Z_L = Z_Th* for Part (a) and R_L = |Z_Th| for Part (b):",
          "equation": "(a) Z_L = Z_{Th}^* = 4 − j3 Ω\n    P_{max} = |V_{Th,rms}|² / (4 R_{Th}) = 20² / (4 × 4)\n    ∴  Z_L = 4 − j3 Ω,   P_{max} = 25 W\n\n(b) For purely resistive load (X_L = 0):\n    R_L = √(4² + 3²)\n    ∴  R_L = 5 Ω"
        }
      ]
    },
    {
      "id": "u05-b3",
      "type": "theory",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · Alexander & Sadiku (Ch. 10 & Ch. 11)",
      "title": "AC Superposition with Multi-Frequency Sources",
      "summaryText": "When AC sources operate at different angular frequencies ω₁ ≠ ω₂, phasors cannot be added directly; sum the time-domain responses.",
      "memorizeStatements": [
        "When AC sources operate at different angular frequencies ω₁ ≠ ω₂, phasors cannot be added directly; sum the time-domain responses."
      ],
      "equations": [
        {
          "label": "Multi-Frequency Superposition Rule",
          "formula": "v(t) = v_{DC} + v_1(t; ω_1) + v_2(t; ω_2)"
        }
      ]
    },
    {
      "id": "u05-b4",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · Corcoran & Kerchner (Alternating-Current Circuits)",
      "title": "AC Millman’s & Norton Phasor Equivalence",
      "summaryText": "Convert parallel AC voltage branches into Norton phasor currents I_N = V_k Y_k and sum admittances Y_eq = ∑ Y_k.",
      "equations": [
        {
          "label": "AC Phasor Millman Formula",
          "formula": "V_{eq} = (∑ V_k Y_k) / (∑ Y_k),   where Y_k = 1 / Z_k"
        }
      ]
    }
  ]
};

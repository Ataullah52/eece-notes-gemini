import type { ChapterNote } from "../../types.ts";

export const EECE1111_CH06: ChapterNote = {
  "id": "eece1111-ch06",
  "unitNumber": "Module 06",
  "title": "Sinusoidal Functions",
  "summary": "Instantaneous current, voltage, power, effective current and voltage, phasors and complex quantities. Impedance, admittance, reactance, susceptance of RL, RC and RLC branches.",
  "estimatedMinutes": 45,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "u06-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Sinusoidal Steady-State, Phasors & RLC Branch Impedance",
      "title": "Phasors, Complex Impedance & Admittance of RLC Branches",
      "summaryText": "Impedance Z = R + jX = |Z|∠θ (Ω) and Admittance Y = 1/Z = G + jB (S), where X_L = ωL and X_C = 1/(ωC).",
      "memorizeStatements": [
        "Impedance Z = R + jX = |Z|∠θ (Ω) and Admittance Y = 1/Z = G + jB (S), where X_L = ωL and X_C = 1/(ωC)."
      ],
      "paragraphs": [
        "A sinusoidal waveform v(t) = V_m cos(ωt + φ) is represented in the phasor domain as V = V_m∠φ (or in RMS form as (V_m/√2)∠φ). Time differentiation d/dt corresponds to multiplying by jω, and integration ∫ dt corresponds to dividing by jω.",
        "In an inductive branch (RL), voltage leads current by phase angle θ = tan⁻¹(X_L/R) > 0. In a capacitive branch (RC), current leads voltage (θ = −tan⁻¹(X_C/R) < 0)."
      ],
      "table": {
        "caption": "Table 6.1 — Impedance, Reactance, Admittance & Susceptance of Passive Elements",
        "headers": [
          "Element / Branch",
          "Impedance Z = R + jX (Ω)",
          "Admittance Y = G + jB (S)",
          "Phase Angle Relation"
        ],
        "rows": [
          [
            "Resistor (R)",
            "Z_R = R + j0",
            "Y_R = G = 1/R",
            "v(t) and i(t) in phase (θ = 0°)"
          ],
          [
            "Inductor (L)",
            "Z_L = jωL = jX_L",
            "Y_L = −j / (ωL) = −jB_L",
            "v(t) leads i(t) by 90°"
          ],
          [
            "Capacitor (C)",
            "Z_C = −j / (ωC) = −jX_C",
            "Y_C = jωC = +jB_C",
            "i(t) leads v(t) by 90°"
          ],
          [
            "Series RLC Branch",
            "Z = R + j(X_L − X_C)",
            "Y = [R − j(X_L − X_C)] / [R² + (X_L − X_C)²]",
            "tan θ = (X_L − X_C) / R"
          ]
        ]
      }
    },
    {
      "id": "u06-b2",
      "type": "pyq",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · PUST EECE Final Exam 2023 Q6(a) & 2021 Q6(b)",
      "title": "Series RLC Impedance, Power Factor & Average Power",
      "summaryText": "Calculate Z, Y, current phasor I, power factor cos θ, and average power P = V_rms I_rms cos θ for a series RLC branch.",
      "examYears": [
        "2023",
        "2021"
      ],
      "marks": "7 Marks",
      "problemStatement": "A series RLC branch with R = 8 Ω, inductive reactance X_L = 12 Ω, and capacitive reactance X_C = 6 Ω is connected across an AC voltage source v(t) = 100√2 cos(314t) V. Find (1) total impedance Z and admittance Y, (2) RMS current I_rms and phase angle θ, and (3) power factor and average power absorbed.",
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Compute Z, Y, I_rms, and Average Power P",
          "explanation": "Combine net reactance X = X_L − X_C = 12 − 6 = 6 Ω:",
          "equation": "Z = 8 + j(12 − 6) = 8 + j6 = 10∠36.87° Ω\nY = 1 / Z = (8 − j6) / 100 = 0.08 − j0.06 S\nI_{rms} = V_{rms} / Z = (100∠0°) / (10∠36.87°) = 10∠−36.87° A\nPower factor:  pf = cos(36.87°) = 0.8 (lagging)\nAverage power: P = V_{rms} I_{rms} cos θ = 100 × 10 × 0.8\n∴  Z = 10∠36.87° Ω,   I_{rms} = 10∠−36.87° A,   P = 800 W (pf = 0.8 lagging)"
        }
      ]
    },
    {
      "id": "u06-b3",
      "type": "theory",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · B. L. Theraja Vol. I (Ch. 11–13) & Alexander & Sadiku (Ch. 9)",
      "title": "Instantaneous, Average, Reactive & Complex Power",
      "summaryText": "Complex power S = V_rms I_rms* = P + jQ (VA), where P = V_rms I_rms cos θ (W) and Q = V_rms I_rms sin θ (VAR).",
      "memorizeStatements": [
        "Complex power S = V_rms I_rms* = P + jQ (VA), where P = V_rms I_rms cos θ (W) and Q = V_rms I_rms sin θ (VAR)."
      ],
      "equations": [
        {
          "label": "Complex, Active & Reactive Power Triangle",
          "formula": "S = P + jQ = V_{rms} I_{rms}^*   |   |S| = √(P² + Q²),   pf = cos θ = P / |S|"
        }
      ]
    },
    {
      "id": "u06-b4",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · Corcoran & Kerchner & Robert L. Boylestad (Ch. 15)",
      "title": "Series-Parallel Admittance Conversion (Conductance & Susceptance)",
      "summaryText": "For a parallel RL or RC branch, sum the conductances G = ∑ G_k and susceptances B = ∑ B_k directly.",
      "memorizeStatements": [
        "For a parallel RL or RC branch, sum the conductances G = ∑ G_k and susceptances B = ∑ B_k directly."
      ],
      "equations": [
        {
          "label": "Series Impedance (R + jX) to Parallel Admittance (G + jB)",
          "formula": "G = R / (R² + X²),   B = −X / (R² + X²)"
        }
      ]
    }
  ]
};

import type { ChapterNote } from "../../types.ts";

export const EECE1111_CH01: ChapterNote = {
  "id": "eece1111-ch01",
  "unitNumber": "Module 01",
  "title": "Circuit Variables and Elements",
  "summary": "Voltage, current, power, energy, independent and dependent sources, resistance, inductance and capacitance. Introduce to non-sinusoidal wave, calculation of RMS and average value for non-sinusoidal waveforms.",
  "estimatedMinutes": 35,
  "lastUpdated": "October 2026",
  "blocks": [
    {
      "id": "u01-b1",
      "type": "theory",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 01 & 02 (Professor Board Emphasis)",
      "title": "Passive Sign Convention (PSC) & Power Direction Criterion",
      "summaryText": "Whenever reference current i enters the positive (+) voltage terminal, use p = +vi. If current enters the negative (−) terminal, use p = −vi.",
      "memorizeStatements": [
        "Whenever reference current i enters the positive (+) voltage terminal, use p = +vi.",
        "If current enters the negative (−) terminal, use p = −vi."
      ],
      "paragraphs": [
        "In circuit analysis, assigning power as absorbed or supplied requires inspecting the relative orientation of the voltage polarity (+ / −) and the current arrow before substituting signed numbers.",
        "Under the Passive Sign Convention (PSC), if the current arrow enters the positive (+) terminal of an element, calculate instantaneous power as p = +v · i. Conversely, if the current arrow enters the negative (−) terminal (leaves the positive terminal), negate the expression to p = −v · i."
      ],
      "bulletPoints": [
        "Result p > 0 W: The element is absorbing (consuming) electric power — behaves as a passive load or resistor.",
        "Result p < 0 W: The element is supplying (delivering) electric power to the circuit — behaves as an active source.",
        "Conservation of Power Check: In any isolated circuit at any instant t, the algebraic sum of power across all elements is strictly zero (∑ p = 0)."
      ],
      "equations": [
        {
          "label": "Current Entering + Terminal",
          "formula": "p(t) = +v(t) · i(t)",
          "units": "Watts (W = J/s)",
          "note": "Standard Passive Sign Convention orientation"
        },
        {
          "label": "Current Leaving + Terminal",
          "formula": "p(t) = −v(t) · i(t)",
          "units": "Watts (W)",
          "note": "Active generator orientation"
        },
        {
          "label": "Total Circuit Power Balance",
          "formula": "∑ p_absorbed = ∑ p_supplied   <=>   ∑ p_k = 0",
          "units": "Watts (W)",
          "note": "Mandatory verification check in exam problems"
        }
      ],
      "interactiveDiagramId": "passive-sign",
      "professorTip": "In semester exams, always write two explicit steps: (1) identify whether current enters the + or − terminal to fix the formula sign, and (2) substitute the numerical signs of v and i inside parentheses."
    },
    {
      "id": "u01-b2",
      "type": "definition",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · Final Exam 2023 Q1(a), 2021 Q1(a), 2019 Q1(b)",
      "title": "Electric Charge, Current, Voltage & Energy Definitions",
      "summaryText": "Electric charge q is the fundamental electrical property of matter in Coulombs (C). Electric current i = dq/dt is the time rate of change of charge in Amperes (A). Voltage v_ab = dw/dq is the work required per unit charge in Volts (V).",
      "memorizeStatements": [
        "Electric charge q is the fundamental electrical property of matter in Coulombs (C).",
        "Electric current i = dq/dt is the time rate of change of charge in Amperes (A).",
        "Voltage v_ab = dw/dq is the work required per unit charge in Volts (V)."
      ],
      "examYears": [
        "2023",
        "2021",
        "2019"
      ],
      "marks": "4 Marks",
      "paragraphs": [
        "Electric Charge (q) is the fundamental electrical property of atomic matter, measured in Coulombs (C). One electron carries a negative charge of −1.602 × 10^(−19) C, meaning 1 C equals the charge of 6.24 × 10^(18) electrons.",
        "Electric Current (i) is the time rate of change of charge passing through a specified cross-sectional area, measured in Amperes (A). Voltage or Potential Difference (v_ab) between node a and node b is the energy (work) required to move a unit positive charge (+1 C) from terminal b (−) to terminal a (+)."
      ],
      "equations": [
        {
          "label": "Instantaneous Current",
          "formula": "i(t) = dq(t) / dt",
          "units": "1 A = 1 C/s"
        },
        {
          "label": "Net Charge Transferred",
          "formula": "q(t) = ∫ [t0 to t] i(τ) dτ + q(t0)",
          "units": "Coulombs (C)"
        },
        {
          "label": "Voltage (Potential Difference)",
          "formula": "v_{ab} = dw / dq",
          "units": "1 V = 1 J/C = 1 N·m/C"
        },
        {
          "label": "Instantaneous Power via Chain Rule",
          "formula": "p = dw / dt = (dw / dq) · (dq / dt) = v · i",
          "units": "1 W = 1 J/s"
        }
      ]
    },
    {
      "id": "u01-b3",
      "type": "memorize",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 02 Summary Sheet",
      "title": "Power Sign Matrix & Dependent Source Classification",
      "summaryText": "Quick-reference lookup table for all four terminal-polarity combinations and the four linear dependent source types.",
      "paragraphs": [
        "Commit both the four-case Passive Sign Convention truth table and the four dependent source symbols (VCVS, CCVS, VCCS, CCCS) to memory for rapid problem setup."
      ],
      "table": {
        "caption": "Table 1.1 — Complete Four-Case Power Sign Matrix",
        "headers": [
          "Terminal Entry of Current i",
          "Signs of v and i",
          "Power Formula & Sign of p",
          "Physical State"
        ],
        "rows": [
          [
            "Enters + terminal",
            "v > 0, i > 0  (or v < 0, i < 0)",
            "p = +v · i > 0",
            "Absorbing Power (Passive Load)"
          ],
          [
            "Enters + terminal",
            "v > 0, i < 0  (or v < 0, i > 0)",
            "p = +v · i < 0",
            "Supplying Power (Active Source)"
          ],
          [
            "Enters − terminal (Leaves +)",
            "v > 0, i > 0  (or v < 0, i < 0)",
            "p = −v · i < 0",
            "Supplying Power (Active Source)"
          ],
          [
            "Enters − terminal (Leaves +)",
            "v < 0, i > 0  (or v > 0, i < 0)",
            "p = −v · i > 0",
            "Absorbing Power (Passive Load)"
          ]
        ]
      }
    },
    {
      "id": "u01-b4",
      "type": "example",
      "priorityTier": 1,
      "sourceCitation": "Class Note · Lecture 03 Worked Problem (Professor Board Example)",
      "title": "Time-Varying Charge Waveform & Instantaneous Power",
      "summaryText": "Given q(t) = 5t·sin(4πt) mC and v(t) = 2·cos(4πt) V, determine i(t) and p(t) at t = 0.25 s.",
      "problemStatement": "The total charge entering the positive terminal of a circuit element is given by q(t) = 5t · sin(4πt) mC, while the voltage across the element (with + at the entry terminal) is v(t) = 2 · cos(4πt) V. Calculate the current i(t) and the power absorbed at t = 0.25 s.",
      "givenData": [
        "q(t) = 5t · sin(4πt) mC",
        "v(t) = 2 · cos(4πt) V",
        "Evaluation time t = 0.25 s (Note: 4πt is in radians)"
      ],
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Differentiate charge q(t) using the product rule",
          "explanation": "Since current enters the positive terminal, i(t) = dq/dt:",
          "equation": "i(t) = d/dt [5t · sin(4πt)] = 5 · sin(4πt) + 20πt · cos(4πt)  mA"
        },
        {
          "stepTitle": "Step 2: Evaluate i(t) and v(t) at t = 0.25 s",
          "explanation": "Substitute t = 0.25 s so that angle 4π(0.25) = π rad (where sin(π) = 0 and cos(π) = −1):",
          "equation": "i(0.25) = 5·sin(π) + 20π(0.25)·cos(π) = 0 + 5π(−1) = −15.708 mA\nv(0.25) = 2 · cos(π) = −2.0 V"
        },
        {
          "stepTitle": "Step 3: Compute power p(0.25) using Passive Sign Convention",
          "explanation": "Because current enters the positive terminal, p = +v · i:",
          "equation": "p(0.25) = (−2.0 V) × (−15.708 mA) = +31.42 mW (Absorbing)"
        }
      ],
      "finalAnswer": "i(0.25 s) = −15.71 mA,  p(0.25 s) = +31.42 mW (Absorbed)"
    },
    {
      "id": "u01-b5",
      "type": "pyq",
      "priorityTier": 2,
      "sourceCitation": "Previous Year Question · Semester Final 2023 Q1(c) & 2020 Q1(b)",
      "title": "Conservation of Power in a Five-Element Network",
      "summaryText": "Calculate the power of each element in a 5-branch network and verify ∑ p = 0 to find unknown current i_x.",
      "examYears": [
        "2023",
        "2020"
      ],
      "marks": "7 Marks",
      "problemStatement": "A closed 5-element DC network has measured branch powers: p1 = −205 W (Independent 25 V Source), p2 = +60 W (Resistor R1), p3 = +45 W (Resistor R2), and p4 = +30 W (Load Element). Element 5 is a Current-Controlled Voltage Source (CCVS) with terminal voltage v5 = 3.5 i_x (where i_x = 4 A) and branch current i5 entering its positive terminal. Find the branch current i5 and verify energy conservation.",
      "givenData": [
        "p1 = −205 W, p2 = +60 W, p3 = +45 W, p4 = +30 W",
        "Control current i_x = 4 A  =>  Dependent voltage v5 = 3.5 × 4 = 14 V"
      ],
      "solutionSteps": [
        {
          "stepTitle": "Step 1: Apply Conservation of Power (∑ p_k = 0)",
          "explanation": "The algebraic sum of instantaneous power for all five elements must equal zero:",
          "equation": "p1 + p2 + p3 + p4 + p5 = 0   =>   −205 + 60 + 45 + 30 + p5 = 0"
        },
        {
          "stepTitle": "Step 2: Solve for p5",
          "explanation": "Isolate the power of the fifth element:",
          "equation": "−70 + p5 = 0   =>   p5 = +70 W (Absorbing Power)"
        },
        {
          "stepTitle": "Step 3: Determine branch current i5",
          "explanation": "Since i5 enters the positive terminal of Element 5 (v5 = 14 V):",
          "equation": "p5 = +v5 · i5   =>   70 = 14 · i5   =>   i5 = +5.0 A"
        }
      ],
      "finalAnswer": "p5 = +70 W (Absorbed),  i5 = 5.0 A,  ∑ p = 0 W verified."
    },
    {
      "id": "u01-b6",
      "type": "theory",
      "priorityTier": 3,
      "sourceCitation": "Professor-Followed Book · B. L. Theraja & Alexander & Sadiku Ch. 1",
      "title": "RMS and Average Values for Periodic Waveforms",
      "summaryText": "For any periodic waveform x(t) with period T: Average value X_avg = (1/T) ∫ x(t) dt and Effective (RMS) value X_rms = √[(1/T) ∫ x²(t) dt].",
      "memorizeStatements": [
        "For any periodic waveform x(t) with period T: Average value X_avg = (1/T) ∫ x(t) dt and Effective (RMS) value X_rms = √[(1/T) ∫ x²(t) dt]."
      ],
      "paragraphs": [
        "An alternating or non-sinusoidal periodic waveform x(t) = x(t + T) is characterized by its average (DC) component and its Root-Mean-Square (RMS or effective) value, which represents the equivalent DC value that delivers the same average power to a resistor.",
        "For a composite non-sinusoidal wave containing a DC term plus harmonics x(t) = X_0 + X_{m1}sin(ωt) + X_{m2}sin(2ωt + φ_2) + ···, the total RMS value is the square root of the sum of squares of the individual RMS components."
      ],
      "equations": [
        {
          "label": "Full-Cycle Average (Mean) Value",
          "formula": "X_{avg} = (1 / T) ∫_0^T x(t) dt",
          "units": "V or A"
        },
        {
          "label": "Effective / Root-Mean-Square (RMS) Value",
          "formula": "X_{rms} = √[ (1 / T) ∫_0^T x²(t) dt ]",
          "units": "V or A"
        },
        {
          "label": "Multi-Harmonic Non-Sinusoidal RMS Value",
          "formula": "X_{rms} = √[ X_0² + (X_{m1}/√2)² + (X_{m2}/√2)² + ··· ]",
          "units": "Form Factor K_f = X_{rms} / X_{avg}, Peak Factor K_p = X_{max} / X_{rms}"
        }
      ]
    },
    {
      "id": "u01-b7",
      "type": "example",
      "priorityTier": 4,
      "sourceCitation": "Syllabus Book · Robert L. Boylestad & R. C. Dorf & J. A. Svoboda",
      "title": "RMS & Average Values for Sawtooth and Composite Waveforms",
      "summaryText": "For a periodic sawtooth wave v(t) = (V_m / T)t on [0, T], V_avg = V_m / 2 and V_rms = V_m / √3.",
      "memorizeStatements": [
        "For a periodic sawtooth wave v(t) = (V_m / T)t on [0, T], V_avg = V_m / 2 and V_rms = V_m / √3."
      ],
      "problemStatement": "(1) Derive the average value V_avg and effective (RMS) value V_rms of a periodic sawtooth voltage v(t) = (V_m / T)t for 0 ≤ t < T. (2) Calculate the total RMS current of i(t) = 3 + 4√2 sin(ωt) + 3√2 cos(3ωt) A.",
      "solutionSteps": [
        {
          "stepTitle": "1. Sawtooth Waveform Average & RMS Derivation",
          "explanation": "Integrate v(t) and v²(t) over one period [0, T]:",
          "equation": "V_{avg} = (1 / T) ∫_0^T (V_m / T)t dt\n        = (V_m / T²) [ t² / 2 ]_0^T\n∴  V_{avg} = V_m / 2 = 0.5 V_m\n\nV_{rms} = √[ (1 / T) ∫_0^T (V_m² / T²)t² dt ]\n        = √[ (V_m² / T³) (T³ / 3) ]\n∴  V_{rms} = V_m / √3 ≈ 0.577 V_m"
        },
        {
          "stepTitle": "2. Multi-Harmonic RMS Current Calculation",
          "explanation": "Combine the DC term and the RMS values of each orthogonal harmonic:",
          "equation": "I_0 = 3 A,   I_{rms,1} = (4√2) / √2 = 4 A,   I_{rms,3} = (3√2) / √2 = 3 A\nI_{rms} = √(I_0² + I_{rms,1}² + I_{rms,3}²)\n        = √(3² + 4² + 3²)\n∴  I_{rms} = √34 ≈ 5.83 A"
        }
      ]
    }
  ]
};

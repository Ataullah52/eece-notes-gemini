import type { ChapterNote } from '../../types.ts';

export const EECE1111_CH05: ChapterNote = {
  id: 'eece1111-ch05',
  unitNumber: 'Module 05',
  title: 'AC Network Theorem',
  summary:
    'Phasor-domain extensions of Thevenin’s theorem, Norton’s theorem, Superposition theorem, Millman’s theorem, Substitution theorem, Complex Conjugate Maximum Average Power Transfer theorem, and AC Reciprocity Theorem.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'u05-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Curriculum.md · PUST Final 2025 Q7(b), 2024 Q6(a), 2023 Q7(b) · Alexander & Sadiku Ch. 10 & Section 11.3 · B. L. Theraja Ch. 13',
      title: 'AC Thevenin, Norton & Conjugate Maximum Power Transfer',
      summaryText:
        'Frequency-domain statements of AC Thevenin and Norton theorems, complete calculus derivation of Complex Conjugate Impedance Matching Z_L = Z_Th* = R_Th − jX_Th, and purely resistive load matching R_L = |Z_Th|.',
      memorizeStatements: [
        'AC Thevenin’s & Norton’s Theorems: Any linear two-terminal sinusoidal steady-state AC network operating at angular frequency ω can be replaced by a phasor Thevenin voltage source V_Th = V_oc in series with complex Thevenin impedance Z_Th = R_Th + jX_Th, or by a Norton current source I_N = I_sc = V_Th / Z_Th in parallel with Z_N = Z_Th.',
        'Maximum Average Power Transfer Theorem (AC Complex Load) [PUST 2025 Q7(b) & 2024 Q6(a)]: A linear AC network with Thevenin impedance Z_Th = R_Th + jX_Th delivers maximum average power to a variable complex load Z_L = R_L + jX_L when the load impedance is the complex conjugate of the Thevenin impedance: Z_L = Z_Th* = R_Th − jX_Th (i.e., R_L = R_Th and X_L = −X_Th).',
        'Maximum Average AC Power Formula: Under conjugate matching (Z_L = Z_Th*), the net reactance vanishes (X_Th + X_L = 0), unity power factor is achieved, and maximum average load power is P_max = |V_Th,rms|² / (4 R_Th) = |V_Th,peak|² / (8 R_Th).',
        'Purely Resistive AC Load Restriction (X_L = 0): If the load is restricted to a pure resistance R_L (so X_L cannot be varied), maximum average power occurs when R_L equals the magnitude of the Thevenin impedance: R_L = |Z_Th| = √(R_Th² + X_Th²).',
      ],
      bulletPoints: [
        'Complete Derivation of AC Maximum Average Power Transfer Condition [PUST 2025 Q7(b) & 2024 Q6(a) — Sadiku Section 11.3]:',
        '1. Replace the linear AC circuit connected to complex load Z_L = R_L + jX_L with its Thevenin equivalent: RMS phasor voltage V_{Th} in series with Z_{Th} = R_{Th} + jX_{Th}.',
        '2. The total series impedance is Z_{total} = (R_{Th} + R_L) + j(X_{Th} + X_L), so the RMS load current magnitude is:\n  |I_L| = |V_{Th}| / √[ (R_{Th} + R_L)² + (X_{Th} + X_L)² ]',
        '3. The average real power absorbed by the load is:\n  P_L = |I_L|² R_L = (|V_{Th}|² R_L) / [ (R_{Th} + R_L)² + (X_{Th} + X_L)² ]',
        '4. Step A — Maximize P_L with respect to load reactance X_L (holding R_L fixed): Because (X_{Th} + X_L)² ≥ 0 appears only in the denominator, P_L is maximized when the denominator is minimized, i.e., when:\n  X_{Th} + X_L = 0   ⇒   X_L = −X_{Th}\n  (An inductive source reactance +jX_{Th} requires a capacitive load reactance −jX_{Th}, and vice versa).',
        '5. Step B — Maximize P_L with respect to load resistance R_L: Substituting X_L = −X_{Th} reduces P_L to the familiar DC form:\n  P_L = (|V_{Th}|² R_L) / (R_{Th} + R_L)²\n  Setting ∂P_L / ∂R_L = |V_{Th}|² (R_{Th} − R_L) / (R_{Th} + R_L)³ = 0 yields:\n  R_L = R_{Th}',
        '6. Combining R_L = R_{Th} and X_L = −X_{Th} proves the Complex Conjugate Matching Law:\n  Z_L = R_L + jX_L = R_{Th} − jX_{Th} = Z_{Th}^*   and   P_{max} = |V_{Th,rms}|² / (4 R_{Th}) = |V_{Th,m}|² / (8 R_{Th}).',
      ],
      table: {
        caption: 'Table 5.1 — Summary of Maximum Power Transfer Conditions (DC vs. AC Complex vs. AC Purely Resistive)',
        headers: ['Operating Regime', 'Optimality Condition on Load', 'Maximum Average Load Power P_max'],
        rows: [
          [
            '1. DC Resistive Network (R_Th)',
            'R_L = R_Th',
            'P_max = V_Th² / (4 R_Th)   (at η = 50%)',
          ],
          [
            '2. AC Complex Load (Z_L = R_L + jX_L)',
            'Z_L = Z_Th* = R_Th − jX_Th   (R_L = R_Th, X_L = −X_Th)',
            'P_max = |V_Th,rms|² / (4 R_Th) = |V_Th,m|² / (8 R_Th)',
          ],
          [
            '3. AC Purely Resistive Load (X_L = 0 fixed)',
            'R_L = |Z_Th| = √(R_Th² + X_Th²)',
            'P_max = |V_Th,rms|² / [ 2 (R_Th + |Z_Th|) ]',
          ],
        ],
      },
      equations: [
        {
          label: 'Complex Conjugate Matching & Maximum Average AC Power',
          formula:
            'Z_L = Z_{Th}^* = R_{Th} − jX_{Th}   |   P_{max} = |V_{Th,rms}|² / (4 R_{Th}) = |V_{Th,m}|² / (8 R_{Th})',
          units: 'Ω and W',
        },
      ],
      examYears: ['2025', '2024', '2023'],
      marks: '3.67–4 Marks',
    },
    {
      id: 'u05-b2',
      type: 'memorize',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceCitation:
        'Curriculum.md · PUST Final 2024 Q5(a), 2023 Q7(c), 2022 Q5(b), 2021 Q5(c) · Alexander & Sadiku Ch. 10 · Corcoran & Kerchner · B. L. Theraja Ch. 13',
      title: 'AC Superposition, Millman’s, Reciprocity & Substitution Theorems',
      summaryText:
        'Formal statements, proofs, and frequency-domain rules for AC Superposition (single vs. multi-frequency), AC Millman’s Theorem, AC Reciprocity Theorem (asked in 2024, 2023, 2021), and AC Substitution Theorem.',
      memorizeStatements: [
        'AC Superposition Theorem: In a linear AC network, if all independent sources operate at the SAME angular frequency ω, their phasor responses can be summed algebraically in the frequency domain (I = I₁ + I₂); if sources operate at DIFFERENT frequencies (ω₁ ≠ ω₂ or DC + AC), phasors cannot be added — each source must be solved at its own frequency (X_L = ω_k L, X_C = 1/ω_k C) and summed in the time domain: i(t) = i_DC + i₁(t) + i₂(t).',
        'AC Millman’s Theorem [PUST 2022 Q5(b)]: N parallel AC branches having phasor voltage sources V_1, V_2, …, V_N in series with complex impedances Z_1, Z_2, …, Z_N (admittances Y_k = 1 / Z_k) reduce to a single equivalent phasor voltage source V_eq = (∑ V_k Y_k) / (∑ Y_k) in series with Z_eq = 1 / (∑ Y_k).',
        'AC Reciprocity Theorem [PUST 2024 Q5(a), 2023 Q7(c), 2021 Q5(c)]: In any linear, bilateral, single-source AC network operating at constant frequency ω, the ratio of the phasor excitation voltage E in branch 1 to the resulting phasor current I in branch 2 remains identical in both magnitude and phase angle when the positions of the ideal AC voltage source and ideal zero-impedance ammeter are interchanged.',
        'AC Substitution Theorem: Any branch in an AC network with known phasor terminal voltage V_ab and phasor current I_ab can be replaced by an ideal AC voltage source V_ab, an ideal AC current source I_ab, or a complex impedance Z = V_ab / I_ab without altering any other voltage or current in the network.',
      ],
      bulletPoints: [
        'Statement, Explanation & Proof of the AC Reciprocity Theorem [Asked in PUST 2024 Q5(a), 2023 Q7(c) & 2021 Q5(c)]:',
        '1. Statement: In a linear, bilateral, passive AC network containing a single independent AC source E∠θ, if placing E∠θ in loop/branch 1 produces a phasor current I₂∠φ in a short-circuited ammeter in loop/branch 2, then moving E∠θ to loop/branch 2 (and short-circuiting the former source terminals in loop/branch 1) produces the exact same phasor current I₁′ = I₂∠φ in loop/branch 1.',
        '2. Proof via Two-Mesh T-Network (Impedance Z₁ in left arm, Z₂ in right arm, Z₃ in central shunt arm):',
        '   • State A (Source E in Mesh 1, Ammeter in Mesh 2): Mesh impedance equations are:\n     (Z₁ + Z₃) I₁ − Z₃ I₂ = E   and   −Z₃ I₁ + (Z₂ + Z₃) I₂ = 0\n     Solving for the response current I₂ in Mesh 2 gives:\n     I₂ = E · [ Z₃ / (Z₁Z₂ + Z₂Z₃ + Z₃Z₁) ]   ⇒   Z_T = E / I₂ = (Z₁Z₂ + Z₂Z₃ + Z₃Z₁) / Z₃.',
        '   • State B (Source E moved to Mesh 2, Ammeter in Mesh 1): Mesh equations become:\n     (Z₁ + Z₃) I₁′ − Z₃ I₂′ = 0   and   −Z₃ I₁′ + (Z₂ + Z₃) I₂′ = E\n     Solving for the response current I₁′ in Mesh 1 gives:\n     I₁′ = E · [ Z₃ / (Z₁Z₂ + Z₂Z₃ + Z₃Z₁) ] = I₂.',
        '3. Because Z_{12} = Z_{21} = −Z₃ in any linear bilateral network, the complex transfer impedance Z_T = E / I₂ = E / I₁′ is strictly invariant in both magnitude and phase (Proved).',
      ],
      equations: [
        {
          label: 'AC Phasor Millman’s Theorem & Multi-Frequency Superposition',
          formula:
            'V_{eq} = (∑_{k=1}^N V_k Y_k) / (∑_{k=1}^N Y_k),   Z_{eq} = 1 / (∑_{k=1}^N Y_k)   |   v(t) = v_{DC} + v_1(t; ω_1) + v_2(t; ω_2)',
          units: 'Y_k = 1 / Z_k in Siemens (S)',
        },
        {
          label: 'AC Reciprocity Transfer Impedance Invariance',
          formula:
            'E / I_2 = E / I_1′ = Z_{transfer} = (Z_1 Z_2 + Z_2 Z_3 + Z_3 Z_1) / Z_3',
          units: 'Ohms (Ω)',
        },
      ],
      examYears: ['2024', '2023', '2022', '2021'],
      marks: '3–4 Marks',
    },
    {
      id: 'u05-b3',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2024 Q6(c) · B. L. Theraja Vol. I Ch. 13 (AC Network Theorems)',
      title: 'AC Superposition Theorem Exam Problem (2024 Q6c)',
      summaryText:
        'Complete step-by-step solution to PUST 2024 Q6(c): find the phasor current through the central (3 + j5) Ω impedance in a two-source AC T-network using the Superposition Theorem.',
      examYears: ['2024'],
      marks: '4 Marks',
      problemStatement:
        '[PUST 2024 Q6(c)] Find the current through impedance Z₃ = (3 + j5) Ω in the two-loop AC circuit using the superposition theorem: Left branch has AC voltage source V₁ = 200∠30° V in series with Z₁ = (4 + j8) Ω; Center vertical branch has impedance Z₃ = (3 + j5) Ω; Right branch has AC voltage source V₂ = 100∠0° V in series with Z₂ = (5 − j6) Ω.',
      givenData: [
        'Left branch: V₁ = 200∠30° V = 173.21 + j100 V,  Z₁ = 4 + j8 = 8.944∠63.43° Ω',
        'Center branch: Z₃ = 3 + j5 = 5.831∠59.04° Ω',
        'Right branch: V₂ = 100∠0° V = 100 + j0 V,  Z₂ = 5 − j6 = 7.810∠(−50.19°) Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Compute Impedances Z₂ ∥ Z₃ and Z₁ ∥ Z₃',
          explanation:
            'Pre-calculate the parallel combinations and denominator sum Z_sum = Z₁Z₂ + Z₂Z₃ + Z₃Z₁:',
          equation:
            'Z_2 + Z_3 = (5 − j6) + (3 + j5) = 8 − j1 = 8.062∠(−7.13°) Ω\nZ_2 ∥ Z_3 = (5 − j6)(3 + j5) / (8 − j1) = (45 + j7) / (8 − j1) = 5.431 + j1.554 = 5.649∠15.97° Ω\n\nZ_1 + Z_3 = (4 + j8) + (3 + j5) = 7 + j13 = 14.765∠61.70° Ω\nZ_1 ∥ Z_3 = (4 + j8)(3 + j5) / (7 + j13) = (−28 + j44) / (7 + j13) = 1.725 + j2.624 = 3.140∠56.68° Ω',
        },
        {
          stepTitle: 'Step 2: Source 1 (V₁ = 200∠30° V) Acting Alone (V₂ Replaced by Short Circuit)',
          explanation:
            'Find total current I_T1 from V₁ and apply the AC Current Divider Rule to find downward current I′ in Z₃:',
          equation:
            'Z_{eq1} = Z_1 + (Z_2 ∥ Z_3) = (4 + j8) + (5.431 + j1.554) = 9.431 + j9.554 = 13.425∠45.37° Ω\nI_{T1} = V_1 / Z_{eq1} = (200∠30°) / (13.425∠45.37°) = 14.90∠(−15.37°) A\nBy Current Division into Z_3:\n  I′ = I_{T1} × [ Z_2 / (Z_2 + Z_3) ] = 14.90∠(−15.37°) × [ 7.810∠(−50.19°) / 8.062∠(−7.13°) ]\n  I′ = 14.43∠(−58.43°) A = 7.55 − j12.30 A (downward)',
        },
        {
          stepTitle: 'Step 3: Source 2 (V₂ = 100∠0° V) Acting Alone (V₁ Shorted) & Superposition Sum',
          explanation:
            'Find total current I_T2 from V₂, apply Current Division for I″ in Z₃, and add I = I′ + I″:',
          equation:
            'Z_{eq2} = Z_2 + (Z_1 ∥ Z_3) = (5 − j6) + (1.725 + j2.624) = 6.725 − j3.376 = 7.525∠(−26.66°) Ω\nI_{T2} = V_2 / Z_{eq2} = (100∠0°) / (7.525∠(−26.66°)) = 13.29∠26.66° A\nBy Current Division into Z_3:\n  I″ = I_{T2} × [ Z_1 / (Z_1 + Z_3) ] = 13.29∠26.66° × [ 8.944∠63.43° / 14.765∠61.70° ]\n  I″ = 8.05∠28.39° A = 7.08 + j3.83 A (downward)\nTotal Current through (3 + j5) Ω:\n  I = I′ + I″ = (7.55 − j12.30) + (7.08 + j3.83) = 14.63 − j8.47 A\n∴  I = 14.63 − j8.47 A = 16.91∠(−30.07°) A',
        },
      ],
      finalAnswer: 'I = 14.63 − j8.47 A = 16.91∠(−30.07°) A (downward through 3 + j5 Ω)',
    },
    {
      id: 'u05-b4',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2024 Q5(b) & 2023 Q7(b) · Alexander & Sadiku Practice Problem 10.9',
      title: 'AC Thevenin Equivalent with Dependent Source (2024 & 2023)',
      summaryText:
        'Complete step-by-step solution to the recurring PUST AC Thevenin exam problem (asked in both 2024 Q5b and 2023 Q7b) containing a 5∠0° A source and a 0.2V_o dependent current source.',
      examYears: ['2024', '2023'],
      marks: '4 Marks',
      problemStatement:
        '[PUST 2024 Q5(b) & 2023 Q7(b)] Determine the Thevenin equivalent (V_Th and Z_Th) of the AC circuit as seen from terminals a-b: Left vertical branch has a −j2 Ω capacitor in series with a 4 Ω resistor (connected to bottom rail b); top branch has an 8 Ω resistor (with voltage V_o, + on left, − on right) in series with a j4 Ω inductor leading to terminal a; middle horizontal branch has a 5∠0° A independent current source pointing right into terminal a; right vertical branch has a dependent current source 0.2V_o pointing upward into terminal a.',
      givenData: [
        'Left branch impedance: Z₁ = 4 − j2 Ω',
        'Top branch impedance: Z₂ = 8 + j4 Ω (with V_o across the 8 Ω resistor, + on left)',
        'Independent source: I_s = 5∠0° A (into node a); Dependent source: I_d = 0.2 V_o (into node a)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Find Open-Circuit Voltage V_Th = V_ab (Terminals a-b Open)',
          explanation:
            'Let Node 1 be the junction between Z₁ = 4 − j2 Ω and the 8 Ω resistor, and Node 2 be terminal a.Notice that I_s = 5 A leaves Node 1 and enters Node 2! Thus the net current entering the upper loop at Node 2 (5 + 0.2V_o) flows left through j4 Ω and 8 Ω into Node 1:',
          equation:
            'KCL at Node 2 (terminal a): Current flowing right-to-left through (8 + j4) Ω is I_{21} = 5 + 0.2 V_o\nSince V_o has + on left and − on right, V_o = −8 · I_{21}:\n  V_o = −8(5 + 0.2 V_o) = −40 − 1.6 V_o   ⇒   2.6 V_o = −40   ⇒   V_o = −40 / 2.6 = −15.385 V\nCurrent flowing downward through Z_1 = (4 − j2) Ω at Node 1:\n  I_1 = I_{21} − 5 = 0.2 V_o = 0.2(−15.385) = −3.077 A\nNode 1 Voltage:  V_1 = I_1 (4 − j2) = −3.077(4 − j2) = −12.308 + j6.154 V\nTerminal Voltage V_{Th} = V_2 = V_1 + I_{21}(8 + j4) = V_1 − (V_o / 8)(8 + j4):\n  V_{Th} = (−12.308 + j6.154) + 1.923(8 + j4) = 3.077 + j13.846 V\n∴  V_{Th} = 3.08 + j13.85 V = 14.18∠77.47° V',
        },
        {
          stepTitle: 'Step 2: Find Thevenin Impedance Z_Th (Deactivate 5∠0° A Source & Apply Test Voltage V_t = 1 V)',
          explanation:
            'Open the independent 5∠0° A current source. Now Z₁ = 4 − j2 Ω and Z₂ = 8 + j4 Ω are in series across terminals a-b (total series impedance Z_s = (4 − j2) + (8 + j4) = 12 + j2 Ω):',
          equation:
            'Apply test voltage V_t across terminals a-b:\n  Current from a through Z_2 and Z_1 to b is I_s = V_t / (12 + j2)\n  Controlling voltage V_o (+ on left of 8 Ω):  V_o = −8 I_s = −8 V_t / (12 + j2)\nBy KCL at terminal a, total test current I_t entering a is:\n  I_t = I_s − 0.2 V_o = [ 1 / (12 + j2) + 1.6 / (12 + j2) ] V_t = (2.6 / (12 + j2)) V_t\nTherefore, Thevenin Impedance Z_{Th} = V_t / I_t:\n  Z_{Th} = (12 + j2) / 2.6 = 4.615 + j0.769 Ω\n∴  Z_{Th} = 4.615 + j0.769 Ω = 4.68∠9.46° Ω',
        },
      ],
      finalAnswer: 'V_Th = 3.08 + j13.85 V = 14.18∠77.47° V,   Z_Th = 4.62 + j0.77 Ω = 4.68∠9.46° Ω',
    },
    {
      id: 'u05-b5',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3, 4],
      sourceCitation:
        'PUST Final Exam 2024 Q7(c) · Alexander & Sadiku Problem 9.71',
      title: 'AC Delta–Wye (Δ–Y) Impedance Reduction Problem (2024 Q7c)',
      summaryText:
        'Complete step-by-step solution to PUST 2024 Q7(c): find the total equivalent impedance Z_ab of the dual-Delta LC and resistor network using AC Δ → Y transformations.',
      examYears: ['2024'],
      marks: '4 Marks',
      problemStatement:
        '[PUST 2024 Q7(c)] Calculate the value of equivalent impedance Z_ab for the AC network: Terminal a connects to the top vertex of a balanced 3-inductor Delta (each arm has impedance j6 Ω); sharing the top vertex and right vertex is a balanced 3-capacitor Delta (each arm has impedance −j9 Ω); below the inductor Delta are two 20 Ω resistors connected to terminal b; below the capacitor Delta is a 10 Ω resistor connected to terminal b.',
      givenData: [
        'Balanced Inductor Delta: Z_ΔL = j6 Ω in all three arms',
        'Balanced Capacitor Delta: Z_ΔC = −j9 Ω in all three arms',
        'Lower resistive branches to terminal b: 20 Ω, 20 Ω, and 10 Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Convert Both Balanced Deltas into Equivalent Wye (Y) Networks',
          explanation:
            'For any balanced Delta with equal branch impedances Z_Δ, each equivalent Wye arm is Z_Y = Z_Δ / 3:',
          equation:
            'Inductor Δ → Y:   Z_{YL} = j6 / 3 = +j2 Ω  (in each of its three Y arms)\nCapacitor Δ → Y:  Z_{YC} = −j9 / 3 = −j3 Ω (in each of its three Y arms)',
        },
        {
          stepTitle: 'Step 2: Combine the Lower Parallel Resistive Branches and Wye Arms',
          explanation:
            'The two 20 Ω resistors in parallel combine to 20 ∥ 20 = 10 Ω. Collapse the series-parallel impedance paths from the lower terminals up to terminal a:',
          equation:
            'Parallel 20 Ω pair:  R_{20∥20} = (20 × 20) / (20 + 20) = 10 Ω\nLeft lower Y branch (in series with 10 Ω):   Z_{left} = 10 + j2 Ω\nRight lower Y branch (in series with 10 Ω):  Z_{right} = 10 − j3 Ω\nCombining the parallel Y branches and adding the input series Y arm:\n  Z_p = (10 + j2) ∥ (10 − j3) = (10 + j2)(10 − j3) / (20 − j1) = (106 − j10) / (20 − j1) = 5.312 − j0.234 Ω\n  Z_{ab} = j2 + Z_p = 5.31 + j1.77 Ω = 5.60∠18.4° Ω\n∴  Z_{ab} = 5.31 + j1.77 Ω (or 15.63 + j1.11 Ω depending on shared vertex connection)',
        },
      ],
      finalAnswer: 'Z_Y(L) = j2 Ω, Z_Y(C) = −j3 Ω,  Z_ab = 5.31 + j1.77 Ω = 5.60∠18.4° Ω',
    },
    {
      id: 'u05-b6',
      type: 'example',
      priorityTier: 3,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Alexander & Sadiku Ch. 10 & Ch. 11 · Corcoran & Kerchner (Alternating-Current Circuits) · B. L. Theraja Ch. 13',
      title: 'AC Maximum Power Transfer, Millman & Reciprocity Examples',
      summaryText:
        'Worked numerical problems illustrating AC Conjugate vs. Purely Resistive Maximum Power Transfer and AC Millman’s theorem for parallel impedance branches.',
      problemStatement:
        '(1) An AC two-terminal network has open-circuit RMS voltage V_Th = 20∠0° V and Thevenin impedance Z_Th = 4 + j3 Ω. Determine (a) the complex load impedance Z_L for maximum average power transfer and P_max, and (b) the value of a purely resistive load R_L for maximum power and the resulting load power. (2) Two parallel AC branches — Branch 1 with V₁ = 100∠0° V in series with Z₁ = 4 + j3 Ω and Branch 2 with V₂ = 80∠30° V in series with Z₂ = 6 − j8 Ω — feed a load Z_L = 10 Ω. Find V_eq and Z_eq using AC Millman’s Theorem.',
      givenData: [
        'Part (1): V_Th,rms = 20∠0° V, Z_Th = 4 + j3 Ω (R_Th = 4 Ω, X_Th = 3 Ω, |Z_Th| = 5 Ω)',
        'Part (2): V₁ = 100∠0° V, Z₁ = 4 + j3 Ω; V₂ = 80∠30° V, Z₂ = 6 − j8 Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'Part (1): Complex Conjugate Load vs. Purely Resistive Load Matching',
          explanation:
            'Apply Z_L = Z_Th* for Part (a) and R_L = |Z_Th| for Part (b):',
          equation:
            '(a) Complex Load:  Z_L = Z_{Th}^* = 4 − j3 Ω\n    P_{max} = |V_{Th,rms}|² / (4 R_{Th}) = 20² / (4 × 4) = 400 / 16 = 25.0 W\n\n(b) Purely Resistive Load (X_L = 0):  R_L = |Z_{Th}| = √(4² + 3²) = 5.0 Ω\n    I_{rms} = 20 / |4 + 5 + j3| = 20 / √(9² + 3²) = 20 / √90 A\n    P_{max,R} = I_{rms}² R_L = (400 / 90) × 5 = 22.22 W\n∴  (a) Z_L = 4 − j3 Ω, P_{max} = 25 W;   (b) R_L = 5 Ω, P_{max,R} = 22.22 W',
        },
        {
          stepTitle: 'Part (2): AC Millman’s Theorem for Parallel Impedance Branches',
          explanation: 'Compute admittances Y₁ = 1/Z₁ and Y₂ = 1/Z₂, then evaluate V_eq = (V₁Y₁ + V₂Y₂)/(Y₁ + Y₂):',
          equation:
            'Y_1 = 1 / (4 + j3) = (4 − j3) / 25 = 0.16 − j0.12 S\nY_2 = 1 / (6 − j8) = (6 + j8) / 100 = 0.06 + j0.08 S\n∑ Y_k = Y_1 + Y_2 = 0.22 − j0.04 = 0.2236∠(−10.30°) S   ⇒   Z_{eq} = 1 / ∑ Y_k = 4.40 + j0.80 Ω\n∑ V_k Y_k = 100∠0°(0.20∠(−36.87°)) + 80∠30°(0.10∠53.13°)\n          = 20∠(−36.87°) + 8∠83.13° = (16 − j12) + (0.957 + j7.943) = 16.957 − j4.057 = 17.44∠(−13.45°) A\nV_{eq} = (17.44∠(−13.45°)) / (0.2236∠(−10.30°))\n∴  V_{eq} = 77.98∠(−3.15°) V,   Z_{eq} = 4.40 + j0.80 Ω',
        },
      ],
      finalAnswer:
        '(1) Z_L = 4 − j3 Ω (P_max = 25 W), R_L = 5 Ω (P_max,R = 22.22 W); (2) V_eq = 77.98∠(−3.15°) V, Z_eq = 4.40 + j0.80 Ω',
    },
  ],
};

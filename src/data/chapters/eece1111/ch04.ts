import type { ChapterNote } from '../../types.ts';

export const EECE1111_CH04: ChapterNote = {
  id: 'eece1111-ch04',
  unitNumber: 'Module 04',
  title: 'DC Network Theorem',
  summary:
    'Linearity (homogeneity and additivity), bilateral vs. unilateral networks, Superposition Theorem, Thevenin’s Theorem and proof, Norton’s Theorem, Maximum Power Transfer Theorem (calculus proof, 50% efficiency, load curve), Millman’s Theorem, Reciprocity Theorem, and Substitution Theorem.',
  estimatedMinutes: 95,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'u04-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Theorem Note from Tamim (p. 3) · My Class Note (p. 5) · PUST Final 2023 Q5(a), 2021 Q3(a) · Alexander & Sadiku Sections 4.2–4.3',
      title: 'Linearity, Bilateral Networks & Superposition Theorem',
      summaryText:
        'Homogeneity and additivity properties of linear circuits, bilateral vs. unilateral networks, formal statement of the Superposition Theorem, and why power cannot be superposed.',
      memorizeStatements: [
        'Linearity Property (Homogeneity & Additivity): A circuit is linear if its input-output excitation-response relation satisfies both (1) Homogeneity (Scaling): if input x produces output y, then scaled input k·x produces output k·y, and (2) Additivity: if x₁ produces y₁ and x₂ produces y₂, then (x₁ + x₂) applied simultaneously produces (y₁ + y₂).',
        'Bilateral vs. Unilateral Network (Class Note p. 5 Starred): A Bilateral element/network exhibits identical v-i characteristics and resistance regardless of the direction of current flow through it (e.g., resistors, inductors, capacitors); a Unilateral element changes its behavior when current direction reverses (e.g., semiconductor diode, rectifier).',
        'Superposition Theorem Statement: The voltage across (or current through) any element in a linear bilateral circuit is the algebraic sum of the voltages across (or currents through) that element due to each independent source acting alone, with all other independent sources turned off (replaced by their internal resistances).',
        'Deactivating Independent Sources Rule: To turn off an independent voltage source, replace it with a short circuit (0 V); to turn off an independent current source, replace it with an open circuit (0 A). Never turn off a dependent source!',
      ],
      bulletPoints: [
        'Explanation of Homogeneity and Additivity [PUST 2021 Q3(a)]:',
        '1. Homogeneity (Scaling Property): Requires that if the independent excitation (source voltage or current) is multiplied by any constant factor k, then every branch response (voltage or current) is multiplied by the same constant k: f(k·x) = k·f(x). For a linear resistor v = iR, doubling i doubles v.',
        '2. Additivity Property: Requires that the response to a sum of multiple excitations equals the sum of the responses to each excitation applied individually: f(x₁ + x₂) = f(x₁) + f(x₂).',
        '3. Combined Linearity Criterion: f(k₁x₁ + k₂x₂) = k₁f(x₁) + k₂f(x₂). Because instantaneous power p = i²R = v²/R is quadratic (nonlinear), power does NOT satisfy homogeneity or additivity: p = (i₁ + i₂)²R = i₁²R + i₂²R + 2i₁i₂R ≠ p₁ + p₂!',
        'Step-by-Step Procedure for Applying the Superposition Theorem:',
        '1. Keep only one independent source active at a time and deactivate all other independent sources (short ideal voltage sources; open ideal current sources; retain internal source resistances and all dependent sources).',
        '2. Calculate the partial response (v_k or i_k) with its reference direction/polarity clearly marked.',
        '3. Repeat Steps 1–2 for every independent source in the network.',
        '4. Sum the partial responses algebraically (adding components in the same direction, subtracting components in opposite directions): i = i′ + i″ + ···, and compute power only at the very end from the total current: P = I_total² R.',
      ],
      equations: [
        {
          label: 'Linearity (Homogeneity + Additivity) & Superposition Sum',
          formula:
            'f(k_1 x_1 + k_2 x_2) = k_1 f(x_1) + k_2 f(x_2)   |   i = ∑_{k=1}^{M} i_k,   v = ∑_{k=1}^{M} v_k   (Note: P = i²R ≠ ∑ P_k)',
          units: 'V, A, W',
        },
      ],
      examYears: ['2023', '2021'],
      marks: '4 Marks',
    },
    {
      id: 'u04-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Theorem Note from Tamim (pp. 1–2) · My Class Note (pp. 1–4) · Akib Note (p. 16) · PUST Final 2025 Q4(a), 2024 Q7(a), 2023 Q4(a), 2022 Q4(a), 2021 Q4(a)',
      title: 'Thevenin’s & Norton’s Theorems: Proofs & Three R_Th Cases',
      summaryText:
        'Formal statements and derivations of Thevenin’s Theorem (2025 Q4a, 2022 Q4a) and Norton’s Theorem (2024 Q7a, 2023 Q4a, 2021 Q4a), plus the three cases for finding R_Th.',
      memorizeStatements: [
        'Thevenin’s Theorem Statement: Any linear two-terminal circuit can be replaced by an equivalent circuit consisting of a single voltage source V_Th in series with an equivalent resistor R_Th, where V_Th is the open-circuit voltage at the terminals and R_Th is the input or equivalent resistance at the terminals when all independent sources are turned off.',
        'Norton’s Theorem Statement (Class Lecture 08): Any linear two-terminal circuit can be replaced by an equivalent circuit consisting of a single current source I_N in parallel with an equivalent resistor R_N, where I_N is the short-circuit current through the terminals and R_N = R_Th is the equivalent resistance at the terminals when all independent sources are turned off.',
        'Thevenin–Norton Equivalence: V_Th = I_N · R_Th,  I_N = I_sc = V_Th / R_Th,  and  R_Th = R_N = V_oc / I_sc.',
      ],
      bulletPoints: [
        'Proof of Thevenin’s Theorem in a DC Circuit [PUST 2025 Q4(a) & 2022 Q4(a)]:',
        '1. Consider any active linear two-terminal network N containing independent sources and resistors, connected to an external load resistor R_L across terminals a and b, drawing load current I_L at terminal voltage V_ab.',
        '2. By the Substitution Theorem, replace the load resistor R_L with an opposing external current source of magnitude I_L leaving terminal a. By the Superposition Theorem, the terminal voltage V_ab is the sum of two components:',
        '   • Component 1 (Internal sources active, external I_L = 0 A / open circuit): The terminal voltage equals the open-circuit voltage V_{oc} = V_{Th}.',
        '   • Component 2 (All internal independent sources deactivated, external I_L acting alone): Looking into the dead passive network at a-b, its equivalent input resistance is R_{Th}, which produces an internal voltage drop −I_L · R_{Th}.',
        '3. Superposing both components gives the terminal V-I equation:\n  V_{ab} = V_{Th} − I_L · R_{Th}',
        '4. Since the external load resistor satisfies V_{ab} = I_L · R_L, equating the two expressions yields:\n  I_L · R_L = V_{Th} − I_L · R_{Th}   ⇒   I_L = V_{Th} / (R_{Th} + R_L)\n  which is identical to a single voltage source V_{Th} in series with R_{Th} connected to R_L (Proved).',
        'Proof / Derivation of Norton’s Theorem [PUST 2024 Q7(a), 2023 Q4(a), 2021 Q4(a)]:',
        '• Applying Source Transformation to the Thevenin equivalent circuit (V_{Th} in series with R_{Th}) directly converts it into a parallel current source I_N = V_{Th} / R_{Th} = I_{sc} in parallel with R_N = R_{Th}. When load R_L is connected across a-b, current division gives:\n  I_L = I_N · [ R_N / (R_N + R_L) ].',
      ],
      table: {
        caption: 'Table 4.1 — Complete Procedure for Computing R_Th Across All Three Circuit Cases',
        headers: ['Circuit Category', 'Open-Circuit Voltage V_Th', 'Thevenin Resistance R_Th Procedure'],
        rows: [
          [
            'Case 1: Independent Sources Only',
            'Remove R_L and find open-circuit voltage V_oc across terminals a-b',
            'Deactivate all independent sources (Voltage source → Short; Current source → Open) and reduce series-parallel resistors looking into a-b.',
          ],
          [
            'Case 2: Both Independent & Dependent Sources',
            'Remove R_L and find V_oc across terminals a-b (keeping dependent sources active)',
            'Method A: Deactivate independent sources, apply test source v_o = 1 V (or i_o = 1 A) at a-b, and find R_Th = v_o / i_o.\nMethod B: Short terminals a-b to find I_sc and compute R_Th = V_oc / I_sc.',
          ],
          [
            'Case 3: Dependent Sources Only (No Independent Sources)',
            'V_Th = 0 V identically (no independent excitation)',
            'Apply an external test voltage v_o = 1 V (or test current i_o = 1 A) at terminals a-b and calculate R_Th = v_o / i_o.',
          ],
        ],
      },
      equations: [
        {
          label: 'Thevenin & Norton Load Current & Equivalence Formulas',
          formula:
            'I_L = V_{Th} / (R_{Th} + R_L) = I_N · [ R_N / (R_N + R_L) ]   |   R_{Th} = R_N = V_{oc} / I_{sc}',
          units: 'V, A, Ω',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '2.67–4.67 Marks',
    },
    {
      id: 'u04-b3',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'My Class Note (pp. 8–10) · Akib Note (p. 24) · Theorem Note from Tamim (p. 4) · PUST Final 2024 Q6(a,b), 2023 Q4(b), 2022 Q4(b), 2021 Q4(a)',
      title: 'Maximum Power Transfer Theorem: Calculus Proof & 50% Efficiency',
      summaryText:
        'Statement and calculus proof of the Maximum Power Transfer Theorem (R_L = R_Th, P_max = V_Th²/4R_Th), proof of 50% efficiency (2024 Q6b), and class homework load-power table.',
      memorizeStatements: [
        'Maximum Power Transfer Theorem (DC): Maximum power is transferred from a linear bilateral DC network to a variable resistive load R_L when the load resistance exactly equals the Thevenin equivalent resistance of the network as seen from the load terminals: R_L = R_Th.',
        'Maximum Power Formula: When R_L = R_Th, the maximum power delivered to the load is P_max = V_Th² / (4 R_Th) = I_N² R_N / 4.',
        '50% Efficiency at Maximum Power Transfer: Under the maximum power condition R_L = R_Th, exactly 50% of the total power generated by V_Th is delivered to the load R_L and the remaining 50% is dissipated internally in R_Th (η = P_L / P_total = R_L / (R_Th + R_L) = 50%).',
      ],
      bulletPoints: [
        'Mathematical Proof of Maximum Power Transfer Theorem [My Class Note p. 10, Akib Note p. 24, PUST 2021 Q4(a)]:',
        '1. Replace the linear active DC circuit connected to variable load resistor R_L with its Thevenin equivalent (voltage source E = V_{Th} in series with internal resistance R_{Th}).',
        '2. By Ohm’s Law, the load current is I = V_{Th} / (R_{Th} + R_L), so the power absorbed by the load resistor R_L is:\n  P_L = I² R_L = [ V_{Th} / (R_{Th} + R_L) ]² · R_L = (V_{Th}² R_L) / (R_{Th} + R_L)²',
        '3. Differentiate P_L with respect to the variable load resistance R_L using the quotient rule:\n  dP_L / dR_L = V_{Th}² · [ (R_{Th} + R_L)² · 1 − R_L · 2(R_{Th} + R_L) ] / (R_{Th} + R_L)⁴\n              = V_{Th}² (R_{Th} + R_L) (R_{Th} + R_L − 2R_L) / (R_{Th} + R_L)⁴\n              = V_{Th}² (R_{Th} − R_L) / (R_{Th} + R_L)³',
        '4. For maximum power transfer, set dP_L / dR_L = 0:\n  V_{Th}² (R_{Th} − R_L) / (R_{Th} + R_L)³ = 0   ⇒   R_{Th} − R_L = 0   ⇒   R_L = R_{Th}   (Proved).',
        '5. Substituting R_L = R_{Th} into the load power formula gives:\n  P_{max} = (V_{Th}² R_{Th}) / (R_{Th} + R_{Th})² = (V_{Th}² R_{Th}) / (4 R_{Th}²) = V_{Th}² / (4 R_{Th}).',
        'Proof that Maximum Power to the Load is 50% of Available Network Power [PUST 2024 Q6(b)]:',
        '• Total power supplied by the Thevenin source is P_{total} = V_{Th} · I = I² (R_{Th} + R_L), while load power is P_L = I² R_L.',
        '• Power transfer efficiency η is:\n  η = P_L / P_{total} = (I² R_L) / [ I² (R_{Th} + R_L) ] = R_L / (R_{Th} + R_L)',
        '• At maximum power transfer (R_L = R_{Th}):\n  η = R_{Th} / (R_{Th} + R_{Th}) = 1 / 2 = 0.50 = 50%   (Proved).',
      ],
      table: {
        caption:
          'Table 4.2 — Class Homework Table: Load Power vs. Load Resistance for E = 10 V, R_Th = 10 Ω (My Class Note p. 9)',
        headers: [
          'Load R_L (Ω)',
          '2 Ω',
          '4 Ω',
          '6 Ω',
          '8 Ω',
          '10 Ω (= R_Th)',
          '12 Ω',
          '16 Ω',
          '20 Ω',
        ],
        rows: [
          [
            'Load Power P_L (W)',
            '1.39 W',
            '2.04 W',
            '2.34 W',
            '2.47 W',
            '2.50 W (Peak)',
            '2.48 W',
            '2.37 W',
            '2.22 W',
          ],
          [
            'Scaled P_L (dW in Note)',
            '13.9',
            '20.4',
            '23.4',
            '24.7',
            '25.0 (Max)',
            '24.8',
            '23.7',
            '22.2',
          ],
          [
            'Efficiency η (%)',
            '16.7%',
            '28.6%',
            '37.5%',
            '44.4%',
            '50.0%',
            '54.5%',
            '61.5%',
            '66.7%',
          ],
        ],
      },
      equations: [
        {
          label: 'Maximum Power Condition, Peak Power & Transfer Efficiency',
          formula:
            'dP_L / dR_L = V_{Th}²(R_{Th} − R_L) / (R_{Th} + R_L)³ = 0  ⇒  R_L = R_{Th}   |   P_{max} = V_{Th}² / (4R_{Th})   |   η = R_L / (R_{Th} + R_L) = 50%',
          units: 'Ω, W, %',
        },
      ],
      examYears: ['2024', '2023', '2022', '2021'],
      marks: '4–5 Marks',
      professorTip:
        'Class Note Observation (# on Page 9): As R_L increases from 0, load power P_L rises steeply, peaks at exactly R_L = R_Th = 10 Ω (P_max = 2.5 W = 25 dW), and then falls gradually for R_L > R_Th.',
    },
    {
      id: 'u04-b4',
      type: 'memorize',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceCitation:
        'Theorem Note from Tamim (p. 5) · Curriculum.md · PUST Final 2025 Q4(c), 2024 Q5(a), 2023 Q7(c), 2022 Q5(b), 2021 Q5(c) · B. L. Theraja Ch. 2 · Boylestad Ch. 9',
      title: 'Millman’s Theorem, Reciprocity Theorem & Substitution Theorem',
      summaryText:
        'Formal statements, formulas, and derivations of Millman’s Theorem (2025 Q4c, 2022 Q5b), Reciprocity Theorem (Tamim Note p. 5, 2024 Q5a, 2023 Q7c, 2021 Q5c), and Substitution Theorem.',
      memorizeStatements: [
        'Millman’s Theorem: Any number of parallel voltage sources (E₁, E₂, …, E_N) with internal series resistances (R₁, R₂, …, R_N) connected across two common terminals can be replaced by a single equivalent voltage source V_eq = (∑ ±E_k G_k) / (∑ G_k) in series with R_eq = 1 / (∑ G_k), where conductance G_k = 1 / R_k.',
        'Reciprocity Theorem (Tamim Note p. 5): In any linear, bilateral, single-source network, if an EMF E applied in branch A produces a current I in branch B, then moving the same EMF E from branch A to branch B (and replacing the former source in branch A by a short circuit) produces the exact same current I in branch A.',
        'Substitution Theorem: Any branch in a network across which the terminal voltage V_xy and branch current I_xy are known can be replaced by any combination of elements (an ideal voltage source V_xy, an ideal current source I_xy, or a resistor R = V_xy / I_xy) that maintains the exact same V_xy and I_xy without altering any other voltage or current in the rest of the network.',
      ],
      bulletPoints: [
        '1. Derivation of Millman’s Theorem [PUST 2025 Q4(c) & 2022 Q5(b) — B. L. Theraja Section 2.21]:',
        '• Consider N parallel branches between bus A and reference bus B, where branch k has voltage source E_k in series with resistance R_k (conductance G_k = 1/R_k).',
        '• Convert each voltage branch into its Norton current-source equivalent: I_k = ±E_k / R_k = ±E_k G_k in parallel with G_k (take + if E_k’s positive plate points toward bus A, and − if reversed).',
        '• Sum all parallel Norton currents and parallel conductances:\n  I_{total} = ∑_{k=1}^N (±E_k G_k),     G_{eq} = ∑_{k=1}^N G_k   ⇒   R_{eq} = 1 / G_{eq} = 1 / (∑_{k=1}^N G_k)',
        '• Convert the combined Norton circuit back into a single Thevenin voltage source:\n  V_{eq} = I_{total} · R_{eq} = [ ∑_{k=1}^N (±E_k G_k) ] / [ ∑_{k=1}^N G_k ],     I_L = V_{eq} / (R_{eq} + R_L).',
        '2. Reciprocity Theorem Restrictions & Verification [Theorem Note p. 5 & PUST 2023 Q7(c)]:',
        '• Applies strictly to linear, bilateral networks containing a SINGLE independent source (no dependent sources, no diodes).',
        '• The ratio E / I = R_T is called the Transfer Resistance (or Transfer Impedance Z_T in AC), which is invariant when excitation and ammeter positions are interchanged.',
      ],
      equations: [
        {
          label: 'Millman’s Equivalent Voltage & Resistance',
          formula:
            'V_{eq} = [ ∑_{k=1}^N (±E_k G_k) ] / [ ∑_{k=1}^N G_k ],   R_{eq} = 1 / (∑_{k=1}^N G_k),   I_L = V_{eq} / (R_{eq} + R_L)',
          units: 'G_k = 1 / R_k in Siemens (S)',
        },
        {
          label: 'Reciprocity Transfer Invariance & Substitution Identity',
          formula:
            'E_A / I_B = E_B / I_A = R_{transfer}   |   V_{xy} = I_{xy} · R_{branch}',
          units: 'Ohms (Ω) and Volts (V)',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '4 Marks',
    },
    {
      id: 'u04-b5',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'My Class Note (pp. 1–7) · Akib Note (pp. 17–22) · B. L. Theraja Vol. I Ch. 2',
      title: 'Board Worked Problems: Thevenin’s & Superposition Theorems',
      summaryText:
        'All four in-class worked board problems from My Class Note (pp. 1–7) and Akib Note (pp. 17–22): two Thevenin networks and two B. L. Theraja Superposition battery networks.',
      problemStatement:
        '(1) [Class Note p. 1] Find V_Th and R_Th across load R_L for the ladder with E = 5 V, left top R₁ = 1 Ω, left bottom R₅ = 2 Ω, central vertical R₃ = 2 Ω, right top R₂ = 2 Ω, and right bottom R₄ = 3 Ω. (2) [Class Note pp. 2–3] Find current I_L through R_L = 4 Ω (top-right) using Thevenin’s theorem when left branch has 5 V + 10 Ω, central branch has 5 Ω, and right vertical branch has a 6 V source (+ on top). (3) [Class Note pp. 5–6] Using Superposition, find current I in the central 6 Ω resistor of a T-network where left branch has 6 V (internal 0.5 Ω) + 2.5 Ω and right branch has 12 V (internal 1 Ω) + 2 Ω. (4) [Class Note p. 7] Two parallel batteries — 2.05 V (internal 0.05 Ω) and 2.15 V (internal 0.04 Ω) [also solved on board for 12.15 V] — supply load R = 1 Ω. Find load current I_R using Superposition.',
      givenData: [
        'Problem (1): E = 5 V, R₁ = 1 Ω, R₅ = 2 Ω, R₃ = 2 Ω, R₂ = 2 Ω, R₄ = 3 Ω',
        'Problem (2): Left = 5 V + 10 Ω, Center = 5 Ω, Right = R_L (4 Ω) in series with 6 V',
        'Problem (3): Left = 6 V + (0.5 + 2.5 = 3 Ω), Center = 6 Ω, Right = 12 V + (1 + 2 = 3 Ω)',
        'Problem (4): Battery 1 = 2.05 V, 0.05 Ω; Battery 2 = 2.15 V (or 12.15 V), 0.04 Ω; Load R = 1 Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): Ladder Network V_Th and R_Th (My Class Note p. 1 & Akib Note pp. 17–18)',
          explanation:
            'With R_L removed (open terminals A-B), zero current flows in R₂ = 2 Ω and R₄ = 3 Ω. Find V_Th across R₃ = 2 Ω, then short E = 5 V to find R_Th:',
          equation:
            'I_{left} = 5 V / (1 + 2 + 2) = 1 A   ⇒   V_{Th} = I_{left} × R_3 = 1 A × 2 Ω = 2 V\nShort 5 V source:  R_{Th} = [ (1 + 2) ∥ 2 ] + 2 + 3 = (6 / 5) + 5 = 31 / 5 = 6.2 Ω\n∴  V_{Th} = 2 V,   R_{Th} = 31/5 Ω = 6.2 Ω,   I_L = 2 / (6.2 + R_L)',
        },
        {
          stepTitle: 'Problem (2): Two-Source Circuit with R_L = 4 Ω (My Class Note pp. 2–3 & Akib Note p. 19)',
          explanation:
            'Remove R_L = 4 Ω between A and B. Left closed loop has 5 V, 10 Ω, and 5 Ω; right terminal B sits at +6 V:',
          equation:
            'Left loop current:  I = 5 / (10 + 5) = 1/3 A   ⇒   V_A = 5 Ω × (1/3 A) = 5/3 V\nOpen-circuit voltage:  V_{Th} = |V_{AB}| = 6 − 5/3 = 13/3 V\nShort both 5 V and 6 V sources:  R_{Th} = 10 ∥ 5 = (10 × 5) / 15 = 10/3 Ω\nReconnect R_L = 4 Ω:  I_L = V_{Th} / (R_{Th} + R_L) = (13/3) / (10/3 + 4)\n∴  I_L = 13 / 22 A = 0.591 A',
        },
        {
          stepTitle: 'Problem (3): Two-Battery T-Network via Superposition (My Class Note pp. 5–6 & Akib Note p. 21)',
          explanation:
            'Total left resistance is 2.5 + 0.5 = 3 Ω; total right resistance is 2 + 1 = 3 Ω. Activate each battery alone:',
          equation:
            'Step 1 (6 V active, 12 V shorted):  R_{eq1} = 3 + (6 ∥ 3) = 3 + 2 = 5 Ω\n  I_{total,1} = 6 / 5 = 1.2 A   ⇒   I′ = 1.2 × [ 3 / (6 + 3) ] = 0.4 A (downward)\nStep 2 (12 V active, 6 V shorted):  R_{eq2} = 3 + (6 ∥ 3) = 5 Ω\n  I_{total,2} = 12 / 5 = 2.4 A  ⇒   I″ = 2.4 × [ 3 / (6 + 3) ] = 0.8 A (downward)\nTotal Current in 6 Ω:  I = I′ + I″ = 0.4 + 0.8 = 1.2 A   (V_{AB} = 1.2 × 6 = 7.2 V)\n∴  I = 1.2 A',
        },
        {
          stepTitle: 'Problem (4): Parallel Batteries Feeding 1 Ω Load (My Class Note p. 7 & Akib Note p. 22)',
          explanation:
            'Activate each battery alone while replacing the other with its internal resistance (0.05 Ω or 0.04 Ω):',
          equation:
            'Case 1 (2.15 V active, 2.05 V shorted):  R_{eq1} = 0.04 + (0.05 ∥ 1) = 46 / 525 = 0.08762 Ω\n  I_{T1} = 2.15 / 0.08762 = 24.538 A   ⇒   I′ = 24.538 × (0.05 / 1.05) = 1.168 A\n  (Note: For board variant with 12.15 V: I_{T1} = 138.67 A ⇒ I′ = 6.603 A)\nCase 2 (2.05 V active, 2.15 V shorted):  R_{eq2} = 0.05 + (0.04 ∥ 1) = 23 / 260 = 0.08846 Ω\n  I_{T2} = 2.05 / 0.08846 = 23.174 A   ⇒   I″ = 23.174 × (0.04 / 1.04) = 0.891 A\n∴  Total Load Current: I_R = 1.168 + 0.891 = 2.059 A  (or 6.603 + 0.891 = 7.494 A for 12.15 V)',
        },
      ],
      finalAnswer:
        '(1) V_Th = 2 V, R_Th = 6.2 Ω; (2) I_L = 13/22 A; (3) I = 1.2 A; (4) I_R = 2.059 A (or 7.494 A)',
    },
    {
      id: 'u04-b6',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'EECE 1111 Class Test Paper (EECE CT.pdf — Question 1 [10 Marks] & Question 2 [10 Marks])',
      title: 'Class Test (CT) Solved Problems: Superposition & Thevenin',
      summaryText:
        'Complete step-by-step solutions to both 10-mark problems from the official EECE 1111 Class Test paper (EECE CT.pdf) on Superposition Theorem and Thevenin’s Theorem.',
      problemStatement:
        '(1) [Class Test Q1 — 10 Marks] Using the superposition theorem, determine the current I_x through the 6 Ω resistor (positive from Node B to Node C): Node A has an 18 V source to ground; 4 Ω connects Node A to Node B; Node B has 8 Ω to ground in parallel with a 2 A upward current source; 6 Ω connects Node B to Node C (current I_x →); Node C has 10 Ω to ground; 5 Ω connects Node C to Node D; Node D has a 12 V source to ground. (2) [Class Test Q2 — 10 Marks] Find the Thevenin equivalent (V_Th, R_Th) seen at terminals a-b after removing R_L = 6 Ω, then calculate load current I_L: Node A has a 24 V source to ground; 4 Ω connects Node A to Node B; Node B has 6 Ω to ground; 5 Ω connects Node B to terminal a; terminal a has 12 Ω to ground (terminal b), load R_L = 6 Ω to ground, and 8 Ω to Node D (12 V source to ground).',
      givenData: [
        'CT Q1: 18 V at A, R_AB = 4 Ω, R_B = 8 Ω ∥ 2 A ↑, R_BC = 6 Ω (I_x), R_C = 10 Ω, R_CD = 5 Ω, 12 V at D',
        'CT Q2: 24 V at A, R_AB = 4 Ω, R_B = 6 Ω, R_Ba = 5 Ω, R_a = 12 Ω, R_aD = 8 Ω, 12 V at D, R_L = 6 Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'CT Question 1 — Step 1: Contribution I_x1 from the 18 V Source Acting Alone',
          explanation:
            'Open the 2 A current source and short the 12 V source at D. Looking right from Node B, the 6 Ω resistor is in series with (10 Ω ∥ 5 Ω = 10/3 Ω), giving R_{right} = 6 + 10/3 = 28/3 Ω:',
          equation:
            'R_{B,eq} = 8 ∥ (28 / 3) = (8 × 28/3) / (8 + 28/3) = 224 / 52 = 56 / 13 Ω\nBy Voltage Division at Node B:\n  V_{B1} = 18 × [ (56/13) / (4 + 56/13) ] = 18 × (56 / 108) = 28 / 3 = 9.333 V\nCurrent from B to C:  I_{x1} = V_{B1} / (28 / 3) = (28/3) / (28/3) = +1.0 A',
        },
        {
          stepTitle: 'CT Question 1 — Step 2: Contributions I_x2 (from 2 A) & I_x3 (from 12 V) and Total I_x',
          explanation:
            'For the 2 A source alone (18 V and 12 V shorted), left/shunt resistance at B is 4 ∥ 8 = 8/3 Ω and right resistance is 28/3 Ω. For the 12 V source alone (18 V shorted, 2 A open), resistance to the left of C is 6 + (4 ∥ 8) = 26/3 Ω:',
          equation:
            'Due to 2 A Source Alone (Current Division at Node B):\n  I_{x2} = 2 A × [ (8/3) / (8/3 + 28/3) ] = 2 × (8 / 36) = +4 / 9 A = +0.444 A\n\nDue to 12 V Source Alone (Voltage Division at Node C, where 10 ∥ (26/3) = 130/28 = 65/14 Ω):\n  V_{C3} = 12 × [ (65/14) / (5 + 65/14) ] = 12 × (65 / 135) = 52 / 9 = 5.778 V\n  I_{x3} = −V_{C3} / (26 / 3) = −(52/9) / (26/3) = −2 / 3 A = −0.667 A (flows C → B)\n\nTotal Current I_x (from B to C):\n  I_x = I_{x1} + I_{x2} + I_{x3} = 1 + 4/9 − 2/3 = 7 / 9 A\n∴  I_x = +7/9 A = +0.778 A (directed from Node B to Node C)',
        },
        {
          stepTitle: 'CT Question 2 — Finding V_Th, R_Th, and Load Current I_L for R_L = 6 Ω',
          explanation:
            'First reduce the left 24 V source with 4 Ω and 6 Ω at Node B to its Thevenin equivalent: V_B0 = 24 × (6/10) = 14.4 V in series with R_B0 = 4 ∥ 6 = 2.4 Ω. Adding the 5 Ω resistor gives a left branch of 14.4 V in series with 2.4 + 5 = 7.4 Ω connected to terminal a:',
          equation:
            'Step 1 (Find R_{Th} with R_L removed and 24 V, 12 V sources shorted):\n  R_{Th} = 7.4 ∥ 12 ∥ 8 = 7.4 ∥ 4.8 = (7.4 × 4.8) / (7.4 + 4.8) = 888 / 305 = 2.9115 Ω\n\nStep 2 (Find open-circuit voltage V_{Th} at terminal a by KCL / Millman’s Theorem):\n  (V_{Th} − 14.4)/7.4 + V_{Th}/12 + (V_{Th} − 12)/8 = 0\n  V_{Th} = R_{Th} × (14.4 / 7.4 + 12 / 8) = (888 / 305) × (72/37 + 1.5) = 3060 / 305 = 10.033 V\n\nStep 3 (Reconnect R_L = 6 Ω and compute load current I_L):\n  I_L = V_{Th} / (R_{Th} + R_L) = (3060 / 305) / (888 / 305 + 6) = 3060 / 2718\n∴  V_{Th} = 10.03 V,   R_{Th} = 2.91 Ω,   I_L = 1.126 A',
        },
      ],
      finalAnswer:
        'CT Q1: I_x = 7/9 A = 0.778 A (B → C); CT Q2: V_Th = 10.03 V, R_Th = 2.91 Ω, I_L = 1.126 A',
    },
    {
      id: 'u04-b7',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [1, 3],
      sourceCitation:
        'PUST Final Exam 2025 Q4(b), 2025 Q4(c), 2023 Q5(c), 2021 Q4(b) · Akib Note (pp. 20, 23) · Alexander & Sadiku Ex. 4.8 & PP 4.13 · B. L. Theraja Ch. 2',
      title: 'Thevenin, Millman & Maximum Power Transfer Exam Problems (2021–2025)',
      summaryText:
        'Complete step-by-step solutions for PUST 2025 Q4(b) Thevenin circuit, 2025 Q4(c) Millman’s theorem with reversed battery, 2023 Q5(c) Thevenin circuit, and 2021 Q4(b) Maximum Power Transfer.',
      examYears: ['2025', '2023', '2021'],
      marks: '3.67–4 Marks',
      problemStatement:
        '(1) [PUST 2025 Q4(b) & Akib Note p. 20] Find the Thevenin equivalent to the left of terminals a-b (32 V source + 4 Ω series, 12 Ω shunt ∥ 2 A upward current source, 1 Ω series to terminal a), then find current I_L for R_L = 6 Ω, 16 Ω, and 36 Ω. (2) [PUST 2025 Q4(c)] Using Millman’s theorem, find current through and voltage across R_L = 3 Ω fed by three parallel branches: Branch 1 (R₁ = 5 Ω, E₁ = 10 V, + on top), Branch 2 (R₂ = 4 Ω, E₂ = 16 V, − on top / + on bottom), Branch 3 (R₃ = 2 Ω, E₃ = 8 V, + on top). (3) [PUST 2023 Q5(c)] Find the Thevenin equivalent to the left of the 1 Ω load resistor (12 V + 6 Ω, 2 A ↑ source, 6 Ω series, 4 Ω shunt) and find i. (4) [PUST 2021 Q4(b) & Akib Note p. 23] Find R_L for maximum power and calculate P_max (12 V + 6 Ω, 12 Ω shunt, 3 Ω series, 2 A ↑ source, 2 Ω series to terminal a).',
      givenData: [
        'Problem (1) [2025 Q4b — Sadiku Ex. 4.8]: 32 V, 4 Ω, 12 Ω, 2 A ↑, 1 Ω; R_L = 6, 16, 36 Ω',
        'Problem (2) [2025 Q4c]: E₁ = +10 V (5 Ω), E₂ = −16 V (4 Ω), E₃ = +8 V (2 Ω), R_L = 3 Ω',
        'Problem (3) [2023 Q5c]: 12 V, 6 Ω, 2 A ↑, 6 Ω, 4 Ω shunt, R_L = 1 Ω',
        'Problem (4) [2021 Q4b — Sadiku PP 4.13]: 12 V, 6 Ω, 12 Ω, 3 Ω, 2 A ↑, 2 Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2025 Q4(b) — Thevenin Equivalent & Load Currents (Sadiku Ex. 4.8)',
          explanation:
            'Short the 32 V source and open the 2 A source to find R_Th; apply KCL (or mesh analysis) with a-b open to find V_Th:',
          equation:
            'R_{Th} = (4 ∥ 12) + 1 = 3 + 1 = 4 Ω\nWith a-b open (zero current in 1 Ω):  (V_{Th} − 32)/4 + V_{Th}/12 = 2\nMultiply by 12:  3(V_{Th} − 32) + V_{Th} = 24   ⇒   4V_{Th} = 120   ⇒   V_{Th} = 30 V\nLoad Currents I_L = V_{Th} / (R_{Th} + R_L) = 30 / (4 + R_L):\n  • For R_L = 6 Ω:   I_L = 30 / (4 + 6) = 3.0 A\n  • For R_L = 16 Ω:  I_L = 30 / (4 + 16) = 1.5 A\n  • For R_L = 36 Ω:  I_L = 30 / (4 + 36) = 0.75 A\n∴  V_{Th} = 30 V,  R_{Th} = 4 Ω;   I_L = 3 A, 1.5 A, 0.75 A',
        },
        {
          stepTitle: 'Problem (2): PUST 2025 Q4(c) — Millman’s Theorem with Reversed Middle Battery',
          explanation:
            'With G₁ = 1/5 = 0.2 S, G₂ = 1/4 = 0.25 S, G₃ = 1/2 = 0.5 S, and E₁ = +10 V, E₂ = −16 V (− plate on top), E₃ = +8 V:',
          equation:
            '∑ (±E_k G_k) = (+10)(0.2) + (−16)(0.25) + (+8)(0.5) = 2 − 4 + 4 = 2.0 A\n∑ G_k = 0.2 + 0.25 + 0.5 = 0.95 S   ⇒   R_{eq} = 1 / 0.95 = 20 / 19 = 1.053 Ω\nV_{eq} = (∑ E_k G_k) / (∑ G_k) = 2.0 / 0.95 = 40 / 19 = 2.105 V\nFor load R_L = 3 Ω:\n  I_L = V_{eq} / (R_{eq} + R_L) = (40/19) / (20/19 + 3) = 40 / 77 = 0.5195 A\n  V_L = I_L · R_L = 3 × (40 / 77) = 120 / 77 = 1.558 V\n∴  I_L = 0.52 A,   V_L = 1.56 V',
        },
        {
          stepTitle: 'Problem (3): PUST 2023 Q5(c) — Thevenin Equivalent Feeding 1 Ω Load',
          explanation:
            'Transform 12 V + 6 Ω to 2 A ↑ ∥ 6 Ω, add the parallel 2 A ↑ source (= 4 A ↑ ∥ 6 Ω), transform back to 24 V + 6 Ω, add the second 6 Ω series resistor (= 24 V + 12 Ω), and combine with the 4 Ω shunt:',
          equation:
            'Before 4 Ω shunt: V_1 = 24 V in series with R_1 = 6 + 6 = 12 Ω\nInclude 4 Ω shunt across terminals a-b:\n  V_{Th} = 24 × [ 4 / (12 + 4) ] = 6.0 V\n  R_{Th} = 12 ∥ 4 = (12 × 4) / 16 = 3.0 Ω\nCurrent through 1 Ω load:  i = V_{Th} / (R_{Th} + 1) = 6 / (3 + 1)\n∴  V_{Th} = 6 V,   R_{Th} = 3 Ω,   i = 1.5 A',
        },
        {
          stepTitle: 'Problem (4): PUST 2021 Q4(b) — Maximum Power Transfer (Sadiku PP 4.13 & Akib Note p. 23)',
          explanation:
            'Deactivate the 12 V and 2 A sources to find R_Th, then find open-circuit voltage V_Th:',
          equation:
            'R_{Th} = (6 ∥ 12) + 3 + 2 = 4 + 3 + 2 = 9 Ω   ⇒   For max power, R_L = R_{Th} = 9 Ω\nWith a-b open, the 2 A upward current source flows entirely left through the 3 Ω resistor into node V_0:\n  (V_0 − 12)/6 + V_0/12 = 2   ⇒   2(V_0 − 12) + V_0 = 24   ⇒   3V_0 = 48   ⇒   V_0 = 16 V\n  V_{Th} = V_0 + (2 A × 3 Ω) = 16 + 6 = 22 V  (zero drop across the outer 2 Ω resistor)\nMaximum Power:  P_{max} = V_{Th}² / (4 R_{Th}) = 22² / (4 × 9) = 484 / 36\n∴  R_L = 9 Ω,   V_{Th} = 22 V,   P_{max} = 13.44 W',
        },
      ],
      finalAnswer:
        '(1) V_Th = 30 V, R_Th = 4 Ω, I_L = 3 A, 1.5 A, 0.75 A; (2) I_L = 0.52 A, V_L = 1.56 V; (3) V_Th = 6 V, R_Th = 3 Ω, i = 1.5 A; (4) R_L = 9 Ω, P_max = 13.44 W',
    },
    {
      id: 'u04-b8',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2023 Q5(a) & 2021 Q3(b) · Alexander & Sadiku Example 4.5 & Practice Problem 4.5',
      title: 'Superposition with Dependent Sources Exam Problems (2023 & 2021)',
      summaryText:
        'Complete step-by-step solutions for the two PUST Superposition exam problems containing dependent sources: 2023 Q5(a) with 0.1v_x and 2021 Q3(b) with 5I_o.',
      examYears: ['2023', '2021'],
      marks: '4 Marks',
      problemStatement:
        '(1) [PUST 2023 Q5(a)] Use superposition theorem to find v_x across the 4 Ω resistor: left branch has a 10 V independent source (+ on top) in series with 20 Ω connected to node v_x; connected in parallel from node v_x to ground are a 2 A upward independent current source, the 4 Ω resistor, and an upward dependent current source 0.1v_x. (2) [PUST 2021 Q3(b)] Find I_o downward through the 5 Ω resistor using superposition: left has a 4 A upward independent current source; top outer resistor is 2 Ω; upper-middle resistor is 3 Ω; lower-middle is 5 Ω (I_o); middle bridge has 1 Ω in series with leftward dependent current source 5I_o; right vertical is 4 Ω; bottom-right has a 20 V independent voltage source (− on left, + on right).',
      givenData: [
        'Problem (1) [2023 Q5a — Sadiku PP 4.5]: 10 V + 20 Ω, 2 A ↑, 4 Ω (v_x), dependent 0.1v_x ↑',
        'Problem (2) [2021 Q3b — Sadiku Ex. 4.5]: 4 A ↑, 20 V (−/+), dependent 5I_o ←, R = (2, 3, 5, 1, 4 Ω)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2023 Q5(a) — Superposition with Dependent Source 0.1v_x (Sadiku PP 4.5)',
          explanation:
            'Keep the dependent source 0.1v_x active in both sub-circuits! Apply KCL at node v_x for (a) 10 V active (2 A open) and (b) 2 A active (10 V shorted):',
          equation:
            'Step 1 (10 V source active, 2 A source open):\n  (v_{x1} − 10)/20 + v_{x1}/4 − 0.1 v_{x1} = 0\n  Multiply by 20:  (v_{x1} − 10) + 5v_{x1} − 2v_{x1} = 0   ⇒   4v_{x1} = 10   ⇒   v_{x1} = 2.5 V\n\nStep 2 (2 A source active, 10 V source shorted):\n  v_{x2}/20 + v_{x2}/4 − 0.1 v_{x2} = 2\n  Multiply by 20:  v_{x2} + 5v_{x2} − 2v_{x2} = 40   ⇒   4v_{x2} = 40   ⇒   v_{x2} = 10.0 V\n\nStep 3 (Algebraic Sum):  v_x = v_{x1} + v_{x2} = 2.5 + 10.0\n∴  v_x = 12.5 V',
        },
        {
          stepTitle: 'Problem (2): PUST 2021 Q3(b) — Superposition with Dependent Source 5I_o (Sadiku Ex. 4.5)',
          explanation:
            'Solve for I_o = I_o′ (due to 20 V alone with 4 A open) + I_o″ (due to 4 A alone with 20 V shorted) using mesh/supermesh analysis while keeping 5I_o active:',
          equation:
            'Step 1 (20 V source active, 4 A source open — two right meshes i_1′ upper, i_2′ lower):\n  Supermesh KVL:  (3 + 2 + 4)i_1′ + 5i_2′ − 4i_2′ ... ⇒  9i_1′ − 4i_2′ + 5I_o′ = −20\n  With i_2′ − i_1′ = 5I_o′ and I_o′ = −i_2′, solving the two-loop system yields:\n  17 I_o′ = −60   ⇒   I_o′ = −60 / 17 A = −3.529 A\n\nStep 2 (4 A source active, 20 V source shorted — outer left mesh i_3″ = 4 A):\n  Solving the supermesh with i_3″ = 4 A yields:\n  17 I_o″ = +52   ⇒   I_o″ = +52 / 17 A = +3.059 A\n\nStep 3 (Algebraic Sum):  I_o = I_o′ + I_o″ = −60/17 + 52/17 = −8 / 17 A\n∴  I_o = −8/17 A = −0.471 A',
        },
      ],
      finalAnswer: '(1) 2023 Q5(a): v_x = 12.5 V; (2) 2021 Q3(b): I_o = −8/17 A = −0.471 A',
    },
  ],
};

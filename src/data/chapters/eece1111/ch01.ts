import type { ChapterNote } from '../../types.ts';

export const EECE1111_CH01: ChapterNote = {
  id: 'eece1111-ch01',
  unitNumber: 'Module 01',
  title: 'Circuit Variables and Elements',
  summary:
    'Voltage, current, power, energy, Passive Sign Convention, independent and dependent sources (VCVS, VCCS, CCVS, CCCS), active vs. passive elements, resistance, inductance, capacitance, RC charging transient, non-sinusoidal waveforms, and RMS/average value derivations.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'u01-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Note (Md. Najmul Hossain Sir, Lectures 01–02) · PUST Final 2025 Q1(a), 2024 Q1(a), 2023 Q1(a), 2022 Q4(b,c), 2021 Q1(a) · Alexander & Sadiku Ch. 1 · B. L. Theraja Ch. 1',
      title: 'Circuit, Charge, Current, Voltage, Power & Energy Foundations',
      summaryText:
        'Formal definitions of an electrical circuit, charge q, current i = dq/dt, voltage v = dw/dq, instantaneous power p = vi, energy W = ∫ p dt, DC vs. AC comparison, and resistance vs. impedance.',
      memorizeStatements: [
        'Electrical Circuit: A closed-loop interconnection of electrical components (resistors, capacitors, inductors, and voltage/current sources) through conductive paths that allows electric charge to flow continuously and perform useful work.',
        'Electric Charge (q): The fundamental electrical property of atomic matter measured in Coulombs (C), where 1 electron carries −1.602 × 10⁻¹⁹ C and 1 C = 6.24 × 10¹⁸ electrons.',
        'Electric Current (i): The time rate of flow of electric charge across a specified cross-sectional boundary: i(t) = dq(t) / dt, measured in Amperes (1 A = 1 C/s).',
        'Voltage / Potential Difference (v_ab): The external work (energy) required to move a unit positive charge (+1 C) between two points a and b: v_ab = dw / dq, measured in Volts (1 V = 1 J/C).',
        'Instantaneous Power (p) & Energy (W): Power is the time rate of expending or absorbing energy, p(t) = dw/dt = v(t) · i(t) in Watts (W = J/s); Energy is W = ∫ p(t) dt in Joules (J) or kilowatt-hours (1 kWh = 3.6 × 10⁶ J).',
        'Resistance (R), Reactance (X) & Impedance (Z): Resistance is the opposition offered by a conductor to current flow converting electrical energy into heat (Ω); Reactance is the frequency-dependent opposition offered by inductors (X_L = ωL) and capacitors (X_C = 1/ωC) to AC; Impedance Z = R + jX is the total complex opposition to AC.',
      ],
      bulletPoints: [
        'Direct Current (DC) vs. Alternating Current (AC) [Class Note & PUST 2022 Q4c]:',
        '1. Direct Current (DC): A current or voltage whose magnitude and direction remain constant with time (frequency f = 0 Hz, capital symbols V, I). Produced by batteries, DC generators, and solar cells.',
        '2. Alternating Current (AC): A current or voltage whose magnitude changes continuously with time and whose direction reverses periodically: i(t) = I_m sin(ωt + φ) (lowercase symbols v, i). Produced by alternators and stepped up/down easily using transformers.',
        'Worked Energy Problem (PUST 2021 Q1a — Sadiku Example 1.5):',
        '• Question: How much energy does a 100 W electric bulb consume in two hours?',
        '• Solution: Given P = 100 W and t = 2 hours = 2 × 3600 s = 7200 s:\nW = P × t = 100 W × 2 h = 200 Wh = 0.2 kWh\nIn Joules: W = 100 W × 7200 s = 720,000 J = 720 kJ.',
      ],
      table: {
        caption:
          'Table 1.1 — Class Note Comparison: Resistance (R) vs. Impedance (Z) [PUST 2022 Q4(b)]',
        headers: ['Feature', 'Resistance (R)', 'Impedance (Z = R + jX)'],
        rows: [
          [
            '1. Applicability',
            'Applies to both DC (f = 0 Hz) and AC circuits',
            'Applies exclusively to AC circuits',
          ],
          [
            '2. Physical Mechanism',
            'Purely opposes current by converting electrical energy irreversibly into Joule heat',
            'Combines resistive dissipation (R) with reactive energy storage in magnetic (L) and electric (C) fields',
          ],
          [
            '3. Frequency Dependence',
            'Independent of supply frequency f',
            'Strongly dependent on frequency (X_L = 2πfL, X_C = 1 / 2πfC)',
          ],
          [
            '4. Phase Angle & Representation',
            'Real scalar R (v and i are strictly in phase, θ = 0°)',
            'Complex quantity Z = |Z|∠θ (introduces phase shift θ = tan⁻¹(X/R) between v and i)',
          ],
        ],
      },
      equations: [
        {
          label: 'Current & Net Charge Transferred',
          formula: 'i(t) = dq(t) / dt   |   q(t) = ∫_{t_0}^{t} i(τ) dτ + q(t_0)',
          units: 'A (C/s) and C',
        },
        {
          label: 'Voltage, Instantaneous Power & Electrical Energy',
          formula:
            'v_{ab} = dw / dq   |   p(t) = dw / dt = v(t) · i(t)   |   W = ∫_{t_1}^{t_2} p(t) dt',
          units: '1 V = 1 J/C, 1 W = 1 J/s, 1 kWh = 3.6 × 10⁶ J',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '3–6 Marks',
    },
    {
      id: 'u01-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Note · Lecture 02 (Professor Board Emphasis) · PUST Final 2024 Q1(c), 2023 Q1(a), 2021 Q1(c)',
      title: 'Passive Sign Convention (PSC) & Conservation of Power',
      summaryText:
        'Whenever reference current i enters the positive (+) voltage terminal, use p = +vi (p > 0 absorbed, p < 0 supplied). If current enters the negative (−) terminal, use p = −vi. In any closed circuit, ∑ p_k = 0.',
      memorizeStatements: [
        'Passive Sign Convention (PSC): Whenever the reference current arrow i enters the positive (+) voltage terminal of an element, calculate instantaneous power as p = +v · i; if current enters the negative (−) terminal (leaves +), negate the formula to p = −v · i.',
        'Power Absorption vs. Supply Criterion: Under PSC, p > 0 W means the element is absorbing (consuming) power like a passive load; p < 0 W means the element is supplying (delivering) power like an active source.',
        'Law of Conservation of Power (Tellegen’s Theorem): At any instant in a closed electrical network, the algebraic sum of power across all elements is identically zero: ∑ p_k = 0 (Total Power Absorbed = Total Power Supplied).',
      ],
      bulletPoints: [
        'Two-Step Exam Procedure for Signed Power Problems:',
        '1. Inspect the circuit arrow orientation first: Does current i enter the + terminal (write p = +v·i) or enter the − terminal / leave the + terminal (write p = −v·i)?',
        '2. Substitute the signed numerical values of v and i inside parentheses. If the final signed result is positive (+), state "Absorbed"; if negative (−), state "Supplied".',
        '3. Sum all signed powers across every element in the network to verify ∑ p_k = 0 W.',
      ],
      table: {
        caption: 'Table 1.2 — Complete Four-Case Passive Sign Convention Truth Matrix',
        headers: [
          'Terminal Entry of Current i',
          'Numerical Signs of v and i',
          'Power Formula & Result',
          'Physical Operating State',
        ],
        rows: [
          [
            'Enters + terminal',
            'v > 0, i > 0  (or v < 0, i < 0)',
            'p = +v · i > 0',
            'Absorbing Power (Passive Load)',
          ],
          [
            'Enters + terminal',
            'v > 0, i < 0  (or v < 0, i > 0)',
            'p = +v · i < 0',
            'Supplying Power (Active Source)',
          ],
          [
            'Enters − terminal (Leaves +)',
            'v > 0, i > 0  (or v < 0, i < 0)',
            'p = −v · i < 0',
            'Supplying Power (Active Source)',
          ],
          [
            'Enters − terminal (Leaves +)',
            'v < 0, i > 0  (or v > 0, i < 0)',
            'p = −v · i > 0',
            'Absorbing Power (Passive Load)',
          ],
        ],
      },
      equations: [
        {
          label: 'Passive Sign Convention & Power Conservation',
          formula:
            'p = +v · i  (i enters +)   |   p = −v · i  (i leaves +)   |   ∑_{k=1}^{N} p_k = 0',
          units: 'Watts (W)',
        },
      ],
      interactiveDiagramId: 'passive-sign',
      examYears: ['2024', '2023', '2021'],
      marks: '4–6 Marks',
      professorTip:
        'In semester exams, always write two explicit steps: (1) identify whether current enters the + or − terminal to fix the formula sign, and (2) substitute the numerical signs of v and i inside parentheses.',
    },
    {
      id: 'u01-b3',
      type: 'memorize',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Section 3, pp. 5–6) · Class Note (pp. 10–12) · PUST Final 2025 Q1(a), 2025 Q2(a), 2024 Q1(b,c), 2023 Q1(b), 2022 Q1(a), 2022 Q2(a), 2021 Q1(a)',
      title: 'Active vs. Passive Elements & Independent vs. Dependent Sources',
      summaryText:
        'Classification and comparison of active vs. passive circuit elements, independent vs. dependent (controlled) sources, and the four controlled source types (VCVS, VCCS, CCVS, CCCS) with practical device realizations.',
      memorizeStatements: [
        'Active Element: A circuit component capable of generating, supplying, or amplifying electrical energy over an indefinite time interval (e.g., voltage sources, current sources, transistors, operational amplifiers).',
        'Passive Element: A circuit component that cannot generate or amplify net electrical energy; it can only absorb/dissipate energy as heat (resistor) or temporarily store energy in an electric field (capacitor) or magnetic field (inductor).',
        'Independent Source: An active two-terminal element (drawn as a circle) that maintains a specified terminal voltage or current completely independent of the current or voltage in any other branch of the circuit.',
        'Dependent (Controlled) Source: An active element (drawn as a diamond) whose output voltage or current is governed by a controlling voltage v_x or current i_x located elsewhere in the circuit.',
        'Four Controlled Source Types: (1) VCVS: v_s = μ v_x (Op-Amp), (2) VCCS: i_s = g_m v_x (FET / MOSFET), (3) CCVS: v_s = r_m i_x (Transimpedance Amplifier / Photodiode Receiver), (4) CCCS: i_s = β i_x (BJT).',
      ],
      bulletPoints: [
        'Class Note Practical Examples of Active & Passive Elements:',
        '• Active Elements: (1) Independent & Dependent Voltage Sources, (2) Independent & Dependent Current Sources, (3) Transistor (amplifies weak signals and acts as an electronic switch), (4) Operational Amplifier / Op-Amp (amplifies voltage; performs addition, subtraction, integration, differentiation in filters, oscillators, and comparators).',
        '• Passive Elements: (1) Resistor (R, opposes current and dissipates heat), (2) Capacitor (C, stores charge in an electric field, opposes abrupt changes in voltage v_C, blocks steady DC and passes AC), (3) Inductor (L, stores energy in a magnetic field in Henrys H, opposes abrupt changes in current i_L).',
        'Professor’s Sheet Warning on Independent vs. Dependent Sources:',
        '• A time-varying source such as v(t) = 10 cos(ωt) V is still an INDEPENDENT source because its waveform is prescribed solely as a function of time t, not by another circuit branch variable.',
        '• Never deactivate a dependent source during ordinary nodal/mesh analysis or when zeroing independent sources to compute R_Th — a dependent source remains active as long as its controlling variable (v_x or i_x) is non-zero.',
      ],
      table: {
        caption:
          'Table 1.3 — Active vs. Passive Elements & The Four Linear Controlled Sources (Professor’s Sheet p. 6 & Class Note p. 11)',
        headers: [
          'Category / Source Type',
          'Governing Relation / Property',
          'Gain Unit / Symbol',
          'Practical Device / Circuit Realization',
        ],
        rows: [
          [
            'Active Element vs. Passive Element',
            'Active supplies/amplifies power (p < 0 possible long-term); Passive absorbs/stores energy (R, L, C)',
            'Generators, Amps vs. R (Ω), L (H), C (F)',
            'Active: Battery, Op-Amp, BJT, MOSFET; Passive: Resistor, Inductor, Capacitor',
          ],
          [
            'Independent vs. Dependent Source',
            'Independent: fixed V_s or I_s (Circle); Dependent: controlled by v_x or i_x (Diamond)',
            'V or A vs. Controlled Diamond',
            'Independent: Ideal Battery, AC Alternator; Dependent: Transistor/Op-Amp equivalent model',
          ],
          [
            '1. VCVS (Voltage-Controlled Voltage Source)',
            'v_s = μ · v_x',
            'Dimensionless voltage gain μ (V/V)',
            'Operational Amplifier (Op-Amp) voltage follower / non-inverting amplifier',
          ],
          [
            '2. VCCS (Voltage-Controlled Current Source)',
            'i_s = g_m · v_x',
            'Transconductance g_m in Siemens (S = A/V)',
            'Field-Effect Transistor (FET) and MOSFET small-signal model',
          ],
          [
            '3. CCVS (Current-Controlled Voltage Source)',
            'v_s = r_m · i_x',
            'Transresistance r_m in Ohms (Ω = V/A)',
            'Transimpedance Amplifier & Optical Photodiode Receiver',
          ],
          [
            '4. CCCS (Current-Controlled Current Source)',
            'i_s = β · i_x',
            'Dimensionless current gain β (A/A)',
            'Bipolar Junction Transistor (BJT, i_c = β i_b)',
          ],
        ],
      },
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '3–4 Marks',
    },
    {
      id: 'u01-b4',
      type: 'theory',
      priorityTier: 2,
      secondaryPriorityTiers: [1, 3, 4],
      sourceCitation:
        'PUST Final 2024 Q8(b), 2022 Q1(b), 2021 Q5(a), 2021 Q6(b), 2021 Q7(c) · Alexander & Sadiku Ch. 6–7 · B. L. Theraja Vol. I',
      title: 'Inductance, Capacitance, Stored Energy Proof & RC Charging Transient',
      summaryText:
        'Definitions of inductance L and capacitance C, proof that capacitor stored energy is W_C = Q²/(2C) = ½CV², and full derivation of the RC charging voltage v_C(t) and current i(t) transient equations.',
      memorizeStatements: [
        'Capacitance (C): The property of a dielectric-separated two-conductor element to store electric charge per unit potential difference: C = q / v (in Farads, F = C/V), with i = C (dv/dt) and stored electrostatic energy W_C = ½ C V² = Q² / (2C).',
        'Inductance (L): The property of a coil/conductor whereby a time-varying current induces a self-emf opposing the change in current: v = L (di/dt) (in Henrys, H = Wb/A = V·s/A), with stored magnetic energy W_L = ½ L I².',
        'RC Charging Transient Equations: When a series RC circuit with an initially uncharged capacitor is connected to a DC source V_s at t = 0, capacitor voltage rises exponentially as v_C(t) = V_s (1 − e^{−t/τ}) and charging current decays as i(t) = (V_s / R) e^{−t/τ}, where time constant τ = R C.',
      ],
      bulletPoints: [
        'Proof that Energy Stored in a Capacitor is W_C = Q² / (2C) = ½ C V² [PUST 2024 Q8(b) & 2021 Q6(b)]:',
        '1. Consider an initially uncharged capacitor of capacitance C being charged by transferring infinitesimal charge dq from one plate to the other against an instantaneous potential difference v = q / C.',
        '2. Since i = dq / dt, the instantaneous power delivered to the capacitor is:\np(t) = v(t) · i(t) = v · (dq / dt) = C v · (dv / dt)',
        '3. The infinitesimal work (electrostatic energy) dW_C stored during time dt is:\ndW_C = p(t) dt = (q / C) dq = C v dv',
        '4. Integrating from initial uncharged state (q = 0, v = 0) to final charge Q (voltage V = Q / C):\nW_C = ∫_0^Q (q / C) dq = (1 / C) [ q² / 2 ]_0^Q = Q² / (2C)\nSubstituting Q = C V gives the equivalent forms: W_C = ½ C V² = ½ Q V (Proved).',
        'Derivation of Voltage and Current for Charging Phase of a Capacitor [PUST 2021 Q5(a)]:',
        '1. Consider a series circuit consisting of a DC voltage source V_s, a switch closed at t = 0, a resistor R, and an initially uncharged capacitor C (v_C(0⁻) = v_C(0⁺) = 0 V).',
        '2. Applying KVL around the loop for t ≥ 0:\nV_s = v_R(t) + v_C(t) = i(t) R + v_C(t)',
        '3. Substituting the capacitor constitutive relation i(t) = C (dv_C / dt) yields a first-order linear ODE:\nR C (dv_C / dt) + v_C = V_s   ⇒   dv_C / (V_s − v_C) = dt / (R C)',
        '4. Integrating both sides from t = 0 (where v_C = 0) to time t:\n∫_0^{v_C} dv_C / (V_s − v_C) = ∫_0^t dt / (R C)   ⇒   −ln[(V_s − v_C) / V_s] = t / (R C)',
        '5. Exponentiating both sides gives the charging voltage transient:\n(V_s − v_C) / V_s = e^{−t / (RC)}   ⇒   v_C(t) = V_s (1 − e^{−t / RC}) = V_s (1 − e^{−t / τ})  for t ≥ 0',
        '6. Differentiating v_C(t) gives the charging current transient:\ni(t) = C (dv_C / dt) = C · V_s · [1 / (RC)] e^{−t / RC} = (V_s / R) e^{−t / τ} = I_0 e^{−t / τ}  for t > 0\nwhere τ = R C is the capacitive time constant (at t = τ, v_C reaches 63.2% of V_s and i drops to 36.8% of I_0; at t = 5τ, charging is >99.3% complete).',
      ],
      equations: [
        {
          label: 'Capacitor & Inductor Constitutive and Energy Equations',
          formula:
            'i_C = C (dv_C / dt),   W_C = Q² / (2C) = (1 / 2) C V²   |   v_L = L (di_L / dt),   W_L = (1 / 2) L I²',
          units: 'C in Farads (F), L in Henrys (H), W in Joules (J)',
        },
        {
          label: 'RC Capacitor Charging Transient (t ≥ 0, τ = RC)',
          formula:
            'v_C(t) = V_s (1 − e^{−t / RC})   |   i(t) = (V_s / R) e^{−t / RC}',
          units: 'V and A',
          note: 'In DC steady state (t → ∞): Capacitor acts as an OPEN circuit (i_C = 0); Inductor acts as a SHORT circuit (v_L = 0).',
        },
      ],
      interactiveDiagramId: 'rc-transient',
      examYears: ['2024', '2022', '2021'],
      marks: '4–4.67 Marks',
    },
    {
      id: 'u01-b5',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Note · Lecture 03 Board Example · PUST Final 2024 Q1(a) & 2022 Q1(a) · Alexander & Sadiku Practice Problem 1.5',
      title: 'Time-Varying Charge, Current & Power Calculations (2024 & 2022)',
      summaryText:
        'Complete worked solutions for differentiating time-varying charge q(t) and computing instantaneous power delivered to resistive (v = 3i) and inductive (v = 3 di/dt) elements at specified instants.',
      problemStatement:
        '(1) [Class Note] The total charge entering the positive terminal of an element is q(t) = 5t sin(4πt) mC while v(t) = 2 cos(4πt) V. Find i(t) and p(t) at t = 0.25 s. (2) [PUST 2024 Q1(a)] Find the power delivered to an element at t = 4 ms if the current entering its positive terminal is i = 10 cos(60πt) A and voltage is: (a) v = 3i, (b) v = 3 di/dt. (3) [PUST 2022 Q1(a)] Repeat for i = 5 cos(60πt) A at t = 3 ms with (a) v = 3i and (b) v = 3 di/dt.',
      givenData: [
        'Part (1): q(t) = 5t sin(4πt) mC, v(t) = 2 cos(4πt) V, t = 0.25 s',
        'Part (2) [2024 Q1a]: i(t) = 10 cos(60πt) A, t = 4 ms = 0.004 s (60πt in radians)',
        'Part (3) [2022 Q1a]: i(t) = 5 cos(60πt) A, t = 3 ms = 0.003 s (60πt in radians)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Part (1): Class Note Charge & Power at t = 0.25 s',
          explanation:
            'Differentiate q(t) using the product rule and evaluate at t = 0.25 s (where 4πt = π rad, sin π = 0, cos π = −1):',
          equation:
            'i(t) = dq/dt = 5 sin(4πt) + 20πt cos(4πt) mA\ni(0.25) = 5(0) + 20π(0.25)(−1) = −5π = −15.708 mA\nv(0.25) = 2 cos(π) = −2.0 V\n∴  p(0.25) = v(0.25) · i(0.25) = (−2.0 V)(−15.708 mA) = +31.42 mW (Absorbed)',
        },
        {
          stepTitle: 'Part (2): PUST 2024 Q1(a) — i(t) = 10 cos(60πt) A at t = 4 ms',
          explanation:
            'At t = 0.004 s, the angle is 60π(0.004) = 0.24π rad = 43.2° (where cos 43.2° = 0.72897 and sin 43.2° = 0.68455):',
          equation:
            'i(0.004) = 10 cos(43.2°) = 7.2897 A\n(a) For v = 3i:  v = 3(7.2897) = 21.869 V\n    p = v · i = 3i² = 3 × (7.2897)²\n∴  p_a(4 ms) = 159.42 W\n\n(b) For v = 3(di/dt):  v(t) = 3 [−600π sin(60πt)] = −1800π sin(60πt) V\n    v(0.004) = −1800π sin(43.2°) = −3871.03 V\n    p_b(4 ms) = v(0.004) · i(0.004) = (−3871.03)(7.2897)\n∴  p_b(4 ms) = −28,218.6 W = −28.22 kW',
        },
        {
          stepTitle: 'Part (3): PUST 2022 Q1(a) — i(t) = 5 cos(60πt) A at t = 3 ms',
          explanation:
            'At t = 0.003 s, the angle is 60π(0.003) = 0.18π rad = 32.4° (where cos 32.4° = 0.84433 and sin 32.4° = 0.53583):',
          equation:
            'i(0.003) = 5 cos(32.4°) = 4.2216 A\n(a) For v = 3i:  p_a = 3i² = 3 × (4.2216)²\n∴  p_a(3 ms) = 53.47 W\n\n(b) For v = 3(di/dt):  v(t) = 3 [−300π sin(60πt)] = −900π sin(60πt) V\n    v(0.003) = −900π sin(32.4°) = −1515.02 V\n    p_b(3 ms) = (−1515.02)(4.2216)\n∴  p_b(3 ms) = −6,395.8 W = −6.40 kW',
        },
      ],
      finalAnswer:
        '(1) p(0.25 s) = 31.42 mW; (2) 2024 Q1(a): p_a = 159.42 W, p_b = −28.22 kW; (3) 2022 Q1(a): p_a = 53.47 W, p_b = −6.40 kW',
      examYears: ['2024', '2022'],
      marks: '4–5 Marks',
    },
    {
      id: 'u01-b6',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [1, 3],
      sourceCitation:
        'PUST Final Exam 2024 Q1(c), 2023 Q1(a), 2021 Q1(c) · Alexander & Sadiku Example 1.7 & Practice Problem 1.7',
      title: 'Element Power Balance & Dependent Source Verification (2024, 2023, 2021)',
      summaryText:
        'Calculate the power absorbed or supplied by each circuit component (including dependent sources) and verify energy conservation ∑ p = 0 for the 2024/2021 and 2023 PUST final exam circuits.',
      examYears: ['2024', '2023', '2021'],
      marks: '4–6 Marks',
      problemStatement:
        '(1) [PUST 2024 Q1(c) & 2021 Q1(c)] Compute the power absorbed or supplied by each component: p₁ has 5 V (+ on top) with 8 A leaving the + terminal; p₂ has 2 V (+ on left) with 8 A entering the + terminal; p₃ is a dependent source 0.6I (+ on top) with 3 A entering its top (+) terminal; p₄ has 3 V (+ on top) with current I = 5 A entering its top (+) terminal. (2) [PUST 2023 Q1(a)] Calculate the power supplied or absorbed by each element: p₁ is a 20 V source (+ on top) with I = 5 A leaving the + terminal; p₂ has 12 V (+ on left) with I = 5 A entering +; p₃ has 8 V (+ on top) with 6 A entering +; p₄ is a dependent current source 0.2I pointing upward across the 8 V right branch (leaving the + terminal).',
      givenData: [
        'Circuit 1 (2024 & 2021): I = 5 A, Dependent voltage v₃ = 0.6I = 0.6(5) = 3 V',
        'Circuit 2 (2023): I = 5 A, Dependent current i₄ = 0.2I = 0.2(5) = 1 A upward across 8 V',
      ],
      solutionSteps: [
        {
          stepTitle: 'Part (1): PUST 2024 Q1(c) & 2021 Q1(c) Four-Element Network',
          explanation:
            'Apply the Passive Sign Convention to each of the four elements (using I = 5 A so 0.6I = 3 V):',
          equation:
            'p_1 (5 V source, 8 A leaves +):   p_1 = −(5 V)(8 A) = −40 W (Supplied)\np_2 (2 V element, 8 A enters +):  p_2 = +(2 V)(8 A) = +16 W (Absorbed)\np_3 (0.6I = 3 V source, 3 A enters +): p_3 = +(3 V)(3 A) = +9 W (Absorbed)\np_4 (3 V element, I = 5 A enters +):   p_4 = +(3 V)(5 A) = +15 W (Absorbed)\nCheck Conservation: ∑ p = −40 + 16 + 9 + 15 = 0 W\n∴  p_1 = −40 W,   p_2 = +16 W,   p_3 = +9 W,   p_4 = +15 W',
        },
        {
          stepTitle: 'Part (2): PUST 2023 Q1(a) Four-Element Network',
          explanation:
            'With control current I = 5 A, the dependent current source carries i₄ = 0.2(5) = 1 A upward (leaving the + terminal of the 8 V parallel branch):',
          equation:
            'p_1 (20 V source, 5 A leaves +):  p_1 = −(20 V)(5 A) = −100 W (Supplied)\np_2 (12 V element, 5 A enters +): p_2 = +(12 V)(5 A) = +60 W (Absorbed)\np_3 (8 V element, 6 A enters +):  p_3 = +(8 V)(6 A) = +48 W (Absorbed)\np_4 (0.2I = 1 A source across 8 V, leaves +): p_4 = −(8 V)(1 A) = −8 W (Supplied)\nCheck Conservation: ∑ p = −100 + 60 + 48 − 8 = 0 W\n∴  p_1 = −100 W,   p_2 = +60 W,   p_3 = +48 W,   p_4 = −8 W',
        },
      ],
      finalAnswer:
        '(1) 2024/2021: p₁ = −40 W, p₂ = +16 W, p₃ = +9 W, p₄ = +15 W; (2) 2023: p₁ = −100 W, p₂ = +60 W, p₃ = +48 W, p₄ = −8 W',
    },
    {
      id: 'u01-b7',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceCitation:
        'Class Note (p. 12) · PUST Final 2025 Q1(b), 2022 Q3(a,b), 2021 Q4(c), 2021 Q5(b), 2021 Q6(a), 2021 Q7(a) · B. L. Theraja Ch. 11 · Alexander & Sadiku Ch. 11',
      title: 'Non-Sinusoidal Waveforms, RMS, Average, Form & Peak Factors',
      summaryText:
        'Definitions and applications of non-sinusoidal waves, definitions of instantaneous, average, and RMS values, Form Factor (1.11) and Peak Factor (1.414), and full calculus derivations for a sinusoidal wave.',
      memorizeStatements: [
        'Non-Sinusoidal Waveform: Any periodic electrical waveform x(t) = x(t + T) that does not follow a pure sine or cosine shape (e.g., square, rectangular pulse, triangular, sawtooth, or composite harmonic waves); used in digital logic, PWM motor drives, switching power supplies, and signal processing.',
        'Instantaneous Value x(t): The magnitude and sign of an alternating quantity at any particular instant of time t.',
        'Average (Mean) Value (X_avg): The arithmetic average of all instantaneous values of a periodic waveform over one complete period T: X_avg = (1/T) ∫_0^T x(t) dt (for a symmetrical alternating wave, X_avg is defined over a half-cycle: X_avg,half = (2/T) ∫_0^{T/2} x(t) dt = 2X_m / π = 0.637 X_m).',
        'RMS / Effective Value (X_rms): The steady DC value which, when flowing through a given resistance R for a given time T, produces the exact same amount of heat as the periodic alternating waveform: X_rms = √[ (1/T) ∫_0^T x²(t) dt ] (for a sinusoid, X_rms = X_m / √2 = 0.707 X_m).',
        'Form Factor (K_f) & Peak / Crest Factor (K_p): Form Factor is the ratio of RMS value to half-cycle average value, K_f = X_rms / X_avg (= 1.11 for a sine wave); Peak Factor is the ratio of maximum (peak) value to RMS value, K_p = X_m / X_rms (= √2 = 1.414 for a sine wave).',
      ],
      bulletPoints: [
        'Why RMS and Average Values Are Important in Circuit Analysis [PUST 2025 Q1(b)]:',
        '1. Average Power & Heating Calculation: Average power dissipated in a resistor R by any periodic current is P = I_rms² R, allowing AC/non-sinusoidal power to be computed with DC-like formulas.',
        '2. Instrument Ratings & Calibration: Standard AC voltmeters and ammeters are calibrated to read RMS values, while DC/rectifier meters respond to average values (linked via Form Factor K_f = X_rms / X_avg).',
        '3. Insulation & Semiconductor Sizing: Peak factor K_p = X_m / X_rms determines the peak dielectric stress V_m that capacitor/cable insulation and rectifier diodes must withstand.',
        'Complete Calculus Derivations for a Sinusoidal Voltage v = V_m sin θ [PUST 2022 Q3(b) & 2021 Q5(b)]:',
        '1. Average Value for Half Cycle (0 to π):\nV_{avg,half} = (1 / π) ∫_0^π V_m sin θ dθ = (V_m / π) [ −cos θ ]_0^π = (V_m / π)(1 − (−1)) = 2V_m / π = 0.637 V_m.',
        '2. Average Value for Full Cycle (0 to 2π):\nV_{avg,full} = (1 / 2π) ∫_0^{2π} V_m sin θ dθ = (V_m / 2π) [ −cos θ ]_0^{2π} = (V_m / 2π)(−1 + 1) = 0 V.',
        '3. RMS Value for One Full Cycle [Show that V_rms = V_m / √2 — PUST 2021 Q5(b) & 2022 Q3(b)(iii)]:\nV_{rms} = √[ (1 / 2π) ∫_0^{2π} V_m² sin² θ dθ ] = √[ (V_m² / 2π) ∫_0^{2π} ((1 − cos 2θ) / 2) dθ ]\n= √[ (V_m² / 4π) [ θ − (sin 2θ)/2 ]_0^{2π} ] = √[ (V_m² / 4π)(2π) ] = √(V_m² / 2) = V_m / √2 = 0.707 V_m (Proved).',
        '4. Form Factor & Peak Factor of a Sinusoid:\nK_f = V_{rms} / V_{avg,half} = (V_m / √2) / (2V_m / π) = π / (2√2) = 1.11\nK_p = V_m / V_{rms} = V_m / (V_m / √2) = √2 = 1.414.',
      ],
      table: {
        caption:
          'Table 1.4 — Standard Waveform Reference Sheet: Average, RMS, Form Factor & Peak Factor',
        headers: [
          'Periodic Waveform Type',
          'Average Value (X_avg)',
          'RMS / Effective Value (X_rms)',
          'Form Factor K_f',
          'Peak Factor K_p',
        ],
        rows: [
          [
            'Pure Sinusoid x(t) = X_m sin(ωt)',
            '0 (Full)  |  2X_m / π = 0.637 X_m (Half)',
            'X_m / √2 = 0.707 X_m',
            '1.11',
            '√2 = 1.414',
          ],
          [
            'Full-Wave Rectified Sine',
            '2X_m / π = 0.637 X_m',
            'X_m / √2 = 0.707 X_m',
            '1.11',
            '√2 = 1.414',
          ],
          [
            'Half-Wave Rectified Sine',
            'X_m / π = 0.318 X_m',
            'X_m / 2 = 0.500 X_m',
            'π / 2 = 1.57',
            '2.00',
          ],
          [
            'Symmetrical Square Wave (±X_m)',
            '0 (Full)  |  X_m (Half)',
            'X_m',
            '1.00',
            '1.00',
          ],
          [
            'Unipolar Pulse Train (Duty D = t_on / T)',
            'D · X_m',
            '√D · X_m',
            '1 / √D',
            '1 / √D',
          ],
          [
            'Sawtooth / Triangular Wave (0 to X_m)',
            'X_m / 2 = 0.500 X_m',
            'X_m / √3 = 0.577 X_m',
            '2 / √3 = 1.155',
            '√3 = 1.732',
          ],
        ],
      },
      equations: [
        {
          label: 'General Periodic Average, RMS & Multi-Harmonic RMS Formulas',
          formula:
            'X_{avg} = (1 / T) ∫_0^T x(t) dt   |   X_{rms} = √[ (1 / T) ∫_0^T x²(t) dt ]   |   X_{rms} = √[ X_0² + (X_{m1}/√2)² + (X_{m2}/√2)² + ··· ]',
          units: 'K_f = X_{rms} / X_{avg},  K_p = X_m / X_{rms}',
        },
      ],
      examYears: ['2025', '2022', '2021'],
      marks: '3–4 Marks',
    },
    {
      id: 'u01-b8',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3, 4],
      sourceCitation:
        'PUST Final Exam 2025 Q1(c), 2025 Q7(c), 2024 Q4(a) · Alexander & Sadiku Ch. 11 · B. L. Theraja Ch. 11',
      title: 'RMS & Average Values of Non-Sinusoidal Waveforms (2025 & 2024)',
      summaryText:
        'Complete step-by-step integration solutions for the three PUST non-sinusoidal waveform exam problems: 2025 Q1(c) ramp-step wave, 2025 Q7(c) rectangular pulse train, and 2024 Q4(a) parabolic-flat-linear composite wave.',
      examYears: ['2025', '2024'],
      marks: '4–4.67 Marks',
      problemStatement:
        '(1) [PUST 2025 Q1(c)] Determine the RMS value of the periodic current waveform with period T = 4 s where i(t) = 5t A for 0 < t < 2 s and i(t) = −10 A for 2 < t < 4 s. If passed through a 2 Ω resistor, find the average power absorbed. (2) [PUST 2025 Q7(c)] Compute the average and effective (RMS) values of the unipolar square pulse wave with period T = 0.3 s where V(t) = 20 V for 0 < t < 0.1 s and V(t) = 0 V for 0.1 < t < 0.3 s. (3) [PUST 2024 Q4(a)] Calculate the effective value of the periodic current waveform (T = 3 s) defined by: i(t) = 10t² A for 0 ≤ t ≤ 1, i(t) = 10 A for 1 ≤ t ≤ 2, and a straight line from +10 A at t = 2 to −5 A at t = 3.',
      givenData: [
        'Problem (1) [2025 Q1c]: T = 4 s, i(t) = 5t on [0, 2], i(t) = −10 on [2, 4], R = 2 Ω',
        'Problem (2) [2025 Q7c]: T = 0.3 s, V(t) = 20 V on [0, 0.1], V(t) = 0 V on [0.1, 0.3]',
        'Problem (3) [2024 Q4a]: T = 3 s, i₁(t) = 10t² on [0, 1], i₂(t) = 10 on [1, 2], i₃(t) = 40 − 15t on [2, 3]',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2025 Q1(c) — Ramp-Step Current Waveform & Power in 2 Ω',
          explanation:
            'Integrate i²(t) over one complete period T = 4 s, then compute P = I_rms² R:',
          equation:
            'I_{rms}² = (1 / 4) [ ∫_0^2 (5t)² dt + ∫_2^4 (−10)² dt ]\n         = (1 / 4) [ 25 [ t³ / 3 ]_0^2 + 100 [ t ]_2^4 ]\n         = (1 / 4) [ 200 / 3 + 200 ] = (1 / 4) (800 / 3) = 200 / 3 = 66.67 A²\nI_{rms} = √(200 / 3) = 8.165 A\nAverage Power in 2 Ω:  P = I_{rms}² R = (200 / 3) × 2 = 400 / 3\n∴  I_{rms} = 8.165 A,   P = 133.33 W',
        },
        {
          stepTitle: 'Problem (2): PUST 2025 Q7(c) — Unipolar Rectangular Pulse Wave (T = 0.3 s)',
          explanation:
            'Integrate V(t) and V²(t) over [0, 0.3 s] (non-zero only on [0, 0.1 s], duty cycle D = 0.1/0.3 = 1/3):',
          equation:
            'V_{avg} = (1 / 0.3) ∫_0^{0.1} 20 dt = (20 × 0.1) / 0.3 = 20 / 3 = 6.67 V\nV_{rms} = √[ (1 / 0.3) ∫_0^{0.1} 20² dt ] = √[ (400 × 0.1) / 0.3 ] = √(400 / 3) = 20 / √3\n∴  V_{avg} = 6.67 V,   V_{rms} = 11.55 V',
        },
        {
          stepTitle: 'Problem (3): PUST 2024 Q4(a) — Three-Segment Parabolic-Flat-Linear Waveform (T = 3 s)',
          explanation:
            'On [2, 3], the line from (2, 10) to (3, −5) has slope m = (−5 − 10)/(3 − 2) = −15, so i₃(t) = 10 − 15(t − 2) = 40 − 15t. Integrate i²(t) over each sub-interval:',
          equation:
            '∫_0^1 (10t²)² dt = 100 [ t⁵ / 5 ]_0^1 = 20\n∫_1^2 (10)² dt = 100 [ t ]_1^2 = 100\n∫_2^3 (40 − 15t)² dt = [ (40 − 15t)³ / (3 × (−15)) ]_2^3 = [ (−5)³ − (10)³ ] / (−45) = −1125 / (−45) = 25\nI_{rms} = √[ (20 + 100 + 25) / 3 ] = √(145 / 3) = √48.333\n∴  I_{rms} = 6.952 A',
        },
      ],
      finalAnswer:
        '(1) 2025 Q1(c): I_rms = 8.165 A, P = 133.33 W; (2) 2025 Q7(c): V_avg = 6.67 V, V_rms = 11.55 V; (3) 2024 Q4(a): I_rms = 6.952 A',
    },
    {
      id: 'u01-b9',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3, 4],
      sourceCitation:
        'PUST Final Exam 2021 Q6(c) & 2021 Q7(c) · Robert L. Boylestad Ch. 10 & Ch. 12',
      title: 'DC Steady-State RLC Ladder & Inductance Reduction (2021)',
      summaryText:
        'Solve for DC steady-state currents I₁, I₂ and capacitor voltages V₁, V₂ in an RLC ladder network (2021 Q6c) and reduce a series-parallel inductance network (2021 Q7c).',
      examYears: ['2021'],
      marks: '4–4.67 Marks',
      problemStatement:
        '(1) [PUST 2021 Q6(c)] Find the DC steady-state currents I₁ and I₂ and capacitor voltages V₁ and V₂ for the ladder network driven by E = 50 V DC: top branch 1 has R₁ = 2 Ω in series with L₁ (current I₁); shunt branch 1 has R₂ = 5 Ω in series with C₁ (voltage V₁); top branch 2 has R₃ = 1 Ω in series with L₂ (current I₂); shunt branch 2 has R₄ = 4 Ω in series with C₂ (voltage V₂); rightmost parallel branch has R₅ = 7 Ω. (2) [PUST 2021 Q7(c)] Reduce the inductance network to its simplest form: input series L₁ = 0.56 H connected to an internal node where L₂ = 1.2 H, L₃ = 1.2 H, and L₄ = 1.8 H (shorted at its outer loop) are connected above a bottom resistor R = 1.2 kΩ.',
      givenData: [
        'Problem (1): E = 50 V DC, R₁ = 2 Ω, R₂ = 5 Ω, R₃ = 1 Ω, R₄ = 4 Ω, R₅ = 7 Ω',
        'Problem (2): L₁ = 0.56 H, L₂ = 1.2 H, L₃ = 1.2 H, L₄ = 1.8 H, R = 1.2 kΩ',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2021 Q6(c) — DC Steady-State RLC Equivalent Circuit',
          explanation:
            'Under DC steady state, inductors L₁, L₂ behave as short circuits (0 Ω) and capacitors C₁, C₂ behave as open circuits (zero current flows into the R₂ = 5 Ω and R₄ = 4 Ω shunt branches):',
          equation:
            'I_1 = I_2 = E / (R_1 + R_3 + R_5) = 50 / (2 + 1 + 7) = 50 / 10 = 5.0 A\nSince I_{C2} = 0 A, no voltage drops across R_4 = 4 Ω:\n  V_2 = V_{R5} = I_2 · R_5 = 5.0 × 7 = 35 V\nSince I_{C1} = 0 A, no voltage drops across R_2 = 5 Ω:\n  V_1 = I_2 · (R_3 + R_5) = 5.0 × (1 + 7) = 40 V\n∴  I_1 = 5 A,   I_2 = 5 A,   V_1 = 40 V,   V_2 = 35 V',
        },
        {
          stepTitle: 'Problem (2): PUST 2021 Q7(c) — Inductance Network Reduction',
          explanation:
            'The outer short-circuit wire places L₄ = 1.8 H in parallel with the short (or places L₂ = 1.2 H, L₃ = 1.2 H, and L₄ = 1.8 H in parallel depending on node termination; with the outer right wire shorting L₄ and placing L₂ ∥ L₃):',
          equation:
            'Case A (Outer wire shorts L_4 and places L_2 = 1.2 H in parallel with L_3 = 1.2 H):\n  L_{23} = 1.2 ∥ 1.2 = 0.60 H   ⇒   L_{eq} = L_1 + L_{23} = 0.56 + 0.60 = 1.16 H (in series with R = 1.2 kΩ)\nCase B (All three L_2, L_3, L_4 in parallel across the common return node):\n  1 / L_p = 1/1.2 + 1/1.2 + 1/1.8 = 20 / 9   ⇒   L_p = 0.45 H   ⇒   L_{eq} = 0.56 + 0.45 = 1.01 H\n∴  Simplest series form: L_{eq} = 1.16 H (or 1.01 H) in series with R = 1.2 kΩ',
        },
      ],
      finalAnswer:
        '(1) I₁ = I₂ = 5 A, V₁ = 40 V, V₂ = 35 V; (2) L_eq = 1.16 H (or 1.01 H) in series with R = 1.2 kΩ',
    },
  ],
};

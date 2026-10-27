import type { ChapterNote } from '../../types.ts';

export const EECE1111_CH06: ChapterNote = {
  id: 'eece1111-ch06',
  unitNumber: 'Module 06',
  title: 'Sinusoidal Functions',
  summary:
    'Instantaneous, average, and RMS values, form factor and peak factor, phase difference and leading/lagging rules, two-argument arctangent atan2(y, x) four-quadrant phasor angles, impedance and admittance sign conventions, series/parallel RL-RC-RLC networks, instantaneous/real/reactive/complex power, power factor correction, series/parallel resonance, and magnetic circuits.',
  estimatedMinutes: 95,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'u06-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceCitation:
        'Professor’s Sinusoidal Functions Handout pp. 1–2 · Class Notes pp. 11–13 · PUST Final 2025 Q6(a), 2023 Q6(a), 2023 Q8(a), 2022 Q6(a), 2021 Q7(a)',
      title: 'Sinusoidal Waveforms, Phase Difference & Core AC Definitions',
      summaryText:
        'Standard sinusoid x(t) = X_m cos(ωt + θ), angular frequency ω = 2πf = 2π/T, phase difference φ = θ_v − θ_i, leading/lagging rules, RMS value X_rms = X_m / √2, half-cycle average X_avg = 2X_m / π, Form Factor K_f = 1.11, and Peak Factor K_p = 1.414.',
      memorizeStatements: [
        'Instantaneous Value: The value of an alternating voltage or current at any particular instant of time t, denoted v(t) or i(t), such as x(t) = X_m cos(ωt + θ).',
        'Time Period (T) & Cyclic Frequency (f): The time period T = 2π / ω is the time in seconds required to complete one full cycle; cyclic frequency f = 1 / T = ω / (2π) is the number of cycles completed per second (Hz).',
        'Phasor: A complex number X = X_m ∠θ (or X_rms ∠θ) that represents the magnitude and initial phase angle of a sinusoid of fixed angular frequency ω via Euler’s identity e^{jφ} = cos φ + j sin φ, such that x(t) = Re{X_m e^{j(ωt + θ)}}.',
        'Effective (RMS) Value: The root-mean-square value of a periodic current is the steady DC current that delivers the same average power to a resistor R over one complete period T: X_rms = √[ (1 / T) ∫_0^T x²(t) dt ]. For a pure sinusoid, X_rms = X_m / √2 ≈ 0.7071 X_m.',
        'Average Value, Form Factor & Peak Factor of a Sinusoid: Full-cycle average is 0; positive half-cycle average is X_avg = (2 / π) X_m ≈ 0.6366 X_m. Form Factor K_f = X_rms / X_avg = π / (2√2) ≈ 1.11; Peak (Crest) Factor K_p = X_m / X_rms = √2 ≈ 1.414.',
        'Power Factor (pf): The cosine of the phase angle between voltage and current (pf = cos(θ_v − θ_i) = P / S = R / |Z|), equal to the ratio of real average power P (W) to apparent power S (VA). It is lagging when current lags voltage (inductive load) and leading when current leads voltage (capacitive load).',
      ],
      paragraphs: [
        'For two sinusoids of the same angular frequency ω expressed in the same trigonometric form with positive amplitudes, v(t) = V_m cos(ωt + θ_v) and i(t) = I_m cos(ωt + θ_i), the phase difference (or power factor angle) is φ = θ_v − θ_i.',
        'Before comparing phase angles between two waveforms, both sinusoids must satisfy three mandatory conditions: (1) positive amplitudes (X_m > 0), (2) identical angular frequency ω, and (3) identical trigonometric function (both cosine or both sine).',
      ],
      bulletPoints: [
        'Resistive Case (φ = 0° ⇔ θ_v = θ_i): Voltage and current are in phase; they reach their peaks and zero crossings simultaneously.',
        'Inductive / Lagging Case (φ > 0° ⇔ θ_v > θ_i): Voltage leads current by φ, or equivalently current lags voltage by φ.',
        'Capacitive / Leading Case (φ < 0° ⇔ θ_v < θ_i): Current leads voltage by |φ|, or equivalently voltage lags current by |φ|.',
        'Trigonometric Conversion Identities for Phase Comparison:',
        '• sin(ωt + θ) = cos(ωt + θ − 90°)   and   cos(ωt + θ) = sin(ωt + θ + 90°)',
        '• −cos(ωt + θ) = cos(ωt + θ ± 180°)   and   −sin(ωt + θ) = sin(ωt + θ ± 180°) = cos(ωt + θ + 90°)',
      ],
      equations: [
        {
          label: 'Sinusoidal Waveform, Angular Frequency & Phase Difference',
          formula: 'x(t) = X_m cos(ωt + θ)   |   ω = 2πf = 2π / T   |   φ = θ_v − θ_i',
          units: 'rad/s, Hz, s, degrees',
        },
        {
          label: 'Sinusoidal RMS Value, Half-Cycle Average, Form Factor & Peak Factor',
          formula: 'X_{rms} = X_m / √2 ≈ 0.7071 X_m   |   X_{avg,half} = (2 / π) X_m ≈ 0.6366 X_m   |   K_f = X_{rms} / X_{avg,half} = 1.11   |   K_p = X_m / X_{rms} = √2 ≈ 1.414',
          units: 'V or A',
        },
      ],
      problemStatement:
        'Professor’s Handout Example 1: For the sinusoidal current i(t) = 10 cos(100πt + 30°) A, determine: (1) amplitude I_m, (2) angular frequency ω, (3) cyclic frequency f, (4) time period T, (5) initial phase angle θ, and (6) instantaneous current i at t = 5 ms.',
      solutionSteps: [
        {
          stepTitle: 'Step 1: Extract waveform parameters directly from i(t) = I_m cos(ωt + θ)',
          explanation: 'Compare i(t) = 10 cos(100πt + 30°) A with I_m cos(ωt + θ):',
          equation:
            'I_m = 10 A\nω = 100π ≈ 314.16 rad/s\nf = ω / (2π) = (100π) / (2π) = 50 Hz\nT = 1 / f = 1 / 50 = 0.02 s = 20 ms\nθ = 30° = π / 6 rad',
        },
        {
          stepTitle: 'Step 2: Evaluate instantaneous current at t = 5 ms = 0.005 s',
          explanation: 'Convert ωt = 100π(0.005) = 0.5π rad = 90° before adding θ = 30°:',
          equation:
            'i(0.005) = 10 cos(90° + 30°)\n         = 10 cos(120°)\n         = 10 × (−0.5)\n∴  I_m = 10 A,  ω = 314.16 rad/s,  f = 50 Hz,  T = 20 ms,  θ = 30°,  i(5 ms) = −5 A',
        },
      ],
      finalAnswer: 'I_m = 10 A, ω = 314.16 rad/s, f = 50 Hz, T = 20 ms, θ = 30°, i(5 ms) = −5 A',
    },
    {
      id: 'u06-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sinusoidal Functions Handout pp. 2–3 · PUST Final 2023 Q8(a,b), 2022 Q6(b), 2022 Q7(a), 2021 Q7(a)',
      title: 'Instantaneous Power, RMS Derivation, Average Power & Complex Power',
      summaryText:
        'Instantaneous power p(t) = V_rms I_rms cos φ + V_rms I_rms cos(2ωt + θ_v + θ_i), average power P = V_rms I_rms cos φ, proof that pure reactive loads absorb zero average power, complex power S = V_rms I_rms* = P + jQ, and shunt capacitor power factor correction.',
      memorizeStatements: [
        'Instantaneous AC Power Formula: p(t) = v(t) · i(t) = V_rms I_rms cos(θ_v − θ_i) + V_rms I_rms cos(2ωt + θ_v + θ_i), which consists of a constant DC part P = V_rms I_rms cos φ and a double-frequency sinusoidal part oscillating at 2ω.',
        'Average (Real/Active) Power: P = (1 / T) ∫_0^T p(t) dt = (1 / 2) V_m I_m cos(θ_v − θ_i) = V_rms I_rms cos φ = I_rms² R [Watts, W].',
        'Purely Reactive Load Zero-Power Theorem [PUST 2023 Q8(b)]: For a purely inductive (φ = +90°) or purely capacitive (φ = −90°) load, cos(±90°) = 0, so the average power absorbed over a complete cycle is identically zero: P = V_rms I_rms cos(±90°) = 0 W.',
        'Complex, Apparent & Reactive Power: Complex power S = V_rms I_rms* = |S|∠φ = P + jQ [VA], where Apparent Power |S| = V_rms I_rms = √(P² + Q²) [VA], Real Power P = |S| cos φ = I_rms² R [W], and Reactive Power Q = |S| sin φ = I_rms² X [VAR].',
        'Power Factor Correction Formula [PUST 2022 Q7(a) & 2021 Q7(a)]: To raise a lagging inductive load’s power factor from cos φ₁ to cos φ₂ at constant real power P and line voltage V_rms, connect a shunt capacitor C = P(tan φ₁ − tan φ₂) / (ω V_rms²) in parallel with the load.',
      ],
      bulletPoints: [
        '1. Derivation of Instantaneous & Average Power [Professor’s Handout p. 2]:',
        '• Let v(t) = V_m cos(ωt + θ_v) and i(t) = I_m cos(ωt + θ_i). Using cos A cos B = (1 / 2)[cos(A − B) + cos(A + B)]:\n  p(t) = V_m I_m cos(ωt + θ_v) cos(ωt + θ_i) = (V_m I_m / 2) cos(θ_v − θ_i) + (V_m I_m / 2) cos(2ωt + θ_v + θ_i)',
        '• Since V_{rms} = V_m / √2 and I_{rms} = I_m / √2, we have (V_m I_m / 2) = V_{rms} I_{rms}. Letting φ = θ_v − θ_i:\n  p(t) = V_{rms} I_{rms} cos φ + V_{rms} I_{rms} cos(2ωt + θ_v + θ_i)',
        '• Averaging over one full period T = 2π / ω, the double-frequency cosine integrates to zero, leaving:\n  P = (1 / T) ∫_0^T p(t) dt = (1 / 2) V_m I_m cos φ = V_{rms} I_{rms} cos φ [W].',
        '2. Proof That a Purely Reactive Load Absorbs Zero Average Power [PUST 2023 Q8(b)]:',
        '• For a pure inductor (Z = jωL), voltage leads current by φ = θ_v − θ_i = +90°. For a pure capacitor (Z = −j / ωC), voltage lags current by φ = θ_v − θ_i = −90°.',
        '• Substituting cos(±90°) = 0 into the instantaneous power equation yields:\n  p(t) = V_{rms} I_{rms} cos(±90°) + V_{rms} I_{rms} cos(2ωt + θ_v + θ_i) = V_{rms} I_{rms} cos(2ωt + θ_v + θ_i)',
        '• During one quarter-cycle, p(t) > 0 and energy is stored in the inductor’s magnetic field (or capacitor’s electric field); during the next quarter-cycle, p(t) < 0 and the exact same energy is returned to the source. Hence P = (1 / T) ∫_0^T p(t) dt = 0 W.',
        '3. Derivation of Sinusoidal RMS Value from Equal Heating Power [Professor’s Handout p. 3]:',
        '• Passing i(t) = I_m cos(ωt + θ) through resistor R gives average power:\n  P = (1 / T) ∫_0^T i²(t) R dt = (I_m² R / T) ∫_0^T [ (1 + cos(2ωt + 2θ)) / 2 ] dt = I_m² R / 2',
        '• Equating to DC heating power P = I_{rms}² R gives I_{rms}² R = I_m² R / 2  ⇒  I_{rms} = I_m / √2 ≈ 0.7071 I_m.',
      ],
      equations: [
        {
          label: 'Instantaneous Power & Average Real Power',
          formula: 'p(t) = V_{rms} I_{rms} cos φ + V_{rms} I_{rms} cos(2ωt + θ_v + θ_i)   |   P = (1 / 2) V_m I_m cos(θ_v − θ_i) = V_{rms} I_{rms} cos φ',
          units: 'Watts (W)',
        },
        {
          label: 'Complex Power Triangle & Shunt Capacitor for Power Factor Correction',
          formula: 'S = V_{rms} I_{rms}^* = P + jQ = I_{rms}² R + j I_{rms}² X   |   C = P (tan φ₁ − tan φ₂) / (2π f V_{rms}²)',
          units: 'VA, W, VAR, Farads (F)',
        },
      ],
      problemStatement:
        '(1) [Handout Example 2] Given v(t) = 100√2 cos(314t + 30°) V and i(t) = 5√2 cos(314t − 30°) A, find V_rms, I_rms, φ, average power P, and instantaneous power p(t). (2) [PUST 2022 Q6b — 4 Marks] Given v(t) = 120 cos(377t + 45°) V and i(t) = 10 cos(377t − 10°) A, find the instantaneous power p(t) and the average power P absorbed.',
      solutionSteps: [
        {
          stepTitle: 'Part 1 (Handout Example 2): v(t) = 100√2 cos(314t + 30°) V, i(t) = 5√2 cos(314t − 30°) A',
          explanation: 'Find RMS magnitudes, phase difference φ = θ_v − θ_i, average power P, and p(t):',
          equation:
            'V_{rms} = (100√2) / √2 = 100 V,   I_{rms} = (5√2) / √2 = 5 A\nφ = θ_v − θ_i = 30° − (−30°) = 60° (Inductive / lagging),   θ_v + θ_i = 0°\nP = V_{rms} I_{rms} cos 60° = 100 × 5 × 0.5 = 250 W\np(t) = 250 + (100 × 5) cos(628t + 0°)\n∴  P = 250 W,   p(t) = 250 + 500 cos(628t) W',
        },
        {
          stepTitle: 'Part 2 (PUST 2022 Q6b): v(t) = 120 cos(377t + 45°) V, i(t) = 10 cos(377t − 10°) A',
          explanation: 'Compute (1/2) V_m I_m = (1/2)(120)(10) = 600 W, φ = 45° − (−10°) = 55°, and θ_v + θ_i = 35°:',
          equation:
            'P = (1 / 2) V_m I_m cos(55°) = 600 × 0.57358 = 344.15 W\np(t) = P + (1 / 2) V_m I_m cos(2ωt + θ_v + θ_i)\n     = 344.15 + 600 cos(754t + 35°) W\n∴  P = 344.15 W,   p(t) = 344.15 + 600 cos(754t + 35°) W',
        },
      ],
      finalAnswer: 'Handout Ex 2: P = 250 W, p(t) = 250 + 500 cos(628t) W; PUST 2022 Q6b: P = 344.15 W, p(t) = 344.15 + 600 cos(754t + 35°) W',
    },
    {
      id: 'u06-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'Professor’s Bangla Lecture Handout (Sinusoidal Function Bangla from Sir, pp. 1–7) · Sinusoidal Functions Handout pp. 4–5',
      title: 'Two-Argument Arctangent atan2(y, x) & Four-Quadrant Phasor Angles',
      summaryText:
        'Why single-argument tan⁻¹(y/x) fails in Quadrants II and III, the two-argument arctangent θ = atan2(y, x) (imaginary part first, real part second), the four-quadrant principal angle table in (−180°, 180°], and the 6 common exam mistakes.',
      memorizeStatements: [
        'Two-Argument Arctangent Rule [Professor’s Bangla Handout]: For any complex number z = x + jy or impedance Z = R + jX, the true principal angle in (−180°, 180°] is θ = atan2(y, x) = atan2(X, R), where the imaginary part (y or X) is always the first argument and the real part (x or R) is the second argument.',
        'Quadrant Angle Formulas (with acute reference angle α = tan⁻¹(|y| / |x|)): Quadrant I (x > 0, y > 0): θ = +α; Quadrant II (x < 0, y > 0): θ = 180° − α = tan⁻¹(y/x) + 180°; Quadrant III (x < 0, y < 0): θ = −180° + α = tan⁻¹(y/x) − 180°; Quadrant IV (x > 0, y < 0): θ = −α.',
      ],
      paragraphs: [
        'Why ordinary tan⁻¹(y/x) fails in Quadrants II and III: The single-argument function tan⁻¹(m) only receives the single divided ratio m = y / x and always returns an angle strictly in (−90°, +90°) (Quadrants I and IV). Because (+4)/(−3) = −4/3 and (−4)/(+3) = −4/3, the ratio y/x destroys the individual signs of x and y.',
        'Consequently, for z = −3 + j4 in Quadrant II, a calculator’s tan⁻¹(4 / −3) gives −53.13° (Quadrant IV) instead of the true angle +126.87°. Similarly, for z = −3 − j4 in Quadrant III, (−4)/(−3) = +4/3, so tan⁻¹(+4/3) gives +53.13° (Quadrant I) instead of the true angle −126.87°.',
      ],
      bulletPoints: [
        'Six Common Mistakes Highlighted in the Professor’s Bangla Handout:',
        '1. Swapping argument order: Writing atan2(x, y) instead of atan2(y, x) — always put the imaginary part (y or X) first and the real part (x or R) second.',
        '2. Blindly trusting calculator tan⁻¹(y/x) when the real part x < 0 (Quadrants II and III).',
        '3. Confusing +90° and −90° on the imaginary axis when x = 0 (+jX_L → +90°; −jX_C → −90°).',
        '4. Calculator Degree vs. Radian mode mismatch when adding ωt (in radians) and θ (in degrees).',
        '5. Forgetting to normalize phase angles into the principal interval (−180°, 180°] by adding or subtracting 360°.',
        '6. Dropping the negative sign on capacitive reactance (X = −X_C < 0 in Z = R + jX).',
      ],
      equations: [
        {
          label: 'Four-Quadrant Piecewise Formula for θ = atan2(y, x)',
          formula: 'x > 0: θ = tan⁻¹(y / x)   |   x < 0, y ≥ 0 (Q-II): θ = tan⁻¹(y / x) + 180°   |   x < 0, y < 0 (Q-III): θ = tan⁻¹(y / x) − 180°   |   x = 0: θ = +90° (y > 0) or −90° (y < 0)',
          units: 'Principal range (−180°, 180°]',
        },
      ],
      table: {
        caption:
          'Table 6.1 — Four-Quadrant & Axis Phasor Angle Reference Table (with |x| = 3, |y| = 4, |z| = 5, α = tan⁻¹(4/3) = 53.13°)',
        headers: [
          'Quadrant / Axis',
          'Signs of (x, y)',
          'Principal Angle Formula θ ∈ (−180°, 180°]',
          'Rectangular → Polar Example',
        ],
        rows: [
          ['Quadrant I', 'x > 0, y > 0', 'θ = +α = tan⁻¹(y / x)', '3 + j4 = 5∠53.13°'],
          ['Quadrant II', 'x < 0, y > 0', 'θ = 180° − α = tan⁻¹(y / x) + 180°', '−3 + j4 = 5∠126.87°'],
          ['Quadrant III', 'x < 0, y < 0', 'θ = −180° + α = tan⁻¹(y / x) − 180°', '−3 − j4 = 5∠−126.87°'],
          ['Quadrant IV', 'x > 0, y < 0', 'θ = −α = tan⁻¹(y / x)', '3 − j4 = 5∠−53.13°'],
          ['Positive Real Axis', 'x > 0, y = 0', 'θ = 0° (Pure Resistor Z = R)', '5 + j0 = 5∠0°'],
          ['Positive Imag Axis', 'x = 0, y > 0', 'θ = +90° (Pure Inductor Z = jX_L)', '0 + j4 = 4∠90°'],
          ['Negative Real Axis', 'x < 0, y = 0', 'θ = 180°', '−5 + j0 = 5∠180°'],
          ['Negative Imag Axis', 'x = 0, y < 0', 'θ = −90° (Pure Capacitor Z = −jX_C)', '0 − j4 = 4∠−90°'],
        ],
      },
      professorTip:
        'Whenever converting Z = R + jX or I = I_x + jI_y to polar form in an exam, first plot the signs of (x, y) on a mini 4-quadrant cross to verify whether you must add or subtract 180° from your calculator’s tan⁻¹ output.',
    },
    {
      id: 'u06-b4',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'PUST Final Exam 2023 Q6(a) · 2022 Q5(c) · 2022 Q7(b) · 2021 Q7(b)',
      title: 'Phase Angle Comparison Problems from Past Semester Exams',
      summaryText:
        'Complete step-by-step solutions to all four past semester exam phase-angle comparison problems (2023 Q6a, 2022 Q5c, 2022 Q7b, and 2021 Q7b).',
      examYears: ['2023', '2022', '2021'],
      marks: '3–5 Marks',
      problemStatement:
        '(1) [2023 Q6a — 3 Marks] Calculate the phase angle between i(t) = −4 sin(377t + 55°) A and v(t) = 5 cos(377t − 65°) V, and state which sinusoid leads. (2) [2022 Q5c — 3 Marks] Calculate the phase angle between v₁(t) = −10 cos(ωt + 50°) V and v₂(t) = 12 sin(ωt − 10°) V. (3) [2022 Q7b & 2021 Q7b — 5 Marks] Determine the phase relationship between: (i) v(t) = 10 sin(ωt − 20°) V and i(t) = 15 sin(ωt + 60°) A; (ii) i(t) = −sin(ωt + 30°) A and v(t) = 2 sin(ωt + 10°) V.',
      solutionSteps: [
        {
          stepTitle: 'Problem 1 (2023 Q6a): i(t) = −4 sin(377t + 55°) A and v(t) = 5 cos(377t − 65°) V',
          explanation:
            'Convert i(t) to positive-amplitude cosine form using −sin(α) = cos(α + 90°), then compare with v(t):',
          equation:
            'i(t) = −4 sin(377t + 55°) = 4 cos(377t + 55° + 90°) = 4 cos(377t + 145°) A\nv(t) = 5 cos(377t − 65°) = 5 cos(377t + 295°) V   [since −65° + 360° = 295°]\nΔθ = θ_v − θ_i = 295° − 145° = 150°\n∴  v(t) leads i(t) by 150° (or i(t) lags v(t) by 150°)',
        },
        {
          stepTitle: 'Problem 2 (2022 Q5c): v₁(t) = −10 cos(ωt + 50°) V and v₂(t) = 12 sin(ωt − 10°) V',
          explanation:
            'Convert both waveforms to positive-amplitude cosine form using −cos(α) = cos(α − 180°) and sin(α) = cos(α − 90°):',
          equation:
            'v₁(t) = −10 cos(ωt + 50°) = 10 cos(ωt + 50° − 180°) = 10 cos(ωt − 130°) V\nv₂(t) = 12 sin(ωt − 10°) = 12 cos(ωt − 10° − 90°) = 12 cos(ωt − 100°) V\nΔθ = θ₂ − θ₁ = −100° − (−130°) = +30°\n∴  v₂(t) leads v₁(t) by 30°',
        },
        {
          stepTitle: 'Problem 3(i) (2022/2021 Q7b-i): v(t) = 10 sin(ωt − 20°) V and i(t) = 15 sin(ωt + 60°) A',
          explanation: 'Both are already in positive-amplitude sine form with θ_v = −20° and θ_i = +60°:',
          equation:
            'Δθ = θ_i − θ_v = 60° − (−20°) = 80°\n∴  i(t) leads v(t) by 80° (Capacitive phase relationship)',
        },
        {
          stepTitle: 'Problem 3(ii) (2022/2021 Q7b-ii): i(t) = −sin(ωt + 30°) A and v(t) = 2 sin(ωt + 10°) V',
          explanation: 'Convert i(t) to positive-amplitude sine form by subtracting 180°:',
          equation:
            'i(t) = 1 sin(ωt + 30° − 180°) = 1 sin(ωt − 150°) A\nv(t) = 2 sin(ωt + 10°) V\nΔθ = θ_v − θ_i = 10° − (−150°) = 160°\n∴  v(t) leads i(t) by 160°',
        },
      ],
      finalAnswer: '(1) v leads i by 150°; (2) v₂ leads v₁ by 30°; (3i) i leads v by 80°; (3ii) v leads i by 160°',
    },
    {
      id: 'u06-b5',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceCitation:
        'Professor’s Sinusoidal Functions Handout pp. 4–9 · Class Notes pp. 11–13 · PUST Final 2025 Q6(b)',
      title: 'Impedance, Admittance & Series/Parallel RL, RC, RLC Networks',
      summaryText:
        'Element impedances Z_R = R, Z_L = jωL, Z_C = −j/(ωC), Admittance Y = 1/Z = G + jB with the susceptance sign rule B = −X/(R² + X²), Series RL/RC/RLC derivations, three operating regions, and Handout Examples 3, 4, and 5.',
      memorizeStatements: [
        'Impedance (Z) & Reactance (X): Total complex opposition to sinusoidal current, Z = V / I = R + jX = |Z|∠θ_Z [Ω], where |Z| = √(R² + X²), θ_Z = atan2(X, R), inductive reactance is X_L = ωL = 2πfL [Ω], and capacitive reactance is X_C = 1 / (ωC) = 1 / (2πfC) [Ω].',
        'Admittance (Y), Conductance (G) & Susceptance (B): Reciprocal of impedance, Y = 1 / Z = I / V = G + jB = |Y|∠θ_Y [Siemens, S], where G = R / (R² + X²) and B = −X / (R² + X²).',
        'Crucial Reactance–Susceptance Sign Rule [Professor’s Handout p. 5]: An inductive circuit has positive reactance (X > 0) but negative susceptance (B < 0); a capacitive circuit has negative reactance (X < 0) but positive susceptance (B > 0).',
      ],
      bulletPoints: [
        '1. Series RL Circuit Derivation [PUST 2025 Q6(b) & Handout p. 5]:',
        '• Applying KVL to resistor R and inductor L in series carrying current I: V = V_R + V_L = R I + jωL I = (R + jX_L) I.\n  Impedance: Z = R + jX_L = √(R² + X_L²) ∠tan⁻¹(X_L / R) [Ω], where X = +X_L = ωL > 0, θ_Z ∈ (0°, 90°), current lags voltage by θ_Z, and pf = R / √(R² + X_L²) (lagging).',
        '2. Series RC Circuit Derivation [PUST 2025 Q6(b) & Handout p. 6]:',
        '• Applying KVL to resistor R and capacitor C in series: V = V_R + V_C = R I + (1 / jωC) I = (R − jX_C) I.\n  Impedance: Z = R − jX_C = √(R² + X_C²) ∠(−tan⁻¹(X_C / R)) [Ω], where X = −X_C = −1/(ωC) < 0, θ_Z ∈ (−90°, 0°), current leads voltage by |θ_Z|, and pf = R / √(R² + X_C²) (leading).',
        '3. Series RLC Circuit & Three Operating Regions [Handout p. 7]:',
        '• Z = R + j(X_L − X_C) = √[ R² + (X_L − X_C)² ] ∠atan2(X_L − X_C, R).',
        '• Region 1 (X_L > X_C, i.e., ω > ω₀): Net X > 0 ⇒ Inductive (θ_Z > 0, B < 0, current lags voltage).',
        '• Region 2 (X_L < X_C, i.e., ω < ω₀): Net X < 0 ⇒ Capacitive (θ_Z < 0, B > 0, current leads voltage).',
        '• Region 3 (X_L = X_C, i.e., ω = ω₀ = 1/√(LC)): Net X = 0 ⇒ Resonant / Purely Resistive (Z = R, θ_Z = 0°, pf = 1).',
        '4. Parallel RL, Parallel RC & Parallel RLC Admittance:',
        '• For parallel branches across a common voltage V, admittances add directly:\n  Y = Y_R + Y_L + Y_C = (1 / R) + (1 / jωL) + jωC = (1 / R) + j(ωC − 1 / ωL) = G + j(B_C − B_L).',
      ],
      equations: [
        {
          label: 'Impedance to Admittance Conversion (Conductance G & Susceptance B)',
          formula: 'Z = R + j(X_L − X_C)   |   Y = 1 / Z = G + jB = [ R / (R² + X²) ] + j [ −X / (R² + X²) ]',
          units: 'Ω, Siemens (S)',
        },
        {
          label: 'Parallel RLC Admittance',
          formula: 'Y_{parallel} = G + j(B_C − B_L) = (1 / R) + j (ωC − 1 / ωL)   |   I = Y · V',
          units: 'Siemens (S), Amperes (A)',
        },
      ],
      problemStatement:
        'Professor’s Handout Worked Examples 3, 4 & 5: (1) [Ex 3 — Series RL] V = 100∠0° V (rms), f = 50 Hz, R = 20 Ω, L = 0.1 H: find Z, I, P, and Y. (2) [Ex 4 — Series RC] R = 30 Ω, C = 100 μF, f = 50 Hz: find Z and Y. (3) [Ex 5 — Series RLC] V = 120∠0° V (rms), f = 50 Hz, R = 20 Ω, L = 80 mH, C = 100 μF: find X_L, X_C, Z, I, Y, and P.',
      solutionSteps: [
        {
          stepTitle: 'Example 3 (Series RL): V = 100∠0° V, f = 50 Hz, R = 20 Ω, L = 0.1 H',
          explanation: 'Compute X_L = 2πfL, impedance Z, current I, power P, and admittance Y = 1/Z:',
          equation:
            'X_L = 2π(50)(0.1) = 31.416 Ω\nZ = 20 + j31.416 = 37.242∠57.52° Ω\nI = (100∠0°) / (37.242∠57.52°) = 2.685∠−57.52° A\nP = I_{rms}² R = (2.685)² × 20 = 144.2 W\nY = (20 − j31.416) / (20² + 31.416²) = 0.01442 − j0.02265 S = 0.02685∠−57.52° S',
        },
        {
          stepTitle: 'Example 4 (Series RC): R = 30 Ω, C = 100 μF, f = 50 Hz',
          explanation: 'Compute X_C = 1/(2πfC), impedance Z = R − jX_C, and admittance Y = 1/Z:',
          equation:
            'X_C = 1 / [ 2π(50)(100 × 10⁻⁶) ] = 31.831 Ω\nZ = 30 − j31.831 = 43.740∠−46.70° Ω\nY = (30 + j31.831) / (30² + 31.831²) = 0.01568 + j0.01664 S = 0.02286∠46.70° S',
        },
        {
          stepTitle: 'Example 5 (Series RLC): V = 120∠0° V, f = 50 Hz, R = 20 Ω, L = 80 mH, C = 100 μF',
          explanation: 'Find net reactance X = X_L − X_C, impedance Z, current I, admittance Y, and average power P:',
          equation:
            'X_L = 2π(50)(0.08) = 25.133 Ω,   X_C = 31.831 Ω\nX = X_L − X_C = 25.133 − 31.831 = −6.698 Ω (Capacitive since X_C > X_L)\nZ = 20 − j6.698 = 21.092∠−18.52° Ω\nI = (120∠0°) / (21.092∠−18.52°) = 5.690∠18.52° A\nY = (20 + j6.698) / (20² + 6.698²) = 0.04496 + j0.01506 S\nP = I_{rms}² R = (5.690)² × 20\n∴  Z = 21.092∠−18.52° Ω,   I = 5.690∠18.52° A,   P = 647.4 W',
        },
      ],
      finalAnswer: 'Ex 3: Z = 37.24∠57.52° Ω, P = 144.2 W; Ex 4: Z = 43.74∠−46.70° Ω; Ex 5: Z = 21.09∠−18.52° Ω, P = 647.4 W',
    },
    {
      id: 'u06-b6',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST Final Exam 2025 Q6(c) · 2023 Q6(b) · 2023 Q8(c) · 2022 Q5(a)',
      title: 'AC Series-Parallel Impedance, Phasor Current & Average Power PYQs',
      summaryText:
        'Complete solutions to 2025 Q6(c) (source power output), 2023 Q6(b) (phasor branch current I_o), 2023 Q8(c) (overall power factor and average power), and 2022 Q5(a) (input impedance Z_in at ω = 50 rad/s).',
      examYears: ['2025', '2023', '2022'],
      marks: '4–5 Marks',
      problemStatement:
        '(1) [2025 Q6c — 5 Marks] A voltage source V_s = 100∠0° V (rms) is in series with an 8 Ω resistor feeding two parallel branches: Branch 1 is −j6 Ω and Branch 2 is (3 + j4) Ω. Find the real power output of the source. (2) [2023 Q6b — 4 Marks] A source V_s = 60∠0° V is in series with 50 Ω feeding j80 Ω in parallel with (100 − j40) Ω carrying current I_o. Find I_o. (3) [2023 Q8c — 5 Marks] A source V_s = 30∠0° V (rms) is in series with 6 Ω feeding (−j2 Ω) ∥ (4 Ω). Find the power factor and average power delivered by the source. (4) [2022 Q5a — 5 Marks] Find the input impedance Z_in at ω = 50 rad/s of a 2 mF capacitor in series with (3 Ω + 10 mF) ∥ (8 Ω + 0.2 H).',
      solutionSteps: [
        {
          stepTitle: 'Problem 1 (2025 Q6c): Source Power Output for 100∠0° V + 8 Ω + [ (−j6 Ω) ∥ (3 + j4 Ω) ]',
          explanation: 'Compute parallel impedance Z_p, add the 8 Ω series resistor, and calculate P = I_rms² R_total:',
          equation:
            'Z_p = (−j6)(3 + j4) / (3 + j4 − j6) = (24 − j18) / (3 − j2)\n    = (24 − j18)(3 + j2) / (3² + 2²) = (108 − j6) / 13 = 8.308 − j0.462 Ω\nZ_{total} = 8 + (8.308 − j0.462) = 16.308 − j0.462 = 16.314∠−1.62° Ω\nI_{rms} = 100 / 16.314 = 6.130 A\nP = I_{rms}² R_{total} = (6.130)² × 16.308 = 612.7 W\n∴  Z_{total} = 16.31∠−1.62° Ω,   P = 612.7 W',
        },
        {
          stepTitle: 'Problem 2 (2023 Q6b): Branch Current I_o for 60∠0° V + 50 Ω + [ j80 Ω ∥ (100 − j40 Ω) ]',
          explanation: 'Find Z_p = (j80)(100 − j40) / (100 + j40) and apply the current divider formula:',
          equation:
            'Z_p = (j80)(100 − j40) / (100 + j40) = (3200 + j8000) / (100 + j40) = 55.172 + j57.931 Ω\nZ_{total} = 50 + Z_p = 105.172 + j57.931 = 120.07∠28.85° Ω\nI_s = (60∠0°) / (120.07∠28.85°) = 0.50∠−28.85° A\nI_o = I_s × (j80) / (100 + j40) = (j4800) / (8200 + j10000) = 0.371∠39.35° A\n∴  I_s = 0.50∠−28.85° A,   I_o = 0.371∠39.35° A',
        },
        {
          stepTitle: 'Problem 3 (2023 Q8c): Power Factor & Average Power for 30∠0° V (rms) + 6 Ω + [ (−j2 Ω) ∥ 4 Ω ]',
          explanation: 'Combine (−j2 Ω) ∥ 4 Ω, add the 6 Ω series resistor, and find cos φ and P:',
          equation:
            'Z_p = (−j2)(4) / (4 − j2) = −j8(4 + j2) / 20 = 0.8 − j1.6 Ω\nZ_{in} = 6 + (0.8 − j1.6) = 6.8 − j1.6 = 6.986∠−13.24° Ω\npf = cos(−13.24°) = 0.9734 (leading)\nP = (V_{rms}² / |Z_{in}|) cos φ = (900 / 6.986) × 0.9734 = 125.41 W\n∴  pf = 0.9734 (leading),   P = 125.41 W',
        },
        {
          stepTitle: 'Problem 4 (2022 Q5a): Input Impedance Z_in at ω = 50 rad/s',
          explanation: 'Calculate Z_{C1}, Z_{C2}, and Z_L at ω = 50 rad/s, then combine Z_{C1} + (Z_A ∥ Z_B):',
          equation:
            'Z_{C1} = 1 / [ j(50)(2 × 10⁻³) ] = −j10 Ω,   Z_{C2} = 1 / [ j(50)(10 × 10⁻³) ] = −j2 Ω,   Z_L = j(50)(0.2) = j10 Ω\nZ_A = 3 − j2 Ω,   Z_B = 8 + j10 Ω\nZ_{AB} = (3 − j2)(8 + j10) / (11 + j8) = (44 + j14)(11 − j8) / 185 = (596 − j198) / 185 = 3.222 − j1.070 Ω\nZ_{in} = Z_{C1} + Z_{AB} = −j10 + (3.222 − j1.070)\n∴  Z_{in} = 3.22 − j11.07 Ω = 11.53∠−73.77° Ω',
        },
      ],
      finalAnswer: '(2025 Q6c) P = 612.7 W; (2023 Q6b) I_o = 0.371∠39.35° A; (2023 Q8c) pf = 0.9734 leading, P = 125.41 W; (2022 Q5a) Z_in = 3.22 − j11.07 Ω',
    },
    {
      id: 'u06-b7',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceCitation:
        'Class Notes p. 13 (Board Derivation) · Sinusoidal Functions Handout pp. 7–9 · Alexander & Sadiku Ch. 14 · PUST Final 2025 Q7(a), 2023 Q6(c)',
      title: 'Series & Parallel Resonance, Quality Factor Q & Half-Power Bandwidth',
      summaryText:
        'Board derivation of resonant frequency ω₀ = 1/√(LC) and f₀ = 1/(2π√(LC)), series and parallel quality factors Q_s and Q_p, half-power frequencies ω₁ and ω₂, and bandwidth B = ω₂ − ω₁ = ω₀ / Q.',
      memorizeStatements: [
        'Resonance Condition & Resonant Frequency [Class Note p. 13]: Electrical resonance occurs in an RLC circuit when the net reactive part of impedance (or admittance) vanishes (X_L = X_C), placing voltage and current in phase (unity power factor) at angular frequency ω₀ = 1 / √(LC) [rad/s] or cyclic frequency f₀ = 1 / (2π√(LC)) [Hz].',
        'Series RLC Resonance Properties: At ω = ω₀, impedance is minimum and purely resistive (Z = R), current is maximum (I₀ = V / R), quality factor is Q_s = ω₀L / R = 1 / (ω₀CR) = (1 / R)√(L / C), bandwidth is B = ω₂ − ω₁ = R / L = ω₀ / Q_s [rad/s], and reactive voltages are magnified to |V_L| = |V_C| = Q_s V_s.',
        'Parallel RLC Resonance Properties: At ω = ω₀, admittance is minimum (Y = 1 / R, impedance Z = R is maximum), quality factor is Q_p = R / (ω₀L) = ω₀RC = R√(C / L), and bandwidth is B = ω₂ − ω₁ = 1 / (RC) = ω₀ / Q_p [rad/s].',
      ],
      bulletPoints: [
        '1. Class Lecture Board Derivation of Resonant Frequency f₀ [Class Notes p. 13]:',
        '• In a series RLC circuit, Z = R + j(X_L − X_C), where X_L = ωL = 2πfL and X_C = 1 / (ωC) = 1 / (2πfC).',
        '• At resonance, the imaginary part of Z is zero:\n  X_L = X_C   ⇒   2πf₀L = 1 / (2πf₀C)   ⇒   f₀² = 1 / (4π²LC)   ⇒   f₀ = 1 / (2π√(LC)) [Hz]   and   ω₀ = 1 / √(LC) [rad/s].',
        '2. Half-Power (−3 dB) Frequencies ω₁, ω₂ & Bandwidth B [Sadiku Ch. 14]:',
        '• The half-power frequencies ω₁ (lower) and ω₂ (upper) are the frequencies at which |Z| = √2 R and |I| = I_{max} / √2, so dissipated power drops to P = (1 / 2) P_{max}:',
        '• Exact formula: ω₁,₂ = ∓(R / 2L) + √[ (R / 2L)² + (1 / LC) ] = ω₀ [ ∓(1 / 2Q_s) + √(1 + 1 / (2Q_s)²) ].',
        '• Geometric mean property: ω₀ = √(ω₁ · ω₂). For high-Q circuits (Q ≥ 10), resonance is symmetric: ω₁ ≈ ω₀ − B/2 and ω₂ ≈ ω₀ + B/2.',
      ],
      equations: [
        {
          label: 'Resonant Angular & Cyclic Frequency (Series & Ideal Parallel RLC)',
          formula: 'ω₀ = 1 / √(LC)   |   f₀ = 1 / (2π √(LC))   |   ω₀ = √(ω₁ ω₂)',
          units: 'rad/s, Hz',
        },
        {
          label: 'Series RLC Quality Factor, Bandwidth & Half-Power Frequencies',
          formula: 'Q_s = ω₀L / R = 1 / (ω₀CR) = (1 / R) √(L / C)   |   B = ω₂ − ω₁ = R / L = ω₀ / Q_s   |   ω_{1,2} = ∓(R / 2L) + √[ (R / 2L)² + 1 / (LC) ]',
          units: 'dimensionless, rad/s',
        },
        {
          label: 'Parallel RLC Quality Factor & Bandwidth',
          formula: 'Q_p = R / (ω₀L) = ω₀RC = R √(C / L)   |   B = ω₂ − ω₁ = 1 / (RC) = ω₀ / Q_p',
          units: 'dimensionless, rad/s',
        },
      ],
    },
    {
      id: 'u06-b8',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST Final Exam 2025 Q7(a) · 2023 Q6(c)',
      title: 'Series & Parallel RLC Resonance Exam Problems',
      summaryText:
        'Complete worked solutions for PUST 2025 Q7(a) (Series RLC resonance: ω₀, ω₁, ω₂, Q, B, and current amplitudes) and PUST 2023 Q6(c) (Parallel RLC resonance: ω₀, Q, B, and resistor current i_o).',
      examYears: ['2025', '2023'],
      marks: '5 Marks',
      problemStatement:
        '(1) [2025 Q7a — 5 Marks] A series-connected RLC circuit has R = 4 Ω, L = 1 mH, and C = 0.4 μF, driven by v_s(t) = 20 sin(ωt) V. Find: (i) the resonant frequency ω₀ (and f₀), (ii) the half-power frequencies ω₁ and ω₂, (iii) the quality factor Q and bandwidth B, and (iv) the amplitude of the current at ω₀, ω₁, and ω₂. (2) [2023 Q6c — 5 Marks] A parallel RLC circuit has R = 8 kΩ, L = 0.2 mH, and C = 8 μF, driven by v(t) = 10 sin(ωt) V. Calculate ω₀, Q, B, and the resistor branch current i_o(t) at resonance.',
      solutionSteps: [
        {
          stepTitle: 'Part 1 (2025 Q7a — Series RLC): R = 4 Ω, L = 1 mH = 10⁻³ H, C = 0.4 μF = 0.4 × 10⁻⁶ F, V_m = 20 V',
          explanation: 'Compute ω₀, B = R/L, Q_s = ω₀/B, half-power frequencies ω₁,₂, and current amplitudes:',
          equation:
            '(i)  ω₀ = 1 / √(10⁻³ × 0.4 × 10⁻⁶) = 1 / √(4 × 10⁻¹⁰) = 50,000 rad/s = 50 krad/s   (f₀ = 7.958 kHz)\n(iii) B = R / L = 4 / 10⁻³ = 4000 rad/s = 4 krad/s\n      Q_s = ω₀ / B = 50 / 4 = 12.5\n(ii)  ω₁,₂ = ∓(B / 2) + √[ (B / 2)² + ω₀² ] = ∓2 + √(4 + 2500) krad/s\n      ω₁ = −2 + 50.04 = 48.04 krad/s,   ω₂ = +2 + 50.04 = 52.04 krad/s\n      (High-Q approximation: ω₁ ≈ 50 − 2 = 48 krad/s,  ω₂ ≈ 50 + 2 = 52 krad/s)\n(iv)  I(ω₀) = V_m / R = 20 / 4 = 5 A\n      I(ω₁) = I(ω₂) = I(ω₀) / √2 = 5 / √2 = 3.536 A\n∴  ω₀ = 50 krad/s,  B = 4 krad/s,  Q = 12.5,  ω₁ = 48.04 krad/s,  ω₂ = 52.04 krad/s,  I(ω₀) = 5 A',
        },
        {
          stepTitle: 'Part 2 (2023 Q6c — Parallel RLC): R = 8 kΩ = 8000 Ω, L = 0.2 mH = 2 × 10⁻⁴ H, C = 8 μF = 8 × 10⁻⁶ F',
          explanation: 'Compute ω₀ = 1/√(LC), parallel quality factor Q_p = R/(ω₀L), bandwidth B = ω₀/Q_p, and i_o(t) = v(t)/R at resonance:',
          equation:
            'ω₀ = 1 / √(0.2 × 10⁻³ × 8 × 10⁻⁶) = 1 / √(1.6 × 10⁻⁹) = 25,000 rad/s = 25 krad/s\nQ_p = R / (ω₀L) = 8000 / (25,000 × 0.2 × 10⁻³) = 8000 / 5 = 1600\nB = ω₀ / Q_p = 25,000 / 1600 = 15.625 rad/s\ni_o(t) = v(t) / R = (10 sin(25,000t)) / 8000 = 1.25 sin(25,000t) mA\n∴  ω₀ = 25 krad/s,  Q = 1600,  B = 15.625 rad/s,  i_o(t) = 1.25 sin(25,000t) mA',
        },
      ],
      finalAnswer: '2025 Q7a: ω₀ = 50 krad/s, B = 4 krad/s, Q = 12.5, ω₁ = 48.04 krad/s, ω₂ = 52.04 krad/s; 2023 Q6c: ω₀ = 25 krad/s, Q = 1600, B = 15.625 rad/s',
    },
    {
      id: 'u06-b9',
      type: 'memorize',
      priorityTier: 2,
      secondaryPriorityTiers: [1, 3, 4],
      sourceCitation:
        'B. L. Theraja Vol. I (Ch. 6 & Ch. 9) · PUST Final 2025 Q8, 2024 Q5(c) & Q8, 2022 Q8, 2021 Q8',
      title: 'Magnetic Circuits, Ampere’s Law & Past Exam Problems (Q8)',
      summaryText:
        'Definitions of B, H, μ_r, χ_m, MMF, Reluctance, fringing, hysteresis, dia-/para-/ferromagnetic materials, Electric vs. Magnetic circuit comparison table, Ampere’s Circuital Law for a long straight conductor, and solved air-gap ring PYQs (2024 Q8c, 2022/2021 Q8c).',
      examYears: ['2025', '2024', '2022', '2021'],
      marks: '12 Marks',
      memorizeStatements: [
        'Magnetic Flux Density (B) & Field Intensity (H): Flux density B = Φ / A [Wb/m² or Tesla] is the magnetic flux per unit cross-sectional area; magnetizing force H = NI / l [AT/m] is the MMF per unit length. They are related by B = μH = μ₀ μ_r H, where μ₀ = 4π × 10⁻⁷ H/m.',
        'Relative Permeability (μ_r) & Magnetic Susceptibility (χ_m): Relative permeability μ_r = μ / μ₀ = B / B₀ is the ratio of flux density in a material to that in vacuum for the same field H. Magnetic susceptibility χ_m = M / H satisfies μ_r = 1 + χ_m.',
        'Magnetomotive Force (MMF) & Reluctance (R_m): MMF F_m = NI [Ampere-Turns, AT] drives magnetic flux Φ through a magnetic circuit; Reluctance R_m = l / (μ₀ μ_r A) [AT/Wb] opposes the establishment of magnetic flux, obeying Hopkinson’s law: Φ = F_m / R_m = NI / R_m.',
        'Leakage Flux & Fringing: Leakage flux is the flux that does not follow the intended magnetic core path (leakage factor λ = Φ_total / Φ_useful > 1). Fringing is the spreading out of magnetic flux lines as they cross an air gap, increasing the effective gap area and reducing gap flux density.',
        'Magnetic Hysteresis: The phenomenon in which magnetic flux density B lags behind the magnetizing force H when a ferromagnetic material is taken through a cycle of magnetization, characterized by retentivity (residual flux density B_r at H = 0) and coercivity (reverse field −H_c required to reduce B to zero).',
        'Ampere’s Circuital Law [PUST 2025 Q8c, 2024 Q8b, 2022 Q8b, 2021 Q8b]: The line integral of magnetic field intensity H around any closed path equals the total current enclosed by that path: ∮ H · dl = I_enc (or NI). For a long straight conductor at radius r, H(2πr) = I ⇒ H = I / (2πr) [AT/m] and B = μ₀I / (2πr) [T].',
      ],
      bulletPoints: [
        'Classification of Magnetic Materials [PUST 2025 Q8(b), 2022 Q8(a), 2021 Q8(a)]:',
        '1. Diamagnetic Materials (χ_m small negative, μ_r slightly < 1, e.g., Bismuth, Copper, Silver, Water): Weakly repelled by a magnet; no permanent atomic magnetic dipole moment.',
        '2. Paramagnetic Materials (χ_m small positive, μ_r slightly > 1, e.g., Aluminum, Platinum, Oxygen): Weakly attracted by a magnet; atomic dipoles align weakly with an applied external field H.',
        '3. Ferromagnetic Materials (χ_m ≫ 1, μ_r ~ 10² to 10⁵, e.g., Iron, Nickel, Cobalt, Silicon Steel): Strongly magnetized in the direction of H due to aligned magnetic domains; exhibit magnetic saturation and hysteresis.',
      ],
      equations: [
        {
          label: 'Composite Series Magnetic Circuit with Air Gap (Hopkinson’s Law)',
          formula: 'NI = Φ (R_{iron} + R_{gap}) = H_i l_i + H_g l_g = (B / μ₀) [ (l_i / μ_r) + l_g ]   |   μ₀ = 4π × 10⁻⁷ H/m',
          units: 'Ampere-Turns (AT), Tesla (T)',
        },
        {
          label: 'Ampere’s Circuital Law & Field Around a Long Straight Conductor',
          formula: '∮ H · dl = NI   |   H = I / (2πr)   |   B = (μ₀ I) / (2πr)',
          units: 'AT/m, Tesla (T)',
        },
      ],
      table: {
        caption: 'Table 6.2 — Analogies & Fundamental Differences Between Electric and Magnetic Circuits [PUST 2024 Q5(c)]',
        headers: ['Quantity / Property', 'Electric Circuit', 'Magnetic Circuit'],
        rows: [
          ['Driving Force', 'Electromotive force (EMF) E [Volts, V]', 'Magnetomotive force (MMF) F_m = NI [Ampere-Turns, AT]'],
          ['Response (Flow / Flux)', 'Electric current I = E / R [Amperes, A]', 'Magnetic flux Φ = F_m / R_m [Webers, Wb]'],
          ['Opposition', 'Resistance R = ρl / A [Ohms, Ω]', 'Reluctance R_m = l / (μ₀ μ_r A) [AT/Wb]'],
          ['Field / Density Law', 'Current density J = I / A = σE [A/m²]', 'Flux density B = Φ / A = μH [T or Wb/m²]'],
          [
            'Physical Difference',
            'Charges actually flow continuously and dissipate energy as I²R heat as long as current flows',
            'Flux is established in the core; once established, no energy is consumed to maintain steady flux (and μ_r varies nonlinearly with B)',
          ],
        ],
      },
      problemStatement:
        '(1) [PUST 2024 Q8c — 4 Marks] An iron ring of mean length l_i = 50 cm has an air gap of l_g = 1 mm and a winding of N = 200 turns carrying current I = 4 A. If the relative permeability of iron is μ_r = 300, find the magnetic flux density B (neglecting magnetic leakage and fringing). (2) [PUST 2022 Q8c & 2021 Q8c — 4 Marks] Calculate the exciting current I required in a coil of N = 200 turns to establish a magnetic flux Φ = 1.5 mWb in a magnetic circuit consisting of an iron path l_i = 200 cm (μ_r = 800) with a 2 mm air gap and cross-sectional area A = 15 cm².',
      solutionSteps: [
        {
          stepTitle: 'Problem 1 (2024 Q8c): Iron Ring with Air Gap (l_i = 0.5 m, l_g = 0.001 m, N = 200, I = 4 A, μ_r = 300)',
          explanation: 'Apply NI = (B / μ₀)(l_i / μ_r + l_g) with total MMF = 200 × 4 = 800 AT:',
          equation:
            'NI = 200 × 4 = 800 AT\n800 = [ B / (4π × 10⁻⁷) ] × [ (0.5 / 300) + 0.001 ]\n800 = (7.9577 × 10⁵ B) × (0.001667 + 0.001) = 2122.07 B\nB = 800 / 2122.07 = 0.377 Wb/m² (Tesla)\n∴  B = 0.377 T',
        },
        {
          stepTitle: 'Problem 2 (2022 Q8c & 2021 Q8c): Exciting Current for Φ = 1.5 mWb (l_i = 2.0 m, l_g = 0.002 m, A = 15 × 10⁻⁴ m², μ_r = 800)',
          explanation: 'Compute flux density B = Φ / A, find total Ampere-Turns NI, and divide by N = 200 turns:',
          equation:
            'B = Φ / A = (1.5 × 10⁻³ Wb) / (15 × 10⁻⁴ m²) = 1.0 Wb/m² (Tesla)\nNI = (B / μ₀) × [ (l_i / μ_r) + l_g ] = [ 1.0 / (4π × 10⁻⁷) ] × [ (2.0 / 800) + 0.002 ]\nNI = (7.9577 × 10⁵) × (0.0025 + 0.002) = 3581 AT\nI = 3581 / 200 = 17.91 A\n∴  Total MMF = 3581 AT,   Exciting Current I = 17.91 A',
        },
      ],
      finalAnswer: '(2024 Q8c) B = 0.377 T; (2022/2021 Q8c) Total MMF = 3581 AT, I = 17.91 A',
    },
  ],
};

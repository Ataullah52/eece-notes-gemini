import type { ChapterNote } from '../../types';

export const PHY1101_CH03: ChapterNote = {
  id: 'phy1101-ch03',
  unitNumber: 'Module 03',
  title: 'Waves and Oscillations',
  summary:
    'Differential equation of simple harmonic oscillator, Total energy and average energy. Combination of simple harmonic oscillations, Spring mass system, Torsional pendulum, Two body oscillation, Reduced mass, Damped oscillation, Forced oscillation, Resonance, Progressive wave, Power and intensity of wave, Stationary wave, Group and phase velocities.',
  estimatedMinutes: 85,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m3-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sound Sheet (Subrahmanyam & Brij Lal, Ch. 1 pp. 1–6) · Sound Exam Note (§1.1–§1.4) · PUST EECE 2025 Q3(b), 2025 Q7(b), 2024 Q3(a), 2024 Q7(b), 2023 Q3(a), 2022 Q3(b), 2021 Q3(a), 2020 Q3(a)',
      title: 'Simple Harmonic Motion, Differential Equation, and Characteristics',
      summaryText:
        'Definition and 8 characteristics of SHM, circle of reference, velocity v = ω√(a² − y²), acceleration −ω²y, and derivation of d²y/dt² + ω²y = 0.',
      memorizeStatements: [
        'Simple Harmonic Motion (SHM): A periodic, to-and-fro linear oscillatory motion in which the restoring acceleration (or force) at every instant is directly proportional to the displacement from the fixed mean position and is always directed toward that mean position (d²y / dt² = −ω² y).',
        'Differential Equation of Simple Harmonic Oscillator (SHO): d²y / dt² + ω² y = 0 (or d²y / dt² + (K / m) y = 0), whose general solution is y = a sin(ωt + α), where a is amplitude, ω = 2πn = 2π/T = √(K/m) is angular frequency, and α is initial phase (epoch).',
        'SHM Velocity and Acceleration Relations: v = dy / dt = a ω cos(ωt + α) = ±ω √(a² − y²), and acceleration = d²y / dt² = −a ω² sin(ωt + α) = −ω² y.',
      ],
      bulletPoints: [
        'Derivation of Acceleration Equation and Differential Equation of SHM (Professor’s Sheet pp. 2–6 & PUST 2025 Q3b, 2025 Q7b, 2024 Q7b, 2022 Q3b, 2021 Q3a, 2020 Q3a):',
        '1. Circle of Reference & Displacement: Let a particle P revolve with uniform angular velocity ω around a circle of radius a. As P moves, the foot of the perpendicular M on the vertical diameter YY′ executes SHM with instantaneous displacement:\ny = a sin(ωt + α)   ...(1)\nwhere a is the amplitude (maximum displacement) and α is the epoch (initial phase angle at t = 0).',
        '2. Velocity of the Vibrating Particle: Differentiating Equation (1) with respect to time t gives the instantaneous velocity:\nv = dy / dt = a ω cos(ωt + α) = a ω √[1 − sin²(ωt + α)] = a ω √(1 − y² / a²) = ω √(a² − y²)   ...(2)\nAt the mean position (y = 0), velocity is maximum (v_max = a ω); at the extreme positions (y = ±a), velocity is zero (v_min = 0).',
        '3. Acceleration Equation of SHM: Differentiating Equation (2) with respect to time t gives the instantaneous acceleration:\nd²y / dt² = (d / dt)[a ω cos(ωt + α)] = −a ω² sin(ωt + α).',
        '4. Since y = a sin(ωt + α) from Equation (1), substituting y yields the Acceleration Equation:\nd²y / dt² = −ω² y   ...(3)\nAt the mean position (y = 0), acceleration is zero; at the extreme positions (y = ±a), acceleration is maximum in magnitude (|a_max| = ω² a).',
        '5. Differential Equation of SHM: Rearranging Equation (3) gives the standard second-order differential equation of a simple harmonic oscillator:\nd²y / dt² + ω² y = 0   (or   d²y / dt² + (K / m) y = 0, where ω² = K / m)   ...(4)\nTime period is T = 2π / ω = 2π √(Displacement / Acceleration) = 2π √(m / K), and frequency is n = 1 / T = ω / (2π).',
        'Eight Essential Characteristics of Simple Harmonic Motion (PUST 2024 Q3a, 2023 Q3a):',
        '1. The motion is periodic and oscillatory along a straight line about a fixed mean equilibrium position.',
        '2. Restoring acceleration (and restoring force F = −Ky) is directly proportional to displacement y and always directed toward the mean position.',
        '3. Velocity is maximum (v_max = aω) at the mean position (y = 0) and zero at the extreme positions (y = ±a).',
        '4. Acceleration is zero at the mean position (y = 0) and maximum (a_max = aω²) at the extreme positions (y = ±a).',
        '5. The time period T = 2π/ω is completely independent of the amplitude a (isochronous property).',
        '6. Velocity leads displacement in phase by π/2 (90°), while acceleration is out of phase with displacement by π (180°).',
        '7. Total mechanical energy E = ½mω²a² is conserved at every instant and is proportional to the square of the amplitude (E ∝ a²).',
        '8. Geometrically, SHM is the orthogonal projection of uniform circular motion onto any diameter of the reference circle.',
      ],
      table: {
        caption: 'Table 3.1 — Variation of Displacement, Velocity, and Acceleration Over One Complete Vibration (Professor’s Sheet, p. 3)',
        headers: ['Phase Angle (ωt)', 'Particle Position', 'Displacement (y = a sin ωt)', 'Velocity (v = aω cos ωt)', 'Acceleration (−aω² sin ωt)'],
        rows: [
          ['0', 'Mean position (O)', '0', '+aω (Maximum)', '0 (Minimum)'],
          ['π / 2', 'Upper extreme (Y)', '+a (Maximum)', '0', '−aω² (Max magnitude)'],
          ['π', 'Mean position (O)', '0', '−aω (Maximum)', '0'],
          ['3π / 2', 'Lower extreme (Y′)', '−a (Maximum)', '0', '+aω² (Max magnitude)'],
          ['2π', 'Mean position (O)', '0', '+aω (Maximum)', '0'],
        ],
      },
      equations: [
        {
          label: 'SHM Displacement, Velocity, Acceleration & Differential Equation',
          formula: 'y = a sin(ωt + α)\nv = dy / dt = a ω cos(ωt + α) = ω √(a² − y²)\nd²y / dt² = −ω² y   ⇒   d²y / dt² + ω² y = 0\nT = 2π / ω = 2π √(m / K),   n = 1 / T',
          units: 'm, m·s⁻¹, m·s⁻², and s',
          note: 'v_max = aω (at y = 0);   |acc_max| = aω² (at y = ±a)',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
      marks: '3.67–5.67 Marks',
    },
    {
      id: 'phy-m3-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sound Sheet (Subrahmanyam & Brij Lal, Ch. 1 pp. 7–8) · Sound Exam Note (§1.5) · PUST EECE 2025 Q3(a), 2024 Q3(b), 2023 Q3(b), 2021 Q3(b)',
      title: 'Total Energy and Average Energy of Simple Harmonic Oscillator',
      summaryText:
        'Complete derivation proving that total energy of an SHO is E = ½KA² = 2π²ma²n² (constant and proportional to amplitude squared) and that average KE and average PE over a cycle each equal ¼mω²a² = ½E.',
      memorizeStatements: [
        'Instantaneous Kinetic Energy of SHO: K.E. = ½ m v² = ½ m ω² (a² − y²) = ½ K (a² − y²).',
        'Instantaneous Potential Energy of SHO: P.E. = ∫₀^y m ω² y dy = ½ m ω² y² = ½ K y².',
        'Total Energy of SHO: E = K.E. + P.E. = ½ m ω² a² = ½ K a² = 2π² m a² n² (constant at all positions and directly proportional to the square of amplitude a² and frequency n²).',
        'Average Kinetic and Potential Energy Over One Period: ⟨K.E.⟩ = ⟨P.E.⟩ = ¼ m ω² a² = ¼ K a² = π² m a² n² = ½ E.',
      ],
      bulletPoints: [
        'Proof That Total Energy of a Simple Harmonic Oscillator is E = ½KA² ∝ A² (Professor’s Sheet p. 8 & PUST 2024 Q3b, 2023 Q3b, 2021 Q3b):',
        '1. Let a particle of mass m execute SHM with displacement y = a sin(ωt + α), where a (or A) is the amplitude and ω = 2πn is the angular frequency (with force constant K = mω²).',
        '2. Instantaneous Kinetic Energy (K.E.): At displacement y, the velocity is v = aω cos(ωt + α) = ω√(a² − y²). Therefore:\nK.E. = ½ m v² = ½ m ω² (a² − y²) = ½ K (a² − y²)\nK.E. is maximum at the mean position (y = 0, K.E._max = ½Ka²) and zero at the extremes (y = ±a).',
        '3. Instantaneous Potential Energy (P.E.): The restoring force at displacement y is F = −mω²y = −Ky. The work done against this restoring force in displacing the particle from 0 to y is stored as potential energy:\nP.E. = ∫₀^y m ω² y dy = m ω² · [y² / 2]₀^y = ½ m ω² y² = ½ K y²\nP.E. is zero at the mean position (y = 0) and maximum at the extremes (y = ±a, P.E._max = ½Ka²).',
        '4. Total Mechanical Energy (E): Adding K.E. and P.E. at any instant:\nE = K.E. + P.E. = ½ m ω² (a² − y²) + ½ m ω² y² = ½ m ω² a² = ½ K a²   (or ½ K A²).\nSubstituting ω = 2πn gives:\nE = ½ m (2πn)² a² = 2π² m a² n².',
        '5. Since y cancels out completely, Total Energy E is constant at every point in the oscillation and is directly proportional to the square of the amplitude (E ∝ a²) and the square of the frequency (E ∝ n²).',
        'Derivation of Average Kinetic Energy and Average Potential Energy Over One Period (Professor’s Sheet p. 7 & PUST 2025 Q3a):',
        '1. Instantaneous kinetic energy as a function of time is K.E.(t) = ½ m v² = ½ m a² ω² cos²(ωt + α).',
        '2. The time-average kinetic energy over one complete period T is:\n⟨K.E.⟩ = (1 / T) ∫₀^T ½ m a² ω² cos²(ωt + α) dt = (m a² ω² / 4T) ∫₀^T [1 + cos 2(ωt + α)] dt.',
        '3. Since the integral of cos 2(ωt + α) over a full period T is zero (∫₀^T cos 2(ωt + α) dt = 0) and ∫₀^T dt = T:\n⟨K.E.⟩ = (m a² ω² / 4T) × T = ¼ m a² ω² = ¼ K a² = π² m a² n².',
        '4. By identical integration of sin²(ωt + α) = ½[1 − cos 2(ωt + α)], the average potential energy over one period is:\n⟨P.E.⟩ = (1 / T) ∫₀^T ½ m a² ω² sin²(ωt + α) dt = ¼ m a² ω² = ¼ K a² = π² m a² n².',
        '5. Comparison of Total Energy and Average Energy: ⟨K.E.⟩ = ⟨P.E.⟩ = ½ E, and their sum equals the constant total energy: ⟨K.E.⟩ + ⟨P.E.⟩ = ¼Ka² + ¼Ka² = ½Ka² = E.',
      ],
      equations: [
        {
          label: 'Instantaneous & Total Energy of SHM',
          formula: 'K.E. = (1 / 2) m ω² (A² − y²) = (1 / 2) K (A² − y²)\nP.E. = (1 / 2) m ω² y² = (1 / 2) K y²\nE = K.E. + P.E. = (1 / 2) m ω² A² = (1 / 2) K A² = 2π² m A² n²',
          units: 'J',
          note: 'K = mω² is the restoring force constant (spring stiffness)',
        },
        {
          label: 'Time-Average Kinetic & Potential Energy Over a Cycle',
          formula: '⟨K.E.⟩ = ⟨P.E.⟩ = (1 / 4) m ω² A² = (1 / 4) K A² = π² m A² n² = E / 2',
          units: 'J',
          note: 'Average kinetic energy equals average potential energy over one complete period T',
        },
      ],
      examYears: ['2025', '2024', '2023', '2021'],
      marks: '3.67–5 Marks',
    },
    {
      id: 'phy-m3-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Sound Exam Note (§1.6 & §2.6) · PUST EECE 2025 Q4(b), 2024 Q3(c), 2022 Q3(a), 2020 Q2(c) · Halliday & Resnick',
      title: 'Loaded Spring, Torsional Pendulum, Two-Body Oscillation, and Reduced Mass',
      summaryText:
        'Derivation of SHM equation and period for a horizontal/vertical loaded spring (T = 2π√(m/K)), torsional pendulum (T = 2π√(I/C)) and its applications, and two-body reduced mass μ_r = m₁m₂/(m₁+m₂).',
      memorizeStatements: [
        'Loaded Spring SHM Equation & Period: d²y / dt² + (K / m) y = 0, with time period T = 2π √(m / K) = 2π √(e / g), where K is the spring constant and e = mg / K is the static equilibrium extension.',
        'Torsional Pendulum Equation & Period: I (d²θ / dt²) + C θ = 0, with time period T = 2π √(I / C), where I is the moment of inertia of the suspended disc and C = (π η r⁴) / (2l) is the torsional rigidity constant of the suspension wire.',
        'Reduced Mass (μ_r) of a Two-Body System: For two interacting bodies of masses m₁ and m₂ connected by a spring of constant K, their relative motion is equivalent to a single particle of reduced mass μ_r = (m₁ m₂) / (m₁ + m₂) oscillating with ω = √(K / μ_r).',
      ],
      bulletPoints: [
        'Derivation of Equation of SHM for a Loaded Spring (PUST 2025 Q4b):',
        '1. Horizontal Loaded Spring: Consider a block of mass m attached to a massless spring of spring constant (stiffness) K resting on a frictionless horizontal surface. When pulled by displacement y from equilibrium, Hooke’s law gives the restoring force F = −K y.',
        '2. Vertical Loaded Spring: When mass m is suspended vertically from the spring, it stretches by a static extension e until upward spring tension balances weight: K e = m g. If the mass is pulled down a further distance y and released, the net upward restoring force is:\nF_net = m g − K(e + y) = m g − K e − K y = −K y   (since m g = K e).',
        '3. Applying Newton’s Second Law (F_net = m d²y / dt²) in either horizontal or vertical configuration:\nm (d²y / dt²) = −K y   ⇒   d²y / dt² + (K / m) y = 0.',
        '4. This is of the standard SHM form d²y/dt² + ω²y = 0 with ω = √(K / m). Therefore, the motion is simple harmonic with time period and frequency:\nT = 2π / ω = 2π √(m / K) = 2π √(e / g)   and   n = (1 / 2π) √(K / m).',
        'Torsional Pendulum and Its Applications (PUST 2024 Q3c):',
        '1. Construction & Theory: A rigid heavy disc or cylinder of moment of inertia I is suspended horizontally from its center by a vertical metallic wire of length l, radius r, and modulus of rigidity η.',
        '2. When the disc is twisted through a small angle θ in the horizontal plane, the elasticity of the wire exerts a restoring torque τ = −C θ, where C = (π η r⁴) / (2l) is the torsional constant (restoring couple per unit twist).',
        '3. By the rotational equation of motion (τ = I d²θ / dt²):\nI (d²θ / dt²) = −C θ   ⇒   d²θ / dt² + (C / I) θ = 0.',
        '4. Thus the angular oscillation is simple harmonic (independent of amplitude θ₀ even for large angles!) with angular frequency ω = √(C / I) and time period:\nT = 2π √(I / C).',
        '5. Applications of Torsional Pendulum: (i) Determining the modulus of rigidity η of a wire: η = (8π I l) / (r⁴ T²); (ii) Determining the unknown moment of inertia I of irregular bodies; (iii) Regulating mechanical torsion-pendulum clocks (400-day clocks); (iv) Cavendish torsion balance for measuring G and Coulomb’s torsion balance.',
        'Two-Body Oscillation and Reduced Mass Derivation (PUST 2022 Q3a, 2020 Q2c):',
        '1. Let two masses m₁ and m₂ at positions x₁ and x₂ along a frictionless axis be connected by a spring of natural length L₀ and constant K. Let x = (x₂ − x₁) − L₀ be the extension of the spring.',
        '2. Equations of motion for the two masses are: m₁ (d²x₁ / dt²) = +K x and m₂ (d²x₂ / dt²) = −K x.',
        '3. Subtracting the two accelerations gives the relative acceleration d²x / dt² = d²x₂ / dt² − d²x₁ / dt²:\nd²x / dt² = −K x · (1 / m₁ + 1 / m₂) = −(K / μ_r) x   ⇒   μ_r (d²x / dt²) + K x = 0\nwhere 1 / μ_r = 1 / m₁ + 1 / m₂ ⇒ μ_r = (m₁ m₂) / (m₁ + m₂) is the Reduced Mass (used for diatomic molecule vibrations like HCl or CO and earth-moon systems).',
      ],
      equations: [
        {
          label: 'Loaded Spring & Torsional Pendulum Periods',
          formula: 'T_spring = 2π √(m / K) = 2π √(e / g)\nT_torsion = 2π √(I / C),   C = (π η r⁴) / (2l)',
          units: 's and N·m·rad⁻¹',
          note: 'Parallel springs: K_eq = K₁ + K₂;   Series springs: 1/K_eq = 1/K₁ + 1/K₂',
        },
        {
          label: 'Two-Body Reduced Mass & Oscillation Frequency',
          formula: 'μ_r = (m₁ m₂) / (m₁ + m₂)\nT = 2π √(μ_r / K),   n = (1 / 2π) √(K / μ_r)',
          units: 'kg and s',
          note: 'Reduces a two-body problem to an equivalent one-body SHM problem',
        },
      ],
      examYears: ['2025', '2024', '2022', '2020'],
      marks: '3–5 Marks',
    },
    {
      id: 'phy-m3-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sound Sheet (Subrahmanyam & Brij Lal, Ch. 3 pp. 57–61) · Sound Exam Note (Block 2) · PUST EECE 2025 Q7(b), 2022 Q3(a), 2021 Q3(a), 2020 Q2(c)',
      title: 'Free, Damped, and Forced Vibrations, Resonance, and Quality Factor',
      summaryText:
        'Equations and physical behavior of undamped free vibrations, damped vibrations (d²y/dt² + 2b dy/dt + k²y = 0), forced vibrations (m d²y/dt² + μ dy/dt + Ky = F sin pt), and resonance.',
      memorizeStatements: [
        'Free (Undamped) Vibrations: Vibrations executed by a body capable of oscillating at its own natural frequency ω₀ = √(K/m) with constant amplitude when displaced once and left free from any external driving or frictional forces (d²y/dt² + (K/m)y = 0).',
        'Damped Vibrations: Free vibrations in a real medium where frictional or viscous resistive forces (F_d = −μ dy/dt) continuously dissipate mechanical energy as heat, causing the amplitude to decay exponentially with time: d²y/dt² + 2b (dy/dt) + k² y = 0, where b = μ/(2m) and k² = K/m.',
        'Forced Vibrations: Vibrations in which a body is compelled to oscillate at the frequency (p) of a continuously applied external periodic driving force (F sin pt) rather than its own natural frequency: m (d²y/dt²) + μ (dy/dt) + K y = F sin pt.',
        'Resonance: The special case of forced vibration in which the angular frequency of the external periodic driving force matches the natural angular frequency of the vibrating body (p = ω₀ = √(K/m)), causing the body to oscillate with maximum possible amplitude A_max = F / (μ p).',
      ],
      bulletPoints: [
        'Differential Equation and Solution of Free Damped Vibrations (Professor’s Sheet pp. 58–59 & PUST 2022 Q3a, 2021 Q3a):',
        '1. A vibrating particle of mass m experiences two opposing forces: (i) elastic restoring force −Ky and (ii) frictional damping force −μ(dy/dt) proportional to velocity. Newton’s second law gives:\nm (d²y / dt²) + μ (dy/dt) + K y = 0   ⇒   d²y / dt² + 2b (dy/dt) + k² y = 0\nwhere 2b = μ / m (damping coefficient) and k² = K / m (natural angular frequency squared).',
        '2. Auxiliary equation λ² + 2bλ + k² = 0 has roots λ = −b ± √(b² − k²), giving the general solution:\ny = A e^{(−b + √(b² − k²))t} + B e^{(−b − √(b² − k²))t}.',
        '3. For light damping (b < k, underdamped oscillatory motion), √(b² − k²) = iω_d where ω_d = √(k² − b²) = √[K/m − μ²/(4m²)], yielding:\ny = a e^{−bt} sin(ω_d t − α)\nwhere the amplitude a e^{−bt} decays exponentially to zero and frequency is n_d = (1 / 2π)√(k² − b²).',
        'Differential Equation and Steady-State Amplitude of Forced Vibrations (Professor’s Sheet pp. 59–61 & PUST 2025 Q7b, 2021 Q3a):',
        '1. When an external periodic force F sin(pt) acts on the damped oscillator, the equation of motion is:\nm (d²y / dt²) + μ (dy/dt) + K y = F sin(pt).',
        '2. Substituting the steady-state trial solution y = a sin(pt − α), dy/dt = ap cos(pt − α), d²y/dt² = −ap² sin(pt − α) and writing sin(pt) = sin[(pt − α) + α] = sin(pt − α) cos α + cos(pt − α) sin α:',
        '3. Equating coefficients of sin(pt − α) and cos(pt − α) yields:\na(K − m p²) = F cos α   ...(i)     and     μ a p = F sin α   ...(ii).',
        '4. Squaring and adding (i) and (ii) gives the steady-state forced amplitude a, and dividing (ii) by (i) gives the phase lag α:\na = F / √[μ² p² + (K − m p²)²]     and     tan α = (μ p) / (K − m p²).',
        '5. Resonance and Sharpness of Resonance (Professor’s Sheet p. 61): Amplitude a is maximum when (K − mp²) = 0 ⇒ p = √(K / m) = ω₀. At resonance, the maximum amplitude is:\na_res = F / (μ p) = (F / μ) √(m / K)\nand sharpness of resonance (how rapidly amplitude drops off on either side of p = ω₀) increases as damping μ decreases (measured by Quality Factor Q = ω₀ / 2b = mω₀ / μ).',
      ],
      table: {
        caption: 'Table 3.2 — Comparison of Free (Undamped), Damped, and Forced Vibrations',
        headers: ['Feature', 'Free (Undamped) Vibration', 'Damped Vibration', 'Forced Vibration'],
        rows: [
          [
            'Forces Acting',
            'Internal elastic restoring force (−Ky) only',
            'Restoring force (−Ky) + resistive damping (−μ dy/dt)',
            'Restoring + resistive + external periodic force (F sin pt)',
          ],
          [
            'Differential Equation',
            'd²y/dt² + (K/m)y = 0',
            'd²y/dt² + 2b(dy/dt) + k²y = 0',
            'm(d²y/dt²) + μ(dy/dt) + Ky = F sin pt',
          ],
          [
            'Frequency of Oscillation',
            'Natural frequency n₀ = (1/2π)√(K/m)',
            'Slightly less than natural: n_d = (1/2π)√(k² − b²)',
            'Equals frequency of external driving force (p / 2π)',
          ],
          [
            'Amplitude Behavior',
            'Remains constant indefinitely (a = const)',
            'Decays exponentially with time (a e^{−bt})',
            'Remains constant in steady state; maximum at resonance (p = ω₀)',
          ],
          [
            'Mechanical Energy',
            'Strictly conserved (E = ½Ka²)',
            'Continuously dissipated as heat in the medium',
            'Energy lost by damping is replenished by the external driver',
          ],
        ],
      },
      equations: [
        {
          label: 'Damped Oscillation Equation & Frequency',
          formula: 'd²y / dt² + 2b (dy / dt) + k² y = 0   (b = μ / 2m,  k² = K / m)\ny = a e^{−bt} sin(ω_d t − α),   ω_d = √(k² − b²)',
          units: 'm and rad·s⁻¹',
          note: 'b < k: underdamped;  b = k: critically damped;  b > k: overdamped',
        },
        {
          label: 'Forced Oscillation Amplitude, Phase & Resonance',
          formula: 'm (d²y / dt²) + μ (dy / dt) + K y = F sin(pt)\na = F / √[μ² p² + (K − m p²)²],   tan α = (μ p) / (K − m p²)\nAt Resonance (p = √(K / m)):   a_max = F / (μ p) = (F / μ) √(m / K)',
          units: 'm',
          note: 'Quality factor Q = ω₀ / (2b) = m ω₀ / μ',
        },
      ],
      examYears: ['2025', '2022', '2021', '2020'],
      marks: '3–5 Marks',
    },
    {
      id: 'phy-m3-b5',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Sound Exam Note (§5.1, §5.3, §5.5) · PUST EECE 2021 Q3(c), 2020 Q3(b,c) · Halliday & Resnick',
      title: 'Progressive vs. Stationary Waves, Wave Intensity, and Group Velocity',
      summaryText:
        'Progressive wave equation and intensity I = 2π²ρvn²a², analytical formation of stationary waves y = 2a cos(kx) sin(ωt) with nodes and antinodes, and phase velocity v_p vs. group velocity v_g.',
      memorizeStatements: [
        'Progressive (Traveling) Wave: A wave disturbance that propagates continuously forward in a medium in a definite direction with constant amplitude and transfers energy through the medium: y(x, t) = a sin(ωt − kx), satisfying ∂²y/∂x² = (1/v²)(∂²y/∂t²).',
        'Stationary (Standing) Wave: A non-propagating wave pattern formed by the superposition of two identical progressive waves of the same amplitude and frequency traveling in opposite directions along the same line: y(x, t) = 2a cos(kx) sin(ωt).',
        'Phase Velocity (v_p): The velocity with which a plane wavefront or a point of constant phase (such as a crest or trough) of a monochromatic wave travels through a medium: v_p = ω / k = n λ.',
        'Group Velocity (v_g): The velocity with which the overall modulation envelope (wave packet) of a group of waves of slightly different frequencies propagates, representing the true speed of energy and signal transport: v_g = dω / dk = v_p − λ (dv_p / dλ).',
      ],
      bulletPoints: [
        'Analytical Formation of Stationary Waves — Nodes and Antinodes (PUST 2021 Q3c, 2020 Q3c):',
        '1. Consider two identical progressive waves traveling along the +x and −x directions:\ny₁ = a sin(ωt − kx)   and   y₂ = a sin(ωt + kx)   (where k = 2π / λ).',
        '2. By the Principle of Superposition, the resultant displacement is:\ny = y₁ + y₂ = 2a cos(kx) sin(ωt) = A(x) sin(ωt)\nwhere A(x) = 2a cos(2πx / λ) is the position-dependent standing amplitude.',
        '3. Nodes (Points of Zero Amplitude): Occur where cos(2πx / λ) = 0 ⇒ 2πx / λ = (2n + 1)(π / 2) ⇒ x = (2n + 1)(λ / 4) = λ/4, 3λ/4, 5λ/4…',
        '4. Antinodes (Points of Maximum Amplitude 2a): Occur where |cos(2πx / λ)| = 1 ⇒ 2πx / λ = nπ ⇒ x = n(λ / 2) = 0, λ/2, λ, 3λ/2…',
        '5. Distance between two consecutive nodes (or two consecutive antinodes) is λ / 2; distance between a node and the adjacent antinode is λ / 4.',
        'Derivation of Relation Between Group Velocity (v_g) and Phase Velocity (v_p) [PUST 2021 Q3c, 2020 Q3c]:',
        '1. Superposing two waves of slightly different angular frequencies (ω₁, ω₂) and wave numbers (k₁, k₂):\ny = a sin(ω₁t − k₁x) + a sin(ω₂t − k₂x) = 2a cos[(Δω / 2)t − (Δk / 2)x] · sin(ωt − kx).',
        '2. The high-frequency carrier travels at the Phase Velocity v_p = ω / k, while the low-frequency modulation envelope moves at the Group Velocity:\nv_g = lim_{Δk → 0} (Δω / Δk) = dω / dk.',
        '3. Substituting ω = k · v_p into v_g = dω / dk (Rayleigh’s Formula):\nv_g = (d / dk)(k · v_p) = v_p + k (dv_p / dk).',
        '4. Since k = 2π / λ ⇒ dk = −(2π / λ²) dλ, we have k / dk = −λ / dλ, which gives:\nv_g = v_p − λ (dv_p / dλ)\nIn a non-dispersive medium (dv_p / dλ = 0, e.g., sound in air or light in vacuum), v_g = v_p.',
      ],
      table: {
        caption: 'Table 3.3 — Distinction Between Progressive Waves and Stationary (Standing) Waves (PUST 2020 Q3b)',
        headers: ['Feature', 'Progressive (Traveling) Wave', 'Stationary (Standing) Wave'],
        rows: [
          [
            'Wave Propagation & Energy',
            'Disturbance travels forward with velocity v and transports energy continuously',
            'Waveform remains confined between nodes; zero net transport of energy across nodes',
          ],
          [
            'Amplitude of Particles',
            'Every particle vibrates with the exact same maximum amplitude (a)',
            'Amplitude varies with position from 0 at Nodes to 2a at Antinodes (A(x) = 2a|cos kx|)',
          ],
          [
            'Phase of Particle Vibration',
            'Phase (ωt − kx) varies continuously from particle to particle along the wave',
            'All particles within a single loop (between two nodes) vibrate in the exact same phase',
          ],
          [
            'Nodes and Antinodes',
            'No particle is permanently at rest',
            'Particles at nodes (spaced by λ/2) are permanently at rest at all instants',
          ],
          [
            'Mathematical Equation',
            'y(x, t) = a sin(ωt − kx)',
            'y(x, t) = 2a cos(kx) sin(ωt)',
          ],
        ],
      },
      equations: [
        {
          label: 'Progressive Wave Equation & Wave Intensity',
          formula: 'y(x, t) = a sin(ωt − kx),   ∂²y / ∂x² = (1 / v²) · (∂²y / ∂t²)\nI = P / A = (1 / 2) ρ v ω² a² = 2π² ρ v n² a²',
          units: 'm and W·m⁻²',
          note: 'Wave intensity I is directly proportional to the square of amplitude (I ∝ a²)',
        },
        {
          label: 'Phase Velocity & Group Velocity (Rayleigh’s Relation)',
          formula: 'v_p = ω / k = n λ\nv_g = dω / dk = v_p + k (dv_p / dk) = v_p − λ (dv_p / dλ)',
          units: 'm·s⁻¹',
          note: 'For non-dispersive medium (dv_p/dλ = 0): v_g = v_p',
        },
      ],
      examYears: ['2021', '2020'],
      marks: '2 + 3 Marks',
    },
    {
      id: 'phy-m3-b6',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation: 'PUST EECE 2025 Q3(c), 2023 Q3(c), 2022 Q3(c)',
      title: 'Solved SHM and Wave Interference Numericals',
      summaryText:
        'Step-by-step solutions to PUST EECE numericals: (i) intensity ratio I_max/I_min for amplitudes 5 and 3 (2025 Q3c), (ii) y = 3.5 sin(6.28t) cm at t = 4 s (2023 Q3c), and (iii) SHM time period from amplitude and max velocity (2022 Q3c).',
      examYears: ['2025', '2023', '2022'],
      marks: '3 Marks',
      problemStatement:
        '(a) [PUST 2025 Q3c]: Two light/wave sources with amplitudes 5 units and 3 units respectively interfere with each other. Calculate the ratio of maximum and minimum intensities.\n(b) [PUST 2023 Q3c]: The motion of a particle is given by y = 3.5 sin(6.28 t) cm. Calculate the displacement at 4 seconds, velocity, and acceleration of the particle.\n(c) [PUST 2022 Q3c]: The amplitude of a simple harmonic oscillation’s particle is 30 m and the maximum velocity is 6.24 m·s⁻¹. Calculate the time period of the particle.',
      givenData: [
        'Part (a): Amplitudes a₁ = 5 units, a₂ = 3 units; Intensity I ∝ A²',
        'Part (b): y = 3.5 sin(6.28 t) cm ⇒ a = 3.5 cm, ω = 6.28 rad·s⁻¹ ≈ 2π rad·s⁻¹, t = 4 s',
        'Part (c): Amplitude a = 30 m (or 30 cm = 0.30 m), v_max = 6.24 m·s⁻¹',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Part (a) [PUST 2025 Q3c — Ratio of Maximum to Minimum Intensities]',
          explanation:
            'At constructive interference, resultant amplitude is A_max = a₁ + a₂ = 5 + 3 = 8 units; at destructive interference, A_min = |a₁ − a₂| = 5 − 3 = 2 units. Since intensity I ∝ A²:',
          equation:
            'I_max / I_min = (a₁ + a₂)² / (a₁ − a₂)²\nI_max / I_min = (5 + 3)² / (5 − 3)² = 8² / 2² = 64 / 4 = 16 : 1',
        },
        {
          stepTitle: 'Step 2: Solve Part (b) [PUST 2023 Q3c — Displacement, Velocity & Acceleration at t = 4 s]',
          explanation:
            'Compare y = 3.5 sin(6.28 t) cm with y = a sin(ωt): a = 3.5 cm and ω = 6.28 rad·s⁻¹ (≈ 2π rad·s⁻¹). At t = 4 s, phase angle ωt = 6.28 × 4 = 25.12 rad (≈ 8π rad):',
          equation:
            '1. Displacement at t = 4 s:\ny = 3.5 sin(25.12 rad) = −0.0446 cm   (or y = 3.5 sin(8π) = 0 cm at mean position)\n2. Velocity at t = 4 s:\nv = dy / dt = a ω cos(ωt) = 3.5 × 6.28 × cos(25.12 rad) = 21.98 cm·s⁻¹\n3. Acceleration at t = 4 s:\nacc = −ω² y = −(6.28)² × (−0.0446) = +1.76 cm·s⁻²   (or 0 cm·s⁻² if 6.28 = 2π)',
        },
        {
          stepTitle: 'Step 3: Solve Part (c) [PUST 2022 Q3c — Time Period from Maximum Velocity]',
          explanation:
            'Use v_max = a ω = a (2π / T) ⇒ T = (2π a) / v_max:',
          equation:
            'ω = v_max / a = 6.24 / 30 = 0.208 rad·s⁻¹\nT = 2π / ω = (2 × 3.1416) / 0.208 = 30.21 s\n(Note: If amplitude was 30 cm = 0.30 m, then T = (2π × 0.30) / 6.24 = 0.3021 s)',
        },
      ],
      finalAnswer:
        '(a) I_max : I_min = 16 : 1; (b) y ≈ 0 cm (−0.045 cm), v = 21.98 cm/s, acc ≈ 0 cm/s² (+1.76 cm/s²); (c) T = 30.21 s',
    },
  ],
};

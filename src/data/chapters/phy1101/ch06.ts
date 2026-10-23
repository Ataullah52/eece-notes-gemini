import type { ChapterNote } from '../../types';

export const PHY1101_CH06: ChapterNote = {
  id: 'phy1101-ch06',
  unitNumber: 'Module 06',
  title: 'Sound and Acoustics',
  summary:
    'Principle of superposition, Beats, Doppler’s effect (four cases, general equation, and wind effect), Reverberation, Sabine’s reverberation formula derivation, Compound absorption, Noise insulation and reduction, Sound distribution, Room acoustics, and Recording.',
  estimatedMinutes: 95,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m6-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Sound Note §5.2 & §5.4 · PUST EECE 2024 Q7(b) · N. Subrahmanyam & Brij Lal (A Textbook of Sound)',
      title: 'Principle of Superposition and Analytical Treatment of Beats',
      summaryText:
        'Linear superposition of acoustic waves, analytical derivation of resultant beat amplitude R = 2a cos[π(n₁ − n₂)t], and proof that beat frequency equals N = |n₁ − n₂|.',
      memorizeStatements: [
        'Principle of Superposition of Waves: When two or more progressive sound waves traverse the same region of a linear elastic medium simultaneously, the resultant displacement of any medium particle at any instant equals the vector sum of the individual displacements: y = y₁ + y₂ + ··· + y_n.',
        'Beats: The periodic waxing (maxima) and waning (minima) of sound intensity heard when two coherent sound waves of equal (or nearly equal) amplitude and slightly different frequencies (n₁ and n₂) travel along the same direction and superpose.',
        'Beat Frequency Formula: The number of beats (loud maxima or silent minima) heard per second is strictly equal to the absolute difference in frequencies of the two sounding bodies: N = |n₁ − n₂|.',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Equations of Two Collinear Sound Waves of Slightly Different Frequencies (PUST 2024 Q7b)',
          explanation:
            'Consider two progressive sound waves of equal amplitude a and slightly different frequencies n₁ and n₂ (with n₁ > n₂) arriving at an observer’s ear (x = 0):',
          equation: 'y₁ = a sin(2π n₁ t),   y₂ = a sin(2π n₂ t)',
        },
        {
          stepTitle: 'Step 2: Applying Superposition and Trigonometric Sum-to-Product Identity',
          explanation:
            'By the principle of superposition, the resultant displacement is y = y₁ + y₂ = a[sin(2πn₁t) + sin(2πn₂t)]. Applying sin C + sin D = 2 cos((C − D)/2) sin((C + D)/2):',
          equation:
            'y = 2a cos[π(n₁ − n₂)t] sin[2π ((n₁ + n₂) / 2) t] = R(t) sin(2π n_avg t)',
        },
        {
          stepTitle: 'Step 3: Condition for Waxing (Intensity Maxima) and Beat Period',
          explanation:
            'The resultant wave has average frequency n_avg = (n₁ + n₂)/2 and time-varying amplitude R(t) = 2a cos[π(n₁ − n₂)t]. Intensity I ∝ R² is maximum (4a²) whenever cos[π(n₁ − n₂)t] = ±1:',
          equation:
            'π(n₁ − n₂)t = mπ  ⇒  t_max = m / (n₁ − n₂)   (m = 0, 1, 2, 3, …)',
        },
        {
          stepTitle: 'Step 4: Condition for Waning (Intensity Minima) and Beat Frequency N = n₁ − n₂',
          explanation:
            'Intensity is zero (minimum) whenever cos[π(n₁ − n₂)t] = 0 ⇒ π(n₁ − n₂)t = (2m + 1)π/2 ⇒ t_min = (2m + 1)/[2(n₁ − n₂)]. The time interval between two successive maxima (or two successive minima) is Δt = 1/(n₁ − n₂), so the beat frequency (number of beats per second) is:',
          equation: 'N = 1 / Δt = n₁ − n₂',
        },
      ],
      bulletPoints: [
        'Condition for Audibility of Beats: Owing to the persistence of human hearing (~0.1 s), distinct beats are audible only if the beat frequency N = |n₁ − n₂| ≤ 10 Hz.',
        'Practical Applications of Beats: (1) Determining unknown frequency of a tuning fork (by loading with wax or filing prongs); (2) Tuning musical instruments to unison (zero beats); (3) Detecting poisonous marsh gas (CH₄) in mines using two identical organ pipes; (4) Heterodyne radio/acoustic reception.',
      ],
      examYears: ['2024'],
    },
    {
      id: 'phy-m6-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sound Sheet pp. 14–19 (§8.2–§8.4) · PUST EECE 2025 Q7(a), 2024 Q7(a), 2022 Q7(a), 2020 Q7(a,b) · Subrahmanyam & Brij Lal Ch. 8',
      title: 'Doppler Effect in Sound: Four Cases and General Formula',
      summaryText:
        'Apparent change in frequency due to relative motion of source and observer, step-by-step derivations of all 4 basic cases using Professor’s notation (v, a, b), general combined formula, wind effect, and sound vs. light asymmetry.',
      memorizeStatements: [
        'Doppler’s Effect: Whenever there is a relative motion between a source of sound and an observer (listener), the apparent frequency n′ heard by the observer differs from the actual frequency n emitted by the source.',
        'Doppler Formula for Moving Source (Observer at Rest): When a source moves with velocity a toward or away from a stationary observer in a medium where sound speed is v, the apparent wavelength is λ′ = (v ∓ a)/n and apparent frequency is n′ = [v / (v ∓ a)] n.',
        'Doppler Formula for Moving Observer (Source at Rest): When an observer moves with velocity b toward or away from a stationary source, the wavelength λ = v/n remains unchanged but the relative wave speed becomes v ± b, so n′ = [(v ± b) / v] n.',
        'General Combined Doppler Formula (With Wind Velocity w): If wind blows with velocity w along the direction of sound propagation (from source S to observer O), the effective speed of sound becomes v ± w and n′ = [(v ± w ± b) / (v ± w ∓ a)] n.',
      ],
      solutionSteps: [
        {
          stepTitle: 'Case I & II: Source Moving (Velocity a), Observer Stationary (Professor’s Sheet §8.2 — PUST 2024 Q7a, 2022 Q7a, 2020 Q7b)',
          explanation:
            'Let a source S emit n waves per second in still air where sound speed is v. If S is at rest, the n waves occupy distance v, so wavelength λ = v/n. When S moves with velocity a toward the stationary observer O, in 1 second the source advances to S′ by distance a while the first wave reaches distance v. Thus n waves are compressed into distance (v − a):',
          equation:
            'λ′ = (v − a) / n  ⇒  n′ = v / λ′ = [v / (v − a)] n   (Source approaching, n′ > n)',
        },
        {
          stepTitle: 'Source Receding from Stationary Observer',
          explanation:
            'If the source moves away from the stationary observer with velocity a, the n waves emitted in 1 second are stretched over distance (v + a), so λ″ = (v + a)/n and the apparent frequency decreases:',
          equation:
            'λ″ = (v + a) / n  ⇒  n″ = v / λ″ = [v / (v + a)] n   (Source receding, n″ < n)',
        },
        {
          stepTitle: 'Case III & IV: Observer Moving (Velocity b), Source Stationary (Professor’s Sheet §8.2)',
          explanation:
            'When the source S is stationary, the wavelength in air remains unchanged at λ = v/n. If the observer O moves toward S with velocity b, the observer receives in 1 second all waves in distance v plus the additional waves in distance b, so the relative velocity of sound with respect to O is (v + b). If O moves away from S with velocity b, the relative velocity is (v − b):',
          equation:
            'n′ = (v + b) / λ = [(v + b) / v] n   (Observer approaching),   n″ = [(v − b) / v] n   (Observer receding)',
        },
        {
          stepTitle: 'General Case: Both Source and Observer in Motion (Professor’s Sheet §8.3 — PUST 2024 Q7a, 2020 Q7b)',
          explanation:
            'Combining both effects: the moving source alters the wavelength in the medium to λ′ = (v ∓ a)/n, while the moving observer alters the relative speed of reception to v_rel = v ± b. Hence the general apparent frequency n′ = v_rel / λ′ is:',
          equation:
            'n′ = [(v + b) / (v − a)] n   (Both moving toward each other),   n′ = [(v − b) / (v + a)] n   (Both moving away from each other)',
        },
        {
          stepTitle: 'When Both Move in the Same Direction (Source Leading vs. Observer Leading)',
          explanation:
            'If both S and O move in the direction of sound (S approaching O with speed a, O receding from S with speed b), λ′ = (v − a)/n and v_rel = v − b:',
          equation:
            'n′ = [(v − b) / (v − a)] n   (S chasing O),   n′ = [(v + b) / (v + a)] n   (O chasing S)',
        },
        {
          stepTitle: 'Effect of Motion of Medium (Wind Velocity w — Professor’s Sheet §8.4)',
          explanation:
            'If wind blows with velocity w in the direction of sound propagation (from S to O), the effective velocity of sound in space becomes (v + w); if wind blows opposite to sound, it becomes (v − w):',
          equation:
            'n′ = [(v ± w − b) / (v ± w − a)] n   (when S and O move along the direction of sound)',
        },
      ],
      table: {
        caption: 'Asymmetry of Doppler Effect in Sound vs. Symmetry in Light',
        headers: ['Feature', 'Doppler Effect in Sound', 'Doppler Effect in Light'],
        rows: [
          [
            'Medium Requirement',
            'Requires a material medium (air/water); velocities a and b are measured relative to the medium.',
            'Requires no material medium; depends only on relative velocity u between source and observer.',
          ],
          [
            'Symmetry of Motion',
            'Asymmetric: Source approaching at speed u gives n′ = [v/(v−u)]n, whereas observer approaching at speed u gives n′ = [(v+u)/v]n.',
            'Strictly Symmetric: Relativistic formula ν′ = ν √[(1 + β)/(1 − β)] is identical whether source or observer moves.',
          ],
          [
            'Physical Mechanism',
            'Moving source physically changes wavelength λ′; moving observer changes relative wave speed.',
            'Governed by Lorentz invariance and relativistic time dilation.',
          ],
        ],
      },
      examYears: ['2025', '2024', '2022', '2020'],
    },
    {
      id: 'phy-m6-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sound Sheet pp. 27–28 (§10.7–§10.8) · Sound Note Block 4 · PUST EECE 2025 Q7(a,b), 2023 Q7(a,b), 2021 Q7(a,b,c)',
      title: 'Acoustics, Reverberation, Sabine’s Formula Derivation, and Compound Absorption',
      summaryText:
        'Definition and branches of acoustics, reverberation time (60 dB drop), Professor’s 7-step analytical derivation of Sabine’s formula t₁ = 0.158 V / Σ(Aα), compound absorption, and absorption coefficient measurement.',
      memorizeStatements: [
        'Acoustics: The branch of physics that deals with the generation, propagation, reception, absorption, control, and physical/auditory effects of mechanical sound waves in gases, liquids, and solids.',
        'Reverberation: The persistence or prolongation of sound in an enclosed hall or auditorium after the original source of sound has stopped emitting, caused by multiple successive reflections from walls, ceiling, floor, and objects.',
        'Reverberation Time (T or t₁): The time required for the sound energy density (or intensity level) in an enclosure to decay to one-millionth (10⁻⁶) of its steady-state value—equivalent to a drop of 60 dB—after the source is switched off.',
        'Absorption Coefficient of a Surface (α): The ratio of the sound energy absorbed by a surface to the total sound energy incident upon it; one open window unit (1 O.W.U. or 1 sabin) represents 1 m² (or 1 ft²) of a perfectly absorbing open window with α = 1.',
        'Sabine’s Reverberation Time Formula: T = (0.158 V) / (Σ Aα) (or T = 0.161 V / Σ Aα in SI units, where V is hall volume in m³ and Σ Aα = α₁A₁ + α₂A₂ + ··· is the total compound absorption in m²·sabin).',
      ],
      bulletPoints: [
        'Major Branches & Importance of Acoustics (PUST 2025 Q7a, 2021 Q7a):',
        '• (1) Architectural Acoustics (design of concert halls, lecture theaters, and studios for optimal reverberation and speech intelligibility); (2) Electroacoustics (microphones, loudspeakers, sonar transducers, and recording systems); (3) Musical Acoustics; (4) Ultrasonics & Medical Acoustics (NDT flaw detection, sonar, echocardiography); (5) Environmental Noise Control.',
        'Compound Absorption (Total Equivalent Absorption a = Σ Aα):',
        '• In a real hall composed of surfaces A₁, A₂, A₃, … having respective absorption coefficients α₁, α₂, α₃, …, the total absorption is the compound sum a = Σ Aα = α₁A₁ + α₂A₂ + α₃A₃ + ··· (measured in O.W.U. or metric sabin).',
        'Factors Affecting Reverberation Time of a Hall (PUST 2021 Q7b):',
        '• (1) Volume V of the hall (T ∝ V); (2) Total surface area A and absorption coefficients αᵢ of walls, carpets, curtains, and ceiling tiles (T ∝ 1 / Σ Aα); (3) Size of the audience (each seated listener adds ~0.46 sabin of absorption, reducing T); (4) Frequency of sound (high-frequency waves are absorbed more strongly by porous materials and air); (5) Velocity of sound v (affected by room temperature and humidity).',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Rate of Sound Energy Incident on Walls (Professor’s Sheet §10.7 — PUST 2023 Q7b, 2021 Q7b)',
          explanation:
            'Let V be the volume of an enclosure, A the total surface area of its walls, α the average absorption coefficient, σ the uniform sound energy density (energy per unit volume), and v the velocity of sound. From solid-angle integration over a hemisphere, the rate at which diffuse sound energy strikes unit area of the wall is (1/4)σv:',
          equation:
            'Energy incident per second on area A = (1 / 4) A σ v,   Rate of absorption = (1 / 4) A α σ v = p σ   (where p = A α v / 4)',
        },
        {
          stepTitle: 'Step 2: Differential Equation of Growth of Sound Energy Density σ(t)',
          explanation:
            'If a source emits sound energy at a constant rate Q per second, the rate of increase of total sound energy V(dσ/dt) inside the hall equals the emission rate Q minus the wall absorption rate pσ:',
          equation:
            'V (dσ / dt) = Q − p σ  ⇒  dσ / dt + (p / V) σ = Q / V  ⇒  dσ / dt + μ σ = Q / V   (where μ = p / V = A α v / (4V))',
        },
        {
          stepTitle: 'Step 3: Growth Solution & Maximum Steady-State Energy Density σ_max',
          explanation:
            'Multiplying by the integrating factor e^{μt} gives d/dt(σ e^{μt}) = (Q/V)e^{μt}. Integrating with initial condition σ = 0 at t = 0 yields the growth equation and steady-state maximum (as t → ∞):',
          equation:
            'σ(t) = (Q / (μ V))(1 − e^{−μt}) = [4Q / (A α v)] (1 − e^{−(A α v / 4V)t}),   σ_max = 4Q / (A α v)',
        },
        {
          stepTitle: 'Step 4: Decay of Sound Energy Density After Source is Cut Off (Q = 0)',
          explanation:
            'Once the sound reaches steady-state density σ_max and the source is switched off (Q = 0 at t = 0), the differential equation becomes dσ/dt + μσ = 0:',
          equation:
            'd/dt (σ e^{μt}) = 0  ⇒  σ(t) = σ_max e^{−μt} = σ_max e^{−(A α v / 4V)t}',
        },
        {
          stepTitle: 'Step 5: Applying Standard Reverberation Criterion (σ / σ_max = 10⁻⁶, or 60 dB Drop)',
          explanation:
            'By definition, at t = t₁ (reverberation time), the energy density falls to one-millionth of its maximum value: σ / σ_max = 10⁻⁶ = e^{−μ t₁}:',
          equation:
            'e^{μ t₁} = 10⁶  ⇒  (A α v / (4V)) t₁ = ln(10⁶) = 6 × 2.3026 = 13.8155',
        },
        {
          stepTitle: 'Step 6: Substituting Speed of Sound v = 350 m/s (Professor’s Sheet Value)',
          explanation:
            'Following Professor’s Sheet §10.7 (which takes v = 350 m·s⁻¹ at room temperature), we substitute v = 350 m·s⁻¹ and replace Aα by the compound absorption Σ Aα:',
          equation:
            't₁ = (4 × 2.3026 × 6 × V) / (350 × A α) = (0.158 V) / (A α) = (0.158 V) / (Σ A α)   (Note: at v = 343 m/s, constant is 0.161)',
        },
        {
          stepTitle: 'Step 7: Experimental Determination of Absorption Coefficient α₂ (Professor’s Sheet §10.8 — PUST 2021 Q7c)',
          explanation:
            'First measure reverberation time t₁ of the empty room: 1/t₁ = (Σ Aα)/(0.158 V). Next bring in test material of area A₂ and unknown absorption coefficient α₂ and measure the new shorter reverberation time t₂: 1/t₂ = (Σ Aα + α₂A₂)/(0.158 V). Subtracting the two equations eliminates the room’s unknown base absorption:',
          equation:
            '(1 / t₂) − (1 / t₁) = (α₂ A₂) / (0.158 V)  ⇒  α₂ = [0.158 V / A₂] ((1 / t₂) − (1 / t₁))',
        },
      ],
      examYears: ['2025', '2023', '2021'],
    },
    {
      id: 'phy-m6-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Sound Note §5.6–§5.8 · PUST EECE 2025 Q7(b), 2023 Q7(a), 2021 Q7(b) · Subrahmanyam & Brij Lal Ch. 10',
      title: 'Noise Insulation vs. Reduction, Room Acoustics, and Sound Recording',
      summaryText:
        'Distinction between sound insulation (blocking transmission) and noise absorption (reducing interior reverberation), six requisites of good room acoustics, and magnetic/optical/digital sound recording.',
      memorizeStatements: [
        'Sound Insulation (Transmission Loss): The prevention of airborne or structure-borne sound from entering or leaving a room through walls, floors, and partitions using heavy, non-porous, double-walled, or floating-floor barriers: TL = 10 log₁₀(I_incident / I_transmitted) dB.',
        'Sound Absorption (Noise Reduction): The dissipation of acoustic energy into heat within a room using porous, fibrous materials (acoustic tiles, glass wool, heavy drapes, carpets) to reduce interior reflections and reverberation time.',
        'Optimum Reverberation Time: An acoustically well-designed hall requires T ≈ 0.5 to 1.0 s for clear speech intelligibility, and T ≈ 1.0 to 2.0 s for orchestral music.',
      ],
      table: {
        caption: 'Sound Insulation vs. Sound Absorption (Noise Reduction) — PUST 2023 Q7a',
        headers: ['Parameter', 'Sound Insulation (Blocking)', 'Sound Absorption (Reduction)'],
        rows: [
          [
            'Primary Purpose',
            'Blocks external noise from penetrating into a room through walls, doors, and floors.',
            'Reduces internal reflections, echoes, and reverberation time inside the room.',
          ],
          [
            'Physical Mechanism',
            'Reflects and isolates mechanical vibrations via high mass per unit area and air-gap decoupling.',
            'Converts acoustic wave kinetic energy into viscous heat inside interconnected open pores.',
          ],
          [
            'Material Properties',
            'Dense, rigid, non-porous barriers (double brick walls, lead-lined doors, double-glazed glass).',
            'Soft, porous, fibrous materials (perforated acoustic tiles, mineral wool, heavy curtains, carpets).',
          ],
          [
            'Performance Metric',
            'Sound Reduction Index (SRI) or Transmission Loss TL (in dB).',
            'Absorption Coefficient α (0 to 1) and Sabin units (m²·sabin).',
          ],
        ],
      },
      bulletPoints: [
        'Six Requisites of Good Auditorium / Room Acoustics & Remedies (PUST 2025 Q7b, 2021 Q7b):',
        '1. Adequate Loudness Everywhere: Achieved via parabolic sounding boards behind the speaker, splayed ceiling reflectors, and distributed loudspeaker arrays.',
        '2. Optimum Reverberation Time: Controlled by installing calculated areas of acoustic felt, perforated panels, upholstered seats (which maintain constant absorption whether occupied or empty), and heavy draperies.',
        '3. Uniform Sound Distribution (No Dead Spots or Acoustic Foci): Avoid concave domes or curved rear walls that focus sound; use diffused/convex wall profiles.',
        '4. Absence of Distinct Echoes: Reflected paths exceeding 17 m (time delay > 0.1 s) cause echoes; eliminated by treating distant rear walls and high ceilings with high-α absorbers.',
        '5. Absence of Echelon Effect: Regular spacing of stair steps or wall slats reflects a single pulse into a musical note; prevented by carpeting steps or making spacing irregular.',
        '6. Exclusion of External Noise (Sound Insulation): Achieved using double walls with air cavities, floating floors on rubber pads, and acoustic baffling in HVAC ducts.',
        'Sound Recording & Reproduction Systems (Syllabus Topic):',
        '• Magnetic Tape Recording: Microphone converts sound into audio current → recording head’s air-gap magnetic field magnetizes iron-oxide (Fe₂O₃ / CrO₂) domains on moving tape → playback head induces EMF by Faraday’s law (e = −N dΦ/dt).',
        '• Optical Film Recording (Variable-Area & Variable-Density): Audio current modulates a light valve or mirror galvanometer to expose a photographic sound track alongside motion-picture frames; reproduced via an exciter lamp and photoelectric cell.',
        '• Digital PCM (Pulse Code Modulation) Recording: Analog audio is low-pass filtered, sampled at ≥ 44.1 kHz (Nyquist criterion f_s ≥ 2f_max), quantized (16-bit or 24-bit ADC), and stored optically (CD/DVD pits) or in solid-state memory.',
      ],
      examYears: ['2025', '2023', '2021'],
    },
    {
      id: 'phy-m6-b5',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sound Sheet pp. 20–26 (Ex. 8.1–8.13) & p. 28 (Ex. 10.5) · PUST EECE 2025 Q7(c), 2024 Q7(c), 2023 Q7(c), 2022 Q7(c)',
      title: 'Solved Doppler Effect and Sabine Reverberation Numericals',
      summaryText:
        'Complete step-by-step solutions to all PUST past exam numericals (2022–2025) and the Professor’s Sound Sheet worked examples (Ex. 8.1–8.13 and Ex. 10.5).',
      problemStatement:
        '(a) [PUST 2025 Q7c & Sheet Ex. 10.5] A hall of volume 85,000 m³ has a reverberation time of 1.5 s. If the area of the sound-absorbing surface is 16,500 m², calculate the average absorption coefficient of the surface. (b) [PUST 2023 Q7c] A classroom has dimensions 20 m × 15 m × 5 m and reverberation time 3.5 s. Calculate the total absorption of its surfaces and the average absorption coefficient. (c) [PUST 2024 Q7c & Sheet Ex. 8.2] Two engines pass each other in opposite directions with a relative velocity of 60 miles/hour (88 ft/s). One of them is whistling at frequency 540 Hz. Calculate the frequencies heard by a listener in the other engine before and after they pass each other (Speed of sound = 1120 ft/s, engines have equal speeds). (d) [PUST 2022 Q7c] A siren emitting a sound of frequency 1000 Hz moves away from you toward a cliff at 10 m/s. What is the frequency of the sound you hear coming directly from the siren, and the frequency you hear reflected from the cliff? (Speed of sound in air = 330 m/s).',
      solutionSteps: [
        {
          stepTitle: 'Part (a): Hall of Volume 85,000 m³ and T = 1.5 s (PUST 2025 Q7c & Professor’s Sheet Ex. 10.5)',
          explanation:
            'Given V = 85,000 m³, t₁ = 1.5 s, and A = 16,500 m². Using the Professor’s Sheet formula t₁ = (0.158 V)/(A α):',
          equation:
            'α = (0.158 × V) / (A × t₁) = (0.158 × 85,000) / (16,500 × 1.5) = 13,430 / 24,750 = 0.5426 O.W.U. (or 0.553 using 0.161)',
        },
        {
          stepTitle: 'Part (b): Classroom 20 m × 15 m × 5 m with T = 3.5 s (PUST 2023 Q7c)',
          explanation:
            'Volume V = 20 × 15 × 5 = 1500 m³. Total surface area A = 2(lw + lh + wh) = 2(300 + 100 + 75) = 950 m². Using Sabine’s formula Σ Aα = 0.158 V / T (and 0.161 V / T):',
          equation:
            'Σ Aα = (0.158 × 1500) / 3.5 = 67.71 m²·sabin (or 69.0 sabin),   α_avg = (Σ Aα) / A = 67.71 / 950 = 0.0713 (or 0.0726)',
        },
        {
          stepTitle: 'Part (c): Two Engines Passing Each Other (PUST 2024 Q7c & Professor’s Sheet Ex. 8.2)',
          explanation:
            'Relative velocity = 60 miles/hr = 88 ft/s ⇒ each engine moves at a = b = 44 ft/s. Speed of sound v = 1120 ft/s, source frequency n = 540 Hz. Before passing (approaching each other) and after passing (receding from each other):',
          equation:
            'n_before = [(v + b) / (v − a)] n = [(1120 + 44) / (1120 − 44)] × 540 = (1164 / 1076) × 540 = 584.16 Hz;   n_after = [(v − b) / (v + a)] n = (1076 / 1164) × 540 = 499.18 Hz',
        },
        {
          stepTitle: 'Part (d): Siren Moving at 10 m/s Away From Observer Toward Cliff (PUST 2022 Q7c)',
          explanation:
            'Given n = 1000 Hz, v = 330 m/s, siren speed a = 10 m/s, observer stationary (b = 0). (i) For direct sound, the siren recedes from the observer (a = 10 m/s away). (ii) For cliff-reflected sound, the siren approaches the cliff (which acts as a stationary mirror image source approaching at a = 10 m/s):',
          equation:
            'n_direct = [v / (v + a)] n = [330 / (330 + 10)] × 1000 = 970.59 Hz;   n_reflected = [v / (v − a)] n = [330 / (330 − 10)] × 1000 = 1031.25 Hz',
        },
      ],
      bulletPoints: [
        'Additional Professor’s Sound Sheet Worked Examples (Ex. 8.1 & Ex. 8.3–8.13 Summary for Fast Revision):',
        '• Ex. 8.1: Pitch of whistle falls in ratio 9 : 8 as engine passes stationary listener (v = 1100 ft/s): [(v + a)/(v − a)] = 9/8 ⇒ 8v + 8a = 9v − 9a ⇒ a = v/17 = 1100/17 = 64.7 ft/s.',
        '• Ex. 8.3: Car horn (n = 400 Hz) moving at 20 m/s toward cliff (v = 330 m/s): wavelength in front λ′ = (330 − 20)/400 = 0.775 m; driver hears reflected frequency n′ = [(v + a)/(v − a)]n = (350/310) × 400 = 451.6 Hz; beats heard by driver = 451.6 − 400 = 51.6 Hz.',
        '• Ex. 8.5: Source approaching vs. receding at 50 m/s (v = 350 m/s): ratio n′/n″ = (v + a)/(v − a) = (350 + 50)/(350 − 50) = 400/300 = 4/3.',
        '• Ex. 8.8: Spectral line λ = 6000 Å from receding star shifted to 6001 Å (Δλ = +1 Å): star recession velocity v_s = c(Δλ/λ) = 3 × 10⁸ × (1 / 6000) = 5 × 10⁴ m/s = 50 km/s.',
        '• Ex. 8.13: Observer between two identical sirens (216 Hz) moving along the line at u (v = 330 m/s) hears 4 beats/s: n₁ − n₂ = [(v + b)/v − (v − b)/v]n = (2b/v)n = 4 ⇒ b = (4 × 330)/(2 × 216) = 3.055 m/s.',
      ],
      examYears: ['2025', '2024', '2023', '2022'],
    },
  ],
};

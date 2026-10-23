import type { ChapterNote } from '../../types';

export const PHY1101_CH02: ChapterNote = {
  id: 'phy1101-ch02',
  unitNumber: 'Module 02',
  title: 'Magnetic Field and Electromagnetic Induction',
  summary:
    'Magnetic induction, Magnetic force on a current, Torque on a current loop, Ampere’s law, Biot-Savart law and its applications, Faraday’s laws of electromagnetic induction, Lenz’s law, Induced current and voltage, Self-inductance and mutual inductance, Inductor.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m2-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Magnetic Field, p. 1) · PUST EECE 2024 Q2(c), 2022 Q2(b), 2021 Q2(b), 2020 Q2(a) · Halliday & Resnick',
      title: 'Magnetic Force on Current and Torque on Current Loop',
      summaryText:
        'Magnetic induction B, Lorentz force on a moving charge and current-carrying conductor F = ILB sin θ, and complete derivation of torque on a rectangular current loop τ = NIAB sin θ.',
      memorizeStatements: [
        'Magnetic Induction / Flux Density (B): The magnetic force experienced per unit charge moving with unit velocity perpendicular to the magnetic field direction: B = F_max / (q v) = F_max / (I L) (in Tesla, T = Wb·m⁻² = N·A⁻¹·m⁻¹).',
        'Magnetic Force on a Straight Current-Carrying Conductor: F = I (L × B), with magnitude F = I L B sin θ, where θ is the angle between the wire length vector L and magnetic field B.',
        'Torque on a Current-Carrying Coil in a Uniform Magnetic Field: τ = μ × B, with magnitude τ = N I A B sin θ (where θ is the angle between the normal to the coil plane and B) or τ = N I A B cos α (where α = 90° − θ is the angle between the coil plane and B).',
        'Magnetic Dipole Moment (μ): The product of the number of turns N, current I, and loop area A of a current loop: μ = N I A (in A·m² or J·T⁻¹).',
      ],
      bulletPoints: [
        'Derivation of Magnetic Force on a Current-Carrying Conductor from Lorentz Force:',
        '1. A single conduction electron moving with drift velocity v_d in a magnetic field B experiences Lorentz force f = −e(v_d × B).',
        '2. In a wire segment of length L and cross-section A containing N_e = n A L free electrons, the total magnetic force is:\nF = N_e f = (n A L e)(v_d × B) = (n A e v_d)(L × B) = I (L × B)   ⇒   F = I L B sin θ.',
        'Complete Derivation of Torque Acting on a Current Loop in a Uniform Magnetic Field (PUST 2022 Q2b, 2021 Q2b, 2020 Q2a):',
        '1. Consider a rectangular loop PQRS of length a (sides PQ and RS) and breadth b (sides QR and SP), area A = a b, carrying steady current I in a uniform magnetic field B.',
        '2. Let the normal unit vector n̂ perpendicular to the plane of the loop make an angle θ with the magnetic field B (so the plane of the loop makes angle α = 90° − θ with B).',
        '3. Forces on the Two Horizontal Sides (QR and SP of length b): These sides make angle (90° − θ) with B. Their magnetic forces F₂ = F₄ = I b B sin(90° − θ) = I b B cos θ are equal in magnitude, opposite in direction, and act along the same vertical axis of symmetry, so they cancel out and produce zero net force and zero torque.',
        '4. Forces on the Two Vertical Sides (PQ and RS of length a): These sides are always perpendicular to B (90°). Thus, side PQ experiences force F₁ = I a B perpendicular to the page outward, and side RS experiences an equal and opposite force F₃ = I a B inward.',
        '5. Although the net translational force on the loop is zero (F₁ + F₂ + F₃ + F₄ = 0), the two parallel opposite forces F₁ and F₃ do not act along the same line—they form a mechanical couple separated by perpendicular lever arm d_⊥ = b sin θ.',
        '6. Therefore, the magnitude of the torque τ = (Force) × (Perpendicular distance between lines of action) is:\nτ = (I a B) × (b sin θ) = I (a b) B sin θ = I A B sin θ.',
        '7. For a closely wound flat coil of N turns:\nτ = N I A B sin θ = N I A B cos α\nand in vector form: τ = μ × B, where μ = N I A n̂ (basis of the moving-coil galvanometer and DC electric motor).',
      ],
      equations: [
        {
          label: 'Magnetic Force on Charge & Current Element',
          formula: 'F_q = q (v × B) = q v B sin θ\nF_wire = I (L × B) = I L B sin θ',
          units: 'N',
          note: 'Direction given by the right-hand palm rule or Fleming’s left-hand rule',
        },
        {
          label: 'Torque on an N-Turn Current Loop',
          formula: 'τ = N I A B sin θ = N I A B cos α\nτ = μ × B   (where μ = N I A)',
          units: 'N·m',
          note: 'θ = angle between loop normal and B; α = angle between loop plane and B',
        },
      ],
      examYears: ['2024', '2022', '2021', '2020'],
      marks: '5–6.67 Marks',
      professorTip:
        'Torque on a current loop was asked in 2020 Q2(a), 2021 Q2(b), and 2022 Q2(b) for 5–6⅔ marks. Always state clearly whether your angle is measured from the normal to the coil (sin θ) or from the plane of the coil (cos α).',
    },
    {
      id: 'phy-m2-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Magnetic Field, pp. 2–5) · PUST EECE 2024 Q2(b), 2023 Q2(a), 2021 Q2(a) · Halliday & Resnick',
      title: 'Biot–Savart Law and Ampère’s Circuital Law with Applications',
      summaryText:
        'Statement and vector form of Biot–Savart Law (dB = (μ₀/4π)(I dl sin θ)/r²), magnetic field of a moving charge and straight wire, and Ampère’s Circuital Law (∮ B · dl = μ₀I_enc) with proof and applications.',
      memorizeStatements: [
        'Biot–Savart Law: The magnitude of the elementary magnetic flux density (dB) at a point P due to a small current element I dl is directly proportional to the current I, the element length dl, and the sine of the angle θ between dl and the position vector r, and inversely proportional to the square of the distance r: dB = (μ₀ μ_r / 4π) · (I dl sin θ) / r².',
        'Ampère’s Circuital Law: The line integral of the magnetic flux density B around any closed Amperian path C in free space is equal to the permeability of free space (μ₀) multiplied by the net steady electric current (I_enc) enclosed by that loop: ∮_C B · dl = μ₀ I_enc (or ∇ × B = μ₀ J).',
      ],
      bulletPoints: [
        'Biot–Savart Law for a Current Element and a Moving Charge (Professor’s Sheet p. 5 & PUST 2024 Q2b):',
        '1. Vector Form for Current Element: dB = (μ₀ / 4π) · [I (dl × r) / r³], with magnitude dB = (μ₀ / 4π) · (I dl sin θ / r²), where μ₀ = 4π × 10⁻⁷ T·m·A⁻¹ (H·m⁻¹).',
        '2. Magnetic Field of a Moving Point Charge q: Since I dl = (dq / dt) dl = dq (dl / dt) = q v, the magnetic field produced by a single charge q moving with velocity v (v ≪ c) is:\nB = (μ₀ / 4π) · [q (v × r) / r³]   ⇒   B = (μ₀ / 4π) · (q v sin θ / r²).',
        '3. Application of Biot–Savart Law to a Long Straight Wire: Integrating dB = (μ₀ I / 4π) · (dl sin θ / r²) along an infinite straight wire at perpendicular distance R (where l = −R cot θ, dl = R csc²θ dθ, r = R csc θ) from θ = 0 to π yields:\nB = (μ₀ I / 4π R) ∫₀^π sin θ dθ = (μ₀ I) / (2π R).',
        'Statement, Proof, and Five Applications of Ampère’s Law (Professor’s Sheet pp. 2–3 & PUST 2023 Q2a, 2021 Q2a):',
        '1. Proof of Ampère’s Law for a Long Straight Wire: Consider a circular Amperian loop of radius r centered on a long straight wire carrying current I. At every point on the circle, B = (μ₀ I) / (2π r) is tangential and parallel to dl (θ = 0°). Evaluating the line integral:\n∮_C B · dl = B ∮_C dl = [(μ₀ I) / (2π r)] × (2π r) = μ₀ I.',
        '2. Five Key Applications Listed in Professor’s Sheet (p. 3):',
        '• (i) Magnetic induction due to a long straight current-carrying wire: B = (μ₀ I) / (2π r).',
        '• (ii) Magnetic field inside a long solenoid (n = N / l turns per unit length): B = μ₀ n I = (μ₀ N I) / l.',
        '• (iii) Magnetic field inside a toroid of N turns at mean radius r: B = (μ₀ N I) / (2π r).',
        '• (iv) Magnetic field inside a solid cylindrical conductor of radius R carrying uniform current I (at r < R, I_enc = I r² / R²): B = (μ₀ I r) / (2π R²).',
        '• (v) Magnetic force per unit length between two parallel current-carrying conductors separated by distance d: F / L = (μ₀ I₁ I₂) / (2π d).',
      ],
      equations: [
        {
          label: 'Biot–Savart Law (Current Element & Moving Point Charge)',
          formula: 'dB = (μ₀ μ_r / 4π) · (I dl sin θ / r²)\nB_charge = (μ₀ / 4π) · (q v sin θ / r²)',
          units: 'T (Wb·m⁻²)',
          note: 'μ₀ / (4π) = 10⁻⁷ T·m·A⁻¹',
        },
        {
          label: 'Ampère’s Circuital Law & Standard Field Formulas',
          formula: '∮ B · dl = μ₀ I_enc\nB_wire = (μ₀ I) / (2π r)\nB_solenoid = μ₀ n I = (μ₀ N I) / l\nB_toroid = (μ₀ N I) / (2π r)',
          units: 'T·m and T',
          note: 'μ₀ = 4π × 10⁻⁷ H·m⁻¹ (or Wb·A⁻¹·m⁻¹)',
        },
      ],
      examYears: ['2024', '2023', '2021'],
      marks: '4.67–5 Marks',
    },
    {
      id: 'phy-m2-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Magnetic Field, pp. 1–3) · PUST EECE 2025 Q2(a,b), 2024 Q2(a), 2023 Q2(b), 2022 Q2(a)',
      title: 'Faraday’s Laws of Electromagnetic Induction and Lenz’s Law',
      summaryText:
        'Statement and derivation of Faraday’s First and Second Laws (ε = −N dΦ/dt), four ways of varying magnetic flux, and Lenz’s Law as a consequence of conservation of energy.',
      memorizeStatements: [
        'Faraday’s First Law of Electromagnetic Induction: Whenever the magnetic flux linked with a closed circuit or coil changes with time, an electromotive force (EMF) is induced in the circuit, and if the circuit is closed, an induced current flows only as long as the change in magnetic flux continues.',
        'Faraday’s Second Law of Electromagnetic Induction: The magnitude of the induced electromotive force (ε) in a coil is directly proportional to the time rate of change of magnetic flux linkage (N Φ_B) through the coil: ε = −N (dΦ_B / dt).',
        'Lenz’s Law: The polarity of the induced EMF and the direction of the induced current in a closed circuit are always such that they oppose the very cause (change in magnetic flux or mechanical motion) that produces them.',
      ],
      bulletPoints: [
        'Four Ways to Change Magnetic Flux Linkage in a Closed Loop (Professor’s Sheet p. 2):',
        '1. By moving a bar magnet toward or away from the stationary coil.',
        '2. By moving the coil into or out of a magnetic field.',
        '3. By rotating the coil relative to the magnetic field (changing angle θ in Φ_B = B A cos θ, as in AC generators).',
        '4. By changing the area A of the coil placed in the magnetic field or varying the current in an adjacent electromagnet.',
        'Derivation of Induced EMF and Induced Current (Professor’s Sheet p. 2 & PUST 2025 Q2b, 2024 Q2a):',
        '1. Let a coil of N turns be linked with magnetic flux Φ₁ at time t = 0 and Φ₂ at time t = Δt. The total flux linkage changes from NΦ₁ to NΦ₂.',
        '2. By Faraday’s Second Law, the average induced EMF is proportional to the rate of change of flux linkage:\nε ∝ −(N Φ₂ − N Φ₁) / Δt = −N (ΔΦ_B / Δt).',
        '3. In SI units (where proportionality constant k = 1), taking the instantaneous limit Δt → 0:\nε = −N (dΦ_B / dt) = −N (d / dt)(B A cos θ).',
        '4. If the closed coil has total resistance R, the induced current is I = |ε| / R = (N / R)(dΦ_B / dt) and the total induced charge depends only on net flux change: Δq = ∫ I dt = (N / R) ΔΦ_B.',
        'How Lenz’s Law Ensures Conservation of Energy (Professor’s Sheet p. 3 & PUST 2025 Q2a):',
        '1. When the North pole of a bar magnet is pushed toward a closed coil, the induced current flows counterclockwise (as viewed from the magnet side) so that the nearer face of the coil becomes a North pole, repelling the approaching magnet.',
        '2. Similarly, when the North pole is pulled away from the coil, the induced current reverses to clockwise so the nearer face becomes a South pole, attracting the receding magnet.',
        '3. In both cases, an external agent must perform mechanical work (W = ∫ F_ext dx) against this opposing magnetic force to keep the magnet moving.',
        '4. This mechanical work done by the external agent is converted into electrical energy and dissipated as Joule heat (∫ I² R dt) in the coil. If the induced current instead aided the motion, the magnet would accelerate infinitely without external work, violating the Law of Conservation of Energy.',
      ],
      equations: [
        {
          label: 'Faraday–Lenz Law of Electromagnetic Induction',
          formula: 'Φ_B = B · A = B A cos θ\nε = −N (ΔΦ_B / Δt) = −N (dΦ_B / dt)',
          units: 'Wb and V',
          note: 'Minus sign represents Lenz’s law (opposes change in magnetic flux)',
        },
        {
          label: 'Induced Current & Induced Charge',
          formula: 'I_ind = |ε| / R = (N / R) · |dΦ_B / dt|\nΔq = (N · ΔΦ_B) / R',
          units: 'A and C',
          note: 'Induced charge Δq is independent of the speed of flux change',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022'],
      marks: '4–4.67 Marks',
    },
    {
      id: 'phy-m2-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Magnetic Field, pp. 3–4) · PUST EECE 2025 Q2(c), 2024 Q2(c), 2020 Q2(b)',
      title: 'Self-Inductance, Mutual Inductance, and Tight Coupling Proof',
      summaryText:
        'Definitions and solenoid formulas for self-inductance (L = μ₀ μ_r N² A / l) and mutual inductance (M = μ₀ μ_r N₁ N₂ A / l), how an inductor opposes current change, and proof that M = √(L₁ L₂).',
      memorizeStatements: [
        'Inductance (1 Henry): The property of an electrical conductor or coil by virtue of which it opposes any change in the magnitude or direction of electric current flowing through it; a coil has an inductance of 1 Henry (H) if a current changing at 1 A·s⁻¹ induces an opposing EMF of 1 Volt.',
        'Self-Inductance (L): The magnetic flux linkage per unit current in the same coil: N Φ = L I ⇒ L = N Φ / I, with self-induced back-EMF e = −L (dI / dt).',
        'Mutual Inductance (M): The magnetic flux linkage in a secondary coil per unit current flowing in an adjacent primary coil: N₂ Φ₂ = M I₁, with mutually induced EMF e₂ = −M (dI₁ / dt).',
      ],
      bulletPoints: [
        'Self-Inductance of a Long Solenoid & How It Opposes Current Change (Professor’s Sheet pp. 3–4 & PUST 2025 Q2c):',
        '1. Consider a long solenoid of length l, cross-sectional area A, and N turns wound on a core of permeability μ = μ₀ μ_r carrying current I.',
        '2. The magnetic field inside the solenoid is B = (μ N I) / l, so the flux through each turn is Φ = B A = (μ N I A) / l.',
        '3. Total flux linkage is N Φ = (μ N² A / l) I. Since N Φ = L I, the self-inductance of the solenoid is:\nL = (μ₀ μ_r N² A) / l = (μ N² A) / l.',
        '4. How Self-Inductance Opposes Change in Current (PUST 2025 Q2c-iii): By e = −L(dI/dt), when the circuit current I increases (dI/dt > 0), the self-induced back-EMF is directed opposite to the applied voltage to oppose the rise of current; when I decreases (dI/dt < 0), the induced EMF acts in the same direction as the current to oppose its decay (acting as electrical inertia and storing magnetic energy U_B = ½ L I²).',
        'Mutual Inductance of Two Coaxial Solenoids & Proof that M = √(L₁ L₂) (Professor’s Sheet p. 4 & PUST 2020 Q2b):',
        '1. Let two coils of turns N₁ and N₂ be wound on the same core of length l, area A, and permeability μ = μ₀ μ_r with zero flux leakage.',
        '2. Their individual self-inductances are:\nL₁ = (μ N₁² A) / l   and   L₂ = (μ N₂² A) / l.',
        '3. Multiplying L₁ and L₂ gives:\nL₁ · L₂ = [(μ N₁² A) / l] × [(μ N₂² A) / l] = [(μ N₁ N₂ A) / l]².',
        '4. When current I₁ flows in the primary coil, it creates magnetic field B₁ = (μ N₁ I₁) / l and flux Φ = B₁ A = (μ N₁ A I₁) / l. With no leakage of flux, this entire flux links all N₂ turns of the secondary coil:\nM = (N₂ Φ) / I₁ = (μ N₁ N₂ A) / l.',
        '5. Comparing Steps 3 and 4 yields:\nM² = L₁ · L₂   ⇒   M = √(L₁ L₂)\n(In general, if a fraction k of the flux links the second coil, M = k√(L₁ L₂), where k ≤ 1 is the coefficient of coupling).',
      ],
      equations: [
        {
          label: 'Self-Inductance & Induced Back-EMF',
          formula: 'L = (N Φ) / I,   e_L = −L (dI / dt)\nL_solenoid = (μ₀ μ_r N² A) / l',
          units: 'H (Wb·A⁻¹ or V·s·A⁻¹)',
          note: 'Magnetic energy stored in an inductor: U_B = ½ L I²',
        },
        {
          label: 'Mutual Inductance & Tight-Coupling Relation',
          formula: 'e_M = −M (dI₁ / dt)\nM = (μ₀ μ_r N₁ N₂ A) / l = √(L₁ L₂)   (for k = 1)',
          units: 'H',
          note: 'With flux linkage coupling coefficient k: M = k √(L₁ L₂)',
        },
      ],
      examYears: ['2025', '2024', '2020'],
      marks: '3–4.67 Marks',
    },
    {
      id: 'phy-m2-b5',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'PUST EECE 2025 Q2(c), 2025 Q4(c), 2024 Q2(c), 2023 Q2(c), 2022 Q2(c), 2021 Q2(c)',
      title: 'Solved Magnetism, Solenoid Inductance, and Torque Numericals',
      summaryText:
        'Step-by-step solutions to all PUST EECE (2021–2025) numerical problems on solenoid inductance, induced EMF in a loop, magnetic force on a wire, field of a long wire, and torque on a circular coil.',
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '3 Marks',
      problemStatement:
        '(a) [PUST 2025 Q2c]: A long solenoid with N = 800 turns, length l = 0.45 m, and cross-sectional area A = 1.2 × 10⁻³ m² is wound on a core with permeability μ = 4π × 10⁻⁷ H/m. Calculate the inductance L.\n(b) [PUST 2025 Q4c]: A short loop with an area of 4.0 cm² is placed inside a long solenoid with 10 rounds per cm, normal to the solenoid’s axis. What is the induced emf in the loop during a steady change in the solenoid carrying current from 2.0 A to 4.0 A lasting for 0.5 seconds?\n(c) [PUST 2024 Q2c]: Calculate the magnetic force on a straight wire of length 0.5 m carrying a current of 3 A placed in a magnetic field of 0.2 T at an angle of 30° to the field lines.\n(d) [PUST 2023 Q2c & 2022 Q2c]: Calculate the magnetic field at a distance of (i) 10 cm from a long conductor carrying 10 A [2022 Q2c] and (ii) 4 cm from a long wire carrying current I [2023 Q2c].\n(e) [PUST 2021 Q2c]: A circular coil of 100 turns and 5 cm radius is conveying 0.2 A current. If it is placed in a magnetic field of 1.5 Wb/m² at an angle of 30° with the field, calculate the torque acting on the coil.',
      givenData: [
        'Part (a): N = 800, l = 0.45 m, A = 1.2 × 10⁻³ m², μ = 4π × 10⁻⁷ H·m⁻¹',
        'Part (b): A = 4.0 cm² = 4.0 × 10⁻⁴ m², n = 10 turns/cm = 1000 turns/m, ΔI = 4.0 − 2.0 = 2.0 A, Δt = 0.5 s',
        'Part (c): L = 0.5 m, I = 3 A, B = 0.2 T, θ = 30°',
        'Part (d): μ₀ = 4π × 10⁻⁷ T·m·A⁻¹; r₁ = 0.10 m, I₁ = 10 A; r₂ = 0.04 m',
        'Part (e): N = 100, r = 0.05 m, I = 0.2 A, B = 1.5 T, angle = 30°',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Part (a) [PUST 2025 Q2c — Inductance of Solenoid]',
          explanation: 'Substitute N = 800, A = 1.2 × 10⁻³ m², l = 0.45 m, and μ = 4π × 10⁻⁷ H/m into L = μ N² A / l:',
          equation:
            'L = (μ · N² · A) / l = (4π × 10⁻⁷ × 800² × 1.2 × 10⁻³) / 0.45\nL = (9.651 × 10⁻⁴) / 0.45 = 2.145 × 10⁻³ H = 2.145 mH',
        },
        {
          stepTitle: 'Step 2: Solve Part (b) [PUST 2025 Q4c — Induced EMF in Loop Inside Solenoid]',
          explanation:
            'The magnetic field inside the solenoid is B = μ₀ n I. As current changes by ΔI = 2.0 A in Δt = 0.5 s, the induced EMF in the single-turn loop (N_loop = 1) is:',
          equation:
            '|ε| = dΦ / dt = A · (dB / dt) = A · μ₀ · n · (ΔI / Δt)\n|ε| = (4.0 × 10⁻⁴) × (4π × 10⁻⁷) × 1000 × (2.0 / 0.5)\n|ε| = 2.011 × 10⁻⁶ V = 2.01 μV',
        },
        {
          stepTitle: 'Step 3: Solve Part (c) [PUST 2024 Q2c — Magnetic Force on Straight Wire]',
          explanation: 'Apply F = I L B sin θ with I = 3 A, L = 0.5 m, B = 0.2 T, and sin 30° = 0.5:',
          equation:
            'F = I · L · B · sin 30° = 3 × 0.5 × 0.2 × 0.5 = 0.15 N',
        },
        {
          stepTitle: 'Step 4: Solve Part (d) [PUST 2022 & 2023 Q2c — Magnetic Field of Long Straight Wire]',
          explanation: 'Use B = (μ₀ I) / (2π r) = (2 × 10⁻⁷ · I) / r:',
          equation:
            '(i) For r = 0.10 m, I = 10 A [2022]:   B = (2 × 10⁻⁷ × 10) / 0.10 = 2.0 × 10⁻⁵ T\n(ii) For r = 0.04 m [2023]:   B = (2 × 10⁻⁷ · I) / 0.04 = (5.0 × 10⁻⁶ · I) T (e.g., 5.0 × 10⁻⁵ T for I = 10 A)',
        },
        {
          stepTitle: 'Step 5: Solve Part (e) [PUST 2021 Q2c — Torque on 100-Turn Circular Coil]',
          explanation:
            'Coil area A = πr² = π(0.05)² = 7.854 × 10⁻³ m². Using τ = N I A B sin θ (when 30° is between normal and B, as handwritten on the exam sheet) and also noting cos 30° (if 30° is with the coil plane):',
          equation:
            'τ = N · I · (π r²) · B · sin 30° = 100 × 0.2 × (7.854 × 10⁻³) × 1.5 × 0.5 = 0.1178 N·m\n(If 30° is angle of coil plane with B:   τ = N I A B cos 30° = 0.2041 N·m)',
        },
      ],
      finalAnswer:
        '(a) L = 2.15 mH; (b) |ε| = 2.01 μV; (c) F = 0.15 N; (d) B = 2.0 × 10⁻⁵ T (at 10 cm, 10 A); (e) τ = 0.118 N·m (or 0.204 N·m)',
    },
  ],
};

import type { ChapterNote } from '../../types';

export const CHEM1101_CH06: ChapterNote = {
  id: 'chem1101-ch06',
  unitNumber: 'Module 06',
  title: 'Atomic Structure',
  summary:
    'Dalton’s Atomic Theory, Fundamental Particles, Elementary Ideas on Rutherford Atom Model and Bohr Atom Model, Quantum Numbers, Shape of Atomic Orbitals, Pauli’s Exclusion Principle, Electronic Configuration of Elements.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m6-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Atomic Structure Q8) · Professor’s Suggestion Sheet (Ch 6 & Part B Q20) · PUST EECE 2025 Q5(a), 2022 Q5(a), 2016 Q4(a), 2016 Q5(a) · R. D. Madan',
      title: 'Dalton’s Atomic Theory, Rutherford’s Model, and Comparison with Bohr',
      summaryText:
        'Postulates and limitations of Dalton’s Atomic Theory, Rutherford’s gold-foil α-scattering observations and defects, and side-by-side comparison between Rutherford’s and Bohr’s atomic models.',
      memorizeStatements: [
        'Dalton’s Atomic Postulate: Matter is composed of tiny indivisible particles called atoms, which can neither be created nor destroyed in a chemical reaction and combine in simple whole-number ratios.',
        'Rutherford’s Nuclear Concept: Almost the entire mass and all positive charge (+Ze) of an atom are concentrated in an extremely small, dense central core called the nucleus (r ≈ 10⁻¹⁵ to 10⁻¹⁴ m), while electrons revolve around it in empty space (r ≈ 10⁻¹⁰ m).',
      ],
      bulletPoints: [
        'Main Postulates & Modern Limitations of Dalton’s Atomic Theory (PUST 2025 Q5a, Suggestion Q20):',
        '• Postulates: (1) Elements consist of tiny indivisible atoms; (2) Atoms of the same element are identical in mass and properties; (3) Atoms combine in simple whole-number ratios; (4) Atoms are neither created nor destroyed in chemical reactions.',
        '• Limitations: (1) Atoms are divisible into subatomic particles (electrons, protons, neutrons); (2) Isotopes of the same element have different atomic masses (e.g., ¹²C, ¹³C, ¹⁴C); (3) Isobars of different elements have the same mass number (e.g., ⁴⁰Ar and ⁴⁰Ca); (4) Non-stoichiometric (berthollide) compounds do not obey simple whole-number ratios.',
        'Rutherford’s α-Particle Scattering Experiment (1911) [PUST 2022 Q5a, 2016 Q4a]:',
        '1. Observation 1: Over 99.9% of fast α-particles (He²⁺ nuclei) passed straight through the thin gold foil (100 nm) undeflected ⇒ Conclusion: Most of the volume inside an atom is empty space.',
        '2. Observation 2: A small fraction of α-particles were deflected through small or large angles ⇒ Conclusion: The positive charge inside the atom is not spread out (disproving Thomson’s plum-pudding model) but concentrated in a tiny region.',
        '3. Observation 3: About 1 in 20,000 α-particles bounced back (deflected by ~180°) ⇒ Conclusion: Almost the entire mass and positive charge resides in a rigid, heavy, tiny central Nucleus of radius ~10⁻¹⁵ m.',
        'Defects of Rutherford’s Model & How It Led to Bohr’s Model (PUST 2025 Q5a, 2022 Q5a, 2016 Q5a):',
        '1. Failure to Explain Atomic Stability (Maxwell’s Electromagnetic Theory): An electron revolving in a circular orbit undergoes continuous centripetal acceleration. By Maxwell’s electrodynamics, an accelerating charged particle must continuously radiate electromagnetic energy, causing its orbit to shrink in a spiral path and collapse into the nucleus within ~10⁻⁸ seconds.',
        '2. Failure to Explain Discrete Line Spectra: As the spiraling electron’s orbital frequency changes continuously, it should emit a continuous spectrum; in reality, excited atoms (like Hydrogen) emit sharp, discrete line spectra at fixed frequencies.',
        '3. Transition to Bohr’s Model (1913): To overcome these two fatal defects, Niels Bohr applied Planck’s quantum theory to Rutherford’s nuclear atom, postulating quantized non-radiating stationary orbits (mvr = nh/2π) and discrete photon transitions (ΔE = E₂ − E₁ = hν).',
      ],
      table: {
        caption: 'Table 6.1 — Comparison Between Rutherford’s Atomic Model and Bohr’s Atomic Model (CR Final Exam Q8)',
        headers: ['Feature', 'Rutherford’s Atomic Model (1911)', 'Bohr’s Atomic Model (1913)'],
        rows: [
          [
            'Theoretical Basis',
            'Based purely on classical mechanics and classical electrodynamics (α-particle scattering)',
            'Combines Rutherford’s nuclear core with Planck’s quantum theory of radiation',
          ],
          [
            'Permissible Electron Orbits',
            'Electrons can revolve around the nucleus in any arbitrary circular orbit at any radius',
            'Electrons can revolve ONLY in discrete, quantized stationary orbits where mvr = nh/(2π)',
          ],
          [
            'Energy Radiation & Atomic Stability',
            'Revolving accelerating electron should radiate energy continuously and spiral into the nucleus (unstable)',
            'Electron does NOT radiate energy while moving in a stationary orbit; atom is completely stable',
          ],
          [
            'Nature of Atomic Spectrum',
            'Predicts a continuous emission spectrum because orbital frequency changes continuously',
            'Explains sharp, discrete line spectra via quantum jumps between orbits (ΔE = E₂ − E₁ = hν)',
          ],
          [
            'Shell Energy & Radius Formulas',
            'Provides no mathematical formula for orbital radii or electron energies',
            'Gives exact quantitative formulas for radius r_n = 0.529(n²/Z) Å and energy E_n = −13.6(Z²/n²) eV',
          ],
        ],
      },
      examYears: ['2025', '2022', '2016'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m6-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Atomic Structure Q1, Q8) · Professor’s Suggestion Sheet (Ch 6, Part B Q11) · PUST EECE 2024 Q5(a), 2024 Q6(a), 2021 Q5(c), 2020 Q5(a) · R. D. Madan',
      title: 'Bohr’s Atomic Model, Hydrogen Spectral Series, and Limitations',
      summaryText:
        'Postulates of Bohr’s model, expressions for Bohr radius r_n, energy E_n, and Rydberg wave number ν̄, Hydrogen spectral series (Lyman to Pfund), emission vs. absorption spectra, and limitations.',
      memorizeStatements: [
        'Bohr’s Quantization of Angular Momentum: An electron can revolve only in those permissible circular orbits for which its angular momentum is an integral multiple of h/(2π): mvr = n · h / (2π), where n = 1, 2, 3, …',
        'Bohr’s Frequency Condition: Radiation is emitted or absorbed only when an electron jumps from one stationary orbit (E₂) to another (E₁): ΔE = E₂ − E₁ = h · ν = h · c / λ.',
        'Rydberg Wave Number Formula: ν̄ = 1 / λ = R_H · Z² · (1 / n₁² − 1 / n₂²), where R_H = 109,677 cm⁻¹ (1.097 × 10⁷ m⁻¹).',
      ],
      bulletPoints: [
        'Key Postulates and Derived Expressions of Bohr’s Model (PUST 2024 Q5a, 2021 Q5c, 2020 Q5a):',
        '1. Stationary Orbits (Shells K, L, M, N…): While revolving in a stationary orbit, an electron neither loses nor gains energy.',
        '2. Electrostatic–Centripetal Balance: Z e² / (4πε₀ r²) = m v² / r.',
        '3. Radius of n-th Bohr Orbit: r_n = (ε₀ n² h²) / (π m e² Z) = 0.529 × (n² / Z) Å.',
        '4. Total Energy of Electron in n-th Orbit: E_n = −(m e⁴ Z²) / (8 ε₀² n² h²) = −13.6 × (Z² / n²) eV·atom⁻¹ = −1312 × (Z² / n²) kJ·mol⁻¹.',
        'Five Spectral Series of the Hydrogen Atom:',
        '• Lyman Series (n₁ = 1, n₂ = 2, 3, 4…): Ultraviolet (UV) region.',
        '• Balmer Series (n₁ = 2, n₂ = 3, 4, 5…): Visible region (H_α, H_β, H_γ, H_δ lines).',
        '• Paschen Series (n₁ = 3, n₂ = 4, 5…): Near-Infrared (IR) region.',
        '• Brackett Series (n₁ = 4, n₂ = 5, 6…): Mid-Infrared region.',
        '• Pfund Series (n₁ = 5, n₂ = 6, 7…): Far-Infrared region.',
        'Difference Between Emission and Absorption Spectra (PUST 2024 Q6a):',
        '• Emission Spectrum: Produced when excited atoms jump from higher energy levels (n₂) to lower energy levels (n₁), emitting bright colored lines on a dark background.',
        '• Absorption Spectrum: Produced when white light passes through a cool gas and electrons jump from lower (n₁) to higher (n₂) levels, appearing as dark lines on a bright continuous rainbow background at the exact same wavelengths.',
        'Limitations / Defects of Bohr’s Atomic Model (PUST 2024 Q5a, 2020 Q5a):',
        '1. Fails to explain the spectra of multi-electron atoms (even He with 2 electrons).',
        '2. Cannot explain the fine structure (doublet/multiplet splitting) observed under high-resolution spectroscopes.',
        '3. Cannot explain the Zeeman Effect (splitting of spectral lines in a magnetic field) or the Stark Effect (splitting of spectral lines in an electric field).',
        '4. Violates de Broglie’s wave-particle duality (λ = h/mv) and Heisenberg’s Uncertainty Principle (Δx · Δp ≥ h/4π), which forbid simultaneously fixing exact position r and momentum mv of an electron in a flat 2D circular orbit.',
      ],
      equations: [
        {
          label: 'Bohr Radius & Orbit Energy',
          formula: 'r_n = 0.529 · (n² / Z) Å\nE_n = −13.6 · (Z² / n²) eV = −2.18 × 10⁻¹⁸ · (Z² / n²) J',
          units: 'Å and eV or J',
          note: 'For Hydrogen ground state (Z = 1, n = 1): r₁ = 0.529 Å, E₁ = −13.6 eV',
        },
        {
          label: 'Rydberg Equation for Spectral Transitions',
          formula: 'ν̄ = 1 / λ = R_H · Z² · (1 / n₁² − 1 / n₂²)',
          units: 'cm⁻¹ or m⁻¹',
          note: 'R_H = 109,677 cm⁻¹ = 1.0968 × 10⁷ m⁻¹',
        },
      ],
      examYears: ['2024', '2021', '2020'],
      marks: '4–5 Marks',
    },
    {
      id: 'chem-m6-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Atomic Structure Q2, Q3) · Professor’s Suggestion Sheet (Ch 6, Part A Q16, Part B Q12) · PUST EECE 2025 Q5(b), 2024 Q5(b,c), 2022 Q5(b,c), 2021 Q5(a), 2020 Q6(b), 2016 Q4(b), 2016 Q5(b,c)',
      title: 'Quantum Numbers and Shapes of Atomic Orbitals',
      summaryText:
        'Physical significance and permissible values of the four quantum numbers (n, l, m_l, m_s), orbital identification, and 3D boundary-surface shapes and directional characteristics of s, p, and all five d orbitals.',
      memorizeStatements: [
        'Quantum Numbers: The set of four numerical indices (n, l, m, s) required to completely specify the energy, size, 3D shape, spatial orientation, and spin direction of an electron in an atom.',
        'Principal Quantum Number (n = 1, 2, 3…): Determines the main energy shell (K, L, M, N) and average distance of the electron from the nucleus; maximum electrons in shell n = 2n².',
        'Azimuthal / Subsidiary Quantum Number (l = 0 to n − 1): Determines the subshell (s = 0, p = 1, d = 2, f = 3), the 3D shape of the orbital, and orbital angular momentum L = √[l(l + 1)] · h / (2π).',
        'Magnetic Quantum Number (m = −l … 0 … +l; total 2l + 1 values): Determines the spatial orientation of the orbital in a magnetic field (number of orbitals in a subshell = 2l + 1).',
        'Spin Quantum Number (s = +½ or −½): Specifies the intrinsic clockwise (+½, ↑) or counterclockwise (−½, ↓) spin angular momentum of the electron around its own axis.',
      ],
      bulletPoints: [
        '3D Shapes and Directional Characteristics of s, p, and d Atomic Orbitals (CR Final Exam Q3; PUST 2024 Q5c, 2022 Q5b, 2021 Q5a, 2016 Q5c):',
        '1. Shape of s-Orbital (l = 0, m = 0 — 1 orbital):',
        '• Spherically symmetrical around the nucleus in all three directions (non-directional). A 1s orbital has 0 radial nodes; a 2s orbital has 1 spherical radial node (nodal surface where ψ² = 0). In general, number of radial nodes = n − l − 1.',
        '2. Shapes of p-Orbitals (l = 1, m = −1, 0, +1 — 3 degenerate orbitals: p_x, p_y, p_z):',
        '• Dumbbell-shaped consisting of two lobes of opposite wave-function signs (+ and −) separated by a nodal plane passing through the nucleus.',
        '• p_x lies along the X-axis (nodal plane YZ), p_y lies along the Y-axis (nodal plane XZ), and p_z lies along the Z-axis (nodal plane XY).',
        '3. Sketches and Directional Characteristics of the Five d-Orbitals (l = 2, m = −2, −1, 0, +1, +2 — CR Final Exam Q3):',
        '• Divided into two directional symmetry sets (2 angular nodal planes each):',
        '• Non-Axial Planar Cloverleaf Set — t_{2g} (d_{xy}, d_{yz}, d_{zx}): Each orbital has a double-dumbbell (four-leaf clover) shape with 4 lobes of electron density directed at 45° IN BETWEEN the coordinate axes in the XY, YZ, and ZX planes respectively.',
        '• Axial Set — e_g (d_{x²−y²} and d_{z²}): d_{x²−y²} has 4 cloverleaf lobes directed DIRECTLY ALONG the X and Y coordinate axes; d_{z²} has 2 large dumbbell lobes directed ALONG the Z-axis surrounded by a concentric doughnut-shaped ring (torus) of high electron density in the XY plane.',
      ],
      table: {
        caption: 'Table 6.2 — Summary of the Four Quantum Numbers and Subshell Capacities (CR Final Exam Q2)',
        headers: [
          'Quantum Number & Symbol',
          'Permissible Values',
          'Physical Property Specified',
          'Subshell Orbitals & Max e⁻',
        ],
        rows: [
          [
            'Principal (n)',
            'n = 1, 2, 3, 4 … (K, L, M, N)',
            'Shell size (r ∝ n²) and principal energy level',
            'n² orbitals; max 2n² electrons per shell',
          ],
          [
            'Azimuthal (l)',
            'l = 0, 1, 2 … (n − 1)',
            'Orbital shape: s (0), p (1), d (2), f (3)',
            'Max 2(2l + 1) electrons: s(2), p(6), d(10), f(14)',
          ],
          [
            'Magnetic (m or m_l)',
            'm = −l, …, 0, …, +l (2l + 1 values)',
            '3D spatial orientation (Zeeman splitting)',
            's = 1, p = 3, d = 5, f = 7 orbitals',
          ],
          [
            'Spin (s or m_s)',
            's = +1/2 (↑) or −1/2 (↓)',
            'Direction of intrinsic electron spin',
            'Max 2 electrons per individual orbital',
          ],
        ],
      },
      examYears: ['2025', '2024', '2022', '2021', '2020', '2016'],
      marks: '4–5 Marks',
      professorTip:
        'Quantum numbers and orbital shapes are asked in almost every single PUST exam (7 times between 2016 and 2025). Always draw the 5 d-orbitals grouped into the between-axis cloverleafs (d_xy, d_yz, d_zx) and along-axis orbitals (d_{x²−y²}, d_{z²}).',
    },
    {
      id: 'chem-m6-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Atomic Structure Q4) · Professor’s Suggestion Sheet (Ch 6 & Part C Q29) · PUST EECE 2025 Q5(c), 2022 Q5(d), 2021 Q5(b), 2020 Q6(a)',
      title: 'Aufbau Principle, Pauli’s Exclusion, Hund’s Rule, and Cr/Cu Anomalies',
      summaryText:
        'Statements and applications of Pauli’s Exclusion Principle, Hund’s Rule of Maximum Multiplicity, Aufbau Principle & Madelung’s (n + l) rule, and anomalous electronic configurations of Cr (Z=24) and Cu (Z=29).',
      memorizeStatements: [
        'Pauli’s Exclusion Principle: No two electrons in the same atom can have the exact same set of all four quantum numbers (n, l, m, s); consequently, an atomic orbital can accommodate a maximum of two electrons, and they must have opposite spins (+½ and −½).',
        'Hund’s Rule of Maximum Multiplicity: Electron pairing in degenerate orbitals belonging to the same subshell (p, d, or f) does not take place until each orbital of that subshell is singly occupied by one electron with parallel spin.',
        'Aufbau Principle: In the ground state of an atom, electrons fill atomic orbitals in increasing order of their energy levels, starting from the lowest available energy orbital.',
        'Madelung’s (n + l) Rule: (1) An orbital with a lower value of (n + l) has lower energy and is filled first; (2) If two orbitals have the same value of (n + l), the orbital with the lower value of n has lower energy and is filled first.',
      ],
      bulletPoints: [
        'Significance of the (n + l) Rule — Why 4s Is Filled Before 3d (CR Final Exam Q4; PUST 2025 Q5c, 2020 Q6a):',
        '• The (n + l) rule determines the relative energy order of atomic subshells in multi-electron atoms and governs the exact sequence of ground-state electronic configurations.',
        '• For the 4s orbital: n = 4, l = 0 ⇒ (n + l) = 4 + 0 = 4.',
        '• For the 3d orbital: n = 3, l = 2 ⇒ (n + l) = 3 + 2 = 5.',
        '• Since (n + l) for 4s (4) is less than that for 3d (5), the 4s orbital has lower energy than 3d in neutral potassium (Z=19) and calcium (Z=20), so electrons enter 4s before 3d.',
        '• Tie-breaker Example (3d vs. 4p): Both 3d (3 + 2 = 5) and 4p (4 + 1 = 5) have (n + l) = 5, so 3d (lower n = 3) fills before 4p (n = 4).',
        'Anomalous Electronic Configurations of Chromium (Cr, Z = 24) and Copper (Cu, Z = 29) [PUST 2021 Q5b, Suggestion Q29]:',
        '1. Chromium (Cr, Z = 24): Expected [Ar] 3d⁴ 4s², Actual ground-state configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ ([Ar] 3d⁵ 4s¹).',
        '2. Copper (Cu, Z = 29): Expected [Ar] 3d⁹ 4s², Actual ground-state configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ ([Ar] 3d¹⁰ 4s¹).',
        '3. Two Quantum-Mechanical Reasons for Extra Stability of Half-Filled (d⁵) and Fully-Filled (d¹⁰) Subshells: (i) Symmetrical 3D distribution of charge minimizes electron–electron repulsion; (ii) Maximum exchange energy from parallel-spin electron exchanges in degenerate orbitals (10 exchange pairs in 3d⁵ vs. 6 in 3d⁴).',
      ],
      equations: [
        {
          label: 'Aufbau Energy Ordering Sequence',
          formula: '1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s',
          units: '(n + l) Energy Order',
          note: 'Cr (Z=24): [Ar] 3d⁵ 4s¹;   Cu (Z=29): [Ar] 3d¹⁰ 4s¹',
        },
      ],
      examYears: ['2025', '2022', '2021', '2020'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m6-b5',
      type: 'pyq',
      priorityTier: 2,
      sourceCitation: 'PUST EECE 2016 Exam · Q4(b), Q4(c), & Q5(b)',
      title: 'Orbital Identification and Lyman Series Wave Number Calculation',
      summaryText:
        'Identify orbitals from quantum numbers, write the four quantum numbers for a 4f electron, and calculate the wave number of the first line of the Lyman series (R = 109,686 × 10² m⁻¹).',
      examYears: ['2016'],
      marks: '3 + 3 Marks',
      problemStatement:
        '(a) [2016 Q4b]: Designate the orbitals having the following quantum numbers: (i) n = 2, l = 1, m = 0; (ii) n = 3, l = 0, m = 0; (iii) n = 4, l = 1, m = 0.\n(b) [2016 Q5b]: Write the permissible values of all four quantum numbers for an electron in a 4f orbital.\n(c) [2016 Q4c]: Calculate the wave number of the first line in the Lyman series of the hydrogen spectrum (Given: Rydberg constant R = 109,686 × 10² m⁻¹).',
      givenData: [
        'Subshell letter code: l = 0 (s), l = 1 (p), l = 2 (d), l = 3 (f)',
        'For first line of Lyman series: lower level n₁ = 1, upper level n₂ = 2',
        'Rydberg constant R = 109,686 × 10² m⁻¹ = 1.09686 × 10⁷ m⁻¹',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Part (a) — Orbital Designations',
          explanation: 'Combine the principal number n with the subshell letter for l (conventionally m = 0 corresponds to p_z):',
          equation:
            '(i) n = 2, l = 1, m = 0   →   2p_z orbital\n(ii) n = 3, l = 0, m = 0   →   3s orbital\n(iii) n = 4, l = 1, m = 0   →   4p_z orbital',
        },
        {
          stepTitle: 'Step 2: Solve Part (b) — Quantum Numbers for a 4f Electron',
          explanation: 'For the 4f subshell, n = 4 and l = 3:',
          equation:
            'Principal quantum number:   n = 4\nAzimuthal quantum number:   l = 3\nMagnetic quantum number:   m = −3, −2, −1, 0, +1, +2, +3 (any one of the 7 values)\nSpin quantum number:   s = +1/2 or −1/2',
        },
        {
          stepTitle: 'Step 3: Solve Part (c) — Wave Number of First Line of Lyman Series (n₂ = 2 → n₁ = 1)',
          explanation: 'Substitute n₁ = 1, n₂ = 2, Z = 1, and R = 1.09686 × 10⁷ m⁻¹ into Rydberg’s formula:',
          equation:
            'ν̄ = R · (1 / n₁² − 1 / n₂²)\nν̄ = 1.09686 × 10⁷ × (1 / 1² − 1 / 2²)\nν̄ = 1.09686 × 10⁷ × (3 / 4)\nν̄ = 8.22645 × 10⁶ m⁻¹ (or 82,264.5 cm⁻¹)',
        },
      ],
      finalAnswer:
        '(a) 2p_z, 3s, 4p_z; (b) n = 4, l = 3, m ∈ {−3..+3}, s = ±1/2; (c) ν̄ = 8.226 × 10⁶ m⁻¹',
    },
  ],
};

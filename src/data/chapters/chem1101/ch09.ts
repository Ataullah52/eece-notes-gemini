import type { ChapterNote } from '../../types';

export const CHEM1101_CH09: ChapterNote = {
  id: 'chem1101-ch09',
  unitNumber: 'Module 09',
  title: 'Chemistry of Transition Elements, Lanthanides and Actinides',
  summary:
    'Definitions, Electronic Configurations, Preparation (Nuclear Transformation), General Properties.',
  estimatedMinutes: 80,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m9-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Transition, Lanthanides & Actinides Q1, Q5, Q6) · Transition Elements Lecture Slides (1 & 2) · Important Questions Sheet (Q1, Q5, Q6) · PUST EECE 2025 Q8(b), 2023 Q5(a,c), 2022 Q6(b), 2022 Q8(d), 2016 Q6(a) · R. D. Madan',
      title: 'Transition vs. d-Block Elements and 3d Electronic Configurations',
      summaryText:
        'Definition of transition metals with examples (Fe, Cu), difference between transition elements and d-block elements, why Sc and Zn are excluded, and electronic configurations of V, Ti, Cr, Cu, Fe, Mn, Co, Ni, Sc, Zn.',
      memorizeStatements: [
        'd-Block Elements: Elements in which the last differentiating electron enters one of the five penultimate (n − 1)d orbitals; they occupy Groups 3 to 12 of the Periodic Table and have general valence configuration (n − 1)d¹⁻¹⁰ ns⁰⁻².',
        'Transition Elements (IUPAC Definition): Elements that possess an incompletely filled (partially filled) d-subshell (d¹ to d⁹) either in their neutral atomic ground state or in any of their common stable oxidation states (e.g., Iron Fe [Ar] 3d⁶ 4s² and Copper Cu [Ar] 3d¹⁰ 4s¹ / Cu²⁺ [Ar] 3d⁹).',
        'Core Rule: "All transition elements are d-block elements, but not all d-block elements are transition elements."',
      ],
      bulletPoints: [
        'Key Differences Between d-Block Elements and Transition Elements (CR Final Exam Q5; Imp Q5):',
        '1. Electronic Criterion: Any element in which the last differentiating electron enters the penultimate (n − 1)d orbital (Groups 3–12, d¹ to d¹⁰) is a d-block element; whereas a true Transition Element must have an INCOMPLETELY filled d-subshell (d¹ to d⁹) in its ground state or in a stable oxidation state.',
        '2. Scope & Group 12 Exclusion: There are 40 d-block elements across the 3d, 4d, 5d, and 6d series, but Group 12 elements (Zn, Cd, Hg, Cn) have completely filled (n − 1)d¹⁰ ns² configurations in both atomic and M²⁺ ionic states and are therefore d-block elements but NOT transition elements.',
        '3. Characteristic Properties: True transition elements exhibit variable oxidation states, colored hydrated ions (d–d transitions), paramagnetism, and strong catalytic activity; non-transition d-block elements (such as Zn²⁺, Cd²⁺, and Sc³⁺) have fixed oxidation states and form colorless, diamagnetic compounds.',
        'Why Scandium (Sc) and Zinc (Zn) Are d-Block Elements But NOT Considered True Transition Elements (PUST 2025 Q8b, 2023 Q5a, 2022 Q6b, 2022 Q8d, 2016 Q6a, Imp Q1,5):',
        '1. Zinc (Zn, Z = 30 — Group 12, along with Cd and Hg):',
        '• Neutral Zn has electronic configuration [Ar] 3d¹⁰ 4s², and in its only stable oxidation state (+2), the Zn²⁺ ion has configuration [Ar] 3d¹⁰.',
        '• Since the 3d subshell is completely full (3d¹⁰) in both the free atom and the Zn²⁺ ion, Zinc lacks a partially filled d-orbital (d¹–d⁹). Consequently, Zn²⁺ compounds are white/colorless, diamagnetic, and show no variable valency.',
        '2. Scandium (Sc, Z = 21 — Group 3):',
        '• Although neutral Sc has configuration [Ar] 3d¹ 4s², in all its chemical compounds it exists exclusively in the +3 oxidation state (Sc³⁺) by losing both 4s² and the single 3d¹ electron, leaving an empty [Ar] 3d⁰ configuration.',
        '• Because Sc³⁺ has an empty 3d⁰ subshell, its salts are colorless, diamagnetic, and do not show variable oxidation states.',
        '3. Why Copper (Cu, Z = 29) IS a True Transition Element Despite Having [Ar] 3d¹⁰ 4s¹:',
        '• Although neutral Cu and Cu⁺ ([Ar] 3d¹⁰) have full d-subshells, in its most common aqueous oxidation state (+2), the Cu²⁺ ion has configuration [Ar] 3d⁹ (an incompletely filled d-subshell with 1 unpaired electron), forming blue paramagnetic salts.',
      ],
      table: {
        caption: 'Table 9.1 — Ground-State Electronic Configurations of Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn (CR Final Exam Q6; PUST 2023 Q5c)',
        headers: ['Element & Symbol', 'Atomic Number (Z)', 'Electronic Configuration', 'Common Oxidation States (Bold = Most Stable)'],
        rows: [
          ['Scandium (Sc)', '21', '[Ar] 3d¹ 4s²', '+3'],
          ['Titanium (Ti)', '22', '[Ar] 3d² 4s²', '+2, +3, +4'],
          ['Vanadium (V)', '23', '[Ar] 3d³ 4s²', '+2, +3, +4, +5'],
          ['Chromium (Cr)*', '24', '[Ar] 3d⁵ 4s¹ (Half-filled d⁵)', '+2, +3, +6'],
          ['Manganese (Mn)', '25', '[Ar] 3d⁵ 4s²', '+2, +3, +4, +6, +7'],
          ['Iron (Fe)', '26', '[Ar] 3d⁶ 4s²', '+2, +3, +6'],
          ['Cobalt (Co)', '27', '[Ar] 3d⁷ 4s²', '+2, +3'],
          ['Nickel (Ni)', '28', '[Ar] 3d⁸ 4s²', '+2, +3'],
          ['Copper (Cu)*', '29', '[Ar] 3d¹⁰ 4s¹ (Full d¹⁰)', '+1, +2'],
          ['Zinc (Zn)', '30', '[Ar] 3d¹⁰ 4s²', '+2'],
        ],
      },
      examYears: ['2025', '2023', '2022', '2016'],
      marks: '4–5 Marks',
      professorTip:
        'Always highlight the two Cr (Z=24: [Ar] 3d⁵ 4s¹) and Cu (Z=29: [Ar] 3d¹⁰ 4s¹) anomalies when writing the 3d series table (PUST 2023 Q5c, Imp Q6).',
    },
    {
      id: 'chem-m9-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Transition, Lanthanides & Actinides Q7) · Transition Elements Lecture Slides (1 & 2) · Important Questions Sheet (Q7) · PUST EECE 2024 Q8(c), 2020 Q5(c), 2016 Q6(d)',
      title: 'General Properties of Transition Metals and d–d Transitions',
      summaryText:
        'Detailed explanation of 5 hallmark properties of transition elements: variable oxidation states, catalytic activity, magnetic spin-only moment μ_eff = √[n(n+2)] B.M., complex ion formation, and octahedral d–d crystal field splitting.',
      memorizeStatements: [
        'Spin-Only Magnetic Moment Formula: μ_eff = √[n(n + 2)] B.M. (Bohr Magnetons), where n is the number of unpaired d-electrons.',
        'd–d Transition (Origin of Color): In an octahedral ligand field, the 5 degenerate d-orbitals split into a lower-energy triplet t_{2g} (d_xy, d_yz, d_zx) and a higher-energy doublet e_g (d_{x²−y²}, d_{z²}) separated by crystal field splitting energy Δ_o = hν; absorption of visible light promotes an electron from t_{2g} to e_g, transmitting the complementary color.',
      ],
      bulletPoints: [
        '1. Variable Oxidation States:',
        '• Because the energy difference between (n − 1)d and ns orbitals is very small, both ns and (n − 1)d electrons participate in chemical bonding.',
        '• Minimum oxidation state equals the number of ns electrons (+2), while maximum oxidation state up to Mn equals the sum of ns + unpaired (n − 1)d electrons (e.g., Mn [Ar] 3d⁵ 4s² shows +2 to +7 in KMnO₄).',
        '2. Why Transition Metals Show Good Catalytic Activity (CR Final Exam Q7; PUST 2024 Q8c, Imp Q7):',
        '• Reasons: (i) Presence of vacant d-orbitals that form unstable intermediate surface adsorption complexes with reactants, providing a new reaction pathway with lower activation energy E_a; (ii) Ability to adopt variable oxidation states for facile redox electron transfer (e.g., V⁵⁺ ⇌ V⁴⁺ in Contact Process: V₂O₅ + SO₂ → V₂O₄ + SO₃; V₂O₄ + ½O₂ → V₂O₅, or Fe²⁺/Fe³⁺); (iii) Large surface area with free valencies on finely divided metal surfaces that concentrate reactant molecules.',
        '• Key Industrial Examples: Finely divided Iron (Fe) with Mo promoter in Haber’s synthesis of NH₃; Vanadium pentoxide (V₂O₅) in Contact Process for H₂SO₄; Nickel (Ni) in hydrogenation of vegetable oils; Pt/Rh gauze in Ostwald’s HNO₃ process; TiCl₄ + Al(C₂H₅)₃ (Ziegler–Natta catalyst) for polyethylene.',
        '3. Magnetic Properties:',
        '• Ions with partially filled d-orbitals (d¹–d⁹) contain unpaired electrons and are Paramagnetic, attracted into a magnetic field with moment μ = √[n(n + 2)] B.M. (e.g., Fe³⁺ and Mn²⁺ have 3d⁵ with n = 5 ⇒ μ = √35 = 5.92 B.M.).',
        '• Ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Cu⁺, Zn²⁺) configurations have n = 0 unpaired electrons and are Diamagnetic (μ = 0 B.M.).',
        '• Fe, Co, and Ni exhibit Ferromagnetism (spontaneous permanent alignment of magnetic domains).',
        '4. Formation of Coordination Complexes & Ligand Reactions (Lecture Slides & PUST 2020 Q5c):',
        '• Due to small ionic size, high positive charge density (high Z_eff), and vacant (n − 1)d, ns, np orbitals, transition metal ions accept lone pairs from Lewis base ligands (NH₃, H₂O, CN⁻, Cl⁻) to form complex ions.',
        '• Ligand Exchange Reaction (Cu²⁺ + NH₃): Pale blue hexaaquacopper(II) reacts with excess ammonia to form deep royal-blue tetraamminecopper(II):\n[Cu(H₂O)₆]²⁺(aq, pale blue) + 4NH₃(aq) ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺(aq, deep blue) + 4H₂O(l)',
        '• Chromium(III) Alkaline Oxidation (PUST 2020 Q5c): Adding NaOH to Cr³⁺ gives a green precipitate of Cr(OH)₃ which dissolves in excess NaOH to form green chromite [Cr(OH)₄]⁻; warming with H₂O₂ oxidizes Cr(III) (+3, green) to yellow chromate CrO₄²⁻ (+6):\n2[Cr(OH)₄]⁻ + 3H₂O₂ + 2OH⁻ → 2CrO₄²⁻ (yellow) + 8H₂O',
        '5. Formation of Colored Ions — Why Ti³⁺ Is Purple While Ti⁴⁺ and Sc³⁺ Are Colorless (PUST 2016 Q6d):',
        '• In aqueous solution, [Ti(H₂O)₆]³⁺ contains Ti³⁺ ([Ar] 3d¹). In the octahedral field of 6 H₂O ligands, the single 3d¹ electron in the lower t_{2g} level absorbs green-yellow light (λ ≈ 500 nm) to jump to the upper e_g level (t_{2g}¹ e_g⁰ → t_{2g}⁰ e_g¹), transmitting complementary Purple/Violet color.',
        '• In Ti⁴⁺ ([Ar] 3d⁰), Sc³⁺ ([Ar] 3d⁰), or Zn²⁺ ([Ar] 3d¹⁰), the d-subshell is either completely empty or completely full, so no d–d electronic transition is possible and the ions are Colorless.',
      ],
      equations: [
        {
          label: 'Spin-Only Magnetic Moment',
          formula: 'μ_eff = √[n(n + 2)] B.M.\nn = 1 (Ti³⁺, Cu²⁺): μ = 1.73 B.M.\nn = 3 (Cr³⁺): μ = 3.87 B.M.\nn = 5 (Mn²⁺, Fe³⁺): μ = 5.92 B.M.',
          units: 'Bohr Magneton (B.M.)',
          note: 'n is the number of unpaired electrons in (n − 1)d orbitals',
        },
      ],
      examYears: ['2024', '2020', '2016'],
      marks: '4–5 Marks',
    },
    {
      id: 'chem-m9-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'CR Final Exam Question Bank (Transition, Lanthanides & Actinides Q2, Q3, Q4) · Lanthanides and Actinides Lecture Slides · Important Questions Sheet (Q3, Q4) · PUST EECE 2025 Q8(c), 2022 Q8(b), 2020 Q8(c), 2016 Q6(b,c), 2016 Q8(b,c) · R. D. Madan',
      title: 'Lanthanides & Actinides, Lanthanide Contraction, and Nuclear Transformation',
      summaryText:
        'Electronic configurations and oxidation states of 4f Lanthanides (Z=58–71) and 5f Actinides (Z=90–103), d-block vs. f-block comparison, cause and 4 consequences of Lanthanide Contraction, and synthesis of transuranic actinides via nuclear transformation.',
      memorizeStatements: [
        'Lanthanides (4f Inner Transition Series): The 14 elements from Cerium (Ce, Z = 58) to Lutetium (Lu, Z = 71) following Lanthanum (La, Z = 57), in which the anti-penultimate 4f subshell is progressively filled: [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s².',
        'Actinides (5f Inner Transition Series): The 14 radioactive elements from Thorium (Th, Z = 90) to Lawrencium (Lr, Z = 103) following Actinium (Ac, Z = 89), in which the 5f subshell is progressively filled: [Rn] 5f⁰⁻¹⁴ 6d⁰⁻² 7s².',
        'Lanthanide Contraction: The steady and regular decrease in atomic and trivalent ionic radii (Ln³⁺, from La³⁺ 1.06 Å down to Lu³⁺ 0.85 Å) across the 14 lanthanide elements from Ce (Z = 58) to Lu (Z = 71).',
      ],
      bulletPoints: [
        'Cause of Lanthanide Contraction (PUST 2025 Q8c, 2022 Q8b, 2016 Q6b, Imp Q3,4):',
        '• As we move from Ce (Z = 58) to Lu (Z = 71), nuclear charge Z increases by +1 unit at each step while the differentiating electron enters the inner anti-penultimate 4f subshell (two shells inside the 6s valence shell).',
        '• Because 4f orbitals have a very diffused, multi-lobed shape, 4f electrons shield one another and the outer 6s/5d electrons very poorly (shielding order: s > p > d > f).',
        '• Consequently, the effective nuclear charge (Z_eff = Z − S) experienced by the outer electrons increases steadily at each step, pulling the entire electron cloud inward and causing a cumulative contraction of ~0.21 Å across the series.',
        'Four Major Consequences of Lanthanide Contraction (PUST 2025 Q8c, 2022 Q8b, 2016 Q6b, Imp Q3):',
        '1. Striking Atomic/Ionic Size Similarity of 2nd (4d) and 3rd (5d) Transition Series ("Chemical Twins"): Normally atomic radius increases down a group (3d < 4d), but the lanthanide contraction just before the 5d elements cancels out the expected shell expansion. Hence 4d and 5d pairs have virtually identical radii: Zr (1.60 Å) ≈ Hf (1.59 Å), Nb (1.46 Å) ≈ Ta (1.46 Å), and Mo (1.39 Å) ≈ W (1.40 Å), making them extremely difficult to separate.',
        '2. Decrease in Basicity of Lanthanide Hydroxides [La(OH)₃ to Lu(OH)₃]: As Ln³⁺ radius decreases from La³⁺ to Lu³⁺, the polarizing power of the cation increases (by Fajans’ rule), increasing the covalent character of the Ln—OH bond. Thus basic strength decreases from La(OH)₃ (strongest base) to Lu(OH)₃ (weakest base).',
        '3. Difficulty in Separation of Lanthanides: Because their Ln³⁺ radii change by only ~0.01 Å between adjacent lanthanides, their chemical properties are almost identical; they are separated from Monazite sand using Modern Cation-Exchange Resin Chromatography (eluting with citric acid/ammonium citrate buffer where smallest hydrated Lu³⁺ elutes first and La³⁺ last).',
        '4. Abnormally High Density of Post-Lanthanide (5d) Elements: Because atomic mass roughly doubles from 4d to 5d while atomic volume remains constant, 5d metals (Hf, Ta, W, Os, Ir, Pt, Au) have nearly double the density of 4d metals.',
        'Preparation of Transuranic Actinides by Nuclear Transformation (Lecture Slide p. 12–13 & Syllabus):',
        '• Elements beyond Uranium (Z > 92, e.g., Np, Pu, Am, Cm) do not occur naturally in appreciable quantities and are synthesized artificially by bombarding heavy nuclei with neutrons or α-particles (Nuclear Transformation / Transmutation):',
        '1. Synthesis of Neptunium (Z = 93) and Plutonium (Z = 94) from Uranium-238:\n_{92}^{238}U + _{0}^{1}n → _{92}^{239}U (unstable) → _{93}^{239}Np + _{−1}^{0}e (β⁻ decay)\n_{93}^{239}Np → _{94}^{239}Pu + _{−1}^{0}e (β⁻ decay)',
        '2. Synthesis of Americium (Z = 95) and Curium (Z = 96):\n_{94}^{239}Pu + 2 _{0}^{1}n → _{94}^{241}Pu → _{95}^{241}Am + _{−1}^{0}e\n_{94}^{239}Pu + _{2}^{4}He (α-particle) → _{96}^{242}Cm + _{0}^{1}n',
        'Why Actinides Are Strongly Paramagnetic and Form More Complexes Than Lanthanides (PUST 2016 Q8c):',
        '• Both 4f and 5f ions contain unpaired f-electrons and are strongly paramagnetic. However, 5f orbitals in Actinides extend further out spatially from the nucleus, are less buried than 4f orbitals, and have smaller energy gaps between 5f, 6d, and 7s levels—leading to wide variable oxidation states (+3, +4, +5, +6, +7) and stronger complex formation.',
      ],
      table: {
        caption: 'Table 9.2 — Comparison Between d-Block (Transition) and f-Block (Inner Transition) Elements (PUST 2020 Q8c, 2016 Q8b)',
        headers: ['Feature', 'd-Block (Transition) Elements', 'f-Block (Inner Transition) Elements'],
        rows: [
          [
            'Differentiating Electron',
            'Enters penultimate (n − 1)d subshell',
            'Enters anti-penultimate (n − 2)f subshell (4f or 5f)',
          ],
          [
            'General Configuration',
            '(n − 1)d¹⁻¹⁰ ns⁰⁻² (Groups 3–12)',
            '(n − 2)f¹⁻¹⁴ (n − 1)d⁰⁻¹ ns² (Group 3, Periods 6 & 7)',
          ],
          [
            'Shielding & Ligand Field Effect',
            '(n − 1)d orbitals are exposed to ligands; strong crystal field splitting (Δ_o)',
            '4f orbitals are deeply buried and shielded by 5s²5p⁶; ligand field splitting is very weak',
          ],
          [
            'Common Oxidation States',
            'Wide range of variable oxidation states (+2 to +7)',
            '+3 is universally predominant in Lanthanides (Actinides show +3 to +7)',
          ],
          [
            'Absorption Spectra',
            'Broad absorption bands due to vibronic d–d transitions',
            'Very sharp, line-like absorption bands due to shielded f–f transitions',
          ],
        ],
      },
      equations: [
        {
          label: 'Nuclear Transformation Equations for Transuranic Elements',
          formula: '_{92}^{238}U + _{0}^{1}n → _{92}^{239}U → _{93}^{239}Np + _{−1}^{0}β\n_{93}^{239}Np → _{94}^{239}Pu + _{−1}^{0}β\n_{94}^{239}Pu + _{2}^{4}He → _{96}^{242}Cm + _{0}^{1}n',
          units: 'Nuclear Transmutation',
          note: 'Synthesizes Neptunium (Z=93), Plutonium (Z=94), and Curium (Z=96)',
        },
      ],
      examYears: ['2025', '2022', '2020', '2016'],
      marks: '4–5 Marks',
      professorTip:
        'Lanthanide Contraction (cause + consequences like Zr/Hf similarity and La(OH)₃ > Lu(OH)₃ basicity) is the #1 repeated question from Module 09 (asked in 2016, 2022, 2025, and on the Professor’s Important Questions sheet).',
    },
  ],
};

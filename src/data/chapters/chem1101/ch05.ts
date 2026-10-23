import type { ChapterNote } from '../../types';

export const CHEM1101_CH05: ChapterNote = {
  id: 'chem1101-ch05',
  unitNumber: 'Module 05',
  title: 'Solution and Colloid',
  summary:
    'Different Types of Solution, Concentration Units, Colloid and Colloidal Solution-Classification, Preparation, Purification, Properties, Protective Action and Application of Colloids.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m5-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Solutions Lecture Notes (Md. Mahabur Rahman, PUST) · PUST EECE 2025 Q4(a), 2023 Q4(a), 2015 Q4(a)',
      title: 'Solutions, Saturation States, Henry’s Law, and Concentration Units',
      summaryText:
        'Classification of binary solutions into 9 physical-state types and 3 saturation states (unsaturated, saturated, supersaturated), Henry’s law, and formulas for M, m, N, X, ppm, osM, and Eq/L.',
      memorizeStatements: [
        'True Solution: A homogeneous molecular mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits (particle diameter < 1 nm).',
        'Saturated Solution: A solution that contains the maximum amount of solute that can dissolve in a given amount of solvent at a specific temperature and exists in dynamic equilibrium with undissolved solute.',
        'Supersaturated Solution: A metastable solution that contains more dissolved solute than required for saturation at a given temperature (prepared by cooling a hot saturated solution without disturbance).',
        'Henry’s Law: At constant temperature, the solubility (C) of a gas in a liquid is directly proportional to the partial pressure (P) of the gas above the solution (C = k_H · P).',
        'Molarity (M): The number of moles of solute dissolved per liter (1000 mL) of solution (M = n / V_L = 1000 · w / (M_w · V_mL)).',
        'Molality (m): The number of moles of solute dissolved per kilogram (1000 g) of pure solvent (m = n / W_kg = 1000 · w / (M_w · W_g)).',
        'Normality (N): The number of gram-equivalents of solute dissolved per liter (1000 mL) of solution (N = n_e · M).',
        'Mole Fraction (X_A): The ratio of the number of moles of one component to the total number of moles of all components in the solution (X_A = n_A / (n_A + n_B), with X_A + X_B = 1).',
      ],
      bulletPoints: [
        'Why Molarity (M) and Normality (N) Change with Temperature While Molality (m) and Mole Fraction (X) Are Temperature-Independent (PUST 2024 Q1c, 2020 Q3a):',
        '• Molarity (M = n / V) and Normality (N = n_eq / V) contain the volume of solution (V) in the denominator. Since liquid volume expands on heating and contracts on cooling, M and N decrease as temperature rises.',
        '• Molality (m = n / W_solvent) and Mole Fraction (X = n_A / n_total) are defined purely in terms of masses and moles, which are completely independent of temperature.',
        'Comparison of 1 Molar (1 M) and 1 Molal (1 m) Aqueous Solutions (PUST 2025 Q2a):',
        '1. In a 1 M aqueous solution, 1 mole of solute is dissolved in enough water to make a total solution volume of exactly 1000 mL (1 L). Because the dissolved solute occupies part of that 1000 mL volume, the actual volume of water used is LESS than 1000 mL (so the mass of water is < 1000 g, as ρ_water ≈ 1 g/mL).',
        '2. In a 1 m aqueous solution, 1 mole of solute is dissolved in a full 1000 g (≈ 1000 mL) of water, making the total solution volume greater than 1000 mL.',
        '3. Because 1 M contains 1 mole of solute in less than 1000 g of water while 1 m contains 1 mole of solute in a full 1000 g of water, a 1 M aqueous solution is more concentrated than a 1 m aqueous solution of the same solute.',
        'Equivalents per Liter (Eq/L) and Osmolarity (osM) from Lecture Notes:',
        '• Equivalents per Liter: Eq/L = Molarity of ion × |Ionic charge| (e.g., 1 mol Fe₂(SO₄)₃ yields 2 mol Fe³⁺ = 6 Eq Fe³⁺ and 3 mol SO₄²⁻ = 6 Eq SO₄²⁻).',
        '• Osmolarity (osM): Total molarity of all dissociated particles in solution: osM = i · M (where i is the van’t Hoff dissociation factor; e.g., for NaCl, i = 2; for BaCl₂, i = 3).',
      ],
      equations: [
        {
          label: 'Molarity, Molality, and Normality',
          formula: 'M = (1000 · w) / (M_w · V_mL)\nm = (1000 · w) / (M_w · W_solvent(g))\nN = (1000 · w) / (E_w · V_mL) = n_valency · M',
          units: 'mol·L⁻¹, mol·kg⁻¹, equiv·L⁻¹',
          note: 'E_w = M_w / n_valency is the gram-equivalent weight',
        },
        {
          label: 'Dilution & Titration Equations',
          formula: 'M₁ V₁ = M₂ V₂\nN₁ V₁ = N₂ V₂',
          units: 'mol or equiv',
          note: 'Conserves moles/equivalents of solute during dilution or neutralization',
        },
      ],
      examYears: ['2025', '2024', '2023', '2020', '2015'],
      marks: '3–4 Marks',
    },
    {
      id: 'chem-m5-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 5, Part A Q15, Part B Q9) · PUST EECE 2025 Q4(c), 2024 Q4(a), 2023 Q4(b), 2022 Q4(a,c), 2021 Q4(a), 2020 Q3(c), 2020 Q4(a)',
      title: 'Colloidal State, 8-Type Classification, and Lyophilic vs. Lyophobic Sols',
      summaryText:
        'Comparison of true solution, colloid (1–1000 nm), and suspension; 8 colloidal systems based on dispersed phase and dispersion medium; and Lyophilic vs. Lyophobic colloids.',
      memorizeStatements: [
        'Colloidal Solution (Colloid): A heterogeneous two-phase system in which dispersed phase particles having diameters between 1 nm and 1000 nm (10⁻⁷ to 10⁻⁴ cm) are uniformly distributed in a continuous dispersion medium.',
        'Lyophilic (Solvent-Loving) Colloid: A reversible colloidal sol in which the dispersed phase has strong affinity (solvation/hydrogen bonding) for the dispersion medium (e.g., starch, gelatin, gum, albumin in water).',
        'Lyophobic (Solvent-Hating) Colloid: An irreversible colloidal sol in which the dispersed phase has little or no affinity for the dispersion medium and is easily precipitated by trace electrolytes (e.g., Au, Ag, As₂S₃, Fe(OH)₃ sols in water).',
        'Gel vs. Sol: A Sol is a liquid-like colloidal system in which a solid is dispersed in a liquid (e.g., paint, gold sol); a Gel is a semi-solid elastic network in which a liquid is dispersed in a solid (e.g., cheese, butter, jelly, curd).',
        'Emulsion vs. Aerosol: An Emulsion is a liquid dispersed in another immiscible liquid (e.g., milk, cod-liver oil); an Aerosol is a solid or liquid dispersed in a gas (e.g., smoke, fog, cloud, mist).',
      ],
      table: {
        caption: 'Table 5.1 — Eight Types of Colloidal Systems & Comparison of Lyophilic vs. Lyophobic Sols',
        headers: [
          'Dispersed Phase + Medium',
          'Colloid Name & Examples',
          'Lyophilic Sol Property',
          'Lyophobic Sol Property',
        ],
        rows: [
          [
            'Solid in Liquid / Liquid in Solid',
            'Sol (Gold sol, ink, paint) / Gel (Cheese, butter, jelly)',
            'Prepared directly by shaking or warming with solvent',
            'Prepared only by special indirect chemical or Bredig’s arc methods',
          ],
          [
            'Liquid in Liquid',
            'Emulsion (Milk, butter, vanishing cream)',
            'Reversible: residue reconstitutes sol on adding solvent',
            'Irreversible: once precipitated, does not reform sol with solvent',
          ],
          [
            'Liquid in Gas / Solid in Gas',
            'Liquid Aerosol (Fog, mist, cloud) / Solid Aerosol (Smoke, dust)',
            'Highly stable; requires large electrolyte excess (salting out) to coagulate',
            'Unstable; easily coagulated by trace amounts of electrolytes',
          ],
          [
            'Gas in Liquid / Gas in Solid',
            'Foam (Whipped cream, soap lather) / Solid Foam (Pumice stone, foam rubber)',
            'Viscosity is much higher and surface tension is lower than the medium',
            'Viscosity and surface tension are nearly identical to the pure medium',
          ],
          [
            'Solid in Solid',
            'Solid Sol (Ruby glass, gemstones, colored alloys)',
            'Weak or indistinct Tyndall effect due to heavy solvation',
            'Exhibits a strong, sharp Tyndall light-scattering cone',
          ],
        ],
      },
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
      marks: '4 Marks',
      professorTip:
        'Notice that Gas-in-Gas is ALWAYS a homogeneous true solution and NEVER a colloid, so there are exactly 8 (not 9) types of colloidal systems.',
    },
    {
      id: 'chem-m5-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 5 & Part C Q30) · PUST EECE 2024 Q4(b,c), 2022 Q4(b), 2021 Q4(c), 2016 Q3(d), 2015 Q4(c)',
      title: 'Preparation and Purification of Colloidal Solutions',
      summaryText:
        'Dispersion methods (Mechanical, Bredig’s Electro-Arc, Peptization), Condensation/Aggregation methods (Double decomposition, Oxidation, Reduction, Hydrolysis), and Purification (Dialysis, Electrodialysis, Ultrafiltration).',
      memorizeStatements: [
        'Peptization: The process of converting a freshly prepared precipitate into a colloidal sol by shaking it with a dispersion medium in the presence of a small amount of a suitable electrolyte (peptizing agent) sharing a common ion.',
        'Bredig’s Arc Method: An electro-dispersion and condensation process used to prepare hydrosols of noble metals (Au, Ag, Pt) by striking an electric arc between two metal electrodes immersed in ice-cold water containing a trace of KOH.',
        'Dialysis: The process of separating dissolved crystalloid (electrolyte) impurities from a colloidal sol by diffusion through a semi-permeable parchment or cellophane membrane.',
      ],
      bulletPoints: [
        'A. Dispersion Methods of Colloid Preparation (Breaking Larger Particles to 1–1000 nm) [PUST 2022 Q4b]:',
        '1. Mechanical Dispersion (Colloid Mill): The solid substance is ground with the dispersion medium between two steel discs rotating in opposite directions at high speed (~7000 rpm); used for colloidal ink, paint, and graphite lubricants.',
        '2. Bredig’s Electro-Disintegration (Arc) Method: Two rods of the metal (Au, Ag, or Pt) are immersed in water surrounded by a freezing mixture (ice + salt) with a trace of KOH stabilizer. When an electric arc is struck, intense heat vaporizes the metal, and the cold water immediately condenses the vapor into colloidal nanoparticles.',
        '3. Peptization: Freshly precipitated Fe(OH)₃ shaken with dilute FeCl₃ solution adsorbs common Fe³⁺ ions on its surface:\nFe(OH)₃(ppt) + Fe³⁺ → [Fe(OH)₃]Fe³⁺ (positively charged blood-red colloidal sol) due to mutual electrostatic repulsion.',
        'B. Condensation (Chemical Aggregation) Methods (Suggestion Q30, PUST 2022 Q4b):',
        '1. Double Decomposition: Passing H₂S gas through a dilute cold solution of arsenious oxide produces a yellow arsenious sulfide sol:\nAs₂O₃(aq) + 3H₂S(g) → As₂S₃(sol) + 3H₂O(l)',
        '2. Reduction: Reducing gold chloride (AuCl₃) with stannous chloride (SnCl₂) gives Purple of Cassius gold sol:\n2AuCl₃ + 3SnCl₂ → 2Au(sol) + 3SnCl₄',
        '3. Oxidation: Passing H₂S through SO₂ water or bromine water gives a colloidal sulfur sol:\n2H₂S + SO₂ → 3S(sol) + 2H₂O',
        '4. Hydrolysis: Dropwise addition of FeCl₃ to boiling water yields red ferric hydroxide sol:\nFeCl₃ + 3H₂O (boiling) → Fe(OH)₃(sol) + 3HCl',
        'C. Purification of Colloidal Solutions (PUST 2024 Q4b, 2021 Q4c, 2016 Q3d, 2015 Q4c):',
        '1. Dialysis: The impure sol is placed in a cellophane or parchment bag suspended in flowing distilled water. Small electrolyte ions diffuse out through the membrane pores while large colloidal particles (1–1000 nm) are retained.',
        '2. Electrodialysis: Applying an external DC electric field between two electrodes outside the dialysis bag greatly accelerates the outward migration of ionic impurities.',
        '3. Ultrafiltration: Ordinary filter paper pores (> 1000 nm) allow colloids to pass through. Impregnating filter paper with collodion (4% nitrocellulose in alcohol-ether) and hardening with formaldehyde creates an ultrafilter that retains colloidal particles while allowing water and crystalloids to pass under pressure/suction.',
      ],
      equations: [
        {
          label: 'Chemical Preparation of Sols',
          formula: 'As₂O₃ + 3H₂S → As₂S₃ (yellow sol) + 3H₂O\n2AuCl₃ + 3SnCl₂ → 2Au (ruby red sol) + 3SnCl₄\nFeCl₃ + 3H₂O (boiling) → Fe(OH)₃ (red sol) + 3HCl',
          units: 'Colloidal Aggregation',
          note: 'Peptization: Fe(OH)₃(s) + Fe³⁺(aq) → [Fe(OH)₃]·Fe³⁺(sol)',
        },
      ],
      examYears: ['2024', '2022', '2021', '2016', '2015'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m5-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 5, Part B Q10) · PUST EECE 2025 Q4(b), 2024 Q4(c), 2023 Q4(c), 2022 Q4(d), 2021 Q4(c), 2020 Q3(b), 2015 Q4(b)',
      title: 'Optical, Kinetic, Electrical, and Protective Properties of Colloids',
      summaryText:
        'Optical (Tyndall cone), kinetic (Brownian motion), electrical (Electrophoresis, Zeta potential), Coagulation (Hardy–Schulze Rule), and Protective Action (Gold Number).',
      memorizeStatements: [
        'Tyndall Effect: The optical scattering of a strong beam of light by colloidal particles when viewed at right angles to the incident beam, making the path of light visible as a bright illuminated cone (Tyndall cone).',
        'Brownian Motion: The continuous, rapid, random zig-zag motion of colloidal particles in the dispersion medium caused by unequal, unbalanced bombardment by solvent molecules.',
        'Electrophoresis (Cataphoresis): The migration of electrically charged colloidal particles toward the oppositely charged electrode (anode or cathode) under the influence of an applied DC electric field.',
        'Coagulation (Flocculation / Precipitation): The neutralization of electrical charge on colloidal particles by adding an electrolyte, causing them to aggregate into larger heavy particles that settle down as a precipitate.',
        'Hardy–Schulze Rule: The coagulating power of an added electrolyte depends on the sign of the counter-ion (flocculating ion) opposite to that of the sol and increases rapidly with the valency (charge magnitude) of the counter-ion (e.g., Al³⁺ > Ba²⁺ > Na⁺ for negative As₂S₃ sol).',
        'Gold Number (Zsigmondy): The minimum mass in milligrams (mg) of a protective lyophilic colloid which, when added to 10 mL of a standard red gold sol (0.0053–0.0058%), is just sufficient to prevent its coagulation (color change from red to violet-blue) upon the addition of 1 mL of a 10% NaCl solution.',
      ],
      bulletPoints: [
        'Key Properties of Colloidal Solutions Explained (PUST 2025 Q4b, 2024 Q4c, 2023 Q4c, 2022 Q4d):',
        '1. Tyndall Effect (Optical Property): True solutions are optically clear because solute particles (< 1 nm) are too small to scatter visible light (400–700 nm). Colloidal particles (1–1000 nm) scatter light in all directions, producing the bright Tyndall cone (basis of Zsigmondy’s ultramicroscope).',
        '2. Brownian Motion (Kinetic Property): Because of unbalanced impacts from surrounding solvent molecules, colloidal particles stay perpetually suspended in zig-zag motion, counteracting gravity and preventing sedimentation.',
        '3. Electrophoresis (Electrical Property): In a U-tube with Pt electrodes, negatively charged sols (like As₂S₃, Au, Ag, starch) migrate to the positive anode, while positively charged sols (like Fe(OH)₃, Al(OH)₃, hemoglobin) migrate to the negative cathode.',
        '4. Protective Action of Lyophilic Sols & Gold Number (PUST 2024 Q4c, 2022 Q4d, 2021 Q4c):',
        '• When a lyophilic colloid (like gelatin) is added to a hydrophobic sol (like gold sol), the lyophilic particles form a protective adsorbed monolayer envelope around the lyophobic particles, shielding them from coagulation by electrolytes.',
        '• Smaller the Gold Number, GREATER is the protective power of the lyophilic colloid: Gelatin (Gold Number = 0.005–0.01 mg, best protector) > Hemoglobin (0.03–0.07) > Gum Arabic (0.15–0.25) > Potato Starch (20–25 mg, poorest protector).',
        'Industrial and Everyday Applications of Colloids:',
        '• Cottrell Smoke Precipitator (high-voltage electrostatic coagulation of carbon/arsenic smoke particles), purification of drinking water by alum (Al³⁺ coagulates negatively charged clay particles), delta formation at river mouths, artificial rain by spraying charged sand/AgI on clouds, rubber plating, and sewage disposal.',
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020', '2015'],
      marks: '4.5–5 Marks',
      professorTip:
        'Short notes on Tyndall effect, Brownian motion, Dialysis, Electrophoresis, and Gold Number appear in almost every PUST exam (2015, 2020, 2021, 2022, 2023, 2024, 2025). Always state the inverse relationship: Protecting Power ∝ 1 / Gold Number.',
    },
    {
      id: 'chem-m5-b5',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [1],
      sourceCitation: 'PUST EECE 2021 Q4(b) · PUST EECE 2016 Q3(b) · Professor’s Suggestion Sheet Q28',
      title: 'Calculation of Molality, Molarity, Normality, and Mole Fraction of Solutions',
      summaryText:
        'Calculate molality, molarity, normality, and mole fraction for (i) 5 g NaCl in 1000 g water with density 0.997 g/mL (PUST 2021/2016) and (ii) 15 g diprotic acid (M = 60) in 250 mL solution (Suggestion Q28).',
      examYears: ['2021', '2016'],
      marks: '4 Marks',
      problemStatement:
        '(a) [PUST 2021 Q4b & 2016 Q3b]: 5 g of NaCl is dissolved in 1000 g of water. If the density of the resulting solution is 0.997 g/mL, calculate the molality, molarity, normality, and mole fraction of NaCl in the solution (Na = 23, Cl = 35.5).\n(b) [Suggestion Part C Q28]: 15 g of a diprotic acid (molecular weight = 60) is dissolved in water to make 250 mL of solution. Calculate the molarity and normality of the solution.',
      givenData: [
        'Part (a): Mass of NaCl (w) = 5 g; Molar mass of NaCl (M_w) = 23 + 35.5 = 58.5 g·mol⁻¹',
        'Mass of water (W) = 1000 g; Molar mass of H₂O = 18 g·mol⁻¹; Solution density ρ = 0.997 g·mL⁻¹',
        'Part (b): Mass of diprotic acid = 15 g; M_w = 60 g·mol⁻¹; Basicity n = 2; Volume V = 250 mL',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Part (a) — Moles and Molality (m) of NaCl Solution',
          explanation: 'Find moles of NaCl and H₂O, and divide moles of NaCl by 1 kg of water:',
          equation:
            'n(NaCl) = 5 / 58.5 = 0.08547 mol\nn(H₂O) = 1000 / 18 = 55.556 mol\nMolality (m) = 0.08547 mol / 1.000 kg = 0.0855 m (mol·kg⁻¹)',
        },
        {
          stepTitle: 'Step 2: Part (a) — Volume of Solution, Molarity (M), Normality (N), and Mole Fraction (X)',
          explanation:
            'Total mass of solution = 1000 + 5 = 1005 g. Divide by density ρ = 0.997 g/mL to find total volume V:',
          equation:
            'V_solution = 1005 g / 0.997 g·mL⁻¹ = 1008.02 mL = 1.00802 L\nMolarity (M) = 0.08547 mol / 1.00802 L = 0.0848 M (mol·L⁻¹)\nNormality (N) = 1 × M = 0.0848 N (equiv·L⁻¹)\nMole Fraction X(NaCl) = 0.08547 / (0.08547 + 55.556) = 0.001536',
        },
        {
          stepTitle: 'Step 3: Part (b) — Molarity and Normality of Diprotic Acid (Suggestion Q28)',
          explanation:
            'For a diprotic acid (n = 2), equivalent weight E_w = M_w / 2 = 60 / 2 = 30 g·equiv⁻¹:',
          equation:
            'Molarity (M) = (1000 × 15) / (60 × 250) = 15000 / 15000 = 1.0 M\nNormality (N) = n × M = 2 × 1.0 M = 2.0 N',
        },
      ],
      finalAnswer:
        '(a) m = 0.0855 m, M = 0.0848 M, N = 0.0848 N, X(NaCl) = 0.00154; (b) M = 1.0 M, N = 2.0 N',
    },
  ],
};

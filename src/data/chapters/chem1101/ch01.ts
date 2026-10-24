import type { ChapterNote } from '../../types';

export const CHEM1101_CH01: ChapterNote = {
  id: 'chem1101-ch01',
  unitNumber: 'Module 01',
  title: 'Electrochemistry',
  summary:
    'Fundamentals of Electrochemistry, Redox Reactions (Direct vs. Indirect), Conductors & Electrolytes, Arrhenius Ionization Theory, Ionic Mobility & Grotthuss Mechanism, Electrolytic Conductance (Specific, Equivalent, Molar), Debye–Hückel–Onsager Theory, Kohlrausch’s Law & Applications, Faraday’s Laws, and Electrolysis of Brine (NaCl).',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m1-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 1–4) · Class Lecture Notes (Oct 24, 2026) · PUST EECE Syllabus',
      title: 'Foundations of Electrochemistry: Direct vs. Indirect Redox Reactions',
      summaryText:
        'Definition of electrochemistry, classification of redox reactions into direct (same vessel) and indirect (separate half-cells), classical and electronic concepts of oxidation/reduction, and identification of oxidizing and reducing agents.',
      memorizeStatements: [
        'Electrochemistry: The branch of physical chemistry that deals with the study of conversion of chemical energy into electrical energy through spontaneous redox reactions, or the utilization of electrical energy to drive non-spontaneous chemical reactions.',
        'Direct Redox Reaction: A redox reaction where oxidation and reduction both take place in the same container; electrons are transferred directly from the reducing agent to the oxidizing agent, releasing energy as heat without producing electrical work.',
        'Indirect Redox Reaction: A redox reaction where oxidation and reduction occur in two separate half-cells connected by an external metallic wire and an internal salt bridge, converting chemical energy directly into electrical energy.',
        'Oxidizing Agent (Oxidant): A substance that gains electrons, undergoes reduction, and whose central atom exhibits a decrease in oxidation number.',
        'Reducing Agent (Reductant): A substance that donates (loses) electrons, undergoes oxidation, and whose central atom exhibits an increase in oxidation number.',
      ],
      bulletPoints: [
        'Definition and Scope of Electrochemistry (Professor’s Sheet Page 1 & 3):',
        '• Electrochemistry studies two complementary energy conversion pathways: (1) Galvanic / Voltaic Cells: Chemical Energy → Electrical Energy (Spontaneous, ΔG < 0), and (2) Electrolytic Cells: Electrical Energy → Chemical Energy (Non-spontaneous, driven by DC source, ΔG > 0).',
        '• Work Done in an Electrochemical Process: Work done = −ΔG. Electrical Work = Charge (Q) × Potential Difference (V) = n · F · E.',
        'Direct vs. Indirect Redox Reactions (Professor’s Sheet Page 1 & 4):',
        '• Direct Redox Reaction (Zinc Rod in Blue CuSO₄ Solution): When a zinc strip is dipped directly into aqueous CuSO₄ solution, zinc atoms spontaneously lose electrons directly to Cu²⁺ ions colliding at the surface: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). The blue color of Cu²⁺ fades, a reddish-brown spongy deposit of metallic copper settles, and the temperature of the beaker rises. Because electrons transfer locally within the same vessel, no directed electron current flows and the reaction free energy is lost as thermal heat.',
        '• Indirect Redox Reaction (Daniell Galvanic Cell): The oxidation half-reaction (Zn → Zn²⁺ + 2e⁻) is physically segregated into an anode beaker, and the reduction half-reaction (Cu²⁺ + 2e⁻ → Cu) is placed in a cathode beaker. Electrons are forced to traverse an external circuit wire, producing useful electric current before reaching Cu²⁺ ions.',
        'Representative Redox Reactions from Professor’s Sheet & Class Notes:',
        '1. Zinc with Copper Sulfate: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)\n   Ionic Form: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\n   • Oxidation half-reaction: Zn(s) → Zn²⁺(aq) + 2e⁻ (Zn loses electrons; oxidation state: 0 → +2; Zn is reducing agent).\n   • Reduction half-reaction: Cu²⁺(aq) + 2e⁻ → Cu(s) (Cu²⁺ gains electrons; oxidation state: +2 → 0; Cu²⁺ is oxidizing agent).',
        '2. Copper with Silver Nitrate: Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)\n   Ionic Form: Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s)\n   • Oxidation: Cu(s) → Cu²⁺(aq) + 2e⁻ (Cu is oxidized; reducing agent).\n   • Reduction: 2Ag⁺(aq) + 2e⁻ → 2Ag(s) (Ag⁺ is reduced; oxidizing agent).',
        '3. Zinc with Sulfuric Acid: Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)\n   Ionic Form: Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g)\n   • Oxidation: Zn(s) → Zn²⁺(aq) + 2e⁻ (Zn is oxidized; reducing agent).\n   • Reduction: 2H⁺(aq) + 2e⁻ → H₂(g) (H⁺ is reduced; oxidizing agent).',
        '4. Sodium with Water (Class Notebook Highlight): 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n   • Oxidation: 2Na(s) → 2Na⁺(aq) + 2e⁻ (Na is oxidized; reducing agent).\n   • Reduction: 2H₂O(l) + 2e⁻ → 2OH⁻(aq) + H₂(g) (Water/H⁺ is reduced; oxidizing agent).',
      ],
      table: {
        caption: 'Table 1.1 — Comprehensive Comparison of Oxidation and Reduction (Professor’s Sheet Page 1 & 2)',
        headers: ['Property', 'Oxidation (De-electronation)', 'Reduction (Electronation)'],
        rows: [
          ['Hydrogen', 'Loss of Hydrogen', 'Gain of Hydrogen'],
          ['Oxygen', 'Gain of Oxygen', 'Loss of Oxygen'],
          ['Electrons', 'Loss of Electrons (e⁻ released)', 'Gain of Electrons (e⁻ absorbed)'],
          ['Oxidation Number', 'Increase in Oxidation State (more positive)', 'Decrease in Oxidation State (less positive / more negative)'],
          ['Role of Substance', 'Acts as a Reducing Agent (Reductant)', 'Acts as an Oxidizing Agent (Oxidant)'],
          ['Electrode at which it occurs', 'Always occurs at the ANODE', 'Always occurs at the CATHODE'],
        ],
      },
      examYears: ['2025', '2024'],
      marks: '3–4 Marks',
      professorTip:
        'Notice the Concept Ladder highlighted in the professor’s sheet: In any spontaneous galvanic cell, the reduction potential of the reduction half-cell (cathode) is ALWAYS greater than that of the oxidation half-cell (anode): E°_cathode > E°_anode.',
    },
    {
      id: 'chem-m1-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 6–7) · CR Final Exam Question Bank (Q6) · PUST EECE 2025 Q2(b)',
      title: 'Electrical Conductors: Metallic vs. Electrolytic Conductors & Electrolytes',
      summaryText:
        'Detailed 5-point comparison between electronic (metallic) and electrolytic (solution) conductors, and rigorous classification of electrolytes into strong electrolytes, weak electrolytes, and non-electrolytes with exact chemical examples.',
      memorizeStatements: [
        'Conductor: Any material that permits the flow of electric current under the influence of an applied electric potential gradient.',
        'Electronic (Metallic) Conductor: A substance that conducts electric current entirely by the movement of mobile electrons within a metallic crystal lattice without any transport of matter or chemical alteration (e.g., Cu, Ag, Al, graphite).',
        'Electrolytic (Solution) Conductor: A substance that conducts electric current in the molten state or aqueous solution through the physical migration of solvated ions, accompanied by chemical decomposition at the electrodes.',
        'Strong Electrolyte: A substance that dissociates virtually 100% into ions in aqueous solution (degree of dissociation α ≈ 1) and forms a highly conducting medium (e.g., mineral acids, caustic alkalis, and almost all salts except CdBr₂ and HgCl₂).',
        'Weak Electrolyte: A substance that ionizes only to a small extent in aqueous solution (α ≪ 1) and establishes a dynamic equilibrium between unionized molecules and ions (e.g., carboxylic acids, H₃BO₃, HCN, ammonia, amines).',
        'Non-Electrolyte: A substance whose aqueous solution or liquid state does not conduct electricity because it does not form ions (e.g., ethyl alcohol, glycerol, cane sugar, urea).',
      ],
      bulletPoints: [
        'Classification of Conductors (Professor’s Sheet Page 6):',
        '• Conductors are fundamentally divided based on two criteria: (1) how they carry charge (electrons vs. ions), and (2) whether they undergo chemical change during current passage.',
        'Detailed 5-Point Comparison from Professor’s Sheet:',
        '1. Mechanism of Charge Transport: Metallic conductors allow current to pass in the metallic lattice by the drift of delocalized valence electrons (Cu, Ag, Au, Al, Fe). Electrolytic conductors allow current to pass in the molten state or aqueous solution by the movement of positive cations and negative anions (fused NaCl, aqueous NaCl, CuSO₄).',
        '2. Chemical Nature: In metallic conductors, only a physical change occurs during passage of current (heating due to Joule effect). In electrolytic conductors, both physical and chemical changes occur (electrochemical oxidation and reduction at electrodes).',
        '3. Transfer of Matter: Metallic conduction shows zero transfer of matter (mass of wire remains constant). Electrolytic conduction involves the physical transfer of matter in the form of migrating ions toward opposite electrodes.',
        '4. Effect of Temperature on Resistance & Conductance: In metallic conductors, resistance increases with temperature (conductance decreases) because thermal vibration of the metal lattice cations increases, causing greater hindrance/scattering of the electron flow. In electrolytic conductors, resistance decreases with temperature (conductance increases) because higher temperature decreases solvent viscosity, reduces ionic hydration shell radii, and increases the degree of dissociation and thermal speed of ions.',
        '5. Conducting Power: The conducting power of metals is very high (conductivity ~10⁴ to 10⁶ S·cm⁻¹). The conducting power of electrolytic solutions is relatively low (conductivity ~10⁻² to 10¹ S·cm⁻¹).',
        'Classification of Electrolytes from Professor’s Sheet (Page 7):',
        '• Strong Electrolytes: Completely dissociated at normal dilutions. (a) All common salts (NaCl, KCl, KNO₃, CuSO₄, AgNO₃) with specific exceptions noted by professor: CdBr₂ and HgCl₂; (b) Mineral acids: HCl, H₂SO₄, HNO₃; (c) Strong bases: NaOH, KOH, Ba(OH)₂.',
        '• Weak Electrolytes: Dissociate to a very small extent (typically α < 0.05). (a) Organic acids (CH₃COOH, HCOOH, oxalic acid; excluding sulfonic acids which are strong); (b) Weak inorganic acids: H₃BO₃ (boric acid), HCN, H₂CO₃, H₂S; (c) Weak bases: aqueous ammonia (NH₄OH), aliphatic and aromatic amines.',
      ],
      table: {
        caption: 'Table 1.2 — Five Fundamental Differences: Electronic vs. Electrolytic Conductors (Professor’s Sheet Page 6)',
        headers: ['Property', 'Electronic (Metallic) Conductors', 'Electrolytic (Solution) Conductors'],
        rows: [
          [
            '1. Charge Carriers',
            'Mobile valence electrons moving through the crystal lattice (Cu, Ag, Al, graphite)',
            'Positive cations and negative anions migrating through molten state or solution (NaCl, CuSO₄)',
          ],
          [
            '2. Nature of Change',
            'Only physical changes occur (ohmic heating; no new chemical bonds formed or broken)',
            'Both physical and chemical changes occur (electrochemical decomposition at electrodes)',
          ],
          [
            '3. Transfer of Matter',
            'Shows no transfer of matter; conductor mass is completely unchanged',
            'Involves actual physical transport of matter in the form of ions to the electrode interfaces',
          ],
          [
            '4. Temperature Effect',
            'Resistance increases as temperature rises (thermal lattice vibrations scatter electron waves)',
            'Resistance decreases as temperature rises (decreased viscosity, reduced hydration, increased mobility)',
          ],
          [
            '5. Conducting Power',
            'Extremely high conducting power (specific resistance ρ is very low)',
            'Relatively low conducting power compared to metals (governed by ionic concentration and mobility)',
          ],
        ],
      },
      examYears: ['2025', '2024'],
      marks: '4 Marks',
      professorTip:
        'When listing strong vs. weak electrolytes, always mention the professor’s explicit exceptions: CdBr₂ and HgCl₂ are salts that behave as weak electrolytes due to high covalent bonding character.',
    },
    {
      id: 'chem-m1-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 11–13) · PUST EECE 2021 Q3(a)',
      title: 'Arrhenius Theory of Electrolytic Dissociation (Ionization)',
      summaryText:
        'Six foundational postulates of the Arrhenius ionization theory (1887), ionic equilibrium in solution, dissociation constant K, and migration of ions under an applied electric field.',
      memorizeStatements: [
        'Postulate 1: When dissolved in water, neutral electrolyte molecules spontaneously dissociate into two types of charged particles termed ions: positively charged cations and negatively charged anions.',
        'Postulate 2: In solution, ions constantly reunite to form neutral molecules, establishing a dynamic chemical equilibrium: AB ⇌ A⁺ + B⁻.',
        'Postulate 3: The Law of Mass Action applies to the ionic equilibrium: K = ([A⁺][B⁻]) / [AB], where K is the dissociation (ionization) constant of the electrolyte.',
        'Postulate 4: Under an electric field, charged ions migrate independently toward oppositely charged electrodes (cations to cathode, anions to anode); this ion migration constitutes the electric current.',
        'Postulate 5: The electrical conductivity of an electrolytic solution depends on the total number and speed of ions present; degree of dissociation α = Λ_m / Λ_m° determines electrolyte strength.',
        'Postulate 6: The chemical and physical properties of electrolytic solutions are the collective properties of their constituent ions (e.g., H⁺ ions impart acidity; OH⁻ ions impart basicity).',
      ],
      bulletPoints: [
        'Six Postulates of Arrhenius Theory (Professor’s Sheet Pages 11–13):',
        '1. Formation of Ions: An electrolyte in the solid state is held together by electrostatic forces. When placed in water (a solvent with high dielectric constant, ε_r ≈ 80), the electrostatic attraction between ions is weakened by a factor of 80, permitting neutral molecules to dissociate into separate solvated cations and anions: A⁺B⁻ → A⁺ + B⁻.',
        '2. Dynamic Equilibrium: In weak electrolytes, dissociation is incomplete and a reversible dynamic equilibrium exists between undissociated neutral molecules and free ions: AB ⇌ A⁺ + B⁻.',
        '3. Dissociation Constant: Applying the Law of Mass Action to the ionic equilibrium yields the dissociation constant:\nK = ([A⁺][B⁻]) / [AB]\nFor a binary electrolyte of concentration C and degree of dissociation α, [A⁺] = Cα, [B⁻] = Cα, and [AB] = C(1 − α), yielding Ostwald’s dilution law: K = (Cα²) / (1 − α).',
        '4. Migration of Ions (Fig. 1 in Sheet): When an external DC potential is applied between two electrodes immersed in the electrolyte, cations (positively charged) migrate toward the negative electrode (cathode), and anions (negatively charged) migrate toward the positive electrode (anode). For example, in an aqueous solution of AgNO₃, Ag⁺ ions migrate to the cathode and NO₃⁻ ions migrate to the anode.',
        '5. Conductivity and Degree of Dissociation: The specific and molar conductivities depend directly on the ionic population in solution. For weak electrolytes, Arrhenius proposed that the degree of dissociation at concentration C is given by the conductance ratio:\nα = Λ_m / Λ_m°',
        '6. Complete vs. Partial Dissociation: Strong electrolytes (e.g., Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻, NaCl, KCl, AgNO₃) undergo complete dissociation into stoichiometric quantities of ions. Weak electrolytes (e.g., CH₃COOH ⇌ CH₃COO⁻ + H⁺) remain predominantly unionized in solution.',
      ],
      equations: [
        {
          label: 'Arrhenius Ionic Equilibrium Constant',
          formula: 'K = ([A⁺][B⁻]) / [AB] = (C · α²) / (1 − α)',
          units: 'mol·L⁻¹',
          note: 'For weak electrolytes where α ≪ 1, K ≈ C · α²',
        },
        {
          label: 'Arrhenius Degree of Dissociation',
          formula: 'α = Λ_m / Λ_m°',
          units: 'dimensionless (0 ≤ α ≤ 1)',
          note: 'Valid for weak electrolytes; fails for strong electrolytes which are 100% ionized',
        },
      ],
      examYears: ['2021'],
      marks: '3.5–4 Marks',
      professorTip:
        'Be ready to state both the success of Arrhenius theory (explains weak electrolytes and Ostwald dilution law) and its primary limitation: it incorrectly assumed strong electrolytes are partially dissociated at moderate concentrations, whereas Debye–Hückel proved strong electrolytes are 100% ionized.',
    },
    {
      id: 'chem-m1-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 14–15) · PUST EECE 2025 Q1(a), 2023 Q1(c), 2022 Q1(d)',
      title: 'Ionic Mobility and Abnormal Mobility of H⁺ and OH⁻',
      summaryText:
        'Definition, formula u = λ/F, units cm²·V⁻¹·s⁻¹, exact mobility values for H⁺, OH⁻, Na⁺, Cl⁻ from the professor’s sheet, and the Grotthuss proton-hopping mechanism.',
      memorizeStatements: [
        'Ionic Mobility (u): The steady-state drift velocity attained by an ion in cm·s⁻¹ (or m·s⁻¹) under the influence of a unit electric potential gradient (1 V·cm⁻¹ or 1 V·m⁻¹) at infinite dilution.',
        'Ionic Mobility Expression: u = λ / F = (Ionic Conductance at infinite dilution) / (96,500 C·mol⁻¹).',
        'Units of Ionic Mobility: cm²·V⁻¹·s⁻¹ (in CGS) or m²·V⁻¹·s⁻¹ (in SI).',
        'Abnormal Mobility of H⁺ and OH⁻: In aqueous solution, H⁺ (36.3 × 10⁻⁴ cm²·V⁻¹·s⁻¹) and OH⁻ (20.5 × 10⁻⁴ cm²·V⁻¹·s⁻¹) have drastically higher ionic mobilities than all other ions due to the Grotthuss proton-hopping (relay) mechanism.',
      ],
      bulletPoints: [
        'Mathematical Formulation of Ionic Mobility (Professor’s Sheet Page 14):',
        '1. When an electric field E = V / l (potential gradient) is applied across an electrolytic solution, an ion experiences an electrostatic driving force F_el = z · e · E countered by Stokes’ hydrodynamic viscous drag F_drag = 6πηrv.',
        '2. At terminal velocity v, these opposing forces balance, making velocity proportional to field strength: v = u · E.',
        '3. Hence, Ionic Mobility is:\nu = v / E = (cm / s) / (V / cm) = cm²·V⁻¹·s⁻¹',
        '4. Fundamental Relation with Limiting Ionic Conductance λ°:\nu = λ° / F   or   λ° = u · F = u · 96,500 C·mol⁻¹',
        'Table of Exact Mobility Values from Professor’s Sheet (Page 15):',
        '• H⁺ ion mobility: 36.3 × 10⁻⁴ cm²·V⁻¹·s⁻¹ (Highest of all cations)',
        '• OH⁻ ion mobility: 20.5 × 10⁻⁴ cm²·V⁻¹·s⁻¹ (Highest of all anions)',
        '• Na⁺ ion mobility: 5.2 × 10⁻⁴ cm²·V⁻¹·s⁻¹',
        '• Cl⁻ ion mobility: 7.9 × 10⁻⁴ cm²·V⁻¹·s⁻¹',
        'Why H⁺ and OH⁻ Show Abnormally High Mobility (Grotthuss Mechanism):',
        '• Normal ions like Na⁺ (5.2 × 10⁻⁴) and Cl⁻ (7.9 × 10⁻⁴) must drag their tightly held hydration shells through the bulk viscous solvent (hydrodynamic migration).',
        '• In contrast, H⁺ exists in water as hydronium ions (H₃O⁺) embedded in a hydrogen-bonded water cluster network (H₉O₄⁺).',
        '• Under an electric field, a proton does not travel across the solution; instead, it hops along an adjacent hydrogen bond to a neighboring water molecule, converting a covalent O—H bond into a hydrogen bond and vice versa:',
        '  H₂O—H⁺ ⋯ OH₂ ⋯ OH₂ → H₂O ⋯ H—O⁺H₂ ⋯ OH₂ → H₂O ⋯ H₂O ⋯ H—O⁺H₂',
        '• This relay / bucket-brigade process transfers positive charge across long molecular chains almost instantaneously without requiring bulk physical motion of the hydronium ion.',
        '• Similarly, OH⁻ migrates rapidly by accepting a proton (proton hole transfer) from adjacent water molecules in the reverse direction.',
      ],
      equations: [
        {
          label: 'Ionic Mobility Formula',
          formula: 'u = λ / F = λ / 96500',
          units: 'cm²·V⁻¹·s⁻¹',
          note: 'λ is limiting molar ionic conductivity in S·cm²·mol⁻¹',
        },
        {
          label: 'Molar Conductivity from Ionic Mobilities',
          formula: 'Λ_m° = F · (u₊° + u₋°)',
          units: 'S·cm²·mol⁻¹',
          note: 'Proves molar conductivity is directly governed by ionic mobilities',
        },
      ],
      examYears: ['2025', '2023', '2022'],
      marks: '3–4 Marks',
      professorTip:
        'In the exam (PUST 2025 Q1a / 2023 Q1c), quote the exact numerical mobility values from the sheet: H⁺ (36.3 × 10⁻⁴) is ~7 times faster than Na⁺ (5.2 × 10⁻⁴), and draw the 1-line Grotthuss proton relay diagram.',
    },
    {
      id: 'chem-m1-b5',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Page 15) · PUST EECE 2024 Q1(b), 2021 Q1(a)',
      title: 'Conductance, Specific Conductance, and Molar Conductivity',
      summaryText:
        'Definitions, units, cell constant formula, step-by-step derivation of Λ_m = (1000·κ)/C, and the effect of dilution on specific vs. molar conductivity.',
      memorizeStatements: [
        'Electrical Conductance (G): The reciprocal of electrical resistance (G = 1/R), measured in Siemens (S = Ω⁻¹).',
        'Specific Conductance / Conductivity (κ): The conductance of a unit volume (1 cm³ or 1 m³) of electrolytic solution placed between two parallel electrodes of unit cross-sectional area separated by unit distance: κ = (1/R) · (l/A) = G · K_cell.',
        'Molar Conductivity (Λ_m): The conducting power of all the ions produced by dissolving 1 mole of an electrolyte in a given volume V (cm³) of solution: Λ_m = (κ × 1000) / C, where C is concentration in mol·L⁻¹.',
        'Cell Constant (K_cell): The geometric factor of the conductivity cell, K_cell = l / A = κ · R (in cm⁻¹ or m⁻¹).',
      ],
      bulletPoints: [
        'Mathematical Derivation of Molar Conductivity Formula (Professor’s Sheet Page 15):',
        '1. Specific conductance κ is the conductance of 1 cm³ of solution between parallel electrodes 1 cm apart.',
        '2. If a solution containing 1 mole of electrolyte has a volume V_m in cm³, the total conductance of this volume between electrodes 1 cm apart is:\nΛ_m = κ × V_m',
        '3. If the molar concentration of the solution is C mol·L⁻¹ (moles per 1000 cm³), then C moles are present in 1000 cm³.',
        '4. Therefore, the volume V_m containing exactly 1 mole of electrolyte is:\nV_m = 1000 / C cm³',
        '5. Substituting V_m into step 2 gives the master formula:\nΛ_m = (κ × 1000) / C',
        '6. Units: κ in S·cm⁻¹ and C in mol·L⁻¹ (mol·1000⁻¹ cm⁻³) yields Λ_m in S·cm²·mol⁻¹.',
        'Effect of Dilution on Conductance:',
        '• Specific Conductivity (κ) DECREASES on dilution because the number of current-carrying ions per unit volume (1 cm³) decreases as solvent is added.',
        '• Molar Conductivity (Λ_m) INCREASES on dilution because the volume V containing 1 mole increases much faster than κ decreases, and inter-ionic attraction weakens (for strong electrolytes) or ionization increases (for weak electrolytes).',
      ],
      equations: [
        {
          label: 'Specific Conductivity & Cell Constant',
          formula: 'κ = (1 / R) · (l / A) = G · K_cell',
          units: 'S·cm⁻¹ or S·m⁻¹',
          note: 'K_cell = l / A (cm⁻¹)',
        },
        {
          label: 'Molar Conductivity Relation',
          formula: 'Λ_m = (κ × 1000) / C',
          units: 'S·cm²·mol⁻¹',
          note: 'C is molar concentration in mol·L⁻¹',
        },
      ],
      examYears: ['2024', '2021'],
      marks: '3.5–4 Marks',
      professorTip:
        'Always explain clearly why κ decreases while Λ_m increases upon dilution. This contrast is a favorite viva and CT question.',
    },
    {
      id: 'chem-m1-b6',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 16–17) · PUST EECE 2021 Q3(a)',
      title: 'Limiting Molar Conductivity and Debye–Hückel–Onsager Equation',
      summaryText:
        'Limiting molar conductivity Λ_m°, Onsager equation (1923), asymmetry and electrophoretic drag effects, and comparative analysis of Λ_m vs. √C plots for strong (KCl) vs. weak (CH₃COOH) electrolytes.',
      memorizeStatements: [
        'Limiting Molar Conductivity (Λ_m°): The molar conductivity of an electrolytic solution as the concentration approaches zero (infinite dilution), where inter-ionic attractions become negligible.',
        'Debye–Hückel–Onsager Equation (1923): Λ_m = Λ_m° − (A + B · Λ_m°)√C, simplified as Λ = Λ° − b√C, describing the linear decrease of molar conductivity with √C for strong electrolytes.',
        'Asymmetry (Relaxation) Effect (Constant B): The electrostatic retardation on a central moving ion caused by the lag in rebuilding its oppositely charged ionic atmosphere.',
        'Electrophoretic Effect (Constant A): The counter-current viscous drag exerted on a central ion by solvent molecules moving with the oppositely charged ionic atmosphere.',
      ],
      bulletPoints: [
        'Debye–Hückel–Onsager Conductance Theory (Professor’s Sheet Pages 16–17):',
        '• Strong electrolytes are 100% ionized at all concentrations. The decrease of Λ_m at finite concentrations is not due to incomplete ionization, but due to electrostatic inter-ionic attractions within the ionic atmosphere.',
        '• The Onsager equation mathematically quantifies this retarding effect:\nΛ_m = Λ_m° − (A + B · Λ_m°)√C\nwhere A is the electrophoretic coefficient and B is the asymmetry (relaxation) coefficient.',
        '• In simplified form: Λ = Λ° − b√C (where b = A + B·Λ° is a constant for a given solvent and temperature).',
        'Physical Meaning of the Equation (Professor’s Sheet Page 17):',
        '• At higher concentration, ions are crowded closer together and strongly attract counter-ions, increasing the backward drag (mobility decreases, so Λ falls).',
        '• A plot of Λ_m versus √C for strong electrolytes (e.g., KCl) yields a straight line with slope −b and y-intercept equal to Λ_m°.',
        'Why Extrapolation Fails for Weak Electrolytes (Professor’s Sheet Page 17):',
        '• For a strong electrolyte (KCl), extrapolating the linear Λ_m vs. √C curve to C = 0 readily gives the limiting molar conductivity Λ_m°.',
        '• For a weak electrolyte (e.g., CH₃COOH), the degree of ionization α is very low at moderate concentrations, but shoots up asymptotically as C → 0. Consequently, the curve bends steeply upward and becomes practically parallel to the y-axis.',
        '• Extrapolation to the y-axis is mathematically impossible; hence, Λ_m° for weak electrolytes cannot be determined experimentally by extrapolation and MUST be determined indirectly using Kohlrausch’s Law.',
      ],
      equations: [
        {
          label: 'Debye–Hückel–Onsager Equation (1923)',
          formula: 'Λ_m = Λ_m° − (A + B · Λ_m°)√C',
          units: 'S·cm²·mol⁻¹',
          note: 'A represents electrophoretic effect, B represents relaxation effect',
        },
        {
          label: 'Simplified Onsager Form',
          formula: 'Λ = Λ° − b√C',
          units: 'S·cm²·mol⁻¹',
          note: 'Linear plot of Λ vs √C for strong electrolytes with intercept Λ°',
        },
      ],
      examYears: ['2021'],
      marks: '4 Marks',
      professorTip:
        'When sketching the Λ_m vs. √C graph (Page 17 of professor’s sheet), draw two curves on the same axes: (1) KCl: a gentle straight line that cleanly intercepts the y-axis at Λ°(KCl), and (2) CH₃COOH: a steep hyperbolic curve that runs parallel to the y-axis as √C → 0.',
    },
    {
      id: 'chem-m1-b7',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 17–21) · CR Final Exam Question Bank (Q2) · PUST EECE 2025 Q1(b), 2022 Q1(d), 2021 Q1(c)',
      title: 'Kohlrausch’s Law of Independent Migration of Ions',
      summaryText:
        'Statement of Kohlrausch’s Law (1897), general formula Λ_m° = ν₊λ₊° + ν₋λ₋°, stoichiometry examples (KCl, MgCl₂), and comprehensive coverage of all six applications from the professor’s sheet.',
      memorizeStatements: [
        'Kohlrausch’s Law of Independent Migration of Ions (1897): At infinite dilution, when all inter-ionic interactions vanish, each ion migrates completely independently of its co-ion and makes a definite, constant contribution to the total limiting molar (or equivalent) conductivity of the electrolyte.',
        'Mathematical Formula: Λ_m° = ν₊ · λ₊° + ν₋ · λ₋°, where ν₊ and ν₋ are the stoichiometric numbers of cations and anions released per formula unit, and λ₊°, λ₋° are the limiting ionic conductivities.',
        'Kohlrausch for KCl: Λ°(KCl) = λ°(K⁺) + λ°(Cl⁻).',
        'Kohlrausch for MgCl₂: Λ°(MgCl₂) = λ°(Mg²⁺) + 2λ°(Cl⁻) (because MgCl₂ → Mg²⁺ + 2Cl⁻).',
      ],
      bulletPoints: [
        'Statement and Principle of Kohlrausch’s Law (Professor’s Sheet Pages 17–18):',
        '• At infinite dilution, the solvent separates ions so widely that electrostatic forces between cations and anions are completely extinguished. Consequently, the contribution of an ion (e.g., Cl⁻) to conductivity is identical whether its partner is Na⁺, K⁺, or H⁺.',
        '• General formulation: Λ_m° = ν₊λ₊° + ν₋λ₋° (Molar) and Λ_eq° = λ₊°(eq) + λ₋°(eq) (Equivalent).',
        'Six Major Applications of Kohlrausch’s Law (Professor’s Sheet Pages 20–21):',
        '1. Determination of Limiting Molar Conductivity (Λ°) of Strong Electrolytes: Directly sum individual limiting ionic conductivities: Λ° = λ₊° + λ₋°.',
        '2. Determination of Ionic Conductivity and Mobility: By knowing Λ° and transport numbers, individual ionic conductivities λ are obtained, enabling calculation of absolute ionic mobilities: u = λ / F.',
        '3. Determination of Limiting Molar Conductivity (Λ°) of Weak Electrolytes: Weak electrolytes like CH₃COOH cannot be extrapolated. By combining Λ° values of three appropriate strong electrolytes (CH₃COONa, HCl, NaCl):\nΛ°(CH₃COOH) = Λ°(CH₃COONa) + Λ°(HCl) − Λ°(NaCl)\n= [λ°(CH₃COO⁻) + λ°(Na⁺)] + [λ°(H⁺) + λ°(Cl⁻)] − [λ°(Na⁺) + λ°(Cl⁻)] = λ°(CH₃COO⁻) + λ°(H⁺).',
        '4. Determination of Degree of Dissociation (α) and Ionization Constant (K_a) of Weak Electrolytes:\nα = Λ_m / Λ_m°\nSubstituting α into Ostwald’s dilution law yields: K_a = (C · α²) / (1 − α) = [C · (Λ_m)²] / [Λ_m°(Λ_m° − Λ_m)].',
        '5. Calculation of Conductivity of Mixed Electrolytes: For solutions containing multiple non-reacting electrolytes, the overall conductivity is predicted by summing the individual ionic conductivities.',
        '6. Determination of Solubility and Solubility Product (K_sp) of Sparingly Soluble Salts: A saturated solution of a sparingly soluble salt (AgCl, BaSO₄, PbSO₄, AgI) is so dilute that Λ_m ≈ Λ_m°. From measured specific conductivity κ_salt:\nSolubility S = (1000 · κ_salt) / Λ_m° (mol·L⁻¹)\nand K_sp = S² (for 1:1 salt like AgCl or AgI).',
      ],
      equations: [
        {
          label: 'Kohlrausch’s Law (General Form)',
          formula: 'Λ_m° = ν₊ · λ₊° + ν₋ · λ₋°',
          units: 'S·cm²·mol⁻¹',
          note: 'For MgCl₂: Λ° = λ°(Mg²⁺) + 2λ°(Cl⁻)',
        },
        {
          label: 'Degree of Dissociation & Solubility',
          formula: 'α = Λ_m / Λ_m°\nS = (1000 · κ_salt) / Λ_m°',
          units: 'dimensionless and mol·L⁻¹',
          note: 'κ_salt = κ_solution − κ_water',
        },
      ],
      examYears: ['2025', '2022', '2021'],
      marks: '4 Marks',
      professorTip:
        'The professor’s sheet explicitly lists six applications of Kohlrausch’s law on pages 20–21. Make sure to list all six, not just weak electrolyte Λ° calculation.',
    },
    {
      id: 'chem-m1-b8',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 19–20) · PUST EECE 2025 Exam Q1(c)',
      title: 'Kohlrausch’s Law Calculation for Sparingly Soluble AgI',
      summaryText:
        'Step-by-step calculation of the limiting molar conductivity of AgI at 25°C from NaI (12.69), NaNO₃ (12.16), and AgNO₃ (13.34 mS·m²·mol⁻¹).',
      examYears: ['2025'],
      marks: '4 Marks',
      problemStatement:
        'The limiting molar conductivities of NaI, NaNO₃, and AgNO₃ are 12.69, 12.16, and 13.34 milli-Siemens (metre)² mol⁻¹ (mS·m²·mol⁻¹) respectively at 25°C. Calculate the limiting molar conductivity of AgI at this temperature.',
      givenData: [
        'Λ_m°(NaI) = 12.69 mS·m²·mol⁻¹',
        'Λ_m°(NaNO₃) = 12.16 mS·m²·mol⁻¹',
        'Λ_m°(AgNO₃) = 13.34 mS·m²·mol⁻¹',
        'Temperature T = 25°C (298 K)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Write Kohlrausch expressions for each given strong electrolyte',
          explanation:
            'By Kohlrausch’s Law of independent migration of ions, expand each 1:1 electrolyte into its constituent ionic conductivities:',
          equation:
            'Λ_m°(NaI) = λ°(Na⁺) + λ°(I⁻) = 12.69 mS·m²·mol⁻¹   ......(1)\nΛ_m°(NaNO₃) = λ°(Na⁺) + λ°(NO₃⁻) = 12.16 mS·m²·mol⁻¹   ......(2)\nΛ_m°(AgNO₃) = λ°(Ag⁺) + λ°(NO₃⁻) = 13.34 mS·m²·mol⁻¹   ......(3)',
        },
        {
          stepTitle: 'Step 2: Express target electrolyte AgI in terms of its ions',
          explanation: 'The limiting molar conductivity of AgI is given by:',
          equation: 'Λ_m°(AgI) = λ°(Ag⁺) + λ°(I⁻)',
        },
        {
          stepTitle: 'Step 3: Combine equations (1), (2), and (3) algebraically',
          explanation:
            'To isolate λ°(Ag⁺) + λ°(I⁻), add equations (1) and (3), then subtract equation (2):',
          equation:
            'Operation: Eq.(1) + Eq.(3) − Eq.(2)\nΛ_m°(AgI) = [λ°(Na⁺) + λ°(I⁻)] + [λ°(Ag⁺) + λ°(NO₃⁻)] − [λ°(Na⁺) + λ°(NO₃⁻)]\nΛ_m°(AgI) = Λ_m°(NaI) + Λ_m°(AgNO₃) − Λ_m°(NaNO₃)',
        },
        {
          stepTitle: 'Step 4: Substitute the numerical values',
          explanation: 'Insert the given limiting molar conductivity values:',
          equation:
            'Λ_m°(AgI) = 12.69 + 13.34 − 12.16\nΛ_m°(AgI) = 26.03 − 12.16\nΛ_m°(AgI) = 13.87 milli-Siemens (metre)² mol⁻¹',
        },
      ],
      finalAnswer:
        'Limiting molar conductivity of AgI, Λ_m°(AgI) = 13.87 mS·m²·mol⁻¹ (at 25°C)',
    },
    {
      id: 'chem-m1-b9',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1) · CR Final Exam Question Bank (Q1 & Q5) · PUST EECE 2025, 2023, 2022, 2021, 2015',
      title: 'Faraday’s First and Second Laws of Electrolysis',
      summaryText:
        'Statement and mathematical formulation of Faraday’s First Law (W = Z·I·t), Second Law (W₁/W₂ = E₁/E₂), electrochemical equivalent Z = E/F, and Faraday’s constant F = 96,500 C·mol⁻¹.',
      memorizeStatements: [
        'Faraday’s First Law of Electrolysis: The mass (W) of any substance deposited or liberated at an electrode during electrolysis is directly proportional to the total electric charge (Q = I · t) passed through the electrolyte: W = Z · I · t.',
        'Electrochemical Equivalent (Z): The mass of a substance deposited or liberated when 1 Coulomb of electric charge is passed through the electrolyte (Z = W / Q = E / 96,500 g·C⁻¹).',
        'Faraday’s Second Law of Electrolysis: When the same quantity of electric charge is passed through solutions of different electrolytes connected in series, the masses of different substances deposited at the electrodes are directly proportional to their chemical equivalent weights: W₁ / W₂ = E₁ / E₂ = Z₁ / Z₂.',
        'One Faraday (1 F): The total electric charge carried by one mole of electrons: 1 F = N_A · e = (6.022 × 10²³)(1.602 × 10⁻¹⁹ C) = 96,485 C·mol⁻¹ ≈ 96,500 C·mol⁻¹.',
      ],
      bulletPoints: [
        'Derivation of First Law Formula: W ∝ Q = I · t ⟹ W = Z · I · t.',
        'Derivation of Second Law Formula: When the same charge Q passes through two cells in series, W₁ = Z₁Q and W₂ = Z₂Q, so W₁ / W₂ = Z₁ / Z₂. Since W₁ / W₂ = E₁ / E₂, we have E₁ / Z₁ = E₂ / Z₂ = constant = F (96,500 C·mol⁻¹).',
        'Master Electrolysis Equation: W = (E · I · t) / 96500 = (M · I · t) / (n · 96500), where M is atomic mass and n is valence change.',
      ],
      equations: [
        {
          label: 'Faraday’s First Law',
          formula: 'W = Z · I · t',
          units: 'g',
          note: 'Z in g·C⁻¹, I in A, t in s',
        },
        {
          label: 'Faraday’s Second Law & Master Equation',
          formula: 'W₁ / W₂ = E₁ / E₂ = Z₁ / Z₂\nW = (M · I · t) / (n · 96500)',
          units: 'dimensionless and g',
          note: '1 F = 96,500 C·mol⁻¹',
        },
      ],
      examYears: ['2025', '2023', '2022', '2021', '2015'],
      marks: '4 Marks',
      professorTip:
        'This is the most asked numerical and theoretical topic across 5 past semester papers. Always show Z = E / 96500 linking both laws.',
    },
    {
      id: 'chem-m1-b10',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 22–24) · Class Lecture Notes (Oct 24, 2026: "Exam! Brine solution: Electrolytic explanation NaCl(aq)") · PUST EECE 2025 Q2(b)',
      title: 'Electrolysis of Aqueous NaCl (Brine Solution) — Exam Focus',
      summaryText:
        'Apparatus, complete ionization equilibria, competitive electrode discharges, cathodic reduction of H⁺ over Na⁺, anodic oxidation of Cl⁻ over OH⁻ (overpotential effect), and net industrial chlor-alkali reaction.',
      memorizeStatements: [
        'Brine Solution: A concentrated aqueous solution of sodium chloride (NaCl) containing Na⁺, Cl⁻, and traces of H⁺ and OH⁻ from the self-ionization of water.',
        'Cathode Reaction (Negative Electrode): 2H⁺(aq) + 2e⁻ → H₂(g)↑ (or 2H₂O(l) + 2e⁻ → H₂(g)↑ + 2OH⁻(aq)). H⁺ is discharged preferentially because its standard reduction potential is much higher than that of Na⁺.',
        'Anode Reaction (Positive Electrode): 2Cl⁻(aq) → Cl₂(g)↑ + 2e⁻. Cl⁻ is discharged preferentially over OH⁻ because of high Cl⁻ concentration and the high overpotential required to evolve O₂ gas.',
        'Net Cell Reaction: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑ + Cl₂(g)↑.',
        'Products of Brine Electrolysis: Hydrogen gas (H₂) at the cathode, Chlorine gas (Cl₂) at the anode, and Sodium Hydroxide (NaOH) remaining in solution.',
      ],
      bulletPoints: [
        'Apparatus and Setup (Professor’s Sheet Pages 22–23):',
        '• An electrolytic cell containing two inert electrodes (carbon / graphite or platinized titanium) connected to an external DC battery / power supply.',
        '• Electrolyte: Concentrated aqueous sodium chloride solution (brine).',
        'Ions Present in Solution (Professor’s Sheet Page 23):',
        '1. Complete ionization of salt: NaCl(aq) → Na⁺(aq) + Cl⁻(aq) (provides high concentrations of Na⁺ and Cl⁻).',
        '2. Self-ionization of water: H₂O(l) ⇌ H⁺(aq) + OH⁻(aq) (provides low concentrations of H⁺ and OH⁻).',
        'Detailed Negative Cathode (−) Reaction (Professor’s Sheet Pages 23–24):',
        '• The negative cathode attracts both cations: Na⁺ and H⁺.',
        '• Two competing reduction reactions are possible:\n  (a) Na⁺(aq) + e⁻ → Na(s)   [E° = −2.71 V]\n  (b) 2H⁺(aq) + 2e⁻ → H₂(g)   [E° = 0.00 V (at pH 0), or −0.41 V (at pH 7)]',
        '• The standard reduction potential of H⁺ is much more positive (−0.83 V / 0.00 V) than that of Na⁺ (−2.71 V). The more reactive a metal, the less readily its cation is reduced.',
        '• Therefore, H⁺ ions gain electrons and are reduced preferentially to form bubbles of hydrogen gas (H₂) on the cathode surface.',
        'Detailed Positive Anode (+) Reaction (Professor’s Sheet Page 24):',
        '• The positive anode attracts both anions: Cl⁻ and OH⁻.',
        '• Two competing oxidation reactions are possible:\n  (a) 2Cl⁻(aq) → Cl₂(g) + 2e⁻   [E°_ox = −1.36 V]\n  (b) 4OH⁻(aq) → O₂(g) + 2H₂O + 4e⁻   [E°_ox = −1.23 V]',
        '• Thermodynamically, OH⁻ oxidation requires a lower potential (−1.23 V vs. −1.36 V). However, kinetic evolution of oxygen gas involves high overvoltage (overpotential ~0.4–0.6 V on graphite/platinum) and brine has a very high concentration of Cl⁻ ions.',
        '• Consequently, chloride ions (Cl⁻) are preferentially oxidised by electron loss to form bubbles of chlorine gas (Cl₂) at the anode surface.',
        'Formation of Sodium Hydroxide (NaOH):',
        '• As H⁺ ions are discharged at the cathode and Cl⁻ ions are discharged at the anode, Na⁺ cations and OH⁻ anions remain in the electrolytic solution, progressively forming an aqueous solution of sodium hydroxide (NaOH).',
        '• Overall Equation: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑ + Cl₂(g)↑.',
      ],
      equations: [
        {
          label: 'Cathode Half-Reaction (Reduction)',
          formula: '2H⁺(aq) + 2e⁻ → H₂(g)↑',
          units: 'Gas bubbles at cathode',
          note: 'E°(H⁺/H₂) = 0.00 V ≫ E°(Na⁺/Na) = −2.71 V',
        },
        {
          label: 'Anode Half-Reaction (Oxidation)',
          formula: '2Cl⁻(aq) → Cl₂(g)↑ + 2e⁻',
          units: 'Gas bubbles at anode',
          note: 'Preferential discharge due to Cl⁻ concentration and O₂ overpotential',
        },
        {
          label: 'Net Chlor-Alkali Cell Reaction',
          formula: '2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑ + Cl₂(g)↑',
          units: 'Complete electrolytic process',
          note: 'Industrial production of NaOH, Cl₂, and H₂',
        },
      ],
      examYears: ['2025'],
      marks: '4–5 Marks',
      professorTip:
        'This question is explicitly boxed with "Exam!" in the class notebook. State both competing reactions at each electrode and explain WHY H⁺ wins over Na⁺ (reduction potential) and WHY Cl⁻ wins over OH⁻ (overpotential and concentration).',
    },
    {
      id: 'chem-m1-b11',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1) · PUST EECE 2022 Q1(d) · Haque & Nawab',
      title: 'Transference (Transport) Number and Hittorf’s Method',
      summaryText:
        'Definition of transport number t₊ and t₋, proof that t₊ + t₋ = 1, relationship with ionic mobility and ionic conductance, and Hittorf’s / Moving Boundary principles.',
      memorizeStatements: [
        'Transference (Transport) Number (t₊ or t₋): The fraction of the total electric current carried by a particular ion (cation or anion) during the electrolysis of an electrolytic solution.',
        'Transport Number Formulas: t₊ = u₊ / (u₊ + u₋) = λ₊ / Λ_m, t₋ = u₋ / (u₊ + u₋) = λ₋ / Λ_m, and t₊ + t₋ = 1.',
      ],
      bulletPoints: [
        'Derivation of Transport Number Relations: Current carried by cation I₊ ∝ u₊; current carried by anion I₋ ∝ u₋. Total current I ∝ (u₊ + u₋).',
        'Therefore: t₊ = u₊ / (u₊ + u₋) = λ₊° / Λ_m°, t₋ = u₋ / (u₊ + u₋) = λ₋° / Λ_m°, and t₊ + t₋ = 1.',
        'Hittorf’s Rule: (Fall in concentration around anode) / (Fall in concentration around cathode) = u₊ / u₋ = t₊ / t₋.',
      ],
      equations: [
        {
          label: 'Transport Number Conservation',
          formula: 't₊ + t₋ = 1\nt₊ = λ₊° / Λ_m°\nt₋ = λ₋° / Λ_m°',
          units: 'dimensionless',
          note: 'Ratio: t₊ / t₋ = u₊ / u₋ = λ₊ / λ₋',
        },
      ],
      examYears: ['2022'],
      marks: '3 Marks',
    },
    {
      id: 'chem-m1-b12',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Electrochemistry Q8) · PUST EECE 2022 Exam Q1(b)',
      title: 'Electrochemical Equivalent of Copper from Faraday’s Law',
      summaryText:
        'Calculate the electrochemical equivalent Z of copper when 0.1978 g of Cu is deposited by a current of 0.2 A in 50 minutes.',
      examYears: ['2022'],
      marks: '2 Marks',
      problemStatement:
        '0.1978 g of copper is deposited by a current of 0.2 ampere in 50 minutes. What is the electrochemical equivalent of copper?',
      givenData: [
        'Mass of copper deposited, W = 0.1978 g',
        'Electric current, I = 0.2 A',
        'Time of electrolysis, t = 50 min = 50 × 60 = 3000 s',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Apply Faraday’s First Law of Electrolysis',
          explanation:
            'The mass W deposited at the cathode is related to current I, time t, and electrochemical equivalent Z by:',
          equation: 'W = Z · I · t ⟹ Z = W / (I · t)',
        },
        {
          stepTitle: 'Step 2: Calculate total charge Q and electrochemical equivalent Z',
          explanation: 'Compute total charge Q = I · t and divide mass W by Q:',
          equation:
            'Q = I · t = 0.2 A × 3000 s = 600 C\nZ = 0.1978 g / 600 C\nZ = 0.00032967 g·C⁻¹ = 3.297 × 10⁻⁴ g·C⁻¹',
        },
      ],
      finalAnswer: 'Z = 3.297 × 10⁻⁴ g·C⁻¹ (or 3.297 × 10⁻⁷ kg·C⁻¹)',
    },
    {
      id: 'chem-m1-b13',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [3],
      sourceCitation: 'Professor’s Suggestion Sheet · Part C Q25',
      title: 'Equivalent Conductance and Cell Conductance of 0.01 M KCl',
      summaryText:
        'Calculate the equivalent conductance and measured conductance of 0.01 M KCl given κ = 0.00141 S·cm⁻¹ and cell constant K_cell = 1.15 cm⁻¹.',
      marks: '4 Marks',
      problemStatement:
        'The specific conductance of a 0.01 M solution of KCl at 25°C is 0.00141 S·cm⁻¹. Calculate: (a) its equivalent conductance, and (b) the conductance of the solution if the cell constant is 1.15 cm⁻¹.',
      givenData: [
        'Molarity of KCl, M = 0.01 M (Normality C_N = 0.01 N for 1:1 salt)',
        'Specific conductance, κ = 0.00141 S·cm⁻¹',
        'Cell constant, K_cell = l / A = 1.15 cm⁻¹',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Calculate the Equivalent Conductance (Λ_eq)',
          explanation: 'Use the relationship between specific conductance κ and normality C_N:',
          equation:
            'Λ_eq = (1000 · κ) / C_N\nΛ_eq = (1000 × 0.00141) / 0.01 = 141.0 S·cm²·equiv⁻¹',
        },
        {
          stepTitle: 'Step 2: Calculate the Observed Conductance (G) of the Solution',
          explanation: 'Since κ = G · K_cell, solve for conductance G:',
          equation:
            'G = κ / K_cell = 0.00141 S·cm⁻¹ / 1.15 cm⁻¹ = 1.226 × 10⁻³ S',
        },
      ],
      finalAnswer: '(a) Λ_eq = 141.0 S·cm²·equiv⁻¹; (b) Conductance G = 1.226 × 10⁻³ S (or Ω⁻¹)',
    },
  ],
};

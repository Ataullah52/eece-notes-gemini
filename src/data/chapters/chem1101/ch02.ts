import type { ChapterNote } from '../../types';

export const CHEM1101_CH02: ChapterNote = {
  id: 'chem1101-ch02',
  unitNumber: 'Module 02',
  title: 'Electrochemical Cells (Electrolytic and Galvanic/Voltaic)',
  summary:
    'Electrochemical Cells (Galvanic vs. Electrolytic), Daniell Cell, Salt Bridge & Free Energy Thermodynamics, Electrode Potentials, Concentration vs. Activity (20-Student Analogy), Reference Electrodes (SHE, NHE, RHE, SCE), Cell Potential Difference (E°_cell), Complete Nernst Equation Suite (Ideal vs. Non-Ideal), Reversible & Concentration Cells, and Class Test (CT) Mastery Drill Problems.',
  estimatedMinutes: 80,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m2-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 3–5) · CR Final Exam Question Bank (Q3) · PUST EECE 2024 Q1(a), 2020 Q4(c,d)',
      title: 'Electrochemical Cells: Galvanic vs. Electrolytic Cells & Daniell Cell',
      summaryText:
        'Fundamental distinction between galvanic/voltaic and electrolytic cells, thermodynamic free energy basis (ΔG < 0 vs. ΔG > 0), Daniell cell construction, and functions of the salt bridge.',
      memorizeStatements: [
        'Electrochemical Cell: A device that either converts chemical energy into electrical energy through a spontaneous redox reaction (Galvanic / Voltaic cell), or uses external electrical energy to drive a non-spontaneous redox reaction (Electrolytic cell).',
        'Galvanic (Voltaic) Cell: An electrochemical device in which a spontaneous redox reaction (ΔG < 0, E_cell > 0) produces direct electrical current.',
        'Electrolytic Cell: An electrochemical device in which an external DC power source forces a non-spontaneous redox reaction (ΔG > 0, E_cell < 0) to take place.',
        'Daniell Cell: A classic galvanic cell consisting of a Zinc anode immersed in ZnSO₄ solution and a Copper cathode immersed in CuSO₄ solution, connected by a salt bridge: Zn(s) | Zn²⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s), with standard cell EMF E°_cell = +1.10 V at 25°C.',
        'Concept Ladder (Professor’s Sheet Page 5): In any functioning galvanic cell, the reduction potential of the reduction half-cell (cathode) is ALWAYS greater than that of the oxidation half-cell (anode): E°_cathode > E°_anode.',
        'Salt Bridge: An inverted U-shaped glass tube packed with an inert electrolyte (KCl, KNO₃, or NH₄NO₃) in agar-agar gel that completes the internal electrical circuit and prevents liquid junction potential.',
      ],
      bulletPoints: [
        'How Chemical Energy is Converted into Electrical Work (Professor’s Sheet Pages 3–5):',
        '• Spontaneous Reaction Thermodynamics: The reaction Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) occurs on its own. Therefore, its Gibbs free energy change is negative: ΔG < 0.',
        '• Work Done by the System: Work done = −ΔG. Electrical Work = Charge × Potential Difference = Q · V = n · F · E_cell.',
        '• Spatial Separation of Half-Cells: To prevent energy loss as heat, oxidation (Zn → Zn²⁺ + 2e⁻) is carried out in the anodic compartment and reduction (Cu²⁺ + 2e⁻ → Cu) in the cathodic compartment. Electrons pass through an external wire to do electrical work.',
        'Construction and Operation of the Daniell Cell (Professor’s Sheet Page 5):',
        '1. Anodic Half-Cell (Left): A metallic Zinc rod dipped into aqueous ZnSO₄ solution. Zinc atoms undergo oxidation, releasing electrons onto the electrode:\n   Zn(s) → Zn²⁺(aq) + 2e⁻   (E°_ox = +0.763 V, E°_red = −0.763 V)\n   The Zn rod accumulates electrons, becoming the negative terminal (Anode = Negative).',
        '2. Cathodic Half-Cell (Right): A metallic Copper rod dipped into aqueous CuSO₄ solution. Cu²⁺ ions accept electrons from the copper strip and plate out as metallic copper:\n   Cu²⁺(aq) + 2e⁻ → Cu(s)   (E°_red = +0.337 V)\n   The Cu rod is depleted of electrons, becoming the positive terminal (Cathode = Positive).',
        '3. Overall Spontaneous Redox Process:\n   Zn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s)\n   Standard Cell Potential: E°_cell = E°_cathode − E°_anode = +0.337 V − (−0.763 V) = +1.10 V.',
        '4. Electron Flow vs. Current Flow: Electrons flow through the external wire from the Zn anode (−) to the Cu cathode (+). Conventional electric current flows in the opposite direction (from cathode to anode).',
        'Functions and Selection of the Salt Bridge (Professor’s Sheet Page 5):',
        '• In the absence of a salt bridge, the zinc compartment rapidly builds up excess positive charge (Zn²⁺ ions), and the copper compartment accumulates excess negative charge (SO₄²⁻ ions). Electrostatic repulsion halts electron flow within seconds.',
        '• The salt bridge supplies counter-ions without bulk mixing of solutions: negative anions (NO₃⁻ or Cl⁻) migrate into the zinc half-cell, and positive cations (Na⁺ or K⁺) migrate into the copper half-cell.',
        '• Eliminates Liquid-Junction Potential (E_j): KCl or KNO₃ is used because the ionic mobilities of K⁺ (t₊ ≈ 0.49) and Cl⁻ (t₋ ≈ 0.51) are nearly identical. Note: KNO₃ or NH₄NO₃ is substituted when Ag⁺, Hg₂²⁺, or Pb²⁺ ions are present to prevent insoluble chloride precipitates.',
      ],
      table: {
        caption: 'Table 2.1 — Comprehensive Comparison: Galvanic (Voltaic) Cell vs. Electrolytic Cell (Professor’s Sheet Page 3)',
        headers: ['Feature', 'Galvanic / Voltaic Cell', 'Electrolytic Cell'],
        rows: [
          ['Energy Conversion', 'Chemical energy → Electrical energy', 'Electrical energy → Chemical energy'],
          ['Reaction Spontaneity', 'Spontaneous redox reaction (ΔG < 0, E_cell > 0)', 'Non-spontaneous redox reaction (ΔG > 0, driven by DC source)'],
          ['Anode Polarity & Process', 'Negative (−) terminal; Oxidation occurs here', 'Positive (+) terminal; Oxidation occurs here'],
          ['Cathode Polarity & Process', 'Positive (+) terminal; Reduction occurs here', 'Negative (−) terminal; Reduction occurs here'],
          ['Electrode Potential Relation', 'E°_cathode > E°_anode (Concept Ladder)', 'External applied voltage V_ext > |E_cell| required to drive reaction'],
          ['Compartments', 'Two separate half-cells joined by a salt bridge', 'Usually both electrodes immersed in the same electrolytic bath'],
          ['Practical Examples', 'Daniell cell, Lead-acid battery discharging, Dry cell', 'Electrolysis of brine (NaCl), Electroplating of Cu/Ag, Refining'],
        ],
      },
      examYears: ['2024', '2020'],
      marks: '4–5 Marks',
      professorTip:
        'Remember the classic mnemonic LOAN for Galvanic cells: Left, Oxidation, Anode, Negative. Crucially, in ALL electrochemical cells (Galvanic or Electrolytic), Oxidation ALWAYS occurs at the Anode and Reduction ALWAYS occurs at the Cathode.',
    },
    {
      id: 'chem-m2-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 7–11) · Class Lecture Notes (Oct 24, 2026: "Slide + E° calculation, ideal condition, E calculation [Nernst]") · PUST EECE 2015 Q1(a)',
      title: 'Electrode Potential, Standard Conditions & Concentration vs. Activity',
      summaryText:
        'Definition of electrode potential E, standard conditions (298 K, 1 M, 1 atm), detailed contrast between Concentration and Activity, the 20-student classroom analogy, and activity coefficient formula a = γ · C.',
      memorizeStatements: [
        'Electrode Potential (E): The potential difference developed at the interface between a metallic electrode and the electrolyte solution containing its ions, measuring the substance’s tendency to gain or lose electrons.',
        'Positive Potential: Indicates a high tendency for reduction to occur; the species is a stronger oxidizing agent (e.g., Cu²⁺/Cu = +0.34 V, Ag⁺/Ag = +0.80 V).',
        'Negative Potential: Indicates a low tendency for reduction and high tendency for oxidation; the species is a stronger reducing agent (e.g., Zn²⁺/Zn = −0.76 V, Na⁺/Na = −2.71 V).',
        'Standard Conditions (E°): Measured at T = 298.15 K (25°C), ion effective concentration / activity a = 1 M (1 mol·L⁻¹), and gas pressure P = 1 atm (100 kPa).',
        'Concentration (C): The actual stoichiometric amount of solute present in a given volume of solution (mol·L⁻¹).',
        'Activity (a): The effective concentration of a substance participating in a chemical reaction in real, non-ideal solutions, accounting for inter-ionic electrostatic attractions: a = γ · C.',
        'Activity Coefficient (γ): The proportionality factor relating activity to concentration (a = γ · C). For ideal (infinitely dilute) solutions, γ = 1 and a = C. For real/concentrated solutions, γ < 1 and a < C.',
      ],
      bulletPoints: [
        'Electrode Potential and Chemical Tendency (Professor’s Sheet Pages 7–8):',
        '• When a metal M is dipped into a solution of its ions Mⁿ⁺, two opposing processes occur: (1) De-electronation (oxidation): M → Mⁿ⁺ + ne⁻ (metal tends to dissolve, leaving electrons behind); (2) Electronation (reduction): Mⁿ⁺ + ne⁻ → M (ions tend to deposit on metal).',
        '• At dynamic equilibrium, an electrical double layer (Helmholtz layer) forms, creating the single electrode potential E.',
        '• Higher, more positive E indicates stronger oxidizing power (e.g., F₂ = +2.87 V, Au³⁺ = +1.50 V). More negative E indicates stronger reducing power (e.g., Li = −3.04 V, K = −2.93 V, Zn = −0.76 V).',
        'Concentration vs. Activity from Professor’s Sheet (Pages 10–11):',
        '• Concentration tells you how much of a substance is physically present in the solution.',
        '• Activity tells you how much of the substance is actually free to react and behave thermodynamically.',
        'The Classroom Analogy (Professor’s Sheet Page 10):',
        '• Imagine two classrooms, each containing exactly 20 students.',
        '• Concentration in both classrooms is identical (20 students per room).',
        '• However, in Classroom A, all students actively participate in discussion, answer questions, and solve problems. In Classroom B, students are distracted and passive.',
        '• The activity of Classroom A is much higher than that of Classroom B, despite having the exact same concentration.',
        '• Similarly, in an electrolytic solution: the total number of ions is the concentration, while their effective chemical participation (unhindered by inter-ionic attraction shells) is their activity.',
        'Mathematical Formula and Behavior (Professor’s Sheet Page 11):',
        '• Formula: a = γ · C, where γ is the activity coefficient.',
        '• When solutions are ideal (very dilute): inter-ionic distances are large, ions do not interfere with each other, so γ ≈ 1 and Activity ≈ Concentration (a ≈ C).',
        '• When solutions are concentrated: counter-ions crowd together and form ionic atmospheres that retard motion, so γ < 1 and Activity < Concentration (a < C).',
      ],
      table: {
        caption: 'Table 2.2 — Concentration vs. Activity Comparison (Professor’s Sheet Page 10)',
        headers: ['Term', 'Meaning', 'When Used', 'Key Point'],
        rows: [
          [
            'Concentration (C)',
            'Amount of solute present in a given amount of solution (e.g., mol/L)',
            'Ideal solutions, standard laboratory stoichiometry, dilute calculations',
            'Simple physical measure of "how much substance is present"',
          ],
          [
            'Activity (a)',
            'Effective concentration taking into account inter-ionic electrostatic interactions',
            'Non-ideal solutions, precise electrochemistry, chemical thermodynamics',
            'Thermodynamic measure of "how much substance behaves as available to react"',
          ],
        ],
      },
      examYears: ['2025', '2015'],
      marks: '3.5–4 Marks',
      professorTip:
        'In your CT or semester exam, always mention the classroom analogy when asked about Activity vs. Concentration, and write down the governing formula a = γ · C with γ = 1 for ideal dilute solutions.',
    },
    {
      id: 'chem-m2-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Electrochemistry Sheet (Pages 8–10) · PUST EECE 2021 Q1(c), 2015 Q1(b)',
      title: 'Reference Electrodes: SHE, NHE, RHE, and SCE in Detail',
      summaryText:
        'Definition of reference electrodes, comparison of SHE, NHE, RHE, and SCE from the professor’s sheet, and detailed construction, working, half-reactions, and representations of the Standard Hydrogen Electrode (SHE).',
      memorizeStatements: [
        'Reference Electrode: An electrode that possesses an accurately known, reproducible, and stable potential, used as a reference half-cell to measure the single electrode potential of any other electrode.',
        'Standard Hydrogen Electrode (SHE): Primary reference electrode with E° = 0.000 V at 298 K, where pure H₂ gas is bubbled at 1 atm onto platinized platinum in an aqueous solution of H⁺ ions at unit activity (a = 1 M).',
        'Normal Hydrogen Electrode (NHE): A hydrogen electrode where [H⁺] = 1 M (concentration, rather than unit activity), giving E ≈ 0.000 V.',
        'Reversible Hydrogen Electrode (RHE): A hydrogen electrode immersed in the actual working electrolyte solution at arbitrary pH: E_RHE = 0.000 V − 0.0591 × pH at 25°C.',
        'Saturated Calomel Electrode (SCE): A secondary reference electrode consisting of mercury and mercurous chloride in saturated KCl solution: E_SCE = +0.2415 V (≈ +0.241 V) at 25°C.',
        'SHE Anode Representation: Pt | H₂(g, 1 atm) | H⁺(aq, 1 M).',
        'SHE Cathode Representation: H⁺(aq, 1 M) | H₂(g, 1 atm) | Pt.',
      ],
      bulletPoints: [
        'Classification of Reference Electrodes (Professor’s Sheet Page 8):',
        '• Standard Hydrogen Electrode (SHE): E° = 0.000 V (activity a_{H⁺} = 1 M, P_{H₂} = 1 atm, T = 298 K).',
        '• Normal Hydrogen Electrode (NHE): E ≈ 0.000 V (concentration [H⁺] = 1 M).',
        '• Reversible Hydrogen Electrode (RHE): E = 0.000 V − 0.0591 × pH (dependent on solution pH at 25°C).',
        '• Saturated Calomel Electrode (SCE): E = +0.241 V (in saturated KCl solution at 25°C).',
        'Detailed Construction of SHE (Professor’s Sheet Pages 8–9):',
        '1. Glass Outer Jacket: Features a small inlet at the top through which pure, dry H₂ gas is introduced continuously at 1 atm pressure, and perforated outlets at the bottom for excess gas to escape.',
        '2. Inner Glass Tube: Sealed at both ends, containing a thin platinum wire sealed through the glass. The lower end is welded to a rectangular platinum foil.',
        '3. Platinized Platinum Foil: The platinum foil is coated with finely divided platinum black by electroplating with chloroplatinic acid. This provides an enormous catalytic surface area to adsorb H₂ gas and establish rapid equilibrium between H₂ gas and H⁺ ions.',
        '4. Mercury Contact: A droplet of pure liquid mercury is placed at the bottom of the inner tube to make a low-resistance electrical contact between the Pt wire and external copper lead wire.',
        '5. Acid Solution: The entire assembly is immersed in a vessel containing 1 M HCl solution (or acid containing H⁺ ions at unit activity, a = 1.0 M) maintained at 25°C (298 K).',
        'Working and Reversible Half-Reactions (Professor’s Sheet Page 9):',
        '• Pure, dry hydrogen gas bubbled over the platinized platinum is adsorbed on the foil surface. An equilibrium is established across the metal interface: ½ H₂(g) ⇌ H⁺(aq) + e⁻.',
        '• When SHE Acts as Anode (Oxidation): Adsorbed H₂ molecules lose electrons and enter solution as H⁺ ions:\n  H₂(g) → 2H⁺(aq) + 2e⁻   (Oxidation)\n  The released electrons pass into the Pt wire and flow to the external circuit.',
        '• When SHE Acts as Cathode (Reduction): H⁺ ions from the solution accept electrons from the Pt plate and liberate H₂ gas:\n  2H⁺(aq) + 2e⁻ → H₂(g)   (Reduction)',
        '• Standard Potential Value: Because single electrode potentials cannot be measured in isolation, IUPAC arbitrarily defines the potential of SHE as exactly 0.000 V at all temperatures.',
      ],
      equations: [
        {
          label: 'SHE Half-Reaction as Anode (Oxidation)',
          formula: 'H₂(g, 1 atm) → 2H⁺(aq, 1 M) + 2e⁻',
          units: 'E° = 0.000 V',
          note: 'Cell representation: Pt | H₂(g, 1 atm) | H⁺(aq, 1 M)',
        },
        {
          label: 'SHE Half-Reaction as Cathode (Reduction)',
          formula: '2H⁺(aq, 1 M) + 2e⁻ → H₂(g, 1 atm)',
          units: 'E° = 0.000 V',
          note: 'Cell representation: H⁺(aq, 1 M) | H₂(g, 1 atm) | Pt',
        },
        {
          label: 'Reversible Hydrogen Electrode Potential (RHE)',
          formula: 'E_RHE = E° − 0.0591 · pH = −0.0591 · pH',
          units: 'V (at 25°C)',
          note: 'Directly relates electrode potential to solution pH',
        },
      ],
      examYears: ['2021', '2015'],
      marks: '4 Marks',
      professorTip:
        'When drawing the SHE diagram, label all 5 components from the professor’s sheet: (1) H₂ gas inlet (1 atm), (2) perforated gas outlets, (3) Pt wire with mercury contact, (4) catalytic platinized Pt surface, and (5) 1 M H⁺ (HCl) electrolyte.',
    },
    {
      id: 'chem-m2-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 2) · PUST EECE 2021 Q1(c) · Haque & Nawab',
      title: 'Secondary Reference Electrodes: Calomel and Silver/Silver Chloride',
      summaryText:
        'Construction, reversible electrode reactions, potential equations, and standard potentials of Saturated Calomel Electrode (SCE) and Silver–Silver Chloride electrode.',
      memorizeStatements: [
        'Calomel Electrode Representation: Hg(l) | Hg₂Cl₂(s) | KCl(aq), with reversible half-reaction Hg₂Cl₂(s) + 2e⁻ ⇌ 2Hg(l) + 2Cl⁻(aq).',
        'Calomel Potential Equation: E_cal = E°_cal − (0.0591 / 2) log [Cl⁻]² = E°_cal − 0.0591 log [Cl⁻] at 25°C.',
        'Standard Calomel Potentials at 25°C: Saturated KCl (SCE) = +0.2415 V; 1.0 N KCl (NCE) = +0.2800 V; 0.1 N KCl (Decinormal) = +0.3338 V.',
        'Silver–Silver Chloride Electrode: Ag(s) | AgCl(s) | KCl(aq), with reaction AgCl(s) + e⁻ ⇌ Ag(s) + Cl⁻(aq) and E = +0.2224 V at 25°C in 3 M KCl.',
      ],
      bulletPoints: [
        'Need for Secondary Reference Electrodes:',
        '• Although SHE is the primary international standard, it is difficult to maintain in routine lab work because maintaining 1 atm H₂ pressure and 1 M H⁺ activity is cumbersome, and the platinum black surface is easily poisoned by traces of H₂S, As, or Hg.',
        '• Secondary reference electrodes like Calomel (SCE) are rugged, portable, completely sealed, and maintain constant potential over long periods.',
        'Construction of Saturated Calomel Electrode (SCE):',
        '• A glass tube with pure liquid mercury (Hg) at the bottom, covered with a paste of mercurous chloride (Hg₂Cl₂, calomel) and mercury.',
        '• The tube is filled with a saturated aqueous solution of potassium chloride (KCl). A platinum wire makes electrical contact with the mercury pool.',
        '• A porous ceramic plug or glass frit at the base allows ionic contact with the test solution while preventing bulk leakage.',
      ],
      equations: [
        {
          label: 'Calomel Electrode Reversible Equilibrium',
          formula: 'Hg₂Cl₂(s) + 2e⁻ ⇌ 2Hg(l) + 2Cl⁻(aq)',
          units: 'E_SCE = +0.2415 V (at 298 K)',
          note: 'Potential is entirely determined by chloride ion activity [Cl⁻]',
        },
      ],
      examYears: ['2021'],
      marks: '3 Marks',
    },
    {
      id: 'chem-m2-b5',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Requirement ("Calculating potential difference of a cell on your own") · Class Lecture Notes (Oct 24, 2026: "Slide + E° calculation") · PUST EECE Syllabus',
      title: 'Standard Potential Difference Calculation (E°_cell) and Cell Notation',
      summaryText:
        'IUPAC conventions for galvanic cell notation, identification of anode and cathode, calculating standard potential difference E°_cell = E°_cathode − E°_anode, and predicting reaction direction.',
      memorizeStatements: [
        'Standard Cell Potential (E°_cell): The potential difference between two half-cells under standard conditions (298 K, 1 M solute activities, 1 atm gas pressure) when zero current flows.',
        'Master Formula for Cell Potential: E°_cell = E°_cathode(reduction) − E°_anode(reduction).',
        'IUPAC Cell Notation Convention: Anode (Oxidation) is ALWAYS written on the LEFT; Cathode (Reduction) is ALWAYS written on the RIGHT.',
        'Phase Boundaries: A single vertical line (|) denotes a phase boundary (e.g., solid metal | aqueous ion); a double vertical line (||) denotes a salt bridge.',
      ],
      bulletPoints: [
        'Step-by-Step Procedure to Calculate Potential Difference of a Cell (E°_cell):',
        '1. Identify the Half-Reactions: Write down both reduction half-reactions and locate their standard reduction potentials (E°) in the electrochemical series.',
        '2. Determine Anode and Cathode:',
        '   • The electrode with the MORE POSITIVE standard reduction potential has a greater tendency to gain electrons and acts as the CATHODE (Reduction).',
        '   • The electrode with the LESS POSITIVE (or more negative) standard reduction potential acts as the ANODE (Oxidation).',
        '3. Apply the Master Equation:\n   E°_cell = E°_cathode − E°_anode\n   (Both E° values MUST be entered as standard REDUCTION potentials).',
        '4. Thermodynamic Feasibility Check:',
        '   • If E°_cell > 0: The cell reaction is spontaneous in the forward direction as written (ΔG° < 0), generating electric current.',
        '   • If E°_cell < 0: The reaction is non-spontaneous in the forward direction (spontaneous in the reverse direction).',
        'IUPAC Cell Diagram Construction Rules:',
        '• Form: Anode Metal | Anode Solution (Concentration) || Cathode Solution (Concentration) | Cathode Metal.',
        '• Example 1 (Daniell Cell): Zn(s) | Zn²⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s)\n  E°_cell = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0.34 V − (−0.76 V) = +1.10 V.',
        '• Example 2 (Silver–Zinc Cell): Zn(s) | Zn²⁺(aq, 1 M) || Ag⁺(aq, 1 M) | Ag(s)\n  E°_cell = E°(Ag⁺/Ag) − E°(Zn²⁺/Zn) = +0.80 V − (−0.76 V) = +1.56 V.',
        '• Example 3 (Gas Electrode Involved): Pt(s) | H₂(g, 1 atm) | H⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s)\n  E°_cell = +0.34 V − 0.00 V = +0.34 V.',
      ],
      equations: [
        {
          label: 'Master Cell Potential Equation',
          formula: 'E°_cell = E°_cathode(reduction) − E°_anode(reduction)',
          units: 'Volts (V)',
          note: 'Both potentials must be standard reduction potentials',
        },
        {
          label: 'Alternative Formulation',
          formula: 'E°_cell = E°_right − E°_left = E°_ox(anode) + E°_red(cathode)',
          units: 'Volts (V)',
          note: 'E°_ox = −E°_red',
        },
      ],
      examYears: ['2025', '2024', '2021'],
      marks: '3–4 Marks',
      professorTip:
        'A common mistake in CT calculations is subtracting standard oxidation potentials or flipping signs twice. Remember: always use reduction potentials for both electrodes and subtract: E°_cell = E°_cathode − E°_anode.',
    },
    {
      id: 'chem-m2-b6',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Requirement ("Nernst equation on your own") · Class Lecture Notes (Oct 24, 2026: "E calculation [Nernst], ideal condition") · PUST EECE 2015 Q1(a)',
      title: 'The Nernst Equation: Derivation, Ideal and Non-Ideal Conditions',
      summaryText:
        'Complete thermodynamic derivation of the Nernst equation from the Van’t Hoff reaction isotherm, practical formulation at 298.15 K, application to half-cells and full cells, and treatment under ideal (a = C) vs. non-ideal (a = γ·C) conditions.',
      memorizeStatements: [
        'The Nernst Equation: A fundamental electrochemical relation that calculates the electromotive force (EMF) of a cell or single electrode under non-standard concentrations, temperatures, and pressures.',
        'Nernst Formula at 298.15 K (25°C): E_cell = E°_cell − (0.0591 / n) log Q, where n is the number of moles of electrons transferred and Q is the reaction quotient.',
        'Van’t Hoff Reaction Isotherm: ΔG = ΔG° + R · T · ln Q.',
        'Electrical Free Energy Relation: ΔG = −n · F · E_cell and ΔG° = −n · F · E°_cell.',
        'Ideal Condition: Activity coefficient γ = 1, so effective activity equals molar concentration (a = C), giving Q in terms of molarities: Q = ([Products]^p) / ([Reactants]^r).',
        'Non-Ideal Condition: Activity coefficient γ ≠ 1, so Q must be evaluated using true activities: a_i = γ_i · C_i.',
      ],
      bulletPoints: [
        'Complete Thermodynamic Derivation of the Nernst Equation:',
        '1. Consider a general reversible redox cell reaction:\n   aA + bB ⇌ cC + dD\n   involving the transfer of n moles of electrons.',
        '2. In chemical thermodynamics, the change in Gibbs free energy (ΔG) under any arbitrary state is related to the standard free energy change (ΔG°) by the Van’t Hoff reaction isotherm:\n   ΔG = ΔG° + R · T · ln Q\n   where Q is the reaction quotient.',
        '3. For a reversible electrochemical cell, the maximum electrical work done by the system is equal to the decrease in Gibbs free energy:\n   W_elec = −ΔG = n · F · E_cell\n   Under standard conditions:\n   −ΔG° = n · F · E°_cell',
        '4. Substituting ΔG = −nFE_cell and ΔG° = −nFE°_cell into the Van’t Hoff isotherm:\n   −n · F · E_cell = −n · F · E°_cell + R · T · ln Q',
        '5. Dividing the entire equation by −nF:\n   E_cell = E°_cell − (R · T / nF) · ln Q',
        '6. Converting natural logarithm (ln) to base-10 logarithm (log₁₀) using ln Q = 2.3026 log Q:\n   E_cell = E°_cell − (2.3026 · R · T / nF) · log Q',
        '7. Inserting standard fundamental constants:\n   • Universal gas constant R = 8.314 J·mol⁻¹·K⁻¹\n   • Absolute temperature T = 298.15 K (25°C)\n   • Faraday constant F = 96,485 C·mol⁻¹\n   (2.3026 × 8.314 × 298.15) / 96485 = 0.05916 V ≈ 0.0591 V',
        '8. Master Working Equation at 25°C:\n   E_cell = E°_cell − (0.0591 / n) log Q',
        'Ideal vs. Non-Ideal Formulations (Class Notes Highlight):',
        '• Under Ideal Condition (Dilute Solution, γ ≈ 1):\n  Reaction quotient Q is expressed directly in terms of molar concentrations ([C]^c [D]^d) / ([A]^a [B]^b). Pure solids and pure liquids have activity equal to 1.',
        '• Under Non-Ideal Condition (Concentrated Solution, γ < 1):\n  Q_act = (a_C^c · a_D^d) / (a_A^a · a_B^b) = [ (γ_C [C])^c · (γ_D [D])^d ] / [ (γ_A [A])^a · (γ_B [B])^b ].\n  E_cell = E°_cell − (0.0591 / n) log Q_act.',
        'Equilibrium Constant (K_eq) from Nernst Equation:',
        '• When the cell reaction reaches dynamic chemical equilibrium, current ceases to flow and E_cell = 0. At this point, Q = K_eq.',
        '• 0 = E°_cell − (0.0591 / n) log K_eq ⟹ log K_eq = (n · E°_cell) / 0.0591\n  and K_eq = 10^{(n · E°_cell) / 0.0591}.',
      ],
      equations: [
        {
          label: 'Master Nernst Equation (at 298 K)',
          formula: 'E_cell = E°_cell − (0.0591 / n) · log Q',
          units: 'Volts (V)',
          note: 'Q = [Products]^p / [Reactants]^r for dissolved species (solids = 1)',
        },
        {
          label: 'Nernst Equation for Single Electrode Mⁿ⁺ + ne⁻ ⇌ M(s)',
          formula: 'E_{Mⁿ⁺/M} = E°_{Mⁿ⁺/M} + (0.0591 / n) · log [Mⁿ⁺]',
          units: 'Volts (V)',
          note: 'Electrode potential increases with cation concentration',
        },
        {
          label: 'Equilibrium Constant Relation',
          formula: 'log K_eq = (n · E°_cell) / 0.0591\nΔG° = −2.303 · R · T · log K_eq',
          units: 'dimensionless and J·mol⁻¹',
          note: 'Evaluated at E_cell = 0 (equilibrium state)',
        },
      ],
      examYears: ['2025', '2015'],
      marks: '4–5 Marks',
      professorTip:
        'In your CT, remember to write the balanced redox reaction first to determine the exact value of n (number of transferred electrons) and the powers in Q. Forgetting to square a concentration when coefficient is 2 is the most common student error.',
    },
    {
      id: 'chem-m2-b7',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [4],
      sourceCitation: 'Professor’s Suggestion Sheet (Ch 2) · Haque & Nawab',
      title: 'Reversible Cells and Concentration Cells',
      summaryText:
        'Thermodynamic conditions for reversible electrochemical cells, classification of concentration cells (electrode vs. electrolyte), and derivation of E_cell = (0.0591/n) log(C₂/C₁).',
      memorizeStatements: [
        'Reversible Cell: An electrochemical cell whose chemical reaction is completely reversed when an opposing external EMF infinitesimally greater than the cell EMF (E_ext = E_cell + dE) is applied.',
        'Concentration Cell: A galvanic cell in which both electrodes are chemically identical and the EMF arises solely from a difference in concentration of the electrolyte solutions or electrode materials in the two half-cells.',
        'Concentration Cell EMF: E°_cell = 0 V (identical chemical electrodes); at 25°C, E_cell = (0.0591 / n) log(C₂ / C₁), where C₂ (cathode concentration) > C₁ (anode concentration).',
      ],
      bulletPoints: [
        'Three Thermodynamic Conditions for a Reversible Cell:',
        '1. If E_ext = E_cell: No current flows, and no chemical change occurs.',
        '2. If E_ext = E_cell − dE: An infinitesimally small current flows from the cell, and the spontaneous forward chemical reaction proceeds.',
        '3. If E_ext = E_cell + dE: Current is forced into the cell in the reverse direction, and the exact reverse chemical reaction proceeds quantitatively (e.g., Daniell cell).',
        'Derivation of EMF of an Electrolyte Concentration Cell Without Transference:',
        '1. Consider two identical copper electrodes immersed in CuSO₄ solutions of different concentrations C₁ and C₂ (where C₂ > C₁):\n   Cu(s) | Cu²⁺(aq, C₁) || Cu²⁺(aq, C₂) | Cu(s)',
        '2. Anode Half-Reaction (Dilute compartment C₁): Cu(s) → Cu²⁺(C₁) + 2e⁻ (Oxidation).',
        '3. Cathode Half-Reaction (Concentrated compartment C₂): Cu²⁺(C₂) + 2e⁻ → Cu(s) (Reduction).',
        '4. Net Cell Process: Cu²⁺(C₂) → Cu²⁺(C₁) (Spontaneous transfer of Cu²⁺ ions from higher concentration C₂ to lower concentration C₁ until C₁ = C₂).',
        '5. Since the electrodes are chemically identical: E°_cell = E°(Cu²⁺/Cu) − E°(Cu²⁺/Cu) = 0.00 V.',
        '6. Applying the Nernst Equation at 25°C:\n   E_cell = 0 − (0.0591 / n) log (C₁ / C₂) = (0.0591 / n) log (C₂ / C₁).',
        '7. Because C₂ > C₁, the ratio C₂ / C₁ > 1, so log(C₂ / C₁) > 0 and E_cell is positive.',
      ],
      equations: [
        {
          label: 'Electrolyte Concentration Cell EMF',
          formula: 'E_cell = (0.0591 / n) · log (C₂ / C₁)',
          units: 'Volts (V)',
          note: 'E°_cell = 0 V; C₂ (cathode) > C₁ (anode)',
        },
      ],
      marks: '3.5 Marks',
    },
    {
      id: 'chem-m2-b8',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Electrochemistry Q7) · PUST EECE 2021 Exam Q1(d) & Q3(b)',
      title: 'Spontaneity of Redox Reactions and Hydrogen Displacement',
      summaryText:
        'Predicting feasibility of redox reactions using standard cell potential (E°_cell > 0, ΔG° < 0) and explaining why Zn liberates H₂ gas from dilute H₂SO₄ whereas Ag does not.',
      examYears: ['2021'],
      marks: '4 Marks',
      problemStatement:
        '(a) Predict whether the reaction 2Ag(s) + Zn²⁺(aq) → 2Ag⁺(aq) + Zn(s) is feasible under standard conditions [Given: E°(Ag⁺/Ag) = +0.80 V, E°(Zn²⁺/Zn) = −0.763 V].\n(b) Explain why zinc reacts with dilute H₂SO₄ to evolve H₂ gas, whereas silver does not.',
      givenData: [
        'E°(Ag⁺/Ag) = +0.80 V',
        'E°(Zn²⁺/Zn) = −0.763 V',
        'E°(H⁺/½H₂) = 0.000 V',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Calculate E°_cell for 2Ag(s) + Zn²⁺(aq) → 2Ag⁺(aq) + Zn(s)',
          explanation:
            'In the given reaction, Ag is oxidized at the anode (2Ag → 2Ag⁺ + 2e⁻) and Zn²⁺ is reduced at the cathode (Zn²⁺ + 2e⁻ → Zn):',
          equation:
            'E°_cell = E°_cathode(Zn²⁺/Zn) − E°_anode(Ag⁺/Ag)\nE°_cell = −0.763 V − (+0.80 V) = −1.563 V',
        },
        {
          stepTitle: 'Step 2: Apply thermodynamic spontaneity criterion (ΔG° = −nFE°_cell)',
          explanation:
            'Because E°_cell = −1.563 V is negative, ΔG° = −nFE°_cell is strictly positive (ΔG° > 0). Therefore, the reaction is non-spontaneous and NOT feasible.',
          equation: 'E°_cell = −1.563 V < 0 ⟹ ΔG° > 0 (Not Feasible)',
        },
        {
          stepTitle: 'Step 3: Analyze H₂ displacement from dilute H₂SO₄ by Zn vs. Ag',
          explanation:
            'For a metal to displace H₂ from acid, the metal must act as anode (oxidation) and H⁺ as cathode (2H⁺ + 2e⁻ → H₂, E° = 0.00 V):',
          equation:
            'For Zinc: Zn + 2H⁺ → Zn²⁺ + H₂\nE°_cell = E°(H⁺/H₂) − E°(Zn²⁺/Zn) = 0.00 − (−0.763) = +0.763 V > 0 (Spontaneous)\n\nFor Silver: 2Ag + 2H⁺ → 2Ag⁺ + H₂\nE°_cell = E°(H⁺/H₂) − E°(Ag⁺/Ag) = 0.00 − (+0.80) = −0.80 V < 0 (Non-spontaneous)',
        },
      ],
      finalAnswer:
        '(a) E°_cell = −1.563 V < 0; the reaction is NOT feasible. (b) Zn has a negative reduction potential (−0.763 V < 0) and spontaneously displaces H₂ (E°_cell = +0.763 V > 0), whereas Ag has a positive reduction potential (+0.80 V > 0) giving E°_cell = −0.80 V < 0.',
    },
    {
      id: 'chem-m2-b9',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Test (CT) Mastery Drill 1 · PUST EECE 2025 Exam Q2(c) · Professor’s Core Requirement',
      title: 'Class Test Drill 1: Daniell Cell Potential Calculations',
      summaryText:
        'Step-by-step Nernst calculation of Daniell cell potential under asymmetric concentrations [Zn²⁺] = 0.001 M and [Cu²⁺] = 0.1 M, plus high anode concentration drill [Zn²⁺] = 0.5 M and [Cu²⁺] = 0.01 M.',
      marks: '4–5 Marks',
      problemStatement:
        'A Daniell cell is constructed using zinc and copper electrodes at 25°C (298 K). The standard cell potential is 1.10 V.\n(a) Calculate the cell potential (EMF) when [Zn²⁺] = 0.001 M and [Cu²⁺] = 0.1 M.\n(b) Calculate the cell potential when [Zn²⁺] = 0.5 M and [Cu²⁺] = 0.01 M, and state which direction the electrons flow.',
      givenData: [
        'E°_cell = +1.10 V',
        'Temperature T = 25°C = 298.15 K',
        'Electron transfer n = 2',
        'Part (a): [Zn²⁺] = 0.001 M = 10⁻³ M, [Cu²⁺] = 0.1 M = 10⁻¹ M',
        'Part (b): [Zn²⁺] = 0.5 M, [Cu²⁺] = 0.01 M = 10⁻² M',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Write the overall cell reaction and Nernst equation',
          explanation:
            'Zinc is oxidized at the anode and copper ions are reduced at the cathode:',
          equation:
            'Zn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s)   (n = 2)\nE_cell = E°_cell − (0.0591 / n) · log ( [Zn²⁺] / [Cu²⁺] )',
        },
        {
          stepTitle: 'Step 2: Solve Part (a) for [Zn²⁺] = 0.001 M and [Cu²⁺] = 0.1 M',
          explanation: 'Insert the concentrations into the reaction quotient Q = [Zn²⁺]/[Cu²⁺]:',
          equation:
            'Q = 0.001 / 0.1 = 10⁻²\nlog Q = log(10⁻²) = −2\nE_cell = 1.10 − (0.0591 / 2) × (−2)\nE_cell = 1.10 + 0.0591 = 1.1591 V',
        },
        {
          stepTitle: 'Step 3: Solve Part (b) for [Zn²⁺] = 0.5 M and [Cu²⁺] = 0.01 M',
          explanation: 'Calculate the new reaction quotient and evaluate:',
          equation:
            'Q = 0.5 / 0.01 = 50\nlog(50) = 1.6990\nE_cell = 1.10 − (0.0591 / 2) × 1.6990\nE_cell = 1.10 − (0.02955 × 1.6990)\nE_cell = 1.10 − 0.0502 = 1.0498 V',
        },
        {
          stepTitle: 'Step 4: Determine electron flow direction',
          explanation:
            'Since E_cell = +1.0498 V > 0, the reaction proceeds spontaneously in the forward direction. Electrons flow from the Zinc anode through the external circuit wire to the Copper cathode.',
          equation: 'Electron Flow: Zn anode (−) ⟶ Cu cathode (+)',
        },
      ],
      finalAnswer:
        '(a) E_cell = 1.1591 V; (b) E_cell = 1.0498 V, electrons flow spontaneously from the Zinc anode to the Copper cathode.',
    },
    {
      id: 'chem-m2-b10',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Test (CT) Mastery Drill 2 · High-Yield CT Problem · Multi-Electron Stoichiometry',
      title: 'Class Test Drill 2: Cell Potential for Non-1:1 Stoichiometric Reaction',
      summaryText:
        'Calculation of cell potential and maximum electrical work for Fe(s) + 2Ag⁺(aq) ⇌ Fe²⁺(aq) + 2Ag(s) with asymmetric powers in the reaction quotient Q = [Fe²⁺]/[Ag⁺]².',
      marks: '5 Marks',
      problemStatement:
        'A galvanic cell is represented as: Fe(s) | Fe²⁺(aq, 0.02 M) || Ag⁺(aq, 0.001 M) | Ag(s) at 25°C.\nGiven: E°(Ag⁺/Ag) = +0.80 V and E°(Fe²⁺/Fe) = −0.44 V.\nCalculate:\n(a) The standard cell potential (E°_cell),\n(b) The actual cell potential (E_cell) using the Nernst equation, and\n(c) The maximum electrical work (W_max) obtainable from the cell per mole of Fe consumed.',
      givenData: [
        'E°(Ag⁺/Ag) = +0.80 V (Cathode)',
        'E°(Fe²⁺/Fe) = −0.44 V (Anode)',
        '[Fe²⁺] = 0.02 M = 2 × 10⁻² M',
        '[Ag⁺] = 0.001 M = 10⁻³ M',
        'Faraday constant F = 96,485 C·mol⁻¹',
        'Temperature T = 298.15 K',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Write the balanced redox equation and calculate E°_cell',
          explanation:
            'Anode oxidation: Fe(s) → Fe²⁺(aq) + 2e⁻\nCathode reduction: 2Ag⁺(aq) + 2e⁻ → 2Ag(s)\nOverall reaction: Fe(s) + 2Ag⁺(aq) ⇌ Fe²⁺(aq) + 2Ag(s)   (n = 2 moles of electrons):',
          equation:
            'E°_cell = E°_cathode(Ag⁺/Ag) − E°_anode(Fe²⁺/Fe)\nE°_cell = +0.80 V − (−0.44 V) = +1.24 V',
        },
        {
          stepTitle: 'Step 2: Formulate the reaction quotient Q and Nernst equation',
          explanation:
            'Note the squared stoichiometric coefficient for [Ag⁺] in the denominator:',
          equation:
            'Q = [Fe²⁺] / [Ag⁺]²\nQ = 0.02 / (0.001)² = 0.02 / 10⁻⁶ = 20,000 = 2.0 × 10⁴\nlog Q = log(2.0 × 10⁴) = log(2) + 4 = 0.3010 + 4 = 4.3010',
        },
        {
          stepTitle: 'Step 3: Compute the cell potential E_cell',
          explanation: 'Apply the Nernst equation at 25°C with n = 2:',
          equation:
            'E_cell = E°_cell − (0.0591 / n) · log Q\nE_cell = 1.24 − (0.0591 / 2) × 4.3010\nE_cell = 1.24 − (0.02955 × 4.3010)\nE_cell = 1.24 − 0.1271 = 1.1129 V',
        },
        {
          stepTitle: 'Step 4: Calculate maximum electrical work (W_max = −ΔG = nFE_cell)',
          explanation: 'Evaluate maximum work in Joules per mole:',
          equation:
            'W_max = n · F · E_cell\nW_max = 2 × 96,485 C·mol⁻¹ × 1.1129 V\nW_max = 214,756 J·mol⁻¹ = 214.76 kJ·mol⁻¹',
        },
      ],
      finalAnswer:
        '(a) E°_cell = +1.24 V; (b) E_cell = 1.1129 V; (c) W_max = 214.76 kJ·mol⁻¹',
    },
    {
      id: 'chem-m2-b11',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Test (CT) Mastery Drill 3 · Gas Electrode & pH Problem · Professor’s Core Requirement',
      title: 'Class Test Drill 3: Gas Electrode and Solution pH Potential',
      summaryText:
        'Calculation of cell potential for Zn(s) + 2H⁺(aq) ⇌ Zn²⁺(aq) + H₂(g) where the cathodic potential depends on solution pH and hydrogen gas partial pressure P_H₂.',
      marks: '5 Marks',
      problemStatement:
        'Calculate the EMF at 25°C of the electrochemical cell:\nZn(s) | Zn²⁺(aq, 0.1 M) || H⁺(aq, pH = 3.0) | H₂(g, 1.5 atm) | Pt(s)\nGiven: E°(Zn²⁺/Zn) = −0.763 V and E°(H⁺/½H₂) = 0.000 V.',
      givenData: [
        'Anode: E°(Zn²⁺/Zn) = −0.763 V, [Zn²⁺] = 0.1 M',
        'Cathode: E°(H⁺/½H₂) = 0.000 V, pH = 3.0, P_{H₂} = 1.5 atm',
        'Temperature T = 298.15 K',
        'n = 2',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Determine [H⁺] from pH and write the net cell reaction',
          explanation:
            'From pH definition, [H⁺] = 10⁻ᵖᴴ = 10⁻³ M. The cell reaction is:',
          equation:
            'Zn(s) + 2H⁺(aq) ⇌ Zn²⁺(aq) + H₂(g)   (n = 2)\nE°_cell = E°_cathode − E°_anode = 0.000 − (−0.763) = +0.763 V',
        },
        {
          stepTitle: 'Step 2: Formulate reaction quotient Q including gas partial pressure',
          explanation:
            'For dissolved solutes use molarity; for gases use partial pressure in atm:',
          equation:
            'Q = ([Zn²⁺] · P_{H₂}) / [H⁺]²\nQ = (0.1 × 1.5) / (10⁻³)² = 0.15 / 10⁻⁶ = 1.5 × 10⁵\nlog Q = log(1.5 × 10⁵) = log(1.5) + 5 = 0.1761 + 5 = 5.1761',
        },
        {
          stepTitle: 'Step 3: Calculate the cell EMF using Nernst equation',
          explanation: 'Insert E°_cell, n = 2, and log Q:',
          equation:
            'E_cell = E°_cell − (0.0591 / 2) · log Q\nE_cell = 0.763 − (0.02955 × 5.1761)\nE_cell = 0.763 − 0.1529 = 0.6101 V',
        },
      ],
      finalAnswer: 'E_cell = 0.6101 V',
    },
    {
      id: 'chem-m2-b12',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Test (CT) Mastery Drill 4 · Equilibrium Constant & Free Energy · Professor’s Core Requirement',
      title: 'Class Test Drill 4: Equilibrium Constant (K_eq) and ΔG°',
      summaryText:
        'Calculation of equilibrium constant K_eq and standard Gibbs free energy change ΔG° for Sn(s) + 2Cu²⁺(aq) ⇌ Sn²⁺(aq) + 2Cu⁺(aq) from standard reduction potentials.',
      marks: '5 Marks',
      problemStatement:
        'For the redox reaction: Sn(s) + 2Cu²⁺(aq) ⇌ Sn²⁺(aq) + 2Cu⁺(aq) at 25°C:\nGiven: E°(Sn²⁺/Sn) = −0.14 V and E°(Cu²⁺/Cu⁺) = +0.15 V.\nCalculate:\n(a) The standard cell potential (E°_cell),\n(b) The standard Gibbs free energy change (ΔG°),\n(c) The equilibrium constant (K_eq) of the reaction.',
      givenData: [
        'E°(Cu²⁺/Cu⁺) = +0.15 V (Cathode reduction)',
        'E°(Sn²⁺/Sn) = −0.14 V (Anode oxidation)',
        'F = 96,485 C·mol⁻¹',
        'T = 298.15 K',
        'n = 2 moles of electrons transferred',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Calculate the standard cell potential (E°_cell)',
          explanation: 'Subtract anode potential from cathode potential:',
          equation:
            'E°_cell = E°_cathode(Cu²⁺/Cu⁺) − E°_anode(Sn²⁺/Sn)\nE°_cell = +0.15 V − (−0.14 V) = +0.29 V',
        },
        {
          stepTitle: 'Step 2: Calculate the standard free energy change (ΔG°)',
          explanation: 'Use ΔG° = −n · F · E°_cell:',
          equation:
            'ΔG° = −2 × 96,485 C·mol⁻¹ × 0.29 V\nΔG° = −55,961 J·mol⁻¹ = −55.96 kJ·mol⁻¹',
        },
        {
          stepTitle: 'Step 3: Calculate the equilibrium constant (K_eq)',
          explanation:
            'At equilibrium, E_cell = 0 and Q = K_eq, so log K_eq = (n · E°_cell) / 0.0591:',
          equation:
            'log K_eq = (2 × 0.29) / 0.0591 = 0.58 / 0.0591 = 9.8139\nK_eq = 10^{9.8139} = 6.51 × 10⁹',
        },
      ],
      finalAnswer:
        '(a) E°_cell = +0.29 V; (b) ΔG° = −55.96 kJ·mol⁻¹; (c) K_eq = 6.51 × 10⁹',
    },
    {
      id: 'chem-m2-b13',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'Class Test (CT) Mastery Drill 5 · Concentration Cell Problem · Professor’s Core Requirement',
      title: 'Class Test Drill 5: Electrolyte Concentration Cell Potential Difference',
      summaryText:
        'Calculation of cell potential for copper concentration cell Cu | Cu²⁺(0.002 M) || Cu²⁺(0.2 M) | Cu at 25°C.',
      marks: '3–4 Marks',
      problemStatement:
        'Calculate the EMF at 25°C of the copper concentration cell:\nCu(s) | Cu²⁺(aq, 0.002 M) || Cu²⁺(aq, 0.2 M) | Cu(s)\nWhat happens to the cell potential as the cell discharges over time?',
      givenData: [
        'Anode concentration, C₁ = [Cu²⁺]_anode = 0.002 M = 2 × 10⁻³ M',
        'Cathode concentration, C₂ = [Cu²⁺]_cathode = 0.2 M = 2 × 10⁻¹ M',
        'n = 2 (Cu²⁺ + 2e⁻ ⇌ Cu)',
        'E°_cell = 0.00 V (Identical metal electrodes)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Write the concentration cell equation',
          explanation:
            'For an electrolyte concentration cell without transference with n = 2:',
          equation:
            'E_cell = (0.0591 / n) · log (C₂ / C₁)\nE_cell = (0.0591 / 2) · log (0.2 / 0.002)',
        },
        {
          stepTitle: 'Step 2: Evaluate the logarithm and solve for E_cell',
          explanation: 'Compute concentration ratio C₂/C₁ and log:',
          equation:
            'C₂ / C₁ = 0.2 / 0.002 = 100\nlog(100) = 2.0\nE_cell = 0.02955 × 2.0 = 0.0591 V',
        },
        {
          stepTitle: 'Step 3: Describe behavior during discharge',
          explanation:
            'As the cell discharges, Cu dissolves at the anode, increasing C₁, while Cu²⁺ plates out at the cathode, decreasing C₂. The ratio C₂/C₁ continuously drops toward 1. When C₁ = C₂, log(C₂/C₁) = 0 and the cell potential falls to 0 V (dead battery).',
          equation: 'As C₁ ⟶ C₂, E_cell ⟶ 0 V (Chemical Equilibrium)',
        },
      ],
      finalAnswer:
        'E_cell = 0.0591 V (59.1 mV). As the cell discharges, C₁ increases and C₂ decreases until C₁ = C₂, at which point E_cell becomes 0 V.',
    },
  ],
};

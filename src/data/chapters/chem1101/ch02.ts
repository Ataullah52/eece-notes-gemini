import type { ChapterNote } from '../../types';

export const CHEM1101_CH02: ChapterNote = {
  id: 'chem1101-ch02',
  unitNumber: 'Module 02',
  title: 'Electrochemical Cells (Electrolytic and Galvanic/Voltaic)',
  summary:
    'Electrode Reaction and Potentials, Reference Electrode, Reversible and Concentration Cells.',
  estimatedMinutes: 60,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m2-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Electrochemistry Q3) · Professor’s Suggestion Sheet · PUST EECE 2024 Q1(a), 2020 Q4(c,d)',
      title: 'Electrochemical Cells, Daniell Cell, and Salt Bridge',
      summaryText:
        'How a spontaneous redox reaction produces an electric current in a galvanic cell, comparison with electrolytic cells, Daniell cell working, and role of the salt bridge.',
      memorizeStatements: [
        'Electrochemical Cell: A device capable of either generating electrical energy from a spontaneous chemical redox reaction (Galvanic/Voltaic cell) or using external electrical energy to drive a non-spontaneous chemical redox reaction (Electrolytic cell).',
        'Galvanic (Voltaic) Cell: An electrochemical cell that converts chemical energy of a spontaneous redox reaction (ΔG < 0, E_cell > 0) directly into electrical energy.',
        'Electrolytic Cell: An electrochemical cell in which external electrical energy drives a non-spontaneous redox reaction (ΔG > 0, E_cell < 0).',
        'Salt Bridge: An inverted U-tube filled with a concentrated inert electrolyte (KCl, KNO₃, or NH₄NO₃) in agar-agar gel that maintains electrical neutrality between half-cells and minimizes liquid-junction potential.',
        'Daniell Cell Representation: Zn(s) | ZnSO₄(aq, 1 M) || CuSO₄(aq, 1 M) | Cu(s), with standard EMF E°_cell = +1.10 V at 25°C.',
      ],
      bulletPoints: [
        'How a Redox Reaction Produces an Electrical Current (CR Question Bank Q3):',
        '1. Direct Mixing vs. Spatial Separation: If a zinc strip is placed directly in CuSO₄ solution, Zn transfers electrons directly to colliding Cu²⁺ ions and the enthalpy of reaction is dissipated entirely as heat (no useful current).',
        '2. Separation into Half-Cells: To harness electrical current, the oxidation half-reaction (Zn → Zn²⁺ + 2e⁻) and reduction half-reaction (Cu²⁺ + 2e⁻ → Cu) are physically separated into two half-cell compartments.',
        '3. External Electron Flow & Internal Ion Flow: The two metal electrodes are connected externally by a metallic wire (through which electrons flow from the negative anode to the positive cathode, doing electrical work) and internally by a salt bridge (through which counter-ions migrate to maintain charge neutrality and complete the closed circuit).',
        'Construction and Working of the Daniell Cell (PUST 2020 Q4c, Suggestion Q16):',
        '1. Anode Half-Cell (Left): A zinc rod immersed in 1 M ZnSO₄ solution. Zinc atoms undergo spontaneous oxidation, leaving electrons on the Zn rod (making it the negative terminal):\nZn(s) → Zn²⁺(aq) + 2e⁻   (E°_ox = +0.763 V)',
        '2. Cathode Half-Cell (Right): A copper rod immersed in 1 M CuSO₄ solution. Cu²⁺ ions from solution accept electrons from the Cu rod (making it the positive terminal) and deposit as metallic Cu:\nCu²⁺(aq) + 2e⁻ → Cu(s)   (E°_red = +0.337 V)',
        '3. Overall Cell Reaction and Standard EMF:\nZn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s)\nE°_cell = E°_cathode − E°_anode = +0.337 − (−0.763) = +1.10 V',
        '4. Electron vs. Ion Flow: Electrons flow externally from the Zn anode to the Cu cathode through the wire; inside the cell, anions (SO₄²⁻, Cl⁻) migrate toward the anode compartment and cations (K⁺) migrate toward the cathode compartment.',
        'Functions and Selection Criteria of a Salt Bridge (PUST 2020 Q4d):',
        '• Completes the internal electrical circuit by allowing ion migration without permitting bulk mixing of the two half-cell solutions.',
        '• Maintains electrical neutrality in both compartments: Cl⁻/NO₃⁻ ions move into the anode compartment to neutralize excess Zn²⁺, while K⁺ ions move into the cathode compartment to replace consumed Cu²⁺.',
        '• Eliminates Liquid-Junction Potential (E_j): KCl or KNO₃ is specifically chosen because the ionic mobilities and transport numbers of K⁺ (t_+ ≈ 0.49) and Cl⁻ (t_- ≈ 0.51) are almost equal. Note: KNO₃ or NH₄NO₃ is used instead of KCl when the cell contains Ag⁺, Hg₂²⁺, or Pb²⁺ to avoid precipitation of insoluble chlorides.',
      ],
      table: {
        caption: 'Table 2.1 — Comparison of Galvanic (Voltaic) Cell and Electrolytic Cell',
        headers: ['Feature', 'Galvanic / Voltaic Cell', 'Electrolytic Cell'],
        rows: [
          [
            'Energy Conversion',
            'Chemical energy → Electrical energy',
            'Electrical energy → Chemical energy',
          ],
          [
            'Spontaneity & ΔG',
            'Spontaneous redox reaction (ΔG < 0, E_cell > 0)',
            'Non-spontaneous redox reaction driven by external DC source (ΔG > 0)',
          ],
          [
            'Anode Polarity',
            'Anode is Negative (−) where oxidation occurs',
            'Anode is Positive (+) where oxidation occurs',
          ],
          [
            'Cathode Polarity',
            'Cathode is Positive (+) where reduction occurs',
            'Cathode is Negative (−) where reduction occurs',
          ],
          [
            'Electrode Compartments',
            'Two half-cells usually separated by a salt bridge or porous pot',
            'Both electrodes are typically immersed in the same electrolyte container',
          ],
          [
            'Examples',
            'Daniell cell, Lead-acid discharging, Dry cell',
            'Electrolysis of brine, Electroplating of Ag/Cu',
          ],
        ],
      },
      examYears: ['2024', '2020'],
      marks: '4–5 Marks',
      professorTip:
        'Remember the mnemonic LOAN for Galvanic cells: Left, Oxidation, Anode, Negative. In both Galvanic and Electrolytic cells, Oxidation ALWAYS occurs at the Anode and Reduction ALWAYS occurs at the Cathode—only the signs (+/−) flip.',
    },
    {
      id: 'chem-m2-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 2, Part A Q10–Q11, Part B Q6) · PUST EECE 2015 Q1(a)',
      title: 'Single Electrode Potential, Standard EMF, and Nernst Equation',
      summaryText:
        'Origin of electrical double layer (Helmholtz double layer), standard electrode potential E°, EMF vs. potential difference, and thermodynamic derivation of the Nernst equation.',
      memorizeStatements: [
        'Single Electrode Potential (E): The electrical potential difference set up at the interface between a metal electrode and the solution of its own ions in equilibrium.',
        'Standard Electrode Potential (E°): The reversible single electrode potential measured at 25°C (298 K), 1 atm gas pressure, and unit activity (1 M effective concentration) of the ions.',
        'Electromotive Force (EMF): The maximum potential difference between the two electrodes of a galvanic cell when no current is drawn from the cell (open-circuit voltage).',
        'Nernst Equation at 25°C: E_cell = E°_cell − (0.0591 / n) log Q, where n is the number of moles of electrons transferred and Q is the reaction quotient.',
      ],
      bulletPoints: [
        'Origin of Single Electrode Potential (Nernst Solution Pressure Theory):',
        '• When a metal strip M is dipped into a solution of its ions M^{n+}, two opposing tendencies occur: (i) De-electronation (oxidation M → M^{n+} + ne⁻) leaving negative charge on the metal, and (ii) Electronation (reduction M^{n+} + ne⁻ → M) depositing positive charge on the metal.',
        '• At dynamic equilibrium, a Helmholtz Electrical Double Layer forms at the metal–solution interface, creating the single electrode potential E.',
        'Thermodynamic Derivation of the Nernst Equation (Suggestion Part B Q6):',
        '1. Consider a general reversible cell reaction: aA + bB ⇌ cC + dD involving the transfer of n moles of electrons.',
        '2. From chemical thermodynamics, the Van’t Hoff reaction isotherm relates Gibbs free energy change ΔG to the standard free energy change ΔG°:\nΔG = ΔG° + RT ln Q\nwhere Q = ([C]^c [D]^d) / ([A]^a [B]^b) is the reaction quotient.',
        '3. In a reversible electrochemical cell, the maximum electrical work done by the system equals the decrease in Gibbs free energy:\n−ΔG = n · F · E_cell   and   −ΔG° = n · F · E°_cell',
        '4. Substituting ΔG = −nFE_cell and ΔG° = −nFE°_cell into the Van’t Hoff isotherm:\n−nFE_cell = −nFE°_cell + RT ln Q',
        '5. Dividing throughout by −nF and converting natural log to base-10 log (ln Q = 2.303 log Q):\nE_cell = E°_cell − (2.303 · R · T) / (n · F) · log Q',
        '6. At standard temperature T = 298.15 K (25°C), with R = 8.314 J·mol⁻¹·K⁻¹ and F = 96,485 C·mol⁻¹:\n(2.303 × 8.314 × 298.15) / 96485 = 0.05916 V ≈ 0.0591 V\nHence:\nE_cell = E°_cell − (0.0591 / n) log ( [Products] / [Reactants] )',
      ],
      equations: [
        {
          label: 'Gibbs Free Energy & Cell Potential',
          formula: 'ΔG = −n · F · E_cell\nΔG° = −n · F · E°_cell = −2.303 · R · T · log K_eq',
          units: 'J·mol⁻¹',
          note: 'Spontaneous reaction requires E_cell > 0 (so ΔG < 0)',
        },
        {
          label: 'Nernst Equation for Half-Cell Reduction M^{n+} + ne⁻ ⇌ M(s)',
          formula: 'E_{M^{n+}/M} = E°_{M^{n+}/M} + (0.0591 / n) log [M^{n+}]',
          units: 'V (at 298 K)',
          note: 'Activity of pure solid metal [M(s)] = 1',
        },
        {
          label: 'Nernst Equation for Full Cell',
          formula: 'E_cell = E°_cell − (2.303 · R · T) / (n · F) · log Q\nE_cell = E°_cell − (0.0591 / n) log ( [Anode Ion]^a / [Cathode Ion]^b )',
          units: 'V (at 298 K)',
          note: 'E°_cell = E°_cathode(red) − E°_anode(red)',
        },
      ],
      examYears: ['2015'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m2-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 2, Part A Q12, Part B Q7) · PUST EECE 2021 Q1(c), 2015 Q1(b)',
      title: 'Reference Electrodes: Standard Hydrogen and Calomel Electrodes',
      summaryText:
        'Need for reference electrodes, primary reference (Standard Hydrogen Electrode, SHE, E° = 0.000 V), and secondary reference (Saturated Calomel Electrode, SCE, Hg | Hg₂Cl₂ | KCl).',
      memorizeStatements: [
        'Reference Electrode: An electrode that has an accurately known, stable, and reproducible electrode potential and is coupled with an indicator electrode to measure its single electrode potential.',
        'Standard Hydrogen Electrode (SHE): Pt(s) | H₂(g, 1 atm) | H⁺(aq, a = 1 M), whose potential is arbitrarily assigned as E° = 0.000 V at all temperatures.',
        'Calomel Electrode Representation: Hg(l) | Hg₂Cl₂(s) | KCl(aq), with reversible half-reaction Hg₂Cl₂(s) + 2e⁻ ⇌ 2Hg(l) + 2Cl⁻(aq).',
      ],
      bulletPoints: [
        '1. Primary Reference Electrode — Standard Hydrogen Electrode (SHE) [PUST 2015 Q1b]:',
        '• Construction: Consists of a platinum foil coated with finely divided platinum black (to catalyze H₂/H⁺ equilibrium) sealed into a glass jacket and immersed in a 1 M H⁺ (HCl) acid solution. Pure, dry H₂ gas is bubbled over the Pt foil at 1 atm pressure at 298 K.',
        '• Reversible Half-Reactions:\nAs Anode (Oxidation): H₂(g, 1 atm) → 2H⁺(aq, 1 M) + 2e⁻\nAs Cathode (Reduction): 2H⁺(aq, 1 M) + 2e⁻ → H₂(g, 1 atm)',
        '• Nernst Equation for Hydrogen Electrode at 25°C (P_{H₂} = 1 atm):\nE_{H⁺/H₂} = 0 − 0.0591 log (1 / [H⁺]) = −0.0591 · pH',
        '• Limitations of SHE: Difficult to maintain exact 1 atm H₂ gas pressure and 1 M H⁺ activity; Pt black surface is easily poisoned by traces of H₂S, As, CN⁻, or Hg.',
        '2. Secondary Reference Electrode — Calomel Electrode [PUST 2021 Q1c]:',
        '• Construction: A glass tube has pure liquid mercury (Hg) at the bottom, covered by a paste of mercurous chloride (calomel, Hg₂Cl₂) and mercury, and filled above with an aqueous KCl solution of definite concentration (0.1 N, 1.0 N, or Saturated KCl). A Pt wire sealed into a side tube makes electrical contact with the liquid Hg.',
        '• Reversible Electrode Reactions:\nAs Cathode (Reduction): Hg₂Cl₂(s) + 2e⁻ → 2Hg(l) + 2Cl⁻(aq)\nAs Anode (Oxidation): 2Hg(l) + 2Cl⁻(aq) → Hg₂Cl₂(s) + 2e⁻',
        '• Potential Expression: E_calomel = E°_{Hg₂Cl₂/Hg} − (0.0591 / 2) log [Cl⁻]² = E° − 0.0591 log [Cl⁻].',
        '• Standard Potentials at 25°C: Saturated KCl (SCE) = +0.2415 V; 1.0 N KCl (NCE) = +0.2800 V; 0.1 N KCl = +0.3338 V.',
      ],
      equations: [
        {
          label: 'Hydrogen Electrode Potential vs. pH',
          formula: 'E_{H⁺/H₂} = −0.0591 · pH',
          units: 'V (at 25°C, 1 atm H₂)',
          note: 'Used to measure unknown pH of a solution',
        },
        {
          label: 'Calomel Electrode Potential',
          formula: 'Hg₂Cl₂(s) + 2e⁻ ⇌ 2Hg(l) + 2Cl⁻(aq)\nE_cal = E°_cal − 0.0591 log [Cl⁻]',
          units: 'V (at 25°C)',
          note: 'Depends solely on chloride ion activity [Cl⁻]',
        },
      ],
      examYears: ['2021', '2015'],
      marks: '3.5–4 Marks',
    },
    {
      id: 'chem-m2-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [4],
      sourceCitation: 'Professor’s Suggestion Sheet (Ch 2) · Haque & Nawab',
      title: 'Reversible Cells and Concentration Cells',
      summaryText:
        'Thermodynamic conditions for reversible electrochemical cells, types of concentration cells (electrode vs. electrolyte), and derivation of E_cell = (0.0591/n) log(C₂/C₁).',
      memorizeStatements: [
        'Reversible Cell: An electrochemical cell in which the chemical reaction is immediately and completely reversed when an external opposing EMF infinitesimally greater than the cell EMF (E_ext = E_cell + dE) is applied.',
        'Concentration Cell: A galvanic cell in which both electrodes are chemically identical and the EMF arises solely from a difference in concentration of the electrolyte or electrodes in the two half-cells.',
        'Concentration Cell EMF Formula: E_cell = (2.303 RT / nF) log(C₂ / C₁) = (0.0591 / n) log(C₂ / C₁) at 25°C (where C₂ > C₁).',
      ],
      bulletPoints: [
        'Three Thermodynamic Conditions for a Reversible Cell:',
        '1. When the external opposing potential exactly equals the cell potential (E_ext = E_cell), no current flows and no chemical reaction occurs.',
        '2. When E_ext = E_cell − dE, current flows from the cell (spontaneous forward reaction).',
        '3. When E_ext = E_cell + dE, current flows into the cell and the exact reverse chemical reaction occurs quantitatively (e.g., Daniell cell; whereas Zn | H₂SO₄ | Cu is irreversible because H₂ gas escapes).',
        'Derivation of EMF of an Electrolyte Concentration Cell (Without Transference):',
        '1. Consider two identical metal rods M dipped in solutions of its own ions M^{n+} at concentrations C₁ and C₂ (where C₂ > C₁):\nM(s) | M^{n+}(C₁) || M^{n+}(C₂) | M(s)',
        '2. Oxidation occurs at the dilute compartment (Anode, C₁): M(s) → M^{n+}(C₁) + ne⁻.',
        '3. Reduction occurs at the concentrated compartment (Cathode, C₂): M^{n+}(C₂) + ne⁻ → M(s).',
        '4. Net Cell Process: M^{n+}(C₂) → M^{n+}(C₁) (transfer of ions from higher concentration C₂ to lower concentration C₁, so E°_cell = 0).',
        '5. Applying the Nernst equation with E°_cell = 0:\nE_cell = 0 − (2.303 RT / nF) log(C₁ / C₂) = (2.303 RT / nF) log(C₂ / C₁)\nAt 25°C: E_cell = (0.0591 / n) log(C₂ / C₁).',
      ],
      equations: [
        {
          label: 'Concentration Cell EMF (at 298 K)',
          formula: 'E_cell = (2.303 · R · T) / (n · F) · log (C₂ / C₁) = (0.0591 / n) log (C₂ / C₁)',
          units: 'V',
          note: 'E°_cell = 0 V; spontaneous operation requires C₂ (cathode) > C₁ (anode)',
        },
      ],
      marks: '3.5 Marks',
    },
    {
      id: 'chem-m2-b5',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Electrochemistry Q9) · PUST EECE 2025 Exam Q2(c) · Professor’s Suggestion Sheet',
      title: 'Daniell Cell EMF Calculation Using Nernst Equation',
      summaryText:
        'Calculate the EMF of a Daniell cell at 25°C when [ZnSO₄] = 0.001 M and [CuSO₄] = 0.1 M, given E°_cell = 1.1 V.',
      examYears: ['2025'],
      marks: '4 Marks',
      problemStatement:
        'Calculate the EMF of a Daniell cell at 25°C when the concentrations of ZnSO₄ and CuSO₄ are 0.001 M and 0.1 M respectively. The standard potential of the cell is 1.1 V.',
      givenData: [
        'Anode electrolyte concentration, [Zn²⁺] = [ZnSO₄] = 0.001 M = 10⁻³ M',
        'Cathode electrolyte concentration, [Cu²⁺] = [CuSO₄] = 0.1 M = 10⁻¹ M',
        'Standard cell potential, E°_cell = 1.1 V',
        'Temperature, T = 25°C = 298 K',
        'Number of electrons transferred, n = 2',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Write the Daniell cell reaction and Nernst equation',
          explanation:
            'In the Daniell cell, Zn is oxidized to Zn²⁺ at the anode and Cu²⁺ is reduced to Cu at the cathode (n = 2):',
          equation:
            'Zn(s) + Cu²⁺(aq) ⇌ Zn²⁺(aq) + Cu(s)\nE_cell = E°_cell − (0.0591 / n) log ( [Zn²⁺] / [Cu²⁺] )',
        },
        {
          stepTitle: 'Step 2: Substitute the given concentrations and E°_cell',
          explanation: 'Insert [Zn²⁺] = 0.001 M, [Cu²⁺] = 0.1 M, n = 2, and E°_cell = 1.1 V:',
          equation:
            'E_cell = 1.1 − (0.0591 / 2) log (0.001 / 0.1)\nE_cell = 1.1 − 0.02955 · log (10⁻²)\nE_cell = 1.1 − 0.02955 × (−2)',
        },
        {
          stepTitle: 'Step 3: Compute the final cell potential',
          explanation: 'Evaluate the sum:',
          equation:
            'E_cell = 1.1 + 0.0591\nE_cell = 1.1591 V',
        },
      ],
      finalAnswer: 'E_cell = 1.1591 V',
    },
    {
      id: 'chem-m2-b6',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Electrochemistry Q7) · PUST EECE 2021 Exam Q1(d) & Q3(b)',
      title: 'Spontaneity of Redox Reactions and H₂ Displacement from Acids',
      summaryText:
        'Predict whether 2Ag(s) + Zn²⁺(aq) → 2Ag⁺(aq) + Zn(s) is feasible, and explain why Zn liberates H₂ from dilute H₂SO₄ whereas Ag does not.',
      examYears: ['2021'],
      marks: '2.67 + 3.67 Marks',
      problemStatement:
        '(i) Predict whether the reaction 2Ag(s) + Zn²⁺(aq) → 2Ag⁺(aq) + Zn(s) is feasible or not [Given: E°(Ag⁺/Ag) = +0.80 V, E°(Zn²⁺/Zn) = −0.763 V]. (ii) Explain why zinc reacts with dilute H₂SO₄ to give H₂ gas, whereas silver does not.',
      givenData: [
        'Standard reduction potential of Silver: E°(Ag⁺/Ag) = +0.80 V',
        'Standard reduction potential of Zinc: E°(Zn²⁺/Zn) = −0.763 V',
        'Standard reduction potential of Hydrogen: E°(H⁺/½H₂) = 0.000 V',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Check feasibility of 2Ag(s) + Zn²⁺(aq) → 2Ag⁺(aq) + Zn(s)',
          explanation:
            'In the proposed reaction, Ag(s) is oxidized at the anode (2Ag → 2Ag⁺ + 2e⁻) and Zn²⁺ is reduced at the cathode (Zn²⁺ + 2e⁻ → Zn). Calculate E°_cell:',
          equation:
            'E°_cell = E°_cathode(Zn²⁺/Zn) − E°_anode(Ag⁺/Ag)\nE°_cell = −0.763 V − (+0.80 V) = −1.563 V',
        },
        {
          stepTitle: 'Step 2: Apply the thermodynamic spontaneity criterion (ΔG° = −nFE°_cell)',
          explanation:
            'Since E°_cell = −1.563 V < 0, the standard free energy change ΔG° = −nFE°_cell is positive (ΔG° > 0). Therefore, the reaction is non-spontaneous and NOT feasible.',
          equation: 'E°_cell = −1.563 V < 0   (Not Feasible)',
        },
        {
          stepTitle: 'Step 3: Explain H₂ displacement from dilute H₂SO₄ by Zn vs. Ag',
          explanation:
            'For a metal M to displace H₂ gas from dilute acid (2H⁺ + 2e⁻ → H₂, E° = 0.00 V), the metal must act as the anode (oxidation) and H⁺ as the cathode (reduction):',
          equation:
            'For Zn + 2H⁺ → Zn²⁺ + H₂:   E°_cell = E°(H⁺/H₂) − E°(Zn²⁺/Zn) = 0.00 − (−0.763) = +0.763 V > 0   (Spontaneous)\nFor 2Ag + 2H⁺ → 2Ag⁺ + H₂:   E°_cell = E°(H⁺/H₂) − E°(Ag⁺/Ag) = 0.00 − (+0.80) = −0.80 V < 0   (Non-spontaneous)',
        },
      ],
      finalAnswer:
        '(i) E°_cell = −1.563 V < 0, so the reaction is NOT feasible. (ii) Zn lies above hydrogen in the electrochemical series (E° = −0.763 V < 0) giving E°_cell = +0.763 V > 0 with H⁺, whereas Ag lies below hydrogen (E° = +0.80 V > 0) giving E°_cell = −0.80 V < 0.',
    },
  ],
};

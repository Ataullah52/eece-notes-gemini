import type { ChapterNote } from '../../types';

export const CHEM1101_CH03: ChapterNote = {
  id: 'chem1101-ch03',
  unitNumber: 'Module 03',
  title: 'Chemical Equilibrium',
  summary:
    'Reversible and Irreversible Reaction, Chemical Equilibrium and its Dynamic Nature, Characteristics, Laws of Mass Action and Equilibrium Constant Kc, Kp and Kx, Le-Chatelier’s Principles and Applications.',
  estimatedMinutes: 70,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m3-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Equilibrium Q2 & Q4) · Handwritten Class Notes · PUST EECE 2024, 2023, 2021, 2020, 2015',
      title: 'Reversible Reactions, Dynamic Equilibrium, and Characteristics',
      summaryText:
        'Reversible vs. irreversible and homogeneous vs. heterogeneous reactions, why chemical equilibrium is called dynamic equilibrium (water-tank analogy & rate curves), and 6 core characteristics.',
      memorizeStatements: [
        'Reversible Reaction: A chemical reaction that proceeds simultaneously in both forward and backward directions under the same experimental conditions and never goes to 100% completion (e.g., N₂(g) + 3H₂(g) ⇌ 2NH₃(g)).',
        'Irreversible Reaction: A unidirectional chemical reaction in which products do not recombine to form reactants, going to completion via precipitation, gas escape, or strong neutralization (e.g., AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)).',
        'Chemical Equilibrium: The state in a reversible reaction carried out in a closed vessel at which the rate of the forward reaction equals the rate of the backward reaction (R_f = R_b), so macroscopic concentrations of reactants and products remain constant over time.',
        'Equilibrium Constant (K): The ratio of the rate constant of the forward reaction (k_f) to the rate constant of the backward reaction (k_b), equal to the product of active masses of products divided by the product of active masses of reactants each raised to its stoichiometric power at equilibrium at a given temperature.',
        'Homogeneous Equilibrium: An equilibrium system in which all reactants and products exist in a single physical phase (e.g., 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)).',
        'Heterogeneous Equilibrium: An equilibrium system involving reactants and products in two or more distinct phases (e.g., CaCO₃(s) ⇌ CaO(s) + CO₂(g)).',
      ],
      bulletPoints: [
        'Why Chemical Equilibrium is Called a Dynamic Equilibrium (Class Note & PUST 2023 Q2a):',
        '1. Kinetic Progression: At time t = 0, only reactants are present, so the forward rate R_f is maximum and backward rate R_b = 0. As reactants are consumed, R_f decreases while product buildup causes R_b to increase until at t = t_eq, R_f = R_b.',
        '2. Ongoing Microscopic Activity: At equilibrium, the reaction has NOT stopped—reactant molecules continue converting into products and product molecules continue converting back into reactants at identical velocities (R_f = R_b ≠ 0).',
        '3. Class Note Water-Tank Analogy: Just as a water tank with inflow tap rate equal to outflow tap rate maintains a constant water level while water continuously flows through it, a chemical system at equilibrium maintains constant concentrations while forward and reverse molecular transformations continue unabated.',
        '4. Isotopic Tracer Proof: Adding Deuterium (D₂) to an equilibrium mixture of N₂, H₂, and NH₃ produces deuterated ammonia (NH₂D, NHD₂, ND₃) while total NH₃ concentration stays constant, proving forward and reverse reactions are continuously occurring.',
        'Six Essential Characteristics of Chemical Equilibrium (PUST 2024 Q2b, 2021 Q2b):',
        '1. Constancy of Observable Properties: At constant temperature, concentration, partial pressure, density, and color become invariant with time.',
        '2. Dynamic Nature: Forward and backward rates are equal and non-zero (R_f = R_b > 0).',
        '3. Closed Vessel Requirement: Can be established only in a closed system so no gaseous substance escapes.',
        '4. Direction Independence: The same equilibrium state and equilibrium constant K are reached whether starting from pure reactants or pure products.',
        '5. Independence from Catalyst: A catalyst accelerates both forward and backward reactions equally (by lowering activation energy E_a by the same amount), helping reach equilibrium faster without altering K or equilibrium composition.',
        '6. Thermodynamic Criterion: At equilibrium, the Gibbs free energy of the system is at a minimum and ΔG = 0.',
      ],
      table: {
        caption: 'Table 3.1 — Reversible vs. Irreversible Chemical Reactions',
        headers: ['Feature', 'Reversible Reaction', 'Irreversible Reaction'],
        rows: [
          [
            'Direction',
            'Bidirectional (proceeds forward and backward simultaneously, denoted by ⇌)',
            'Unidirectional (proceeds only from reactants to products, denoted by →)',
          ],
          [
            'Completion',
            'Never goes to completion; reaches a dynamic equilibrium state',
            'Goes almost to 100% completion',
          ],
          [
            'System Requirement',
            'Requires a closed vessel to prevent escape of gaseous products',
            'Occurs in both open and closed vessels',
          ],
          [
            'Free Energy Change',
            'Attains ΔG = 0 at equilibrium',
            'Has a large negative free energy change (ΔG ≪ 0)',
          ],
          [
            'Examples',
            'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g); H₂(g) + I₂(g) ⇌ 2HI(g)',
            '2KClO₃(s) → 2KCl(s) + 3O₂(g)↑; NaOH + HCl → NaCl + H₂O',
          ],
        ],
      },
      examYears: ['2024', '2023', '2021', '2020', '2015'],
      marks: '3–4 Marks',
    },
    {
      id: 'chem-m3-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Equilibrium Q7) · Handwritten Class Notes · PUST EECE 2022, 2020, 2016, 2015',
      title: 'Law of Mass Action and K_p, K_c, K_x Relations',
      summaryText:
        'Guldberg & Waage’s Law of Mass Action, derivation of equilibrium constant K_c, and complete derivations relating K_p, K_c, and K_x.',
      memorizeStatements: [
        'Law of Mass Action (Guldberg & Waage, 1864): At constant temperature, the rate of a chemical reaction at any instant is directly proportional to the product of the active masses (molar concentrations or partial pressures) of the reacting substances, each raised to a power equal to its stoichiometric coefficient in the balanced chemical equation.',
        'Equilibrium Constant Relations: K_p = K_c · (RT)^{Δn} and K_p = K_x · P^{Δn}, where Δn = (sum of moles of gaseous products) − (sum of moles of gaseous reactants).',
      ],
      bulletPoints: [
        'Derivation of K_c from Law of Mass Action:',
        '1. Consider a general reversible homogeneous reaction at temperature T:\naA + bB ⇌ cC + dD',
        '2. By the Law of Mass Action:\nForward reaction rate: R_f = k_f [A]^a [B]^b\nBackward reaction rate: R_b = k_b [C]^c [D]^d',
        '3. At chemical equilibrium, R_f = R_b:\nk_f [A]^a [B]^b = k_b [C]^c [D]^d\nK_c = k_f / k_b = ([C]^c [D]^d) / ([A]^a [B]^b)',
        'Derivation of Relation K_p = K_c(RT)^{Δn} (Class Note & PUST 2022 Q2b, 2020 Q2d, 2016 Q2a, 2015 Q2b):',
        '1. For a gaseous reversible reaction aA(g) + bB(g) ⇌ cC(g) + dD(g), the pressure equilibrium constant is:\nK_p = (P_C^c · P_D^d) / (P_A^a · P_B^b)',
        '2. From the Ideal Gas Law for any gas component i: P_i V = n_i RT ⇒ P_i = (n_i / V) RT = C_i RT = [i] RT.',
        '3. Thus, P_A = [A]RT, P_B = [B]RT, P_C = [C]RT, and P_D = [D]RT.',
        '4. Substituting these partial pressures into K_p:\nK_p = (([C]RT)^c · ([D]RT)^d) / (([A]RT)^a · ([B]RT)^b)\nK_p = (([C]^c [D]^d) / ([A]^a [B]^b)) · (RT)^{(c + d) − (a + b)}',
        '5. Defining Δn = (c + d) − (a + b) = n_p(g) − n_r(g) and recognizing the concentration ratio as K_c:\nK_p = K_c · (RT)^{Δn}',
        'Derivation of Relation K_p = K_x · P^{Δn} (Class Note):',
        '1. By Dalton’s Law of Partial Pressures, the partial pressure P_i of gas i equals its mole fraction X_i times the total pressure P: P_i = X_i · P.',
        '2. Substituting P_A = X_A P, P_B = X_B P, P_C = X_C P, P_D = X_D P into K_p:\nK_p = ((X_C P)^c (X_D P)^d) / ((X_A P)^a (X_B P)^b) = ((X_C^c X_D^d) / (X_A^a X_B^b)) · P^{(c + d) − (a + b)}\nK_p = K_x · P^{Δn}',
        'Three Special Cases Comparing K_p and K_c (PUST 2022 Q2c):',
        '• Case 1 (Δn = 0): K_p = K_c = K_x (e.g., H₂(g) + I₂(g) ⇌ 2HI(g) or N₂(g) + O₂(g) ⇌ 2NO(g)).',
        '• Case 2 (Δn > 0): K_p > K_c (e.g., PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), where Δn = 2 − 1 = +1, so K_p = K_c · RT).',
        '• Case 3 (Δn < 0): K_p < K_c (e.g., N₂(g) + 3H₂(g) ⇌ 2NH₃(g), where Δn = 2 − 4 = −2, so K_p = K_c · (RT)⁻²).',
      ],
      equations: [
        {
          label: 'Equilibrium Constant Expressions',
          formula: 'K_c = ([C]^c [D]^d) / ([A]^a [B]^b)\nK_p = (P_C^c P_D^d) / (P_A^a P_B^b)\nK_x = (X_C^c X_D^d) / (X_A^a X_B^b)',
          units: '(mol·L⁻¹)^{Δn}, atm^{Δn}, dimensionless',
          note: 'Pure solids and pure liquids have unit activity and are omitted',
        },
        {
          label: 'Inter-relation of K_p, K_c, and K_x',
          formula: 'K_p = K_c · (RT)^{Δn} = K_x · P^{Δn}',
          units: 'atm^{Δn}',
          note: 'Use R = 0.0821 L·atm·mol⁻¹·K⁻¹ when partial pressures are in atm',
        },
      ],
      examYears: ['2022', '2020', '2016', '2015'],
      marks: '4 Marks',
      professorTip:
        'Always write R = 0.0821 L·atm·mol⁻¹·K⁻¹ (NOT 8.314 J·mol⁻¹·K⁻¹) when converting between K_c (in mol/L) and K_p (in atm).',
    },
    {
      id: 'chem-m3-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Equilibrium Q3) · Handwritten Class Notes · PUST EECE 2024 Q2(c), 2021 Q2(a)',
      title: 'Van’t Hoff Free Energy Relation and PCl₅ Dissociation',
      summaryText:
        'Thermodynamic relation between standard Gibbs free energy change and equilibrium constant (ΔG° = −RT ln K_p) and derivation of K_c and K_p for PCl₅(g) ⇌ PCl₃(g) + Cl₂(g).',
      memorizeStatements: [
        'Van’t Hoff Isotherm & Standard Free Energy Relation: ΔG = ΔG° + RT ln Q, and at equilibrium (ΔG = 0, Q = K_p), ΔG° = −RT ln K_p = −2.303 RT log K_p.',
        'Van’t Hoff Isochore (Temperature Dependence of K_p): log(K₂ / K₁) = [ΔH° / (2.303 R)] · [(T₂ − T₁) / (T₁ T₂)].',
        'Dissociation of PCl₅: K_c = α² / [(1 − α)V] and K_p = (α² P) / (1 − α²), where α is the degree of dissociation.',
      ],
      bulletPoints: [
        'Derivation of ΔG° = −RT ln K_p (PUST 2024 Q2c, 2021 Q2a):',
        '1. For a gaseous reaction aA + bB ⇌ cC + dD at constant temperature T, the chemical potential of each ideal gas i is μ_i = μ_i° + RT ln P_i.',
        '2. The reaction Gibbs free energy change is:\nΔG = ∑ ν_p μ_p − ∑ ν_r μ_r = (cμ_C° + dμ_D° − aμ_A° − bμ_B°) + RT ln [(P_C^c P_D^d) / (P_A^a P_B^b)]\nΔG = ΔG° + RT ln Q_p',
        '3. At chemical equilibrium, ΔG = 0 and the reaction quotient Q_p equals the equilibrium constant K_p:\n0 = ΔG° + RT ln K_p\nΔG° = −RT ln K_p = −2.303 · R · T · log K_p',
        '4. Thermodynamic Spontaneity Criteria from ΔG°:',
        '• If ΔG° < 0, then ln K_p > 0 ⇒ K_p > 1 (Products predominate at equilibrium; forward reaction is spontaneous under standard conditions).',
        '• If ΔG° = 0, then ln K_p = 0 ⇒ K_p = 1.',
        '• If ΔG° > 0, then ln K_p < 0 ⇒ K_p < 1 (Reactants predominate at equilibrium).',
        'Application of Law of Mass Action to Thermal Dissociation of PCl₅ (Class Note):',
        '1. Reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Let 1 mole of PCl₅ be taken in volume V liters, and let α be the degree of dissociation at equilibrium.',
        '2. Moles at equilibrium: n(PCl₅) = 1 − α, n(PCl₃) = α, n(Cl₂) = α. Total gaseous moles at equilibrium: n_total = (1 − α) + α + α = 1 + α.',
        '3. Expression for K_c:\nK_c = ([PCl₃][Cl₂]) / [PCl₅] = ((α / V)(α / V)) / ((1 − α) / V) = α² / [(1 − α) · V]',
        '4. Expression for K_p at total pressure P:\nPartial pressures are P(PCl₅) = [(1 − α)/(1 + α)]P, P(PCl₃) = [α/(1 + α)]P, P(Cl₂) = [α/(1 + α)]P.\nK_p = (P_{PCl₃} · P_{Cl₂}) / P_{PCl₅} = (α² · P) / (1 − α²)',
      ],
      equations: [
        {
          label: 'Standard Free Energy & Equilibrium Constant',
          formula: 'ΔG° = −R · T · ln K_p = −2.303 · R · T · log K_p',
          units: 'J·mol⁻¹',
          note: 'Here R = 8.314 J·mol⁻¹·K⁻¹',
        },
        {
          label: 'PCl₅ Dissociation Equilibrium Constants',
          formula: 'K_c = α² / [(1 − α) · V]\nK_p = (α² · P) / (1 − α²)',
          units: 'mol·L⁻¹ and atm',
          note: 'For small α (α ≪ 1), α ≈ √(K_p / P) ∝ 1 / √P',
        },
      ],
      examYears: ['2024', '2021'],
      marks: '3.5–4 Marks',
    },
    {
      id: 'chem-m3-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Equilibrium Q1, Q5, Q6) · Handwritten Class Notes · PUST EECE 2024, 2023, 2022, 2021, 2016',
      title: 'Le Chatelier’s Principle and Haber’s Ammonia Synthesis',
      summaryText:
        'Statement of Le Chatelier’s Principle, effects of temperature, pressure, concentration, catalyst, and inert gas addition (at constant V vs. constant P), and optimization of Haber’s NH₃ synthesis.',
      memorizeStatements: [
        'Le Chatelier’s Principle: If a system at chemical equilibrium is subjected to a change in any of the factors that determine the equilibrium conditions (such as temperature, pressure, or concentration), the equilibrium shifts in that direction which tends to counteract or nullify the effect of the applied change.',
      ],
      bulletPoints: [
        'Effect of Operating Variables on Chemical Equilibrium (Class Note & CR Question Bank Q6):',
        '1. Effect of Temperature:',
        '• Increase in temperature always shifts equilibrium in the Endothermic direction (which absorbs heat).',
        '• Decrease in temperature shifts equilibrium in the Exothermic direction (which liberates heat).',
        '2. Effect of Pressure:',
        '• Increase in total pressure (decrease in volume) shifts equilibrium toward the side with fewer gaseous moles.',
        '• If Δn = 0 (e.g., N₂ + O₂ ⇌ 2NO or H₂ + I₂ ⇌ 2HI), pressure change has NO effect on equilibrium position.',
        '3. Effect of Concentration:',
        '• Adding a reactant (or removing a product) shifts the equilibrium in the forward direction to consume the added reactant.',
        '4. Effect of Adding an Inert Gas (e.g., Argon or Helium — Class Note):',
        '• At Constant Volume (ΔV = 0): Partial pressures and molar concentrations of all reacting gases remain unchanged, so adding an inert gas at constant volume has NO effect on equilibrium for any reaction.',
        '• At Constant Pressure (ΔP = 0): Total volume V increases, reducing molar concentrations of all species. The equilibrium shifts toward the side with a GREATER number of gaseous moles (shifts forward if Δn > 0 like PCl₅ ⇌ PCl₃ + Cl₂; shifts backward if Δn < 0 like N₂ + 3H₂ ⇌ 2NH₃; no effect if Δn = 0).',
        'Application to Industrial Synthesis of Ammonia — Haber’s Process (CR Question Bank Q5, PUST 2024 Q2a, 2023 Q2b, 2022 Q2a):',
        '• Reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g);   ΔH = −55 kJ to −92.4 kJ (Exothermic, Δn = 2 − 4 = −2 < 0).',
        '• High Pressure (200–300 atm): Since 4 volumes of reactants form 2 volumes of NH₃ (Δn = −2), high pressure strongly shifts equilibrium forward.',
        '• Optimum Temperature (450°C–500°C): Because the forward reaction is exothermic, low temperature favors high equilibrium yield. However, at room temperature the reaction rate is negligibly slow; hence an optimum temperature of 450–500°C is used along with finely divided Iron (Fe) catalyst promoted by Mo or K₂O + Al₂O₃.',
        '• Continuous Removal of NH₃: Liquefying and removing NH₃ continuously drives the reaction forward.',
      ],
      table: {
        caption: 'Table 3.2 — Summary of Le Chatelier Shifts for Key Gaseous Equilibria',
        headers: ['Reaction & ΔH, Δn', 'Effect of High T', 'Effect of High P', 'Inert Gas at Const. P'],
        rows: [
          [
            'N₂ + 3H₂ ⇌ 2NH₃ (ΔH < 0, Δn = −2)',
            'Shifts Backward (yield decreases)',
            'Shifts Forward (yield increases)',
            'Shifts Backward (toward 4 moles)',
          ],
          [
            '2SO₂ + O₂ ⇌ 2SO₃ (ΔH < 0, Δn = −1)',
            'Shifts Backward',
            'Shifts Forward',
            'Shifts Backward',
          ],
          [
            'PCl₅ ⇌ PCl₃ + Cl₂ (ΔH > 0, Δn = +1)',
            'Shifts Forward (dissociation increases)',
            'Shifts Backward',
            'Shifts Forward (toward 2 moles)',
          ],
          [
            'N₂ + O₂ ⇌ 2NO (ΔH > 0, Δn = 0)',
            'Shifts Forward',
            'No Effect (Δn = 0)',
            'No Effect (Δn = 0)',
          ],
        ],
      },
      examYears: ['2024', '2023', '2022', '2021', '2016'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m3-b5',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Equilibrium Q6) · PUST EECE 2023 Exam Q2(c)',
      title: 'Calculation of K_c from K_p for Nitrosyl Chloride',
      summaryText:
        'Calculate K_c at 25°C for 2NO(g) + Cl₂(g) ⇌ 2NOCl(g) given K_p = 1.9 × 10³ atm⁻¹.',
      examYears: ['2023'],
      marks: '3 Marks',
      problemStatement:
        'The equilibrium constant K_p for the reaction 2NO(g) + Cl₂(g) ⇌ 2NOCl(g) is 1.9 × 10³ atm⁻¹ at 25°C. Calculate K_c for the reaction at the same temperature.',
      givenData: [
        'Balanced equation: 2NO(g) + Cl₂(g) ⇌ 2NOCl(g)',
        'K_p = 1.9 × 10³ atm⁻¹',
        'Temperature, T = 25°C = 25 + 273 = 298 K',
        'Universal gas constant, R = 0.0821 L·atm·mol⁻¹·K⁻¹',
        'Change in gaseous moles, Δn = 2 − (2 + 1) = −1',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Write the relation between K_p and K_c',
          explanation: 'Using K_p = K_c(RT)^{Δn} with Δn = −1:',
          equation:
            'K_p = K_c · (RT)⁻¹\nK_c = K_p · (RT)',
        },
        {
          stepTitle: 'Step 2: Substitute the numerical values',
          explanation: 'Multiply K_p by R = 0.0821 and T = 298 K:',
          equation:
            'K_c = (1.9 × 10³) × 0.0821 × 298\nK_c = 1900 × 24.4658\nK_c = 4.6485 × 10⁴ L·mol⁻¹ (or M⁻¹)',
        },
      ],
      finalAnswer: 'K_c = 4.65 × 10⁴ L·mol⁻¹',
    },
    {
      id: 'chem-m3-b6',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Equilibrium Q8) · PUST EECE 2022 Q2(d) & 2021 Q2(c) · Suggestion Q27',
      title: 'Calculation of K_p from K_c for Ammonia Synthesis',
      summaryText:
        'Calculate K_p for N₂(g) + 3H₂(g) ⇌ 2NH₃(g) at (i) 500°C with K_c = 6.0 × 10⁻² (PUST 2022/2021) and (ii) 25°C with K_c = 0.50 (Suggestion Q27).',
      examYears: ['2022', '2021'],
      marks: '3–4 Marks',
      problemStatement:
        '(a) [PUST 2022 Q2d & 2021 Q2c]: At 500°C, the equilibrium constant K_c for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) is 6.0 × 10⁻². Calculate K_p at this temperature.\n(b) [Suggestion Part C Q27]: Calculate K_p for the same reaction at 25°C if K_c = 0.50 L²·mol⁻².',
      givenData: [
        'Reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) ⇒ Δn = 2 − (1 + 3) = −2',
        'R = 0.0821 L·atm·mol⁻¹·K⁻¹',
        'Case (a): T₁ = 500 + 273 = 773 K, K_c1 = 6.0 × 10⁻² L²·mol⁻²',
        'Case (b): T₂ = 25 + 273 = 298 K, K_c2 = 0.50 L²·mol⁻²',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Case (a) at 500°C (773 K)',
          explanation: 'Substitute K_c = 6.0 × 10⁻², R = 0.0821, T = 773 K, and Δn = −2 into K_p = K_c(RT)^{Δn}:',
          equation:
            'RT = 0.0821 × 773 = 63.4633 L·atm·mol⁻¹\nK_p = 6.0 × 10⁻² × (63.4633)⁻²\nK_p = 0.06 / 4027.59 = 1.49 × 10⁻⁵ atm⁻²',
        },
        {
          stepTitle: 'Step 2: Solve Case (b) at 25°C (298 K)',
          explanation: 'Substitute K_c = 0.50, R = 0.0821, T = 298 K, and Δn = −2:',
          equation:
            'RT = 0.0821 × 298 = 24.4658 L·atm·mol⁻¹\nK_p = 0.50 × (24.4658)⁻²\nK_p = 0.50 / 598.575 = 8.353 × 10⁻⁴ atm⁻²',
        },
      ],
      finalAnswer: '(a) At 500°C: K_p = 1.49 × 10⁻⁵ atm⁻²; (b) At 25°C: K_p = 8.35 × 10⁻⁴ atm⁻²',
    },
    {
      id: 'chem-m3-b7',
      type: 'pyq',
      priorityTier: 2,
      sourceCitation: 'PUST EECE 2020 Q2(c), 2016 Q2(c), 2015 Q2(c)',
      title: 'Equilibrium Constant Calculation for Hydrogen Iodide Synthesis',
      summaryText:
        'Calculate the equilibrium constant K_c when 1 mole of H₂ and 1 mole of I₂ react in a closed vessel to form 1.56 moles of HI at 444°C.',
      examYears: ['2020', '2016', '2015'],
      marks: '3–4 Marks',
      problemStatement:
        'When 1.0 mole of hydrogen gas and 1.0 mole of iodine vapor are heated in a closed vessel of volume V liters at 444°C until equilibrium is reached, 1.56 moles of HI are formed. Calculate the equilibrium constant K_c and K_p for the reaction H₂(g) + I₂(g) ⇌ 2HI(g).',
      givenData: [
        'Initial moles of H₂, a = 1.0 mol',
        'Initial moles of I₂, b = 1.0 mol',
        'Equilibrium moles of HI formed, 2x = 1.56 mol ⇒ x = 0.78 mol',
        'Volume of vessel = V liters',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Determine the equilibrium moles and concentrations of each species',
          explanation:
            'Since 1 mole of H₂ reacts with 1 mole of I₂ to produce 2 moles of HI, x = 1.56 / 2 = 0.78 mol of H₂ and I₂ are consumed:',
          equation:
            '[H₂] = (1.0 − x) / V = (1.0 − 0.78) / V = 0.22 / V mol·L⁻¹\n[I₂] = (1.0 − x) / V = (1.0 − 0.78) / V = 0.22 / V mol·L⁻¹\n[HI] = 2x / V = 1.56 / V mol·L⁻¹',
        },
        {
          stepTitle: 'Step 2: Calculate K_c and K_p',
          explanation:
            'Because Δn = 2 − (1 + 1) = 0, the volume V cancels out and K_p = K_c:',
          equation:
            'K_c = [HI]² / ([H₂][I₂])\nK_c = (1.56 / V)² / ((0.22 / V) × (0.22 / V))\nK_c = 2.4336 / 0.0484 = 50.28\nK_p = K_c · (RT)⁰ = 50.28',
        },
      ],
      finalAnswer: 'K_c = K_p = 50.28 (dimensionless)',
    },
  ],
};

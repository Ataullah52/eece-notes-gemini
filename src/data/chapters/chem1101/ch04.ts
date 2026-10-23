import type { ChapterNote } from '../../types';

export const CHEM1101_CH04: ChapterNote = {
  id: 'chem1101-ch04',
  unitNumber: 'Module 04',
  title: 'Chemical Kinetics',
  summary:
    'Rate of Chemical Reaction, Order and Molecularity of Reactions, Different Types of Rate Expressions, Methods of Determining Rate and Order, Effect of Temperature on Reaction Rate and Energy of Activation.',
  estimatedMinutes: 80,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m4-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Chemical Kinetics Assignment (§1) · PUST EECE 2023 Q3(a), 2016 Q1(a), 2015 Q3(a)',
      title: 'Rate of Chemical Reaction, Rate Law, and Factors Affecting Rate',
      summaryText:
        'Definitions of average vs. instantaneous reaction rate, rate law & specific rate constant k with general unit (mol·L⁻¹)^{1−n} s⁻¹, and 6 factors influencing reaction rate.',
      memorizeStatements: [
        'Rate of Chemical Reaction: The change in molar concentration of any reactant or product per unit time, expressed as r = −(1/a) d[A]/dt = +(1/c) d[C]/dt (in mol·L⁻¹·s⁻¹).',
        'Specific Rate Constant (Velocity Constant, k): The rate of a chemical reaction when the molar concentration of each reactant is unity ([A] = [B] = 1 mol·L⁻¹).',
        'General Unit of Rate Constant for an n-th Order Reaction: k = (mol·L⁻¹)^{1−n} · s⁻¹ = mol^{1−n} · L^{n−1} · s⁻¹.',
      ],
      bulletPoints: [
        'Average vs. Instantaneous Rate of Reaction:',
        '• Average Rate (r_avg = ± Δ[C] / Δt): The change in molar concentration divided by a finite time interval Δt.',
        '• Instantaneous Rate (r_inst = ± d[C] / dt): The rate of change of concentration at a specific instant of time (slope of the tangent to the concentration–time curve at time t).',
        '• Stoichiometric Rate Expression for aA + bB → cC + dD:\nr = −(1 / a)(d[A] / dt) = −(1 / b)(d[B] / dt) = +(1 / c)(d[C] / dt) = +(1 / d)(d[D] / dt)',
        'Six Factors Affecting the Rate of a Chemical Reaction (PUST 2023 Q3a, 2016 Q1a, 2015 Q3a):',
        '1. Concentration of Reactants (or Pressure for Gases): Higher concentration increases the number of molecules per unit volume, increasing collision frequency and reaction rate (Rate ∝ [Reactant]^n).',
        '2. Temperature: Increasing temperature increases average kinetic energy and exponentially increases the fraction of molecules e^{−E_a/RT} possessing energy ≥ E_a. For most reactions near room temperature, the rate doubles or triples for every 10°C (10 K) rise.',
        '3. Nature of Reactants and Bond Strength: Ionic reactions in aqueous solution (e.g., AgNO₃ + NaCl) are nearly instantaneous because no covalent bonds need breaking, whereas covalent reactions (e.g., 2CO + O₂ → 2CO₂) are slower because strong covalent bonds must be cleaved.',
        '4. Presence of a Catalyst: A positive catalyst provides an alternative reaction pathway with a lower activation energy (E_a′ < E_a), dramatically increasing the reaction rate without being consumed.',
        '5. Surface Area of Solid Reactants: Finely powdered solids expose a much larger surface area for heterogeneous collisions than a single lump, accelerating the reaction.',
        '6. Exposure to Radiation (Photochemical Effect): Photons of suitable frequency (hν) excite reactant molecules above the activation barrier (e.g., H₂ + Cl₂ + hν → 2HCl).',
      ],
      equations: [
        {
          label: 'Rate Law & Specific Rate Constant',
          formula: 'r = −d[C] / dt = k · [A]^m · [B]^n\nOverall Order n_total = m + n',
          units: 'mol·L⁻¹·s⁻¹',
          note: 'Exponents m and n are determined experimentally, not from stoichiometry',
        },
        {
          label: 'Units of Rate Constant k by Order n',
          formula: 'Zero Order (n = 0):   mol·L⁻¹·s⁻¹\nFirst Order (n = 1):   s⁻¹ (or min⁻¹)\nSecond Order (n = 2):   L·mol⁻¹·s⁻¹\nThird Order (n = 3):   L²·mol⁻²·s⁻¹',
          units: 'mol^{1−n}·L^{n−1}·s⁻¹',
          note: 'First-order rate constant k is independent of concentration units',
        },
      ],
      examYears: ['2023', '2016', '2015'],
      marks: '3–4 Marks',
    },
    {
      id: 'chem-m4-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Kinetics Q5) · Chemical Kinetics Assignment (§2) · PUST EECE 2023 Q3(b), 2022 Q3(c), 2020 Q1(a)',
      title: 'Order vs. Molecularity of a Reaction and Pseudo-First-Order Reactions',
      summaryText:
        'Definitions and comparison of Order and Molecularity, why molecularity > 3 is rare, and pseudo-first-order (pseudo-unimolecular) reactions with examples.',
      memorizeStatements: [
        'Order of a Reaction: The sum of the powers (exponents) to which the concentration terms are raised in the experimentally determined rate law expression of a chemical reaction (n = m + p in Rate = k[A]^m[B]^p).',
        'Molecularity of a Reaction: The total number of reacting species (atoms, ions, or molecules) that must collide simultaneously in a single elementary step to bring about a chemical reaction.',
        'Pseudo-First-Order (Pseudo-Unimolecular) Reaction: A chemical reaction whose true molecularity is two (or more) but which obeys first-order kinetics because one of the reactants (usually the solvent water) is present in such large excess that its concentration remains practically constant.',
      ],
      bulletPoints: [
        'Why Reactions of Molecularity Greater Than Three (> 3) Are Extremely Rare (PUST 2020 Q1a):',
        '• According to collision theory, an elementary reaction requires the simultaneous collision of all participating reactant molecules at the exact same point in space with proper orientation and energy ≥ E_a.',
        '• The probability of four or more molecules colliding simultaneously at a single point is vanishingly small. Hence, complex reactions with high stoichiometric coefficients (e.g., 5Br⁻ + BrO₃⁻ + 6H⁺ → 3Br₂ + 3H₂O) actually proceed through a sequence of unimolecular or bimolecular elementary steps, where the slowest step is the Rate-Determining Step (RDS).',
        'Examples of Pseudo-First-Order Reactions (Assignment §2.3):',
        '1. Acid-Catalyzed Hydrolysis of Ethyl Acetate:\nCH₃COOC₂H₅ + H₂O (large excess, H⁺) → CH₃COOH + C₂H₅OH\nHere Molecularity = 2, but since [H₂O] ≈ 55.5 M is constant: Rate = k′[CH₃COOC₂H₅][H₂O] = k[CH₃COOC₂H₅] (Order = 1).',
        '2. Inversion of Cane Sugar (Sucrose):\nC₁₂H₂₂O₁₁ + H₂O (excess, H⁺) → C₆H₁₂O₆ (Glucose) + C₆H₁₂O₆ (Fructose)\nMolecularity = 2, Experimental Order = 1 (Rate = k[C₁₂H₂₂O₁₁]).',
      ],
      table: {
        caption: 'Table 4.1 — Differences Between Order and Molecularity of a Reaction',
        headers: ['Feature', 'Order of Reaction', 'Molecularity of Reaction'],
        rows: [
          [
            'Definition',
            'Sum of powers of concentration terms in the experimental rate law',
            'Number of reacting species colliding simultaneously in an elementary step',
          ],
          [
            'Nature',
            'Purely an experimental quantity derived from kinetic measurements',
            'A theoretical concept deduced from the reaction mechanism',
          ],
          [
            'Possible Values',
            'Can be zero, a whole number (1, 2, 3), fractional (e.g., 1.5), or even negative',
            'Always a positive non-zero integer (1, 2, or rarely 3); never zero or fractional',
          ],
          [
            'Applicability',
            'Applies to both elementary and overall complex (multi-step) reactions',
            'Has meaning only for a single elementary step; overall complex reactions have no molecularity',
          ],
          [
            'Effect of Conditions',
            'Can change with temperature, pressure, or solvent excess (e.g., NH₃ on W is 0th order at high P, 1st order at low P)',
            'Invariant for a given elementary step regardless of external conditions',
          ],
        ],
      },
      examYears: ['2023', '2022', '2020'],
      marks: '3–4 Marks',
    },
    {
      id: 'chem-m4-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Kinetics Q3) · Chemical Kinetics Assignment (§3.1 & §3.2) · PUST EECE 2023 Q3(c), 2022 Q3(a)',
      title: 'Zero-Order and First-Order Integrated Rate Laws and Half-Life Derivations',
      summaryText:
        'Complete differential and integrated rate equations, graphical plots, and half-life derivations for Zero-Order (t_{1/2} = a/2k) and First-Order (k = (2.303/t) log[a/(a−x)], t_{1/2} = 0.693/k) reactions.',
      memorizeStatements: [
        'Zero-Order Integrated Rate Equation: x = k₀ · t, or [A]_t = [A]₀ − k₀ · t, with half-life t_{1/2} = a / (2k₀) ∝ a.',
        'First-Order Integrated Rate Equation: k₁ = (1 / t) ln [a / (a − x)] = (2.303 / t) log [a / (a − x)].',
        'First-Order Half-Life Formula: t_{1/2} = (ln 2) / k₁ = 0.693 / k₁ (completely independent of initial concentration a).',
      ],
      bulletPoints: [
        '1. Derivation of Zero-Order Rate Equation and Half-Life (PUST 2023 Q3c):',
        '• Consider a zero-order reaction A → Products where initial concentration is [A]₀ = a at t = 0 and concentration at time t is [A]_t = a − x:',
        '• Differential Rate Law:\n−d[A] / dt = dx / dt = k₀ · [A]⁰ = k₀\ndx = k₀ · dt',
        '• Integrating from x = 0 at t = 0 to x = x at t = t:\n∫₀^x dx = k₀ ∫₀^t dt\nx = k₀ · t   or   k₀ = x / t = ([A]₀ − [A]_t) / t',
        '• Half-Life (t_{1/2}): At t = t_{1/2}, x = a / 2:\nt_{1/2} = (a / 2) / k₀ = a / (2k₀)   (Directly proportional to initial concentration a).',
        '• Examples of Zero-Order Reactions: Photochemical combination of H₂ + Cl₂ → 2HCl over water; decomposition of NH₃ or HI on heated gold/tungsten surface at high pressure.',
        '2. Derivation of First-Order Integrated Rate Equation and Proof of Concentration Independence (PUST 2022 Q3a):',
        '• Consider A → Products with initial concentration a mol·L⁻¹ at t = 0 and (a − x) mol·L⁻¹ at time t.',
        '• Differential Rate Law:\ndx / dt = k₁(a − x)\ndx / (a − x) = k₁ · dt',
        '• Integrating indefinitely:\n∫ dx / (a − x) = k₁ ∫ dt\n−ln(a − x) = k₁ · t + I',
        '• Applying initial boundary condition (at t = 0, x = 0 ⇒ I = −ln a):\n−ln(a − x) = k₁ · t − ln a\nln a − ln(a − x) = k₁ · t\nln [a / (a − x)] = k₁ · t',
        '• Converting to base-10 logarithm (ln = 2.303 log):\nk₁ = (1 / t) ln [a / (a − x)] = (2.303 / t) log [a / (a − x)]',
        '• Why k₁ is Independent of Initial Concentration Units: Since [a / (a − x)] is a dimensionless ratio of two concentrations, changing units (e.g., from mol·L⁻¹ to mmHg or g·L⁻¹) cancels out in the numerator and denominator.',
        '• Proof that First-Order Half-Life t_{1/2} is Independent of Initial Concentration (PUST 2022 Q3a):',
        'At t = t_{1/2}, half of the reactant has reacted, so x = a / 2 and (a − x) = a − a / 2 = a / 2.\nSubstituting into the integrated first-order equation:\nt_{1/2} = (2.303 / k₁) log [a / (a / 2)] = (2.303 / k₁) log 2\nSince log 2 = 0.30103:\nt_{1/2} = (2.303 × 0.30103) / k₁ = 0.693 / k₁\nSince the term "a" completely cancels out, the half-life of a first-order reaction is independent of the initial concentration of the reactant.',
      ],
      equations: [
        {
          label: 'Zero-Order Rate & Half-Life',
          formula: 'k₀ = x / t = ([A]₀ − [A]_t) / t\nt_{1/2} = a / (2k₀)',
          units: 'mol·L⁻¹·s⁻¹ and s',
          note: 'Plot of [A]_t vs t is linear with slope = −k₀',
        },
        {
          label: 'First-Order Rate & Half-Life',
          formula: 'k₁ = (2.303 / t) log (a / (a − x))\n[A]_t = [A]₀ · e^{−k₁ t}\nt_{1/2} = 0.693 / k₁',
          units: 's⁻¹ and s',
          note: 'Plot of log(a − x) vs t is linear with slope = −k₁ / 2.303',
        },
      ],
      examYears: ['2023', '2022'],
      marks: '4 Marks',
      professorTip:
        'PUST 2022 Q3(a) asks two proofs in one question: (1) prove k₁ = (1/t) ln[a/(a−x)] is independent of initial concentration units, and (2) prove t_{1/2} = 0.693/k₁ is independent of initial concentration a.',
    },
    {
      id: 'chem-m4-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Kinetics Q6) · Chemical Kinetics Assignment (§3.3) · PUST EECE 2024 Q3(a), 2020 Q1(b), 2016 Q1(b), 2015 Q3(b)',
      title: 'Second-Order Integrated Rate Equations and Half-Life',
      summaryText:
        'Complete derivations of second-order integrated rate equations for Case I (2A → Products or A + B with a = b: k₂ = x/[ta(a−x)], t_{1/2} = 1/k₂a) and Case II (A + B → Products with a ≠ b via partial fractions).',
      memorizeStatements: [
        'Second-Order Rate Equation (Equal Initial Concentrations, a = b): k₂ = (1 / t) · [x / (a(a − x))], with half-life t_{1/2} = 1 / (k₂ · a) ∝ 1 / a.',
        'Second-Order Rate Equation (Unequal Initial Concentrations, a ≠ b): k₂ = [2.303 / (t(a − b))] · log [b(a − x) / (a(b − x))].',
        'General Half-Life Relation for n-th Order Reaction: t_{1/2} ∝ 1 / a^{n−1}.',
      ],
      bulletPoints: [
        'Case I: Equal Initial Concentrations (2A → Products, or A + B → Products with [A]₀ = [B]₀ = a) [PUST 2015 Q3b]:',
        '1. At t = 0, [A] = a; at time t, [A] = (a − x). The differential rate equation is:\ndx / dt = k₂(a − x)²',
        '2. Separating variables and integrating:\n∫ dx / (a − x)² = k₂ ∫ dt\n1 / (a − x) = k₂ · t + I',
        '3. Applying initial condition (at t = 0, x = 0 ⇒ I = 1 / a):\n1 / (a − x) − 1 / a = k₂ · t\n[a − (a − x)] / [a(a − x)] = k₂ · t\nx / [a(a − x)] = k₂ · t\nk₂ = (1 / t) · [x / (a(a − x))]',
        '4. Half-Life for Second-Order Reaction: Setting x = a / 2 at t = t_{1/2}:\nk₂ = (1 / t_{1/2}) · [(a / 2) / (a(a − a / 2))] = 1 / (a · t_{1/2})\nt_{1/2} = 1 / (k₂ · a)',
        'Case II: Unequal Initial Concentrations (A + B → Products with [A]₀ = a, [B]₀ = b, a ≠ b) [PUST 2024 Q3a, 2020 Q1b, 2016 Q1b]:',
        '1. At time t, [A] = (a − x) and [B] = (b − x). Differential rate law:\ndx / dt = k₂(a − x)(b − x)\ndx / [(a − x)(b − x)] = k₂ · dt',
        '2. Decomposing into partial fractions using the identity:\n1 / [(a − x)(b − x)] = [1 / (a − b)] · [1 / (b − x) − 1 / (a − x)]',
        '3. Integrating both sides with respect to t:\n[1 / (a − b)] ∫ [1 / (b − x) − 1 / (a − x)] dx = k₂ ∫ dt\n[1 / (a − b)] · [−ln(b − x) + ln(a − x)] = k₂ · t + I\n[1 / (a − b)] · ln [(a − x) / (b − x)] = k₂ · t + I',
        '4. At t = 0, x = 0 ⇒ I = [1 / (a − b)] · ln(a / b). Substituting I:\n[1 / (a − b)] · { ln [(a − x) / (b − x)] − ln(a / b) } = k₂ · t\n[1 / (a − b)] · ln [b(a − x) / (a(b − x))] = k₂ · t',
        '5. Rearranging for k₂ (in natural and base-10 logarithms):\nk₂ = [1 / (t(a − b))] · ln [b(a − x) / (a(b − x))]\nk₂ = [2.303 / (t(a − b))] · log [b(a − x) / (a(b − x))]',
      ],
      equations: [
        {
          label: 'Second-Order Integrated Law (a = b)',
          formula: 'k₂ = (1 / t) · [x / (a(a − x))]\nt_{1/2} = 1 / (k₂ · a)',
          units: 'L·mol⁻¹·s⁻¹ and s',
          note: 'Plot of 1/(a − x) vs t is linear with slope = +k₂ and intercept = 1/a',
        },
        {
          label: 'Second-Order Integrated Law (a ≠ b)',
          formula: 'k₂ = [1 / (t(a − b))] · ln [b(a − x) / (a(b − x))]\nk₂ = [2.303 / (t(a − b))] · log [b(a − x) / (a(b − x))]',
          units: 'L·mol⁻¹·s⁻¹',
          note: 'Plot of log[(a − x)/(b − x)] vs t is linear with slope = k₂(a − b)/2.303',
        },
      ],
      examYears: ['2024', '2020', '2016', '2015'],
      marks: '4–5 Marks',
      professorTip:
        'The partial fraction decomposition 1/[(a−x)(b−x)] = [1/(a−b)][1/(b−x) − 1/(a−x)] was asked verbatim in PUST 2024 Q3(a), 2020 Q1(b), and 2016 Q1(b). Memorize the sign order carefully: 1/(b−x) comes first when (a−b) is in the denominator!',
    },
    {
      id: 'chem-m4-b5',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Kinetics Q1 & Q7) · Chemical Kinetics Assignment (§4 & §5) · PUST EECE 2025 Q3(a), 2024 Q3(b), 2016 Q1(c)',
      title: 'Methods of Determining Order and Derivation of Arrhenius Equation',
      summaryText:
        'Six experimental methods to determine order of reaction, Collision Theory, Activation Energy E_a, and derivation of the integrated Arrhenius equation log(k₂/k₁) = [E_a/(2.303R)][(T₂−T₁)/(T₁T₂)].',
      memorizeStatements: [
        'Activation Energy (E_a): The minimum excess energy over and above the average ground-state energy that reactant molecules must acquire to cross the potential energy barrier and form the activated complex (transition state).',
        'Arrhenius Equation (Exponential Form): k = A · e^{−E_a / (RT)}, where A is the pre-exponential (frequency) factor and e^{−E_a/(RT)} is the Boltzmann fraction of effective collisions.',
        'Integrated Two-Temperature Arrhenius Equation: log(k₂ / k₁) = [E_a / (2.303 R)] · [(T₂ − T₁) / (T₁ T₂)].',
      ],
      bulletPoints: [
        'Six Experimental Methods for Determining Order of a Reaction (PUST 2016 Q1c, Assignment §4):',
        '1. Integration (Hit-and-Trial) Method: Measure concentrations (a − x) at various times t and substitute into zero-, first-, and second-order rate equations. The equation that yields a constant value of k across all time intervals gives the true order.',
        '2. Graphical Method: Plot [A]_t vs. t (linear ⇒ 0th order), log[A]_t vs. t (linear ⇒ 1st order), or 1/[A]_t vs. t (linear ⇒ 2nd order).',
        '3. Half-Life Method (Ostwald’s Half-Change Method): Since t_{1/2} ∝ 1 / a^{n−1}, measuring two half-lives (t₁ and t₂) at two initial concentrations (a₁ and a₂) gives:\nt₁ / t₂ = (a₂ / a₁)^{n−1} ⇒ n = 1 + [log(t₁ / t₂) / log(a₂ / a₁)].',
        '4. Van’t Hoff Differential Method: Since r = −dC/dt = kC^n, measuring initial rates r₁ and r₂ at concentrations C₁ and C₂ gives:\nn = [log(r₁ / r₂)] / [log(C₁ / C₂)].',
        '5. Initial Rate Method: Keep all reactants except one at constant concentration, vary [A], and find the partial order with respect to A from initial rates.',
        '6. Ostwald’s Isolation Method: Take all reactants except one in large excess so their concentrations remain virtually constant; the observed pseudo-order equals the partial order with respect to the isolated reactant.',
        'Derivation of the Integrated Arrhenius Equation (PUST 2025 Q3a, 2024 Q3b, Suggestion Q18):',
        '1. Starting from the Arrhenius equation:\nk = A · e^{−E_a / (RT)}',
        '2. Taking the natural logarithm on both sides:\nln k = ln A − E_a / (RT)',
        '3. Converting to base-10 logarithm (ln x = 2.303 log x):\nlog k = log A − E_a / (2.303 · R · T)',
        '4. Let k₁ and k₂ be the specific rate constants at two absolute temperatures T₁ and T₂ (with T₂ > T₁):\nAt T₁:   log k₁ = log A − E_a / (2.303 · R · T₁)   ...(1)\nAt T₂:   log k₂ = log A − E_a / (2.303 · R · T₂)   ...(2)',
        '5. Subtracting Equation (1) from Equation (2):\nlog k₂ − log k₁ = [E_a / (2.303 · R)] · (1 / T₁ − 1 / T₂)\nlog (k₂ / k₁) = [E_a / (2.303 · R)] · [(T₂ − T₁) / (T₁ · T₂)]',
      ],
      equations: [
        {
          label: 'Half-Life Order Determination Formula',
          formula: 't_{1/2} ∝ 1 / a^{n−1}\nn = 1 + [log(t₁ / t₂)] / [log(a₂ / a₁)]',
          units: 'dimensionless',
          note: 't₁, t₂ are half-lives at initial concentrations a₁, a₂',
        },
        {
          label: 'Arrhenius Equations (Linear & Two-Temperature)',
          formula: 'log k = log A − [E_a / (2.303 · R)] · (1 / T)\nlog (k₂ / k₁) = [E_a / (2.303 · R)] · [(T₂ − T₁) / (T₁ · T₂)]',
          units: 'E_a in J·mol⁻¹, R = 8.314 J·mol⁻¹·K⁻¹',
          note: 'Plot of log k vs 1/T is linear with slope = −E_a / (2.303 R)',
        },
      ],
      examYears: ['2025', '2024', '2016'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m4-b6',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Kinetics Q2, Q4, Q8) · PUST EECE 2025 Q3(b), 2024 Q3(c), 2022 Q3(b), 2020 Q1(c), 2015 Q3(c)',
      title: 'First-Order Half-Life and Percentage Completion Calculations',
      summaryText:
        'Solved PUST EECE and CR Question Bank numericals on first-order reactions: (i) k = 2.5×10⁻³ s⁻¹ (Q8 & 2025 Q3b), (ii) k = 1.54×10⁻³ s⁻¹ (Q2 & 2024/2015 Q3c), (iii) k = 0.450 s⁻¹ (2020 Q1c), and (iv) 15% in 20 min → time for 60% (Q4 & 2022 Q3b).',
      examYears: ['2025', '2024', '2022', '2020', '2015'],
      marks: '2.5–4 Marks',
      problemStatement:
        '(a) [CR Q8 & PUST 2025 Q3b]: A first-order reaction has a rate constant k = 2.5 × 10⁻³ s⁻¹. Calculate the half-life (t_{1/2}) and the time required for the reactant concentration to drop to one-fourth (25%) of its initial value.\n(b) [CR Q2 & PUST 2024/2015 Q3c]: The rate constant of a first-order reaction is 1.54 × 10⁻³ s⁻¹. Calculate its half-life period.\n(c) [PUST 2020 Q1c]: Calculate the half-life of a first-order reaction where the specific rate constant is 0.450 s⁻¹.\n(d) [CR Q4 & PUST 2022 Q3b]: A first-order reaction is 15% complete in 20 minutes. How long will it take to be 60% complete?',
      givenData: [
        'Case (a) [CR Q8 / 2025 Q3b]: k = 2.5 × 10⁻³ s⁻¹',
        'Case (b) [CR Q2 / 2024 Q3c]: k = 1.54 × 10⁻³ s⁻¹',
        'Case (c) [2020 Q1c]: k = 0.450 s⁻¹',
        'Case (d) [CR Q4 / 2022 Q3b]: x₁ = 15% of a at t₁ = 20 min; find t₂ for x₂ = 60% of a',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Case (a) [CR Q8 & PUST 2025 Q3b]',
          explanation:
            'Use t_{1/2} = 0.693 / k for half-life, and note that dropping to 1/4th (75% completion) takes 2 × t_{1/2}:',
          equation:
            't_{1/2} = 0.693 / (2.5 × 10⁻³ s⁻¹) = 277.2 s (or 4.62 min)\nt_{75%} = (2.303 / 2.5 × 10⁻³) log (100 / 25) = 2 × 277.2 = 554.4 s',
        },
        {
          stepTitle: 'Step 2: Solve Case (b) [CR Q2 & PUST 2024/2015 Q3c] and Case (c) [PUST 2020 Q1c]',
          explanation: 'Apply t_{1/2} = 0.693 / k directly:',
          equation:
            'Case (b):   t_{1/2} = 0.693 / (1.54 × 10⁻³ s⁻¹) = 450.0 s (or 7.5 min)\nCase (c):   t_{1/2} = 0.693 / 0.450 s⁻¹ = 1.54 s',
        },
        {
          stepTitle: 'Step 3: Solve Case (d) [CR Q4 & PUST 2022 Q3b — 15% in 20 min → 60% completion]',
          explanation:
            'First find k₁ from 15% completion in 20 min (where a = 100 and a − x₁ = 85), then calculate t₂ for 60% completion (where a − x₂ = 40):',
          equation:
            'k₁ = (2.303 / 20) log (100 / 85)\nk₁ = 0.11515 × log(1.17647) = 0.11515 × 0.07058 = 8.127 × 10⁻³ min⁻¹\nt_{60%} = (2.303 / 8.127 × 10⁻³) log (100 / 40)\nt_{60%} = 283.38 × log(2.5) = 283.38 × 0.39794 = 112.77 min',
        },
      ],
      finalAnswer:
        '(a) t_{1/2} = 277.2 s, t_{75%} = 554.4 s; (b) t_{1/2} = 450 s; (c) t_{1/2} = 1.54 s; (d) t_{60%} = 112.8 min',
    },
    {
      id: 'chem-m4-b7',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'CR Final Exam Question Bank (Chemical Kinetics Q9) · PUST EECE 2025 Q3(c) · Suggestion Q26',
      title: 'Activation Energy Calculations from the Arrhenius Equation',
      summaryText:
        'Calculate the activation energy E_a when (i) rate doubles from 300 K to 320 K (PUST 2025 Q3c) and (ii) k₁ = 4.5 × 10⁻³ s⁻¹ at 300 K and k₂ = 1.7 × 10⁻² s⁻¹ at 350 K (Suggestion Q26).',
      examYears: ['2025'],
      marks: '4 Marks',
      problemStatement:
        '(a) [PUST 2025 Q3c]: The rate of a chemical reaction doubles when the temperature is raised from 300 K to 320 K. Calculate the energy of activation (E_a) of the reaction (R = 8.314 J·mol⁻¹·K⁻¹).\n(b) [Suggestion Part C Q26]: The rate constant of a reaction at 300 K is 4.5 × 10⁻³ s⁻¹ and at 350 K is 1.7 × 10⁻² s⁻¹. Calculate the activation energy (E_a).',
      givenData: [
        'Universal gas constant, R = 8.314 J·mol⁻¹·K⁻¹',
        'Case (a) [2025 Q3c]: T₁ = 300 K, T₂ = 320 K, k₂ / k₁ = 2',
        'Case (b) [Suggestion Q26]: T₁ = 300 K, k₁ = 4.5 × 10⁻³ s⁻¹, T₂ = 350 K, k₂ = 1.7 × 10⁻² s⁻¹',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Case (a) [PUST 2025 Q3c — Rate doubles from 300 K to 320 K]',
          explanation:
            'Substitute k₂/k₁ = 2, T₁ = 300 K, T₂ = 320 K, and R = 8.314 J·mol⁻¹·K⁻¹ into the integrated Arrhenius equation:',
          equation:
            'log (k₂ / k₁) = [E_a / (2.303 · R)] · [(T₂ − T₁) / (T₁ · T₂)]\nlog 2 = [E_a / (2.303 × 8.314)] · [(320 − 300) / (300 × 320)]\n0.30103 = [E_a / 19.147] × (20 / 96000)\nE_a = (0.30103 × 19.147 × 96000) / 20\nE_a = 27,666.5 J·mol⁻¹ = 27.67 kJ·mol⁻¹',
        },
        {
          stepTitle: 'Step 2: Solve Case (b) [Suggestion Q26 — 300 K to 350 K]',
          explanation:
            'Substitute k₁ = 4.5 × 10⁻³ s⁻¹, k₂ = 1.7 × 10⁻² s⁻¹, T₁ = 300 K, and T₂ = 350 K:',
          equation:
            'log (1.7 × 10⁻² / 4.5 × 10⁻³) = [E_a / 19.147] · [(350 − 300) / (300 × 350)]\nlog (3.7778) = [E_a / 19.147] × (50 / 105000)\n0.57724 = [E_a / 19.147] × (1 / 2100)\nE_a = 0.57724 × 19.147 × 2100\nE_a = 23,210 J·mol⁻¹ = 23.21 kJ·mol⁻¹',
        },
      ],
      finalAnswer: '(a) E_a = 27.67 kJ·mol⁻¹; (b) E_a = 23.21 kJ·mol⁻¹',
    },
  ],
};

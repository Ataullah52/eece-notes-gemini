import type { ChapterNote } from '../../types';

export const CHEM1101_CH01: ChapterNote = {
  id: 'chem1101-ch01',
  unitNumber: 'Module 01',
  title: 'Electrochemistry',
  summary:
    'Conductors, Electrolytes and Electrolysis, Faraday’s Laws of Electrolysis, Electrolytic Conductance, Theories for Electrolytic Conductance, Ionic Mobility, Kohlrausch’s Law, Transference Number.',
  estimatedMinutes: 65,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'chem-m1-b1',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Part A Q1–Q4, Part B Q2) · PUST EECE 2025 Q2(b) · Haque & Nawab',
      title: 'Conductors, Electrolytes, and Electrolysis of Brine',
      summaryText:
        'Classification of electrical conductors into metallic (electronic) and electrolytic (ionic) conductors, strong vs. weak electrolytes, and mechanism of aqueous NaCl (brine) electrolysis.',
      memorizeStatements: [
        'Electrolysis: The chemical decomposition of an electrolyte in molten state or aqueous solution caused by the passage of direct electric current (DC).',
        'Electrolyte: A chemical substance that dissociates into free mobile ions when melted or dissolved in a polar solvent and conducts electric current with simultaneous chemical change.',
        'Strong Electrolyte: An electrolyte that ionizes almost completely (α ≈ 1) even at moderate concentrations (e.g., HCl, HNO₃, NaOH, NaCl, KCl).',
        'Weak Electrolyte: An electrolyte that ionizes only partially (α ≪ 1) in moderate concentrations and establishes a dynamic ionic equilibrium (e.g., CH₃COOH, NH₄OH, H₂CO₃).',
      ],
      bulletPoints: [
        'Electrochemistry: The branch of physical chemistry that deals with the interconversion of electrical energy and chemical energy, and the quantitative laws governing ionic conduction and electrode reactions.',
        'Electrolysis of Aqueous Brine (Concentrated NaCl Solution — PUST 2025 Q2b):',
        '1. Ionization in Aqueous Solution: NaCl(aq) → Na⁺(aq) + Cl⁻(aq) and H₂O(l) ⇌ H⁺(aq) + OH⁻(aq).',
        '2. Migration of Ions: Under an applied DC potential between inert platinum or graphite electrodes, cations (Na⁺, H⁺) migrate toward the negative cathode and anions (Cl⁻, OH⁻) migrate toward the positive anode.',
        '3. Cathode Reaction (Reduction): Because the reduction potential of H⁺/H₂O (E° = −0.83 V at pH 7, or 0.00 V for 1 M H⁺) is much higher than that of Na⁺/Na (E° = −2.71 V), water/H⁺ is preferentially reduced to liberate hydrogen gas:\n2H₂O(l) + 2e⁻ → H₂(g)↑ + 2OH⁻(aq)',
        '4. Anode Reaction (Oxidation): Although standard oxidation of H₂O occurs at 1.23 V vs. 1.36 V for Cl⁻, high overpotential of O₂ on the anode and high Cl⁻ concentration in concentrated brine cause Cl⁻ ions to oxidize preferentially:\n2Cl⁻(aq) → Cl₂(g)↑ + 2e⁻',
        '5. Net Cell Reaction: 2NaCl(aq) + 2H₂O(l) → 2NaOH(aq) + H₂(g)↑ + Cl₂(g)↑ (Sodium hydroxide remains in solution while H₂ evolves at the cathode and Cl₂ evolves at the anode).',
      ],
      table: {
        caption: 'Table 1.1 — Comparison of Metallic (Electronic) and Electrolytic Conductors',
        headers: ['Property', 'Metallic (Electronic) Conductor', 'Electrolytic (Ionic) Conductor'],
        rows: [
          [
            'Charge Carriers',
            'Delocalized valence electrons moving from negative to positive potential',
            'Positive cations and negative anions migrating in opposite directions',
          ],
          [
            'Chemical Change',
            'No chemical decomposition or mass transfer occurs during conduction',
            'Chemical decomposition (oxidation and reduction) occurs at the electrodes',
          ],
          [
            'Mass Transfer',
            'Zero transfer of matter',
            'Actual physical transport of matter (ions) to the electrodes',
          ],
          [
            'Effect of Temperature',
            'Conductance decreases as temperature increases due to lattice vibration scattering',
            'Conductance increases as temperature increases due to higher ionization and lower viscosity',
          ],
          [
            'Examples',
            'Cu, Ag, Al, Fe, Graphite',
            'Aqueous or molten NaCl, CuSO₄, H₂SO₄, KOH',
          ],
        ],
      },
      examYears: ['2025'],
      marks: '3–4 Marks',
      professorTip:
        'In PUST 2025 Q2(b), always write both half-cell equations (cathode reduction of H₂O and anode oxidation of Cl⁻) along with the preferential discharge reason based on electrode potential and overvoltage.',
    },
    {
      id: 'chem-m1-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1 & Part B Q1) · PUST EECE 2025 Q1(a), 2023 Q1(a), 2022 Q1(a), 2021 Q1(b), 2015 Q1(c)',
      title: 'Faraday’s First and Second Laws of Electrolysis',
      summaryText:
        'Statement, mathematical formulation, and electrochemical significance of Faraday’s First Law (W = ZIt) and Second Law (W₁/W₂ = E₁/E₂), plus the relation F = N_A · e ≈ 96,500 C·mol⁻¹.',
      memorizeStatements: [
        'Faraday’s First Law of Electrolysis: The mass (W) of any substance deposited, liberated, or dissolved at an electrode during electrolysis is directly proportional to the total quantity of electricity (Q = I · t) passed through the electrolyte (W = Z · I · t).',
        'Electrochemical Equivalent (Z): The mass of a substance deposited or liberated at an electrode when 1 Coulomb of electric charge (1 Ampere current for 1 second) is passed through the electrolyte.',
        'Faraday’s Second Law of Electrolysis: When the same quantity of electricity is passed through different electrolytes connected in series, the masses of different substances liberated or deposited at the electrodes are directly proportional to their respective chemical equivalent weights (W₁ / W₂ = E₁ / E₂).',
        'One Faraday (1 F): The total charge carried by one mole of electrons, equal to 96,485 C·mol⁻¹ (taken as 96,500 C·mol⁻¹), which liberates 1 gram-equivalent of any substance.',
      ],
      bulletPoints: [
        'Derivation of First Law Formula:',
        '1. According to Faraday’s First Law, W ∝ Q.',
        '2. Since electric charge Q = I · t (where I is current in Amperes and t is time in seconds), W ∝ I · t.',
        '3. Introducing the proportionality constant Z (electrochemical equivalent): W = Z · I · t.',
        '4. If I = 1 A and t = 1 s (so Q = 1 C), then W = Z.',
        'Derivation of Relation between E and Z (Second Law):',
        '1. When the same charge Q is passed through two cells in series: W₁ = Z₁ Q and W₂ = Z₂ Q, so W₁ / W₂ = Z₁ / Z₂.',
        '2. By Faraday’s Second Law, W₁ / W₂ = E₁ / E₂, which gives E₁ / E₂ = Z₁ / Z₂, or E / Z = constant = F (Faraday’s constant).',
        '3. Since 1 Faraday (96,500 C) deposits 1 gram-equivalent (E grams) of any ion: Z = E / F = M / (n · 96500) g·C⁻¹.',
        '4. Combining both laws yields the master electrolysis equation: W = (E · I · t) / 96500 = (M · I · t) / (n · F).',
        'Significance of Faraday’s Laws:',
        '• Establishes the discrete, quantized nature of electric charge on ions in solution.',
        '• Enables accurate determination of Avogadro’s number (N_A = F / e), equivalent weights of metals, and valency (n) of elements.',
        '• Forms the quantitative basis for industrial electroplating, electrorefining of copper, and coulometric titrations.',
      ],
      equations: [
        {
          label: 'Faraday’s First Law',
          formula: 'W = Z · Q = Z · I · t',
          units: 'g',
          note: 'Z is electrochemical equivalent (g/C), I in A, t in s',
        },
        {
          label: 'Faraday’s Second Law',
          formula: 'W₁ / W₂ = E₁ / E₂ = Z₁ / Z₂',
          units: 'dimensionless',
          note: 'E = Molar Mass (M) / Valency change (n)',
        },
        {
          label: 'Electrochemical Equivalent & Combined Law',
          formula: 'Z = E / F = M / (n · 96500)\nW = (M · I · t) / (n · 96500)',
          units: 'g·C⁻¹ and g',
          note: '1 F = N_A · e = (6.022 × 10²³ mol⁻¹)(1.602 × 10⁻¹⁹ C) ≈ 96,500 C·mol⁻¹',
        },
      ],
      examYears: ['2025', '2023', '2022', '2021', '2015'],
      marks: '3–4 Marks',
      professorTip:
        'This is the single most repeated question in Electrochemistry (asked 5 times in PUST EECE). Always include the link Z = E / 96500 connecting the First and Second Laws.',
    },
    {
      id: 'chem-m1-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1, Part A Q5–Q7, Part B Q3) · PUST EECE 2024 Q1(b), 2021 Q1(a)',
      title: 'Specific, Equivalent, and Molar Conductance and Their Relation',
      summaryText:
        'Definitions, SI and CGS units, cell constant K_cell = l/A, and step-by-step derivation of Λ_eq = 1000κ/C_eq and Λ_m = 1000κ/M.',
      memorizeStatements: [
        'Conductance (G): The reciprocal of electrical resistance (G = 1/R), measuring the ease with which current flows through an electrolyte; measured in Siemens (S or Ω⁻¹).',
        'Specific Conductance / Conductivity (κ): The conductance of 1 cm³ (or 1 m³) of an electrolytic solution placed between two parallel electrodes 1 cm (or 1 m) apart with 1 cm² (or 1 m²) cross-sectional area (κ = 1/ρ = (1/R)·(l/A)).',
        'Equivalent Conductance (Λ_eq): The conducting power of all the ions produced by dissolving one gram-equivalent of an electrolyte in a given volume V (cm³) of solution when the electrodes are 1 cm apart (Λ_eq = 1000 · κ / C_N).',
        'Molar Conductance (Λ_m): The conducting power of all the ions produced by dissolving one mole of an electrolyte in a given volume V (cm³) of solution between electrodes 1 cm apart (Λ_m = 1000 · κ / M).',
        'Cell Constant (K_cell): The ratio of the distance between the two electrodes (l) to their effective cross-sectional area (A), given by K_cell = l / A = κ · R (in cm⁻¹ or m⁻¹).',
      ],
      bulletPoints: [
        'Step-by-Step Derivation of Relation between Specific (κ) and Equivalent Conductance (Λ_eq) [PUST 2024 Q1b, 2021 Q1a]:',
        '1. Consider a rectangular conductivity cell whose two opposite walls are parallel platinum electrodes separated by a fixed distance l = 1 cm.',
        '2. Since specific conductance κ is the conductance of a 1 cm³ cube of solution, a solution of total volume V cm³ contained between electrodes 1 cm apart has cross-sectional area A = V cm².',
        '3. Because V cubes of 1 cm³ are effectively in parallel between the electrodes, the total conductance of V cm³ containing 1 gram-equivalent of electrolyte is:\nΛ_eq = κ × V',
        '4. If the concentration of the solution is C_N (Normality, in gram-equivalents per liter, i.e., per 1000 cm³), then C_N gram-equivalents are dissolved in 1000 cm³.',
        '5. Therefore, the volume V (in cm³) containing 1 gram-equivalent of electrolyte is:\nV = 1000 / C_N cm³',
        '6. Substituting V into step 3 yields the required relation:\nΛ_eq = κ × (1000 / C_N) = (1000 · κ) / C_N',
        '7. By identical reasoning, if M is the molarity (moles per 1000 cm³), the volume containing 1 mole is V_m = 1000 / M cm³, giving:\nΛ_m = (1000 · κ) / M',
        'Effect of Dilution on Conductance:',
        '• Specific conductance (κ) decreases on dilution because the number of current-carrying ions per 1 cm³ of solution decreases.',
        '• Equivalent conductance (Λ_eq) and molar conductance (Λ_m) increase on dilution because V increases and inter-ionic attraction weakens (for strong electrolytes) or degree of ionization α increases (for weak electrolytes).',
      ],
      equations: [
        {
          label: 'Specific Conductance & Cell Constant',
          formula: 'κ = G · (l / A) = (1 / R) · K_cell',
          units: 'S·cm⁻¹ or S·m⁻¹',
          note: 'K_cell = l / A (cm⁻¹)',
        },
        {
          label: 'Equivalent Conductance Relation',
          formula: 'Λ_eq = κ · V = (1000 · κ) / C_N',
          units: 'S·cm²·equiv⁻¹',
          note: 'C_N is normality in equiv·L⁻¹; κ in S·cm⁻¹',
        },
        {
          label: 'Molar Conductance Relation',
          formula: 'Λ_m = κ · V_m = (1000 · κ) / M = n_z · Λ_eq',
          units: 'S·cm²·mol⁻¹',
          note: 'M is molarity in mol·L⁻¹; n_z is total positive/negative charge per formula unit',
        },
      ],
      examYears: ['2024', '2021'],
      marks: '3.5–4 Marks',
      professorTip:
        'When deriving Λ = 1000κ/C, explicitly state that V = 1000/C cm³ is the volume in milliliters containing 1 gram-equivalent of the electrolyte.',
    },
    {
      id: 'chem-m1-b4',
      type: 'theory',
      priorityTier: 2,
      secondaryPriorityTiers: [1, 4],
      sourceCitation:
        'PUST EECE 2021 Q3(a) · Professor’s Suggestion Sheet (Ch 1) · Haque & Nawab',
      title: 'Arrhenius and Debye–Hückel–Onsager Conductance Theories',
      summaryText:
        'Arrhenius theory of electrolytic dissociation for weak electrolytes (α = Λ_m / Λ_m°) and Debye–Hückel–Onsager inter-ionic attraction theory & limiting law for strong electrolytes.',
      memorizeStatements: [
        'Arrhenius Degree of Dissociation: For a weak electrolyte, the fraction of total molecules dissociated into ions at a given concentration is α = Λ_m / Λ_m°.',
        'Ostwald’s Dilution Law: For a weak binary electrolyte AB ⇌ A⁺ + B⁻, the ionization constant is K_a = (c · α²) / (1 − α) ≈ c · α².',
        'Debye–Hückel–Onsager Equation: Λ_m = Λ_m° − (A + B · Λ_m°)√c, where A accounts for the electrophoretic effect and B accounts for the relaxation (asymmetry) effect.',
        'Debye–Hückel Limiting Law (Mean Activity Coefficient): log γ_± = −A · |z_+ z_-| · √I, where I = ½ ∑ c_i z_i² is the ionic strength of the solution.',
      ],
      bulletPoints: [
        '1. Arrhenius Theory of Electrolytic Dissociation (1887):',
        '• When dissolved in water, an electrolyte spontaneously dissociates into positively and negatively charged ions.',
        '• Ionization is reversible and incomplete at finite concentrations: AB ⇌ A⁺ + B⁻. The degree of dissociation α approaches 1 only at infinite dilution (Λ_m → Λ_m°).',
        '• Limitation: Accurately describes weak electrolytes (like CH₃COOH), but fails for strong electrolytes (like KCl, NaCl) which are already 100% ionized in solid and aqueous states.',
        '2. Debye–Hückel–Onsager Theory of Strong Electrolytes (1923–1927):',
        '• Strong electrolytes are completely ionized at all concentrations. The decrease of Λ_m with increasing concentration is due to Electrostatic Inter-Ionic Attraction, not incomplete ionization.',
        '• Ionic Atmosphere: Every central positive ion is surrounded on average by more negative counter-ions than like ions, forming a spherical symmetrical cloud of opposite charge.',
        '• Asymmetry (Relaxation) Effect (Constant B): When an external electric field is applied, the central ion moves forward while its oppositely charged ionic atmosphere lags behind because it takes a finite relaxation time to rebuild. This exerts an electrostatic backward drag on the moving ion.',
        '• Electrophoretic Effect (Constant A): The counter-ions in the ionic atmosphere migrate in the opposite direction along with their hydration shells of solvent molecules, creating a viscous solvent counter-current against the central ion.',
        '3. Debye–Hückel Limiting Law for Mean Activity Coefficient γ_± (PUST 2021 Q3a):',
        '• Thermodynamic chemical potential of an ion depends on its effective concentration (activity a_i = γ_i c_i).',
        '• By solving the linearized Poisson–Boltzmann equation for the electrostatic potential ψ of the ionic atmosphere of thickness 1/κ_D (Debye length), the electrical work of charging an ion yields:\nlog γ_i = −A · z_i² · √I',
        '• Since single-ion activity coefficients cannot be measured independently, the mean ionic activity coefficient γ_± = (γ_+^{ν_+} γ_-^{ν_-})^{1/(ν_+ + ν_-)} obeys:\nlog γ_± = −A · |z_+ z_-| · √I\nwhere A = 0.509 (mol⁻¹·kg)^{1/2} in water at 25°C and I = ½ ∑ c_i z_i² is the ionic strength.',
      ],
      equations: [
        {
          label: 'Debye–Hückel–Onsager Conductance Equation',
          formula: 'Λ_m = Λ_m° − (A + B · Λ_m°)√c',
          units: 'S·cm²·mol⁻¹',
          note: 'Plot of Λ_m vs √c is a straight line with negative slope for strong electrolytes',
        },
        {
          label: 'Ionic Strength & Debye–Hückel Limiting Law',
          formula: 'I = (1 / 2) ∑ c_i z_i²\nlog γ_± = −0.509 · |z_+ z_-| · √I',
          units: 'mol·L⁻¹ and dimensionless',
          note: 'Valid for dilute electrolytic solutions in water at 298 K',
        },
      ],
      examYears: ['2021'],
      marks: '4 Marks',
    },
    {
      id: 'chem-m1-b5',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1, Part A Q8, Part B Q5) · PUST EECE 2025 Q1(a), 2023 Q1(c), 2022 Q1(d)',
      title: 'Ionic Mobility and Abnormal Mobility of H⁺ and OH⁻ Ions',
      summaryText:
        'Definition of ionic mobility u = v/E, relation λ_i = F · u_i showing how ionic mobility governs molar conductivity, and the Grotthuss proton-hopping mechanism for H⁺ and OH⁻.',
      memorizeStatements: [
        'Ionic Mobility (u): The absolute drift velocity (v) attained by an ion moving through an electrolytic solution under a unit potential gradient (electric field E = 1 V·cm⁻¹ or 1 V·m⁻¹), given by u = v / E.',
        'Relation between Ionic Conductance and Mobility: λ_+ = F · u_+ and λ_- = F · u_-, so Λ_m° = F(u_+° + u_-°).',
      ],
      bulletPoints: [
        'Mathematical Expression of Ionic Mobility:',
        '1. The terminal drift velocity v of an ion is proportional to the applied potential gradient E = V / l (where V is potential difference and l is distance between electrodes): v = u · E.',
        '2. Therefore, Ionic Mobility is:\nu = v / E = (distance traveled / time t) / (V / l) = (d · l) / (V · t)\nwith units cm²·V⁻¹·s⁻¹ (or m²·V⁻¹·s⁻¹).',
        'How Ionic Mobility is Responsible for Molar Conductivity (PUST 2025 Q1a):',
        '1. Consider 1 cm³ of solution of concentration c mol·cm⁻³ between two electrodes 1 cm apart under unit potential gradient (1 V·cm⁻¹).',
        '2. In 1 second, all cations within distance u_+ cm reach the cathode, and all anions within distance u_- cm reach the anode.',
        '3. Total charge transported per second (which equals κ) is:\nκ = α · c · F · (u_+ + u_-)',
        '4. Since Λ_m = κ / c, we obtain:\nΛ_m = α · F · (u_+ + u_-)\nand at infinite dilution (α = 1):\nΛ_m° = F · (u_+° + u_-°) = λ_+° + λ_-°',
        '5. Thus, the molar conductivity of an electrolyte is directly proportional to the sum of the ionic mobilities of its constituent cations and anions.',
        'Why H⁺ and OH⁻ Ions Show Abnormally High Ionic Mobility in Water (PUST 2023 Q1c):',
        '• In water at 25°C, H⁺ (λ° = 349.8 S·cm²·mol⁻¹) and OH⁻ (λ° = 198.6 S·cm²·mol⁻¹) have 5 to 7 times higher mobilities than other ions like Na⁺ (50.1) or K⁺ (73.5).',
        '• Grotthuss Proton-Hopping Mechanism (Relay / Chain Mechanism): Other ions (like Na⁺, K⁺) must physically push their way through viscous water molecules while carrying a bulky hydration shell (Stokes’ hydrodynamic drag).',
        '• In contrast, H⁺ exists as hydronium ion (H₃O⁺) hydrogen-bonded to a network of water molecules. Under an electric field, a proton jumps from one H₃O⁺ to an adjacent H₂O molecule along a hydrogen bond via rapid covalent-to-hydrogen bond rearrangement:\nH₂O—H⁺ ⋯ OH₂ ⋯ OH₂ → H₂O ⋯ H—O⁺H₂ ⋯ OH₂ → H₂O ⋯ H₂O ⋯ H—O⁺H₂',
        '• Consequently, net positive charge is transferred rapidly across the hydrogen-bonded chain without requiring the slow bulk physical migration of a single hydrated H₃O⁺ ion.',
        '• Similarly, OH⁻ migrates rapidly by abstracting a proton (H⁺ hole transfer) from neighboring water molecules in the reverse direction.',
      ],
      equations: [
        {
          label: 'Ionic Mobility Formula',
          formula: 'u = v / E = (d · l) / (V · t)',
          units: 'cm²·V⁻¹·s⁻¹ or m²·V⁻¹·s⁻¹',
          note: 'E = V / l is the potential gradient',
        },
        {
          label: 'Molar Conductivity from Ionic Mobilities',
          formula: 'λ_i° = z_i · F · u_i°\nΛ_m° = F · (ν_+ z_+ u_+° + ν_- z_- u_-°)',
          units: 'S·cm²·mol⁻¹',
          note: 'F = 96,500 C·mol⁻¹',
        },
      ],
      examYears: ['2025', '2023', '2022'],
      marks: '3–4 Marks',
      professorTip:
        'For the H⁺/OH⁻ abnormal mobility question (2023 Q1c), draw the 1-line Grotthuss proton relay diagram and mention both hydrogen-bonded water clusters and absence of bulk hydrodynamic drag.',
    },
    {
      id: 'chem-m1-b6',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1, Part B Q4) · PUST EECE 2025 Q1(b), 2022 Q1(d), 2021 Q1(c)',
      title: 'Kohlrausch’s Law of Independent Migration of Ions',
      summaryText:
        'Statement, mathematical formulation for equivalent and molar conductance at infinite dilution, and 4 major applications including Λ° of weak electrolytes.',
      memorizeStatements: [
        'Kohlrausch’s Law of Independent Migration of Ions: At infinite dilution, when dissociation is complete and all inter-ionic attractions vanish, each ion migrates independently of its co-ion and makes a definite, constant contribution to the total molar (or equivalent) conductance of the electrolyte, regardless of the nature of the other ion with which it is associated.',
        'Kohlrausch’s Formula (Molar): Λ_m° = ν_+ λ_+° + ν_- λ_-°, where ν_+ and ν_- are the numbers of cations and anions per formula unit.',
        'Kohlrausch’s Formula (Equivalent): Λ_eq° = λ_+°(eq) + λ_-°(eq).',
      ],
      bulletPoints: [
        'Four Major Applications of Kohlrausch’s Law (PUST 2025 Q1b, 2021 Q1c):',
        '1. Determination of Limiting Molar Conductance (Λ_m°) of Weak Electrolytes:',
        '• Λ_m° of a weak electrolyte like CH₃COOH (or Sparingly Soluble AgI) cannot be obtained by extrapolating Λ_m vs. √c because the curve rises steeply near c → 0.',
        '• Using Kohlrausch’s additive law from three strong electrolytes (CH₃COONa, HCl, NaCl):\nΛ_m°(CH₃COOH) = Λ_m°(CH₃COONa) + Λ_m°(HCl) − Λ_m°(NaCl)\n= (λ°_CH₃COO⁻ + λ°_Na⁺) + (λ°_H⁺ + λ°_Cl⁻) − (λ°_Na⁺ + λ°_Cl⁻) = λ°_CH₃COO⁻ + λ°_H⁺.',
        '2. Determination of Degree of Dissociation (α) and Ionization Constant (K_a):',
        '• Once Λ_m° is found from Kohlrausch’s law and Λ_m is measured at concentration c:\nα = Λ_m / Λ_m°\nand K_a = (c · α²) / (1 − α) = (c · Λ_m²) / [Λ_m°(Λ_m° − Λ_m)].',
        '3. Determination of Solubility (S) and Solubility Product (K_sp) of Sparingly Soluble Salts (e.g., AgCl, BaSO₄, PbSO₄):',
        '• A saturated solution of a sparingly soluble salt is so dilute that it may be treated as infinitely dilute (Λ_m ≈ Λ_m°).',
        '• From S = (1000 · κ_salt) / Λ_m°, the molar solubility S (in mol·L⁻¹) and K_sp = S² (for 1:1 salt) are calculated directly.',
        '4. Determination of Absolute Ionic Mobilities and Ionic Product of Water (K_w):',
        '• Combining Λ_m° = λ_+° + λ_-° with transport number t_+° = λ_+° / Λ_m° gives individual ionic conductances λ_+° and λ_-°, from which u_i° = λ_i° / F is computed.',
      ],
      equations: [
        {
          label: 'Kohlrausch’s Law for General Electrolyte A_{ν_+}B_{ν_-}',
          formula: 'Λ_m° = ν_+ · λ_+° + ν_- · λ_-°',
          units: 'S·cm²·mol⁻¹',
          note: 'For Al₂(SO₄)₃: Λ_m° = 2λ°(Al³⁺) + 3λ°(SO₄²⁻)',
        },
        {
          label: 'Solubility of Sparingly Soluble Salt',
          formula: 'S = (1000 · κ_salt) / Λ_m°',
          units: 'mol·L⁻¹',
          note: 'κ_salt = κ_solution − κ_water',
        },
      ],
      examYears: ['2025', '2022', '2021'],
      marks: '3–4 Marks',
    },
    {
      id: 'chem-m1-b7',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 4],
      sourceCitation:
        'Professor’s Suggestion Sheet (Ch 1, Part A Q9) · PUST EECE 2022 Q1(d) · Haque & Nawab',
      title: 'Transference (Transport) Number and Hittorf’s Method',
      summaryText:
        'Definition of transport number t_+ and t_-, proof that t_+ + t_- = 1, relationship with ionic mobility and ionic conductance, and Hittorf’s / Moving Boundary principles.',
      memorizeStatements: [
        'Transference (Transport) Number (t_+ or t_-): The fraction of the total electric current carried by a particular ion (cation or anion) during the electrolysis of an electrolytic solution.',
        'Transport Number Formulas: t_+ = u_+ / (u_+ + u_-) = λ_+ / Λ_m, t_- = u_- / (u_+ + u_-) = λ_- / Λ_m, and t_+ + t_- = 1.',
      ],
      bulletPoints: [
        'Derivation of Transport Number Relations:',
        '1. Since the current carried by an ion is directly proportional to its ionic mobility, Current carried by cation I_+ ∝ u_+ and Current carried by anion I_- ∝ u_-._',
        '2. Total current is I = I_+ + I_- ∝ (u_+ + u_-).',
        '3. Therefore, Cation Transport Number:\nt_+ = I_+ / I = u_+ / (u_+ + u_-) = λ_+° / (λ_+° + λ_-°) = λ_+° / Λ_m°',
        '4. Anion Transport Number:\nt_- = I_- / I = u_- / (u_+ + u_-) = λ_-° / (λ_+° + λ_-°) = λ_-° / Λ_m°',
        '5. Adding both equations gives the fundamental conservation identity: t_+ + t_- = 1.',
        'Experimental Determination (Hittorf’s Rule & Moving Boundary Method):',
        '• Hittorf’s Rule: (Fall in concentration around anode) / (Fall in concentration around cathode) = u_+ / u_- = t_+ / t_-.',
        '• Moving Boundary Method: If a sharp boundary between a principal electrolyte (e.g., HCl) and an indicator electrolyte (e.g., CdCl₂) moves through distance l in tube of cross-section A when charge Q = I · t is passed:\nt_+ = (l · A · C · F) / (1000 · I · t).',
      ],
      equations: [
        {
          label: 'Transport Number Identities',
          formula: 't_+ = u_+ / (u_+ + u_-) = λ_+ / Λ_m\nt_- = u_- / (u_+ + u_-) = λ_- / Λ_m\nt_+ + t_- = 1',
          units: 'dimensionless',
          note: 'Ratio of transport numbers: t_+ / t_- = u_+ / u_- = λ_+ / λ_-',
        },
      ],
      examYears: ['2022'],
      marks: '2.5–3 Marks',
    },
    {
      id: 'chem-m1-b8',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [1],
      sourceCitation: 'PUST EECE 2025 Exam · Q1(c)',
      title: 'Kohlrausch’s Law Calculation for Sparingly Soluble AgI',
      summaryText:
        'Calculate the limiting molar conductivity of AgI at 25°C from Λ°(NaI) = 12.69, Λ°(NaNO₃) = 12.16, and Λ°(AgNO₃) = 13.34 mS·m²·mol⁻¹.',
      examYears: ['2025'],
      marks: '4 Marks',
      problemStatement:
        'The limiting molar conductivities of NaI, NaNO₃, and AgNO₃ are 12.69 mS·m²·mol⁻¹, 12.16 mS·m²·mol⁻¹, and 13.34 mS·m²·mol⁻¹, respectively (all at 25°C). What is the limiting molar conductivity of AgI at this temperature?',
      givenData: [
        'Λ_m°(NaI) = 12.69 mS·m²·mol⁻¹',
        'Λ_m°(NaNO₃) = 12.16 mS·m²·mol⁻¹',
        'Λ_m°(AgNO₃) = 13.34 mS·m²·mol⁻¹',
        'Temperature T = 25°C (298 K)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Expand each strong electrolyte using Kohlrausch’s Law',
          explanation:
            'According to Kohlrausch’s Law of independent migration of ions, the limiting molar conductivity of each 1:1 electrolyte is the sum of its ionic conductivities:',
          equation:
            'Λ_m°(NaI) = λ°(Na⁺) + λ°(I⁻) = 12.69\nΛ_m°(NaNO₃) = λ°(Na⁺) + λ°(NO₃⁻) = 12.16\nΛ_m°(AgNO₃) = λ°(Ag⁺) + λ°(NO₃⁻) = 13.34',
        },
        {
          stepTitle: 'Step 2: Form the algebraic combination for Λ_m°(AgI)',
          explanation:
            'To isolate λ°(Ag⁺) + λ°(I⁻), add the equations for AgNO₃ and NaI, and subtract the equation for NaNO₃:',
          equation:
            'Λ_m°(AgI) = λ°(Ag⁺) + λ°(I⁻)\nΛ_m°(AgI) = Λ_m°(AgNO₃) + Λ_m°(NaI) − Λ_m°(NaNO₃)',
        },
        {
          stepTitle: 'Step 3: Substitute the numerical values',
          explanation: 'Substitute the given limiting molar conductivities in mS·m²·mol⁻¹:',
          equation:
            'Λ_m°(AgI) = 13.34 + 12.69 − 12.16\nΛ_m°(AgI) = 26.03 − 12.16\nΛ_m°(AgI) = 13.87 mS·m²·mol⁻¹',
        },
      ],
      finalAnswer: 'Λ_m°(AgI) = 13.87 mS·m²·mol⁻¹',
    },
    {
      id: 'chem-m1-b9',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [1],
      sourceCitation: 'PUST EECE 2022 Exam · Q1(b)',
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
          equation: 'W = Z · I · t\nZ = W / (I · t)',
        },
        {
          stepTitle: 'Step 2: Substitute the given values in CGS/SI units',
          explanation: 'Compute total charge Q = I · t and divide mass W by Q:',
          equation:
            'Q = I · t = 0.2 A × 3000 s = 600 C\nZ = 0.1978 g / 600 C\nZ = 0.00032967 g·C⁻¹ = 3.297 × 10⁻⁴ g·C⁻¹',
        },
      ],
      finalAnswer: 'Z = 3.297 × 10⁻⁴ g·C⁻¹ (or 3.297 × 10⁻⁷ kg·C⁻¹)',
    },
    {
      id: 'chem-m1-b10',
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
        'Molarity of KCl, M = 0.01 M (Since KCl is a 1:1 electrolyte, Normality C_N = 0.01 N)',
        'Specific conductance, κ = 0.00141 S·cm⁻¹',
        'Cell constant, K_cell = l / A = 1.15 cm⁻¹',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Calculate the Equivalent Conductance (Λ_eq)',
          explanation: 'Use the relationship between specific conductance κ and normality C_N:',
          equation:
            'Λ_eq = (1000 · κ) / C_N\nΛ_eq = (1000 × 0.00141) / 0.01\nΛ_eq = 1.41 / 0.01 = 141.0 S·cm²·equiv⁻¹',
        },
        {
          stepTitle: 'Step 2: Calculate the Observed Conductance (G) of the Solution',
          explanation:
            'Since specific conductance is κ = G · K_cell, rearrange to solve for conductance G:',
          equation:
            'G = κ / K_cell\nG = 0.00141 S·cm⁻¹ / 1.15 cm⁻¹\nG = 0.001226 S = 1.226 × 10⁻³ S (or Ω⁻¹)',
        },
      ],
      finalAnswer: '(a) Λ_eq = 141.0 S·cm²·equiv⁻¹; (b) Conductance G = 1.226 × 10⁻³ S',
    },
  ],
};

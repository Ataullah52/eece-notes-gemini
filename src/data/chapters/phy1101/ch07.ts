import type { ChapterNote } from '../../types';

export const PHY1101_CH07: ChapterNote = {
  id: 'phy1101-ch07',
  unitNumber: 'Module 07',
  title: 'Thermoelectricity and Photoelectricity',
  summary:
    'Thermal electromotive forces, Seebeck effect and Peltier effect, Thermocouple and Thermo-emf, Thermodynamic relation π = T(dE/dT), Laws of photoemission and Einstein’s equation, Photoelectric cell and its use.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m7-b1',
      type: 'theory',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST EECE 2025 Q8(a), 2024 Q8(a), 2023 Q8(a,c), 2022 Q7(b), 2022 Q8(a), 2021 Q8(a), 2020 Q8(a,b) · Sears · Halliday & Resnick',
      title: 'Thermoelectricity, Seebeck & Peltier Effects, Thermocouple, and Peltier Relation',
      summaryText:
        'Seebeck effect, thermoelectric series, thermocouple construction & parabolic thermo-emf law E = αt + (1/2)βt², neutral & inversion temperatures, Peltier vs. Joule effect, and deduction of π = T(dE/dT).',
      memorizeStatements: [
        'Seebeck Effect (1821): When two dissimilar metal wires are joined at their ends to form a closed loop (thermocouple) and the two junctions are maintained at different temperatures, a continuous thermal electromotive force (thermo-emf) is generated, driving a thermoelectric current around the circuit.',
        'Thermoelectric Power (Seebeck Coefficient S or P): The rate of change of thermo-emf E with respect to temperature T at a given hot-junction temperature: P = dE / dT = α + βt (measured in μV·K⁻¹).',
        'Neutral Temperature (t_n) and Temperature of Inversion (t_i): The hot-junction temperature t_n = −α/β at which thermo-emf E reaches its maximum (dE/dt = 0) is independent of cold-junction temperature t₀; the temperature t_i = 2t_n − t₀ at which thermo-emf reverses sign satisfies t_n = (t₀ + t_i) / 2.',
        'Peltier Effect (1834): When an external electric current I is passed across the junction of two dissimilar metals, heat is either absorbed or evolved at the junction (independent of Joule heating) at a rate dQ_P = π I dt = π dq, where π is the Peltier coefficient (in Volts or J·C⁻¹).',
        'Kelvin’s First Thermoelectric Relation: The Peltier coefficient π at any junction at absolute temperature T equals the product of the absolute temperature and the thermoelectric power: π = T (dE / dT).',
      ],
      bulletPoints: [
        'Seebeck Effect & Thermoelectric Series (PUST 2025 Q8a, 2024 Q8a, 2023 Q8a, 2022 Q8a, 2021 Q8a, 2020 Q8a):',
        '• Seebeck arranged metals in a thermoelectric series: Bi, Ni, Co, Pd, Pt, Cu, Mn, Pb, Au, Ag, Zn, Cd, Fe, Sb.',
        '• Direction Rule: Across the hot junction, thermoelectric current flows from the metal occurring earlier in the series to the metal occurring later (e.g., in a Cu–Fe thermocouple, current flows from Cu to Fe at the hot junction; in a Bi–Sb couple, from Bi to Sb at the hot junction).',
        '• Temperature Dependence of Thermo-EMF: When cold junction is at 0°C and hot junction is at t°C, E = αt + (1/2)βt² (a parabola). At t = t_n, dE/dt = α + βt_n = 0 ⇒ t_n = −α/β and E_max = −α²/(2β).',
        'Thermocouple Principle & Practical Engineering Applications (PUST 2024 Q8a, 2023 Q8a, 2022 Q7b, 2020 Q8b):',
        '• Construction: Two dissimilar metal/alloy wires (e.g., Copper–Constantan up to 400°C, Iron–Constantan up to 800°C, Chromel–Alumel up to 1200°C, or Platinum–Pt/Rhodium up to 1700°C) joined at a sensing hot junction while the reference cold junction is kept in an ice bath (0°C) and connected to a millivoltmeter or potentiometer.',
        '• Practical Uses: (1) Wide-range industrial pyrometry from −200°C to +1700°C; (2) Point-temperature measurement due to tiny junction thermal capacity; (3) Thermopile radiation detectors for infrared/solar bolometry; (4) Thermoelectric generators (RTGs) and Peltier solid-state coolers.',
        'Thomson Effect (Lord Kelvin, 1851): When electric current flows along a single unequally heated conductor having a temperature gradient dT/dx, heat is absorbed or evolved throughout the volume of the metal: dQ_T = ±σ I dT dt, where σ is the Thomson coefficient.',
      ],
      table: {
        caption: 'Comparison Between Peltier Effect and Joule Heating Effect',
        headers: ['Feature', 'Peltier Effect', 'Joule Heating Effect'],
        rows: [
          [
            'Thermal Nature',
            'Thermodynamically reversible: heat is absorbed for one current direction and evolved when current is reversed.',
            'Thermodynamically irreversible: heat is always evolved (generated) regardless of current direction.',
          ],
          [
            'Current Law',
            'Rate of heat transfer is directly proportional to current I: P_Peltier = π I.',
            'Rate of heat generation is proportional to the square of current I²: P_Joule = I² R.',
          ],
          [
            'Spatial Location',
            'Occurs strictly at the junction between two dissimilar metals.',
            'Occurs throughout the entire bulk volume of the conductor.',
          ],
        ],
      },
      solutionSteps: [
        {
          stepTitle: 'Step 1: Thermodynamic Deduction of π = T(dE/dT) (PUST 2023 Q8c)',
          explanation:
            'Consider a reversible thermocouple whose cold junction is at absolute temperature T (with Peltier coefficient π) and hot junction is at T + dT (with Peltier coefficient π + dπ). Neglecting the Thomson effect (or considering a small differential cycle where Thomson heat is negligible), the net thermo-emf of the couple is dE.',
        },
        {
          stepTitle: 'Step 2: Applying Conservation of Energy (First Law) to Charge q Passing Around the Loop',
          explanation:
            'When a charge q flows around the thermocouple loop, heat q(π + dπ) is absorbed at the hot junction (T + dT) and heat qπ is rejected at the cold junction (T). By the First Law of Thermodynamics, the net heat absorbed equals the electrical work q dE:',
          equation: 'q(π + dπ) − qπ = q dE  ⇒  dπ = dE',
        },
        {
          stepTitle: 'Step 3: Applying Reversible Carnot Efficiency / Clausius Entropy Condition (Second Law)',
          explanation:
            'Treating the reversible thermocouple as a Carnot engine operating between T + dT and T, the net entropy change over the reversible cycle is zero (or work/heat absorbed = dT/T):',
          equation:
            '(q dE) / (q π) = dT / T  ⇒  dE / π = dT / T  ⇒  π = T (dE / dT)',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
    },
    {
      id: 'phy-m7-b2',
      type: 'theory',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST EECE 2025 Q6(a), 2025 Q8(b), 2024 Q8(b), 2023 Q8(b), 2022 Q8(c), 2021 Q8(a,b), 2020 Q8(a,c) · Arthur Beiser Ch. 2',
      title: 'Photoelectric Effect, Laws of Photoemission, Einstein’s Equation, and Photocells',
      summaryText:
        'Threshold frequency, work function, stopping potential, four fundamental laws of photoemission, derivation of Einstein’s photoelectric equation K_max = eV₀ = h(ν − ν₀), and photoelectric cell types & uses.',
      memorizeStatements: [
        'Photoelectric Effect: The instantaneous emission of electrons (photoelectrons) from a metal surface when illuminated by electromagnetic radiation (light, UV, or X-rays) of frequency ν greater than a characteristic minimum threshold frequency ν₀.',
        'Work Function (ϕ₀ or W₀) and Threshold Frequency (ν₀): The minimum energy required to liberate the most loosely bound conduction electron from a metal surface with zero kinetic energy: ϕ₀ = hν₀ = hc / λ₀.',
        'Stopping Potential (V₀): The minimum negative (retarding) potential applied to the collector plate with respect to the emitter that is just sufficient to stop the most energetic photoelectrons, reducing the photoelectric current to zero: K_max = (1/2)m v_max² = e V₀.',
        'Einstein’s Photoelectric Equation (1905): K_max = (1/2)m v_max² = e V₀ = hν − ϕ₀ = h(ν − ν₀) = hc(1/λ − 1/λ₀).',
      ],
      bulletPoints: [
        'Four Fundamental Laws of Photoelectric Emission (PUST 2025 Q8b, 2024 Q8b, 2023 Q8b, 2021 Q8b):',
        '1. Existence of Threshold Frequency: For every metal, there exists a definite minimum cut-off frequency ν₀ (or maximum threshold wavelength λ₀ = c/ν₀) below which no photoelectrons are emitted, no matter how intense the incident light is.',
        '2. Proportionality of Photocurrent to Intensity: Above threshold (ν > ν₀), the number of photoelectrons emitted per second (saturation photoelectric current) is directly proportional to the intensity of incident light.',
        '3. Dependence of Maximum Kinetic Energy on Frequency Alone: The maximum kinetic energy K_max = eV₀ of emitted photoelectrons increases linearly with the frequency ν of incident light and is completely independent of light intensity.',
        '4. Instantaneous Emission: Photoelectron emission occurs with no measurable time lag (< 10⁻⁹ s) as soon as light of ν > ν₀ strikes the surface.',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Derivation of Einstein’s Photoelectric Equation (PUST 2025 Q8b, 2024 Q8b, 2023 Q8b, 2021 Q8b, 2020 Q8c)',
          explanation:
            'According to Einstein’s quantum photon hypothesis, a single incident photon of frequency ν transfers its entire energy E = hν to a single free electron inside the metal.',
        },
        {
          stepTitle: 'Step 2: Energy Partition Between Work Function ϕ₀ and Kinetic Energy K_max',
          explanation:
            'For an electron located right at the metal surface, a minimum energy ϕ₀ (the work function) is spent overcoming the surface potential barrier, and the remaining energy appears as the maximum kinetic energy K_max = (1/2)m v_max² of the emitted photoelectron:',
          equation: 'hν = ϕ₀ + K_max = ϕ₀ + (1 / 2) m v_max²',
        },
        {
          stepTitle: 'Step 3: Introducing Threshold Frequency ν₀ and Stopping Potential V₀',
          explanation:
            'At the threshold frequency ν = ν₀ (wavelength λ₀ = c/ν₀), the electron is just liberated with zero kinetic energy (K_max = 0), so ϕ₀ = hν₀ = hc/λ₀. Since K_max = eV₀, substituting ϕ₀ gives the complete forms of Einstein’s photoelectric equation:',
          equation:
            'K_max = (1 / 2) m v_max² = e V₀ = h(ν − ν₀) = h c ((1 / λ) − (1 / λ₀))',
        },
      ],
      table: {
        caption: 'Three Classes of Photoelectric Cells and Engineering Applications (PUST 2022 Q8c)',
        headers: ['Photocell Type', 'Operating Principle', 'Key Engineering Applications'],
        rows: [
          [
            'Photoemissive Cell (Vacuum or Gas-Filled)',
            'External photoelectric effect: light strikes a semi-cylindrical alkali-metal cathode (Cs/Ag₂O), emitting electrons collected by a central anode.',
            'Reproduction of optical sound tracks in cinema projectors, photometry, burglar alarms, and automatic street-light switches.',
          ],
          [
            'Photovoltaic Cell (Solar Cell)',
            'Internal p–n junction photovoltaic effect: incident photons generate electron–hole pairs across a depletion barrier, producing a self-generated EMF without external bias.',
            'Solar power generation, satellites, and photographic exposure meters (luxmeters).',
          ],
          [
            'Photoconductive Cell (LDR — CdS / Se)',
            'Internal photoconductive increase: photon absorption excites valence electrons into the conduction band, drastically lowering electrical resistance.',
            'Infrared missile guidance, industrial smoke/flame detectors, and automated counting relays.',
          ],
        ],
      },
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
    },
    {
      id: 'phy-m7-b3',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST EECE 2025 Q6(c), 2025 Q8(c), 2024 Q6(c), 2024 Q8(c), 2021 Q8(c)',
      title: 'Solved Photoelectric and Thermoelectric Numericals',
      summaryText:
        'Complete step-by-step solutions to all PUST past exam numericals on stopping potential, threshold wavelength, maximum photoelectron velocity, and work function.',
      problemStatement:
        '(a) [PUST 2025 Q6c & 2024 Q6c] The work function for a metallic (sodium/cesium) surface is 2.0 eV. Find the threshold wavelength and the stopping potential when the surface is illuminated by light of wavelength 3000 Å. (b) [PUST 2025 Q8c & 2024 Q8c] A metallic surface, when illuminated with light of wavelength λ₁, emits electrons with energies up to a maximum value E₁ (or stopping potential V₁), and when illuminated with light of wavelength λ₂ (where λ₂ < λ₁), emits electrons up to a maximum energy E₂. Prove that Planck’s constant is h = [e(V₂ − V₁) λ₁ λ₂] / [c(λ₁ − λ₂)] and threshold wavelength is λ₀ = [λ₁ λ₂ (E₂ − E₁)] / (E₂ λ₂ − E₁ λ₁) (or solve for numerical values λ₁ = 4000 Å, V₁ = 1.1 V; or λ = 2500 Å, ϕ₀ = 2.3 eV). (c) [PUST 2021 Q8c] The threshold wavelength for photoelectric emission in tungsten is 2300 Å. What wavelength of light must be used in order that electrons with a maximum energy of 1.5 eV be ejected?',
      solutionSteps: [
        {
          stepTitle: 'Part (a): Threshold Wavelength λ₀ and Stopping Potential V₀ for ϕ₀ = 2.0 eV, λ = 3000 Å (PUST 2025 Q6c & 2024 Q6c)',
          explanation:
            'Using hc = 12,400 eV·Å (or h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J):',
          equation:
            'λ₀ = (h c) / ϕ₀ = 12,400 eV·Å / 2.0 eV = 6200 Å (6.2 × 10⁻⁷ m);   E_photon = 12,400 / 3000 = 4.133 eV  ⇒  K_max = 4.133 − 2.0 = 2.133 eV  ⇒  V₀ = 2.133 V',
        },
        {
          stepTitle: 'Part (b): Two-Wavelength Photoelectric Relation & Numerical Case (PUST 2025 Q8c & 2024 Q8c)',
          explanation:
            'From Einstein’s equation at two wavelengths λ₁ and λ₂: E₁ = eV₁ = hc/λ₁ − ϕ₀ and E₂ = eV₂ = hc/λ₂ − ϕ₀. Subtracting the first from the second eliminates ϕ₀:',
          equation:
            'E₂ − E₁ = e(V₂ − V₁) = h c ((1 / λ₂) − (1 / λ₁)) = h c (λ₁ − λ₂) / (λ₁ λ₂)  ⇒  h = [(E₂ − E₁) λ₁ λ₂] / [c(λ₁ − λ₂)]',
        },
        {
          stepTitle: 'Part (c): Incident Wavelength for Tungsten with λ₀ = 2300 Å and K_max = 1.5 eV (PUST 2021 Q8c)',
          explanation:
            'Convert K_max = 1.5 eV = 1.5 × 1.6 × 10⁻¹⁹ J = 2.4 × 10⁻¹⁹ J. From hc/λ = hc/λ₀ + K_max (with hc = 12,400 eV·Å):',
          equation:
            '12,400 / λ = (12,400 / 2300) + 1.5 = 5.3913 + 1.5 = 6.8913 eV  ⇒  λ = 12,400 / 6.8913 = 1799.4 Å ≈ 1800 Å (1.80 × 10⁻⁷ m)',
        },
      ],
      examYears: ['2025', '2024', '2021'],
    },
  ],
};

import type { ChapterNote } from '../../types';

export const PHY1101_CH01: ChapterNote = {
  id: 'phy1101-ch01',
  unitNumber: 'Module 01',
  title: 'Electrostatic and Steady Electric Current',
  summary:
    'Electric field in dielectric media, Energy in an electrostatic field. Concept of electric current, Current density, Equation of continuity, Resistivity and conductivity, Electrostatic force, Electromotive force.',
  estimatedMinutes: 75,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m1-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Electric Field 1 & 2) · PUST EECE 2025 Q1(b), 2024 Q1(a), 2023 Q1(a,b) · Halliday & Resnick',
      title: 'Electrostatic Force, Coulomb’s Law, Electric Field, and Potential',
      summaryText:
        'Definitions of electric charge, electrostatic force, Coulomb’s inverse-square law, electric field intensity E = F/q, and derivation of electric potential V = q / (4πε₀r).',
      memorizeStatements: [
        'Electric Charge (q): An intrinsic fundamental property of matter carried by elementary particles (protons +e, electrons −e, where e = 1.602 × 10⁻¹⁹ C) that governs their electromagnetic interactions; charge is quantized (q = ±ne) and strictly conserved.',
        'Coulomb’s Law of Electrostatics: The magnitude of the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them: F = (1 / 4πε₀) · |q₁ q₂| / r².',
        'Electric Field Intensity (E): The electrostatic force experienced per unit positive test charge placed at a point in an electric field, without disturbing the source charge distribution: E = F / q₀ (in N·C⁻¹ or V·m⁻¹).',
        'Electric Potential (V): The amount of external work done per unit positive test charge in bringing it slowly from infinity to a given point against the electrostatic force: V = W / q₀ = −∫_∞^r E · dr = q / (4πε₀ r) (in Volts, J·C⁻¹).',
      ],
      bulletPoints: [
        'Four Factors Affecting Electrostatic Force (Professor’s Sheet — Electric Field 2, p. 6–7):',
        '1. Magnitude of Charges: Force is directly proportional to the product of the two charge magnitudes (F ∝ |q₁ q₂|).',
        '2. Distance Between Charges: Force is inversely proportional to the square of the separation distance (F ∝ 1 / r²).',
        '3. Nature of the Surrounding Medium: Placing the charges in a dielectric medium of relative permittivity (dielectric constant) ε_r reduces the electrostatic force by a factor of ε_r:\nF_medium = F_vacuum / ε_r = [1 / (4π ε₀ ε_r)] · (|q₁ q₂| / r²)',
        '4. Polarity of Charges: Like charges (+/+ or −/−) repel each other, whereas unlike charges (+/−) attract each other along the line joining them.',
        'Applications of Electrostatic Force (Professor’s Sheet): Electrostatic precipitators (smoke/fly-ash removal), laser printers and xerographic photocopiers, electrostatic spray painting, and capacitor energy storage.',
        'Derivation of Electric Potential at a Point Due to a Point Charge +q (PUST 2023 Q1b):',
        '1. Consider an isolated positive point charge +q placed at the origin O in free space. We wish to find the electric potential V at a point P located at distance r from O.',
        '2. Let a unit positive test charge (+1 C) be placed at an intermediate point A at distance x from O. By Coulomb’s law, the outward repulsive electric field intensity at A is:\nE = q / (4π ε₀ x²)',
        '3. The infinitesimal work dW done in moving the unit positive charge a small distance dx inward against E is:\ndW = −E · dx = −[q / (4π ε₀ x²)] dx',
        '4. Integrating from x = ∞ (where V_∞ = 0) to x = r gives the electrostatic potential V at point P:\nV = −∫_∞^r [q / (4π ε₀ x²)] dx = −(q / 4π ε₀) · [−1 / x]_∞^r = q / (4π ε₀ r)',
      ],
      equations: [
        {
          label: 'Coulomb’s Law & Electric Field Intensity',
          formula: 'F = [1 / (4π ε₀)] · (|q₁ q₂| / r²) = k · (|q₁ q₂| / r²)\nE = F / q₀ = [1 / (4π ε₀)] · (q / r²)',
          units: 'N and N·C⁻¹ (or V·m⁻¹)',
          note: 'ε₀ = 8.854 × 10⁻¹² F·m⁻¹;   k = 1/(4πε₀) = 8.99 × 10⁹ N·m²·C⁻²',
        },
        {
          label: 'Electric Potential & Field–Potential Gradient Relation',
          formula: 'V = [1 / (4π ε₀)] · (q / r)\nE = −dV / dr',
          units: 'V (J·C⁻¹) and V·m⁻¹',
          note: 'Electric field always points in the direction of steepest decrease of potential',
        },
      ],
      examYears: ['2025', '2024', '2023'],
      marks: '3–4 Marks',
    },
    {
      id: 'phy-m1-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Electric Field 1, p. 4) · PUST EECE 2024 Q1(b), 2022 Q1(a,b), 2021 Q1(a,b), 2020 Q1(a)',
      title: 'Electric Flux, Gaussian Surface, and Gauss’s Law Proofs',
      summaryText:
        'Definitions of electric flux and Gaussian surface, statement and solid-angle proof of Gauss’s Law in electrostatics, and deduction of Coulomb’s Law from Gauss’s Law.',
      memorizeStatements: [
        'Electric Flux (Φ_E): The total number of electric lines of force passing normally through a given surface area, defined mathematically as the surface integral of the electric field: Φ_E = ∫ E · dA = E A cos θ (in N·m²·C⁻¹ or V·m).',
        'Gaussian Surface: Any hypothetical closed three-dimensional mathematical surface (spherical, cylindrical, or pillbox) chosen around a charge distribution to evaluate the surface integral of electric flux using Gauss’s Law.',
        'Gauss’s Law in Electrostatics: The net outward electric flux (Φ_E) through any closed Gaussian surface in free space is equal to 1/ε₀ times the net electric charge (q_enc) enclosed within that surface: Φ_E = ∮ E · dA = q_enc / ε₀ (or ∇ · E = ρ / ε₀).',
      ],
      bulletPoints: [
        'Proof of Gauss’s Law in Electrostatics (PUST 2024 Q1b, 2022 Q1b, 2020 Q1a):',
        '1. Spherical Surface Centered on Point Charge +q: Consider a point charge +q at the center of a spherical Gaussian surface of radius r. At every area element dA on the sphere, the electric field E = q / (4πε₀r²) is directed radially outward parallel to dA (θ = 0°, cos 0° = 1).',
        '2. Total flux through the sphere is:\nΦ_E = ∮ E dA cos 0° = E ∮ dA = [q / (4π ε₀ r²)] × (4π r²) = q / ε₀.',
        '3. General Arbitrary Closed Surface (Solid Angle Proof): For any irregular closed surface enclosing +q, the flux through an area element dA at distance r with normal at angle θ to r is:\ndΦ_E = E dA cos θ = [q / (4π ε₀)] · (dA cos θ / r²) = [q / (4π ε₀)] · dΩ\nwhere dΩ = (dA cos θ) / r² is the elementary solid angle subtended by dA at q. Integrating over the entire closed surface (∮ dΩ = 4π steradians) gives:\nΦ_E = [q / (4π ε₀)] × 4π = q / ε₀.',
        'Deduction of Coulomb’s Law from Gauss’s Law (PUST 2021 Q1b):',
        '1. Place an isolated point charge +q₁ at the origin and construct a concentric spherical Gaussian surface of radius r passing through a point P.',
        '2. By spherical symmetry, the magnitude of E is uniform over the sphere and directed radially outward (E ∥ dA).',
        '3. Applying Gauss’s Law:\n∮ E · dA = q₁ / ε₀ ⇒ E × (4π r²) = q₁ / ε₀ ⇒ E = q₁ / (4π ε₀ r²).',
        '4. If a second point charge q₂ is placed at P, the electrostatic force experienced by q₂ is:\nF = q₂ E = [1 / (4π ε₀)] · (q₁ q₂ / r²), which is Coulomb’s Law.',
      ],
      equations: [
        {
          label: 'Gauss’s Law (Integral & Differential Forms)',
          formula: 'Φ_E = ∮ E · dA = q_enc / ε₀\n∇ · E = ρ / ε₀',
          units: 'N·m²·C⁻¹ and V·m⁻²',
          note: 'In a dielectric medium of permittivity ε = ε₀ε_r: ∮ D · dA = q_free',
        },
      ],
      examYears: ['2024', '2022', '2021', '2020'],
      marks: '4–5.67 Marks',
    },
    {
      id: 'phy-m1-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Electric Field 1, pp. 1–3) · PUST EECE 2023 Q1(c) · Halliday & Resnick',
      title: 'Dielectric Media, Polarization, Capacitance, and Electrostatic Energy Density',
      summaryText:
        'Polarization in dielectrics, derivation of D = ε₀E + P = εE, capacitance of a parallel-plate capacitor with a dielectric, and electrostatic energy density u = ½εE².',
      memorizeStatements: [
        'Dielectric Medium: An insulating material containing almost no free charge carriers whose molecules undergo electric dipole polarization when placed in an external electric field, reducing the net internal field.',
        'Constitutive Dielectric Relation: D = ε₀ E + P = ε₀ (1 + χ_e) E = ε₀ ε_r E = ε E, where D is electric displacement (C·m⁻²), P is polarization vector (C·m⁻²), χ_e is electric susceptibility, and ε_r = 1 + χ_e is relative permittivity.',
        'Electrostatic Energy Stored in a Capacitor: W = ½ C V² = ½ Q V = Q² / (2C) (in Joules).',
        'Electrostatic Energy Density (u): The electrostatic potential energy stored per unit volume of an electric field: u = ½ E · D = ½ ε E² = ½ ε₀ ε_r E² (in J·m⁻³).',
      ],
      bulletPoints: [
        'Relationship Among Electric Field (E), Electric Displacement (D), and Polarization (P) [Professor’s Sheet 1, pp. 1–2]:',
        '1. When a dielectric slab is placed between parallel capacitor plates with free surface charge density +σ_f, induced bound charges (−σ_b and +σ_b) appear on the dielectric surfaces due to molecular dipole alignment, where polarization magnitude P = σ_b (dipole moment per unit volume, in C·m⁻²).',
        '2. The net effective field E inside the dielectric is reduced by the opposing polarization field:\nE = E₀ − E_p = (σ_f / ε₀) − (P / ε₀) ⇒ ε₀ E = σ_f − P.',
        '3. Defining the Electric Displacement vector D = σ_f (governed solely by free charge), we obtain the fundamental relation:\nD = ε₀ E + P',
        '4. For a linear, homogeneous, isotropic dielectric, P is proportional to E: P = ε₀ χ_e E (where χ_e is the dimensionless electric susceptibility). Substituting P gives:\nD = ε₀ E + ε₀ χ_e E = ε₀ (1 + χ_e) E = ε₀ ε_r E = ε E\nwhere ε_r = 1 + χ_e is the relative permittivity (dielectric constant K) and ε = ε₀ ε_r is the absolute permittivity of the dielectric.',
        'Capacitance of a Parallel-Plate Capacitor in the Presence of a Dielectric (PUST 2023 Q1c):',
        '1. In vacuum, a parallel-plate capacitor of plate area A and separation d has uniform field E₀ = σ / ε₀ = Q / (ε₀ A), potential difference V₀ = E₀ d = Q d / (ε₀ A), and capacitance:\nC₀ = Q / V₀ = (ε₀ A) / d.',
        '2. When a dielectric of relative permittivity ε_r completely fills the space between the plates, the electric field drops to E = E₀ / ε_r = Q / (ε₀ ε_r A) and potential difference becomes V = E d = Q d / (ε₀ ε_r A).',
        '3. Therefore, the capacitance increases by a factor of ε_r:\nC = Q / V = (ε₀ ε_r A) / d = ε_r C₀.',
        '4. If a dielectric slab of thickness t (t < d) is inserted, V = E₀(d − t) + (E₀ / ε_r)t = (Q / ε₀ A)[(d − t) + t / ε_r], giving:\nC = (ε₀ A) / [(d − t) + (t / ε_r)].',
        'Derivation of Electrostatic Energy and Energy Density u = ½εE² (Professor’s Sheet 1, pp. 2–3):',
        '1. At any intermediate stage of charging a capacitor when charge is q and potential is v = q / C, the work dW required to transfer an additional charge dq is dW = v dq = (q / C) dq.',
        '2. Integrating from q = 0 to final charge Q gives total stored electrostatic energy:\nW = ∫₀^Q (q / C) dq = Q² / (2C) = ½ C V² = ½ Q V.',
        '3. Substituting C = (ε A) / d and V = E d for a parallel-plate capacitor of volume A d:\nW = ½ · [(ε A) / d] · (E d)² = ½ ε E² · (A d).',
        '4. Dividing by the volume (A d) yields the energy density (energy per unit volume):\nu = W / (A d) = ½ ε E² = ½ E · D (in J·m⁻³).',
      ],
      equations: [
        {
          label: 'Dielectric Displacement & Permittivity Relations',
          formula: 'D = ε₀ E + P = ε₀(1 + χ_e)E = ε E\nε = ε₀ ε_r,   ε_r = 1 + χ_e',
          units: 'C·m⁻² and F·m⁻¹',
          note: 'P = ε₀ χ_e E is the polarization vector',
        },
        {
          label: 'Parallel-Plate Capacitance & Electrostatic Energy Density',
          formula: 'C = (ε₀ ε_r A) / d\nW = Q² / (2C) = (1 / 2) C V²\nu = (1 / 2) E · D = (1 / 2) ε E²',
          units: 'F, J, and J·m⁻³',
          note: 'Partially filled dielectric (thickness t): C = ε₀A / (d − t + t/ε_r)',
        },
      ],
      examYears: ['2023'],
      marks: '4.67 Marks',
    },
    {
      id: 'phy-m1-b4',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Sheet (Electric Field 1 & 2, pp. 1–8) · PUST EECE 2025 Q1(a,b), 2022 Q1(a), 2021 Q1(a), 2020 Q1(b)',
      title: 'Current Density, Continuity Equation, Free-Electron Conductivity, and EMF',
      summaryText:
        'Definitions of electric current, current density J = I/A, EMF vs. potential difference, derivation of the Equation of Continuity, and free-electron derivation of σ = ne²τ/m.',
      memorizeStatements: [
        'Electric Current (I): The time rate of flow of net electric charge through any cross-section of a conductor: I = dq / dt (1 Ampere = 1 C·s⁻¹).',
        'Current Density (J): A vector quantity whose magnitude is the electric current flowing normally per unit cross-sectional area of a conductor: J = I / A = n e v_d = σ E (in A·m⁻²).',
        'Equation of Continuity (Charge Conservation & Electric Field Form): ∇ · J + ∂ρ / ∂t = 0, and combining with Gauss’s law (ρ = ε₀ ∇ · E) yields ∇ · (J + ε₀ ∂E / ∂t) = 0, where ε₀ ∂E / ∂t is Maxwell’s displacement current density.',
        'Electrical Resistivity (ρ) and Conductivity (σ): Resistivity ρ = R A / L = m / (n e² τ) (in Ω·m) is the intrinsic opposition of a material to current flow; Conductivity σ = 1 / ρ = (n e² τ) / m (in S·m⁻¹) is its reciprocal.',
        'Electromotive Force (EMF): The total energy supplied by an active source per unit electric charge to drive it once around a complete closed circuit (E = W / Q, measured in Volts under open-circuit conditions).',
      ],
      bulletPoints: [
        'Derivation of the Equation of Continuity for Electric Field (Professor’s Sheet 2, pp. 1–2 & PUST 2025 Q1b, 2020 Q1b):',
        '1. Gauss’s Law in Differential Form: The divergence of electric field intensity E is related to volume charge density ρ (C·m⁻³) by:\n∇ · E = ρ / ε₀.',
        '2. Differentiating both sides with respect to time t (since spatial divergence and time derivative commute):\n(∂ / ∂t)(∇ · E) = ∇ · (∂E / ∂t) = (1 / ε₀)(∂ρ / ∂t).',
        '3. Principle of Conservation of Charge: The net outward current ∮ J · dA leaving a closed volume equals the rate of decrease of enclosed charge −(d/dt)∫ ρ dV, which by Gauss’s divergence theorem gives the charge continuity equation:\n∇ · J + (∂ρ / ∂t) = 0   ⇒   ∂ρ / ∂t = −∇ · J.',
        '4. Substituting ∂ρ / ∂t = −∇ · J into Step 2:\n∇ · (∂E / ∂t) = −(1 / ε₀)(∇ · J)   ⇒   ∇ · (J + ε₀ ∂E / ∂t) = 0.',
        '5. Physical Significance: J is the conduction current density (A·m⁻²), ε₀(∂E/∂t) is the displacement current density, and J_total = J + ε₀(∂E/∂t) has zero divergence everywhere, proving that total current is continuous even across the insulating gap of a charging capacitor.',
        'Derivation of Electrical Conductivity Using Free Electron Theory of Metals (Professor’s Sheet 2, pp. 4–5):',
        '1. Under an applied electric field E, free conduction electrons (charge e, mass m, concentration n per m³) experience acceleration a = eE / m between lattice collisions and attain an average drift velocity:\nv_d = (e E τ) / m\nwhere τ is the mean relaxation time (average time between collisions).',
        '2. Since total current I = n A e v_d, the current density is:\nJ = I / A = n e v_d = n e · [(e E τ) / m] = [(n e² τ) / m] · E.',
        '3. Comparing with microscopic Ohm’s law J = σ E gives the electrical conductivity and resistivity:\nσ = (n e² τ) / m   and   ρ = 1 / σ = m / (n e² τ).',
        '4. Effect of Temperature & Factors Affecting Resistivity: (i) In metals, raising temperature increases thermal lattice vibrations, shortening relaxation time τ and increasing resistivity linearly: ρ_T = ρ₀[1 + α(T − T₀)]; (ii) In semiconductors, raising temperature exponentially generates more charge carriers n, so resistivity decreases rapidly; (iii) Impurities and mechanical stress also alter ρ.',
        'Difference Between Electromotive Force (EMF) and Potential Difference (Professor’s Sheet 2, pp. 7–8):',
        '• EMF (E = W / Q) is the total energy supplied per coulomb by a source (battery, generator, solar cell, thermocouple) and is measured under open-circuit (zero current) conditions; Potential Difference (V = I R = E − I r) is the energy expended per coulomb between two circuit points when current flows.',
      ],
      table: {
        caption: 'Table 1.1 — Comparison of Conductors, Semiconductors, and Insulators (Professor’s Sheet 2, pp. 5–6)',
        headers: ['Property', 'Conductors (Metals)', 'Semiconductors', 'Insulators (Dielectrics)'],
        rows: [
          [
            'Resistivity (ρ) & Conductivity (σ)',
            'Very low ρ (~10⁻⁸ Ω·m); very high σ (~6 × 10⁷ S·m⁻¹)',
            'Intermediate ρ (10⁻¹ to 10⁴ Ω·m) and moderate σ',
            'Very high ρ (10¹¹ to 10¹⁶ Ω·m); negligible σ',
          ],
          [
            'Free Electron Concentration (n)',
            'Very large (~10²⁸ electrons·m⁻³)',
            'Moderate (thermally or dopant generated)',
            'Virtually zero free electrons',
          ],
          [
            'Effect of Increasing Temperature',
            'Conductivity decreases (ρ increases, α > 0)',
            'Conductivity increases rapidly (ρ decreases, α < 0)',
            'Slight or negligible change',
          ],
          [
            'Representative Examples',
            'Silver (1.59×10⁻⁸ Ω·m), Copper (1.68×10⁻⁸), Aluminum (2.82×10⁻⁸)',
            'Silicon (Si), Germanium (Ge), GaAs',
            'Glass, Quartz, Rubber, Plastic, Mica',
          ],
        ],
      },
      equations: [
        {
          label: 'Equation of Continuity (Charge & Electric Field Forms)',
          formula: '∇ · J + (∂ρ / ∂t) = 0\n∇ · (J + ε₀ · (∂E / ∂t)) = 0',
          units: 'A·m⁻³',
          note: 'J_d = ε₀(∂E/∂t) is Maxwell’s displacement current density',
        },
        {
          label: 'Free-Electron Drift Velocity, Conductivity, and Resistivity',
          formula: 'v_d = (e E τ) / m,   J = n e v_d = σ E\nσ = (n e² τ) / m,   ρ = 1 / σ = (R A) / L = m / (n e² τ)\nρ_T = ρ₀ [1 + α(T − T₀)]',
          units: 'S·m⁻¹ and Ω·m',
          note: 'n = free electron density, τ = relaxation time, α = temperature coefficient',
        },
      ],
      examYears: ['2025', '2022', '2021', '2020'],
      marks: '3 + 5.67 Marks',
    },
    {
      id: 'phy-m1-b5',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation:
        'Professor’s Sheet (Electric Field 1, p. 3) · PUST EECE 2025 Q1(c), 2024 Q1(c), 2022 Q1(c), 2021 Q1(c), 2020 Q1(c)',
      title: 'Solved Electrostatics, Gauss’s Flux, and Conductivity Numericals',
      summaryText:
        'Complete solutions to all PUST EECE (2020–2025) and Professor’s Sheet numericals on wire length from conductivity, current density, Gaussian flux, and electron weight balance.',
      examYears: ['2025', '2024', '2022', '2021', '2020'],
      marks: '3 Marks',
      problemStatement:
        '(a) [PUST 2025 Q1c]: A given wire has a diameter of 0.0635 inch and a resistance of 3 ohms; find its length if its conductivity is 8 × 10⁷ S/m.\n(b) [Professor’s Sheet 1, p. 3]: A 10 mm² copper wire conducts a current flow of 2 mA. Determine this current density using the current density formula.\n(c) [PUST 2024 Q1c]: In the x-direction, there is a homogeneous electric field of size E = 50 N/C. Calculate the flux of this field across a plane square area with an edge of 5 cm in the y-z plane using Gauss’s theorem.\n(d) [PUST 2022 Q1c & 2021 Q1c]: An electron is placed in an electric field. It experiences a force equivalent to its weight. Calculate the magnitude of electric field intensity.\n(e) [PUST 2020 Q1c]: A charge of 1.0 × 10⁻⁶ C is placed at the center of a spherical Gaussian surface of radius 0.50 m. Calculate the amount of flux at that surface.',
      givenData: [
        'Part (a): d = 0.0635 inch = 0.0635 × 0.0254 m = 1.6129 × 10⁻³ m; R = 3 Ω; σ = 8 × 10⁷ S·m⁻¹',
        'Part (b): I = 2 mA = 2 × 10⁻³ A; A = 10 mm² = 10 × 10⁻⁶ m² = 1.0 × 10⁻⁵ m²',
        'Part (c): E = 50 N·C⁻¹ along +x; square edge a = 5 cm = 0.05 m in yz-plane (normal along +x, θ = 0°)',
        'Part (d): Electron mass m_e = 9.11 × 10⁻³¹ kg, charge e = 1.6 × 10⁻¹⁹ C, g = 9.8 m·s⁻²',
        'Part (e): q = 1.0 × 10⁻⁶ C, r = 0.50 m, ε₀ = 8.854 × 10⁻¹² C²·N⁻¹·m⁻²',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Part (a) [PUST 2025 Q1c — Wire Length from Conductivity]',
          explanation:
            'Convert diameter to meters (1 inch = 0.0254 m), compute cross-sectional area A = πd²/4, and use R = L / (σA) ⇒ L = R · σ · A:',
          equation:
            'A = (π / 4) × (1.6129 × 10⁻³)² = 2.0431 × 10⁻⁶ m²\nL = R · σ · A = 3 × (8 × 10⁷) × (2.0431 × 10⁻⁶)\nL = 490.35 m',
        },
        {
          stepTitle: 'Step 2: Solve Part (b) [Professor’s Sheet — Current Density in Copper Wire]',
          explanation:
            'Substitute I = 2 × 10⁻³ A and A = 10 mm² = 10 × 10⁻⁶ m² into J = I / A (note: using the sheet’s handwritten correction 10 × 10⁻⁶ m² gives 200 A/m², whereas the printed 10 × 10⁻³ m² gives 0.20 A/m²):',
          equation:
            'J = I / A = (2 × 10⁻³ A) / (10 × 10⁻⁶ m²) = 200 A·m⁻²\n(With sheet’s printed 10 × 10⁻³ m²:   J = (2 × 10⁻³) / (10 × 10⁻³) = 0.20 A·m⁻²)',
        },
        {
          stepTitle: 'Step 3: Solve Part (c) [PUST 2024 Q1c — Electric Flux Across Square in yz-Plane]',
          explanation:
            'Since the square lies in the yz-plane, its area vector dA points along +x parallel to E (θ = 0°, cos 0° = 1), with area A = a² = (0.05 m)² = 2.5 × 10⁻³ m²:',
          equation:
            'Φ_E = E · A cos 0° = 50 N·C⁻¹ × (0.05 m)² × 1\nΦ_E = 50 × 0.0025 = 0.125 N·m²·C⁻¹ (or V·m)',
        },
        {
          stepTitle: 'Step 4: Solve Part (d) [PUST 2022 & 2021 Q1c — Electric Field Balancing Electron Weight]',
          explanation: 'Equate the electrostatic force F_e = eE to the gravitational weight W = m_e g:',
          equation:
            'e E = m_e g   ⇒   E = (m_e · g) / e\nE = (9.11 × 10⁻³¹ × 9.8) / (1.6 × 10⁻¹⁹) = 5.58 × 10⁻¹¹ N·C⁻¹',
        },
        {
          stepTitle: 'Step 5: Solve Part (e) [PUST 2020 Q1c — Electric Flux Through Spherical Gaussian Surface]',
          explanation: 'By Gauss’s Law, total flux depends only on enclosed charge q and is independent of radius r = 0.50 m:',
          equation:
            'Φ_E = q / ε₀ = (1.0 × 10⁻⁶ C) / (8.854 × 10⁻¹² C²·N⁻¹·m⁻²)\nΦ_E = 1.129 × 10⁵ N·m²·C⁻¹',
        },
      ],
      finalAnswer:
        '(a) L = 490.35 m; (b) J = 200 A·m⁻² (or 0.20 A·m⁻² as printed); (c) Φ_E = 0.125 N·m²·C⁻¹; (d) E = 5.58 × 10⁻¹¹ N·C⁻¹; (e) Φ_E = 1.13 × 10⁵ N·m²·C⁻¹',
    },
  ],
};

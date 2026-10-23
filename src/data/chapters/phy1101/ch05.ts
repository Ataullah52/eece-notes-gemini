import type { ChapterNote } from '../../types';

export const PHY1101_CH05: ChapterNote = {
  id: 'phy1101-ch05',
  unitNumber: 'Module 05',
  title: 'Quantum Mechanics',
  summary:
    'Wave function and wave equation, Time dependent and time independent Schrödinger’s equation, de Broglie waves, Uncertainty principle, Quantum theory of light, Compton effect, and Thermodynamic Entropy & Mean Free Path.',
  estimatedMinutes: 85,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m5-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST EECE 2025 Q6(a,b), 2024 Q6(a,b), 2022 Q6(a), 2020 Q6(a,c) · Arthur Beiser (Modern Physics)',
      title: 'Quantum Theory of Light, de Broglie Waves, and Uncertainty Principle',
      summaryText:
        'Planck–Einstein photon hypothesis, de Broglie matter-wave wavelength λ = h/p = h/√(2mK) = h/√(2meV), Bohr angular momentum quantization 2πr = nλ, and Heisenberg’s uncertainty relations.',
      memorizeStatements: [
        'Planck–Einstein Quantum Theory of Light: Radiant electromagnetic energy is emitted, propagated, and absorbed in discrete quanta called photons, each carrying energy E = hν = hc/λ and linear momentum p = E/c = h/λ.',
        'de Broglie Hypothesis (Wave–Particle Duality): Every moving material particle of momentum p = mv is associated with a matter wave (pilot wave) of wavelength λ = h/p = h/(mv) = h/√(2mK).',
        'de Broglie Wavelength of an Accelerated Electron: For a particle of mass m and charge q accelerated through a potential difference V, λ = h / √(2mqV); for an electron, λ = 12.27 / √V Å.',
        'Heisenberg’s Uncertainty Principle: It is fundamentally impossible to measure simultaneously and with arbitrary precision both the position (x) and conjugate linear momentum (p_x) of a microscopic particle: Δx · Δp_x ≥ ħ/2 = h/(4π), and ΔE · Δt ≥ ħ/2.',
      ],
      bulletPoints: [
        'Quantum Theory of Light (Planck 1900 & Einstein 1905 — PUST 2025 Q6a, 2024 Q6a):',
        '• Light of frequency ν consists of localized energy packets called photons traveling in vacuum at c = 3 × 10⁸ m·s⁻¹.',
        '• Rest mass of a photon is zero (m₀ = 0), its relativistic energy is E = hν = hc/λ, and its relativistic momentum is p = E/c = hν/c = h/λ, where Planck’s constant h = 6.626 × 10⁻³⁴ J·s.',
        '• In any photon–matter interaction (photoelectric emission, Compton scattering, pair production), total energy and total linear momentum are strictly conserved, and photons are absorbed or emitted as whole units.',
        'de Broglie Matter Waves (Louis de Broglie, 1924 — PUST 2025 Q6b, 2024 Q6b, 2022 Q6a, 2020 Q6a):',
        '• By symmetry of nature, since radiation exhibits both wave and particle properties, moving material particles (electrons, protons, neutrons, atoms) also possess wave character.',
        '• Combining photon momentum p = h/λ with a material particle of mass m and velocity v gives the de Broglie wavelength: λ = h/p = h/(mv) = (h / (m₀ v)) √(1 − v²/c²).',
        '• In terms of non-relativistic kinetic energy K = p²/(2m) = qV: λ = h / √(2mK) = h / √(2mqV). For an electron at potential V (in Volts): λ = 1.227 / √V nm = 12.27 / √V Å.',
        '• Derivation of Bohr’s Quantization Condition from de Broglie Waves: An electron in a stable circular orbit of radius r must form a closed stationary matter wave without destructive self-interference, requiring the circumference to equal an integral number of de Broglie wavelengths: 2πr = nλ = n(h / mv) ⇒ L = mvr = n(h / 2π) = nħ (n = 1, 2, 3, …).',
        'Heisenberg’s Uncertainty Principle (1927 — PUST 2025 Q6b, 2024 Q6b, 2020 Q6c):',
        '• Conjugate Canonical Pairs: Position–momentum (Δx · Δp_x ≥ ħ/2), Energy–time (ΔE · Δt ≥ ħ/2), and Angular displacement–angular momentum (Δθ · ΔJ_z ≥ ħ/2), where ħ = h / (2π) = 1.0546 × 10⁻³⁴ J·s.',
        '• Physical Origin: The uncertainty arises from the intrinsic wave-packet nature of matter (Fourier bandwidth theorem Δx · Δk ≥ 1/2 with p_x = ħk), not from defects in measuring instruments.',
        '• Physical Consequences: (i) Existence of non-zero ground-state zero-point energy E₁ = π²ħ²/(2mL²) in a quantum potential well; (ii) Non-existence of free electrons inside an atomic nucleus (confining an electron to Δx ≈ 10⁻¹⁴ m requires K > 20 MeV, whereas β-decay electrons never exceed ~4 MeV).',
      ],
      equations: [
        {
          label: 'Photon Energy & Momentum',
          formula: 'E = hν = hc / λ,   p = E / c = h / λ',
        },
        {
          label: 'de Broglie Matter-Wave Wavelength',
          formula: 'λ = h / p = h / (mv) = h / √(2mK) = h / √(2mqV)',
        },
        {
          label: 'Heisenberg Uncertainty Relations',
          formula: 'Δx · Δp_x ≥ h / (4π) = ħ / 2,   ΔE · Δt ≥ ħ / 2',
        },
      ],
      examYears: ['2025', '2024', '2022', '2020'],
    },
    {
      id: 'phy-m5-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST EECE 2025 Q6(b), 2022 Q6(a,b), 2021 Q6(a,b), 2020 Q6(a,b) · Arthur Beiser Ch. 5',
      title: 'Wave Function and Time-Independent & Time-Dependent Schrödinger Equations',
      summaryText:
        'Physical significance of wave function Ψ, Max Born’s probability density |Ψ|², normalization, and complete derivations of both time-independent and time-dependent Schrödinger equations.',
      memorizeStatements: [
        'Wave Function (Ψ): A complex-valued mathematical state function Ψ(r, t) = A e^{i(k·r − ωt)} whose squared modulus |Ψ(r, t)|² = Ψ*Ψ gives the probability density (probability per unit volume) of finding the particle at position r at time t.',
        'Normalization Condition of a Wave Function: Since a physical particle must exist somewhere in space with certainty, the volume integral of its probability density over all space equals unity: ∫_{−∞}^{+∞} |Ψ(x, y, z, t)|² dτ = 1.',
        'Time-Independent Schrödinger Wave Equation (3D): ∇²ψ + (2m / ħ²)(E − V)ψ = 0, or (−(ħ² / 2m)∇² + V)ψ = Eψ (for a free particle with V = 0: ∇²ψ + (2mE / ħ²)ψ = 0).',
        'Time-Dependent Schrödinger Wave Equation: iħ (∂Ψ / ∂t) = −(ħ² / 2m)∇²Ψ + VΨ = ĤΨ, where Ĥ = −(ħ² / 2m)∇² + V is the Hamiltonian total energy operator.',
      ],
      bulletPoints: [
        'Physical Significance of Wave Function Ψ & Probability Density (Max Born, 1926 — PUST 2025 Q6b, 2022 Q6a, 2021 Q6a, 2020 Q6a):',
        '• The wave function Ψ(x, y, z, t) itself is generally complex and not directly measurable, so it has no direct physical meaning by itself.',
        '• However, the product of Ψ and its complex conjugate Ψ*, i.e., |Ψ|² = Ψ*(x, y, z, t)Ψ(x, y, z, t), is real and non-negative, representing the probability density P(r, t).',
        '• The probability dP of finding the particle within an infinitesimal volume element dτ = dx dy dz around (x, y, z) at time t is dP = |Ψ(x, y, z, t)|² dx dy dz.',
        '• Conditions for an Acceptable (Well-Behaved) Wave Function: (1) Ψ must be finite everywhere (including x → ±∞); (2) Ψ must be single-valued at every point; (3) Ψ and its first spatial derivatives (∂Ψ/∂x, ∂Ψ/∂y, ∂Ψ/∂z) must be continuous everywhere; (4) Ψ must be square-integrable (normalizable): ∫_{all space} |Ψ|² dτ = 1.',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Classical Wave Equation & Plane Wave Representation (PUST 2022 Q6b, 2021 Q6b, 2020 Q6b)',
          explanation:
            'Consider a particle of mass m moving in a conservative potential field V(x, y, z) with total energy E = K + V = p²/(2m) + V. The associated de Broglie wave of phase velocity u = νλ = ω/k satisfies the 3D classical wave equation:',
          equation: '∇²Ψ = (1 / u²) (∂²Ψ / ∂t²),   Ψ(x, y, z, t) = ψ(x, y, z) e^{−iωt}',
        },
        {
          stepTitle: 'Step 2: Separating Spatial Variable and Substituting ω = 2πν and u = νλ',
          explanation:
            'Differentiating Ψ(x, y, z, t) = ψ(x, y, z) e^{−iωt} twice with respect to time gives ∂²Ψ/∂t² = −ω²ψ e^{−iωt}. Substituting this into the wave equation and cancelling e^{−iωt} yields the spatial Helmholtz equation:',
          equation: '∇²ψ + (ω² / u²)ψ = 0  ⇒  ∇²ψ + (4π² / λ²)ψ = 0   (since ω / u = 2πν / (νλ) = 2π / λ)',
        },
        {
          stepTitle: 'Step 3: Introducing de Broglie Wavelength λ = h/p and Total Energy E = p²/(2m) + V',
          explanation:
            'From de Broglie’s relation, 1/λ² = p²/h² = 2m(E − V)/h². Using the reduced Planck constant ħ = h/(2π) so that h² = 4π²ħ², substitute 4π²/λ² = 2m(E − V)/ħ² to obtain the 3D Time-Independent Schrödinger Wave Equation:',
          equation: '∇²ψ + (2m / ħ²)(E − V)ψ = 0   or   [−(ħ² / (2m))∇² + V]ψ = Eψ',
        },
        {
          stepTitle: 'Step 4: Free-Particle Form (V = 0) of Time-Independent Schrödinger Equation (PUST 2021 Q6b)',
          explanation:
            'For a free particle experiencing no external force, the potential energy is V = 0 everywhere, so the time-independent Schrödinger equation simplifies to:',
          equation: '∇²ψ + (2mE / ħ²)ψ = 0',
        },
        {
          stepTitle: 'Step 5: Deriving the Time-Dependent Schrödinger Equation (PUST 2022 Q6b, 2020 Q6b)',
          explanation:
            'Differentiate Ψ(x, y, z, t) = ψ(x, y, z) e^{−iωt} = ψ(x, y, z) e^{−i(E/ħ)t} once with respect to time t:',
          equation: '∂Ψ / ∂t = −(iE / ħ)ψ e^{−i(E/ħ)t} = −(iE / ħ)Ψ  ⇒  EΨ = iħ (∂Ψ / ∂t)',
        },
        {
          stepTitle: 'Step 6: Eliminating Total Energy E to Obtain the Operator Equation',
          explanation:
            'Multiply the time-independent equation by e^{−i(E/ħ)t} to get [−(ħ²/2m)∇² + V]Ψ = EΨ, and replace EΨ with iħ(∂Ψ/∂t) to obtain the Time-Dependent Schrödinger Wave Equation:',
          equation: 'iħ (∂Ψ / ∂t) = −(ħ² / (2m))∇²Ψ + VΨ = ĤΨ',
        },
      ],
      examYears: ['2025', '2022', '2021', '2020'],
    },
    {
      id: 'phy-m5-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST EECE 2022 Q6(a,c), 2020 Q6(a) · Arthur Beiser Ch. 2',
      title: 'Compton Effect and Relativistic Wavelength Shift Derivation',
      summaryText:
        'Inelastic scattering of an X-ray or γ-ray photon by a stationary free electron, relativistic energy and momentum conservation, and derivation of Δλ = (h / m₀c)(1 − cos θ).',
      memorizeStatements: [
        'Compton Effect: When monochromatic X-rays or γ-rays of wavelength λ are scattered by a target containing loosely bound electrons, the scattered radiation at angle θ contains a modified component of longer wavelength λ′ > λ.',
        'Compton Wavelength Shift Formula: Δλ = λ′ − λ = (h / (m₀ c))(1 − cos θ) = λ_C (1 − cos θ), where λ_C = h / (m₀ c) = 2.426 × 10⁻¹² m = 0.02426 Å is the Compton wavelength of the electron.',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Relativistic Conservation of Energy in Photon–Electron Collision',
          explanation:
            'An incident X-ray photon of energy E = hν = hc/λ and momentum p = hν/c strikes a stationary electron of rest mass m₀ (initial energy m₀c²). After collision, the scattered photon moves at angle θ with energy E′ = hν′ = hc/λ′, while the recoil electron moves at angle φ with relativistic energy E_e = √(p_e²c² + m₀²c⁴):',
          equation: 'hν + m₀c² = hν′ + E_e  ⇒  E_e = h(ν − ν′) + m₀c²',
        },
        {
          stepTitle: 'Step 2: Relativistic Conservation of Linear Momentum Components',
          explanation:
            'Applying the law of cosines to the vector momentum triangle p_e = p − p′ (or resolving along x and y axes and squaring and adding) gives the squared recoil electron momentum multiplied by c²:',
          equation: 'p_e²c² = (hν)² + (hν′)² − 2(hν)(hν′) cos θ',
        },
        {
          stepTitle: 'Step 3: Equating E_e² = p_e²c² + m₀²c⁴ and Simplifying',
          explanation:
            'Square the energy equation E_e² = [h(ν − ν′) + m₀c²]² = h²(ν² + ν′² − 2νν′) + 2hm₀c²(ν − ν′) + m₀²c⁴ and equate to p_e²c² + m₀²c⁴:',
          equation: '−2h²νν′ + 2hm₀c²(ν − ν′) = −2h²νν′ cos θ  ⇒  m₀c²(ν − ν′) = hνν′(1 − cos θ)',
        },
        {
          stepTitle: 'Step 4: Converting Frequencies to Wavelengths (c/ν = λ, c/ν′ = λ′)',
          explanation:
            'Divide both sides by hνν′m₀c to obtain the Compton shift formula:',
          equation: 'Δλ = λ′ − λ = (c / ν′) − (c / ν) = (h / (m₀c))(1 − cos θ) = 0.02426(1 − cos θ) Å',
        },
        {
          stepTitle: 'Step 5: Special Scattering Angles (θ = 0°, 90°, 180°)',
          explanation:
            '(i) Forward scattering (θ = 0°): cos 0° = 1 ⇒ Δλ = 0 (unmodified ray). (ii) Orthogonal scattering (θ = 90°): cos 90° = 0 ⇒ Δλ = h/(m₀c) = 0.02426 Å. (iii) Backscattering (θ = 180°): cos 180° = −1 ⇒ Δλ_max = 2h/(m₀c) = 0.04852 Å.',
        },
      ],
      examYears: ['2022', '2020'],
    },
    {
      id: 'phy-m5-b4',
      type: 'theory',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST EECE 2025 Q5(b), 2024 Q5(a,b), 2023 Q5(a,b), 2022 Q5(a,b), 2021 Q5(a,b), 2020 Q5(a,b,c) · Sears (Thermodynamics) · Halliday & Resnick',
      title: 'Second Law, Carnot Cycle, Entropy, and Mean Free Path',
      summaryText:
        'Reversible vs. irreversible processes, Second Law of Thermodynamics, Carnot cycle efficiency η = 1 − T₂/T₁, entropy change in reversible and irreversible cycles, and Maxwell’s mean free path λ = 1/(√2 π n d²).',
      memorizeStatements: [
        'Second Law of Thermodynamics (Kelvin–Planck & Clausius Statements): No heat engine operating in a cycle can convert all heat absorbed from a single reservoir entirely into mechanical work (Kelvin–Planck); heat cannot flow spontaneously from a colder body to a hotter body without external work (Clausius).',
        'Carnot Engine Thermal Efficiency: A reversible heat engine operating between a hot source at T₁ and a cold sink at T₂ has maximum efficiency η = W / Q₁ = (Q₁ − Q₂) / Q₁ = 1 − (T₂ / T₁).',
        'Thermodynamic Entropy (S): A state function whose differential change in any reversible process is dS = dQ_rev / T (SI unit: J·K⁻¹); for any complete reversible cycle ∮ dS = ∮ (dQ_rev / T) = 0, whereas for any irreversible process in an isolated system ΔS_universe > 0.',
        'Law of Equipartition of Energy: For a classical system in thermal equilibrium at absolute temperature T, the total kinetic energy is shared equally among all independent degrees of freedom, with each degree of freedom having an average energy of (1/2)k_B T per molecule (or (1/2)RT per mole).',
        'Mean Free Path (λ): The average distance traveled by a gas molecule between two successive collisions: λ = 1 / (√2 π n d²) = (k_B T) / (√2 π d² P), where n is molecular number density and d is molecular diameter.',
      ],
      bulletPoints: [
        'Internal Energy, Reversible & Irreversible Processes (PUST 2024 Q5a, 2021 Q5a):',
        '• Internal Energy (U): Total intrinsic microscopic kinetic and potential energy of all molecules in a system; for an ideal gas, U = f/2 nRT depends only on temperature T.',
        '• Reversible Process: An quasi-static, frictionless process that proceeds through a continuous sequence of equilibrium states and can be reversed identically without leaving any net change in the system or surroundings (e.g., infinitely slow isothermal or adiabatic expansion).',
        '• Irreversible Process: Any natural spontaneous process involving finite temperature/pressure gradients, friction, viscosity, Joule heating, or free expansion that cannot be reversed without external work.',
        'Carnot’s Reversible Cycle & Efficiency Derivation (PUST 2023 Q5b, 2022 Q5b):',
        '• Step 1 (Isothermal Expansion A → B at T₁): Gas expands from (P₁, V₁) to (P₂, V₂), absorbing heat Q₁ = nRT₁ ln(V₂/V₁).',
        '• Step 2 (Adiabatic Expansion B → C from T₁ to T₂): Gas expands thermally insulated from (P₂, V₂) to (P₃, V₃) where T₁ V₂^{γ−1} = T₂ V₃^{γ−1}.',
        '• Step 3 (Isothermal Compression C → D at T₂): Gas is compressed from (P₃, V₃) to (P₄, V₄), rejecting heat Q₂ = nRT₂ ln(V₃/V₄) to the cold sink.',
        '• Step 4 (Adiabatic Compression D → A from T₂ to T₁): Gas returns from (P₄, V₄) to (P₁, V₁) where T₁ V₁^{γ−1} = T₂ V₄^{γ−1}. Dividing the two adiabatic relations gives V₂/V₁ = V₃/V₄.',
        '• Efficiency: η = W / Q₁ = (Q₁ − Q₂) / Q₁ = 1 − Q₂/Q₁ = 1 − (T₂ ln(V₃/V₄)) / (T₁ ln(V₂/V₁)) = 1 − T₂/T₁.',
        'Physical Significance of Entropy & Proof that ΔS = 0 in a Reversible Cycle (PUST 2025 Q5b, 2024 Q5b, 2023 Q5a, 2022 Q5a, 2021 Q5b, 2020 Q5c):',
        '• Physical Significance: Entropy is a quantitative measure of microscopic molecular disorder (Boltzmann relation S = k_B ln W) and the unavailability of thermal energy for conversion into useful mechanical work.',
        '• Reversible Carnot Cycle Proof: Along isothermal expansion A → B, ΔS₁ = +Q₁/T₁; along reversible adiabats B → C and D → A, dQ = 0 ⇒ ΔS₂ = ΔS₄ = 0; along isothermal compression C → D, ΔS₃ = −Q₂/T₂. Since Q₁/T₁ = Q₂/T₂ for a reversible cycle, total entropy change is ΔS_cycle = ∮ dQ_rev/T = Q₁/T₁ − Q₂/T₂ = 0.',
        '• Irreversible Processes (Clausius Inequality): Since an irreversible engine has η_irr < η_rev ⇒ 1 − Q₂/Q₁ < 1 − T₂/T₁ ⇒ Q₂/T₂ > Q₁/T₁, the net entropy change of the universe is ΔS_universe = −Q₁/T₁ + Q₂/T₂ > 0 (entropy always increases in natural irreversible processes).',
        'Mean Free Path Derivation (PUST 2020 Q5a,b):',
        '• A molecule of diameter d moving at speed v sweeps out a collision cylinder of radius d (cross-section σ = πd²) because any other molecule whose center lies within distance d collides with it.',
        '• Accounting for the relative velocity v_rel = √2 v_avg of all moving gas molecules of number density n (molecules per unit volume), the collision frequency is Z = √2 π n d² v_avg, yielding the mean free path λ = v_avg / Z = 1 / (√2 π n d²).',
      ],
      equations: [
        {
          label: 'Carnot Efficiency & Thermodynamic Temperature Scale',
          formula: 'η = 1 − (Q₂ / Q₁) = 1 − (T₂ / T₁)',
        },
        {
          label: 'Entropy Change of an Ideal Gas or Phase/Temperature Change',
          formula: 'ΔS = m c ln(T_f / T_i)   (heating/cooling),   ΔS = m L / T   (phase change)',
        },
        {
          label: 'Maxwell’s Mean Free Path Formula',
          formula: 'λ = 1 / (√2 π n d²) = (k_B T) / (√2 π d² P)',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
    },
    {
      id: 'phy-m5-b5',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST EECE 2024 Q5(c), 2023 Q5(c), 2022 Q5(c), 2022 Q6(c), 2021 Q5(c), 2021 Q6(c)',
      title: 'Solved Quantum Mechanics and Entropy Numericals',
      summaryText:
        'Complete solutions to all PUST past exam numericals on Compton backscattering, proton de Broglie wavelength, and entropy of mixing/melting.',
      problemStatement:
        '(a) [PUST 2022 Q6c] X-rays of wavelength 0.124 Å are scattered by a carbon block. Find the wavelength of the X-ray scattered through 180°. (b) [PUST 2021 Q6c] Find the de Broglie wavelength of a proton of mass 1.6 × 10⁻²⁴ g moving with a velocity of 1/10th the velocity of light. (c) [PUST 2024 Q5c & 2022 Q5c] 10 g of water at 60°C is mixed with 30 g of water at 20°C. Will the entropy of the system increase or decrease? Calculate the change. (d) [PUST 2023 Q5c] 50 g of water at 0°C is mixed with an equal mass of water at 80°C. Calculate the resultant increase in entropy. (e) [PUST 2021 Q5c] Calculate the change in entropy when 75 g of ice at 0°C is converted to water at the same temperature.',
      solutionSteps: [
        {
          stepTitle: 'Part (a): Compton Wavelength at θ = 180° (PUST 2022 Q6c)',
          explanation:
            'Given incident wavelength λ = 0.124 Å and scattering angle θ = 180° (cos 180° = −1):',
          equation:
            'λ′ = λ + (h / (m₀c))(1 − cos 180°) = 0.124 + 0.02426(1 − (−1)) = 0.124 + 0.04852 = 0.1725 Å',
        },
        {
          stepTitle: 'Part (b): Proton de Broglie Wavelength (PUST 2021 Q6c)',
          explanation:
            'Given proton mass m_p = 1.6 × 10⁻²⁴ g = 1.6 × 10⁻²⁷ kg, velocity v = c/10 = 3 × 10⁷ m·s⁻¹, and h = 6.626 × 10⁻³⁴ J·s:',
          equation:
            'λ = h / (m_p v) = (6.626 × 10⁻³⁴) / (1.6 × 10⁻²⁷ × 3 × 10⁷) = 1.38 × 10⁻¹⁴ m = 13.8 fm',
        },
        {
          stepTitle: 'Part (c): Mixing 10 g Water at 60°C with 30 g Water at 20°C (PUST 2024 Q5c & 2022 Q5c)',
          explanation:
            'Convert temperatures to Kelvin: T₁ = 60 + 273 = 333 K, T₂ = 20 + 273 = 293 K. Equilibrium temperature T_f = (m₁T₁ + m₂T₂)/(m₁ + m₂) = (10 × 333 + 30 × 293)/40 = 303 K (30°C). Specific heat of water c = 1 cal·g⁻¹·K⁻¹ = 4.184 J·g⁻¹·K⁻¹:',
          equation:
            'ΔS = m₁c ln(T_f / T₁) + m₂c ln(T_f / T₂) = 10 ln(303 / 333) + 30 ln(303 / 293) = −0.9441 + 1.0068 = +0.0627 cal·K⁻¹ = +0.262 J·K⁻¹ (entropy increases)',
        },
        {
          stepTitle: 'Part (d): Mixing 50 g Water at 0°C with 50 g Water at 80°C (PUST 2023 Q5c)',
          explanation:
            'Given m₁ = m₂ = 50 g, T₁ = 273 K, T₂ = 353 K. Equilibrium temperature T_f = (273 + 353)/2 = 313 K (40°C):',
          equation:
            'ΔS = 50 × 1 × [ln(313 / 273) + ln(313 / 353)] = 50 × (0.1367 − 0.1203) = +0.822 cal·K⁻¹ = +3.44 J·K⁻¹',
        },
        {
          stepTitle: 'Part (e): Melting 75 g Ice at 0°C (PUST 2021 Q5c)',
          explanation:
            'Given m = 75 g, T = 0°C = 273 K, and latent heat of fusion of ice L_f = 80 cal·g⁻¹ = 336 J·g⁻¹:',
          equation:
            'ΔS = (m L_f) / T = (75 × 80) / 273 = 21.98 cal·K⁻¹ = 91.96 J·K⁻¹',
        },
      ],
      examYears: ['2024', '2023', '2022', '2021'],
    },
  ],
};

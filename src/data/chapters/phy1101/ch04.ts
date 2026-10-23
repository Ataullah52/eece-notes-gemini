import type { ChapterNote } from '../../types';

export const PHY1101_CH04: ChapterNote = {
  id: 'phy1101-ch04',
  unitNumber: 'Module 04',
  title: 'Optics',
  summary:
    'Theories of light, Interference of light, Young’s double slit experiment, Diffraction by single slit, Diffraction at double slit, Diffraction grating, Polarization, Classification and uses of polarization, Brewster’s law, Nicol Prism.',
  estimatedMinutes: 80,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'phy-m4-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST EECE 2025 Q5(a), 2024 Q4(a,b), 2023 Q4(a,b), 2022 Q4(a,b), 2021 Q4(a), 2020 Q4(b) · Halliday & Resnick · Jenkins & White',
      title: 'Theories of Light, Interference, Young’s Double-Slit, and Newton’s Rings',
      summaryText:
        'Five historical theories of light, coherent sources, analytical proof that resultant intensity is I = 4a² cos²(δ/2), Young’s fringe width β = Dλ/d proof, and Newton’s rings.',
      memorizeStatements: [
        'Coherent Sources: Two light sources are said to be coherent if they emit light waves of the exact same wavelength (or frequency) that maintain a constant phase difference (zero or fixed δ) with respect to each other over time.',
        'Interference of Light: The non-uniform redistribution of light energy (alternating bright maxima and dark minima) in a medium due to the superposition of two coherent light waves.',
        'Resultant Interference Intensity Law: For two coherent waves of equal amplitude a and phase difference δ = (2π/λ)Δx, the resultant amplitude is R = 2a cos(δ/2) and resultant intensity is I = 4a² cos²(δ/2) = 4 I₀ cos²(δ/2).',
        'Young’s Double-Slit Fringe Width (β): The distance between any two successive bright fringes or two successive dark fringes on the screen is constant and given by β = (λ D) / d, where λ is wavelength, D is slit-to-screen distance, and d is slit separation.',
      ],
      bulletPoints: [
        'Five Theories of Light (PUST 2025 Q5a, 2024 Q4a, 2023 Q4a, 2022 Q4a):',
        '1. Newton’s Corpuscular Theory (1675): Light consists of tiny, massless elastic particles (corpuscles) emitted at high speed from luminous sources; explained rectilinear propagation and reflection, but wrongly predicted light travels faster in denser media.',
        '2. Huygens’ Wave Theory (1678): Light propagates as mechanical longitudinal (later shown by Fresnel & Young to be transverse) waves through a hypothetical medium; successfully explained reflection, refraction (v_medium < c), interference, diffraction, and polarization.',
        '3. Maxwell’s Electromagnetic Wave Theory (1864): Light consists of coupled, mutually perpendicular oscillating electric (E) and magnetic (B) fields propagating through vacuum without any material medium at speed c = 1 / √(μ₀ ε₀) = 3 × 10⁸ m·s⁻¹.',
        '4. Planck’s & Einstein’s Quantum Photon Theory (1900–1905): Light energy is emitted, propagated, and absorbed in discrete packets (quanta) called photons of energy E = hν = hc/λ and momentum p = h/λ (explains photoelectric and Compton effects).',
        '5. de Broglie’s Modern Wave–Particle Duality (1924): Light exhibits dual nature—behaving as an electromagnetic wave during propagation (interference, diffraction, polarization) and as a stream of corpuscular photons during interaction with matter.',
        'Necessary Conditions for Sustained Interference of Light (PUST 2022 Q4a, 2021 Q4a):',
        '• (1) The two sources must be coherent (derived from a single parent source via division of wavefront or amplitude); (2) Both waves must be monochromatic (same λ); (3) Amplitudes should be equal or nearly equal for complete dark fringes; (4) Slit separation d must be small and screen distance D large.',
        'Analytical Treatment of Interference — Proof that I = 4a² cos²(δ/2) [PUST 2020 Q4b]:',
        '1. Let two coherent monochromatic light waves arriving at point P have equal amplitude a and phase difference δ:\ny₁ = a sin(ωt)   and   y₂ = a sin(ωt + δ).',
        '2. By superposition, y = y₁ + y₂ = a sin(ωt) + a(sin ωt cos δ + cos ωt sin δ) = a(1 + cos δ) sin ωt + (a sin δ) cos ωt.',
        '3. Putting R cos θ = a(1 + cos δ) and R sin θ = a sin δ, we get y = R sin(ωt + θ). Squaring and adding gives the resultant intensity I = R²:\nI = R² = a²(1 + cos δ)² + a² sin²δ = a²(1 + 2 cos δ + cos²δ + sin²δ) = 2a²(1 + cos δ).',
        '4. Using the half-angle identity 1 + cos δ = 2 cos²(δ / 2):\nI = 4a² cos²(δ / 2)\n• Bright Maxima (Constructive): cos(δ/2) = ±1 ⇒ δ = 2nπ (path difference Δx = nλ), where I_max = 4a².\n• Dark Minima (Destructive): cos(δ/2) = 0 ⇒ δ = (2n + 1)π (path difference Δx = (2n + 1)λ/2), where I_min = 0.',
        'Proof of Fringe Width β = Dλ / d in Young’s Double-Slit Experiment (PUST 2022 Q4b):',
        '1. Let two narrow coherent slits S₁ and S₂ separated by small distance d illuminate a screen at distance D (D ≫ d). For a point P at height y_n from the central axis O, the geometric path difference is:\nΔx = S₂P − S₁P ≈ (y_n · d) / D.',
        '2. For the n-th bright fringe, Δx = nλ ⇒ (y_n · d) / D = nλ ⇒ y_n = (n λ D) / d.',
        '3. For the (n + 1)-th bright fringe, y_{n+1} = [(n + 1) λ D] / d. Subtracting gives the distance between two successive bright fringes (fringe width β):\nβ = y_{n+1} − y_n = [(n + 1) − n] · (λ D / d) = (λ D) / d.',
        'Newton’s Rings in Optics (PUST 2024 Q4b, 2023 Q4b):',
        '• When a plano-convex lens of large radius of curvature R is placed on an optically flat glass plate and illuminated normally by monochromatic light (e.g., sodium light), an air film of radially increasing thickness t = r² / (2R) is formed.',
        '• Interference between light reflected from the upper and lower surfaces of the air film produces concentric alternating bright and dark circular rings around a dark central spot (due to π phase reversal at the denser lower glass boundary).',
        '• Path difference in reflected light is 2μt + λ/2. Diameter of the n-th dark ring is D_n = √(4 n λ R / μ), used to measure wavelength λ or refractive index μ of a liquid.',
      ],
      equations: [
        {
          label: 'Analytical Interference Intensity & Maxima/Minima Conditions',
          formula: 'I = I₁ + I₂ + 2√(I₁ I₂) cos δ = 4 a² cos²(δ / 2)\nConstructive (Bright): Δx = n λ,   δ = 2nπ,   I_max = 4a²\nDestructive (Dark): Δx = (2n + 1)(λ / 2),   δ = (2n + 1)π,   I_min = 0',
          units: 'W·m⁻²',
          note: 'Phase difference δ = (2π / λ) · Δx',
        },
        {
          label: 'Young’s Double-Slit Fringe Width & Newton’s Rings',
          formula: 'y_n(bright) = (n λ D) / d,   β = y_{n+1} − y_n = (λ D) / d\nNewton’s Dark Ring Diameter: D_n = √(4 n λ R / μ)',
          units: 'm',
          note: 'λ = (D_{n+p}² − D_n²) / (4 p R) in air (μ = 1)',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
      marks: '3–6 Marks',
    },
    {
      id: 'phy-m4-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST EECE 2025 Q4(a), 2025 Q5(c), 2024 Q4(a), 2022 Q4(c), 2021 Q4(b) · Halliday & Resnick · Jenkins & White',
      title: 'Diffraction of Light, Single-Slit Minima, Grating, and Optical Aberrations',
      summaryText:
        'Fresnel vs. Fraunhofer diffraction, single-slit Fraunhofer diffraction and condition for minima (a sin θ = nλ), diffraction grating dispersion & resolving power (R = nN), and astigmatism & coma.',
      memorizeStatements: [
        'Diffraction of Light: The bending or spreading of light waves around the sharp edges of an obstacle or aperture into the region of geometrical shadow when the size of the obstacle/slit is comparable to the wavelength of light.',
        'Single-Slit Fraunhofer Minima Condition: In Fraunhofer diffraction by a single slit of width a, destructive interference (dark minima) occurs at angles θ satisfying a sin θ = n λ (where n = 1, 2, 3, …), with intensity distribution I = I₀ [(sin α) / α]², where α = (π a sin θ) / λ.',
        'Diffraction Grating Equation: For a plane transmission grating with grating element d = (a + b) = 1 / N_0, principal bright maxima of order n occur at (a + b) sin θ = d sin θ = n λ.',
        'Dispersive Power and Resolving Power of a Grating: Angular dispersive power is dθ / dλ = n / (d cos θ), and chromatic resolving power in the n-th order for a grating with N total ruled lines is R = λ / Δλ = n · N.',
      ],
      bulletPoints: [
        'Fraunhofer Diffraction Due to a Single Slit & Condition for Minima (PUST 2021 Q4b):',
        '1. Consider a parallel plane wavefront of monochromatic light (wavelength λ) incident normally on a narrow slit AB of width a. After passing through the slit, secondary Huygens wavelets diffracted at an angle θ are focused by a converging lens onto point P on a screen.',
        '2. The path difference between the extreme rays from the top edge A and bottom edge B of the slit is Δ = a sin θ (corresponding to total phase difference 2α = (2π / λ) a sin θ).',
        '3. Divide the slit of width a into 2n equal zones of width a/(2n). If the total path difference across the whole slit is a sin θ = nλ (so the path difference between the top half and bottom half of each zone is λ/2), every wavelet in the upper half of a zone is canceled by the corresponding wavelet in the lower half with a λ/2 path difference.',
        '4. Therefore, the condition for dark minima (zero intensity) in single-slit Fraunhofer diffraction is:\na sin θ = n λ   (where n = ±1, ±2, ±3, …; note n = 0 is the bright central maximum!).',
        '5. Secondary maxima of rapidly decreasing intensity (I₀/22, I₀/61…) occur approximately halfway between minima at a sin θ = (2n + 1)(λ / 2).',
        'Astigmatism and Coma in Optical Systems (PUST 2025 Q4a):',
        '• Astigmatism: A monochromatic off-axis aberration in which rays from an off-axis object point passing through the vertical (tangential/meridional) plane and horizontal (sagittal) plane of a lens converge at two different focal distances, forming two mutually perpendicular line images instead of a sharp point focus (corrected using anastigmatic lens combinations or cylindrical lenses).',
        '• Coma (Comatic Aberration): A monochromatic off-axis aberration in which different annular zones of a lens have different lateral magnifications for off-axis rays, causing a point object off the optical axis to be imaged as a comet-shaped flare with a bright head and a diffuse conical tail (corrected by satisfying the Abbe sine condition n₁ y₁ sin θ₁ = n₂ y₂ sin θ₂ and using aplanatic lenses).',
      ],
      table: {
        caption: 'Table 4.1 — Distinction Between Fresnel Diffraction and Fraunhofer Diffraction (PUST 2024 Q4a, 2022 Q4c)',
        headers: ['Feature', 'Fresnel Diffraction (Near-Field)', 'Fraunhofer Diffraction (Far-Field)'],
        rows: [
          [
            'Source & Screen Distance',
            'Either the source, the screen, or both are at a finite distance from the diffracting aperture',
            'Both the light source and the observation screen are effectively at infinite distance from the aperture',
          ],
          [
            'Nature of Wavefronts',
            'Incident and diffracted wavefronts are spherical or cylindrical',
            'Incident and diffracted wavefronts are strictly plane wavefronts',
          ],
          [
            'Need for Convex Lenses',
            'No lenses or mirrors are required to observe the pattern',
            'Two converging lenses are used (one to collimate incident rays, one to focus diffracted rays)',
          ],
          [
            'Center of Pattern',
            'Center of the diffraction pattern may be bright or dark depending on aperture-screen distance',
            'Center of the diffraction pattern on the optical axis is always a bright maximum (θ = 0)',
          ],
          [
            'Examples',
            'Diffraction at a straight edge, circular aperture, or Fresnel zone plate',
            'Single-slit, double-slit, and plane transmission diffraction grating with spectrometer',
          ],
        ],
      },
      equations: [
        {
          label: 'Single-Slit & Double-Slit Fraunhofer Diffraction',
          formula: 'Single-Slit Intensity: I = I₀ · [(sin α) / α]²,   α = (π a sin θ) / λ\nSingle-Slit Minima: a sin θ = n λ   (n = 1, 2, 3, …)\nDouble-Slit Intensity: I = 4 I₀ · [(sin α) / α]² · cos² β,   β = [π(a + b) sin θ] / λ',
          units: 'W·m⁻² and m',
          note: 'Central maximum angular width between first minima (n = ±1): 2θ ≈ 2λ / a',
        },
        {
          label: 'Diffraction Grating Principal Maxima, Dispersion & Resolving Power',
          formula: 'd sin θ = (a + b) sin θ = n λ\nAngular Dispersion: D = dθ / dλ = n / (d cos θ)\nResolving Power: R = λ / Δλ = n · N',
          units: 'rad·m⁻¹ and dimensionless',
          note: 'd = W / N is the grating spacing; N is the total number of ruled lines',
        },
      ],
      examYears: ['2025', '2024', '2022', '2021'],
      marks: '3.67–5 Marks',
    },
    {
      id: 'phy-m4-b3',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'PUST EECE 2025 Q5(a), 2024 Q4(b), 2023 Q4(a,b), 2022 Q8(b), 2021 Q4(c), 2020 Q4(a,c) · Halliday & Resnick · Jenkins & White',
      title: 'Polarization of Light, Brewster’s Law, Birefringence, and Nicol Prism',
      summaryText:
        'Symbolic representation and classification of polarized light, statement and proof of Brewster’s Law (μ = tan θ_p, θ_p + r = 90°), double refraction in calcite (why E-ray travels faster than O-ray), and Nicol Prism.',
      memorizeStatements: [
        'Polarization of Light: The phenomenon of restricting the transverse electric field vibrations (E-vector) of a light wave to a single plane perpendicular to the direction of wave propagation, proving that light waves are transverse.',
        'Brewster’s Law: When unpolarized light is incident on the interface of a transparent dielectric medium at a specific angle called the polarizing (Brewster) angle θ_p, the reflected light is completely plane-polarized with vibrations perpendicular to the plane of incidence, and the refractive index of the medium equals the tangent of the polarizing angle: μ = tan θ_p.',
        'Double Refraction (Birefringence): The splitting of an unpolarized light beam incident on an anisotropic crystal (such as calcite CaCO₃ or quartz SiO₂) into two plane-polarized refracted rays—the Ordinary ray (O-ray, obeys Snell’s law) and the Extraordinary ray (E-ray, does not obey Snell’s law).',
      ],
      bulletPoints: [
        'Classification and Symbolic Representation of Unpolarized and Polarized Light (PUST 2021 Q4c, 2020 Q4a):',
        '1. Unpolarized (Ordinary) Light: Electric field E vibrates symmetrically in all directions perpendicular to the direction of propagation; represented symbolically by a ray with both double-headed arrows (↕ in the plane of the paper) and dots (• perpendicular to the paper), or a star of arrows in end-on view.',
        '2. Plane (Linearly) Polarized Light: E-vector vibrations are confined to a single linear direction; represented either by parallel double-headed arrows (↕, vibrations in the plane of incidence) or by a row of dots (• • •, vibrations perpendicular to the plane of incidence).',
        '3. Circularly and Elliptically Polarized Light: Produced when two mutually perpendicular coherent plane-polarized waves superpose with a phase difference of π/2 (circular if amplitudes are equal; elliptical if amplitudes or phase differ).',
        'Statement and Proof of Brewster’s Law — Reflected and Refracted Rays Are at 90° (PUST 2023 Q4a, 2020 Q4c):',
        '1. When unpolarized light strikes a glass/dielectric surface at the Brewster polarizing angle θ_p, the reflected ray is 100% plane-polarized (dots •) and the angle between the reflected ray and the refracted ray (angle of refraction r) is found experimentally and electromagnetically to be 90°:\nθ_p + 90° + r = 180°   ⇒   r = 90° − θ_p.',
        '2. Applying Snell’s law of refraction at the air–medium interface:\nμ = sin θ_p / sin r = sin θ_p / sin(90° − θ_p) = sin θ_p / cos θ_p = tan θ_p.',
        '3. Conversely, if μ = tan θ_p = sin θ_p / cos θ_p = sin θ_p / sin r, then cos θ_p = sin r = cos(90° − r) ⇒ θ_p + r = 90°, proving the reflected and refracted beams are mutually perpendicular.',
        'Double Refraction in a Calcite Crystal — Why Extraordinary Ray Travels Faster Than Ordinary Ray (PUST 2022 Q8b):',
        '1. When a narrow beam of unpolarized light enters a calcite (Iceland spar, CaCO₃) rhombohedron, it splits into two mutually perpendicular plane-polarized rays: the Ordinary ray (O-ray, vibrating perpendicular to the principal section) and the Extraordinary ray (E-ray, vibrating inside the principal section).',
        '2. Along the Optic Axis, both rays travel at the same speed (μ_o = μ_e = 1.658). In all other directions, the O-ray travels with a constant isotropic velocity v_o = c / μ_o (spherical wavefront), whereas the E-ray travels with a direction-dependent velocity v_e = c / μ_e (ellipsoidal wavefront).',
        '3. Calcite is a Negative Uniaxial Crystal in which the principal refractive index for the E-ray is smaller than that for the O-ray:\nμ_e (1.486) < μ_o (1.658).',
        '4. Since wave velocity in a medium is inversely proportional to refractive index (v = c / μ):\nv_e = c / μ_e > v_o = c / μ_o   (except along the optic axis where v_e = v_o).\nTherefore, the extraordinary ray travels faster than the ordinary ray in a calcite crystal, and the spherical O-wavefront is completely enclosed inside the ellipsoidal E-wavefront.',
        'Nicol Prism & Practical Applications of Polarization and Polarimeters (PUST 2025 Q5a, 2024 Q4b, 2023 Q4b):',
        '• Nicol Prism: An optical device made by cutting a calcite crystal diagonally and cementing the halves with Canada balsam (μ_B = 1.55). Since μ_o (1.658) > μ_B (1.55) > μ_e (1.486), the O-ray undergoes Total Internal Reflection at the balsam layer and is absorbed by the blackened side, while the E-ray is transmitted as pure plane-polarized light.',
        '• Applications of Polarization & Polarimeters: (1) Polarimeters (Laurent’s half-shade polarimeter) measure optical rotation θ = [α] · l · c to determine sugar concentration in blood/urine and pharmaceutical purity (saccharimetry); (2) Liquid Crystal Displays (LCDs) in calculators, monitors, and phones; (3) Polaroid sunglasses and camera filters to eliminate road/water glare; (4) Photoelastic stress analysis of transparent engineering structures; (5) 3D stereoscopic cinema projection.',
      ],
      equations: [
        {
          label: 'Brewster’s Law & Malus’s Law of Polarization',
          formula: 'μ = tan θ_p,   θ_p + r = 90°\nMalus’s Law: I = I₀ cos² θ',
          units: 'dimensionless and W·m⁻²',
          note: 'θ_p is the polarizing angle; θ in Malus’s law is the angle between polarizer and analyzer axes',
        },
        {
          label: 'Birefringence in Negative Uniaxial Calcite Crystal',
          formula: 'μ_o = 1.658,   μ_e = 1.486,   μ_balsam = 1.55\nv_e = c / μ_e > v_o = c / μ_o   (since μ_e < μ_o)',
          units: 'm·s⁻¹',
          note: 'Specific rotation in polarimeter: [α] = θ / (l · c)',
        },
      ],
      examYears: ['2025', '2024', '2023', '2022', '2021', '2020'],
      marks: '3–5 Marks',
    },
    {
      id: 'phy-m4-b4',
      type: 'pyq',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceCitation: 'PUST EECE 2025 Q5(c), 2024 Q4(c), 2023 Q4(c)',
      title: 'Solved Diffraction Grating, Young’s Double-Slit, and Refraction Numericals',
      summaryText:
        'Step-by-step solutions to all PUST EECE Optics numericals: (i) grating dispersion in 3rd order and resolving power in 5th order (2025 Q5c), (ii) YDSE fringe width (2024 Q4c), and (iii) sodium light in water (2023 Q4c).',
      examYears: ['2025', '2024', '2023'],
      marks: '3–3.67 Marks',
      problemStatement:
        '(a) [PUST 2025 Q5c]: A grating has 9600 lines uniformly spaced over a width of 2.00 cm and is illuminated by light from the discharge of mercury light. (i) What is the expected dispersion in the third order, in the vicinity of the intense green light (λ = 566 nm)? (ii) What is the resolving power of this grating in the fifth order?\n(b) [PUST 2024 Q4c]: In Young’s double-slit experiment, calculate the distance between adjacent interference fringes if the slits are separated by 0.1 mm, the distance from the slits to the screen is 2 m, and the wavelength of the light is 500 nm.\n(c) [PUST 2023 Q4c]: The wavelength of light from a sodium source in vacuum is 5893 Å. Determine: (i) wavelength, (ii) speed, and (iii) frequency when the light travels in water at a refractive index of 1.33.',
      givenData: [
        'Part (a): Total lines N = 9600, Width W = 2.00 cm = 0.02 m ⇒ grating spacing d = W / N = 2.0833 × 10⁻⁶ m; λ = 566 nm = 5.66 × 10⁻⁷ m; orders n₁ = 3, n₂ = 5',
        'Part (b): d = 0.1 mm = 1.0 × 10⁻⁴ m, D = 2 m, λ = 500 nm = 5.0 × 10⁻⁷ m',
        'Part (c): λ₀ = 5893 Å = 5.893 × 10⁻⁷ m, c = 3.0 × 10⁸ m·s⁻¹, refractive index of water μ = 1.33',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Solve Part (a) [PUST 2025 Q5c — Grating Dispersion (n=3) & Resolving Power (n=5)]',
          explanation:
            'First find sin θ for n = 3 using d sin θ = nλ, then compute angular dispersion D = dθ/dλ = n / (d cos θ), and resolving power R = n N for n = 5:',
          equation:
            'd = 0.02 m / 9600 = 2.0833 × 10⁻⁶ m\nsin θ₃ = (3 × 5.66 × 10⁻⁷) / (2.0833 × 10⁻⁶) = 0.81504   ⇒   cos θ₃ = √(1 − 0.81504²) = 0.5794\n(i) Dispersion D = n / (d cos θ₃) = 3 / (2.0833 × 10⁻⁶ × 0.5794) = 2.485 × 10⁶ rad·m⁻¹ (or 0.1424°/nm)\n(ii) Resolving Power in 5th order: R = n · N = 5 × 9600 = 48,000',
        },
        {
          stepTitle: 'Step 2: Solve Part (b) [PUST 2024 Q4c — Fringe Width in Young’s Double-Slit Experiment]',
          explanation: 'Substitute λ = 5.0 × 10⁻⁷ m, D = 2 m, and d = 1.0 × 10⁻⁴ m into β = (λ D) / d:',
          equation:
            'β = (λ · D) / d = (5.0 × 10⁻⁷ × 2) / (1.0 × 10⁻⁴)\nβ = 1.0 × 10⁻² m = 1.0 cm (or 10 mm)',
        },
        {
          stepTitle: 'Step 3: Solve Part (c) [PUST 2023 Q4c — Wavelength, Speed, and Frequency of Sodium Light in Water]',
          explanation:
            'Divide vacuum wavelength and speed by μ = 1.33; frequency depends only on the source and remains unchanged in water:',
          equation:
            '(i) Wavelength in water:   λ_w = λ₀ / μ = 5893 Å / 1.33 = 4430.8 Å (443.1 nm)\n(ii) Speed in water:   v = c / μ = (3.0 × 10⁸ m·s⁻¹) / 1.33 = 2.256 × 10⁸ m·s⁻¹\n(iii) Frequency:   f = c / λ₀ = (3.0 × 10⁸) / (5.893 × 10⁻⁷) = 5.091 × 10¹⁴ Hz',
        },
      ],
      finalAnswer:
        '(a) D = 2.49 × 10⁶ rad·m⁻¹ (0.142°/nm), R = 48,000; (b) β = 1.0 cm (10 mm); (c) λ_w = 4430.8 Å, v = 2.26 × 10⁸ m/s, f = 5.09 × 10¹⁴ Hz',
    },
  ],
};

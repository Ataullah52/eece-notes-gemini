import type { ChapterNote, SemesterEntry } from './types.ts';

const EECE1111_CHAPTER_SHELLS: ChapterNote[] = [
  {
    id: 'eece1111-ch01',
    unitNumber: 'Module 01',
    title: 'Circuit Variables and Elements',
    summary:
      'Voltage, current, power, energy, independent and dependent sources, resistance, inductance and capacitance. Introduce to non-sinusoidal wave, calculation of RMS and average value for non-sinusoidal waveforms.',
    estimatedMinutes: 35,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'eece1111-ch02',
    unitNumber: 'Module 02',
    title: 'Basic Laws',
    summary:
      "Ohm's law, Kirchhoff's current and voltage laws (KCL and KVL), voltage divider and current divider rules, series-parallel combinations, and Wye-Delta (Y-Δ) transformations.",
    estimatedMinutes: 40,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'eece1111-ch03',
    unitNumber: 'Module 03',
    title: 'Techniques for Circuit Analysis',
    summary:
      'Nodal analysis (including supernode) and Mesh analysis (including supermesh) for planar DC networks with independent and dependent sources.',
    estimatedMinutes: 40,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'eece1111-ch04',
    unitNumber: 'Module 04',
    title: 'DC Network Theorem',
    summary:
      "Linearity and Superposition, Source Transformation, Thevenin's Theorem, Norton's Theorem, Maximum Power Transfer Theorem, Millman's Theorem, Reciprocity and Substitution Theorems.",
    estimatedMinutes: 45,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'eece1111-ch05',
    unitNumber: 'Module 05',
    title: 'AC Network Theorem',
    summary:
      'Complex impedance and phasor-domain extensions of Nodal, Mesh, Superposition, Thevenin, Norton, and Conjugate Maximum Average Power Transfer theorems.',
    estimatedMinutes: 40,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'eece1111-ch06',
    unitNumber: 'Module 06',
    title: 'Sinusoidal Functions',
    summary:
      'Instantaneous, average, and RMS values, form factor and peak factor, phasor representation, RLC series/parallel circuits, instantaneous/real/reactive/apparent power, power factor correction, and series/parallel resonance.',
    estimatedMinutes: 45,
    lastUpdated: 'October 2026',
    blocks: [],
  },
];

const MATH1101_CHAPTER_SHELLS: ChapterNote[] = [
  {
    id: 'math1101-ch01',
    unitNumber: 'Module 01',
    title: 'Functions, Limit and Continuity',
    summary:
      '1.1 Functions: kinds (polynomial, rational, transcendental, even, odd, periodic), Domain, range, inverse function and graphs of standard functions. 1.2 Limit and continuity: epsilon-delta definition and geometric interpretations.',
    estimatedMinutes: 75,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch02',
    unitNumber: 'Module 02',
    title: 'Differentiability, Successive Differentiations and Leibniz Theorem',
    summary:
      "First-principle derivatives, continuous vs. differentiable functions (|x|), parametric and implicit differentiation, standard n-th derivatives, and Leibniz's Theorem with initial value ODE applications.",
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch03',
    unitNumber: 'Module 03',
    title: 'Mean Value Theorems, Series Expansion and Maxima/Minima',
    summary:
      "Rolle's Theorem, Lagrange's and Cauchy's Mean Value Theorems, Taylor's and Maclaurin's infinite series expansions, L'Hôpital's Rule for indeterminate forms, and constrained optimization.",
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch04',
    unitNumber: 'Module 04',
    title: 'Tangent, Normal, Curvature and Functions of Double Variables',
    summary:
      "Subtangent and subnormal (Cartesian and polar), radius and center of curvature, partial derivatives, Euler's Theorem on homogeneous functions, total differentials, Jacobians, and two-variable extrema.",
    estimatedMinutes: 75,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch05',
    unitNumber: 'Module 05',
    title: 'Co-ordinate Systems and Pair of Straight Lines',
    summary:
      'Translation and rotation of axes, invariants, removal of xy-term, homogeneous and general second-degree equations for pair of straight lines, angle bisectors, and lines joining the origin to intersections.',
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch06',
    unitNumber: 'Module 06',
    title: 'Conics and System of Circles',
    summary:
      'Classification of general conics via discriminant Δ, reduction to canonical form, tangent and chord of contact, polar equations of conics, orthogonal circles, radical axis, and coaxal systems of circles.',
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch07',
    unitNumber: 'Module 07',
    title: '3D Co-ordinate Systems, Planes and Straight Lines',
    summary:
      'Direction cosines and direction ratios, projection on a line, angle between lines, equations of planes, symmetric and unsymmetric forms of 3D lines, coplanarity, and shortest distance between skew lines.',
    estimatedMinutes: 70,
    lastUpdated: 'October 2026',
    blocks: [],
  },
  {
    id: 'math1101-ch08',
    unitNumber: 'Module 08',
    title: 'Conicoids and Sphere',
    summary:
      'Equations of spheres, plane section of a sphere (circle & great circle), tangent plane, sphere through a circle, standard conicoids (ellipsoid, hyperboloids, paraboloids), and ruled surfaces.',
    estimatedMinutes: 65,
    lastUpdated: 'October 2026',
    blocks: [],
  },
];

export const INITIAL_CURRICULUM_SEMESTERS: SemesterEntry[] = [
  {
    id: 'eece11',
    code: 'EECE11',
    year: 1,
    semester: 1,
    title: '1st Year · 1st Semester',
    subtitle:
      'B.Sc. Engineering Curriculum (Session 2025–2026) · 15.00 Theory Credits + 3.75 Sessional Credits',
    totalCredits: 18.75,
    classRoutine: {
      timeSlots: ['10-11', '11-12', '12-01', '02-03', '03-04'],
      rows: [
        {
          day: 'Saturday',
          slots: ['', '', 'CHEM 1101', 'EECE 1111', 'EECE 1111'],
        },
        {
          day: 'Sunday',
          slots: ['PHY 1101', 'PHY 1101', 'MATH 1101', 'EECE 1111 L', 'EECE 1111 L'],
        },
        {
          day: 'Monday',
          slots: ['', 'HUM 1101', 'HUM 1101', 'PHY 1101', ''],
        },
        {
          day: 'Tuesday',
          slots: ['EECE 1111', 'MATH 1101', 'MATH 1101', 'CE 1101', 'CE 1101'],
        },
        {
          day: 'Wednesday',
          slots: ['CHEM 1101', 'CHEM 1101', 'HUM 1101', '', ''],
        },
      ],
    },
    subjects: [
      {
        id: 'eece1111',
        code: 'EECE1111',
        title: 'Electrical Circuits I',
        credits: 3.0,
        contactHours: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Circuit Variables and Elements, Basic Laws, Techniques for Circuit Analysis, DC Network Theorem, AC Network Theorem, and Sinusoidal Functions.',
        professorFollowedBooks: [
          'Fundamentals of Electric Circuits by Charles K. Alexander and Matthew N. O. Sadiku',
          'A Textbook of Electrical Technology (Vol. I) by B. L. Theraja and A. K. Theraja',
        ],
        syllabusRecommendedBooks: [
          'Alternating-current Circuits by G. F. Corcoran and R. M. Kerchner',
          'Introduction to Electric Circuits by R. C. Dorf and J. A. Svoboda',
          'Electrical Engineering by R. P. Ward',
          'Fundamentals of Electricity and Magnetism by Arthur Kip',
          'Introductory Circuit Analysis by Robert L. Boylestad',
        ],
        chapters: EECE1111_CHAPTER_SHELLS,
      },
      {
        id: 'eece1112',
        code: 'EECE1112',
        title: 'Electrical Circuits I Sessional',
        credits: 1.5,
        contactHours: 3.0,
        courseType: 'Sessional',
        syllabusOverview:
          'Laboratory sessional experiments based on EECE 1111 (Electrical Circuits I).',
        professorFollowedBooks: [
          'Fundamentals of Electric Circuits by Charles K. Alexander and Matthew N. O. Sadiku',
        ],
        syllabusRecommendedBooks: [
          'Introductory Circuit Analysis by Robert L. Boylestad',
        ],
        chapters: [
          {
            id: 'eece1112-ch01',
            unitNumber: 'Module 01',
            title: 'Electrical Circuits I Laboratory Experiments',
            summary:
              "Experimental verification of Ohm's Law, KCL, KVL, Superposition, Thevenin's, Norton's, Maximum Power Transfer theorems, and RLC AC branch measurements.",
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
        ],
      },
      {
        id: 'phy1101',
        code: 'PHY1101',
        title: 'Physics',
        credits: 3.0,
        contactHours: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Electrostatic and Steady Electric Current, Magnetic Field and Electromagnetic Induction, Waves and Oscillations, Optics, Quantum Mechanics, Sound and Acoustics, and Thermoelectricity and Photoelectricity.',
        professorFollowedBooks: [
          'Physics Part I and Part II by David Halliday and Robert Resnick',
          'A Textbook of Sound by N. Subrahmanyam and Brij Lal',
        ],
        syllabusRecommendedBooks: [
          'Textbook of Optics by Francis A. Jenkins and Harvey E. White',
          'Thermodynamics by F. W. Sears',
          'Classical Thermodynamics by D. Elwell & A. J. Pointon',
          'Modern Physics by A. Beiser',
          'Electricity and Magnetism by Edward M. Purcell',
          'Electricity and Magnetism by Stanley Ramsey',
          'Oscillations and Waves: An Introduction by Richard Fitzpatrick',
          'Waves and Oscillations by R. A. Waldron',
        ],
        chapters: [
          {
            id: 'phy1101-ch01',
            unitNumber: 'Module 01',
            title: 'Electrostatic and Steady Electric Current',
            summary:
              'Electric field in dielectric media, Energy in an electrostatic field. Concept of electric current, Current density, Equation of continuity, Resistivity and conductivity, Electrostatic force, Electromotive force.',
            estimatedMinutes: 85,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch02',
            unitNumber: 'Module 02',
            title: 'Magnetic Field and Electromagnetic Induction',
            summary:
              "Magnetic induction, Magnetic force on a current, Torque on a current loop, Ampere's law, Biot-Savart law and its applications, Faraday's laws of electromagnetic induction, Lenz's law, Induced current and voltage, Self-inductance and mutual inductance, Inductor.",
            estimatedMinutes: 90,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch03',
            unitNumber: 'Module 03',
            title: 'Waves and Oscillations',
            summary:
              'Differential equation of simple harmonic oscillator, Total energy and average energy. Combination of simple harmonic oscillations, Spring mass system, Torsional pendulum, Two body oscillation, Reduced mass, Damped oscillation, Forced oscillation, Resonance, Progressive wave, Power and intensity of wave, Stationary wave, Group and phase velocities.',
            estimatedMinutes: 85,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch04',
            unitNumber: 'Module 04',
            title: 'Optics',
            summary:
              "Theories of light, Interference of light, Young's double slit experiment, Diffraction by single slit, Diffraction at double slit, Diffraction grating, Polarization, Classification and uses of polarization, Brewster's law, Nicol Prism.",
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch05',
            unitNumber: 'Module 05',
            title: 'Quantum Mechanics',
            summary:
              "Wave function and wave equation, Time dependent and time independent Schrodinger's equation, De-Broglie waves, Uncertainty principle, Photoelectric effect, Quantum theory of light, Compton effect.",
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch06',
            unitNumber: 'Module 06',
            title: 'Sound and Acoustics',
            summary:
              "Simple harmonic motion, Wave equation, Principle of superposition. Beats, Dispersion, Phase and group velocities, Doppler's effect, Free and forced vibrations, Reverberation, Noise insulation and reduction, Compound absorption, Sound distribution, Room acoustics, Recording.",
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch07',
            unitNumber: 'Module 07',
            title: 'Thermoelectricity and Photoelectricity',
            summary:
              "Thermal electromotive forces, Seebeck effect and Peltier effect, Thermocouple and Thermo-emf, Laws of photoemission and Einstein's equation, Photoelectric cell and its use.",
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
        ],
      },
      {
        id: 'ce1101',
        code: 'CE1101',
        title: 'Engineering Graphics',
        credits: 1.5,
        contactHours: 3.0,
        courseType: 'Sessional',
        syllabusOverview:
          'Seven Rewritten Engineering Graphics & AutoCAD Lab Reports (Exp 01 Lettering, Exp 02 Regular Polygons, Exp 03 Intro to AutoCAD, Exp 04 Drawing Tools, Exp 05 Coordinate Systems, Exp 06 Modify Commands, Exp 07 Workspace & Drafting Settings), Practical Exam Preparation, and Orthographic/Isometric Projections.',
        professorFollowedBooks: [
          'Engineering Graphics (3rd Edition) by Frederick E. Giesecke, Alva Mitchell, Henry C. Spencer, Ivan L. Hill, Robert O. Loving and John Thomas Dygdon',
        ],
        syllabusRecommendedBooks: [
          'Engineering Graphics (3rd Edition) by Frederick E. Giesecke, Alva Mitchell, Henry C. Spencer, Ivan L. Hill, Robert O. Loving and John Thomas Dygdon',
          'Engineering Drawing (2nd Edition) by Frank Zozzora',
        ],
        chapters: [
          {
            id: 'ce1101-exp01',
            unitNumber: 'Experiment 01',
            title: 'Experiment 01: Letter Drawing',
            summary:
              'Lab Report 01 — Uppercase (A–Z) and lowercase (a–z) engineering lettering drawn between horizontal guidelines.',
            estimatedMinutes: 15,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-exp02',
            unitNumber: 'Experiment 02',
            title: 'Experiment 02: Drawing of Regular Polygons of a Given Length of Arm',
            summary:
              'Rewritten Lab Report 02 — Grammatically corrected procedures for Method 1 and Method 2 (Square, Pentagon, Hexagon, Heptagon, and Octagon) and Discussion.',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-exp03',
            unitNumber: 'Experiment 03',
            title: 'Experiment 03: Introduction to AutoCAD and Drawing a Line by AutoCAD',
            summary:
              'Rewritten Lab Report 03 — Definition and origins of AutoCAD, reasons for its widespread use, the 8 toolbar categories, the 3 command execution methods, and Result & Discussion.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-exp04',
            unitNumber: 'Experiment 04',
            title: 'Experiment 04: Familiarizing with Drawing Tools and Using Them to Draw Various Geometrical Shapes',
            summary:
              'Rewritten Lab Report 04 — Grammatically corrected descriptions and procedures for the 9 drawing tools (Line, Polyline, Circle, Center Line, Rectangle, Arc, Ellipse, Spline, Polygon) with your 9 actual AutoCAD images.',
            estimatedMinutes: 45,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-exp05',
            unitNumber: 'Experiment 05',
            title: 'Experiment 05: Learning to Draw Any Drawing in AutoCAD Using Coordinate System and Practicing Rectangular and Polar Coordinate Systems',
            summary:
              'Rewritten Lab Report 05 — Grammatically corrected procedures and coordinate sequences for Absolute, Relative Rectangular, and Polar Coordinate Systems with your 6 actual AutoCAD images.',
            estimatedMinutes: 40,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-exp06',
            unitNumber: 'Experiment 06',
            title: 'Experiment 06: Learning and Practicing Modify/Editing Commands',
            summary:
              'Rewritten Lab Report 06 — Grammatically corrected definitions and procedures for Copy, Move, Scale, Rotate, Mirror, Offset, Extend, Trim, and Break/Explode tools with your 8 actual AutoCAD images.',
            estimatedMinutes: 45,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-exp07',
            unitNumber: 'Experiment 07',
            title: 'Experiment 07: Learning to Prepare Working Space, Draft Settings, Design Project Setup, Units, Limits, Object Snap and Tracking',
            summary:
              'Rewritten Lab Report 07 — Grammatically corrected notes on Status Bar Drafting Toggles, Grid (F7), OSNAP (F3), Snap (F9), Ortho (F8), Polar Tracking (F10), OTRACK, and Lineweight with your 5 actual AutoCAD images.',
            estimatedMinutes: 40,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-practical',
            unitNumber: 'Practical Exam Guide',
            title: 'AutoCAD Practical Exam Command Sheet (Professor’s Lab Commands)',
            summary:
              'Professor’s taught AutoCAD commands for the practical exam — Main Geometry Generators, Modifying Geometry, Annotation, and the 21-command lab sheet.',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
        ],
      },
      {
        id: 'hum1101',
        code: 'HUM1101',
        title: 'English',
        credits: 3.0,
        contactHours: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Introduction, Communicative English, Paragraph Writing, Essay Writing, Reading comprehension, Business Writing, Letter Writing, and Report writing.',
        professorFollowedBooks: [],
        syllabusRecommendedBooks: [
          'Basic English Grammar by Schrampfer Azar',
          'Advanced Grammar in Use With answers by Martin Hewings',
          'Communicating Handbook by Loes Van',
          'English for Business Communication Student’s Book by Simon Sweeney',
          'Technical English: Writing, Reading and Speaking (8th Edition) by Nell Ann Pickett',
          'Cambridge English for Engineering Student’s Book with Audio CDs (2) by A. S. Hornby',
        ],
        chapters: [
          {
            id: 'hum1101-ch01',
            unitNumber: 'Module 01',
            title: 'Introduction',
            summary:
              'Parts of speech (Changing), Sentence making rules, different types of sentences, Tense, right forms of verbs, verb conjugation, Transformation of sentences: Different types of sentences - Converting degree, Appropriate preposition, Idioms & Phrase, Voice, Narration, Correction of sentences, WH Question, Completing sentences, Synonyms and Antonyms.',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch02',
            unitNumber: 'Module 02',
            title: 'Communicative English',
            summary:
              'Introductions oneself, Conversation & Dialogue on recent topic, Group Discussion, Notations & Functions.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch03',
            unitNumber: 'Module 03',
            title: 'Paragraph Writing',
            summary:
              'Amplification of Ideas, Structure and classifications, Topic Sentence, Topic Developers, Topic Termination, Open-ended paragraph, Close-ended paragraph.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch04',
            unitNumber: 'Module 04',
            title: 'Essay Writing',
            summary:
              'Hints given essay, without hints essay, Free hand Essay writing on current Issues.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch05',
            unitNumber: 'Module 05',
            title: 'Reading Comprehension',
            summary:
              'Precise writing, Vocabulary building, Synonym & Antonym, Use of words in different Parts of speech, True-false (Yes/No/Not given), Fill in the blanks, Tree Chart, flow chart.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch06',
            unitNumber: 'Module 06',
            title: 'Business Writing',
            summary: 'Agenda, Notice, Memo, Meeting Minutes, Quotation, Tender.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch07',
            unitNumber: 'Module 07',
            title: 'Letter Writing',
            summary:
              'Job application, Resume, Formal & Informal letter, Letter to Newspaper.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'hum1101-ch08',
            unitNumber: 'Module 08',
            title: 'Report Writing',
            summary: 'Technical Report, Lab report, Newspaper report.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
        ],
      },
      {
        id: 'math1101',
        code: 'MATH1101',
        title: 'Differential Calculus and Analytical Geometry',
        credits: 3.0,
        contactHours: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Differential Calculus (Functions, Limit and Continuity, Differentiability, Successive Differentiations & Leibniz Theorem, Mean Value Theorems, Tangents, Curvature, Partial Derivatives, Euler’s Theorem, Jacobian & Hessian) and Analytical Geometry (2D/3D Co-ordinate Systems, Pair of Straight Lines, Conics, Circles, Planes, Conicoids & Sphere).',
        professorFollowedBooks: [
          'Calculus and Analytical Geometry by H. Anton',
          'Co-ordinate Geometry and Vector Analysis by Rahman and Bhattacharjee',
        ],
        syllabusRecommendedBooks: [
          'Analytic Geometry of Conic Sections by E. H. Askwith',
          'Calculus and Analytic Geometry by G. B. Thomas and R. L. Finney',
          'Differential Calculus by J. Edwards',
          'Advanced Calculus by M. R. Spiegel',
          'Calculus by F. Ayres',
        ],
        chapters: MATH1101_CHAPTER_SHELLS,
      },
      {
        id: 'chem1101',
        code: 'CHEM1101',
        title: 'Physical and Inorganic Chemistry',
        credits: 3.0,
        contactHours: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Electrochemistry, Electrochemical Cells, Chemical Equilibrium, Chemical kinetics, Solution and Colloid, Atomic Structure, Periodic Classification of Elements, Electronic Theory of Valence and Chemical Bonding, and Chemistry of Transition Elements, Lanthanides and Actinides.',
        professorFollowedBooks: [
          'Modern Inorganic Chemistry by R. D. Madan',
          'Principles of Physical Chemistry by M. M. Haque and M. A. Nawab',
        ],
        syllabusRecommendedBooks: [
          'Principles of Physical Chemistry by M. M. Haque and M. A. Nawab',
          'Fundamental Concepts in Inorganic Chemistry by Esmarch S. Gilreath',
          'Physical Chemistry by G. M. Barrow',
          'Physical Chemistry by W. J. Moore',
          'Physical Chemistry by Keith J. Laidler, John H. Meiser',
          'Elementary Physical Chemistry by S. R. Palit',
          'Modern Inorganic Chemistry by S. Z. Haider',
          'Chemical Bonding by Audrey L. Companion',
          'Basic Inorganic Chemistry by F. Albert Cotton, G. Wilkinson, P. L. Gaus',
          'Electronic Structure and Chemical Bonding by Donald K. Sebera',
        ],
        chapters: [
          {
            id: 'chem1101-ch01',
            unitNumber: 'Module 01',
            title: 'Electrochemistry',
            summary:
              'Conductors, Electrolytes and Electrolysis, Faraday’s Laws of Electrolysis, Electrolytic Conductance, Theories for Electrolytic Conductance, Ionic Mobility, Kohlrausch’s Law, Transference Number.',
            estimatedMinutes: 65,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch02',
            unitNumber: 'Module 02',
            title: 'Electrochemical Cells (Electrolytic and Galvanic/Voltaic)',
            summary:
              'Electrode Reaction and Potentials, Reference Electrode, Reversible and Concentration Cells.',
            estimatedMinutes: 60,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch03',
            unitNumber: 'Module 03',
            title: 'Chemical Equilibrium',
            summary:
              'Reversible and Irreversible Reaction, Chemical Equilibrium and its Dynamic Nature, Characteristics, Laws of Mass Action and Equilibrium Constant Kc, Kp and Kx, Le-Chatelier’s Principles and Applications.',
            estimatedMinutes: 70,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch04',
            unitNumber: 'Module 04',
            title: 'Chemical Kinetics',
            summary:
              'Rate of Chemical Reaction, Order and Molecularity of Reactions, Different Types of Rate Expressions, Methods of Determining Rate and Order, Effect of Temperature on Reaction Rate and Energy of Activation.',
            estimatedMinutes: 80,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch05',
            unitNumber: 'Module 05',
            title: 'Solution and Colloid',
            summary:
              'Different Types of Solution, Concentration Units, Colloid and Colloidal Solution-Classification, Preparation, Purification, Properties, Protective Action and Application of Colloids.',
            estimatedMinutes: 75,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch06',
            unitNumber: 'Module 06',
            title: 'Atomic Structure',
            summary:
              'Dalton’s Atomic Theory, Fundamental Particles, Elementary Ideas on Rutherford Atom Model and Bohr Atom Model, Quantum Numbers, Shape of Atomic Orbitals, Pauli’s Exclusion Principle, Electronic Configuration of Elements.',
            estimatedMinutes: 75,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch07',
            unitNumber: 'Module 07',
            title: 'Periodic Classification of Elements',
            summary:
              'Modern Periodic Table, Periodic Classification of Elements, Correlation of Periodic Classification of Elements with Electronic Configuration, Investigation on Some Periodic Properties, Atomic and Ionic Radius, Ionization Potential, Electron Affinity and Electronegativity.',
            estimatedMinutes: 75,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch08',
            unitNumber: 'Module 08',
            title: 'Electronic Theory of Valence and Chemical Bonding',
            summary:
              'Different Types of Chemical Bonds (Ionic, Covalent, Co-ordinate, Hydrogen and Metallic), Classification of Solids on the Basis of Bonding and their Properties, Hybridization of Atomic Orbitals and Shapes of Molecules, Molecular Orbitals, Bond Length and Bond Strength.',
            estimatedMinutes: 85,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch09',
            unitNumber: 'Module 09',
            title: 'Chemistry of Transition Elements, Lanthanides and Actinides',
            summary:
              'Definitions, Electronic Configurations, Preparation (Nuclear Transformation), General Properties.',
            estimatedMinutes: 80,
            lastUpdated: 'October 2026',
            blocks: [],
          },
        ],
      },
      {
        id: 'eece1100',
        code: 'EECE1100',
        title: 'Viva-voce',
        credits: 0.75,
        contactHours: 0,
        courseType: 'Sessional',
        syllabusOverview:
          'Comprehensive oral examination (Viva-voce) covering all 1st Year 1st Semester coursework.',
        professorFollowedBooks: [],
        syllabusRecommendedBooks: [],
        chapters: [
          {
            id: 'eece1100-ch01',
            unitNumber: 'Module 01',
            title: 'Viva-voce Examination',
            summary:
              'Oral assessment of fundamental concepts across 1st Year 1st Semester courses.',
            estimatedMinutes: 15,
            lastUpdated: 'October 2026',
            blocks: [],
          },
        ],
      },
    ],
  },
  {
    id: 'eece12',
    code: 'EECE12',
    year: 1,
    semester: 2,
    title: '1st Year · 2nd Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
  {
    id: 'eece21',
    code: 'EECE21',
    year: 2,
    semester: 1,
    title: '2nd Year · 1st Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
  {
    id: 'eece22',
    code: 'EECE22',
    year: 2,
    semester: 2,
    title: '2nd Year · 2nd Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
  {
    id: 'eece31',
    code: 'EECE31',
    year: 3,
    semester: 1,
    title: '3rd Year · 1st Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
  {
    id: 'eece32',
    code: 'EECE32',
    year: 3,
    semester: 2,
    title: '3rd Year · 2nd Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
  {
    id: 'eece41',
    code: 'EECE41',
    year: 4,
    semester: 1,
    title: '4th Year · 1st Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
  {
    id: 'eece42',
    code: 'EECE42',
    year: 4,
    semester: 2,
    title: '4th Year · 2nd Semester',
    subtitle: 'No courses added yet',
    totalCredits: 0,
    subjects: [],
  },
];

const courseChaptersCache = new Map<string, ChapterNote[]>();

/**
 * Dynamically imports a course's chapter data only when that course is opened.
 */
export async function loadCourseChapters(
  subjectId: string
): Promise<ChapterNote[] | null> {
  const cached = courseChaptersCache.get(subjectId);
  if (cached) return cached;

  if (subjectId === 'eece1111') {
    const mod = await import('./eece1111Data.ts');
    courseChaptersCache.set('eece1111', mod.EECE1111_CHAPTERS);
    return mod.EECE1111_CHAPTERS;
  }

  if (subjectId === 'math1101') {
    const mod = await import('./math1101Data.ts');
    courseChaptersCache.set('math1101', mod.MATH1101_CHAPTERS);
    return mod.MATH1101_CHAPTERS;
  }

  if (subjectId === 'chem1101') {
    const mod = await import('./chem1101Data.ts');
    courseChaptersCache.set('chem1101', mod.CHEM1101_CHAPTERS);
    return mod.CHEM1101_CHAPTERS;
  }

  if (subjectId === 'phy1101') {
    const mod = await import('./phy1101Data.ts');
    courseChaptersCache.set('phy1101', mod.PHY1101_CHAPTERS);
    return mod.PHY1101_CHAPTERS;
  }

  if (subjectId === 'ce1101') {
    const mod = await import('./ce1101Data.ts');
    courseChaptersCache.set('ce1101', mod.CE1101_CHAPTERS);
    return mod.CE1101_CHAPTERS;
  }

  return null;
}

/**
 * Merges dynamically loaded course chapters into the semester list.
 */
export function mergeCourseChaptersIntoSemesters(
  semesters: SemesterEntry[],
  subjectId: string,
  chapters: ChapterNote[]
): SemesterEntry[] {
  return semesters.map((sem) => ({
    ...sem,
    subjects: sem.subjects.map((sub) =>
      sub.id === subjectId ? { ...sub, chapters } : sub
    ),
  }));
}

/**
 * Loads all course chapter modules asynchronously once at startup to build the global search index
 * without bundling course chapter data into the initial entry chunk.
 */
export async function loadAllCourseChaptersForStartupIndex(): Promise<
  SemesterEntry[]
> {
  const [eeceChapters, mathChapters, chemChapters, phyChapters, ceChapters] =
    await Promise.all([
      loadCourseChapters('eece1111'),
      loadCourseChapters('math1101'),
      loadCourseChapters('chem1101'),
      loadCourseChapters('phy1101'),
      loadCourseChapters('ce1101'),
    ]);

  let updated = INITIAL_CURRICULUM_SEMESTERS;
  if (eeceChapters) {
    updated = mergeCourseChaptersIntoSemesters(updated, 'eece1111', eeceChapters);
  }
  if (mathChapters) {
    updated = mergeCourseChaptersIntoSemesters(updated, 'math1101', mathChapters);
  }
  if (chemChapters) {
    updated = mergeCourseChaptersIntoSemesters(updated, 'chem1101', chemChapters);
  }
  if (phyChapters) {
    updated = mergeCourseChaptersIntoSemesters(updated, 'phy1101', phyChapters);
  }
  if (ceChapters) {
    updated = mergeCourseChaptersIntoSemesters(updated, 'ce1101', ceChapters);
  }
  return updated;
}


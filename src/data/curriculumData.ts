import { EECE1111_CHAPTERS } from "./eece1111Data.ts";
import { MATH1101_CHAPTERS } from "./math1101Data.ts";
import { CHEM1101_CHAPTERS } from "./chem1101Data.ts";
import type {
  InteractiveDiagramId,
  TableData,
  EquationItem,
  SolutionStep,
  NoteBlock,
  ChapterNote,
  ClassRoutineRow,
  ClassRoutine,
  SubjectCourse,
  SemesterEntry,
} from './types.ts';

export type {
  InteractiveDiagramId,
  TableData,
  EquationItem,
  SolutionStep,
  NoteBlock,
  ChapterNote,
  ClassRoutineRow,
  ClassRoutine,
  SubjectCourse,
  SemesterEntry,
};

export const CURRICULUM_SEMESTERS: SemesterEntry[] = [
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
        chapters: EECE1111_CHAPTERS,
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
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch02',
            unitNumber: 'Module 02',
            title: 'Magnetic Field and Electromagnetic Induction',
            summary:
              "Magnetic induction, Magnetic force on a current, Torque on a current loop, Ampere's law, Biot-Savart law and its applications, Faraday's laws of electromagnetic induction, Lenz's law, Induced current and voltage, Self-inductance and mutual inductance, Inductor.",
            estimatedMinutes: 35,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'phy1101-ch03',
            unitNumber: 'Module 03',
            title: 'Waves and Oscillations',
            summary:
              'Differential equation of simple harmonic oscillator, Total energy and average energy. Combination of simple harmonic oscillations, Spring mass system, Torsional pendulum, Two body oscillation, Reduced mass, Damped oscillation, Forced oscillation, Resonance, Progressive wave, Power and intensity of wave, Stationary wave, Group and phase velocities.',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'phy1101-u01-b1',
                type: 'definition',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 02 (Mechanical-Electrical Analogy)',
                title: 'Differential Equation of Damped Oscillation & Quality Factor (Q)',
                summaryText:
                  'd²x/dt² + 2b(dx/dt) + ω₀²x = 0 where b = r/(2m) is the damping coefficient and ω₀ = √(k/m) is the natural angular frequency.',
                paragraphs: [
                  'A real oscillating system experiences a resistive damping force proportional to velocity (F_d = −r·dx/dt) in addition to the linear restoring force (F_r = −kx). This second-order linear ODE mirrors a series RLC electrical circuit where mass m ↔ inductance L, damping r ↔ resistance R, and compliance 1/k ↔ capacitance C.',
                ],
                table: {
                  caption:
                    'Table 1.1 — Three Damping Regimes & Mechanical–Electrical RLC Analogy',
                  headers: [
                    'Condition',
                    'Regime Name',
                    'Physical Behavior',
                    'RLC Circuit Equivalent',
                  ],
                  rows: [
                    [
                      'b < ω₀',
                      'Underdamped (Oscillatory)',
                      'Oscillates with exponentially decaying amplitude e^{−bt}',
                      'R < 2√(L/C)',
                    ],
                    [
                      'b = ω₀',
                      'Critically Damped',
                      'Returns to equilibrium in minimum time without overshoot',
                      'R = 2√(L/C)',
                    ],
                    [
                      'b > ω₀',
                      'Overdamped (Deadbeat)',
                      'Slow exponential return to equilibrium with zero oscillation',
                      'R > 2√(L/C)',
                    ],
                  ],
                },
              },
            ],
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
          'Introduction to orthographic projections, Drawing standards and practices, and Introduction to computer aided design (CAD).',
        professorFollowedBooks: [],
        syllabusRecommendedBooks: [
          'Engineering Graphics (3rd Edition) by Frederick E. Giesecke, Alva Mitchell, Henry C. Spencer, Ivan L. Hill, Robert O. Loving and John Thomas Dygdon',
          'Engineering Drawing (2nd Edition) by Frank Zozzora',
        ],
        chapters: [
          {
            id: 'ce1101-ch01',
            unitNumber: 'Module 01',
            title: 'Introduction to Orthographic Projections',
            summary:
              'Scale drawing, Sectional view, Isometric views, Missing line, Auxiliary view, Pictorial views.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-ch02',
            unitNumber: 'Module 02',
            title: 'Drawing Standards and Practices',
            summary:
              'Interpenetrating of surfaces, Development of surfaces, Machine drawings and Technical sketching.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'ce1101-ch03',
            unitNumber: 'Module 03',
            title: 'Introduction to Computer Aided Design (CAD)',
            summary:
              'Project on Engineering Drawing and CAD using Contemporary CAD tools.',
            estimatedMinutes: 25,
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
        chapters: MATH1101_CHAPTERS,
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
        chapters: CHEM1101_CHAPTERS,
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

import type { NoteBlockType, PriorityTier } from '../utils/circuitMath';
import { MATH1101_CHAPTERS } from './math1101Data';

export type InteractiveDiagramId =
  | 'passive-sign'
  | 'ohms-law'
  | 'kcl-kvl'
  | 'rc-transient';

export interface TableData {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface EquationItem {
  label: string;
  formula: string;
  units?: string;
  note?: string;
}

export interface SolutionStep {
  stepTitle: string;
  explanation: string;
  equation?: string;
}

export interface NoteBlock {
  id: string;
  type: NoteBlockType;
  priorityTier: PriorityTier;
  secondaryPriorityTiers?: PriorityTier[];
  sourceCitation: string;
  title: string;
  summaryText: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  equations?: EquationItem[];
  table?: TableData;
  interactiveDiagramId?: InteractiveDiagramId;
  examYears?: string[];
  marks?: string;
  problemStatement?: string;
  givenData?: string[];
  solutionSteps?: SolutionStep[];
  finalAnswer?: string;
  professorTip?: string;
}

export interface ChapterNote {
  id: string;
  unitNumber: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  lastUpdated: string;
  blocks: NoteBlock[];
}

export interface ClassRoutineRow {
  day: string;
  slots: string[];
}

export interface ClassRoutine {
  timeSlots: string[];
  rows: ClassRoutineRow[];
}

export interface SubjectCourse {
  id: string;
  code: string;
  title: string;
  credits: number;
  contactHours?: number;
  courseType: 'Theory' | 'Sessional';
  syllabusOverview: string;
  professorFollowedBooks: string[];
  syllabusRecommendedBooks: string[];
  chapters: ChapterNote[];
}

export interface SemesterEntry {
  id: string;
  code: string;
  year: 1 | 2 | 3 | 4;
  semester: 1 | 2;
  title: string;
  subtitle: string;
  totalCredits: number;
  classRoutine?: ClassRoutine;
  subjects: SubjectCourse[];
}

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
        chapters: [
          {
            id: 'eece1111-ch01',
            unitNumber: 'Module 01',
            title: 'Circuit Variables and Elements',
            summary:
              'Voltage, current, power, energy, independent and dependent sources, resistance, inductance and capacitance. Introduce to non-sinusoidal wave, calculation of RMS and average value for non-sinusoidal waveforms.',
            estimatedMinutes: 35,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u01-b1',
                type: 'theory',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 01 & 02 (Professor Board Emphasis)',
                title: 'Passive Sign Convention (PSC) & Power Direction Criterion',
                summaryText:
                  'Whenever reference current i enters the positive (+) voltage terminal, use p = +vi. If current enters the negative (−) terminal, use p = −vi.',
                paragraphs: [
                  'In circuit analysis, assigning power as absorbed or supplied requires inspecting the relative orientation of the voltage polarity (+ / −) and the current arrow before substituting signed numbers.',
                  'Under the Passive Sign Convention (PSC), if the current arrow enters the positive (+) terminal of an element, calculate instantaneous power as p = +v · i. Conversely, if the current arrow enters the negative (−) terminal (leaves the positive terminal), negate the expression to p = −v · i.',
                ],
                bulletPoints: [
                  'Result p > 0 W: The element is absorbing (consuming) electric power — behaves as a passive load or resistor.',
                  'Result p < 0 W: The element is supplying (delivering) electric power to the circuit — behaves as an active source.',
                  'Conservation of Power Check: In any isolated circuit at any instant t, the algebraic sum of power across all elements is strictly zero (∑ p = 0).',
                ],
                equations: [
                  {
                    label: 'Current Entering + Terminal',
                    formula: 'p(t) = +v(t) · i(t)',
                    units: 'Watts (W = J/s)',
                    note: 'Standard Passive Sign Convention orientation',
                  },
                  {
                    label: 'Current Leaving + Terminal',
                    formula: 'p(t) = −v(t) · i(t)',
                    units: 'Watts (W)',
                    note: 'Active generator orientation',
                  },
                  {
                    label: 'Total Circuit Power Balance',
                    formula: '∑ p_absorbed = ∑ p_supplied   <=>   ∑ p_k = 0',
                    units: 'Watts (W)',
                    note: 'Mandatory verification check in exam problems',
                  },
                ],
                interactiveDiagramId: 'passive-sign',
                professorTip:
                  'In semester exams, always write two explicit steps: (1) identify whether current enters the + or − terminal to fix the formula sign, and (2) substitute the numerical signs of v and i inside parentheses.',
              },
              {
                id: 'u01-b2',
                type: 'definition',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · Final Exam 2023 Q1(a), 2021 Q1(a), 2019 Q1(b)',
                title: 'Fundamental Definitions: Electric Charge, Current, Voltage & Energy',
                summaryText:
                  'Formal mathematical definitions of charge q, current i = dq/dt, voltage v_ab = dw/dq, and energy w = ∫ p dt.',
                examYears: ['2023', '2021', '2019'],
                marks: '4 Marks',
                paragraphs: [
                  'Electric Charge (q) is the fundamental electrical property of atomic matter, measured in Coulombs (C). One electron carries a negative charge of −1.602 × 10^(−19) C, meaning 1 C equals the charge of 6.24 × 10^(18) electrons.',
                  'Electric Current (i) is the time rate of change of charge passing through a specified cross-sectional area, measured in Amperes (A). Voltage or Potential Difference (v_ab) between node a and node b is the energy (work) required to move a unit positive charge (+1 C) from terminal b (−) to terminal a (+).',
                ],
                equations: [
                  {
                    label: 'Instantaneous Current',
                    formula: 'i(t) = dq(t) / dt',
                    units: '1 A = 1 C/s',
                  },
                  {
                    label: 'Net Charge Transferred',
                    formula: 'q(t) = ∫ [t0 to t] i(τ) dτ + q(t0)',
                    units: 'Coulombs (C)',
                  },
                  {
                    label: 'Voltage (Potential Difference)',
                    formula: 'v_{ab} = dw / dq',
                    units: '1 V = 1 J/C = 1 N·m/C',
                  },
                  {
                    label: 'Instantaneous Power via Chain Rule',
                    formula: 'p = dw / dt = (dw / dq) · (dq / dt) = v · i',
                    units: '1 W = 1 J/s',
                  },
                ],
              },
              {
                id: 'u01-b3',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 02 Summary Sheet',
                title: 'Sign Matrix for Power & Dependent Source Classification',
                summaryText:
                  'Quick-reference lookup table for all four terminal-polarity combinations and the four linear dependent source types.',
                paragraphs: [
                  'Commit both the four-case Passive Sign Convention truth table and the four dependent source symbols (VCVS, CCVS, VCCS, CCCS) to memory for rapid problem setup.',
                ],
                table: {
                  caption:
                    'Table 1.1 — Complete Four-Case Power Sign Matrix & Dependent Source Parameters',
                  headers: [
                    'Terminal Entry of Current i',
                    'Values of v and i',
                    'Formula & Sign of p',
                    'Physical Interpretation',
                  ],
                  rows: [
                    [
                      'Enters + terminal',
                      'v = +10 V, i = +3 A',
                      'p = +(+10)(+3) = +30 W',
                      'Absorbing 30 W (Load)',
                    ],
                    [
                      'Enters + terminal',
                      'v = +10 V, i = −3 A',
                      'p = +(+10)(−3) = −30 W',
                      'Supplying 30 W (Source)',
                    ],
                    [
                      'Enters − terminal (Leaves +)',
                      'v = +10 V, i = +3 A',
                      'p = −(+10)(+3) = −30 W',
                      'Supplying 30 W (Source)',
                    ],
                    [
                      'Enters − terminal (Leaves +)',
                      'v = −10 V, i = +3 A',
                      'p = −(−10)(+3) = +30 W',
                      'Absorbing 30 W (Load)',
                    ],
                  ],
                },
              },
              {
                id: 'u01-b4',
                type: 'example',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · Lecture 03 Worked Problem (Professor Board Example)',
                title: 'Time-Varying Charge Waveform & Instantaneous Power Delivered',
                summaryText:
                  'Given q(t) = 5t·sin(4πt) mC and v(t) = 2·cos(4πt) V, determine i(t) and p(t) at t = 0.25 s.',
                problemStatement:
                  'The total charge entering the positive terminal of a circuit element is given by q(t) = 5t · sin(4πt) mC, while the voltage across the element (with + at the entry terminal) is v(t) = 2 · cos(4πt) V. Calculate the current i(t) and the power absorbed at t = 0.25 s.',
                givenData: [
                  'q(t) = 5t · sin(4πt) mC',
                  'v(t) = 2 · cos(4πt) V',
                  'Evaluation time t = 0.25 s (Note: 4πt is in radians)',
                ],
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Differentiate charge q(t) using the product rule',
                    explanation:
                      'Since current enters the positive terminal, i(t) = dq/dt:',
                    equation:
                      'i(t) = d/dt [5t · sin(4πt)] = 5 · sin(4πt) + 20πt · cos(4πt)  mA',
                  },
                  {
                    stepTitle: 'Step 2: Evaluate i(t) and v(t) at t = 0.25 s',
                    explanation:
                      'Substitute t = 0.25 s so that angle 4π(0.25) = π rad (where sin(π) = 0 and cos(π) = −1):',
                    equation:
                      'i(0.25) = 5·sin(π) + 20π(0.25)·cos(π) = 0 + 5π(−1) = −15.708 mA\nv(0.25) = 2 · cos(π) = −2.0 V',
                  },
                  {
                    stepTitle: 'Step 3: Compute power p(0.25) using Passive Sign Convention',
                    explanation:
                      'Because current enters the positive terminal, p = +v · i:',
                    equation:
                      'p(0.25) = (−2.0 V) × (−15.708 mA) = +31.42 mW (Absorbing)',
                  },
                ],
                finalAnswer: 'i(0.25 s) = −15.71 mA,  p(0.25 s) = +31.42 mW (Absorbed)',
              },
              {
                id: 'u01-b5',
                type: 'pyq',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · Semester Final 2023 Q1(c) & 2020 Q1(b)',
                title:
                  'Conservation of Power & Unknown Dependent Source Current in a 5-Element Network',
                summaryText:
                  'Calculate the power of each element in a 5-branch network and verify ∑ p = 0 to find unknown current i_x.',
                examYears: ['2023', '2020'],
                marks: '7 Marks',
                problemStatement:
                  'A closed 5-element DC network has measured branch powers: p1 = −205 W (Independent 25 V Source), p2 = +60 W (Resistor R1), p3 = +45 W (Resistor R2), and p4 = +30 W (Load Element). Element 5 is a Current-Controlled Voltage Source (CCVS) with terminal voltage v5 = 3.5 i_x (where i_x = 4 A) and branch current i5 entering its positive terminal. Find the branch current i5 and verify energy conservation.',
                givenData: [
                  'p1 = −205 W, p2 = +60 W, p3 = +45 W, p4 = +30 W',
                  'Control current i_x = 4 A  =>  Dependent voltage v5 = 3.5 × 4 = 14 V',
                ],
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Apply Conservation of Power (∑ p_k = 0)',
                    explanation:
                      'The algebraic sum of instantaneous power for all five elements must equal zero:',
                    equation:
                      'p1 + p2 + p3 + p4 + p5 = 0   =>   −205 + 60 + 45 + 30 + p5 = 0',
                  },
                  {
                    stepTitle: 'Step 2: Solve for p5',
                    explanation: 'Isolate the power of the fifth element:',
                    equation: '−70 + p5 = 0   =>   p5 = +70 W (Absorbing Power)',
                  },
                  {
                    stepTitle: 'Step 3: Determine branch current i5',
                    explanation:
                      'Since i5 enters the positive terminal of Element 5 (v5 = 14 V):',
                    equation: 'p5 = +v5 · i5   =>   70 = 14 · i5   =>   i5 = +5.0 A',
                  },
                ],
                finalAnswer: 'p5 = +70 W (Absorbed),  i5 = 5.0 A,  ∑ p = 0 W verified.',
              },
              {
                id: 'u01-b6',
                type: 'theory',
                priorityTier: 3,
                sourceCitation:
                  'Professor-Followed Book · B. L. Theraja & Alexander & Sadiku Ch. 1',
                title:
                  'RMS and Average Values for Non-Sinusoidal & Periodic Waveforms',
                summaryText:
                  'For any periodic waveform x(t) with period T: Average value X_avg = (1/T) ∫ x(t) dt and Effective (RMS) value X_rms = √[(1/T) ∫ x²(t) dt].',
                paragraphs: [
                  'An alternating or non-sinusoidal periodic waveform x(t) = x(t + T) is characterized by its average (DC) component and its Root-Mean-Square (RMS or effective) value, which represents the equivalent DC value that delivers the same average power to a resistor.',
                  'For a composite non-sinusoidal wave containing a DC term plus harmonics x(t) = X_0 + X_{m1}sin(ωt) + X_{m2}sin(2ωt + φ_2) + ···, the total RMS value is the square root of the sum of squares of the individual RMS components.',
                ],
                equations: [
                  {
                    label: 'Full-Cycle Average (Mean) Value',
                    formula: 'X_{avg} = (1 / T) ∫_0^T x(t) dt',
                    units: 'V or A',
                  },
                  {
                    label: 'Effective / Root-Mean-Square (RMS) Value',
                    formula: 'X_{rms} = √[ (1 / T) ∫_0^T x²(t) dt ]',
                    units: 'V or A',
                  },
                  {
                    label: 'Multi-Harmonic Non-Sinusoidal RMS Value',
                    formula: 'X_{rms} = √[ X_0² + (X_{m1}/√2)² + (X_{m2}/√2)² + ··· ]',
                    units: 'Form Factor K_f = X_{rms} / X_{avg}, Peak Factor K_p = X_{max} / X_{rms}',
                  },
                ],
              },
              {
                id: 'u01-b7',
                type: 'example',
                priorityTier: 4,
                sourceCitation:
                  'Syllabus Book · Robert L. Boylestad & R. C. Dorf & J. A. Svoboda',
                title:
                  'Worked RMS & Average Value Calculation for Non-Sinusoidal Sawtooth & Composite Waveforms',
                summaryText:
                  'For a periodic sawtooth wave v(t) = (V_m / T)t on [0, T], V_avg = V_m / 2 and V_rms = V_m / √3.',
                problemStatement:
                  '(1) Derive the average value V_avg and effective (RMS) value V_rms of a periodic sawtooth voltage v(t) = (V_m / T)t for 0 ≤ t < T. (2) Calculate the total RMS current of i(t) = 3 + 4√2 sin(ωt) + 3√2 cos(3ωt) A.',
                solutionSteps: [
                  {
                    stepTitle: '1. Sawtooth Waveform Average & RMS Derivation',
                    explanation: 'Integrate v(t) and v²(t) over one period [0, T]:',
                    equation:
                      'V_{avg} = (1 / T) ∫_0^T (V_m / T)t dt\n        = (V_m / T²) [ t² / 2 ]_0^T\n∴  V_{avg} = V_m / 2 = 0.5 V_m\n\nV_{rms} = √[ (1 / T) ∫_0^T (V_m² / T²)t² dt ]\n        = √[ (V_m² / T³) (T³ / 3) ]\n∴  V_{rms} = V_m / √3 ≈ 0.577 V_m',
                  },
                  {
                    stepTitle: '2. Multi-Harmonic RMS Current Calculation',
                    explanation: 'Combine the DC term and the RMS values of each orthogonal harmonic:',
                    equation:
                      'I_0 = 3 A,   I_{rms,1} = (4√2) / √2 = 4 A,   I_{rms,3} = (3√2) / √2 = 3 A\nI_{rms} = √(I_0² + I_{rms,1}² + I_{rms,3}²)\n        = √(3² + 4² + 3²)\n∴  I_{rms} = √34 ≈ 5.83 A',
                  },
                ],
              },
            ],
          },
          {
            id: 'eece1111-ch02',
            unitNumber: 'Module 02',
            title: 'Basic Laws',
            summary:
              "Ohm's law, Kirchhoff's current and voltage laws, Voltage divider and current divider rules, Delt-Wye equivalent circuits. Series, parallel and series-parallel circuits and their equivalents.",
            estimatedMinutes: 45,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u02-b1',
                type: 'theory',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · Lecture 04 (Professor Board Derivation & Curve Analysis)',
                title: 'Ohm’s Law, Conductance & Power Dissipation Characteristics',
                summaryText:
                  'v = iR (under PSC), Conductance G = 1/R = i/v (Siemens), and non-negative resistor power p = i²R = v²/R ≥ 0.',
                paragraphs: [
                  'Ohm’s Law states that the voltage v across a linear resistor is directly proportional to the current i flowing through it, provided the current enters the positive terminal (v = +iR). If the reference current enters the negative terminal, v = −iR.',
                  'Conductance G is the reciprocal of resistance (G = 1/R), measured in Siemens (S) or mhos (℧). Because a passive resistor cannot generate energy, its absorbed power p = i²R = v²G is always non-negative regardless of voltage or current polarity.',
                ],
                equations: [
                  {
                    label: 'Ohm’s Law (Voltage & Current Forms)',
                    formula: 'v = i · R   ⟺   i = G · v = v / R',
                    units: 'V, A, Ω, S',
                  },
                  {
                    label: 'Resistor Power Dissipation',
                    formula: 'p = v · i = i²R = v² / R = v²G = i² / G',
                    units: 'Watts (W ≥ 0)',
                  },
                ],
                interactiveDiagramId: 'ohms-law',
                professorTip:
                  'Remember the two extreme limits of resistance: a Short Circuit has R = 0 Ω (G → ∞ S), meaning v = 0 V for any finite current i; an Open Circuit has R → ∞ Ω (G = 0 S), meaning i = 0 A for any finite voltage v.',
              },
              {
                id: 'u02-b2',
                type: 'theory',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · Lecture 05 (Kirchhoff’s Laws & Two-Loop T-Network)',
                title: 'Kirchhoff’s Current Law (KCL) & Kirchhoff’s Voltage Law (KVL)',
                summaryText:
                  'KCL (Conservation of Charge): ∑ i_in = ∑ i_out at any node. KVL (Conservation of Energy): ∑ v_m = 0 around any closed path.',
                paragraphs: [
                  'Kirchhoff’s Current Law (KCL) is based on the conservation of electric charge: a node cannot store net charge, so the algebraic sum of currents entering a node (or closed Gaussian boundary) must equal zero at every instant.',
                  'Kirchhoff’s Voltage Law (KVL) is based on the conservation of energy: the work done moving a unit charge around a complete closed loop returns to the same potential, so the algebraic sum of all branch voltages around any closed loop is identically zero.',
                ],
                equations: [
                  {
                    label: 'Kirchhoff’s Current Law (KCL)',
                    formula: '∑_{n=1}^{N} i_n = 0   ⟺   ∑ i_{entering} = ∑ i_{leaving}',
                    units: 'Amperes (A)',
                  },
                  {
                    label: 'Kirchhoff’s Voltage Law (KVL)',
                    formula: '∑_{m=1}^{M} v_m = 0   ⟺   ∑ v_{drops} = ∑ v_{rises}',
                    units: 'Volts (V)',
                  },
                  {
                    label: 'Fundamental Theorem of Network Topology',
                    formula: 'b = l + n − 1',
                    units: 'b = branches, l = independent loops, n = nodes',
                  },
                ],
                interactiveDiagramId: 'kcl-kvl',
              },
              {
                id: 'u02-b3',
                type: 'memorize',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · Final Exam 2023 Q2(a), 2022 Q2(b), 2019 Q2(a)',
                title:
                  'Voltage Divider, Current Divider & Wye-Delta (Y-Δ) Conversion Formulas',
                summaryText:
                  'Complete formula sheet for two-resistor dividers and Δ ↔ Y bridge conversions.',
                examYears: ['2023', '2022', '2019'],
                paragraphs: [
                  'When a bridge network (such as a Wheatstone bridge) has neither series nor parallel resistor pairs, apply a Delta-to-Wye (Δ → Y) or Wye-to-Delta (Y → Δ) transformation to collapse the network.',
                ],
                table: {
                  caption:
                    'Table 2.1 — Divider Rules & Wye-Delta (Y ↔ Δ) Equivalent Transformations',
                  headers: [
                    'Transformation / Rule',
                    'Governing Equation',
                    'Balanced Case (Equal R)',
                  ],
                  rows: [
                    [
                      'Voltage Divider (Series R₁, R₂)',
                      'v₁ = [R₁ / (R₁ + R₂)] · v_total',
                      'v₁ = v₂ = 0.5 · v_total',
                    ],
                    [
                      'Current Divider (Parallel R₁, R₂)',
                      'i₁ = [R₂ / (R₁ + R₂)] · i_total',
                      'i₁ = i₂ = 0.5 · i_total',
                    ],
                    [
                      'Delta to Wye (Δ → Y)',
                      'R₁ = (R_b · R_c) / (R_a + R_b + R_c)',
                      'R_Y = R_Δ / 3',
                    ],
                    [
                      'Wye to Delta (Y → Δ)',
                      'R_a = (R₁R₂ + R₂R₃ + R₃R₁) / R₁',
                      'R_Δ = 3 · R_Y',
                    ],
                  ],
                },
              },
              {
                id: 'u02-b4',
                type: 'pyq',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · Final Exam 2022 Q2(c) & 2020 Q2(b)',
                title: 'Bridge Equivalent Resistance Using Δ → Y Transformation',
                summaryText:
                  'Find total equivalent resistance R_ab and source current I_s for an unbalanced 5-resistor bridge.',
                examYears: ['2022', '2020'],
                marks: '8 Marks',
                problemStatement:
                  'An unbalanced bridge circuit connected to a 24 V DC source consists of upper delta resistors R_a = 30 Ω, R_b = 10 Ω, R_c = 20 Ω, and lower arm resistors R_left = 11 Ω and R_right = 7 Ω. Find the total equivalent resistance R_ab and the source current I_s.',
                givenData: [
                  'Upper Δ network: R_a = 30 Ω, R_b = 10 Ω, R_c = 20 Ω (Sum = 60 Ω)',
                  'Lower series arms after Δ → Y conversion: R_left = 11 Ω, R_right = 7 Ω',
                  'Applied DC source voltage V_s = 24 V',
                ],
                solutionSteps: [
                  {
                    stepTitle:
                      'Step 1: Convert the upper Δ (R_a, R_b, R_c) into an equivalent Y (R₁, R₂, R₃)',
                    explanation:
                      'Using the Δ → Y denominator R_a + R_b + R_c = 30 + 10 + 20 = 60 Ω:',
                    equation:
                      'R₁ (top) = (R_b·R_c)/60 = (10×20)/60 = 3.33 Ω\nR₂ (left) = (R_a·R_c)/60 = (30×20)/60 = 10 Ω\nR₃ (right) = (R_a·R_b)/60 = (30×10)/60 = 5 Ω',
                  },
                  {
                    stepTitle: 'Step 2: Combine series & parallel branches with lower arms',
                    explanation:
                      'Left branch R_L = R₂ + 11 = 10 + 11 = 21 Ω; Right branch R_R = R₃ + 7 = 5 + 7 = 12 Ω:',
                    equation:
                      'R_parallel = (21 × 12) / (21 + 12) = 252 / 33 = 7.64 Ω\nR_ab = R₁ + R_parallel = 3.33 + 7.64 = 10.97 Ω',
                  },
                  {
                    stepTitle: 'Step 3: Calculate total source current I_s',
                    explanation: 'Apply Ohm’s Law at the input terminals:',
                    equation: 'I_s = V_s / R_ab = 24 V / 10.97 Ω = 2.19 A',
                  },
                ],
                finalAnswer: 'R_ab = 10.97 Ω,  I_s = 2.19 A',
              },
              {
                id: 'u02-b5',
                type: 'example',
                priorityTier: 3,
                sourceCitation:
                  'Professor-Followed Book · Alexander & Sadiku (6th Ed.), Ch. 2',
                title:
                  'Ladder Network Reduction & Current Divider Branch Analysis',
                summaryText:
                  'Reduce a resistive ladder from the load end back to the source, then use current division at each node.',
                problemStatement:
                  'In a resistive ladder connected to a 30 V source, series resistor R₁ = 4 Ω feeds a parallel combination of R₂ = 6 Ω and a right-hand branch of R₃ = 2 Ω in series with R₄ = 4 Ω. Find the total equivalent resistance R_eq, source current I_s, and current I₄ through R₄.',
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Collapse ladder from right to left',
                    explanation: 'Combine R₃ + R₄ in series, then in parallel with R₂:',
                    equation:
                      'R_{34} = R_3 + R_4 = 2 + 4 = 6 Ω\nR_p = (R_2 × R_{34}) / (R_2 + R_{34}) = (6 × 6) / 12 = 3 Ω\n∴  R_{eq} = R_1 + R_p = 4 + 3 = 7 Ω',
                  },
                  {
                    stepTitle: 'Step 2: Find source current I_s and branch current I₄',
                    explanation: 'Apply Ohm’s Law and the Current Divider Rule:',
                    equation:
                      'I_s = 30 / 7 = 4.29 A\nI_4 = I_s · [ R_2 / (R_2 + R_{34}) ]\n∴  I_4 = 4.29 × (6 / 12) = 2.14 A',
                  },
                ],
              },
              {
                id: 'u02-b6',
                type: 'theory',
                priorityTier: 4,
                sourceCitation:
                  'Syllabus Book · Robert L. Boylestad (Introductory Circuit Analysis, Ch. 7)',
                title:
                  'Balanced Wheatstone Bridge Condition & Zero-Galvanometer Current Proof',
                summaryText:
                  'A 4-arm Wheatstone bridge is balanced (I_G = 0 A) when the products of opposite arm resistances are equal: R₁R₄ = R₂R₃.',
                equations: [
                  {
                    label: 'Balanced Wheatstone Bridge Ratio',
                    formula: 'R_1 / R_2 = R_3 / R_4   ⟺   R_1 R_4 = R_2 R_3   (when I_G = 0)',
                  },
                ],
              },
            ],
          },
          {
            id: 'eece1111-ch03',
            unitNumber: 'Module 03',
            title: 'Techniques for Circuit Analysis',
            summary:
              'Nodal and mesh analysis including supernode, supermesh. Techniques of General DC/AC Circuit Analysis (Containing both independent and dependent sources) Node-voltage method, Mesh-current method, Source Transformations.',
            estimatedMinutes: 40,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u03-b1',
                type: 'definition',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · Lecture 07 (Professor’s Supernode & Supermesh Rules)',
                title: 'Supernode & Supermesh Constraint Equations',
                summaryText:
                  'A Supernode encloses a floating voltage source between two non-reference nodes; a Supermesh bypasses a current source shared by two adjacent meshes.',
                paragraphs: [
                  'When a voltage source (independent or dependent) is connected between two non-reference nodes, the current through that voltage source is unknown, preventing a standalone KCL equation at either node. Enclose both nodes and the voltage source inside a dashed surface called a Supernode.',
                  'Similarly, when a current source lies on the boundary shared by two meshes, exclude the shared branch to form a single outer KVL loop (Supermesh), and write the current source relation at the shared branch.',
                ],
                table: {
                  caption:
                    'Table 3.1 — Comparison of Supernode vs. Supermesh Formulations',
                  headers: [
                    'Feature',
                    'Supernode (Nodal Analysis)',
                    'Supermesh (Mesh Analysis)',
                  ],
                  rows: [
                    [
                      'Triggering Element',
                      'Voltage source between two non-reference nodes',
                      'Current source shared between two meshes',
                    ],
                    [
                      'Equation 1 (Conservation)',
                      'Apply KCL across the outer Supernode boundary',
                      'Apply KVL around the combined outer Supermesh perimeter',
                    ],
                    [
                      'Equation 2 (Constraint)',
                      'Apply KVL inside the Supernode: v_plus − v_minus = V_source',
                      'Apply KCL at the shared branch: i_mesh2 − i_mesh1 = I_source',
                    ],
                  ],
                },
                professorTip:
                  'Each Supernode reduces the number of required KCL equations by 1 (replaced by 1 simple voltage constraint equation). Never write KCL at an individual node inside a Supernode alone!',
              },
              {
                id: 'u03-b2',
                type: 'pyq',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · Final Exam 2023 Q3(b) & 2021 Q3(a)',
                title: 'Nodal Analysis with a Floating Supernode & Dependent Source',
                summaryText:
                  'Solve for node voltages v₁ and v₂ when a 10 V source connects Node 1 and Node 2.',
                examYears: ['2023', '2021'],
                marks: '7 Marks',
                problemStatement:
                  'In a two-node circuit with reference ground at the bottom, an independent current source of 2 A enters Node 1, a 2 Ω resistor connects Node 1 to ground, a 4 Ω resistor connects Node 2 to ground, a 10 Ω resistor lies in parallel with a 10 V voltage source (+ terminal at Node 1, − terminal at Node 2), and a 7 A current source leaves Node 2. Find node voltages v₁ and v₂.',
                givenData: [
                  'Current entering Node 1: I_in = 2 A; Current leaving Node 2: I_out = 7 A',
                  'Shunt resistors to ground: R₁ = 2 Ω (at Node 1), R₂ = 4 Ω (at Node 2)',
                  'Supernode voltage source: v₁ − v₂ = 10 V',
                ],
                solutionSteps: [
                  {
                    stepTitle:
                      'Step 1: Discard the 10 Ω resistor in parallel with the ideal 10 V source during Supernode KCL',
                    explanation:
                      'Any resistor connected strictly between the two nodes of a Supernode has its current both leaving and re-entering the same Supernode surface, canceling out in KCL:',
                    equation:
                      '∑ i_entering = ∑ i_leaving  ⇒  2 = (v₁ / 2) + (v₂ / 4) + 7',
                  },
                  {
                    stepTitle: 'Step 2: Simplify the Supernode KCL equation',
                    explanation: 'Multiply through by 4 to clear fractions:',
                    equation: '2v₁ + v₂ = −20   (Equation 1)',
                  },
                  {
                    stepTitle:
                      'Step 3: Apply the Supernode voltage constraint and solve',
                    explanation: 'Substitute v₁ = v₂ + 10 into Equation 1:',
                    equation:
                      '2(v₂ + 10) + v₂ = −20  ⇒  3v₂ = −40  ⇒  v₂ = −13.33 V\nv₁ = −13.33 + 10 = −3.33 V',
                  },
                ],
                finalAnswer: 'v₁ = −3.33 V,  v₂ = −13.33 V',
              },
              {
                id: 'u03-b3',
                type: 'theory',
                priorityTier: 3,
                sourceCitation:
                  'Professor-Followed Book · Alexander & Sadiku (6th Ed.), Ch. 3 & Ch. 4',
                title:
                  'Source Transformation & Nodal/Mesh Equations by Inspection',
                summaryText:
                  'A practical voltage source V_s in series with R converts to an equivalent current source I_s = V_s/R in parallel with R.',
                paragraphs: [
                  'Source Transformation replaces a voltage source v_s in series with a resistor R by a current source i_s = v_s / R in parallel with the same resistor R (or vice versa), preserving terminal v-i characteristics.',
                  'When a linear resistive network contains no dependent sources, the Nodal Conductance Matrix [G][v] = [i] and Mesh Resistance Matrix [R][i] = [v] are symmetric and can be written directly by inspection.',
                ],
                equations: [
                  {
                    label: 'Source Transformation Equivalence',
                    formula: 'v_s = i_s · R   ⟺   i_s = v_s / R',
                    units: 'Applies to both independent and dependent sources',
                  },
                ],
              },
              {
                id: 'u03-b4',
                type: 'example',
                priorityTier: 4,
                sourceCitation:
                  'Syllabus Book · R. C. Dorf & J. A. Svoboda (Introduction to Electric Circuits, Ch. 4)',
                title:
                  'Cramer’s Rule Solution for 2-Mesh Network with Dependent CCVS',
                summaryText:
                  'Move all dependent source terms involving mesh currents to the left-hand resistance matrix before applying Cramer’s Rule.',
                problemStatement:
                  'A two-mesh circuit has Mesh 1 with a 20 V source, a 2 Ω series resistor, and a shared 4 Ω resistor with Mesh 2. Mesh 2 contains the shared 4 Ω resistor, a 6 Ω resistor, and a dependent voltage source 2i₁ opposing i₂. Find mesh currents i₁ and i₂.',
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Write KVL for Mesh 1 and Mesh 2',
                    explanation: 'Group coefficients of i₁ and i₂:',
                    equation:
                      'Mesh 1:  6i_1 − 4i_2 = 20\nMesh 2:  −2i_1 + 10i_2 = 0  ⇒  i_1 = 5i_2\nSubstituting i_1 = 5i_2 into Mesh 1:\n  6(5i_2) − 4i_2 = 20  ⇒  26i_2 = 20\n∴  i_2 = 10 / 13 ≈ 0.77 A,   i_1 = 50 / 13 ≈ 3.85 A',
                  },
                ],
              },
            ],
          },
          {
            id: 'eece1111-ch04',
            unitNumber: 'Module 04',
            title: 'DC Network Theorem',
            summary:
              "Thevenin's theorem, Norton's theorem and superposition theorem with applications in circuits having independent and dependent sources, Millman's theorem, Substitution theorem, Maximum power transfer theorem and Reciprocity Theorem.",
            estimatedMinutes: 40,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u04-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · Lecture 10 (Three Cases for Finding R_Th)',
                title: 'Three Standard Cases for Computing Thevenin Resistance (R_Th)',
                summaryText:
                  'How to find R_Th for circuits with (Case 1) only independent sources, (Case 2) both independent & dependent sources, and (Case 3) only dependent sources.',
                paragraphs: [
                  'Choosing the right method to compute R_Th depends strictly on whether dependent sources exist inside the linear two-terminal network.',
                ],
                table: {
                  caption:
                    'Table 4.1 — Complete Procedure for Finding Thevenin Equivalent (V_Th, R_Th)',
                  headers: [
                    'Circuit Case',
                    'V_Th Calculation',
                    'R_Th Calculation Procedure',
                  ],
                  rows: [
                    [
                      'Case 1: Independent Sources Only',
                      'Find open-circuit voltage v_oc across terminals a-b',
                      'Turn off all independent sources (Voltage source → Short, Current source → Open) and find R_eq.',
                    ],
                    [
                      'Case 2: Both Independent & Dependent Sources',
                      'Find open-circuit voltage v_oc across terminals a-b',
                      'Keep dependent sources active! Either (a) apply test source v_o = 1 V after deactivating independent sources (R_Th = v_o/i_o), or (b) find i_sc and compute R_Th = v_oc / i_sc.',
                    ],
                    [
                      'Case 3: Dependent Sources Only (No Independent Sources)',
                      'V_Th = 0 V identically (dead active network)',
                      'Apply external test voltage v_o = 1 V (or i_o = 1 A) at terminals a-b and calculate R_Th = v_o / i_o.',
                    ],
                  ],
                },
                professorTip:
                  'Never turn off a dependent source when calculating R_Th or using Superposition! Also remember that power cannot be found by summing individual Superposition powers (p ≠ p₁ + p₂) because p = i²R is nonlinear.',
              },
              {
                id: 'u04-b2',
                type: 'definition',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · Final Exam 2023 Q4(a), 2022 Q4(a), 2020 Q4(b)',
                title: 'Maximum Power Transfer Theorem & Proof (dP_L / dR_L = 0)',
                summaryText:
                  'A resistive load R_L receives maximum power from a linear DC network when R_L = R_Th, yielding P_max = V_Th² / (4R_Th) at 50% efficiency.',
                examYears: ['2023', '2022', '2020'],
                marks: '6 Marks',
                paragraphs: [
                  'Replacing any linear circuit connected to a variable load resistor R_L with its Thevenin equivalent (V_Th in series with R_Th), the load current is I_L = V_Th / (R_Th + R_L) and the load power is P_L = I_L² · R_L.',
                  'Differentiating P_L with respect to R_L using the quotient rule and setting dP_L/dR_L = 0 proves that maximum power is transferred when the load resistance matches the internal Thevenin resistance (R_L = R_Th).',
                ],
                equations: [
                  {
                    label: 'Load Power as Function of R_L',
                    formula: 'P_L = [V_{Th} / (R_{Th} + R_L)]² · R_L',
                    units: 'Watts (W)',
                  },
                  {
                    label: 'Zero-Derivative Optimality Condition',
                    formula:
                      'dP_L / dR_L = V_{Th}² · [(R_{Th} + R_L)² − 2R_L(R_{Th} + R_L)] / (R_{Th} + R_L)⁴ = 0  ⇒  R_L = R_{Th}',
                    units: 'Ohms (Ω)',
                  },
                  {
                    label: 'Maximum Transferred Power Formula',
                    formula: 'P_{max} = V_{Th}² / (4 · R_{Th})',
                    units: 'Watts (W) at η = 50% efficiency',
                  },
                ],
              },
              {
                id: 'u04-b3',
                type: 'theory',
                priorityTier: 3,
                sourceCitation:
                  'Professor-Followed Book · B. L. Theraja Vol. I & Boylestad Ch. 9',
                title:
                  'Millman’s Theorem, Substitution Theorem & Reciprocity Theorem',
                summaryText:
                  'Millman’s Theorem combines N parallel voltage branches into a single equivalent source V_eq = (∑ V_k G_k) / (∑ G_k).',
                paragraphs: [
                  'Millman’s Theorem simplifies parallel branches of voltage sources in series with resistors by converting each branch to its Norton current equivalent, summing the parallel conductances G_k = 1/R_k, and converting back to a single Thevenin source.',
                  'The Reciprocity Theorem states that in any linear bilateral single-source network, the ratio of excitation voltage in loop A to the response current in loop B remains invariant when the positions of the voltage source and ammeter are interchanged.',
                ],
                equations: [
                  {
                    label: 'Millman’s Equivalent Voltage & Resistance',
                    formula: 'V_{eq} = (∑_{k=1}^N V_k · G_k) / (∑_{k=1}^N G_k),   R_{eq} = 1 / (∑_{k=1}^N G_k)',
                    units: 'G_k = 1 / R_k (Siemens)',
                  },
                ],
              },
              {
                id: 'u04-b4',
                type: 'example',
                priorityTier: 4,
                sourceCitation:
                  'Syllabus Book · Robert L. Boylestad & R. P. Ward (Ch. 9)',
                title:
                  'Worked Millman’s Theorem Problem for Three Parallel Battery Branches',
                summaryText:
                  'Find the terminal voltage V_L across a 10 Ω load fed by three parallel branches: (12 V, 2 Ω), (6 V, 3 Ω), and (24 V, 6 Ω).',
                problemStatement:
                  'Three parallel DC voltage branches — Branch 1 (12 V in series with 2 Ω), Branch 2 (6 V in series with 3 Ω), and Branch 3 (24 V in series with 6 Ω) — supply a common load resistor R_L = 9 Ω. Find V_eq, R_eq, and load current I_L using Millman’s Theorem.',
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Compute ∑ V_k G_k and ∑ G_k',
                    explanation: 'With G₁ = 1/2 S, G₂ = 1/3 S, G₃ = 1/6 S:',
                    equation:
                      '∑ G_k = 1 / 2 + 1 / 3 + 1 / 6 = 1.0 S  ⇒  R_{eq} = 1.0 Ω\n∑ V_k G_k = 12(1 / 2) + 6(1 / 3) + 24(1 / 6) = 6 + 2 + 4 = 12 A\n∴  V_{eq} = 12 V,   R_{eq} = 1.0 Ω,   I_L = 12 / (1 + 9) = 1.2 A',
                  },
                ],
              },
            ],
          },
          {
            id: 'eece1111-ch05',
            unitNumber: 'Module 05',
            title: 'AC Network Theorem',
            summary:
              "Thevenin's theorem, Norton's theorem, superposition theorem, Millman's theorem, Substitution theorem, Maximum power transfer theorem and Reciprocity Theorem.",
            estimatedMinutes: 35,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u05-b1',
                type: 'theory',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · AC Network Theorems & Complex Conjugate Matching',
                title:
                  'Maximum Average Power Transfer Theorem in AC Sinusoidal Networks',
                summaryText:
                  'For a complex load impedance Z_L = R_L + jX_L connected to an AC Thevenin network Z_Th = R_Th + jX_Th, maximum average power occurs when Z_L = Z_Th* = R_Th − jX_Th.',
                paragraphs: [
                  'In sinusoidal steady-state AC circuits, all DC network theorems (Superposition, Thevenin, Norton, Millman, Substitution, and Reciprocity) extend directly to the frequency domain by replacing real voltages/currents with phasors (V, I) and resistances with complex impedances (Z = R + jX).',
                  'For Maximum Average Power Transfer to a variable complex load Z_L = R_L + jX_L, the load reactance must first cancel the Thevenin reactance (X_L = −X_Th) and the load resistance must match the Thevenin resistance (R_L = R_Th).',
                ],
                equations: [
                  {
                    label: 'Complex Conjugate Impedance Matching Condition',
                    formula: 'Z_L = Z_{Th}^*   ⟺   R_L = R_{Th}  and  X_L = −X_{Th}',
                    units: 'Ohms (Ω)',
                  },
                  {
                    label: 'Maximum Average AC Power Transferred (using RMS V_Th)',
                    formula: 'P_{max} = |V_{Th,rms}|² / (4 · R_{Th}) = |V_{Th,peak}|² / (8 · R_{Th})',
                    units: 'Watts (W)',
                  },
                  {
                    label: 'Purely Resistive Load Restriction (X_L = 0)',
                    formula: 'R_L = |Z_{Th}| = √(R_{Th}² + X_{Th}²)',
                    units: 'Ohms (Ω) when load reactance cannot be varied',
                  },
                ],
              },
              {
                id: 'u05-b2',
                type: 'pyq',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · PUST EECE Final Exam 2022 Q5(b) & 2021 Q5(c)',
                title:
                  'AC Thevenin Equivalent & Maximum Average Power Delivered to Load Z_L',
                summaryText:
                  'Given Z_Th = 4 + j3 Ω and V_Th = 20∠0° V (RMS), find Z_L for maximum average power and compute P_max.',
                examYears: ['2022', '2021'],
                marks: '6 Marks',
                problemStatement:
                  'An AC two-terminal network has a Thevenin open-circuit RMS voltage V_Th = 20∠0° V and Thevenin impedance Z_Th = 4 + j3 Ω. Determine (a) the complex load impedance Z_L for maximum average power transfer and P_max, and (b) the value of a purely resistive load R_L for maximum power.',
                solutionSteps: [
                  {
                    stepTitle: 'Part (a) & Part (b): Complex Conjugate vs. Purely Resistive Load',
                    explanation: 'Apply Z_L = Z_Th* for Part (a) and R_L = |Z_Th| for Part (b):',
                    equation:
                      '(a) Z_L = Z_{Th}^* = 4 − j3 Ω\n    P_{max} = |V_{Th,rms}|² / (4 R_{Th}) = 20² / (4 × 4)\n    ∴  Z_L = 4 − j3 Ω,   P_{max} = 25 W\n\n(b) For purely resistive load (X_L = 0):\n    R_L = √(4² + 3²)\n    ∴  R_L = 5 Ω',
                  },
                ],
              },
              {
                id: 'u05-b3',
                type: 'theory',
                priorityTier: 3,
                sourceCitation:
                  'Professor-Followed Book · Alexander & Sadiku (Ch. 10 & Ch. 11)',
                title:
                  'AC Superposition with Multi-Frequency Sources',
                summaryText:
                  'When AC sources operate at different angular frequencies ω₁ ≠ ω₂, phasors cannot be added directly; sum the time-domain responses.',
                equations: [
                  {
                    label: 'Multi-Frequency Superposition Rule',
                    formula: 'v(t) = v_{DC} + v_1(t; ω_1) + v_2(t; ω_2)',
                  },
                ],
              },
              {
                id: 'u05-b4',
                type: 'example',
                priorityTier: 4,
                sourceCitation:
                  'Syllabus Book · Corcoran & Kerchner (Alternating-Current Circuits)',
                title:
                  'AC Millman’s & Norton Phasor Equivalence in Parallel Impedance Branches',
                summaryText:
                  'Convert parallel AC voltage branches into Norton phasor currents I_N = V_k Y_k and sum admittances Y_eq = ∑ Y_k.',
                equations: [
                  {
                    label: 'AC Phasor Millman Formula',
                    formula: 'V_{eq} = (∑ V_k Y_k) / (∑ Y_k),   where Y_k = 1 / Z_k',
                  },
                ],
              },
            ],
          },
          {
            id: 'eece1111-ch06',
            unitNumber: 'Module 06',
            title: 'Sinusoidal Functions',
            summary:
              'Instantaneous current, voltage, power, effective current and voltage, phasors and complex quantities. Impedance, admittance, reactance, susceptance of RL, RC and RLC branches.',
            estimatedMinutes: 45,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u06-b1',
                type: 'theory',
                priorityTier: 1,
                sourceCitation:
                  'Class Note · Sinusoidal Steady-State, Phasors & RLC Branch Impedance',
                title:
                  'Phasor Representation, Complex Impedance (Z) & Admittance (Y) of RL, RC and RLC Branches',
                summaryText:
                  'Impedance Z = R + jX = |Z|∠θ (Ω) and Admittance Y = 1/Z = G + jB (S), where X_L = ωL and X_C = 1/(ωC).',
                paragraphs: [
                  'A sinusoidal waveform v(t) = V_m cos(ωt + φ) is represented in the phasor domain as V = V_m∠φ (or in RMS form as (V_m/√2)∠φ). Time differentiation d/dt corresponds to multiplying by jω, and integration ∫ dt corresponds to dividing by jω.',
                  'In an inductive branch (RL), voltage leads current by phase angle θ = tan⁻¹(X_L/R) > 0. In a capacitive branch (RC), current leads voltage (θ = −tan⁻¹(X_C/R) < 0).',
                ],
                table: {
                  caption:
                    'Table 6.1 — Impedance, Reactance, Admittance & Susceptance of Passive Elements',
                  headers: [
                    'Element / Branch',
                    'Impedance Z = R + jX (Ω)',
                    'Admittance Y = G + jB (S)',
                    'Phase Angle Relation',
                  ],
                  rows: [
                    [
                      'Resistor (R)',
                      'Z_R = R + j0',
                      'Y_R = G = 1/R',
                      'v(t) and i(t) in phase (θ = 0°)',
                    ],
                    [
                      'Inductor (L)',
                      'Z_L = jωL = jX_L',
                      'Y_L = −j / (ωL) = −jB_L',
                      'v(t) leads i(t) by 90°',
                    ],
                    [
                      'Capacitor (C)',
                      'Z_C = −j / (ωC) = −jX_C',
                      'Y_C = jωC = +jB_C',
                      'i(t) leads v(t) by 90°',
                    ],
                    [
                      'Series RLC Branch',
                      'Z = R + j(X_L − X_C)',
                      'Y = [R − j(X_L − X_C)] / [R² + (X_L − X_C)²]',
                      'tan θ = (X_L − X_C) / R',
                    ],
                  ],
                },
              },
              {
                id: 'u06-b2',
                type: 'pyq',
                priorityTier: 2,
                sourceCitation:
                  'Previous Year Question · PUST EECE Final Exam 2023 Q6(a) & 2021 Q6(b)',
                title:
                  'Series RLC Branch Impedance, Admittance, Power Factor & Average Power',
                summaryText:
                  'Calculate Z, Y, current phasor I, power factor cos θ, and average power P = V_rms I_rms cos θ for a series RLC branch.',
                examYears: ['2023', '2021'],
                marks: '7 Marks',
                problemStatement:
                  'A series RLC branch with R = 8 Ω, inductive reactance X_L = 12 Ω, and capacitive reactance X_C = 6 Ω is connected across an AC voltage source v(t) = 100√2 cos(314t) V. Find (1) total impedance Z and admittance Y, (2) RMS current I_rms and phase angle θ, and (3) power factor and average power absorbed.',
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Compute Z, Y, I_rms, and Average Power P',
                    explanation: 'Combine net reactance X = X_L − X_C = 12 − 6 = 6 Ω:',
                    equation:
                      'Z = 8 + j(12 − 6) = 8 + j6 = 10∠36.87° Ω\nY = 1 / Z = (8 − j6) / 100 = 0.08 − j0.06 S\nI_{rms} = V_{rms} / Z = (100∠0°) / (10∠36.87°) = 10∠−36.87° A\nPower factor:  pf = cos(36.87°) = 0.8 (lagging)\nAverage power: P = V_{rms} I_{rms} cos θ = 100 × 10 × 0.8\n∴  Z = 10∠36.87° Ω,   I_{rms} = 10∠−36.87° A,   P = 800 W (pf = 0.8 lagging)',
                  },
                ],
              },
              {
                id: 'u06-b3',
                type: 'theory',
                priorityTier: 3,
                sourceCitation:
                  'Professor-Followed Book · B. L. Theraja Vol. I (Ch. 11–13) & Alexander & Sadiku (Ch. 9)',
                title:
                  'Instantaneous Power p(t), Average Power P, Reactive Power Q & Complex Power S',
                summaryText:
                  'Complex power S = V_rms I_rms* = P + jQ (VA), where P = V_rms I_rms cos θ (W) and Q = V_rms I_rms sin θ (VAR).',
                equations: [
                  {
                    label: 'Complex, Active & Reactive Power Triangle',
                    formula: 'S = P + jQ = V_{rms} I_{rms}^*   |   |S| = √(P² + Q²),   pf = cos θ = P / |S|',
                  },
                ],
              },
              {
                id: 'u06-b4',
                type: 'example',
                priorityTier: 4,
                sourceCitation:
                  'Syllabus Book · Corcoran & Kerchner & Robert L. Boylestad (Ch. 15)',
                title:
                  'Series-Parallel Admittance Conversion (Conductance G & Susceptance B)',
                summaryText:
                  'For a parallel RL or RC branch, sum the conductances G = ∑ G_k and susceptances B = ∑ B_k directly.',
                equations: [
                  {
                    label: 'Series Impedance (R + jX) to Parallel Admittance (G + jB)',
                    formula: 'G = R / (R² + X²),   B = −X / (R² + X²)',
                  },
                ],
              },
            ],
          },
        ],
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
              "Conductors, Electrolytes and Electrolysis, Faraday's Laws of Electrolysis, Electrolytic Conductance, Theories for Electrolytic Conductance, Ionic Mobility, Kohlrausch's Law, Transference Number.",
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch02',
            unitNumber: 'Module 02',
            title: 'Electrochemical Cells (Electrolytic and Galvanic/Voltaic)',
            summary:
              'Electrode Reaction and Potentials, Reference Electrode, Reversible and Concentration Cells.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch03',
            unitNumber: 'Module 03',
            title: 'Chemical Equilibrium',
            summary:
              "Reversible and Irreversible Reaction, Chemical Equilibrium and its Dynamic Nature, Characteristics, Laws of Mass Action and Equilibrium Constant Kc, Kp and Kx, Le-Chatelier's Principles and Applications.",
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch04',
            unitNumber: 'Module 04',
            title: 'Chemical Kinetics',
            summary:
              'Rate of Chemical Reaction, Order and Molecularity of Reactions, Different Types of Rate Expressions, Methods of Determining Rate and Order, Effect of Temperature on Reaction Rate and Energy of Activation.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch05',
            unitNumber: 'Module 05',
            title: 'Solution and Colloid',
            summary:
              'Different Types of Solution, Concentration Units, Colloid and Colloidal Solution-Classification, Preparation, Purification, Properties, Protective Action and Application of Colloids.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch06',
            unitNumber: 'Module 06',
            title: 'Atomic Structure',
            summary:
              "Dalton's Atomic Theory, Fundamental Particles, Elementary Ideas on Rutherford Atom Model and Bohr Atom Model, Quantum Numbers, Shape of Atomic Orbitals, Pauli's Exclusion Principle, Electronic Configuration of Elements.",
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch07',
            unitNumber: 'Module 07',
            title: 'Periodic Classification of Elements',
            summary:
              'Modern Periodic Table, Periodic Classification of Elements, Correlation of Periodic Classification of Elements with Electronic Configuration, Investigation on Some Periodic Properties, Atomic and Ionic Radius, Ionization Potential, Electron Affinity and Electronegativity.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch08',
            unitNumber: 'Module 08',
            title: 'Electronic Theory of Valence and Chemical Bonding',
            summary:
              'Different Types of Chemical Bonds (Ionic, Covalent, Co-ordinate, Hydrogen and Metallic), Classification of Solids on the Basis of Bonding and their Properties, Hybridization of Atomic Orbitals and Shapes of Molecules, Molecular Orbitals, Bond Length and Bond Strength.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [],
          },
          {
            id: 'chem1101-ch09',
            unitNumber: 'Module 09',
            title: 'Chemistry of Transition Elements, Lanthanides and Actinides',
            summary:
              'Definitions, Electronic Configurations, Preparation (Nuclear Transformation), General Properties.',
            estimatedMinutes: 25,
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

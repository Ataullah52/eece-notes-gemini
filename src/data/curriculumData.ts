import type { NoteBlockType, PriorityTier } from '../utils/circuitMath';

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

export interface SubjectCourse {
  id: string;
  code: string;
  title: string;
  credits: number;
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
  subjects: SubjectCourse[];
}

export const CURRICULUM_SEMESTERS: SemesterEntry[] = [
  {
    id: 'eece11',
    code: 'EECE11',
    year: 1,
    semester: 1,
    title: '1st Year · 1st Semester',
    subtitle: 'Foundational DC Circuit Analysis, Calculus, Wave Physics & Structured Programming',
    totalCredits: 19.5,
    subjects: [
      {
        id: 'eece1111',
        code: 'EECE1111',
        title: 'Electrical Circuit I',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Fundamental circuit variables, charge, current, voltage, power, Passive Sign Convention, Ohm’s Law, Kirchhoff’s Laws (KCL & KVL), Nodal & Mesh Analysis, Circuit Theorems (Superposition, Thevenin, Norton, Maximum Power Transfer), and Magnetic Circuits.',
        professorFollowedBooks: [
          'Charles K. Alexander & Matthew N. O. Sadiku — Fundamentals of Electric Circuits (6th Edition)',
          'Robert L. Boylestad — Introductory Circuit Analysis (13th Edition)',
        ],
        syllabusRecommendedBooks: [
          'James W. Nilsson & Susan A. Riedel — Electric Circuits (11th Edition)',
          'William H. Hayt, Jack E. Kemmerly & Steven M. Durbin — Engineering Circuit Analysis',
        ],
        chapters: [
          {
            id: 'eece1111-u01',
            unitNumber: 'Unit 01',
            title: 'Circuit Variables, Power & Passive Sign Convention',
            summary:
              'SI base & derived units, relationship between charge q(t) and current i(t), voltage work definition, Passive Sign Convention (p = ±vi), and Law of Conservation of Energy in closed networks.',
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
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q1(a), 2021 Q1(a), 2019 Q1(b)',
                title: 'Fundamental Definitions: Electric Charge, Current, Voltage & Energy',
                summaryText:
                  'Formal mathematical definitions of charge q, current i = dq/dt, voltage v_ab = dw/dq, and energy w = ∫ p dt.',
                examYears: ['2023', '2021', '2019'],
                marks: '4 Marks',
                paragraphs: [
                  'Electric Charge (q) is the fundamental electrical property of atomic matter, measured in Coulombs (C). One electron carries a negative charge of −1.602 × 10^(-19) C, meaning 1 C equals the charge of 6.24 × 10^(18) electrons.',
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
                  caption: 'Table 1.1 — Complete Four-Case Power Sign Matrix & Dependent Source Parameters',
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
                sourceCitation: 'Class Note · Lecture 03 Worked Problem (Professor Board Example)',
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
                sourceCitation: 'Previous Year Question · Semester Final 2023 Q1(c) & 2020 Q1(b)',
                title: 'Conservation of Power & Unknown Dependent Source Current in a 5-Element Network',
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
                    equation: 'p1 + p2 + p3 + p4 + p5 = 0   =>   −205 + 60 + 45 + 30 + p5 = 0',
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
                sourceCitation: 'Professor-Followed Book · Alexander & Sadiku (6th Ed.), Ch. 1, Sec. 1.6',
                title: 'Independent vs. Linear Dependent Sources (VCVS, CCVS, VCCS, CCCS)',
                summaryText:
                  'Circle symbols denote independent sources; diamond symbols denote dependent sources controlled by a remote voltage or current.',
                paragraphs: [
                  'An ideal independent source (drawn as a circle) maintains a specified terminal voltage or current completely independent of the rest of the circuit. An ideal dependent (controlled) source (drawn as a diamond) has its output governed by a voltage or current elsewhere in the network.',
                  'Pay close attention to the proportionality constant (gain) units: whereas VCVS (μ) and CCCS (β) gains are dimensionless (V/V and A/A), Transresistance r_m in a CCVS has units of Ohms (V/A = Ω), and Transconductance g_m in a VCCS has units of Siemens (A/V = S).',
                ],
              },
              {
                id: 'u01-b7',
                type: 'memorize',
                priorityTier: 4,
                sourceCitation: 'Syllabus Recommended Book · Nilsson & Riedel (11th Ed.), Ch. 1, Table 1.3',
                title: 'Standard Engineering SI Prefixes & Utility Energy Conversion (kWh to Joules)',
                summaryText:
                  '1 kWh = 3.6 × 10^6 Joules = 3.6 MJ. Complete engineering metric prefix ladder from femto (10^-15) to Tera (10^12).',
                paragraphs: [
                  'Electric utility bills measure energy in kilowatt-hours (kWh) rather than Joules because 1 J is too small for power engineering. Always convert kWh to Joules when solving fundamental charge/work problems.',
                ],
                equations: [
                  {
                    label: 'Kilowatt-Hour to Joules Conversion',
                    formula: '1 kWh = 1000 W × 3600 s = 3.6 × 10^6 J = 3.6 MJ',
                    units: 'Joules (J)',
                  },
                ],
              },
            ],
          },
          {
            id: 'eece1111-u02',
            unitNumber: 'Unit 02',
            title: 'Basic Laws: Ohm’s Law, Nodes, Loops, KCL & KVL',
            summary:
              'Linear resistors, conductance G = 1/R, open & short circuit edge cases, network topology (b = l + n − 1), Kirchhoff’s Current Law (KCL), Kirchhoff’s Voltage Law (KVL), Voltage/Current Dividers, and Wye-Delta (Y-Δ) transformations.',
            estimatedMinutes: 45,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u02-b1',
                type: 'theory',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 04 (Professor Board Derivation & Curve Analysis)',
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
                sourceCitation: 'Class Note · Lecture 05 (Kirchhoff’s Laws & Two-Loop T-Network)',
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
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q2(a), 2022 Q2(b), 2019 Q2(a)',
                title: 'Voltage Divider, Current Divider & Wye-Delta (Y-Δ) Conversion Formulas',
                summaryText:
                  'Complete formula sheet for two-resistor dividers and Δ ↔ Y bridge conversions.',
                examYears: ['2023', '2022', '2019'],
                paragraphs: [
                  'When a bridge network (such as a Wheatstone bridge) has neither series nor parallel resistor pairs, apply a Delta-to-Wye (Δ → Y) or Wye-to-Delta (Y → Δ) transformation to collapse the network.',
                ],
                table: {
                  caption: 'Table 2.1 — Divider Rules & Wye-Delta (Y ↔ Δ) Equivalent Transformations',
                  headers: ['Transformation / Rule', 'Governing Equation', 'Balanced Case (Equal R)'],
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
                sourceCitation: 'Previous Year Question · Final Exam 2022 Q2(c) & 2020 Q2(b)',
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
                    stepTitle: 'Step 1: Convert the upper Δ (R_a, R_b, R_c) into an equivalent Y (R₁, R₂, R₃)',
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
            ],
          },
          {
            id: 'eece1111-u03',
            unitNumber: 'Unit 03',
            title: 'Methods of Analysis: Nodal, Supernode, Mesh & Supermesh',
            summary:
              'Systematic Nodal Analysis (KCL + Ohm’s Law), Supernode handling for floating voltage sources, Mesh Analysis (KVL + Ohm’s Law), Supermesh handling for shared current sources, and Cramer’s / Inspection matrix formulation.',
            estimatedMinutes: 40,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u03-b1',
                type: 'definition',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 07 (Professor’s Supernode & Supermesh Rules)',
                title: 'Supernode & Supermesh Constraint Equations',
                summaryText:
                  'A Supernode encloses a floating voltage source between two non-reference nodes; a Supermesh bypasses a current source shared by two adjacent meshes.',
                paragraphs: [
                  'When a voltage source (independent or dependent) is connected between two non-reference nodes, the current through that voltage source is unknown, preventing a standalone KCL equation at either node. Enclose both nodes and the voltage source inside a dashed surface called a Supernode.',
                  'Similarly, when a current source lies on the boundary shared by two meshes, exclude the shared branch to form a single outer KVL loop (Supermesh), and write the current source relation at the shared branch.',
                ],
                table: {
                  caption: 'Table 3.1 — Comparison of Supernode vs. Supermesh Formulations',
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
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q3(b) & 2021 Q3(a)',
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
                    stepTitle: 'Step 1: Discard the 10 Ω resistor in parallel with the ideal 10 V source during Supernode KCL',
                    explanation:
                      'Any resistor connected strictly between the two nodes of a Supernode has its current both leaving and re-entering the same Supernode surface, canceling out in KCL:',
                    equation: '∑ i_entering = ∑ i_leaving  ⇒  2 = (v₁ / 2) + (v₂ / 4) + 7',
                  },
                  {
                    stepTitle: 'Step 2: Simplify the Supernode KCL equation',
                    explanation: 'Multiply through by 4 to clear fractions:',
                    equation: '2v₁ + v₂ = −20   (Equation 1)',
                  },
                  {
                    stepTitle: 'Step 3: Apply the Supernode voltage constraint and solve',
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
                sourceCitation: 'Professor-Followed Book · Alexander & Sadiku (6th Ed.), Ch. 3, Sec. 3.6',
                title: 'Nodal & Mesh Equations by Inspection (Conductance & Resistance Matrices)',
                summaryText:
                  'For circuits with only independent sources, write [G][v] = [i] or [R][i] = [v] directly by inspection.',
                paragraphs: [
                  'When a linear resistive network contains no dependent sources, the Nodal Conductance Matrix [G] and Mesh Resistance Matrix [R] are strictly symmetric (G_jk = G_kj and R_jk = R_kj).',
                  'Diagonal entry G_kk is the sum of all conductances connected to node k, while off-diagonal entry G_kj (k ≠ j) is the negative sum of conductances directly connecting node k and node j.',
                ],
              },
            ],
          },
          {
            id: 'eece1111-u04',
            unitNumber: 'Unit 04',
            title: 'Circuit Theorems: Superposition, Thevenin, Norton & Maximum Power',
            summary:
              'Linearity property, Superposition principle, Source Transformation, Thevenin’s Theorem (V_Th, R_Th), Norton’s Theorem (I_N, R_N), and Maximum Power Transfer Theorem (R_L = R_Th, P_max = V_Th² / 4R_Th).',
            estimatedMinutes: 40,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'u04-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 10 (Three Cases for Finding R_Th)',
                title: 'Three Standard Cases for Computing Thevenin Resistance (R_Th)',
                summaryText:
                  'How to find R_Th for circuits with (Case 1) only independent sources, (Case 2) both independent & dependent sources, and (Case 3) only dependent sources.',
                paragraphs: [
                  'Choosing the right method to compute R_Th depends strictly on whether dependent sources exist inside the linear two-terminal network.',
                ],
                table: {
                  caption: 'Table 4.1 — Complete Procedure for Finding Thevenin Equivalent (V_Th, R_Th)',
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
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q4(a), 2022 Q4(a), 2020 Q4(b)',
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
                    formula: 'dP_L / dR_L = V_{Th}² · [(R_{Th} + R_L)² − 2R_L(R_{Th} + R_L)] / (R_{Th} + R_L)⁴ = 0  ⇒  R_L = R_{Th}',
                    units: 'Ohms (Ω)',
                  },
                  {
                    label: 'Maximum Transferred Power Formula',
                    formula: 'P_{max} = V_{Th}² / (4 · R_{Th})',
                    units: 'Watts (W) at η = 50% efficiency',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'math1101',
        code: 'MATH1101',
        title: 'Differential & Integral Calculus',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Limits, continuity, differentiability, successive differentiation, Leibniz’s Theorem, Rolle’s & Mean Value Theorems, Taylor/Maclaurin series, Partial differentiation, Euler’s Theorem, Definite integrals, Reduction formulas, and Beta & Gamma functions.',
        professorFollowedBooks: [
          'Howard Anton, Irl Bivens & Stephen Davis — Calculus: Early Transcendentals (10th Edition)',
          'B. C. Das & B. N. Mukherjee — Differential Calculus & Integral Calculus',
        ],
        syllabusRecommendedBooks: [
          'Erwin Kreyszig — Advanced Engineering Mathematics (10th Edition)',
          'George B. Thomas — Thomas’ Calculus',
        ],
        chapters: [
          {
            id: 'math1101-u01',
            unitNumber: 'Unit 01',
            title: 'Successive Differentiation & Leibniz’s Theorem',
            summary:
              'Standard n-th derivatives of algebraic, trigonometric, and exponential functions; Leibniz’s Rule for the n-th derivative of a product u·v; and determination of y_n(0).',
            estimatedMinutes: 35,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'math1101-u01-b1',
                type: 'definition',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 03 (Leibniz Theorem Statement & Proof)',
                title: 'Leibniz’s Theorem for the n-th Derivative of a Product',
                summaryText:
                  'If u(x) and v(x) both possess derivatives up to the n-th order, then (uv)_n expands analogously to the Binomial Theorem.',
                paragraphs: [
                  'Leibniz’s Theorem enables direct computation of the n-th derivative of the product of two functions u(x) and v(x) without computing intermediate lower-order product derivatives. In practice, always choose v(x) to be the polynomial factor (such as x² or 1 − x²) so that the series terminates after 2 or 3 terms.',
                ],
                equations: [
                  {
                    label: 'Leibniz’s Product Expansion',
                    formula: '(u · v)_n = u_n v + ⁿC₁ u_{n-1} v₁ + ⁿC₂ u_{n-2} v₂ + ··· + u v_n',
                  },
                  {
                    label: 'n-th Derivative of sin(ax + b)',
                    formula: 'Dⁿ [sin(ax + b)] = aⁿ · sin(ax + b + nπ/2)',
                  },
                  {
                    label: 'n-th Derivative of (ax + b)⁻¹',
                    formula: 'Dⁿ [(ax + b)⁻¹] = (−1)ⁿ · n! · aⁿ / (ax + b)^{n+1}',
                  },
                ],
                professorTip:
                  'When proving second-order differential equations like (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − n²y_n = 0, first eliminate radicals and fractions from y₁ BEFORE differentiating a second time to get y₂, then apply Leibniz’s Theorem (Dⁿ) to each term.',
              },
              {
                id: 'math1101-u01-b2',
                type: 'pyq',
                priorityTier: 2,
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q2(b), 2021 Q1(c)',
                title: 'Derivation of (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + m²)y_n = 0',
                summaryText:
                  'If y = e^{m·sin⁻¹x}, prove the n-th order recurrence relation and find y_n(0).',
                examYears: ['2023', '2021'],
                marks: '7 Marks',
                problemStatement:
                  'If y = e^{m · sin⁻¹x}, show that (1 − x²)y₂ − xy₁ − m²y = 0, and hence by Leibniz’s Theorem prove that (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + m²)y_n = 0.',
                givenData: ['y = e^{m · sin⁻¹x}'],
                solutionSteps: [
                  {
                    stepTitle: 'Step 1: Differentiate once and square both sides to eliminate the radical',
                    explanation:
                      'Compute y₁ = dy/dx and substitute y = e^{m·sin⁻¹x}:',
                    equation:
                      'y₁ = m · e^{m·sin⁻¹x} / √(1 − x²) = m·y / √(1 − x²)  ⇒  (1 − x²)y₁² = m²y²',
                  },
                  {
                    stepTitle: 'Step 2: Differentiate again and divide by 2y₁',
                    explanation: 'Differentiating with respect to x gives:',
                    equation:
                      '(1 − x²)(2y₁y₂) − 2x·y₁² = 2m²y·y₁  ⇒  (1 − x²)y₂ − xy₁ − m²y = 0',
                  },
                  {
                    stepTitle: 'Step 3: Apply Dⁿ to each term using Leibniz’s Theorem',
                    explanation:
                      'Let u = y₂ (or y₁) and v = (1 − x²) (or x) so the binomial expansion stops at v₂ = −2:',
                    equation:
                      '[(1−x²)y_{n+2} − 2nx·y_{n+1} − n(n−1)y_n] − [x·y_{n+1} + n·y_n] − m²y_n = 0\n⇒ (1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + m²)y_n = 0',
                  },
                ],
                finalAnswer: '(1 − x²)y_{n+2} − (2n + 1)xy_{n+1} − (n² + m²)y_n = 0 (Proved)',
              },
            ],
          },
        ],
      },
      {
        id: 'phy1101',
        code: 'PHY1101',
        title: 'Physics I: Waves, Optics & Thermodynamics',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Simple Harmonic Motion (SHM), damped and forced mechanical/electrical oscillations, resonance, Lissajous figures, wave interference, Newton’s rings, diffraction gratings, polarization, and laws of thermodynamics.',
        professorFollowedBooks: [
          'David Halliday, Robert Resnick & Jearl Walker — Fundamentals of Physics (10th Edition)',
          'Brij Lal & N. Subrahmanyam — A Textbook of Optics',
        ],
        syllabusRecommendedBooks: [
          'A. P. French — Vibrations and Waves (MIT Introductory Physics Series)',
        ],
        chapters: [
          {
            id: 'phy1101-u01',
            unitNumber: 'Unit 01',
            title: 'Damped & Forced Harmonic Oscillations & Sharpness of Resonance',
            summary:
              'Differential equation of damped oscillation, underdamped/critically damped/overdamped regimes, quality factor Q, and amplitude resonance in forced oscillators.',
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
                  caption: 'Table 1.1 — Three Damping Regimes & Mechanical–Electrical RLC Analogy',
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
        ],
      },
      {
        id: 'cse1101',
        code: 'CSE1101',
        title: 'Computer Programming & Structured C',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Data types, operators, control structures, functions, recursion, arrays, strings, pointers, dynamic memory allocation (malloc, calloc, free), structures, unions, and file I/O in C.',
        professorFollowedBooks: [
          'Herbert Schildt — Teach Yourself C / C: The Complete Reference',
          'E. Balagurusamy — Programming in ANSI C (8th Edition)',
        ],
        syllabusRecommendedBooks: [
          'Brian W. Kernighan & Dennis M. Ritchie — The C Programming Language (2nd Edition)',
        ],
        chapters: [
          {
            id: 'cse1101-u01',
            unitNumber: 'Unit 01',
            title: 'Pointers, Call-by-Reference & Dynamic Memory Allocation',
            summary:
              'Address-of (&) and dereference (*) operators, pointer arithmetic, array-pointer equivalence, and heap memory management.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'cse1101-u01-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 08 (Pointer & Dynamic Memory Comparison)',
                title: 'Comparison of malloc(), calloc(), realloc(), and free()',
                summaryText:
                  'Key differences in arguments, zero-initialization behavior, and return values for C standard library heap functions.',
                paragraphs: [
                  'Dynamic memory allocation in <stdlib.h> allocates memory on the heap at runtime. Always check whether the returned pointer is NULL before dereferencing.',
                ],
                table: {
                  caption: 'Table 1.1 — Standard Heap Allocation Functions in <stdlib.h>',
                  headers: ['Function', 'Prototype Syntax', 'Memory Initialization', 'Primary Exam Note'],
                  rows: [
                    [
                      'malloc()',
                      'ptr = (int*) malloc(n * sizeof(int));',
                      'Contains garbage values',
                      'Single size argument in bytes; fastest allocation',
                    ],
                    [
                      'calloc()',
                      'ptr = (int*) calloc(n, sizeof(int));',
                      'Initializes all bits to zero (0)',
                      'Takes two arguments: element count n and element size',
                    ],
                    [
                      'realloc()',
                      'ptr = (int*) realloc(ptr, new_size);',
                      'Preserves existing bytes up to min size',
                      'Resizes previously allocated block dynamically',
                    ],
                    [
                      'free()',
                      'free(ptr); ptr = NULL;',
                      'Releases block back to heap',
                      'Set pointer to NULL after freeing to prevent dangling pointers',
                    ],
                  ],
                },
              },
            ],
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
    subtitle: 'Transient RC/RL Circuits, Sinusoidal AC Steady-State, Phasors & Differential Equations',
    totalCredits: 20.25,
    subjects: [
      {
        id: 'eece1211',
        code: 'EECE1211',
        title: 'Electrical Circuit II (Transients & AC Networks)',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'First-order RC and RL transient response, step response, second-order RLC circuits, sinusoids and phasors, complex impedance Z, AC nodal/mesh analysis, AC power (real P, reactive Q, apparent S, power factor cos φ), and balanced 3-phase systems.',
        professorFollowedBooks: [
          'Charles K. Alexander & Matthew N. O. Sadiku — Fundamentals of Electric Circuits (Ch. 7–12)',
        ],
        syllabusRecommendedBooks: [
          'Robert L. Boylestad — Introductory Circuit Analysis (AC Chapters)',
        ],
        chapters: [
          {
            id: 'eece1211-u01',
            unitNumber: 'Unit 01',
            title: 'First-Order RC & RL Transient Circuits & Time Constant (τ)',
            summary:
              'Capacitor continuity v_C(0⁺) = v_C(0⁻), inductor continuity i_L(0⁺) = i_L(0⁻), natural vs. step response, and the universal first-order transient formula x(t) = x(∞) + [x(0⁺) − x(∞)]e^{−t/τ}.',
            estimatedMinutes: 35,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece1211-u01-b1',
                type: 'theory',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 02 (Universal First-Order Step Response)',
                title: 'Universal First-Order Transient Equation & RC Time Constant (τ = R_Th·C)',
                summaryText:
                  'v_C(t) = v_C(∞) + [v_C(0⁺) − v_C(∞)] · e^{−t/τ} for t ≥ 0, where τ = R_Th · C.',
                paragraphs: [
                  'The voltage across a capacitor cannot change instantaneously (v_C(0⁺) = v_C(0⁻)) because doing so would require infinite current (i_C = C dv_C/dt). In DC steady state (just before a switch moves or as t → ∞), a capacitor acts as an open circuit.',
                  'One time constant τ = R_Th · C is the time required for the charging capacitor voltage to reach 63.2% of its final change (or decay to 36.8% of its initial value). For practical engineering purposes, the transient settles completely at t = 5τ (99.3% complete).',
                ],
                equations: [
                  {
                    label: 'Universal First-Order Step Response',
                    formula: 'v_C(t) = v_C(∞) + [v_C(0⁺) − v_C(∞)] · e^{−t / τ}',
                    units: 'Volts (V), t ≥ 0',
                  },
                  {
                    label: 'RC & RL Time Constants',
                    formula: 'τ_{RC} = R_{Th} · C     and     τ_{RL} = L / R_{Th}',
                    units: 'Seconds (s)',
                  },
                ],
                interactiveDiagramId: 'rc-transient',
              },
            ],
          },
        ],
      },
      {
        id: 'math1201',
        code: 'MATH1201',
        title: 'Ordinary & Partial Differential Equations',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'First-order exact equations, integrating factors, linear ODEs with constant and variable coefficients (Cauchy-Euler), method of undetermined coefficients, variation of parameters, and Laplace transforms.',
        professorFollowedBooks: [
          'Dennis G. Zill — A First Course in Differential Equations with Modeling Applications',
        ],
        syllabusRecommendedBooks: [
          'Erwin Kreyszig — Advanced Engineering Mathematics',
        ],
        chapters: [
          {
            id: 'math1201-u01',
            unitNumber: 'Unit 01',
            title: 'Exact Differential Equations & Integrating Factors',
            summary:
              'Exactness condition ∂M/∂y = ∂N/∂x and systematic rules for finding Integrating Factors μ(x) or μ(y).',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'math1201-u01-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 02 (Integrating Factor Rules)',
                title: 'Test for Exactness & Integrating Factor (I.F.) Lookup Rules',
                summaryText:
                  'M(x,y)dx + N(x,y)dy = 0 is exact iff ∂M/∂y = ∂N/∂x.',
                paragraphs: [
                  'When ∂M/∂y ≠ ∂N/∂x, multiply the differential equation by an Integrating Factor μ(x,y) determined from the standard rules below.',
                ],
                table: {
                  caption: 'Table 1.1 — Standard Integrating Factor (I.F.) Rules for Non-Exact ODEs',
                  headers: ['Rule Condition', 'Integrating Factor μ', 'General Solution Formula'],
                  rows: [
                    [
                      '∂M/∂y = ∂N/∂x (Already Exact)',
                      'μ = 1',
                      '∫_{y const} M dx + ∫ (terms in N free of x) dy = C',
                    ],
                    [
                      '(∂M/∂y − ∂N/∂x) / N = f(x) only',
                      'μ(x) = e^{∫ f(x) dx}',
                      'Multiply by μ(x) and solve as exact',
                    ],
                    [
                      '(∂N/∂x − ∂M/∂y) / M = g(y) only',
                      'μ(y) = e^{∫ g(y) dy}',
                      'Multiply by μ(y) and solve as exact',
                    ],
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eece21',
    code: 'EECE21',
    year: 2,
    semester: 1,
    title: '2nd Year · 1st Semester',
    subtitle: 'Electronic Devices & Semiconductor Diodes/BJT/MOSFET, Energy Conversion I & Linear Algebra',
    totalCredits: 20.5,
    subjects: [
      {
        id: 'eece2111',
        code: 'EECE2111',
        title: 'Electronic Devices & Circuits I',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Semiconductor physics, PN junction diode characteristics, clipper and clamper circuits, Zener voltage regulators, Bipolar Junction Transistors (BJT) biasing and small-signal models, and MOSFET fundamentals.',
        professorFollowedBooks: [
          'Robert L. Boylestad & Louis Nashelsky — Electronic Devices and Circuit Theory (11th Edition)',
          'Adel S. Sedra & Kenneth C. Smith — Microelectronic Circuits (7th Edition)',
        ],
        syllabusRecommendedBooks: [
          'Donald A. Neamen — Microelectronics: Circuit Analysis and Design',
        ],
        chapters: [
          {
            id: 'eece2111-u01',
            unitNumber: 'Unit 01',
            title: 'PN Junction Diode Models, Clippers, Clampers & Zener Regulators',
            summary:
              'Shockley diode equation, Piecewise-Linear and Constant-Voltage-Drop (0.7 V) models, half/full-wave rectifiers, and Zener breakdown regulation.',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece2111-u01-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 03 (Diode Approximations & Clamper Steps)',
                title: 'Three Standard Silicon Diode Models & Clamper Analysis Algorithm',
                summaryText:
                  'Ideal Diode (V_D = 0 V), Constant Voltage Drop Model (V_D = 0.7 V for Si), and Piecewise Linear Model (V_D = 0.7 V + I_D·r_d).',
                paragraphs: [
                  'When analyzing diode clamper circuits, always begin your analysis on the half-cycle of the input waveform that forward-biases the diode so the capacitor charges immediately to a known voltage.',
                ],
                equations: [
                  {
                    label: 'Shockley Diode Equation',
                    formula: 'I_D = I_S · (e^{V_D / (n · V_T)} − 1)',
                    units: 'V_T ≈ 25.85 mV at T = 300 K',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'eece2113',
        code: 'EECE2113',
        title: 'Energy Conversion I (Transformers & Induction Machines)',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Single-phase and three-phase transformers, equivalent circuit referred to primary/secondary, open-circuit and short-circuit tests, voltage regulation, all-day efficiency, and three-phase induction motor torque-slip characteristics.',
        professorFollowedBooks: [
          'Stephen J. Chapman — Electric Machinery Fundamentals (5th Edition)',
        ],
        syllabusRecommendedBooks: [
          'B. L. Theraja & A. K. Theraja — A Textbook of Electrical Technology (Vol. II)',
        ],
        chapters: [
          {
            id: 'eece2113-u01',
            unitNumber: 'Unit 01',
            title: 'Transformer Equivalent Circuit, OC/SC Tests & Maximum Efficiency',
            summary:
              'Ideal vs. practical transformer, impedance referral (Z’ = a²Z), Open-Circuit (core loss) and Short-Circuit (copper loss) tests, and condition for maximum efficiency (P_cu = P_core).',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece2113-u01-b1',
                type: 'definition',
                priorityTier: 2,
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q1(b)',
                title: 'Condition for Maximum Transformer Efficiency',
                summaryText:
                  'A transformer achieves maximum efficiency at the load fraction x where variable copper loss equals constant core (iron) loss: I₂²R_eq2 = P_core.',
                examYears: ['2023', '2021'],
                marks: '6 Marks',
                paragraphs: [
                  'Core loss P_core (hysteresis + eddy current loss) depends on applied voltage and frequency and remains practically constant from no-load to full-load. Copper loss P_cu = I²R_eq varies with the square of the load current.',
                ],
                equations: [
                  {
                    label: 'Load kVA for Maximum Efficiency',
                    formula: 'S_{max,η} = S_{rated} × √(P_{core} / P_{cu,full-load})',
                    units: 'kVA',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eece22',
    code: 'EECE22',
    year: 2,
    semester: 2,
    title: '2nd Year · 2nd Semester',
    subtitle: 'Operational Amplifiers, Frequency Response, Synchronous & DC Machines',
    totalCredits: 20.5,
    subjects: [
      {
        id: 'eece2211',
        code: 'EECE2211',
        title: 'Electronic Circuits II (Op-Amps, Feedback & Oscillators)',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Differential amplifiers, ideal and practical Op-Amp configurations, active filters, feedback topologies, Barkhausen criterion, and sinusoidal/relaxation oscillators.',
        professorFollowedBooks: [
          'Adel S. Sedra & Kenneth C. Smith — Microelectronic Circuits',
          'Ramakant A. Gayakwad — Op-Amps and Linear Integrated Circuits',
        ],
        syllabusRecommendedBooks: [
          'Sergio Franco — Design with Operational Amplifiers and Analog Integrated Circuits',
        ],
        chapters: [
          {
            id: 'eece2211-u01',
            unitNumber: 'Unit 01',
            title: 'Ideal Op-Amp Virtual Short Rules & Summing/Instrumentation Amplifiers',
            summary:
              'Virtual short concept (v_+ = v_−) and zero input current (i_+ = i_− = 0), inverting/non-inverting gains, and CMRR.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece2211-u01-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 01 (Ideal Op-Amp Golden Rules)',
                title: 'Two Golden Rules of Negative-Feedback Ideal Op-Amps',
                summaryText:
                  'Rule 1: v_+ = v_− (Virtual Short). Rule 2: i_+ = i_− = 0 A (Infinite Input Impedance).',
                paragraphs: [
                  'When negative feedback is present around an ideal operational amplifier (A_OL → ∞, R_in → ∞, R_out = 0), apply Nodal Analysis at the inverting node (−) using the two golden rules.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eece31',
    code: 'EECE31',
    year: 3,
    semester: 1,
    title: '3rd Year · 1st Semester',
    subtitle: 'Continuous & Discrete Signals, Fourier/Laplace Analysis & Electromagnetics',
    totalCredits: 20.0,
    subjects: [
      {
        id: 'eece3111',
        code: 'EECE3111',
        title: 'Signals & Linear Systems',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Signal classification, LTI system properties (linearity, time-invariance, causality, BIBO stability), convolution integral/sum, Fourier Series, Fourier Transform, and unilateral/bilateral Laplace & Z-Transforms.',
        professorFollowedBooks: [
          'Alan V. Oppenheim & Alan S. Willsky — Signals and Systems (2nd Edition)',
        ],
        syllabusRecommendedBooks: [
          'B. P. Lathi — Linear Systems and Signals (3rd Edition)',
        ],
        chapters: [
          {
            id: 'eece3111-u01',
            unitNumber: 'Unit 01',
            title: 'Signal Properties, LTI System Tests & Convolution Integral',
            summary:
              'Energy vs. Power signals, step-by-step tests for linearity, time invariance, causality, and graphical convolution y(t) = x(t) * h(t).',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece3111-u01-b1',
                type: 'definition',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 02 (Energy vs. Power Signal Classification)',
                title: 'Total Signal Energy (E_∞) and Average Signal Power (P_∞)',
                summaryText:
                  'Energy signals have 0 < E_∞ < ∞ and P_∞ = 0; Periodic/Power signals have 0 < P_∞ < ∞ and E_∞ = ∞.',
                paragraphs: [
                  'Deterministic bounded periodic signals and unit step signals are Power Signals, whereas decaying transients that vanish as |t| → ∞ are Energy Signals.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eece32',
    code: 'EECE32',
    year: 3,
    semester: 2,
    title: '3rd Year · 2nd Semester',
    subtitle: 'Digital Signal Processing (DFT/FFT, FIR/IIR Filters), Communication Theory & Microprocessors',
    totalCredits: 20.5,
    subjects: [
      {
        id: 'eece3211',
        code: 'EECE3211',
        title: 'Digital Signal Processing',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Sampling theorem, aliasing, Z-transform ROC, Discrete Fourier Transform (DFT), Radix-2 FFT butterfly algorithms, and FIR/IIR digital filter design.',
        professorFollowedBooks: [
          'John G. Proakis & Dimitris G. Manolakis — Digital Signal Processing (4th Edition)',
        ],
        syllabusRecommendedBooks: [
          'Alan V. Oppenheim & Ronald W. Schafer — Discrete-Time Signal Processing',
        ],
        chapters: [
          {
            id: 'eece3211-u01',
            unitNumber: 'Unit 01',
            title: 'Nyquist-Shannon Sampling Theorem & Radix-2 FFT Complexity',
            summary:
              'Nyquist rate f_s ≥ 2f_max to prevent spectral aliasing, and N-point DFT vs. FFT computational savings.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece3211-u01-b1',
                type: 'memorize',
                priorityTier: 2,
                sourceCitation: 'Previous Year Question · Final Exam 2023 Q1(a)',
                title: 'Direct N-Point DFT vs. Radix-2 FFT Computational Complexity',
                summaryText:
                  'Direct DFT requires N² complex multiplications; Radix-2 FFT requires (N/2)·log₂(N) complex multiplications.',
                examYears: ['2023', '2021'],
                paragraphs: [
                  'For N = 1024 points, direct DFT requires 1,048,576 complex multiplications whereas Radix-2 FFT requires only 5,120 — a speed improvement factor of 204.8×.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eece41',
    code: 'EECE41',
    year: 4,
    semester: 1,
    title: '4th Year · 1st Semester',
    subtitle: 'Power System Analysis (Per-Unit, Load Flow, Faults) & Control System Engineering',
    totalCredits: 19.5,
    subjects: [
      {
        id: 'eece4111',
        code: 'EECE4111',
        title: 'Power System Analysis',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'Single-line diagrams, per-unit (p.u.) impedance conversions, Y_bus admittance matrix, Gauss-Seidel & Newton-Raphson load flow, symmetrical 3-phase faults, and symmetrical components (positive, negative, zero sequence networks).',
        professorFollowedBooks: [
          'John J. Grainger & William D. Stevenson — Power System Analysis',
          'Hadi Saadat — Power System Analysis (3rd Edition)',
        ],
        syllabusRecommendedBooks: [
          'J. Duncan Glover, Thomas Overbye & Mulukutla S. Sarma — Power System Analysis and Design',
        ],
        chapters: [
          {
            id: 'eece4111-u01',
            unitNumber: 'Unit 01',
            title: 'Per-Unit (p.u.) Impedance Base Change & Bus Admittance Matrix (Y_bus)',
            summary:
              'Changing per-unit impedance from old base to new base and building Y_bus by inspection.',
            estimatedMinutes: 30,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece4111-u01-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 02 (Per-Unit Base Conversion Formula)',
                title: 'Per-Unit Impedance Base Conversion Formula',
                summaryText:
                  'Z_{pu,new} = Z_{pu,old} × (kV_{base,old} / kV_{base,new})² × (MVA_{base,new} / MVA_{base,old}).',
                paragraphs: [
                  'When converting components across transformer zones to a common system MVA base and zone voltage base, apply the base-change equation before assembling the impedance diagram.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eece42',
    code: 'EECE42',
    year: 4,
    semester: 2,
    title: '4th Year · 2nd Semester',
    subtitle: 'VLSI CMOS Design, Power System Protection, Optical Fiber & Microwave Engineering',
    totalCredits: 19.0,
    subjects: [
      {
        id: 'eece4211',
        code: 'EECE4211',
        title: 'VLSI Circuits & CMOS Design',
        credits: 3.0,
        courseType: 'Theory',
        syllabusOverview:
          'CMOS inverter voltage transfer characteristic (VTC), noise margins, pull-up (PMOS) and pull-down (NMOS) complementary logic synthesis, stick diagrams, lambda-based layout rules, and dynamic/static power dissipation.',
        professorFollowedBooks: [
          'Neil H. E. Weste & David Money Harris — CMOS VLSI Design: A Circuits and Systems Perspective (4th Edition)',
        ],
        syllabusRecommendedBooks: [
          'Sung-Mo Kang & Yusuf Leblebici — CMOS Digital Integrated Circuits',
        ],
        chapters: [
          {
            id: 'eece4211-u01',
            unitNumber: 'Unit 01',
            title: 'CMOS Complementary Logic Synthesis (PUN / PDN Dual Networks)',
            summary:
              'Constructing static CMOS gates where NMOS Pull-Down Network implements series-AND / parallel-OR and PMOS Pull-Up Network is its exact topological dual.',
            estimatedMinutes: 25,
            lastUpdated: 'October 2026',
            blocks: [
              {
                id: 'eece4211-u01-b1',
                type: 'memorize',
                priorityTier: 1,
                sourceCitation: 'Class Note · Lecture 03 (CMOS Gate Synthesis Rules)',
                title: 'Dual Network Rules for Static CMOS Logic Gates',
                summaryText:
                  'NMOS passes strong 0 (Pull-Down to GND); PMOS passes strong 1 (Pull-Up to V_DD). Total transistors = 2N for N inputs.',
                paragraphs: [
                  'To synthesize any inverted boolean expression Y = ¬F(A,B,C), build the NMOS Pull-Down Network (PDN) using series NMOS for AND (·) and parallel NMOS for OR (+), then form the PMOS Pull-Up Network (PUN) as the exact series-parallel dual.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

import type { ChapterNote } from '../../types.ts';

export const EECE1111_CH02: ChapterNote = {
  id: 'eece1111-ch02',
  unitNumber: 'Module 02',
  title: 'Basic Laws',
  summary:
    'Ohm’s law, conductance, 4-band resistor color code, network topology (nodes, essential nodes, branches, loops, meshes), Kirchhoff’s current and voltage laws (KCL & KVL), voltage divider and current divider derivations, series-parallel equivalents, and Wye–Delta (Y–Δ) transformations with proofs.',
  estimatedMinutes: 85,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'u02-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Note (pp. 13–14) · PUST Final 2023 Q2(a), 2022 Q4(b), 2021 Q1(b) · Alexander & Sadiku Ch. 2 · B. L. Theraja Ch. 1',
      title: 'Ohm’s Law, Conductance, Limits & Resistor Color Code',
      summaryText:
        'Ohm’s Law v = iR, conductance G = 1/R in Siemens (S), short-circuit (R = 0) and open-circuit (R → ∞) extremes, and the 4-band resistor color code table from class notes.',
      memorizeStatements: [
        'Ohm’s Law: At constant temperature, the voltage v across a linear resistor is directly proportional to the current i flowing through it: v = i · R (under Passive Sign Convention), where R = ρl/A is resistance in Ohms (Ω).',
        'Conductance (G): The reciprocal of resistance, measuring the ease with which an element conducts electric current: G = 1 / R = i / v, measured in Siemens (S) or mhos (℧), with dissipated power p = v · i = i²R = v² / R = v²G ≥ 0.',
        'Short Circuit vs. Open Circuit: A short circuit is a zero-resistance path (R = 0 Ω, G → ∞ S) where v = 0 V for any finite current i; an open circuit is an infinite-resistance break (R → ∞ Ω, G = 0 S) where i = 0 A for any finite voltage v.',
        '4-Band Resistor Color Code Formula: R = (1st Band Digit)(2nd Band Digit) × 10^(3rd Band Multiplier) ± Tolerance (4th Band), remembered via the class mnemonic: "B B R O Y Good Boy Very Good Worker" (0 to 9).',
      ],
      bulletPoints: [
        'Limitations of Ohm’s Law:',
        '1. Temperature Must Remain Constant: If conductor temperature rises due to Joule heating, resistance R = R₀(1 + αΔT) changes and the v-i curve becomes nonlinear.',
        '2. Applies Only to Bilateral Linear Ohmic Conductors: Does not apply to unilateral or nonlinear semiconductor devices (diodes, transistors, thyristors), vacuum tubes, electrolytes, or electric arc lamps.',
        'Class Note 4-Band Resistor Color Code ("Colour Code থেকে রোধ নির্ণয়", Akib Note p. 14):',
        '• Digit & Multiplier Mnemonic (0 to 9): Black (0), Brown (1), Red (2), Orange (3), Yellow (4), Green (5 — Good), Blue (6 — Boy), Violet (7 — Very), Gray (8 — Good), White (9 — Worker).',
        '• Tolerance Band (4th Band): Red (লাল) = ±2%, Gold (সোনালী) = ±5%, Silver (রুপালী) = ±10%, No Color (বর্ণহীন) = ±20%.',
        '• Quick Example: A resistor with Yellow (4), Violet (7), Orange (10³), and Gold (±5%) bands has resistance R = 47 × 10³ Ω ± 5% = 47 kΩ ± 5%.',
      ],
      table: {
        caption: 'Table 2.1 — Standard 4-Band Resistor Color Code & Tolerance Reference (Class Note p. 14)',
        headers: [
          'Color',
          'Mnemonic Word',
          'Digit (1st & 2nd Band)',
          'Multiplier (3rd Band)',
          'Tolerance (4th Band)',
        ],
        rows: [
          ['Black', 'B', '0', '10⁰ = 1', '—'],
          ['Brown', 'B', '1', '10¹ = 10', '±1%'],
          ['Red (লাল)', 'R', '2', '10² = 100', '±2%'],
          ['Orange', 'O', '3', '10³ = 1 kΩ', '—'],
          ['Yellow', 'Y', '4', '10⁴ = 10 kΩ', '—'],
          ['Green', 'Good', '5', '10⁵ = 100 kΩ', '—'],
          ['Blue', 'Boy', '6', '10⁶ = 1 MΩ', '—'],
          ['Violet', 'Very', '7', '10⁷ = 10 MΩ', '—'],
          ['Gray', 'Good', '8', '10⁸ = 100 MΩ', '—'],
          ['White', 'Worker', '9', '10⁹ = 1 GΩ', '—'],
          ['Gold (সোনালী)', '—', '—', '10⁻¹ = 0.1', '±5%'],
          ['Silver (রুপালী)', '—', '—', '10⁻² = 0.01', '±10%'],
          ['No Color (বর্ণহীন)', '—', '—', '—', '±20%'],
        ],
      },
      equations: [
        {
          label: 'Ohm’s Law, Conductance & Dissipated Power',
          formula:
            'v = i · R   ⟺   i = G · v = v / R   |   p = v · i = i²R = v² / R = v²G',
          units: 'V, A, Ω, S, W',
        },
        {
          label: '4-Band Resistor Color Code Formula',
          formula: 'R = (d_1 d_2) × 10^{m} ± Tolerance%',
          units: 'Ohms (Ω)',
        },
      ],
      interactiveDiagramId: 'ohms-law',
      examYears: ['2023', '2022', '2021'],
      marks: '2–4 Marks',
    },
    {
      id: 'u02-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Sections 2 & 4, pp. 3–7) · Class Note (p. 13) · PUST Final 2025 Q2(b), 2024 Q2(a), 2024 Q4(b), 2023 Q1(c), 2023 Q2(b), 2023 Q4(c), 2022 Q2(b), 2021 Q1(c)',
      title: 'Network Topology & Kirchhoff’s Current and Voltage Laws',
      summaryText:
        'Definitions of node, essential node, branch, path, loop, mesh, and planar circuit, Fundamental Theorem of Network Topology b = l + n − 1, KCL & KVL, and solved 2024 Q4(b) & 2023 Q2(b) exam problems.',
      memorizeStatements: [
        'Node & Essential Node: A Node is any set of points connected by ideal conductors with no circuit element between them (sharing the same potential); an Essential Node is a junction where three or more branches meet.',
        'Branch, Loop & Mesh: A Branch is a single two-terminal circuit element (R, L, C, or source) connected between two nodes; a Loop is any closed path starting and ending at the same node without passing through any node more than once; a Mesh is an elementary loop in a planar circuit that contains no other loop inside it.',
        'Fundamental Theorem of Network Topology: For any connected network having b branches, n nodes, and l independent loops (meshes): b = l + n − 1.',
        'Kirchhoff’s Current Law (KCL — Conservation of Charge): The algebraic sum of all currents entering and leaving any node (or closed Gaussian boundary) at any instant is zero: ∑ i_k = 0  ⟺  ∑ i_entering = ∑ i_leaving.',
        'Kirchhoff’s Voltage Law (KVL — Conservation of Energy): The algebraic sum of all branch voltages (potential rises and drops) around any closed path or loop at any instant is zero: ∑ v_m = 0  ⟺  ∑ v_drops = ∑ v_rises.',
      ],
      bulletPoints: [
        'Professor’s Sheet Tip — How to Identify Nodes & Meshes:',
        '• Trace an ideal wire with your finger: as long as you do not cross a resistor, source, capacitor, or inductor, you are still on the same node. Every mesh is a loop, but an outer perimeter enclosing two meshes is a loop, not a mesh.',
        'Solved PYQ 1 — Counting Branches and Nodes [PUST 2023 Q2(b) — Sadiku Example 2.4 & Practice Problem 2.4]:',
        '• Circuit 1 (Left: 4 V source, 1 Ω, 2 Ω, 5 Ω, 3 Ω, 10 Ω): Each of the 6 elements is a branch, so b = 6 branches. Tracing the uninterrupted wires gives n = 4 nodes (and l = b − n + 1 = 6 − 4 + 1 = 3 independent loops).',
        '• Circuit 2 (Right: 1 A source, 1 Ω, 12 V source, 2 Ω, 4 A source, 3 Ω, 5 Ω): Contains b = 7 branches (two sources + five elements) and n = 5 nodes (with l = 7 − 5 + 1 = 3 independent loops).',
        'Solved PYQ 2 — Single-Loop KVL with Dependent Voltage Source 2v_o [PUST 2024 Q4(b) — Sadiku Example 2.7]:',
        '• Problem: A single-loop circuit contains a 12 V source (+ on top), a 4 Ω resistor (current i clockwise), a dependent voltage source 2v_o (+ on left, − on right), a 4 V source (− on top, + on bottom), and a bottom 6 Ω resistor with voltage v_o (+ on left, − on right). Find v_o and i.',
        '• Step 1 (Write KVL clockwise around the loop):\n  −12 + 4i + 2v_o − 4 + 6i = 0   ⇒   10i + 2v_o = 16   --- (1)',
        '• Step 2 (Write controlling voltage v_o across the 6 Ω resistor): Since clockwise current i enters the right (−) terminal of the bottom 6 Ω resistor, Ohm’s law gives:\n  v_o = −6i   --- (2)',
        '• Step 3 (Substitute v_o = −6i into Equation 1):\n  10i + 2(−6i) = 16   ⇒   −2i = 16   ⇒   i = −8 A,   and   v_o = −6(−8) = +48 V.',
      ],
      equations: [
        {
          label: 'Kirchhoff’s Current Law (KCL) & Voltage Law (KVL)',
          formula:
            '∑_{n=1}^{N} i_n = 0   (∑ i_{in} = ∑ i_{out})   |   ∑_{m=1}^{M} v_m = 0   (∑ v_{drops} = ∑ v_{rises})',
          units: 'Amperes (A) and Volts (V)',
        },
        {
          label: 'Fundamental Theorem of Network Topology',
          formula: 'b = l + n − 1   ⟺   l = b − n + 1',
          units: 'b = branches, n = nodes, l = independent loops',
        },
      ],
      interactiveDiagramId: 'kcl-kvl',
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '3–5 Marks',
    },
    {
      id: 'u02-b3',
      type: 'definition',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Note (p. 15) · PUST Final 2025 Q3(a), 2024 Q3(b), 2024 Q4(c) · Alexander & Sadiku Sections 2.5–2.6 · B. L. Theraja Ch. 1',
      title: 'Series-Parallel Equivalents, Voltage Divider & Current Divider Proofs',
      summaryText:
        'Step-by-step derivations of the Voltage Divider Rule (2025 Q3a), total parallel resistance for three resistors (2024 Q4c), and the Current Divider Rule (2024 Q3b & Class Note p. 15).',
      memorizeStatements: [
        'Series Resistors & Voltage Divider Rule (VDR): For N resistors in series carrying the same current i, R_eq = R₁ + R₂ + ··· + R_N, and the voltage across the k-th resistor is proportional to its resistance: V_k = (R_k / R_eq) · V_total.',
        'Parallel Resistors (Three Resistors): For three resistors R₁, R₂, R₃ connected across the same terminal voltage V, 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃, giving R_eq = (R₁ R₂ R₃) / (R₁R₂ + R₂R₃ + R₃R₁).',
        'Current Divider Rule (CDR): For two parallel resistors R₁ and R₂ fed by total current I_total, the current in each branch is inversely proportional to its resistance (uses the opposite resistor in the numerator): I₁ = [R₂ / (R₁ + R₂)] · I_total and I₂ = [R₁ / (R₁ + R₂)] · I_total.',
      ],
      bulletPoints: [
        '1. Derivation of the Voltage Divider Rule (VDR) [PUST 2025 Q3(a) & Class Note p. 15]:',
        '• Consider two (or N) resistors R₁ and R₂ connected in series across a DC voltage source V. Since they are in series, the same current I flows through each resistor.',
        '• By Ohm’s Law, the individual voltage drops are V₁ = I · R₁ and V₂ = I · R₂.',
        '• Applying KVL around the series loop:\n  V = V₁ + V₂ = I R₁ + I R₂ = I (R₁ + R₂) = I R_{eq}   ⇒   I = V / (R₁ + R₂) = V / R_{eq}',
        '• Substituting I back into V₁ and V₂ yields the Voltage Divider expressions:\n  V₁ = [ R₁ / (R₁ + R₂) ] · V = (R₁ / R_{eq}) · V,     V₂ = [ R₂ / (R₁ + R₂) ] · V = (R₂ / R_{eq}) · V   (Proved).',
        '2. Derivation of Total Resistance for Three Parallel Resistors [PUST 2024 Q4(c)]:',
        '• Consider three resistors R₁, R₂, and R₃ connected in parallel across a source voltage V. Every parallel branch shares the exact same terminal voltage V.',
        '• By Ohm’s Law, the branch currents are I₁ = V / R₁, I₂ = V / R₂, and I₃ = V / R₃.',
        '• Applying KCL at the main node, the total source current I is:\n  I = I₁ + I₂ + I₃ = (V / R₁) + (V / R₂) + (V / R₃) = V (1/R₁ + 1/R₂ + 1/R₃)',
        '• Replacing the parallel network by a single equivalent resistance R_{eq} such that I = V / R_{eq}:\n  1 / R_{eq} = 1 / R₁ + 1 / R₂ + 1 / R₃ = (R₂R₃ + R₁R₃ + R₁R₂) / (R₁R₂R₃)\n  ∴  R_{eq} = (R₁ R₂ R₃) / (R₁R₂ + R₂R₃ + R₃R₁)   (Proved).',
        '3. Derivation of the Current Divider Rule (CDR) [Class Note p. 15 & PUST 2024 Q3(b)]:',
        '• For two parallel resistors R₁ and R₂ carrying branch currents I₁ and I₂ with total current I = I₁ + I₂, the common parallel voltage is V = I · R_{eq} = I₁ R₁ = I₂ R₂, where R_{eq} = (R₁ R₂) / (R₁ + R₂).',
        '• Equating I₁ R₁ = I · R_{eq}:\n  I₁ R₁ = I · [ (R₁ R₂) / (R₁ + R₂) ]   ⇒   I₁ = [ R₂ / (R₁ + R₂) ] · I\n  Similarly, I₂ = [ R₁ / (R₁ + R₂) ] · I   (Proved).',
      ],
      equations: [
        {
          label: 'Series Equivalent & Voltage Divider Rule (VDR)',
          formula:
            'R_{eq} = R_1 + R_2 + ··· + R_N   |   V_k = (R_k / R_{eq}) · V',
          units: 'Ω and V',
        },
        {
          label: 'Three Parallel Resistors & Current Divider Rule (CDR)',
          formula:
            '1 / R_{eq} = 1/R_1 + 1/R_2 + 1/R_3   |   I_1 = [ R_2 / (R_1 + R_2) ] · I,   I_2 = [ R_1 / (R_1 + R_2) ] · I',
          units: 'Ω and A',
        },
      ],
      examYears: ['2025', '2024'],
      marks: '3–4 Marks',
    },
    {
      id: 'u02-b4',
      type: 'memorize',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Class Note (p. 4) · PUST Final 2025 Q3(b), 2024 Q2(b), 2023 Q2(a), 2022 Q1(c), 2021 Q2(a) · Alexander & Sadiku Section 2.7 · B. L. Theraja Ch. 2',
      title: 'Wye–Delta (Y–Δ) Transformations & Complete Algebraic Proof',
      summaryText:
        'Purpose of Wye–Delta conversion, full algebraic proof of the Δ → Y resistor formulas (2022 Q1c & 2025 Q3b), and summary table for both Δ → Y and Y → Δ conversions.',
      memorizeStatements: [
        'Purpose of Wye–Delta (Star–Delta) Conversion: When three-terminal bridge or mesh networks (such as an unbalanced Wheatstone bridge) contain resistors that are neither in series nor in parallel, converting a 3-resistor Delta (Δ) into an equivalent Wye (Y) adds a central star node and reduces the network to simple series-parallel combinations.',
        'Delta-to-Wye (Δ → Y) Rule: Each resistor in the Y network equals the product of the resistors in the two adjacent Δ branches divided by the sum of all three Δ resistors: R₁ = (R_b R_c)/(R_a + R_b + R_c), R₂ = (R_a R_c)/(R_a + R_b + R_c), R₃ = (R_a R_b)/(R_a + R_b + R_c).',
        'Wye-to-Delta (Y → Δ) Rule: Each resistor in the Δ network equals the sum of all pairwise products of the Y resistors divided by the opposite Y resistor: R_a = (R₁R₂ + R₂R₃ + R₃R₁)/R₁, R_b = (R₁R₂ + R₂R₃ + R₃R₁)/R₂, R_c = (R₁R₂ + R₂R₃ + R₃R₁)/R₃.',
        'Balanced Y–Δ Conversion: When all three resistors are equal, R_Y = R_Δ / 3 and R_Δ = 3 R_Y.',
      ],
      bulletPoints: [
        'Complete Proof of Delta-to-Wye (Δ → Y) Transformation [PUST 2022 Q1(c) & 2025 Q3(b)]:',
        '1. Label the three external terminals as 1, 2, and 3. In the Wye (Y) network, resistors R₁, R₂, R₃ connect terminals 1, 2, 3 to the central star node N. In the Delta (Δ) network, R_a lies opposite R₁ (between terminals 2 and 3), R_b lies opposite R₂ (between 1 and 3), and R_c lies opposite R₃ (between 1 and 2).',
        '2. For the two networks to be electrically equivalent, the resistance measured between any pair of terminals (with the third terminal left open-circuited) must be identical in both Y and Δ:',
        '• Between terminals 1 and 2 (terminal 3 open): In Y, R₁ and R₂ are in series; in Δ, R_c is in parallel with (R_a + R_b):\n  R_{12} = R₁ + R₂ = R_c (R_a + R_b) / (R_a + R_b + R_c)   --- (Eq. 1)',
        '• Between terminals 2 and 3 (terminal 1 open):\n  R_{23} = R₂ + R₃ = R_a (R_b + R_c) / (R_a + R_b + R_c)   --- (Eq. 2)',
        '• Between terminals 3 and 1 (terminal 2 open):\n  R_{31} = R₁ + R₃ = R_b (R_a + R_c) / (R_a + R_b + R_c)   --- (Eq. 3)',
        '3. Subtracting (Eq. 2) from (Eq. 1) gives:\n  R₁ − R₃ = [ R_c(R_a + R_b) − R_a(R_b + R_c) ] / (R_a + R_b + R_c) = (R_b R_c − R_a R_b) / (R_a + R_b + R_c)   --- (Eq. 4)',
        '4. Adding (Eq. 3) and (Eq. 4) eliminates R₃ and yields 2R₁:\n  2R₁ = (R_a R_b + R_b R_c + R_b R_c − R_a R_b) / (R_a + R_b + R_c) = 2 R_b R_c / (R_a + R_b + R_c)\n  ∴  R₁ = (R_b R_c) / (R_a + R_b + R_c)',
        '5. By cyclic symmetry of the indices, we obtain R₂ and R₃:\n  ∴  R₂ = (R_a R_c) / (R_a + R_b + R_c),     R₃ = (R_a R_b) / (R_a + R_b + R_c)   (Proved).',
      ],
      table: {
        caption: 'Table 2.2 — Complete Wye–Delta (Y ↔ Δ) Conversion Formulas',
        headers: [
          'Conversion Direction',
          'Exact Transformation Equations',
          'Memory Rule & Balanced Limit',
        ],
        rows: [
          [
            'Delta to Wye (Δ → Y)',
            'R₁ = (R_b R_c) / ∑R_Δ,   R₂ = (R_a R_c) / ∑R_Δ,   R₃ = (R_a R_b) / ∑R_Δ   (where ∑R_Δ = R_a + R_b + R_c)',
            'Product of two adjacent Δ arms ÷ Sum of all three Δ arms (Balanced: R_Y = R_Δ / 3)',
          ],
          [
            'Wye to Delta (Y → Δ)',
            'R_a = ∑(R_i R_j) / R₁,   R_b = ∑(R_i R_j) / R₂,   R_c = ∑(R_i R_j) / R₃   (where ∑(R_i R_j) = R₁R₂ + R₂R₃ + R₃R₁)',
            'Sum of pairwise Y products ÷ Opposite Y arm (Balanced: R_Δ = 3 R_Y)',
          ],
        ],
      },
      examYears: ['2025', '2024', '2023', '2022', '2021'],
      marks: '3.67–4.67 Marks',
    },
    {
      id: 'u02-b5',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2025 Q3(c), 2024 Q2(c), 2024 Q3(b) · B. L. Theraja Vol. I Ch. 2 · Alexander & Sadiku Example 2.15',
      title: 'Double-Delta & Unbalanced Bridge Reduction Problems (2025 & 2024)',
      summaryText:
        'Complete step-by-step solutions for the three PUST Wye–Delta bridge exam problems: 2025 Q3(c) 180 V double-delta bridge, 2024 Q2(c) 15 V unbalanced bridge, and 2024 Q3(b) 100 V bridge.',
      examYears: ['2025', '2024'],
      marks: '4 Marks',
      problemStatement:
        '(1) [PUST 2025 Q3(c)] Calculate the current flowing through the 10 Ω resistor of the circuit connected across a 180 V DC source: Left Δ at nodes A-B-C has upper branch 8 Ω + 4 Ω = 12 Ω, branch A-C = 12 Ω, and branch B-C = 12 Ω; middle branches are B-D = 34 Ω and C-E = 10 Ω; Right Δ at nodes D-F-E has branch D-F = 30 Ω, branch D-E = 30 Ω, and right branch F-E = 17 Ω + 13 Ω = 30 Ω. (2) [PUST 2024 Q2(c)] Obtain the source current I from a 15 V battery in series with 2.5 Ω connected across a bridge with upper arms 20 Ω (left) and 10 Ω (right), lower arms 10 Ω (left) and 15 Ω (right), and central bridge resistor 25 Ω. (3) [PUST 2024 Q3(b)] Find current i from a 100 V source through a 13 Ω series resistor feeding a bridge with upper arms 24 Ω and 10 Ω, bridge resistor 20 Ω, and lower arms 30 Ω and 50 Ω.',
      givenData: [
        'Problem (1) [2025 Q3c]: V_s = 180 V, Left Δ = (12, 12, 12 Ω), Right Δ = (30, 30, 30 Ω), B-D = 34 Ω, C-E = 10 Ω',
        'Problem (2) [2024 Q2c]: V_s = 15 V, R_series = 2.5 Ω, Bridge = (20, 10, 10, 15 Ω; center = 25 Ω)',
        'Problem (3) [2024 Q3b]: V_s = 100 V, R_series = 13 Ω, Bridge = (24, 10, 30, 50 Ω; center = 20 Ω)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2025 Q3(c) — 180 V Double-Delta Network (B. L. Theraja)',
          explanation:
            'Both the left Δ (8+4 = 12 Ω, 12 Ω, 12 Ω) and the right Δ (30 Ω, 30 Ω, 17+13 = 30 Ω) are balanced deltas! Convert each Δ into its equivalent Y (R_Y = R_Δ / 3):',
          equation:
            'Left Δ → Y (at center N_1):   R_{Y1} = 12 / 3 = 4 Ω  (in arms A-N_1, B-N_1, C-N_1)\nRight Δ → Y (at center N_2):  R_{Y2} = 30 / 3 = 10 Ω (in arms F-N_2, D-N_2, E-N_2)\nBetween star centers N_1 and N_2, two parallel paths exist:\n  Upper path (via B-D): R_{upper} = R_{B-N1} + 34 + R_{D-N2} = 4 + 34 + 10 = 48 Ω\n  Lower path (via C-E, containing 10 Ω): R_{lower} = R_{C-N1} + 10 + R_{E-N2} = 4 + 10 + 10 = 24 Ω\nTotal Resistance: R_{eq} = R_{A-N1} + (48 ∥ 24) + R_{F-N2} = 4 + 16 + 10 = 30 Ω\nTotal Supply Current: I_{total} = 180 V / 30 Ω = 6 A\nBy Current Divider Rule, current through the lower branch (10 Ω resistor) is:\n  I_{10Ω} = I_{total} × [ 48 / (48 + 24) ] = 6 × (48 / 72)\n∴  I_{10Ω} = 4.0 A',
        },
        {
          stepTitle: 'Problem (2): PUST 2024 Q2(c) — 15 V Unbalanced Bridge (B. L. Theraja)',
          explanation:
            'Convert the left Δ (20 Ω upper-left, 10 Ω lower-left, 25 Ω vertical bridge; sum = 55 Ω) into an equivalent Y:',
          equation:
            'R_1 (left input arm) = (20 × 10) / 55 = 40 / 11 = 3.636 Ω\nR_2 (upper-right arm) = (20 × 25) / 55 = 100 / 11 = 9.091 Ω\nR_3 (lower-right arm) = (10 × 25) / 55 = 50 / 11 = 4.545 Ω\nCombine series-parallel branches with right arms (10 Ω upper, 15 Ω lower):\n  R_{upper} = 9.091 + 10 = 19.091 Ω,   R_{lower} = 4.545 + 15 = 19.545 Ω\n  R_{bridge} = 3.636 + (19.091 ∥ 19.545) = 3.636 + 9.658 = 13.294 Ω\nIncluding the 2.5 Ω series battery resistor:\n  R_{total} = 2.5 + 13.294 = 15.794 Ω   ⇒   I = 15 / 15.794\n∴  I = 0.95 A',
        },
        {
          stepTitle: 'Problem (3): PUST 2024 Q3(b) — 100 V Bridge Network (Sadiku Example 2.15)',
          explanation:
            'Convert the lower Δ (20 Ω bridge, 30 Ω lower-left, 50 Ω lower-right; sum = 100 Ω) into an equivalent Y:',
          equation:
            'R_1 (upper-left Y arm) = (20 × 30) / 100 = 6 Ω\nR_2 (upper-right Y arm) = (20 × 50) / 100 = 10 Ω\nR_3 (bottom Y arm to b) = (30 × 50) / 100 = 15 Ω\nCombine with upper bridge arms (24 Ω and 10 Ω) and input 13 Ω resistor:\n  Left branch = 24 + 6 = 30 Ω,   Right branch = 10 + 10 = 20 Ω\n  R_{ab} = 13 + (30 ∥ 20) + 15 = 13 + 12 + 15 = 40 Ω\n  i = 100 V / 40 Ω\n∴  R_{ab} = 40 Ω,   i = 2.5 A',
        },
      ],
      finalAnswer:
        '(1) 2025 Q3(c): I_10Ω = 4.0 A; (2) 2024 Q2(c): I = 0.95 A; (3) 2024 Q3(b): R_ab = 40 Ω, i = 2.5 A',
    },
    {
      id: 'u02-b6',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3, 4],
      sourceCitation:
        'PUST Final Exam 2024 Q2(b), 2023 Q2(c), 2022 Q1(b), 2022 Q2(c), 2021 Q1(b) · Alexander & Sadiku Ch. 2 · Boylestad Ch. 7',
      title: 'Series-Parallel & Crossover Equivalent Resistance Problems (2021–2024)',
      summaryText:
        'Step-by-step solutions for the crossover parallel network (2024 Q2b & 2021 Q1b), diamond short-circuit bridge (2023 Q2c), conductance network G_eq (2022 Q1b), and series-parallel divider (2022 Q2c).',
      examYears: ['2024', '2023', '2022', '2021'],
      marks: '3.67–5.67 Marks',
      problemStatement:
        '(1) [PUST 2024 Q2(b) & 2021 Q1(b)] Find R_eq at terminals a-b: terminal a connects via 10 Ω to node c; between c and d is 1 Ω; from c to bottom rail b are a 3 Ω vertical resistor and a 6 Ω diagonal resistor; from d to rail b are a 4 Ω vertical resistor, a 12 Ω diagonal resistor, and a right branch of 1 Ω in series with 5 Ω. (2) [PUST 2023 Q2(c)] Find R_ab of the diamond network where c-f is a central vertical wire, upper-left c-d = 5 Ω, lower-left d-f = 20 Ω, d-a = 10 Ω, upper-right c-e = 6 Ω, lower-right e-f = 3 Ω, and b-e = 8 Ω. (3) [PUST 2022 Q1(b)] Calculate G_eq for the conductance network (8 S, 2 S, 4 S, 6 S) with bottom 12 Ω resistor. (4) [PUST 2022 Q2(c)] Find I₄ and V₂ for E = 12 V with R₁ = 4 Ω in series with (R₂ = 3 Ω ∥ R₃ = 6 Ω), and R₄ = 8 Ω connected across the 12 V source.',
      givenData: [
        'Problem (1) [2024 Q2b / 2021 Q1b]: Bottom wire b is a single common reference node',
        'Problem (2) [2023 Q2c]: Center wire c-f shorts node c to node f',
        'Problem (4) [2022 Q2c]: E = 12 V, R₁ = 4 Ω, R₂ = 3 Ω, R₃ = 6 Ω, R₄ = 8 Ω',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2024 Q2(b) & 2021 Q1(b) — Crossover Network R_ab (Sadiku Prob. 2.35)',
          explanation:
            'Because the entire bottom wire is node b, both the 3 Ω and 6 Ω resistors connect node c to node b (3 Ω ∥ 6 Ω), and both the 4 Ω and 12 Ω resistors connect node d to node b (4 Ω ∥ 12 Ω):',
          equation:
            'At node d to b:  R_{db1} = 4 ∥ 12 = (4 × 12)/16 = 3 Ω,   Right branch = 1 + 5 = 6 Ω\n  Total from d to b:  R_{db} = 3 ∥ 6 = (3 × 6)/9 = 2 Ω\nIn series with 1 Ω (between c and d):  R_{cdb} = 1 + 2 = 3 Ω\nAt node c to b:  R_{cb1} = 3 ∥ 6 = 2 Ω\n  Parallel combination at node c:  R_{cb} = 2 ∥ 3 = (2 × 3)/(2 + 3) = 1.2 Ω\nAdd input 10 Ω resistor:  R_{ab} = 10 + 1.2\n∴  R_{ab} = 11.2 Ω',
        },
        {
          stepTitle: 'Problem (2): PUST 2023 Q2(c) — Diamond Network with Central Short c-f (Sadiku PP 2.14)',
          explanation:
            'The central wire connects node c and node f into a single common node (c ≡ f). Thus 5 Ω and 20 Ω are in parallel between d and c/f, and 6 Ω and 3 Ω are in parallel between e and c/f:',
          equation:
            'Left pair (between d and c/f):   R_{left} = 5 ∥ 20 = (5 × 20) / 25 = 4 Ω\nRight pair (between e and c/f):  R_{right} = 6 ∥ 3 = (6 × 3) / 9 = 2 Ω\nLooking into terminals a and b, 10 Ω, R_{left}, R_{right}, and 8 Ω are all in series:\n  R_{ab} = 10 + 4 + 2 + 8\n∴  R_{ab} = 24 Ω',
        },
        {
          stepTitle: 'Problem (3): PUST 2022 Q1(b) — Conductance Network G_eq',
          explanation:
            'Combine parallel conductances by direct addition (G_p = G₁ + G₂) and series elements by adding resistances (R = 1/G):',
          equation:
            'Upper parallel conductances: G_{top} = 8 S + 4 S = 12 S  (R_{top} = 1/12 Ω)\nLower parallel conductances: G_{bot} = 2 S + 6 S = 8 S   (R_{bot} = 1/8 Ω)\n(Or if 8 S is in series with 2 S and 4 S is in series with 6 S: G_L = (8×2)/10 = 1.6 S, G_R = (4×6)/10 = 2.4 S ⇒ G_p = 4 S, R_p = 0.25 Ω; in series with 12 Ω gives R_{eq} = 12.25 Ω ⇒ G_{eq} = 1 / 12.25 = 0.0816 S)',
        },
        {
          stepTitle: 'Problem (4): PUST 2022 Q2(c) — Current I₄ and Voltage V₂ (Boylestad Ch. 7)',
          explanation:
            'R₄ = 8 Ω is connected directly across the E = 12 V source, while R₁ = 4 Ω is in series with the parallel combination (R₂ = 3 Ω ∥ R₃ = 6 Ω):',
          equation:
            'I_4 = E / R_4 = 12 V / 8 Ω = 1.5 A\nR_{23} = R_2 ∥ R_3 = (3 × 6) / (3 + 6) = 2 Ω\nBy Voltage Divider Rule across R_1 = 4 Ω and R_{23} = 2 Ω:\n  V_2 = E × [ R_{23} / (R_1 + R_{23}) ] = 12 × [ 2 / (4 + 2) ] = 4.0 V\n∴  I_4 = 1.5 A,   V_2 = 4.0 V',
        },
      ],
      finalAnswer:
        '(1) R_ab = 11.2 Ω; (2) R_ab = 24 Ω; (3) G_eq = 0.0816 S; (4) I₄ = 1.5 A, V₂ = 4.0 V',
    },
    {
      id: 'u02-b7',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2025 Q2(c) · B. L. Theraja Vol. I Ch. 2 (Kirchhoff’s Laws Bridge Problem)',
      title: 'Kirchhoff’s Laws in a Three-Source Bridge Network (2025)',
      summaryText:
        'Determine all branch currents (x, y, z, x − z, y + z, x + y) in the 2025 Q2(c) bridge network when every branch resistance is 1 Ω.',
      examYears: ['2025'],
      marks: '4 Marks',
      problemStatement:
        '[PUST 2025 Q2(c)] Determine the branch currents in the bridge network ABCD when the value of each branch resistance is 1 Ω: Branch AB has a 5 V cell (+ towards A, − towards B) with current x from A to B; Branch BC has a 5 V cell (+ towards B, − towards C) with current (x − z) from B to C; central vertical Branch BD has 1 Ω with current z from B to D; Branch AD has 1 Ω with current y from A to D; Branch DC has 1 Ω with current (y + z) from D to C; outer return branch CA has cell E₁ = 10 V (+ towards A) and 1 Ω with current (x + y).',
      givenData: [
        'Each of the 6 branches has resistance R = 1 Ω',
        'Branch AB cell = 5 V (opposing x); Branch BC cell = 5 V (aiding x − z); Outer cell E₁ = 10 V (aiding x + y)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Step 1: Apply KVL to the Three Independent Closed Loops (ABDA, BCDB, ADCEA)',
          explanation:
            'With R = 1 Ω in every branch, write KVL around Loop ABDA, Loop BCDB, and outer Loop ADCEA:',
          equation:
            'Loop ABDA (A → B → D → A):  −x(1) − 5 − z(1) + y(1) = 0   ⇒   x − y + z = −5   --- (1)\nLoop BCDB (B → C → D → B):  −(x − z)(1) + 5 + (y + z)(1) + z(1) = 0   ⇒   x − y − 3z = 5   --- (2)\nOuter Loop ADCEA (A → D → C → E_1 → A):  −y(1) − (y + z)(1) − (x + y)(1) + 10 = 0   ⇒   x + 3y + z = 10   --- (3)',
        },
        {
          stepTitle: 'Step 2: Solve Equations (1), (2), and (3) for x, y, and z',
          explanation:
            'Subtract Equation (2) from Equation (1) to find z immediately, then solve for y and x:',
          equation:
            '(1) − (2):  4z = −10   ⇒   z = −2.5 A\nSubstitute z = −2.5 into (1):  x − y − 2.5 = −5   ⇒   x − y = −2.5   --- (4)\nSubstitute z = −2.5 into (3):  x + 3y − 2.5 = 10  ⇒   x + 3y = 12.5  --- (5)\n(5) − (4):  4y = 15   ⇒   y = 3.75 A\nFrom (4):   x = y − 2.5 = 3.75 − 2.5 = 1.25 A',
        },
        {
          stepTitle: 'Step 3: Compute All Six Branch Currents',
          explanation: 'Substitute x = 1.25 A, y = 3.75 A, and z = −2.5 A into each branch expression:',
          equation:
            'Branch AB:  i_{AB} = x = 1.25 A\nBranch AD:  i_{AD} = y = 3.75 A\nBranch BD:  i_{BD} = z = −2.5 A  (2.5 A from D to B)\nBranch BC:  i_{BC} = x − z = 1.25 − (−2.5) = 3.75 A\nBranch DC:  i_{DC} = y + z = 3.75 − 2.5 = 1.25 A\nOuter Supply Branch CA:  i_{CA} = x + y = 1.25 + 3.75 = 5.0 A\n∴  x = 1.25 A,   y = 3.75 A,   z = −2.5 A,   x + y = 5.0 A',
        },
      ],
      finalAnswer:
        'i_AB = 1.25 A, i_AD = 3.75 A, i_BD = −2.5 A, i_BC = 3.75 A, i_DC = 1.25 A, i_supply = 5.0 A',
    },
  ],
};

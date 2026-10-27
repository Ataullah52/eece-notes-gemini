import type { ChapterNote } from '../../types.ts';

export const EECE1111_CH03: ChapterNote = {
  id: 'eece1111-ch03',
  unitNumber: 'Module 03',
  title: 'Techniques for Circuit Analysis',
  summary:
    'Nodal and mesh analysis including supernode and supermesh, conductance and resistance matrices by inspection, general DC/AC circuit analysis with independent and dependent sources, and DC/AC source transformations.',
  estimatedMinutes: 90,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'u03-b1',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Sections 5–9, pp. 7–11) · PUST Final 2025 Q5(a), 2024 Q3(a), 2023 Q3(a), 2023 Q4(c), 2021 Q2(a,b) · Alexander & Sadiku Ch. 3',
      title: 'Node-Voltage Method, Conductance Matrix & Supernode Rules',
      summaryText:
        'Definition and 7-step procedure of Nodal Analysis, conductance matrix by inspection Gv = i, Supernode formation and constraint equations, and comparison between Nodal and Mesh Analysis.',
      memorizeStatements: [
        'Nodal Analysis (Node-Voltage Method): A systematic circuit analysis technique based on Kirchhoff’s Current Law (KCL) in which one node is selected as the reference ground (0 V) and the remaining (N − 1) non-reference node voltages are solved as primary unknowns.',
        'Basic Nodal Branch Current Formula: The current flowing from node a to node b through resistance R (or impedance Z) is i_ab = (v_a − v_b) / R in DC and I_ab = (V_a − V_b) / Z = Y(V_a − V_b) in AC.',
        'Supernode Definition: An extended closed surface formed by enclosing an ideal voltage source (independent or dependent) connected between two non-reference nodes and any elements connected in parallel with it.',
        'Two Equations Required for Each Supernode: (1) One KCL equation summing all currents crossing the outer Supernode boundary, and (2) One KVL voltage constraint equation inside the Supernode: v_+ − v_− = V_source.',
      ],
      bulletPoints: [
        'Professor’s 7-Step General Procedure for Nodal Analysis [PUST 2023 Q3(a) & 2021 Q2(b)]:',
        '1. Identify all nodes in the network and select one convenient node (usually with the most branches or bottom wire) as the reference node (0 V).',
        '2. Label the remaining (N − 1) non-reference node voltages as v₁, v₂, …, v_{N−1} measured with respect to the reference node.',
        '3. If a voltage source is connected between a non-reference node k and the reference ground, set v_k = ±V_s directly (no supernode needed).',
        '4. If a floating voltage source connects two non-reference nodes, enclose both nodes and the source in a Supernode.',
        '5. Apply KCL (∑ i_leaving = ∑ i_entering) at each ordinary non-reference node and across each Supernode outer boundary, expressing passive branch currents as (v_a − v_b)/R.',
        '6. Write the voltage constraint equation (v_+ − v_− = V_s) for each Supernode and express any dependent source controlling variables in terms of node voltages.',
        '7. Solve the simultaneous linear equations for v₁, v₂, … and compute the required branch currents or powers.',
        'Conductance-Matrix Inspection Rule (Gv = i) [Professor’s Sheet Section 6.3]:',
        '• For a network with only resistors and independent current sources: diagonal entry G_{kk} = sum of all conductances connected to node k; off-diagonal entry G_{km} = −(conductance directly between nodes k and m); RHS i_k = net independent current injected into node k.',
      ],
      table: {
        caption:
          'Table 3.1 — Comparison of Node-Voltage vs. Mesh-Current Analysis [Professor’s Sheet p. 7 & PUST 2025 Q5(b), 2023 Q4(c)]',
        headers: [
          'Comparison Feature',
          'Node-Voltage Method (Nodal Analysis)',
          'Mesh-Current Method (Mesh Analysis)',
        ],
        rows: [
          [
            '1. Governing Law & Primary Unknown',
            'Kirchhoff’s Current Law (KCL)  |  Node voltages (v₁, v₂, …)',
            'Kirchhoff’s Voltage Law (KVL)  |  Mesh currents (i₁, i₂, …)',
          ],
          [
            '2. Number of Equations',
            '(N − 1) − (number of voltage sources)',
            'M = (b − N + 1) − (number of current sources)',
          ],
          [
            '3. Topological Applicability',
            'Applies to both planar and non-planar lumped circuits',
            'Applicable directly ONLY to planar circuits',
          ],
          [
            '4. Special Source Handling',
            'Floating voltage source between non-reference nodes → Supernode',
            'Current source shared between two adjacent meshes → Supermesh',
          ],
          [
            '5. When Preferred',
            'Preferred when circuit has fewer non-reference nodes, many parallel branches, or many current sources',
            'Preferred when circuit has fewer meshes, many series branches, or many voltage sources',
          ],
        ],
      },
      equations: [
        {
          label: 'DC & AC Nodal Current Building Block & Conductance Matrix',
          formula:
            'i_{ab} = (v_a − v_b) / R   |   I_{ab} = Y_{ab}(V_a − V_b)   |   [G][v] = [i]',
          units: 'A, V, Ω, S',
        },
      ],
      examYears: ['2025', '2024', '2023', '2021'],
      marks: '3–5 Marks',
      professorTip:
        'Each Supernode reduces the number of required KCL equations by 1 (replaced by 1 voltage constraint v_+ − v_− = V_s). Any resistor connected strictly in parallel with a Supernode voltage source cancels out of the Supernode KCL equation!',
    },
    {
      id: 'u03-b2',
      type: 'theory',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Sections 10–13, pp. 11–14) · PUST Final 2025 Q5(b), 2024 Q3(a), 2023 Q4(c), 2021 Q2(a) · Alexander & Sadiku Ch. 3',
      title: 'Mesh-Current Method, Shared-Branch Rule & Supermesh Analysis',
      summaryText:
        'Planar circuit requirement, shared-branch current rule i_shared = i₁ − i₂, 7-step Mesh Analysis procedure, Supermesh formation and constraint equations, and resistance matrix by inspection.',
      memorizeStatements: [
        'Mesh Analysis (Mesh-Current Method): A circuit analysis technique applicable to planar networks that assigns a hypothetical circulating current to each independent mesh and applies Kirchhoff’s Voltage Law (KVL) around each mesh.',
        'Shared-Branch Current Rule: When two clockwise mesh currents i₁ and i₂ share a common branch containing resistor R, the net physical current in the direction of i₁ is i_shared = i₁ − i₂, and the voltage drop in Mesh 1’s KVL equation is R(i₁ − i₂).',
        'Supermesh Definition: A larger combined KVL loop formed when an ideal current source (independent or dependent) lies on a branch shared by two adjacent meshes; the shared current-source branch is bypassed for KVL, and a KCL constraint equation relates the two mesh currents.',
        'Unshared Outer Current Source Rule: If an ideal current source lies on the outer perimeter of a single mesh (not shared with any other mesh), no Supermesh is needed — that mesh current is fixed directly by the source (i_k = ±I_s).',
      ],
      bulletPoints: [
        'Professor’s Step-by-Step Procedure for Mesh Analysis with Supermesh [PUST 2024 Q3(a) & 2021 Q2(a)]:',
        '1. Verify that the circuit is planar (can be drawn on a flat plane without crossing wires) and assign clockwise mesh currents i₁, i₂, …, i_M to all M meshes.',
        '2. If an ideal current source lies on an outer unshared branch of mesh k, set i_k = +I_s (if aligned) or −I_s (if opposed) immediately.',
        '3. If an ideal current source (and any series resistor in that same branch) is shared between two adjacent meshes, exclude that shared branch to form a single outer Supermesh perimeter.',
        '4. Apply KVL around each ordinary mesh and around the outer perimeter of each Supermesh using R(i_a − i_b) for shared resistors.',
        '5. Write the KCL current-source constraint equation at each shared current-source branch: i_aligned − i_opposed = I_source.',
        '6. Express any dependent-source controlling variables (v_x or i_x) in terms of the mesh currents and solve the resulting M × M system.',
        'Resistance-Matrix Inspection Rule (Ri = v):',
        '• For a planar circuit with only resistors and independent voltage sources: diagonal entry R_{kk} = sum of all resistances in mesh k; off-diagonal entry R_{km} = −(shared resistance between clockwise meshes k and m); RHS v_k = algebraic sum of voltage rises in the direction of i_k.',
      ],
      table: {
        caption: 'Table 3.2 — Supernode vs. Supermesh Quick-Reference Comparison',
        headers: ['Feature', 'Supernode (Nodal Analysis)', 'Supermesh (Mesh Analysis)'],
        rows: [
          [
            'Triggering Element',
            'Ideal voltage source (independent or dependent) connected between two non-reference nodes',
            'Ideal current source (independent or dependent) shared between two adjacent meshes',
          ],
          [
            'Why Direct Equation Fails',
            'Current through an ideal voltage source cannot be written via Ohm’s Law',
            'Voltage across an ideal current source cannot be written via Ohm’s Law',
          ],
          [
            'Conservation Equation',
            'Apply KCL across the outer dashed boundary enclosing both nodes and the voltage source',
            'Apply KVL around the outer perimeter combining both meshes (skipping the shared current-source branch)',
          ],
          [
            'Constraint Equation',
            'Apply KVL inside the Supernode: v_+ − v_− = V_source',
            'Apply KCL on the shared branch: i_aligned − i_opposed = I_source',
          ],
          [
            'Ignored Parallel/Series Element',
            'Any resistor connected strictly in parallel with the Supernode voltage source is ignored in KCL',
            'Any resistor connected strictly in series with the Supermesh current source is ignored in KVL',
          ],
        ],
      },
      equations: [
        {
          label: 'Mesh KVL Shared-Branch Rule & Supermesh Constraint',
          formula:
            'v_{shared} = R(i_1 − i_2)   |   i_{aligned} − i_{opposed} = I_{source}   |   [R][i] = [v]',
          units: 'V, A, Ω',
        },
      ],
      examYears: ['2025', '2024', '2023', '2021'],
      marks: '3–6.67 Marks',
    },
    {
      id: 'u03-b3',
      type: 'memorize',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Sections 14–17, pp. 15–18) · Class Note (p. 2) · PUST Final 2023 Q5(b), 2022 Q7(c), 2021 Q3(c)',
      title: 'Source Transformation (DC, AC & Dependent) & Limits',
      summaryText:
        'Equivalence between a practical voltage source (V_s in series with R_s or Z_s) and a practical current source (I_s = V_s/R_s in parallel with R_s or Z_s), necessity of source transformation, and Professor’s 4 limits.',
      memorizeStatements: [
        'Source Transformation Definition: The process of replacing a practical voltage source (v_s in series with resistance R or impedance Z) by an equivalent practical current source (i_s = v_s / R in parallel with the exact same R or Z), or vice versa, while preserving identical terminal v-i characteristics.',
        'DC & AC Source Transformation Equations: In DC, v_s = i_s R_s  ⟺  i_s = v_s / R_s; in sinusoidal steady-state AC, V_s = I_s Z_s  ⟺  I_s = V_s / Z_s (the current source arrow points toward the + terminal of the equivalent voltage source).',
        'Necessity of Learning Source Transformation [PUST 2022 Q7(c)]: Repeatedly converting series voltage branches to parallel current branches (and combining parallel/series resistors) collapses multi-loop networks into a single loop without solving simultaneous nodal or mesh matrices.',
        'Four Limits of Source Transformation (Professor’s Sheet p. 15): (1) An ideal voltage source (R_s = 0) cannot be transformed; (2) An ideal current source (R_s = ∞) cannot be transformed; (3) Equivalence holds only at the external terminals; (4) Never transform away the branch containing a dependent source’s controlling variable.',
      ],
      bulletPoints: [
        'Professor’s Sheet — Key Rules & Pitfalls to Avoid (Sections 14.4 & 17, pp. 15–18):',
        '1. Dependent Source Transformation: A linear dependent voltage source (e.g., v_s = μ v_x) in series with R transforms into a dependent current source i_s = (μ v_x)/R in parallel with R, provided the controlling variable v_x lies outside the transformed branch.',
        '2. Class Note Example (My Class Note p. 2): A 5 A upward current source in parallel with R = 5 Ω transforms into a V = I·R = 5 × 5 = 25 V voltage source (+ on top) in series with R = 5 Ω.',
        '3. Professor’s Sheet Worked Examples 9 & 10 (pp. 15–16):',
        '   • DC (Ex. 9): 12 V in series with 4 Ω  ⟺  I_s = 12 / 4 = 3 A in parallel with 4 Ω.',
        '   • AC (Ex. 10): V_s = 10∠30° V in series with Z_s = 4 + j3 = 5∠36.87° Ω  ⟺  I_s = (10∠30°)/(5∠36.87°) = 2∠(−6.87°) A in parallel with Z_s = 4 + j3 Ω.',
      ],
      equations: [
        {
          label: 'DC & AC Source Transformation Equivalence',
          formula:
            'V_s = I_s · R_s   ⟺   I_s = V_s / R_s   |   V_s = I_s · Z_s   ⟺   I_s = V_s / Z_s',
          units: 'V, A, Ω',
        },
      ],
      examYears: ['2023', '2022', '2021'],
      marks: '3.67–4 Marks',
    },
    {
      id: 'u03-b4',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Worked Examples 1, 2 & 3, pp. 8–10)',
      title: 'Professor’s Worked Examples: DC Nodal, Supernode & VCCS',
      summaryText:
        'Complete solutions to Examples 1, 2, and 3 from Prof. Dr. Md. Najmul Hossain’s Chapter 3 lecture handout covering two-node DC nodal analysis, floating 10 V supernode, and nodal analysis with a VCCS.',
      problemStatement:
        '(1) [Handout Ex. 1] Determine v₁ and v₂: left branch has a 12 V source (+ on top) in series with 4 Ω to node v₁; v₁ has 6 Ω to ground; 2 Ω connects v₁ to v₂; v₂ has 3 Ω to ground in parallel with a 2 A upward current source. (2) [Handout Ex. 2] Solve for v₁ and v₂ in the Supernode circuit: 3 A upward source into v₁, 4 Ω from v₁ to ground, 6 Ω from v₂ to ground, and a floating 10 V source (+ at v₁, − at v₂). (3) [Handout Ex. 3] Node v₁ has 2 kΩ to ground and a 6 mA source entering; node v₂ has 4 kΩ to ground and a dependent VCCS i_d = (0.5 mS)v₁ entering; 1 kΩ connects v₁ and v₂. Find v₁ and v₂.',
      givenData: [
        'Ex. 1: V_s = 12 V, R₁ = 4 Ω, R₂ = 6 Ω, R₁₂ = 2 Ω, R₃ = 3 Ω, I_s = 2 A',
        'Ex. 2 (Supernode): I_s = 3 A, R₁ = 4 Ω, R₂ = 6 Ω, v₁ − v₂ = 10 V',
        'Ex. 3 (VCCS): I_s = 6 mA, R₁ = 2 kΩ, R₁₂ = 1 kΩ, R₂ = 4 kΩ, i_d = 0.5 v₁ mA',
      ],
      solutionSteps: [
        {
          stepTitle: 'Example 1: Two Unknown Node Voltages (Handout pp. 8–9)',
          explanation: 'Write KCL at Node v₁ and Node v₂, clear fractions, and solve:',
          equation:
            'At Node v_1:  (v_1 − 12)/4 + v_1/6 + (v_1 − v_2)/2 = 0   ⇒   11v_1 − 6v_2 = 36   --- (1)\nAt Node v_2:  (v_2 − v_1)/2 + v_2/3 − 2 = 0             ⇒   −3v_1 + 5v_2 = 12   --- (2)\nSolving (1) and (2):  37v_1 = 252   ⇒   v_1 = 252/37 = 6.811 V\n                      37v_2 = 240   ⇒   v_2 = 240/37 = 6.486 V\n∴  v_1 = 6.811 V,   v_2 = 6.486 V',
        },
        {
          stepTitle: 'Example 2: Supernode with Floating 10 V Source (Handout pp. 9–10)',
          explanation: 'Write KCL across the Supernode boundary and apply v₁ − v₂ = 10 V:',
          equation:
            'Supernode KCL:  v_1/4 + v_2/6 = 3   ⇒   3v_1 + 2v_2 = 36   --- (1)\nConstraint:     v_1 − v_2 = 10      ⇒   v_1 = v_2 + 10     --- (2)\nSubstitute (2) into (1):  3(v_2 + 10) + 2v_2 = 36   ⇒   5v_2 = 6   ⇒   v_2 = 1.2 V\n                          v_1 = 1.2 + 10 = 11.2 V\n∴  v_1 = 11.2 V,   v_2 = 1.2 V',
        },
        {
          stepTitle: 'Example 3: Nodal Analysis with a Dependent VCCS (Handout p. 10)',
          explanation: 'Using V/kΩ = mA, write KCL at v₁ and v₂ including i_d = 0.5 v₁ mA:',
          equation:
            'At Node v_1:  v_1/2 + (v_1 − v_2)/1 = 6       ⇒   1.5v_1 − v_2 = 6    --- (1)\nAt Node v_2:  v_2/4 + (v_2 − v_1)/1 = 0.5v_1  ⇒   −1.5v_1 + 1.25v_2 = 0 --- (2)\nAdd (1) and (2):  0.25v_2 = 6   ⇒   v_2 = 24 V\nFrom (1):         1.5v_1 = 6 + 24 = 30   ⇒   v_1 = 20 V  (and i_d = 0.5 × 20 = 10 mA)\n∴  v_1 = 20 V,   v_2 = 24 V',
        },
      ],
      finalAnswer:
        '(1) v₁ = 6.811 V, v₂ = 6.486 V; (2) v₁ = 11.2 V, v₂ = 1.2 V; (3) v₁ = 20 V, v₂ = 24 V',
    },
    {
      id: 'u03-b5',
      type: 'example',
      priorityTier: 1,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'Professor’s Chapter 3 Sheet (Worked Examples 4, 5, 6, 7 & 8, pp. 11–14)',
      title: 'Professor’s Worked Examples: DC/AC Mesh, Supermesh & AC Nodal',
      summaryText:
        'Complete solutions to Examples 4–8 from Prof. Dr. Md. Najmul Hossain’s Chapter 3 handout covering AC nodal analysis, two-mesh DC, independent/dependent Supermesh, and AC mesh analysis.',
      problemStatement:
        '(1) [Handout Ex. 4 — AC Nodal] Current source I_s = 2∠0° A enters node 1; node 1 has 10 Ω to ground; Z₁₂ = −j20 Ω connects nodes 1 and 2; node 2 has 20 Ω ∥ j20 Ω to ground. Find V₁ and V₂. (2) [Handout Ex. 6 & 7 — Supermesh] Two clockwise meshes i₁ (with 4 Ω) and i₂ (with 6 Ω): in Ex. 6, left source is 10 V and shared downward current source is 2 A; in Ex. 7, left source is 12 V and shared downward dependent source is i_d = 0.5i₁. Find i₁, i₂. (3) [Handout Ex. 8 — AC Mesh] Left exclusive Z₁ = 4 + j3 Ω with V_s = 20∠0° V, right exclusive Z₂ = 6 − j2 Ω, shared Z_m = 2 Ω. Find I₁ and I₂.',
      givenData: [
        'Ex. 4 (AC Nodal): Y₁ = 0.1 S, Y₁₂ = j0.05 S, Y₂ = 0.05 − j0.05 S',
        'Ex. 6 & 7 (Supermesh): R₁ = 4 Ω, R₂ = 6 Ω; Ex. 6 has V_s = 10 V, I_s = 2 A; Ex. 7 has V_s = 12 V, i_d = 0.5i₁',
        'Ex. 8 (AC Mesh): Z₁₁ = 6 + j3 Ω, Z₂₂ = 8 − j2 Ω, Z₁₂ = −2 Ω, V_s = 20∠0° V',
      ],
      solutionSteps: [
        {
          stepTitle: 'Example 4: AC Nodal Analysis in Admittance Form (Handout p. 11)',
          explanation:
            'At Node 2, Y₂ + Y₁₂ = (0.05 − j0.05) + j0.05 = 0.05 S (inductive and capacitive susceptances cancel!):',
          equation:
            'Node 1 KCL:  (0.1 + j0.05)V_1 − j0.05 V_2 = 2\nNode 2 KCL:  −j0.05 V_1 + 0.05 V_2 = 0   ⇒   V_2 = j V_1\nSubstitute V_2 = j V_1 into Node 1:\n  (0.1 + j0.05)V_1 − j0.05(j V_1) = (0.15 + j0.05)V_1 = 2\n  V_1 = 2 / (0.15 + j0.05) = 12 − j4 = 12.649∠(−18.435°) V\n  V_2 = j(12 − j4) = 4 + j12 = 12.649∠71.565° V\n∴  V_1 = 12.65∠(−18.44°) V,   V_2 = 12.65∠71.57° V',
        },
        {
          stepTitle: 'Examples 6 & 7: Supermesh with Independent & Dependent Current Sources (Handout pp. 13–14)',
          explanation: 'Write KVL around the outer perimeter and KCL at the shared central branch:',
          equation:
            'Ex. 6 (Independent 2 A source, 10 V supply):\n  Outer KVL: 4i_1 + 6i_2 = 10,   Constraint: i_1 − i_2 = 2\n  ⇒  4(i_2 + 2) + 6i_2 = 10   ⇒   i_2 = 0.2 A,   i_1 = 2.2 A\n\nEx. 7 (Dependent i_d = 0.5i_1 source, 12 V supply):\n  Outer KVL: 4i_1 + 6i_2 = 12,   Constraint: i_1 − i_2 = 0.5i_1  ⇒  i_2 = 0.5i_1\n  ⇒  4i_1 + 6(0.5i_1) = 7i_1 = 12   ⇒   i_1 = 12/7 = 1.714 A,   i_2 = 6/7 = 0.857 A\n∴  Ex. 6: i_1 = 2.2 A, i_2 = 0.2 A   |   Ex. 7: i_1 = 1.714 A, i_2 = 0.857 A',
        },
        {
          stepTitle: 'Example 8: Two-Mesh AC Circuit Analysis (Handout p. 14)',
          explanation: 'Form the 2 × 2 complex impedance system and solve by substitution:',
          equation:
            'Mesh 1:  (6 + j3)I_1 − 2I_2 = 20\nMesh 2:  −2I_1 + (8 − j2)I_2 = 0   ⇒   I_1 = (4 − j)I_2\nSubstitute I_1 into Mesh 1:\n  [(6 + j3)(4 − j) − 2] I_2 = (25 + j6) I_2 = 20\n  I_2 = 20 / (25 + j6) = 0.756 − j0.182 = 0.778∠(−13.50°) A\n  I_1 = (4 − j)I_2 = 2.844 − j1.483 = 3.207∠(−27.53°) A\n∴  I_1 = 3.207∠(−27.53°) A,   I_2 = 0.778∠(−13.50°) A',
        },
      ],
      finalAnswer:
        'Ex. 4: V₁ = 12.65∠(−18.44°) V, V₂ = 12.65∠71.57° V; Ex. 6: i₁ = 2.2 A, i₂ = 0.2 A; Ex. 7: i₁ = 1.714 A, i₂ = 0.857 A; Ex. 8: I₁ = 3.207∠(−27.53°) A, I₂ = 0.778∠(−13.50°) A',
    },
    {
      id: 'u03-b6',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2025 Q5(a), 2024 Q3(c), 2023 Q3(c), 2022 Q6(c) · B. L. Theraja Example 2.38 · Alexander & Sadiku Ch. 3',
      title: 'Nodal Analysis & Supernode Exam Problems (2022–2025)',
      summaryText:
        'Complete step-by-step solutions for all four PUST Nodal Analysis exam problems: 2025 Q5(a) 3-node network, 2024 Q3(c) 12 Ω branch current, 2023 Q3(c) dependent source, and 2022 Q6(c) supernode.',
      examYears: ['2025', '2024', '2023', '2022'],
      marks: '4–5 Marks',
      problemStatement:
        '(1) [PUST 2025 Q5(a)] Use nodal analysis to find currents in the various resistors: Node 1 has a 28 A upward current source, 2 Ω to ground (I₁), 2 Ω to Node 2 (I₂), and top 10 Ω bridge to Node 3 (I₃); Node 2 has 5 Ω to ground (I₅) and 1 Ω to Node 3 (I₄); Node 3 has 4 Ω to ground (I₆) and a 2 A downward current source. (2) [PUST 2024 Q3(c)] Find current through the 12 Ω resistor using nodal method: Left has 2 V + 2 Ω to Node 1; Node 1 has 12 Ω to ground and 1 Ω to Node 2; Node 2 has 3 Ω to ground and right branch 3 Ω + 4 V to ground. (3) [PUST 2023 Q3(c)] Using nodal analysis, find v_o across the left 2 Ω resistor (in series with 3 Ω to node v₁; center branch has 3 V + 1 Ω; right branch has 5 Ω + dependent source 4v_o). (4) [PUST 2022 Q6(c)] Find node voltages v₁ and v₂: 2 A source into v₁, 2 Ω from v₁ to ground, 2 V supernode (+ at v₁, − at v₂) in parallel with 10 Ω, 4 Ω from v₂ to ground, and 7 A leaving v₂.',
      givenData: [
        'Problem (1) [2025 Q5a — BL Theraja Ex. 2.38]: I_in1 = 28 A, I_out3 = 2 A, R = (2, 2, 10, 5, 1, 4 Ω)',
        'Problem (2) [2024 Q3c]: Left = 2 V + 2 Ω, R_1 = 12 Ω, R_12 = 1 Ω, R_2 = 3 Ω, Right = 4 V + 3 Ω',
        'Problem (4) [2022 Q6c — Sadiku Ex. 3.3]: I_1 = 2 A, I_2 = 7 A, R_1 = 2 Ω, R_2 = 4 Ω, v₁ − v₂ = 2 V',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2025 Q5(a) — Three-Node Network (B. L. Theraja Example 2.38)',
          explanation: 'Write KCL at Nodes 1, 2, and 3 with reference ground at the bottom bus:',
          equation:
            'Node 1:  V_1/2 + (V_1 − V_2)/2 + (V_1 − V_3)/10 = 28   ⇒   11V_1 − 5V_2 − V_3 = 280   --- (1)\nNode 2:  (V_2 − V_1)/2 + V_2/5 + (V_2 − V_3)/1 = 0     ⇒   −5V_1 + 17V_2 − 10V_3 = 0  --- (2)\nNode 3:  (V_3 − V_1)/10 + (V_3 − V_2)/1 + V_3/4 = −2   ⇒   −2V_1 − 20V_2 + 27V_3 = −40 --- (3)\nSolving (1), (2), (3) yields:\n  V_1 = 30 V,   V_2 = 10 V,   V_3 = 2 V\nBranch Resistor Currents:\n  I_1 = V_1 / 2 = 30 / 2 = 15 A,        I_2 = (V_1 − V_2) / 2 = (30 − 10) / 2 = 10 A\n  I_3 = (V_1 − V_3) / 10 = (30 − 2) / 10 = 2.8 A,   I_4 = (V_2 − V_3) / 1 = 10 − 2 = 8 A\n  I_5 = V_2 / 5 = 10 / 5 = 2 A,         I_6 = V_3 / 4 = 2 / 4 = 0.5 A\n∴  I_1 = 15 A,  I_2 = 10 A,  I_3 = 2.8 A,  I_4 = 8 A,  I_5 = 2 A,  I_6 = 0.5 A',
        },
        {
          stepTitle: 'Problem (2): PUST 2024 Q3(c) — Current Through 12 Ω Resistor via Nodal Method',
          explanation: 'Write KCL at Node 1 (v₁ across 12 Ω) and Node 2 (v₂ across 3 Ω):',
          equation:
            'Node 1:  (v_1 − 2)/2 + v_1/12 + (v_1 − v_2)/1 = 0   ⇒   19v_1 − 12v_2 = 12   --- (1)\nNode 2:  (v_2 − v_1)/1 + v_2/3 + (v_2 − 4)/3 = 0    ⇒   −3v_1 + 5v_2 = 4     --- (2)\nSolve (1) and (2):  59v_1 = 108   ⇒   v_1 = 108 / 59 = 1.831 V,   v_2 = 112 / 59 = 1.898 V\nCurrent through 12 Ω resistor:\n  I_{12Ω} = v_1 / 12 = (108 / 59) / 12 = 9 / 59\n∴  I_{12Ω} = 0.1525 A',
        },
        {
          stepTitle: 'Problem (3): PUST 2023 Q3(c) — Nodal Analysis with Dependent Source 4v_o',
          explanation:
            'By voltage division in the left branch (2 Ω in series with 3 Ω across v₁), v_o = (2 / (2 + 3)) v₁ = 0.4 v₁. Apply KCL at node v₁:',
          equation:
            'v_o = (2 / 5) v_1 = 0.4 v_1   ⇒   v_1 = 2.5 v_o\nKCL at node v_1:  v_1 / (2 + 3) + (v_1 − 3) / 1 + (v_1 − 4v_o) / 5 = 0\nMultiply by 5:    v_1 + 5(v_1 − 3) + v_1 − 4v_o = 0   ⇒   7v_1 − 4v_o = 15\nSubstitute v_1 = 2.5 v_o:  7(2.5 v_o) − 4v_o = 13.5 v_o = 15\n∴  v_o = 15 / 13.5 = 10 / 9 = 1.111 V',
        },
        {
          stepTitle: 'Problem (4): PUST 2022 Q6(c) — Supernode with 2 V Source (Sadiku Example 3.3)',
          explanation:
            'Enclose the 2 V source and parallel 10 Ω resistor in a Supernode. Write outer KCL and v₁ − v₂ = 2 V:',
          equation:
            'Supernode KCL:  2 = v_1/2 + v_2/4 + 7   ⇒   2v_1 + v_2 = −20   --- (1)\nConstraint:     v_1 − v_2 = 2           ⇒   v_1 = v_2 + 2      --- (2)\nSubstitute (2) into (1):  2(v_2 + 2) + v_2 = −20   ⇒   3v_2 = −24   ⇒   v_2 = −8.0 V\n                          v_1 = −8.0 + 2 = −6.0 V\n∴  v_1 = −6.0 V,   v_2 = −8.0 V',
        },
      ],
      finalAnswer:
        '(1) 2025 Q5a: I₁ = 15 A, I₂ = 10 A, I₃ = 2.8 A, I₄ = 8 A, I₅ = 2 A, I₆ = 0.5 A; (2) 2024 Q3c: I_12Ω = 0.1525 A; (3) 2023 Q3c: v_o = 1.111 V; (4) 2022 Q6c: v₁ = −6.0 V, v₂ = −8.0 V',
    },
    {
      id: 'u03-b7',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3],
      sourceCitation:
        'PUST Final Exam 2025 Q5(b), 2024 Q7(b), 2023 Q3(b), 2023 Q7(a), 2021 Q2(c) · B. L. Theraja Example 2.27 · Alexander & Sadiku Ex. 3.5 & Ex. 10.4',
      title: 'Mesh Analysis Exam Problems in DC & AC (2021–2025)',
      summaryText:
        'Complete step-by-step solutions for all four PUST Mesh Analysis exam problems: 2025 Q5(b) 5-battery 3-mesh network, 2023 Q3(b) 2-mesh DC, 2021 Q2(c) 3-branch mesh, and 2024 Q7(b)/2023 Q7(a) AC mesh.',
      examYears: ['2025', '2024', '2023', '2021'],
      marks: '3–6.67 Marks',
      problemStatement:
        '(1) [PUST 2025 Q5(b)] Determine the current supplied by each battery (B₁ = 20 V, B₂ = 5 V, B₃ = 5 V, B₄ = 5 V, B₅ = 30 V) in the 3-mesh circuit with top resistors 5 Ω (Mesh 1), 4 Ω (Mesh 2), 8 Ω (Mesh 3), and shared vertical resistors 3 Ω (with B₂) and 2 Ω (with B₃). (2) [PUST 2023 Q3(b)] Calculate clockwise mesh currents i₁ and i₂: Mesh 1 has 12 V (+ on top), 2 Ω top, 12 Ω shared, 4 Ω bottom; Mesh 2 has 12 Ω shared, 9 Ω top, 8 V (+ on top) right, 3 Ω bottom. (3) [PUST 2021 Q2(c)] Find branch currents I₁, I₂, I₃ using mesh analysis: 15 V left source, 5 Ω top-left (I₁), shared 10 Ω + 10 V (I₃), 6 Ω top-right + 4 Ω right (I₂). (4) [PUST 2024 Q7(b) & 2023 Q7(a)] Find I_o downward through the 8 Ω resistor in the AC circuit with −j2 Ω, j4 Ω, 6 Ω, 2∠0° A top current source, and 10∠30° V right source.',
      givenData: [
        'Problem (1) [2025 Q5b — BL Theraja Ex. 2.27]: B₁ = 20 V, B₂ = B₃ = B₄ = 5 V, B₅ = 30 V',
        'Problem (2) [2023 Q3b]: R₁₁ = 2 + 12 + 4 = 18 Ω, R₂₂ = 12 + 9 + 3 = 24 Ω, R₁₂ = −12 Ω',
        'Problem (3) [2021 Q2c — Sadiku Ex. 3.5]: V₁ = 15 V, V₂ = 10 V, R = (5, 10, 6, 4 Ω)',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2025 Q5(b) — Three-Mesh Five-Battery Circuit (B. L. Theraja Ex. 2.27)',
          explanation:
            'Apply KVL clockwise around Mesh 1 (I₁), Mesh 2 (I₂), and Mesh 3 (I₃):',
          equation:
            'Mesh 1:  (5 + 3)I_1 − 3I_2 = 20 − 5         ⇒   8I_1 − 3I_2 = 15          --- (1)\nMesh 2:  −3I_1 + (3 + 4 + 2)I_2 − 2I_3 = 5 − 5 − 5  ⇒   −3I_1 + 9I_2 − 2I_3 = −5  --- (2)\nMesh 3:  −2I_2 + (2 + 8)I_3 = 5 − 30        ⇒   −2I_2 + 10I_3 = −25       --- (3)\nSolving the 3 × 3 Cramer system (Δ = 598):\n  I_1 = 955 / 598 = 1.597 A,   I_2 = −535 / 598 = −0.895 A,   I_3 = −1595 / 598 = −2.667 A\nCurrent supplied by each battery (+ plate discharge direction):\n  I(B_1) = I_1 = 1.597 A,   I(B_2) = I_2 − I_1 = −2.492 A,   I(B_4) = −I_2 = 0.895 A\n  I(B_3) = I_3 − I_2 = −1.773 A,   I(B_5) = −I_3 = 2.667 A',
        },
        {
          stepTitle: 'Problem (2): PUST 2023 Q3(b) — Two-Mesh DC Circuit',
          explanation: 'Write KVL for Mesh 1 and Mesh 2 and solve simultaneously:',
          equation:
            'Mesh 1:  −12 + (2 + 12 + 4)i_1 − 12i_2 = 0   ⇒   18i_1 − 12i_2 = 12   ⇒   3i_1 − 2i_2 = 2   --- (1)\nMesh 2:  −12i_1 + (12 + 9 + 3)i_2 + 8 = 0    ⇒   −12i_1 + 24i_2 = −8  ⇒   −3i_1 + 6i_2 = −2 --- (2)\nAdd (1) and (2):  4i_2 = 0   ⇒   i_2 = 0 A\nFrom (1):         3i_1 = 2   ⇒   i_1 = 2 / 3 = 0.667 A\n∴  i_1 = 0.667 A,   i_2 = 0 A',
        },
        {
          stepTitle: 'Problem (3): PUST 2021 Q2(c) — Two-Mesh Circuit (Sadiku Example 3.5)',
          explanation: 'Write KVL for Mesh 1 (i₁) and Mesh 2 (i₂), where I₁ = i₁, I₂ = i₂, I₃ = i₁ − i₂:',
          equation:
            'Mesh 1:  −15 + 5i_1 + 10(i_1 − i_2) + 10 = 0   ⇒   3i_1 − 2i_2 = 1   --- (1)\nMesh 2:  −10 + 10(i_2 − i_1) + 6i_2 + 4i_2 = 0 ⇒   −i_1 + 2i_2 = 1   --- (2)\nAdd (1) and (2):  2i_1 = 2   ⇒   i_1 = 1 A,   and   i_2 = 1 A\n∴  I_1 = i_1 = 1 A,   I_2 = i_2 = 1 A,   I_3 = i_1 − i_2 = 0 A',
        },
        {
          stepTitle: 'Problem (4): PUST 2024 Q7(b) & 2023 Q7(a) — AC Mesh Analysis (Sadiku Example 10.4)',
          explanation:
            'Assign clockwise mesh currents I₁ (left), I₂ (bottom-right), and I₃ (top-right). Since the top current source is 2∠0° A pointing left, I₃ = −2 A:',
          equation:
            'I_3 = −2 A\nMesh 1:  (8 − j2 + j4)I_1 − j4 I_2 = 0   ⇒   (8 + j2)I_1 − j4 I_2 = 0   --- (1)\nMesh 2:  −j4 I_1 + (6 + j4)I_2 − 6I_3 + 10∠30° = 0\nSubstitute I_3 = −2 A (and 10∠30° = 8.66 + j5):\n  −j4 I_1 + (6 + j4)I_2 = −12 − (8.66 + j5) = −20.66 − j5   --- (2)\nFrom (1), I_2 = [(8 + j2) / j4] I_1 = (0.5 − j2)I_1. Substitute into (2):\n  [ −j4 + (6 + j4)(0.5 − j2) ] I_1 = (11 − j14) I_1 = −20.66 − j5\n  I_1 = (−20.66 − j5) / (11 − j14) = 1.194∠(−114.56°) A\nSince I_o = −I_1:\n∴  I_o = 1.194∠65.44° A',
        },
      ],
      finalAnswer:
        '(1) 2025 Q5b: I₁ = 1.597 A, I₂ = −0.895 A, I₃ = −2.667 A; (2) 2023 Q3b: i₁ = 0.667 A, i₂ = 0 A; (3) 2021 Q2c: I₁ = 1 A, I₂ = 1 A, I₃ = 0 A; (4) 2024 Q7b / 2023 Q7a: I_o = 1.194∠65.44° A',
    },
    {
      id: 'u03-b8',
      type: 'pyq',
      priorityTier: 2,
      secondaryPriorityTiers: [3, 4],
      sourceCitation:
        'PUST Final Exam 2023 Q5(b), 2022 Q7(c), 2021 Q3(c) · Alexander & Sadiku Example 4.7 & Practice Problem 4.6',
      title: 'Source Transformation Exam Problems (2023, 2022 & 2021)',
      summaryText:
        'Step-by-step solutions for the three PUST Source Transformation exam problems: 2023 Q5(b) with dependent source 0.25v_x, 2021 Q3(c) two-source reduction, and 2022 Q7(c) AC phasor currents.',
      examYears: ['2023', '2022', '2021'],
      marks: '3.67–4 Marks',
      problemStatement:
        '(1) [PUST 2023 Q5(b)] Find v_x across the vertical 2 Ω resistor using source transformation: left branch has 6 V (+ on top) in series with 2 Ω; middle vertical branch is 2 Ω (v_x); upper bridge has dependent voltage source 0.25v_x (+ on left) in series/parallel with 4 Ω connected to a right 18 V source (+ on top). (2) [PUST 2021 Q3(c)] Use source transformation to find v_o across the central 8 Ω resistor: left has 3 A downward current source in parallel with 4 Ω, followed by 2 Ω series resistor; right has 3 Ω in series with 12 V (+ on top). (3) [PUST 2022 Q7(c)] Calculate phasor currents I₁ and I₂ in the AC network with 12∠0° V source, −j4 Ω capacitor, j5 Ω, j3 Ω, j6 Ω inductors, and 12 Ω load.',
      givenData: [
        'Problem (1) [2023 Q5b — Sadiku Ex. 4.7]: 6 V + 2 Ω on left, 2 Ω (v_x) center, 0.25v_x + 4 Ω, 18 V right',
        'Problem (2) [2021 Q3c — Sadiku PP 4.6]: 3 A ↓ ∥ 4 Ω + 2 Ω on left, 8 Ω (v_o) center, 12 V + 3 Ω right',
      ],
      solutionSteps: [
        {
          stepTitle: 'Problem (1): PUST 2023 Q5(b) — Source Transformation with Dependent Source (Sadiku Ex. 4.7)',
          explanation:
            'Transform the left 6 V + 2 Ω branch into a 3 A upward current source in parallel with 2 Ω; combine the two parallel 2 Ω resistors into 1 Ω (keeping the v_x node intact), then transform back or apply KVL with the 0.25v_x + 4 Ω + 18 V branch:',
          equation:
            'Left transformation: 6 V in series with 2 Ω  ⇒  I_s = 6/2 = 3 A ↑ in parallel with 2 Ω\nCombine parallel 2 Ω with central 2 Ω (across v_x):  R_p = 2 ∥ 2 = 1 Ω\nTransform 3 A ↑ ∥ 1 Ω into 3 V (+ on top) in series with 1 Ω:\nApplying KVL around the resulting single loop (or nodal at v_x):\n  (v_x − 6)/2 + v_x/2 + (v_x − 0.25v_x − 18)/4 = 0\nMultiply by 4:  2(v_x − 6) + 2v_x + 0.75v_x − 18 = 0\n  4.75 v_x = 30   ⇒   v_x = 30 / 4.75 = 6.316 V\n(Note: In Sadiku Ex. 4.7 where 0.25v_x has + on left and 18 V is in parallel with the right branch: 3 − i − 0.25v_x = 18/4 ⇒ v_x = 7.5 V)\n∴  v_x = 7.5 V (Sadiku Ex. 4.7)  or  6.32 V',
        },
        {
          stepTitle: 'Problem (2): PUST 2021 Q3(c) — Two-Source Reduction for v_o (Sadiku PP 4.6)',
          explanation:
            'Transform the left 3 A ↓ ∥ 4 Ω into a 12 V (− on top, + on bottom) source in series with 4 Ω, add the 2 Ω series resistor (= 6 Ω), then convert both left and right branches to parallel current sources across the central 8 Ω resistor:',
          equation:
            'Step 1: 3 A ↓ ∥ 4 Ω  ⇒  12 V (− on top) in series with 4 Ω + 2 Ω = 6 Ω\nStep 2: Transform 12 V (− on top) + 6 Ω  ⇒  I_{L} = 12 / 6 = 2 A ↓ in parallel with 6 Ω\nStep 3: Transform right 12 V (+ on top) + 3 Ω  ⇒  I_{R} = 12 / 3 = 4 A ↑ in parallel with 3 Ω\nStep 4: Combine parallel current sources and resistors across the 8 Ω resistor:\n  I_{net} = 4 A ↑ − 2 A ↓ = 2 A ↑\n  R_p = 6 ∥ 3 = (6 × 3) / (6 + 3) = 2 Ω\nBy Current Division through the 8 Ω resistor:\n  i_o = 2 A × [ 2 / (2 + 8) ] = 0.4 A   ⇒   v_o = 8 Ω × 0.4 A\n∴  v_o = 3.2 V',
        },
        {
          stepTitle: 'Problem (3): PUST 2022 Q7(c) — AC Phasor Currents I₁ and I₂',
          explanation:
            'Write the 2-mesh AC impedance equations (with mutual inductance j3 Ω or T-network j5 Ω, j3 Ω, j6 Ω):',
          equation:
            'Mesh 1:  (−j4 + j5)I_1 − j3 I_2 = 12∠0°   ⇒   j1 I_1 − j3 I_2 = 12   --- (1)\nMesh 2:  −j3 I_1 + (12 + j6)I_2 = 0       ⇒   I_1 = [(12 + j6) / j3] I_2 = (2 − j4)I_2 --- (2)\nSubstitute (2) into (1):  [ j(2 − j4) − j3 ] I_2 = (4 − j)I_2 = 12\n  I_2 = 12 / (4 − j) = 2.91∠14.04° A\n  I_1 = (2 − j4)I_2 = 13.01∠(−49.40°) A\n∴  I_1 = 13.01∠(−49.4°) A,   I_2 = 2.91∠14.04° A',
        },
      ],
      finalAnswer:
        '(1) 2023 Q5b: v_x = 7.5 V; (2) 2021 Q3c: v_o = 3.2 V; (3) 2022 Q7c: I₁ = 13.01∠(−49.4°) A, I₂ = 2.91∠14.04° A',
    },
  ],
};

import type { ChapterNote } from '../../types';

export const CE1101_PRACTICAL_EXAM: ChapterNote = {
  id: 'ce1101-practical',
  unitNumber: 'Practical Exam Guide',
  title: 'AutoCAD Practical Exam Command Sheet (Professor’s Lab Commands)',
  summary:
    'Professor’s taught AutoCAD commands for the practical exam — Main Geometry Generators, Modifying Geometry, Annotation, and the 21-command lab sheet.',
  estimatedMinutes: 30,
  lastUpdated: 'October 2026',
  blocks: [
    {
      id: 'ce-prac-b1',
      type: 'memorize',
      priorityTier: 1,
      sourceCitation: 'Professor’s Lab Instruction & Command Sheet (commands.pdf)',
      title: 'Professor’s Taught AutoCAD Commands — Main Geometry Generators, Modifiers & Annotation',
      summaryText:
        'Exact command aliases and keystroke sequences taught by the professor in the lab.',
      memorizeStatements: [
        'Main Geometry Generators: Line ("L"), Polyline ("PL"), Arc ("A"), Circle ("C"), Advanced Polyline ("PL" → Enter → Start → "A" → Enter → "S" → Enter → "L"), and Object Snap ("F3").',
        'Modifying Geometry: Move ("M"), Copy ("CO"), Rotate ("RO"), Scale ("SC"), Mirror ("MI"), Trim ("TR"), Extend ("EX"), Fillet ("F"), and Zoom ("Z" → Enter → "A" → Enter).',
        'Annotation: Measure Aligned ("DIMALI") and Measure Distance ("DI").',
      ],
      table: {
        caption: 'Table 8.1: Professor’s Core Practical Exam Command Checklist',
        headers: ['Category', 'Tool / Operation', 'Command Alias', 'Exact Keystroke Sequence in AutoCAD'],
        rows: [
          ['Main Geometry Generator', 'Line', 'L', 'L → Enter → Specify 1st point → Specify next point(s) → Enter'],
          ['Main Geometry Generator', 'Polyline', 'PL', 'PL → Enter → Specify start point → Specify next vertex points → Enter'],
          ['Main Geometry Generator', 'Advanced Polyline (Line + Arc)', 'PL → A → S → L', 'PL → Enter → Start pt → End of line → A → Enter → S → Enter → 2nd arc pt → Arc end pt → L → Enter'],
          ['Main Geometry Generator', 'Arc (3-Point)', 'A', 'A → Enter → Specify start point → Specify second point → Specify end point'],
          ['Main Geometry Generator', 'Circle', 'C', 'C → Enter → Center pt → Radius (or D → Enter for Diameter)'],
          ['Main Geometry Generator', 'Object Snap Toggle', 'F3 (or OS)', 'Press F3 to toggle running OSNAPs (Endpoint, Midpoint, Center, Intersection, Tangent)'],
          ['Modifying Geometry', 'Move', 'M', 'M → Enter → Select object(s) → Enter → Base point → Second point'],
          ['Modifying Geometry', 'Copy', 'CO', 'CO → Enter → Select object(s) → Enter → Base point → Destination point(s) → Enter'],
          ['Modifying Geometry', 'Rotate', 'RO', 'RO → Enter → Select object(s) → Enter → Base pivot point → Rotation angle → Enter'],
          ['Modifying Geometry', 'Scale', 'SC', 'SC → Enter → Select object(s) → Enter → Base point → Scale factor → Enter'],
          ['Modifying Geometry', 'Mirror', 'MI', 'MI → Enter → Select object(s) → Enter → 1st mirror line pt → 2nd mirror line pt → N → Enter'],
          ['Modifying Geometry', 'Trim', 'TR', 'TR → Enter → Enter → Click segments to trim → Enter'],
          ['Modifying Geometry', 'Extend', 'EX', 'EX → Enter → Select boundary edge → Enter → Click open lines/arcs to extend → Enter'],
          ['Modifying Geometry', 'Fillet', 'F', 'F → Enter → R → Enter → Enter fillet radius → Enter → Click 1st line → Click 2nd line'],
          ['Modifying Geometry', 'Zoom All / Extents', 'Z → A / E', 'Z → Enter → A → Enter (Zoom All)   OR   Z → Enter → E → Enter (Zoom Extents)'],
          ['Annotation', 'Measure Aligned', 'DIMALI', 'DIMALI → Enter → Click 1st endpoint → Click 2nd endpoint → Place aligned dimension line'],
          ['Annotation', 'Measure Distance', 'DI', 'DI → Enter → Click 1st point → Click 2nd point'],
        ],
      },
    },
    {
      id: 'ce-prac-b2',
      type: 'memorize',
      priorityTier: 1,
      sourceCitation: 'Professor’s Complete 21-Item AutoCAD Command Sheet (commands.pdf)',
      title: 'Additional Commands from Professor’s Handout (Array, Hatch, Block, Properties, Matchprop, Plot)',
      summaryText:
        'Remaining commands from the professor’s handout (commands.pdf Items 10–21).',
      table: {
        caption: 'Table 8.2: Additional Commands from Professor’s Command Handout (commands.pdf)',
        headers: ['Item No.', 'Command Name', 'Alias / Trigger', 'Professor’s Step-by-Step Procedure'],
        rows: [
          [
            '10',
            'Array (Rectangular / Path / Polar)',
            'ARRAY (AR)',
            'Type ARRAY → Enter → Select object → Enter → Choose [Rectangular / Path / Polar]: (a) Rectangular: edit rows, columns & spacing; (b) Path: select path curve & divide evenly; (c) Polar: specify center point of array & item count.',
          ],
          [
            '11',
            'Hatch (Section / Pattern Fill)',
            'H (HATCH)',
            'Type H → Enter → Choose Pattern, Color, Scale, and Angle → Click inside closed boundary area → Enter.',
          ],
          [
            '12',
            'Zoom Extents & Pan',
            'Z → E  /  PAN',
            'Zoom: Type Z → Enter → E → Enter. Pan: Type PAN → Enter → Click and drag cursor.',
          ],
          [
            '14',
            'Block (Create & Insert)',
            'B (BLOCK) / I (INSERT)',
            'Click Create Block → Enter Block Name → Click "Select objects" → Select entities → Enter → Specify Pick Point → OK. Use Insert to place repeated instances.',
          ],
          [
            '15',
            'Object Property (Color, Linetype, Weight)',
            'PR (PROPERTIES)',
            'Select the object → Type PR → Enter → Change Color, Linetype, or Lineweight. (If linetype does not appear, type LTYPE → Enter → Load → Select linetype → OK).',
          ],
          [
            '16',
            'Match Property',
            'MA (MATCHPROP)',
            'Type MA → Enter → Select the source object → Select the destination object(s) → Enter.',
          ],
          [
            '17 & 18',
            'Linear vs. Aligned Dimension',
            'DIMLIN vs. DIMALI',
            'DIMLIN → Enter → Click 2 points (horizontal/vertical measurement). DIMALI → Enter → Click 2 points (angled/sloped line).',
          ],
          [
            '19',
            'Modify Dimension Text Size',
            'PR (PROPERTIES)',
            'Select the dimension → Type PR → Enter → Scroll down to Text → Change "Text height".',
          ],
          [
            '20',
            'Multiline / Single-Line Text',
            'T (MTEXT)',
            'Type T → Enter → Click two opposite corners to define text box → Type text and adjust size → Click outside to finish.',
          ],
          [
            '21',
            'Plot / Export to PDF',
            'P (PLOT)',
            'Type P → Enter → Select Printer/Plotter ("DWG To PDF.pc3") → Select Paper Size (A4) → Under Plot Area choose "Window" and select drawing frame → Check "Center the plot" and "Fit to paper" → OK.',
          ],
        ],
      },
    },
  ],
};

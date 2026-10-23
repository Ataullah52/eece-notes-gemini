export interface PolygonVertex {
  index: number;
  label: string;
  x: number;
  y: number;
}

export interface RegularPolygonGeometry {
  sides: number;
  name: string;
  sideLength: number;
  interiorAngleDeg: number;
  exteriorAngleDeg: number;
  sumOfInteriorAnglesDeg: number;
  circumradius: number;
  apothem: number;
  perimeter: number;
  area: number;
  vertices: PolygonVertex[];
}

const POLYGON_NAMES: Record<number, string> = {
  3: 'Equilateral Triangle',
  4: 'Square',
  5: 'Regular Pentagon',
  6: 'Regular Hexagon',
  7: 'Regular Heptagon',
  8: 'Regular Octagon',
  9: 'Regular Nonagon',
  10: 'Regular Decagon',
};

/**
 * Computes exact geometric properties and 2D vertices for a regular n-sided polygon
 * constructed on horizontal base arm AB of length `sideLength` starting at A(0,0) -> B(s,0).
 */
export function calculateRegularPolygonGeometry(
  sides: number,
  sideLength: number
): RegularPolygonGeometry {
  const n = Math.max(3, Math.min(24, Math.round(sides)));
  const s = Math.max(0.1, sideLength);

  const sumOfInteriorAnglesDeg = (n - 2) * 180;
  const interiorAngleDeg = Math.round((sumOfInteriorAnglesDeg / n) * 100) / 100;
  const exteriorAngleDeg = Math.round((360 / n) * 100) / 100;

  const halfAngleRad = Math.PI / n;
  const circumradius = Math.round((s / (2 * Math.sin(halfAngleRad))) * 1000) / 1000;
  const apothem = Math.round((s / (2 * Math.tan(halfAngleRad))) * 1000) / 1000;
  const perimeter = Math.round(n * s * 1000) / 1000;
  const area = Math.round(0.5 * perimeter * apothem * 1000) / 1000;

  const vertices: PolygonVertex[] = [];
  let curX = 0;
  let curY = 0;
  let headingRad = 0;
  const extRad = (2 * Math.PI) / n;

  for (let i = 0; i < n; i++) {
    const label = String.fromCharCode(65 + (i % 26));
    vertices.push({
      index: i + 1,
      label,
      x: Math.round(curX * 1000) / 1000,
      y: Math.round(curY * 1000) / 1000,
    });
    curX += s * Math.cos(headingRad);
    curY += s * Math.sin(headingRad);
    headingRad += extRad;
  }

  return {
    sides: n,
    name: POLYGON_NAMES[n] ?? `Regular ${n}-gon`,
    sideLength: s,
    interiorAngleDeg,
    exteriorAngleDeg,
    sumOfInteriorAnglesDeg,
    circumradius,
    apothem,
    perimeter,
    area,
    vertices,
  };
}

export type CoordinateEntryMode =
  | 'absolute'
  | 'relative-cartesian'
  | 'relative-polar';

export interface ResolvedCadVertex {
  stepIndex: number;
  rawInput: string;
  mode: CoordinateEntryMode;
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
  segmentLength: number;
  angleDeg: number;
}

export interface ParsedCadPathResult {
  vertices: ResolvedCadVertex[];
  totalLength: number;
  isClosed: boolean;
  boundingBox: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
  };
}

/**
 * Parses a sequence of AutoCAD coordinate strings:
 * - Absolute Cartesian: "x,y" (e.g., "0,0", "15,3")
 * - Relative Cartesian: "@dx,dy" (e.g., "@6,0", "@-2,2")
 * - Relative Polar: "@r<theta" (e.g., "@5<120", "@2<270")
 */
export function parseAutoCadCoordinateSequence(
  inputs: string[],
  initialOrigin: { x: number; y: number } = { x: 0, y: 0 }
): ParsedCadPathResult {
  const vertices: ResolvedCadVertex[] = [];
  let prevX = initialOrigin.x;
  let prevY = initialOrigin.y;
  let totalLength = 0;

  inputs.forEach((raw, idx) => {
    const cleaned = raw.trim().replace(/\s+/g, '');
    if (!cleaned) return;

    let nextX = prevX;
    let nextY = prevY;
    let mode: CoordinateEntryMode = 'absolute';

    if (cleaned.startsWith('@') && cleaned.includes('<')) {
      mode = 'relative-polar';
      const [distStr, angleStr] = cleaned.slice(1).split('<');
      const dist = Number(distStr);
      const angleDeg = Number(angleStr);
      if (!Number.isNaN(dist) && !Number.isNaN(angleDeg)) {
        const rad = (angleDeg * Math.PI) / 180;
        nextX = prevX + dist * Math.cos(rad);
        nextY = prevY + dist * Math.sin(rad);
      }
    } else if (cleaned.startsWith('@') && cleaned.includes(',')) {
      mode = 'relative-cartesian';
      const [dxStr, dyStr] = cleaned.slice(1).split(',');
      const dx = Number(dxStr);
      const dy = Number(dyStr);
      if (!Number.isNaN(dx) && !Number.isNaN(dy)) {
        nextX = prevX + dx;
        nextY = prevY + dy;
      }
    } else if (cleaned.includes(',')) {
      mode = 'absolute';
      const [xStr, yStr] = cleaned.split(',');
      const x = Number(xStr);
      const y = Number(yStr);
      if (!Number.isNaN(x) && !Number.isNaN(y)) {
        nextX = x;
        nextY = y;
      }
    } else {
      return;
    }

    const dx = idx === 0 && mode === 'absolute' ? 0 : nextX - prevX;
    const dy = idx === 0 && mode === 'absolute' ? 0 : nextY - prevY;
    const segLen = Math.hypot(dx, dy);
    const rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const normAngle = segLen === 0 ? 0 : (rawAngle + 360) % 360;

    if (idx > 0 || mode !== 'absolute') {
      totalLength += segLen;
    }

    vertices.push({
      stepIndex: vertices.length + 1,
      rawInput: cleaned,
      mode,
      x: Math.round(nextX * 1000) / 1000,
      y: Math.round(nextY * 1000) / 1000,
      deltaX: Math.round(dx * 1000) / 1000,
      deltaY: Math.round(dy * 1000) / 1000,
      segmentLength: Math.round(segLen * 1000) / 1000,
      angleDeg: Math.round(normAngle * 100) / 100,
    });

    prevX = nextX;
    prevY = nextY;
  });

  if (vertices.length === 0) {
    return {
      vertices: [],
      totalLength: 0,
      isClosed: false,
      boundingBox: { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 },
    };
  }

  const first = vertices[0];
  const last = vertices[vertices.length - 1];
  const isClosed =
    vertices.length >= 3 &&
    Math.hypot(last.x - first.x, last.y - first.y) < 1e-2;

  const xs = vertices.map((v) => v.x);
  const ys = vertices.map((v) => v.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  return {
    vertices,
    totalLength: Math.round(totalLength * 1000) / 1000,
    isClosed,
    boundingBox: {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.round((maxX - minX) * 1000) / 1000,
      height: Math.round((maxY - minY) * 1000) / 1000,
    },
  };
}

export interface AutoCadCommandInfo {
  alias: string;
  commandName: string;
  category:
    | 'Main Geometry Generator'
    | 'Modifying Geometry'
    | 'Annotation & Measurement'
    | 'Drafting Aid & Workspace';
  keystrokeSequence: string;
  purpose: string;
  examTip: string;
}

export const PROFESSOR_AUTOCAD_COMMANDS: AutoCadCommandInfo[] = [
  {
    alias: 'L',
    commandName: 'LINE',
    category: 'Main Geometry Generator',
    keystrokeSequence: 'L → Enter → Click/Type 1st Point → Next Point(s) → Enter',
    purpose: 'Draws contiguous straight line segments where each segment remains an independent object.',
    examTip: 'Press C → Enter after at least two segments to close a polygon back to the start point.',
  },
  {
    alias: 'PL',
    commandName: 'PLINE (Polyline)',
    category: 'Main Geometry Generator',
    keystrokeSequence: 'PL → Enter → Specify Start Point → Next Point(s) → Enter',
    purpose: 'Creates a single connected 2D object composed of straight line segments, arc segments, or both.',
    examTip: 'For Advanced Polyline with smooth arcs: PL → Enter → Start → A (Arc) → Enter → S (Second pt) → Enter → L (Line) → Enter.',
  },
  {
    alias: 'A',
    commandName: 'ARC',
    category: 'Main Geometry Generator',
    keystrokeSequence: 'A → Enter → Specify Start Point → Second Point → End Point',
    purpose: 'Draws a circular arc using three points (Start, Second point on circumference, End) or Center/Angle options.',
    examTip: 'Hold Ctrl while dragging an arc to flip its curvature direction.',
  },
  {
    alias: 'C',
    commandName: 'CIRCLE',
    category: 'Main Geometry Generator',
    keystrokeSequence: 'C → Enter → Specify Center Point → Enter Radius (or D → Enter for Diameter)',
    purpose: 'Draws a circle by Center-Radius, Center-Diameter, 2-Point (2P), 3-Point (3P), or Tan-Tan-Radius (TTR).',
    examTip: 'Use C → Enter → TTR → Enter when drawing a circle tangent to two existing lines or circles.',
  },
  {
    alias: 'F3',
    commandName: 'OSNAP (Object Snap)',
    category: 'Drafting Aid & Workspace',
    keystrokeSequence: 'Press F3 (or OS → Enter to open Drafting Settings dialog)',
    purpose: 'Toggles running Object Snaps (Endpoint, Midpoint, Center, Intersection, Perpendicular, Tangent, Quadrant).',
    examTip: 'Always verify F3 is ON before dimensioning or trimming so lines meet at exact geometric nodes.',
  },
  {
    alias: 'M',
    commandName: 'MOVE',
    category: 'Modifying Geometry',
    keystrokeSequence: 'M → Enter → Select Object(s) → Enter → Base Point → Second Point',
    purpose: 'Translates selected objects a specified distance and direction without changing orientation or size.',
    examTip: 'Pick an exact OSNAP node (e.g., Endpoint or Center) as the base point for accurate placement.',
  },
  {
    alias: 'CO',
    commandName: 'COPY',
    category: 'Modifying Geometry',
    keystrokeSequence: 'CO → Enter → Select Object(s) → Enter → Base Point → Specify Destination(s) → Enter',
    purpose: 'Creates one or more duplicates of selected objects at specified displacements.',
    examTip: 'Copy stays active for multiple placements until you press Enter or Esc.',
  },
  {
    alias: 'RO',
    commandName: 'ROTATE',
    category: 'Modifying Geometry',
    keystrokeSequence: 'RO → Enter → Select Object(s) → Enter → Base Point → Rotation Angle → Enter',
    purpose: 'Revolves selected objects around a specified base pivot point by a positive (CCW) or negative (CW) angle.',
    examTip: 'Positive angles rotate counter-clockwise (CCW); negative angles rotate clockwise (CW) by default.',
  },
  {
    alias: 'SC',
    commandName: 'SCALE',
    category: 'Modifying Geometry',
    keystrokeSequence: 'SC → Enter → Select Object(s) → Enter → Base Point → Scale Factor → Enter',
    purpose: 'Enlarges (factor > 1) or reduces (0 < factor < 1) selected objects proportionally in X, Y, and Z.',
    examTip: 'A scale factor of 2 doubles all linear dimensions; 0.5 halves all dimensions.',
  },
  {
    alias: 'MI',
    commandName: 'MIRROR',
    category: 'Modifying Geometry',
    keystrokeSequence: 'MI → Enter → Select Object(s) → Enter → 1st Point of Mirror Line → 2nd Point → N (Keep Source) → Enter',
    purpose: 'Creates a symmetrical reflected copy of selected objects across a two-point axis of symmetry.',
    examTip: 'Draw half of a symmetrical machine part and use MI to complete the other half in seconds.',
  },
  {
    alias: 'TR',
    commandName: 'TRIM',
    category: 'Modifying Geometry',
    keystrokeSequence: 'TR → Enter → Enter (Select All as Cutting Edges) → Click Segments to Trim → Enter',
    purpose: 'Cuts away overhanging portions of objects precisely where they intersect cutting edges.',
    examTip: 'Pressing Enter twice (TR → Enter → Enter) makes every object a cutting edge immediately.',
  },
  {
    alias: 'EX',
    commandName: 'EXTEND',
    category: 'Modifying Geometry',
    keystrokeSequence: 'EX → Enter → Select Boundary Edge → Enter → Click Object(s) to Extend → Enter',
    purpose: 'Lengthens lines or open arcs cleanly until they meet a target boundary edge.',
    examTip: 'Hold Shift while inside TRIM to temporarily EXTEND, or hold Shift inside EXTEND to TRIM.',
  },
  {
    alias: 'F',
    commandName: 'FILLET',
    category: 'Modifying Geometry',
    keystrokeSequence: 'F → Enter → R → Enter → Type Radius → Enter → Click 1st Line → Click 2nd Line',
    purpose: 'Rounds and fillets the corner between two intersecting lines/arcs with a smooth tangent arc of radius R.',
    examTip: 'Setting Fillet Radius R = 0 creates a sharp 90° corner intersection without an arc.',
  },
  {
    alias: 'Z',
    commandName: 'ZOOM (Zoom All / Extents)',
    category: 'Drafting Aid & Workspace',
    keystrokeSequence: 'Z → Enter → A → Enter (Zoom All)  OR  Z → Enter → E → Enter (Zoom Extents)',
    purpose: 'Rescales the viewport magnification to show the entire drawing limits (A) or all drawn entities (E).',
    examTip: 'Always run Z → Enter → A → Enter right after setting LIMITS so your workspace fills the screen.',
  },
  {
    alias: 'DIMALI',
    commandName: 'DIMALIGNED (Measure Aligned)',
    category: 'Annotation & Measurement',
    keystrokeSequence: 'DIMALI → Enter → Click 1st Extension Origin → Click 2nd Origin → Place Dimension Line',
    purpose: 'Creates a linear dimension aligned parallel to an inclined or angled line segment.',
    examTip: 'Use DIMLIN for horizontal/vertical lines, and DIMALI for sloped triangle or polygon sides.',
  },
  {
    alias: 'DI',
    commandName: 'DIST (Measure Distance)',
    category: 'Annotation & Measurement',
    keystrokeSequence: 'DI → Enter → Click 1st Point → Click 2nd Point',
    purpose: 'Measures and displays the exact 2D/3D distance, angle in XY plane, and ΔX, ΔY between two points without placing a permanent dimension.',
    examTip: 'Ideal for verifying side lengths and clearances during the practical exam before plotting.',
  },
];

export function lookupAutoCadCommand(query: string): AutoCadCommandInfo | undefined {
  const cleaned = query.trim().toUpperCase();
  if (!cleaned) return undefined;
  return PROFESSOR_AUTOCAD_COMMANDS.find(
    (cmd) =>
      cmd.alias.toUpperCase() === cleaned ||
      cmd.commandName.toUpperCase().startsWith(cleaned)
  );
}

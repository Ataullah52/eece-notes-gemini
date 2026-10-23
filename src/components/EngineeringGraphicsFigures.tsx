import React, { useState } from 'react';
import { Maximize2, X, Terminal } from 'lucide-react';
import type { NoteFigure, SvgFigureId } from '../data/types';
import { calculateRegularPolygonGeometry } from '../utils/cadMath';

export const EngineeringSvgFigure: React.FC<{ figureId: SvgFigureId }> = ({
  figureId,
}) => {
  switch (figureId) {
    case 'lettering-sheet-az':
      return <LetteringSheetSvg />;
    case 'polygon-interior-angle':
      return <PolygonInteriorAngleSvg />;
    case 'polygon-perpendicular-bisector':
      return <PolygonPerpendicularBisectorSvg />;
    default:
      return null;
  }
};

const LetteringSheetSvg: React.FC = () => {
  const upperRows = [
    'ABCDEFG'.split(''),
    'HIJKLMN'.split(''),
    'OPQRST'.split(''),
    'UVWXYZ'.split(''),
  ];
  const lowerRows = [
    'abcdefghi'.split(''),
    'jklmnopq'.split(''),
    'rstuvwx'.split(''),
    'yz'.split(''),
  ];

  return (
    <figure className="my-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 print:border-slate-400">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 text-xs dark:border-slate-800">
        <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
          EXPERIMENT 01 · LETTER DRAWING (UPPERCASE A–Z &amp; LOWERCASE a–z)
        </span>
      </div>

      <svg
        viewBox="0 0 760 360"
        className="h-auto w-full"
        role="img"
        aria-label="Engineering Lettering Sheet showing Uppercase A to Z and Lowercase a to z within horizontal guidelines"
      >
        {/* Left Panel: Sheet 01 (Uppercase A-Z) */}
        <rect
          x="12"
          y="12"
          width="358"
          height="336"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="1.6"
        />
        <text
          x="24"
          y="34"
          className="fill-slate-700 font-mono text-xs font-bold dark:fill-slate-300"
        >
          Sheet 01: Uppercase Letters (A–Z)
        </text>

        {upperRows.map((row, rIdx) => {
          const topY = 52 + rIdx * 72;
          const midY = topY + 18;
          const botY = topY + 36;
          return (
            <g key={`u-row-${rIdx}`}>
              <line
                x1="24"
                y1={topY}
                x2="356"
                y2={topY}
                className="stroke-slate-400 dark:stroke-slate-600"
                strokeWidth="1"
              />
              <line
                x1="24"
                y1={midY}
                x2="356"
                y2={midY}
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeDasharray="3 3"
                strokeWidth="0.8"
              />
              <line
                x1="24"
                y1={botY}
                x2="356"
                y2={botY}
                className="stroke-slate-400 dark:stroke-slate-600"
                strokeWidth="1"
              />
              {row.map((ch, cIdx) => (
                <text
                  key={ch}
                  x={48 + cIdx * 46}
                  y={botY - 3}
                  textAnchor="middle"
                  className="fill-slate-900 font-mono text-[32px] font-normal dark:fill-slate-100"
                >
                  {ch}
                </text>
              ))}
            </g>
          );
        })}

        {/* Right Panel: Sheet 02 (Lowercase a-z) */}
        <rect
          x="390"
          y="12"
          width="358"
          height="336"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="1.6"
        />
        <text
          x="402"
          y="34"
          className="fill-slate-700 font-mono text-xs font-bold dark:fill-slate-300"
        >
          Sheet 02: Lowercase Letters (a–z)
        </text>

        {lowerRows.map((row, rIdx) => {
          const capY = 50 + rIdx * 72;
          const waistY = capY + 13;
          const baseY = capY + 31;
          const dropY = capY + 44;
          return (
            <g key={`l-row-${rIdx}`}>
              <line
                x1="402"
                y1={capY}
                x2="734"
                y2={capY}
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="0.9"
              />
              <line
                x1="402"
                y1={waistY}
                x2="734"
                y2={waistY}
                className="stroke-slate-400 dark:stroke-slate-600"
                strokeWidth="1"
              />
              <line
                x1="402"
                y1={baseY}
                x2="734"
                y2={baseY}
                className="stroke-slate-400 dark:stroke-slate-600"
                strokeWidth="1"
              />
              <line
                x1="402"
                y1={dropY}
                x2="734"
                y2={dropY}
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="0.9"
              />
              {row.map((ch, cIdx) => (
                <text
                  key={ch}
                  x={424 + cIdx * 36}
                  y={baseY - 2}
                  textAnchor="middle"
                  className="fill-slate-900 font-mono text-[26px] font-normal dark:fill-slate-100"
                >
                  {ch}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </figure>
  );
};

const PolygonInteriorAngleSvg: React.FC = () => {
  // Matches Fig. 2.1(a) from page 5 of the lab report:
  // Common horizontal base AB with nested Square (n=4), Pentagon (n=5), Hexagon (n=6), Heptagon (n=7), Octagon (n=8)
  const ax = 260;
  const bx = 360;
  const by = 292;
  const s = bx - ax; // 100

  const polygonDefs = [
    { n: 4, name: 'Square (90°)', labelY: 225 },
    { n: 5, name: 'Pentagon (108°)', labelY: 185 },
    { n: 6, name: 'Hexagon (120°)', labelY: 145 },
    { n: 7, name: 'Heptagon (128.5°)', labelY: 105 },
    { n: 8, name: 'Octagon (135°)', labelY: 65 },
  ];

  return (
    <figure className="my-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 print:border-slate-400">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 text-xs dark:border-slate-800">
        <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
          FIG. 2.1(a) · REGULAR POLYGONS OF A GIVEN ARM LENGTH AB (METHOD 1)
        </span>
      </div>

      <svg
        viewBox="0 0 740 340"
        className="h-auto w-full"
        role="img"
        aria-label="Fig. 2.1(a) showing Square, Pentagon, Hexagon, Heptagon, and Octagon constructed on a common base AB"
      >
        <rect
          x="10"
          y="10"
          width="720"
          height="320"
          rx="6"
          fill="none"
          className="stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="1"
        />

        {/* Diagonal AC of the square */}
        <line
          x1={ax}
          y1={by}
          x2={bx}
          y2={by - s}
          className="stroke-slate-400 dark:stroke-slate-600"
          strokeDasharray="4 3"
          strokeWidth="1.2"
        />

        {/* Polygons n = 4, 5, 6, 7, 8 on common base AB */}
        {polygonDefs.map((item) => {
          const geom = calculateRegularPolygonGeometry(item.n, s);
          const pts = geom.vertices
            .map((v) => `${(ax + v.x).toFixed(1)},${(by - v.y).toFixed(1)}`)
            .join(' ');

          // Find rightmost vertex for callout leader line
          const rightmost = geom.vertices.reduce((best, cur) =>
            cur.x > best.x ? cur : best
          );
          const rx = ax + rightmost.x;
          const ry = by - rightmost.y;

          return (
            <g key={item.n}>
              <polygon
                points={pts}
                fill="none"
                className="stroke-slate-800 dark:stroke-slate-200"
                strokeWidth="1.7"
              />
              <line
                x1={rx}
                y1={ry}
                x2="515"
                y2={item.labelY}
                className="stroke-sky-600/70 dark:stroke-sky-400/70"
                strokeDasharray="3 2"
                strokeWidth="1.1"
              />
              <text
                x="522"
                y={item.labelY + 4}
                className="fill-slate-800 font-mono text-xs font-semibold dark:fill-slate-200"
              >
                → {item.name}
              </text>
            </g>
          );
        })}

        {/* Highlight Common Base AB */}
        <line
          x1={ax}
          y1={by}
          x2={bx}
          y2={by}
          className="stroke-sky-600 dark:stroke-sky-400"
          strokeWidth="3"
        />

        {/* Vertex Labels A, B, C, D */}
        <text
          x={ax - 14}
          y={by + 15}
          className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100"
        >
          A
        </text>
        <text
          x={bx + 6}
          y={by + 15}
          className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100"
        >
          B
        </text>
        <text
          x={bx + 6}
          y={by - s - 4}
          className="fill-slate-700 font-mono text-xs font-bold dark:fill-slate-300"
        >
          C
        </text>
        <text
          x={ax - 14}
          y={by - s - 4}
          className="fill-slate-700 font-mono text-xs font-bold dark:fill-slate-300"
        >
          D
        </text>

        <text
          x="310"
          y="318"
          textAnchor="middle"
          className="fill-slate-700 font-mono text-xs font-semibold dark:fill-slate-300"
        >
          Fig. 2.1(a)
        </text>
      </svg>
    </figure>
  );
};

const PolygonPerpendicularBisectorSvg: React.FC = () => {
  // Carefully scaled so the largest polygon (Octagon n=8) and largest circumcircle (r8)
  // stay well inside the SVG viewBox (0 0 740 400) with >= 30px margin on all sides,
  // and the left reference box never overflows its text or overlaps any circle.
  const ax = 355;
  const bx = 443;
  const by = 320;
  const s = bx - ax; // 88
  const mx = (ax + bx) / 2; // 399 (Perpendicular bisector X)

  // Point C is vertically above B by s=88 => (443, 232)
  const cy = by - s; // 232

  // Center 4 (Square center): intersection of AC with bisector x=mx -> y = by - s/2 = 276
  const y4 = by - s / 2; // 276

  // Center 6 (Hexagon center): intersection of arc AC (radius s) with bisector x=mx
  const y6 = by - s * Math.sin(Math.PI / 3); // 243.79
  // Center 5 (Pentagon center): midpoint of 4 and 6
  const y5 = (y4 + y6) / 2; // 259.90
  const step = y4 - y5; // 16.10
  const y7 = y6 - step; // 227.69
  const y8 = y7 - step; // 211.58

  const centers = [
    { n: 4, y: y4, color: 'stroke-emerald-500/70' },
    { n: 5, y: y5, color: 'stroke-amber-500/70' },
    { n: 6, y: y6, color: 'stroke-sky-500/80' },
    { n: 7, y: y7, color: 'stroke-purple-500/70' },
    { n: 8, y: y8, color: 'stroke-rose-500/70' },
  ];

  return (
    <figure className="my-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 print:border-slate-400">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 text-xs dark:border-slate-800">
        <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
          FIG. 2.2(b) · PERPENDICULAR BISECTOR &amp; CIRCUMCIRCLE METHOD (CENTERS 4, 5, 6, 7, 8)
        </span>
      </div>

      <svg
        viewBox="0 0 740 400"
        className="h-auto w-full"
        role="img"
        aria-label="Fig. 2.2(b) perpendicular bisector method for constructing regular polygons (n=4,5,6,7,8) on a common base AB"
      >
        {/* Left Reference Box (rect:nth-of-type(1)) — wide enough that text stays strictly inside */}
        <rect
          x="18"
          y="28"
          width="236"
          height="176"
          rx="6"
          className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
        />
        <text
          x="30"
          y="50"
          className="fill-slate-900 font-display text-xs font-bold dark:fill-slate-100"
        >
          Method 2 Construction Key
        </text>
        <text
          x="30"
          y="72"
          className="fill-slate-700 font-mono text-[10.5px] dark:fill-slate-300"
        >
          1. Draw given base arm AB
        </text>
        <text
          x="30"
          y="92"
          className="fill-slate-700 font-mono text-[10.5px] dark:fill-slate-300"
        >
          2. Erect BC ⊥ AB (BC = AB)
        </text>
        <text
          x="30"
          y="112"
          className="fill-slate-700 font-mono text-[10.5px] dark:fill-slate-300"
        >
          3. Bisector of AB cuts AB at M
        </text>
        <text
          x="30"
          y="132"
          className="fill-slate-700 font-mono text-[10.5px] dark:fill-slate-300"
        >
          4. Pt 4 = Bisector ∩ line AC
        </text>
        <text
          x="30"
          y="152"
          className="fill-slate-700 font-mono text-[10.5px] dark:fill-slate-300"
        >
          5. Pt 6 = Bisector ∩ arc AC
        </text>
        <text
          x="30"
          y="172"
          className="fill-amber-700 font-mono text-[10.5px] font-semibold dark:fill-amber-400"
        >
          6. Pt 5 = Midpoint of 4 &amp; 6
        </text>
        <text
          x="30"
          y="192"
          className="fill-sky-700 font-mono text-[10.5px] font-semibold dark:fill-sky-400"
        >
          7. Mark 7, 8 with step 4–5
        </text>

        {/* Circumcircles centered at 4, 5, 6, 7, 8 with radius from center to A */}
        {centers.map((c) => {
          const r = Math.hypot(mx - ax, c.y - by);
          return (
            <circle
              key={c.n}
              cx={mx}
              cy={c.y}
              r={r}
              fill="none"
              className={c.color}
              strokeDasharray="4 3"
              strokeWidth="1.15"
            />
          );
        })}

        {/* Quarter circle arc from A to C centered at B with radius AB */}
        <path
          d={`M ${ax} ${by} A ${s} ${s} 0 0 1 ${bx} ${cy}`}
          fill="none"
          className="stroke-amber-500"
          strokeDasharray="5 3"
          strokeWidth="1.5"
        />

        {/* Vertical perpendicular BC at B */}
        <line
          x1={bx}
          y1={by}
          x2={bx}
          y2={cy}
          className="stroke-slate-500 dark:stroke-slate-400"
          strokeWidth="1.4"
        />

        {/* Diagonal line AC */}
        <line
          x1={ax}
          y1={by}
          x2={bx}
          y2={cy}
          className="stroke-slate-500 dark:stroke-slate-400"
          strokeWidth="1.4"
        />

        {/* Vertical Perpendicular Bisector through M(mx, by) */}
        <line
          x1={mx}
          y1={by + 28}
          x2={mx}
          y2="68"
          className="stroke-sky-600 dark:stroke-sky-400"
          strokeDasharray="6 3"
          strokeWidth="1.6"
        />

        {/* Construct polygons n=4, 5, 6, 7, 8 on common base AB */}
        {[4, 5, 6, 7, 8].map((n) => {
          const geom = calculateRegularPolygonGeometry(n, s);
          const polyPts = geom.vertices
            .map((v) => `${(ax + v.x).toFixed(1)},${(by - v.y).toFixed(1)}`)
            .join(' ');
          return (
            <polygon
              key={n}
              points={polyPts}
              fill="none"
              className="stroke-slate-800 dark:stroke-slate-200"
              strokeWidth={n === 6 ? '2' : '1.4'}
            />
          );
        })}

        {/* Heavy Base Line AB */}
        <line
          x1={ax}
          y1={by}
          x2={bx}
          y2={by}
          className="stroke-sky-700 dark:stroke-sky-300"
          strokeWidth="3.2"
        />

        {/* Center nodes 4, 5, 6, 7, 8 along perpendicular bisector */}
        {centers.map((c) => (
          <g key={`pt-${c.n}`}>
            <circle
              cx={mx}
              cy={c.y}
              r="3"
              className="fill-rose-600 dark:fill-rose-400"
            />
            <text
              x={mx - 12}
              y={c.y + 4}
              className="fill-slate-900 font-mono text-[10px] font-bold dark:fill-slate-100"
            >
              {c.n}
            </text>
          </g>
        ))}

        {/* Labels A, M, B, C */}
        <text
          x={ax - 14}
          y={by + 15}
          className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100"
        >
          A
        </text>
        <text
          x={mx + 6}
          y={by + 15}
          className="fill-sky-700 font-mono text-xs font-bold dark:fill-sky-300"
        >
          M
        </text>
        <text
          x={bx + 8}
          y={by + 15}
          className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100"
        >
          B
        </text>
        <text
          x={bx + 8}
          y={cy - 4}
          className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100"
        >
          C
        </text>

        <text
          x={mx}
          y="376"
          textAnchor="middle"
          className="fill-slate-700 font-mono text-xs font-semibold dark:fill-slate-300"
        >
          Fig. 2.2(b)
        </text>
      </svg>
    </figure>
  );
};

export const NoteFiguresGallery: React.FC<{ figures: NoteFigure[] }> = ({
  figures,
}) => {
  const [activeFigure, setActiveFigure] = useState<NoteFigure | null>(null);

  if (!figures || figures.length === 0) return null;

  return (
    <>
      <div
        className={`mt-5 grid grid-cols-1 gap-4 ${
          figures.length > 1 ? 'md:grid-cols-2' : ''
        }`}
      >
        {figures.map((fig, idx) => (
          <figure
            key={`${fig.src}-${idx}`}
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-950/70 print:break-inside-avoid print:border-slate-400 print:bg-white"
          >
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 bg-white px-3.5 py-2 text-xs dark:border-slate-800 dark:bg-slate-900">
                <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
                  {fig.figureNumber ?? `Fig. ${idx + 1}`} · Actual AutoCAD Lab Output
                </span>
                <button
                  type="button"
                  onClick={() => setActiveFigure(fig)}
                  aria-label={`Inspect ${fig.figureNumber ?? 'Figure'} in full resolution`}
                  className="inline-flex min-h-[34px] items-center gap-1 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700 transition-colors hover:border-sky-600 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-sky-400 print:hidden"
                >
                  <Maximize2 className="h-3 w-3" />
                  <span>Inspect CAD Output</span>
                </button>
              </div>

              <div
                onClick={() => setActiveFigure(fig)}
                className="relative cursor-pointer overflow-hidden bg-slate-950 p-2"
              >
                <img
                  src={fig.src}
                  alt={fig.alt}
                  className="mx-auto max-h-[340px] w-full rounded object-contain transition-transform duration-200 group-hover:scale-[1.01] print:max-h-[260px]"
                />
              </div>
            </div>

            <figcaption className="space-y-1.5 border-t border-slate-200/80 bg-white p-3.5 text-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                {fig.caption}
              </div>
              {fig.commandSequence && (
                <div className="flex items-center gap-1.5 rounded border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[11px] text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-sky-300">
                  <Terminal className="h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" />
                  <span className="truncate">{fig.commandSequence}</span>
                </div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {activeFigure && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeFigure.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs print:hidden"
          onClick={() => setActiveFigure(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
              <div className="font-mono text-xs font-semibold text-sky-400">
                {activeFigure.figureNumber ?? 'AutoCAD Lab Screenshot'} · Verified Lab Capture
              </div>
              <button
                type="button"
                onClick={() => setActiveFigure(null)}
                aria-label="Close full-resolution preview"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto bg-slate-950 p-4">
              <img
                src={activeFigure.src}
                alt={activeFigure.alt}
                className="mx-auto max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="space-y-2 border-t border-slate-800 bg-slate-900 px-5 py-4 text-xs">
              <p className="font-medium text-slate-200">{activeFigure.caption}</p>
              {activeFigure.commandSequence && (
                <div className="flex items-center gap-2 font-mono text-sky-300">
                  <Terminal className="h-4 w-4 shrink-0 text-sky-400" />
                  <span>{activeFigure.commandSequence}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

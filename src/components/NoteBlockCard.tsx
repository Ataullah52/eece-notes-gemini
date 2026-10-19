import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { NoteBlock } from '../data/curriculumData';
import { PRIORITY_TIER_META } from '../utils/circuitMath';
import { InteractiveDiagram } from './InteractiveDiagrams';

interface NoteBlockCardProps {
  block: NoteBlock;
  index: number;
  forceExpandSolutions: boolean;
}

const BLOCK_TYPE_LABELS: Record<NoteBlock['type'], string> = {
  definition: 'Definition & Law',
  theory: 'Core Theory & Concept',
  memorize: 'Memorize & Quick Recall',
  example: 'Worked Numerical Example',
  pyq: 'Previous Year Question (PYQ)',
};

export const NoteBlockCard: React.FC<NoteBlockCardProps> = ({
  block,
  index,
  forceExpandSolutions,
}) => {
  const [isSolutionOpen, setIsSolutionOpen] = useState<boolean>(true);
  const tierMeta = PRIORITY_TIER_META[block.priorityTier];
  const showSolution = forceExpandSolutions || isSolutionOpen;

  const tierTextColor =
    block.priorityTier === 1
      ? 'text-amber-700 dark:text-amber-400'
      : block.priorityTier === 2
        ? 'text-rose-700 dark:text-rose-400'
        : block.priorityTier === 3
          ? 'text-sky-700 dark:text-sky-400'
          : 'text-emerald-700 dark:text-emerald-400';

  return (
    <article
      id={block.id}
      className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 print:break-inside-avoid print:rounded-none print:border-slate-300 print:bg-white print:p-4"
    >
      {/* Clean Unboxed Metadata Kicker (Zero-Pill Discipline) */}
      <div className="mb-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
        <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
          {String(index + 1).padStart(2, '0')}.
        </span>
        <span className={`font-semibold ${tierTextColor}`}>
          {tierMeta.stars} Priority {block.priorityTier}: {tierMeta.shortLabel}
        </span>
        <span aria-hidden="true">·</span>
        <span className="font-medium text-slate-700 dark:text-slate-300">
          {BLOCK_TYPE_LABELS[block.type]}
        </span>
        <span aria-hidden="true">·</span>
        <span>{block.sourceCitation}</span>
        {block.examYears && block.examYears.length > 0 && (
          <>
            <span aria-hidden="true">·</span>
            <span className="font-mono font-medium text-rose-700 dark:text-rose-400">
              Asked in: {block.examYears.join(', ')}
              {block.marks ? ` (${block.marks})` : ''}
            </span>
          </>
        )}
      </div>

      {/* Block Title */}
      <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {block.title}
      </h3>

      {/* Concise Key Takeaway / Summary Line */}
      <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        {block.summaryText}
      </p>

      {/* Main Prose Paragraphs */}
      {block.paragraphs && block.paragraphs.length > 0 && (
        <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          {block.paragraphs.map((para, i) => (
            <p key={i} className="max-w-[72ch]">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Bullet Points */}
      {block.bulletPoints && block.bulletPoints.length > 0 && (
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          {block.bulletPoints.map((pt, i) => (
            <li key={i} className="max-w-[70ch]">
              {pt}
            </li>
          ))}
        </ul>
      )}

      {/* Equations Grid */}
      {block.equations && block.equations.length > 0 && (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {block.equations.map((eq, i) => (
            <div
              key={i}
              className="rounded-lg border border-slate-200/90 bg-slate-50/80 p-3.5 dark:border-slate-800 dark:bg-slate-950/70 print:border-slate-300 print:bg-slate-50"
            >
              <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">{eq.label}</span>
                {eq.units && <span className="font-mono text-[11px]">{eq.units}</span>}
              </div>
              <div className="mt-1.5 font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-sky-200 print:text-slate-900">
                {eq.formula}
              </div>
              {eq.note && (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{eq.note}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Interactive SVG Diagram (Theory Blocks) */}
      {block.interactiveDiagramId && (
        <InteractiveDiagram diagramId={block.interactiveDiagramId} />
      )}

      {/* Structured Reference Table */}
      {block.table && (
        <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-sm">
            {block.table.caption && (
              <caption className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-left text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                {block.table.caption}
              </caption>
            )}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-950">
                {block.table.headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-2.5 font-display text-xs font-semibold text-slate-900 dark:text-slate-200"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.table.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-2.5 text-xs leading-relaxed tabular-nums ${
                        cIdx === 0
                          ? 'font-medium text-slate-900 dark:text-slate-100'
                          : 'font-mono text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Problem Statement & Step-by-Step Solution (Examples & PYQs) */}
      {block.problemStatement && (
        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-950/60 print:border-slate-300 print:bg-white">
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            Problem Statement
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
            {block.problemStatement}
          </p>

          {block.givenData && block.givenData.length > 0 && (
            <div className="mt-3 border-t border-slate-200/80 pt-2.5 dark:border-slate-800">
              <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Given Parameters:
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-5 font-mono text-xs text-slate-700 dark:text-slate-300">
                {block.givenData.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {block.solutionSteps && block.solutionSteps.length > 0 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setIsSolutionOpen((prev) => !prev)}
                aria-expanded={showSolution}
                className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 print:hidden"
              >
                {showSolution ? (
                  <>
                    <ChevronUp className="h-3.5 w-3.5" />
                    <span>Hide Step-by-Step Solution</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3.5 w-3.5" />
                    <span>Show Step-by-Step Solution ({block.solutionSteps.length} Steps)</span>
                  </>
                )}
              </button>

              <div
                className={`${
                  showSolution ? 'mt-3 block' : 'hidden'
                } space-y-3 border-t border-slate-200/90 pt-3 dark:border-slate-800 print:mt-3 print:block`}
              >
                {block.solutionSteps.map((step, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {step.stepTitle}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {step.explanation}
                    </p>
                    {step.equation && (
                      <pre className="mt-1 overflow-x-auto rounded border border-slate-200/90 bg-white px-3 py-2 font-mono text-xs font-medium text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-sky-200 print:border-slate-300">
                        {step.equation}
                      </pre>
                    )}
                  </div>
                ))}

                {block.finalAnswer && (
                  <div className="mt-3 rounded border border-emerald-500/40 bg-emerald-50/60 px-3.5 py-2.5 font-mono text-xs font-semibold text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-200 print:border-slate-400 print:bg-slate-100 print:text-slate-900">
                    Final Answer: {block.finalAnswer}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Professor's Exam Tip Callout */}
      {block.professorTip && (
        <div className="mt-4 rounded-lg border border-amber-300/70 bg-amber-50/60 p-3.5 text-xs leading-relaxed text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-200 print:border-slate-300 print:bg-slate-50 print:text-slate-900">
          <span className="font-semibold">Professor’s Exam Note: </span>
          {block.professorTip}
        </div>
      )}
    </article>
  );
};

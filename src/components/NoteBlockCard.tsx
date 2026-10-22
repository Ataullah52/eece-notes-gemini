import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { NoteBlock } from '../data/curriculumData';
import { PRIORITY_TIER_META } from '../utils/circuitMath';
import { InteractiveDiagram } from './InteractiveDiagrams';
import { MathText, MathSolutionBlock } from './MathRenderer';
import { splitProblemStatementLines } from '../utils/mathLatex';

interface NoteBlockCardProps {
  block: NoteBlock;
  index: number;
  includeSolutionsInPdf?: boolean;
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
  includeSolutionsInPdf = true,
}) => {
  const [isSolutionOpen, setIsSolutionOpen] = useState<boolean>(false);
  const tierMeta = PRIORITY_TIER_META[block.priorityTier];

  const tierTextColor =
    block.priorityTier === 1
      ? 'text-amber-700 dark:text-amber-400'
      : block.priorityTier === 2
        ? 'text-rose-700 dark:text-rose-400'
        : block.priorityTier === 3
          ? 'text-sky-700 dark:text-sky-400'
          : 'text-emerald-700 dark:text-emerald-400';

  const hasInlineThereforeInSteps = Boolean(
    block.solutionSteps?.some((s) => s.equation && s.equation.includes('∴'))
  );

  return (
    <article
      id={block.id}
      className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 print:break-inside-avoid print:rounded-none print:border-slate-300 print:bg-white print:p-4"
    >
      {/* Metadata Header */}
      <div className="mb-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
        <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
          {String(index + 1).padStart(2, '0')}.
        </span>
        <span className={`font-semibold ${tierTextColor}`}>
          {tierMeta.stars} Priority {block.priorityTier}: {tierMeta.shortLabel}
        </span>
        {block.secondaryPriorityTiers &&
          block.secondaryPriorityTiers.map((secTier) => {
            const secMeta = PRIORITY_TIER_META[secTier];
            return (
              <span
                key={secTier}
                className="font-medium text-slate-500 dark:text-slate-400"
              >
                + {secMeta.stars} {secMeta.shortLabel}
              </span>
            );
          })}
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
        <MathText text={block.title} />
      </h3>

      {/* Concise Key Takeaway / Summary Line */}
      <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <MathText text={block.summaryText} />
      </p>

      {/* Main Prose Paragraphs */}
      {block.paragraphs && block.paragraphs.length > 0 && (
        <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          {block.paragraphs.map((para, i) => (
            <p key={i} className="max-w-[75ch]">
              <MathText text={para} />
            </p>
          ))}
        </div>
      )}

      {/* Bullet Points */}
      {block.bulletPoints && block.bulletPoints.length > 0 && (
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          {block.bulletPoints.map((pt, i) => (
            <li key={i} className="max-w-[75ch]">
              <MathText text={pt} />
            </li>
          ))}
        </ul>
      )}

      {/* Simple Solid Box Around Important Formulas */}
      {block.equations && block.equations.length > 0 && (
        <div className="mt-5 space-y-3.5">
          {block.equations.map((eq, i) => (
            <div key={i} className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  <MathText text={eq.label} />
                </span>
                {eq.units && (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    (<MathText text={eq.units} />)
                  </span>
                )}
              </div>
              <div>
                <div className="inline-block rounded border border-slate-900 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 dark:border-slate-200 dark:bg-slate-900 dark:text-slate-100 print:border-slate-900">
                  <MathText text={eq.formula} />
                </div>
              </div>
              {eq.note && (
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <MathText text={eq.note} />
                </p>
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
                <MathText text={block.table.caption} />
              </caption>
            )}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-950">
                {block.table.headers.map((header, i) => (
                  <th
                    key={i}
                    className="whitespace-nowrap px-4 py-2.5 font-display text-xs font-semibold text-slate-900 dark:text-slate-200"
                  >
                    <MathText text={header} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.table.rows.map((row, rIdx) => {
                const colCount = row.length;
                return (
                  <tr
                    key={rIdx}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                  >
                    {row.map((cell, cIdx) => {
                      const shouldNowrap =
                        (cIdx === 0 && cell.length <= 36) ||
                        (colCount >= 3 && cIdx === 1 && cell.length <= 36);
                      return (
                        <td
                          key={cIdx}
                          className={`px-4 py-2.5 text-xs leading-relaxed tabular-nums ${
                            shouldNowrap ? 'whitespace-nowrap' : ''
                          } ${
                            cIdx === 0
                              ? 'font-medium text-slate-900 dark:text-slate-100'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <MathText text={cell} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Problem Statement & Vertical Left-Indented Step-by-Step Solution */}
      {block.problemStatement && (
        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50/60 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/60 print:border-slate-300 print:bg-white">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Problem / Theorem Question
          </div>
          <div className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
            {splitProblemStatementLines(block.problemStatement).map((line, lineIdx) => {
              const isSubItem = /^\((?:\d+|i{1,3}|iv|[a-d])\)\s/.test(line);
              return (
                <p key={lineIdx} className={isSubItem ? 'pl-2 sm:pl-3' : ''}>
                  <MathText text={line} />
                </p>
              );
            })}
          </div>

          {block.givenData && block.givenData.length > 0 && (
            <div className="mt-3 border-t border-slate-200/80 pt-2.5 dark:border-slate-800">
              <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Given Parameters:
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-slate-700 dark:text-slate-300">
                {block.givenData.map((item, idx) => (
                  <li key={idx}>
                    <MathText text={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {block.solutionSteps && block.solutionSteps.length > 0 && (
            <div className={`mt-4 ${includeSolutionsInPdf ? '' : 'print:hidden'}`}>
              <button
                type="button"
                onClick={() => setIsSolutionOpen((prev) => !prev)}
                aria-expanded={isSolutionOpen}
                className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 print:hidden"
              >
                {isSolutionOpen ? (
                  <>
                    <ChevronUp className="h-3.5 w-3.5" />
                    <span>Hide Step-by-Step Solution</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3.5 w-3.5" />
                    <span>Show Step-by-Step Solution</span>
                  </>
                )}
              </button>

              <div
                className={`${
                  isSolutionOpen ? 'mt-3 block' : 'hidden'
                } space-y-4 border-t border-slate-200/90 pt-4 dark:border-slate-800 ${
                  includeSolutionsInPdf ? 'print:mt-3 print:block' : 'print:hidden'
                }`}
              >
                {block.solutionSteps.map((step, sIdx) => {
                  const isLastStep = sIdx === block.solutionSteps!.length - 1;
                  const equationWithFallbackAnswer =
                    isLastStep &&
                    !hasInlineThereforeInSteps &&
                    block.finalAnswer &&
                    step.equation
                      ? `${step.equation}\n∴ ${block.finalAnswer}`
                      : step.equation;

                  return (
                    <div key={sIdx} className="space-y-1.5 text-left">
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        <MathText text={step.stepTitle} />
                      </div>
                      {step.explanation && (
                        <p className="pl-4 text-xs text-slate-600 dark:text-slate-400 sm:pl-6">
                          <MathText text={step.explanation} />
                        </p>
                      )}
                      {equationWithFallbackAnswer && (
                        <div className="ml-4 overflow-x-auto rounded-r-lg border border-slate-200/90 border-l-4 border-l-sky-600 bg-white px-4 py-3 text-left dark:border-slate-800 dark:border-l-sky-400 dark:bg-slate-900 print:border-slate-400 sm:ml-6">
                          <MathSolutionBlock equationText={equationWithFallbackAnswer} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Professor's Exam Tip Callout */}
      {block.professorTip && (
        <div className="mt-4 rounded-lg border border-amber-400/70 bg-amber-50/70 p-3.5 text-xs leading-relaxed text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-200 print:border-slate-400 print:bg-slate-50 print:text-slate-900">
          <span className="font-bold">Important Exam Note: </span>
          <MathText text={block.professorTip} />
        </div>
      )}
    </article>
  );
};

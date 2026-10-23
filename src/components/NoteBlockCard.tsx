import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Bookmark,
  Flag,
  CheckCircle2,
} from 'lucide-react';
import type { NoteBlock } from '../data/types';
import {
  getMemorizeBlockTitle,
  getMemorizeStatements,
} from '../utils/circuitMath';
import type { BlockRevisionStatus } from '../utils/revisionState';
import { InteractiveDiagram } from './InteractiveDiagrams';
import {
  EngineeringSvgFigure,
  NoteFiguresGallery,
} from './EngineeringGraphicsFigures';
import { MathText, MathSolutionBlock } from './MathRenderer';
import {
  splitProblemStatementLines,
  splitTextIntoVerticalItems,
  splitFormulaPipeItems,
} from '../utils/mathLatex';

interface NoteBlockCardProps {
  block: NoteBlock;
  index: number;
  memorizeMode?: boolean;
  includeSolutionsInPdf?: boolean;
  revisionStatus?: BlockRevisionStatus;
  onToggleRevision?: (
    blockId: string,
    field: keyof BlockRevisionStatus
  ) => void;
}

const BLOCK_TYPE_LABELS: Record<NoteBlock['type'], string> = {
  definition: 'Definition & Law',
  theory: 'Core Theory & Concept',
  memorize: 'Definition, Law & Formula',
  example: 'Worked Numerical Example',
  pyq: 'Previous Year Question (PYQ)',
};

export const NoteBlockCard: React.FC<NoteBlockCardProps> = ({
  block,
  index,
  memorizeMode = false,
  includeSolutionsInPdf = true,
  revisionStatus,
  onToggleRevision,
}) => {
  const [isSolutionOpen, setIsSolutionOpen] = useState<boolean>(false);
  const isBookmarked = Boolean(revisionStatus?.bookmarked);
  const isWeak = Boolean(revisionStatus?.weak);
  const isDone = Boolean(revisionStatus?.done);
  const isMemorizeView = Boolean(memorizeMode || block.type === 'memorize');

  const hasInlineThereforeInSteps = Boolean(
    block.solutionSteps?.some((s) => s.equation && s.equation.includes('∴'))
  );

  const displayTitle = isMemorizeView
    ? getMemorizeBlockTitle(block)
    : block.title;

  const summaryItems = isMemorizeView
    ? getMemorizeStatements(block)
    : splitTextIntoVerticalItems(block.summaryText);
  const paragraphItems = isMemorizeView
    ? []
    : (block.paragraphs ?? []).flatMap((p) => splitTextIntoVerticalItems(p));
  const bulletItems = isMemorizeView
    ? []
    : (block.bulletPoints ?? []).flatMap((b) => splitTextIntoVerticalItems(b));
  const bodyItems = [...paragraphItems, ...bulletItems];

  return (
    <article
      id={block.id}
      className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 print:break-inside-avoid print:rounded-none print:border-slate-300 print:bg-white print:p-4"
    >
      {/* Metadata Header & Revision Controls */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {isMemorizeView
              ? 'Definition, Law & Formula'
              : BLOCK_TYPE_LABELS[block.type]}
          </span>
          {!isMemorizeView && (
            <>
              <span aria-hidden="true">·</span>
              <span>{block.sourceCitation}</span>
            </>
          )}
          {!isMemorizeView && block.examYears && block.examYears.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-mono font-medium text-rose-700 dark:text-rose-400">
                Asked in: {block.examYears.join(', ')}
                {block.marks ? ` (${block.marks})` : ''}
              </span>
            </>
          )}
        </div>

        {/* Revision Tools: Icon-only Bookmark, Weak Topic Flag, Done Tick aligned right (Hidden in Print/PDF) */}
        {onToggleRevision && (
          <div className="ml-auto flex items-center justify-end gap-1.5 print:hidden">
            <button
              type="button"
              aria-pressed={isBookmarked}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
              onClick={() => onToggleRevision(block.id, 'bookmarked')}
              className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border p-2 transition-colors ${
                isBookmarked
                  ? 'border-sky-600 bg-sky-50 text-sky-800 dark:border-sky-400 dark:bg-sky-950/50 dark:text-sky-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              <Bookmark className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-pressed={isWeak}
              aria-label={isWeak ? 'Clear weak topic flag' : 'Weak topic'}
              title={isWeak ? 'Weak topic flagged' : 'Mark as weak topic'}
              onClick={() => onToggleRevision(block.id, 'weak')}
              className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border p-2 transition-colors ${
                isWeak
                  ? 'border-amber-600 bg-amber-50 text-amber-900 dark:border-amber-400 dark:bg-amber-950/50 dark:text-amber-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              <Flag className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-pressed={isDone}
              aria-label={isDone ? 'Mark as not done' : 'Done'}
              title={isDone ? 'Completed' : 'Mark as done'}
              onClick={() => onToggleRevision(block.id, 'done')}
              className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border p-2 transition-colors ${
                isDone
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-950/50 dark:text-emerald-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Block Title (Clean without priority stars) */}
      <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        <MathText text={displayTitle} />
      </h3>

      {/* Vertical List for Summary, Definitions, Theory & Key Points */}
      {(summaryItems.length > 0 || bodyItems.length > 0) && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
          {summaryItems.map((item, i) => {
            const isNumberedSubItem = /^\((?:\d+|i{1,3}|iv|[a-d]|Case\s+\d+)\)\s/i.test(
              item
            );
            return (
              <li
                key={`sum-${i}`}
                className={`max-w-[75ch] font-medium text-slate-800 dark:text-slate-200 ${
                  isNumberedSubItem ? 'list-none pl-2' : ''
                }`}
              >
                <MathText text={item} />
              </li>
            );
          })}
          {bodyItems.map((rawItem, i) => {
            const item = rawItem.replace(/^[•·]\s*/, '');
            const isNumberedSubItem = /^\((?:\d+|i{1,3}|iv|[a-d]|Case\s+\d+)\)\s/i.test(
              item
            );
            return (
              <li
                key={`body-${i}`}
                className={`max-w-[75ch] ${
                  isNumberedSubItem ? 'list-none pl-2' : ''
                }`}
              >
                <MathText text={item} />
              </li>
            );
          })}
        </ul>
      )}

      {/* Simple Solid Box Around Important Formulas (Vertical Lines) */}
      {block.equations && block.equations.length > 0 && (
        <div className="mt-5 space-y-3.5">
          {block.equations.map((eq, i) => {
            const formulaLines = splitFormulaPipeItems(eq.formula);
            const noteLines =
              !isMemorizeView && eq.note
                ? splitTextIntoVerticalItems(eq.note)
                : [];
            return (
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
                    {formulaLines.length > 1 ? (
                      <ul className="space-y-1.5">
                        {formulaLines.map((fLine, fIdx) => (
                          <li key={fIdx}>
                            <MathText text={fLine} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <MathText text={eq.formula} />
                    )}
                  </div>
                </div>
                {noteLines.length > 0 && (
                  <ul className="list-disc space-y-0.5 pl-4 text-xs text-slate-600 dark:text-slate-400">
                    {noteLines.map((nLine, nIdx) => (
                      <li key={nIdx}>
                        <MathText text={nLine} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Vector Technical Drawing SVG (Hidden in Memorize view) */}
      {!isMemorizeView && block.svgFigureId && (
        <EngineeringSvgFigure figureId={block.svgFigureId} />
      )}

      {/* Actual AutoCAD Lab Screenshots / Figures Gallery (Hidden in Memorize view) */}
      {!isMemorizeView && block.figures && block.figures.length > 0 && (
        <NoteFiguresGallery figures={block.figures} />
      )}

      {/* Interactive SVG Diagram (Hidden in Memorize view) */}
      {!isMemorizeView && block.interactiveDiagramId && (
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

      {/* Problem Statement & Vertical Left-Indented Step-by-Step Solution (Hidden in Memorize view) */}
      {!isMemorizeView && block.problemStatement && (
        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50/60 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/60 print:border-slate-300 print:bg-white">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Problem / Theorem Question
          </div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
            {splitProblemStatementLines(block.problemStatement).map(
              (line, lineIdx) => {
                const isExplicitMarker =
                  /^\((?:\d+|[A-C]|i{1,3}|iv|[a-d])\)\s/.test(line);
                const isSubItem = /^\((?:\d+|i{1,3}|iv|[a-d])\)\s/.test(line);
                return (
                  <li
                    key={lineIdx}
                    className={`${isExplicitMarker ? 'list-none' : ''} ${
                      isSubItem ? 'pl-1 sm:pl-2' : ''
                    }`}
                  >
                    <MathText text={line} />
                  </li>
                );
              }
            )}
          </ul>

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
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-sky-700 hover:bg-sky-50/80 hover:text-sky-800 dark:text-sky-400 dark:hover:bg-slate-800 dark:hover:text-sky-300 print:hidden"
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
                  const explanationItems = step.explanation
                    ? splitTextIntoVerticalItems(step.explanation)
                    : [];

                  return (
                    <div key={sIdx} className="space-y-1.5 text-left">
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        <MathText text={step.stepTitle} />
                      </div>
                      {explanationItems.length > 0 && (
                        <ul className="list-disc space-y-1 pl-6 text-xs text-slate-600 dark:text-slate-400 sm:pl-8">
                          {explanationItems.map((expItem, eIdx) => (
                            <li key={eIdx}>
                              <MathText text={expItem} />
                            </li>
                          ))}
                        </ul>
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

      {/* Professor's Exam Tip Callout (Hidden in Memorize view) */}
      {!isMemorizeView && block.professorTip && (
        <div className="mt-4 rounded-lg border border-amber-400/70 bg-amber-50/70 p-3.5 text-xs leading-relaxed text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-200 print:border-slate-400 print:bg-slate-50 print:text-slate-900">
          <div className="font-bold">Important Exam Note:</div>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {splitTextIntoVerticalItems(block.professorTip).map((tipItem, tIdx) => (
              <li key={tIdx}>
                <MathText text={tipItem} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

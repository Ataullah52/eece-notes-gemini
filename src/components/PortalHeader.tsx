import React from 'react';
import { Bookmark, Sun, Moon, Printer } from 'lucide-react';
import type { GlobalSearchEntry } from '../utils/globalSearch';
import type { RouteViewLevel } from '../utils/hashRouter';
import { GlobalSearchBar } from './GlobalSearchBar';

interface PortalHeaderProps {
  viewLevel: RouteViewLevel;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  revisionTotalCount: number;
  globalSearchIndex: GlobalSearchEntry[];
  onNavigateToRoute: (route: {
    viewLevel: RouteViewLevel;
    semesterId?: string;
    subjectId?: string;
    chapterId?: string;
    blockId?: string | null;
  }) => void;
  isPdfExportModalOpen: boolean;
  onOpenExportPdfModal: () => void;
  onCloseExportPdfModal: () => void;
  includeSolutionsInPdf: boolean;
  onChangeIncludeSolutionsInPdf: (value: boolean) => void;
  onConfirmExportPdf: (withSolutions: boolean) => void;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({
  viewLevel,
  darkMode,
  onToggleDarkMode,
  revisionTotalCount,
  globalSearchIndex,
  onNavigateToRoute,
  isPdfExportModalOpen,
  onOpenExportPdfModal,
  onCloseExportPdfModal,
  includeSolutionsInPdf,
  onChangeIncludeSolutionsInPdf,
  onConfirmExportPdf,
}) => {
  return (
    <>
      <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xs sm:px-6 dark:border-slate-800 dark:bg-slate-950/95 print:hidden">
        <button
          type="button"
          onClick={() => onNavigateToRoute({ viewLevel: 'semesters' })}
          className="inline-flex min-h-[44px] items-center font-display text-base font-bold tracking-tight text-slate-900 hover:text-sky-700 sm:text-lg dark:text-slate-100 dark:hover:text-sky-400"
        >
          EECE Notes
        </button>

        <GlobalSearchBar
          globalSearchIndex={globalSearchIndex}
          onNavigateToRoute={onNavigateToRoute}
        />

        <div className="order-2 flex items-center gap-2 sm:order-3 sm:gap-2.5">
          <button
            type="button"
            onClick={() => onNavigateToRoute({ viewLevel: 'revision' })}
            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
              viewLevel === 'revision'
                ? 'border-sky-600 bg-sky-50 text-sky-800 dark:border-sky-400 dark:bg-sky-950/60 dark:text-sky-300'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span>My revision</span>
            {revisionTotalCount > 0 && (
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
                {revisionTotalCount}
              </span>
            )}
          </button>

          <nav aria-label="Theme Switcher" className="flex items-center">
            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex min-h-[44px] items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-slate-600 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                  !darkMode
                    ? 'bg-white text-amber-500 shadow-2xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
              </span>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                  darkMode
                    ? 'bg-slate-800 text-sky-400 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
              </span>
            </button>
          </nav>

          <button
            type="button"
            onClick={onOpenExportPdfModal}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </header>

      {isPdfExportModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-xs print:hidden"
          onClick={onCloseExportPdfModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdf-export-modal-title"
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="pdf-export-modal-title"
              className="font-display text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Export PDF Options
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Choose whether to include the step-by-step solutions in the exported PDF document.
            </p>

            <div
              className="mt-4 space-y-2.5"
              role="radiogroup"
              aria-label="Solution visibility in PDF"
            >
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors ${
                  includeSolutionsInPdf
                    ? 'border-sky-600 bg-sky-50/60 dark:border-sky-400 dark:bg-sky-950/30'
                    : 'border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50'
                }`}
              >
                <input
                  type="radio"
                  name="pdf-solutions-option"
                  checked={includeSolutionsInPdf}
                  onChange={() => onChangeIncludeSolutionsInPdf(true)}
                  className="mt-0.5 h-4 w-4 accent-sky-600"
                />
                <span className="block text-xs">
                  <span className="block font-semibold text-slate-900 dark:text-slate-100">
                    Include Step-by-Step Solutions
                  </span>
                  <span className="mt-0.5 block text-slate-600 dark:text-slate-400">
                    Exports all definitions, formulas, problem statements, and full vertical solutions.
                  </span>
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors ${
                  !includeSolutionsInPdf
                    ? 'border-sky-600 bg-sky-50/60 dark:border-sky-400 dark:bg-sky-950/30'
                    : 'border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50'
                }`}
              >
                <input
                  type="radio"
                  name="pdf-solutions-option"
                  checked={!includeSolutionsInPdf}
                  onChange={() => onChangeIncludeSolutionsInPdf(false)}
                  className="mt-0.5 h-4 w-4 accent-sky-600"
                />
                <span className="block text-xs">
                  <span className="block font-semibold text-slate-900 dark:text-slate-100">
                    Do Not Include Solutions (Questions &amp; Notes Only)
                  </span>
                  <span className="mt-0.5 block text-slate-600 dark:text-slate-400">
                    Hides all step-by-step solutions in the exported PDF for self-practice and quick review.
                  </span>
                </span>
              </label>
            </div>

            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onCloseExportPdfModal}
                className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => onConfirmExportPdf(includeSolutionsInPdf)}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>
                  {includeSolutionsInPdf
                    ? 'Export PDF with Solutions'
                    : 'Export PDF without Solutions'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

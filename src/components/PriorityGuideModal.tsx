import React from 'react';
import { X, CheckCircle2, Bookmark, HelpCircle, Book, Library } from 'lucide-react';
import { PRIORITY_TIER_META, type PriorityTier } from '../utils/circuitMath';

interface PriorityGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PriorityGuideModal: React.FC<PriorityGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tiers: { tier: PriorityTier; icon: React.ReactNode; tagColor: string }[] = [
    {
      tier: 1,
      icon: <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />,
      tagColor: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800',
    },
    {
      tier: 2,
      icon: <Bookmark className="h-4 w-4 text-rose-600 dark:text-rose-400" />,
      tagColor: 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800',
    },
    {
      tier: 3,
      icon: <Book className="h-4 w-4 text-sky-600 dark:text-sky-400" />,
      tagColor: 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800',
    },
    {
      tier: 4,
      icon: <Library className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      tagColor: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="priority-guide-title"
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div>
            <h2
              id="priority-guide-title"
              className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100"
            >
              4-Tier Exam Study Priority System
            </h2>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Every note block is categorized strictly by its academic source to help you and your classmates focus on what matters most during exam preparation.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Priority Guide"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Priority Tiers Overview */}
        <div className="mt-5 space-y-3">
          {tiers.map(({ tier, icon, tagColor }) => {
            const info = PRIORITY_TIER_META[tier];
            return (
              <div
                key={tier}
                className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 transition-colors dark:border-slate-800 dark:bg-slate-950/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {icon}
                    <span className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {info.fullTitle}
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs font-semibold ${tagColor}`}
                  >
                    {info.stars}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {info.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Study Strategy Tip */}
        <div className="mt-5 rounded-lg border border-sky-100 bg-sky-50/60 p-3.5 text-xs text-slate-700 dark:border-sky-950 dark:bg-sky-950/30 dark:text-slate-300">
          <div className="flex items-center gap-1.5 font-semibold text-sky-800 dark:text-sky-300">
            <HelpCircle className="h-4 w-4 shrink-0" />
            <span>Recommended Exam Revision Flow</span>
          </div>
          <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-400">
            Start by mastering all <strong>[P1] Class Notes</strong> (questions, definitions, and tips highlighted by the professor), followed by <strong>[P2] Previous Year Questions</strong> to test pattern recognition. Consult <strong>[P3] Professor-Followed Books</strong> and <strong>[P4] Syllabus Reference Books</strong> whenever you need detailed mathematical derivations or supplementary theory.
          </p>
        </div>

        <div className="mt-6 flex justify-end border-t border-slate-200 pt-4 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            Got it, close guide
          </button>
        </div>
      </div>
    </div>
  );
};

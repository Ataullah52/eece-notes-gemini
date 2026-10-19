import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PRIORITY_TIER_META, parseCourseCode, type PriorityTier } from '../utils/circuitMath';

interface PriorityGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PriorityGuideModal: React.FC<PriorityGuideModalProps> = ({ isOpen, onClose }) => {
  const [sampleCode, setSampleCode] = useState<string>('EECE1111');
  if (!isOpen) return null;

  const parsed = parseCourseCode(sampleCode);
  const tiers: PriorityTier[] = [1, 2, 3, 4];

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
              Course Code Nomenclature & 4-Tier Priority System
            </h2>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Structural standards for organizing EECE semesters, course codes, and exam revision priorities.
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

        {/* Section 1: 4-Tier Source Priority Hierarchy */}
        <div className="mt-5">
          <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
            1. Four-Tier Source-Based Priority Hierarchy
          </h3>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            Every study block is ranked strictly by its academic source so you can prioritize exam preparation:
          </p>

          <div className="mt-3 space-y-2.5">
            {tiers.map((t) => {
              const info = PRIORITY_TIER_META[t];
              return (
                <div
                  key={t}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {info.fullTitle}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                      {info.stars}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Interactive 4-Digit Course Code Decoder */}
        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
          <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
            2. Semester (`EECE11`–`EECE42`) & 4-Digit Course Code Structure
          </h3>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            In codes like <span className="font-mono font-semibold">EECE1111</span> or{' '}
            <span className="font-mono font-semibold">MATH1101</span>, the 1st digit represents the Year, the 2nd digit represents the Semester, and the last two digits represent the course number series.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <label
              htmlFor="course-code-inspector"
              className="text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Inspect Course Code:
            </label>
            <input
              id="course-code-inspector"
              type="text"
              value={sampleCode}
              onChange={(e) => setSampleCode(e.target.value)}
              maxLength={8}
              className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs font-semibold uppercase text-slate-900 focus:border-sky-600 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            {['EECE1111', 'MATH1101', 'PHY1101', 'EECE2113'].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setSampleCode(preset)}
                className="rounded border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] text-slate-500">Department</div>
              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-slate-100">
                {parsed.department}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] text-slate-500">1st Digit (Year)</div>
              <div className="mt-0.5 font-mono text-sm font-bold text-sky-700 dark:text-sky-400">
                {parsed.yearDigit} → {parsed.yearLabel}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] text-slate-500">2nd Digit (Semester)</div>
              <div className="mt-0.5 font-mono text-sm font-bold text-sky-700 dark:text-sky-400">
                {parsed.semesterDigit} → {parsed.semesterLabel}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-[11px] text-slate-500">Last 2 Digits (Series)</div>
              <div className="mt-0.5 font-mono text-sm font-bold text-amber-700 dark:text-amber-400">
                {parsed.courseSeries} ({parsed.isSessionalLab ? 'Sessional' : 'Theory'})
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end border-t border-slate-200 pt-4 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

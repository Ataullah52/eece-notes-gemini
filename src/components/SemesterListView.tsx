import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { SemesterEntry } from '../data/types';

interface SemesterListViewProps {
  semesters: SemesterEntry[];
  onSelectSemester: (semester: SemesterEntry) => void;
}

export const SemesterListView: React.FC<SemesterListViewProps> = ({
  semesters,
  onSelectSemester,
}) => {
  return (
    <section aria-labelledby="semester-hub-heading" className="space-y-8">
      <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
        <h1
          id="semester-hub-heading"
          className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
        >
          Select Semester
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {semesters.map((sem) => {
          const hasData = sem.subjects.length > 0;
          return (
            <button
              key={sem.id}
              type="button"
              onClick={() => onSelectSemester(sem)}
              className={`group flex flex-col justify-between rounded-xl border p-5 text-left transition-colors ${
                hasData
                  ? 'border-slate-200 bg-white hover:border-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-400'
                  : 'border-slate-200/70 bg-slate-50/70 hover:border-slate-300 dark:border-slate-800/70 dark:bg-slate-900/40 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span
                    className={`font-mono text-sm font-bold ${
                      hasData
                        ? 'text-sky-700 dark:text-sky-400'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {sem.code}
                  </span>
                  <span className="font-mono tabular-nums">
                    {hasData ? `${sem.totalCredits.toFixed(2)} Credits` : 'Empty'}
                  </span>
                </div>

                <h2 className="mt-2 font-display text-lg font-semibold text-slate-900 group-hover:text-sky-700 dark:text-slate-100 dark:group-hover:text-sky-400">
                  {sem.title}
                </h2>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-600 dark:border-slate-800 dark:text-slate-400">
                <span className="font-mono">
                  {hasData ? `${sem.subjects.length} Courses` : 'No courses added yet'}
                </span>
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

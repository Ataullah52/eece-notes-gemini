import React from 'react';
import { ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';
import type { SemesterEntry, SubjectCourse, ChapterNote } from '../data/types';
import { splitTextIntoVerticalItems } from '../utils/mathLatex';

interface SubjectDirectoryViewProps {
  activeSemester: SemesterEntry;
  onBackToSemesters: () => void;
  onOpenSubjectPage: (subject: SubjectCourse) => void;
  onRoutineCourseClick: (slotText: string) => void;
}

export const SubjectDirectoryView: React.FC<SubjectDirectoryViewProps> = ({
  activeSemester,
  onBackToSemesters,
  onOpenSubjectPage,
  onRoutineCourseClick,
}) => {
  return (
    <section aria-labelledby="subject-directory-heading" className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
        <div>
          <div className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400">
            {activeSemester.code} · {activeSemester.title}
            {activeSemester.totalCredits > 0 &&
              ` · ${activeSemester.totalCredits.toFixed(2)} Total Credits`}
          </div>
          <h1
            id="subject-directory-heading"
            className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
          >
            Courses
          </h1>
        </div>

        <button
          type="button"
          onClick={onBackToSemesters}
          className="inline-flex min-h-[44px] items-center gap-1 text-xs font-medium text-sky-700 hover:underline dark:text-sky-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Semesters</span>
        </button>
      </div>

      {activeSemester.subjects.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {activeSemester.subjects.map((subject) => (
              <button
                key={subject.id}
                type="button"
                onClick={() => onOpenSubjectPage(subject)}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 text-left transition-colors hover:border-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-400"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-sm font-bold text-sky-700 dark:text-sky-400">
                      {subject.code}
                    </span>
                    <span className="tabular-nums">
                      {subject.credits.toFixed(2).replace(/\.00$/, '.0')} Credits ·{' '}
                      {subject.courseType}
                    </span>
                  </div>

                  <h2 className="mt-2 font-display text-xl font-bold text-slate-900 group-hover:text-sky-700 dark:text-slate-100 dark:group-hover:text-sky-400">
                    {subject.title}
                  </h2>

                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {splitTextIntoVerticalItems(subject.syllabusOverview).map(
                      (item, sIdx) => (
                        <li key={sIdx}>{item}</li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-600 dark:border-slate-800 dark:text-slate-400">
                  <span className="font-mono">
                    {subject.chapters.length}{' '}
                    {subject.chapters.length === 1 ? 'Module' : 'Modules'}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-sky-700 dark:text-sky-400">
                    <span>Open Course</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {activeSemester.classRoutine && (
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                  Class Routine ({activeSemester.code})
                </h2>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Saturday – Wednesday · 10:00 AM – 04:00 PM
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 font-mono text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                      <th className="py-2.5 px-3 font-semibold">Day</th>
                      {activeSemester.classRoutine.timeSlots.map((slot) => (
                        <th key={slot} className="py-2.5 px-3 font-semibold">
                          {slot}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {activeSemester.classRoutine.rows.map((row) => (
                      <tr
                        key={row.day}
                        className="hover:bg-slate-50/70 dark:hover:bg-slate-950/40"
                      >
                        <td className="py-2.5 px-3 font-medium text-slate-900 dark:text-slate-100">
                          {row.day}
                        </td>
                        {row.slots.map((slot, idx) => (
                          <td key={idx} className="py-2 px-3 font-mono">
                            {slot ? (
                              <button
                                type="button"
                                onClick={() => onRoutineCourseClick(slot)}
                                className="inline-flex min-h-[44px] items-center rounded-md bg-sky-50 px-3 py-1.5 font-semibold text-sky-700 transition-colors hover:bg-sky-100 dark:bg-sky-950/60 dark:text-sky-300 dark:hover:bg-sky-900/60"
                              >
                                {slot}
                              </button>
                            ) : (
                              <span className="text-slate-300 dark:text-slate-700">
                                —
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            No courses or study notes have been added for {activeSemester.code} (
            {activeSemester.title}) yet.
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Currently only 1st Year 1st Semester (EECE11) is populated.
          </p>
          <button
            type="button"
            onClick={onBackToSemesters}
            className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Semesters</span>
          </button>
        </div>
      )}
    </section>
  );
};

interface SubjectDetailViewProps {
  activeSemester: SemesterEntry;
  activeSubject: SubjectCourse;
  onBackToSemester: () => void;
  onOpenChapterNote: (subject: SubjectCourse, chapter: ChapterNote) => void;
}

export const SubjectDetailView: React.FC<SubjectDetailViewProps> = ({
  activeSemester,
  activeSubject,
  onBackToSemester,
  onOpenChapterNote,
}) => {
  return (
    <section aria-labelledby="subject-page-heading" className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <span className="font-bold text-sky-700 dark:text-sky-400">
              {activeSubject.code}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {activeSubject.credits.toFixed(2).replace(/\.00$/, '.0')} Credits
            </span>
            {activeSubject.contactHours ? (
              <>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  {activeSubject.contactHours.toFixed(1)} Hrs/Week
                </span>
              </>
            ) : null}
            <span aria-hidden="true">·</span>
            <span>{activeSubject.courseType}</span>
          </div>

          <button
            type="button"
            onClick={onBackToSemester}
            className="inline-flex min-h-[44px] items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to {activeSemester.code}</span>
          </button>
        </div>

        <h1
          id="subject-page-heading"
          className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
        >
          {activeSubject.code}: {activeSubject.title}
        </h1>

        {(activeSubject.professorFollowedBooks.length > 0 ||
          activeSubject.syllabusRecommendedBooks.length > 0) && (
          <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-200 pt-4 sm:grid-cols-2 dark:border-slate-800">
            {activeSubject.professorFollowedBooks.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                  Professor-Followed Books
                </div>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs text-slate-600 dark:text-slate-400">
                  {activeSubject.professorFollowedBooks.map((book, idx) => (
                    <li key={idx}>{book}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeSubject.syllabusRecommendedBooks.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                  Syllabus Recommended Books
                </div>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs text-slate-600 dark:text-slate-400">
                  {activeSubject.syllabusRecommendedBooks.map((book, idx) => (
                    <li key={idx}>{book}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
          Chapters / Modules ({activeSubject.chapters.length})
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {activeSubject.chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-sky-700 dark:text-sky-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {chapter.blocks.length > 0 && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{chapter.blocks.length} Note Topics</span>
                    </>
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-100">
                  {chapter.title}
                </h3>
                <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {splitTextIntoVerticalItems(chapter.summary).map(
                    (sumItem, sIdx) => (
                      <li key={sIdx}>{sumItem}</li>
                    )
                  )}
                </ul>
              </div>

              <button
                type="button"
                aria-label={`Read Note: ${chapter.title}`}
                onClick={() => onOpenChapterNote(activeSubject, chapter)}
                className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 self-start rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 sm:self-center dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Read Note</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

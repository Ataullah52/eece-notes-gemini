/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  ChevronRight,
  Printer,
  Search,
  BookOpen,
  ArrowLeft,
  RotateCcw,
  Sun,
  Moon,
} from 'lucide-react';
import {
  CURRICULUM_SEMESTERS,
  type SemesterEntry,
  type SubjectCourse,
  type ChapterNote,
} from './data/curriculumData';
import {
  PRIORITY_TIER_META,
  filterNoteBlocks,
  type PriorityTier,
  type NoteBlockType,
} from './utils/circuitMath';
import { NoteBlockCard } from './components/NoteBlockCard';

type ViewLevel = 'semesters' | 'subjects' | 'subject-detail' | 'note';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('eece-notes-theme') === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('eece-notes-theme', darkMode ? 'dark' : 'light');
    } catch {
      // Ignore storage errors
    }
  }, [darkMode]);

  // Hierarchy Navigation: Semesters -> Subjects -> Subject Page -> Module Note
  const [viewLevel, setViewLevel] = useState<ViewLevel>('semesters');
  const [selectedSemesterId, setSelectedSemesterId] = useState<string>('eece11');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('eece1111');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('eece1111-ch01');

  // Note Filter State
  const [priorityFilter, setPriorityFilter] = useState<PriorityTier | 'all'>('all');
  const [blockTypeFilter, setBlockTypeFilter] = useState<NoteBlockType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandAllSolutions, setExpandAllSolutions] = useState<boolean>(true);

  const activeSemester: SemesterEntry = useMemo(
    () =>
      CURRICULUM_SEMESTERS.find((s) => s.id === selectedSemesterId) ??
      CURRICULUM_SEMESTERS[0],
    [selectedSemesterId]
  );

  const activeSubject: SubjectCourse | undefined = useMemo(
    () =>
      activeSemester.subjects.find((sub) => sub.id === selectedSubjectId) ??
      activeSemester.subjects[0],
    [activeSemester, selectedSubjectId]
  );

  const activeChapter: ChapterNote | undefined = useMemo(
    () =>
      activeSubject?.chapters.find((ch) => ch.id === selectedChapterId) ??
      activeSubject?.chapters[0],
    [activeSubject, selectedChapterId]
  );

  const filteredBlocks = useMemo(
    () =>
      activeChapter
        ? filterNoteBlocks(
            activeChapter.blocks,
            priorityFilter,
            blockTypeFilter,
            searchQuery
          )
        : [],
    [activeChapter, priorityFilter, blockTypeFilter, searchQuery]
  );

  const handleSelectSemester = (semester: SemesterEntry) => {
    setSelectedSemesterId(semester.id);
    if (semester.subjects.length > 0) {
      setSelectedSubjectId(semester.subjects[0].id);
      if (semester.subjects[0].chapters.length > 0) {
        setSelectedChapterId(semester.subjects[0].chapters[0].id);
      }
    }
    setViewLevel('subjects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSubjectPage = (subject: SubjectCourse) => {
    setSelectedSubjectId(subject.id);
    if (subject.chapters.length > 0) {
      setSelectedChapterId(subject.chapters[0].id);
    }
    setViewLevel('subject-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChapterNote = (subject: SubjectCourse, chapter: ChapterNote) => {
    setSelectedSubjectId(subject.id);
    setSelectedChapterId(chapter.id);
    setPriorityFilter('all');
    setBlockTypeFilter('all');
    setSearchQuery('');
    setViewLevel('note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoutineCourseClick = (slotText: string) => {
    const normalized = slotText.replace(/\s+/g, '').toUpperCase();
    const targetCode = normalized === 'EECE1111L' ? 'EECE1112' : normalized;
    const found = activeSemester.subjects.find(
      (sub) => sub.code.toUpperCase() === targetCode
    );
    if (found) {
      handleOpenSubjectPage(found);
    }
  };

  const handleExportPdf = () => {
    setExpandAllSolutions(true);
    setTimeout(() => {
      window.print();
    }, 50);
  };

  const resetFilters = () => {
    setPriorityFilter('all');
    setBlockTypeFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 print:bg-white print:text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xs sm:px-6 dark:border-slate-800 dark:bg-slate-950/95 print:hidden">
        {/* Home Button -> Semesters */}
        <button
          type="button"
          onClick={() => setViewLevel('semesters')}
          className="font-display text-base font-bold tracking-tight text-slate-900 hover:text-sky-700 sm:text-lg dark:text-slate-100 dark:hover:text-sky-400"
        >
          EECE Notes
        </button>

        {/* Right Controls: Two-Icon Theme Toggle & PDF Export */}
        <div className="flex items-center gap-3">
          <nav aria-label="Theme Switcher" className="flex items-center">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 text-slate-600 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700"
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
            onClick={handleExportPdf}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0">
        {/* Breadcrumb (Shown when inside a semester/subject/note) */}
        {viewLevel !== 'semesters' && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400 print:hidden"
          >
            <button
              type="button"
              onClick={() => setViewLevel('semesters')}
              className="font-medium hover:text-slate-900 dark:hover:text-slate-100"
            >
              Semesters
            </button>

            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <button
              type="button"
              onClick={() => setViewLevel('subjects')}
              className={`font-mono font-medium hover:text-slate-900 dark:hover:text-slate-100 ${
                viewLevel === 'subjects'
                  ? 'font-semibold text-sky-700 dark:text-sky-400'
                  : ''
              }`}
            >
              {activeSemester.code}
            </button>

            {(viewLevel === 'subject-detail' || viewLevel === 'note') &&
              activeSubject && (
                <>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setViewLevel('subject-detail')}
                    className={`font-mono font-medium hover:text-slate-900 dark:hover:text-slate-100 ${
                      viewLevel === 'subject-detail'
                        ? 'font-semibold text-sky-700 dark:text-sky-400'
                        : ''
                    }`}
                  >
                    {activeSubject.code}
                  </button>
                </>
              )}

            {viewLevel === 'note' && activeChapter && (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {activeChapter.title}
                </span>
              </>
            )}
          </nav>
        )}

        {/* =====================================================================
            PAGE 1: SEMESTERS (EECE11 – EECE42)
           ===================================================================== */}
        {viewLevel === 'semesters' && (
          <section aria-labelledby="semester-hub-heading" className="space-y-8">
            <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
              <h1
                id="semester-hub-heading"
                className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
              >
                Select Semester
              </h1>

              {/* Priority Guide shown once here on the Semester page */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Note Priority:
                </span>
                <span className="font-medium text-amber-700 dark:text-amber-400">
                  [P1] Class Note
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-rose-700 dark:text-rose-400">
                  [P2] Previous Year Question (PYQ)
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-sky-700 dark:text-sky-400">
                  [P3] Professor-Followed Book
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-emerald-700 dark:text-emerald-400">
                  [P4] Syllabus Book
                </span>
              </div>
            </div>

            {/* 8-Semester Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CURRICULUM_SEMESTERS.map((sem) => {
                const hasData = sem.subjects.length > 0;
                return (
                  <button
                    key={sem.id}
                    type="button"
                    onClick={() => handleSelectSemester(sem)}
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
                        {hasData
                          ? `${sem.subjects.length} Courses`
                          : 'No courses added yet'}
                      </span>
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* =====================================================================
            PAGE 2: SEMESTER PAGE (COURSES + CLASS ROUTINE FOR SELECTED SEMESTER)
           ===================================================================== */}
        {viewLevel === 'subjects' && (
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
                onClick={() => setViewLevel('semesters')}
                className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:underline dark:text-sky-400"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Semesters</span>
              </button>
            </div>

            {activeSemester.subjects.length > 0 ? (
              <div className="space-y-8">
                {/* Courses Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {activeSemester.subjects.map((subject) => (
                    <button
                      key={subject.id}
                      type="button"
                      onClick={() => handleOpenSubjectPage(subject)}
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

                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {subject.syllabusOverview}
                        </p>
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

                {/* Class Routine (Shown when available for the semester, i.e., EECE11) */}
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
                                <td key={idx} className="py-2.5 px-3 font-mono">
                                  {slot ? (
                                    <button
                                      type="button"
                                      onClick={() => handleRoutineCourseClick(slot)}
                                      className="rounded-md bg-sky-50 px-2 py-1 font-semibold text-sky-700 transition-colors hover:bg-sky-100 dark:bg-sky-950/60 dark:text-sky-300 dark:hover:bg-sky-900/60"
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
                  onClick={() => setViewLevel('semesters')}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Semesters</span>
                </button>
              </div>
            )}
          </section>
        )}

        {/* =====================================================================
            PAGE 3: DEDICATED SUBJECT PAGE (COURSE HEADER, BOOKS & SYLLABUS MODULES)
           ===================================================================== */}
        {viewLevel === 'subject-detail' && activeSubject && (
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
                  onClick={() => setViewLevel('subjects')}
                  className="inline-flex items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400"
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

              {/* Reference Books */}
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

            {/* Chapter / Module-by-Module List */}
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
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {chapter.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={`Read Note: ${chapter.title}`}
                      onClick={() => handleOpenChapterNote(activeSubject, chapter)}
                      className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 sm:self-center dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Read Note</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            PAGE 4: MODULE STUDY NOTE VIEWER & PDF EXPORT
           ===================================================================== */}
        {viewLevel === 'note' && activeSubject && activeChapter && (
          <section aria-labelledby="chapter-note-heading" className="space-y-6">
            {/* Note Header (Shown on screen & PDF) */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 print:rounded-none print:border-x-0 print:border-t-0 print:border-b-2 print:border-slate-900 print:p-0 print:pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex flex-wrap items-center gap-2 font-mono">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    {activeSemester.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-bold text-sky-700 dark:text-sky-400 print:text-slate-900">
                    {activeSubject.code}: {activeSubject.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setViewLevel('subject-detail')}
                  className="inline-flex items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400 print:hidden"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to {activeSubject.code}</span>
                </button>
              </div>

              <h1
                id="chapter-note-heading"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
              >
                {activeChapter.title}
              </h1>

              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 print:text-slate-800">
                {activeChapter.summary}
              </p>
            </div>

            {activeChapter.blocks.length > 0 ? (
              <>
                {/* Filter Bar (Hidden in Print) */}
                <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 print:hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setPriorityFilter('all')}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                          priorityFilter === 'all'
                            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        All ({activeChapter.blocks.length})
                      </button>
                      {([1, 2, 3, 4] as PriorityTier[]).map((tier) => {
                        const meta = PRIORITY_TIER_META[tier];
                        const active = priorityFilter === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setPriorityFilter(tier)}
                            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                              active
                                ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                            }`}
                          >
                            {meta.stars} {meta.shortLabel}
                          </button>
                        );
                      })}
                    </div>

                    <div className="relative min-w-[200px] flex-1 sm:max-w-xs">
                      <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search in note..."
                        aria-label="Search in note"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pr-3 pl-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {(
                        [
                          ['all', 'All Types'],
                          ['definition', 'Definition'],
                          ['theory', 'Theory'],
                          ['memorize', 'Memorize'],
                          ['example', 'Example'],
                          ['pyq', 'PYQ'],
                        ] as const
                      ).map(([typeKey, label]) => (
                        <button
                          key={typeKey}
                          type="button"
                          onClick={() => setBlockTypeFilter(typeKey)}
                          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                            blockTypeFilter === typeKey
                              ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {(priorityFilter !== 'all' ||
                      blockTypeFilter !== 'all' ||
                      searchQuery.trim() !== '') && (
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:underline dark:text-sky-400"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Note Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <aside className="space-y-4 lg:col-span-3 print:hidden">
                    <div className="sticky top-20 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                        Contents ({filteredBlocks.length})
                      </div>
                      <ul className="mt-2.5 space-y-2 text-xs">
                        {filteredBlocks.map((block, idx) => (
                          <li key={block.id}>
                            <a
                              href={`#${block.id}`}
                              className="block text-slate-600 transition-colors hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-400"
                            >
                              <span className="font-mono text-[11px] text-slate-400">
                                {String(idx + 1).padStart(2, '0')}.{' '}
                              </span>
                              <span>{block.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>

                  <div className="space-y-6 lg:col-span-9 print:col-span-12">
                    {filteredBlocks.length > 0 ? (
                      filteredBlocks.map((block, idx) => (
                        <NoteBlockCard
                          key={block.id}
                          block={block}
                          index={idx}
                          forceExpandSolutions={expandAllSolutions}
                        />
                      ))
                    ) : (
                      <div className="rounded-xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          No matching note blocks found.
                        </p>
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="mt-3 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white dark:bg-sky-500 dark:text-slate-950"
                        >
                          Reset Filters
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  No study notes have been added for &ldquo;{activeChapter.title}&rdquo; yet.
                </p>
                <button
                  type="button"
                  onClick={() => setViewLevel('subject-detail')}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to {activeSubject.code}</span>
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

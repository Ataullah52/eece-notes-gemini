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
} from 'lucide-react';
import {
  CURRICULUM_SEMESTERS,
  type SemesterEntry,
  type SubjectCourse,
  type ChapterNote,
} from './data/curriculumData';
import {
  PRIORITY_TIER_META,
  parseCourseCode,
  filterNoteBlocks,
  type PriorityTier,
  type NoteBlockType,
} from './utils/circuitMath';
import { NoteBlockCard } from './components/NoteBlockCard';
import { PriorityGuideModal } from './components/PriorityGuideModal';

type ViewLevel = 'semesters' | 'subjects' | 'note';

export default function App() {
  // Theme state (persisted in localStorage)
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
      // Ignore storage errors in restricted contexts
    }
  }, [darkMode]);

  // Hierarchy Navigation State: Semester > Subject > Note
  const [viewLevel, setViewLevel] = useState<ViewLevel>('semesters');
  const [selectedSemesterId, setSelectedSemesterId] = useState<string>('eece11');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('eece1111');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('eece1111-u01');

  // Revision Filter State (Level 3 Note View)
  const [priorityFilter, setPriorityFilter] = useState<PriorityTier | 'all'>('all');
  const [blockTypeFilter, setBlockTypeFilter] = useState<NoteBlockType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandAllSolutions, setExpandAllSolutions] = useState<boolean>(true);

  // Priority & Nomenclature Guide Modal
  const [isPriorityGuideOpen, setIsPriorityGuideOpen] = useState<boolean>(false);

  // Derived active entities
  const activeSemester: SemesterEntry = useMemo(
    () =>
      CURRICULUM_SEMESTERS.find((s) => s.id === selectedSemesterId) ??
      CURRICULUM_SEMESTERS[0],
    [selectedSemesterId]
  );

  const activeSubject: SubjectCourse = useMemo(
    () =>
      activeSemester.subjects.find((sub) => sub.id === selectedSubjectId) ??
      activeSemester.subjects[0],
    [activeSemester, selectedSubjectId]
  );

  const activeChapter: ChapterNote = useMemo(
    () =>
      activeSubject.chapters.find((ch) => ch.id === selectedChapterId) ??
      activeSubject.chapters[0],
    [activeSubject, selectedChapterId]
  );

  const parsedSubjectCode = useMemo(
    () => parseCourseCode(activeSubject.code),
    [activeSubject.code]
  );

  // Filtered Note Blocks
  const filteredBlocks = useMemo(
    () =>
      filterNoteBlocks(
        activeChapter.blocks,
        priorityFilter,
        blockTypeFilter,
        searchQuery
      ),
    [activeChapter.blocks, priorityFilter, blockTypeFilter, searchQuery]
  );

  // Navigation Handlers
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

  const handleSelectSubject = (subject: SubjectCourse) => {
    setSelectedSubjectId(subject.id);
    if (subject.chapters.length > 0) {
      setSelectedChapterId(subject.chapters[0].id);
    }
    setViewLevel('subjects');
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

  // Counts per priority tier in active chapter
  const tierCounts = useMemo(() => {
    const counts: Record<PriorityTier, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
    for (const b of activeChapter.blocks) {
      counts[b.priorityTier] = (counts[b.priorityTier] || 0) + 1;
    }
    return counts;
  }, [activeChapter.blocks]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 print:bg-white print:text-slate-900">
      {/* Strict 3-Zone Top Bar Contract (Hidden when exporting to PDF) */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-3 py-3 backdrop-blur-xs sm:gap-8 sm:px-6 sm:py-3.5 dark:border-slate-800 dark:bg-slate-950/95 print:hidden">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => setViewLevel('semesters')}
          className="font-display text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-sky-700 sm:text-lg dark:text-slate-100 dark:hover:text-sky-400"
        >
          EECE Notes
        </button>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="flex items-center gap-3 overflow-x-auto text-xs font-medium text-slate-600 sm:gap-6 sm:text-sm dark:text-slate-400"
        >
          <button
            type="button"
            onClick={() => setViewLevel('semesters')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 hover:underline dark:hover:text-slate-100 ${
              viewLevel === 'semesters'
                ? 'font-semibold text-slate-900 underline decoration-sky-600 decoration-2 underline-offset-4 dark:text-slate-100 dark:decoration-sky-400'
                : ''
            }`}
          >
            Semesters
          </button>
          <button
            type="button"
            onClick={() => setViewLevel('subjects')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 hover:underline dark:hover:text-slate-100 ${
              viewLevel === 'subjects'
                ? 'font-semibold text-slate-900 underline decoration-sky-600 decoration-2 underline-offset-4 dark:text-slate-100 dark:decoration-sky-400'
                : ''
            }`}
          >
            Subjects
          </button>
          <button
            type="button"
            onClick={() => setIsPriorityGuideOpen(true)}
            className="transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 hover:underline dark:hover:text-slate-100"
          >
            Priority Guide
          </button>
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 hover:underline dark:hover:text-slate-100"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={handleExportPdf}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 hover:bg-slate-800 sm:gap-2 sm:px-4 sm:py-2 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </header>

      {/* Main Content Container (1440px baseline with generous breathing room) */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0">
        {/* Hierarchical Breadcrumb Bar (Semester > Subject > Notes) */}
        <nav
          aria-label="Curriculum Hierarchy Breadcrumb"
          className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400 print:hidden"
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setViewLevel('semesters')}
              className={`font-medium transition-colors hover:text-slate-900 dark:hover:text-slate-100 ${
                viewLevel === 'semesters'
                  ? 'font-semibold text-slate-900 dark:text-slate-100'
                  : ''
              }`}
            >
              All Semesters (EECE11–EECE42)
            </button>

            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />

            <button
              type="button"
              onClick={() => setViewLevel('subjects')}
              className={`font-mono font-medium transition-colors hover:text-slate-900 dark:hover:text-slate-100 ${
                viewLevel === 'subjects'
                  ? 'font-semibold text-sky-700 dark:text-sky-400'
                  : ''
              }`}
            >
              {activeSemester.code} ({activeSemester.title})
            </button>

            {viewLevel === 'note' && (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setViewLevel('subjects')}
                  className="font-mono font-medium hover:text-slate-900 dark:hover:text-slate-100"
                >
                  {activeSubject.code}: {activeSubject.title}
                </button>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {activeChapter.unitNumber} · {activeChapter.title}
                </span>
              </>
            )}
          </div>

          <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
            Structure: Semester &gt; Subject &gt; Notes
          </div>
        </nav>

        {/* =====================================================================
            LEVEL 1: SEMESTER DIRECTORY (EECE11 – EECE42)
           ===================================================================== */}
        {viewLevel === 'semesters' && (
          <section aria-labelledby="semester-hub-heading" className="space-y-8">
            <div className="border-b border-slate-200 pb-6 dark:border-slate-800">
              <div className="text-xs font-medium text-sky-700 dark:text-sky-400">
                Department of Electrical, Electronic and Communication Engineering (EECE)
              </div>
              <h1
                id="semester-hub-heading"
                className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100"
              >
                Structured Study Notes by Semester
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Select a semester (<span className="font-mono font-semibold">EECE11</span> through{' '}
                <span className="font-mono font-semibold">EECE42</span>) to browse course syllabi, textbook hierarchies, and chapter study notes organized by our four-tier exam priority system.
              </p>

              {/* Unboxed Priority Legend Strip */}
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Priority Hierarchy:
                </span>
                <span className="font-medium text-amber-700 dark:text-amber-400">
                  [P1] 1. Class Note (Professor Provided)
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-rose-700 dark:text-rose-400">
                  [P2] 2. Previous Year Question (PYQ)
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-sky-700 dark:text-sky-400">
                  [P3] 3. Professor-Followed Books
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-emerald-700 dark:text-emerald-400">
                  [P4] 4. Syllabus Recommended Books
                </span>
              </div>
            </div>

            {/* 8-Semester Grid (EECE11 to EECE42) */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {CURRICULUM_SEMESTERS.map((sem) => {
                const totalChapters = sem.subjects.reduce(
                  (acc, sub) => acc + sub.chapters.length,
                  0
                );
                const totalBlocks = sem.subjects.reduce(
                  (acc, sub) =>
                    acc +
                    sub.chapters.reduce((cAcc, ch) => cAcc + ch.blocks.length, 0),
                  0
                );
                const isSelected = sem.id === selectedSemesterId;

                return (
                  <div
                    key={sem.id}
                    className={`flex flex-col justify-between rounded-xl border bg-white p-5 transition-colors dark:bg-slate-900 ${
                      isSelected
                        ? 'border-sky-600/80 dark:border-sky-400/80'
                        : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700'
                    }`}
                  >
                    <div>
                      {/* Unboxed Metadata Line */}
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono text-sm font-bold text-sky-700 dark:text-sky-400">
                          {sem.code}
                        </span>
                        <span className="font-mono tabular-nums">
                          {sem.totalCredits} Credits
                        </span>
                      </div>

                      <h2 className="mt-1.5 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {sem.title}
                      </h2>

                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {sem.subtitle}
                      </p>

                      {/* Course preview list */}
                      <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 dark:border-slate-800/80">
                        <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          Indexed Subjects ({sem.subjects.length}):
                        </div>
                        {sem.subjects.map((sub) => (
                          <div
                            key={sub.id}
                            className="truncate text-xs text-slate-700 dark:text-slate-300"
                          >
                            <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                              {sub.code}
                            </span>{' '}
                            · {sub.title}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 border-t border-slate-100 pt-3.5 dark:border-slate-800">
                      <div className="mb-2.5 flex items-center gap-2 font-mono text-[11px] text-slate-500 tabular-nums dark:text-slate-400">
                        <span>{sem.subjects.length} Subjects</span>
                        <span aria-hidden="true">·</span>
                        <span>{totalChapters} Units</span>
                        <span aria-hidden="true">·</span>
                        <span>{totalBlocks} Blocks</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSelectSemester(sem)}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                      >
                        <span>Open {sem.code} Subjects</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* =====================================================================
            LEVEL 2: SUBJECT SYLLABUS & CHAPTER DIRECTORY
           ===================================================================== */}
        {viewLevel === 'subjects' && (
          <section aria-labelledby="subject-directory-heading" className="space-y-8">
            {/* Semester Switcher Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
                    {activeSemester.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeSemester.title}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">
                    {activeSemester.totalCredits} Total Credits
                  </span>
                </div>
                <h1
                  id="subject-directory-heading"
                  className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
                >
                  {activeSemester.code} Subject & Chapter Directory
                </h1>
              </div>

              {/* Quick Semester Selector Tabs */}
              <div
                role="tablist"
                aria-label="Switch Semester"
                className="flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-900"
              >
                {CURRICULUM_SEMESTERS.map((sem) => (
                  <button
                    key={sem.id}
                    type="button"
                    role="tab"
                    aria-selected={sem.id === activeSemester.id}
                    onClick={() => handleSelectSemester(sem)}
                    className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold transition-colors whitespace-nowrap ${
                      sem.id === activeSemester.id
                        ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-800 dark:text-white'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {sem.code}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column (4 cols): Subjects List in Current Semester */}
              <div className="space-y-3 lg:col-span-4">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Subjects in {activeSemester.code} ({activeSemester.subjects.length})
                </div>

                {activeSemester.subjects.map((subject) => {
                  const isCurrent = subject.id === activeSubject.id;
                  const decoded = parseCourseCode(subject.code);
                  return (
                    <button
                      key={subject.id}
                      type="button"
                      onClick={() => handleSelectSubject(subject)}
                      className={`w-full rounded-xl border p-4 text-left transition-colors ${
                        isCurrent
                          ? 'border-sky-600 bg-white dark:border-sky-400 dark:bg-slate-900'
                          : 'border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono text-sm font-bold text-sky-700 dark:text-sky-400">
                          {subject.code}
                        </span>
                        <span className="font-mono tabular-nums">
                          {subject.credits.toFixed(1)} Credits · {subject.courseType}
                        </span>
                      </div>
                      <div className="mt-1 font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                        {subject.title}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <span>Yr {decoded.yearDigit}</span>
                        <span aria-hidden="true">·</span>
                        <span>Sem {decoded.semesterDigit}</span>
                        <span aria-hidden="true">·</span>
                        <span>Series {decoded.courseSeries}</span>
                        <span aria-hidden="true">·</span>
                        <span>{subject.chapters.length} Units</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column (8 cols): Active Subject Details, Books & Chapter Notes */}
              <div className="space-y-6 lg:col-span-8">
                <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono font-bold text-sky-700 dark:text-sky-400">
                      {activeSubject.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      1st Digit ({parsedSubjectCode.yearDigit}) = {parsedSubjectCode.yearLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      2nd Digit ({parsedSubjectCode.semesterDigit}) = {parsedSubjectCode.semesterLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      Last 2 Digits ({parsedSubjectCode.courseSeries}) = Course Series
                    </span>
                  </div>

                  <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {activeSubject.code}: {activeSubject.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {activeSubject.syllabusOverview}
                  </p>

                  {/* Textbook Hierarchy (Priority Tier 3 vs Priority Tier 4) */}
                  <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-200 pt-4 sm:grid-cols-2 dark:border-slate-800">
                    <div>
                      <div className="text-xs font-semibold text-sky-700 dark:text-sky-400">
                        [P3] Priority 3 · Professor-Followed Books
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs text-slate-700 dark:text-slate-300">
                        {activeSubject.professorFollowedBooks.map((book, idx) => (
                          <li key={idx}>{book}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        [P4] Priority 4 · Syllabus Recommended Books
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs text-slate-700 dark:text-slate-300">
                        {activeSubject.syllabusRecommendedBooks.map((book, idx) => (
                          <li key={idx}>{book}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Chapter Notes List for Active Subject */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                      Available Chapter Study Notes ({activeSubject.chapters.length})
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Click any unit to open interactive notes &amp; PDF export
                    </span>
                  </div>

                  {activeSubject.chapters.map((chapter) => {
                    const c1 = chapter.blocks.filter((b) => b.priorityTier === 1).length;
                    const c2 = chapter.blocks.filter((b) => b.priorityTier === 2).length;
                    const c3 = chapter.blocks.filter((b) => b.priorityTier === 3).length;
                    const c4 = chapter.blocks.filter((b) => b.priorityTier === 4).length;

                    return (
                      <div
                        key={chapter.id}
                        className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono font-bold text-sky-700 dark:text-sky-400">
                              {activeSubject.code} · {chapter.unitNumber}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums">
                              {chapter.blocks.length} Study Blocks
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums">
                              {chapter.estimatedMinutes} min study
                            </span>
                          </div>
                          <span>Updated {chapter.lastUpdated}</span>
                        </div>

                        <h4 className="mt-1.5 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {chapter.unitNumber}: {chapter.title}
                        </h4>

                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {chapter.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-3.5 dark:border-slate-800">
                          {/* Unboxed Priority Breakdown */}
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs tabular-nums">
                            <span className="text-amber-700 dark:text-amber-400">
                              [P1] Class Note: {c1}
                            </span>
                            <span aria-hidden="true" className="text-slate-400">
                              ·
                            </span>
                            <span className="text-rose-700 dark:text-rose-400">
                              [P2] PYQ: {c2}
                            </span>
                            <span aria-hidden="true" className="text-slate-400">
                              ·
                            </span>
                            <span className="text-sky-700 dark:text-sky-400">
                              [P3] Prof. Book: {c3}
                            </span>
                            <span aria-hidden="true" className="text-slate-400">
                              ·
                            </span>
                            <span className="text-emerald-700 dark:text-emerald-400">
                              [P4] Syllabus Ref: {c4}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleOpenChapterNote(activeSubject, chapter)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors whitespace-nowrap hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                          >
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>Read Chapter Note</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            LEVEL 3: INTERACTIVE CHAPTER STUDY NOTE VIEWER & PDF EXPORT
           ===================================================================== */}
        {viewLevel === 'note' && (
          <section aria-labelledby="chapter-note-heading" className="space-y-6">
            {/* Academic Header (Visible both on screen and at the top of the exported PDF) */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 print:rounded-none print:border-x-0 print:border-t-0 print:border-b-2 print:border-slate-900 print:p-0 print:pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex flex-wrap items-center gap-2 font-mono">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    {activeSemester.code} ({activeSemester.title})
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-bold text-sky-700 dark:text-sky-400 print:text-slate-900">
                    {activeSubject.code}: {activeSubject.title}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeChapter.unitNumber}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setViewLevel('subjects')}
                  className="inline-flex items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400 print:hidden"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to {activeSubject.code} Units</span>
                </button>
              </div>

              <h1
                id="chapter-note-heading"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
              >
                {activeChapter.unitNumber}: {activeChapter.title}
              </h1>

              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 print:text-slate-800">
                {activeChapter.summary}
              </p>

              {/* Textbook Reference Line in Header */}
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 print:border-slate-200 print:text-slate-700">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Primary Course Text:
                </span>
                <span>{activeSubject.professorFollowedBooks[0]}</span>
                {priorityFilter !== 'all' && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-amber-700 dark:text-amber-400">
                      Filtered View: {PRIORITY_TIER_META[priorityFilter].fullTitle}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Revision Filter Toolbar (Hidden in Print) */}
            <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 print:hidden">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* 4-Tier Source Priority Filter Buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Source Priority:
                  </span>
                  <button
                    type="button"
                    onClick={() => setPriorityFilter('all')}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                      priorityFilter === 'all'
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    All Sources ({activeChapter.blocks.length})
                  </button>
                  {([1, 2, 3, 4] as PriorityTier[]).map((tier) => {
                    const meta = PRIORITY_TIER_META[tier];
                    const active = priorityFilter === tier;
                    return (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setPriorityFilter(tier)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                          active
                            ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        {tier}. {meta.shortLabel} {meta.stars} ({tierCounts[tier]})
                      </button>
                    );
                  })}
                </div>

                {/* Search Input inside Chapter */}
                <div className="relative min-w-[220px] flex-1 sm:max-w-xs">
                  <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter topics, formulas, or exam years..."
                    aria-label="Filter note blocks by keyword"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pr-3 pl-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Second Row: Block Type Filter + Chapter Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Block Type:
                  </span>
                  {(
                    [
                      ['all', 'All Blocks'],
                      ['definition', 'Definition'],
                      ['theory', 'Theory'],
                      ['memorize', 'Memorize'],
                      ['example', 'Examples'],
                      ['pyq', 'PYQ Archive'],
                    ] as const
                  ).map(([typeKey, label]) => (
                    <button
                      key={typeKey}
                      type="button"
                      onClick={() => setBlockTypeFilter(typeKey)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                        blockTypeFilter === typeKey
                          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono tabular-nums">
                    Showing {filteredBlocks.length} of {activeChapter.blocks.length} blocks
                  </span>
                  {(priorityFilter !== 'all' ||
                    blockTypeFilter !== 'all' ||
                    searchQuery.trim() !== '') && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="inline-flex items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset Filters</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Two-Column Note Reading Layout: Sticky TOC Sidebar (Left) + Prioritized Blocks (Right) */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Sidebar (3 cols, Hidden in Print): Chapter Units & On-Page Block Index */}
              <aside className="space-y-6 lg:col-span-3 print:hidden">
                <div className="sticky top-20 space-y-5">
                  {/* Unit Switcher within Current Subject */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {activeSubject.code} Units ({activeSubject.chapters.length})
                    </div>
                    <div className="mt-2.5 space-y-1.5">
                      {activeSubject.chapters.map((ch) => (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => handleOpenChapterNote(activeSubject, ch)}
                          className={`w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                            ch.id === activeChapter.id
                              ? 'bg-sky-50 font-semibold text-sky-800 dark:bg-sky-950/70 dark:text-sky-300'
                              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="font-mono text-[11px]">{ch.unitNumber}</div>
                          <div className="truncate">{ch.title}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Jump Block Outline */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      On This Page ({filteredBlocks.length})
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
                </div>
              </aside>

              {/* Right Column (9 cols, Full 12 cols in Print): Study Note Blocks */}
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
                    <p className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
                      No study blocks match the selected priority or block filter.
                    </p>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                      Try switching back to All Sources or clearing the keyword search.
                    </p>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950"
                    >
                      Show All Chapter Blocks
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Clean Academic Footer (Hidden in Print) */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 print:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div>
            EECE Study Notes Portal · Structured Curriculum (EECE11–EECE42)
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>1. Class Note [P1]</span>
            <span aria-hidden="true">·</span>
            <span>2. Previous Year Question [P2]</span>
            <span aria-hidden="true">·</span>
            <span>3. Professor-Followed Book [P3]</span>
            <span aria-hidden="true">·</span>
            <span>4. Syllabus Book [P4]</span>
          </div>
        </div>
      </footer>

      {/* Priority & Course Code Nomenclature Guide Modal */}
      <PriorityGuideModal
        isOpen={isPriorityGuideOpen}
        onClose={() => setIsPriorityGuideOpen(false)}
      />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import {
  ChevronRight,
  Printer,
  Search,
  BookOpen,
  ArrowLeft,
  RotateCcw,
  Sun,
  Moon,
  Link2,
  Check,
  X,
  Bookmark,
  Flag,
  CheckCircle2,
} from 'lucide-react';
import type {
  SemesterEntry,
  SubjectCourse,
  ChapterNote,
} from './data/types';
import {
  INITIAL_CURRICULUM_SEMESTERS,
  loadCourseChapters,
  mergeCourseChaptersIntoSemesters,
  loadAllCourseChaptersForStartupIndex,
} from './data/courseLoader';
import {
  PRIORITY_TIER_META,
  filterNoteBlocks,
  matchesPriorityTier,
  matchesBlockType,
  getBlockPriorityStars,
  getMemorizeBlockTitle,
  type PriorityTier,
  type PriorityFilter,
  type NoteBlockType,
} from './utils/circuitMath';
import { splitTextIntoVerticalItems } from './utils/mathLatex';
import {
  buildRouteHash,
  parseRouteHash,
  type RouteViewLevel,
} from './utils/hashRouter';
import {
  buildGlobalSearchIndex,
  searchGlobalIndex,
  type GlobalSearchEntry,
} from './utils/globalSearch';
import {
  loadRevisionState,
  saveRevisionState,
  toggleRevisionField,
  type RevisionStateMap,
  type BlockRevisionStatus,
} from './utils/revisionState';

const LazyNoteBlockCard = React.lazy(() =>
  import('./components/NoteBlockCard').then((mod) => ({
    default: mod.NoteBlockCard,
  }))
);

type ViewLevel = RouteViewLevel;

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

    const handleBeforePrint = () => {
      root.classList.remove('dark');
    };
    const handleAfterPrint = () => {
      if (darkMode) {
        root.classList.add('dark');
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [darkMode]);

  // Revision tools state persisted under a single localStorage key
  const [revisionState, setRevisionState] = useState<RevisionStateMap>(() =>
    loadRevisionState()
  );

  const handleToggleRevision = (
    blockId: string,
    field: keyof BlockRevisionStatus
  ) => {
    setRevisionState((prev) => {
      const next = toggleRevisionField(prev, blockId, field);
      saveRevisionState(next);
      return next;
    });
  };

  const [semesters, setSemesters] = useState<SemesterEntry[]>(
    INITIAL_CURRICULUM_SEMESTERS
  );
  const [isCourseLoading, setIsCourseLoading] = useState<boolean>(false);
  const [globalSearchIndex, setGlobalSearchIndex] = useState<GlobalSearchEntry[]>(
    () => buildGlobalSearchIndex(INITIAL_CURRICULUM_SEMESTERS)
  );

  // Build the search index once at startup from the chapter data
  useEffect(() => {
    let active = true;
    loadAllCourseChaptersForStartupIndex().then((fullSemesters) => {
      if (!active) return;
      setGlobalSearchIndex(buildGlobalSearchIndex(fullSemesters));
    });
    return () => {
      active = false;
    };
  }, []);

  const bookmarkedEntries = useMemo(
    () =>
      globalSearchIndex.filter(
        (entry) => revisionState[entry.blockId]?.bookmarked
      ),
    [globalSearchIndex, revisionState]
  );

  const weakTopicEntries = useMemo(
    () =>
      globalSearchIndex.filter((entry) => revisionState[entry.blockId]?.weak),
    [globalSearchIndex, revisionState]
  );

  const revisionTotalCount = useMemo(() => {
    const ids = new Set<string>();
    for (const entry of bookmarkedEntries) ids.add(entry.blockId);
    for (const entry of weakTopicEntries) ids.add(entry.blockId);
    return ids.size;
  }, [bookmarkedEntries, weakTopicEntries]);

  // Hierarchy Navigation synced with URL Hash (#/semester/subject/chapter)
  const initialRoute = useMemo(
    () =>
      parseRouteHash(
        typeof window !== 'undefined' ? window.location.hash : '',
        INITIAL_CURRICULUM_SEMESTERS
      ),
    []
  );
  const [viewLevel, setViewLevel] = useState<ViewLevel>(initialRoute.viewLevel);
  const [selectedSemesterId, setSelectedSemesterId] = useState<string>(
    initialRoute.semesterId
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    initialRoute.subjectId
  );
  const [selectedChapterId, setSelectedChapterId] = useState<string>(
    initialRoute.chapterId
  );
  const [copiedChapterLink, setCopiedChapterLink] = useState<boolean>(false);

  // Dynamically load course chapter data only when that course is opened
  useEffect(() => {
    if (viewLevel !== 'subject-detail' && viewLevel !== 'note') return;
    let active = true;
    setIsCourseLoading(true);
    loadCourseChapters(selectedSubjectId)
      .then((chapters) => {
        if (!active) return;
        if (chapters) {
          setSemesters((prev) =>
            mergeCourseChaptersIntoSemesters(prev, selectedSubjectId, chapters)
          );
        }
      })
      .finally(() => {
        if (active) setIsCourseLoading(false);
      });
    return () => {
      active = false;
    };
  }, [viewLevel, selectedSubjectId]);

  // Note Filter State
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all');
  const [blockTypeFilter, setBlockTypeFilter] = useState<NoteBlockType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [includeSolutionsInPdf, setIncludeSolutionsInPdf] = useState<boolean>(true);
  const [isPdfExportModalOpen, setIsPdfExportModalOpen] = useState<boolean>(false);

  // Global Header Search State
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState<boolean>(false);
  const globalSearchInputRef = useRef<HTMLInputElement | null>(null);
  const globalSearchContainerRef = useRef<HTMLDivElement | null>(null);

  const globalSearchGroups = useMemo(
    () => searchGlobalIndex(globalSearchIndex, globalSearchQuery),
    [globalSearchIndex, globalSearchQuery]
  );

  // Pressing "/" focuses the global search box; Escape closes dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        const active = document.activeElement as HTMLElement | null;
        const tag = active?.tagName.toLowerCase();
        if (
          tag !== 'input' &&
          tag !== 'textarea' &&
          tag !== 'select' &&
          !active?.isContentEditable
        ) {
          e.preventDefault();
          globalSearchInputRef.current?.focus();
          setIsGlobalSearchOpen(true);
        }
      } else if (e.key === 'Escape' && isGlobalSearchOpen) {
        setIsGlobalSearchOpen(false);
        globalSearchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGlobalSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        globalSearchContainerRef.current &&
        !globalSearchContainerRef.current.contains(e.target as Node)
      ) {
        setIsGlobalSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isCourseLoading) return;
    const parsed = parseRouteHash(
      typeof window !== 'undefined' ? window.location.hash : '',
      semesters
    );
    if (parsed.blockId) {
      setTimeout(() => {
        document.getElementById(parsed.blockId!)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 80);
    }
  }, [isCourseLoading, semesters]);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseRouteHash(window.location.hash, semesters);
      setViewLevel((prev) => {
        if (prev !== parsed.viewLevel) {
          setPriorityFilter('all');
          setBlockTypeFilter('all');
          setSearchQuery('');
        }
        return parsed.viewLevel;
      });
      setSelectedSemesterId(parsed.semesterId);
      setSelectedSubjectId(parsed.subjectId);
      setSelectedChapterId((prevCh) => {
        if (prevCh !== parsed.chapterId) {
          setPriorityFilter('all');
          setBlockTypeFilter('all');
          setSearchQuery('');
        }
        return parsed.chapterId;
      });

      if (parsed.blockId) {
        setTimeout(() => {
          document.getElementById(parsed.blockId!)?.scrollIntoView({
            behavior: 'smooth',
          });
        }, 80);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [semesters]);

  const activeSemester: SemesterEntry = useMemo(
    () =>
      semesters.find((s) => s.id === selectedSemesterId) ?? semesters[0],
    [semesters, selectedSemesterId]
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

  const navigateToRoute = (route: {
    viewLevel: ViewLevel;
    semesterId?: string;
    subjectId?: string;
    chapterId?: string;
    blockId?: string | null;
  }) => {
    const semId = route.semesterId ?? selectedSemesterId;
    const subId = route.subjectId ?? selectedSubjectId;
    const chId = route.chapterId ?? selectedChapterId;

    setViewLevel(route.viewLevel);
    setSelectedSemesterId(semId);
    setSelectedSubjectId(subId);
    setSelectedChapterId(chId);

    const nextHash = buildRouteHash({
      viewLevel: route.viewLevel,
      semesterId: semId,
      subjectId: subId,
      chapterId: chId,
      blockId: route.blockId ?? null,
    });

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }

    if (route.blockId) {
      setTimeout(() => {
        document.getElementById(route.blockId!)?.scrollIntoView({ behavior: 'smooth' });
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSemester = (semester: SemesterEntry) => {
    const nextSubjectId =
      semester.subjects.length > 0 ? semester.subjects[0].id : selectedSubjectId;
    const nextChapterId =
      semester.subjects.length > 0 && semester.subjects[0].chapters.length > 0
        ? semester.subjects[0].chapters[0].id
        : selectedChapterId;

    navigateToRoute({
      viewLevel: 'subjects',
      semesterId: semester.id,
      subjectId: nextSubjectId,
      chapterId: nextChapterId,
    });
  };

  const handleOpenSubjectPage = (subject: SubjectCourse) => {
    const nextChapterId =
      subject.chapters.length > 0 ? subject.chapters[0].id : selectedChapterId;
    navigateToRoute({
      viewLevel: 'subject-detail',
      semesterId: activeSemester.id,
      subjectId: subject.id,
      chapterId: nextChapterId,
    });
  };

  const handleOpenChapterNote = (subject: SubjectCourse, chapter: ChapterNote) => {
    setPriorityFilter('all');
    setBlockTypeFilter('all');
    setSearchQuery('');
    navigateToRoute({
      viewLevel: 'note',
      semesterId: activeSemester.id,
      subjectId: subject.id,
      chapterId: chapter.id,
    });
  };

  const handleCopyChapterLink = () => {
    if (!activeSubject || !activeChapter) return;
    const hash = buildRouteHash({
      viewLevel: 'note',
      semesterId: activeSemester.id,
      subjectId: activeSubject.id,
      chapterId: activeChapter.id,
    });
    const fullUrl = `${window.location.origin}${window.location.pathname}${hash}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullUrl).catch(() => {});
    }
    setCopiedChapterLink(true);
    setTimeout(() => setCopiedChapterLink(false), 2000);
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

  const handleOpenExportPdfModal = () => {
    setIsPdfExportModalOpen(true);
  };

  const handleConfirmExportPdf = (withSolutions: boolean) => {
    setIncludeSolutionsInPdf(withSolutions);
    setIsPdfExportModalOpen(false);
    const root = document.documentElement;
    root.classList.remove('dark');
    setTimeout(() => {
      window.print();
      if (darkMode) {
        root.classList.add('dark');
      }
    }, 60);
  };

  const resetFilters = () => {
    setPriorityFilter('all');
    setBlockTypeFilter('all');
    setSearchQuery('');
  };

  const handleSelectPriorityFilter = (tier: PriorityFilter) => {
    setPriorityFilter(tier);
    if (
      tier !== 'all' &&
      blockTypeFilter !== 'all' &&
      activeChapter &&
      filterNoteBlocks(activeChapter.blocks, tier, blockTypeFilter, searchQuery).length === 0
    ) {
      setBlockTypeFilter('all');
    }
  };

  const handleSelectBlockTypeFilter = (typeKey: NoteBlockType | 'all') => {
    setBlockTypeFilter(typeKey);
    if (
      typeKey !== 'all' &&
      priorityFilter !== 'all' &&
      activeChapter &&
      filterNoteBlocks(activeChapter.blocks, priorityFilter, typeKey, searchQuery).length === 0
    ) {
      setPriorityFilter('all');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 print:bg-white print:text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xs sm:px-6 dark:border-slate-800 dark:bg-slate-950/95 print:hidden">
        {/* Home Button -> Semesters */}
        <button
          type="button"
          onClick={() => navigateToRoute({ viewLevel: 'semesters' })}
          className="inline-flex min-h-[44px] items-center font-display text-base font-bold tracking-tight text-slate-900 hover:text-sky-700 sm:text-lg dark:text-slate-100 dark:hover:text-sky-400"
        >
          EECE Notes
        </button>

        {/* Global Search Box across ALL courses & chapters */}
        <div
          ref={globalSearchContainerRef}
          className="relative order-3 w-full sm:order-2 sm:max-w-md sm:flex-1"
        >
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
            <input
              ref={globalSearchInputRef}
              type="search"
              value={globalSearchQuery}
              onFocus={() => setIsGlobalSearchOpen(true)}
              onChange={(e) => {
                setGlobalSearchQuery(e.target.value);
                setIsGlobalSearchOpen(true);
              }}
              placeholder="Search all courses, chapters & PYQs (Press /)"
              aria-label="Search all courses and chapters"
              className="min-h-[44px] w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pr-11 pl-9 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-950"
            />
            {globalSearchQuery ? (
              <button
                type="button"
                aria-label="Clear global search"
                onClick={() => {
                  setGlobalSearchQuery('');
                  globalSearchInputRef.current?.focus();
                }}
                className="absolute right-0 flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : (
              <kbd className="pointer-events-none absolute right-2.5 hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-400 sm:inline-block dark:border-slate-700 dark:bg-slate-800">
                /
              </kbd>
            )}
          </div>

          {isGlobalSearchOpen && globalSearchQuery.trim().length > 0 && (
            <div
              role="region"
              aria-label="Global search results"
              className="absolute top-full right-0 left-0 z-50 mt-1.5 max-h-[70vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {globalSearchGroups.length > 0 ? (
                <div className="space-y-4">
                  {globalSearchGroups.map((courseGroup) => (
                    <div key={courseGroup.courseKey} className="space-y-2">
                      <div className="border-b border-slate-100 pb-1 font-mono text-xs font-bold text-sky-700 dark:border-slate-800 dark:text-sky-400">
                        {courseGroup.subjectCode} · {courseGroup.subjectTitle}
                      </div>
                      {courseGroup.chapters.map((chGroup) => (
                        <div key={chGroup.chapterId} className="space-y-1.5 pl-2">
                          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                            {chGroup.chapterUnitNumber}: {chGroup.chapterTitle}
                          </div>
                          <div className="space-y-1">
                            {chGroup.items.map((item) => (
                              <button
                                key={item.blockId}
                                type="button"
                                onClick={() => {
                                  setIsGlobalSearchOpen(false);
                                  navigateToRoute({
                                    viewLevel: 'note',
                                    semesterId: item.semesterId,
                                    subjectId: item.subjectId,
                                    chapterId: item.chapterId,
                                    blockId: item.blockId,
                                  });
                                }}
                                className="block min-h-[44px] w-full rounded-lg border border-transparent px-2.5 py-2 text-left transition-colors hover:border-slate-200 hover:bg-slate-50 dark:hover:border-slate-800 dark:hover:bg-slate-800/60"
                              >
                                <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                                  <span>{item.blockTitle}</span>
                                </div>
                                <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-600 dark:text-slate-400">
                                  {item.snippet}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">
                  No matching notes found across any course or chapter for &ldquo;
                  {globalSearchQuery}&rdquo;.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right Controls: My revision, Two-Icon Theme Toggle & PDF Export */}
        <div className="order-2 flex items-center gap-2 sm:order-3 sm:gap-2.5">
          <button
            type="button"
            onClick={() => navigateToRoute({ viewLevel: 'revision' })}
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
              onClick={() => setDarkMode((prev) => !prev)}
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
            onClick={handleOpenExportPdfModal}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </header>

      {/* Export PDF Options Modal */}
      {isPdfExportModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-xs print:hidden"
          onClick={() => setIsPdfExportModalOpen(false)}
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

            <div className="mt-4 space-y-2.5" role="radiogroup" aria-label="Solution visibility in PDF">
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
                  onChange={() => setIncludeSolutionsInPdf(true)}
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
                  onChange={() => setIncludeSolutionsInPdf(false)}
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
                onClick={() => setIsPdfExportModalOpen(false)}
                className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleConfirmExportPdf(includeSolutionsInPdf)}
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

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0">
        {/* Breadcrumb (Shown when inside a semester/subject/note/revision) */}
        {viewLevel !== 'semesters' && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400 print:hidden"
          >
            <button
              type="button"
              onClick={() => navigateToRoute({ viewLevel: 'semesters' })}
              className="inline-flex min-h-[44px] items-center font-medium hover:text-slate-900 dark:hover:text-slate-100"
            >
              Semesters
            </button>

            {viewLevel === 'revision' ? (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  My revision
                </span>
              </>
            ) : (
              <>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                <button
                  type="button"
                  onClick={() =>
                    navigateToRoute({ viewLevel: 'subjects', semesterId: activeSemester.id })
                  }
                  className={`inline-flex min-h-[44px] items-center font-mono font-medium hover:text-slate-900 dark:hover:text-slate-100 ${
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
                        onClick={() =>
                          navigateToRoute({
                            viewLevel: 'subject-detail',
                            semesterId: activeSemester.id,
                            subjectId: activeSubject.id,
                          })
                        }
                        className={`inline-flex min-h-[44px] items-center font-mono font-medium hover:text-slate-900 dark:hover:text-slate-100 ${
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
            </div>

            {/* 8-Semester Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {semesters.map((sem) => {
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
                onClick={() => navigateToRoute({ viewLevel: 'semesters' })}
                className="inline-flex min-h-[44px] items-center gap-1 text-xs font-medium text-sky-700 hover:underline dark:text-sky-400"
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
                                <td key={idx} className="py-2 px-3 font-mono">
                                  {slot ? (
                                    <button
                                      type="button"
                                      onClick={() => handleRoutineCourseClick(slot)}
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
                  onClick={() => navigateToRoute({ viewLevel: 'semesters' })}
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950"
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
                  onClick={() =>
                    navigateToRoute({
                      viewLevel: 'subjects',
                      semesterId: activeSemester.id,
                    })
                  }
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
                      onClick={() => handleOpenChapterNote(activeSubject, chapter)}
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

                <div className="flex items-center gap-3 print:hidden">
                  <button
                    type="button"
                    onClick={handleCopyChapterLink}
                    aria-label={copiedChapterLink ? 'Link Copied' : 'Copy Chapter Link'}
                    title={copiedChapterLink ? 'Link Copied' : 'Copy Chapter Link'}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-slate-200 bg-slate-50 p-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {copiedChapterLink ? (
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Link2 className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigateToRoute({
                        viewLevel: 'subject-detail',
                        semesterId: activeSemester.id,
                        subjectId: activeSubject.id,
                      })
                    }
                    className="inline-flex min-h-[44px] items-center gap-1 font-medium text-sky-700 hover:underline dark:text-sky-400"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to {activeSubject.code}</span>
                  </button>
                </div>
              </div>

              <h1
                id="chapter-note-heading"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
              >
                {activeChapter.title}
              </h1>

              <ul className="mt-2 max-w-4xl list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 print:text-slate-800">
                {splitTextIntoVerticalItems(activeChapter.summary).map(
                  (sumItem, sIdx) => (
                    <li key={sIdx}>{sumItem}</li>
                  )
                )}
              </ul>
            </div>

            {activeChapter.blocks.length > 0 ? (
              <>
                {/* Filter Bar (Hidden in Print) */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 print:hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <select
                        aria-label="Filter by priority"
                        value={String(priorityFilter)}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val === 'all' || val === 'exam') {
                            handleSelectPriorityFilter(val);
                          } else {
                            handleSelectPriorityFilter(Number(val) as PriorityTier);
                          }
                        }}
                        className="min-h-[44px] rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 [color-scheme:light] focus:border-sky-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:[color-scheme:dark] dark:focus:bg-slate-900"
                      >
                        <option
                          value="all"
                          className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                        >
                          All Priorities ({activeChapter.blocks.length})
                        </option>
                        <option
                          value="exam"
                          className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                        >
                          ★★★★★ / ★★★★ Exam revision (
                          {
                            activeChapter.blocks.filter(
                              (b) =>
                                matchesPriorityTier(b, 1) || matchesPriorityTier(b, 2)
                            ).length
                          }
                          )
                        </option>
                        {([1, 2, 3, 4] as PriorityTier[]).map((tier) => {
                          const meta = PRIORITY_TIER_META[tier];
                          const tierCount = activeChapter.blocks.filter((b) =>
                            matchesPriorityTier(b, tier)
                          ).length;
                          return (
                            <option
                              key={tier}
                              value={tier}
                              className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            >
                              {meta.stars} ({tierCount})
                            </option>
                          );
                        })}
                      </select>

                      <select
                        aria-label="Filter by block type"
                        value={blockTypeFilter}
                        onChange={(e) =>
                          handleSelectBlockTypeFilter(
                            e.target.value as NoteBlockType | 'all'
                          )
                        }
                        className="min-h-[44px] rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 [color-scheme:light] focus:border-sky-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:[color-scheme:dark] dark:focus:bg-slate-900"
                      >
                        {(
                          [
                            ['all', 'All Types'],
                            ['definition', 'Definition'],
                            ['theory', 'Theory'],
                            ['memorize', 'Memorize'],
                            ['example', 'Example'],
                            ['pyq', 'PYQ'],
                          ] as const
                        ).map(([typeKey, label]) => {
                          const typeCount = activeChapter.blocks.filter((b) =>
                            matchesBlockType(b, typeKey)
                          ).length;
                          return (
                            <option
                              key={typeKey}
                              value={typeKey}
                              className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            >
                              {label} ({typeCount})
                            </option>
                          );
                        })}
                      </select>

                      {(priorityFilter !== 'all' ||
                        blockTypeFilter !== 'all' ||
                        searchQuery.trim() !== '') && (
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="inline-flex min-h-[44px] items-center gap-1 px-2 text-xs font-medium text-sky-700 hover:underline dark:text-sky-400"
                        >
                          <RotateCcw className="h-3 w-3" />
                          <span>Reset</span>
                        </button>
                      )}
                    </div>

                    <div className="relative min-w-[200px] flex-1 sm:max-w-xs">
                      <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search in note..."
                        aria-label="Search in note"
                        className="min-h-[44px] w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pr-3 pl-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:bg-slate-900"
                      />
                    </div>
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
                        {filteredBlocks.map((block, idx) => {
                          const stars = getBlockPriorityStars(block);
                          const tocTitle =
                            blockTypeFilter === 'memorize' ||
                            block.type === 'memorize'
                              ? getMemorizeBlockTitle(block)
                              : block.title;
                          const starColor =
                            block.priorityTier === 1
                              ? 'text-amber-700 dark:text-amber-400'
                              : block.priorityTier === 2
                                ? 'text-rose-700 dark:text-rose-400'
                                : block.priorityTier === 3
                                  ? 'text-sky-700 dark:text-sky-400'
                                  : 'text-emerald-700 dark:text-emerald-400';
                          return (
                            <li key={block.id}>
                              <a
                                href={buildRouteHash({
                                  viewLevel: 'note',
                                  semesterId: activeSemester.id,
                                  subjectId: activeSubject.id,
                                  chapterId: activeChapter.id,
                                  blockId: block.id,
                                })}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigateToRoute({
                                    viewLevel: 'note',
                                    semesterId: activeSemester.id,
                                    subjectId: activeSubject.id,
                                    chapterId: activeChapter.id,
                                    blockId: block.id,
                                  });
                                }}
                                className="block py-1 text-slate-600 transition-colors hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-400"
                              >
                                <span className="font-mono text-[11px] text-slate-400">
                                  {String(idx + 1).padStart(2, '0')}.{' '}
                                </span>
                                <span>{tocTitle}</span>{' '}
                                <span
                                  className={`font-mono text-[11px] font-bold tracking-tight ${starColor}`}
                                >
                                  {stars}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>

                  <div className="space-y-6 lg:col-span-9 print:col-span-12">
                    {filteredBlocks.length > 0 ? (
                      <Suspense
                        fallback={
                          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                            Loading chapter notes...
                          </div>
                        }
                      >
                        {filteredBlocks.map((block, idx) => (
                          <LazyNoteBlockCard
                            key={block.id}
                            block={block}
                            index={idx}
                            memorizeMode={blockTypeFilter === 'memorize'}
                            includeSolutionsInPdf={includeSolutionsInPdf}
                            revisionStatus={revisionState[block.id]}
                            onToggleRevision={handleToggleRevision}
                          />
                        ))}
                      </Suspense>
                    ) : (
                      <div className="rounded-xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          No matching note blocks found.
                        </p>
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="mt-3 inline-flex min-h-[44px] items-center rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white dark:bg-sky-500 dark:text-slate-950"
                        >
                          Reset Filters
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : isCourseLoading ? (
              <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                Loading course chapter data...
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  No study notes have been added for &ldquo;{activeChapter.title}&rdquo; yet.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    navigateToRoute({
                      viewLevel: 'subject-detail',
                      semesterId: activeSemester.id,
                      subjectId: activeSubject.id,
                    })
                  }
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to {activeSubject.code}</span>
                </button>
              </div>
            )}
          </section>
        )}

        {/* =====================================================================
            PAGE 5: MY REVISION VIEW (BOOKMARKED & WEAK TOPIC BLOCKS)
           ===================================================================== */}
        {viewLevel === 'revision' && (
          <section aria-labelledby="revision-view-heading" className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
              <div>
                <h1
                  id="revision-view-heading"
                  className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100"
                >
                  My revision
                </h1>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  Bookmarked notes and flagged weak topics across all courses and chapters.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigateToRoute({ viewLevel: 'semesters' })}
                className="inline-flex min-h-[44px] items-center gap-1 text-xs font-medium text-sky-700 hover:underline dark:text-sky-400"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Semesters</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Bookmarked Blocks */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 dark:border-slate-800">
                  <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                    <Bookmark className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span>Bookmarked Blocks ({bookmarkedEntries.length})</span>
                  </h2>
                </div>

                {bookmarkedEntries.length > 0 ? (
                  <div className="space-y-3">
                    {bookmarkedEntries.map((item) => {
                      const status = revisionState[item.blockId];
                      const linkHash = buildRouteHash({
                        viewLevel: 'note',
                        semesterId: item.semesterId,
                        subjectId: item.subjectId,
                        chapterId: item.chapterId,
                        blockId: item.blockId,
                      });
                      return (
                        <div
                          key={item.blockId}
                          className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
                              {item.subjectCode} · {item.chapterUnitNumber}
                            </span>
                          </div>
                          <a
                            href={linkHash}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToRoute({
                                viewLevel: 'note',
                                semesterId: item.semesterId,
                                subjectId: item.subjectId,
                                chapterId: item.chapterId,
                                blockId: item.blockId,
                              });
                            }}
                            className="mt-1.5 inline-flex min-h-[44px] flex-wrap items-baseline gap-1.5 font-display text-base font-bold text-slate-900 hover:text-sky-700 dark:text-slate-100 dark:hover:text-sky-400"
                          >
                            <span>{item.blockTitle}</span>
                          </a>
                          <ul className="mt-1 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            {splitTextIntoVerticalItems(item.summaryText).map(
                              (sLine, sIdx) => (
                                <li key={sIdx}>{sLine}</li>
                              )
                            )}
                          </ul>
                          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2.5 dark:border-slate-800">
                            <a
                              href={linkHash}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateToRoute({
                                  viewLevel: 'note',
                                  semesterId: item.semesterId,
                                  subjectId: item.subjectId,
                                  chapterId: item.chapterId,
                                  blockId: item.blockId,
                                });
                              }}
                              className="inline-flex min-h-[44px] items-center gap-1 text-xs font-semibold text-sky-700 hover:underline dark:text-sky-400"
                            >
                              <span>Open in {item.chapterTitle}</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </a>
                            <div className="flex items-center gap-1.5">
                              {status?.done && (
                                <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                                  <CheckCircle2 className="h-3 w-3" />
                                  Done
                                </span>
                              )}
                              <button
                                type="button"
                                onClick={() =>
                                  handleToggleRevision(item.blockId, 'bookmarked')
                                }
                                className="inline-flex min-h-[44px] items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                              >
                                Remove bookmark
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    No bookmarked blocks yet. Click &ldquo;Bookmark&rdquo; on any note block to save it here.
                  </div>
                )}
              </div>

              {/* Weak Topic Blocks */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 dark:border-slate-800">
                  <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                    <Flag className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                    <span>Weak Topics ({weakTopicEntries.length})</span>
                  </h2>
                </div>

                {weakTopicEntries.length > 0 ? (
                  <div className="space-y-3">
                    {weakTopicEntries.map((item) => {
                      const status = revisionState[item.blockId];
                      const linkHash = buildRouteHash({
                        viewLevel: 'note',
                        semesterId: item.semesterId,
                        subjectId: item.subjectId,
                        chapterId: item.chapterId,
                        blockId: item.blockId,
                      });
                      return (
                        <div
                          key={item.blockId}
                          className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="font-mono font-semibold text-sky-700 dark:text-sky-400">
                              {item.subjectCode} · {item.chapterUnitNumber}
                            </span>
                          </div>
                          <a
                            href={linkHash}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToRoute({
                                viewLevel: 'note',
                                semesterId: item.semesterId,
                                subjectId: item.subjectId,
                                chapterId: item.chapterId,
                                blockId: item.blockId,
                              });
                            }}
                            className="mt-1.5 inline-flex min-h-[44px] flex-wrap items-baseline gap-1.5 font-display text-base font-bold text-slate-900 hover:text-sky-700 dark:text-slate-100 dark:hover:text-sky-400"
                          >
                            <span>{item.blockTitle}</span>
                          </a>
                          <ul className="mt-1 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            {splitTextIntoVerticalItems(item.summaryText).map(
                              (sLine, sIdx) => (
                                <li key={sIdx}>{sLine}</li>
                              )
                            )}
                          </ul>
                          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2.5 dark:border-slate-800">
                            <a
                              href={linkHash}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateToRoute({
                                  viewLevel: 'note',
                                  semesterId: item.semesterId,
                                  subjectId: item.subjectId,
                                  chapterId: item.chapterId,
                                  blockId: item.blockId,
                                });
                              }}
                              className="inline-flex min-h-[44px] items-center gap-1 text-xs font-semibold text-sky-700 hover:underline dark:text-sky-400"
                            >
                              <span>Open in {item.chapterTitle}</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </a>
                            <div className="flex items-center gap-1.5">
                              {status?.done && (
                                <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                                  <CheckCircle2 className="h-3 w-3" />
                                  Done
                                </span>
                              )}
                              <button
                                type="button"
                                onClick={() =>
                                  handleToggleRevision(item.blockId, 'weak')
                                }
                                className="inline-flex min-h-[44px] items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                              >
                                Clear weak flag
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    No weak topics flagged yet. Click &ldquo;Weak topic&rdquo; on any note block to flag it for extra practice.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

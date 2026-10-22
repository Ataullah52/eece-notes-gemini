/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
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
  filterNoteBlocks,
  type PriorityFilter,
  type NoteBlockType,
} from './utils/circuitMath';
import {
  buildRouteHash,
  parseRouteHash,
  type RouteViewLevel,
} from './utils/hashRouter';
import {
  buildGlobalSearchIndex,
  type GlobalSearchEntry,
} from './utils/globalSearch';
import {
  loadRevisionState,
  saveRevisionState,
  toggleRevisionField,
  type RevisionStateMap,
  type BlockRevisionStatus,
} from './utils/revisionState';
import { PortalHeader } from './components/PortalHeader';
import { SemesterListView } from './components/SemesterListView';
import {
  SubjectDirectoryView,
  SubjectDetailView,
} from './components/SubjectListView';
import { ChapterNoteView } from './components/ChapterNoteView';
import { RevisionView } from './components/RevisionView';

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 print:bg-white print:text-slate-950">
      <PortalHeader
        viewLevel={viewLevel}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((d) => !d)}
        revisionTotalCount={revisionTotalCount}
        globalSearchIndex={globalSearchIndex}
        onNavigateToRoute={navigateToRoute}
        isPdfExportModalOpen={isPdfExportModalOpen}
        onOpenExportPdfModal={handleOpenExportPdfModal}
        onCloseExportPdfModal={() => setIsPdfExportModalOpen(false)}
        includeSolutionsInPdf={includeSolutionsInPdf}
        onChangeIncludeSolutionsInPdf={setIncludeSolutionsInPdf}
        onConfirmExportPdf={handleConfirmExportPdf}
      />

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

        {viewLevel === 'semesters' && (
          <SemesterListView
            semesters={semesters}
            onSelectSemester={handleSelectSemester}
          />
        )}

        {viewLevel === 'subjects' && (
          <SubjectDirectoryView
            activeSemester={activeSemester}
            onBackToSemesters={() => navigateToRoute({ viewLevel: 'semesters' })}
            onOpenSubjectPage={handleOpenSubjectPage}
            onRoutineCourseClick={handleRoutineCourseClick}
          />
        )}

        {viewLevel === 'subject-detail' && activeSubject && (
          <SubjectDetailView
            activeSemester={activeSemester}
            activeSubject={activeSubject}
            onBackToSemester={() =>
              navigateToRoute({ viewLevel: 'subjects', semesterId: activeSemester.id })
            }
            onOpenChapterNote={handleOpenChapterNote}
          />
        )}

        {viewLevel === 'note' && activeSubject && activeChapter && (
          <ChapterNoteView
            activeSemester={activeSemester}
            activeSubject={activeSubject}
            activeChapter={activeChapter}
            filteredBlocks={filteredBlocks}
            isCourseLoading={isCourseLoading}
            priorityFilter={priorityFilter}
            blockTypeFilter={blockTypeFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSelectPriorityFilter={handleSelectPriorityFilter}
            handleSelectBlockTypeFilter={handleSelectBlockTypeFilter}
            resetFilters={resetFilters}
            copiedChapterLink={copiedChapterLink}
            handleCopyChapterLink={handleCopyChapterLink}
            includeSolutionsInPdf={includeSolutionsInPdf}
            revisionState={revisionState}
            handleToggleRevision={handleToggleRevision}
            navigateToRoute={navigateToRoute}
          />
        )}

        {viewLevel === 'revision' && (
          <RevisionView
            bookmarkedEntries={bookmarkedEntries}
            weakTopicEntries={weakTopicEntries}
            revisionState={revisionState}
            handleToggleRevision={handleToggleRevision}
            navigateToRoute={navigateToRoute}
          />
        )}
      </main>
    </div>
  );
}

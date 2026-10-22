import React, { Suspense } from 'react';
import {
  ArrowLeft,
  Check,
  Link2,
  RotateCcw,
  Search,
} from 'lucide-react';
import type {
  SemesterEntry,
  SubjectCourse,
  ChapterNote,
  NoteBlock,
} from '../data/types';
import {
  PRIORITY_TIER_META,
  matchesPriorityTier,
  matchesBlockType,
  getBlockPriorityStars,
  getMemorizeBlockTitle,
  type PriorityTier,
  type PriorityFilter,
  type NoteBlockType,
} from '../utils/circuitMath';
import { splitTextIntoVerticalItems } from '../utils/mathLatex';
import { buildRouteHash, type RouteViewLevel } from '../utils/hashRouter';
import type {
  RevisionStateMap,
  BlockRevisionStatus,
} from '../utils/revisionState';

const LazyNoteBlockCard = React.lazy(() =>
  import('./NoteBlockCard').then((mod) => ({
    default: mod.NoteBlockCard,
  }))
);

export interface ChapterNoteViewProps {
  activeSemester: SemesterEntry;
  activeSubject: SubjectCourse;
  activeChapter: ChapterNote;
  filteredBlocks: NoteBlock[];
  isCourseLoading: boolean;
  priorityFilter: PriorityFilter;
  blockTypeFilter: NoteBlockType | 'all';
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  handleSelectPriorityFilter: (tier: PriorityFilter) => void;
  handleSelectBlockTypeFilter: (typeKey: NoteBlockType | 'all') => void;
  resetFilters: () => void;
  copiedChapterLink: boolean;
  handleCopyChapterLink: () => void;
  includeSolutionsInPdf: boolean;
  revisionState: RevisionStateMap;
  handleToggleRevision: (
    blockId: string,
    field: keyof BlockRevisionStatus
  ) => void;
  navigateToRoute: (route: {
    viewLevel: RouteViewLevel;
    semesterId?: string;
    subjectId?: string;
    chapterId?: string;
    blockId?: string | null;
  }) => void;
}

export const ChapterNoteView: React.FC<ChapterNoteViewProps> = ({
  activeSemester,
  activeSubject,
  activeChapter,
  filteredBlocks,
  isCourseLoading,
  priorityFilter,
  blockTypeFilter,
  searchQuery,
  setSearchQuery,
  handleSelectPriorityFilter,
  handleSelectBlockTypeFilter,
  resetFilters,
  copiedChapterLink,
  handleCopyChapterLink,
  includeSolutionsInPdf,
  revisionState,
  handleToggleRevision,
  navigateToRoute,
}) => {
  return (
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
  );
};

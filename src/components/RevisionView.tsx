import React from 'react';
import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Flag,
} from 'lucide-react';
import { splitTextIntoVerticalItems } from '../utils/mathLatex';
import { buildRouteHash, type RouteViewLevel } from '../utils/hashRouter';
import type { GlobalSearchEntry } from '../utils/globalSearch';
import type {
  RevisionStateMap,
  BlockRevisionStatus,
} from '../utils/revisionState';

export interface RevisionViewProps {
  bookmarkedEntries: GlobalSearchEntry[];
  weakTopicEntries: GlobalSearchEntry[];
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

export const RevisionView: React.FC<RevisionViewProps> = ({
  bookmarkedEntries,
  weakTopicEntries,
  revisionState,
  handleToggleRevision,
  navigateToRoute,
}) => {
  return (
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
  );
};

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X } from 'lucide-react';
import {
  searchGlobalIndex,
  type GlobalSearchEntry,
} from '../utils/globalSearch';
import type { RouteViewLevel } from '../utils/hashRouter';

interface GlobalSearchBarProps {
  globalSearchIndex: GlobalSearchEntry[];
  onNavigateToRoute: (route: {
    viewLevel: RouteViewLevel;
    semesterId?: string;
    subjectId?: string;
    chapterId?: string;
    blockId?: string | null;
  }) => void;
}

export const GlobalSearchBar: React.FC<GlobalSearchBarProps> = ({
  globalSearchIndex,
  onNavigateToRoute,
}) => {
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState<boolean>(false);
  const globalSearchInputRef = useRef<HTMLInputElement | null>(null);
  const globalSearchContainerRef = useRef<HTMLDivElement | null>(null);

  const globalSearchGroups = useMemo(
    () => searchGlobalIndex(globalSearchIndex, globalSearchQuery),
    [globalSearchIndex, globalSearchQuery]
  );

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

  return (
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
                              onNavigateToRoute({
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
  );
};

import type { SemesterEntry } from '../data/types.ts';
import { getBlockPriorityStars, type PriorityTier } from './circuitMath.ts';

export interface GlobalSearchEntry {
  semesterId: string;
  semesterCode: string;
  subjectId: string;
  subjectCode: string;
  subjectTitle: string;
  chapterId: string;
  chapterUnitNumber: string;
  chapterTitle: string;
  blockId: string;
  blockTitle: string;
  priorityTier: PriorityTier;
  priorityStars: string;
  summaryText: string;
  paragraphsText: string;
  examYearsText: string;
  searchableLower: string;
}

export interface GlobalSearchResultItem extends GlobalSearchEntry {
  snippet: string;
}

export interface GlobalSearchChapterGroup {
  chapterId: string;
  chapterUnitNumber: string;
  chapterTitle: string;
  items: GlobalSearchResultItem[];
}

export interface GlobalSearchCourseGroup {
  courseKey: string;
  semesterId: string;
  semesterCode: string;
  subjectId: string;
  subjectCode: string;
  subjectTitle: string;
  chapters: GlobalSearchChapterGroup[];
}

/**
 * Builds the global search index once from all semesters, courses, chapters, and blocks.
 */
export function buildGlobalSearchIndex(
  semesters: SemesterEntry[]
): GlobalSearchEntry[] {
  const index: GlobalSearchEntry[] = [];

  for (const sem of semesters) {
    for (const sub of sem.subjects) {
      for (const ch of sub.chapters) {
        for (const block of ch.blocks) {
          const paragraphsText = (block.paragraphs ?? []).join(' ');
          const examYearsText =
            block.examYears && block.examYears.length > 0
              ? `PYQ ${block.examYears.join(' ')}`
              : '';
          const searchableLower = [
            block.title,
            block.summaryText,
            paragraphsText,
            examYearsText,
          ]
            .join(' \n ')
            .toLowerCase();

          index.push({
            semesterId: sem.id,
            semesterCode: sem.code,
            subjectId: sub.id,
            subjectCode: sub.code,
            subjectTitle: sub.title,
            chapterId: ch.id,
            chapterUnitNumber: ch.unitNumber,
            chapterTitle: ch.title,
            blockId: block.id,
            blockTitle: block.title,
            priorityTier: block.priorityTier,
            priorityStars: getBlockPriorityStars(block),
            summaryText: block.summaryText,
            paragraphsText,
            examYearsText,
            searchableLower,
          });
        }
      }
    }
  }

  return index;
}

function buildSnippet(entry: GlobalSearchEntry, queryLower: string): string {
  const fullPool = [
    entry.examYearsText ? `[${entry.examYearsText}]` : '',
    entry.summaryText,
    entry.paragraphsText,
  ]
    .filter(Boolean)
    .join(' — ');

  if (!fullPool) return entry.blockTitle;

  const lowerPool = fullPool.toLowerCase();
  const firstToken = queryLower.split(/\s+/).filter(Boolean)[0] ?? queryLower;
  const matchIdx = lowerPool.indexOf(firstToken);

  if (matchIdx === -1 || fullPool.length <= 130) {
    return fullPool.length <= 130 ? fullPool : `${fullPool.slice(0, 127).trim()}...`;
  }

  const start = Math.max(0, matchIdx - 35);
  const end = Math.min(fullPool.length, start + 130);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < fullPool.length ? '...' : '';
  return `${prefix}${fullPool.slice(start, end).trim()}${suffix}`;
}

/**
 * Searches the prebuilt global index across all courses and chapters (case-insensitive)
 * and returns results grouped by course and chapter.
 */
export function searchGlobalIndex(
  index: GlobalSearchEntry[],
  rawQuery: string,
  maxResults = 40
): GlobalSearchCourseGroup[] {
  const queryLower = rawQuery.trim().toLowerCase();
  if (!queryLower) return [];

  const tokens = queryLower.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const courseMap = new Map<string, GlobalSearchCourseGroup>();
  let count = 0;

  for (const entry of index) {
    if (count >= maxResults) break;

    const matchesAll = tokens.every((tok) => entry.searchableLower.includes(tok));
    if (!matchesAll) continue;

    count++;
    const courseKey = `${entry.semesterId}/${entry.subjectId}`;
    let courseGroup = courseMap.get(courseKey);
    if (!courseGroup) {
      courseGroup = {
        courseKey,
        semesterId: entry.semesterId,
        semesterCode: entry.semesterCode,
        subjectId: entry.subjectId,
        subjectCode: entry.subjectCode,
        subjectTitle: entry.subjectTitle,
        chapters: [],
      };
      courseMap.set(courseKey, courseGroup);
    }

    let chapterGroup = courseGroup.chapters.find(
      (c) => c.chapterId === entry.chapterId
    );
    if (!chapterGroup) {
      chapterGroup = {
        chapterId: entry.chapterId,
        chapterUnitNumber: entry.chapterUnitNumber,
        chapterTitle: entry.chapterTitle,
        items: [],
      };
      courseGroup.chapters.push(chapterGroup);
    }

    chapterGroup.items.push({
      ...entry,
      snippet: buildSnippet(entry, queryLower),
    });
  }

  return Array.from(courseMap.values());
}

import type { SemesterEntry } from '../data/curriculumData';

export type RouteViewLevel =
  | 'semesters'
  | 'subjects'
  | 'subject-detail'
  | 'note'
  | 'revision';

export interface ParsedHashRoute {
  viewLevel: RouteViewLevel;
  semesterId: string;
  subjectId: string;
  chapterId: string;
  blockId: string | null;
}

/**
 * Builds a canonical URL hash for any view level in the application so that
 * every semester, course, chapter note, and note block has its own shareable link.
 */
export function buildRouteHash(route: {
  viewLevel: RouteViewLevel;
  semesterId: string;
  subjectId?: string;
  chapterId?: string;
  blockId?: string | null;
}): string {
  switch (route.viewLevel) {
    case 'semesters':
      return '#/';
    case 'revision':
      return '#/revision';
    case 'subjects':
      return `#/${route.semesterId}`;
    case 'subject-detail':
      return `#/${route.semesterId}/${route.subjectId ?? ''}`;
    case 'note': {
      const base = `#/${route.semesterId}/${route.subjectId ?? ''}/${route.chapterId ?? ''}`;
      return route.blockId ? `${base}/${route.blockId}` : base;
    }
  }
}

/**
 * Parses `window.location.hash` into a validated application route state.
 * Supports canonical hierarchical paths (`#/eece11/math1101/math1101-ch01`),
 * deep block links (`#/eece11/math1101/math1101-ch01/math-m1-b1`), and
 * direct shorthand hashes (`#math1101-ch01` or `#math-m1-b1`).
 */
export function parseRouteHash(
  rawHash: string,
  semesters: SemesterEntry[]
): ParsedHashRoute {
  const defaultSem = semesters[0];
  const defaultSub = defaultSem?.subjects[0];
  const defaultCh = defaultSub?.chapters[0];

  const fallback: ParsedHashRoute = {
    viewLevel: 'semesters',
    semesterId: defaultSem?.id ?? 'eece11',
    subjectId: defaultSub?.id ?? 'eece1111',
    chapterId: defaultCh?.id ?? 'eece1111-ch01',
    blockId: null,
  };

  if (!rawHash) return fallback;

  const cleaned = rawHash.replace(/^#+/, '').replace(/^\/+|\/+$/g, '').trim();
  if (!cleaned) return fallback;

  const parts = cleaned.split('/').filter(Boolean);
  if (parts.length === 0) return fallback;

  if (parts[0].toLowerCase() === 'revision') {
    return {
      ...fallback,
      viewLevel: 'revision',
    };
  }

  // 1. Check if parts[0] matches a semester ID or code (e.g., "eece11")
  const matchedSem = semesters.find(
    (s) =>
      s.id.toLowerCase() === parts[0].toLowerCase() ||
      s.code.toLowerCase() === parts[0].toLowerCase()
  );

  if (matchedSem) {
    const firstSub = matchedSem.subjects[0];
    const firstCh = firstSub?.chapters[0];

    if (parts.length === 1) {
      return {
        viewLevel: 'subjects',
        semesterId: matchedSem.id,
        subjectId: firstSub?.id ?? fallback.subjectId,
        chapterId: firstCh?.id ?? fallback.chapterId,
        blockId: null,
      };
    }

    const matchedSub = matchedSem.subjects.find(
      (sub) =>
        sub.id.toLowerCase() === parts[1].toLowerCase() ||
        sub.code.toLowerCase() === parts[1].toLowerCase()
    );

    if (!matchedSub) {
      return {
        viewLevel: 'subjects',
        semesterId: matchedSem.id,
        subjectId: firstSub?.id ?? fallback.subjectId,
        chapterId: firstCh?.id ?? fallback.chapterId,
        blockId: null,
      };
    }

    const subFirstCh = matchedSub.chapters[0];
    if (parts.length === 2) {
      return {
        viewLevel: 'subject-detail',
        semesterId: matchedSem.id,
        subjectId: matchedSub.id,
        chapterId: subFirstCh?.id ?? fallback.chapterId,
        blockId: null,
      };
    }

    const matchedCh = matchedSub.chapters.find(
      (ch) => ch.id.toLowerCase() === parts[2].toLowerCase()
    );

    if (matchedCh) {
      return {
        viewLevel: 'note',
        semesterId: matchedSem.id,
        subjectId: matchedSub.id,
        chapterId: matchedCh.id,
        blockId: parts[3] ?? null,
      };
    }

    return {
      viewLevel: 'subject-detail',
      semesterId: matchedSem.id,
      subjectId: matchedSub.id,
      chapterId: subFirstCh?.id ?? fallback.chapterId,
      blockId: null,
    };
  }

  // 2. Shorthand lookup: direct chapter ID (e.g. "#math1101-ch01"), subject ID ("#math1101"), or block ID ("#math-m1-b1")
  const token = parts[0].toLowerCase();
  for (const sem of semesters) {
    for (const sub of sem.subjects) {
      if (sub.id.toLowerCase() === token || sub.code.toLowerCase() === token) {
        return {
          viewLevel: 'subject-detail',
          semesterId: sem.id,
          subjectId: sub.id,
          chapterId: sub.chapters[0]?.id ?? fallback.chapterId,
          blockId: null,
        };
      }
      for (const ch of sub.chapters) {
        if (ch.id.toLowerCase() === token) {
          return {
            viewLevel: 'note',
            semesterId: sem.id,
            subjectId: sub.id,
            chapterId: ch.id,
            blockId: parts[1] ?? null,
          };
        }
        const matchedBlock = ch.blocks.find((b) => b.id.toLowerCase() === token);
        if (matchedBlock) {
          return {
            viewLevel: 'note',
            semesterId: sem.id,
            subjectId: sub.id,
            chapterId: ch.id,
            blockId: matchedBlock.id,
          };
        }
      }
    }
  }

  return fallback;
}

export const REVISION_STORAGE_KEY = 'eece-notes-revision-v1';

export interface BlockRevisionStatus {
  bookmarked?: boolean;
  weak?: boolean;
  done?: boolean;
}

export type RevisionStateMap = Record<string, BlockRevisionStatus>;

export function toggleRevisionField(
  current: RevisionStateMap,
  blockId: string,
  field: keyof BlockRevisionStatus
): RevisionStateMap {
  const prev = current[blockId] ?? {
    bookmarked: false,
    weak: false,
    done: false,
  };
  const nextVal = !prev[field];
  const updated: BlockRevisionStatus = {
    bookmarked: Boolean(prev.bookmarked),
    weak: Boolean(prev.weak),
    done: Boolean(prev.done),
    [field]: nextVal,
  };

  const nextMap: RevisionStateMap = { ...current };
  if (!updated.bookmarked && !updated.weak && !updated.done) {
    delete nextMap[blockId];
  } else {
    nextMap[blockId] = updated;
  }
  return nextMap;
}

export function loadRevisionState(): RevisionStateMap {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return {};
    const raw = window.localStorage.getItem(REVISION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return parsed as RevisionStateMap;
    }
    return {};
  } catch {
    return {};
  }
}

export function saveRevisionState(state: RevisionStateMap): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem(REVISION_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota or private mode errors
  }
}

import type { NoteBlockType, PriorityTier } from '../utils/circuitMath';

export type InteractiveDiagramId =
  | 'passive-sign'
  | 'ohms-law'
  | 'kcl-kvl'
  | 'rc-transient'
  | 'regular-polygon-cad'
  | 'autocad-command-sim';

export type SvgFigureId =
  | 'lettering-sheet-az'
  | 'polygon-interior-angle'
  | 'polygon-perpendicular-bisector';

export interface NoteFigure {
  src: string;
  alt: string;
  caption: string;
  figureNumber?: string;
  commandSequence?: string;
}

export interface TableData {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface EquationItem {
  label: string;
  formula: string;
  units?: string;
  note?: string;
}

export interface SolutionStep {
  stepTitle: string;
  explanation: string;
  equation?: string;
}

export interface NoteBlock {
  id: string;
  type: NoteBlockType;
  priorityTier: PriorityTier;
  secondaryPriorityTiers?: PriorityTier[];
  sourceCitation: string;
  title: string;
  summaryText: string;
  memorizeStatements?: string[];
  paragraphs?: string[];
  bulletPoints?: string[];
  equations?: EquationItem[];
  table?: TableData;
  figures?: NoteFigure[];
  svgFigureId?: SvgFigureId;
  interactiveDiagramId?: InteractiveDiagramId;
  examYears?: string[];
  marks?: string;
  problemStatement?: string;
  givenData?: string[];
  solutionSteps?: SolutionStep[];
  finalAnswer?: string;
  professorTip?: string;
}

export interface ChapterNote {
  id: string;
  unitNumber: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  lastUpdated: string;
  blocks: NoteBlock[];
}

export interface ClassRoutineRow {
  day: string;
  slots: string[];
}

export interface ClassRoutine {
  timeSlots: string[];
  rows: ClassRoutineRow[];
}

export interface SubjectCourse {
  id: string;
  code: string;
  title: string;
  credits: number;
  contactHours?: number;
  courseType: 'Theory' | 'Sessional';
  syllabusOverview: string;
  professorFollowedBooks: string[];
  syllabusRecommendedBooks: string[];
  chapters: ChapterNote[];
}

export interface SemesterEntry {
  id: string;
  code: string;
  year: 1 | 2 | 3 | 4;
  semester: 1 | 2;
  title: string;
  subtitle: string;
  totalCredits: number;
  classRoutine?: ClassRoutine;
  subjects: SubjectCourse[];
}

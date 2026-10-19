# EECE Notes Authoring Specification (`AI_SPEC.md`)

> **Repository Context File (For Codebase Authoring Only)**
> Read `AI_INDEX.md` first to locate the target semester (`EECE11`–`EECE42`), subject (`EECE1111`, `MATH1101`, etc.), and chapter file. Do **not** include any mention of AI, prompts, or this specification inside the rendered note content or PDF print output.

---

## 1. Structural Hierarchy & Naming Rules

1. **Semester Code (`EECE11` – `EECE42`)**:
   - Format: `EECE` + `[Year: 1-4]` + `[Semester: 1-2]`
   - Examples:
     - `EECE11` = 1st Year, 1st Semester
     - `EECE12` = 1st Year, 2nd Semester
     - `EECE21` = 2nd Year, 1st Semester
     - `EECE42` = 4th Year, 2nd Semester

2. **Course Code (`EECE1111`, `MATH1101`, `PHY1101`, `CSE1101`)**:
   - Format: `[DEPT][Year Digit][Semester Digit][2-Digit Course Series]` (no spaces)
   - Breakdown:
     - **1st Digit**: Year (`1`, `2`, `3`, `4`)
     - **2nd Digit**: Semester (`1`, `2`)
     - **Last 2 Digits**: Course number series (`01`, `11`, `13` for theory courses; even numbers `12`, `02` for sessional/lab courses)

---

## 2. Four-Tier Source-Based Priority System

Every `NoteBlock` MUST declare a `priorityTier` (`1 | 2 | 3 | 4`) and a specific `sourceCitation`:

| Priority Tier | Stars | Source Category | Description |
| :--- | :--- | :--- | :--- |
| **Tier 1** | `★★★★` | **Class Note** | Most important. Professor-provided lecture notes, class questions, board examples, exam tips, and highlighted derivations. |
| **Tier 2** | `★★★` | **Previous Year Question (PYQ)** | Second most important. Questions, topics, theories, and definitions that appeared in past semester final exams. |
| **Tier 3** | `★★` | **Professor-Followed Book** | Third priority. Core derivations, explanations, and worked problems from the primary textbook followed by the course teacher. |
| **Tier 4** | `★` | **Syllabus Recommended Book** | Fourth priority. Supplementary explanations and reference problems from additional books listed in the official syllabus. |

---

## 3. Five Semantic Block Types

Each chapter note consists of ordered blocks from these five types:

1. `definition` — Precise laws, formal definitions, key equations, and SI unit definitions.
2. `theory` — Conceptual explanations, derivations, physical intuition, and optional `interactiveDiagramId` (`'passive-sign' | 'ohms-law' | 'kcl-kvl' | 'rc-transient'`).
3. `memorize` — High-yield comparison tables, sign conventions, standard constants, and quick-recall formulas.
4. `example` — Step-by-step worked numerical problems with `problemStatement`, `givenData`, `solutionSteps`, and `finalAnswer`.
5. `pyq` — Authentic past semester examination problems with `examYears` (e.g., `['2023', '2021', '2019']`), `marks`, and complete step-by-step solutions.

---

## 4. Strict Do-Not Rules

- **Never** add inline styles or modify global layout files when adding a chapter.
- **Never** mention AI, LLMs, or authoring rules in the note prose or print headers.
- **Always** write original, concise engineering explanations and verify numerical answers with SI units.

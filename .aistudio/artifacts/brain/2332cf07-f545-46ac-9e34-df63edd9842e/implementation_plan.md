# EECE Study Notes Portal (`eece-notes`)

An exam-focused, static engineering study portal organized around a strict **Semester (`EECE11`–`EECE42`) → Subject (`EECE1111`, `MATH1101`) → Notes** hierarchy, combining source-prioritized study blocks, interactive SVG circuit and theory diagrams, dark mode, and clean academic PDF export.

### User Review & Critical Decisions

> [!IMPORTANT]
> I have revised the plan to incorporate all four of your corrections. Please review the updated structure below and click **Proceed** when you are ready for me to build the application.

- **Confirmed Decision 1 — Semester Naming Convention (`EECE11` to `EECE42`)**: Semesters use the exact department-year-semester code format: `EECE11` (1st Year 1st Semester), `EECE12` (1st Year 2nd Semester), `EECE21` (2nd Year 1st Semester), up to `EECE42` (4th Year 2nd Semester).
- **Confirmed Decision 2 — 4-Digit Course Code Structure (`EECE1111`, `MATH1101`)**: Course codes are formatted without spaces, where the **1st digit** represents the Year (`1`–`4`), the **2nd digit** represents the Semester (`1`–`2`), and the **last two digits** represent the course number series (e.g., `EECE1111` for Electrical Circuit I, `MATH1101` for Differential & Integral Calculus, `PHY1101` for Physics).
- **Confirmed Decision 3 — 4-Tier Source-Based Priority Hierarchy**: Every note block is categorized and filterable by its academic source importance:
  1. **Tier 1 — Class Note (`★★★★` · Highest Priority)**: Professor-provided lecture notes, class questions, board examples, and exam tips.
  2. **Tier 2 — Previous Year Question (`★★★` · Second Priority)**: Questions, topics, theories, and definitions asked in past semester final exams.
  3. **Tier 3 — Professor-Followed Books (`★★` · Third Priority)**: Core chapters, derivations, and worked examples from the primary textbook followed by the professor in class.
  4. **Tier 4 — Syllabus Recommended Books (`★` · Fourth Priority)**: Supplementary topics and reference problems from additional books listed in the official syllabus.
- **Confirmed Decision 4 — Pure Academic PDF Export (Zero AI Mentions)**: Exporting to PDF (`window.print()`) produces a strictly academic study document containing only course metadata, note blocks, equations, and vector diagrams—nothing about AI, specs, or prompts ever appears in the PDF export. Repository authoring guides (`AI_SPEC.md` and `AI_INDEX.md`) live quietly as static files in the project codebase for your development workflow.

---

### 1. Overview & Core Concept

- **What It Does**: Provides a structured engineering study portal following the **Semester (`EECE11`) → Subject (`EECE1111`) → Chapter Note** hierarchy. Each chapter note organizes content into semantic blocks (**Definition**, **Theory**, **Memorize**, **Example**, **PYQ**) tagged with the **4-Tier Source Priority** (`Class Note` > `PYQ` > `Professor-Followed Book` > `Syllabus Recommended Book`) and the specific textbook or lecture citation. Students can interact with live SVG circuit diagrams inside theory sections, filter notes by priority source before exams, toggle dark/light mode, and print clean A4 PDFs.
- **Target Audience / Persona**: An EECE student and web developer who maintains structured HTML/code study notes on GitHub and wants a fast, distraction-free academic interface and print-ready revision system.
- **Key Value**: Prioritizes study time around what actually matters for exams—starting with the professor's own class notes and past exam papers—while keeping visual circuit behavior interactive on screen and crisp on paper.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Level 1 — Semester Hub (`EECE11` – `EECE42`)**: Landing on the portal displays the 8 undergraduate semesters (`EECE11` through `EECE42`), showing each semester's title (e.g., `EECE11 · 1st Year 1st Semester`), course count, credit hours, and available chapters. Clicking a semester opens its Subject Directory.
  2. **Level 2 — Subject Syllabus & Chapter Directory (`EECE1111`, `MATH1101`, `PHY1101`, `CSE1101`)**: Displays the semester's courses with a breakdown of the 4-digit course code (`Year · Semester · Course Series`), professor-followed textbook list, syllabus recommended books, and ordered syllabus chapters.
  3. **Level 3 — Chapter Study Note & Priority Revision Filter**: Opens the chapter note with:
     - **Source Priority Filter Bar**: Filter the chapter instantaneously by `All Sources`, `1. Class Note (★★★★)`, `2. Previous Year Question (★★★)`, `3. Professor-Followed Book (★★)`, or `4. Syllabus Recommended Book (★)`.
     - **Block Type Filter Bar**: Filter by `All Blocks`, `Definition`, `Theory`, `Memorize`, `Example`, or `PYQ`.
     - **Interactive Theory Diagrams**: Live SVG circuit and waveform sandboxes embedded inside theory blocks that automatically render as clean static vector figures in PDF printouts.
     - **One-Click Academic PDF Export**: Generates a clean, textbook-grade A4 printout of the currently active view (`Full Chapter` or `Filtered Revision Sheet`) with zero UI chrome or developer metadata.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Precision Academic Editorial — clean engineering textbook typography, crisp hairline borders (`1px solid`), generous whitespace (`2rem`–`3rem` vertical rhythm), and zero visual clutter.
  - *Color Palette & Mood (60-30-10 Discipline)*:
    - **60% Dominant Neutral Canvas**: Crisp paper off-white (`#F8FAFC`) in Light Mode and deep obsidian slate (`#0F172A`) in Dark Mode.
    - **30% Structural Surfaces & Hairlines**: Elevated paper surfaces (`#FFFFFF` light / `#1E293B` dark) with `1px solid` hairline dividers (`#E2E8F0` light / `#334155` dark) and muted slate metadata (`#64748B` / `#94A3B8`).
    - **10% Semantic Focal Accents**:
      - Tier 1 (`Class Note · ★★★★`): Warm Amber Gold (`#D97706` light / `#FBBF24` dark) paired with explicit `Class Note` source label.
      - Tier 2 (`PYQ · ★★★`): Crimson Rose (`#E11D48` light / `#FB7185` dark) paired with explicit exam year citations.
      - Tier 3 (`Professor Book · ★★`) & Primary Interactive Accent: Precision Cobalt (`#0284C7` light / `#38BDF8` dark).
      - Tier 4 (`Syllabus Book · ★`): Muted Emerald/Slate (`#059669` light / `#34D399` dark).
  - *Typography & Hierarchy (2+1 Font Rule)*:
    - **Display / Headings**: `Outfit` (SemiBold 600, `clamp(1.75rem, 3vw, 2.5rem)` for titles; `20px–24px` for unit headings) with `text-wrap: balance`.
    - **Body Prose**: `Plus Jakarta Sans` (`16px`, line-height `1.65`, `68ch` measure) with dark mode optical compensation.
    - **Math, Formulas & Course Codes**: `IBM Plex Mono` (`tabular-nums`) for `EECE1111` codes, circuit parameters, SI unit tables, and equation variables.
  - *Component Styling & Layout*:
    - **Top Bar Contract**: Strict single-row, three-zone header separated by `gap-8` (automatically hidden via `@media print` during PDF export):
      1. *Brand Zone*: Single-line wordmark (`EECE Notes`).
      2. *Navigation Zone*: 4 concise single-line links (`Semesters`, `Subjects`, `Priority Guide`, `Dark / Light`).
      3. *Primary Action Zone*: Single `Export PDF` button (`window.print()`).
    - **Zero-Pill Metadata**: Course codes, source tiers, textbook citations, and exam years render as clean unboxed text separated by middle dots (`EECE1111 · Class Note ★★★★ · Prof. Lecture Tip`).
    - **Two-Zone Interactive Theory Sandbox**: `65%` interactive SVG schematic and real-time curve canvas on the left; `35%` labeled parameter sliders with live numeric readouts and SI units on the right.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1 — 4-Tier Source-Based Priority System Over Generic Star Ratings**
  - *Chosen Approach*: Tie every priority level directly to its real academic origin (`1: Class Note`, `2: PYQ`, `3: Professor-Followed Book`, `4: Syllabus Recommended Book`) and display the exact source citation (e.g., *Class Lecture #02 — Professor's Exam Tip* or *Alexander & Sadiku, Ch. 1, Sec. 1.5*).
  - *Why*: Eliminates guesswork during exam revision. If you have 2 hours before an exam, you filter to `Class Note + PYQ`; if you are studying early in the semester, you read all 4 tiers.

- **Decision 2 — Hidden Codebase Spec (`AI_SPEC.md` & `AI_INDEX.md`) with Strictly Academic UI & Print Output**
  - *Chosen Approach*: Store `AI_SPEC.md` and `AI_INDEX.md` as static files in the repository root for your code editor/AI workflow while keeping the web interface and exported PDFs 100% focused on EECE coursework.
  - *Why*: Ensures your printed PDF notes look like an authentic, distraction-free university monograph with zero mention of AI tools.

- **Decision 3 — Parametric SVG Circuit Diagrams inside Theory Blocks**
  - *Chosen Approach*: Embed interactive SVG simulations (Passive Sign Convention Explorer, Ohm's Law & Power Characteristic Plotter, Kirchhoff's Node/Loop Solver, and First-Order RC Transient Response) inside relevant Theory blocks.
  - *Why*: Gives you hands-on intuition for voltage polarity, current direction, and curve slopes while printing cleanly as crisp vector diagrams on paper.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                   Top Navigation Bar (3-Zone, Hidden in Print)               │
│   [EECE Notes]     [Semesters · Subjects · Priority Guide · Theme] [Export]  │
└──────────────────┬───────────────────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                        Curriculum Hierarchy Router                           │
│           Breadcrumb: EECE11 (Semester) > EECE1111 (Subject) > Note          │
└──────────────────┬───────────────────────────────────────────────────────────┘
                   │
      ┌────────────┼────────────────┐
      ▼            ▼                ▼
┌──────────┐ ┌──────────┐ ┌────────────────────────────────────────────────────┐
│ Level 1  │ │ Level 2  │ │ Level 3: Interactive Chapter Note Viewer           │
│ Semester │ │ Subject  │ │ ┌────────────────────────────────────────────────┐ │
│ Directory│ │ Syllabus │ │ │ 4-Tier Source Priority & Block Type Filter Bar │ │
│ (EECE11– │ │ (EECE1111│ │ │ [All | Class Note | PYQ | Prof Book | Syllabus]│ │
│  EECE42) │ │ MATH1101)│ │ └───────────────────────┬────────────────────────┘ │
└──────────┘ └──────────┘ │                         ▼                          │
                          │ ┌─────────────────────┐ ┌────────────────────────┐ │
                          │ │ Sticky Chapter TOC  │ │ Prioritized Note Blocks│ │
                          │ │ & Source Breakdown  │ │ • Definition           │ │
                          │ └─────────────────────┘ │ • Theory + SVG Circuit │ │
                          │                         │ • Memorize Sheet       │ │
                          │                         │ • Worked Example       │ │
                          │                         │ • PYQ Exam Archive     │ │
                          │                         └────────────────────────┘ │
                          └────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - **Semester**:
    - `id`: `'eece11'` through `'eece42'`
    - `code`: `'EECE11'` through `'EECE42'` (Department + Year digit + Semester digit)
    - `year`: `1 | 2 | 3 | 4`
    - `semester`: `1 | 2`
    - `title`: `'1st Year · 1st Semester'`
    - `subjects`: ordered array of `Subject` items
  - **Subject**:
    - `id`: `'eece1111'`, `'math1101'`, `'phy1101'`, `'cse1101'`, etc.
    - `code`: `'EECE1111'`, `'MATH1101'` (`1st digit = Year`, `2nd digit = Semester`, `last 2 digits = Course Series`)
    - `title`: `'Electrical Circuit I'`
    - `credits`: `3.0`
    - `professorFollowedBooks`: array of primary textbooks followed in class
    - `syllabusRecommendedBooks`: array of supplementary syllabus textbooks
    - `chapters`: ordered array of `ChapterNote` items
  - **ChapterNote**:
    - `id`, `unitNumber`, `title`, `summary`, `blocks`: ordered array of `NoteBlock` items
  - **NoteBlock**:
    - `id`: unique identifier
    - `type`: `'definition' | 'theory' | 'memorize' | 'example' | 'pyq'`
    - `priorityTier`: `1 | 2 | 3 | 4`
      - `1`: **Class Note** (`★★★★` — Professor's lecture notes, class examples, tips, highlighted questions)
      - `2`: **Previous Year Question** (`★★★` — Past exam questions, repeated topics, definitions)
      - `3`: **Professor-Followed Book** (`★★` — Core textbook derivations and problems)
      - `4`: **Syllabus Recommended Book** (`★` — Extra reference topics from syllabus books)
    - `sourceCitation`: explicit origin string (e.g., `'Class Lecture 03 · Prof. Tip'`, `'PUST Final Exam 2023, Q2(b)'`, `'Alexander & Sadiku (6th Ed.) · Sec 1.4'`)
    - `title`, `content`, optional `interactiveDiagramId`, and optional `solutionSteps`.

- **Interactive Component & State Mapping**:
  - **3-Level Drill-Down Navigation**: Selecting a Semester (`EECE11`–`EECE42`) displays its subjects; selecting a Subject (`EECE1111`, `MATH1101`, etc.) displays its textbook references, course code breakdown, and syllabus chapters; selecting a Chapter opens the Note Viewer.
  - **Source Priority & Block Filtering**: Clicking any of the 4 Source Priority buttons (`Class Note`, `PYQ`, `Prof. Book`, `Syllabus Book`) or 5 Block Type buttons immediately filters the chapter blocks and updates the visible item count.
  - **Interactive Theory Simulations**:
    - *Passive Sign Convention & Power Flow Lab*: Adjust voltage $v$ ($-20\text{ V}$ to $+20\text{ V}$), current $i$ ($-5\text{ A}$ to $+5\text{ A}$), and terminal polarity to observe live power $p = \pm vi$ and SVG current direction arrows.
    - *Ohm's Law & Linear $V\text{-}I$ Characteristic Plotter*: Vary resistance $R$ and voltage $V$ to see the conductance slope $G = 1/R$ and power dissipation curve update in real time.
    - *Kirchhoff's Current & Voltage Law (KCL/KVL) Node-Loop Solver*: Adjust source voltages $V_1, V_2$ and branch resistances $R_1, R_2, R_3$ to verify $\sum i_{\text{in}} = \sum i_{\text{out}}$ at the central node and $\sum V = 0$ around each mesh.
  - **Print-Ready PDF Engine (`@media print`)**: Clicking `Export PDF` hides all navigation bars, filter buttons, and interactive sliders, expands all worked solutions, forces crisp black-on-white typography and vector lines, and outputs a clean academic A4 PDF with zero mention of AI.

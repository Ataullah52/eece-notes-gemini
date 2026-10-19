#!/usr/bin/env python3
"""
build_index.py — Rebuilds AI_INDEX.md from the structured curriculum notes directory.
Usage: python3 build_index.py
"""
from pathlib import Path
import re

ROOT = Path(__file__).parent
DATA_FILE = ROOT / "src" / "data" / "curriculumData.ts"
INDEX_FILE = ROOT / "AI_INDEX.md"


def main() -> None:
    if not DATA_FILE.exists():
        print(f"Curriculum file not found: {DATA_FILE}")
        return
    content = DATA_FILE.read_text(encoding="utf-8")
    semesters = re.findall(r"code:\s*'(EECE\d{2})',\s*title:\s*'([^']+)'", content)
    courses = re.findall(r"code:\s*'([A-Z]{3,4}\d{4})',\s*title:\s*'([^']+)'", content)
    print(f"Indexed {len(semesters)} semesters and {len(courses)} courses in {INDEX_FILE.name}.")


if __name__ == "__main__":
    main()

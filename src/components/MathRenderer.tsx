import React from 'react';

const UNICODE_SUB_MAP: Record<string, string> = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
  'ₐ': 'a',
  'ₑ': 'e',
  'ᵢ': 'i',
  'ₒ': 'o',
  'ᵤ': 'u',
  'ₙ': 'n',
  'ₖ': 'k',
  'ₘ': 'm',
  'ₚ': 'p',
  'ᵣ': 'r',
  'ₛ': 's',
  'ₜ': 't',
  'ₓ': 'x',
};

const UNICODE_SUP_MAP: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁺': '+',
  '⁻': '−',
  'ⁿ': 'n',
};

/**
 * Normalizes arrows and Unicode sub/superscripts into canonical tokens
 * before recursive AST rendering.
 */
export function normalizeMathString(raw: string): string {
  let s = raw
    .replace(/<==>/g, '⇔')
    .replace(/==>/g, '⇒')
    .replace(/->/g, '→');

  // Convert runs of Unicode subscripts into _{...}
  s = s.replace(/[₀₁₂₃₄₅₆₇₈₉ₐₑᵢₒᵤₙₖₘₚᵣₛₜₓ]+/g, (match) => {
    const mapped = [...match].map((ch) => UNICODE_SUB_MAP[ch] ?? ch).join('');
    return `_{${mapped}}`;
  });

  // Convert runs of Unicode superscripts into ^{...}
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/g, (match) => {
    const mapped = [...match].map((ch) => UNICODE_SUP_MAP[ch] ?? ch).join('');
    return `^{${mapped}}`;
  });

  return s;
}

function findMatchingClose(
  str: string,
  openIdx: number,
  openChar: string,
  closeChar: string
): number {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === openChar) depth++;
    else if (str[i] === closeChar) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/**
 * Checks if a string is wrapped in a single pair of outer parentheses/brackets
 * and unwraps it if so.
 */
function unwrapOuterParens(str: string): string {
  const trimmed = str.trim();
  if (
    (trimmed.startsWith('(') && trimmed.endsWith(')')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'))
  ) {
    const openChar = trimmed[0];
    const closeChar = openChar === '(' ? ')' : ']';
    if (findMatchingClose(trimmed, 0, openChar, closeChar) === trimmed.length - 1) {
      return trimmed.slice(1, -1).trim();
    }
  }
  return trimmed;
}

/**
 * Splits top-level fractions `A / B` where `/` is a mathematical division
 * rather than prose text (like "Maxima/Minima" or "and/or").
 */
function findTopLevelFractionSlash(str: string): {
  leftStart: number;
  slashIdx: number;
  rightEnd: number;
} | null {
  let parenDepth = 0;
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(') parenDepth++;
    else if (ch === ')') parenDepth = Math.max(0, parenDepth - 1);
    else if (ch === '[') bracketDepth++;
    else if (ch === ']') bracketDepth = Math.max(0, bracketDepth - 1);
    else if (ch === '{') braceDepth++;
    else if (ch === '}') braceDepth = Math.max(0, braceDepth - 1);
    else if (ch === '/' && parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) {
      // Skip prose slashes like "Scratch / Backward", "and/or", "Maxima/Minima"
      const leftWordMatch = str.slice(0, i).trim().match(/([A-Za-z]+)$/);
      const rightWordMatch = str.slice(i + 1).trim().match(/^([A-Za-z]+)/);
      if (
        leftWordMatch &&
        rightWordMatch &&
        leftWordMatch[1].length >= 3 &&
        rightWordMatch[1].length >= 3 &&
        !/^(sin|cos|tan|cot|sec|csc|log|lim)$/.test(leftWordMatch[1])
      ) {
        continue;
      }

      // Determine numerator span (to the left of i)
      let lEnd = i - 1;
      while (lEnd >= 0 && str[lEnd] === ' ') lEnd--;
      if (lEnd < 0) continue;

      let lStart = lEnd;
      if (str[lEnd] === ')' || str[lEnd] === ']' || str[lEnd] === '}') {
        const closeCh = str[lEnd];
        const openCh = closeCh === ')' ? '(' : closeCh === ']' ? '[' : '{';
        let d = 0;
        for (let k = lEnd; k >= 0; k--) {
          if (str[k] === closeCh) d++;
          else if (str[k] === openCh) {
            d--;
            if (d === 0) {
              lStart = k;
              break;
            }
          }
        }
        // Include preceding function/radical/power/Greek symbol if attached (e.g. θ^{2}, √(...), f(...), sin^{2}(...))
        while (lStart > 0 && /[A-Za-z0-9\u0370-\u03FF√∂Δ_^{}]/.test(str[lStart - 1])) {
          lStart--;
        }
      } else {
        let dParen = 0;
        let dBrace = 0;
        while (lStart > 0) {
          const c = str[lStart - 1];
          if (c === ')') dParen++;
          else if (c === '(') {
            if (dParen > 0) dParen--;
            else break;
          } else if (c === '}') dBrace++;
          else if (c === '{') {
            if (dBrace > 0) dBrace--;
            else break;
          } else if (dParen === 0 && dBrace === 0 && /[\s=,;⇒⇔→+−\-±≤≥≠<>:|]/.test(c)) {
            break;
          }
          lStart--;
        }
        // If preceded by a trig/log function separated by a space (e.g. `sin x / x`), include `sin `
        const beforeSlice = str.slice(0, lStart);
        const fnPrefix = beforeSlice.match(/((?:sin|cos|tan|cot|sec|csc|ln|log)(?:\^\{[^}]+\}|\^[0-9]+)?\s+)$/);
        if (fnPrefix) {
          lStart -= fnPrefix[1].length;
        }
      }

      // Determine denominator span (to the right of i)
      let rStart = i + 1;
      while (rStart < str.length && str[rStart] === ' ') rStart++;
      if (rStart >= str.length) continue;

      let rEnd = rStart;
      if (str[rStart] === '(' || str[rStart] === '[' || str[rStart] === '{') {
        const openCh = str[rStart];
        const closeCh = openCh === '(' ? ')' : openCh === '[' ? ']' : '}';
        const closePos = findMatchingClose(str, rStart, openCh, closeCh);
        rEnd = closePos !== -1 ? closePos + 1 : str.length;
        while (rEnd < str.length && (str[rEnd] === '^' || str[rEnd] === '_')) {
          rEnd++;
          if (str[rEnd] === '{') {
            const cPos = findMatchingClose(str, rEnd, '{', '}');
            rEnd = cPos !== -1 ? cPos + 1 : str.length;
          } else {
            while (rEnd < str.length && /[A-Za-z0-9]/.test(str[rEnd])) rEnd++;
          }
        }
      } else if (str[rStart] === '√') {
        rEnd = rStart + 1;
        if (rEnd < str.length && (str[rEnd] === '(' || str[rEnd] === '[')) {
          const openCh = str[rEnd];
          const closeCh = openCh === '(' ? ')' : ']';
          const closePos = findMatchingClose(str, rEnd, openCh, closeCh);
          rEnd = closePos !== -1 ? closePos + 1 : str.length;
        } else {
          while (rEnd < str.length && /[A-Za-z0-9\u0370-\u03FF_{}^]/.test(str[rEnd])) rEnd++;
          if (rEnd < str.length && str[rEnd] === '(') {
            const closePos = findMatchingClose(str, rEnd, '(', ')');
            if (closePos !== -1) rEnd = closePos + 1;
          }
        }
      } else {
        // Check if denominator starts with a trig/log function with space like `sin x`
        const afterSlice = str.slice(rStart);
        const fnMatch = afterSlice.match(/^((?:sin|cos|tan|cot|sec|csc|ln|log)(?:\^\{[^}]+\}|\^[0-9]+)?\s+[A-Za-z0-9\u0370-\u03FF_{}^]+)/);
        if (fnMatch) {
          rEnd = rStart + fnMatch[1].length;
        } else {
          let dParen = 0;
          let dBrace = 0;
          while (rEnd < str.length) {
            const c = str[rEnd];
            if (c === '(') dParen++;
            else if (c === ')') {
              if (dParen > 0) dParen--;
              else break;
            } else if (c === '{') dBrace++;
            else if (c === '}') {
              if (dBrace > 0) dBrace--;
              else break;
            } else if (dParen === 0 && dBrace === 0 && /[\s=,;⇒⇔→+−\-±≤≥≠<>:|]/.test(c)) {
              break;
            }
            rEnd++;
          }
        }
      }

      const numCandidate = str.slice(lStart, lEnd + 1).trim();
      const denCandidate = str.slice(rStart, rEnd).trim();
      if (numCandidate.length > 0 && denCandidate.length > 0) {
        return { leftStart: lStart, slashIdx: i, rightEnd: rEnd };
      }
    }
  }
  return null;
}

export const MathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  const normalized = normalizeMathString(text);
  return <span className={className}>{renderMathNodes(normalized, 'root')}</span>;
};

function renderMathNodes(str: string, keyPrefix: string): React.ReactNode[] {
  if (!str) return [];

  // First check for top-level fraction `num / den`
  const frac = findTopLevelFractionSlash(str);
  if (frac) {
    const before = str.slice(0, frac.leftStart);
    const numRaw = unwrapOuterParens(str.slice(frac.leftStart, frac.slashIdx).trim());
    const denRaw = unwrapOuterParens(str.slice(frac.slashIdx + 1, frac.rightEnd).trim());
    const after = str.slice(frac.rightEnd);

    return [
      ...renderMathNodes(before, `${keyPrefix}-pre`),
      <span
        key={`${keyPrefix}-frac`}
        className="mx-1 inline-flex flex-col items-center justify-center align-middle leading-tight"
      >
        <span className="border-b border-current px-1 pb-[1px] text-center text-[0.92em]">
          {renderMathNodes(numRaw, `${keyPrefix}-num`)}
        </span>
        <span className="px-1 pt-[1px] text-center text-[0.92em]">
          {renderMathNodes(denRaw, `${keyPrefix}-den`)}
        </span>
      </span>,
      ...renderMathNodes(after, `${keyPrefix}-post`),
    ];
  }

  const nodes: React.ReactNode[] = [];
  let i = 0;
  let buffer = '';

  const flushBuffer = (idx: number) => {
    if (buffer) {
      nodes.push(<React.Fragment key={`${keyPrefix}-txt-${idx}`}>{buffer}</React.Fragment>);
      buffer = '';
    }
  };

  while (i < str.length) {
    // 1. Check for `lim_{...}` or `lim_(...)`
    if (str.startsWith('lim_', i)) {
      const subStart = i + 4;
      let subContent = '';
      let nextIdx = subStart;
      if (str[subStart] === '{' || str[subStart] === '(') {
        const openCh = str[subStart];
        const closeCh = openCh === '{' ? '}' : ')';
        const closeIdx = findMatchingClose(str, subStart, openCh, closeCh);
        if (closeIdx !== -1) {
          subContent = str.slice(subStart + 1, closeIdx);
          nextIdx = closeIdx + 1;
        }
      }
      if (subContent) {
        flushBuffer(i);
        nodes.push(
          <span
            key={`${keyPrefix}-lim-${i}`}
            className="mx-1 inline-flex flex-col items-center justify-center align-middle leading-none"
          >
            <span className="font-serif text-[1em] italic leading-none">lim</span>
            <span className="mt-0.5 text-[0.72em] leading-none">
              {renderMathNodes(subContent, `${keyPrefix}-limsub-${i}`)}
            </span>
          </span>
        );
        i = nextIdx;
        continue;
      }
    }

    // 2. Check for square root `√`
    if (str[i] === '√') {
      flushBuffer(i);
      const radStart = i + 1;
      let radContent = '';
      let nextIdx = radStart;

      if (
        radStart < str.length &&
        (str[radStart] === '(' || str[radStart] === '[' || str[radStart] === '{')
      ) {
        const openCh = str[radStart];
        const closeCh = openCh === '(' ? ')' : openCh === '[' ? ']' : '}';
        const closeIdx = findMatchingClose(str, radStart, openCh, closeCh);
        if (closeIdx !== -1) {
          radContent = str.slice(radStart + 1, closeIdx);
          nextIdx = closeIdx + 1;
        }
      }
      if (!radContent) {
        let k = radStart;
        while (k < str.length && /[A-Za-z0-9\u0370-\u03FF]/.test(str[k])) {
          k++;
          if (str[k] === '^' || str[k] === '_') {
            k++;
            if (str[k] === '{') {
              const cIdx = findMatchingClose(str, k, '{', '}');
              k = cIdx !== -1 ? cIdx + 1 : k;
            }
          }
        }
        // If followed immediately by function call parentheses like √g(x), include (x) inside the root
        if (k < str.length && str[k] === '(') {
          const cIdx = findMatchingClose(str, k, '(', ')');
          if (cIdx !== -1) k = cIdx + 1;
        }
        radContent = str.slice(radStart, k);
        nextIdx = k;
      }

      nodes.push(
        <span
          key={`${keyPrefix}-sqrt-${i}`}
          className="mx-0.5 inline-flex items-baseline align-baseline"
        >
          <span className="select-none font-serif text-[1.12em] leading-none">√</span>
          <span className="border-t border-current px-0.5 pt-[1px] leading-tight">
            {renderMathNodes(radContent, `${keyPrefix}-rad-${i}`)}
          </span>
        </span>
      );
      i = nextIdx;
      continue;
    }

    // 3. Check for balanced parentheses `(...)` or `[...]` so inner fractions/roots/limits render recursively
    if (str[i] === '(' || str[i] === '[') {
      const openCh = str[i];
      const closeCh = openCh === '(' ? ')' : ']';
      const closeIdx = findMatchingClose(str, i, openCh, closeCh);
      if (closeIdx !== -1) {
        const inner = str.slice(i + 1, closeIdx);
        if (/[√/_^]|lim_/.test(inner)) {
          flushBuffer(i);
          nodes.push(
            <span key={`${keyPrefix}-grp-${i}`} className="inline">
              {openCh}
              {renderMathNodes(inner, `${keyPrefix}-in-${i}`)}
              {closeCh}
            </span>
          );
          i = closeIdx + 1;
          continue;
        }
      }
    }

    // 4. Check for subscript `_{...}` or `_x` (including Greek subscripts like D_φ)
    if (str[i] === '_') {
      const subStart = i + 1;
      if (subStart < str.length && str[subStart] === '{') {
        const closeIdx = findMatchingClose(str, subStart, '{', '}');
        if (closeIdx !== -1) {
          flushBuffer(i);
          const subText = str.slice(subStart + 1, closeIdx);
          nodes.push(
            <sub key={`${keyPrefix}-sub-${i}`} className="text-[0.76em] leading-none">
              {renderMathNodes(subText, `${keyPrefix}-subc-${i}`)}
            </sub>
          );
          i = closeIdx + 1;
          continue;
        }
      } else if (subStart < str.length && /[A-Za-z0-9\u0370-\u03FF+\-]/.test(str[subStart])) {
        flushBuffer(i);
        let k = subStart;
        while (k < str.length && /[A-Za-z0-9\u0370-\u03FF]/.test(str[k])) k++;
        const subText = str.slice(subStart, k);
        nodes.push(
          <sub key={`${keyPrefix}-sub-${i}`} className="text-[0.76em] leading-none">
            {subText}
          </sub>
        );
        i = k;
        continue;
      }
    }

    // 5. Check for superscript `^{...}` or `^x`
    if (str[i] === '^') {
      const supStart = i + 1;
      if (supStart < str.length && (str[supStart] === '{' || str[supStart] === '(')) {
        const openCh = str[supStart];
        const closeCh = openCh === '{' ? '}' : ')';
        const closeIdx = findMatchingClose(str, supStart, openCh, closeCh);
        if (closeIdx !== -1) {
          flushBuffer(i);
          const supText = str.slice(supStart + 1, closeIdx);
          nodes.push(
            <sup key={`${keyPrefix}-sup-${i}`} className="text-[0.76em] leading-none">
              {renderMathNodes(supText, `${keyPrefix}-supc-${i}`)}
            </sup>
          );
          i = closeIdx + 1;
          continue;
        }
      } else if (supStart < str.length && /[A-Za-z0-9+\-]/.test(str[supStart])) {
        flushBuffer(i);
        let k = supStart;
        while (k < str.length && /[A-Za-z0-9]/.test(str[k])) k++;
        const supText = str.slice(supStart, k);
        nodes.push(
          <sup key={`${keyPrefix}-sup-${i}`} className="text-[0.76em] leading-none">
            {supText}
          </sup>
        );
        i = k;
        continue;
      }
    }

    buffer += str[i];
    i++;
  }

  flushBuffer(str.length);
  return nodes;
}

/**
 * Splits a calculation line with multiple chained top-level ` = ` signs or ` ⇒ ` arrows
 * into vertical lines so that algebraic steps are read vertically instead of horizontally.
 */
export function expandVerticalSteps(rawLine: string): string[] {
  const trimmed = rawLine.trim();
  if (!trimmed || trimmed.startsWith('∴') || trimmed.startsWith('•')) {
    return [rawLine];
  }

  const leadingIndent = rawLine.match(/^\s*/)?.[0] ?? '  ';

  // 1. Check for multiple top-level `⇒` arrows on the same line (not starting with ⇒)
  const arrowPositions: number[] = [];
  let pD = 0;
  let bD = 0;
  let cD = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const ch = trimmed[i];
    if (ch === '(') pD++;
    else if (ch === ')') pD = Math.max(0, pD - 1);
    else if (ch === '[') bD++;
    else if (ch === ']') bD = Math.max(0, bD - 1);
    else if (ch === '{') cD++;
    else if (ch === '}') cD = Math.max(0, cD - 1);
    else if (ch === '⇒' && pD === 0 && bD === 0 && cD === 0 && i > 0) {
      arrowPositions.push(i);
    }
  }

  if (arrowPositions.length >= 2 || (arrowPositions.length === 1 && !trimmed.startsWith('⇒'))) {
    const arrowParts: string[] = [];
    let prev = 0;
    for (let k = 0; k < arrowPositions.length; k++) {
      const pos = arrowPositions[k];
      const seg = trimmed.slice(prev, pos).trim();
      if (seg) {
        arrowParts.push(prev === 0 ? `${leadingIndent}${seg}` : `${leadingIndent}  ⇒  ${seg}`);
      }
      prev = pos + 1;
    }
    const tail = trimmed.slice(prev).trim();
    if (tail) {
      arrowParts.push(`${leadingIndent}  ⇒  ${tail}`);
    }
    if (arrowParts.length > 1) {
      return arrowParts.flatMap((part) => expandChainedEquals(part));
    }
  }

  return expandChainedEquals(rawLine);
}

function expandChainedEquals(rawLine: string): string[] {
  const trimmed = rawLine.trim();
  if (!trimmed || trimmed.startsWith('∴') || trimmed.startsWith('•')) {
    return [rawLine];
  }

  const eqPositions: number[] = [];
  let pDepth = 0;
  let bDepth = 0;
  let cDepth = 0;

  for (let i = 0; i < trimmed.length; i++) {
    const ch = trimmed[i];
    if (ch === '(') pDepth++;
    else if (ch === ')') pDepth = Math.max(0, pDepth - 1);
    else if (ch === '[') bDepth++;
    else if (ch === ']') bDepth = Math.max(0, bDepth - 1);
    else if (ch === '{') cDepth++;
    else if (ch === '}') cDepth = Math.max(0, cDepth - 1);
    else if (
      ch === '=' &&
      pDepth === 0 &&
      bDepth === 0 &&
      cDepth === 0 &&
      (i === 0 || trimmed[i - 1] === ' ') &&
      trimmed[i + 1] === ' '
    ) {
      eqPositions.push(i);
    }
  }

  if (eqPositions.length <= 1) {
    return [rawLine];
  }

  // Determine which `=` signs are chained equalities (no top-level `, ; : | ⇒ ⇔ and or` in between)
  const splitIndices: number[] = [];
  for (let k = 1; k < eqPositions.length; k++) {
    const between = trimmed.slice(eqPositions[k - 1] + 1, eqPositions[k]);
    // Strip bracketed comments `[...]` and parenthesized expressions `(...)` before checking separators
    const stripped = between.replace(/\[[^\]]*\]|\([^)]*\)|\{[^}]*\}/g, '');
    if (!/[,;:|⇒⇔]|\b(?:and|or|where|when|for|at|if|since|let)\b/i.test(stripped)) {
      splitIndices.push(eqPositions[k]);
    }
  }

  if (splitIndices.length === 0) {
    return [rawLine];
  }

  const leadingIndent = rawLine.match(/^\s*/)?.[0] ?? '  ';
  const continuationIndent = trimmed.startsWith('=') ? leadingIndent : `${leadingIndent}    `;
  const result: string[] = [];
  let prevStart = 0;

  for (let k = 0; k < splitIndices.length; k++) {
    const splitPos = splitIndices[k];
    const seg = trimmed.slice(prevStart, splitPos).trim();
    if (prevStart === 0) {
      result.push(`${leadingIndent}${seg}`);
    } else {
      result.push(`${continuationIndent}${seg}`);
    }
    prevStart = splitPos;
  }

  const lastSeg = trimmed.slice(prevStart).trim();
  if (lastSeg) {
    result.push(`${continuationIndent}${lastSeg}`);
  }

  return result;
}

export const MathSolutionBlock: React.FC<{ equationText: string }> = ({ equationText }) => {
  const expandedLines = equationText
    .split('\n')
    .flatMap((line) => expandVerticalSteps(line));

  return (
    <div className="space-y-1.5 font-sans text-[14px] leading-relaxed text-slate-900 dark:text-slate-100">
      {expandedLines.map((line, idx) => {
        if (!line.trim()) {
          return <div key={idx} className="h-2" />;
        }

        const trimmed = line.trim();

        // Check if this line is a conclusion / answer line starting with `∴`
        if (trimmed.startsWith('∴')) {
          const afterTherefore = trimmed.slice(1).trim();
          return (
            <div key={idx} className="my-2 flex flex-wrap items-center gap-2 pl-2">
              <span className="font-bold text-slate-900 dark:text-slate-100">∴</span>
              <span className="inline-block rounded border border-slate-900 bg-white px-3 py-1 font-medium text-slate-900 dark:border-slate-200 dark:bg-slate-900 dark:text-slate-100 print:border-slate-900">
                <MathText text={afterTherefore} />
              </span>
            </div>
          );
        }

        const leadingSpaces = line.match(/^\s*/)?.[0].length ?? 0;
        const indentClass =
          leadingSpaces >= 6
            ? 'pl-8'
            : leadingSpaces >= 4
              ? 'pl-5'
              : leadingSpaces >= 2
                ? 'pl-2'
                : 'pl-0';

        return (
          <div key={idx} className={`${indentClass} flex flex-wrap items-center gap-x-1.5`}>
            <MathText text={trimmed} />
          </div>
        );
      })}
    </div>
  );
};

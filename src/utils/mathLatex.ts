import katex from 'katex';

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
  '₊': '+',
  '₋': '-',
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

const LATEX_SYMBOL_MAP: Record<string, string> = {
  '−': '-',
  '–': '-',
  '·': '\\cdot ',
  '×': '\\times ',
  '÷': '\\div ',
  '±': '\\pm ',
  '∓': '\\mp ',
  '≤': '\\le ',
  '≥': '\\ge ',
  '≠': '\\neq ',
  '≈': '\\approx ',
  '≡': '\\equiv ',
  '∼': '\\sim ',
  '∝': '\\propto ',
  '→': '\\to ',
  '⇒': '\\implies ',
  '⇔': '\\iff ',
  '↦': '\\mapsto ',
  '↑': '\\uparrow ',
  '↓': '\\downarrow ',
  'ℝ': '\\mathbb{R}',
  'ℤ': '\\mathbb{Z}',
  'ℕ': '\\mathbb{N}',
  'ℚ': '\\mathbb{Q}',
  'ℂ': '\\mathbb{C}',
  '∞': '\\infty ',
  '∈': '\\in ',
  '∉': '\\notin ',
  '⊂': '\\subset ',
  '⊆': '\\subseteq ',
  '∪': '\\cup ',
  '∩': '\\cap ',
  '∅': '\\emptyset ',
  '∀': '\\forall ',
  '∃': '\\exists ',
  '∂': '\\partial ',
  '∇': '\\nabla ',
  '∫': '\\int ',
  '∑': '\\sum ',
  '∏': '\\prod ',
  '∠': '\\angle ',
  '⊥': '\\perp ',
  '∥': '\\parallel ',
  '↵': '\\text{ [Enter]} ',
  '△': '\\triangle ',
  '■': '\\blacksquare ',
  '½': '\\frac{1}{2}',
  '¼': '\\frac{1}{4}',
  '¾': '\\frac{3}{4}',
  '′': "'",
  '″': "''",
  '‴': "'''",
  '°': '^{\\circ}',
  '⌊': '\\lfloor ',
  '⌋': '\\rfloor ',
  '⌈': '\\lceil ',
  '⌉': '\\rceil ',
  'ħ': '\\hbar ',
  'Ĥ': '\\hat{H}',
  'Å': '\\text{ \\AA}',
  '∮': '\\oint ',
  'ϕ': '\\phi ',
  '⟨': '\\langle ',
  '⟩': '\\rangle ',
  'α': '\\alpha ',
  'β': '\\beta ',
  'γ': '\\gamma ',
  'δ': '\\delta ',
  'ε': '\\varepsilon ',
  'ζ': '\\zeta ',
  'η': '\\eta ',
  'θ': '\\theta ',
  'ι': '\\iota ',
  'κ': '\\kappa ',
  'λ': '\\lambda ',
  'μ': '\\mu ',
  'ν': '\\nu ',
  'ξ': '\\xi ',
  'π': '\\pi ',
  'ρ': '\\rho ',
  'σ': '\\sigma ',
  'τ': '\\tau ',
  'υ': '\\upsilon ',
  'φ': '\\varphi ',
  'χ': '\\chi ',
  'ψ': '\\psi ',
  'ω': '\\omega ',
  'Γ': '\\Gamma ',
  'Δ': '\\Delta ',
  'Θ': '\\Theta ',
  'Λ': '\\Lambda ',
  'Ξ': '\\Xi ',
  'Π': '\\Pi ',
  'Σ': '\\Sigma ',
  'Φ': '\\Phi ',
  'Ψ': '\\Psi ',
  'Ω': '\\Omega ',
};

const MATH_WORDS = new Set([
  'sin',
  'cos',
  'tan',
  'cot',
  'sec',
  'csc',
  'sinh',
  'cosh',
  'tanh',
  'coth',
  'sech',
  'csch',
  'arcsin',
  'arccos',
  'arctan',
  'arccot',
  'arcsec',
  'arccsc',
  'ln',
  'log',
  'exp',
  'lim',
  'det',
  'min',
  'max',
  'sup',
  'inf',
  'gcd',
  'lcm',
  'mod',
  'sgn',
  'sqrt',
  'Vth',
  'Rth',
  'Zth',
  'Ith',
  'Isc',
  'Voc',
  'Vs',
  'Is',
  'Rs',
  'Req',
  'Rin',
  'Rout',
  'Vin',
  'Vout',
  'Vm',
  'Im',
  'Vrms',
  'Irms',
  'Vavg',
  'Iavg',
  'Veq',
  'Ieq',
  'Ceq',
  'Leq',
  'ZL',
  'RL',
  'VR',
  'VC',
  'VL',
  'IR',
  'IC',
  'IL',
  'XL',
  'XC',
  'Zin',
  'Vab',
  'Iab',
  'Rab',
  'Vo',
  'Io',
  'Vx',
  'Ix',
  'Pmax',
  'Pavg',
  'dx',
  'dy',
  'dz',
  'dt',
  'du',
  'dv',
  'dw',
  'dr',
  'di',
  'dq',
  'ds',
  'dh',
  'vi',
  'vR',
  'vC',
  'vL',
  'iC',
  'iL',
]);

function isMathIdentifierWord(word: string): boolean {
  return (
    MATH_WORDS.has(word) ||
    /^[a-z][A-Z][A-Za-z]*$/.test(word) ||
    /^[A-Z][a-z]?[A-Z][a-z]?$/.test(word) ||
    /^(?:H|He|Li|Be|B|C|N|O|F|Ne|Na|Mg|Al|Si|P|S|Cl|Ar|K|Ca|Sc|Ti|V|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Y|Zr|Nb|Mo|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|I|Xe|Cs|Ba|La|Ce|Pr|Nd|Sm|Eu|Gd|Tb|Dy|Ho|Er|Tm|Yb|Lu|Hf|Ta|W|Re|Os|Ir|Pt|Au|Hg|Tl|Pb|Bi|Th|Pa|U|Np|Pu|Am|Cm){2,}$/.test(
      word
    )
  );
}

export function normalizeMathString(raw: string): string {
  let s = raw
    .replace(/<==>/g, '⇔')
    .replace(/==>/g, '⇒')
    .replace(/->/g, '→')
    .replace(/ν̄/g, 'v̄');

  s = s.replace(/[₀₁₂₃₄₅₆₇₈₉ₐₑᵢₒᵤₙₖₘₚᵣₛₜₓ₊₋]+/g, (match) => {
    const mapped = [...match].map((ch) => UNICODE_SUB_MAP[ch] ?? ch).join('');
    return `_{${mapped}}`;
  });

  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/g, (match) => {
    const mapped = [...match].map((ch) => UNICODE_SUP_MAP[ch] ?? ch).join('');
    return `^{${mapped}}`;
  });

  return s;
}

export function findMatchingClose(
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

export function unwrapOuterParens(str: string): string {
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

export function findTopLevelFractionSlash(str: string): {
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
      const leftWordMatch = str.slice(0, i).trim().match(/([A-Za-z]+)$/);
      const rightWordMatch = str.slice(i + 1).trim().match(/^([A-Za-z]+)/);
      if (
        leftWordMatch &&
        rightWordMatch &&
        leftWordMatch[1].length >= 3 &&
        rightWordMatch[1].length >= 3 &&
        !isMathIdentifierWord(leftWordMatch[1]) &&
        !isMathIdentifierWord(rightWordMatch[1])
      ) {
        continue;
      }

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
            if (
              (c === '+' || c === '−' || c === '-') &&
              lStart >= 2 &&
              (str[lStart - 2] === '_' || str[lStart - 2] === '^')
            ) {
              lStart--;
              continue;
            }
            break;
          }
          lStart--;
        }
        const beforeSlice = str.slice(0, lStart);
        const fnPrefix = beforeSlice.match(
          /((?:sin|cos|tan|cot|sec|csc|ln|log)(?:\^\{[^}]+\}|\^[0-9]+)?\s+)$/
        );
        if (fnPrefix) {
          lStart -= fnPrefix[1].length;
        }
      }

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
          const openCh = str[rStart + 1];
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
        const afterSlice = str.slice(rStart);
        const fnMatch = afterSlice.match(
          /^((?:sin|cos|tan|cot|sec|csc|ln|log)(?:\^\{[^}]+\}|\^[0-9]+)?\s+[A-Za-z0-9\u0370-\u03FF_{}^]+)/
        );
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
              if (
                (c === '+' || c === '−' || c === '-') &&
                rEnd >= 1 &&
                (str[rEnd - 1] === '_' || str[rEnd - 1] === '^')
              ) {
                rEnd++;
                continue;
              }
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

function plainChunkToLatex(chunk: string): string {
  let out = '';
  for (let i = 0; i < chunk.length; i++) {
    const ch = chunk[i];
    if (LATEX_SYMBOL_MAP[ch]) {
      out += LATEX_SYMBOL_MAP[ch];
    } else if (ch === '\\') {
      out += '\\setminus ';
    } else if (ch === '{' || ch === '}') {
      out += `\\${ch}`;
    } else if (ch === '%') {
      out += '\\%';
    } else if (ch === '&') {
      out += '\\&';
    } else if (ch === '#') {
      out += '\\#';
    } else {
      out += ch;
    }
  }
  out = out.replace(/([A-Za-z\\]+)\u0304/g, '\\bar{$1}');
  out = out.replace(/\b([LR]\.H\.[LSD]\.)/g, '\\mathrm{$1}');
  out = out.replace(
    /\b(sin|cos|tan|cot|sec|csc|sinh|cosh|tanh|arcsin|arccos|arctan|ln|log|exp|det|min|max|gcd)\b/g,
    '\\$1'
  );
  return out;
}

function consumeUnbracedSubSupToken(str: string, sStart: number): number {
  const rest = str.slice(sStart);
  const multiMatch = rest.match(
    /^(?:[A-Za-z]{2,}|[0-9]+|[+\-−][0-9A-Za-z]*)/
  );
  if (multiMatch) {
    return sStart + multiMatch[0].length;
  }
  return Math.min(str.length, sStart + 1);
}

export function exprToLatex(str: string): string {
  if (!str) return '';

  const frac = findTopLevelFractionSlash(str);
  if (frac) {
    const before = str.slice(0, frac.leftStart);
    const numRaw = unwrapOuterParens(str.slice(frac.leftStart, frac.slashIdx).trim());
    const denRaw = unwrapOuterParens(str.slice(frac.slashIdx + 1, frac.rightEnd).trim());
    const after = str.slice(frac.rightEnd);
    return `${exprToLatex(before)}\\frac{${exprToLatex(numRaw)}}{${exprToLatex(denRaw)}}${exprToLatex(after)}`;
  }

  let out = '';
  let i = 0;
  let buffer = '';

  const flush = () => {
    if (buffer) {
      out += plainChunkToLatex(buffer);
      buffer = '';
    }
  };

  while (i < str.length) {
    if (str.startsWith('lim_', i)) {
      const subStart = i + 4;
      if (str[subStart] === '{' || str[subStart] === '(') {
        const openCh = str[subStart];
        const closeCh = openCh === '{' ? '}' : ')';
        const closeIdx = findMatchingClose(str, subStart, openCh, closeCh);
        if (closeIdx !== -1) {
          flush();
          const subContent = str.slice(subStart + 1, closeIdx);
          out += `\\lim\\limits_{${exprToLatex(subContent)}}`;
          i = closeIdx + 1;
          continue;
        }
      }
    }

    if (
      str.startsWith('sqrt', i) &&
      (i === 0 || !/[A-Za-z0-9]/.test(str[i - 1])) &&
      i + 4 < str.length &&
      (str[i + 4] === '(' || str[i + 4] === '[' || str[i + 4] === '{')
    ) {
      const openCh = str[i + 4];
      const closeCh = openCh === '(' ? ')' : openCh === '[' ? ']' : '}';
      const closeIdx = findMatchingClose(str, i + 4, openCh, closeCh);
      if (closeIdx !== -1) {
        flush();
        const radContent = str.slice(i + 5, closeIdx);
        out += `\\sqrt{${exprToLatex(radContent || ' ')}}`;
        i = closeIdx + 1;
        continue;
      }
    }

    if (str[i] === '√') {
      flush();
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
        if (k < str.length && str[k] === '(') {
          const cIdx = findMatchingClose(str, k, '(', ')');
          if (cIdx !== -1) k = cIdx + 1;
        }
        radContent = str.slice(radStart, k);
        nextIdx = k;
      }

      out += `\\sqrt{${exprToLatex(radContent || ' ')}}`;
      i = nextIdx;
      continue;
    }

    if (str[i] === '(' || str[i] === '[') {
      const openCh = str[i];
      const closeCh = openCh === '(' ? ')' : ']';
      const closeIdx = findMatchingClose(str, i, openCh, closeCh);
      if (closeIdx !== -1) {
        flush();
        const inner = str.slice(i + 1, closeIdx);
        out += `${openCh}${exprToLatex(inner)}${closeCh}`;
        i = closeIdx + 1;
        continue;
      }
    }

    if (str[i] === '_' || str[i] === '^') {
      const op = str[i];
      const sStart = i + 1;
      if (sStart < str.length && (str[sStart] === '{' || str[sStart] === '(')) {
        const openCh = str[sStart];
        const closeCh = openCh === '{' ? '}' : ')';
        const closeIdx = findMatchingClose(str, sStart, openCh, closeCh);
        if (closeIdx !== -1) {
          flush();
          const inner = str.slice(sStart + 1, closeIdx);
          out += `${op}{${exprToLatex(inner)}}`;
          i = closeIdx + 1;
          continue;
        }
      } else if (sStart < str.length && /[A-Za-z0-9\u0370-\u03FF+\-]/.test(str[sStart])) {
        flush();
        const k = consumeUnbracedSubSupToken(str, sStart);
        const inner = str.slice(sStart, k);
        out += `${op}{${exprToLatex(inner)}}`;
        i = k;
        continue;
      }
    }

    buffer += str[i];
    i++;
  }

  flush();
  return out;
}

export function renderKatexToHtml(latex: string): string {
  return katex.renderToString(latex, {
    throwOnError: false,
    displayMode: false,
  });
}

function hasMathSignal(s: string): boolean {
  if (
    /[√∂∇∫∑∏∞ℝℤℕℚℂ±∓·×÷=≠≤≥<>≈≡∼∝→⇒⇔↦∈∉⊂⊆∪∩∅∀∃∠⊥∥△°⌊⌋⌈⌉_^\\|\u0370-\u03FF]/.test(s)
  ) {
    return true;
  }
  if (/\b(?:sin|cos|tan|cot|sec|csc|sinh|cosh|tanh|ln|log|exp|lim|det|sqrt)\b/.test(s)) {
    return true;
  }
  if (/[A-Za-z]\([A-Za-z0-9, +\-−]+\)/.test(s)) {
    return true;
  }
  if (/[A-Za-z0-9]\s*[+\-−/]\s*[A-Za-z0-9]/.test(s)) {
    return true;
  }
  if (/^[A-Za-z]$/.test(s.trim())) {
    return true;
  }
  return false;
}

export interface TextOrMathSegment {
  type: 'prose' | 'math';
  text: string;
}

function splitGapIntoProseAndMath(gapText: string): TextOrMathSegment[] {
  if (gapText.includes('—')) {
    const parts = gapText.split('—');
    const segments: TextOrMathSegment[] = [];
    for (let idx = 0; idx < parts.length; idx++) {
      if (parts[idx].length > 0) {
        segments.push(...splitGapIntoProseAndMath(parts[idx]));
      }
      if (idx < parts.length - 1) {
        segments.push({ type: 'prose', text: '—' });
      }
    }
    return segments;
  }

  let start = 0;
  let end = gapText.length;

  while (start < end) {
    const rest = gapText.slice(start, end);
    const listMatch = rest.match(
      /^(?:[\s,;:•.]|\([0-9a-zA-Z]\)(?=\s)|[0-9]+\.(?=\s)|[\)\]])+/
    );
    if (listMatch && listMatch[0].length > 0) {
      start += listMatch[0].length;
    } else {
      break;
    }
  }

  while (end > start) {
    const rest = gapText.slice(start, end);
    if (/(?:L\.H\.[LSD]|R\.H\.[LSD])\.$/.test(rest)) {
      break;
    }
    const trailMatch = rest.match(/(?:[\s,;:.?!]|[\(\[])+$/);
    if (trailMatch && trailMatch[0].length > 0) {
      end -= trailMatch[0].length;
    } else {
      break;
    }
  }

  let core = gapText.slice(start, end);

  while (core.endsWith(')') || core.endsWith(']')) {
    const openCount = (core.match(/[\(\[]/g) || []).length;
    const closeCount = (core.match(/[\)\]]/g) || []).length;
    if (closeCount > openCount) {
      end--;
      core = gapText.slice(start, end);
    } else {
      break;
    }
  }

  while (core.startsWith('(') || core.startsWith('[')) {
    const openCount = (core.match(/[\(\[]/g) || []).length;
    const closeCount = (core.match(/[\)\]]/g) || []).length;
    if (openCount > closeCount) {
      start++;
      core = gapText.slice(start, end);
    } else {
      break;
    }
  }

  while (start < end && /\s/.test(gapText[start])) start++;
  while (end > start && /\s/.test(gapText[end - 1])) end--;
  core = gapText.slice(start, end);

  if (!core || !hasMathSignal(core)) {
    return [{ type: 'prose', text: gapText }];
  }

  const out: TextOrMathSegment[] = [];
  if (start > 0) out.push({ type: 'prose', text: gapText.slice(0, start) });
  out.push({ type: 'math', text: core });
  if (end < gapText.length) out.push({ type: 'prose', text: gapText.slice(end) });
  return out;
}

const PROSE_WORD_REGEX =
  /\b(?:e\.g\.|i\.e\.|w\.r\.t\.|20\d\d[–\-]\d\d\b|Q\d+[a-z]?\b|Ex\.|Ch\.|Fig\.|Eq\.|Sec\.|(?:[AaI]\b(?=\s+[A-Za-z]{2,})|[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u017F]{2,}(?:['’\-][A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u017F]+)*\b)(?!\s*[_^]))/g;

export function segmentMathAndProse(normalizedStr: string): TextOrMathSegment[] {
  if (!normalizedStr) return [];

  if (normalizedStr.includes('\\(') && normalizedStr.includes('\\)')) {
    const explicitSegments: TextOrMathSegment[] = [];
    const delimRegex = /\\\(([\s\S]*?)\\\)/g;
    let lastPos = 0;
    let delimMatch: RegExpExecArray | null;
    while ((delimMatch = delimRegex.exec(normalizedStr)) !== null) {
      if (delimMatch.index > lastPos) {
        explicitSegments.push({
          type: 'prose',
          text: normalizedStr.slice(lastPos, delimMatch.index),
        });
      }
      if (delimMatch[1].length > 0) {
        explicitSegments.push({
          type: 'math',
          text: delimMatch[1],
        });
      }
      lastPos = delimMatch.index + delimMatch[0].length;
    }
    if (lastPos < normalizedStr.length) {
      explicitSegments.push({
        type: 'prose',
        text: normalizedStr.slice(lastPos),
      });
    }
    return explicitSegments;
  }

  const raw: TextOrMathSegment[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  PROSE_WORD_REGEX.lastIndex = 0;

  while ((match = PROSE_WORD_REGEX.exec(normalizedStr)) !== null) {
    const word = match[0];
    const idx = match.index;

    const prevOne = idx >= 1 ? normalizedStr[idx - 1] : '';
    const prevTwo = idx >= 2 ? normalizedStr.slice(idx - 2, idx) : '';
    if (prevTwo === '_{' || prevTwo === '^{' || prevOne === '_' || prevOne === '^') {
      continue;
    }

    if (isMathIdentifierWord(word)) {
      continue;
    }

    if (idx > lastIdx) {
      raw.push(...splitGapIntoProseAndMath(normalizedStr.slice(lastIdx, idx)));
    }
    raw.push({ type: 'prose', text: word });
    lastIdx = idx + word.length;
  }

  if (lastIdx < normalizedStr.length) {
    raw.push(...splitGapIntoProseAndMath(normalizedStr.slice(lastIdx)));
  }

  const merged: TextOrMathSegment[] = [];
  for (const tok of raw) {
    if (tok.type === 'prose' && merged.length > 0 && merged[merged.length - 1].type === 'prose') {
      merged[merged.length - 1].text += tok.text;
    } else {
      merged.push({ ...tok });
    }
  }
  return merged;
}

export function expandVerticalSteps(rawLine: string): string[] {
  const trimmed = rawLine.trim();
  if (!trimmed || trimmed.startsWith('∴') || trimmed.startsWith('•')) {
    return [rawLine];
  }

  const leadingIndent = rawLine.match(/^\s*/)?.[0] ?? '  ';

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

  const splitIndices: number[] = [];
  for (let k = 1; k < eqPositions.length; k++) {
    const between = trimmed.slice(eqPositions[k - 1] + 1, eqPositions[k]);
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

/**
 * Splits a multi-question problemStatement string into individual vertical lines
 * so each numbered/lettered question ((1), (2), (3), (A), (B), (i), (ii), etc.)
 * is displayed on its own line.
 */
export function splitProblemStatementLines(statement: string): string[] {
  if (!statement) return [];

  const formatted = statement
    // Break after colon before a list marker like ": (1) " or ": (i) " or ": (a) "
    .replace(/:\s+(?=\((?:\d+|[A-C]|i{1,3}|iv|[a-d])\)\s)/g, ':\n')
    // Break after "for (i)" or "for (1)"
    .replace(/\bfor\s+(?=\((?:\d+|i{1,3}|iv|[a-d])\)\s)/g, 'for:\n')
    // Break before major section markers (A), (B), (C) after sentence end
    .replace(/([.;])\s+(?=\([A-C]\)\s)/g, '$1\n')
    // Break before numbered/lettered question items preceded by ", and ", "; and ", ", ", "; ", or ". "
    .replace(/(?:,\s+and|;\s+and)\s+(?=\((?:\d+|i{1,3}|iv|[a-d])\)\s)/g, '\n')
    .replace(/[,;]\s+(?=\((?:\d+|i{1,3}|iv|[a-d])\)\s)/g, '\n')
    .replace(/\.\s+(?=\((?:\d+|i{1,3}|iv|[a-d])\)\s)/g, '.\n');

  return formatted
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * Splits dense prose paragraphs, summaries, and inline numbered lists
 * into clean vertical list items.
 */
export function splitTextIntoVerticalItems(raw: string): string[] {
  if (!raw || !raw.trim()) return [];
  let s = raw.trim();

  // 1. Break before numbered syllabus sub-sections like "1.2 ", "2.2 ", "3.2 ", "4.2 "
  s = s.replace(/\.\s+(?=[1-9]\.[1-9]\s)/g, '.\n');

  // 2. Break before inline (1), (2), (3), (4), (a), (b), (i), (ii), (Case 1) items
  s = s.replace(/:\s+(?=\((?:\d+|i{1,3}|iv|[a-d]|Case\s+\d+)\)\s)/gi, ':\n');
  s = s.replace(
    /\b(?:using|with)\s+(?=\((?:\d+|i{1,3}|iv|[a-d]|Case\s+\d+)\)\s)/gi,
    (m) => `${m.trim()}:\n`
  );
  s = s.replace(/(?:,\s+and|;\s+and)\s+(?=\((?:\d+|i{1,3}|iv|[a-d]|Case\s+\d+)\)\s)/gi, '\n');
  s = s.replace(/[,;]\s+(?=\((?:\d+|i{1,3}|iv|[a-d]|Case\s+\d+)\)\s)/gi, '\n');

  // 3. Walk character by character at depth 0 to split on top-level "; ", ", whereas ", and sentence boundaries ". "
  const lines: string[] = [];
  for (const rawLine of s.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    let pD = 0;
    let bD = 0;
    let cD = 0;
    let last = 0;
    let capitalizeNext = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '(') pD++;
      else if (ch === ')') pD = Math.max(0, pD - 1);
      else if (ch === '[') bD++;
      else if (ch === ']') bD = Math.max(0, bD - 1);
      else if (ch === '{') cD++;
      else if (ch === '}') cD = Math.max(0, cD - 1);
      else if (pD === 0 && bD === 0 && cD === 0) {
        if (ch === ';' && line[i + 1] === ' ') {
          let seg = line.slice(last, i).trim();
          if (seg) {
            if (capitalizeNext) seg = seg.charAt(0).toUpperCase() + seg.slice(1);
            lines.push(seg);
          }
          capitalizeNext = false;
          last = i + 2;
          i++;
        } else if (line.slice(i, i + 10).toLowerCase() === ', whereas ') {
          let seg = line.slice(last, i).trim();
          if (seg) {
            if (capitalizeNext) seg = seg.charAt(0).toUpperCase() + seg.slice(1);
            if (!seg.endsWith('.')) seg += '.';
            lines.push(seg);
          }
          capitalizeNext = true;
          last = i + 2;
          i++;
        } else if ((ch === '.' || ch === '!') && line[i + 1] === ' ') {
          const before = line.slice(last, i + 1);
          const isAbbrev =
            /(?:Ch|Sec|Ex|Fig|Eq|Dr|Prof|vs|etc|e\.g|i\.e|w\.r\.t|L\.H\.[LSD]|R\.H\.[LSD]|\b[A-Z]|\d)\.$/.test(
              before.trim()
            );
          if (!isAbbrev) {
            let seg = before.trim();
            if (seg) {
              if (capitalizeNext) seg = seg.charAt(0).toUpperCase() + seg.slice(1);
              lines.push(seg);
            }
            capitalizeNext = false;
            last = i + 2;
            i++;
          }
        }
      }
    }

    let tail = line.slice(last).trim();
    if (tail) {
      if (capitalizeNext) tail = tail.charAt(0).toUpperCase() + tail.slice(1);
      lines.push(tail);
    }
  }

  return lines;
}

/**
 * Splits horizontal pipe-separated formulas ("A | B | C") into vertical formula lines
 * while keeping absolute value bars ("|x|") intact.
 */
export function splitFormulaPipeItems(formula: string): string[] {
  if (!formula) return [];
  return formula
    .split(/\n+|\s+\|\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}



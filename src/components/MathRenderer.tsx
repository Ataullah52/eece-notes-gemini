import React from 'react';
import {
  normalizeMathString,
  exprToLatex,
  renderKatexToHtml,
  segmentMathAndProse,
  expandVerticalSteps,
} from '../utils/mathLatex';

const KatexSpan: React.FC<{ tex: string; className?: string }> = ({ tex, className = '' }) => {
  const html = renderKatexToHtml(tex);
  return (
    <span
      className={`mx-[1.5px] inline-block align-middle ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const MathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  const normalized = normalizeMathString(text);
  const segments = segmentMathAndProse(normalized);

  return (
    <span className={className}>
      {segments.map((seg, idx) => {
        if (seg.type === 'math') {
          const latex = exprToLatex(seg.text);
          return <KatexSpan key={`math-${idx}`} tex={latex} />;
        }
        return <React.Fragment key={`prose-${idx}`}>{seg.text}</React.Fragment>;
      })}
    </span>
  );
};

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
          <div key={idx} className={`${indentClass} leading-relaxed`}>
            <MathText text={trimmed} />
          </div>
        );
      })}
    </div>
  );
};

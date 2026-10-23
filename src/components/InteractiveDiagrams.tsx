import React, { useState } from 'react';
import {
  calculatePassiveSignPower,
  calculateOhmsLawState,
  solveTwoLoopKclKvl,
  calculateRcTransient,
} from '../utils/circuitMath';
import type { InteractiveDiagramId } from '../data/types';

interface InteractiveDiagramProps {
  diagramId: InteractiveDiagramId;
}

export const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({ diagramId }) => {
  switch (diagramId) {
    case 'passive-sign':
      return <PassiveSignDiagram />;
    case 'ohms-law':
      return <OhmsLawDiagram />;
    case 'kcl-kvl':
      return <KclKvlDiagram />;
    case 'rc-transient':
      return <RcTransientDiagram />;
    default:
      return null;
  }
};

const PassiveSignDiagram: React.FC = () => {
  const [voltage, setVoltage] = useState<number>(12);
  const [current, setCurrent] = useState<number>(2.5);
  const [entersPositive, setEntersPositive] = useState<boolean>(true);

  const result = calculatePassiveSignPower(voltage, current, entersPositive);

  const isAbsorbing = result.state === 'ABSORBING';
  const isSupplying = result.state === 'SUPPLYING';

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60 print:border-slate-300 print:bg-white">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div>
          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Interactive Diagram 1.1 · Passive Sign Convention & Power Flow Lab
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Adjust terminal voltage v, branch current i, and reference arrow orientation to observe instantaneous power p.
          </p>
        </div>
        <div
          className={`font-mono text-xs font-semibold tabular-nums ${
            isAbsorbing
              ? 'text-sky-700 dark:text-sky-300'
              : isSupplying
                ? 'text-rose-700 dark:text-rose-300'
                : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {result.stateLabel}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        {/* Left Zone (65%): SVG Circuit Schematic */}
        <div className="lg:col-span-7 print:col-span-12">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <svg
              viewBox="0 0 540 220"
              className="h-auto w-full"
              role="img"
              aria-label="Passive Sign Convention circuit diagram showing voltage terminals and current reference arrow"
            >
              <defs>
                <marker
                  id="arrow-current"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" className="fill-sky-600 dark:fill-sky-400" />
                </marker>
              </defs>

              {/* Top & bottom circuit leads */}
              <line
                x1="65"
                y1="55"
                x2="235"
                y2="55"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />
              <line
                x1="235"
                y1="55"
                x2="235"
                y2="75"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />
              <line
                x1="235"
                y1="155"
                x2="235"
                y2="175"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />
              <line
                x1="65"
                y1="175"
                x2="235"
                y2="175"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />

              {/* Terminal nodes a and b */}
              <circle cx="65" cy="55" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
              <circle cx="65" cy="175" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
              <text
                x="45"
                y="60"
                className="fill-slate-700 font-mono text-xs font-semibold dark:fill-slate-300"
              >
                a
              </text>
              <text
                x="45"
                y="180"
                className="fill-slate-700 font-mono text-xs font-semibold dark:fill-slate-300"
              >
                b
              </text>

              {/* Current reference arrow on top wire */}
              {entersPositive ? (
                <line
                  x1="100"
                  y1="55"
                  x2="185"
                  y2="55"
                  className="stroke-sky-600 dark:stroke-sky-400"
                  strokeWidth="3"
                  markerEnd="url(#arrow-current)"
                />
              ) : (
                <line
                  x1="185"
                  y1="55"
                  x2="100"
                  y2="55"
                  className="stroke-sky-600 dark:stroke-sky-400"
                  strokeWidth="3"
                  markerEnd="url(#arrow-current)"
                />
              )}
              <text
                x="145"
                y="40"
                textAnchor="middle"
                className="fill-sky-700 font-mono text-xs font-semibold dark:fill-sky-300"
              >
                i = {current >= 0 ? `+${current}` : current} A
              </text>
              <text
                x="145"
                y="24"
                textAnchor="middle"
                className="fill-slate-500 font-sans text-[11px] dark:fill-slate-400"
              >
                {entersPositive ? '(Enters + Terminal)' : '(Leaves + Terminal)'}
              </text>

              {/* General Two-Terminal Circuit Element Box */}
              <rect
                x="175"
                y="75"
                width="120"
                height="80"
                rx="8"
                className={
                  isAbsorbing
                    ? 'fill-sky-50/90 stroke-sky-600 dark:fill-sky-950/60 dark:stroke-sky-400'
                    : isSupplying
                      ? 'fill-rose-50/90 stroke-rose-600 dark:fill-rose-950/60 dark:stroke-rose-400'
                      : 'fill-slate-100 stroke-slate-500 dark:fill-slate-900 dark:stroke-slate-400'
                }
                strokeWidth="2.2"
              />

              {/* Polarity Signs strictly to the left of Element Box */}
              <text
                x="125"
                y="93"
                textAnchor="middle"
                className="fill-amber-600 font-mono text-base font-bold dark:fill-amber-400"
              >
                +
              </text>
              <text
                x="125"
                y="120"
                textAnchor="middle"
                className="fill-slate-800 font-mono text-[11px] font-semibold dark:fill-slate-200"
              >
                v = {voltage >= 0 ? `+${voltage}` : voltage} V
              </text>
              <text
                x="125"
                y="150"
                textAnchor="middle"
                className="fill-amber-600 font-mono text-base font-bold dark:fill-amber-400"
              >
                −
              </text>

              {/* Element Title & Computed Power inside Box */}
              <text
                x="235"
                y="106"
                textAnchor="middle"
                className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100"
              >
                Circuit Element
              </text>
              <text
                x="235"
                y="126"
                textAnchor="middle"
                className="fill-slate-800 font-mono text-xs font-bold dark:fill-slate-200"
              >
                p = {result.signedPowerWatts >= 0 ? `+${result.signedPowerWatts}` : result.signedPowerWatts} W
              </text>
              <text
                x="235"
                y="144"
                textAnchor="middle"
                className="fill-slate-600 font-sans text-[10px] dark:fill-slate-400"
              >
                {isAbsorbing
                  ? 'Absorbing Energy'
                  : isSupplying
                    ? 'Supplying Energy'
                    : 'Idle (0 W)'}
              </text>

              {/* Right-side summary equations in SVG with generous width */}
              <rect
                x="312"
                y="45"
                width="216"
                height="135"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
                strokeWidth="1.2"
              />
              <text
                x="324"
                y="68"
                className="fill-slate-500 font-sans text-[11px] font-medium dark:fill-slate-400"
              >
                Governing Sign Equation:
              </text>
              <text
                x="324"
                y="88"
                className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100"
              >
                {result.formulaUsed}
              </text>
              <text
                x="324"
                y="114"
                className="fill-slate-500 font-sans text-[11px] font-medium dark:fill-slate-400"
              >
                Substitution:
              </text>
              <text
                x="324"
                y="134"
                className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100"
              >
                p = {entersPositive ? '+' : '−'}({voltage})({current}) = {result.signedPowerWatts} W
              </text>
              <text
                x="324"
                y="158"
                className="fill-slate-600 font-mono text-[11px] dark:fill-slate-400"
              >
                W (10s) = {result.energy10SecJoules} J
              </text>
            </svg>
          </div>
        </div>

        {/* Right Zone (35%): Interactive Parameter Controls (Hidden in Print) */}
        <div className="space-y-4 lg:col-span-5 print:hidden">
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="psc-voltage-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Terminal Voltage (v)
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {voltage >= 0 ? `+${voltage}` : voltage} V
              </span>
            </div>
            <input
              id="psc-voltage-slider"
              type="range"
              min={-20}
              max={20}
              step={1}
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
            <div className="mt-1 flex justify-between font-mono text-[11px] text-slate-500">
              <span>−20 V</span>
              <span>0 V</span>
              <span>+20 V</span>
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="psc-current-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Branch Current (i)
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {current >= 0 ? `+${current}` : current} A
              </span>
            </div>
            <input
              id="psc-current-slider"
              type="range"
              min={-5}
              max={5}
              step={0.5}
              value={current}
              onChange={(e) => setCurrent(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
            <div className="mt-1 flex justify-between font-mono text-[11px] text-slate-500">
              <span>−5.0 A</span>
              <span>0 A</span>
              <span>+5.0 A</span>
            </div>
          </div>

          <div className="pt-1">
            <span className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300">
              Reference Current Arrow Direction
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setEntersPositive(true)}
                className={`min-h-[44px] rounded-lg border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                  entersPositive
                    ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                Enters + Terminal
              </button>
              <button
                type="button"
                onClick={() => setEntersPositive(false)}
                className={`min-h-[44px] rounded-lg border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                  !entersPositive
                    ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                Leaves + Terminal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OhmsLawDiagram: React.FC = () => {
  const [voltage, setVoltage] = useState<number>(12);
  const [resistance, setResistance] = useState<number>(100);

  const state = calculateOhmsLawState(voltage, resistance);

  // Compute SVG line endpoint for I-V slope (V from 0 to 24V, I from 0 to 240mA)
  const maxV = 24;
  const maxImA = 250;
  const currentAtMaxVmA = Math.min(maxImA, (maxV / resistance) * 1000);
  const vAtMaxImA = currentAtMaxVmA === maxImA ? (maxImA / 1000) * resistance : maxV;

  const plotLeft = 55;
  const plotBottom = 175;
  const plotWidth = 220;
  const plotHeight = 130;

  const endX = plotLeft + (vAtMaxImA / maxV) * plotWidth;
  const endY = plotBottom - (currentAtMaxVmA / maxImA) * plotHeight;

  const pointX = plotLeft + (voltage / maxV) * plotWidth;
  const clampedImA = Math.min(maxImA, state.currentMilliamps);
  const pointY = plotBottom - (clampedImA / maxImA) * plotHeight;

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60 print:border-slate-300 print:bg-white">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div>
          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Interactive Diagram 2.1 · Ohm’s Law Conductance Slope (G = 1/R) & Power Lab
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Vary Voltage V and Resistance R to see the linear i–v slope G = 1/R and dissipated power p = v²/R.
          </p>
        </div>
        <div className="font-mono text-xs font-semibold tabular-nums text-sky-700 dark:text-sky-300">
          I = {state.currentMilliamps} mA · G = {state.conductanceMillisievert} mS · P = {state.powerWatts} W
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 print:col-span-12">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <svg
              viewBox="0 0 540 210"
              className="h-auto w-full"
              role="img"
              aria-label="Ohm's Law linear I-V characteristic plot and circuit parameters"
            >
              {/* Coordinate Axes for I-V Curve */}
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={plotLeft + plotWidth + 10}
                y2={plotBottom}
                className="stroke-slate-600 dark:stroke-slate-400"
                strokeWidth="1.8"
              />
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={plotLeft}
                y2={plotBottom - plotHeight - 15}
                className="stroke-slate-600 dark:stroke-slate-400"
                strokeWidth="1.8"
              />

              {/* Grid lines */}
              <line
                x1={plotLeft}
                y1={plotBottom - plotHeight * 0.5}
                x2={plotLeft + plotWidth}
                y2={plotBottom - plotHeight * 0.5}
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeDasharray="4 4"
              />
              <line
                x1={plotLeft + plotWidth * 0.5}
                y1={plotBottom}
                x2={plotLeft + plotWidth * 0.5}
                y2={plotBottom - plotHeight}
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeDasharray="4 4"
              />

              {/* Axis Labels */}
              <text
                x={plotLeft + plotWidth / 2}
                y="198"
                textAnchor="middle"
                className="fill-slate-600 font-mono text-[11px] dark:fill-slate-400"
              >
                Voltage v (0 to 24 V)
              </text>
              <text
                x="18"
                y="115"
                textAnchor="middle"
                transform="rotate(-90 18 115)"
                className="fill-slate-600 font-mono text-[11px] dark:fill-slate-400"
              >
                Current i (mA)
              </text>

              {/* Conductance Slope Line i = G*v */}
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={endX}
                y2={endY}
                className="stroke-sky-600 dark:stroke-sky-400"
                strokeWidth="2.8"
              />

              {/* Operating Point (V, I) */}
              <line
                x1={pointX}
                y1={plotBottom}
                x2={pointX}
                y2={pointY}
                className="stroke-amber-500/80"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />
              <line
                x1={plotLeft}
                y1={pointY}
                x2={pointX}
                y2={pointY}
                className="stroke-amber-500/80"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />
              <circle
                cx={pointX}
                cy={pointY}
                r="5.5"
                className="fill-amber-500 stroke-white dark:stroke-slate-950"
                strokeWidth="2"
              />
              <text
                x={pointX > 180 ? pointX - 10 : pointX + 10}
                y={Math.max(pointY - 8, 34)}
                textAnchor={pointX > 180 ? 'end' : 'start'}
                className="fill-slate-900 font-mono text-[10.5px] font-semibold dark:fill-slate-100"
              >
                ({voltage}V, {state.currentMilliamps}mA)
              </text>

              {/* Right Readout Box with ample width */}
              <rect
                x="296"
                y="28"
                width="232"
                height="155"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
                strokeWidth="1.2"
              />
              <text
                x="310"
                y="52"
                className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100"
              >
                Operating Point Parameters
              </text>
              <text
                x="310"
                y="76"
                className="fill-slate-700 font-mono text-[11px] dark:fill-slate-300"
              >
                Resistance R = {resistance} Ω
              </text>
              <text
                x="310"
                y="98"
                className="fill-slate-700 font-mono text-[11px] dark:fill-slate-300"
              >
                Slope G = 1/R = {state.conductanceMillisievert} mS
              </text>
              <text
                x="310"
                y="120"
                className="fill-sky-700 font-mono text-[11px] font-semibold dark:fill-sky-300"
              >
                Current I = V/R = {state.currentMilliamps} mA
              </text>
              <text
                x="310"
                y="142"
                className="fill-amber-700 font-mono text-[11px] font-semibold dark:fill-amber-400"
              >
                Power P = V²/R = {state.powerWatts} W
              </text>
              <text
                x="310"
                y="164"
                className="fill-slate-500 font-mono text-[10px] dark:fill-slate-400"
              >
                ({state.powerMilliwatts} mW dissipated as heat)
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-5 print:hidden">
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="ohm-voltage-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Applied Source Voltage (V)
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {voltage} V
              </span>
            </div>
            <input
              id="ohm-voltage-slider"
              type="range"
              min={1}
              max={24}
              step={1}
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="ohm-resistance-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Load Resistance (R)
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {resistance} Ω
              </span>
            </div>
            <input
              id="ohm-resistance-slider"
              type="range"
              min={50}
              max={500}
              step={25}
              value={resistance}
              onChange={(e) => setResistance(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const KclKvlDiagram: React.FC = () => {
  const [v1, setV1] = useState<number>(15);
  const [v2, setV2] = useState<number>(9);
  const [r1, setR1] = useState<number>(100);
  const [r2, setR2] = useState<number>(150);
  const [r3, setR3] = useState<number>(200);

  const solved = solveTwoLoopKclKvl(v1, v2, r1, r2, r3);

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60 print:border-slate-300 print:bg-white">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div>
          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Interactive Diagram 2.2 · Two-Loop T-Network KCL & KVL Solver
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Verify KCL at central Node A (i₁ + i₂ = i₃) and KVL around both closed meshes (∑ V = 0).
          </p>
        </div>
        <div className="font-mono text-xs font-semibold tabular-nums text-emerald-700 dark:text-emerald-300">
          V_A = {solved.nodeVoltageVa} V · KCL Residual = {solved.kclResidualMilliamps} mA
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 print:col-span-12">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <svg
              viewBox="0 0 540 220"
              className="h-auto w-full"
              role="img"
              aria-label="Two-loop KCL and KVL circuit schematic with central Node A"
            >
              {/* Outer Frame Wires */}
              <line x1="75" y1="54" x2="465" y2="54" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="75" y1="54" x2="75" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="465" y1="54" x2="465" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="75" y1="175" x2="465" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="270" y1="54" x2="270" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />

              {/* Central Node A */}
              <circle cx="270" cy="54" r="5" className="fill-sky-600 dark:fill-sky-400" />
              <text x="270" y="18" textAnchor="middle" className="fill-sky-700 font-mono text-xs font-bold dark:fill-sky-300">
                Node A (V_A = {solved.nodeVoltageVa} V)
              </text>

              {/* Left Source V1 */}
              <circle cx="75" cy="115" r="18" className="fill-white stroke-slate-800 dark:fill-slate-900 dark:stroke-slate-200" strokeWidth="2" />
              <text x="75" y="112" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">+</text>
              <text x="75" y="126" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">−</text>
              <text x="34" y="118" textAnchor="middle" className="fill-slate-800 font-mono text-xs font-semibold dark:fill-slate-200">
                {v1}V
              </text>

              {/* Right Source V2 */}
              <circle cx="465" cy="115" r="18" className="fill-white stroke-slate-800 dark:fill-slate-900 dark:stroke-slate-200" strokeWidth="2" />
              <text x="465" y="112" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">+</text>
              <text x="465" y="126" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">−</text>
              <text x="506" y="118" textAnchor="middle" className="fill-slate-800 font-mono text-xs font-semibold dark:fill-slate-200">
                {v2}V
              </text>

              {/* Resistor R1 Box */}
              <rect x="120" y="40" width="84" height="28" rx="4" className="fill-amber-50 stroke-amber-600 dark:fill-amber-950 dark:stroke-amber-400" strokeWidth="1.8" />
              <text x="162" y="58" textAnchor="middle" className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100">
                R1 = {r1}Ω
              </text>
              <text x="162" y="33" textAnchor="middle" className="fill-sky-700 font-mono text-[11px] font-semibold dark:fill-sky-300">
                i1 → {solved.i1Milliamps} mA
              </text>

              {/* Resistor R2 Box */}
              <rect x="336" y="40" width="84" height="28" rx="4" className="fill-amber-50 stroke-amber-600 dark:fill-amber-950 dark:stroke-amber-400" strokeWidth="1.8" />
              <text x="378" y="58" textAnchor="middle" className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100">
                R2 = {r2}Ω
              </text>
              <text x="378" y="33" textAnchor="middle" className="fill-sky-700 font-mono text-[11px] font-semibold dark:fill-sky-300">
                ← i2 {solved.i2Milliamps} mA
              </text>

              {/* Central Resistor R3 Box with current label cleanly outside to the right */}
              <rect x="228" y="98" width="84" height="28" rx="4" className="fill-amber-50 stroke-amber-600 dark:fill-amber-950 dark:stroke-amber-400" strokeWidth="1.8" />
              <text x="270" y="116" textAnchor="middle" className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100">
                R3 = {r3}Ω
              </text>
              <text x="322" y="116" className="fill-sky-700 font-mono text-[11px] font-semibold dark:fill-sky-300">
                ↓ i3 = {solved.i3Milliamps} mA
              </text>

              {/* Ground Reference Node */}
              <circle cx="270" cy="175" r="4" className="fill-slate-800 dark:fill-slate-200" />
              <text x="270" y="198" textAnchor="middle" className="fill-slate-600 font-mono text-[11px] dark:fill-slate-400">
                GND (0 V) · KCL: i₁ + i₂ = {solved.i1Milliamps} + ({solved.i2Milliamps}) = {solved.i3Milliamps} mA
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-5 print:hidden">
          <div>
            <div className="mb-1 flex justify-between text-xs">
              <label htmlFor="kcl-v1-slider" className="font-medium text-slate-700 dark:text-slate-300">
                Left Source (V₁)
              </label>
              <span className="font-mono font-semibold tabular-nums">{v1} V</span>
            </div>
            <input
              id="kcl-v1-slider"
              type="range"
              min={0}
              max={24}
              step={1}
              value={v1}
              onChange={(e) => setV1(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-xs">
              <label htmlFor="kcl-v2-slider" className="font-medium text-slate-700 dark:text-slate-300">
                Right Source (V₂)
              </label>
              <span className="font-mono font-semibold tabular-nums">{v2} V</span>
            </div>
            <input
              id="kcl-v2-slider"
              type="range"
              min={0}
              max={24}
              step={1}
              value={v2}
              onChange={(e) => setV2(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-xs">
              <label htmlFor="kcl-r3-slider" className="font-medium text-slate-700 dark:text-slate-300">
                Shunt Branch Resistor (R₃)
              </label>
              <span className="font-mono font-semibold tabular-nums">{r3} Ω</span>
            </div>
            <input
              id="kcl-r3-slider"
              type="range"
              min={50}
              max={400}
              step={25}
              value={r3}
              onChange={(e) => setR3(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const RcTransientDiagram: React.FC = () => {
  const [vs, setVs] = useState<number>(10);
  const [rKOhm, setRKOhm] = useState<number>(2);
  const [cMicroF, setCMicroF] = useState<number>(5);

  const rc = calculateRcTransient(vs, rKOhm, cMicroF);

  // Generate SVG path for v_C(t) = Vs * (1 - e^(-t/tau)) over t from 0 to 5*tau
  const plotLeft = 55;
  const plotBottom = 175;
  const plotWidth = 240;
  const plotHeight = 130;
  const maxV = 15;

  const points: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const u = (i / 40) * 5; // t / tau from 0 to 5
    const v = vs * (1 - Math.exp(-u));
    const x = plotLeft + (u / 5) * plotWidth;
    const y = plotBottom - (v / maxV) * plotHeight;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  const tau1X = plotLeft + (1 / 5) * plotWidth;
  const tau1Y = plotBottom - (rc.vAt1Tau / maxV) * plotHeight;

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60 print:border-slate-300 print:bg-white">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div>
          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Interactive Diagram 1.1 · First-Order RC Step Response Curve (τ = R·C)
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Explore how time constant τ = R·C scales capacitor charging milestones (1τ = 63.2%, 3τ = 95.0%, 5τ = 99.3%).
          </p>
        </div>
        <div className="font-mono text-xs font-semibold tabular-nums text-sky-700 dark:text-sky-300">
          τ = {rc.tauMilliseconds} ms · v_C(1τ) = {rc.vAt1Tau} V · i(0⁺) = {rc.initialCurrentMilliamps} mA
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 print:col-span-12">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <svg
              viewBox="0 0 540 210"
              className="h-auto w-full"
              role="img"
              aria-label="RC capacitor charging curve over 5 time constants"
            >
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={plotLeft + plotWidth + 10}
                y2={plotBottom}
                className="stroke-slate-600 dark:stroke-slate-400"
                strokeWidth="1.8"
              />
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={plotLeft}
                y2={plotBottom - plotHeight - 15}
                className="stroke-slate-600 dark:stroke-slate-400"
                strokeWidth="1.8"
              />

              {/* Asymptote at Vs */}
              <line
                x1={plotLeft}
                y1={plotBottom - (vs / maxV) * plotHeight}
                x2={plotLeft + plotWidth}
                y2={plotBottom - (vs / maxV) * plotHeight}
                className="stroke-slate-400 dark:stroke-slate-600"
                strokeDasharray="4 4"
                strokeWidth="1.2"
              />

              {/* Exponential Curve */}
              <polyline
                fill="none"
                points={points.join(' ')}
                className="stroke-sky-600 dark:stroke-sky-400"
                strokeWidth="2.8"
              />

              {/* 1*tau marker */}
              <line
                x1={tau1X}
                y1={plotBottom}
                x2={tau1X}
                y2={tau1Y}
                className="stroke-amber-500"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />
              <circle cx={tau1X} cy={tau1Y} r="5" className="fill-amber-500" />
              <text
                x={tau1X + 6}
                y={tau1Y + 14}
                className="fill-slate-900 font-mono text-[10.5px] font-semibold dark:fill-slate-100"
              >
                1τ: {rc.vAt1Tau} V (63.2%)
              </text>

              <text
                x={plotLeft + plotWidth / 2}
                y="198"
                textAnchor="middle"
                className="fill-slate-600 font-mono text-[11px] dark:fill-slate-400"
              >
                Normalized Time (0 to 5τ = {(rc.tauMilliseconds * 5).toFixed(1)} ms)
              </text>

              {/* Summary Card */}
              <rect
                x="312"
                y="32"
                width="214"
                height="145"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
              />
              <text x="325" y="56" className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100">
                Transient Milestones
              </text>
              <text x="325" y="80" className="fill-slate-700 font-mono text-[11px] dark:fill-slate-300">
                τ = R·C = {rc.tauMilliseconds} ms
              </text>
              <text x="325" y="102" className="fill-amber-700 font-mono text-[11px] font-semibold dark:fill-amber-400">
                v_C(1τ) = {rc.vAt1Tau} V (63.2%)
              </text>
              <text x="325" y="124" className="fill-slate-700 font-mono text-[11px] dark:fill-slate-300">
                v_C(3τ) = {rc.vAt3Tau} V (95.0%)
              </text>
              <text x="325" y="146" className="fill-emerald-700 font-mono text-[11px] font-semibold dark:fill-emerald-400">
                v_C(5τ) = {rc.vAt5Tau} V (99.3%)
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-5 print:hidden">
          <div>
            <div className="mb-1 flex justify-between text-xs">
              <label htmlFor="rc-vs-slider" className="font-medium text-slate-700 dark:text-slate-300">
                Step Voltage (V_s)
              </label>
              <span className="font-mono font-semibold tabular-nums">{vs} V</span>
            </div>
            <input
              id="rc-vs-slider"
              type="range"
              min={5}
              max={15}
              step={1}
              value={vs}
              onChange={(e) => setVs(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-xs">
              <label htmlFor="rc-r-slider" className="font-medium text-slate-700 dark:text-slate-300">
                Thevenin Resistance (R)
              </label>
              <span className="font-mono font-semibold tabular-nums">{rKOhm} kΩ</span>
            </div>
            <input
              id="rc-r-slider"
              type="range"
              min={1}
              max={10}
              step={1}
              value={rKOhm}
              onChange={(e) => setRKOhm(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-xs">
              <label htmlFor="rc-c-slider" className="font-medium text-slate-700 dark:text-slate-300">
                Capacitance (C)
              </label>
              <span className="font-mono font-semibold tabular-nums">{cMicroF} μF</span>
            </div>
            <input
              id="rc-c-slider"
              type="range"
              min={1}
              max={10}
              step={1}
              value={cMicroF}
              onChange={(e) => setCMicroF(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const RegularPolygonCadDiagram: React.FC = () => {
  const [sides, setSides] = useState<number>(6);
  const [armLength, setArmLength] = useState<number>(4.0);

  const geom = calculateRegularPolygonGeometry(sides, armLength);

  // Map vertices into SVG viewport (520 x 230)
  const xs = geom.vertices.map((v) => v.x);
  const ys = geom.vertices.map((v) => v.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const polyW = Math.max(0.1, maxX - minX);
  const polyH = Math.max(0.1, maxY - minY);
  const scale = Math.min(190 / polyW, 145 / polyH);

  const centerX = 155;
  const centerY = 115;
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;

  const toSvgX = (x: number) => centerX + (x - midX) * scale;
  const toSvgY = (y: number) => centerY - (y - midY) * scale;

  const svgPoints = geom.vertices
    .map((v) => `${toSvgX(v.x).toFixed(1)},${toSvgY(v.y).toFixed(1)}`)
    .join(' ');

  const circumR = geom.circumradius * scale;

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60 print:border-slate-300 print:bg-white">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div>
          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Interactive Lab 2.1 · Regular Polygon Geometric Explorer & POL Command Simulator
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Vary side count n (3 to 10) and arm length AB to verify interior angle θ = (n−2)×180°/n and circumradius R.
          </p>
        </div>
        <div className="font-mono text-xs font-semibold tabular-nums text-sky-700 dark:text-sky-300">
          {geom.name} (n = {geom.sides}) · θ_int = {geom.interiorAngleDeg}° · R = {geom.circumradius}&quot;
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 print:col-span-12">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <svg
              viewBox="0 0 520 225"
              className="h-auto w-full"
              role="img"
              aria-label={`Interactive regular ${geom.name} construction diagram`}
            >
              {/* Circumcircle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={circumR}
                fill="none"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeDasharray="4 4"
                strokeWidth="1.4"
              />
              <circle cx={centerX} cy={centerY} r="3" className="fill-amber-500" />

              {/* Polygon */}
              <polygon
                points={svgPoints}
                className="fill-sky-500/10 stroke-slate-800 dark:fill-sky-400/10 dark:stroke-slate-200"
                strokeWidth="2.2"
              />

              {/* Highlight Base Arm AB */}
              {geom.vertices.length >= 2 && (
                <line
                  x1={toSvgX(geom.vertices[0].x)}
                  y1={toSvgY(geom.vertices[0].y)}
                  x2={toSvgX(geom.vertices[1].x)}
                  y2={toSvgY(geom.vertices[1].y)}
                  className="stroke-sky-600 dark:stroke-sky-400"
                  strokeWidth="3.5"
                />
              )}

              {/* Vertex nodes and labels */}
              {geom.vertices.map((v) => {
                const vx = toSvgX(v.x);
                const vy = toSvgY(v.y);
                const dx = vx - centerX;
                const dy = vy - centerY;
                const len = Math.max(1, Math.hypot(dx, dy));
                const lx = vx + (dx / len) * 14;
                const ly = vy + (dy / len) * 14;
                return (
                  <g key={v.index}>
                    <circle cx={vx} cy={vy} r="3.5" className="fill-sky-600 dark:fill-sky-400" />
                    <text
                      x={lx}
                      y={ly + 3}
                      textAnchor="middle"
                      className="fill-slate-800 font-mono text-[10px] font-bold dark:fill-slate-200"
                    >
                      {v.label}
                    </text>
                  </g>
                );
              })}

              {/* Right Readout Card */}
              <rect
                x="305"
                y="24"
                width="200"
                height="176"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
              />
              <text x="318" y="46" className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100">
                {geom.name} Parameters
              </text>
              <text x="318" y="68" className="fill-sky-700 font-mono text-xs font-semibold dark:fill-sky-300">
                Interior θ = {geom.interiorAngleDeg}°
              </text>
              <text x="318" y="88" className="fill-slate-700 font-mono text-xs dark:fill-slate-300">
                Exterior φ = {geom.exteriorAngleDeg}°
              </text>
              <text x="318" y="108" className="fill-slate-700 font-mono text-xs dark:fill-slate-300">
                Arm AB = {geom.sideLength.toFixed(1)}&quot;
              </text>
              <text x="318" y="128" className="fill-amber-700 font-mono text-xs font-semibold dark:fill-amber-400">
                Circumradius R = {geom.circumradius}&quot;
              </text>
              <text x="318" y="148" className="fill-slate-700 font-mono text-xs dark:fill-slate-300">
                Apothem r = {geom.apothem}&quot;
              </text>
              <text x="318" y="168" className="fill-emerald-700 font-mono text-xs font-semibold dark:fill-emerald-400">
                Perimeter P = {geom.perimeter}&quot;
              </text>
              <text x="318" y="188" className="fill-slate-500 font-mono text-[10px] dark:fill-slate-400">
                CAD: POL → {geom.sides} → E → 0,0 → {geom.sideLength},0
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-5 print:hidden">
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="poly-sides-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Number of Sides (n)
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {sides} ({geom.name})
              </span>
            </div>
            <input
              id="poly-sides-slider"
              type="range"
              min={3}
              max={10}
              step={1}
              value={sides}
              onChange={(e) => setSides(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
            <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-500">
              <span>n=3 (60°)</span>
              <span>n=5 (108°)</span>
              <span>n=6 (120°)</span>
              <span>n=8 (135°)</span>
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="poly-arm-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Given Arm Length AB (inches)
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {armLength.toFixed(1)}&quot;
              </span>
            </div>
            <input
              id="poly-arm-slider"
              type="range"
              min={2}
              max={8}
              step={0.5}
              value={armLength}
              onChange={(e) => setArmLength(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PRESET_CAD_EXERCISES = [
  {
    id: 'stepped-pyramid',
    label: 'Exp 5.3 · Absolute Stepped Pyramid (15" Base)',
    modeLabel: 'Absolute Rectangular (x,y)',
    steps: [
      '0,0',
      '15,0',
      '15,3',
      '12,3',
      '12,6',
      '9,6',
      '9,9',
      '6,9',
      '6,6',
      '3,6',
      '3,3',
      '0,3',
      '0,0',
    ],
  },
  {
    id: 'staircase-rel',
    label: 'Exp 5.4 · Relative 3-Step Staircase (@Δx,Δy)',
    modeLabel: 'Relative Rectangular (@Δx,Δy)',
    steps: [
      '0,0',
      '@6,0',
      '@0,2',
      '@-2,0',
      '@0,2',
      '@-2,0',
      '@0,2',
      '@-2,0',
      '@0,-6',
    ],
  },
  {
    id: 'polar-triangle',
    label: 'Exp 5.5 · Polar Equilateral Triangle (@5<θ)',
    modeLabel: 'Relative Polar (@r<θ)',
    steps: ['0,0', '@5<0', '@5<120', '@5<240'],
  },
  {
    id: 'polar-rect',
    label: 'Exp 5.6 · Polar Rectangle (@2<0, @1<90)',
    modeLabel: 'Relative Polar (@r<θ)',
    steps: ['0,0', '@2<0', '@1<90', '@2<180', '@1<270'],
  },
];

const AutoCadCommandSimDiagram: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('stepped-pyramid');
  const [activeStepCount, setActiveStepCount] = useState<number>(13);
  const [selectedCommandAlias, setSelectedCommandAlias] = useState<string>('PL');

  const preset =
    PRESET_CAD_EXERCISES.find((p) => p.id === selectedPresetId) ??
    PRESET_CAD_EXERCISES[0];

  const clampedSteps = Math.min(activeStepCount, preset.steps.length);
  const fullPath = parseAutoCadCoordinateSequence(preset.steps);
  const partialPath = parseAutoCadCoordinateSequence(
    preset.steps.slice(0, clampedSteps)
  );

  const selectedCmd =
    PROFESSOR_AUTOCAD_COMMANDS.find((c) => c.alias === selectedCommandAlias) ??
    PROFESSOR_AUTOCAD_COMMANDS[0];

  // Viewport transform for fullPath bounding box
  const bb = fullPath.boundingBox;
  const spanW = Math.max(1, bb.width);
  const spanH = Math.max(1, bb.height);
  const scale = Math.min(220 / spanW, 145 / spanH);

  const padLeft = 45;
  const padBottom = 185;

  const toX = (x: number) => padLeft + (x - bb.minX) * scale;
  const toY = (y: number) => padBottom - (y - bb.minY) * scale;

  const polyPoints = partialPath.vertices
    .map((v) => `${toX(v.x).toFixed(1)},${toY(v.y).toFixed(1)}`)
    .join(' ');

  const handleSelectPreset = (id: string) => {
    const found = PRESET_CAD_EXERCISES.find((p) => p.id === id);
    setSelectedPresetId(id);
    if (found) {
      setActiveStepCount(found.steps.length);
    }
  };

  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60 print:border-slate-300 print:bg-white">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3 dark:border-slate-800">
        <div>
          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-slate-100">
            Interactive CAD Lab · Coordinate Entry Plotter & Practical Exam Command Trainer
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Step through Absolute (x,y), Relative (@Δx,Δy), and Polar (@r&lt;θ) lab exercises or inspect professor-taught command keystrokes.
          </p>
        </div>
        <div className="font-mono text-xs font-semibold tabular-nums text-sky-700 dark:text-sky-300">
          {preset.modeLabel} · Step {clampedSteps}/{preset.steps.length} · Length = {partialPath.totalLength}&quot;
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* Left Zone (60%): Live AutoCAD Model Space Viewport */}
        <div className="space-y-3 lg:col-span-7 print:col-span-12">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 text-slate-100">
            <svg
              viewBox="0 0 520 220"
              className="h-auto w-full"
              role="img"
              aria-label={`AutoCAD coordinate simulation for ${preset.label}`}
            >
              {/* Subtle AutoCAD F7 Grid Lines */}
              {[40, 80, 120, 160, 200].map((gy) => (
                <line
                  key={`gy-${gy}`}
                  x1="20"
                  y1={gy}
                  x2="295"
                  y2={gy}
                  className="stroke-slate-800/80"
                  strokeWidth="0.8"
                />
              ))}
              {[45, 95, 145, 195, 245, 295].map((gx) => (
                <line
                  key={`gx-${gx}`}
                  x1={gx}
                  y1="20"
                  x2={gx}
                  y2="200"
                  className="stroke-slate-800/80"
                  strokeWidth="0.8"
                />
              ))}

              {/* UCS Icon at bottom-left */}
              <line x1="25" y1="195" x2="52" y2="195" className="stroke-rose-500" strokeWidth="1.8" />
              <line x1="25" y1="195" x2="25" y2="168" className="stroke-emerald-500" strokeWidth="1.8" />
              <text x="55" y="198" className="fill-rose-400 font-mono text-[9px] font-bold">X</text>
              <text x="22" y="164" className="fill-emerald-400 font-mono text-[9px] font-bold">Y</text>

              {/* Ghost full profile */}
              <polyline
                fill="none"
                points={fullPath.vertices
                  .map((v) => `${toX(v.x).toFixed(1)},${toY(v.y).toFixed(1)}`)
                  .join(' ')}
                className="stroke-slate-700"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />

              {/* Active drawn polyline */}
              {partialPath.vertices.length > 1 && (
                <polyline
                  fill="none"
                  points={polyPoints}
                  className="stroke-sky-400"
                  strokeWidth="2.8"
                />
              )}

              {/* OSNAP Endpoint Green Squares */}
              {partialPath.vertices.map((v, idx) => {
                const vx = toX(v.x);
                const vy = toY(v.y);
                const isCurrent = idx === partialPath.vertices.length - 1;
                return (
                  <g key={`${v.stepIndex}-${v.rawInput}`}>
                    <rect
                      x={vx - 3.5}
                      y={vy - 3.5}
                      width="7"
                      height="7"
                      className={
                        isCurrent
                          ? 'fill-amber-400 stroke-slate-950'
                          : 'fill-emerald-400/30 stroke-emerald-400'
                      }
                      strokeWidth="1.4"
                    />
                    <text
                      x={vx + 6}
                      y={vy - 5}
                      className="fill-slate-200 font-mono text-[9px]"
                    >
                      {v.rawInput}
                    </text>
                  </g>
                );
              })}

              {/* Command Log Readout Box on Right */}
              <rect
                x="310"
                y="16"
                width="198"
                height="188"
                rx="6"
                className="fill-slate-900 stroke-slate-700"
              />
              <text x="322" y="36" className="fill-sky-400 font-mono text-[11px] font-bold">
                COMMAND PROMPT LOG
              </text>
              <text x="322" y="54" className="fill-slate-300 font-mono text-[10px]">
                Command: L (LINE) ↵
              </text>
              {partialPath.vertices.slice(-6).map((v, i) => (
                <text
                  key={`log-${v.stepIndex}`}
                  x="322"
                  y={74 + i * 18}
                  className="fill-emerald-300 font-mono text-[10px]"
                >
                  Pt {v.stepIndex}: {v.rawInput} → ({v.x},{v.y})
                </text>
              ))}
              <text x="322" y="192" className="fill-amber-300 font-mono text-[10px] font-semibold">
                {partialPath.isClosed ? '● CLOSED PROFILE' : '▲ OPEN PATH'} · L={partialPath.totalLength}&quot;
              </text>
            </svg>
          </div>

          {/* Active Command Drill Banner */}
          <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono font-bold text-sky-700 dark:text-sky-400">
                {selectedCmd.alias} → {selectedCmd.commandName}
              </span>
              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                {selectedCmd.category}
              </span>
            </div>
            <div className="mt-1.5 rounded border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-[11px] font-semibold text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-sky-300">
              {selectedCmd.keystrokeSequence}
            </div>
            <p className="mt-1.5 text-slate-700 dark:text-slate-300">{selectedCmd.purpose}</p>
            <p className="mt-1 font-medium text-amber-800 dark:text-amber-300">
              Practical Tip: {selectedCmd.examTip}
            </p>
          </div>
        </div>

        {/* Right Zone (40%): Interactive Controls */}
        <div className="space-y-4 lg:col-span-5 print:hidden">
          <div>
            <label
              htmlFor="cad-preset-select"
              className="mb-1.5 block text-xs font-semibold text-slate-800 dark:text-slate-200"
            >
              1. Select Lab 05 Coordinate Exercise
            </label>
            <select
              id="cad-preset-select"
              value={selectedPresetId}
              onChange={(e) => handleSelectPreset(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              {PRESET_CAD_EXERCISES.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <label
                htmlFor="cad-step-slider"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Step Through Coordinate Entries
              </label>
              <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-slate-100">
                {clampedSteps} / {preset.steps.length} pts
              </span>
            </div>
            <input
              id="cad-step-slider"
              type="range"
              min={1}
              max={preset.steps.length}
              step={1}
              value={clampedSteps}
              onChange={(e) => setActiveStepCount(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 dark:bg-slate-700 dark:accent-sky-400"
            />
          </div>

          <div>
            <span className="mb-1.5 block text-xs font-semibold text-slate-800 dark:text-slate-200">
              2. Professor’s Practical Exam Command Drill (Click Shortcut)
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {PROFESSOR_AUTOCAD_COMMANDS.map((cmd) => {
                const isSelected = cmd.alias === selectedCommandAlias;
                return (
                  <button
                    key={cmd.alias}
                    type="button"
                    onClick={() => setSelectedCommandAlias(cmd.alias)}
                    className={`min-h-[38px] rounded-md border px-2 py-1 font-mono text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                    }`}
                  >
                    {cmd.alias}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


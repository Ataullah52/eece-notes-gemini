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
              viewBox="0 0 520 220"
              className="h-auto w-full"
              role="img"
              aria-label="Passive Sign Convention circuit diagram showing voltage terminals and current reference arrow"
            >
              {/* Subtle grid lines */}
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
                x1="90"
                y1="55"
                x2="260"
                y2="55"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />
              <line
                x1="260"
                y1="55"
                x2="260"
                y2="75"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />
              <line
                x1="260"
                y1="155"
                x2="260"
                y2="175"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />
              <line
                x1="90"
                y1="175"
                x2="260"
                y2="175"
                className="stroke-slate-700 dark:stroke-slate-300"
                strokeWidth="2.5"
              />

              {/* Terminal nodes a and b */}
              <circle cx="90" cy="55" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
              <circle cx="90" cy="175" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
              <text
                x="68"
                y="60"
                className="fill-slate-700 font-mono text-xs font-semibold dark:fill-slate-300"
              >
                a
              </text>
              <text
                x="68"
                y="180"
                className="fill-slate-700 font-mono text-xs font-semibold dark:fill-slate-300"
              >
                b
              </text>

              {/* Current reference arrow on top wire */}
              {entersPositive ? (
                <line
                  x1="130"
                  y1="55"
                  x2="215"
                  y2="55"
                  className="stroke-sky-600 dark:stroke-sky-400"
                  strokeWidth="3"
                  markerEnd="url(#arrow-current)"
                />
              ) : (
                <line
                  x1="215"
                  y1="55"
                  x2="130"
                  y2="55"
                  className="stroke-sky-600 dark:stroke-sky-400"
                  strokeWidth="3"
                  markerEnd="url(#arrow-current)"
                />
              )}
              <text
                x="172"
                y="40"
                textAnchor="middle"
                className="fill-sky-700 font-mono text-xs font-semibold dark:fill-sky-300"
              >
                i = {current >= 0 ? `+${current}` : current} A
              </text>
              <text
                x="172"
                y="24"
                textAnchor="middle"
                className="fill-slate-500 font-sans text-[11px] dark:fill-slate-400"
              >
                {entersPositive ? '(Enters + Terminal)' : '(Leaves + Terminal)'}
              </text>

              {/* General Two-Terminal Circuit Element Box */}
              <rect
                x="205"
                y="75"
                width="110"
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

              {/* Polarity Signs inside/near element */}
              <text
                x="185"
                y="93"
                textAnchor="middle"
                className="fill-amber-600 font-mono text-base font-bold dark:fill-amber-400"
              >
                +
              </text>
              <text
                x="185"
                y="120"
                textAnchor="middle"
                className="fill-slate-800 font-mono text-xs font-semibold dark:fill-slate-200"
              >
                v = {voltage >= 0 ? `+${voltage}` : voltage} V
              </text>
              <text
                x="185"
                y="150"
                textAnchor="middle"
                className="fill-amber-600 font-mono text-base font-bold dark:fill-amber-400"
              >
                −
              </text>

              {/* Element Title & Computed Power inside Box */}
              <text
                x="260"
                y="108"
                textAnchor="middle"
                className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100"
              >
                Circuit Element
              </text>
              <text
                x="260"
                y="128"
                textAnchor="middle"
                className="fill-slate-800 font-mono text-xs font-bold dark:fill-slate-200"
              >
                p = {result.signedPowerWatts >= 0 ? `+${result.signedPowerWatts}` : result.signedPowerWatts} W
              </text>
              <text
                x="260"
                y="145"
                textAnchor="middle"
                className="fill-slate-600 font-sans text-[10px] dark:fill-slate-400"
              >
                {isAbsorbing
                  ? 'Absorbing Energy'
                  : isSupplying
                    ? 'Supplying Energy'
                    : 'Idle (0 W)'}
              </text>

              {/* Right-side summary equations in SVG for clean PDF print */}
              <rect
                x="340"
                y="55"
                width="165"
                height="120"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
                strokeWidth="1.2"
              />
              <text
                x="352"
                y="78"
                className="fill-slate-500 font-sans text-[11px] font-medium dark:fill-slate-400"
              >
                Governing Sign Equation:
              </text>
              <text
                x="352"
                y="98"
                className="fill-slate-900 font-mono text-xs font-semibold dark:fill-slate-100"
              >
                {result.formulaUsed}
              </text>
              <text
                x="352"
                y="124"
                className="fill-slate-500 font-sans text-[11px] font-medium dark:fill-slate-400"
              >
                Substitution:
              </text>
              <text
                x="352"
                y="142"
                className="fill-slate-900 font-mono text-xs font-semibold dark:fill-slate-100"
              >
                p = {entersPositive ? '+' : '−'}({voltage})({current}) = {result.signedPowerWatts} W
              </text>
              <text
                x="352"
                y="163"
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
              viewBox="0 0 520 210"
              className="h-auto w-full"
              role="img"
              aria-label="Ohm's Law linear I-V characteristic plot and circuit parameters"
            >
              {/* Coordinate Axes for I-V Curve */}
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={plotLeft + plotWidth + 15}
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
                x={Math.min(pointX + 10, 220)}
                y={Math.max(pointY - 8, 35)}
                className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100"
              >
                ({voltage}V, {state.currentMilliamps}mA)
              </text>

              {/* Right Readout Box */}
              <rect
                x="310"
                y="35"
                width="195"
                height="145"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
                strokeWidth="1.2"
              />
              <text
                x="324"
                y="58"
                className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100"
              >
                Operating Point Telemetry
              </text>
              <text
                x="324"
                y="82"
                className="fill-slate-700 font-mono text-xs dark:fill-slate-300"
              >
                Resistance R = {resistance} Ω
              </text>
              <text
                x="324"
                y="104"
                className="fill-slate-700 font-mono text-xs dark:fill-slate-300"
              >
                Slope G = 1/R = {state.conductanceMillisievert} mS
              </text>
              <text
                x="324"
                y="126"
                className="fill-sky-700 font-mono text-xs font-semibold dark:fill-sky-300"
              >
                Current I = V/R = {state.currentMilliamps} mA
              </text>
              <text
                x="324"
                y="148"
                className="fill-amber-700 font-mono text-xs font-semibold dark:fill-amber-400"
              >
                Power P = V²/R = {state.powerWatts} W
              </text>
              <text
                x="324"
                y="168"
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
              viewBox="0 0 520 220"
              className="h-auto w-full"
              role="img"
              aria-label="Two-loop KCL and KVL circuit schematic with central Node A"
            >
              {/* Outer Frame Wires */}
              <line x1="70" y1="50" x2="450" y2="50" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="70" y1="50" x2="70" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="450" y1="50" x2="450" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="70" y1="175" x2="450" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
              <line x1="260" y1="50" x2="260" y2="175" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />

              {/* Central Node A */}
              <circle cx="260" cy="50" r="5" className="fill-sky-600 dark:fill-sky-400" />
              <text x="260" y="34" textAnchor="middle" className="fill-sky-700 font-mono text-xs font-bold dark:fill-sky-300">
                Node A (V_A = {solved.nodeVoltageVa} V)
              </text>

              {/* Left Source V1 */}
              <circle cx="70" cy="115" r="18" className="fill-white stroke-slate-800 dark:fill-slate-900 dark:stroke-slate-200" strokeWidth="2" />
              <text x="70" y="112" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">+</text>
              <text x="70" y="126" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">−</text>
              <text x="28" y="118" textAnchor="middle" className="fill-slate-800 font-mono text-xs font-semibold dark:fill-slate-200">
                {v1}V
              </text>

              {/* Right Source V2 */}
              <circle cx="450" cy="115" r="18" className="fill-white stroke-slate-800 dark:fill-slate-900 dark:stroke-slate-200" strokeWidth="2" />
              <text x="450" y="112" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">+</text>
              <text x="450" y="126" textAnchor="middle" className="fill-slate-900 font-mono text-xs font-bold dark:fill-slate-100">−</text>
              <text x="492" y="118" textAnchor="middle" className="fill-slate-800 font-mono text-xs font-semibold dark:fill-slate-200">
                {v2}V
              </text>

              {/* Resistor R1 Box */}
              <rect x="135" y="38" width="65" height="24" rx="4" className="fill-amber-50 stroke-amber-600 dark:fill-amber-950 dark:stroke-amber-400" strokeWidth="1.8" />
              <text x="167" y="54" textAnchor="middle" className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100">
                R₁={r1}Ω
              </text>
              <text x="167" y="28" textAnchor="middle" className="fill-sky-700 font-mono text-[11px] font-semibold dark:fill-sky-300">
                i₁ → {solved.i1Milliamps} mA
              </text>

              {/* Resistor R2 Box */}
              <rect x="320" y="38" width="65" height="24" rx="4" className="fill-amber-50 stroke-amber-600 dark:fill-amber-950 dark:stroke-amber-400" strokeWidth="1.8" />
              <text x="352" y="54" textAnchor="middle" className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100">
                R₂={r2}Ω
              </text>
              <text x="352" y="28" textAnchor="middle" className="fill-sky-700 font-mono text-[11px] font-semibold dark:fill-sky-300">
                ← i₂ {solved.i2Milliamps} mA
              </text>

              {/* Central Resistor R3 Box */}
              <rect x="230" y="95" width="60" height="36" rx="4" className="fill-amber-50 stroke-amber-600 dark:fill-amber-950 dark:stroke-amber-400" strokeWidth="1.8" />
              <text x="260" y="112" textAnchor="middle" className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100">
                R₃={r3}Ω
              </text>
              <text x="260" y="125" textAnchor="middle" className="fill-sky-700 font-mono text-[10px] font-semibold dark:fill-sky-300">
                ↓ i₃={solved.i3Milliamps}mA
              </text>

              {/* Ground Reference Node */}
              <circle cx="260" cy="175" r="4" className="fill-slate-800 dark:fill-slate-200" />
              <text x="260" y="196" textAnchor="middle" className="fill-slate-600 font-mono text-[11px] dark:fill-slate-400">
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
              viewBox="0 0 520 210"
              className="h-auto w-full"
              role="img"
              aria-label="RC capacitor charging curve over 5 time constants"
            >
              <line
                x1={plotLeft}
                y1={plotBottom}
                x2={plotLeft + plotWidth + 15}
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
                className="fill-slate-900 font-mono text-[11px] font-semibold dark:fill-slate-100"
              >
                1τ ({rc.tauMilliseconds} ms): {rc.vAt1Tau} V (63.2%)
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
                x="320"
                y="35"
                width="185"
                height="140"
                rx="6"
                className="fill-slate-50 stroke-slate-200 dark:fill-slate-900 dark:stroke-slate-800"
              />
              <text x="332" y="58" className="fill-slate-900 font-display text-xs font-semibold dark:fill-slate-100">
                Transient Milestones
              </text>
              <text x="332" y="82" className="fill-slate-700 font-mono text-xs dark:fill-slate-300">
                τ = R·C = {rc.tauMilliseconds} ms
              </text>
              <text x="332" y="104" className="fill-amber-700 font-mono text-xs font-semibold dark:fill-amber-400">
                v_C(1τ) = {rc.vAt1Tau} V (63.2%)
              </text>
              <text x="332" y="126" className="fill-slate-700 font-mono text-xs dark:fill-slate-300">
                v_C(3τ) = {rc.vAt3Tau} V (95.0%)
              </text>
              <text x="332" y="148" className="fill-emerald-700 font-mono text-xs font-semibold dark:fill-emerald-400">
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

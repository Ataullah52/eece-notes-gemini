import { Chapter } from '../../../types';

export const ch06: Chapter = {
  id: 'unit-06',
  number: 'Module 06',
  title: 'AC Fundamentals, Phasors, Power, Resonance & Magnetic Circuits',
  summary: 'Complete mastery of sinusoidal steady-state analysis, phase relationships, RMS and average values, instantaneous and complex power, atan2 four-quadrant phasor angles, impedance and admittance sign conventions, series/parallel RL-RC-RLC networks, resonance, and magnetic circuits.',
  estimatedMinutes: 195,
  blocks: [
    {
      id: 'u06-b1',
      type: 'memorize',
      title: 'Sinusoidal Waveforms, Phase Difference & Core AC Definitions',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceRef: 'Sinusoidal Functions Handout pp. 1–2 · Class Notes pp. 11–13 · PYQ 2025 Q6a, 2023 Q6a, 2023 Q8a, 2022 Q6a, 2021 Q7a',
      content: `A **sinusoidal waveform** is an alternating voltage or current that varies periodically according to the cosine (or sine) function:
$$x(t) = X_m \cos(\omega t + \theta)$$
where $x(t)$ is the instantaneous value at time $t$, $X_m$ is the **amplitude (peak or maximum value)**, $\omega = 2\pi f = \frac{2\pi}{T}$ is the **angular frequency** in $\text{rad/s}$, $f = \frac{1}{T}$ is the **cyclic frequency** in $\text{Hz}$ (cycles/second), $T$ is the **time period** in seconds, $(\omega t + \theta)$ is the **instantaneous phase**, and $\theta$ is the **initial phase angle** at $t = 0$.

### Phase Difference & Leading/Lagging Rules
For two sinusoids of the **same frequency** expressed in the same trigonometric form with positive amplitudes:
$$v(t) = V_m \cos(\omega t + \theta_v), \qquad i(t) = I_m \cos(\omega t + \theta_i)$$
the **phase difference** (or power factor angle) is:
$$\phi = \theta_v - \theta_i$$
- **Resistive ($\phi = 0^\circ \iff \theta_v = \theta_i$)**: Voltage and current are **in phase**; they reach their peaks and zero crossings simultaneously.
- **Inductive / Lagging ($\phi > 0^\circ \iff \theta_v > \theta_i$)**: Voltage **leads** current by $\phi$, or equivalently current **lags** voltage by $\phi$.
- **Capacitive / Leading ($\phi < 0^\circ \iff \theta_v < \theta_i$)**: Current **leads** voltage by $|\phi|$, or equivalently voltage **lags** current by $|\phi|$.

### Mandatory Trigonometric Identities for Phase Comparison
Before comparing phase angles, both waveforms **must** have: (1) positive amplitudes ($X_m > 0$), (2) the same angular frequency $\omega$, and (3) the same trigonometric function (both $\cos$ or both $\sin$):
$$\sin(\omega t + \theta) = \cos(\omega t + \theta - 90^\circ), \qquad \cos(\omega t + \theta) = \sin(\omega t + \theta + 90^\circ)$$
$$-\cos(\omega t + \theta) = \cos(\omega t + \theta \pm 180^\circ), \qquad -\sin(\omega t + \theta) = \sin(\omega t + \theta \pm 180^\circ) = \cos(\omega t + \theta + 90^\circ)$$`,
      memorizeStatements: [
        'Instantaneous Value: The value of an alternating voltage or current at any particular instant of time t, denoted v(t) or i(t).',
        'Time Period (T) & Frequency (f): The timePeriod T = 2π/ω is the time in seconds required to complete one full cycle; frequency f = 1/T = ω/(2π) is the number of cycles completed per second (Hz).',
        'Phasor: A complex number X = X_m ∠θ (or X_rms ∠θ) that represents the magnitude and initial phase angle of a sinusoid of fixed angular frequency ω via Euler’s identity e^(jφ) = cos φ + j sin φ, such that x(t) = Re{X_m e^(jθ) e^(jωt)}.',
        'Effective (RMS) Value: The root-mean-square value of a periodic current is the steady DC current that delivers the same average power to a given resistor R over one complete period T: X_rms = sqrt((1/T) ∫_0^T x²(t) dt). For a pure sinusoid, X_rms = X_m / √2 ≈ 0.7071 X_m.',
        'Average Value of a Sinusoid: Over a full cycle, X_avg = 0; over a positive half-cycle, X_avg = (2/π) X_m ≈ 0.6366 X_m. Form Factor K_f = X_rms / X_avg = π / (2√2) ≈ 1.11; Peak (Crest) Factor K_p = X_m / X_rms = √2 ≈ 1.414.',
        'Power Factor (pf): The cosine of the phase angle between voltage and current (pf = cos(θ_v − θ_i) = P / S = R / |Z|), equal to the ratio of real average power P (W) to apparent power S (VA). It is called lagging when current lags voltage (inductive load) and leading when current leads voltage (capacitive load).',
      ],
      equations: [
        {
          label: 'Sinusoidal Waveform, Angular Frequency & Phase Angle',
          latex: 'x(t) = X_m\\cos(\\omega t + \\theta), \\qquad \\omega = 2\\pi f = \\frac{2\\pi}{T}, \\qquad \\phi = \\theta_v - \\theta_i',
          boxed: true,
        },
        {
          label: 'RMS Value, Half-Cycle Average & Form Factor of a Sinusoid',
          latex: 'X_{\\text{rms}} = \\frac{X_m}{\\sqrt{2}} \\approx 0.7071\\,X_m, \\qquad X_{\\text{avg, half}} = \\frac{2X_m}{\\pi} \\approx 0.6366\\,X_m, \\qquad K_f = \\frac{X_{\\text{rms}}}{X_{\\text{avg, half}}} = 1.11',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Worked Example (Handout Example 1)**: For $i(t) = 10\\cos(100\\pi t + 30^\\circ)\\text{ A}$, find (a) amplitude, (b) $\\omega$, (c) $f$, (d) $T$, (e) initial phase, and (f) $i(5\\text{ ms})$:',
        '$$(a)\\; I_m = 10\\text{ A}, \\qquad (b)\\; \\omega = 100\\pi \\approx 314.16\\text{ rad/s}, \\qquad (c)\\; f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50\\text{ Hz}$$',
        '$$(d)\\; T = \\frac{1}{f} = \\frac{1}{50} = 0.02\\text{ s} = 20\\text{ ms}, \\qquad (e)\\; \\theta = 30^\\circ = \\frac{\\pi}{6}\\text{ rad}$$',
        'At $t = 5\\text{ ms} = 0.005\\text{ s}$, convert $\\omega t = 100\\pi(0.005) = 0.5\\pi\\text{ rad} = 90^\\circ$:',
        '$$(f)\\; i(0.005) = 10\\cos(90^\\circ + 30^\\circ) = 10\\cos(120^\\circ) = 10(-0.5) = -5\\text{ A}$$',
      ],
      finalAnswer: '∴ I_m = 10 A, ω = 314.16 rad/s, f = 50 Hz, T = 20 ms, θ = 30°, and i(5 ms) = -5 A.',
    },
    {
      id: 'u06-b2',
      type: 'theory',
      title: 'Instantaneous Power, RMS Derivation, Average Power & Complex Power',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceRef: 'Sinusoidal Functions Handout pp. 2–3 · PYQ 2023 Q8a–b, 2022 Q6b, 2022 Q7a, 2021 Q7a',
      content: `### 1. Derivation of Instantaneous & Average Power in AC Circuits
Let the terminal voltage and current of an AC two-terminal network be:
$$v(t) = V_m \cos(\omega t + \theta_v), \qquad i(t) = I_m \cos(\omega t + \theta_i)$$
The **instantaneous power** $p(t) = v(t)\,i(t)$ is found using the product-to-sum identity $\cos A \cos B = \frac{1}{2}[\cos(A - B) + \cos(A + B)]$:
$$p(t) = V_m I_m \cos(\omega t + \theta_v)\cos(\omega t + \theta_i) = \frac{V_m I_m}{2}\cos(\theta_v - \theta_i) + \frac{V_m I_m}{2}\cos(2\omega t + \theta_v + \theta_i)$$
Letting $\phi = \theta_v - \theta_i$ and $V_{\text{rms}} = V_m/\sqrt{2}$, $I_{\text{rms}} = I_m/\sqrt{2}$, so $\frac{V_m I_m}{2} = V_{\text{rms}}I_{\text{rms}}$:
$$p(t) = \underbrace{V_{\text{rms}}I_{\text{rms}}\cos\phi}_{\text{Constant DC component } P} + \underbrace{V_{\text{rms}}I_{\text{rms}}\cos(2\omega t + \theta_v + \theta_i)}_{\text{Sinusoidal component at } 2\omega}$$
Integrating over one complete period $T = 2\pi/\omega$, the double-frequency cosine averages to zero, giving the **average (real or active) power**:
$$P = \frac{1}{T}\int_0^T p(t)\,dt = \frac{1}{2}V_m I_m \cos(\theta_v - \theta_i) = V_{\text{rms}}I_{\text{rms}}\cos\phi \quad [\text{W}]$$

### 2. Proof That a Purely Reactive Load Absorbs Zero Average Power (PYQ 2023 Q8b)
- For a **purely inductive load** ($Z = j\omega L$), voltage leads current by $\phi = \theta_v - \theta_i = +90^\circ$.
- For a **purely capacitive load** ($Z = -j/(\omega C)$), voltage lags current by $\phi = \theta_v - \theta_i = -90^\circ$.
In either purely reactive case, $\cos\phi = \cos(\pm 90^\circ) = 0$. Substituting into the instantaneous power equation gives:
$$p(t) = V_{\text{rms}}I_{\text{rms}}\cos(\pm 90^\circ) + V_{\text{rms}}I_{\text{rms}}\cos(2\omega t + \theta_v + \theta_i) = V_{\text{rms}}I_{\text{rms}}\cos(2\omega t + \theta_v + \theta_i)$$
Over one full cycle $T$, energy is alternately stored in the magnetic/electric field during one quarter-cycle and returned completely to the source during the next quarter-cycle:
$$P = \frac{1}{T}\int_0^T p(t)\,dt = V_{\text{rms}}I_{\text{rms}}\cos(\pm 90^\circ) = 0\text{ W}$$

### 3. Derivation of Sinusoidal RMS Value from Equal Heating Power
Passing $i(t) = I_m \cos(\omega t + \theta)$ through a resistor $R$ produces average power:
$$P = \frac{1}{T}\int_0^T i^2(t)R\,dt = \frac{I_m^2 R}{T}\int_0^T \frac{1 + \cos(2\omega t + 2\theta)}{2}\,dt = \frac{I_m^2 R}{2}$$
Equating this to the DC power $P = I_{\text{rms}}^2 R$ gives $I_{\text{rms}}^2 R = \frac{1}{2}I_m^2 R \implies I_{\text{rms}} = \frac{I_m}{\sqrt{2}} \approx 0.7071\,I_m$.

### 4. Complex Power, Reactive Power & Power Factor Correction (PYQ 2022 Q7a, 2021 Q7a)
With RMS phasors $\underline{V} = V_{\text{rms}}\angle\theta_v$ and $\underline{I} = I_{\text{rms}}\angle\theta_i$, the **complex power** is:
$$\underline{S} = \underline{V}\,\underline{I}^* = V_{\text{rms}}I_{\text{rms}}\angle(\theta_v - \theta_i) = S\angle\phi = P + jQ$$
- **Apparent Power**: $S = |\underline{S}| = V_{\text{rms}}I_{\text{rms}} = I_{\text{rms}}^2 |Z|\quad [\text{VA}]$
- **Real (Average) Power**: $P = \operatorname{Re}\{\underline{S}\} = S\cos\phi = I_{\text{rms}}^2 R\quad [\text{W}]$
- **Reactive Power**: $Q = \operatorname{Im}\{\underline{S}\} = S\sin\phi = I_{\text{rms}}^2 X\quad [\text{VAR}]$ ($Q > 0$ for inductive loads; $Q < 0$ for capacitive loads).
- **Power Factor Correction**: Industrial inductive loads ($P$, lagging angle $\phi_1$) draw large reactive power $Q_1 = P\tan\phi_1$, increasing line current $I = P/(V_{\text{rms}}\cos\phi_1)$ and $I^2R_{\text{line}}$ losses. Connecting a **shunt capacitor $C$ in parallel** with the load supplies leading reactive power $Q_C = \omega C V_{\text{rms}}^2 = Q_1 - Q_2 = P(\tan\phi_1 - \tan\phi_2)$ to raise the power factor from $\cos\phi_1$ to $\cos\phi_2$ without altering the real power $P$:
$$C = \frac{P(\tan\phi_1 - \tan\phi_2)}{\omega V_{\text{rms}}^2} = \frac{P(\tan\phi_1 - \tan\phi_2)}{2\pi f V_{\text{rms}}^2}$$`,
      equations: [
        {
          label: 'Instantaneous Power & Average Power',
          latex: 'p(t) = V_{\\text{rms}}I_{\\text{rms}}\\cos\\phi + V_{\\text{rms}}I_{\\text{rms}}\\cos(2\\omega t + \\theta_v + \\theta_i), \\qquad P = \\frac{1}{2}V_m I_m\\cos(\\theta_v - \\theta_i) = V_{\\text{rms}}I_{\\text{rms}}\\cos\\phi',
          boxed: true,
        },
        {
          label: 'Complex Power Triangle & Shunt Capacitor for Power Factor Correction',
          latex: '\\underline{S} = \\underline{V}\\,\\underline{I}^* = P + jQ = I_{\\text{rms}}^2 R + jI_{\\text{rms}}^2 X, \\qquad C = \\frac{P(\\tan\\phi_1 - \\tan\\phi_2)}{\\omega V_{\\text{rms}}^2}',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Worked Example 1 (Handout Example 2)**: Given $v(t) = 100\\sqrt{2}\\cos(314t + 30^\\circ)\\text{ V}$ and $i(t) = 5\\sqrt{2}\\cos(314t - 30^\\circ)\\text{ A}$, find $V_{\\text{rms}}, I_{\\text{rms}}, \\phi, P$, and $p(t)$:',
        '$$V_{\\text{rms}} = \\frac{100\\sqrt{2}}{\\sqrt{2}} = 100\\text{ V}, \\qquad I_{\\text{rms}} = \\frac{5\\sqrt{2}}{\\sqrt{2}} = 5\\text{ A}, \\qquad \\phi = \\theta_v - \\theta_i = 30^\\circ - (-30^\\circ) = 60^\\circ\\text{ (inductive/lagging)}$$',
        '$$P = V_{\\text{rms}}I_{\\text{rms}}\\cos 60^\\circ = (100)(5)(0.5) = 250\\text{ W}, \\qquad p(t) = 250 + (100)(5)\\cos(628t + 0^\\circ) = 250 + 500\\cos(628t)\\text{ W}$$',
        '**Worked Example 2 (PYQ 2022 Q6b)**: Given $v(t) = 120\\cos(377t + 45^\\circ)\\text{ V}$ and $i(t) = 10\\cos(377t - 10^\\circ)\\text{ A}$, find $p(t)$ and $P$:',
        'Here $V_m = 120\\text{ V}$, $I_m = 10\\text{ A}$, $\\phi = 45^\\circ - (-10^\\circ) = 55^\\circ$, and $\\theta_v + \\theta_i = 35^\\circ$. Since $\\frac{1}{2}V_m I_m = 600\\text{ W}$:',
        '$$P = 600\\cos(55^\\circ) = 600(0.57358) = 344.15\\text{ W}, \\qquad p(t) = 344.15 + 600\\cos(754t + 35^\\circ)\\text{ W}$$',
      ],
      finalAnswer: '∴ Handout Ex 2: P = 250 W, p(t) = 250 + 500 cos(628t) W; PYQ 2022 Q6b: P = 344.15 W, p(t) = 344.15 + 600 cos(754t + 35°) W.',
    },
    {
      id: 'u06-b3',
      type: 'theory',
      title: 'Two-Argument Arctangent atan2(y, x) & Four-Quadrant Phasor Angles',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceRef: 'Sinusoidal Function Bangla Handout pp. 1–7 · Sinusoidal Functions Handout pp. 4–5',
      content: `### 1. Why Ordinary $\tan^{-1}(y/x)$ Fails in Quadrants II and III
For any complex number $z = x + jy$ (or impedance $Z = R + jX$), the magnitude is $|z| = \sqrt{x^2 + y^2}$ and the phase angle $\theta$ is measured from the positive real axis into $(-180^\circ, 180^\circ]$.
- The single-argument function $\tan^{-1}(y/x)$ only receives the **single ratio** $m = y/x$ and always returns a principal value strictly in $(-90^\circ, +90^\circ)$ (Quadrants I and IV).
- Because $\frac{+4}{-3} = -\frac{4}{3}$ and $\frac{-4}{+3} = -\frac{4}{3}$, the ratio $y/x$ destroys the individual signs of $x$ and $y$! Thus $\tan^{-1}(4/(-3)) = -53.13^\circ$ (wrongly placing $-3 + j4$ in Quadrant IV instead of Quadrant II, where $\theta = +126.87^\circ$).
- Similarly, for $-3 - j4$ in Quadrant III, $\frac{-4}{-3} = +\frac{4}{3}$, so $\tan^{-1}((-4)/(-3)) = +53.13^\circ$ (wrongly placing it in Quadrant I instead of Quadrant III, where $\theta = -126.87^\circ$).

### 2. The Two-Argument Arctangent $\operatorname{atan2}(y, x)$
The function $\operatorname{atan2}(y, x)$ takes the **imaginary part $y$ first and the real part $x$ second** as two separate arguments:
$$\theta = \operatorname{atan2}(y, x), \qquad \theta_Z = \operatorname{atan2}(X, R), \qquad \theta_Y = \operatorname{atan2}(B, G)$$
Let the acute reference angle be $\alpha = \tan^{-1}\!\left(\frac{|y|}{|x|}\right) \in (0^\circ, 90^\circ)$:

| Quadrant / Axis | Signs of $(x, y)$ | Formula for Principal Angle $\theta \in (-180^\circ, 180^\circ]$ | Numeric Example ($|x|=3, |y|=4, \alpha = 53.13^\circ$) |
| :--- | :--- | :--- | :--- |
| **Quadrant I** | $x > 0,\; y > 0$ | $\theta = +\alpha = \tan^{-1}(y/x)$ | $3 + j4 = 5\angle 53.13^\circ$ |
| **Quadrant II** | $x < 0,\; y > 0$ | $\theta = 180^\circ - \alpha = \tan^{-1}(y/x) + 180^\circ$ | $-3 + j4 = 5\angle 126.87^\circ$ |
| **Quadrant III** | $x < 0,\; y < 0$ | $\theta = -180^\circ + \alpha = \tan^{-1}(y/x) - 180^\circ$ | $-3 - j4 = 5\angle(-126.87^\circ)$ |
| **Quadrant IV** | $x > 0,\; y < 0$ | $\theta = -\alpha = \tan^{-1}(y/x)$ | $3 - j4 = 5\angle(-53.13^\circ)$ |
| **Positive Real Axis** | $x > 0,\; y = 0$ | $\theta = 0^\circ$ | $5 + j0 = 5\angle 0^\circ$ |
| **Positive Imag Axis** | $x = 0,\; y > 0$ | $\theta = +90^\circ$ (Pure inductor $Z = jX_L$) | $0 + j4 = 4\angle 90^\circ$ |
| **Negative Real Axis** | $x < 0,\; y = 0$ | $\theta = 180^\circ$ | $-5 + j0 = 5\angle 180^\circ$ |
| **Negative Imag Axis** | $x = 0,\; y < 0$ | $\theta = -90^\circ$ (Pure capacitor $Z = -jX_C$) | $0 - j4 = 4\angle(-90^\circ)$ |

### 3. Six Common Mistakes Highlighted in Class
1. **Swapping argument order**: Writing $\operatorname{atan2}(x, y)$ instead of $\operatorname{atan2}(y, x)$ (remember: **imaginary part $y$ or $X$ comes first, real part $x$ or $R$ second**).
2. **Blindly trusting calculator $\tan^{-1}(y/x)$** when the real part $x < 0$ (Quadrants II and III).
3. **Confusing $+90^\circ$ and $-90^\circ$** when $x = 0$ ($+jX_L \to +90^\circ$, $-jX_C \to -90^\circ$).
4. **Degree vs. Radian mode** mismatch on the calculator when evaluating $\cos(\omega t + \theta)$.
5. **Forgetting to normalize principal angles** into $(-180^\circ, 180^\circ]$ by adding or subtracting $360^\circ$.
6. **Dropping the minus sign on capacitive reactance** ($X = -X_C < 0$ in $Z = R + jX$).`,
      equations: [
        {
          label: 'Piecewise Definition of atan2(y, x)',
          latex: '\\operatorname{atan2}(y, x) = \\begin{cases} \\tan^{-1}(y/x), & x > 0 \\\\ \\tan^{-1}(y/x) + 180^\\circ, & x < 0,\\; y \\ge 0 \\\\ \\tan^{-1}(y/x) - 180^\\circ, & x < 0,\\; y < 0 \\\\ +90^\\circ, & x = 0,\\; y > 0 \\\\ -90^\\circ, & x = 0,\\; y < 0 \\end{cases}',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Verification across all 4 Quadrants for $|x| = 3, |y| = 4$ ($|z| = \\sqrt{3^2 + 4^2} = 5$, $\\alpha = \\tan^{-1}(4/3) = 53.13^\\circ$)**:',
        '1. **QI ($z_1 = 3 + j4$)**: $x = 3 > 0, y = 4 > 0 \\implies \\theta_1 = \\operatorname{atan2}(4, 3) = +53.13^\\circ \\implies 5\\angle 53.13^\\circ$.',
        '2. **QII ($z_2 = -3 + j4$)**: $x = -3 < 0, y = 4 > 0 \\implies \\theta_2 = 180^\\circ - 53.13^\\circ = +126.87^\\circ \\implies 5\\angle 126.87^\\circ$.',
        '3. **QIII ($z_3 = -3 - j4$)**: $x = -3 < 0, y = -4 < 0 \\implies \\theta_3 = -180^\\circ + 53.13^\\circ = -126.87^\\circ \\implies 5\\angle(-126.87^\\circ)$.',
        '4. **QIV ($z_4 = 3 - j4$)**: $x = 3 > 0, y = -4 < 0 \\implies \\theta_4 = -53.13^\\circ \\implies 5\\angle(-53.13^\\circ)$.',
      ],
      finalAnswer: '∴ 3 + j4 = 5∠53.13° (QI), −3 + j4 = 5∠126.87° (QII), −3 − j4 = 5∠(−126.87°) (QIII), and 3 − j4 = 5∠(−53.13°) (QIV).',
    },
    {
      id: 'u06-b4',
      type: 'pyq',
      title: 'Phase Angle Comparison Problems from Past Semester Exams',
      priorityTier: 1,
      secondaryPriorityTiers: [2],
      sourceRef: 'PYQ 2023 Q6a · PYQ 2022 Q5c · PYQ 2022 Q7b · PYQ 2021 Q7b',
      content: `**Problem Statement (Compiled Past Exam Questions)**:
1. **(2023 Q6a — 3 Marks)** Calculate the phase angle between $i(t) = -4\sin(377t + 55^\circ)\text{ A}$ and $v(t) = 5\cos(377t - 65^\circ)\text{ V}$. State clearly which sinusoid leads.
2. **(2022 Q5c — 3 Marks)** Calculate the phase angle between $v_1(t) = -10\cos(\omega t + 50^\circ)\text{ V}$ and $v_2(t) = 12\sin(\omega t - 10^\circ)\text{ V}$. State which sinusoid leads.
3. **(2022 Q7b & 2021 Q7b — 5 Marks)** Determine the phase relationship between the following waveforms and state which leads:
   - **(i)** $v(t) = 10\sin(\omega t - 20^\circ)\text{ V}$ and $i(t) = 15\sin(\omega t + 60^\circ)\text{ A}$
   - **(ii)** $i(t) = -\sin(\omega t + 30^\circ)\text{ A}$ and $v(t) = 2\sin(\omega t + 10^\circ)\text{ V}$`,
      equations: [
        {
          label: 'Sine/Cosine Sign-Flip Conversion Rule',
          latex: '-\\sin(\\omega t + \\alpha) = \\cos(\\omega t + \\alpha + 90^\\circ) = \\sin(\\omega t + \\alpha \\pm 180^\\circ), \\qquad -\\cos(\\omega t + \\alpha) = \\cos(\\omega t + \\alpha \\pm 180^\\circ)',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Part 1 (2023 Q6a)**: Convert $i(t) = -4\\sin(377t + 55^\\circ)$ to positive-amplitude cosine form using $-\\sin(\\theta) = \\cos(\\theta + 90^\\circ)$:',
        '$$i(t) = 4\\cos(377t + 55^\\circ + 90^\\circ) = 4\\cos(377t + 145^\\circ)\\text{ A}, \\qquad v(t) = 5\\cos(377t - 65^\\circ)\\text{ V}$$',
        'Taking the phase difference $\\theta_i - \\theta_v = 145^\\circ - (-65^\\circ) = 210^\\circ$. Since $210^\\circ > 180^\\circ$, subtract $360^\\circ$: $\\theta_i - \\theta_v = 210^\\circ - 360^\\circ = -150^\\circ$ (or $\\theta_v - \\theta_i = +150^\\circ$, since $-65^\\circ \\equiv +295^\\circ$ and $295^\\circ - 145^\\circ = 150^\\circ$).',
        'Therefore, **$v(t)$ leads $i(t)$ by $150^\\circ$** (or $i(t)$ lags $v(t)$ by $150^\\circ$).',
        '**Part 2 (2022 Q5c)**: Convert both $v_1$ and $v_2$ to positive-amplitude cosine form:',
        '$$v_1(t) = -10\\cos(\\omega t + 50^\\circ) = 10\\cos(\\omega t + 50^\\circ - 180^\\circ) = 10\\cos(\\omega t - 130^\\circ)\\text{ V}$$',
        '$$v_2(t) = 12\\sin(\\omega t - 10^\\circ) = 12\\cos(\\omega t - 10^\\circ - 90^\\circ) = 12\\cos(\\omega t - 100^\\circ)\\text{ V}$$',
        'Comparing phases: $\\theta_2 - \\theta_1 = -100^\\circ - (-130^\\circ) = +30^\\circ$. Thus **$v_2(t)$ leads $v_1(t)$ by $30^\\circ$**.',
        '**Part 3(i) (2022/2021 Q7b-i)**: Both are already in positive-amplitude sine form: $\\theta_v = -20^\\circ$ and $\\theta_i = +60^\\circ$.',
        '$$\\Delta\\theta = \\theta_i - \\theta_v = 60^\\circ - (-20^\\circ) = 80^\\circ \\implies \\mathbf{i(t)\\text{ leads }v(t)\\text{ by }80^\\circ}$$',
        '**Part 3(ii) (2022/2021 Q7b-ii)**: Convert $i(t) = -\\sin(\\omega t + 30^\\circ)$ to positive-amplitude sine form by subtracting $180^\\circ$:',
        '$$i(t) = 1\\sin(\\omega t + 30^\\circ - 180^\\circ) = 1\\sin(\\omega t - 150^\\circ)\\text{ A}, \\qquad v(t) = 2\\sin(\\omega t + 10^\\circ)\\text{ V}$$',
        '$$\\Delta\\theta = \\theta_v - \\theta_i = 10^\\circ - (-150^\\circ) = 160^\\circ \\implies \\mathbf{v(t)\\text{ leads }i(t)\\text{ by }160^\\circ}$$',
      ],
      finalAnswer: '∴ (1) v(t) leads i(t) by 150°; (2) v_2(t) leads v_1(t) by 30°; (3i) i(t) leads v(t) by 80°; (3ii) v(t) leads i(t) by 160°.',
    },
    {
      id: 'u06-b5',
      type: 'theory',
      title: 'Impedance, Admittance & Series/Parallel RL, RC, RLC Networks',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceRef: 'Sinusoidal Functions Handout pp. 4–9 · Class Notes pp. 11–13 · PYQ 2025 Q6b',
      content: `### 1. Element V–I Laws in Time & Phasor Domains
Using $\frac{d}{dt} \leftrightarrow j\omega$ and $\int dt \leftrightarrow \frac{1}{j\omega} = -\frac{j}{\omega}$, the three passive elements transform as:
- **Resistor ($R$)**: $v = iR \iff \underline{V} = R\underline{I} \implies Z_R = R = R\angle 0^\circ,\quad Y_R = G = \frac{1}{R}\angle 0^\circ$ (in phase).
- **Inductor ($L$)**: $v = L\frac{di}{dt} \iff \underline{V} = j\omega L\underline{I} \implies Z_L = j\omega L = jX_L = X_L\angle 90^\circ$, where **inductive reactance** is $X_L = \omega L = 2\pi f L\ [\Omega]$ ($\underline{V}$ leads $\underline{I}$ by $90^\circ$).
- **Capacitor ($C$)**: $i = C\frac{dv}{dt} \iff \underline{V} = \frac{1}{j\omega C}\underline{I} \implies Z_C = \frac{1}{j\omega C} = -jX_C = X_C\angle(-90^\circ)$, where **capacitive reactance** is $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}\ [\Omega]$ ($\underline{I}$ leads $\underline{V}$ by $90^\circ$).

### 2. General Impedance $Z$ and Admittance $Y$ Sign Rule
- **Impedance**: $Z = \frac{\underline{V}}{\underline{I}} = R + jX = |Z|\angle\theta_Z\ [\Omega]$, where $|Z| = \sqrt{R^2 + X^2}$ and $\theta_Z = \operatorname{atan2}(X, R)$.
- **Admittance**: $Y = \frac{1}{Z} = \frac{\underline{I}}{\underline{V}} = G + jB = |Y|\angle\theta_Y\ [\text{S}]$, where $G$ is **conductance** and $B$ is **susceptance**. Rationalizing $Y = \frac{1}{R + jX} = \frac{R - jX}{R^2 + X^2}$ yields:
$$G = \frac{R}{R^2 + X^2}, \qquad B = -\frac{X}{R^2 + X^2}, \qquad |Y| = \frac{1}{|Z|}, \qquad \theta_Y = -\theta_Z = \operatorname{atan2}(B, G)$$
- **Crucial Sign Rule**: Because of the minus sign in $B = -\frac{X}{R^2+X^2}$:
  - An **inductive circuit** has **positive reactance ($X > 0$)** but **negative susceptance ($B < 0$)** ($B_L = -\frac{1}{\omega L}$ for a pure inductor).
  - A **capacitive circuit** has **negative reactance ($X < 0$)** but **positive susceptance ($B > 0$)** ($B_C = +\omega C$ for a pure capacitor).

### 3. Series RL, Series RC & Series RLC Derivations (PYQ 2025 Q6b)
1. **Series RL Circuit**: Applying KVL to $R$ and $L$ in series with current $\underline{I}$:
   $$\underline{V} = \underline{V}_R + \underline{V}_L = R\underline{I} + j\omega L\underline{I} = (R + jX_L)\underline{I} \implies Z = R + jX_L = \sqrt{R^2 + X_L^2}\,\angle\tan^{-1}\!\left(\frac{X_L}{R}\right)$$
   Here $X = +X_L = \omega L > 0$, $\theta_Z \in (0^\circ, 90^\circ)$, current lags voltage by $\theta_Z$, and $\text{pf} = \cos\theta_Z = \frac{R}{\sqrt{R^2+X_L^2}}$ (lagging).
2. **Series RC Circuit**: Applying KVL to $R$ and $C$ in series:
   $$\underline{V} = \underline{V}_R + \underline{V}_C = R\underline{I} + \frac{1}{j\omega C}\underline{I} = (R - jX_C)\underline{I} \implies Z = R - jX_C = \sqrt{R^2 + X_C^2}\,\angle\!\left(-\tan^{-1}\!\left(\frac{X_C}{R}\right)\right)$$
   Here $X = -X_C = -\frac{1}{\omega C} < 0$, $\theta_Z \in (-90^\circ, 0^\circ)$, current leads voltage by $|\theta_Z|$, and $\text{pf} = \frac{R}{\sqrt{R^2+X_C^2}}$ (leading).
3. **Series RLC Circuit & Three Operating Regions**:
   $$Z = R + j(X_L - X_C) = \sqrt{R^2 + (X_L - X_C)^2}\,\angle\operatorname{atan2}(X_L - X_C,\, R)$$
   - **Region 1 ($X_L > X_C$, i.e., $\omega > \omega_0$)**: Net $X > 0 \implies$ **Inductive** ($\theta_Z > 0, B < 0$, current lags voltage).
   - **Region 2 ($X_L < X_C$, i.e., $\omega < \omega_0$)**: Net $X < 0 \implies$ **Capacitive** ($\theta_Z < 0, B > 0$, current leads voltage).
   - **Region 3 ($X_L = X_C$, i.e., $\omega = \omega_0 = \frac{1}{\sqrt{LC}}$)**: Net $X = 0 \implies$ **Resonant / Purely Resistive** ($Z = R, \theta_Z = 0^\circ, \text{pf} = 1$).

### 4. Parallel RL, Parallel RC & Parallel RLC (Admittance Method)
For parallel branches across a common voltage $\underline{V}$, admittances add directly:
$$Y = Y_R + Y_L + Y_C = \frac{1}{R} + \frac{1}{j\omega L} + j\omega C = G + j(B_C - B_L) = \frac{1}{R} + j\!\left(\omega C - \frac{1}{\omega L}\right)$$`,
      equations: [
        {
          label: 'Impedance & Admittance Conversion Formulas',
          latex: 'Z = R + j(X_L - X_C), \\qquad Y = \\frac{1}{Z} = G + jB = \\frac{R}{R^2 + X^2} + j\\left(-\\frac{X}{R^2 + X^2}\\right)',
          boxed: true,
        },
        {
          label: 'Parallel RLC Admittance',
          latex: 'Y_{\\text{parallel}} = G + j(B_C - B_L) = \\frac{1}{R} + j\\left(\\omega C - \\frac{1}{\\omega L}\\right), \\qquad \\underline{I} = Y\\underline{V}',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Worked Example 1 (Handout Ex 3 — Series RL)**: $V = 100\\angle 0^\\circ\\text{ V (rms)}$, $f = 50\\text{ Hz}$, $R = 20\\ \\Omega$, $L = 0.1\\text{ H}$. Find $Z, \\underline{I}, P$, and $Y$:',
        '$$X_L = 2\\pi(50)(0.1) = 31.416\\ \\Omega \\implies Z = 20 + j31.416 = 37.242\\angle 57.52^\\circ\\ \\Omega$$',
        '$$\\underline{I} = \\frac{100\\angle 0^\\circ}{37.242\\angle 57.52^\\circ} = 2.685\\angle(-57.52^\\circ)\\text{ A}, \\qquad P = I_{\\text{rms}}^2 R = (2.685)^2(20) = 144.2\\text{ W}$$',
        '$$Y = \\frac{1}{Z} = \\frac{20 - j31.416}{20^2 + 31.416^2} = \\frac{20 - j31.416}{1386.97} = 0.01442 - j0.02265\\text{ S} = 0.02685\\angle(-57.52^\\circ)\\text{ S}$$',
        '**Worked Example 2 (Handout Ex 4 — Series RC)**: $R = 30\\ \\Omega, C = 100\\ \\mu\\text{F}, f = 50\\text{ Hz}$:',
        '$$X_C = \\frac{1}{2\\pi(50)(100\\times 10^{-6})} = 31.831\\ \\Omega \\implies Z = 30 - j31.831 = 43.740\\angle(-46.70^\\circ)\\ \\Omega, \\quad Y = 0.01568 + j0.01664\\text{ S}$$',
        '**Worked Example 3 (Handout Ex 5 — Series RLC)**: $V = 120\\angle 0^\\circ\\text{ V (rms)}, f = 50\\text{ Hz}, R = 20\\ \\Omega, L = 80\\text{ mH}, C = 100\\ \\mu\\text{F}$:',
        '$$X_L = 2\\pi(50)(0.08) = 25.133\\ \\Omega, \\quad X_C = 31.831\\ \\Omega \\implies X = X_L - X_C = -6.698\\ \\Omega\\text{ (capacitive since }X_C > X_L\\text{)}$$',
        '$$Z = 20 - j6.698 = 21.092\\angle(-18.52^\\circ)\\ \\Omega, \\quad \\underline{I} = \\frac{120\\angle 0^\\circ}{21.092\\angle(-18.52^\\circ)} = 5.690\\angle 18.52^\\circ\\text{ A}, \\quad P = (5.690)^2(20) = 647.4\\text{ W}$$',
        '$$Y = \\frac{20 + j6.698}{20^2 + (-6.698)^2} = \\frac{20 + j6.698}{444.86} = 0.04496 + j0.01506\\text{ S}$$',
      ],
      finalAnswer: '∴ Ex 3 (RL): Z = 37.242∠57.52° Ω, I = 2.685∠(−57.52°) A, P = 144.2 W; Ex 4 (RC): Z = 43.740∠(−46.70°) Ω; Ex 5 (RLC): Z = 21.092∠(−18.52°) Ω, I = 5.690∠18.52° A, P = 647.4 W.',
    },
    {
      id: 'u06-b6',
      type: 'pyq',
      title: 'AC Series-Parallel Impedance, Phasor Current & Average Power PYQs',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceRef: 'PYQ 2025 Q6c · PYQ 2023 Q6b · PYQ 2023 Q8c · PYQ 2022 Q5a',
      content: `**Problem Statement (Four Complete Past Exam Problems)**:
1. **(2025 Q6c — 5 Marks)**: A voltage source $\underline{V}_s = 100\angle 0^\circ\text{ V (rms)}$ is connected in series with an $8\ \Omega$ resistor, which feeds two parallel branches: Branch 1 is a pure capacitive reactance of $-j6\ \Omega$, and Branch 2 is a series RL impedance of $(3 + j4)\ \Omega$. Find the total impedance and the real power output of the source.
2. **(2023 Q6b — 4 Marks)**: A voltage source $\underline{V}_s = 60\angle 0^\circ\text{ V}$ is in series with a $50\ \Omega$ resistor feeding two parallel branches: an inductor $j80\ \Omega$ in parallel with a series branch $(100 - j40)\ \Omega$ carrying current $\underline{I}_o$. Find $\underline{I}_o$.
3. **(2023 Q8c — 5 Marks)**: A source $\underline{V}_s = 30\angle 0^\circ\text{ V (rms)}$ is in series with a $6\ \Omega$ resistor, feeding a parallel combination of a $-j2\ \Omega$ capacitor and a $4\ \Omega$ resistor. Find the overall power factor and the average power delivered by the source.
4. **(2022 Q5a — 5 Marks)**: Find the input impedance $Z_{\text{in}}$ at $\omega = 50\text{ rad/s}$ of a $2\text{ mF}$ capacitor connected in series with the parallel combination of Branch A ($3\ \Omega$ in series with $10\text{ mF}$) and Branch B ($8\ \Omega$ in series with $0.2\text{ H}$).`,
      equations: [
        {
          label: 'Parallel Impedance & Current Divider in Phasor Form',
          latex: 'Z_p = \\frac{Z_1 Z_2}{Z_1 + Z_2}, \\qquad \\underline{I}_2 = \\underline{I}_{\\text{total}}\\,\\frac{Z_1}{Z_1 + Z_2}, \\qquad P_{\\text{source}} = \\operatorname{Re}\\{\\underline{V}_s\\underline{I}_s^*\\} = I_{\\text{rms}}^2 R_{\\text{total}}',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Problem 1 (2025 Q6c)**: Combine $Z_1 = -j6\\ \\Omega$ in parallel with $Z_2 = 3 + j4\\ \\Omega$:',
        '$$Z_p = \\frac{(-j6)(3 + j4)}{3 + j4 - j6} = \\frac{24 - j18}{3 - j2} = \\frac{(24 - j18)(3 + j2)}{3^2 + (-2)^2} = \\frac{108 - j6}{13} = 8.308 - j0.462\\ \\Omega$$',
        'Add the $8\\ \\Omega$ series resistor to get total input impedance $Z_{\\text{total}}$:',
        '$$Z_{\\text{total}} = 8 + (8.308 - j0.462) = 16.308 - j0.462 = 16.314\\angle(-1.62^\\circ)\\ \\Omega$$',
        'Source current magnitude $I_{\\text{rms}} = \\frac{100}{16.314} = 6.130\\text{ A}$, so source power output is:',
        '$$P = I_{\\text{rms}}^2 R_{\\text{total}} = (6.130)^2(16.308) = 612.7\\text{ W}$$',
        '**Problem 2 (2023 Q6b)**: Combine $Z_1 = j80\\ \\Omega$ in parallel with $Z_2 = 100 - j40\\ \\Omega$:',
        '$$Z_p = \\frac{(j80)(100 - j40)}{100 + j40} = \\frac{3200 + j8000}{100 + j40} = \\frac{80 + j200}{2.5 + j1} = \\frac{(80 + j200)(2.5 - j1)}{7.25} = \\frac{400 + j420}{7.25} = 55.172 + j57.931\\ \\Omega$$',
        'Total impedance $Z_{\\text{total}} = 50 + Z_p = 105.172 + j57.931 = 120.07\\angle 28.85^\\circ\\ \\Omega$. Total current $\\underline{I}_s = \\frac{60\\angle 0^\\circ}{120.07\\angle 28.85^\\circ} = 0.4997\\angle(-28.85^\\circ)\\text{ A}$. By current division:',
        '$$\\underline{I}_o = \\underline{I}_s\\,\\frac{j80}{100 + j40} = \\frac{60\\angle 0^\\circ}{50 + Z_p}\\cdot\\frac{j80}{100 + j40} = \\frac{(60)(j80)}{50(100 + j40) + (j80)(100 - j40)} = \\frac{j4800}{8200 + j10000} = 0.371\\angle 39.35^\\circ\\text{ A}$$',
        '**Problem 3 (2023 Q8c)**: Combine $-j2\\ \\Omega \\parallel 4\\ \\Omega$ and add the $6\\ \\Omega$ series resistor:',
        '$$Z_p = \\frac{(-j2)(4)}{4 - j2} = \\frac{-j8(4 + j2)}{20} = 0.8 - j1.6\\ \\Omega \\implies Z_{\\text{in}} = 6 + 0.8 - j1.6 = 6.8 - j1.6 = 6.986\\angle(-13.24^\\circ)\\ \\Omega$$',
        '$$\\text{pf} = \\cos(-13.24^\\circ) = 0.9734\\text{ (leading)}, \\qquad P = \\frac{V_{\\text{rms}}^2}{|Z_{\\text{in}}|}\\cos\\phi = \\frac{30^2}{6.986}(0.9734) = 125.41\\text{ W}$$',
        '**Problem 4 (2022 Q5a)**: At $\\omega = 50\\text{ rad/s}$, compute each element impedance:',
        '$$Z_{C1} = \\frac{1}{j(50)(2\\times 10^{-3})} = -j10\\ \\Omega, \\quad Z_{C2} = \\frac{1}{j(50)(10\\times 10^{-3})} = -j2\\ \\Omega, \\quad Z_L = j(50)(0.2) = j10\\ \\Omega$$',
        'Branch A is $Z_A = 3 - j2\\ \\Omega$ and Branch B is $Z_B = 8 + j10\\ \\Omega$. Thus:',
        '$$Z_{AB} = \\frac{(3 - j2)(8 + j10)}{11 + j8} = \\frac{44 + j14}{11 + j8} = \\frac{(44 + j14)(11 - j8)}{185} = \\frac{596 - j198}{185} = 3.222 - j1.070\\ \\Omega$$',
        '$$Z_{\\text{in}} = Z_{C1} + Z_{AB} = -j10 + (3.222 - j1.070) = 3.222 - j11.070\\ \\Omega = 11.53\\angle(-73.77^\\circ)\\ \\Omega$$',
      ],
      finalAnswer: '∴ (2025 Q6c) P = 612.7 W; (2023 Q6b) I_o = 0.371∠39.35° A; (2023 Q8c) pf = 0.9734 leading, P = 125.41 W; (2022 Q5a) Z_in = 3.22 − j11.07 Ω.',
    },
    {
      id: 'u06-b7',
      type: 'theory',
      title: 'Series & Parallel Resonance, Quality Factor Q & Half-Power Bandwidth',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3, 4],
      sourceRef: 'Class Notes p. 13 · Sinusoidal Functions Handout pp. 7–9 · Sadiku Ch. 14 · PYQ 2025 Q7a, 2023 Q6c',
      content: `### 1. Series Resonance Derivation (Class Lecture Board Derivation, p. 13)
In an $R$-$L$-$C$ series circuit driven by $\underline{V}$, the input impedance is:
$$Z(j\omega) = R + j\!\left(\omega L - \frac{1}{\omega C}\right)$$
**Resonance** occurs when the imaginary part of $Z$ (net reactance $X$) is zero so that voltage and current are in phase ($\theta_Z = 0^\circ$, unity power factor):
$$\operatorname{Im}\{Z\} = 0 \implies X_L = X_C \implies \omega_0 L = \frac{1}{\omega_0 C} \implies \omega_0^2 = \frac{1}{LC} \implies \omega_0 = \frac{1}{\sqrt{LC}}\ [\text{rad/s}]$$
Since $\omega_0 = 2\pi f_0$, the **resonant cyclic frequency** in Hz is:
$$f_0 = \frac{1}{2\pi\sqrt{LC}}\ [\text{Hz}]$$

### 2. Properties of a Series RLC Circuit at Resonance ($\omega = \omega_0$)
1. **Impedance is minimum and purely resistive**: $Z(\omega_0) = R$.
2. **Current amplitude is maximum**: $\underline{I}_0 = \frac{\underline{V}}{R}$ (in phase with $\underline{V}$, $\text{pf} = 1$).
3. **Quality Factor $Q_s$ & Voltage Magnification**: At $\omega_0$, the inductor and capacitor voltages are equal in magnitude and $180^\circ$ out of phase ($\underline{V}_L + \underline{V}_C = 0$), with magnitude $Q_s$ times the source voltage:
   $$Q_s = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 C R} = \frac{1}{R}\sqrt{\frac{L}{C}}, \qquad |V_L(\omega_0)| = |V_C(\omega_0)| = Q_s V_s$$
4. **Half-Power Frequencies ($\omega_1, \omega_2$) & Bandwidth ($B$)**: The half-power (or $-3\text{ dB}$) frequencies are the two frequencies where $|Z| = \sqrt{2}\,R$ and $|I| = \frac{I_{\max}}{\sqrt{2}}$ (so $P = \frac{1}{2}P_{\max}$):
   $$\omega_{1,2} = \mp\frac{R}{2L} + \sqrt{\left(\frac{R}{2L}\right)^2 + \frac{1}{LC}} = \omega_0\!\left[\mp\frac{1}{2Q_s} + \sqrt{1 + \left(\frac{1}{2Q_s}\right)^2}\right]$$
   The **bandwidth** is $B = \omega_2 - \omega_1 = \frac{R}{L} = \frac{\omega_0}{Q_s}\ [\text{rad/s}]$, and $\omega_0 = \sqrt{\omega_1\omega_2}$. For a high-$Q$ circuit ($Q_s \ge 10$), $\omega_{1,2} \approx \omega_0 \mp \frac{B}{2}$.

### 3. Parallel RLC Resonance (Sadiku §14.6 & PYQ 2023 Q6c)
For a parallel $R$-$L$-$C$ network driven by a current source $\underline{I}_s$, the input admittance is:
$$Y(j\omega) = \frac{1}{R} + j\!\left(\omega C - \frac{1}{\omega L}\right)$$
Setting $\operatorname{Im}\{Y\} = 0$ gives the same resonant frequency $\omega_0 = \frac{1}{\sqrt{LC}}$, where admittance is **minimum** ($Y(\omega_0) = 1/R$, impedance $Z(\omega_0) = R$ is **maximum**) and all source current flows through $R$ ($\underline{I}_R = \underline{I}_s$):
$$Q_p = \frac{R}{\omega_0 L} = \omega_0 R C = R\sqrt{\frac{C}{L}}, \qquad B = \omega_2 - \omega_1 = \frac{1}{RC} = \frac{\omega_0}{Q_p}\ [\text{rad/s}]$$`,
      equations: [
        {
          label: 'Resonant Frequency (Series & Ideal Parallel RLC)',
          latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}\\ [\\text{rad/s}], \\qquad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}\\ [\\text{Hz}], \\qquad \\omega_0 = \\sqrt{\\omega_1\\omega_2}',
          boxed: true,
        },
        {
          label: 'Series RLC Quality Factor, Bandwidth & Half-Power Frequencies',
          latex: 'Q_s = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}, \\qquad B = \\omega_2 - \\omega_1 = \\frac{R}{L} = \\frac{\\omega_0}{Q_s}, \\qquad \\omega_{1,2} = \\mp\\frac{R}{2L} + \\sqrt{\\left(\\frac{R}{2L}\\right)^2 + \\frac{1}{LC}}',
          boxed: true,
        },
        {
          label: 'Parallel RLC Quality Factor & Bandwidth',
          latex: 'Q_p = \\frac{R}{\\omega_0 L} = \\omega_0 R C = R\\sqrt{\\frac{C}{L}}, \\qquad B = \\frac{1}{RC} = \\frac{\\omega_0}{Q_p}',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Derivation of Bandwidth $B = \\omega_2 - \\omega_1 = R/L$ for Series RLC**:',
        'At the half-power frequencies $\\omega_1$ and $\\omega_2$, the net reactance has magnitude equal to $R$: $\\omega L - \\frac{1}{\\omega C} = \\mp R$.',
        'Subtracting the $\\omega_1$ equation ($\\omega_1 L - \\frac{1}{\\omega_1 C} = -R$) from the $\\omega_2$ equation ($\\omega_2 L - \\frac{1}{\\omega_2 C} = +R$) gives $B = \\omega_2 - \\omega_1 = \\frac{R}{L} = \\frac{\\omega_0}{Q_s}$.',
      ],
      finalAnswer: '∴ Resonance occurs at ω_0 = 1/√(LC) with series bandwidth B = R/L = ω_0/Q_s and parallel bandwidth B = 1/(RC) = ω_0/Q_p.',
    },
    {
      id: 'u06-b8',
      type: 'pyq',
      title: 'Series & Parallel RLC Resonance Exam Problems',
      priorityTier: 1,
      secondaryPriorityTiers: [2, 3],
      sourceRef: 'PYQ 2025 Q7a · PYQ 2023 Q6c',
      content: `**Problem Statement**:
1. **(2025 Q7a — 5 Marks)**: A series-connected RLC circuit has $R = 4\ \Omega$, $L = 1\text{ mH}$, and $C = 0.4\ \mu\text{F}$, driven by $v_s(t) = 20\sin\omega t\text{ V}$. Find: (i) the resonant frequency $\omega_0$ (and $f_0$), (ii) the half-power frequencies $\omega_1$ and $\omega_2$, (iii) the quality factor $Q$ and bandwidth $B$, and (iv) the amplitude of the current at $\omega_0, \omega_1,$ and $\omega_2$.
2. **(2023 Q6c — 5 Marks)**: A parallel RLC circuit has $R = 8\text{ k}\Omega$, $L = 0.2\text{ mH}$, and $C = 8\ \mu\text{F}$, driven by a sinusoidal source $v(t) = 10\sin\omega t\text{ V}$. Calculate $\omega_0, Q, B$, and the resistor branch current $i_o(t)$ at resonance.`,
      equations: [
        {
          label: 'High-Q Half-Power Frequencies & Current Amplitude at Half-Power Points',
          latex: '\\omega_1 \\approx \\omega_0 - \\frac{B}{2}, \\qquad \\omega_2 \\approx \\omega_0 + \\frac{B}{2}, \\qquad I(\\omega_0) = \\frac{V_m}{R}, \\qquad I(\\omega_{1,2}) = \\frac{V_m}{\\sqrt{2}\\,R}',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Part 1 (2025 Q7a — Series RLC Resonance)**: Given $R = 4\\ \\Omega$, $L = 10^{-3}\\text{ H}$, $C = 0.4\\times 10^{-6}\\text{ F}$, $V_m = 20\\text{ V}$:',
        '$$(i)\\; \\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{(10^{-3})(0.4\\times 10^{-6})}} = \\frac{1}{\\sqrt{4\\times 10^{-10}}} = \\frac{1}{2\\times 10^{-5}} = 50,000\\text{ rad/s} = 50\\text{ krad/s} \\quad (f_0 = 7.958\\text{ kHz})$$',
        '$$(iii)\\; B = \\frac{R}{L} = \\frac{4}{10^{-3}} = 4000\\text{ rad/s} = 4\\text{ krad/s}, \\qquad Q_s = \\frac{\\omega_0}{B} = \\frac{50}{4} = 12.5$$',
        '$$(ii)\\; \\text{Using the exact formula } \\omega_{1,2} = \\mp\\frac{B}{2} + \\sqrt{\\left(\\frac{B}{2}\\right)^2 + \\omega_0^2} = \\mp 2 + \\sqrt{4 + 2500}\\text{ krad/s}:$$',
        '$$\\omega_1 = -2 + 50.04 = 48.04\\text{ krad/s}, \\qquad \\omega_2 = +2 + 50.04 = 52.04\\text{ krad/s} \\quad (\\text{or } 48\\text{ krad/s and } 52\\text{ krad/s by high-}Q\\text{ approx.})$$',
        '$$(iv)\\; I(\\omega_0) = \\frac{V_m}{R} = \\frac{20}{4} = 5\\text{ A}, \\qquad I(\\omega_1) = I(\\omega_2) = \\frac{5}{\\sqrt{2}} = 3.536\\text{ A}$$',
        '**Part 2 (2023 Q6c — Parallel RLC Resonance)**: Given $R = 8000\\ \\Omega$, $L = 0.2\\times 10^{-3}\\text{ H}$, $C = 8\\times 10^{-6}\\text{ F}$:',
        '$$\\omega_0 = \\frac{1}{\\sqrt{(0.2\\times 10^{-3})(8\\times 10^{-6})}} = \\frac{1}{\\sqrt{1.6\\times 10^{-9}}} = 25,000\\text{ rad/s} = 25\\text{ krad/s}$$',
        '$$Q_p = \\frac{R}{\\omega_0 L} = \\frac{8000}{(25,000)(0.2\\times 10^{-3})} = \\frac{8000}{5} = 1600, \\qquad B = \\frac{\\omega_0}{Q_p} = \\frac{25,000}{1600} = 15.625\\text{ rad/s}$$',
        'At resonance ($\\omega = \\omega_0 = 25,000\\text{ rad/s}$), the LC tank has zero net susceptance, and the current through the $8\\text{ k}\\Omega$ resistor is:',
        '$$i_o(t) = \\frac{v(t)}{R} = \\frac{10\\sin(25,000t)}{8000} = 1.25\\sin(25,000t)\\text{ mA}$$',
      ],
      finalAnswer: '∴ (2025 Q7a) ω_0 = 50 krad/s, B = 4 krad/s, Q = 12.5, ω_1 = 48.04 krad/s, ω_2 = 52.04 krad/s, I(ω_0) = 5 A; (2023 Q6c) ω_0 = 25 krad/s, Q = 1600, B = 15.625 rad/s, i_o(t) = 1.25 sin(25,000t) mA.',
    },
    {
      id: 'u06-b9',
      type: 'memorize',
      title: 'Magnetic Circuits, Ampere’s Law & Past Exam Problems (Q8)',
      priorityTier: 2,
      secondaryPriorityTiers: [1, 3, 4],
      sourceRef: 'BL Theraja Ch. 6 & 9 · PYQ 2025 Q8, 2024 Q5c & Q8, 2022 Q8, 2021 Q8',
      content: `Because Question 8 in the semester final examination regularly tests **Magnetic Circuits and Electromagnetism** (from B. L. Theraja Vol. I), every examinee must master the following definitions, comparisons, and series-air-gap calculations:

### 1. Classification of Magnetic Materials (PYQ 2025 Q8b, 2022 Q8a, 2021 Q8a)
- **Diamagnetic Materials** ($\chi_m < 0$ small negative, $\mu_r$ slightly $< 1$, e.g., Bismuth, Copper, Silver, Water): Weakly repelled by a magnet; atomic magnetic moments cancel in the absence of an external field.
- **Paramagnetic Materials** ($\chi_m > 0$ small positive, $\mu_r$ slightly $> 1$, e.g., Aluminum, Platinum, Oxygen): Weakly attracted by a magnet; permanent atomic dipoles align weakly with an applied field $\mathbf{H}$.
- **Ferromagnetic Materials** ($\chi_m \gg 1$, $\mu_r \sim 10^2\text{ to }10^5$, e.g., Iron, Nickel, Cobalt, Silicon Steel): Strongly magnetized in the direction of $\mathbf{H}$ due to aligned **magnetic domains**; exhibit saturation and **hysteresis** (energy loss per cycle proportional to the area of the $B$–$H$ hysteresis loop).

### 2. Electric Circuit vs. Magnetic Circuit Analogy & Differences (PYQ 2024 Q5c)
| Quantity | Electric Circuit | Magnetic Circuit |
| :--- | :--- | :--- |
| **Driving Force** | Electromotive force (EMF) $E\ [\text{V}]$ | Magnetomotive force (MMF) $\mathcal{F} = NI\ [\text{AT}]$ |
| **Response (Flow/Flux)** | Electric current $I = E/R\ [\text{A}]$ | Magnetic flux $\Phi = \mathcal{F}/\mathcal{R}\ [\text{Wb}]$ |
| **Opposition** | Resistance $R = \frac{\rho l}{A} = \frac{l}{\sigma A}\ [\Omega]$ | Reluctance $\mathcal{R} = \frac{l}{\mu_0\mu_r A}\ [\text{AT/Wb}]$ |
| **Field / Density** | Current density $J = I/A = \sigma E\ [\text{A/m}^2]$ | Flux density $B = \Phi/A = \mu H\ [\text{T or Wb/m}^2]$ |
| **Key Physical Difference** | Current $I$ involves continuous charge flow and dissipates power $I^2R$ as heat continuously. | Flux $\Phi$ is established in the core; once established, zero energy is dissipated to maintain steady DC flux (except $I^2R$ in the exciting coil), and $\mu_r$ varies nonlinearly with $B$. |

### 3. Ampere’s Circuital Law & Field of a Long Straight Conductor (PYQ 2025 Q8c, 2024 Q8b, 2022 Q8b, 2021 Q8b)
**Ampere’s Circuital Law** states that the line integral of magnetic field intensity $\mathbf{H}$ around any closed path equals the net current $I_{\text{enc}}$ enclosed by that path:
$$\oint \mathbf{H}\cdot d\mathbf{l} = I_{\text{enc}} \quad (\text{or } NI \text{ for } N \text{ turns})$$
For a long straight conductor carrying current $I$, symmetry dictates that $\mathbf{H}$ is tangential to a concentric circle of radius $r$:
$$\oint H\,dl = H(2\pi r) = I \implies H = \frac{I}{2\pi r}\ [\text{AT/m}], \qquad B = \frac{\mu_0 I}{2\pi r}\ [\text{T}]$$`,
      memorizeStatements: [
        'Magnetic Flux Density (B) & Field Intensity (H): Flux density B = Φ/A [Wb/m² or Tesla] is the magnetic flux per unit cross-sectional area; magnetizing force H = NI/l [AT/m] is the MMF gradient. They are related by B = μH = μ_0 μ_r H, where μ_0 = 4π × 10^(−7) H/m.',
        'Relative Permeability (μ_r) & Magnetic Susceptibility (χ_m): Relative permeability μ_r = μ/μ_0 = B/B_0 is the ratio of flux density in a material to that in vacuum for the same H. Susceptibility χ_m = M/H satisfies μ_r = 1 + χ_m.',
        'Magnetomotive Force (MMF) & Reluctance (R): MMF F = NI [Ampere-Turns, AT] drives magnetic flux Φ through a magnetic circuit; Reluctance R = l/(μ_0 μ_r A) [AT/Wb] opposes the establishment of flux, obeying Hopkinson’s (Ohm’s) law for magnetic circuits: Φ = F / R = NI / R.',
        'Leakage Flux & Fringing: Leakage flux is the flux that does not follow the intended magnetic core path (Leakage coefficient λ = Φ_total / Φ_useful > 1). Fringing is the spreading out of magnetic flux lines as they cross an air gap, increasing the effective cross-sectional area of the gap and reducing gap flux density.',
        'Magnetic Hysteresis: The phenomenon in which flux density B lags behind the magnetizing force H when a ferromagnetic specimen is taken through a cycle of magnetization, characterized by retentivity (residual magnetism B_r at H = 0) and coercivity (reverse field −H_c required to reduce B to zero).',
      ],
      equations: [
        {
          label: 'Hopkinson’s Law & Composite Series Magnetic Circuit with Air Gap',
          latex: '\\mathcal{F} = NI = \\Phi(\\mathcal{R}_i + \\mathcal{R}_g) = H_i l_i + H_g l_g = \\frac{B}{\\mu_0}\\left(\\frac{l_i}{\\mu_r} + l_g\\right), \\qquad \\mu_0 = 4\\pi\\times 10^{-7}\\text{ H/m}',
          boxed: true,
        },
        {
          label: 'Ampere’s Circuital Law & Field Around a Long Straight Wire',
          latex: '\\oint \\mathbf{H}\\cdot d\\mathbf{l} = NI, \\qquad H = \\frac{I}{2\\pi r}\\ [\\text{AT/m}], \\qquad B = \\frac{\\mu_0 I}{2\\pi r}\\ [\\text{T}]',
          boxed: true,
        },
      ],
      solutionSteps: [
        '**Worked PYQ 1 (2024 Q8c — 4 Marks)**: An iron ring of mean length $l_i = 50\\text{ cm} = 0.5\\text{ m}$ has an air gap of $l_g = 1\\text{ mm} = 10^{-3}\\text{ m}$ and a winding of $N = 200\\text{ turns}$ carrying $I = 4\\text{ A}$. If $\\mu_r = 300$, find the flux density $B$ (neglecting fringing):',
        'Total MMF is $\\mathcal{F} = NI = (200)(4) = 800\\text{ AT}$. Since $\\mathcal{F} = \\frac{B}{\\mu_0}\\left(\\frac{l_i}{\\mu_r} + l_g\\right)$:',
        '$$800 = \\frac{B}{4\\pi\\times 10^{-7}}\\left(\\frac{0.5}{300} + 0.001\\right) = \\frac{B}{4\\pi\\times 10^{-7}}(0.001667 + 0.001) = 2122.07\\,B \\implies B = \\frac{800}{2122.07} = 0.377\\text{ Wb/m}^2\\text{ (T)}$$',
        '**Worked PYQ 2 (2022 Q8c & 2021 Q8c — 4 Marks)**: Calculate the exciting current $I$ needed in a coil of $N = 200\\text{ turns}$ to establish a flux $\\Phi = 1.5\\text{ mWb}$ in a magnetic circuit consisting of an iron path of length $l_i = 200\\text{ cm} = 2.0\\text{ m}$ ($\\mu_r = 800$), an air gap of length $l_g = 2\\text{ mm} = 2\\times 10^{-3}\\text{ m}$, and cross-sectional area $A = 15\\text{ cm}^2 = 15\\times 10^{-4}\\text{ m}^2$:',
        'Flux density in the core and gap is $B = \\frac{\\Phi}{A} = \\frac{1.5\\times 10^{-3}}{15\\times 10^{-4}} = 1.0\\text{ Wb/m}^2\\text{ (T)}$.',
        'Total Ampere-Turns required for iron plus air gap:',
        '$$NI = \\frac{B}{\\mu_0}\\left(\\frac{l_i}{\\mu_r} + l_g\\right) = \\frac{1.0}{4\\pi\\times 10^{-7}}\\left(\\frac{2.0}{800} + 0.002\\right) = (7.9577\\times 10^5)(0.0025 + 0.002) = 3581\\text{ AT}$$',
        '$$I = \\frac{3581}{N} = \\frac{3581}{200} = 17.91\\text{ A}$$',
      ],
      finalAnswer: '∴ (2024 Q8c) B = 0.377 T; (2022/2021 Q8c) Total MMF = 3581 AT and exciting current I = 17.91 A.',
    },
  ],
};

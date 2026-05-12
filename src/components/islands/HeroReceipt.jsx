import { useState, useEffect } from 'react';
import { CreditCardIcon } from 'hugeicons-react';

const RECEIPT_LINES = [
  { label: 'Pro plan · monthly',    amount: 49.00 },
  { label: 'API credits · 25k req', amount: 12.50 },
  { label: 'Seat · 1 additional',     amount:  3.20 },
  { label: 'Subtotal',              amount: 64.70, sub: true },
  { label: 'Tax · 8.875%',          amount:  5.74, sub: true },
];
const RECEIPT_TOTAL = 70.44;

const INK = '#1a1a1a';
const PAPER = '#fcfbf7';
const MUTED = '#6b6760';

const hrStyles = {
  stage: {
    position: 'relative',
    width: '100%', height: '100%',
    minHeight: 480,
    background: 'transparent',
    overflow: 'hidden',
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    color: INK,
  },
  gridBg: {
    position: 'absolute', inset: 0,
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),' +
      'linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
  },
  slot: {
    position: 'absolute',
    top: 36, left: '50%', transform: 'translateX(-50%)',
    width: 410, height: 14,
    background: '#1a1a1a',
    borderRadius: 3,
    boxShadow: '0 1px 0 rgba(255,255,255,0.6), inset 0 2px 4px rgba(0,0,0,0.6)',
  },
  slotInner: {
    position: 'absolute',
    inset: '4px 8px',
    background: '#0a0a0a',
    borderRadius: 1,
  },
  perfTop: {
    height: 8,
    display: 'flex',
    background: '#1a1a1a',
    overflow: 'hidden',
  },
  perfBot: {
    height: 8,
    display: 'flex',
    background: PAPER,
    overflow: 'hidden',
    marginTop: 8,
    position: 'relative',
  },
  perfNotch: {
    flex: 1,
    background: PAPER,
    margin: '0 1px',
    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
  },
  paperInner: {
    padding: '20px 22px 0',
    position: 'relative',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  brandMark: {
    width: 22, height: 22,
    background: '#000',
    borderRadius: 4,
    position: 'relative',
  },
  barTop: {
    position: 'absolute',
    left: 5, top: 6.5, width: 10, height: 3,
    background: '#A3A3A3',
    borderRadius: '0 1.5px 1.5px 0',
  },
  barBot: {
    position: 'absolute',
    left: 5, top: 12, width: 12, height: 3,
    background: '#A3A3A3',
    borderRadius: '0 1.5px 1.5px 0',
  },
  brandTxt: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.12em',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 10,
    color: MUTED,
    letterSpacing: '0.04em',
  },
  dashed: {
    height: 1,
    background:
      `repeating-linear-gradient(to right, ${INK} 0, ${INK} 4px, transparent 4px, transparent 8px)`,
    margin: '14px 0',
    opacity: 0.6,
  },
  lines: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    minHeight: 130,
  },
  line: {
    display: 'flex',
    alignItems: 'baseline',
    fontSize: 12,
    gap: 6,
  },
  lineSub: { color: MUTED, fontSize: 11 },
  lineLabel: { whiteSpace: 'nowrap' },
  dotsFill: {
    flex: 1,
    height: 1,
    marginBottom: 3,
    backgroundImage: 'radial-gradient(circle, currentColor 0.6px, transparent 0.7px)',
    backgroundSize: '4px 1px',
    backgroundRepeat: 'repeat-x',
    opacity: 0.5,
  },
  lineAmt: { fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 4,
  },
  totalLabel: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.18em',
  },
  totalAmt: {
    fontFamily: '"JetBrains Mono", monospace',
    fontWeight: 700,
    fontSize: 28,
    letterSpacing: '-0.01em',
    fontVariantNumeric: 'tabular-nums',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 10,
    color: MUTED,
    marginTop: 14,
    paddingBottom: 14,
    letterSpacing: '0.04em',
  },
  stamp: {
    position: 'absolute',
    left: '60%', top: '62%',
    pointerEvents: 'none',
  },
  stampInner: {
    border: '3px solid rgba(199,62,58,0.78)',
    color: 'rgba(199,62,58,0.78)',
    padding: '6px 14px 4px',
    borderRadius: 4,
    textAlign: 'center',
    background: 'radial-gradient(circle at 30% 30%, rgba(199,62,58,0.04) 0%, transparent 60%)',
    boxShadow: 'inset 0 0 0 1px rgba(199,62,58,0.18)',
  },
  stampLine: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 800,
    fontSize: 30,
    letterSpacing: '0.12em',
    lineHeight: 1,
  },
  stampSub: {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 8,
    letterSpacing: '0.18em',
    marginTop: 3,
  },
  caption: {
    position: 'absolute',
    left: 28, bottom: 22,
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: MUTED,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  captionDot: {
    width: 6, height: 6, borderRadius: 999,
    background: 'rgba(199,62,58,0.78)',
    boxShadow: '0 0 0 4px rgba(199,62,58,0.18)',
    animation: 'hr-pulse 1.6s ease-in-out infinite',
  },
};

if (typeof document !== 'undefined' && !document.getElementById('hr-css')) {
  const s = document.createElement('style');
  s.id = 'hr-css';
  s.textContent = '@keyframes hr-pulse{0%,100%{opacity:1}50%{opacity:.35}}';
  document.head.appendChild(s);
}

const fmt = (n) => '$' + n.toFixed(2);

export function HeroReceipt() {
  const [tick, setTick] = useState(0);
  const [printed, setPrinted] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
  const [stamped, setStamped] = useState(false);
  const [showPaper, setShowPaper] = useState(true);

  useEffect(() => {
    let timers = [];
    const run = () => {
      setShowPaper(true);
      setPrinted(0);
      setTotalAmt(0);
      setStamped(false);

      RECEIPT_LINES.forEach((_, i) => {
        timers.push(setTimeout(() => setPrinted(i + 1), 600 + i * 380));
      });

      const tStart = 600 + RECEIPT_LINES.length * 380 + 200;
      const dur = 900;
      const steps = 36;
      for (let s = 1; s <= steps; s++) {
        timers.push(setTimeout(() => {
          const k = s / steps;
          const v = RECEIPT_TOTAL * (1 - Math.pow(1 - k, 3));
          setTotalAmt(v);
        }, tStart + (dur * s) / steps));
      }

      timers.push(setTimeout(() => setStamped(true), tStart + dur + 250));
      timers.push(setTimeout(() => {
        setShowPaper(false);
        setTimeout(() => setTick(t => t + 1), 700);
      }, tStart + dur + 2600));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, [tick]);

  return (
    <div style={hrStyles.stage}>
      <div style={hrStyles.slot}>
        <div style={hrStyles.slotInner} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 50, left: '50%', marginLeft: -195,
          width: 390,
          background: PAPER,
          boxShadow: '0 2px 0 rgba(0,0,0,.04), 0 18px 36px rgba(0,0,0,.10), 0 1px 2px rgba(0,0,0,.05)',
          transformOrigin: 'top center',
          transform: showPaper ? 'translateY(0) rotate(-1.4deg)' : 'translateY(120%) rotate(-1.4deg)',
          transition: 'transform .65s cubic-bezier(.7,.05,.4,1)',
        }}
      >
        <div style={hrStyles.perfTop}>
          {Array.from({ length: 28 }).map((_, i) => <span key={i} style={hrStyles.perfNotch} />)}
        </div>

        <div style={hrStyles.paperInner}>
          <div style={hrStyles.brand}>
            <div style={hrStyles.brandMark}>
              <div style={hrStyles.barTop} />
              <div style={hrStyles.barBot} />
            </div>
            <div style={hrStyles.brandTxt}>BACHS</div>
          </div>

          <div style={hrStyles.metaRow}>
            <span>Order #A4-7821</span>
            <span>May 8 · 14:22</span>
          </div>

          <div style={hrStyles.dashed} />

          <div style={hrStyles.lines}>
            {RECEIPT_LINES.map((ln, i) => (
              <div
                key={i}
                style={{
                  ...hrStyles.line,
                  ...(ln.sub ? hrStyles.lineSub : null),
                  opacity: i < printed ? 1 : 0,
                  transform: i < printed ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity .22s, transform .22s',
                }}
              >
                <span style={hrStyles.lineLabel}>{ln.label}</span>
                <span style={hrStyles.dotsFill} />
                <span style={hrStyles.lineAmt}>{fmt(ln.amount)}</span>
              </div>
            ))}
          </div>

          <div style={hrStyles.dashed} />

          <div style={hrStyles.totalRow}>
            <span style={hrStyles.totalLabel}>TOTAL</span>
            <span style={hrStyles.totalAmt}>{fmt(totalAmt)}</span>
          </div>

          <div style={hrStyles.cardRow}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <CreditCardIcon size={12} color={MUTED} />
              Visa ···· 4242
            </span>
            <span>✓ approved · 0.4s</span>
          </div>

          <div
            style={{
              ...hrStyles.stamp,
              opacity: stamped ? 0.85 : 0,
              transform: stamped
                ? 'translate(-50%, -50%) rotate(-11deg) scale(1)'
                : 'translate(-50%, -50%) rotate(-11deg) scale(2.4)',
              transition: 'opacity .12s, transform .35s cubic-bezier(.2,1.5,.4,1)',
            }}
          >
            <div style={hrStyles.stampInner}>
              <div style={hrStyles.stampLine}>PAID</div>
              <div style={hrStyles.stampSub}>BACHS · 08 MAY 2026</div>
            </div>
          </div>

          <div style={hrStyles.perfBot}>
            {Array.from({ length: 28 }).map((_, i) => <span key={i} style={hrStyles.perfNotch} />)}
          </div>
        </div>
      </div>

    </div>
  );
}

import { useState } from "react";

const INK = "#111111";
const INK_HOVER = "#333333";

function CheckIcon({ color = INK }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0, marginTop: "0.2rem" }}
    >
      <path
        d="M3 8.5l3.5 3.5L13 4.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: "#888888",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </p>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "1.25rem",
        padding: "2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function IconChip({ children }) {
  return (
    <div
      style={{
        width: "2.75rem",
        height: "2.75rem",
        borderRadius: "0.75rem",
        background: "#f3f3f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function CardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="2.5"
        y="5"
        width="19"
        height="14"
        rx="2.5"
        stroke={INK}
        strokeWidth="1.75"
      />
      <path d="M2.5 9.5h19" stroke={INK} strokeWidth="1.75" />
      <path
        d="M6 14.5h4"
        stroke={INK}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="6.5"
        y="2.5"
        width="11"
        height="19"
        rx="2.5"
        stroke={INK}
        strokeWidth="1.75"
      />
      <path
        d="M10.5 18h3"
        stroke={INK}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={INK} strokeWidth="1.75" />
      <path
        d="M12 7.5v9M9.5 9.75c0-.97 1.12-1.75 2.5-1.75s2.5.78 2.5 1.75c0 2.6-5 1.9-5 4.5 0 .97 1.12 1.75 2.5 1.75s2.5-.78 2.5-1.75"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardHeader({ icon, title, desc, bullets, cta }) {
  return (
    <div>
      <div className="pricing-card-head">
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          {icon}
          <div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.375rem",
                fontWeight: 600,
                color: INK,
                letterSpacing: "-0.01em",
                marginBottom: "0.25rem",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "#888888",
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>
        </div>
        {cta && (
          <a
            href="/early-access"
            style={{
              padding: "0.625rem 1.375rem",
              background: INK,
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: "9999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = INK_HOVER)}
            onMouseOut={(e) => (e.currentTarget.style.background = INK)}
          >
            Get started
          </a>
        )}
      </div>
      {bullets && (
        <div style={{ marginTop: "1.25rem" }}>
          {bullets.map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
                marginBottom: "0.5rem",
              }}
            >
              <CheckIcon />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#444444",
                  lineHeight: 1.6,
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FeeRow({ label, desc, value, subs = [], last = false }) {
  return (
    <div
      className="pricing-fee-row"
      style={{
        padding: "1.375rem 0",
        borderBottom: last ? "none" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: "30rem" }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: INK,
            marginBottom: desc ? "0.35rem" : 0,
          }}
        >
          {label}
        </div>
        {desc && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#888888",
              lineHeight: 1.6,
            }}
          >
            {desc}
          </div>
        )}
      </div>
      <div className="pricing-fee-value">
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "1.375rem",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {value}
        </div>
        {subs.map((s) => (
          <div
            key={s}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#999999",
              marginTop: "0.25rem",
              lineHeight: 1.5,
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#aaaaaa",
        margin: "1.75rem 0 0",
      }}
    >
      {children}
    </p>
  );
}

function MathCard({ scenario, lines, takeaway }) {
  return (
    <Card style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          color: "#888888",
          marginBottom: "1.25rem",
        }}
      >
        {scenario}
      </p>
      <div style={{ flex: 1 }}>
        {lines.map(([k, v], i) => (
          <div
            key={k}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "0.5rem 0",
              borderBottom:
                i === lines.length - 1 ? "none" : "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: i === lines.length - 1 ? INK : "#888888",
                fontWeight: i === lines.length - 1 ? 600 : 400,
              }}
            >
              {k}
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: INK,
                whiteSpace: "nowrap",
              }}
            >
              {v}
            </span>
          </div>
        ))}
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8125rem",
          color: "#888888",
          background: "#f3f3f1",
          borderRadius: "0.625rem",
          padding: "0.75rem 1rem",
          marginTop: "1.25rem",
          lineHeight: 1.55,
        }}
      >
        {takeaway}
      </p>
    </Card>
  );
}

const INCLUDED = [
  {
    title: "Hosted checkout",
    desc: "Conversion-optimized and ready out of the box.",
  },
  {
    title: "Fraud protection",
    desc: "Built into every transaction. No extra % fee.",
  },
  {
    title: "NGN & USD balances",
    desc: "Money sits in your balance until you choose to withdraw. No forced payouts.",
  },
  {
    title: "Instant settlement",
    desc: "NGN payments are ready to withdraw immediately. No T+1, no weekend waits.",
  },
  {
    title: "Invoicing & receipts",
    desc: "Generated automatically with every sale.",
  },
  {
    title: "Analytics & reporting",
    desc: "Know exactly how your business is performing.",
  },
  {
    title: "APIs, SDKs & webhooks",
    desc: "If you can imagine it, you can build it.",
  },
  {
    title: "Zero setup fees",
    desc: "No integration, monthly, or maintenance fees.",
  },
];

const COMPARISON = [
  {
    label: "Accept NGN, global cards, mobile money & crypto",
    bachs: "One integration",
    stack: "3–4 separate providers",
  },
  {
    label: "Global card settlement",
    bachs: "USD balance — withdraw as USDT or convert to NGN instantly",
    stack: "ACH transfers, wire fees, multi-day delays",
  },
  {
    label: "NGN settlement",
    bachs: "Instant, 24/7 — withdraw whenever you choose",
    stack: "Next working day, forced bank payouts",
  },
  {
    label: "Currency conversion",
    bachs: "We absorb the FX risk. You get a clean rate",
    stack: "2–4% hidden spread on every hop",
  },
  {
    label: "Setup & monthly fees",
    bachs: "₦0 — you only pay when you get paid",
    stack: "Stacks up across every tool",
  },
];

const FAQS = [
  {
    q: "When do I get my money?",
    a: "Immediately. NGN payments settle to your balance the moment they're confirmed — nights, weekends and holidays included. Global card payments land in your USD balance, withdrawable as USDT or convertible to NGN instantly. And your money stays in your balance until you decide what to do with it: withdraw to your bank, convert, or hold. We never force a payout.",
  },
  {
    q: "What does it cost to start?",
    a: "Nothing. There are no setup fees, no monthly fees, and no maintenance fees. You only pay a fee when you successfully get paid.",
  },
  {
    q: "Are there really no hidden fees?",
    a: "The rate you see is what you pay. The only add-on is +1% where currency conversion applies on mobile money payments — and it's printed right next to the rate, not buried in fine print.",
  },
  {
    q: "Who pays the fees — me or my customer?",
    a: "Your choice. By default, fees come out of the payment before it settles to you. But you can also pass fees on to your customer at checkout, so you receive the full amount of every sale.",
  },
  {
    q: "What's the most I'll ever pay on a local transaction?",
    a: "₦2,000. Local NGN fees are capped — whether your customer pays ₦200,000 or ₦2,000,000, the fee never goes above ₦2,000. The bigger the sale, the lower your effective rate.",
  },
  {
    q: "Do you offer volume discounts?",
    a: "Yes. High-volume businesses get custom, country-specific rates, dedicated support, and custom settlement flows. Talk to us and we'll build a plan around your volume.",
  },
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            color: INK,
          }}
        >
          {q}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          <path
            d="M8 2v12M2 8h12"
            stroke="#888888"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {open && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            color: "#666666",
            lineHeight: 1.7,
            margin: "0 0 1.25rem",
            maxWidth: "44rem",
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export function PricingPage({ navigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main style={{ minHeight: "100vh", background: "#f9f9f8" }}>
      <style>{`
        .pricing-card-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; }
        .pricing-fee-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; }
        .pricing-fee-value { text-align: right; flex-shrink: 0; }
        .pricing-math-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.25rem; }
        .pricing-included-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem 2rem; }
        .pricing-compare-row { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 860px) {
          .pricing-math-grid { grid-template-columns: 1fr; }
          .pricing-included-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .pricing-card-head { flex-direction: column; }
          .pricing-fee-row { flex-direction: column; gap: 0.625rem; }
          .pricing-fee-value { text-align: left; }
          .pricing-compare-row { grid-template-columns: 1fr; gap: 0.5rem; }
          .pricing-included-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "60rem",
          margin: "0 auto",
          padding: "0 1.5rem 8rem",
        }}
      >
        {/* ── Hero ── */}
        <div style={{ padding: "5rem 0 4rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: INK,
              marginBottom: "1rem",
            }}
          >
            Every fee, explained
          </p>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Pricing built for
            <br />
            global builders.
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#888888",
              maxWidth: "30rem",
              margin: "0 auto 2rem",
              lineHeight: 1.65,
            }}
          >
            We only make money when you do. See exactly what you pay — and
            exactly what you keep.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.625rem",
            }}
          >
            {[
              "No setup fees",
              "No monthly fees",
              "No hidden fees",
              "Pay only when you get paid",
            ].map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.45rem 0.95rem",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "9999px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#444444",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8.5l3.5 3.5L13 4.5"
                    stroke={INK}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Payments ── */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionLabel>Payments</SectionLabel>
          <Card>
            <CardHeader
              icon={
                <IconChip>
                  <CardIcon />
                </IconChip>
              }
              title="Payments"
              desc="Accept payments globally without stitching multiple providers."
              bullets={[
                "One integration, every market and currency.",
                "Instant NGN settlement — nights, weekends and holidays included.",
                "Settle to NGN or USD — your choice.",
                "No ACH fees or settlement delays.",
                "Pass fees to your customers, or absorb them. Your call.",
              ]}
              cta
            />

            <GroupLabel>NGN (Local)</GroupLabel>
            <FeeRow
              label="Bank transfer"
              desc="Direct bank transfers to Nigerian accounts."
              value="1.5%"
              subs={[
                "capped at ₦2,000 — the absolute maximum you'll ever pay per transaction",
              ]}
              last
            />

            <GroupLabel>Global</GroupLabel>
            <FeeRow
              label="Cards"
              desc="Visa, Mastercard, and major digital wallets for global customers. No need for ACH withdrawal — withdraw as USDT directly or convert to NGN immediately."
              value="5% + 50¢"
              last
            />
          </Card>
        </div>

        {/* ── Mobile Money ── */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionLabel>Mobile Money</SectionLabel>
          <Card>
            <CardHeader
              icon={
                <IconChip>
                  <PhoneIcon />
                </IconChip>
              }
              title="Mobile money"
              desc="Reach customers across Africa's biggest mobile wallets."
            />
            <div style={{ marginTop: "0.5rem" }}>
              <FeeRow
                label="Ghana & Kenya"
                desc="M-Pesa, MTN MoMo, Airtel Money and other GHS / KES wallets."
                value="2%"
                subs={["+1% for currency conversions"]}
              />
              <FeeRow
                label="Other African markets"
                desc="XAF, XOF, UGX, ZMW, TZS and RWF mobile wallets."
                value="3%"
                subs={["+1% for currency conversions"]}
                last
              />
            </div>
          </Card>
        </div>

        {/* ── Crypto ── */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionLabel>Crypto</SectionLabel>
          <Card>
            <CardHeader
              icon={
                <IconChip>
                  <CoinIcon />
                </IconChip>
              }
              title="Crypto"
              desc="Accept stablecoins with instant, borderless settlement."
            />
            <div style={{ marginTop: "0.5rem" }}>
              <FeeRow
                label="USDT & supported networks"
                desc="Accept USDC and USDT on supported EVM-compatible networks."
                value="1.5%"
                last
              />
            </div>
          </Card>
        </div>

        {/* ── Do the math ── */}
        <div style={{ margin: "5rem 0" }}>
          <SectionLabel>Do the math</SectionLabel>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            What you actually keep.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              color: "#888888",
              marginBottom: "2rem",
              maxWidth: "34rem",
              lineHeight: 1.6,
            }}
          >
            Real numbers, no asterisks. Here's what our pricing looks like on
            actual sales.
          </p>
          <div className="pricing-math-grid">
            <MathCard
              scenario="Your customer pays ₦100,000 by bank transfer"
              lines={[
                ["Fee (1.5%)", "₦1,500"],
                ["You keep", "₦98,500"],
              ]}
              takeaway="Settled to your NGN balance instantly — ready to withdraw, even on a Sunday."
            />
            <MathCard
              scenario="Your customer pays ₦2,000,000 by bank transfer"
              lines={[
                ["Fee (capped)", "₦2,000"],
                ["You keep", "₦1,998,000"],
              ]}
              takeaway="That's an effective rate of 0.1%. The bigger the sale, the less you pay."
            />
            <MathCard
              scenario="Your customer pays $100 by card from anywhere"
              lines={[
                ["Fee (5% + 50¢)", "$5.50"],
                ["You keep", "$94.50"],
              ]}
              takeaway="Straight to your USD balance — withdraw as USDT or convert to NGN instantly."
            />
          </div>
        </div>

        {/* ── Everything included ── */}
        <div style={{ margin: "5rem 0" }}>
          <SectionLabel>Included with every rate</SectionLabel>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            The rate is the whole price.
          </h2>
          <Card style={{ padding: "2.5rem" }}>
            <div className="pricing-included-grid">
              {INCLUDED.map((item) => (
                <div key={item.title}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    <CheckIcon />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: INK,
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#888888",
                      lineHeight: 1.6,
                      margin: 0,
                      paddingLeft: "1.45rem",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── Why Bachs / comparison ── */}
        <div style={{ margin: "5rem 0" }}>
          <SectionLabel>Why Bachs</SectionLabel>
          <Card style={{ background: INK, border: "none", padding: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              You're not just saving fees.
              <br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                You're removing invisible losses.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.65,
                maxWidth: "38rem",
                marginBottom: "2rem",
              }}
            >
              The stitched stack — one provider for NGN, another for mobile
              money, a third for global cards — doesn't just cost more in fees.
              It bleeds money through FX spreads, transfer hops, and idle
              settlement delays.
            </p>

            {/* Header row */}
            <div
              className="pricing-compare-row"
              style={{
                padding: "0 0 0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                With Bachs
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                The stitched stack
              </span>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.label}
                className="pricing-compare-row"
                style={{
                  padding: "1.125rem 0",
                  borderBottom:
                    i === COMPARISON.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.5,
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.55,
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0, marginTop: "0.25rem" }}
                  >
                    <path
                      d="M3 8l3 3 7-7"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {row.bachs}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ flexShrink: 0 }}>×</span>
                  {row.stack}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* ── FAQ ── */}
        <div style={{ margin: "5rem 0" }}>
          <SectionLabel>Common questions</SectionLabel>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            No stupid questions. Ask away.
          </h2>
          <div>
            {FAQS.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#888888",
              marginTop: "1.5rem",
            }}
          >
            Processing serious volume?{" "}
            <a
              href="https://cal.com/bolu-dada/bachs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: INK, fontWeight: 500 }}
            >
              Talk to us about custom rates →
            </a>
          </p>
        </div>

        {/* ── Final CTA ── */}
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.025em",
              marginBottom: "0.75rem",
            }}
          >
            Stop stitching payment providers together.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              color: "#aaaaaa",
              marginBottom: "2.5rem",
            }}
          >
            Get paid globally. Keep more of what you earn.
          </p>
          <a
            href="/early-access"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              background: INK,
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
              borderRadius: "9999px",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = INK_HOVER)}
            onMouseOut={(e) => (e.currentTarget.style.background = INK)}
          >
            Get started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

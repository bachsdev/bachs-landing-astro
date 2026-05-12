import _logoLockup2x from "../../assets/icons/header-lockup-2x.png";
const logoLockup2x = _logoLockup2x.src ?? _logoLockup2x;
import _logoLockup8x from "../../assets/icons/header-lockup-8x.png";
const logoLockup8x = _logoLockup8x.src ?? _logoLockup8x;

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0, marginTop: "0.15rem" }}
    >
      <path
        d="M3 8l3 3 7-7"
        stroke="#111111"
        strokeWidth="1.75"
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
        borderRadius: "1rem",
        padding: "2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        background: "rgba(0,0,0,0.06)",
        margin: "1.5rem 0",
      }}
    />
  );
}

function LineItem({ label, desc, value, sub, crossed, indent = false }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1.5rem",
        paddingLeft: indent ? "1rem" : 0,
        padding: "0.875rem 0",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "#111111",
          }}
        >
          {label}
        </div>
        {desc && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#888888",
              marginTop: "0.2rem",
              lineHeight: 1.5,
              maxWidth: "32rem",
            }}
          >
            {desc}
          </div>
        )}
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "#111111",
          }}
        >
          {value}
        </div>
        {crossed && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#aaaaaa",
              textDecoration: "line-through",
              marginTop: "0.15rem",
            }}
          >
            {crossed}
          </div>
        )}
        {sub && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "0.75rem",
              color: "#aaaaaa",
              marginTop: "0.15rem",
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

function BulletRow({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.625rem",
        marginBottom: "0.625rem",
      }}
    >
      <Check />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9375rem",
          color: "#444444",
          lineHeight: 1.6,
        }}
      >
        {children}
      </span>
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
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "#aaaaaa",
        marginBottom: "0.25rem",
        marginTop: "1.5rem",
      }}
    >
      {children}
    </p>
  );
}

export function PricingPage({ navigate }) {
  return (
    <main style={{ minHeight: "100vh", background: "#f9f9f8" }}>
      <style>{`
        .pricing-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .pricing-section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .pricing-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        @media (max-width: 720px) {
          .pricing-plans { grid-template-columns: 1fr; }
          .pricing-section-grid { grid-template-columns: 1fr; }
          .pricing-why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(249,249,248,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          padding: "0 1.5rem",
          height: "3.75rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "60rem",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" style={{ display: "inline-block" }}>
            <img
              src={logoLockup8x}
              srcSet={`${logoLockup2x} 2x, ${logoLockup8x} 8x`}
              alt="Bachs"
              style={{ height: "2rem" }}
            />
          </a>
          <a
            href="/early-access"
            style={{
              padding: "0.5rem 1.125rem",
              background: "#111111",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 500,
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            Get early access
          </a>
        </div>
      </header>

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
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1.25rem",
            }}
          >
            Pricing
          </p>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 600,
              color: "#111111",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Pricing built for
            <br />
            global builders.
          </h1>
          <div
            style={{
              display: "inline-block",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 600,
              color: "#111111",
              marginBottom: "0.75rem",
            }}
          >
            Start at 1.2%
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#888888",
              maxWidth: "30rem",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            No hidden fees. Pay only for what you use, whether you're just
            starting or scaling globally.
          </p>
        </div>

        {/* ── Plans ── */}
        <div style={{ marginBottom: "5rem" }}>
          <SectionLabel>Plans</SectionLabel>
          <div className="pricing-plans">
            {/* Standard */}
            <Card>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#111111",
                  marginBottom: "0.375rem",
                }}
              >
                Standard
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#888888",
                  marginBottom: "2rem",
                }}
              >
                Pay-as-you-go. No setup fees, no monthly costs.
              </p>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                1.2%
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "#333333",
                  marginBottom: "2rem",
                }}
              >
                Per successful local transaction
              </p>
              <a
                href="/early-access"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.75rem 1.5rem",
                  background: "#111111",
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#333333")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#111111")
                }
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Card>

            {/* Enterprise */}
            <Card style={{ background: "#111111", border: "none" }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.375rem",
                }}
              >
                Enterprise
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "1.5rem",
                }}
              >
                Custom pricing for high-volume businesses.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  marginBottom: "2rem",
                }}
              >
                {[
                  "Volume-based discounts",
                  "Dedicated support",
                  "Custom settlement flows",
                  "Country-Specific Rates",
                ].map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      marginBottom: "0.625rem",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "0.15rem" }}
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://cal.com/bolu-dada/bachs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Contact sales
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
            </Card>
          </div>
        </div>

        {/* ── Payments ── */}
        <div style={{ marginBottom: "4rem" }}>
          <SectionLabel>Payments</SectionLabel>
          <Card>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#111111",
                marginBottom: "0.375rem",
              }}
            >
              Accept payments globally without stitching multiple providers.
            </h2>
            <Divider />

            <GroupLabel>NGN (Local)</GroupLabel>
            <LineItem
              label="Bank transfer"
              desc="Direct bank transfers to Nigerian accounts."
              value="1.2%"
              crossed="Others charge 1.5% + ₦100"
              indent
            />
            <LineItem
              label="Local cards"
              desc="Nigerian-issued Visa and Mastercard."
              value="2%"
              indent
            />

            <GroupLabel>Global</GroupLabel>
            <LineItem
              label="Cards"
              desc={
                <>
                  Visa, Mastercard, and major digital wallets for global
                  customers.
                  <br />
                  No need for ACH withdrawal. Withdraw as USDT directly or swap
                  to NGN immediately.
                </>
              }
              value="4% + $0.40"
              sub="+1.5% for non-US cards"
              indent
            />

            <GroupLabel>Mobile money</GroupLabel>
            <LineItem
              label="Supported African markets"
              desc="M-Pesa, MTN MoMo, Airtel Money, and other African mobile wallets."
              value="3%"
              sub="+1% for auto conversion to NGN"
              indent
            />

            <GroupLabel>Crypto</GroupLabel>
            <LineItem
              label="USDT & supported networks"
              desc="Accept USDC and USDT on supported EVM-compatible networks."
              value="1.5%"
              indent
            />

            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#aaaaaa",
                marginBottom: "0.875rem",
                marginTop: "2rem",
              }}
            >
              What you're replacing
            </div>
            <div className="pricing-why-grid">
              <div
                style={{
                  background: "#f9f9f8",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#bbbbbb",
                    marginBottom: "0.875rem",
                  }}
                >
                  The old way
                </p>
                {[
                  "Multiple tools for different currencies and regions",
                  "Taking on FX risk every time money changes hands",
                  "Paying ACH fees just to move USD before converting to NGN",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#888888",
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#cccccc", flexShrink: 0 }}>×</span>{" "}
                    {t}
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: "#111111",
                  borderRadius: "0.75rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "0.875rem",
                  }}
                >
                  With Bachs
                </p>
                {[
                  "One integration handles every currency and market",
                  "We absorb the FX risk. You get a clean rate",
                  "NGN settlement directly. No intermediate hops",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "0.2rem" }}
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* ── Balances + Payouts + FX ── */}
        <div style={{ marginBottom: "4rem" }}>
          <SectionLabel>Balances, Payouts & FX</SectionLabel>
          <div className="pricing-section-grid">
            <Card>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "#111111",
                  marginBottom: "0.375rem",
                }}
              >
                Balances
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#888888",
                  marginBottom: "1.25rem",
                }}
              >
                Get paid in the currency your customer uses.
              </p>
              <LineItem label="NGN payments" value="NGN balance" />
              <LineItem
                label="Global payments"
                desc="Withdrawable as stablecoin or convert to NGN. Instant payout, no ACH delay or deposit fees."
                value="USD balance"
                last
              />
            </Card>
            <Card>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "#111111",
                  marginBottom: "0.375rem",
                }}
              >
                Payouts
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#888888",
                  marginBottom: "1.25rem",
                }}
              >
                Move money how you want.
              </p>
              <LineItem label="NGN → Local bank" value="Free" />
              <LineItem label="USD → USDT" value="$1.00" last />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#aaaaaa",
                  lineHeight: 1.6,
                  marginTop: "1rem",
                }}
              >
                Fast, reliable, global.
              </p>
            </Card>
          </div>
          <Card style={{ marginTop: "1.25rem" }}>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "#111111",
                marginBottom: "0.375rem",
              }}
            >
              Currency Conversion
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "#888888",
                marginBottom: "1.25rem",
              }}
            >
              Convert only when you need to.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {["USD → NGN", "Competitive FX rates", "No hidden charges"].map(
                (f) => (
                  <div
                    key={f}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      background: "#f9f9f8",
                      borderRadius: "9999px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#444444",
                    }}
                  >
                    <Check /> {f}
                  </div>
                ),
              )}
            </div>
          </Card>
        </div>

        {/* ── Refunds, Disputes ── */}
        <div style={{ marginBottom: "4rem" }}>
          <SectionLabel>Refunds & Disputes</SectionLabel>
          <Card>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "#111111",
                marginBottom: "0.375rem",
              }}
            >
              Clear, predictable fees.
            </h3>
            <Divider />
            <LineItem label="Refunds" value="$1.00" sub="per refund" />
            <LineItem
              label="Disputes / Chargebacks"
              value="$30.00"
              sub="per dispute"
            />
          </Card>
        </div>

        {/* ── Billing & Recovery ── */}
        <div style={{ marginBottom: "4rem" }}>
          <SectionLabel>Billing & Revenue Tools</SectionLabel>
          <div className="pricing-section-grid">
            <Card>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "#111111",
                  marginBottom: "0.375rem",
                }}
              >
                Billing
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#888888",
                  marginBottom: "1.25rem",
                }}
              >
                Everything you need to monetize. Only pay if you use it.
              </p>
              <LineItem label="Subscriptions & usage billing" value="+0.5%" />
              <LineItem label="Tax handling" value="+0.5%" />
              <LineItem label="Invoicing" value="Included" />
              <LineItem label="Analytics & reporting" value="Included" />
            </Card>
            <Card>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "#111111",
                  marginBottom: "0.375rem",
                }}
              >
                Recovery
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#888888",
                  marginBottom: "1.25rem",
                }}
              >
                Recover lost revenue automatically.
              </p>
              <LineItem
                label="Abandoned checkout recovery"
                value="Free to enable"
              />
              <LineItem label="Subscription dunning" value="Free to enable" />
              <Divider />
              <div
                style={{
                  background: "#f9f9f8",
                  borderRadius: "0.625rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#111111",
                    marginBottom: "0.25rem",
                  }}
                >
                  5%
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#888888",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  on successfully recovered revenue. You pay nothing if nothing
                  is recovered.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* ── Fraud & Security ── */}
        <div style={{ marginBottom: "4rem" }}>
          <SectionLabel>Fraud & Security</SectionLabel>
          <Card>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "#111111",
                marginBottom: "0.375rem",
              }}
            >
              Built-in protection.
            </h3>
            <Divider />
            <BulletRow>No % fee on transactions</BulletRow>
            <BulletRow>Transparent event-based pricing</BulletRow>
            <BulletRow>No hidden charges</BulletRow>
          </Card>
        </div>

        {/* ── Why Bachs ── */}
        <div style={{ marginBottom: "5rem" }}>
          <SectionLabel>Why Bachs</SectionLabel>
          <Card style={{ background: "#111111", border: "none" }}>
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
            <Divider />
            <div className="pricing-why-grid">
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "1rem",
                  }}
                >
                  Your current stack
                </p>
                {[
                  "Paystack → NGN",
                  "Flutterwave → Mobile money",
                  "Polar → Global cards",
                  "FX conversions → hidden losses",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "0.625rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>–</span>{" "}
                    {t}
                  </div>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "1rem",
                  }}
                >
                  With Bachs
                </p>
                {[
                  "One integration",
                  "One balance system",
                  "No unnecessary conversions",
                  "Full control over how you get paid",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: "0.625rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* ── Final CTA ── */}
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 600,
              color: "#111111",
              letterSpacing: "-0.025em",
              marginBottom: "0.75rem",
            }}
          >
            Stop stitching payment providers together.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#888888",
              marginBottom: "0.375rem",
            }}
          >
            Start at 1.2%
          </p>
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
              background: "#111111",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 500,
              borderRadius: "9999px",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#333333")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#111111")}
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

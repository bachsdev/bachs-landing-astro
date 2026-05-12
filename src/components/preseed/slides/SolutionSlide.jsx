import { Slide } from '../Slide'

export function SolutionSlide({ state }) {
  return (
    <Slide id="s4" state={state}>
      <div className="lbl">03 — The Solution</div>
      <div className="s4-top">
        <div className="s4-h">One platform.<br />Everything a SaaS needs.</div>
        <div className="s4-sub">Bachs replaces 6–8 stitched-together fintechs with one coherent platform — built for internet businesses, built for global customers. Developer-first from day one.</div>
      </div>
      <div className="s4-grid">
        <div className="feat">
          <div className="feat-bar" style={{ background: '#2563EB' }} />
          <div className="feat-h">Global Checkout</div>
          <div className="feat-b">Cards, mobile money, bank transfer, and stablecoin — one session that detects the customer's location and surfaces the right methods automatically.</div>
          <div className="feat-ref">Stripe Checkout · Paddle</div>
        </div>
        <div className="feat">
          <div className="feat-bar" style={{ background: '#16A34A' }} />
          <div className="feat-h">Subscription Engine</div>
          <div className="feat-b">Full billing lifecycle — trials, upgrades, pauses, proration, and dunning. Founders stop building billing logic and start building product.</div>
          <div className="feat-ref">Stripe Billing · Paddle</div>
        </div>
        <div className="feat">
          <div className="feat-bar" style={{ background: '#D97706' }} />
          <div className="feat-h">Usage Billing</div>
          <div className="feat-b">Meter API calls, tokens, seats, or any custom unit. Bachs handles aggregation, rating, and invoice generation. Built for AI products.</div>
          <div className="feat-ref">Stripe Meters · Orb</div>
        </div>
        <div className="feat">
          <div className="feat-bar" style={{ background: '#5B5BD6' }} />
          <div className="feat-h">Native Crypto</div>
          <div className="feat-b">USDT &amp; USDC as first-class payment methods — not a plugin, not a redirect. Same checkout UI. Builders receive fiat settlement.</div>
          <div className="feat-ref">Bachs-first — no analog</div>
        </div>
        <div className="feat">
          <div className="feat-bar" style={{ background: '#DC2626' }} />
          <div className="feat-h">Tax — MOR &amp; Assist</div>
          <div className="feat-b">MOR: Bachs handles all VAT/GST registration, filing globally. Tax Assist: we calculate and surface obligations. Builder's choice.</div>
          <div className="feat-ref">Paddle MOR · Stripe Tax</div>
        </div>
        <div className="feat">
          <div className="feat-bar" style={{ background: '#0F766E' }} />
          <div className="feat-h">Fast Settlement</div>
          <div className="feat-b">Stablecoin rails under the hood, invisible to devs. Fiat in, fiat out. NGN, GHS, KES settled in 24–48 hours without friction.</div>
          <div className="feat-ref">Internal — transparent</div>
        </div>
      </div>
      <div className="snum">04</div>
    </Slide>
  )
}

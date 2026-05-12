import { Slide } from '../Slide'

export function MarketSlide({ state }) {
  return (
    <Slide id="s5" state={state}>
      <div className="lbl">04 — Market Opportunity</div>
      <div className="s5-h">A massive market with no adequate infrastructure.</div>
      <div className="s5-sub">The African fintech market is growing at 38% CAGR. The SaaS billing and payment infrastructure layer — Bachs' specific wedge — is the fastest-growing and least-served segment.</div>
      <div className="s5-main">
        <div className="tam-stack">
          <div className="tam-row">
            <div className="tam-fill" style={{ width: '100%' }} />
            <div className="tam-tag">TAM</div>
            <div className="tam-desc">
              <div className="tam-title">Africa &amp; Global Internet Business Payments</div>
              <div className="tam-body">Total payment volume processed by or for African internet businesses globally — including cross-border SaaS, digital products, and marketplace payments.</div>
            </div>
            <div className="tam-val">$108B</div>
          </div>
          <div className="tam-row">
            <div className="tam-fill" style={{ width: '55%' }} />
            <div className="tam-tag">SAM</div>
            <div className="tam-desc">
              <div className="tam-title">Africa SaaS &amp; Digital Product Billing Infrastructure</div>
              <div className="tam-body">African-built SaaS, API, and digital product businesses that need subscription, usage, and global checkout infrastructure. MEA SaaS market at $18.9B, growing 13.4% CAGR.</div>
            </div>
            <div className="tam-val">$18.9B</div>
          </div>
          <div className="tam-row">
            <div className="tam-fill" style={{ width: '20%' }} />
            <div className="tam-tag">SOM</div>
            <div className="tam-desc">
              <div className="tam-title">Nigeria, Kenya &amp; Ghana Developer Market — Years 1–3</div>
              <div className="tam-body">Technical founders in our three primary markets building SaaS and API products with global customers. Addressable at current team size with existing go-to-market.</div>
            </div>
            <div className="tam-val">$500M</div>
          </div>
        </div>
        <div className="s5-right">
          <div className="s5-stat">
            <div className="s5-stat-n">38%</div>
            <div className="s5-stat-l">CAGR of Africa fintech market 2021–2025</div>
          </div>
          <div className="s5-stat">
            <div className="s5-stat-n">$176B</div>
            <div className="s5-stat-l">MEA fintech market projected by 2030</div>
          </div>
          <div className="s5-stat">
            <div className="s5-stat-n">0</div>
            <div className="s5-stat-l">Stripe-quality SaaS billing platforms built for African founders</div>
          </div>
          <div className="s5-stat inv">
            <div className="s5-stat-n">$30B</div>
            <div className="s5-stat-l">Africa fintech revenue projected by 2025 — up from $4B in 2020 (McKinsey)</div>
          </div>
        </div>
      </div>
      <div className="snum">05</div>
    </Slide>
  )
}

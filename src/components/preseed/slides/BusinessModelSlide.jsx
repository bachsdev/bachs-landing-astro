import { Slide } from '../Slide'

export function BusinessModelSlide({ state }) {
  return (
    <Slide id="s8" state={state}>
      <div className="lbl">07 — Business Model</div>
      <div className="s8-wrap">
        <div className="s8-left">
          <div className="s8-h">We earn when customers earn.</div>
          <div className="s8-p">Every revenue stream scales directly with the volume processed on the platform. Unit economics comparable to Stripe at scale — in a market with no incumbent.</div>
          <div className="s8-note">As Bachs captures the SaaS wedge, Capital and Cards become natural expansions — with billing data already on platform for underwriting.</div>
        </div>
        <div className="s8-grid">
          <div className="rev">
            <div className="rev-lbl">Payment Processing</div>
            <div className="rev-rate">
              1.5–2.9%
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '13px', fontWeight: 400, color: 'var(--sub)' }}> + $0.30</span>
            </div>
            <div className="rev-desc">Per transaction across all payment methods. Blended global card + local method rates.</div>
          </div>
          <div className="rev">
            <div className="rev-lbl">Subscription Fee</div>
            <div className="rev-rate">0.5% MRR</div>
            <div className="rev-desc">Of recurring revenue managed through the billing engine. Scales with customer growth.</div>
          </div>
          <div className="rev">
            <div className="rev-lbl">Crypto Checkout</div>
            <div className="rev-rate">1% flat</div>
            <div className="rev-desc">Flat fee on stablecoin payments. Simpler than card, no network fee complexity.</div>
          </div>
          <div className="rev">
            <div className="rev-lbl">Connect Platform</div>
            <div className="rev-rate">0.25% GMV</div>
            <div className="rev-desc">Of gross marketplace volume through Bachs Connect. Grows with platform scale.</div>
          </div>
        </div>
      </div>
      <div className="snum">08</div>
    </Slide>
  )
}

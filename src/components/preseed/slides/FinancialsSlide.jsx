import { Slide } from '../Slide'

const monoLabel = {
  fontFamily: "'DM Mono',monospace",
  fontSize: '9px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--sub)',
  marginBottom: '10px',
}

export function FinancialsSlide({ state }) {
  return (
    <Slide id="s12" state={state}>
      <div className="lbl">11 — Financials &amp; Roadmap</div>
      <div className="s12-h">Already processing. Built to scale.</div>
      <div className="s12-sub">Bachs is live and processing $100K monthly. The raise accelerates product build and market penetration across three phases.</div>
      <div className="s12-main">
        <div>
          <div style={monoLabel}>Current Metrics</div>
          <div className="s12-now">
            <div className="s12-now-row">
              <div>
                <div className="s12-now-label">Monthly Volume</div>
                <div className="s12-now-sub">Processing today on Bachs</div>
              </div>
              <div className="s12-now-val">$100K</div>
            </div>
            <div className="s12-now-row">
              <div>
                <div className="s12-now-label">SyncGram GMV</div>
                <div className="s12-now-sub">Proven on same infrastructure</div>
              </div>
              <div className="s12-now-val">$1.3M</div>
            </div>
            <div className="s12-now-row">
              <div>
                <div className="s12-now-label">Businesses</div>
                <div className="s12-now-sub">Active on SyncGram platform</div>
              </div>
              <div className="s12-now-val">600</div>
            </div>
          </div>
        </div>
        <div>
          <div style={monoLabel}>12-Month Roadmap</div>
          <div className="s12-road">
            <div className="s12-road-row">
              <div className="s12-mo">M1–3</div>
              <div>
                <div className="s12-rt">Developer launch</div>
                <div className="s12-rb">Global checkout + subscriptions live · First 25 paying developers · SDK + docs shipped</div>
              </div>
            </div>
            <div className="s12-road-row">
              <div className="s12-mo">M3–6</div>
              <div>
                <div className="s12-rt">Platform &amp; creator expansion</div>
                <div className="s12-rb">Bachs Connect live · Marketplace onboarding · Usage billing · Tax assist mode</div>
              </div>
            </div>
            <div className="s12-road-row">
              <div className="s12-mo">M6–9</div>
              <div>
                <div className="s12-rt">Bigger SaaS products</div>
                <div className="s12-rb">Advanced billing features · Expand to Kenya + Ghana markets</div>
              </div>
            </div>
            <div className="s12-road-row">
              <div className="s12-mo">M9–12</div>
              <div>
                <div className="s12-rt">Scale &amp; raise</div>
                <div className="s12-rb">Seed round · SaaS metrics dashboard · Francophone Africa entry · 150+ customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="snum">12</div>
    </Slide>
  )
}

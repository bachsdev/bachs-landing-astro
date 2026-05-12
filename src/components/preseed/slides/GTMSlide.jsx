import { Slide } from '../Slide'

export function GTMSlide({ state }) {
  return (
    <Slide id="s10" state={state}>
      <div className="lbl">09 — Go-To-Market</div>
      <div className="s10-h">Start with the builders who build in public.</div>
      <div className="s10-phases">
        <div className="s10-phase">
          <div className="s10-pn">
            <div className="s10-pl">M1–3 · Phase 1</div>
            <div className="s10-pname">Early-stage developers</div>
          </div>
          <div className="s10-col">
            <div className="s10-item">Target African builder Twitter/X — 50K+ founders who share tools and revenue publicly</div>
            <div className="s10-item">Free tier under $1K MRR to drive organic word-of-mouth flywheel</div>
          </div>
          <div className="s10-col">
            <div className="s10-item">API key in 60 seconds. Working integration in under 10 minutes</div>
            <div className="s10-item">Ship: global checkout, subscription engine, developer dashboard, SDK</div>
          </div>
        </div>
        <div className="s10-phase">
          <div className="s10-pn">
            <div className="s10-pl">M3–6 · Phase 2</div>
            <div className="s10-pname">Creator &amp; marketplace platforms</div>
          </div>
          <div className="s10-col">
            <div className="s10-item">Target Selar/Mainstack-type platforms needing Bachs Connect layer</div>
            <div className="s10-item">Accelerator partnerships — Techstars Lagos, ALX, Ventures Platform</div>
          </div>
          <div className="s10-col">
            <div className="s10-item">Ship: Bachs Connect (split payments, creator payouts), usage billing</div>
            <div className="s10-item">Tax assist mode live — VAT/GST calculation for global sellers</div>
          </div>
        </div>
        <div className="s10-phase">
          <div className="s10-pn">
            <div className="s10-pl">M6–9 · Phase 3</div>
            <div className="s10-pname">Bigger SaaS products</div>
          </div>
          <div className="s10-col">
            <div className="s10-item">Enterprise SaaS with complex billing — seat-based, usage, annual contracts</div>
            <div className="s10-item">Expand from Nigeria, Kenya, Ghana into Francophone Africa</div>
          </div>
          <div className="s10-col">
            <div className="s10-item">Ship: MOR mode, advanced dunning, customer portal, SaaS metrics dashboard</div>
            <div className="s10-item">Strategic fintech partnerships for broader local payment method coverage</div>
          </div>
        </div>
      </div>
      <div className="snum">10</div>
    </Slide>
  )
}

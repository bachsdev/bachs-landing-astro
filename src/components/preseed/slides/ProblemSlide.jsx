import { Slide } from '../Slide'

export function ProblemSlide({ state }) {
  return (
    <Slide id="s2" state={state}>
      <div className="lbl">01 — The Problem</div>
      <div className="s2-head">Builders have no financial infrastructure designed for them.</div>
      <div className="s2-list">
        <div className="s2-row">
          <div className="s2-n">01</div>
          <div className="s2-title">No global checkout</div>
          <div className="s2-body">Paystack and Flutterwave collect locally. A SaaS with customers in the US, UK, or Europe has no clean way to charge them. Revenue left on the table at every signup.</div>
          <div className="s2-tag">Acquisition loss</div>
        </div>
        <div className="s2-row">
          <div className="s2-n">02</div>
          <div className="s2-title">No subscription engine</div>
          <div className="s2-body">Existing gateways handle one-time charges only. Trials, metered billing, proration — founders build this logic themselves, in their own database, forever. It breaks. It doesn't scale.</div>
          <div className="s2-tag">Engineering tax</div>
        </div>
        <div className="s2-row">
          <div className="s2-n">03</div>
          <div className="s2-title">Tax is a silent bomb</div>
          <div className="s2-body">A builder selling to EU customers owes VAT. Nobody tells them. Nobody handles it. A compliance liability that grows every month they ignore it.</div>
          <div className="s2-tag">Legal exposure</div>
        </div>
        <div className="s2-row">
          <div className="s2-n">04</div>
          <div className="s2-title">Settlement is fragmented</div>
          <div className="s2-body">Earn USD somewhere, GHS on Paystack, GBP elsewhere. Getting money home fast and cheaply requires a separate stack of tools. More time moving money than building product.</div>
          <div className="s2-tag">Cash flow friction</div>
        </div>
        <div className="s2-row">
          <div className="s2-n">05</div>
          <div className="s2-title">Crypto is off the table</div>
          <div className="s2-body">Stablecoin adoption is exploding. Builders already receive USDT from clients — informally, over WhatsApp, with no checkout and no professional flow. Nobody is capturing this.</div>
          <div className="s2-tag">Revenue missed</div>
        </div>
      </div>
      <div className="snum">02</div>
    </Slide>
  )
}

import { Slide } from '../Slide'

export function TeamSlide({ state }) {
  return (
    <Slide id="s11" state={state}>
      <div className="s11-l">
        <div className="s11-h">Built by two founders who've done this before.</div>
        <div className="s11-founders">
          <div className="s11-founder">
            <div className="s11-fn">Bolu Dada</div>
            <div className="s11-fr">Co-Founder &amp; CEO · Previously SyncGram</div>
            <div className="s11-fb">Built SyncGram — a creator monetization platform (think Whop/Kajabi) that processed $1.3M GMV. Partnered with all major fintechs across Africa and Europe to make it work.</div>
            <div className="s11-fb">Product lead. Full-stack engineer. Knows how to ship.</div>
          </div>
          <div className="s11-founder">
            <div className="s11-fn">Tega Akpojiyovwi</div>
            <div className="s11-fr">Co-Founder &amp; CTO · Senior Engineer at Quidax</div>
            <div className="s11-fb">Senior engineer at Quidax, Africa's leading crypto exchange. Deep experience building financial infrastructure at scale. Also co-built SyncGram.</div>
            <div className="s11-fb">Knows the rails. Knows the complexity. Has shipped production fintech before.</div>
          </div>
        </div>
      </div>
      <div className="s11-r">
        <div className="s11-box">
          <div className="s11-bl">Why we win</div>
          <div className="s11-bb">We didn't design this on a whiteboard. The core infrastructure — billing, settlement, webhooks — already exists and runs in production. We've been building and running payment infrastructure in Africa for two years. Bachs is the product that abstraction becomes.</div>
        </div>
      </div>
      <div className="snum">11</div>
    </Slide>
  )
}

import { Slide } from '../Slide'

export function TractionSlide({ state }) {
  return (
    <Slide id="s7" state={state}>
      <div className="s7-l">
        <div className="s7-eyebrow">Traction</div>
        <div className="s7-h">We've already built this — in production.</div>
        <div className="s7-b">SyncGram, our community payment platform, is live and processing real volume across African markets — with a production-hardened billing engine, webhook infrastructure, and settlement layer. Bachs is built on that foundation.</div>
        <div className="s7-numbers">
          <div className="s7-num-box dark">
            <div className="s7-nv">$1.3M</div>
            <div className="s7-nl">GMV processed on SyncGram</div>
          </div>
          <div className="s7-num-box">
            <div className="s7-nv">600</div>
            <div className="s7-nl">Businesses on the platform</div>
          </div>
          <div className="s7-num-box">
            <div className="s7-nv">$100K</div>
            <div className="s7-nl">Monthly volume on Bachs today</div>
          </div>
          <div className="s7-num-box dark">
            <div className="s7-nv">Live</div>
            <div className="s7-nl">Bachs is live and processing today</div>
          </div>
        </div>
      </div>
      <div className="s7-r">
        <div className="s7-signals">
          <div className="s7-sh">Bachs — Early Signals</div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>Global checkout live — card + stablecoin end-to-end</span></div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>Billing engine adapted from production SyncGram code</span></div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>$100K monthly volume already processing through Bachs</span></div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>Stablecoin settlement architecture designed and spec'd</span></div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>Early waitlist from the African builder community</span></div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>Developer dashboard UI in active development</span></div>
          <div className="s7-si"><span className="s7-ck">✓</span><span>API spec and SDK structure in progress</span></div>
        </div>
      </div>
      <div className="snum">07</div>
    </Slide>
  )
}

import { Slide } from "../Slide";

export function AskSlide({ state }) {
  return (
    <Slide id="s13" state={state}>
      <div className="s13-l">
        <div>
          <div className="s13-round">Pre-Seed Round · 12 months runway</div>
          <div className="s13-amount">$500K</div>
        </div>
        <div className="s13-desc">
          To ship the product and prove that builders will consolidate their
          entire payment stack onto Bachs.
        </div>
        <div className="s13-funds">
          <div className="s13-fund">
            <div className="s13-fill" style={{ width: "30%" }} />
            <div>
              <div className="s13-fname">Compliance &amp; Legal</div>
              <div className="s13-fdesc">
                Licensing, financial regulations, KYC and AML protocols
              </div>
            </div>
            <div className="s13-fpct">30%</div>
          </div>
          <div className="s13-fund">
            <div className="s13-fill" style={{ width: "25%" }} />
            <div>
              <div className="s13-fname">Product &amp; Engineering</div>
              <div className="s13-fdesc">
                Core platforms, fraud engine, AI/ML investment, cybersecurity
              </div>
            </div>
            <div className="s13-fpct">25%</div>
          </div>
          <div className="s13-fund">
            <div className="s13-fill" style={{ width: "20%" }} />
            <div>
              <div className="s13-fname">Operating Float &amp; Treasury</div>
              <div className="s13-fdesc">
                Liquidity reserves, settlement float, treasury operations
              </div>
            </div>
            <div className="s13-fpct">20%</div>
          </div>
          <div className="s13-fund">
            <div className="s13-fill" style={{ width: "15%" }} />
            <div>
              <div className="s13-fname">Talent Acquisition</div>
              <div className="s13-fdesc">
                Engineering, data science, and compliance specialists
              </div>
            </div>
            <div className="s13-fpct">15%</div>
          </div>
          <div className="s13-fund">
            <div className="s13-fill" style={{ width: "10%" }} />
            <div>
              <div className="s13-fname">Customer Acquisition</div>
              <div className="s13-fdesc">
                Digital marketing, brand building, strategic partnerships
              </div>
            </div>
            <div className="s13-fpct">10%</div>
          </div>
        </div>
      </div>
      <div className="s13-r">
        <div className="s13-close-h">
          The world is your market.
          <br />
          <em>Start charging it.</em>
        </div>
        <div className="s13-close-p">
          Bachs is the financial layer that lets builders anywhere sell to
          customers everywhere — subscriptions, usage billing, crypto, tax, and
          fast settlement in one platform.
        </div>
        <div className="s13-ct">
          <div className="s13-em">hello@bachs.io</div>
          <div className="s13-si">bachs.io</div>
        </div>
      </div>
      <div className="snum">13</div>
    </Slide>
  );
}

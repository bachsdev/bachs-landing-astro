import { Slide } from "../Slide";

export function ProductSlide({ state }) {
  return (
    <Slide id="s6" state={state}>
      <div className="s6-l">
        <div className="s6-h">
          Global checkout.
          <br />
          Crypto native.
          <br />
          One integration.
        </div>
        <div className="s6-pts">
          <div className="s6-pt">
            <div className="s6-dot" style={{ background: "#2563EB" }} />
            <div>
              <div className="s6-ph">Geographic routing</div>
              <div className="s6-pb">
                Right payment methods surfaced automatically by customer
                location.
              </div>
            </div>
          </div>
          <div className="s6-pt">
            <div className="s6-dot" style={{ background: "#5B5BD6" }} />
            <div>
              <div className="s6-ph">Crypto is first-class</div>
              <div className="s6-pb">
                USDT/USDC native in the checkout UI. Not a redirect. Builders
                receive fiat.
              </div>
            </div>
          </div>
          <div className="s6-pt">
            <div className="s6-dot" style={{ background: "#D97706" }} />
            <div>
              <div className="s6-ph">Tax calculated, silently</div>
              <div className="s6-pb">
                VAT added by location. MOR: Bachs files it. Tax Assist: we
                surface the numbers.
              </div>
            </div>
          </div>
          <div className="s6-pt">
            <div className="s6-dot" style={{ background: "#16A34A" }} />
            <div>
              <div className="s6-ph">Stablecoin rails — invisible</div>
              <div className="s6-pb">
                Settlement runs on USDT/USDC under the hood. They see fiat in,
                fiat out.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s6-r">
        <div className="mock">
          <div className="mock-top">
            <div className="md" style={{ background: "#FF5F57" }} />
            <div className="md" style={{ background: "#FEBC2E" }} />
            <div className="md" style={{ background: "#28C840" }} />
            <div className="mock-url">checkout.bachs.io / sess_2xGh...</div>
          </div>
          <div className="mock-in">
            <div className="mock-prod">
              <div>
                <div className="mock-pn">BuilderKit Pro</div>
                <div className="mock-ps">Monthly · billed every 30 days</div>
              </div>
              <div className="mock-price">
                $49<span>per month</span>
              </div>
            </div>
            <div className="mock-lbl">Pay with</div>
            <div className="mock-methods">
              <div className="mock-m">
                <span>💳</span>
                <span className="mock-mn">Card</span>
                <span className="mock-ms">Visa · Mastercard · Verve</span>
              </div>
              <div className="mock-m">
                <span>📱</span>
                <span className="mock-mn">Mobile Money</span>
                <span className="mock-ms">MTN · Airtel · M-Pesa</span>
              </div>
              <div className="mock-m active">
                <span>🔵</span>
                <span className="mock-mn">Stablecoin</span>
                <span className="mock-ms">USDT · USDC — 49.00 USDT</span>
              </div>
              <div className="mock-m">
                <span>🏦</span>
                <span className="mock-mn">Bank Transfer</span>
                <span className="mock-ms">NGN · GHS · KES · ZAR</span>
              </div>
            </div>
            <div className="mock-hr" />
            <div className="mock-row">
              <span>Subtotal</span>
              <span>$49.00</span>
            </div>
            <div className="mock-row">
              <span>VAT (20% · UK)</span>
              <span>$9.80</span>
            </div>
            <div className="mock-row t">
              <span>Total</span>
              <span>$58.80</span>
            </div>
            <button className="mock-btn">Subscribe · $58.80 / month</button>
          </div>
        </div>
      </div>
      <div className="snum">06</div>
    </Slide>
  );
}

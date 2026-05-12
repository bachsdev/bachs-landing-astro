import { Slide } from "../Slide";

export function CoverSlide({ state }) {
  return (
    <Slide id="s1" state={state}>
      <div className="s1-l">
        <div className="s1-ghost">B</div>
        <div className="s1-badge">
          <div className="s1-dot" />
          Pre-Seed · 2026
        </div>
        <div className="s1-name">Bachs</div>
        <div className="s1-tagline">
          Stripe for African-built internet businesses.
        </div>
      </div>
      <div className="s1-r">
        <div>
          <div className="s1-hl">
            The payment stack your
            <br />
            startup <em>actually</em> needs.
          </div>
          <div className="s1-pills">
            <div className="pill">Global Checkout</div>
            <div className="pill">Subscriptions</div>
            <div className="pill">Usage Billing</div>
            <div className="pill">Native Crypto</div>
            <div className="pill">Tax &amp; MOR</div>
            <div className="pill">Fast Settlement</div>
          </div>
        </div>
        <div className="s1-contact">hello@bachs.io &nbsp;·&nbsp; bachs.io</div>
      </div>
      <div className="snum">01</div>
    </Slide>
  );
}

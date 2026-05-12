import { Slide } from "../Slide";

export function ClosingSlide({ state }) {
  return (
    <Slide id="s14" state={state}>
      <div className="s14-l">
        <div className="s14-ghost">B</div>
        <div className="s14-l1">
          The world is
          <br />
          your market.
        </div>
        <div className="s14-l2">Start charging it.</div>
      </div>
      <div className="s14-r">
        <div className="s14-tl">
          Stripe for African-built
          <br />
          internet businesses.
        </div>
        <div className="s14-ct">
          <div className="s14-em">hello@bachs.io</div>
          <div className="s14-si">bachs.io</div>
        </div>
      </div>
      <div className="snum">14</div>
    </Slide>
  );
}

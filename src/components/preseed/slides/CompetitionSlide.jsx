import { Slide } from '../Slide'

export function CompetitionSlide({ state }) {
  return (
    <Slide id="s9" state={state}>
      <div className="lbl">08 — Competitive Landscape</div>
      <div className="s9-h">Nobody owns this intersection.</div>
      <div className="s9-sub">Global players can't serve Africa. African players can't serve the world. Bachs is the only platform doing both simultaneously.</div>
      <table className="ct">
        <thead>
          <tr>
            <th>Company</th>
            <th>Accept Global Cards</th>
            <th>Subscriptions</th>
            <th>Usage Billing</th>
            <th>Tax / MOR</th>
            <th>Crypto Native</th>
            <th>Local Rails (Mobile Money / NGN / GHS)</th>
            <th className="hl">For Builders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="co">Paystack</td>
            <td><span className="cn">✗</span></td>
            <td><span className="cp">◐</span> Basic</td>
            <td><span className="cn">✗</span></td>
            <td><span className="cn">✗</span></td>
            <td><span className="cn">✗</span></td>
            <td><span className="cy">✓</span> Local rails</td>
            <td className="hl"><span className="cn">✗</span> Merchant-first</td>
          </tr>
          <tr>
            <td className="co">Flutterwave</td>
            <td><span className="cp">◐</span> Partial</td>
            <td><span className="cp">◐</span> Basic</td>
            <td><span className="cn">✗</span></td>
            <td><span className="cn">✗</span></td>
            <td><span className="cp">◐</span> Beta</td>
            <td><span className="cy">✓</span> Local rails</td>
            <td className="hl"><span className="cn">✗</span> Merchant-first</td>
          </tr>
          <tr>
            <td className="co">Stripe</td>
            <td><span className="cy">✓</span> Global</td>
            <td><span className="cy">✓</span> Full</td>
            <td><span className="cy">✓</span> Full</td>
            <td><span className="cy">✓</span> Stripe Tax</td>
            <td><span className="cy">✓</span> Native</td>
            <td><span className="cn">✗</span> No local rails</td>
            <td className="hl"><span className="cp">◐</span> No African access</td>
          </tr>
          <tr>
            <td className="co">Korapay</td>
            <td><span className="cn">✗</span> Africa only</td>
            <td><span className="cp">◐</span> Basic</td>
            <td><span className="cn">✗</span></td>
            <td><span className="cn">✗</span></td>
            <td><span className="cn">✗</span></td>
            <td><span className="cy">✓</span> Local rails</td>
            <td className="hl"><span className="cn">✗</span> Merchant-first</td>
          </tr>
          <tr className="br">
            <td className="co">Bachs</td>
            <td><span className="cy">✓</span> Global</td>
            <td><span className="cy">✓</span> Full SaaS</td>
            <td><span className="cy">✓</span> Usage+seats</td>
            <td><span className="cy">✓</span> MOR+Assist</td>
            <td><span className="cy">✓</span> USDT/USDC</td>
            <td><span className="cy">✓</span> NGN/GHS/KES+</td>
            <td className="hl"><span className="cy">✓</span> Built for this</td>
          </tr>
        </tbody>
      </table>
      <div className="snum">09</div>
    </Slide>
  )
}

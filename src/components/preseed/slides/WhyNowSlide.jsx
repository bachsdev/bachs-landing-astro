import { Slide } from '../Slide'

export function WhyNowSlide({ state }) {
  return (
    <Slide id="s3" state={state}>
      <div className="lbl">02 — Why Now</div>
      <div className="s3-h">Three forces converging right now.</div>
      <div className="s3-forces">
        <div className="s3-force">
          <div className="s3-nc">
            <div className="s3-num">01</div>
            <div className="s3-nl">Force</div>
          </div>
          <div className="s3-body">
            <div className="s3-title">The builder cohort is maturing</div>
            <div className="s3-text">Technical founders are shipping software to global audiences from Lagos, Nairobi, and Accra. They build in public on Twitter/X, share revenue milestones, and actively seek developer-grade tools. This cohort didn't exist at scale four years ago. It exists now and is growing fast.</div>
          </div>
          <div className="s3-sc">
            <div className="s3-sn">10K+</div>
            <div className="s3-sl">African founders actively building in public</div>
          </div>
        </div>
        <div className="s3-force">
          <div className="s3-nc">
            <div className="s3-num">02</div>
            <div className="s3-nl">Force</div>
          </div>
          <div className="s3-body">
            <div className="s3-title">Stablecoin rails are production-ready</div>
            <div className="s3-text">USDT/USDC settlement has matured. Costs are a fraction of traditional correspondent banking. Sub-Saharan Africa leads the world in stablecoin adoption growth. What was a crypto experiment three years ago is now infrastructure solid enough to power a fintech's settlement layer invisibly.</div>
          </div>
          <div className="s3-sc">
            <div className="s3-sn">$50B+</div>
            <div className="s3-sl">USDT volume processed monthly in Africa</div>
          </div>
        </div>
        <div className="s3-force">
          <div className="s3-nc">
            <div className="s3-num">03</div>
            <div className="s3-nl">Force</div>
          </div>
          <div className="s3-body">
            <div className="s3-title">AI widened the gap</div>
            <div className="s3-text">The AI wave made it trivially easy to ship SaaS products, APIs, and agents from anywhere. Builders are shipping AI products to global customers today. Their payment infrastructure has not caught up. This mismatch widens every month.</div>
          </div>
          <div className="s3-sc">
            <div className="s3-sn">3×</div>
            <div className="s3-sl">Growth in African SaaS products since 2022</div>
          </div>
        </div>
      </div>
      <div className="snum">03</div>
    </Slide>
  )
}

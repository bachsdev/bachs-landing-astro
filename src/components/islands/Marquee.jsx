const ITEMS = [
  'Accept payments globally',
  'Cards & Mobile Money',
  'Stablecoin native',
  'Settle in NGN · GHS · KES · ZAR · USD',
  'VAT handled globally',
]

// Duplicate for seamless loop
const ALL_ITEMS = [...ITEMS, ...ITEMS]

export function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {ALL_ITEMS.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexShrink: 0 }}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  )
}

const TOTAL = 14

export function DeckNav({ current, onGoTo }) {
  return (
    <div className="deck-nav">
      <button
        className="nbtn"
        onClick={() => onGoTo(current - 1)}
        disabled={current === 0}
      >
        ←
      </button>
      <div className="ndots">
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            className={`ndot${i === current ? ' on' : ''}`}
            onClick={() => onGoTo(i)}
          />
        ))}
      </div>
      <div className="nctr">{current + 1} / {TOTAL}</div>
      <button
        className="nbtn"
        onClick={() => onGoTo(current + 1)}
        disabled={current === TOTAL - 1}
      >
        →
      </button>
    </div>
  )
}

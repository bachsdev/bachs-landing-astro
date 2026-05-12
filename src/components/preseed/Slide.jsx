export function Slide({ id, state, children }) {
  let className = 'slide'
  if (state === 'active') className += ' active'
  else if (state === 'exit') className += ' exit'
  return (
    <div className={className} id={id}>
      {children}
    </div>
  )
}

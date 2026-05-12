import { useEffect, useRef } from 'react'
import './preseed.css'
import { DeckLayout } from './DeckLayout'

const CANVAS_W = 1440
const CANVAS_H = 810

export function PreseedPage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    function updateScale() {
      const scale = Math.min(
        window.innerWidth / CANVAS_W,
        window.innerHeight / CANVAS_H
      )
      if (canvasRef.current) {
        canvasRef.current.style.transform = `scale(${scale})`
      }
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div className="presentation-root">
      <div className="presentation-canvas" ref={canvasRef}>
        <DeckLayout />
      </div>
    </div>
  )
}

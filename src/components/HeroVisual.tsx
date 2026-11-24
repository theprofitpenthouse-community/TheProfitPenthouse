/** Curved dark-mode monitor with a pink candlestick practice chart. Pure SVG — no image weight. */
const candles = (() => {
  let s = 11
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
  // A gentle uptrend with a pullback, so the structure labels read correctly
  const drift = [-1, -1, 1, 1, 2, -1, 2, 2, -2, -1, -1, 1, 2, 2, 3, -1, 2, 2, -2, 1, 3, 2, -1, 2, 3, 1]
  let p = 262
  return drift.map((d, i) => {
    const o = p
    const c = o - d * (4.6 + r() * 3.4)
    const h = Math.min(o, c) - (2 + r() * 6)
    const l = Math.max(o, c) + (2 + r() * 6)
    p = c
    return { i, o, c, h, l }
  })
})()

const swingIdx = 8
const bosLevel = candles[swingIdx].h
const breakIdx = candles.findIndex((k, i) => i > swingIdx + 2 && Math.min(k.o, k.c) < bosLevel)

export function HeroVisual() {
  const x0 = 62, step = 18.6
  const bx = x0 + breakIdx * step
  return (
    <div className="relative mx-auto w-full max-w-3xl" aria-hidden>
      <div className="absolute inset-x-1/4 bottom-0 h-16 rounded-full bg-blush/30 blur-3xl" />
      <svg viewBox="0 0 600 400" className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,.6)]">
        <defs>
          <linearGradient id="bezel" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2a2a33" />
            <stop offset="1" stopColor="#111116" />
          </linearGradient>
          <linearGradient id="screen" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#15121a" />
            <stop offset="1" stopColor="#0d0c11" />
          </linearGradient>
          <linearGradient id="sheen" x1="0" x2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".05" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="scr">
            <path d="M40 46 Q300 20 560 46 L560 290 Q300 312 40 290 Z" />
          </clipPath>
        </defs>
        {/* stand */}
        <path d="M270 316 L262 362 L338 362 L330 316 Z" fill="#17171d" />
        <ellipse cx="300" cy="366" rx="92" ry="10" fill="#1d1c23" />
        <ellipse cx="300" cy="364" rx="70" ry="3" fill="#F3A6C8" opacity=".25" />
        {/* bezel */}
        <path d="M28 36 Q300 6 572 36 L572 300 Q300 326 28 300 Z" fill="url(#bezel)" stroke="#D9B76E" strokeOpacity=".35" strokeWidth="1" />
        <path d="M40 46 Q300 20 560 46 L560 290 Q300 312 40 290 Z" fill="url(#screen)" />
        <g clipPath="url(#scr)">
          {/* grid */}
          {[90, 140, 190, 240].map((y) => (
            <line key={y} x1="40" x2="560" y1={y} y2={y} stroke="#fff" strokeOpacity=".05" />
          ))}
          {[140, 240, 340, 440].map((x) => (
            <line key={x} x1={x} x2={x} y1="30" y2="310" stroke="#fff" strokeOpacity=".04" />
          ))}
          {/* supply / demand zones */}
          <rect x="238" y="242" width="322" height="16" fill="#E754A6" opacity=".14" />
          <rect x="440" y="96" width="120" height="14" fill="#D9B76E" opacity=".14" />
          {/* candles */}
          {candles.map((k) => {
            const up = k.c < k.o
            const x = x0 + k.i * step
            const col = up ? '#F3A6C8' : '#FBD9E8'
            return (
              <g key={k.i}>
                <line x1={x} x2={x} y1={k.h} y2={k.l} stroke={col} strokeWidth="1.4" />
                <rect x={x - 5.5} width="11" y={Math.min(k.o, k.c)} height={Math.max(2, Math.abs(k.o - k.c))} rx="1.5" fill={col} opacity={up ? 1 : 0.92} />
              </g>
            )
          })}
          {/* structure markup */}
          <path d={`M${x0 + swingIdx * step} ${bosLevel} L${bx + 10} ${bosLevel}`} stroke="#E754A6" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={bx + 14} y={bosLevel + 16} fill="#E754A6" fontSize="11" fontWeight="700" fontFamily="Manrope, sans-serif">BOS</text>
          <text x="300" y="270" fill="#F3A6C8" fontSize="9" opacity=".8" fontFamily="Manrope, sans-serif">demand</text>
          <text x="446" y="90" fill="#D9B76E" fontSize="9" opacity=".85" fontFamily="Manrope, sans-serif">supply</text>
          {/* top bar */}
          <rect x="40" y="30" width="520" height="34" fill="#0B0B0F" opacity=".55" />
          <circle cx="64" cy="50" r="3.5" fill="#E754A6" />
          <text x="76" y="54" fill="#fff" fillOpacity=".75" fontSize="11" fontWeight="700" fontFamily="Manrope, sans-serif">Practice chart · 15m</text>
          <text x="470" y="54" fill="#F3A6C8" fontSize="10" fontWeight="700" fontFamily="Manrope, sans-serif">STUDY MODE</text>
          <rect x="40" y="20" width="520" height="300" fill="url(#sheen)" />
        </g>
      </svg>
    </div>
  )
}

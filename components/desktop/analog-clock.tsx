"use client"

import { useEffect, useState } from "react"

export function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12

  const secondDeg = (seconds / 60) * 360
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30

  return (
    <div className="relative w-32 h-32">
      {/* Clock face */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x1 = 50 + 38 * Math.cos(angle)
          const y1 = 50 + 38 * Math.sin(angle)
          const x2 = 50 + 45 * Math.cos(angle)
          const y2 = 50 + 45 * Math.sin(angle)
          const textX = 50 + 32 * Math.cos(angle)
          const textY = 50 + 32 * Math.sin(angle)
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="white"
                strokeWidth="1"
                opacity="0.7"
              />
              <text
                x={textX}
                y={textY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="8"
                opacity="0.9"
              >
                {i === 0 ? 12 : i}
              </text>
            </g>
          )
        })}

        {/* Minute markers */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 === 0) return null
          const angle = (i * 6 - 90) * (Math.PI / 180)
          const x1 = 50 + 42 * Math.cos(angle)
          const y1 = 50 + 42 * Math.sin(angle)
          const x2 = 50 + 45 * Math.cos(angle)
          const y2 = 50 + 45 * Math.sin(angle)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.5"
            />
          )
        })}

        {/* Hour hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${hourDeg} 50 50)`}
        />

        {/* Minute hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${minuteDeg} 50 50)`}
        />

        {/* Second hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="#ff6b35"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${secondDeg} 50 50)`}
        />

        {/* Center dot */}
        <circle cx="50" cy="50" r="2" fill="white" />
      </svg>
    </div>
  )
}

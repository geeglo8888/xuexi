export function ComputerIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="6" y="8" width="36" height="26" rx="2" fill="#4a90d9" stroke="#2d5a87" strokeWidth="1" />
      <rect x="8" y="10" width="32" height="20" fill="#87ceeb" />
      <rect x="18" y="34" width="12" height="4" fill="#666" />
      <rect x="14" y="38" width="20" height="3" rx="1" fill="#888" />
    </svg>
  )
}

export function PhotoIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#ff6b6b" />
      <circle cx="18" cy="18" r="4" fill="#4ecdc4" />
      <circle cx="30" cy="18" r="4" fill="#ffe66d" />
      <circle cx="24" cy="30" r="4" fill="#95e1d3" />
      <circle cx="14" cy="28" r="3" fill="#ff8b94" />
      <circle cx="34" cy="28" r="3" fill="#a8e6cf" />
      <circle cx="24" cy="14" r="3" fill="#ffd93d" />
    </svg>
  )
}

export function RecycleBinIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M14 16h20v24c0 2-2 4-4 4H18c-2 0-4-2-4-4V16z" fill="#888" />
      <rect x="12" y="12" width="24" height="4" rx="1" fill="#666" />
      <rect x="20" y="8" width="8" height="4" fill="#666" />
      <line x1="19" y1="20" x2="19" y2="38" stroke="#666" strokeWidth="1.5" />
      <line x1="24" y1="20" x2="24" y2="38" stroke="#666" strokeWidth="1.5" />
      <line x1="29" y1="20" x2="29" y2="38" stroke="#666" strokeWidth="1.5" />
    </svg>
  )
}

export function HelpIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#4a90d9" />
      <text x="24" y="32" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">?</text>
    </svg>
  )
}

export function PluginIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#e8f4fd" stroke="#4a90d9" strokeWidth="2" />
      <path d="M20 16v-4M28 16v-4" stroke="#4a90d9" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="28" r="8" fill="#4a90d9" />
      <path d="M24 24v8M20 28h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CloudIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#4a90d9" />
      <path d="M16 30c-3 0-5-2-5-5s2-5 5-5c0-4 3-7 7-7 3 0 6 2 7 5 3 0 6 3 6 6s-3 6-6 6H16z" fill="white" />
    </svg>
  )
}

export function SettingsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="24" r="18" fill="#888" />
      <circle cx="24" cy="24" r="8" fill="#666" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect
          key={i}
          x="22"
          y="4"
          width="4"
          height="8"
          fill="#888"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}
    </svg>
  )
}

export function MapIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="4" y="8" width="40" height="32" rx="2" fill="#f5e6a3" />
      <path d="M8 12l12 8-12 8V12z" fill="#4caf50" />
      <path d="M20 20l12-8v24l-12-8V20z" fill="#81c784" />
      <path d="M32 12l8 8-8 8V12z" fill="#a5d6a7" />
      <circle cx="28" cy="24" r="4" fill="#f44336" />
    </svg>
  )
}

export function LogIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="8" y="4" width="32" height="40" rx="2" fill="#e3f2fd" stroke="#90caf9" strokeWidth="2" />
      <rect x="8" y="4" width="32" height="10" fill="#90caf9" />
      <line x1="14" y1="20" x2="34" y2="20" stroke="#bbb" strokeWidth="2" />
      <line x1="14" y1="26" x2="34" y2="26" stroke="#bbb" strokeWidth="2" />
      <line x1="14" y1="32" x2="28" y2="32" stroke="#bbb" strokeWidth="2" />
      <line x1="14" y1="38" x2="24" y2="38" stroke="#bbb" strokeWidth="2" />
    </svg>
  )
}

export function AppIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#ff9800" />
      <path d="M24 12c-6.6 0-12 5.4-12 12v12h6V24c0-3.3 2.7-6 6-6s6 2.7 6 6v12h6V24c0-6.6-5.4-12-12-12z" fill="white" />
    </svg>
  )
}

"use client"

import { useEffect, useRef } from "react"

interface IconContextMenuProps {
  x: number
  y: number
  iconLabel: string
  onClose: () => void
  onOpen?: () => void
  onSettings?: () => void
}

export function IconContextMenu({ x, y, iconLabel, onClose, onOpen, onSettings }: IconContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  // Adjust position to stay within viewport
  const adjustedX = Math.min(x, window.innerWidth - 200)
  const adjustedY = Math.min(y, window.innerHeight - 100)

  return (
    <div
      ref={menuRef}
      className="fixed bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] z-50"
      style={{ left: adjustedX, top: adjustedY }}
    >
      {/* Open */}
      <button
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-blue-50 text-left"
        onClick={() => {
          onOpen?.()
          onClose()
        }}
      >
        <span className="text-blue-500 text-sm">→</span>
        <span className="flex-1 text-gray-700 text-sm">
          打开<span className="text-gray-400">(O)</span>
        </span>
        <span className="text-xs text-gray-400">Enter</span>
      </button>

      {/* Divider */}
      <div className="my-1 border-t border-gray-100" />

      {/* Desktop App Settings */}
      <button
        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-blue-50 text-left"
        onClick={() => {
          onSettings?.()
          onClose()
        }}
      >
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
        </svg>
        <span className="flex-1 text-gray-700 text-sm">
          桌面应用设置<span className="text-gray-400">(D)</span>
        </span>
      </button>
    </div>
  )
}

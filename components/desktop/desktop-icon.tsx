"use client"

import { IconContextMenu } from "./icon-context-menu"

interface DesktopIconProps {
  icon: React.ReactNode
  label: string
  isSelected: boolean
  onSelect: () => void
  onClearSelection: () => void
  contextMenu: { x: number; y: number } | null
  onContextMenu: (x: number, y: number) => void
  onCloseContextMenu: () => void
  onClick?: () => void
}

export function DesktopIcon({
  icon,
  label,
  isSelected,
  onSelect,
  onClearSelection,
  contextMenu,
  onContextMenu,
  onCloseContextMenu,
  onClick,
}: DesktopIconProps) {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onSelect()
    onContextMenu(e.clientX, e.clientY)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSelect()
  }

  return (
    <>
      <button
        className={`relative flex flex-col items-center justify-start gap-1 p-2 rounded-lg w-[72px] h-[88px] transition-all cursor-pointer ${
          isSelected ? "bg-white/25 backdrop-blur-sm" : "hover:bg-white/10"
        }`}
        onClick={handleClick}
        onDoubleClick={onClick}
        onContextMenu={handleContextMenu}
      >
        {/* Selection checkmark */}
        {isSelected && (
          <div className="absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        )}
        <div className="w-14 h-14 flex items-center justify-center shrink-0">{icon}</div>
        <span className="text-white text-[11px] text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight line-clamp-2 w-full">
          {label}
        </span>
      </button>

      {/* Icon Context Menu */}
      {contextMenu && (
        <IconContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          iconLabel={label}
          onClose={onCloseContextMenu}
          onOpen={onClick}
        />
      )}
    </>
  )
}

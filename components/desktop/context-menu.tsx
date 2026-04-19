"use client"

import { useEffect, useRef } from "react"
import {
  RefreshCw,
  Upload,
  FolderPlus,
  FilePlus,
  ArrowUpDown,
  Grid,
  MoreHorizontal,
  Info,
  LayoutGrid,
  Image,
  Settings,
  ChevronRight,
} from "lucide-react"

interface ContextMenuProps {
  x: number
  y: number
  onClose: () => void
}

interface MenuItem {
  icon: React.ReactNode
  label: string
  shortcut?: string
  hasSubmenu?: boolean
  divider?: boolean
}

const menuItems: MenuItem[] = [
  { icon: <RefreshCw className="w-4 h-4" />, label: "刷新", shortcut: "F5" },
  { icon: null, label: "", divider: true },
  { icon: <Upload className="w-4 h-4" />, label: "上传文件", shortcut: "Ctrl+U" },
  { icon: <FolderPlus className="w-4 h-4" />, label: "新建文件夹", shortcut: "Alt+M" },
  { icon: <FilePlus className="w-4 h-4" />, label: "新建文件" },
  { icon: null, label: "", divider: true },
  { icon: <ArrowUpDown className="w-4 h-4" />, label: "排序方式", hasSubmenu: true },
  { icon: <Grid className="w-4 h-4" />, label: "图标大小", hasSubmenu: true },
  { icon: <MoreHorizontal className="w-4 h-4" />, label: "更多", hasSubmenu: true },
  { icon: null, label: "", divider: true },
  { icon: <Info className="w-4 h-4" />, label: "属性", shortcut: "Alt+I" },
  { icon: null, label: "", divider: true },
  { icon: <LayoutGrid className="w-4 h-4" />, label: "轻应用" },
  { icon: <Image className="w-4 h-4" />, label: "壁纸设置" },
  { icon: <Settings className="w-4 h-4" />, label: "账号中心" },
]

export function ContextMenu({ x, y, onClose }: ContextMenuProps) {
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

  // 确保菜单不会超出屏幕
  const adjustedX = Math.min(x, window.innerWidth - 220)
  const adjustedY = Math.min(y, window.innerHeight - 400)

  return (
    <div
      ref={menuRef}
      className="fixed bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px] z-50"
      style={{ left: adjustedX, top: adjustedY }}
    >
      {menuItems.map((item, index) => {
        if (item.divider) {
          return <div key={index} className="my-1 border-t border-gray-100" />
        }

        return (
          <button
            key={index}
            className="w-full px-3 py-1.5 flex items-center gap-3 hover:bg-blue-50 text-left group"
            onClick={() => {
              onClose()
            }}
          >
            <span className="w-5 h-5 flex items-center justify-center text-blue-500">
              {item.icon}
            </span>
            <span className="flex-1 text-sm text-gray-700">
              {item.label}
              {item.label && (
                <span className="text-gray-400 ml-0.5">
                  ({item.label.charAt(0).toUpperCase()})
                </span>
              )}
            </span>
            {item.shortcut && (
              <span className="text-xs text-gray-400">{item.shortcut}</span>
            )}
            {item.hasSubmenu && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
        )
      })}
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  Monitor,
  FolderOpen,
  Home,
  Database,
} from "lucide-react"
import { UserMenu } from "./user-menu"

type ViewType = "desktop" | "explorer" | "website" | "adminer"

interface SidebarProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

interface SidebarItem {
  icon: React.ReactNode
  label: string
  view: ViewType
}

const sidebarItems: SidebarItem[] = [
  { icon: <Monitor className="w-5 h-5" />, label: "桌面", view: "desktop" },
  { icon: <FolderOpen className="w-5 h-5" />, label: "文件管理", view: "explorer" },
  { icon: <Home className="w-5 h-5" />, label: "官网", view: "website" },
  { icon: <Database className="w-5 h-5" />, label: "Adminer", view: "adminer" },
]

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <div className="w-16 bg-[#2a5a8a] flex flex-col items-center py-4 shrink-0">
      {/* Logo */}
      <div className="mb-6">
        <div className="text-white font-bold text-sm">kod</div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-2 flex-1">
        {sidebarItems.map((item) => (
          <button
            key={item.view}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all w-14 ${
              currentView === item.view
                ? "bg-[#4a8ac9] text-white"
                : "text-white/80 hover:bg-white/10"
            }`}
            onClick={() => onViewChange(item.view)}
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>

      {/* User */}
      <div className="mt-auto relative">
        <button
          className="flex flex-col items-center gap-1 p-2 rounded-lg text-white/80 hover:bg-white/10 w-14"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </button>
        {showUserMenu && <UserMenu onClose={() => setShowUserMenu(false)} />}
      </div>
    </div>
  )
}

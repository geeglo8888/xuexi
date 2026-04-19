"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/desktop/sidebar"
import { DesktopIcon } from "@/components/desktop/desktop-icon"
import { AnalogClock } from "@/components/desktop/analog-clock"
import { FileExplorer } from "@/components/desktop/file-explorer"
import { WebsiteView } from "@/components/desktop/website-view"
import { ContextMenu } from "@/components/desktop/context-menu"

import {
  ComputerIcon,
  PhotoIcon,
  RecycleBinIcon,
  HelpIcon,
  PluginIcon,
  CloudIcon,
  SettingsIcon,
  MapIcon,
  LogIcon,
  AppIcon,
} from "@/components/desktop/icons"

type ViewType = "desktop" | "explorer" | "website" | "adminer"

const desktopIcons = [
  { icon: <ComputerIcon />, label: "我的电脑" },
  { icon: <PhotoIcon />, label: "我的相册" },
  { icon: <RecycleBinIcon />, label: "回收站" },
  { icon: <HelpIcon />, label: "使用帮助" },
  { icon: <PluginIcon />, label: "插件中心" },
  { icon: <CloudIcon />, label: "icloud" },
  { icon: <SettingsIcon />, label: "系统设置" },
  { icon: <MapIcon />, label: "高德地图" },
  { icon: <LogIcon />, label: "操作日志" },
  { icon: <AppIcon />, label: "轻应用" },
]

export default function DesktopPage() {
  const [currentView, setCurrentView] = useState<ViewType>("desktop")
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null)
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(null)
  const [iconContextMenu, setIconContextMenu] = useState<{ index: number; x: number; y: number } | null>(null)

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    // 点击桌面空白处右键时，清除图标选中状态
    setSelectedIconIndex(null)
    setIconContextMenu(null)
    setContextMenu({ x: e.clientX, y: e.clientY })
  }

  const handleDesktopClick = () => {
    // 点击桌面空白处，清除所有选中和菜单
    setSelectedIconIndex(null)
    setIconContextMenu(null)
    setContextMenu(null)
  }

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === "explorer") setCurrentView("explorer")
      else if (hash === "website" || hash.startsWith("UUID_")) setCurrentView("website")
      else if (hash === "adminer") setCurrentView("adminer")
      else setCurrentView("desktop")
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view)
    window.location.hash = view === "desktop" ? "desktop" : view
  }

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar currentView={currentView} onViewChange={handleViewChange} />

      {/* Main Content Area */}
      {currentView === "desktop" && (
        <div
          className="flex-1 relative overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #5a8fc2 0%, #8eb4d9 40%, #b8d4e8 60%, #d4e4ef 75%, #e8eff4 85%, #f0f4f7 100%)",
          }}
          onContextMenu={handleContextMenu}
          onClick={handleDesktopClick}
        >
          {/* 雪山装饰 */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[30%]"
            style={{
              background: `
                linear-gradient(135deg, transparent 40%, #e8eff4 40%, #f5f8fa 45%, #fff 50%, #f0f4f7 55%, #dde8ef 60%, transparent 60%),
                linear-gradient(125deg, transparent 35%, #d4e4ef 35%, #e8eff4 42%, #fff 48%, #f5f8fa 52%, #e0eaf0 58%, transparent 58%),
                linear-gradient(140deg, transparent 45%, #ccdee8 45%, #dde8ef 50%, #f0f4f7 55%, #fff 58%, #e8eff4 62%, transparent 62%)
              `,
              backgroundSize: "50% 100%, 40% 100%, 60% 100%",
              backgroundPosition: "0% 100%, 30% 100%, 70% 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Desktop Icons Grid - 垂直排列，每列5个 */}
          <div className="absolute left-8 top-8 grid grid-flow-col grid-rows-5 gap-x-4 gap-y-2">
            {desktopIcons.map((item, index) => (
              <DesktopIcon
                key={index}
                icon={item.icon}
                label={item.label}
                isSelected={selectedIconIndex === index}
                onSelect={() => setSelectedIconIndex(index)}
                onClearSelection={() => setSelectedIconIndex(null)}
                contextMenu={iconContextMenu?.index === index ? { x: iconContextMenu.x, y: iconContextMenu.y } : null}
                onContextMenu={(x, y) => setIconContextMenu({ index, x, y })}
                onCloseContextMenu={() => setIconContextMenu(null)}
              />
            ))}
          </div>

          {/* Clock Widget */}
          <div className="absolute top-4 right-4">
            <AnalogClock />
          </div>

          {/* Context Menu */}
          {contextMenu && (
            <ContextMenu
              x={contextMenu.x}
              y={contextMenu.y}
              onClose={() => setContextMenu(null)}
            />
          )}
        </div>
      )}

      {currentView === "explorer" && <FileExplorer />}

      {currentView === "website" && <WebsiteView />}

      {currentView === "adminer" && (
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">Adminer 数据库管理</div>
        </div>
      )}
    </div>
  )
}

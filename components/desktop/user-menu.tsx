"use client"

import {
  User,
  Folder,
  BarChart3,
  Users,
  Puzzle,
  Globe,
  Palette,
  Maximize,
  Info,
  Download,
  Mail,
  LogOut,
} from "lucide-react"

interface UserMenuProps {
  onClose: () => void
}

export function UserMenu({ onClose }: UserMenuProps) {
  const menuItems = [
    { icon: <User className="w-4 h-4" />, label: "账号中心" },
    { icon: <Folder className="w-4 h-4" />, label: "文件管理" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "后台管理" },
    { icon: <Users className="w-4 h-4" />, label: "用户管理" },
    { icon: <Puzzle className="w-4 h-4" />, label: "插件管理" },
    { divider: true },
    { icon: <Globe className="w-4 h-4" />, label: "多语言", suffix: "(language)" },
    { icon: <Palette className="w-4 h-4" />, label: "主题样式", suffix: "自动" },
    { icon: <Maximize className="w-4 h-4" />, label: "全屏" },
    { icon: <Info className="w-4 h-4" />, label: "关于" },
    { divider: true },
    { icon: <Download className="w-4 h-4" />, label: "客户端下载" },
    { icon: <Mail className="w-4 h-4" />, label: "免费版" },
    { divider: true },
    { icon: <LogOut className="w-4 h-4" />, label: "退出" },
  ]

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute bottom-full left-0 mb-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
        {/* User Info */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4hUbHFSB0jHHvFj7ljYO5DLxVditlM.png"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium text-gray-800">系统管理员</div>
            <div className="text-xs text-gray-400">admin</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-1">
          {menuItems.map((item, index) =>
            item.divider ? (
              <div key={index} className="border-t border-gray-100 my-1" />
            ) : (
              <button
                key={index}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
              >
                {item.icon}
                <span className="flex-1 text-left">{item.label}</span>
                {item.suffix && (
                  <span className="text-xs text-gray-400">{item.suffix}</span>
                )}
              </button>
            )
          )}
        </div>
      </div>
    </>
  )
}

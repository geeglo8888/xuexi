"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Star,
  Home,
  Folder,
  Lock,
  Image,
  FileText,
  Music,
  Monitor,
  Building2,
  Users,
  Share2,
  Clock,
  Link,
  Trash2,
  Tag,
  HardDrive,
  Upload,
  FolderPlus,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from "lucide-react"
import { CloudIcon, MapIcon } from "./icons"

interface TreeNode {
  id: string
  label: string
  icon: React.ReactNode
  children?: TreeNode[]
  expanded?: boolean
}

const fileTree: TreeNode[] = [
  {
    id: "favorites",
    label: "收藏夹",
    icon: <Star className="w-4 h-4 text-yellow-500" />,
  },
  {
    id: "personal",
    label: "个人空间",
    icon: <Home className="w-4 h-4 text-blue-500" />,
    expanded: true,
    children: [
      { id: "vault", label: "私密保险箱", icon: <Lock className="w-4 h-4 text-orange-400" /> },
      { id: "images", label: "我的图片", icon: <Folder className="w-4 h-4 text-orange-400" /> },
      { id: "docs", label: "我的文档", icon: <Folder className="w-4 h-4 text-orange-400" /> },
      { id: "music", label: "我的音乐", icon: <Folder className="w-4 h-4 text-orange-400" /> },
      { id: "desktop", label: "桌面", icon: <Folder className="w-4 h-4 text-orange-400" /> },
    ],
  },
  {
    id: "enterprise",
    label: "企业网盘",
    icon: <Folder className="w-4 h-4 text-orange-400" />,
  },
  {
    id: "department",
    label: "我在的部门",
    icon: <Folder className="w-4 h-4 text-orange-400" />,
  },
  {
    id: "collaboration",
    label: "与我协作",
    icon: <Folder className="w-4 h-4 text-orange-400" />,
  },
]

const toolsTree: TreeNode[] = [
  { id: "recent", label: "最近文档", icon: <Clock className="w-4 h-4 text-blue-500" /> },
  { id: "my-collab", label: "我的协作", icon: <Users className="w-4 h-4 text-blue-500" /> },
  { id: "share-link", label: "外链分享", icon: <Link className="w-4 h-4 text-green-500" /> },
  { id: "album", label: "我的相册", icon: <Image className="w-4 h-4 text-green-500" /> },
  { id: "trash", label: "回收站", icon: <Trash2 className="w-4 h-4 text-gray-500" /> },
]

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [expanded, setExpanded] = useState(node.expanded ?? false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div>
      <button
        className="flex items-center gap-2 w-full px-2 py-1 hover:bg-blue-50 rounded text-sm text-gray-700"
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren ? (
          expanded ? (
            <ChevronDown className="w-3 h-3 text-gray-400" />
          ) : (
            <ChevronRight className="w-3 h-3 text-gray-400" />
          )
        ) : (
          <span className="w-3" />
        )}
        {node.icon}
        <span>{node.label}</span>
      </button>
      {expanded && hasChildren && (
        <div>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function TreeSection({ title, items }: { title: string; items: TreeNode[] }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="mb-2">
      <button
        className="flex items-center gap-2 w-full px-2 py-1 text-sm text-gray-600 hover:bg-blue-50 rounded"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <ChevronDown className="w-3 h-3" />
        ) : (
          <ChevronRight className="w-3 h-3" />
        )}
        <span>{title}</span>
      </button>
      {expanded && (
        <div className="mt-1">
          {items.map((item) => (
            <TreeItem key={item.id} node={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export function FileExplorer() {
  return (
    <div className="flex-1 flex bg-white">
      {/* File Tree Sidebar */}
      <div className="w-56 border-r border-gray-200 flex flex-col">
        <div className="flex-1 overflow-y-auto p-2">
          <TreeSection title="位置" items={fileTree} />
          <TreeSection title="工具" items={toolsTree} />
          <TreeSection
            title="文件类型"
            items={[]}
          />
          <TreeSection
            title="个人标签"
            items={[]}
          />
          <TreeSection
            title="网络挂载 (admin)"
            items={[]}
          />
        </div>
        <div className="border-t border-gray-200 p-2 text-xs text-blue-500">
          434B / 不限制
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="flex items-center gap-2 p-2 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded">
            <Home className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">个人空间</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-sm text-gray-600">桌面</span>
          </div>
          <div className="flex-1" />
          <button className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded hover:bg-orange-200 text-sm">
            <FolderPlus className="w-4 h-4" />
            新建文件夹
          </button>
          <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
            <Upload className="w-4 h-4" />
            上传
          </button>
        </div>

        {/* File Grid */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-6 gap-4">
            <div className="flex flex-col items-center gap-2 p-4 hover:bg-blue-50 rounded-lg cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                <CloudIcon />
              </div>
              <span className="text-sm text-gray-700">icloud</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 hover:bg-blue-50 rounded-lg cursor-pointer">
              <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center">
                <MapIcon />
              </div>
              <span className="text-sm text-gray-700">高德地图</span>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="border-t border-gray-200 px-4 py-2 text-sm text-gray-500">
          2个项目
        </div>
      </div>
    </div>
  )
}

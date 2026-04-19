"use client"

import { Check, Users } from "lucide-react"

export function WebsiteView() {
  return (
    <div className="flex-1 bg-gradient-to-br from-[#4a90d9] to-[#2d6cb5] overflow-auto">
      <div className="min-h-full flex flex-col">
        {/* Header */}
        <div className="p-8">
          <h1 className="text-white text-3xl font-light tracking-wide">kodcloud</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-8 pb-8">
          <div className="max-w-lg">
            <div className="text-white/90 text-xl mb-2">高效，流畅</div>
            <h2 className="text-white text-4xl font-bold mb-4">
              云端存储&协同办公
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              数千项细节精心优化，带给您Windows桌面级的使用体验。<br />
              随时随地访问，恰如行云流水，如此自由。
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white/20 text-white rounded-full border border-white/40 hover:bg-white/30 transition-colors">
                预约演示
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-white/90 transition-colors font-medium">
                体验DEMO
              </button>
            </div>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="bg-white">
          <div className="flex items-center justify-center gap-8 py-4">
            <button className="flex items-center gap-2 px-4 py-2 text-blue-500 border-b-2 border-blue-500">
              <Check className="w-4 h-4" />
              <span>极致体验</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-blue-500">
              <Users className="w-4 h-4" />
              <span>协作</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

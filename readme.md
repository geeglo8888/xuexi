
## 项目目录结构

/  项目根目录
├── index.html          # 主页面（只写结构）
├── style.css           # 全局样式
├── script.js           # 核心交互
├── /api                # 【后端交互专用】以后写接口请求
│   └── request.js      # 封装 axios/fetch
├── /assets             # 图片、图标、壁纸（你以后需要就加）
├── /components         # 可复用模块
│   ├── desktop.js      # 桌面逻辑
│   ├── menu.js         # 右键菜单
│   └── explorer.js     # 文件管理器
├── /views              # 页面模块（对应左侧导航）
│   ├── desktop.js
│   ├── explorer.js
│   ├── website.js
│   └── adminer.js
└── /utils              # 工具函数
    └── clock.js        # 时钟
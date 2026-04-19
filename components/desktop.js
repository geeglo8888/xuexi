function initDesktopIcons() {
  const container = document.getElementById('desktopIcons');
  if (!container) return;

  // 桌面图标数据
  const desktopIconsData = [
    { id: 'computer', label: '视频播放器', img: 'assets/icons/icon/shipinbofangqi.svg' },
    { id: 'photo', label: '音乐播放器', img: 'assets/icons/icon/yinyuebofangqi.svg' },
    { id: 'trash', label: '我的图片', img: 'assets/icons/icon/wodetupian.svg' },
    { id: 'help', label: '其他文件', img: 'assets/icons/icon/qitawenjian.svg' },
    { id: 'plugin', label: '插件中心', svg: `<svg viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="4" fill="#e8f4fd" stroke="#4a90d9" stroke-width="2"/><path d="M20 16v-4M28 16v-4" stroke="#4a90d9" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="28" r="8" fill="#4a90d9"/><path d="M24 24v8M20 28h8" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>` },
    { id: 'cloud', label: 'icloud', svg: `<svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="8" fill="#4a90d9"/><path d="M16 30c-3 0-5-2-5-5s2-5 5-5c0-4 3-7 7-7 3 0 6 2 7 5 3 0 6 3 6 6s-3 6-6 6H16z" fill="white"/></svg>` },
    { id: 'settings', label: '系统设置', svg: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#888"/><circle cx="24" cy="24" r="8" fill="#666"/><rect x="22" y="4" width="4" height="8" fill="#888"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(45 24 24)"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(90 24 24)"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(135 24 24)"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(180 24 24)"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(225 24 24)"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(270 24 24)"/><rect x="22" y="4" width="4" height="8" fill="#888" transform="rotate(315 24 24)"/></svg>` },
    { id: 'map', label: '高德地图', svg: `<svg viewBox="0 0 48 48"><rect x="4" y="8" width="40" height="32" rx="2" fill="#f5e6a3"/><path d="M8 12l12 8-12 8V12z" fill="#4caf50"/><path d="M20 20l12-8v24l-12-8V20z" fill="#81c784"/><path d="M32 12l8 8-8 8V12z" fill="#a5d6a7"/><circle cx="28" cy="24" r="4" fill="#f44336"/></svg>` },
    { id: 'log', label: '操作日志', svg: `<svg viewBox="0 0 48 48"><rect x="8" y="4" width="32" height="40" rx="2" fill="#e3f2fd" stroke="#90caf9" stroke-width="2"/><rect x="8" y="4" width="32" height="10" fill="#90caf9"/><line x1="14" y1="20" x2="34" y2="20" stroke="#bbb" stroke-width="2"/><line x1="14" y1="26" x2="34" y2="26" stroke="#bbb" stroke-width="2"/><line x1="14" y1="32" x2="28" y2="32" stroke="#bbb" stroke-width="2"/><line x1="14" y1="38" x2="24" y2="38" stroke="#bbb" stroke-width="2"/></svg>` },
    { id: 'app', label: '轻应用', svg: `<svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="8" fill="#ff9800"/><path d="M24 12c-6.6 0-12 5.4-12 12v12h6V24c0-3.3 2.7-6 6-6s6 2.7 6 6v12h6V24c0-6.6-5.4-12-12-12z" fill="white"/></svg>` },
  ];

  container.innerHTML = desktopIconsData.map((icon, index) => `
    <button class="desktop-icon" data-index="${index}">
      <div class="check">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="icon-img">${icon.img ? `<img src="${icon.img}" alt="${icon.label}" style="width: 100%; height: 100%; object-fit: contain;">` : icon.svg}</div>
      <span class="icon-label">${icon.label}</span>
    </button>
  `).join('');

  // 添加事件监听器
  container.querySelectorAll('.desktop-icon').forEach((iconEl, index) => {
    iconEl.addEventListener('click', (e) => {
      e.stopPropagation();
      selectIcon(index);
      hideAllMenus();
    });

    iconEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      selectIcon(index);
      showIconContextMenu(e.clientX, e.clientY);
    });
  });
}

// 选择图标函数
function selectIcon(index) {
  document.querySelectorAll('.desktop-icon').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
}

// 清除选择函数
function clearSelection() {
  document.querySelectorAll('.desktop-icon').forEach(el => {
    el.classList.remove('selected');
  });
}

// 显示图标上下文菜单
function showIconContextMenu(x, y) {
  const menu = document.getElementById('iconContextMenu');
  if (!menu) return;
  
  const adjustedX = Math.min(x, window.innerWidth - 200);
  const adjustedY = Math.min(y, window.innerHeight - 100);
  menu.style.left = adjustedX + 'px';
  menu.style.top = adjustedY + 'px';
  menu.classList.add('show');
}

// 隐藏所有菜单
function hideAllMenus() {
  const desktopContextMenu = document.getElementById('desktopContextMenu');
  const iconContextMenu = document.getElementById('iconContextMenu');
  const userMenu = document.getElementById('userMenu');
  
  if (desktopContextMenu) desktopContextMenu.classList.remove('show');
  if (iconContextMenu) iconContextMenu.classList.remove('show');
  if (userMenu) userMenu.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
  initDesktopIcons();
  
  // 添加桌面空白处点击事件
  const desktopView = document.getElementById('desktopView');
  if (desktopView) {
    // 左键点击空白处清除选择
    desktopView.addEventListener('click', (e) => {
      if (e.target === desktopView || e.target.classList.contains('mountains')) {
        clearSelection();
        hideAllMenus();
      }
    });
    
    // 右键点击空白处清除选择并显示上下文菜单
    desktopView.addEventListener('contextmenu', (e) => {
      if (e.target === desktopView || e.target.classList.contains('mountains')) {
        e.preventDefault();
        clearSelection();
        showDesktopContextMenu(e.clientX, e.clientY);
      }
    });
  }
});

// 显示桌面上下文菜单
function showDesktopContextMenu(x, y) {
  const menu = document.getElementById('desktopContextMenu');
  if (!menu) return;
  
  const adjustedX = Math.min(x, window.innerWidth - 220);
  const adjustedY = Math.min(y, window.innerHeight - 400);
  menu.style.left = adjustedX + 'px';
  menu.style.top = adjustedY + 'px';
  menu.classList.add('show');
}
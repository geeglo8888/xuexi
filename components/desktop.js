function initDesktopIcons() {
  const container = document.getElementById('desktopIcons');
  if (!container) return;

  // 桌面图标数据
  const desktopIconsData = [
    { id: 'computer', label: '视频播放器', svg: `<svg class="icon" width="128px" height="128.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M374.6 636.5c4.4 0 8.5-1.2 12.1-3.3l171.7-100c8-3.6 13.6-11.9 13.6-21.5 0-8.8-4.8-16.6-11.9-20.7l-167.8-97.8c-4.3-5-10.7-8.1-17.7-8.1-13.1 0-23.6 10.7-23.6 23.8v1.3l-0.3 0.2 0.4 199.8c-0.1 0.8-0.1 1.6-0.1 2.5 0 13.2 10.6 23.8 23.6 23.8z" fill="#4D4D4D" /><path d="M64.7 586.3a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z" fill="#4D4D4D" /><path d="M960 398.3c0.1-1.6 0.2-3.2 0.2-4.8 0-35-28.5-63.3-63.6-63.3-11.7 0-22.7 3.2-32.2 8.7l-0.5-0.3-31.5 18.2v-64.7c-0.1-73.1-59.9-133-133.1-133H197.4c-73.1 0-133 59.8-133 133v165.8h0.2c0 17.7 14.4 32.1 32.2 32.1s32.2-14.4 32.2-32.1h0.2V287c0-35.2 28.8-64 64-64h510.2c35.2 0 64 28.8 64 64v448.9c0 35.2-28.8 64-64 64H193.3c-35.2 0-64-28.8-64-64v-21.4c0-17.7-14.4-32.1-32.2-32.1-17.8 0-32.2 14.4-32.2 32.1h-0.4v15.3c0 73.2 59.9 133 133 133h501.9c73.2 0 133-59.8 133-133v-64.1l33.1 19.1 0.1-0.1c9.2 5.1 19.8 8 31 8 35.1 0 63.6-28.4 63.6-63.3 0-1.6-0.1-3.2-0.2-4.8V398.3z m-63.6 205.1c-0.3 7.8-6.9 14.1-15 14.1-2.7 0-5.3-0.7-7.5-2l-41.5-23.7V430.1l40.9-23.2c2.3-1.5 5.1-2.3 8.1-2.3 8.3 0 15 6.6 15 14.6v184.2z" fill="#4D4D4D" /></svg>` },{
    { id: 'photo', label: '音乐播放器', svg: `<svg class="icon" width="128px" height="128.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M750.92992 443.66848v-102.33856C750.92992 209.36704 643.97312 102.4 512 102.4S273.07008 209.36704 273.07008 341.32992v102.4C178.80064 443.72992 102.4 520.13056 102.4 614.4s76.40064 170.67008 170.67008 170.67008C273.07008 860.4672 334.20288 921.6 409.6 921.6h136.52992V785.07008h-68.25984v68.25984H409.6a68.25984 68.25984 0 0 1-68.27008-68.25984V341.32992c0-94.2592 76.40064-170.65984 170.67008-170.65984s170.67008 76.40064 170.67008 170.65984V784.9984h68.25984C845.19936 784.9984 921.6 708.59776 921.6 614.32832c0-94.2592-76.40064-170.65984-170.67008-170.65984z" /></svg>` },{
    { id: 'trash', label: '我的图片', svg: `<svg class="icon" width="128px" height="128.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M859.3 213.2H164.7c-20.2 0-36.7 16.5-36.7 36.7v524.3c0 20.2 16.5 36.7 36.7 36.7h694.7c20.2 0 36.7-16.5 36.7-36.7V249.8c-0.1-20.2-16.6-36.6-36.8-36.6z m-13.9 50.6v282.4l-107.9-87.1c-13.5-10.9-33.1-10.8-46.5 0.3L566.5 562.9 408.8 514c-7.5-2.3-15.3-2.2-22.7 0.3l-207.5 70.9V263.8h666.8zM178.6 760.2V638.7l219.5-75.1 160.6 49.8c11.9 3.7 24.7 1.2 34.3-6.8l121.6-101 130.8 105.6v149H178.6z" fill="#040000" /></svg>` },{"old_str":
    { id: 'help', label: '其他文件', svg: `<svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="8" fill="#3b82f6"/><path d="M16 18h12v2H18v16H16V18z" fill="white"/></svg>` },
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
      <div class="icon-img">${icon.svg}</div>
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
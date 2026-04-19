function initDesktopIcons() {
  const container = document.getElementById('desktopIcons');
  if (!container) return;

  const icons = [
    { name: '文件管理', type: 'explorer' },
    { name: '官网', type: 'website' },
    { name: 'Adminer', type: 'adminer' }
  ];

  container.innerHTML = icons.map((item, idx) => `
    <button class="desktop-icon" data-target="${item.type}">
      <div class="check">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="icon-img">
        <svg viewBox="0 0 24 24" fill="#fff">
          ${item.type === 'explorer' ? '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>' : ''}
          ${item.type === 'website' ? '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' : ''}
          ${item.type === 'adminer' ? '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>' : ''}
        </svg>
      </div>
      <div class="icon-label">${item.name}</div>
    </button>
  `).join('');

  // 图标点击切换视图
  container.querySelectorAll('.desktop-icon').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      switchView(target + 'View');

      document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
      });
      const btn = [...document.querySelectorAll('.sidebar-item')].find(
        b => b.dataset.view === target
      );
      if (btn) btn.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', initDesktopIcons);
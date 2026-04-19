function initContextMenus() {
  const desktopMenu = document.getElementById('desktopContextMenu');
  const iconMenu = document.getElementById('iconContextMenu');

  // 桌面右键
  document.addEventListener('contextmenu', (e) => {
    const isIcon = e.target.closest('.desktop-icon');
    if (isIcon) {
      e.preventDefault();
      desktopMenu.classList.remove('show');
      iconMenu.classList.add('show');
      iconMenu.style.left = e.clientX + 'px';
      iconMenu.style.top = e.clientY + 'px';
    } else {
      e.preventDefault();
      iconMenu.classList.remove('show');
      desktopMenu.classList.add('show');
      desktopMenu.style.left = e.clientX + 'px';
      desktopMenu.style.top = e.clientY + 'px';
    }
  });

  // 点击空白关闭菜单
  document.addEventListener('click', () => {
    desktopMenu.classList.remove('show');
    iconMenu.classList.remove('show');
  });

  // 用户菜单
  const avatarBtn = document.getElementById('userAvatarBtn');
  const userMenu = document.getElementById('userMenu');
  avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.classList.toggle('show');
  });
  document.addEventListener('click', () => {
    userMenu.classList.remove('show');
  });
}

document.addEventListener('DOMContentLoaded', initContextMenus);
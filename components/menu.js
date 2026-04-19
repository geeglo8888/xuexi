// 用户菜单功能
(function() {
  'use strict';
  
  function initUserMenu() {
    const avatarBtn = document.getElementById('userAvatarBtn');
    const userMenu = document.getElementById('userMenu');
    
    if (!avatarBtn || !userMenu) {
      return;
    }
    
    // 点击头像切换菜单显示
    avatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userMenu.classList.toggle('show');
    });
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', () => {
      userMenu.classList.remove('show');
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUserMenu);
  } else {
    initUserMenu();
  }
})();
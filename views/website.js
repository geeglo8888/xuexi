// 官网页面逻辑
(function() {
  'use strict';
  
  function initWebsiteView() {
    const websiteView = document.getElementById('websiteView');
    if (!websiteView) return;
    
    console.log('Website view initialized');
    // TODO: 添加官网展示内容
  }
  
  // 暴露给全局的初始化函数
  window.initWebsiteView = initWebsiteView;
  
  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsiteView);
  } else {
    initWebsiteView();
  }
})();
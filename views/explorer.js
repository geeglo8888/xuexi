// 文件管理页面逻辑
(function() {
  'use strict';
  
  function initExplorerView() {
    const explorerView = document.getElementById('explorerView');
    if (!explorerView) return;
    
    console.log('Explorer view initialized');
    // TODO: 添加文件管理功能（上传、下载、删除等）
  }
  
  // 暴露给全局的初始化函数
  window.initExplorerView = initExplorerView;
  
  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExplorerView);
  } else {
    initExplorerView();
  }
})();
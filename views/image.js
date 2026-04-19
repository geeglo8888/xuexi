// 图片页面逻辑
(function() {
  'use strict';
  
  function initImageView() {
    const imageView = document.getElementById('imageView');
    if (!imageView) return;
    
    console.log('Image view initialized');
    // TODO: 添加图片浏览功能
  }
  
  // 暴露给全局的初始化函数
  window.initImageView = initImageView;
  
  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageView);
  } else {
    initImageView();
  }
})();
// 视频页面逻辑
(function() {
  'use strict';
  
  function initVideoView() {
    const videoView = document.getElementById('videoView');
    if (!videoView) return;
    
    // 视频文件双击播放
    const videoItems = videoView.querySelectorAll('.file-item[data-video]');
    videoItems.forEach(item => {
      item.addEventListener('dblclick', () => {
        const videoUrl = item.dataset.video;
        window.open(`pages/player.html?video=${encodeURIComponent(videoUrl)}`, 'videoPlayer');
      });
    });
    
    console.log('Video view initialized');
  }
  
  // 暴露给全局的初始化函数
  window.initVideoView = initVideoView;
  
  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoView);
  } else {
    initVideoView();
  }
})();
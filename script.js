function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
  });
  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');
}

function initSidebar() {
  const items = document.querySelectorAll('.sidebar-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const view = item.dataset.view;
      switchView(view + 'View');
    });
  });
}

// 初始化所有视图模块
function initAllViews() {
  if (typeof window.initVideoView === 'function') window.initVideoView();
  if (typeof window.initAudioView === 'function') window.initAudioView();
  if (typeof window.initImageView === 'function') window.initImageView();
  if (typeof window.initExplorerView === 'function') window.initExplorerView();
  if (typeof window.initWebsiteView === 'function') window.initWebsiteView();
}

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initAllViews();
  switchView('videoView'); // 默认显示视频页面
});
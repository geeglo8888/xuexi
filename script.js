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

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  switchView('desktopView');
});
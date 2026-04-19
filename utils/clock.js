function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // 角度计算（和原版逻辑对齐）
  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  const clockSvg = document.getElementById('clockSvg');
  if (!clockSvg) return;

  let clockHtml = '';

  // 1. 外圈分钟刻度（和原版一致的 0.34 透明度）
  for (let i = 0; i < 60; i++) {
    const angle = (i * 6 - 90) * (Math.PI / 180);
    const is5Min = i % 5 === 0;
    const opacity = is5Min ? 0.9 : 0.34;
    const lineWidth = is5Min ? 1.5 : 1;
    const length = is5Min ? 10 : 6;

    const r1 = 47, r2 = 47 + length;
    const x1 = 50 + r1 * Math.cos(angle);
    const y1 = 50 + r1 * Math.sin(angle);
    const x2 = 50 + r2 * Math.cos(angle);
    const y2 = 50 + r2 * Math.sin(angle);
    clockHtml += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="white" stroke-width="${lineWidth}" opacity="${opacity}"/>`;

    // 分钟数字（和原版字体大小一致）
    if (is5Min) {
      const num = i === 0 ? 60 : i;
      const textR = 43;
      const tx = 50 + textR * Math.cos(angle);
      const ty = 50 + textR * Math.sin(angle);
      clockHtml += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="6" font-weight="normal" opacity="0.8">${num}</text>`;
    }
  }

  // 2. 内圈小时数字（和原版字体、大小一致）
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const textR = 30;
    const tx = 50 + textR * Math.cos(angle);
    const ty = 50 + textR * Math.sin(angle);
    const num = i === 0 ? 12 : i;
    clockHtml += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="10" font-weight="normal" font-family="Hei, Helvetica, Arial, sans-serif">${num}</text>`;
  }

  // 3. 指针（和原版颜色、粗细、长度 1:1）
  // 时针：白色粗针
  clockHtml += `<line x1="50" y1="50" x2="50" y2="26" stroke="white" stroke-width="2.5" stroke-linecap="round" transform="rotate(${hourDeg} 50 50)"/>`;
  // 分针：白色中粗针
  clockHtml += `<line x1="50" y1="50" x2="50" y2="18" stroke="white" stroke-width="1.8" stroke-linecap="round" transform="rotate(${minuteDeg} 50 50)"/>`;
  // 秒针：#FA9F22 橙黄色（和原版颜色完全一致）
  clockHtml += `<line x1="50" y1="50" x2="50" y2="10" stroke="#FA9F22" stroke-width="1.2" stroke-linecap="round" transform="rotate(${secondDeg} 50 50)"/>`;

  // 4. 中心圆点（和原版的黑+白圆点一致）
  clockHtml += `<circle cx="50" cy="50" r="2.5" fill="black"/>`;
  clockHtml += `<circle cx="50" cy="50" r="1" fill="white"/>`;

  clockSvg.innerHTML = clockHtml;
}

// 启动时钟
updateClock();
setInterval(updateClock, 1000);
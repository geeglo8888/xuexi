function updateClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour * 30) + (minute * 0.5);
  const minuteDeg = minute * 6;
  const secondDeg = second * 6;

  const svg = document.getElementById('clockSvg');
  if (!svg) return;

  svg.innerHTML = `
    <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" stroke-width="2" opacity="0.3"/>
    <line x1="50" y1="50" x2="50" y2="25" stroke="#fff" stroke-width="3" stroke-linecap="round"
          transform="rotate(${hourDeg} 50 50)"/>
    <line x1="50" y1="50" x2="50" y2="18" stroke="#fff" stroke-width="2" stroke-linecap="round"
          transform="rotate(${minuteDeg} 50 50)"/>
    <line x1="50" y1="50" x2="50" y2="12" stroke="#ff6b6b" stroke-width="1.5" stroke-linecap="round"
          transform="rotate(${secondDeg} 50 50)"/>
    <circle cx="50" cy="50" r="4" fill="#fff"/>
  `;
}

setInterval(updateClock, 1000);
updateClock();

const days = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"];

const now = new Date();
const dayName = days[now.getDay()];
const date = now.toLocaleDateString();

document.getElementById('live-day').textContent = dayName;
document.getElementById('live-date').textContent = date;
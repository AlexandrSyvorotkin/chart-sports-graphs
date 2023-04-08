const data = [
    {team: 'Arsenal', points: 72, spread: 8, img: 'https://img.championat.com/team/logo/1465832935255919291.png'},
    {team: 'ManCity', points: 64, spread: 11, img: 'https://img.championat.com/team/logo/1469055821916222532.png'},
    {team: 'NewCastle', points: 53, spread: 0, img: 'https://img.championat.com/team/logo/14658319671198636026.png'},
    {team: 'Manchester United', points: 53, spread: 3, img: 'https://img.championat.com/team/logo/14658325251734697001.png'},
    {team: 'Tottenham Hotspur', points: 50, spread: 4, img: 'https://img.championat.com/team/logo/14658316581098338948.png'},
    {team: 'Brighton', points: 46, spread: 2, img: 'https://img.championat.com/team/logo/14694863921668483594.png'},
    {team: 'Aston Villa', points: 44, spread: 1, img: 'https://img.championat.com/team/logo/1465832893622609359.png'},
    {team: 'Liverpool', points: 43, spread: 0, img: 'https://img.championat.com/team/logo/14658326181147966153.png'},
    {team: 'Brentford', points: 43, spread: 4, img: 'https://img.championat.com/team/logo/1533675409726060064.png'},
    {team: 'Fullham', points: 39, spread: 0, img: 'https://img.championat.com/team/logo/1552494403343266701.png'},
    {team: 'Chelsea', points: 39, spread: 9, img: 'https://img.championat.com/team/logo/14658314551368579346.png'},
    {team: 'Crystal Palace', points: 30, spread: 1, img: 'https://img.championat.com/team/logo/14658327001948562049.png'},
    {team: 'Leeds United', points: 29, spread: 1, img: 'https://img.championat.com/team/logo/14694871741509666614.png'},
    {team: 'Wolverhampton', points: 28, spread: 0, img: 'https://img.championat.com/team/logo/1552494421733611411.png'},
    {team: 'West Ham United', points: 27, spread: 0, img: 'https://img.championat.com/team/logo/14691953971590009599.png'},
    {team: 'Everton', points: 27, spread: 0, img: 'https://img.championat.com/team/logo/1465755316563300807.png'},
    {team: 'Nottigham Forest', points: 27, spread: 0, img: 'https://img.championat.com/team/logo/167459926688484228.png'},
    {team: 'Bournmute', points: 27, spread: 2, img: 'https://img.championat.com/team/logo/1552494382773535695.png'},
    {team: 'Leicester City', points: 25, spread: 2, img: 'https://img.championat.com/team/logo/14658326571808281562.png'},
    {team: 'Southampton', points: 23, spread: 2, img: 'https://img.championat.com/team/logo/15524943211108666290.png'},
]

// Создаем холст
const canvas = document.getElementById('canvas');
canvas.width = 1600;
canvas.height = 600;

// Получаем контекст для рисования
const ctx = canvas.getContext('2d');

// Определяем данные команд и их очков


// Определяем параметры графика
const margin = 50;
const graphWidth = canvas.width - margin * 2;
const graphHeight = canvas.height - margin * 2;
const maxPoints = Math.max(...data.map(d => d.points));

// Функция для рисования осей
function drawAxes() {
  ctx.beginPath();
  ctx.moveTo(margin, margin);
  ctx.lineTo(margin, canvas.height - margin);
  ctx.lineTo(canvas.width - margin, canvas.height - margin);
  ctx.stroke();
}

// Функция для рисования меток на оси Y и сетки
function drawYLabels() {
  const yStep = graphHeight / (maxPoints + 1);
  for (let i = 0; i <= maxPoints; i++) {
    const y = canvas.height - margin - i * yStep;
    ctx.beginPath();
    ctx.moveTo(margin - 10, y);
    ctx.lineTo(margin, y);
    ctx.stroke();
    ctx.fillText(i, margin - 30, y + 5);
  }
}

// Функция для рисования меток на оси X и команд
function drawXLabels() {
  const xStep = graphWidth / (data.length + 1);
  for (let i = 0; i < data.length; i++) {
    const x = margin + (i + 1) * xStep;
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - margin);
    ctx.lineTo(x, canvas.height - margin + 10);
    ctx.stroke();
    ctx.fillText(data[i].team, x, canvas.height - margin + 30);
  }
}

// Функция для рисования графика
function drawGraph() {
  const xStep = graphWidth / (data.length + 1);
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  for (let i = 0; i < data.length; i++) {
    const x = margin + (i + 1) * xStep;
    const y = canvas.height - margin - data[i].points * (graphHeight / (maxPoints + 1));
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
}

data.sort((a, b) => a.points - b.points);

// Вызываем функции для отрисовки графика
drawAxes();
drawYLabels();
drawXLabels();
drawGraph()

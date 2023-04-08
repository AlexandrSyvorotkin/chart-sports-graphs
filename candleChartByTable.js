const data = [
    {date: '01.09.2023', open: 0, high: 2, low: -1, close: 1},
    {date: '12-09-2023', open: 1, high: 3, low: -2, close: 0},
    {date: '20-09-2023', open: 0, high: 0, low: -3, close: -3},
    {date: '27-09-2023', open: -3, high: -1, low: -3, close: -1},
    {date: '05-10-2023', open: -1, high: 1, low: 0, close: 0},
    {date: '12-10-2023', open: 0, high: 1, low: 1, close: 0},
    {date: '20-10-2023', open: 0, high: 1, low: -3, close: -2},
    {date: '28-10-2023', open: -2, high: 1, low: -4, close: -1},
    {date: '04-11-2023', open: -1, high: 1, low: -3, close: -1},
    {date: '11-11-2023', open: -1, high: 1, low: -2, close: 0},
    {date: '18-11-2023', open: 0, high: 2, low: -1, close: 1},
    {date: '26-11-2023', open: 1, high: 2, low: -2, close: -2},
    {date: '02-12-2023', open: -1, high: -1, low: -1, close: -1},
    {date: '13-12-2023', open: -1, high: 1, low: -3, close: -1},
    {date: '21-12-2023', open: -1, high: 1, low: -3, close: -1},
    {date: '28-12-2023', open: -1, high: 3, low: -2, close: 2},
    {date: '06-01-2024', open: 2, high: 3, low: -1, close: 0},
    {date: '11-01-2024', open: 0, high: 5, low: -1, close: 4},
    {date: '17-01-2024', open: 6, high: 10, low: 5, close: 9},
    {date: '25-01-2024', open: 9, high: 11, low: 9, close: 11},
    {date: '31-01-2024', open: 11, high: 12, low: 11, close: 12},
    {date: '08-02-2024', open: 12, high: 14, low: 11, close: 13},
    {date: '15-02-2024', open: 13, high: 15, low: 11, close: 13},
    {date: '26-02-2024', open: 13, high: 14, low: 13, close: 14},
    {date: '05-03-2024', open: 14, high: 17, low: 14, close: 17},
    {date: '14-03-2024', open: 17, high: 17, low: 17, close: 17},
]

const WIDTH = 1200;
const HEIGHT = 800;
const PADDING = 20;

function chart(canvas, data) {
  const ctx = canvas.getContext('2d');

  canvas.style.width = WIDTH + 'px';
  canvas.style.height = HEIGHT + 'px';

  const maxPrice = Math.max(...data.map(d => d.high));
  const minPrice = Math.min(...data.map(d => d.low));

  const priceRange = maxPrice - minPrice;

  const candleWidth = (WIDTH - PADDING * 2) / data.length;
  const candleHeight = (HEIGHT - PADDING * 2) / priceRange;

  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  data.forEach((d, i) => {
    const x = PADDING + i * candleWidth + candleWidth / 2;
    const openY = HEIGHT - (d.open - minPrice) * candleHeight - PADDING;
    const closeY = HEIGHT - (d.close - minPrice) * candleHeight - PADDING;
    const highY = HEIGHT - (d.high - minPrice) * candleHeight - PADDING;
    const lowY = HEIGHT - (d.low - minPrice) * candleHeight - PADDING;

    ctx.beginPath();
    ctx.moveTo(x, openY);
    ctx.lineTo(x, closeY);
    ctx.strokeStyle = d.open > d.close ? 'red' : 'green';
    ctx.stroke();

    ctx.fillStyle = d.open > d.close ? 'red' : 'green';
    ctx.fillRect(x - candleWidth / 4, Math.min(openY, closeY), candleWidth / 2, Math.abs(openY - closeY));

    ctx.beginPath();
    ctx.moveTo(x, highY);
    ctx.lineTo(x, Math.max(openY, closeY));
    ctx.strokeStyle = d.open > d.close ? 'red' : 'green';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, lowY);
    ctx.lineTo(x, Math.min(openY, closeY));
    ctx.strokeStyle = d.open > d.close ? 'red' : 'green';
    ctx.stroke();
  });
}

const canvas = document.getElementById('chart');
chart(canvas, data);








// const WIDTH = 1200
// const HEIGHT = 800
// const PADDING = 20


// function chart(canvas, data) {
//     const ctx = canvas.getContext('2d')

//     canvas.style.width = WIDTH + 'px'
//     canvas.style.height = HEIGHT + 'px'

// }

// const canvas = document.getElementById('chart')



// проходимся по всем элементам массива данных


// if (candle.open < candle.close) {
// ctx.fillStyle = "green"
// } else if (candle.open > candle.close) {
// ctx.fillStyle = "red"
// } else {
// ctx.fillStyle = "yellow"
// }

// if (candle.high >= candle.close && candle.open < candle.close && candle.low <= candle.open) {
// ctx.fillStyle = "green" растущая зеленая свеча (победа команды 1)
// }

// if (candle.high >= candle.open && candle.open > candle.close && candle.low <= candle.low) {
// сtx.fillStyle = "green" (поражение команды 1)
//}

// if (candle.high >= candle.open && candle.high => candle.close && candle.open = candle.close && candle.low <= candle.open && candle.low <= candle.close {
// ctx.fullStyle = "yellow" (ничья)
// }



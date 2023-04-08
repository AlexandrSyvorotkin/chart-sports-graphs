// Данные для построения графика
const dataGraph = [
//   { date: new Date("2022-01-01"), open: 10, high: 15, low: 5, close: 12 },
//   { date: new Date("2022-01-02"), open: 12, high: 18, low: 9, close: 16 },
//   { date: new Date("2022-01-03"), open: 16, high: 20, low: 11, close: 18 },
//   { date: new Date("2022-01-04"), open: 18, high: 22, low: 13, close: 20 },
//   { date: new Date("2022-01-05"), open: 20, high: 24, low: 15, close: 22 },
  {date: new Date('01.09.2023'), open: 0, high: 2, low: -1, close: 1},
    {date: new Date('12-09-2023'), open: 1, high: 3, low: -2, close: 0},
    {date: new Date('12-09-2023'), open: 0, high: 0, low: -3, close: -3},
    {date: new Date('27-09-2023'), open: -3, high: -1, low: -3, close: -1},
    {date: new Date('05-10-2023'), open: -1, high: 1, low: 0, close: 0},
    {date: new Date('12-10-2023'), open: 0, high: 1, low: 1, close: 0},
    {date: new Date('12-10-2023'), open: 0, high: 1, low: -3, close: -2},
    {date: new Date('28-10-2023'), open: -2, high: 1, low: -4, close: -1},
    {date: new Date('04-11-2023'), open: -1, high: 1, low: -3, close: -1},
    {date: new Date('11-11-2023'), open: -1, high: 1, low: -2, close: 0},
    {date: new Date('11-11-2023'), open: 0, high: 2, low: -1, close: 1},
    {date: new Date('26-11-2023'), open: 1, high: 2, low: -2, close: -2},
    {date: new Date('02-12-2023'), open: -1, high: -1, low: -1, close: -1},
    {date: new Date('13-12-2023'), open: -1, high: 1, low: -3, close: -1},
    {date: new Date('21-12-2023'), open: -1, high: 1, low: -3, close: -1},
    {date: new Date('28-12-2023'), open: -1, high: 3, low: -2, close: 2},
    {date: new Date('06-01-2024'), open: 2, high: 3, low: -1, close: 0},
    {date: new Date('11-01-2024'), open: 0, high: 5, low: -1, close: 4},
    {date: new Date('17-01-2024'), open: 6, high: 10, low: 5, close: 9},
    {date: new Date('25-01-2024'), open: 9, high: 11, low: 9, close: 11},
    {date: new Date('31-01-2024'), open: 11, high: 12, low: 11, close: 12},
    {date: new Date('08-02-2024'), open: 12, high: 14, low: 11, close: 13},
    {date: new Date('15-02-2024'), open: 13, high: 15, low: 11, close: 13},
    {date: new Date('26-02-2024'), open: 13, high: 14, low: 13, close: 14},
    {date: new Date('05-03-2024'), open: 14, high: 17, low: 14, close: 17},
    {date: new Date(), open: 17, high: 17, low: 17, close: 17},
];

// Получение элемента canvas из DOM
const canvasGraph = document.getElementById("candlestick-chart");
const ctxX = canvasGraph.getContext("2d");

// Размеры графика
const chartWidth = canvasGraph.width;
const chartHeight = canvasGraph.height;

// Настройки графика
const candleWidth = 10;
const candleGap = 5;
const maxPrice = Math.max(...dataGraph.map((d) => d.high));
const minPrice = Math.min(...dataGraph.map((d) => d.low));
const priceRange = maxPrice - minPrice;
const pricePerPixel = priceRange / chartHeight;

// Начало рисования графика
ctxX.clearRect(0, 0, chartWidth, chartHeight);
ctxX.fillStyle = "#FFFFFF";
ctxX.fillRect(0, 0, chartWidth, chartHeight);

// Рисование свечей
for (let i = 0; i < dataGraph.length; i++) {
  const candle = dataGraph[i];

  // Рассчитываем координаты свечи
  const x = i * (candleWidth + candleGap) + candleWidth / 2;
  const y1 = (maxPrice - candle.high) / pricePerPixel;
  const y2 = (maxPrice - candle.low) / pricePerPixel;
  const y3 = (maxPrice - candle.open) / pricePerPixel;
  const y4 = (maxPrice - candle.close) / pricePerPixel;

  // Рисуем тело свечи
  if (candle.open < candle.close) {
    ctxX.fillStyle = "#00FF00"; // Зеленый цвет для положительных свечей
    ctxX.fillRect(x - candleWidth / 2, y4, candleWidth, y3 - y4);
  } else {
    ctxX.fillStyle = "#FF0000"; // Красный цвет для отрицательных свечей
    ctxX.fillRect(x - candleWidth / 2, y3, candleWidth, y4 - y3);
  }

  // Рисуем тени свечи
  ctxX.strokeStyle = "#000000";
  ctxX.beginPath();
  ctxX.moveTo(x, y1);
  ctxX.lineTo(x, y2);
  ctxX.stroke();
}

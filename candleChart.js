// Получаем ссылку на элемент canvas на странице
const canvas = document.getElementById("chart");

// Создаем объект контекста для рисования на canvas
const ctx = canvas.getContext("2d");

// Устанавливаем размеры canvas
canvas.width = 600;
canvas.height = 400;

// Задаем значения осей X и Y
const xValues = ["1", "2", "3", "4", "5", "6", "7", "8"];
const yValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

// Создаем массив с результатами команды
const results = [1, -2, 3, 0, -1, 4, -3, 2];

// Задаем параметры для рисования свечей
const candleWidth = 50;
const spaceBetweenCandles = 20;
const candleBorderColor = "#000";
const candleBullishColor = "#00ff00";
const candleBearishColor = "#ff0000";

// Находим минимальное и максимальное значение результатов команды
const minResult = Math.min(...results);
const maxResult = Math.max(...results);

// Задаем масштаб для оси Y
const yScale = (canvas.height - 40) / (maxResult - minResult + 1);

// Рисуем оси X и Y
ctx.beginPath();
ctx.moveTo(30, 0);
ctx.lineTo(30, canvas.height - 20);
ctx.lineTo(canvas.width, canvas.height - 20);
ctx.stroke();

// Рисуем метки на оси X
for (let i = 0; i < xValues.length; i++) {
    ctx.fillText(xValues[i], 45 + (candleWidth + spaceBetweenCandles) * i, canvas.height - 5);
}

// Рисуем метки на оси Y
for (let i = 0; i < yValues.length; i++) {
    ctx.fillText(yValues[i], 5, canvas.height - 30 - yScale * (yValues[i] - minResult));
}

// Рисуем свечи на графике
for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const x = 40 + (candleWidth + spaceBetweenCandles) * i;
    const y = canvas.height - 20 - yScale * (result - minResult);

    // Рисуем тело свечи
    ctx.beginPath();
    ctx.moveTo(x + candleWidth / 2, y);
    ctx.lineTo(x + candleWidth / 2, y + Math.abs(result) * yScale);
    ctx.fillStyle = result >= 0 ? candleBullishColor : candleBearishColor;
    ctx.fillRect(x, y, candleWidth, Math.abs(result) * yScale);

    // Рисуем верхнюю тень свечи
    ctx.beginPath();
    ctx.moveTo(x + candleWidth / 2, y);
    ctx.lineTo(x + candleWidth / 2, y - yScale);
    ctx.strokeStyle = candleBorderColor;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + candleWidth / 2, y + Math.abs(result) * yScale);
    ctx.lineTo(x + candleWidth / 2, y + Math.abs(result) * yScale + yScale);
    ctx.strokeStyle = candleBorderColor;
    ctx.stroke();
}


const express = require('express');
const app = express();

// Маршрут для генерации случайного числа
app.get('/random', (req, res) => {
  const min = parseInt(req.query.min);
  const max = parseInt(req.query.max);
  
  if (isNaN(min) || isNaN(max)) {
    res.status(400).json({ error: 'Некорректные параметры' });
  } else {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({ random: randomNum });
  }
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

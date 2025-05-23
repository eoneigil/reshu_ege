const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Раздача статических файлов из папки build
app.use(express.static(path.join(__dirname, 'build')));

// Обработка всех маршрутов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
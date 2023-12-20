
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('dist'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(80, () => console.log("[Server] Сервер запущен! Порт: 3001"));

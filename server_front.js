const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('dist'));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
  app.get("/reg", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
  app.get("/user", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
  app.listen(3001, () => console.log("[Server] Сервер запущен! Порт: 3001"));
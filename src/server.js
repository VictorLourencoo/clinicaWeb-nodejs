const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDataBase = require('./Config/database.config');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.listen(
  PORT,
  console.log(
    `Servidor rodando em modo ${process.env.NODE_ENV} na porta ${PORT} `
  )
);

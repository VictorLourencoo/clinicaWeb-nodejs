const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
const connectDataBase = require('./Config/database.config');

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Servidor rodando em modo ${process.env.NODE_ENV} na porta ${PORT} `
  )
);

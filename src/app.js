const express = require('express');

const app = express();

//Rotas
const paciente = require('./routes/Paciente.route');

//conectando com o banco de dados
require('./Config/database.config');

//body parser
app.use(express.json());

app.use('/api/v1/paciente', paciente);

module.exports = app;

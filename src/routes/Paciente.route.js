const express = require('express');
const router = express.Router();
const PacienteModel = require('../models/Paciente.model');
const PacienteController = require('../Controller/Paciente.controller');

router.post('/create', PacienteController.createPacienteUser);

module.exports = router;

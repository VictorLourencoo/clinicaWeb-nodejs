const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const PacienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Por favor, informe o nome do Usuario '],
    trim: true,
    maxlength: [
      80,
      'O nome do usuario dentista deve ter no maximo 80 caracteres',
    ],
  },

  cpf: {
    type: String,
    unique: true,
    required: [true, 'Por favor, informe o CPF do Usuario'],
    minlength: [14, 'Informe os 11 digitos do CPF do Usuario'],
    maxlength: [14, 'Informe os 11 digitos do CPF do Usuario'],
    match: [
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      'Por favor, informe um CPF válido!',
    ],
  },

  telefone: {
    type: String,
    required: [true, 'Por favor, informe um telefone para eventuais contatos.'],
    minlength: [14, 'Por favor, informe um número de telefone válido.'],
    match: [
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      'Por favor, informe um nº de telefone válido.',
    ],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Por favor, informe um e-mail válido!.',
    ],
  },

  senha: {
    type: String,
    required: [true, 'Por favor, informe a senha do Usuario'],
    minlength: [6, 'Sua senha deve conter pelo menos 6 caracteres'],
    maxlength: [20, 'Sua senha não pode ultrapassar 30 caracteres'],
    select: false,
  },

  role: {
    type: String,
    default: 'Paciente',
  },
  criadoEm: {
    type: Date,
    default: Date.now(),
  },
});
PacienteSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
});

module.exports = mongoose.model('Paciente', PacienteSchema);

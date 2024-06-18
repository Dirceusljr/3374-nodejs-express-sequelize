const PessoaServices = require('../services/PessoaServices.js');
const Controller = require('./Controller');

const pessoaServices = new PessoaServices();


class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }
}

module.exports = PessoaController;
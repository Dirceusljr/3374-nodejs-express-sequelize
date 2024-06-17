const PessoaServices = require('../services/PessoaServices');
const Controller = require('./Controller');

const pessoaServices = new PessoaServices();


class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }
}

module.exports = PessoaController;
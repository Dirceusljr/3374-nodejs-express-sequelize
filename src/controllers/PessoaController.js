const PessoaServices = require('../services/PessoaServices.js');
const Controller = require('./Controller');

const pessoaServices = new PessoaServices();


class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculadas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculadas);
    } catch (erro) {
      //erro
    }
  }
}

module.exports = PessoaController;
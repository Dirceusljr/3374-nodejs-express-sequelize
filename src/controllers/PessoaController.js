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
      return res.status(500).json({ erro: erro.message});
    }
  }

  async pegaTodasAsPessoas (req, res) {
    try {
      const listaPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(listaPessoas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});

    }
  }
}

module.exports = PessoaController;
const PessoaServices = require('../services/PessoaServices.js');
const Controller = require('./Controller');

const pessoaServices = new PessoaServices();


class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculadas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculadas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculadas = await pessoaServices.pegaTodasAsMatriculasPorEstudante(Number(estudante_id));
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
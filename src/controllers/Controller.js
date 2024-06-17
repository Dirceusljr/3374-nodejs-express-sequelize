class Controller {
  constructor (entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos (req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      //erro
    }
  }

  async pegaUmPorID (req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      //erro
    }
  }

  async criaNovo (req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistro = await this.entidadeService.criaNovoRegistro(dadosParaCriacao);
      return res.status(201).json({message:'Registro criado com sucesso', novoRegistro});
    } catch (erro) {
      //erro
    }
  }

}

module.exports = Controller;
class Controller {
  constructor (entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos (req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }
  }

  async pegaUmPorID (req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }
  }

  async criaNovo (req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistro = await this.entidadeService.criaNovoRegistro(dadosParaCriacao);
      return res.status(201).json({message:'Registro criado com sucesso', novoRegistro});
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({message: 'Não foi possível atualizar o registro'});
      }
      return res.status(200).json({message: 'Registro atualizado com sucesso'});
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({message: 'Registro excluído com sucesso'});
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }
  }

}

module.exports = Controller;
const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return await dataSource[this.model].findAll();
  }

  async pegaRegistrosPorEscopo (escopo) {
    return await dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async criaNovoRegistro(dadosDoRegistro) {
    return await dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
      where: {
        id: id
      }
    });
    if (listaDeRegistrosAtualizados[0] === 0 ) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return await dataSource[this.model].destroy({
      where: {
        id: id
      }
    });
  }

}

module.exports = Services;
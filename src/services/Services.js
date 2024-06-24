const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros( where = {} ) {
    return await dataSource[this.model].findAll({
      where: {
        ...where
      }
    });
  }

  async pegaRegistrosPorEscopo (escopo) {
    return await dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async pegaUm(where) {
    return await dataSource[this.model].findOne({ where: { ...where } });
  }

  async pegaEContaRegistros(where) {
    return await dataSource[this.model].findAndCountAll({ where: { ...where } });
  }

  async criaNovoRegistro(dadosDoRegistro) {
    return await dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where) {
    const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
      where: {
        ...where 
      }
    });
    if (listaDeRegistrosAtualizados[0] === 0 ) {
      return false;
    }
    return true;
  }

  async excluiRegistro(where) {
    return await dataSource[this.model].destroy({
      where: {
        ...where
      }
    });
  }

}

module.exports = Services;
const dataSource = require('../models');

class Services {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return await dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async criaNovoRegistro(dadosDoRegistro) {
    return await dataSource[this.model].create(dadosDoRegistro);
  }

}

module.exports = Services;
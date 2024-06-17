const dataSource = require('../models');

class Services {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return await dataSource[this.model].findAll();
  }

}

module.exports = Services;
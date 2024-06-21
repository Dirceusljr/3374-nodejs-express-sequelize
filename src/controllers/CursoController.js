const CursoServices = require('../services/CursoServices.js');
const Controller = require('./Controller');
const { Op } = require('sequelize');

const cursoServices = new CursoServices();


class CursoController extends Controller{
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    // Modelo do objeto where:
    // const where = {
    //   data_inicio: {
    //     [Op.gte]: data,
    //     [Op.lte]: dta
    //   }
    // }

    //se existir uma data na query, criar o objeto:
    data_inicial || data_final ? where.data_inicio = {} : null;
    //se existir data_inicial, adicionar a data_inicial no objeto where
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    //se existir data_final, adicionar a data_final no objeto where
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message});
    }

  }
}

module.exports = CursoController;
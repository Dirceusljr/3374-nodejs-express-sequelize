const MatriculaServices = require('../services/MatriculaServices.js');
const Controller = require('./Controller');

const matriculaServices = new MatriculaServices();


class MatriculaController extends Controller{
  constructor() {
    super(matriculaServices);
  }
}

module.exports = MatriculaController;
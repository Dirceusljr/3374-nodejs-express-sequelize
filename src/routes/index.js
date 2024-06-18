const express = require('express');
const pessoas = require('../routes/pessoaRoute.js');
const categorias = require('../routes/categoriaRoute.js');
const cursos = require('../routes/cursoRoute.js');

const router = app => {
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};

module.exports = router;
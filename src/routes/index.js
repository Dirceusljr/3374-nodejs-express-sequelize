const express = require('express');
const pessoas = require('../routes/pessoaRoute.js');

const router = app => {
  app.use(
    express.json(),
    pessoas
  );
};

module.exports = router;
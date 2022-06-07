const categoriaService = require("../services/categoria.service");

const list = async (req, res) => {
  const categoria = await categoriaService.list(req.query.q);
  res.send({
    success: true,
    categoria,
  });
};

const listFilter = async (req, res) => {
  const categoria = await categoriaService.listFilter(req.query.q);
  res.send({
    success: true,
    categoria,
  });
};

const getById = async (req, res) => {
  const categoria = await categoriaService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["categoria"] = categoria;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const categoria = await categoriaService.create(req.body);
  res.status(200).send({
    success: true,
    categoria,
  });
};

const update = async (req, res) => {
  const categoria = await categoriaService.update(req.body, req.params.id);
  console.log("datos actualizacion", categoria);
  res.status(202).send({
    success: true,
    categoria,
  });
};

const remove = async (req, res) => {
  const booleanValue = await categoriaService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };

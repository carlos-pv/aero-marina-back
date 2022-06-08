const categoriaService = require("../services/categoria.service");

const list = async (req, res) => {
  const data = await categoriaService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const listFilter = async (req, res) => {
  const data = await categoriaService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await categoriaService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["categoria"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const data = await categoriaService.create(req.body);
  res.status(200).send({
    success: true,
    data,
  });
};

const update = async (req, res) => {
  const data = await categoriaService.update(req.body, req.params.id);
  console.log("datos actualizacion", data);
  res.status(202).send({
    success: true,
    categodataria,
  });
};

const remove = async (req, res) => {
  const booleanValue = await categoriaService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };

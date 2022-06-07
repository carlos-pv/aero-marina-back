const productoService = require("../services/producto.service");

const list = async (req, res) => {

  const producto = await productoService.list(req.query.q);
  res.send({
    success: true,
    producto,
  });
};

const listFilter = async (req, res) => {
  const producto = await productoService.listFilter(req.query.q);
  res.send({
    success: true,
    producto,
  });
};

const getById = async (req, res) => {
  const producto = await productoService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["producto"] = producto;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const producto = await productoService.create(req.body);
  res.status(200).send({
    success: true,
    producto,
  });
};

const update = async (req, res) => {
  const producto = await productoService.update(req.body, req.params.id);
  console.log("datos actualizacion", producto);
  res.status(202).send({
    success: true,
    producto,
  });
};

const remove = async (req, res) => {
  const booleanValue = await productoService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };

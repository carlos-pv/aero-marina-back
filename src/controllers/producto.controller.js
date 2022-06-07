const productoService = require("../services/producto.service");

const list = async (req, res) => {

  const data = await productoService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const listFilter = async (req, res) => {
  const data = await productoService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await productoService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["producto"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  try {
    const data = await productoService.create(req.body);
    res.status(200).send({
      success: true,
      data,
    });
    
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo crear el producto"
    });
  }
};

const update = async (req, res) => {
  const data = await productoService.update(req.body, req.params.id);
  console.log("datos actualizacion", data);
  res.status(202).send({
    success: true,
    data,
  });
};

const remove = async (req, res) => {
  const booleanValue = await productoService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };

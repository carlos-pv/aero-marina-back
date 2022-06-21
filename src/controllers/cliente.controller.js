const { request } = require("express");
const clienteService = require("../services/cliente.service");

const list = async (req, res) => {
  const data = await clienteService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const listFilter = async (req, res) => {
  const data = await clienteService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await clienteService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["cliente"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const data = await clienteService.create(req.body);
  res.status(200).send({
    success: true,
    data,
  });
};

const update = async (req, res) => {
  const data = await clienteService.update(req.body, req.params.id);
  console.log("datos actualizacion", data);
  res.status(202).send({
    success: true,
    data,
  });
};

const remove = async (req, res) => {
  const booleanValue = await clienteService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  listFilter
};

const usuarioService = require("../../services/usuario/usuario.service");

const list = async (req, res) => {
  const usuario = await usuarioService.list(req.query.q);
  res.send({
    success: true,
    usuario,
  });
};

const listFilter = async (req, res) => {
  const usuario = await usuarioService.listFilter(req.query.q);
  res.send({
    success: true,
    usuario,
  });
};

const getById = async (req, res) => {
  const usuario = await usuarioService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["usuario"] = usuario;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const usuario = await usuarioService.create(req.body);
  res.status(200).send({
    success: true,
    usuario,
  });
};

const update = async (req, res) => {
  const usuario = await usuarioService.update(req.body, req.params.id);
  console.log("datos actualizacion", usuario);
  res.status(202).send({
    success: true,
    usuario,
  });
};

const remove = async (req, res) => {
  const booleanValue = await usuarioService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };

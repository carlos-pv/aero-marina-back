const { request } = require("express");
const usuarioService = require("../services/usuario.service");

const list = async (req, res) => {
  const data = await usuarioService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const listFilter = async (req, res) => {
  const data = await usuarioService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await usuarioService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["usuario"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const data = await usuarioService.create(req.body);
  res.status(200).send({
    success: true,
    data,
  });
};

const update = async (req, res) => {
  const data = await usuarioService.update(req.body, req.params.id);
  console.log("datos actualizacion", data);
  res.status(202).send({
    success: true,
    data,
  });
};

const remove = async (req, res) => {
  const booleanValue = await usuarioService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

// const login = async (req, res) => {
//   try {
//     const data = await usuarioService.login(req.body);

//     res.status(200).send({
//       success: true,
//       token: data.token,
//     });
//   } catch (error) {
//     res.status(200).send({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// const logout = async (req, res) => {
  
//   const data = await usuarioService.logout(req.usuarioId);
  
//   res.status(200).send({
//     success: true,
//     data,
//   });

// };

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  listFilter
};

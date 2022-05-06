const { UsuarioModel } = require("../../models/usuario.model");
const { sequelize } = require("../bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResults = await UsuarioModel.findAll();

  const usuariosArray = new Array();
  for (let i = 0; i < usuarioModelResults.length; i++) {
    const usuariosResult = usuarioModelResults[i];
    usuariosArray.push(usuariosResult.dataValues);
  }

  return usuariosArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let usuariosResults = await sequelize.query(
    `SELECT *
                                              FROM usuarios
                                              WHERE UPPER (usu_nombre) LIKE :q
                                              OR UPPER (usu_apellido) LIKE :q
                                              ORDER BY usu_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //usuariosResults = (usuariosResults && usuariosResults [0]) ? usuariosResults[0] : [];

  console.log("usuariosResults", usuariosResults);

  return usuariosResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const usuarioModelResults = await UsuarioModel.findByPk(codigo);

  if (usuarioModelResults) {
    return usuarioModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);

  const usuarioModelResults = await UsuarioModel.create(data);
  return usuarioModelResults.dataValues;
  // if (usuarioModelResults) {
  //   return usuarioModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const usuarioModelCount = await UsuarioModel.update(data, {
    where: {
      usu_codigo: id,
    },
  });
  console.log("update data", usuarioModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (usu_codigo) => {
  console.log("remove codigo", usu_codigo);

  const usuarioModelCount = await UsuarioModel.destroy({
    where: {
      usu_codigo,
    },
  });

  if (usuarioModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  listFilter,
  create,
  getById,
  update,
  remove,
};

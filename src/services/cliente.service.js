const { ClienteModel } = require("../models/cliente.model");
const { sequelize } = require("./bd.service");

const { QueryTypes, DATE } = require("sequelize");

const jwt = require("jsonwebtoken");
const { request } = require("express");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const clienteModelResults = await ClienteModel.findAll();

  const clientesArray = new Array();
  for (let i = 0; i < clienteModelResults.length; i++) {
    const clientesResult = clienteModelResults[i];
    clientesArray.push(clientesResult.dataValues);
  }

  return clientesArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let clientesResults = await sequelize.query(
    `SELECT * FROM personas_clientes pcl INNER JOIN personas p ON pcl.cli_codigo = p.per_codigo
                                              WHERE UPPER (per_nombre) LIKE :q
                                              OR UPPER (per_apellido) LIKE :q
                                              ORDER BY per_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //clientesResults = (clientesResults && clientesResults [0]) ? clientesResults[0] : [];

  //console.log("clientesResults", clientesResults);

  return clientesResults;
};

// Buscar en la Base de datos por codigo
const getById = async (codigo) => {
  const clienteModelResults = await ClienteModel.findByPk(codigo);

  if (clienteModelResults) {
    return clienteModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log(data);

  fechaActual = new Date();

  console.log('FECHA ACTUALLL',fechaActual);

  let sql = `SELECT agregar_cliente(:nombre, :apellido, :documento, :telefono, :nacimiento, :email, :preferencias, :fechacreate)`;
  
  const clienteModelResults = await sequelize.query(sql, {  
    replacements:{
      nombre: data.per_nombre,
      apellido: data.per_apellido,
      documento: data.per_documento,
      telefono: data.per_telefono,
      nacimiento: data.per_nacimiento,
      email: data.per_email,
      preferencias: data.cli_preferencias,
      fechacreate: fechaActual
  }});

  return data;

};

// Actualizar en la Base de datos
const update = async (data, id) => {
  const clienteModelCount = await ClienteModel.update(data, {
    where: {
      cli_codigo: id,
    },
  });
  //console.log("update data", clienteModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (cli_codigo) => {
  //console.log("remove codigo", cli_codigo);
  const clienteModelCount = await ClienteModel.destroy({
    where: {
      cli_codigo,
    },
  });

  if (clienteModelCount > 0) {
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

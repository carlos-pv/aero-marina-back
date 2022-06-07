const { ProductoModel } = require("../models/producto.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const productoModelResults = await ProductoModel.findAll();

  const productosArray = new Array();
  for (let i = 0; i < productoModelResults.length; i++) {
    const productosResult = productoModelResults[i];
    productosArray.push(productosResult.dataValues);
  }

  return productosArray;
};

const listMasVendidos = async(query, pageStart = 1, pageLimit = 10) =>{
  let productosResults = await sequelize.query(
    `SELECT *
                                              FROM productos
                                              WHERE pro_mas_vendido = 1
                                              ORDER BY pro_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  console.log("productosResults", productosResults);

  return productosResults;
};

const listDestacados = async(query, pageStart = 1, pageLimit = 10) =>{
  let productosResults = await sequelize.query(
    `SELECT *
                                              FROM productos
                                              WHERE pro_destacado = 1
                                              ORDER BY pro_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  console.log("productosResults", productosResults);

  return productosResults;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let productosResults = await sequelize.query(
    `SELECT *
                                              FROM productos
                                              WHERE UPPER (pro_nombre) LIKE :q
                                              OR UPPER (pro_codigo_barras) LIKE :q
                                              ORDER BY pro_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //productosResults = (productosResults && productosResults [0]) ? productosResults[0] : [];

  console.log("productosResults", productosResults);

  return productosResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const productoModelResults = await ProductoModel.findByPk(codigo);

  if (productoModelResults) {
    return productoModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);

  const productoModelResults = await ProductoModel.create(data);
  return productoModelResults.dataValues;

};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const productoModelCount = await ProductoModel.update(data, {
    where: {
      pro_codigo: id,
    },
  });
  console.log("update data", productoModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (pro_codigo) => {
  console.log("remove codigo", pro_codigo);

  const productoModelCount = await ProductoModel.destroy({
    where: {
      pro_codigo,
    },
  });

  if (productoModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  listMasVendidos,
  listDestacados,
  listFilter,
  create,
  getById,
  update,
  remove,
};

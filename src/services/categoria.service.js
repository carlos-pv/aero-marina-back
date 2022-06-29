const { CategoriaModel } = require("../models/categoria.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const categoriaModelResults = await CategoriaModel.findAll();

  const categoriasArray = new Array();
  for (let i = 0; i < categoriaModelResults.length; i++) {
    const categoriasResult = categoriaModelResults[i];
    categoriasArray.push(categoriasResult.dataValues);
  }

  return categoriasArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let categoriasResults = await sequelize.query(
    `SELECT *
                                              FROM categorias
                                              WHERE UPPER (cat_descripcion) LIKE :q
                                              ORDER BY cat_descripcion`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  console.log("categoriasResults", categoriasResults);
  return categoriasResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const categoriaModelResults = await CategoriaModel.findByPk(codigo);

  if (categoriaModelResults) {
    return categoriaModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);
try {
  const categoriaModelResults = await CategoriaModel.create(data);
  return categoriaModelResults.dataValues;
  
} catch (error) {
  error  
}

};

// Actualizar en la Base de datos

const update = async (data, id) => {
    const categoriaModelCount = await CategoriaModel.update(data, {
      where: {
        cat_codigo: id,
      },
    });
    console.log("update data", data);
    return data;
};

// Eliminar en la Base de datos

const remove = async (cat_codigo) => {
  console.log("remove codigo", cat_codigo);

  const categoriaModelCount = await CategoriaModel.destroy({
    where: {
      cat_codigo,
    },
  });

  if (categoriaModelCount > 0) {
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

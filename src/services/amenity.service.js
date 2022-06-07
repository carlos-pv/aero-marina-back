const { AmenityModel } = require("../models/amenity.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const amenityModelResults = await AmenityModel.findAll();

  const amenitiesArray = new Array();
  for (let i = 0; i < amenityModelResults.length; i++) {
    const amenitiesResult = amenityModelResults[i];
    amenitiesArray.push(amenitiesResult.dataValues);
  }

  return amenitiesArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let amenitiesResults = await sequelize.query(
    `SELECT *
                                              FROM amenities
                                              WHERE UPPER (ame_nombre) LIKE :q
                                              OR UPPER (ame_descripcion) LIKE :q
                                              ORDER BY ame_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //amenitiesResults = (amenitiesResults && amenitiesResults [0]) ? amenitiesResults[0] : [];

  console.log("amenitiesResults", amenitiesResults);

  return amenitiesResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const amenityModelResults = await AmenityModel.findByPk(codigo);

  if (amenityModelResults) {
    return amenityModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);

  const amenityModelResults = await AmenityModel.create(data);
  return amenityModelResults.dataValues;
  // if (amenityModelResults) {
  //   return amenityModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const amenityModelCount = await AmenityModel.update(data, {
    where: {
      ame_codigo: id,
    },
  });
  console.log("update data", amenityModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (ame_codigo) => {
  console.log("remove codigo", ame_codigo);

  const amenityModelCount = await AmenityModel.destroy({
    where: {
      ame_codigo,
    },
  });

  if (amenityModelCount > 0) {
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

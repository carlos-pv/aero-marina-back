const { FacilityModel } = require("../models/facility.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const facilityModelResults = await FacilityModel.findAll();

  const facilitiesArray = new Array();
  for (let i = 0; i < facilityModelResults.length; i++) {
    const facilitiesResult = facilityModelResults[i];
    facilitiesArray.push(facilitiesResult.dataValues);
  }

  return facilitiesArray;
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let facilitiesResults = await sequelize.query(
    `SELECT *
                                              FROM facilities
                                              WHERE UPPER (fac_nombre) LIKE :q
                                              OR UPPER (fac_descripcion) LIKE :q
                                              ORDER BY fac_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //facilitiesResults = (facilitiesResults && facilitiesResults [0]) ? facilitiesResults[0] : [];

  console.log("facilitiesResults", facilitiesResults);

  return facilitiesResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const facilityModelResults = await FacilityModel.findByPk(codigo);

  if (facilityModelResults) {
    return facilityModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);

  const facilityModelResults = await FacilityModel.create(data);
  return facilityModelResults.dataValues;
  // if (facilityModelResults) {
  //   return facilityModelResults.dataValues;
  // } else {
  //   return null;
  // }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const facilityModelCount = await FacilityModel.update(data, {
    where: {
      fac_codigo: id,
    },
  });
  console.log("update data", facilityModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (fac_codigo) => {
  console.log("remove codigo", fac_codigo);

  const facilityModelCount = await FacilityModel.destroy({
    where: {
      fac_codigo,
    },
  });

  if (facilityModelCount > 0) {
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

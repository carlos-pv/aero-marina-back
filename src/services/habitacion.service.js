const { HabitacionModel } = require("../models/habitacion.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const habitacionModelResults = await HabitacionModel.findAll();

  const habitacionesArray = new Array();
  for (let i = 0; i < habitacionModelResults.length; i++) {
    const habitacionesResult = habitacionModelResults[i];
    habitacionesArray.push(habitacionesResult.dataValues);
  }

  return habitacionesArray;
};

// const listMasVendidos = async(query, pageStart = 1, pageLimit = 10) =>{
//   let habitacionesResults = await sequelize.query(
//     `SELECT *
//                                               FROM habitaciones
//                                               WHERE pro_mas_vendido = 1
//                                               ORDER BY pro_nombre`,
//     {
//       replacements: {
//         q: query ? "%" + query.toUpperCase() + "%" : "%",
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

//   console.log("habitacionesResults", habitacionesResults);

//   return habitacionesResults;
// };

// const listDestacados = async(query, pageStart = 1, pageLimit = 10) =>{
//   let habitacionesResults = await sequelize.query(
//     `SELECT *
//                                               FROM habitaciones
//                                               WHERE pro_destacado = 1
//                                               ORDER BY pro_nombre`,
//     {
//       replacements: {
//         q: query ? "%" + query.toUpperCase() + "%" : "%",
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

//   console.log("habitacionesResults", habitacionesResults);

//   return habitacionesResults;
// };

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let habitacionesResults = await sequelize.query(
    `SELECT *
                                              FROM habitaciones
                                              WHERE UPPER (hab_nombre) LIKE :q
                                              OR UPPER (hab_descripcion) LIKE :q
                                              OR UPPER (hab_numero) LIKE :q
                                              ORDER BY hab_numero`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //habitacionesResults = (habitacionesResults && habitacionesResults [0]) ? habitacionesResults[0] : [];

  console.log("habitacionesResults", habitacionesResults);

  return habitacionesResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const habitacionModelResults = await HabitacionModel.findByPk(codigo);

  if (habitacionModelResults) {
    return habitacionModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);

  const habitacionModelResults = await HabitacionModel.create(data);
  return habitacionModelResults.dataValues;

};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const habitacionModelCount = await HabitacionModel.update(data, {
    where: {
      hab_codigo: id,
    },
  });
  console.log("update data", habitacionModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (hab_codigo) => {
  console.log("remove codigo", hab_codigo);

  const habitacionModelCount = await HabitacionModel.destroy({
    where: {
      hab_codigo,
    },
  });

  if (habitacionModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  // listMasVendidos,
  // listDestacados,
  listFilter,
  create,
  getById,
  update,
  remove,
};

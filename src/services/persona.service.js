const { PersonaModel } = require("../models/persona.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

 const list = async (query, pageStart = 1, pageLimit = 10) => {
  try {
    const personaModelResults = await PersonaModel.findAll();
  
    const personasArray = new Array();
    for (let i = 0; i < personaModelResults.length; i++) {
      const personasResult = personaModelResults[i];
      personasArray.push(personasResult.dataValues);
    }
  
    return personasArray;
    
  } catch (error) {
    error 
  }
}; 

// const list = async (query, pageStart = 1, pageLimit = 10) => {
//   try {
//     let sql = 'SELECT * FROM personas p INNER JOIN categorias c ON p.pro_categoria = c.cat_codigo'

//     const personaModelResults = await sequelize.query(sql,
//       {
//         type: QueryTypes.SELECT,
//       }
//     );
 
//     return personaModelResults;
    
//   } catch (error) {
//     error 
//   }
// };
// const listMasVendidos = async(query, pageStart = 1, pageLimit = 10) =>{
//   let personasResults = await sequelize.query(
//     `SELECT *
//                                               FROM personas
//                                               WHERE pro_mas_vendido = 1
//                                               ORDER BY pro_nombre`,
//     {
//       replacements: {
//         q: query ? "%" + query.toUpperCase() + "%" : "%",
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

//   console.log("personasResults", personasResults);

//   return personasResults;
// };

// const listDestacados = async(query, pageStart = 1, pageLimit = 10) =>{
//   let personasResults = await sequelize.query(
//     `SELECT *
//                                               FROM personas
//                                               WHERE pro_destacado = 1
//                                               ORDER BY pro_nombre`,
//     {
//       replacements: {
//         q: query ? "%" + query.toUpperCase() + "%" : "%",
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

//   console.log("personasResults", personasResults);

//   return personasResults;
// };

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let personasResults = await sequelize.query(
    `SELECT *
                                              FROM personas
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

  console.log("personasResults", personasResults);
  return personasResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  try {
    
    const personaModelResults = await PersonaModel.findByPk(codigo);
    
    if (personaModelResults) {
      return personaModelResults.dataValues;
    } else {
      return null;
    }
  } catch (error) {
    error
  }
};

// Guardar en la Base de datos
const create = async (data) => {
  console.log("create data", data);

  const personaModelResults = await PersonaModel.create(data);
  return personaModelResults.dataValues;

};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const personaModelCount = await PersonaModel.update(data, {
    where: {
      per_codigo: id,
    },
  });
  console.log("update data", personaModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (per_codigo) => {
  console.log("remove codigo", per_codigo);

  const personaModelCount = await PersonaModel.destroy({
    where: {
      per_codigo,
    },
  });

  if (personaModelCount > 0) {
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

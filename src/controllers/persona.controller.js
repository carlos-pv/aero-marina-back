const personaService = require("../services/persona.service");

const list = async (req, res) => {
  const data = await personaService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

// const listMasVendidos = async (req, res) => {
//   const data = await personaService.listMasVendidos(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// };

// const listDestacados = async (req, res) =>{
//   const data = await personaService.listDestacados(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// }

const listFilter = async (req, res) => {
  const data = await personaService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await personaService.getById(req.params.id);
  res.status(200).send({
    success: true,
    data
  });
};

const create = async (req, res) => {
  try {
    const data = await personaService.create(req.body);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo crear la persona",
    });
  }
};

const update = async (req, res) => {
  try {
    const data = await personaService.update(req.body, req.params.id);
    console.log("datos actualizacion", data);
    res.status(200).send({
      success: true,
      data,
    });
    
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo actualizar la persona",
    });
  }
  
};

const remove = async (req, res) => {
  const booleanValue = await personaService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  // listMasVendidos,
  // listDestacados,
  getById,
  create,
  update,
  remove,
  listFilter,
};

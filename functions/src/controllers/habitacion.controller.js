const habitacioneservice = require("../services/habitacion.service");

const list = async (req, res) => {
  const data = await habitacioneservice.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

// const listMasVendidos = async (req, res) => {
//   const data = await habitacioneservice.listMasVendidos(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// };

// const listDestacados = async (req, res) =>{
//   const data = await habitacioneservice.listDestacados(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// }

const listFilter = async (req, res) => {
  const data = await habitacioneservice.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await habitacioneservice.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["habitacion"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  try {
    const data = await habitacioneservice.create(req.body);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo crear la habitacion",
    });
  }
};

const update = async (req, res) => {
  try {
    const data = await habitacioneservice.update(req.body, req.params.id);
    console.log("datos actualizacion", data);
    res.status(200).send({
      success: true,
      data,
    });
    
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo actualizar la habitacion",
    });
    
  }
};

const remove = async (req, res) => {
  const booleanValue = await habitacioneservice.remove(req.params.id);
  res.status(200).send({
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

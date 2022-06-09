const facilitieservice = require("../services/facility.service");

const list = async (req, res) => {
  const data = await facilitieservice.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

// const listMasVendidos = async (req, res) => {
//   const data = await facilitieservice.listMasVendidos(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// };

// const listDestacados = async (req, res) =>{
//   const data = await facilitieservice.listDestacados(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// }

const listFilter = async (req, res) => {
  const data = await facilitieservice.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await facilitieservice.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["facility"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  try {
    const data = await facilitieservice.create(req.body);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo crear la facility",
    });
  }
};

const update = async (req, res) => {
  try {
    const data = await facilitieservice.update(req.body, req.params.id);
    console.log("datos actualizacion", data);
    res.status(200).send({
      success: true,
      data,
    });
    
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo actualizar la facility",
    });
    
  }
};

const remove = async (req, res) => {
  const booleanValue = await facilitieservice.remove(req.params.id);
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

const amenityService = require("../services/amenity.service");

const list = async (req, res) => {
  console.log(req);
  const data = await amenityService.list();
  res.send({
    success: true,
    data,
  });
};

// const listMasVendidos = async (req, res) => {
//   const data = await amenityService.listMasVendidos(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// };

// const listDestacados = async (req, res) =>{
//   const data = await amenityService.listDestacados(req.query.q);
//   res.send({
//     success: true,
//     data,
//   });
// }

const listFilter = async (req, res) => {
  const data = await amenityService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await amenityService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["amenity"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  try {
    const data = await amenityService.create(req.body);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo crear la amenity",
    });
  }
};

const update = async (req, res) => {
  try {
    const data = await amenityService.update(req.body, req.params.id);
    console.log("datos actualizacion", data);
    res.status(200).send({
      success: true,
      data,
    });
    
  } catch (error) {
    res.status(202).send({
      success: false,
      error: "No se pudo actualizar la amenity",
    });
    
  }
};

const remove = async (req, res) => {
  const booleanValue = await amenityService.remove(req.params.id);
  res.status(200).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  listFilter,
};

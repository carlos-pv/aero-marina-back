const habitacionService = require("../services/habitacion.service");

const list = async (req, res) => {
  const data = await habitacionService.list(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const listFilter = async (req, res) => {
  const data = await habitacionService.listFilter(req.query.q);
  res.send({
    success: true,
    data,
  });
};

const getById = async (req, res) => {
  const data = await habitacionService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["habitacion"] = data;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  try {
    
    const data = await habitacionService.create(req.body);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    console.log("El putro error",error);
  }
};

const update = async (req, res) => {
  console.log("datos actualizacion BODY", req.body);
  console.log("datos actualizacion PARAMS", req.params.id);
  try {
    const data = await habitacionService.update(req.body, req.params.id);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    console.log("El error es::", error);
  }
};

const remove = async (req, res) => {
  const booleanValue = await habitacionService.remove(req.params.id);
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

const amenityService = require("../../services/amenity/amenity.service");

const list = async (req, res) => {
  const amenity = await amenityService.list(req.query.q);
  res.send({
    success: true,
    amenity,
  });
};

const listFilter = async (req, res) => {
  const amenity = await amenityService.listFilter(req.query.q);
  res.send({
    success: true,
    amenity,
  });
};

const getById = async (req, res) => {
  const amenity = await amenityService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["amenity"] = amenity;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const amenity = await amenityService.create(req.body);
  res.status(200).send({
    success: true,
    amenity,
  });
};

const update = async (req, res) => {
  const amenity = await amenityService.update(req.body, req.params.id);
  console.log("datos actualizacion", amenity);
  res.status(202).send({
    success: true,
    amenity,
  });
};

const remove = async (req, res) => {
  const booleanValue = await amenityService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = { list, getById, create, update, remove, listFilter };

const amenityController = require("../../controllers/amenity/amenity.controller");

module.exports = (app) => {
  app.get("/amenities", amenityController.list);
  app.get("/amenities-filter", amenityController.listFilter);
  app.get("/amenity/find/:id", amenityController.getById);
  app.post("/amenity/create", amenityController.create);
  app.put("/amenity/update/:id", amenityController.update);
  app.delete("/amenity/remove/:id", amenityController.remove);
};
const facilityController = require("../controllers/facility.controller");
// const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

module.exports = (app) => {
  app.get("/facility", facilityController.list);
  app.get("/facility-filter", facilityController.listFilter);
  app.get("/facility/find/:id", facilityController.getById);
  app.post("/facility/create", facilityController.create);
  app.put("/facility/update/:id", facilityController.update);
  app.delete("/facility/remove/:id", facilityController.remove);
};
const habitacionController = require("../controllers/habitacion.controller");

module.exports = (app) => {
  app.get("/habitacion", habitacionController.list);
  // app.get("/habitacion/mas-vendidos", habitacionController.listMasVendidos);
  // app.get("/habitacion/destacado", habitacionController.listDestacados);
  app.get("/habitacion-filter", habitacionController.listFilter);
  app.get("/habitacion/find/:id", habitacionController.getById);
  app.post("/habitacion/create", habitacionController.create);
  app.put("/habitacion/update/:id", habitacionController.update);
  app.delete("/habitacion/remove/:id", habitacionController.remove);
};

const productoController = require("../controllers/producto.controller");

module.exports = (app) => {
  app.get("/productos", productoController.list);
  app.get("/productos-filter", productoController.listFilter);
  app.get("/producto/find/:id", productoController.getById);
  app.post("/producto/create", productoController.create);
  app.put("/producto/update/:id", productoController.update);
  app.delete("/producto/remove/:id", productoController.remove);
};
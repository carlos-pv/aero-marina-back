const productoController = require("../controllers/producto.controller");

module.exports = (app) => {
  app.get("/producto", productoController.list);
  app.get("/producto/mas-vendidos", productoController.listMasVendidos);
  app.get("/producto/destacado", productoController.listDestacados);

  app.get("/producto-filter", productoController.listFilter);
  app.get("/producto/find/:id", productoController.getById);
  app.post("/producto/create", productoController.create);
  app.put("/producto/update/:id", productoController.update);
  app.delete("/producto/remove/:id", productoController.remove);
};

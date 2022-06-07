const categoriaController = require("../controllers/categoria.controller");

module.exports = (app) => {
  app.get("/categorias", categoriaController.list);
  app.get("/categorias-filter", categoriaController.listFilter);
  app.get("/categoria/find/:id", categoriaController.getById);
  app.post("/categoria/create", categoriaController.create);
  app.put("/categoria/update/:id", categoriaController.update);
  app.delete("/categoria/remove/:id", categoriaController.remove);
};
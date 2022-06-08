const categoriaController = require("../controllers/categoria.controller");

module.exports = (app) => {
  app.get("/categoria", categoriaController.list);
  app.get("/categoria-filter", categoriaController.listFilter);
  app.get("/categoria/find/:id", categoriaController.getById);
  app.post("/categoria/create", categoriaController.create);
  app.put("/categoria/update/:id", categoriaController.update);
  app.delete("/categoria/remove/:id", categoriaController.remove);
};
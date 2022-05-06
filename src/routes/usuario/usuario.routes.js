const usuarioController = require("../../controllers/usuario/usuario.controller");

module.exports = (app) => {
  app.get("/usuarios", usuarioController.list);
  app.get("/usuarios-filter", usuarioController.listFilter);
  app.get("/usuario/find/:id", usuarioController.getById);
  app.post("/usuario/create", usuarioController.create);
  app.put("/usuario/update/:id", usuarioController.update);
  app.delete("/usuario/remove/:id", usuarioController.remove);
};

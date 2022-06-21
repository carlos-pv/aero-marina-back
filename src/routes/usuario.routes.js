const usuarioController = require("../controllers/usuario.controller");

module.exports = (app) => {
  app.get("/usuario", usuarioController.list);
  app.get("/usuario-filter", usuarioController.listFilter);
  app.get("/usuario/find/:id", usuarioController.getById);
  app.post("/usuario/create", usuarioController.create);
  app.put("/usuario/update/:id", usuarioController.update);
  app.delete("/usuario/remove/:id", usuarioController.remove);
  // app.post("/usuario/login", usuarioController.login);
  // app.post("/usuario/logout", usuarioController.logout);
};
const usuarioController = require("../../controllers/usuario/usuario.controller");
const authorizationMiddleware = require("../../middlewares/authorization.middleware.js");

module.exports = (app) => {
  app.get("/usuarios", authorizationMiddleware.authorization, usuarioController.list);
  app.get("/usuarios-filter", authorizationMiddleware.authorization, usuarioController.listFilter);
  app.get("/usuario/find/:id", authorizationMiddleware.authorization, usuarioController.getById);
  app.post("/usuario/create", authorizationMiddleware.authorization, usuarioController.create);
  app.put("/usuario/update/:id", authorizationMiddleware.authorization, usuarioController.update);
  app.delete("/usuario/remove/:id", authorizationMiddleware.authorization, usuarioController.remove);
  app.post("/usuario/login", usuarioController.login);
  app.post("/usuario/logout", authorizationMiddleware.authorization, usuarioController.logout);

};
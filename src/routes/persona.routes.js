const personaController = require("../controllers/persona.controller");

module.exports = (app) => {
  app.get("/persona", personaController.list);
  app.get("/persona-filter", personaController.listFilter);
  app.get("/persona/find/:id", personaController.getById);
  app.post("/persona/create", personaController.create);
  app.put("/persona/update/:id", personaController.update);
  app.delete("/persona/remove/:id", personaController.remove);
  // app.post("/persona/login", personaController.login);
  // app.post("/persona/logout", personaController.logout);
};
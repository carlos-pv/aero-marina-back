const clienteController = require("../controllers/cliente.controller");

module.exports = (app) => {
  app.get("/cliente", clienteController.list);
  app.get("/cliente-filter", clienteController.listFilter);
  app.get("/cliente/find/:id", clienteController.getById);
  app.post("/cliente/create", clienteController.create);
  app.put("/cliente/update/:id", clienteController.update);
  app.delete("/cliente/remove/:id", clienteController.remove);
};
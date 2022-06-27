const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(cors());

require("./src/routes/amenity.routes")(app);
require("./src/routes/producto.routes")(app);
require("./src/routes/categoria.routes")(app);
require("./src/routes/habitacion.routes")(app);
require("./src/routes/persona.routes")(app);
require("./src/routes/usuario.routes")(app);
require("./src/routes/cliente.routes")(app);

app.listen(3000, () => console.log("Listen on port 3000"));

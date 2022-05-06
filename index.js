const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(cors());

require("./src/routes/amenity/amenity.routes")(app);
require("./src/routes/usuario/usuario.routes")(app);

app.listen(3000, () => console.log("Listen on port 3000"));

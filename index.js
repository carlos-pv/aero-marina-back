const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(cors());

//require("./src/routes/amenities")

app.listen(3000, () => console.log("Listen on port 3000"));
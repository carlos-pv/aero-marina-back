var DataTypes = require("sequelize").DataTypes;
var _amenities = require("./amenities");

function initModels(sequelize) {
  var amenities = _amenities(sequelize, DataTypes);


  return {
    amenities,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const AmenityModel = sequelize.define(
  "Amenity",
  {
    ame_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ame_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ame_descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "amenities",
    timestamps: false,
  }
);

module.exports = {
  AmenityModel,
};

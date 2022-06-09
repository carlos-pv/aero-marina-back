const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const FacilityModel = sequelize.define(
  "Facility",
  {
    fac_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fac_nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fac_descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fac_imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fac_precio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "facilities",
    timestamps: false,
  }
);

module.exports = {
  FacilityModel,
};

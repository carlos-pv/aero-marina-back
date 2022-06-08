const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const HabitacionModel = sequelize.define(
  "Habitacion",
  {
    hab_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    hab_nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hab_descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hab_imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hab_precio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hab_numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },    
  },
  {
    tableName: "habitaciones",
    timestamps: false,
  }
);

module.exports = {
  HabitacionModel,
};

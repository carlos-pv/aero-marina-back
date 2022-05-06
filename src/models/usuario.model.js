const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const UsuarioModel = sequelize.define(
  "Usuario",
  {
    usu_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    usu_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usu_documento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = {
  UsuarioModel,
};

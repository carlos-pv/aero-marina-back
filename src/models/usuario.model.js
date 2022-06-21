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
    usu_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usu_password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    usu_persona_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "personas_usuarios",
    timestamps: false,
  }
);

module.exports = {
  UsuarioModel,
};

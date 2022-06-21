const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();


const ClienteModel = sequelize.define(
  "Cliente",
  {
    cli_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cli_preferencias: {
      type: DataTypes.STRING,
      allowNull: true,
    },  
    cli_fecha_creacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    },  
    cli_persona_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "personas_clientes",
    timestamps: false,
  }
);

module.exports = {
  ClienteModel,
};

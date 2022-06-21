const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const PersonaModel = sequelize.define(
  "Persona",
  {
    per_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    per_nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_apellido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_documento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_nacimiento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    per_fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    },
  },
  {
    tableName: "personas",
    timestamps: false,
  }
);

module.exports = {
  PersonaModel,
};

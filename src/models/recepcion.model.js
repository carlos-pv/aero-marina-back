const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

// const CURRENT_TIMESTAMP = Date.now();

const RecepcionModel = sequelize.define(
  "Recepcion",
  {
    rec_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rec_cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rec_habitacion_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rec_fecha_entrada: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rec_fecha_salida: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rec_fecha_confirmacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rec_observacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rec_precio_inicial: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rec_adelanto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rec_precio_restante: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rec_total_pagado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rec_costo_penalidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rec_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    tableName: "recepcion",
    timestamps: false,
  }
);

module.exports = {
  RecepcionModel,
};

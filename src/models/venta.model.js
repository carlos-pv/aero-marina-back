const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const VentaModel = sequelize.define(
  "Venta",
  {
    ven_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ven_recepcion_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ven_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ven_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    },
    ven_estado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "ventas",
    timestamps: false,
  }
);

module.exports = {
  VentaModel,
};

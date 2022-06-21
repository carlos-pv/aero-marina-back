const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const DetalleVentaModel = sequelize.define(
  "DetalleVenta",
  {
    det_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    det_subtotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    det_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    det_producto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    det_venta_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "detalle_ventas",
    timestamps: false,
  }
);

module.exports = {
  DetalleVentaModel,
};

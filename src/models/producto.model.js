const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ProductoModel = sequelize.define(
  "Producto",
  {
    pro_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pro_nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pro_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pro_precio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pro_tamanho: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pro_codigo_barras: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pro_imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pro_destacados: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pro_mas_vendido: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  },
  {
    tableName: "productos",
    timestamps: false,
  }
);

module.exports = {
  ProductoModel,
};

const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CategoriaModel = sequelize.define(
  "Categoria",
  {
    cat_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "categorias",
    timestamps: false,
  }
);

module.exports = {
  CategoriaModel,
};

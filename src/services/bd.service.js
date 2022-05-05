const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("aeromarina", "postgres", "15975qwert521", {
  host: "localhost",
  port: "5434",
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

testConnection();

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;

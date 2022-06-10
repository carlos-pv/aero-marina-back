const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("d56n3cteqqf0h6", "kozencuwjquiqf", "93c94426be5df4fedd9441b25c96ece5d5af42c944b57fc8671c5eb20eff4804", {
//   host: "ec2-52-73-184-24.compute-1.amazonaws.com",
//   port: "5432",
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: true,
//     rejectUnauthorized: false
//   }
// });


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

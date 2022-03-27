const { Sequelize } = require("sequelize");

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASS, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql'
});

async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initDatabase();

module.exports = sequelize;
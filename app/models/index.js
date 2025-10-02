const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(  
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,{
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
//mysql    dialectOptions: dbConfig.dialectOptions,
    define: {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
      },   
    logging: (...msg) => console.log(msg),
});

/* user=martin ????
const sequelize = new Sequelize({  
  database: dbConfig.database,
  user: dbConfig.user,
  password: dbConfig.password,
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,   
  logging: (...msg) => console.log(msg),
});*/

/*
const sequelize = new Sequelize({
  storage: dbConfig.storage,
  dialect: dbConfig.dialect,
  define: {
    // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,
  },
  logging: (...msg) => console.log(msg),
});*/

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
};

/* puvodni kod pro MySQL
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
*/

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pnastat = require("./pnastat.model.js")(sequelize, Sequelize);

module.exports = db;

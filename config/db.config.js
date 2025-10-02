
module.exports = {
  host: 'localhost',
  user: 'root',
  password: 'ok1mfxmaf',
  database: 'energie',
  dialect: 'mysql',
};

/*module.exports = {
  host: 'db-grizzly-qas1.postgres.database.azure.com',
  user: 'read_dam',
  password: 'Rdam@1234',
  database: 'postgres',
  dialect: 'postgres',
  dialectOptions: {
    clientMinMessages: 'notice',
    port: 5432,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
};*/

/*
npm i @sequelize/postgres
--testovaci RO uzivatel pro NODE.JS
create user read_dam with password 'Rdam@1234';
GRANT USAGE ON SCHEMA public TO read_dam;
grant select on all tables in schema public to read_dam;

ALTER ROLE read_dam IN DATABASE "DAM"
    SET search_path TO "$user", public;
*/

/*// SQLite
module.exports = {
  storage: "../pna_stat",
  dialect: "sqlite",
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
};*/

/*module.exports = {
  HOST: "db-mssql-pqm-qas.database.windows.net",
  USER: "pnamonitor",
  PASSWORD: "pna@pqmstorage657",
  DB: "TEST_DB",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
*/
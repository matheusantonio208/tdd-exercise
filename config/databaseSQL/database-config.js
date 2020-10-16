require('../env-connection');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};

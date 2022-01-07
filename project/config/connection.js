const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('techblog', 'root', '1998Hlsg8sql', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;

// Local connection works
// Heroku and JAws db not connected due to "vote" table error?? - no vote table was ever written though?
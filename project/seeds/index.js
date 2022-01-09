const seedUsers = require('./user-seeds.js');
const seedPosts = require('./post-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
  await seedPosts();
 
  process.exit(0);
};

seedAll();
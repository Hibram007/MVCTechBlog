const { Post } = require('../models');

const postdata = [
  {
    title: 'Lorem ipsum dolor sit amet',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
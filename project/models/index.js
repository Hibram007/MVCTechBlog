const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  

// Original code - testing above
// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE'
// });

module.exports = { User, Post, Comment };
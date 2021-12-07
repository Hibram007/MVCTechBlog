const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class User extends Model {}

// will need to add in pass word val- review bcrypt before attempting - check m.14/project 2 code

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
  // will need to add hook for bycrpt - check async funct code form m.14
);


module.exports = User;
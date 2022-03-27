const { Sequelize, DataTypes } = require('sequelize');
const  sequelize = require('../db');

const User = sequelize.define('User_JorgeAlexisGarcia', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  secondName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastNameP: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastNameM: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: true
  }
},{
  timestamps: true,
  freezeTableName: true // Model tableName will be the same as the model name
});
User.sync({ force: true })

module.exports = User;
'use strict';
const S = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const Search = require('./Search');

class Recruiter extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Recruiter.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
    rating: {
      type: S.INTEGER,
      allowNull: true,
    },
    activeSearchs: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    admin: {
      type: S.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Recruiter',
  }
);

Recruiter.beforeCreate((recruiter) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      recruiter.salt = salt;
      return recruiter.hash(recruiter.password, salt);
    })
    .then((hash) => {
      recruiter.password = hash;
    });
});

module.exports = Recruiter;

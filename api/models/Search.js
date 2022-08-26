'use strict';
const S = require('sequelize');
const db = require('../config/db');

class Search extends S.Model {}

Search.init(
  {
    position: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    vacancies: {
      type: S.INTEGER,
      allowNull: false,
    },
    time: {
      type: S.DATEONLY,
      allowNull: true,
    },
    jobSchedules: {
      type: S.STRING,
      allowNull: false,
    },
    salary: {
      type: S.INTEGER,
      allowNull: false,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    startDate: {
      type: S.DATEONLY,
    },
    finishDate: {
      type: S.DATEONLY,
    },
    searchTime: {
      type: S.STRING,
    },
    candidates: {
      type: S.STRING,
      allowNull: true,
    },
    ratingRecruiter: {
      type: S.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Search",
  }
);

Search.beforeCreate((search) => {
  let date = new Date();
  return (search.startDate = date.toISOString().split('T')[0]);
});

module.exports = Search;

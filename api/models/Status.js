const S = require('sequelize');
const db = require('../config/db');

class Status extends S.Model {}

Status.init(
  {
    Estado: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Status',
  }
);

module.exports = Status;

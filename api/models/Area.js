"use strict";
const S = require("sequelize");
const db = require("../config/db");


class Area extends S.Model {}

Area.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Area",
  }
);

module.exports = Area;
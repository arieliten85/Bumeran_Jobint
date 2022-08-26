"use strict";
const S = require("sequelize");
const db = require("../config/db");


class Country extends S.Model {}

Country.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Country",
  }
);

module.exports = Country;

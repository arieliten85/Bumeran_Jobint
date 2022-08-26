const Recruiter = require('./Recruiter');
const Search = require('./Search');
const Status = require('./Status');
const Country = require('./Country');
const Area = require('./Area');
const { sequelize } = require('./Search');

Search.belongsTo(Recruiter);
Search.belongsTo(Status);
Search.belongsTo(Country);
Search.belongsTo(Area);
Recruiter.belongsTo(Country);
Recruiter.belongsTo(Area);

module.exports = {
  Recruiter,
  Search,
  Status,
  Country,
  Area,
};

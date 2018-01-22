const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:1234/wikistack'
//,{logging: false}
);

const Page = db.define('page', {
  title: Sequelize.STRING,
  urlTitle: {
    type: Sequelize.STRING,
    isURL: true,
  },
  content: Sequelize.STRING,
  status: Sequelize.ENUM('open', 'closed')
});

const User = db.define('user', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    isEmail: true
  }
});

module.exports = db;

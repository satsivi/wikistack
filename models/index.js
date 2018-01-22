const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:1234/wikistack'
//,{logging: false}
);

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  route: {
    type: Sequelize.STRING,
    get(){
      const URL = this.getDataValue('urlTitle');
      return '/wiki/'+URL;
    }
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  }
});

module.exports = {
  db: db,
  User: User,
  Page: Page
};

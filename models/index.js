const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',
{logging: false}
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

Page.hook('beforeValidate', function(title) {
  console.log('hello world');
  if (!this.title){
    this.urlTitle = Math.random().toString(36).substring(2, 12);
  }
  else {
    this.urlTitle = title.replace(/\s+/g, '_').replace(/\W/g, '');
  }
  console.log(this.urlTitle);
  //the equations are working and the function is running evey time we post BUT we cannot 'attach' the url title we generate to the instance of the page
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

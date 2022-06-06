//npm i express
const express = require('express');

const path = require('path');

/*const routes = require('./controllers');

//npm i sequelize
//const sequelize = require('./config/connection');
// npm install --save path
const path = require('path');
// npm i express-session connect-session-sequelize
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');



// turn on connection to db and server
// force true will always sync to server (reset) upon npm start
sequelize.sync({ force: false }).then(() => {
  
});*/

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Now listening'));
const express = require('express');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const users = require('./routes/users');
const bodyParser = require('body-parser');
const config = require('dotenv').config().parsed;
const app = express();
const port = 3333;
const url = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}:27017`;
const dbName = 'srControls';
const client = new MongoClient(url, { useUnifiedTopology: true });

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/users', users);
app.set('view engine', 'pug');

(async function connectToDb() {
  try {
    await client.connect();
    console.log('connected to db server...');
    app.locals.db = client.db(dbName); // production way to deploy db object
  } catch (err) {
    console.log(err.stack);
  }
})();

// root
app.get('/', async (req, res) => await res.render('index'));
app.listen(port, () => console.log(`Currently running on ${port}!`));
/*addUser(
  db,
  "test",
  {
    firstName: "test",
    secondName: "test test"
  },
  {
    current: "Active"
  },
  {
    discord: "test#1231231",
    vk: "testtest"
  }
);*/

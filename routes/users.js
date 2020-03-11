const express = require('express');
const objectId = require('mongodb').ObjectID;
const users = require('../models/users').users;
const router = express.Router();

router.post('/create', async (req, res) => {
  const db = req.app.locals.db;
  console.log(req.body);
  const result = await users.addUser(db, req.body);
  res.send(result + ' ');
});

router.put('/update', async (req, res) => {
  const db = req.app.locals.db;
  const result = await users.updateUser(
    db,
    req.body.searchObject,
    req.body.updateObject
  );
  res.send(result);
});

router.delete('/delete', async (req, res) => {
  const db = req.app.locals.db;
  const result = await users.deleteUser(db, req.body.searchObject);
  res.send(result);
});

router.get('/:id', async (req, res, next) => {
  try {
    //const id = new objectId(req.params.id);
    const db = req.app.locals.db;
    const id = req.params.id;
    const resultUser = await users.findUser(db, { _id: objectId(id) }); // она не будет работать, если её не эвейтить.
    res.render('user', { data: resultUser });
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res) => {
  req.app.locals.db
    .collection('users')
    .find({})
    .toArray((err, users) => {
      res.render('users', (data = users));
    });
});

module.exports = router;

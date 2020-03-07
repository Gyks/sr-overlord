const express = require('express');
const objectId = require('mongodb').ObjectID;
const user = require('../models/users').user;
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    //const id = new objectId(req.params.id);
    if (req.params.id == 'create') next();
    const db = req.app.locals.db;
    const id = req.params.id;
    const resultUser = await user.findUser(db, { _id: objectId(id) }); // она не будет работать, если её не эвейтить.
    await res.render('user', { data: resultUser });
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

router.use('/create', async (req, res) => {
  const db = req.app.locals.db;
  console.log(req.params);
  res.send('created?');
});

module.exports = router;

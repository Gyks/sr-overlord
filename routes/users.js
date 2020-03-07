const express = require('express');
const objectId = require('mongodb').ObjectID;
const user = require('../models/users').user;
const router = express.Router();


router.put('/create', async (req, res) => {
  const db = req.app.locals.db;
  console.log(req.body);
  res.send('created?');
});

router.post('/update', async (req, res) => {
  const db = req.app.locals.db;
  console.log(req.body);
  res.send('updated');
});

router.delete('/delete', async (req, res) => {
  const db = req.app.locals.db;
  console.log(req.body);
  res.send('deleted');
})

router.get('/:id', async (req, res, next) => {
  try {
    //const id = new objectId(req.params.id);
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



module.exports = router;

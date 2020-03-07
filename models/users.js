const assert = require('assert');

// CREATE USER
async function addUser(db, nickname, fullName, seasonStatus, links) {
  try {
    db = await db; // temporary thing for debug purposes
    let r = await db.collection('users').insertOne({
      nickname: nickname, // must be unique
      fullName: {
        firstName: fullName.firstName,
        secondName: fullName.secondName
      },
      seasonStatus: {
        current: seasonStatus.current,
        lastUpdated: new Date()
      },
      links: {
        discord: links.discord,
        vk: links.vk
      }
    });
    assert.equal(1, r.insertedCount);
  } catch (err) {
    console.log(err.stack);
  }
}

// GET USER
async function findUser(db, searchObject) {
  try {
    db = await db;
    let r = await db.collection('users').findOne(searchObject);
    return r;
  } catch (err) {
    console.log(err.stack);
    return 'An error has occured';
  }
}

// UPDATE USER
async function updateUser(db, searchObject, updateObject) {
  try {
    db = await db;
    let r = await db
      .collection('users')
      .findOneAndUpdate(searchObject, updateObject);
    return r;
  } catch (err) {
    console.log(err.stack);
    return 'An error has occured';
  }
}

// DELETE USER
async function deleteUser(db, searchObject) {
  try {
    db = await db;
    let r = await db.collection('users').findOneAndDelete(searchObject);
    return r;
  } catch (err) {
    console.log(err.stack);
    return 'An error has occured';
  }
}

exports.user = {
  addUser: addUser,
  findUser: findUser
};
// app.locals.db try researching this

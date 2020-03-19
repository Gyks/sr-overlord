const assert = require("assert");
const objectId = require("mongodb").ObjectID;

// CREATE USER
async function addUser(db, { nickname, fullName, seasonStatus, links }) {
  try {
    db = await db; // temporary thing for debug purposes
    let r = await db.collection("users").insertOne({
      nickname: nickname, // must be unique
      fullName: {
        firstName: fullName.firstName,
        secondName: fullName.secondName
      },
      seasonStatus: {
        strikes: [], // by default its empty
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
// RENAME TO GET AND CHANGE PARAMS NAME TO idObject
async function getUser(db, searchObject) {
  try {
    db = await db;
    let r = await db.collection("users").findOne(searchObject);
    return r;
  } catch (err) {
    console.log(err.stack);
    return "An error has occured";
  }
}

// UPDATE USER
async function updateUser(db, idObject, updateObject) {
  try {
    db = await db;
    idObject._id = objectId(idObject._id);
    let r = await db
      .collection("users")
      .findOneAndUpdate(idObject, updateObject);
    return r;
  } catch (err) {
    console.log(err.stack);
    return "An error has occured";
  }
}

// DELETE USER
async function deleteUser(db, idObject) {
  try {
    idObject._id = objectId(searchObject._id);
    let r = await db.collection("users").findOneAndDelete(searchObject);
    return r;
  } catch (err) {
    console.log(err.stack);
    return "An error has occured";
  }
}

exports.users = {
  addUser: addUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};

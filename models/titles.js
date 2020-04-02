const objectId = require("mongodb").ObjectID;

// add destructuring in future as in users model
// TODO add middleware
// Think about how to make it DRY

//CREATE -- works
async function addTitle(db, titleObject) {
  try {
    let r = await db.collection("titles").insertOne(titleObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

//UPDATE -- works (remember atomic operators)
async function updateTitle(db, idObject, updateObject) {
  try {
    idObject._id = objectId(idObject._id);
    let r = await db
      .collection("titles")
      .findOneAndUpdate(idObject, updateObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

//DELETE -- works
async function deleteTitle(db, idObject) {
  try {
    idObject._id = objectId(idObject._id);
    let r = await db.collection("titles").findOneAndDelete(idObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

//READ -- works
async function getTitle(db, idObject) {
  try {
    console.log(idObject);
    idObject = objectId(idObject);
    let r = await db.collection("titles").findOne(idObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

exports.titles = {
  addTitle: addTitle,
  getTitle: getTitle,
  updateTitle: updateTitle,
  deleteTitle: deleteTitle
};

const objectId = require("mongodb").ObjectID;
// its so bad, but let me be a begginer I beg u...

async function addEpisode(db, episodeObject) {
  try {
    let r = await db.collection("episodes").insertOne(episodeObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

async function updateEpisode(db, idObject, updateObject) {
  try {
    idObject._id = objectId(idObject._id);
    let r = await db
      .collection("episodes")
      .findOneAndUpdate(idObject, updateObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

async function deleteEpisode(db, idObject) {
  try {
    idObject._id = objectId(idObject._id);
    let r = await db.collection("episodes").findOneAndDelete(idObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

async function getEpisode(db, idObject) {
  try {
    idObject._id = objectId(idObject._id);
    let r = await db.collection("episodes").findOne(idObject);
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

async function getAllEpisodes(db) {
  try {
    let r = await db
      .collection("episodes")
      .find({})
      .toArray();
    return r;
  } catch (err) {
    console.log(err.stack);
  }
}

exports.episodes = {
  addEpisode: addEpisode,
  deleteEpisode: deleteEpisode,
  updateEpisode: updateEpisode,
  getEpisode: getEpisode,
  getAllEpisodes: getAllEpisodes
};

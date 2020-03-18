const assert = require('assert');
const objectId = require('mongodb').ObjectID;

// add destructuring in future as in users model

//CREATE
function addTitle(db, titleObject) {
	try {
		db = await db; //debug delete later
		let r = await db.collection('titles').insertOne(titleObject);
		assert.equal(1, r.insertedCount);
	} catch (err) {
		console.log(err.stack);
	}
}

//UPDATE
function updateUser(db, idObject, updateObject) {
	try {
		db = await db;
		idObject._id = objectId(idObject._id); // Check if works without convertio
		let r = await db.collection.findOneAndUpdate(idObject, updateObject);
		return r;
	} catch (err) {
		console.log(err.stack);
	}
}

//DELETE
function deleteUser(db, idObject) {
	try {
		db = await db;
		idObject
	}
}

//READ
function getTitle(db, idObject) {}

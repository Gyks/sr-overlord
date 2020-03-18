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
function updateUser(db, idObject, updateObject) {}

//DELETE
function deleteUser(db, idObject) {}

//READ
function getTitle(db, idObject) {}

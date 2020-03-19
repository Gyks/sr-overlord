const express = require("express");
const titles = require("../models/titles").titles;
const router = express.Router();

router.post("/create", async (req, res) => {
  const db = req.app.locals.db;
  const result = await titles.addTitle(db, req.body);
  res.send(result + " ");
});

router.delete("/delete", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await titles.deleteTitle(db, req.body);
    res.send(result);
  } catch (err) {
    console.log(err.stack);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await titles.getTitle(db, req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err.stack);
  }
});

router.put("/update", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await titles.updateTitle(
      db,
      req.body.idObject,
      req.body.updateObject
    );
    res.send(result);
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports = router;

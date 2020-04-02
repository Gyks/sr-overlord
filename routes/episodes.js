const express = require("express");
const episodes = require("../models/episodes").episodes;
const router = express.Router();

router.post("/create", async (req, res) => {
  const db = req.app.locals.db;
  const result = await episodes.addEpisode(db, req.body);
  res.send(result);
});

router.delete("/delete", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await episodes.deleteEpisode(db, req.body);
    res.send(result);
  } catch (err) {
    console.log(err.stack);
  }
});

router.get("/get", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await episodes.getEpisode(db, req.query);
    res.send(result);
  } catch (err) {
    console.log(err.stack);
  }
});

router.get("/all", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await episodes.getAllEpisodes(db);
    res.send(result);
  } catch (err) {
    console.log(err.stack);
  }
});

router.put("/update", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const result = await episodes.updateEpisode(
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

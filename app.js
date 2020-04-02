const express = require("express");
const assert = require("assert");
const MongoClient = require("mongodb").MongoClient;

const users = require("./routes/users");
const titles = require("./routes/titles");
const episodes = require("./routes/episodes");
const bodyParser = require("body-parser");

const config = require("dotenv").config().parsed;
const app = express();
const port = 3333;
const url = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}:27017`;
const dbName = "srControls";
const client = new MongoClient(url, { useUnifiedTopology: true });

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/users", users);
app.use("/titles", titles);
app.use("/episodes", episodes);
app.set("view engine", "pug");

(async function connectToDb() {
  try {
    await client.connect();
    app.locals.db = client.db(dbName);
    console.log("Connected to db server...");
  } catch (err) {
    console.log(err.stack);
  }
})();

// root
app.get("/", async (req, res) => await res.render("index"));
app.listen(port, () => console.log(`Currently running on ${port}...`));

const express = require('express');
const objectId = require('mongodb').ObjectID;
const users = require('../models/titles').titles;
const router = express.Router();
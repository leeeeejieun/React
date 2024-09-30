"use strict";

const express = require("express");
const router = express.Router();

const s3 = require('../utils/s3');
const postCtrl = require("../controllers/posts.ctrl");

router.post('/', s3.upload.single('image'), postCtrl.process.create)

module.exports = router;

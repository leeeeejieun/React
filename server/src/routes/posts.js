"use strict";

const express = require("express");
const router = express.Router();


const upload = require("../utils/multer");
const postCtrl = require("../controllers/posts.ctrl");

router.post('/', upload.single('postImg'), postCtrl.process.create)


module.exports = router;

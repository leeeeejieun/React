"use strict";

const express = require("express");
const router = express.Router();

const userRoute = require("./users");
const postRoute = require("./posts");

router.use('/', userRoute);
router.use('/posts', postRoute);

module.exports = router;
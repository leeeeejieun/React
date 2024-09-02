"use strict";

// 모듈
const express = require("express");
const router = express.Router();

const userCtrl = require("../../controllers/user.ctrl");

router.post("/login", userCtrl.process.login);

module.exports = router;
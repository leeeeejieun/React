"use strict";

// 모듈
const express = require("express");
const router = express.Router();

const userCtrl = require("../../controllers/user.ctrl");

router.post("/login", userCtrl.process.login);
router.post("/register", userCtrl.process.register);

module.exports = router;
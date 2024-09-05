"use strict";

const PORT = process.env.PORT || 4000;
const app = require("../app");

app.listen(PORT , ()=>{
    console.log("4000번 포트로 서버 가동 중");
});
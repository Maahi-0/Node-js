//core modules
const path = require('path');

//external modules
const express = require('express');
const userRouter = express.Router();

//local modules
const rootDir = require('../utils/path_util');

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

module.exports = userRouter;
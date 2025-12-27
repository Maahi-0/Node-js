
const express = require('express');
const path = require('path');

const hostRouter = express.Router();

const rootDir = require('../utils/path_util');

hostRouter.get("/host/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
})
hostRouter.post("/host/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});
module.exports = hostRouter;

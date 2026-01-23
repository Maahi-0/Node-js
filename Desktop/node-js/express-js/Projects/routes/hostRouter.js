
const express = require('express');
const path = require('path');

const hostRouter = express.Router();

const rootDir = require('../utils/path_util');

hostRouter.get("/host/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
})

const registeredHomes = [];
hostRouter.post("/host/add-home", (req, res, next) => {

    console.log('homw registered ', req.body.homeName)
    registeredHomes.push({ homeName: req.body.homeName })
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));

});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
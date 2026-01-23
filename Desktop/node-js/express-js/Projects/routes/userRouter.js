//core modules
const path = require('path');

//external modules
const express = require('express');
const userRouter = express.Router();

//local modules
const { registeredHomes } = require('./hostRouter')

userRouter.get("/", (req, res, next) => {
    console.log(registeredHomes); res.render("home", {
        registeredHomes: registeredHomes
    });

})

module.exports = userRouter;
//enternal modules
const express = require('express');
const path = require('path');

//local module
const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/path_util');

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')))


app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000, () => {
    console.log(`the server is started at http://localhost:3000`);
});

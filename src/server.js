'use strict';
const express = require('express');
const applyRouter = require('./router');
const { errorHandler } = require('./service/utils/errorHandler');

const server = () => {
    const app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    applyRouter(app);
    app.use(errorHandler);
    return app;
}

module.exports = server;
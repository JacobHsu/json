const express = require('express');
const cookieParser = require('cookie-parser');
// const auth = require('../middlewares/auth');
const cors = require('cors');

const originArr = ['http://localhost:3000', 'https://yellow-beach-0d1711d10.2.azurestaticapps.net', 'https://purple-stone-06939cf10.2.azurestaticapps.net']
module.exports = (app) => {
    //app.use(cors({origin: 'https://yellow-beach-0d1711d10.2.azurestaticapps.net', credentials: true}));
    app.use(cors({origin: originArr, credentials: true}));
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.use(cookieParser());
    // app.use(auth);
};
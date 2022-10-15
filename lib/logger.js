/*
 * File: logger.js
 * Project: sm-get-pp-data
 * File Created: Thursday, 25th March 2021 8:30:14 pm
 * Author: Mark Kennard (mark@snowmeister.com)
 * -----
 * Last Modified: Thursday, 25th March 2021 8:30:14 pm
 * Modified By: Mark Kennard (mark@snowmeister.com>)
 * -----
 * Copyright 2021 Mark Kennard All Rights Reserved.
 */


const bunyan = require('bunyan');
let log = bunyan.createLogger({
    name: 'snowblog',
    stream: process.stdout,
    serializers: {}
});


module.exports = log;
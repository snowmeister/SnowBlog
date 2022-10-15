/*
 * File: articles.js
 * Project: SnowBlog
 * File Created: Sunday, 21st August 2022 5:27:58 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Sunday, 21st August 2022 5:27:58 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */

/* We need logging, lets have this in place from kick off, save on pain later...*/
const log = require('./logger');





module.exports = {
  /**
  * @param req = a REQUEST OBJECT passed in from EXPRESS APP ROUTER
  */
  getArticleBySlug: (slug) => {
    log.info(`getArticleBySlug: ${slug}`);    
    return ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  }



}



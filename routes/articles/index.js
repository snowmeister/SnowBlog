/*
 * File: articles.js
 * Project: SnowBlog
 * File Created: Tuesday, 16th August 2022 3:53:35 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Tuesday, 16th August 2022 3:53:35 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.status(200).json({'status': 404, content: null});
})



// define the about route
router.get('/articles/:article', (req, res) => {
  if(req.params.article){
  //  return res.send(`Color image needed for ${req.params.color}`, 200);
   return res.status(200).json({'status': 200, content: {article: req.params.article}});
  }
 return   res.status(404).json({'status': 404, content: null});
  
});

module.exports = router
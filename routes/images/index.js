/*
 * File: pixabay.js
 * Project: SnowBlog
 * File Created: Tuesday, 16th August 2022 3:53:35 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Tuesday, 16th August 2022 3:53:35 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router
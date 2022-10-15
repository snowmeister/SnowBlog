/*
 * File: app.js
 * Project: SnowBlog
 * File Created: Monday, 8th August 2022 6:24:21 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Monday, 8th August 2022 6:24:21 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */


const express = require('express'); 
const app = express(); //Line 2
const images = require('./routes/images'); 
const port = process.env.PORT || 5000; 


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use('/images', images)



//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  console.log({'error': 404, 'request': req.params});
  res.status(404).json({content: null, status: 404, message: 'Resource not found'});
});
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

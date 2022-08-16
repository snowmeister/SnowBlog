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




app.use('/images', images)

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 
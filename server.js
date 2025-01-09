const express = require('express') //same as const express = import express
const app = express()


app.use(express.json()); //This needs to be above the other code blocks, allows JSON use
app.use(express.urlencoded({ extended: true }));// Above other code blocks, allows URL encoded data
const gameRoutes = require('./routes/game.routes')
gameRoutes(app)


//Starting Server
app.listen(8000, () => console.log('listening on port 8000'))
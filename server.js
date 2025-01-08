const express = require('express') //same as const express = import express
const app = express()


app.use(express.json()); //This needs to be above the other code blocks, allows JSON use
app.use(express.urlencoded({ extended: true }));// Above other code blocks, allows URL encoded data

//placeholder info just for routes for today. not connected to DB, this would
//normally be data coming from the database.
const games = [
    { id: 1, gameName: "Jet Force Gemini", dev: "Rare" },
    { id: 2, gameName: "SSX Tricky", dev: "EA Big" },
    { id: 3, gameName: "Halo 3", dev: "Bungie" },
    { id: 4, gameName: "Army Men: Sarge's Heroes", dev: "3DO" },
]

//Get All Call
app.get('/api/allGames', (request, response) => {
    //in bigger picture, would call DB to get games info.
    response.json(games)
})

//Get One
app.get('/api/game/:id', (request, response) => {
    // console.log(request.params);
    const id = request.params.id
    const game = games.filter((game) => game.id == id)
    response.json(game)
})

//Post Request, Create One
app.post('/api/newGame', (request, response) => {
    console.log(request.body);
    games.push(request.body) //pushes object into the games array.
    response.json({ message: 'ADDED' })
})

app.listen(8000, () => console.log('listening on port 8000'))
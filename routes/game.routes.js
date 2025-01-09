const GameController = require('../controllers/game.controller')

module.exports = (app) => {
    app.get('/api/allGames', GameController.allGames)
    app.get('/api/game/:id', GameController.getOneGame)
    app.post('/api/newGame', GameController.createGame)
}


// GameController = {
//     //key:value
//     allGames: (req, res) => {
//         //call to DB to get all games
//         res.json(games)
//     },
//     getOneGame: (req, res) => {
//         const id = req.params.id
//         const game = games.filter((game) => game.id == id)
//         res.json(game)
//     },
//     createGame: (req,res) => {
//         console.log(req.body);
//         games.push(req.body) //pushes object into the games array.
//         res.json(games)
//     }
// }
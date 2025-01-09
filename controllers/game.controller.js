const games = [
    { id: 1, gameName: "Jet Force Gemini", dev: "Rare" },
    { id: 2, gameName: "SSX Tricky", dev: "EA Big" },
    { id: 3, gameName: "Halo 3", dev: "Bungie" },
    { id: 4, gameName: "Army Men: Sarge's Heroes", dev: "3DO" },
]

module.exports = {
    //key:value
    allGames: (req, res) => {
        //call to DB to get all games
        res.json(games)
    },
    getOneGame: (req, res) => {
        const id = req.params.id
        const game = games.filter((game) => game.id == id)
        res.json(game)
    },
    createGame: (req,res) => {
        console.log(req.body);
        games.push(req.body) //pushes object into the games array.
        res.json(games)
    }
}
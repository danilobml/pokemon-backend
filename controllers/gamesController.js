const Game = require("../models/Games");

const save_game = async (req, res) => {
  const game = req.body;
  try {
    const createdGame = await Game.create(game);
    res.json(createdGame);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const get_results = async (req, res) => {
  try {
    const allGames = await Game.find({});
    res.json(allGames);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  save_game,
  get_results,
};

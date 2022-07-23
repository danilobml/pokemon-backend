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

const get_winner_count = async (req, res) => {
  try {
    const winnerCount = await Game.aggregate([{ $group: { _id: "$winner", count: { $sum: 1 } } }, { $sort: { count: -1 } }]);
    res.json(winnerCount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// db.scores.aggregate([
//   {
//     $match: {
//       winner: "Pikachu",
//     },
//   },
//   {
//     $count: "passing_scores",
//   },
// ]);
module.exports = {
  save_game,
  get_results,
  get_winner_count,
};

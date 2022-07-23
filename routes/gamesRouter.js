const express = require("express");
const gamesRouter = express.Router();
const { save_game, get_results, get_winner_count } = require("../controllers/gamesController");

gamesRouter.post("/save", save_game);

gamesRouter.get("/leaderboard", get_results);

gamesRouter.get("/leaderboard/counter", get_winner_count);

module.exports = gamesRouter;

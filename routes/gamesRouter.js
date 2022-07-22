const express = require("express");
const gamesRouter = express.Router();
const { save_game, get_results } = require("../controllers/gamesController");

gamesRouter.post("/save", save_game);

gamesRouter.get("/leaderboard", get_results);

module.exports = gamesRouter;

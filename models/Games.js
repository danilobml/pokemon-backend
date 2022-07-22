const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema(
  {
    my_pokemon: { type: String, required: true },
    enemy: { type: String, required: true },
    winner: { type: String, required: true },
    user_won: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gamesSchema);

module.exports = Game;

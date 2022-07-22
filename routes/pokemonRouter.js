const express = require("express");
const pokemonRouter = express.Router();
const { get_all_pokemon, get_one_pokemon, get_info_one_pokemon } = require("../controllers/pokemonController");

pokemonRouter.get("/", get_all_pokemon);

pokemonRouter.get("/:id", get_one_pokemon);

pokemonRouter.get("/:id/:info", get_info_one_pokemon);

module.exports = pokemonRouter;

const express = require("express");
const pokemonRouter = express.Router();
let jsonData = require("../data/pokemonData.json");

// 1.Get all pokemon:
pokemonRouter.get("/", (req, res) => {
  res.json(jsonData);
});

// 2.Get one pokemon:
pokemonRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const findSinglePokemon = jsonData.find((x) => x.id == id);
  res.json(findSinglePokemon);
});

// 3.Get info from a pokemon
pokemonRouter.get("/:id/:info", (req, res) => {
  const { id, info } = req.params;
  const findSinglePokemon = jsonData.find((x) => x.id == id);
  res.json(findSinglePokemon[info]);
});

module.exports = pokemonRouter;

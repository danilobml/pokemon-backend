let jsonData = require("../data/pokemonData.json");

const get_all_pokemon = (req, res) => {
  res.json(jsonData);
};

const get_one_pokemon = (req, res) => {
  const { id } = req.params;
  const findSinglePokemon = jsonData.find((x) => x.id == id);
  res.json(findSinglePokemon);
};

const get_info_one_pokemon = (req, res) => {
  const { id, info } = req.params;
  const findSinglePokemon = jsonData.find((x) => x.id == id);
  res.json(findSinglePokemon[info]);
};

module.exports = {
  get_all_pokemon,
  get_one_pokemon,
  get_info_one_pokemon,
};

require("dotenv").config();
require("./database/client");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("assets"));
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());

const pokemonRouter = require("./routes/pokemonRouter");
app.use("/api/pokemon", pokemonRouter);

const gamesRouter = require("./routes/gamesRouter");
app.use("/game", gamesRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

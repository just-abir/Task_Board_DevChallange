const express = require("express");
const createBoardRoutes = require("../src/Routes/createBoard.routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/board", createBoardRoutes);

module.exports = app;

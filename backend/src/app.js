const express = require("express");
const createBoardRoutes = require("../src/Routes/createBoard.routes");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://task-board-dev-challenge.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use("/api/board", createBoardRoutes);

module.exports = app;

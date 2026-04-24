const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    boardName: {
      type: String,
      default: "My Task Board",
    },
    boardDescription: {
      type: String,
      default: "Task to kepp organised",
    },
  },
  { timestamps: true },
);

const boardModel = mongoose.model("Board", boardSchema);

module.exports = boardModel;

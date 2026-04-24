const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: false,
  },
  taskIcon: {
    type: String,
    enum: ["icon1", "icon2", "icon3", "icon4"],
    default: "icon1",
  },
  taskStatus: {
    type: String,
    enum: ["In Progress", "Completed", "Won't Do"],
    default: "In Progress",
  },
});

const taskModel = mongoose.model("Tasks", taskSchema);

module.exports = taskModel;

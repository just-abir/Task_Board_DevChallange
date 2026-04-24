const boardModel = require("../models/board.model");
const taskModel = require("../models/tasks.model");

const createBoard = async (req, res) => {
  const { boardName, boardDescription } = req.body;

  const board = await boardModel.create({
    boardName,
    boardDescription,
  });

  const insertTask = await taskModel.insertMany([
    {
      boardId: board._id,
      taskName: "Task in Progress",
      taskDescription: "This task is in progress",
      taskIcon: "icon1",
      taskStatus: "In Progress",
    },
    {
      boardId: board._id,
      taskName: "Task Completed",
      taskDescription: "This task is complete",
      taskIcon: "icon2",
      taskStatus: "Completed",
    },
    {
      boardId: board._id,
      taskName: "Task Won't Do",
      taskDescription: "This task won't be done",
      taskIcon: "icon3",
      taskStatus: "Won't Do",
    },
  ]);

  res.status(201).json({
    message: "Task board Created successfully",
    board: board,
    tasks: insertTask,
  });
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;

  const updatedTask = await taskModel.findByIdAndUpdate(taskId, req.body, {
    returnDocument: "after",
    runValidators: false,
  });

  res.status(200).json({
    message: "Task updated successfully",
    updatedTask,
  });
};

const updateBoardInfo = async (req, res) => {
  const { boardId } = req.params;

  const updatedBoard = await boardModel.findByIdAndUpdate(boardId, req.body, {
    returnDocument: "after",
    runValidators: false,
  });

  res.status(200).json({
    message: "Board updated successfully",
    updatedBoard,
  });
};

const deleteBoard = async (req, res) => {
  const { boardId } = req.params;

  const deleteTask = await taskModel.deleteMany({ boardId: boardId });
  const deletedBoard = await boardModel.findByIdAndDelete(boardId);

  res.status(200).json({
    message: "Board deleted successfully",
    deletedBoard,
  });
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  const deletedTask = await taskModel.findByIdAndDelete(taskId);

  res.status(200).json({
    message: "Task deleted successfully",
    deletedTask,
  });
};

const getBoard = async (req, res) => {
  const { boardId } = req.params;

  const board = await boardModel.findById(boardId);
  const tasks = await taskModel.find({ boardId: boardId });

  res.status(200).json({
    message: "Board retrieved successfully",
    board,
    tasks,
  });
};

const addNewTask = async (req, res) => {
  const { boardId } = req.params;
  const { taskName, taskDescription, taskIcon, taskStatus } = req.body;

  const newTask = await taskModel.create({
    boardId,
    taskName,
    taskDescription,
    taskIcon,
    taskStatus,
  });

  res.status(201).json({
    message: "Successfully addNewTask ",
    newTask,
  });
};

module.exports = {
  createBoard,
  updateTask,
  updateBoardInfo,
  deleteBoard,
  deleteTask,
  getBoard,
  addNewTask,
};

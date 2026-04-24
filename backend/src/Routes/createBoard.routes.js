const express = require("express");
const boardController = require("../controller/board.controller");
const router = express.Router();

router.post("/create", boardController.createBoard);
router.get("/:boardId", boardController.getBoard);
router.put("/update/:taskId", boardController.updateTask);
router.put("/:boardId", boardController.updateBoardInfo);
router.delete("/:boardId", boardController.deleteBoard);
router.delete("/delete/:taskId", boardController.deleteTask);
router.post("/:boardId/tasks", boardController.addNewTask);

module.exports = router;

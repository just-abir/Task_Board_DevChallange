import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard,
} from "../services/board.api";

export function useBoard() {
  const navigate = useNavigate();

  // All useState from App.jsx
  const [editeBoard, setediteBoard] = useState(false);
  const [PopupShow, setPopupShow] = useState(false);
  const [boardId, setBoardId] = useState(null);
  const [boardName, setBoardName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [boardDescription, setboardDescription] = useState("");
  const [SelectTask, setSelectTask] = useState(null);

  // All functions from App.jsx
  const popupModal = () => {
    setPopupShow(true);
    setSelectTask(null);
  };

  const clkTask = (elem) => {
    setPopupShow(true);
    setSelectTask(elem);
  };

  const createNewBoard = async () => {
    const data = await createBoard();
    setBoardId(data.board._id);
    setBoardName(data.board.boardName);
    setTasks(data.tasks);
    setboardDescription(data.board.boardDescription);
    localStorage.setItem("boardId", data.board._id);
    fetchBoardById(data.board._id);
    navigate(`/board/${data.board._id}`);
  };

  const fetchBoardById = async (id) => {
    const data = await getBoardById(id);
    setBoardId(data.board._id);
    setBoardName(data.board.boardName);
    setTasks(data.tasks);
    console.log("data", data.tasks);
    setboardDescription(data.board.boardDescription);
  };

  const handleUpdateBoard = async () => {
    const data = await updateBoard(boardId, boardName, boardDescription);
    setBoardName(data.updateBoard.boardName);
    setboardDescription(data.updateBoard.boardDescription);
    setediteBoard(false);
  };

  const handleDeleteBoard = async (boardId) => {
    const response = await deleteBoard(boardId);
    if (response.ok) {
      localStorage.removeItem("boardId");
      navigate("/");
    }
  };

  // All useEffect from App.jsx
  useEffect(() => {
    const savedBoardId = localStorage.getItem("boardId");
    if (!savedBoardId) {
      createNewBoard();
    } else {
      fetchBoardById(savedBoardId);
    }
  }, []);

  // Return everything
  return {
    editeBoard,
    setediteBoard,
    PopupShow,
    setPopupShow,
    boardId,
    setBoardId,
    boardName,
    setBoardName,
    tasks,
    setTasks,
    boardDescription,
    setboardDescription,
    SelectTask,
    setSelectTask,
    popupModal,
    clkTask,
    createNewBoard,
    fetchBoardById,
    handleUpdateBoard,
    handleDeleteBoard,
  };
}

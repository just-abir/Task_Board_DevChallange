import { useState, useEffect } from "react";
import { createTask, updateTask, deleteTask } from "../services/task.api";

export function useTask(SelectTask) {
  // All useState from PopupModel.jsx
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskIcon, setTaskIcon] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [clickedButton, setClickedButton] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Constants
  const statusLabel = ["In Progress", "Completed", "Won't Do"];
  const IconsofTask = [
    { name: "icon1", emoji: "🎯" },
    { name: "icon2", emoji: "⚡" },
    { name: "icon3", emoji: "⭐" },
    { name: "icon4", emoji: "🚀" },
  ];

  // All functions from PopupModel.jsx
  const saveBtn = async (boardId) => {
    const finalStatus = taskStatus || "In Progress";
    const finalIcon = taskIcon || "icon1";

    if (SelectTask && SelectTask._id) {
      await updateTask(
        SelectTask._id,
        taskName,
        taskDescription,
        finalIcon,
        finalStatus,
      );
    } else {
      await createTask(
        boardId,
        taskName,
        taskDescription,
        finalIcon,
        finalStatus,
      );
    }
  };

  const deleteBtn = async () => {
    await deleteTask(SelectTask._id);
  };

  // All useEffect from PopupModel.jsx
  useEffect(() => {
    if (SelectTask) {
      setTaskName(SelectTask.taskName || "");
      setTaskDescription(SelectTask.taskDescription || "");
      setTaskIcon(SelectTask.taskIcon || "icon1");
      setTaskStatus(SelectTask.taskStatus || "In Progress");
    } else {
      setTaskName("New Task");
      setTaskDescription("");
      setTaskIcon("icon1");
      setTaskStatus("In Progress");
    }
  }, [SelectTask]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return everything
  return {
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
    taskIcon,
    setTaskIcon,
    taskStatus,
    setTaskStatus,
    clickedButton,
    setClickedButton,
    isMobile,
    statusLabel,
    IconsofTask,
    saveBtn,
    deleteBtn,
  };
}

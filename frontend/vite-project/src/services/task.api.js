import { apiClient } from "../api/apiClient";

export const createTask = async (
  boardId,
  taskName,
  taskDescription,
  taskIcon,
  taskStatus,
) => {
  const payLoad = {
    taskName,
    taskDescription,
    taskIcon,
    taskStatus,
  };
  return await apiClient.post(`/board/${boardId}/tasks`, payLoad);
};

export const updateTask = async (
  taskId,
  taskName,
  taskDescription,
  taskIcon,
  taskStatus,
) => {
  const payLoad = {
    taskName,
    taskDescription,
    taskIcon,
    taskStatus,
  };
  return await apiClient.put(`/board/update/${taskId}`, payLoad);
};

export const deleteTask = async (taskId) => {
  return await apiClient.deleteRequest(`/board/delete/${taskId}`);
};

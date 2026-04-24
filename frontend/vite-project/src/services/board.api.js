import { apiClient } from "../api/apiClient";

export const createBoard = async () => {
  const data = await apiClient.post("/board/create");
  return data;
};

export const getBoardById = async (id) => {
  const data = await apiClient.get(`/board/${id}`);
  return data;
};

export const updateBoard = async (boardId, boardName, boardDescription) => {
  const data = await apiClient.put(`/board/${boardId}`, {
    boardName,
    boardDescription,
  });
  return data;
};

export const deleteBoard = async (boardId) => {
  const response = await apiClient.deleteRequest(`/board/${boardId}`);
  return response;
};

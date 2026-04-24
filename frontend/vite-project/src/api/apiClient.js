const API_BASE_URL = "http://localhost:3000/api";

const handleError = (error, message) => {
  console.error(message, error);
  throw error;
};

const get = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    handleError(error, `GET ${endpoint} failed`);
  }
};

const post = async (endpoint, data = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    handleError(error, `POST ${endpoint} failed`);
  }
};

const put = async (endpoint, data = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    handleError(error, `PUT ${endpoint} failed`);
  }
};

const deleteRequest = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    handleError(error, `DELETE ${endpoint} failed`);
  }
};

export const apiClient = {
  get,
  post,
  put,
  deleteRequest,
};

import api from "../libs/apiCall";

export const getWorkers = async (pageNumber) => {
  const response = await api.get(
    `/api/v1/Workers?pageNumber=${pageNumber}&pageSize=10`
  );
  return response.data;
};

export const registerClient = async (data) => {
  await api.post("/api/v1/Workers", data);
};

export const updateWorker = async (data) => {
  await api.put("/api/v1/Workers", data);
};

export const deleteWorker = async (id) => {
  await api.delete(`/api/v1/Workers/${id}`);
};

export const getWorkerById = async (id) => {
  const response = await api.get(`/api/v1/Workers/${id}`);
  return response.data;
};

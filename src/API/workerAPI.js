import api from "../lib/apiCall";
/*
export const getWorkers = async (pageNumber) => {
  const response = await api.get(
    `/api/v1/Workers?pageNumber=${pageNumber}&pageSize=10`
  );
  return response.data;
};
*/

export const getWorkers = async (params) => {
  const response = await api.get(`/api/v1/Workers`, { params });
  return response.data;
};

export const createWorker = async (data) => {
  return await api.post("/api/v1/Workers", data);
};

export const updateWorker = async (data) => {
  return await api.put("/api/v1/Workers", data);
};

export const deleteWorker = async (id) => {
  return await api.delete(`/api/v1/Workers/${id}`);
};

export const getWorkerById = async (id) => {
  const response = await api.get(`/api/v1/Workers/${id}`);
  return response.data;
};

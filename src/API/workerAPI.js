import api from "../lib/apiCall";

export const getWorkers = async (pageNumber) => {
  const response = await api.get(
    `/api/v1/Workers?pageNumber=${pageNumber}&pageSize=10`
  );
  return response.data;
};

export const registerWorker = async (data) => {
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

// export const getWorkerByName = async (name) => await api.get(`/api/v1/Workers/${name}`);

// export const getWorkersByAvailability = async (isAvailable) =>
//   await api.get(`api/v1/Workers/IsAvailable?isAvailable=${isAvailable}`);

// export const getWorkerDetails = async (id) => await api.get(`api/v1/Workers/details/${id}`);

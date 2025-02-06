import api from "../libs/apiCall";

export const getWorkers = async () => {
  const response = await api.get(`/api/v1/WorkerSpecialties`);
  return response.data;
};

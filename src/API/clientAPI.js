import api from '../lib/apiCall';

export const getClients = async (pageNumber) => {
  const response = await api.get(
    `/api/v1/Clients?pageNumber=${pageNumber}&pageSize=10`
  );
  return response.data;
};

export const registerClient = async (data) => {
  await api.post('/api/v1/Clients', data);
};

export const updateClient = async (data) => {
  await api.put('/api/v1/Clients', data);
};

export const deleteClient = async (id) => {
  await api.delete(`/api/v1/Clients/${id}`);
};

export const getClientById = async (id) => {
  const response = await api.get(`/api/v1/Clients/${id}`);
  return response.data;
};

import api from '../lib/apiCall';

export const getClients = async (params) => {
  const response = await api.get(`/api/v1/Clients`, { params });
  return response.data;
};

export const createClient = async (data) => {
  const response = await api.post('/api/v1/Clients', data);
  return response.data;
};

export const updateClient = async (data) => {
  const response = await api.put('/api/v1/Clients', data);
  return response.data;
};

export const deleteClient = async (id) => {
  const response = await api.delete(`/api/v1/Clients/${id}`);
  return response.data;
};

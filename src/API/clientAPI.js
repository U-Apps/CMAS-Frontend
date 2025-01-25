import api from '../libs/apiCall';

export const registerClient = async (data) => {
  await api.post('/api/Clients/Register', data);
};

export const updateClient = async (data) => {
  await api.put('/api/Clients/Update', data);
};

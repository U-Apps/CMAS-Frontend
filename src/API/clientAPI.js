import api from '../libs/apiCall';

export const registerClient = async (data) => {
  await api.post('/api/Clients/Register', data);
};

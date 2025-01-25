import api from '../libs/apiCall';

export const RegisterClient = async (data) => {
  await api.post('/api/Clients/Register', data);
};

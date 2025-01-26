import api from '../libs/apiCall';

export const getClients = async (pageNumber) => {
  const response = await api.get(
    `https://jsonplaceholder.typicode.com/users?pageNumber=${pageNumber}&pageSize=3`
  );
  return response;
};

export const registerClient = async (data) => {
  await api.post('/api/v1/Clients', data);
};

export const updateClient = async (data) => {
  await api.put('/api/v1/Clients', data);
};

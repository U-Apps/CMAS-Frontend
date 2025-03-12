import api from '../lib/apiCall';

export const getAllProjects = async (params) => {
  const response = await api.get(`/api/v1/Projects`, { params });
  return response.data;
};

export const getCompletedProjects = async (params) => {
  const response = await api.get(`/api/v1/Projects/completed`, { params });
  return response.data;
};

export const getCanceledProjects = async (params) => {
  const response = await api.get(`/api/v1/Projects/canceled`, { params });
  return response.data;
};

export const getUnderImplementationProjects = async (params) => {
  const response = await api.get(`/api/v1/Projects/under-implementation`, {
    params,
  });
  return response.data;
};

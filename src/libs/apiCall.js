import axios from 'axios';

const API_URL = `http://constructionmanagementassistant.runasp.net/`;

const api = axios.create({
  baseURL: API_URL,
});

export default api;

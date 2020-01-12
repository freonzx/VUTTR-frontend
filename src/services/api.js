import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendbossabox.herokuapp.com/',
});

export default api;

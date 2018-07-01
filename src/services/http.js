import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/',
});

axiosInstance.interceptors.request.use(config => config);

export default axiosInstance;

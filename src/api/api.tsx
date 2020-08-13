import axios from 'axios';

const api = axios.create({
    baseURL: 'http://medusa.viniciuss.dev/api/1.0'
});

export default api;
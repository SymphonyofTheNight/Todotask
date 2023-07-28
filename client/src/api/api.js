import axios from 'axios'

const base_api = axios.create({ baseURL: 'http://localhost:5000/' });

export const getDatabase = () => base_api.get('/');
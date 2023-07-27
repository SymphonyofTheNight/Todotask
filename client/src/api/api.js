import axios from 'axios'

const base_api = axios.create({ baseURL: 'http://localhost:5000/' });


export const getDatabase = async () => base_api.get('/');
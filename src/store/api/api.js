import axios from 'axios'
import {API_KEY} from '../../config'

const api = axios.create({
    baseURL: "https://www.googleapis.com/blogger/v3/blogs/4498914292420755533",
});
api.interceptors.request.use((config) => ({
    ...config,
    params: {
        key: API_KEY,
        ...config.params
    }
}))

export default api;
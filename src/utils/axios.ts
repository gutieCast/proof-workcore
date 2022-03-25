import axios from 'axios';

const baseURL = 'https://workcore.net/apiv2/web/';
const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json"
    }
});

export { api }
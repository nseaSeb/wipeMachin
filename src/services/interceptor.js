import axios from 'axios';
import { useAuth2Token } from '../composables/token.service';

axios.interceptors.request.use((request) => {
    console.log('Axios interceptor', request);
    console.log('Axios interceptor', useAuth2Token().token);
    if (request.method === 'get') {
        request.baseURL = 'https://api.slsy.io';
        request.headers = {
            Authorization: `Bearer ${useAuth2Token().token}`,
        };
    }
    return request;
});

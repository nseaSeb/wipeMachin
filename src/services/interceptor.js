import axios from 'axios';
//import store from 'your/store/path/store'

axios.interceptors.request.use((request) => {
    console.log('Axios interceptor', request)
    return request;
  })
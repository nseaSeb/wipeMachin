import axios from 'axios';

export const getContacts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response);
};
export const postContacts = (data: any[]) => {
    return axios.post('https://jsonplaceholder.typicode.com/users', data).then((response) => response);
};

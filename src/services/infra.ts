import axios from 'axios';

export const getData = (url: string) => {
    return axios.get(url).then((response) => response);
};
export const postData = (data: any[], url: string) => {
    return axios.post('https://en1srqgc95v66h.x.pipedream.net/', data).then((response) => response);
};

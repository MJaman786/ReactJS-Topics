import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchData = ()=>{
    return api.get('/posts');
}

export const getDetails = (id)=>{
    return api.get(`/posts/${id}`);
}

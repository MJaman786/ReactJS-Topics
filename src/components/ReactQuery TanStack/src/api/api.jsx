import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchData = (pageNumber) => {
    return api.get(`/posts?_start=${pageNumber}&_limit=5`);
}

export const getDetails = (id) => {
    return api.get(`/posts/${id}`);
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const updatePost = (id) => {
    return api.patch(`/posts/${id}`, {title: "Title has updated"});
}

import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// fetch all data
export const getAPI = () => {
    return api.get('/posts');
}

// pagination request
export const getLimitAPI = (pageNumber) => {
    return api.get(`/posts?_start=${pageNumber}&_limit=6`);
}

// delete post
export const deleteAPI = (id) => {
    return api.delete(`/posts/${id}`)
}

// patch - `updateData` is payload data
export const patchAPI = (id, updatedData) => {
    return api.patch(`/posts/${id}`, updatedData)
}

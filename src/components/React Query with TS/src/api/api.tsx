import axios from "axios";
import type { UserData } from "../types/apiData.types";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const apiGET = ()=>{
    return api.get('/users');
}

export const apiGET_BY_ID = (id?:string)=>{
    return api.get(`/users/${id}`)
}

export const apiPUT = (id?:string, upDatedData?:UserData)=>{
    return api.put(`/users/${id}`, upDatedData)
} 

export const apiDELETE = (id:string)=>{
    return api.delete(`users/${id}`)
}
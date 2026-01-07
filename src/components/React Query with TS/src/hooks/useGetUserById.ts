import { useQuery } from "@tanstack/react-query";
import { apiGET_BY_ID } from "../api/api";
import type { UserData } from "../types/apiData.types";

const fetchUserById = async (id?:string) => {
    try {
        const response = await apiGET_BY_ID(id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default function useGetUserById(id?:string) {
    return useQuery<UserData, Error>({
        queryKey:['user'],
        queryFn:()=>fetchUserById(id)
    })
}
import { useQuery } from "@tanstack/react-query";
import { apiGET } from "../api/api"
import type { UserData } from "../types/apiData.types";

const fetchAllUsers = async () => {
    try {
        const response = await apiGET();
        return response.data    
    } catch (error) {
        console.log(error);
    }
}

export function useGetAllUsers() {
    return useQuery<UserData[], Error>({
        queryKey: ['users'],
        queryFn:fetchAllUsers
    })   
}
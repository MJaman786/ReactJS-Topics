import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiPUT } from "../api/api";
import type { UserData } from "../types/apiData.types";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

interface Props {
    id: string;
    payload: UserData;
}

const updateUserData = async ({ id, payload }: Props) => {
    try {
        const response = await apiPUT(id, payload);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export default function useUpdateUser() {
    // const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUserData,
        onSuccess: (updatedData) => {
            toast.success('UserData Has Updated', {
                duration: 3000,
                position: 'bottom-right',
            })
            // setTimeout(() => {
            //     navigate(-1);
            // }, 800);
            queryClient.setQueryData<UserData[]>(['users'], (cacheData) => (
                cacheData?.map((user) => (
                    user.id === updatedData.id ? updatedData : user
                ))
            ))
        }
    })
}
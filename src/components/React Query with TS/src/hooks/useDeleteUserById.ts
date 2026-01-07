import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDELETE } from "../api/api";
import type { UserData } from "../types/apiData.types";
import toast from "react-hot-toast";

const deleteUser = async (id: string) => {
    try {
        const response = await apiDELETE(id)
        return response.data;
    } catch (error) {
        toast.error('User Failed to Delete', {
            duration: 3000,
            position: 'bottom-right',
        })
    }
}

export default function useDeleteUserById() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUser,
        onSuccess: (_data, id) => {

            toast.success('User Has Deleted', {
                duration: 3000,
                position: 'bottom-right',
            })

            queryClient.setQueryData<UserData[]>(['users'], (cacheData) =>
                cacheData?.filter((user) =>
                    user.id !== id
                )
            )
        }
    })
}
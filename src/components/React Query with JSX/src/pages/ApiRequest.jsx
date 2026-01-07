import { useEffect, useState } from "react";
import { deleteAPI, getAPI, getLimitAPI, patchAPI } from "../api/api";
import Card from "../components/Card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import UpdateForm from "../components/UpdateForm";

export default function ApiRequest() {

    // pagination
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    },[pageNumber])
    // form
    const [isOpen, setState] = useState(false);

    const fetchData = async () => {
        try {
            const response = await getLimitAPI(pageNumber);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: ['Posts', pageNumber],
        queryFn: () => fetchData(pageNumber)
    })

    const deleteFun = async (id) => {
        try {
            const response = await deleteAPI(id);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    const queryClient = useQueryClient()

    const deleteMutation = useMutation({
        mutationFn: (id) => deleteFun(id),
        onSuccess: (data, id) => {
            console.log(data, id);
            queryClient.setQueryData(['Posts', pageNumber], (cacheData) => {
                return cacheData.filter((post) => post.id !== id)
            })
        }
    })

    const [selectedPost, setPostData] = useState(null);

    const editFunc = (item) => {
        setPostData(item);
        setState(true)
        // console.log(selectedPost.title, selectedPost.body);
    }

    const cancelEdit = () => {
        setState(false);
        setPostData(null);
    }


    // update code

    const updateFun = async (updatedPost) => {
        const { id, title, body } = updatedPost;
        const response = await patchAPI(id, { title, body });
        return response.data;
    };

    const updateMutation = useMutation({
        mutationFn: updateFun,
        onSuccess: (updatedPost) => {
            queryClient.setQueryData(['Posts', pageNumber], (cacheData) =>
                cacheData.map((post) =>
                    post.id === updatedPost.id ? { ...post, ...updatedPost } : post
                )
            );
        }
    });


    const handelUpdateData = (updatedPost) => {
        updateMutation.mutate(updatedPost);
    };

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <>
            {
                (isOpen) ? (
                    <div className="fixed z-2 w-full h-full bg-gray-800 p-4 sm:p-8 overflow-scroll">
                        <UpdateForm
                            postId={selectedPost.id}
                            initialTitle={selectedPost.title}
                            initialBody={selectedPost.body}
                            cancelEdit={cancelEdit}
                            onUpdate={handelUpdateData}
                        />
                    </div>
                ) : (

                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-4">
                            {
                                (data) ? (
                                    data.map((item) =>
                                        <Card
                                            key={item.id}
                                            userId={item.userId}
                                            id={item.id}
                                            title={item.title}
                                            body={item.body}
                                            deleteFunc={() => confirm('Are you shure you wnat to delete ?') && deleteMutation.mutate(item.id)}
                                            editFun={() => editFunc(item)}
                                        />
                                    )
                                ) : (
                                    // <LoadingSpinner />
                                    null
                                )
                            }
                        </div>
                        {/* pagination */}
                        <nav className="flex justify-center my-10">
                            <div className="inline-flex items-center rounded-lg border border-gray-700 bg-gray-900 shadow-md">

                                {/* Previous */}
                                <button
                                    disabled={pageNumber == 1}
                                    onClick={() => setPageNumber((prev) => prev - 5)}
                                    className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-l-lg transition border-gray-600 border-r disabled:cursor-not-allowed">
                                    &lt;
                                </button>

                                {/* Page Numbers */}
                                <button className="px-4 py-2 text-gray-300 bg-violet-800 hover:bg-violet-900 transition">
                                    {Math.floor(pageNumber / 6 + 1)}
                                </button>

                                <button className="px-4 py-2 text-gray-300 hover:bg-gray-800 transition">
                                    of
                                </button>

                                <button className="px-4 py-2 text-gray-300 hover:bg-gray-800 transition">
                                    17
                                </button>

                                {/* Next */}
                                <button
                                    disabled={Math.floor(pageNumber / 6 + 1) == 16}
                                    onClick={() => setPageNumber((prev) => prev + 5)}
                                    className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-r-lg transition border-gray-600 border-l disabled:cursor-not-allowed">
                                    &gt;
                                </button>
                            </div>
                        </nav>
                    </>
                )
            }


        </>
    )
}
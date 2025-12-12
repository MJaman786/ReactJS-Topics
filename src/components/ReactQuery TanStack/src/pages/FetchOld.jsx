// FetchOld.jsx (Simplified Logic)

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "../components/Card";
import { deletePost, fetchData, updatePost } from "../api/api"; // Assuming this function exists
import SkeletonCard from "./SkeletonCard";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function FetchOld() {

    // state for pagenation
    const [pageNumber, setPageNumber] = useState(1)

    // --- 1. Data Fetching Logic (Same as before) ---
    const getPostData = async () => {
        try {
            const response = await fetchData(pageNumber);
            if (response.status !== 200) {
                // Return an error flag or throw if needed for proper error handling
                console.log('SERVER ERROR');
                return null;
            }
            // Successfully fetched data
            return response.data
        } catch (error) {
            console.log(error);
            return null; // Return null on network error
        }
    }

    // --- 2. Use React Query to manage fetch state ---
    const { data, isLoading, isError } = useQuery({ // Added isError for completeness
        queryKey: ['posts_ID', pageNumber],
        queryFn: getPostData,
        // staleTime: 10000,
        // refetchInterval: 1000
    })

    const queryClient = useQueryClient();

    const deletePostData = async (id) => {
        try {
            const response = await deletePost(id);
            if (response.status !== 200) {
                console.log("SERVER ERROR");
                return [];
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const deleteMutation = useMutation({
        mutationFn: (id) => deletePostData(id),
        onSuccess: (data, id) => {
            console.log(data, id);
            queryClient.setQueryData(['posts_ID', pageNumber], (cacheData) => {
                return cacheData.filter((post) => (
                    post.id !== id
                ))
            })
        }
    })

    const updatePostData = async (id) => {
        try {
            const response = await updatePost(id);
            if (response.status !== 200) {
                console.log("SERVER ERROR");
                return [];
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const updateMutation = useMutation({
        mutationFn: (id) => updatePostData(id),
        onSuccess: (apiData, id) => {
            queryClient.setQueryData(['posts_ID', pageNumber], (cacheData) => {
                return cacheData.map((post) => (
                    (post.id === id) ? { ...post, title: apiData.title } : post
                ))
            })
        }
    })

    // --- 3. Simplified Conditional Rendering (The Easy Logic) ---

    // Define how many skeleton cards to show
    const skeletonCount = 6;

    // What content should we display in the grid?
    let displayContent;

    if (isLoading) {
        // If data is loading, show skeletons
        displayContent = Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonCard key={index} />
        ));
    } else if (isError) {
        // If an error occurred during fetching
        displayContent = <p className="col-span-full text-center text-red-500 p-8 text-lg">Error: Could not load posts.</p>;
    } else if (data && data.length > 0) {
        // If data is successfully loaded and not empty, show the cards
        displayContent = data.map((item) => (
            // <NavLink key={item.id} to={`/posts/${item.id}`}>

            // </NavLink>
            <Card
                key={item.id}
                userId={item.userId}
                id={item.id}
                title={item.title}
                body={item.body}
                btnName='View Post'
                btnNav={`/posts/${item.id}`}
                deleteFunc={() => deleteMutation.mutate(item.id)}
                updateFunc={() => updateMutation.mutate(item.id)}
            />
        ));
    } else {
        // If the fetch was successful but the data array is empty
        displayContent = <p className="col-span-full text-center text-gray-400 p-8 text-lg">No posts available.</p>;
    }


    // --- 4. Final Render ---
    return (
        <div className="bg-[#242424] min-h-screen py-8 px-2">
            <h1 className="text-3xl font-bold text-white mb-8 max-w-7xl mx-auto px-4">Latest Posts: </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* The result of the simple 'if/else' block is rendered here */}
                {displayContent}

                {/* code for previous and next Button and also the page number*/}
                {/* Pagination Controls Section */}
                <div className="col-span-full mt-12 flex items-center justify-between border-t border-gray-700 pt-4 px-4 sm:px-0">

                    {/* Previous Button */}
                    <button
                        onClick={() => setPageNumber(pageNumber - 6)}
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={pageNumber === 1}
                    >
                        {/* Icon Placeholder for Chevron Left */}
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                    </button>

                    {/* Page Number Indicator / Central Controls */}
                    <div className="hidden sm:flex space-x-1 text-sm font-medium">
                        {/* Current Page */}
                        <span
                            className="px-3 py-1.5 rounded-md bg-indigo-600 text-white shadow-sm"
                        >
                            {Math.floor(pageNumber / 6 + 1)}
                        </span>

                        {/* Total Page Indicator */}
                        <span className="px-3 py-1.5 text-gray-400">of <span className="px-2">17</span></span>

                        {/* Example Inactive Page Link (if you want clickable numbers) */}
                        {/* <a href="#" className="px-3 py-1.5 rounded-md text-gray-400 hover:bg-gray-700 transition duration-150">2</a> */}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => setPageNumber(pageNumber + 6)}
                        type="button"
                        className="inline-flex items-center rounded-md border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={Math.floor(pageNumber / 6) === 16}
                    >
                        Next
                        {/* Icon Placeholder for Chevron Right */}
                        <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
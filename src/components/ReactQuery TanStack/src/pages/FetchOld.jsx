// FetchOld.jsx (Simplified Logic)

import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { fetchData } from "../api/api"; // Assuming this function exists
import SkeletonCard from "./SkeletonCard";
import { NavLink } from "react-router-dom";

export default function FetchOld() {

    // --- 1. Data Fetching Logic (Same as before) ---
    const getPostData = async () => {
        try {
            const response = await fetchData();
            if (response.status !== 200) {
                // Return an error flag or throw if needed for proper error handling
                console.log('SERVER ERROR');
                return null;
            }
            // Successfully fetched data
            return response.data.slice(0, 99)
        } catch (error) {
            console.log(error);
            return null; // Return null on network error
        }
    }

    // --- 2. Use React Query to manage fetch state ---
    const { data, isLoading, isError } = useQuery({ // Added isError for completeness
        queryKey: ['posts_ID'],
        queryFn: getPostData,
        staleTime: 10000
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
            <NavLink key={item.id} to={`/posts/${item.id}`}>
                <Card
                    userId={item.userId}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    btnName = 'View Post'
                    btnNav = '/'
                />
            </NavLink>
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
            </div>
        </div>
    )
}
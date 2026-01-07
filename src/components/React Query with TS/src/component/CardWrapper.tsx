import React, { useState } from 'react';
import UserCard from './Cards'; // Assuming the card is in this file
import { Search, Users } from 'lucide-react';
import type { UserData } from '../types/apiData.types';
import SkeletonLoader from './Loader';
import ErrorPage from './ErrorMessage';
import { useGetAllUsers } from '../hooks/useGetAllUsers';
// import { NavLink } from 'react-router-dom';
import useDeleteUserById from '../hooks/useDeleteUserById';

const UserSection: React.FC = () => {

    const { data, isLoading, error } = useGetAllUsers()

    // search functionality
    const [searchData, setSearch] = useState<string>('');

    const filteredArray = data?.filter((data) =>
        data.name.toLowerCase().includes(searchData.toLowerCase())
    )
    
    const deleteUserMutation = useDeleteUserById();

    const handleDelete = (id: string) => {
        deleteUserMutation.mutate(id);
    };

    if (error) {
        const message = error.message
        return <ErrorPage error={message} />
    }

    if (isLoading) {
        return <SkeletonLoader />
    }


    return (
        <>
            <section className="py-20 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-10 flex justify-center">
                        <div className="relative w-full sm:w-80">
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchData}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 pr-10 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
                                <Search size={20}/>
                            </span>
                        </div>
                    </div>

                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="flex items-center gap-2 text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-2">
                                <Users size={18} />
                                <span>Community</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Our Active Users
                            </h2>
                        </div>

                        <button className="hidden sm:block text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                            View all members →
                        </button>
                    </div>

                    {/* The Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {
                            (!searchData) ? (
                                data?.map((user: UserData) => (
                                    // <NavLink key={user.id} className="w-full max-w-md block" to={`/api-request/${user.id}`}>

                                    // </NavLink>
                                    <UserCard
                                        key={user.id}
                                        user={user}
                                        onDelete={handleDelete}
                                    />
                                ))
                            ) : (
                                filteredArray?.map((user: UserData) => (
                                    <UserCard key={user.id} user={user} onDelete={handleDelete}/>
                                ))
                            )
                        }
                    </div>

                    {/* Mobile-only CTA */}
                    <button className="w-full mt-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl text-sm font-medium sm:hidden">
                        View All Members
                    </button>
                </div>
            </section>
        </>
    );
};

export default UserSection;
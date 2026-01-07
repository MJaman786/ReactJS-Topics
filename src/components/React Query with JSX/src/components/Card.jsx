import React from 'react';

const Card = ({ userId, id, title, body, deleteFunc, editFun }) => {

    return (
        <div className="max-w-xl mx-auto my-8 bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transition duration-300 hover:shadow-indigo-500/50">
            <div className="p-6">
                {/* Header and IDs */}
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-gray-800 px-3 py-1 rounded-full">
                        User ID: {userId}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                        Post ID: <span className="text-gray-400">{id}</span>
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </h2>

                {/* Body Snippet */}
                <p className="text-gray-400 mb-6 text-sm line-clamp-3">
                    {body}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4 border-t border-gray-700 pt-4">
                    {/* View Post Button (Primary) */}
                    <button
                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition duration-150"
                    // onClick={() => handleView(id)} // Logic removed as requested
                    >
                        View Post
                    </button>

                    {/* Edit Button (Secondary) */}
                    <button
                        className="flex-1 px-4 py-2 text-sm font-medium text-indigo-400 border border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition duration-150"
                        onClick={editFun} // Logic removed as requested
                    >
                        Edit
                    </button>

                    {/* Delete Button (Danger) */}
                    <button
                        className="flex-1 px-4 py-2 text-sm font-medium text-red-400 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-gray-900 transition duration-150"
                        onClick={deleteFunc} // Logic removed as requested
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
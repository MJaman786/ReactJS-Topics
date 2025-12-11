export default function Card({ userId, id, title, body }) {
    return (
        <>
            <div className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700">
                {/* Card Header / Metadata */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        {/* User Icon Placeholder */}
                        <svg className="h-4 w-4 text-indigo-400">...</svg>
                        <span>User ID: {userId}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        {/* Post ID Icon Placeholder */}
                        <svg className="h-4 w-4 text-green-400">...</svg>
                        <span>Post ID: {id}</span>
                    </div>
                </div>

                {/* Card Body / Content */}
                <div className="p-6">

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white leading-snug hover:text-indigo-400 transition-colors duration-200 cursor-pointer">
                        {title}
                    </h3>

                    {/* Body Text (Truncated placeholder) */}
                    <p className="mt-3 text-gray-400 text-base line-clamp-3">
                        {body}
                    </p>

                    {/* Action Button */}
                    <button
                        className="mt-5 inline-flex items-center text-indigo-400 font-semibold text-sm hover:text-indigo-300 transition-colors"
                    >
                        {/* Read Full Post Icon Placeholder */}
                        <svg className="h-4 w-4 mr-1">...</svg>
                        Read Full Post
                    </button>
                </div>
            </div>
        </>
    )
}
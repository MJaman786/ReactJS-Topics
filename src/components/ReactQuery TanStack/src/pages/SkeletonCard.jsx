// SkeletonCard.jsx

import React from 'react';

const SkeletonCard = () => {
  return (
    // Outer container matches the Card component's styling
    <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 animate-pulse">
      
      {/* Card Header / Metadata Skeleton */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900">
        <div className="flex items-center space-x-2">
          {/* Icon Placeholder */}
          <div className="h-4 w-4 rounded-full bg-gray-700"></div>
          {/* User ID Placeholder */}
          <div className="h-4 w-16 rounded bg-gray-700"></div>
        </div>
        <div className="flex items-center space-x-2">
          {/* Icon Placeholder */}
          <div className="h-4 w-4 rounded-full bg-gray-700"></div>
          {/* Post ID Placeholder */}
          <div className="h-4 w-12 rounded bg-gray-700"></div>
        </div>
      </div>

      {/* Card Body / Content Skeleton */}
      <div className="p-6">
        
        {/* Title Placeholder (Longer line) */}
        <div className="h-6 w-11/12 rounded bg-gray-700 leading-snug"></div>
        <div className="h-6 w-8/12 mt-2 rounded bg-gray-700"></div>
        
        {/* Body Text Placeholder (Multiple lines) */}
        <div className="mt-5 space-y-2">
          <div className="h-4 w-full rounded bg-gray-700"></div>
          <div className="h-4 w-11/12 rounded bg-gray-700"></div>
          <div className="h-4 w-10/12 rounded bg-gray-700"></div>
        </div>

        {/* Action Button Placeholder */}
        <div className="mt-5 h-5 w-32 rounded bg-gray-700"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
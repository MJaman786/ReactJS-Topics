import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 overflow-hidden">


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4. User Card Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 shadow-xl"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-zinc-800 animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse" />
                  <div className="w-20 h-3 bg-zinc-800/60 rounded animate-pulse" />
                </div>
              </div>

              {/* Contact Details placeholder */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-zinc-800 rounded animate-pulse" />
                  <div className="w-3/4 h-3 bg-zinc-800/70 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-zinc-800 rounded animate-pulse" />
                  <div className="w-1/2 h-3 bg-zinc-800/70 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-zinc-800 rounded animate-pulse" />
                  <div className="w-2/3 h-3 bg-zinc-800/70 rounded animate-pulse" />
                </div>
              </div>

              {/* Company Section placeholder */}
              <div className="pt-6 border-t border-zinc-800/50 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-zinc-800 rounded animate-pulse" />
                  <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse" />
                </div>
                <div className="w-full h-2 bg-zinc-800/40 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SkeletonLoader;
import React from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';

interface ErrorPageProps {
  error: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }: ErrorPageProps) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        {/* Icon with Ring Animation */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
          <div className="relative bg-zinc-900 border border-red-500/50 p-5 rounded-full inline-flex items-center justify-center">
            <AlertCircle size={40} className="text-red-500" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
          Oops! Something went wrong
        </h1>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-8">
          <p className="text-sm font-mono text-red-400">
            Error: {error || "An unexpected system error occurred."}
          </p>
        </div>

        <p className="text-zinc-400 mb-10 leading-relaxed">
          The request could not be completed. This might be due to a connection issue or a temporary server problem.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all"
          >
            <Home size={18} />
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
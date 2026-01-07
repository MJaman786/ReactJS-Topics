import React from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-8">
              Build your idea <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500">
                in record time.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed">
              Beautifully designed, accessible, and high-performance components 
              ready to be dropped into your next React project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
                Start Building <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl font-bold transition-all">
                Documentation
              </button>
            </div>
          </div>
        </section>

        {/* QUICK FEATURES SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
              <Zap className="text-indigo-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Fast Deployment</h3>
              <p className="text-zinc-500 text-sm">Optimized for speed and minimal bundle size.</p>
            </div>
            <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
              <Shield className="text-indigo-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Secure Code</h3>
              <p className="text-zinc-500 text-sm">Written with security and best practices in mind.</p>
            </div>
            <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
              <Globe className="text-indigo-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Global Scale</h3>
              <p className="text-zinc-500 text-sm">Fully accessible and supports i18n out of the box.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
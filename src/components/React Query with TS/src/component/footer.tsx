import React from 'react';
import { Cpu, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu size={24} className="text-indigo-500" />
              <span className="text-xl font-bold text-white uppercase tracking-tighter">Core.UI</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The next-gen UI kit for high-performance React applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Components</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Social</h4>
            <div className="flex gap-4 text-zinc-400">
              <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
              <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-500" 
              />
              <button className="bg-indigo-600 px-3 py-2 rounded-lg text-white hover:bg-indigo-500 transition-colors">
                <ArrowRight size={16}/>
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center border-t border-zinc-900 pt-8 text-zinc-600 text-[11px] uppercase tracking-widest">
          © {currentYear} CORE UI TECHNOLOGIES. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
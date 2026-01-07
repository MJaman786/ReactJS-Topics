import React from 'react';
import { Cpu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', link: '/' },
  { name: 'Api Request', link: '/api-request' },
]

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-indigo-600 p-1.5 rounded-lg transition-transform group-hover:rotate-12">
              <Cpu size={22} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              Core<span className="text-indigo-500">.</span>UI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="w-full hidden md:flex items-center justify-center gap-8">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
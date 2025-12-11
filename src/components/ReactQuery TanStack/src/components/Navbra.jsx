import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for SPA navigation
import { LayoutDashboard, Menu, PersonStandingIcon, X } from 'lucide-react'; // Icons for mobile menu

// --- Navigation Data ---
const navigation = [
  { name: 'Home', to: '/' },
  { name: 'FETCHOLD', to: '/fetchold' },
  { name: 'FETCHRQ', to: '/fetchrq' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Desktop Menu - Left Side (Logo) */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white flex items-center justify-center gap-3"><PersonStandingIcon/> Aman Mujawar</span>
            </div>
          </div>
          
          {/* Desktop Menu - Center (Links) */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">    
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  // NavLink render prop handles the active state check
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'bg-gray-900 text-white shadow-inner' // Active styles
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white', // Inactive styles
                      'rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button - Right Side */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Content (Collapsible) */}
      <div className={classNames(isOpen ? 'block' : 'hidden', 'sm:hidden')} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)} // Close menu on mobile link click
              className={({ isActive }) =>
                classNames(
                  isActive ? 
                  'bg-gray-900 text-white' : 
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium transition duration-150 ease-in-out'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
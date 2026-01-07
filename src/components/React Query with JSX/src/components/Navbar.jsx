import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-xl p-3
            grid grid-cols-1 md:grid-cols-3 items-center
        ">
            
            {/* logo */}
            <div className="text-2xl font-bold text-center md:text-start text-indigo-400 p-3 md:p-0">
                Aman Mujawar
            </div>
            {/* Desktop Links */}
            <div className="flex items-center justify-center gap-8">
                <NavLink to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                    HOME
                </NavLink>
                <NavLink to="/apiData" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                    API REQUEST
                </NavLink>
                <NavLink to="/moreData" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                    MoRE
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
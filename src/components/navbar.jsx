import { NavLink } from 'react-router-dom';

function Navbar() {
  const navClass = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 ${
      isActive
        ? "text-blue-500 after:w-full"
        : "text-gray-300 after:w-0 hover:text-blue-400 hover:after:w-full"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300`;

  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-6 py-6 bg-black/10 backdrop-blur-md z-50">
      
      {/* Logo */}
      <div className="text-xl font-bold text-blue-500">
        Keng Puthearith
      </div>

      {/* Nav Links */}
      <div className="flex gap-6">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </div>

    </div>
  );
}

export default Navbar;
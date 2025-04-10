// components/Navbar.js
import { Link } from 'react-router-dom';

export default function FloatingNavbar() {
  return (
    <nav className="p-4 bg-black text-white">
      <div className="container mx-auto flex items-center justify-evenly">
        <div className="text-xl font-bold">github.com/khanmcodes</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
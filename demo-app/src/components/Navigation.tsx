import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";

const Navigation: React.FC = () => {
  const setCurrentPage = useStore((state) => state.setCurrentPage);

  return (
    <nav className="bg-gray-100 p-4 w-64">
      <Link to="/" className="block mb-2" onClick={() => setCurrentPage('Home')}>
        Home
      </Link>
      <Link to="/about" className="block mb-2" onClick={() => setCurrentPage('About')}>
        About
      </Link>
      <Link to="/services" className="block mb-2" onClick={() => setCurrentPage('Services')}>
        Services
      </Link>
      <Link to="/contact" className="block mb-2" onClick={() => setCurrentPage('Contact')}>
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">HG.</Link>
        <div className="space-x-4">
          <Link to="/about" className="hover:text-yellow-200">About</Link>
          <Link to="/projects" className="hover:text-yellow-200">Projects</Link>
          <Link to="/skills" className="hover:text-yellow-200">Skills</Link>
          <Link to="/contact" className="hover:text-yellow-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl">Welcome to my website</h2>
      <p>This is the home page content</p>
      <Link to="/contact" className="text-blue-500 hover:underline">
        Contact Us
      </Link>
    </div>
  );
};

export default Home;

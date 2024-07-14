import React from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl">Contact Us</h2>
      <p>Feel free to reach out to us!</p>
      <Link to="/contact/form" className="text-blue-500 hover:underline">
        Fill out the contact form
      </Link>
    </div>
  );
};

export default Contact;

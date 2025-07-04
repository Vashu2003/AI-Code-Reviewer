import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bot } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItemClass = (path) =>
    `px-4 py-2 rounded-md font-medium transition ${
      location.pathname === path
        ? "bg-green-600 text-white"
        : "text-white hover:bg-green-700"
    }`;

  return (
    <nav className="bg-black shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="flex items-center space-x-2">
          <Bot className="w-7 h-7 text-green-500" />
          <h1 className="text-xl font-bold text-green-500">DevAudit</h1>
        </span>
        <div className="flex space-x-4">
          <Link to="/submit" className={navItemClass("/submit")}>
            Submit Code
          </Link>
          <Link to="/add-sample" className={navItemClass("/add-sample")}>
            Add Sample
          </Link>
          <Link to="/sample-questions" className={navItemClass("/sample-questions")}>
            Sample List
          </Link>
          <Link to="/history-submissions" className={navItemClass("/history-submissions")}>
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

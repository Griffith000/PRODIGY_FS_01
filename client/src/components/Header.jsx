import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-600 text-white text-xl p-4">
      <div className="flex justify-between items-center p-3 maw-w-5xl mx-auto">
        <Link to="/">
          <div className="font-bold">Auth App</div>
        </Link>
        <ul className="flex gap-5 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/SignIn">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

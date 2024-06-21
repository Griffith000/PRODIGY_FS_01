import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = () => {
  const currentUser  = useSelector((state) => state.user)
  console.log(currentUser)
  return (
    <div className="bg-slate-600 text-white text-xl p-4 shadow-lg ">
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
          <Link to="/Profile">
          {currentUser.user && currentUser.user.profilePicture? 
          <img className="w-9 h-9 object-cover rounded-3xl shadow-lg" src={currentUser.user.profilePicture}  alt="error"/>
          : 
            <li>Sign in</li>
          }
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

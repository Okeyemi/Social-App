import React from 'react'
import { Link } from "react-router-dom";
import { auth } from '../confiq/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

  return (
    <div className= "navbar">
      <div className='links'>
        <Link to="/"> Home</Link>
        {!user ? (
        <Link to={"/login"}> Login</Link>
        ) : (
        <Link to={"/createpost"}> Create Post </Link>
        )}
        </div>
        <div className="user">
          {user && (
            <>
        <p> {user?.displayName}</p>
        <img src= {user?.photoURL || ""} width="20" height="20"  alt="" /> 
        <button>Log out</button>
        </>
          )}
        </div>
    </div>
  );
};
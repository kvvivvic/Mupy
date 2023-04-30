import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex max-w-screen-2xl mx-auto justify-start items-center px-4 md:px-0  ">
      <Link to="/">
        <h1 className="text-2xl pr-8 py-2 w-[10%] text-blue-800">MU:PY</h1>
      </Link>
      <nav className="flex gap-1 w-[80%] peer peer-hover:text-blue-800">
        <Link to="/suggest">음악추천</Link>
        <Link to="/artist">아티스트추천</Link>
        <Link to="/free">자유게시판</Link>
      </nav>
      <div className="w-[10%] flex justify-end hover:text-blue-800">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;

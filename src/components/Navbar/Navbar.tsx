import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h1>MU:PY</h1>
      </Link>
      <nav>
        <Link to="/suggest">음악추천</Link>
        <Link to="/artist">아티스트추천</Link>
        <Link to="/free">자유게시판</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;

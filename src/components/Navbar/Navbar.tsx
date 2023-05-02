import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../api/firebase";

const Navbar = () => {
  const userInfo = useContext(AuthContext);

  return (
    <header className="flex max-w-screen-2xl mx-auto justify-start items-center px-4 xl:px-0">
      <Link to="/">
        <h1 className="text-2xl pr-8 py-2 w-[100%] text-blue-800">MU:PY</h1>
      </Link>
      <nav className="hidden md:flex gap-1 w-[60%]">
        <Link className="hover:text-blue-800" to="/suggest">
          음악추천
        </Link>
        <Link className="hover:text-blue-800" to="/artist">
          아티스트추천
        </Link>
        <Link className="hover:text-blue-800" to="/free">
          자유게시판
        </Link>
      </nav>
      <div className="w-[100%] flex justify-end">
        {userInfo ? (
          <div
            className="flex justify-end
           w-full"
          >
            <span className="hidden md:block">{userInfo.displayName}님, 환영합니다.</span>
            <button className="pl-2 hover:text-blue-800" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="hover:text-blue-800" to="/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;

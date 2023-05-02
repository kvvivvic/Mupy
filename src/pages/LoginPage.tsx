import React, { useContext, useEffect } from "react";
import LoginInput from "../components/Login/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <div className="w-full h-screen mx-auto flex justify-center items-center flex-col">
      <LoginInput />

      <div className="mt-2  w-72 flex text-sm font-bold text-gray-700">
        <p className=" font-normal mr-1">계정이 없으신가요?</p>
        <Link to="/signin">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

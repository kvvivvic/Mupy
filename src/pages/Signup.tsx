import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button/Button";
import { signup } from "../api/firebase";
import { toast } from "react-hot-toast";
import { INPUT_CSS } from "../components/Login/LoginInput";
import { LABEL_CSS } from "../components/Login/LoginInput";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <form className=" w-72 mx-auto h-screen  flex flex-col justify-center">
      <h2 className=" text-center my-12 text-2xl font-bold text-gray-800 pb-2 border border-t-0 border-x-0  border-b-gray-600">회원가입</h2>
      <div className="relative">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          id="name"
          name="name"
          className={`${INPUT_CSS}`}
          required
        />
        <label htmlFor="name" className={`${LABEL_CSS}`}>
          이름
        </label>
      </div>
      <div className="relative">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
          id="email"
          name="email"
          className={`${INPUT_CSS}`}
          required
        />
        <label htmlFor="email" className={`${LABEL_CSS}`}>
          이메일
        </label>
      </div>
      <div className="relative">
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          id="pw"
          name="pw"
          className={`${INPUT_CSS}`}
          required
        />
        <label htmlFor="pw" className={`${LABEL_CSS}`}>
          비밀번호
        </label>
      </div>
      <div className="relative">
        <input
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
          value={rePassword}
          type="password"
          id="re_pw"
          name="re_pw"
          className={`${INPUT_CSS}`}
          required
        />
        <label htmlFor="re_pw" className={`${LABEL_CSS}`}>
          비밀번호 확인
        </label>
      </div>
      <Button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (password !== rePassword) {
            e.preventDefault();
            toast.error("입력하신 비밀번호가 다릅니다.");
          } else {
            e.preventDefault();
            signup(name, email, password);
            setName("");
            setEmail("");
            setPassword("");
            setRePassword("");
          }
        }}
        label="회원가입"
        textStyle="text-white"
        bgStyle="bg-blue-600"
      />
    </form>
  );
};

export default SignIn;

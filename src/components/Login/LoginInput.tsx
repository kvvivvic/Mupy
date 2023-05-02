import React, { useState } from "react";
import Button from "../Button/Button";
import { FcGoogle } from "react-icons/fc";
import { EmailLogin, googleLogin } from "../../api/firebase";

export const INPUT_CSS = `border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-1 peer transition
         `;
export const LABEL_CSS = `text-md absolute font-gray-600 transition ease-in-out left-3 top-4
         peer-focus:-translate-x-2 peer-focus:scale-75 peer-focus:-translate-y-3  peer-valid:scale-75 peer-valid:-translate-x-2 peer-valid:-translate-y-3`;

const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    EmailLogin(email, pwd);
  };
  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    googleLogin();
  };

  return (
    <form className=" w-72 mx-auto flex flex-col justify-center">
      <div className="relative">
        <input
          type="text"
          id="email"
          name="email"
          className={`${INPUT_CSS}`}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label
          htmlFor="email"
          className={`${LABEL_CSS}
         `}
        >
          이메일
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="pw"
          name="pw"
          className={`${INPUT_CSS}`}
          required
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <label htmlFor="pw" className={`${LABEL_CSS}`}>
          비밀번호
        </label>
      </div>
      <Button onClick={handleLogin} label="로그인" textStyle="text-white" bgStyle="bg-blue-600" />
      <Button onClick={handleGoogleLogin} label="Google 로그인" icon={FcGoogle} textStyle="text-blue-600" bgStyle="bg-white" borderStyle="border border-blue-600" />
    </form>
  );
};

export default LoginInput;

import React, { useState } from "react";
import Button from "../Button/Button";
import { FcGoogle } from "react-icons/fc";

const LoginInput = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFocusPw, setIsFocusPw] = useState<boolean>(false);

  const handleEmailFocus = () => {
    setIsFocus(!isFocus);
  };
  const handleEmailBlur = () => {
    setIsFocus(!isFocus);
  };
  const handlePwFocus = () => {
    setIsFocusPw(!isFocusPw);
  };
  const handlePwBlur = () => {
    setIsFocusPw(!isFocusPw);
  };

  const handleLogin = (): void => {
    console.log("heelo");
  };
  const handleGoogleLogin = (): void => {
    console.log("lohl");
  };
  return (
    <form className=" w-72 mx-auto flex flex-col justify-center">
      <div className="relative">
        <label htmlFor="email" className={`text-md absolute font-gray-600 transition ease-in-out left-3 top-4 ${isFocus ? "-translate-x-2" : ""} ${isFocus ? "-translate-y-3" : ""} ${isFocus ? "scale-75" : ""}`}>
          이메일
        </label>
        <input onBlur={handleEmailBlur} onFocus={handleEmailFocus} type="text" id="email" name="email" className={`border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-1`} />
      </div>
      <div className="relative">
        <label htmlFor="pw" className={`text-md absolute font-gray-600 transition ease-in-out left-3 top-4 ${isFocusPw ? "-translate-x-2" : ""} ${isFocusPw ? "-translate-y-3" : ""} ${isFocusPw ? "scale-75" : ""}`}>
          비밀번호
        </label>
        <input onBlur={handlePwBlur} onFocus={handlePwFocus} type="text" id="pw" name="pw" className={`border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-2`} />
      </div>
      <Button onClick={handleLogin} label="로그인" />
      <Button onClick={handleGoogleLogin} label="Google 로그인" icon={FcGoogle} />
    </form>
  );
};

export default LoginInput;

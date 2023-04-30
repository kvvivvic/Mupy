import React, { useState } from "react";
import Button from "../components/Button/Button";
import { signup } from "../api/firebase";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFocusPw, setIsFocusPw] = useState<boolean>(false);
  const [isFocusName, setIsFocusName] = useState<boolean>(false);
  const [isFocusRePw, setIsFocusRePw] = useState<boolean>(false);

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
  const handleNameFocus = () => {
    setIsFocusName(!isFocusName);
  };
  const handleNameBlur = () => {
    setIsFocusName(!isFocusName);
  };
  const handleRePwFocus = () => {
    setIsFocusRePw(!isFocusRePw);
  };
  const handleRePwBlur = () => {
    setIsFocusRePw(!isFocusRePw);
  };

  return (
    <form className=" w-72 mx-auto flex flex-col justify-center">
      <h2 className=" text-center my-12 text-2xl font-bold text-gray-800 pb-2 border border-t-0 border-x-0  border-b-gray-600">회원가입</h2>
      <div className="relative">
        <label htmlFor="name" className={`text-md absolute font-gray-600 transition ease-in-out left-3 top-4 ${isFocusName ? "-translate-x-2" : ""} ${isFocusName ? "-translate-y-3" : ""} ${isFocusName ? "scale-75" : ""}`}>
          이름
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={handleNameBlur}
          onFocus={handleNameFocus}
          value={name}
          type="text"
          id="name"
          name="name"
          className={`border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-2`}
        />
      </div>
      <div className="relative">
        <label htmlFor="email" className={`text-md absolute font-gray-600 transition ease-in-out left-3 top-4 ${isFocus ? "-translate-x-2" : ""} ${isFocus ? "-translate-y-3" : ""} ${isFocus ? "scale-75" : ""}`}>
          이메일
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
          value={email}
          type="text"
          id="email"
          name="email"
          className={`border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-1`}
        />
      </div>
      <div className="relative">
        <label htmlFor="pw" className={`text-md absolute font-gray-600 transition ease-in-out left-3 top-4 ${isFocusPw ? "-translate-x-2" : ""} ${isFocusPw ? "-translate-y-3" : ""} ${isFocusPw ? "scale-75" : ""}`}>
          비밀번호
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={handlePwBlur}
          onFocus={handlePwFocus}
          value={password}
          type="password"
          id="pw"
          name="pw"
          className={`border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-2`}
        />
      </div>
      <div className="relative">
        <label htmlFor="re_pw" className={`text-md absolute font-gray-600 transition ease-in-out left-3 top-4 ${isFocusRePw ? "-translate-x-2" : ""} ${isFocusRePw ? "-translate-y-3" : ""} ${isFocusRePw ? "scale-75" : ""}`}>
          비밀번호 확인
        </label>
        <input
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
          onBlur={handleRePwBlur}
          onFocus={handleRePwFocus}
          value={rePassword}
          type="password"
          id="re_pw"
          name="re_pw"
          className={`border border-gray-600 w-full rounded-[4px] h-14 pt-4 pl-3 mb-2`}
        />
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

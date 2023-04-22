import React, { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: any;
  icon?: IconType;
  textStyle?: string;
  borderStyle?: string;
  bgStyle?: string;
}

const Button: FC<ButtonProps> = ({ label, icon: Icon, textStyle, borderStyle, bgStyle, onClick }) => {
  return (
    <button onClick={onClick} className={`w-full rounded-sm h-12 relative my-1  bg-blue-600 font-bold ${textStyle} ${borderStyle} ${bgStyle}`}>
      {Icon && <Icon size={24} className={`absolute left-4 top-3`} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;

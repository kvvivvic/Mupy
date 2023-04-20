import React, { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick(): void;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({ label, icon: Icon }) => {
  return (
    <button className=" w-full rounded-sm h-12 relative my-1 text-white bg-blue-600 font-bold">
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;

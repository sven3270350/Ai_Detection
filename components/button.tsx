import React from "react";
import { ubuntu } from "@/styles/font";

type ButtonProps = {
  content: string;
  isOutline?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ content, isOutline, onClick }) => {
  return (
    <button
      className={`${ubuntu.className} hover:bg-[#ABDBFF] bg-[#EBDBFF] text-[18px] text-[#A665F5] px-[32px] py-[3px] leading-[30.8px] font-[600!important] rounded-full border border-[#A665F5]`}
      onClick={onClick}
    >
      <span>{content}</span>
    </button>
  );
};

export default Button;

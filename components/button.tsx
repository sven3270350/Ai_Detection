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
      className={`${ubuntu.className} hover:${isOutline ? 'bg-[#2065F5]' : 'bg-[#ABDBFF]'} ${isOutline ? 'bg-none' : 'bg-[#EBDBFF]'} text-[18px] ${isOutline ? 'text-[#EBDBFF]' : 'text-[#A665F5]'} px-[32px] py-[3px] leading-[30.8px] font-[600!important] rounded-full border ${isOutline ? 'border-[#EBDBFF]' : 'border-[#A665F5]'}`}
      onClick={onClick}
    >
      <span>{content}</span>
    </button>
  );
};

export default Button;

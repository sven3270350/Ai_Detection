"use client"
import React from "react"
import { ubuntu } from "@/styles/font";
import Button from "./button";
import { useRouter } from 'next/navigation'

const navItemText = "text-[18px] text-[#EBDBFF] leading-[30.8px] pr-[36px]";

const Header = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-7 py-[6.87px]">
      <div className="pl-[100px] flex col-span-3">
        <p className={`${ubuntu.className} text-[29.66px] text-[#EBDBFF] leading-[30.8px] pr-[4px]`}>AI</p>
        <p className={`${ubuntu.className} text-[29.66px] text-[#EBDBFF] leading-[30.8px] text-center`}>Detection<br />
          <span className="bg-gradient-to-r from-ebdbff via-ebdbff to-transparent">Bypass</span>
        </p>
      </div>
      <div className="col-span-4 flex justify-center items-center">
        <button className={`${ubuntu.className} ${navItemText}`}>Features</button>
        <button className={`${ubuntu.className} ${navItemText}`}>How it works</button>
        <button className={`${ubuntu.className} ${navItemText}`}>Company</button>
        <button className={`${ubuntu.className} ${navItemText}`}>Pricing</button>
        <button className={`${ubuntu.className} ${navItemText}`}>FAQ</button>
        <div className="h-fit">
          <Button content="Try now" onClick={() => router.push("/login")} />
        </div>
      </div>
    </div>
  )
}

export default Header;

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { ubuntu } from "@/styles/font";
import Button from "@/components/button";
import { public_sans } from "@/styles/font";
import ImageWrapper from "@/components/imageWrapper";

export default function Home() {
  return (
    <div className="bg-[#A665F5] min-h-[400px]">
      <Header />
      <div className="w-full pt-[64px] relative z-10">
        <div className="flex flex-col relative text-white grid grid-cols-9 mb-[44px]">
          <div className="col-span-2"></div>
          <div className="col-span-4 flex flex-col">
            <p
              className={`${ubuntu.className} text-[96px] text-[#EBDBFF] leading-[99.26px] pb-[24px] w-[660px]`}
            >
              Humanize Your AI Writing
            </p>
            <p
              className={`${ubuntu.className} text-[20px] text-[#EBDBFF] leading-[29.8px] pb-[24px] w-[660px]`}
            >
              Looking to turn your AI content into something more human-like?
              Paste your content into AI Detection Bypass and receive
              undetectable, creative writing outputs within seconds.
            </p>
            <div className="h-fit">
              <Button content="Learn more" />
            </div>
          </div>
          <div className="col-span-3"></div>
        </div>
        <div className="flex justify-center mb-[64px]">
          <div className="w-[80%] h-[647px] bg-[#EBDBFF] bg-opacity-20 rounded-[16px] pt-[32px]">
            <div className="h-fit absolute right-[12%] top-[549px] z-20">
              <Button content="Go premium" />
            </div>
            <div className="h-fit absolute left-[12%] top-[929px] z-20 w-[76%] flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <Image
                  src="/Vector.png"
                  width="35"
                  height="35"
                  alt="chatgpt logo"
                />
                <p className={`${public_sans.className} pl-[13px] leading-[18.8px] text-[16px] text-[#A665F5] font-[700!important]`}>WAITING FOR<br />YOUR INPUT</p>
              </div>
              <div className="flex flex-row items-center">
                <p className={`${public_sans.className} pr-[13px] leading-[18.8px] text-[16px] text-[#A665F5] font-[700!important]`}>0/50000 CHARACTERS</p>
                <Image
                  src="/Frame 211.png"
                  width="58"
                  height="58"
                  alt="chatgpt logo"
                />
              </div>
            </div>
            <textarea
              className={`${public_sans.className} h-[500px] w-full bg-[#EBDBFF] rounded-[16px] focus-visible:outline-0 px-[2.2%] py-[39px] text-[#A665F5] text-[20px] resize-none mb-[32px]`}
              placeholder="Enter the text you want to check for AI..."
            >
            </textarea>
            <div className="pl-[36px] pr-[41px] flex flex-row justify-between">
              <div className="flex flex-row">
                <input type="checkbox" className="accent-[#EBDBFF] w-[17.35px] h-[17.35px] border after:bg-[#EBDBFF] mr-[16.65px] mt-[2.5px]" />
                <p className={`${public_sans.className} text-[16px] text-[#EBDBFF] leading-[23.15px] pt-[-4px]`}>I agree to the Terms of service<br />(noacademic misconduct)</p>
              </div>
              <div className="flex flex-row">
                <div className="h-fit mr-[17px]">
                  <Button content="Check for AI" isOutline />
                </div>
                <div className="h-fit">
                  <Button content="Humanize" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>sdfgsdfgsdfg</div>
      </div>
      <ImageWrapper />
    </div>
  );
}

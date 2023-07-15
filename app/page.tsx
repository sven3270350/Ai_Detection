import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { ubuntu } from "@/styles/font";
import Button from "@/components/button";
import { public_sans } from "@/styles/font";

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
        <div className="flex justify-center">
          <div className="w-[80%] h-[647px] bg-[#EBDBFF] bg-opacity-20 rounded-[16px] pt-[32px]">
            <div className="h-fit absolute right-[12%] top-[549px] z-20">
              <Button content="Go premium" />
            </div>
            <textarea
              className={`${public_sans.className} h-[500px] w-full bg-[#EBDBFF] rounded-[16px] focus-visible:outline-0 px-[36px] py-[39px] text-[#A665F5] text-[20px] resize-none`}
              placeholder="Enter the text you want to check for AI..."
            >
            </textarea>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/ChatGPT_logo 1.png"
          width="150"
          height="150"
          alt="chatgpt logo"
          style={{ position: "absolute", right: "15%", top: "456px" }}
        />
        <Image
          src="/download (9) 1.png"
          width="140"
          height="140"
          alt="chatgpt logo"
          style={{ position: "absolute", right: "18%", top: "141px" }}
        />
        <Image
          src="/jasper-ai6944.logowik 1.png"
          width="150"
          height="150"
          alt="chatgpt logo"
          style={{ position: "absolute", right: "3%", top: "236px" }}
        />
        <Image
          src="/Rytr-logo 1.png"
          width="150"
          height="150"
          alt="chatgpt logo"
          style={{ position: "absolute", left: "7%", top: "456px" }}
        />
        <Image
          src="/N1Cpw9hv_400x400 1.png"
          width="89"
          height="119"
          alt="chatgpt logo"
          style={{ position: "absolute", left: "0%", top: "131px" }}
        />
      </div>
    </div>
  );
}

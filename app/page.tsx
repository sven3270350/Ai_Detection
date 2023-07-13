import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-[#A665F5] min-h-[400px]">
      <Header />
      <div className="w-full pt-[64px]">
        <div className="flex flex-col z-10 text-white">
          <p>asdfas</p>
          <p>asdfasdf</p>
          <p>asdfasdf</p>
        </div>
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
          style={{ position: "absolute", left: "0%", top: "131px", zIndex: "1" }}
        />
      </div>
    </div>
  );
}

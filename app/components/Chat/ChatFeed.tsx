"use client";

import Image from "next/image";
import Messages from "@/app/components/Chat/Messages";

const ChatFeed = () => {
  return (
    <div className="w-full h-full flex">
      <div className="h-full flex flex-col items-center px-5">
        <Image src={"/logo-bg-white.svg"} width={56} height={56} alt="logo" />
        <div className="relative h-full w-0.5 bg-lightdark overflow-hidden">
          <div className="animated-gradient h-full w-full "></div>
        </div>
      </div>
      <div className="grow-1 h-full w-full">
        <Messages />
      </div>
    </div>
  );
};

export default ChatFeed;

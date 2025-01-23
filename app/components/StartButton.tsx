"use client";

import Image from "next/image";

const StartButton = () => {
  return (
    <div className="start-button cursor-pointer flex flex-col items-center group">
      <div className="button-wrapper w-24 aspect-square bg-white/[.65] rounded-full flex justify-center items-center outline outline-0 transition-all duration-300 group-hover:scale-110 ">
        <div className="logo-wrapper bg-light w-20 aspect-square rounded-full flex justify-center items-center ">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </div>
      </div>

      <p className="font-helvetica-bold uppercase text-sm mt-1.5 mb-2.5">
        Commencer
      </p>

      <Image
        src="/back-arrow.svg"
        alt="arrow"
        width={24}
        height={24}
        className="-rotate-90 w-3"
      />
    </div>
  );
};

export default StartButton;

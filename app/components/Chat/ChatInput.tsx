"use client";

import Image from "next/image";
import { useState } from "react";
import { useChat } from "@/app/context/ChatContext";
import { tabs } from "@/app/data/tabs";

const ChatInput = () => {
  const [value, setValue] = useState("");
  const {
    addMessage,
    currentTab,
    setCurrentTab,
    clearMessages,
    setCurrentQuestion,
    currentQuestion,
  } = useChat();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      addMessage(value);
      setValue("");

      setTimeout(() => {
        if (currentTab < tabs.length - 1) {
          clearMessages();
          setCurrentTab(currentTab + 1);
          setCurrentQuestion(currentQuestion + 1);
        }
      }, 2000);
    }
  };

  return (
    <div className="relative flex justify-between items-center gap-3 p-4 w-full mb-10 lg:mb-14">
      <div className="micro bg-white h-full aspect-square rounded-lg flex justify-center items-center cursor-pointer hover:bg-white/[.8] transition-all duration-200">
        <Image src={"/micro.svg"} width={14} height={19} alt="micro" />
      </div>

      <form
        className="border border-[#4F4F4F] bg-[#2D2D2D] rounded-lg flex justify-between md:gap-2 p-3 w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-transparent border-none flex-grow text-white"
          placeholder="Écrivez ici..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <button className="bg-white text-dark flex items-center justify-center gap-2 shrink-0 p-4 rounded-md hover:scale-95  transition-all duration-200">
          <span className="hidden md:block">Envoyer</span>
          <Image src={"/send.svg"} width={19} height={18} alt="send" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;

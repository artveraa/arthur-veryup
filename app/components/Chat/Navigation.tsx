"use client";

import { useState } from "react";
import { useChat } from "@/app/context/ChatContext";
import { tabs } from "@/app/data/tabs";

const Navigation = () => {
  const { currentTab, setCurrentTab, setCurrentQuestion } = useChat();

  // Permet de changer l'onglet actif et la question active
  const handleClick = (item: number) => {
    setCurrentTab(item);
    setCurrentQuestion(item);
  };

  return (
    <div className="w-full justify-center hidden md:flex">
      <ul className="flex flex-col items-start  font-helvetica text-lg text-grey gap-5">
        {tabs.map((item, index) => (
          <li
            key={index}
            className={` cursor-pointer transition-colors duration-200 ${
              currentTab === index ? "font-helvetica-bold text-white" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;

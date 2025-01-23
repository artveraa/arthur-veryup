"use client";
import { useChat } from "@/app/context/ChatContext";
import { tabs } from "@/app/data/tabs";
import { questions } from "@/app/data/questions";

const Messages = () => {
  const { messages, currentTab, currentQuestion } = useChat();

  return (
    <div className="pr-10">
      <h3 className="font-poppins font-bold text-yellow text-xl lg:text-2xl  h-12 lg:h-14 flex flex-col justify-center ">
        {tabs[currentTab]}
      </h3>

      <p className="font-poppins text-xl lg:text-2xl text-white/[.6]">
        {questions[currentQuestion].chapo}
      </p>
      <p className="font-poppins font-semibold text-2xl lg:text-3xl">
        {questions[currentQuestion].question}
      </p>

      {messages && messages.length > 0 && (
        <div>
          <p className="mb-4 mt-8 text-white/[.4] font-poppins font-semibold text-base">
            Votre réponse
          </p>
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="message bg-lightdark w-fit p-4 rounded-md"
              >
                <p className="font-poppins font-semibold text-sm">{message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Messages;

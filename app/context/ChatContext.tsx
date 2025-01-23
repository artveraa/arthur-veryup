"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ChatContextProps {
  messages: string[];
  addMessage: (message: string) => void;
  clearMessages: () => void;
  currentTab: number;
  setCurrentTab: (tabIndex: number) => void;
  currentQuestion: number;
  setCurrentQuestion: (questionIndex: number) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        currentTab,
        setCurrentTab,
        clearMessages,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat utilise ChatProvider pour accéder au contexte");
  }
  return context;
};

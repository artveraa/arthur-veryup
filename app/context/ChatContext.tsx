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
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

// Création du context
const ChatContext = createContext<ChatContextProps | undefined>(undefined);

// Création du provider
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Permet d'ajouter un message à la liste des messages
  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Permet de vider la liste des messages
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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Hook pour accéder au context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat utilise ChatProvider pour accéder au contexte");
  }
  return context;
};

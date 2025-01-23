import Navigation from "@/app/components/Chat/Navigation";
import ChatFeed from "@/app/components/Chat/ChatFeed";
import ChatInput from "@/app/components/Chat/ChatInput";
import { ChatProvider } from "@/app/context/ChatContext";

const Chat = () => {
  return (
    <ChatProvider>
      <div className="grid md:grid-cols-[1fr,2fr]  py-[150px]">
        <Navigation />
        <ChatFeed />
      </div>
      <div className="flex h-full max-w-[1200px] my-0 mx-auto">
        <ChatInput />
      </div>
    </ChatProvider>
  );
};
export default Chat;

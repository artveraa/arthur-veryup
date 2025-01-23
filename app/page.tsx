import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Intro from "@/app/components/Intro";
import Chat from "@/app/components/Chat/Chat";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Intro />
      <Chat />
    </div>
  );
}

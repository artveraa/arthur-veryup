import Image from "next/image";
import StartButton from "./StartButton";

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-full pt-1O flex flex-col justify-center items-center">
      <div className="font-poppins font-semibold   text-center z-20">
        <p className="block leading-auto text-yellow text-2xl mb-4">
          Entraînement
        </p>
        <h1 className="leading-auto text-8xl">Le brassage de la bière</h1>
      </div>

      <div className="absolute hero-gradient w-full h-full z-10"></div>
      <Image
        src="https://images.unsplash.com/photo-1445140463371-d8036feedc2f?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="absolute -z-20"
      />
      <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 z-20">
        <StartButton />
      </div>
    </div>
  );
};

export default Hero;

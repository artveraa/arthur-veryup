import Image from "next/image";

const Intro = () => {
  return (
    <div
      className="relative h-[50vh] w-full flex flex-col justify-center items-center px-10   overflow-hidden "
      id="intro"
    >
      <p className="leading-[40px] lg:leading-[60px] text-xl lg:text-2xl text-center my-0 mx-auto max-w-[1574px] z-20 text-white/50">
        Bonjour et bienvenue à cette formation sur le brassage de bière !
        <br /> Je suis votre formateur dans le monde passionnant de la
        fabrication artisanale de bière, et je suis ici pour vous guider à
        travers chaque étape du processus.
      </p>
      <div className="intro-gradient absolute intro-gradient w-full h-full z-10"></div>
    </div>
  );
};
export default Intro;

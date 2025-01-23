import Image from "next/image";

interface BackButtonProps {
  label: string;
  isIcon?: boolean;
}

const BackButton = ({ label, isIcon }: BackButtonProps) => {
  return (
    <button className="flex items-center gap-6 bg-lightdark rounded-[6px] p-4 hover:bg-grey transition-all duration-300 cursor-pointer">
      {isIcon && (
        <Image
          src={"/back-arrow.svg"}
          height={18}
          width={10}
          alt="Icone flèche retour"
        />
      )}
      <span className="font-poppins text-">{label}</span>
    </button>
  );
};
export default BackButton;

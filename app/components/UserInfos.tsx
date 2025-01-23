import Image from "next/image";

interface UserInfosProps {
  name: string;
  imageUrl: string;
}

const UserInfos = ({ name, imageUrl }: UserInfosProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <p className="font-poppins font-semibold text-base leading-none hidden md:block">
        {name}
      </p>
      <Image
        src={imageUrl}
        width={42}
        height={42}
        alt="avatar de l'utilisateur"
        className="rounded-full aspect-square object-cover"
      />
    </div>
  );
};
export default UserInfos;

import BackButton from "@/app/components/BackButton";
import Logo from "@/app/components/Logo";
import UserInfos from "@/app/components/UserInfos";

const Header = () => {
  return (
    <div className="p-5 2xl:p-10 flex justify-between items-center fixed backdrop-blur-lg bg-dark/[.06] w-full z-40 gap-5">
      <BackButton label="Revenir à l'accueil" isIcon={true} />
      <Logo />
      <UserInfos
        name="Virginie Schmidt"
        imageUrl="https://plus.unsplash.com/premium_photo-1683140820086-0dc208d23ab2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};
export default Header;

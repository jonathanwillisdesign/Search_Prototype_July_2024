import Logo from "@/icons/Logo";
import Tab from "@/components/tab";
import Profile from "@/components/profile";
import CaretDown from "@/icons/CaretDown";

export default function NavBar() {
  return (
    <header className="w-full flex flex-col items-center justify-between border-b border-gray-light">
      <div className="max-w-[1200px] w-full flex flex-row justify-between align-top text-sm text-gray-dark pt-30">
        <HomePage />
        <Tabs />
        <div className="flex flex-row flex-1 justify-end mr-20">
          <Profile />
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div className="text-black p-20 ml-20 transition-colors hover:text-gray-dark cursor-pointer flex-1">
      <Logo />
    </div>
  );
}

function Tabs() {
  return (
    <div className="flex flex-row gap-30 flex-1 pt-20">
      <Tab label="Designs" selected={true} />
      <Tab label="Orders" selected={false} />
      <Tab label="Catalogue" selected={false} />
      <Tab label="Artwork" selected={false} />
    </div>
  );
}

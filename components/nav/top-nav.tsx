import { Logo } from "./logo";
import { ProfileButton } from "./profile-button";
import { SearchButton } from "./search-button";
import { MenuList } from "./menu-list";

export const Topnav = () => {
  return (
    <nav className="z-10 fixed top-0 py-2 px-10 h-14 w-full bg-background/20 border-b flex items-center justify-between">
      <Logo />
      <MenuList />
      <div className="flex gap-5">
        <SearchButton />
        <ProfileButton />
      </div>
    </nav>
  );
};

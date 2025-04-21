import { SearchIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export const SearchButton = () => {
  return (
    <Drawer direction="top">
      <DrawerTrigger>
        <SearchIcon className="cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>검색</DrawerTitle>
          <DrawerDescription>
            검색어를 두 글자 이상 입력해주세요
          </DrawerDescription>
        </DrawerHeader>
        <form action={"/search"} className="p-5 pb-20 mx-auto w-fit">
          <div className="mt-5 relative">
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 left-4"
            >
              <SearchIcon className="cursor-pointer" />
            </button>
            <input
              autoFocus
              name="q"
              className="h-12 w-96 rounded-full border pl-12 pr-5"
            />
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

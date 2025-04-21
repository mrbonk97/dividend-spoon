import { PersonStanding } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

export const ProfileButton = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <PersonStanding />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>hyunsuk97</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <form action={"/sign-out"}>
          <DropdownMenuItem>
            <Button type="submit" variant={"ghost"}>
              로그아웃
            </Button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

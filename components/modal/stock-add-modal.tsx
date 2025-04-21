import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
} from "../ui/dialog";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const StockAddModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Button>
          <PlusIcon />
          종목 추가하기
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>보유 종목 추가하기</DialogTitle>
        </DialogHeader>
        <div className="h-80">
          <div className="flex justify-between gap-2">
            <Input className="py-6" placeholder="종목 명을 입력해주세요" />
            <Button className="py-6 w-14">
              <SearchIcon />
            </Button>
          </div>
          <ul className="mt-5 space-y-2">
            <ListItem />
          </ul>
        </div>
        <DialogFooter>
          <DialogClose>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ListItem = () => (
  <li className="p-5 rounded-lg border flex items-center justify-between">
    <div>
      <h6 className="text-lg font-semibold">MSTY</h6>
      <p className="text-sm font-medium opacity-80">
        YieldMax MSTY Call Options ETF
      </p>
    </div>
    <Button>추가</Button>
  </li>
);

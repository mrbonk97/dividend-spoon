import { HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StockNameSection = () => {
  return (
    <header className="p-5 flex items-center justify-between border-b">
      <div>
        <h1 className="text-2xl font-bold">MSTY</h1>
        <h2 className="font-semibold">YieldMax Investing Co. Samsung Electronics</h2>
      </div>
      <Button size={"icon"} variant={"secondary"} className="cursor-pointer">
        <HeartIcon fill="#ffa1ad" stroke="#ffa1ad" />
      </Button>
    </header>
  );
};

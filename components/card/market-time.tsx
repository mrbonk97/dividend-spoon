import { TooltipTrigger, Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";

export const MarketTimeCard = () => {
  return (
    <section className="p-5 w-full border-b">
      <ul className="list-disc flex justify-evenly text-sm">
        <li>한국: 09:00 ~ 16:00</li>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <li>
                <Link href={"/calendar?country=us"}>미국 22:30 ~ 05:30</Link>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <ul>
                <li>데이마켓 05:30 ~ 09:00</li>
                <li>프리마켓 09:00 ~ 22:30</li>
                <li>정규시간 22:30 ~ 05:30</li>
                <li>애프터마켓 22:30 ~ 05:30</li>
              </ul>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ul>
    </section>
  );
};

"use client";
import { TOP_MENU } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuList = () => {
  const pathname = usePathname();

  return (
    <ul className="text-sm flex gap-5">
      {TOP_MENU.map((item) => (
        <li key={item.id}>
          <Link
            href={item.url}
            aria-pressed={pathname.startsWith(item.url)}
            className="py-1.5 px-5 rounded hover:bg-secondary aria-pressed:bg-secondary duration-150"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

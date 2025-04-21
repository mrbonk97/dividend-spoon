import Link from "next/link";

export const Logo = () => {
  return (
    <h1 className="px-5">
      <Link href={"/"} className="font-bold text-2xl">
        배당 스푼
      </Link>
    </h1>
  );
};

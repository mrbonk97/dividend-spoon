import Link from "next/link";

const SignOutPage = async () => {
  return (
    <main className="p-5 pt-[4.75rem] max-w-6xl">
      <h1 className="text-2xl font-bold">로그아웃</h1>
      <section>
        <h1>로그아웃 성공</h1>
        <Link href={"/"} className="hover:underline underline-offset-2">
          홈으로 이동
        </Link>
      </section>
    </main>
  );
};

export default SignOutPage;

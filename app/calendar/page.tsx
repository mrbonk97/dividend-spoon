import { TestTable } from "@/components/table/test-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "배당스푼 - 배당 일정",
  description: "주식 & ETF의 배당 일정을 보여드립니다.",
};

const CalendarPage = () => {
  return (
    <main className="p-5 pt-[4.75rem] mx-auto max-w-6xl">
      <h1 className="text-2xl font-bold">배당 일정</h1>
      <section className="mt-10 p-5 text-lg font-medium grid grid-cols-2 gap-10">
        <span className="text-right col-span-1">﹒ 한국 시간 2024.04.21 09:21</span>
        <span className="col-span-1">﹒ 미국 시간 2024.04.21 09:21</span>
      </section>
      <section className="mt-10">
        <TestTable />
      </section>
    </main>
  );
};

export default CalendarPage;

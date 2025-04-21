import { DividendChart } from "@/components/chart/dividend-chart";
import { StockAddModal } from "@/components/modal/stock-add-modal";

const MyStockPage = () => {
  return (
    <main className="p-5 pt-[4.75rem] mx-auto max-w-6xl bg-rose-100">
      <h1 className="text-2xl font-bold">나의 주식</h1>
      <section className="p-5">
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-medium opacity-80">보유 종목</h2>
          <StockAddModal />
        </header>
        <div className="mt-5 h-80 grid grid-cols-4 gap-5">
          <div className="col-span-3 h-full bg-rose-200" />
          <div className="col-span-1 h-full bg-rose-200" />
        </div>
      </section>
      <section className="p-5">
        <h2 className="text-lg font-medium opacity-80">올해 배당 수익</h2>
        <DividendChart />
      </section>
      <section className="p-5">
        <h2 className="text-lg font-medium opacity-80">배당 수익 상세분석</h2>
        <DividendChart />
      </section>
      <section className="p-5">
        <h2 className="text-lg font-medium opacity-80">다가오는 배당일</h2>
        <div />
      </section>
    </main>
  );
};

export default MyStockPage;

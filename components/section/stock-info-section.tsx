import { YearlyDividendRate } from "../chart/yearly-dividend-rate";

export const StockInfoSection = () => (
  <section className="p-5 space-y-5">
    <h4 className="text-lg font-semibold">종목정보</h4>
    <div className="flex gap-5 justify-between">
      <div className="w-full">
        {/* 현재가 */}
        <div className="pb-5 border-b">
          <h3 className="font-medium opacity-80">현재가</h3>
          <p className="text-4xl font-bold">50,123$</p>
          <p className="mt-1 text-blue-500">▲ 0.3 -0.28%</p>
        </div>
        {/* 운용사 등등 */}
      </div>
      <YearlyDividendRate />
    </div>
  </section>
);

import { DividendChart } from "@/components/chart/dividend-chart";
import { StockDividendHistorySection } from "@/components/section/stock-dividend-history-section";
import { StockInfoSection } from "@/components/section/stock-info-section";
import { StockNameSection } from "@/components/section/stock-name-section";
import Image from "next/image";

const StockDetailPage = async () => {
  return (
    <main className="pt-14 mx-auto max-w-6xl">
      <StockNameSection />
      <StockInfoSection />
      <StockDividendHistorySection />
      <section className="mt-10">
        <DividendChart />
      </section>
      <section className="p-5">
        <h4 className="p-5 text-lg font-semibold">종목 정보</h4>
        <p className="py-5 px-10 font-medium">
          The YieldMax™ NVDA Option Income Strategy ETF (NVDY) is an actively managed fund that
          seeks to generate monthly income by selling/writing call options on NVDA. NVDY pursues a
          strategy that aims to harvest compelling yields, while retaining capped participation in
          the price gains of NVDA.
        </p>
        <p className="py-5 px-10">
          The Fund does not invest directly in NVDA. Investing in the fund involves a high degree of
          risk. Single Issuer Risk. Issuer-specific attributes may cause an investment in the Fund
          to be more volatile than a traditional pooled investment which diversifies risk or the
          market generally. The value of the Fund, which focuses on an individual security NVDA, may
          be more volatile than a traditional pooled investment or the market as a whole and may
          perform differently from the value of a traditional pooled investment or the market as a
          whole. The Fund’s strategy will cap its potential gains if NVDA shares increase in value.
          The Fund’s strategy is subject to all potential losses if NVDA shares decrease in value,
          which may not be offset by income received by the Fund. The Fund may not be suitable for
          all investors.
        </p>
      </section>
      <section className="p-5">
        <h4 className="p-5 text-lg font-semibold">펀드 오브젝트</h4>
        <p className="py-5 px-10 font-medium">
          The Fund’s primary investment objective is to seek current income. The Fund’s secondary
          investment objective is to seek exposure to the share price of the common stock of NVIDIA
          Corporation (“NVIDIA”), subject to a limit on potential investment gains.
        </p>
      </section>
      <section className="p-5 grid grid-cols-3 gap-5">
        <div className="col-span-1 space-y-10">
          <h4 className="p-5 text-lg font-semibold">운용사</h4>
          <Image
            src={"/logos/yieldmax-logo-square-blk.png"}
            alt="ymetf"
            height={400}
            width={400}
            className="mx-auto h-40 object-contain"
          />
          <p className="font-medium text-lg text-center">YieldMax</p>
        </div>
        <div className="col-span-1 space-y-10 border-x">
          <h4 className="p-5 text-lg font-semibold">국가</h4>
          <Image
            src={"/logos/yieldmax-logo-square-blk.png"}
            alt="ymetf"
            height={400}
            width={400}
            className="mx-auto h-40 object-contain"
          />
          <p className="font-medium text-lg text-center">미국</p>
        </div>

        <div className="col-span-1 space-y-10">
          <h4 className="p-5 text-lg font-semibold">상장 시장</h4>
          <Image
            src={"/logos/NASDAQ_Logo.svg"}
            alt="nasdaq"
            height={400}
            width={400}
            className="mx-auto h-40 object-contain"
          />
          <p className="font-medium text-lg text-center">Nasdaq</p>
        </div>
      </section>
    </main>
  );
};

export default StockDetailPage;

import { MarketTimeCard } from "@/components/card/market-time";
import UpcomingDividendCard from "@/components/card/upcoming-dividend";

const Home = () => {
  return (
    <main className="p-5 pt-14 space-y-5">
      <MarketTimeCard />
      <UpcomingDividendCard />
    </main>
  );
};

export default Home;

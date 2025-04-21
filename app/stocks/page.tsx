import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ETF_FILTER } from "@/constants";

const StockPage = () => {
  return (
    <main className="pt-14 mx-auto max-w-7xl">
      <header className="mt-5">
        <h1 className="text-2xl font-bold">배당주 & ETF</h1>
      </header>
      <section className="mt-2 pb-2 border-b">
        <div className="space-x-2">
          {ETF_FILTER.map((item) => (
            <Button key={item.id} variant={"secondary"} className="cursor-pointer">
              {item.title}
            </Button>
          ))}
        </div>
      </section>
      <EtfTable />
    </main>
  );
};

const EtfTable = () => {
  return (
    <Table className="relative">
      <TableCaption className="sr-only">배당일 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>종목명</TableHead>
          <TableHead>현재가</TableHead>
          <TableHead>연간 배당률</TableHead>
          <TableHead>다음 배당일</TableHead>
          <TableHead>이번 금액</TableHead>
          <TableHead>배당 금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 50 }).map((itemm, idx) => (
          <TableRow key={`table-${idx}`}>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StockPage;

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export const StockDividendHistorySection = () => {
    return <section className="p-5 space-y-10">
         <h4 className="text-lg font-semibold">배당 이력</h4>
        <EtfTable />
    </section>
}


const EtfTable = () => {
    return (
      <Table className="relative">
        <TableCaption className="sr-only">배당일 목록</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>권리유형</TableHead>
            <TableHead>공시일</TableHead>
            <TableHead>기준일</TableHead>
            <TableHead>배당락</TableHead>
            <TableHead>지급일</TableHead>
            <TableHead>배당금</TableHead>
            <TableHead>배당율</TableHead>
            <TableHead>배당통화</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((item, idx) => (
            <TableRow key={`table-${idx}`}>
              <TableCell>배당</TableCell>
              <TableCell>2025-04-08</TableCell>
              <TableCell>2025-05-22</TableCell>
              <TableCell>2025-05-22</TableCell>
              <TableCell>2025-05-23</TableCell>
              <TableCell>0.89</TableCell>
              <TableCell>7%</TableCell>
              <TableCell>USD</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
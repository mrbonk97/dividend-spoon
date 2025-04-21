import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TestTable = () => {
  return (
    <Table className="border-t">
      <TableCaption className="sr-only">배당일 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>종목명</TableHead>
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
        {Array.from({ length: 50 }).map((item, idx) => (
          <TableRow key={`table-${idx}`}>
            <TableCell>NVDL</TableCell>
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

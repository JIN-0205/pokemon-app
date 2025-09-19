import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

const PokemonTable = () => {
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          {/* <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow> */}
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Type</TableCell>
            <TableCell>Leaf</TableCell>
            {/* <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PokemonTable;

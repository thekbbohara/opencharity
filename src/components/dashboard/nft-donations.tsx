"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

export function NFTDonations() {
  return (
    <div className="rounded-md border mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NFT</TableHead>
            <TableHead>Charity</TableHead>
            <TableHead>Date Donated</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
              No NFT donations found. Donate your NFTs to support charitable causes!
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

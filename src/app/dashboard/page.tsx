"use client";

import ConnectWallet from "@/components/connect-wallet";
import { DonationHistory } from "@/components/dashboard/darsboard-history";
import { DashboardStats } from "@/components/dashboard/darsboard-stats";
import { NFTDonations } from "@/components/dashboard/nft-donations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useAccount } from "wagmi";

export default function Dashboard() {
  // const { isConnected } = useAccount();
  const { isConnected } = { isConnected: true };

  if (!isConnected) {
    return <ConnectWallet />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Donor Dashboard</h1>

      <DashboardStats />

      <Tabs defaultValue="donations" className="mt-8">
        <TabsList>
          <TabsTrigger value="donations">Donation History</TabsTrigger>
          <TabsTrigger value="nfts">NFT Donations</TabsTrigger>
        </TabsList>
        <TabsContent value="donations">
          <DonationHistory />
        </TabsContent>
        <TabsContent value="nfts">
          <NFTDonations />
        </TabsContent>
      </Tabs>
    </div>
  );
}

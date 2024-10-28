"use client";

import { Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const ConnectWallet = () => {

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto p-8 text-center">
        <Wallet className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <p className="text-muted-foreground mb-6">
          Please connect your wallet to access the dashboard and make donations.
        </p>
        <Button
          size="lg"
        >

          Connect Wallet
        </Button>
      </Card>
    </div>
  );
}
export default ConnectWallet;

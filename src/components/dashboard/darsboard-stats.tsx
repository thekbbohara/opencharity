"use client";

import { Card } from "@/components/ui/card";
import { Heart, Gem, DollarSign } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <DollarSign className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Donated</p>
            <h3 className="text-2xl font-bold">0.00 ETH</h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Causes Supported</p>
            <h3 className="text-2xl font-bold">0</h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Gem className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">NFTs Donated</p>
            <h3 className="text-2xl font-bold">0</h3>
          </div>
        </div>
      </Card>
    </div>
  );
}

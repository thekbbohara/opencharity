import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Gem, LineChart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Empower Change Through
          <span className="text-primary block">Blockchain Giving</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Make transparent cryptocurrency donations and contribute NFTs to support verified charities worldwide.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/donate">
            <Button size="lg" className="gap-2">
              <Heart className="w-5 h-5" />
              Start Donating
            </Button>
          </Link>
          <Link href="/explore">
            <Button size="lg" variant="outline" className="gap-2">
              Explore Charities
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <Heart className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Direct Impact</h3>
          <p className="text-muted-foreground">
            Your cryptocurrency donations go directly to verified charities with minimal fees.
          </p>
        </Card>
        <Card className="p-6">
          <Gem className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">NFT Donations</h3>
          <p className="text-muted-foreground">
            Donate NFTs that can be sold to raise funds for charitable causes.
          </p>
        </Card>
        <Card className="p-6">
          <LineChart className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Full Transparency</h3>
          <p className="text-muted-foreground">
            Track your donations and their impact through blockchain technology.
          </p>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join our community of donors and start contributing to meaningful causes today.
        </p>
        <Link href="/donate">
          <Button size="lg" className="gap-2">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

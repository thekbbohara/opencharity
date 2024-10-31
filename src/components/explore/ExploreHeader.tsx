import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function ExploreHeader() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Explore Campaigns</h1>
      <p className="text-muted-foreground">
        Discover charitable campaigns and make a difference in the world
      </p>
      <div className="flex items-center px-2 rounded-md gap-2 max-w-md border">
        <Search className=" h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search campaigns..."
          className="border-none"
        />
      </div>
    </div>
  );
}
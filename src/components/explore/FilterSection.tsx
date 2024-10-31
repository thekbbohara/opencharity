import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export function FilterSection() {
  return (
    <Card className="p-6">
      <h2 className="font-semibold mb-4">Filters</h2>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Categories</h3>
          <div className="space-y-2">
            {['Education', 'Healthcare', 'Environment', 'Poverty', 'Disaster Relief'].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <Label htmlFor={category}>{category}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Status</h3>
          <div className="space-y-2">
            {['Active', 'Completed', 'Urgent'].map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox id={status} />
                <Label htmlFor={status}>{status}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <Button className="w-full">Apply Filters</Button>
      </div>
    </Card>
  );
}

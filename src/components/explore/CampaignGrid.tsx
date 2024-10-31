import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const MOCK_CAMPAIGNS = [
  {
    id: 1,
    title: 'Education for All',
    description: 'Help provide education to underprivileged children',
    raised: 1.2,
    goal: 2.0,
    category: 'Education',
    daysLeft: 15,
  },
  {
    id: 2,
    title: 'Clean Water Initiative',
    description: 'Bringing clean water to rural communities',
    raised: 0.8,
    goal: 1.5,
    category: 'Healthcare',
    daysLeft: 20,
  },
  {
    id: 3,
    title: 'Forest Conservation',
    description: 'Protecting endangered forest ecosystems',
    raised: 2.5,
    goal: 3.0,
    category: 'Environment',
    daysLeft: 10,
  },
];

export function CampaignGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_CAMPAIGNS.map((campaign) => (
        <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-sm text-muted-foreground">{campaign.category}</div>
            <h3 className="text-lg font-semibold">{campaign.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
            <Progress value={(campaign.raised / campaign.goal) * 100} className="mb-2" />
            <div className="flex justify-between text-sm">
              <span>{campaign.raised} ETH raised</span>
              <span>Goal: {campaign.goal} ETH</span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              {campaign.daysLeft} days left
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

import { CampaignGrid } from './CampaignGrid';
import { ExploreHeader } from './ExploreHeader';
import { FilterSection } from './FilterSection';

export default function ExploreView() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ExploreHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        <FilterSection />
        <div className="lg:col-span-3">
          <CampaignGrid />
        </div>
      </div>
    </main>
  );
}

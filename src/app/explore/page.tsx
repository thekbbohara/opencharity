import { Metadata } from 'next';
import ExploreView from '@/components/explore/ExploreView';

export const metadata: Metadata = {
  title: 'Explore Campaigns | OpenCharity',
  description: 'Discover and support charitable campaigns on OpenCharity',
};

export default function ExplorePage() {
  return <ExploreView />;
}

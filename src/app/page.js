import FeaturedTiles from '@/components/FeaturedTiles';
import Banner from '@/components/home/Banner';

export default function Home() {
  return (
    <main className="pt-[70px] md:pt-[80px]">
      <Banner />
      <FeaturedTiles />
    </main>
  );
}

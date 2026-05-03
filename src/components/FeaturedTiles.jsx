import { getTiles } from '@/lib/getTiles';
import Link from 'next/link';

const FeaturedTiles = async () => {
  try {
    const data = await getTiles();

    const featured = data.slice(0, 4);

    return (
      <section className=" py-5">
        <div className="max-w-7xl mx-auto px-4  rounded-xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary uppercase">Featured Tiles</h2>
            <p className="text-gray-500 mt-2">Explore our most popular selections</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded  ">
            {featured.map((tile) => (
              <div
                key={tile.id}
                className="card bg-base-100 shadow-2xl hover:shadow-2xl transition-all"
              >
                <figure className="h-48 overflow-hidden">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  />
                </figure>

                <div className="p-5 bg-white text-[#0F172A] rounded-b shadow">
                  <h2 className="font-bold text-lg truncate">{tile.title}</h2>
                  <p className="text-xs uppercase">{tile.category}</p>
                  <p className="text-sm font-semibold mt-1">${tile.price}</p>

                  <div className="mt-4">
                    <Link
                      href={`/all-tiles/tile/${tile.id}`}
                      className="btn bg-[#FF5F00] text-white  btn-sm w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <p>Error loading tiles</p>;
  }
};

export default FeaturedTiles;

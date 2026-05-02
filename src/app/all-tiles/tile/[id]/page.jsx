import { getTiles } from '@/lib/getTiles';
import Link from 'next/link';

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getTiles();
  const tilesList = data.tiles || data;
  const tile = tilesList.find((t) => t.id == id);

  if (!tile) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Tile Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
       <h2>TILES GALLARY</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start p-10 bg-white rounded shadow-2xl">
        {/* Left: Large High-Res Preview */}
        <div className="w-full ">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
            <img
              src={tile.image}
              alt={tile.title}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Details Info */}
        <div className="flex flex-col lg:space-y-2 space-x-0.5">
          <div>
            <span className="lg:text-sm font-semibold tracking-widest text-blue-600 uppercase">
              {tile.category}
            </span>
            <h1 className="lg:text-3xl tex-xl font-extrabold text-gray-900 mt-2 uppercase leading-tight">
              {tile.title}
            </h1>
            <p className="lg:text-lg text-gray-500 mt-2 italic">Created by Premium Designs</p>
          </div>

          <div className="border-t border-b py-2 lg:py-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Style Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{tile.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="lg:text-3xl text-xl font-bold text-gray-900">${tile.price}</span>
              <span className="text-gray-400">/ per sq. ft</span>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                {tile.category}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                {tile.material}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                {tile.dimensions}
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                {tile.tag}
              </span>
            </div>
          </div>

          <button className=" mt-2 w-full md:w-max px-12 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-300">
            <Link href="/all-tiles">back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;

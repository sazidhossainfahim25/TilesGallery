import { getTiles } from '@/lib/getTiles';
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getTiles();
  const tilesList = data.tiles || data;
  const tile = tilesList.find((t) => t.id == id);

  if (!tile) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-xl font-bold">Tile Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* compact navigation */}
        <Link
          href="/all-tiles"
          className="inline-flex items-center gap-1 text-gray-400 hover:text-black transition-colors mb-4 text-xs font-bold uppercase tracking-tighter"
        >
          <IoChevronBackOutline /> Back
        </Link>

        {/* Short Height Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-h-fit md:max-h-[450px]">
          {/* Left: Image with controlled height */}
          <div className="h-64 md:h-auto overflow-hidden bg-gray-200">
            <img
              src={tile.image}
              alt={tile.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right: Compact Details Info */}
          <div className="flex flex-col p-6 lg:p-8 justify-center">
            <div className="mb-4">
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest block mb-1">
                {tile.category}
              </span>
              <h1 className="text-xl lg:text-3xl font-black text-gray-900 uppercase leading-none">
                {tile.title}
              </h1>
            </div>

            <div className="space-y-3 py-4 border-y border-gray-50">
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {tile.description ||
                  'Premium aesthetic tile designed for luxury interiors and modern architectural excellence.'}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-gray-900">${tile.price}</span>
                <span className="text-gray-400 text-xs uppercase font-bold tracking-widest">
                  / SQ. FT
                </span>
              </div>
            </div>

            {/* Quick Specs Row */}
            <div className="flex gap-6 mt-4 mb-6">
              <div>
                <p className="text-[9px] font-bold text-gray-300 uppercase">Material</p>
                <p className="text-gray-700 font-bold text-xs">{tile.material || 'Marble'}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-300 uppercase">Dimensions</p>
                <p className="text-gray-700 font-bold text-xs">{tile.dimensions || '12x24'}</p>
              </div>
            </div>

            <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 uppercase tracking-widest text-[10px]">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTiles } from '@/lib/getTiles';

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const data = await getTiles();
        setTiles(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTiles();
  }, []);

  //  Filter logic
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center py-10 text-lg"><span className="loading loading-dots loading-xl"></span></p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/*  Search Bar */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search tiles by title..."
          className="input lg:w-100 text-lg outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/*  Tiles Grid */}
      {filteredTiles.length === 0 ? (
        <p className="text-center text-gray-500">No tiles found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTiles.map((tile) => (
            <div key={tile.id} className="  shadow-md hover:shadow-xl rounded bg-white transition">
              {/*  Image */}
              <figure className="h-48 overflow-hidden rounded">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </figure>

              {/*  Content */}
              <div className="p-4">
                <h2 className="font-bold text-lg truncate">{tile.title}</h2>

                <p className="text-sm text-gray-500">{tile.category}</p>

                <div className="mt-4 bg-green-500">
                  <Link
                    href={`/all-tiles/tile/${tile.id}`}
                    className="btn bg-[#FF5F00] text-white  btn-sm w-full"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTilesPage;

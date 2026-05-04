'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTiles } from '@/lib/getTiles';
import { CiSearch } from 'react-icons/ci';
import { motion } from 'framer-motion';

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const data = await getTiles();
        setTiles(data);
      } catch (error) {
        toast.error( 'Error fetching tiles');
      } finally {
        setLoading(false);
      }
    };
    fetchTiles();
  }, []);

  const filteredTiles = tiles.filter(
    (tile) =>
      tile.title.toLowerCase().includes(search.toLowerCase()) ||
      tile.category.toLowerCase().includes(search.toLowerCase())
  );


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return (
      <p className="text-center py-10 text-lg">
        <span className="loading loading-dots loading-xl"></span>
      </p>
    );
  }

  return (
    <section className="pt-20 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mt-10 space-y-1">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-orange-500 leading-tight"
          >
            POPULAR TILES GALLERY
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} 
            className="text-[18px] text-gray-200 "
            >
            Explore our most popular Tiles
          </motion.p>

          <div className="flex justify-center items-center py-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative flex items-center w-full max-w-md group"
            >
              <CiSearch className="absolute left-4 text-2xl text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search tiles by name or category..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-lg outline-none shadow-sm transition-all duration-300 focus:border-orange-400 focus:shadow-[0_0_15px_rgba(255,165,0,0.1)]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </motion.div>
          </div>
        </div>

        {filteredTiles.length === 0 ? (
          <p className="text-center text-gray-500">No tiles found</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredTiles.map((tile) => (
              <motion.div
                key={tile.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="shadow-md hover:shadow-xl rounded bg-white transition overflow-hidden"
              >
                <figure className="h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="p-4">
                  <h2 className="font-bold text-lg truncate">{tile.title}</h2>
                  <p className="text-sm text-gray-500">{tile.category}</p>
                  <div className="mt-4">
                    <Link
                      href={`/all-tiles/tile/${tile.id}`}
                      className="btn bg-[#FF5F00] hover:bg-[#e05400] text-white border-none rounded-sm btn-sm w-full transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllTilesPage;

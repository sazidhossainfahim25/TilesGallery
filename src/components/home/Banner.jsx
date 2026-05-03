import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="h-150 md:h-200 flex items-center justify-center relative overflow-hidden bg-[url('/images/banner1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
          Discover Your <br />
          <span className="text-[#FF5F00]">Perfect</span> Aesthetic
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Explore our Premium Tile Collection for Modern Homes and Luxury Living.
        </p>

        <button className="mt-8 px-10 py-4 bg-[#FF5F00] text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-[#FF5F00] transition-all shadow-xl active:scale-95">
          <Link
           href="/all-tiles">Browse Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;

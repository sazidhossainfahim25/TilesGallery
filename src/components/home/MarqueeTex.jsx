import { getTiles } from '@/lib/getTiles';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTex = async () => {
  const data = await getTiles();

  return (
    <div className="lg:p-8 p-4 mt-4 backdrop-blur-md border-amber-50 bg-gradient-to-r from-[#fdfbfb] via-[#fffbeb] to-[#fdfbfb] ">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {data?.map((tile) => (
          <span
            key={tile.id}
            className="text-xl sm:text-xl md:text-4xl font-extrabold text-black uppercase mx-6 md:mx-12 opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default tracking-tighter"
          >
            {tile.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTex;

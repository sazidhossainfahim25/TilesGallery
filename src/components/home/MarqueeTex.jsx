import { getTiles } from '@/lib/getTiles';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTex = async () => {
  const data = await getTiles() || [];

  return (
    <div className=" p-2 lg:p-6 bg-gradient-to-r from-[#ffffff] to-[#f8e8e8] to-[#ffffff] ">
      <Marquee speed={50} gradient={true} gradientWidth={50}>
        {data?.map((tile) => (
          <span
            key={tile.id}
            className="text-[16px] sm:text-2xl md:text-4xl font-bold text-[#000] uppercase mx-4 md:mx-9 opacity-40"
          >
            {' '}
            {tile.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTex;

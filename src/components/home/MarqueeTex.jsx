import { getTiles } from '@/lib/getTiles';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTex = async () => {
  const data = await getTiles('http://127.0.0.1:5000/tiles');

  return (
    <div className="lg:py-6 py-1 md:py-4 bg-linear-to-r from-[#fff] via-[#faccb2] to-[#fff]">
      <Marquee speed={50} gradient={true} gradientWidth={50}>
        {data?.map((tile) => (
          <span
            key={tile.id}
            className="text-[16px] sm:text-2xl md:text-4xl font-bold text-black uppercase mx-4 md:mx-9"
          >
            {tile.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTex;

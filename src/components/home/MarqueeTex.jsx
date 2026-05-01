import { getTiles } from '@/lib/getTiles';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTex = async () => {
  const data = await getTiles('http://127.0.0.1:5000/tiles');

  return (
    <div className=" container">
      <Marquee speed={50} gradient={false} gradientWidth={50}>
        {data?.map((tile) => (
          <span
            key={tile.id}
            className="text-[16px] sm:text-2xl md:text-4xl font-bold text-[#FFf] uppercase mx-4 md:mx-9 opacity-60"
          >
            New Arrivals: {tile.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTex;

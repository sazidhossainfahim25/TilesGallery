'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-semibold  transition-all
        px-2 py-1 
        
        ${isActive ? 'text-orange-500 border-[#e1810b] border-b-2 ' : 'text-white'}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;

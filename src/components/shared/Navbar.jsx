'use client';
import Image from 'next/image';
import React from 'react';
import MyLink from './MyLink';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/all-tiles',
      text: 'All Tiles',
    },
    {
      path: '/my-profile',
      text: 'My Profile',
    },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => {
                return (
                  <MyLink key={index} href={item.path}>
                    <span className="flex items-center gap-2 font-semibold">{item.text}</span>
                  </MyLink>
                );
              })}
            </ul>
          </div>
          <div>
            <Image src="/logo1.png" alt="logo" width={70} height={70} className=" object-contain" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => {
              return (
                <MyLink key={index} href={item.path}>
                  <span className="flex items-center gap-2 text-[16px] font-semibold">
                    {item.text}
                  </span>
                </MyLink>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn rounded-full bg-white/10 border-white/20 shadow-lg text-white"
          >
            <Link href="/login">logIn</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn rounded-full bg-white/10 border-white/20 shadow-lg text-white"
          >
            <Link href="/register">Register</Link>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
'use client';
import Image from 'next/image';
import React from 'react';
import MyLink from './MyLink';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { CgLogIn } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const router = useRouter();
  const userDate = authClient.useSession();
  const user = userDate.data?.user;

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/all-tiles', text: 'All Tiles' },
    { path: '/my-profile', text: 'My Profile' },
    { path: '/price', text: 'Price' },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/');
        },
      },
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A] backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden p-0 mr-4">
              <HiOutlineMenuAlt3 className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0F172A] rounded-2xl z-[1] mt-4 w-60 p-4 shadow-2xl border border-white/10 backdrop-blur-2xl"
            >
              {navItems.map((item, index) => (
                <li key={index} className="mb-1">
                  <MyLink href={item.path}>
                    <span className="text-white/80 hover:text-orange-500 font-medium py-2 transition-colors">
                      {item.text}
                    </span>
                  </MyLink>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo1.png"
              alt="Tiles Gallery Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <MyLink href={item.path}>
                  <span className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest transition-all duration-300">
                    {item.text}
                  </span>
                </MyLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-4">
          {!user ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="btn btn-sm md:btn-md rounded-full bg-orange-600 hover:bg-orange-700 border-none text-white px-6 shadow-lg transition-all"
              >
                Login <CgLogIn className="text-lg" />
              </Link>
            </motion.div>
          ) : (
            <div className="flex items-center gap-4">
              {/* Profile Avatar */}
              <div className="avatar">
                <div className="w-10 h-10 rounded-full ring-2 ring-white/20 overflow-hidden relative shadow-inner">
                  {user?.image || user?.picture ? (
                    <Image
                      src={user.image || user.picture}
                      alt="Profile"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-orange-600 flex items-center justify-center text-white font-black">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  )}
                </div>
              </div>

              {/* Logout Button */}
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-sm md:btn-md rounded-full bg-red-600 hover:bg-red-700 border-none text-white px-3 shadow-lg flex items-center gap-1 transition-all"
              >
                <span className="sm:inline font-smibold text-[12px] tracking-wider">
                  Logout
                </span>
                <BiLogOut />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

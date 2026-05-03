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

const Navbar = () => {
  const router = useRouter();
  const userDate = authClient.useSession();
  const user = userDate.data?.user;

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/all-tiles', text: 'All Tiles' },
    { path: '/my-profile', text: 'My Profile' },
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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black/20 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <MyLink key={index} href={item.path}>
                  <span className="flex items-center gap-2 font-semibold text-white">
                    {item.text}
                  </span>
                </MyLink>
              ))}
            </ul>
          </div>
          <div>
            <Image src="/logo1.png" alt="logo" width={70} height={70} className="object-contain" />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <MyLink key={index} href={item.path}>
                <span className="flex items-center gap-2 text-[16px] font-semibold text-white">
                  {item.text}
                </span>
              </MyLink>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {!user ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="btn btn-sm md:btn-md rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Login <CgLogIn />
              </Link>
            </motion.div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full ring ring-white/20 overflow-hidden relative bg-white/10 flex items-center justify-center">
                  {user?.image || user?.picture ? (
                    <Image
                      src={user.image || user.picture}
                      alt="User Avatar"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold uppercase pointer-events-none">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
              </div>

              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-sm md:btn-md rounded-full bg-red-500/20 border-red-500/40 text-red-200 hover:bg-red-500/40 transition-all"
              >
                LogOut <BiLogOut />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 backdrop-blur-md pt-12 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1. About Section  */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Tiles<span className="text-[#FF5F00]">Gallery</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the art of aesthetics. We bring you a curated collection of premium ceramic,
              marble, and modern geometric tiles to transform your living spaces into a masterpiece.
            </p>
          </div>

          {/* 2. Social Media Links  */}
          <div className="md:text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex md:justify-center gap-4">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaTwitter />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaLinkedinIn />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/20 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 3. Contact Us Section  */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#a09894]" />
                <span>support@tilesgallery.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#a09894]" />
                <span>+88018908908</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#a09894]" />
                <span>mirpur-1,Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p> Tiles Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

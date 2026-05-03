'use client';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

    if (error) {
      toast.error(error.message || 'Login failed!');
    } else {
      toast.success('Login Successful! Welcome back.');
    }
  };

  const handlGoogleLogin = async () => {
    try {
      await authClient.signIn.social({ provider: 'google' });
    } catch (err) {
      toast.error('Google login failed!');
    }
  };

  return (
    <div className="min-h-screen py-10 lg:py-16 flex items-center justify-center relative overflow-hidden bg-[url('/images/banner1.jpg')] bg-cover bg-center">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[90%] sm:max-w-md lg:max-w-lg mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
          <form onSubmit={handleLogin} className="p-8 lg:p-10 flex flex-col gap-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 text-sm mt-1">Please enter your details to login</p>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-gray-800">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-black border-gray-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label flex justify-between">
                <span className="label-text font-bold text-gray-800">Password</span>
                <span className="text-xs text-orange-600 hover:underline cursor-pointer">
                  Forgot?
                </span>
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-black border-gray-300"
                placeholder=" Enter your password"
                autoComplete="new-password"
                required
              />
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn bg-[#0F172A] hover:bg-black text-white border-none text-lg shadow-lg"
                type="submit"
              >
                Sign In
              </motion.button>

              <div className="divider text-gray-400 text-xs uppercase tracking-widest my-2">
                or continue with
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlGoogleLogin}
                className="btn btn-outline border-gray-300 hover:bg-gray-50 text-gray-700 w-full flex items-center justify-center gap-3 transition-colors"
                type="button"
              >
                <FcGoogle className="text-2xl" />
                <span>Google Account</span>
              </motion.button>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Don't have an account?
                <Link href="/register" className="text-orange-600 font-bold ml-1 hover:underline">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

'use client';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      toast.error(error.message || 'Register failed!');
    } else {
      toast.success('Registration Successful');
      router.push('/');
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
    <section className="mt-10">
      <div className="min-h-screen py-10 lg:py-16 flex items-center justify-center relative overflow-hidden bg-[url('/images/bg-2.jpg')] bg-cover bg-center">
        {/* Overlay for glass effect contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-[90%] sm:max-w-md lg:max-w-xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
            <form onSubmit={onSubmit} className="p-6 sm:p-10 flex flex-col gap-4">
              <div className="text-center mb-2">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h2>
                <p className="text-gray-600 text-[12px] mt-1">
                  Join Tiles Gallery to start your journey
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-gray-800">Full Name *</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered w-full bg-white focus:border-orange-500 transition-all text-black border-gray-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-gray-800">Email Address *</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered w-full bg-white focus:border-orange-500 transition-all text-black border-gray-300"
                    placeholder="Enter you email"
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-gray-800">Profile Image URL</span>
                </label>
                <input
                  name="image"
                  type="text"
                  className="input input-bordered w-full bg-white focus:border-orange-500 transition-all text-black border-gray-300"
                  placeholder="image url"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-gray-800">Password *</span>
                </label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full bg-white focus:border-orange-500 transition-all text-black border-gray-300"
                  placeholder=" Enter your password"
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn bg-[#0F172A] hover:bg-black text-white border-none text-lg shadow-md"
                  type="submit"
                >
                  Create Account
                </motion.button>

                <div className="divider text-gray-400 text-xs uppercase tracking-widest my-1">
                  OR
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handlGoogleLogin}
                  className="btn btn-outline border-gray-300 bg-white hover:bg-gray-50 text-gray-700 w-full flex items-center justify-center gap-3"
                  type="button"
                >
                  <FcGoogle className="text-2xl" />
                  <span>Continue with Google</span>
                </motion.button>

                <p className="text-center text-gray-600 mt-4 text-sm">
                  Already have an account?
                  <Link href="/login" className="text-orange-600 font-bold ml-1 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterPage;

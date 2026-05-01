import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  return (
    <div className="min-h-screen py-10 lg:py-16 flex items-center justify-center relative overflow-hidden bg-[url('/images/banner1.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-[80%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
          <form className="p-6 sm:p-8 lg:p-10 flex flex-col lg:gap-4 gap-1">
            <h2 className="text-2xl font-bold text-center text-black mb-2">Login</h2>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">Email *</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full bg-white/80 focus:bg-white transition-all"
                placeholder="Enter your Email"
                required
              />
            </div>
            {/* password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">
                  Password *
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full bg-white/80 focus:bg-white transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:gap-3 gap-1 lg:mt-4 mt-2">
              <button className="btn btn-neutral w-full text-lg shadow-md" type="submit">
                Login
              </button>
              <div className="divider text-black/70 my-0">or</div>

              <button
                className="btn  btn-active hover:bg-gray-100 w-full flex items-center justify-center gap-2 "
                type="button"
              >
                <Link href="/register">Register</Link>
              </button>

                <button
                  className="btn  btn-active hover:bg-gray-100 w-full flex items-center justify-center gap-2 border-gray-300"
                  type="button"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-black">Login with Google</span>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

'use client';

import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

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
    const handlGoogleLogin = async() =>{
        await authClient.signIn.social({ provider: 'google' });
    }

  return (
    <div className="min-h-screen py-10 lg:py-10 flex items-center justify-center relative overflow-hidden bg-[url('/images/bg-2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-[80%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
          <form onSubmit={onSubmit} className="p-4 sm:p-8 lg:p-10 flex flex-col lg:gap-4 gap-1">
            <h2 className="text-2xl font-bold text-center text-black mb-2">Create Account</h2>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">Name *</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full bg-white/80 focus:bg-white transition-all text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">Email *</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full bg-white/80 focus:bg-white transition-all text-black"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">
                  Image url
                </span>
              </label>
              <input
                name="image"
                type="text"
                className="input input-bordered w-full bg-white/80 focus:bg-white transition-all text-black"
                placeholder="image url"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">
                  Password *
                </span>
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full bg-white/80 focus:bg-white transition-all text-black"
                placeholder="PASSWORD"
                required
              />
            </div>

            <div className="flex flex-col lg:gap-2 gap-1 mt-2">
              <button className="btn btn-neutral w-full text-lg shadow-md" type="submit">
                Register
              </button>

              <div className="divider text-black/70 my-0">or</div>

              <button
                className="btn btn-outline bg-white hover:bg-gray-100 w-full flex items-center justify-center gap-2 border-gray-300"
                type="button"
                onClick={handlGoogleLogin}
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

export default RegisterPage;

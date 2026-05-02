'use client';
import Image from 'next/image';

const UserProfilePage = () => {

  return (
    <div className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden bg-[url('/images/bg-2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full max-w-[90%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
        <p>hi </p>
        </div>
      </div>

      
    </div>
  );
};

export default UserProfilePage;

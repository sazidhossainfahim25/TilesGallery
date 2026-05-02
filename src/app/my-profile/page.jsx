'use client';
import Image from 'next/image';

const UserProfilePage = () => {

  return (
    <div className="min-h-screen py-10 lg:py-16 flex items-center justify-center relative overflow-hidden bg-[url('/images/banner1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-[80%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
          <form className="p-6 sm:p-8 lg:p-10 flex flex-col lg:gap-4 gap-1">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

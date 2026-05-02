'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const UserProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen py-10 lg:py-16 flex items-center justify-center relative overflow-hidden bg-[url('/images/banner1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-[80%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
          <form className="p-6 sm:p-8 lg:p-10 flex flex-col items-center lg:gap-4 gap-1">
            <div className="avatar">
              <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden relative bg-white/10 flex items-center justify-center">
                {user?.image || user?.picture ? (
                  <Image
                    src={user.image || user.picture}
                    alt="User Avatar"
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-white text-3xl font-bold">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                )}
              </div>
            </div>

            <h2 className="text-white text-xl font-semibold mt-4">{user?.name || 'Guest User'}</h2>
            <p className="text-white/70">{user?.email}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

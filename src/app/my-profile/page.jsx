'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const UserProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <section className="pt-20 bg-amber-50 min-h-screen">
      <div className="py-10 lg:py-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[90%] sm:max-w-md lg:max-w-xl mx-auto"
        >
          <div className="bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              
            />

            <div className="p-8 sm:p-12 flex flex-col items-center">
              {/* Profile Image */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                <div className="w-32 h-32 rounded-full ring-4 ring-orange-500/30 p-1 overflow-hidden bg-white/5 relative shadow-[0_0_25px_rgba(249,115,22,0.2)]">
                  {user?.image || user?.picture ? (
                    <Image
                      src={user.image || user.picture}
                      alt="User Avatar"
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-600">
                      <span className="text-white text-4xl font-bold">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                  )}
                </div>
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[#0F172A] rounded-full shadow-lg"></div>
              </motion.div>

              <div className="text-center mt-6 space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-3xl font-bold tracking-tight"
                >
                  {user?.name || 'Guest User'}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 text-lg font-medium"
                >
                  {user?.email}
                </motion.p>
              </div>

              {/*  Cards */}
              <div className="w-full mt-10 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <p className="text-orange-500 text-xs uppercase font-bold tracking-wider">
                    Status
                  </p>
                  <p className="text-white font-medium">Active Member</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <p className="text-orange-500 text-xs uppercase font-bold tracking-wider">Role</p>
                  <p className="text-white font-medium">User</p>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="mt-8 w-full py-3 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                EDIT PROFILE
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserProfilePage;

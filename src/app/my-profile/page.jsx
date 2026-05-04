'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';

const UserProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    // authClient update logic here
    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message || 'Update failed');
    } else {
      toast.success('Profile Updated Successfully!');
      setIsModalOpen(false);
    }
  };

  return (
    <section className="pt-20 bg-amber-50  relative">
      <div className="py-5 lg:py-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[90%] sm:max-w-md lg:max-w-xl mx-auto"
        >
          <div className="bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            <div className="p-8 sm:p-12 flex flex-col items-center">
              {/* Profile Image */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                <div className="w-32 h-32 rounded-full ring-4 ring-orange-500/30 p-1 overflow-hidden bg-white/5 relative">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="User Avatar"
                      fill
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
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[#0F172A] rounded-full"></div>
              </motion.div>
              <div className='text-center space-y-1 mt-2'>
                <h2 className="text-white text-2xl font-bold">{user?.name}</h2>
                <h2 className="text-white text-[12px] font-samibold">{user?.email}</h2>
              </div>

              {/* Edit Profile Button Trigger */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="mt-8 w-full py-3 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg uppercase tracking-widest text-xs"
              >
                Edit Profile
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- EDIT PROFILE MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#0F172A] border border-white/10 w-full max-w-md p-8 rounded-3xl shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
                Update Profile
              </h2>

              <form onSubmit={handleUpdate} className="space-y-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                      Full Name
                    </span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter new name"
                    className="input input-bordered w-full bg-white/5 border-white/10 text-white focus:border-orange-500 transition-all"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                      Profile Image URL
                    </span>
                  </label>
                  <input
                    name="image"
                    type="text"
                    placeholder="image url"
                    className="input input-bordered w-full bg-white/5 border-white/10 text-white focus:border-orange-500 transition-all"
                  />
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all text-xs uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all text-xs uppercase shadow-lg shadow-orange-900/20"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UserProfilePage;

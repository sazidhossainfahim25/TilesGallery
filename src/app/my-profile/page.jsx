'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const UserProfilePage = () => {
  const userDate = authClient.useSession();
  const user = userDate.data?.user;
  const modalRef = useRef(null);

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setImageUrl(user.image || user.picture || '');
    }
  }, [user]);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleUpdate = async () => {
    console.log('Updating:', { name, imageUrl });
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden bg-[url('/images/bg-2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full max-w-[90%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-10 flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-24 h-24 rounded-full ring ring-white/20 overflow-hidden relative bg-white/10 flex items-center justify-center">
                {user?.image || user?.picture ? (
                  <Image
                    src={user.image || user.picture}
                    alt="User Avatar"
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold text-white uppercase">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                )}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white uppercase">{user?.name || 'User'}</h2>
              <p className="text-white/70 font-medium italic">{user?.email || ''}</p>
            </div>

            <div className="w-full mt-4">
              <button
                type="button"
                className="btn btn-primary w-full rounded-full border-none bg-white text-black hover:bg-white/80"
                onClick={handleOpenModal}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box bg-white">
          <h2 className="text-2xl font-bold text-center text-black mb-4">Edit your profile</h2>

          <div className="form-control w-full gap-4">
            <div>
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">Name *</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full bg-gray-50 text-black focus:bg-white transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text lg:text-[18px] font-semibold text-black">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="input input-bordered w-full bg-gray-50 text-black focus:bg-white transition-all"
                placeholder="Paste image url"
              />
            </div>
          </div>

          <div className="modal-action gap-2">
            <form method="dialog" className="flex gap-2 w-full justify-end">
              <button className="btn btn-primary px-8" onClick={handleUpdate}>
                Save
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UserProfilePage;

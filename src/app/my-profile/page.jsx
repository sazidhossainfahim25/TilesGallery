'use client';
import React, { useRef } from 'react';

const UserProfilePage = () => {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div className="min-h-screen py-10 flex items-center justify-center relative overflow-hidden bg-[url('/images/bg-2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full max-w-[90%] sm:max-w-md lg:max-w-xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-10 flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                  alt="Profile"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-black uppercase">NAME</h2>
              <p className="text-black/70 font-medium italic">EMAIL</p>
            </div>

            <div className="w-full mt-4">
              <button type="button" className="btn btn-primary w-full" onClick={handleOpenModal}>
                Open Modal
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box bg-white">
          <h2 className="text-2xl font-bold text-center text-black mb-2">Edit your profile</h2>
          {/* Name Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text lg:text-[18px] font-semibold text-black">Name *</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full bg-white/80 focus:bg-white transition-all"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* image url */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text lg:text-[18px] font-semibold text-black">Image url</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full bg-white/80 focus:bg-white transition-all"
              placeholder="image url"
              required
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">save</button>
            </form>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserProfilePage;

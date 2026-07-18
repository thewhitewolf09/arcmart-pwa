'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "Aman Gupta",
    phone: "+91 98765 43210",
    locality: "Indiranagar, Bangalore",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // In a real app, send data to backend here.
    // For now, just navigate back.
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-sm font-bold text-on-surface">Edit Profile</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-surface flex items-center justify-center text-primary font-bold text-3xl shadow-sm">
              {formData.name.charAt(0) || 'U'}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center border-2 border-surface shadow-sm hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[16px]">add_a_photo</span>
            </button>
          </div>
        </div>

        <form className="flex flex-col gap-5 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md font-bold text-on-surface ml-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-md font-bold text-on-surface ml-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <p className="font-body-sm text-on-surface-variant ml-1 mt-1 text-[12px]">Used for WhatsApp connections and SMS updates.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-md font-bold text-on-surface ml-1">Locality / Area</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
              <input 
                type="text" 
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 pl-12 font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
        </form>
      </main>

      <div className="p-4 bg-surface border-t border-outline-variant/30 pb-safe">
        <button 
          onClick={handleSave}
          className="w-full py-4 rounded-full bg-primary text-on-primary font-label-lg font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

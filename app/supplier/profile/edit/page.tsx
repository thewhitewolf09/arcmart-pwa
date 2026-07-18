'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';

export default function EditBusinessInfo() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    businessName: 'Jai Durga Tiles & Granite',
    ownerName: 'Jai Sharma',
    phone: '+91 98765 43210',
    address: 'Sector 18, Noida, UP',
    description: 'Premium supplier of double charged vitrified tiles, ceramic wall tiles, and granite slabs. Serving the NCR region for over 10 years with assured quality and timely delivery.'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Save logic would go here
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Edit Business Info</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <div className="space-y-6">
          
          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2.5 left-3 bg-surface px-1">
              Business Name
            </label>
            <input 
              type="text" 
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-outline-variant rounded-xl text-on-surface font-semibold focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2.5 left-3 bg-surface px-1">
              Owner Name
            </label>
            <input 
              type="text" 
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-outline-variant rounded-xl text-on-surface font-semibold focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2.5 left-3 bg-surface px-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-outline-variant rounded-xl text-on-surface font-semibold focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2.5 left-3 bg-surface px-1">
              Address / Locality
            </label>
            <input 
              type="text" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-outline-variant rounded-xl text-on-surface font-semibold focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant absolute -top-2.5 left-3 bg-surface px-1">
              Business Description
            </label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-transparent border-2 border-outline-variant rounded-xl text-on-surface font-semibold focus:outline-none focus:border-primary transition resize-none"
            />
          </div>

        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Save Changes
        </button>
      </div>
    </div>
  );
}

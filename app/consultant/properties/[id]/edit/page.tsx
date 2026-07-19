'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Trash2, Save, MapPin, IndianRupee, Camera, Home, Ruler } from 'lucide-react';

export default function EditProperty({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Edit Property {params.id}</span>
        </div>
        <button className="p-2 -mr-2 rounded-full hover:bg-error/10 text-error transition">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Photo Upload */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Property Photos</label>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square bg-surface-variant rounded-2xl flex flex-col items-center justify-center overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=300" alt="Cover" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition cursor-pointer">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <button className="aspect-square bg-surface border border-outline-variant rounded-2xl flex items-center justify-center text-outline transition">
              <Camera className="w-5 h-5 opacity-50" />
            </button>
            <button className="aspect-square bg-surface border border-outline-variant rounded-2xl flex items-center justify-center text-outline transition">
              <Camera className="w-5 h-5 opacity-50" />
            </button>
          </div>
        </div>

        {/* Basic Details */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Listing Type</label>
          <div className="flex bg-surface-variant rounded-xl p-1 mb-4 border border-outline-variant">
            <button className="flex-1 py-2 text-sm font-bold rounded-lg bg-surface text-on-surface shadow-sm">For Sale</button>
            <button className="flex-1 py-2 text-sm font-bold rounded-lg text-on-surface-variant">For Rent</button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Title</label>
            <input 
              type="text" 
              defaultValue="Luxury 3BHK in Cleo County"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Location</label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                defaultValue="Sector 121, Noida"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-11 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Price / Rent</label>
            <div className="relative">
              <IndianRupee className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="number" 
                defaultValue="18500000"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-11 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
              />
            </div>
          </div>
        </div>

        {/* Specs */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1 mt-2">Specifications</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <Home className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
                <select defaultValue="3 BHK" className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-11 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </div>
            </div>
            <div>
              <div className="relative">
                <Ruler className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
                <input 
                  type="text" 
                  defaultValue="1650"
                  className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-11 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Description</label>
          <textarea 
            rows={4}
            defaultValue="Beautiful 3BHK on the 10th floor with park view. Woodwork completed in all rooms."
            className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition resize-none"
          ></textarea>
        </div>
        
        {/* Active Toggle */}
        <label className="flex items-center justify-between bg-surface-variant/30 border border-outline-variant rounded-2xl p-4 cursor-pointer hover:bg-surface-variant/50 transition">
          <div>
            <span className="text-sm font-bold text-on-surface block mb-1">Listing Status</span>
            <span className="text-xs text-on-surface-variant">Turn off to hide from buyers</span>
          </div>
          <div className="w-12 h-6 rounded-full bg-success relative">
            <div className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full transition-transform shadow-sm"></div>
          </div>
        </label>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/consultant/properties')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Save Changes <Save className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

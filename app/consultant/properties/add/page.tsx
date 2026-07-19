'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, Send, MapPin, IndianRupee, Home, Ruler } from 'lucide-react';

export default function AddProperty() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Add Property</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Photo Upload */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Property Photos</label>
          <div className="grid grid-cols-3 gap-3">
            <button className="aspect-square bg-surface-variant border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center justify-center hover:bg-outline-variant/30 transition text-on-surface-variant">
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold">Add Cover</span>
            </button>
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
              placeholder="e.g. Luxury 3BHK in Cleo County"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 ml-1">Location</label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="e.g. Sector 121, Noida"
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
                placeholder="e.g. 18500000"
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
                <select className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-11 pr-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
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
                  placeholder="Sq. Ft."
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
            placeholder="Property details, amenities, facing..."
            className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3.5 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition resize-none"
          ></textarea>
        </div>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/consultant/properties')}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
        >
          Post Listing <Send className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

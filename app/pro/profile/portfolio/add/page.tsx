'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Image as ImageIcon, Plus, CheckCircle2, MapPin, Tag } from 'lucide-react';

export default function AddPortfolio() {
  const router = useRouter();
  const [photoSelected, setPhotoSelected] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Add to Portfolio</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        {/* Photo Upload Area */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Work Photo</h3>
          <button 
            onClick={() => setPhotoSelected(true)}
            className="w-full h-48 border-2 border-dashed border-outline-variant rounded-2xl bg-surface-variant flex flex-col items-center justify-center hover:bg-outline-variant/30 transition relative overflow-hidden group"
          >
            {photoSelected ? (
              <div className="w-full h-full bg-primary/20 flex flex-col items-center justify-center text-primary">
                 <span className="text-6xl font-black mb-2">P</span>
                 <span className="text-xs font-bold">Photo Selected</span>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-bold text-on-surface">Tap to upload photo</p>
                <p className="text-[10px] text-on-surface-variant font-semibold mt-1">PNG, JPG up to 5MB</p>
              </>
            )}
          </button>
        </section>

        {/* Details Form */}
        <section className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Project Title
            </label>
            <input 
              type="text" 
              placeholder="e.g. Master Bathroom Renovation"
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Category
            </label>
            <div className="relative">
              <Tag className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <select className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary transition appearance-none">
                <option value="" disabled selected>Select Category</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Carpentry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Location
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="e.g. Sector 50, Noida"
                className="w-full bg-surface glass-card border border-outline-variant rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
              Description (Optional)
            </label>
            <textarea 
              placeholder="Describe the work done..."
              rows={3}
              className="w-full bg-surface glass-card border border-outline-variant rounded-xl px-4 py-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
            ></textarea>
          </div>
        </section>

      </div>

      {/* Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => router.push('/pro/profile/portfolio')}
          disabled={!photoSelected}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5 mr-2" /> Add to Portfolio
        </button>
      </div>
    </div>
  );
}

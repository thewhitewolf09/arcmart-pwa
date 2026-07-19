'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Share2, Copy, ShieldCheck, Star } from 'lucide-react';

export default function ShareProfileScreen({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center p-6 pb-32">
        <h1 className="text-2xl font-black text-on-surface mb-6">Share Profile</h1>
        
        {/* Shareable Card */}
        <div className="w-full max-w-sm bg-surface border border-outline-variant rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-primary"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center mt-6">
            <div className="w-24 h-24 bg-surface rounded-full p-1 shadow-md mb-4 relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop" alt="Rohan Gupta" className="w-full h-full object-cover rounded-full" />
              <div className="absolute bottom-0 right-0 bg-surface rounded-full p-0.5">
                <ShieldCheck className="w-5 h-5 text-success" />
              </div>
            </div>
            
            <h2 className="text-xl font-black text-on-surface">Rohan Gupta</h2>
            <p className="text-sm font-bold text-primary mt-1">Real Estate Expert</p>
            
            <div className="flex items-center justify-center space-x-4 mt-4 w-full">
              <div className="text-center">
                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Rating</p>
                <p className="font-bold text-on-surface flex items-center justify-center mt-1">
                  4.8 <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 ml-1" />
                </p>
              </div>
              <div className="w-px h-8 bg-outline-variant"></div>
              <div className="text-center">
                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Experience</p>
                <p className="font-bold text-on-surface mt-1">8 Years</p>
              </div>
            </div>
            
            <div className="mt-8 bg-surface-dim p-4 rounded-2xl w-full border border-outline-variant/50">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://arcmart.com/profile/1" alt="QR Code" className="w-32 h-32 mx-auto mix-blend-multiply" />
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-4">Scan to view profile on ArcMart</p>
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 space-y-3">
        <button 
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          <Share2 className="w-5 h-5 mr-2" /> Share via WhatsApp
        </button>
        <button 
          className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
        >
          <Copy className="w-5 h-5 mr-2" /> Copy Link
        </button>
      </div>
    </div>
  );
}

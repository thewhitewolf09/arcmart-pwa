'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MapPinOff, Bell, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CityUnavailableScreen() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6 pb-32">
        
        <div className="w-24 h-24 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-2">
          <MapPinOff className="w-12 h-12 text-on-surface-variant" />
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2">Not in your city yet!</h1>
        <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
          We are expanding rapidly, but ArcMart isn't currently available in <span className="font-bold text-on-surface">Pune</span>. 
        </p>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 space-y-3">
        <button 
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          <Bell className="w-5 h-5 mr-2" /> Notify me when you arrive
        </button>
        <Link 
          href="/discover"
          className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
        >
          Explore Other Cities
        </Link>
      </div>
    </div>
  );
}

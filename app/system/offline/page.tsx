'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { WifiOff, RefreshCcw } from 'lucide-react';

export default function OfflineScreen() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className="w-24 h-24 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-2 relative">
          <WifiOff className="w-12 h-12 text-on-surface-variant" />
          <div className="absolute top-0 right-0 w-6 h-6 bg-surface rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-error rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2">No Internet Connection</h1>
        <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
          You seem to be offline. Don't worry, your cached properties and recent chats are still accessible.
        </p>

        <div className="w-full max-w-sm glass-card border border-outline-variant rounded-3xl p-5 text-left mt-6">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Available Offline</h3>
          
          <ul className="space-y-3">
            <li className="flex items-center text-sm font-semibold text-on-surface">
              <div className="w-2 h-2 rounded-full bg-success mr-3"></div> Saved Properties
            </li>
            <li className="flex items-center text-sm font-semibold text-on-surface">
              <div className="w-2 h-2 rounded-full bg-success mr-3"></div> Recent Messages
            </li>
            <li className="flex items-center text-sm font-semibold text-on-surface opacity-50">
              <div className="w-2 h-2 rounded-full bg-outline-variant mr-3"></div> New Leads (Requires Network)
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 pb-safe bg-surface">
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          <RefreshCcw className="w-5 h-5 mr-2" /> Try Again
        </button>
      </div>
    </div>
  );
}

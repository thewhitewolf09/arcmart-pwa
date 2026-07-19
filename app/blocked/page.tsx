'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Ban, ArrowLeft } from 'lucide-react';

export default function BlockedUserPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-4 py-3 flex items-center pt-safe">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container transition-colors flex-shrink-0 text-on-surface">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pb-32">
        <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-6 shadow-sm border border-error/20">
          <Ban className="w-10 h-10 text-error" />
        </div>
        
        <h1 className="text-2xl font-black text-on-surface mb-3">User Unavailable</h1>
        <p className="text-sm font-medium text-on-surface-variant max-w-[280px] leading-relaxed mb-8">
          You cannot view this profile or send messages to this user because they have been blocked.
        </p>

        <button 
          onClick={() => router.push('/discover')}
          className="w-full max-w-[250px] h-14 bg-surface-container-highest hover:bg-outline-variant text-on-surface font-bold rounded-xl transition shadow-sm active:scale-95"
        >
          Back to Discover
        </button>
      </div>
    </div>
  );
}

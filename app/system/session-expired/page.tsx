'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SessionExpiredScreen() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className="w-24 h-24 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
          <LogOut className="w-12 h-12 text-warning-dark" />
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2">Session Expired</h1>
        <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
          For your security, you have been logged out because your session expired or you logged in on another device.
        </p>

      </div>

      <div className="p-4 pb-safe bg-surface space-y-3">
        <Link 
          href="/auth"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Log In Again <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShieldAlert, User, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function AccountConflictScreen() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6 pb-24">
        
        <div className="w-24 h-24 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2 relative">
          <ShieldAlert className="w-12 h-12 text-warning-dark" />
        </div>
        
        <h1 className="text-3xl font-black text-on-surface mb-2">Account Conflict</h1>
        <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
          The phone number <span className="font-bold text-on-surface">+91 98765 43210</span> is already registered as a <span className="font-bold text-on-surface">Service Professional</span>.
        </p>

        <div className="w-full max-w-sm space-y-4 mt-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 text-left ml-1">How would you like to proceed?</p>
          
          <button onClick={() => router.push('/pro')} className="w-full glass-card border-2 border-outline-variant rounded-2xl p-5 flex items-center justify-between text-left hover:border-primary/50 transition">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                <Briefcase className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Login as Professional</p>
                <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Access your existing dashboard</p>
              </div>
            </div>
          </button>

          <button onClick={() => router.push('/')} className="w-full glass-card border-2 border-outline-variant rounded-2xl p-5 flex items-center justify-between text-left hover:border-primary/50 transition">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Continue as Homeowner</p>
                <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Use same number for a new homeowner profile</p>
              </div>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

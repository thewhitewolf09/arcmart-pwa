'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantPending() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        
        <div className={`transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <Clock className="w-12 h-12 text-primary" />
            <div className="absolute top-0 right-0 w-6 h-6 bg-surface rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-black text-on-surface mb-3">Application Submitted</h1>
          <p className="text-on-surface-variant font-medium leading-relaxed max-w-[280px] mx-auto">
            Our team is reviewing your profile and verification documents. This usually takes less than 24 hours.
          </p>
        </div>

        <div className={`w-full max-w-sm glass-card border border-outline-variant rounded-3xl p-6 text-left transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">What's Next?</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-3">
                <span className="font-black text-primary text-sm">1</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Profile Review</p>
                <p className="text-xs text-on-surface-variant">We verify your RERA details and expertise.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-3">
                <span className="font-black text-primary text-sm">2</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">WhatsApp Update</p>
                <p className="text-xs text-on-surface-variant">You will get a message as soon as you are approved.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-3">
                <span className="font-black text-primary text-sm">3</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">Start Getting Leads</p>
                <p className="text-xs text-on-surface-variant">Your first 5 leads are free to get you started!</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant z-30 space-y-3">
        <button 
          className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
        >
          <MessageCircle className="w-5 h-5 mr-2" /> Contact Support
        </button>
        
        {/* Developer Mock Links */}
        <div className="flex gap-2 justify-center pt-2 opacity-50 hover:opacity-100">
          <Link href="/consultant/onboarding/approved" className="text-xs font-mono text-primary underline">See Approved</Link>
          <Link href="/consultant/onboarding/rejected" className="text-xs font-mono text-error underline">See Rejected</Link>
        </div>
      </div>
    </div>
  );
}

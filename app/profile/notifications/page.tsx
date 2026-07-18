'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function ToggleSwitch({ label, description, initialChecked = true }: any) {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <div className="flex items-center justify-between py-4 border-b border-outline-variant/30 last:border-0">
      <div className="flex-1 pr-4">
        <h3 className="font-label-lg font-bold text-on-surface mb-1">{label}</h3>
        <p className="font-body-sm text-on-surface-variant leading-tight">{description}</p>
      </div>
      <button 
        onClick={() => setChecked(!checked)}
        className={`w-12 h-6 rounded-full relative transition-colors ${checked ? 'bg-primary' : 'bg-surface-container-highest'}`}
      >
        <motion.div 
          className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm"
          animate={{ left: checked ? 'calc(100% - 22px)' : '2px' }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
}

export default function NotificationsPreferencesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm font-bold text-on-surface">Notifications</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 shadow-sm mb-6">
          <h2 className="font-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Updates & Alerts</h2>
          
          <ToggleSwitch 
            label="Lead Updates" 
            description="Get notified when professionals respond to your inquiries." 
            initialChecked={true} 
          />
          <ToggleSwitch 
            label="Review Requests" 
            description="Reminders to review professionals after a job is completed." 
            initialChecked={true} 
          />
          <ToggleSwitch 
            label="New Pros in Area" 
            description="Discover highly-rated new professionals joining your locality." 
            initialChecked={false} 
          />
        </div>
        
        <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 shadow-sm">
          <h2 className="font-label-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Communication Methods</h2>
          
          <ToggleSwitch 
            label="Push Notifications" 
            description="Receive instant alerts on your device." 
            initialChecked={true} 
          />
          <ToggleSwitch 
            label="Email Updates" 
            description="Weekly summaries and important account alerts." 
            initialChecked={true} 
          />
        </div>
      </main>
    </div>
  );
}

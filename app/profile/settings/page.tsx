'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AccountSettingsPage() {
  const router = useRouter();
  
  const [language, setLanguage] = useState('English');
  const [promosEnabled, setPromosEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-sm font-bold text-on-surface">Account Settings</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-6">
          
          {/* General Section */}
          <section>
            <h2 className="font-label-md font-bold text-primary mb-3 uppercase tracking-wider">General</h2>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => router.push('/profile/edit')}
                className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">person</span>
                  <div>
                    <span className="font-label-lg text-on-surface block">Personal Details</span>
                    <span className="font-body-sm text-on-surface-variant">Name, Phone, Email</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              
              <div className="w-full flex items-center justify-between p-4 bg-transparent border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">language</span>
                  <div>
                    <span className="font-label-lg text-on-surface block">Language</span>
                    <span className="font-body-sm text-on-surface-variant">App Language</span>
                  </div>
                </div>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1 font-label-md text-on-surface focus:outline-none"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                </select>
              </div>

              <button 
                onClick={() => router.push('/discover/area/indiranagar')}
                className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                  <div>
                    <span className="font-label-lg text-on-surface block">Primary Locality</span>
                    <span className="font-body-sm text-on-surface-variant">Indiranagar, Bangalore</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
            </div>
          </section>

          {/* Preferences Section */}
          <section>
            <h2 className="font-label-md font-bold text-primary mb-3 uppercase tracking-wider">Preferences & Privacy</h2>
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => router.push('/profile/notifications')}
                className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                  <span className="font-label-lg text-on-surface">Notification Preferences</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              
              <button 
                onClick={() => router.push('/profile/settings/privacy')}
                className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">security</span>
                  <span className="font-label-lg text-on-surface">Privacy Settings</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>

              <div className="w-full flex items-center justify-between p-4 bg-transparent">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">campaign</span>
                  <div>
                    <span className="font-label-lg text-on-surface block">Promotional Offers</span>
                    <span className="font-body-sm text-on-surface-variant max-w-[200px]">Receive discounts and updates</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={promosEnabled} onChange={() => setPromosEnabled(!promosEnabled)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

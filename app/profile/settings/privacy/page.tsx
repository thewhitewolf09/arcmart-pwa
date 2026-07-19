'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivacySettingsPage() {
  const router = useRouter();
  
  const [sharePhone, setSharePhone] = useState(true);
  const [shareLocation, setShareLocation] = useState(true);

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
          <h1 className="font-headline-sm font-bold text-on-surface">Privacy & Security</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-32">
        
        {/* Data Sharing Section */}
        <section className="mb-6">
          <h2 className="font-label-md font-bold text-primary mb-3 uppercase tracking-wider">Data Shared with Professionals</h2>
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="w-full flex items-center justify-between p-4 bg-transparent border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">call</span>
                <div>
                  <span className="font-label-lg text-on-surface block">Share Phone Number</span>
                  <span className="font-body-sm text-on-surface-variant max-w-[200px]">Allow professionals to see your actual phone number</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={sharePhone} onChange={() => setSharePhone(!sharePhone)} className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="w-full flex items-center justify-between p-4 bg-transparent">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">my_location</span>
                <div>
                  <span className="font-label-lg text-on-surface block">Share Exact Location</span>
                  <span className="font-body-sm text-on-surface-variant max-w-[200px]">Share precise location for accurate service quotes</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={shareLocation} onChange={() => setShareLocation(!shareLocation)} className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        {/* DPDP & Data Download */}
        <section className="mb-6">
          <h2 className="font-label-md font-bold text-primary mb-3 uppercase tracking-wider">Data Management (DPDP Act)</h2>
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
            <button onClick={() => router.push('/profile/settings/privacy/download')} className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">download</span>
                <div>
                  <span className="font-label-lg text-on-surface block">Download My Data</span>
                  <span className="font-body-sm text-on-surface-variant">Request a copy of all your account data</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">policy</span>
                <div>
                  <span className="font-label-lg text-on-surface block">Privacy Policy</span>
                  <span className="font-body-sm text-on-surface-variant">Read our DPDP compliant policy</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">open_in_new</span>
            </button>
            <button onClick={() => router.push('/profile/settings/privacy/blocked')} className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">block</span>
                <div>
                  <span className="font-label-lg text-on-surface block">Blocked Users</span>
                  <span className="font-body-sm text-on-surface-variant">Manage accounts you have blocked</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section>
          <h2 className="font-label-md font-bold text-error mb-3 uppercase tracking-wider">Danger Zone</h2>
          <div className="bg-error/5 border border-error/20 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => router.push('/profile/delete-account')}
              className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-error/10 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error">delete_forever</span>
                <div>
                  <span className="font-label-lg text-error block font-bold">Delete Account</span>
                  <span className="font-body-sm text-error/80">Permanently delete your account and data</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-error">chevron_right</span>
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

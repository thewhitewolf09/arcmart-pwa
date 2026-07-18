'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function ReviewCard({ professionalName, date, rating, text }: any) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-label-md font-bold text-on-surface">For: {professionalName}</span>
        <span className="font-body-sm text-on-surface-variant text-[12px]">{date}</span>
      </div>
      <div className="flex items-center gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`material-symbols-outlined text-[14px] ${i < rating ? 'text-primary' : 'text-outline-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        ))}
      </div>
      <p className="font-body-sm text-on-surface-variant italic mb-3">"{text}"</p>
      <div className="flex justify-end">
        <button className="text-primary font-label-sm font-bold flex items-center gap-1 hover:underline">
          <span className="material-symbols-outlined text-[14px]">edit</span> Edit Review
        </button>
      </div>
    </div>
  );
}

export default function HomeownerProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'settings' | 'reviews'>('settings');

  const user = {
    name: "Aman Gupta",
    phone: "+91 98765 43210",
    locality: "Indiranagar, Bangalore",
    memberSince: "Aug 2023",
  };

  const reviewsGiven = [
    { id: 1, professionalName: "Ramesh Sharma", date: "Oct 25, 2023", rating: 5, text: "Excellent plumbing work. Fixed the leak quickly and cleanly." },
    { id: 2, professionalName: "Ajay Painters", date: "Sep 20, 2023", rating: 4, text: "Good work overall, but took a day longer than estimated." },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <header className="px-4 pt-12 pb-6 bg-surface border-b border-outline-variant/30 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <h1 className="font-headline-md font-bold text-on-surface">Profile</h1>
          <button 
            onClick={() => router.push('/profile/edit')}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* Profile Summary Card */}
        <div className="p-4">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-surface flex items-center justify-center mb-4 text-primary font-bold text-3xl">
              {user.name.charAt(0)}
            </div>
            <h2 className="font-headline-sm font-bold text-on-surface mb-1">{user.name}</h2>
            <p className="font-body-md text-on-surface-variant flex items-center justify-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[16px]">call</span> {user.phone}
            </p>
            <p className="font-body-sm text-on-surface-variant flex items-center justify-center gap-1 mb-4">
              <span className="material-symbols-outlined text-[16px]">location_on</span> {user.locality}
            </p>
            <div className="inline-block bg-surface-container px-3 py-1 rounded-full">
              <p className="font-label-sm font-bold text-on-surface-variant">Member since {user.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="px-4 mb-4">
          <div className="flex bg-surface-container-lowest rounded-full p-1 border border-outline-variant/30 shadow-sm">
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 py-2.5 rounded-full font-label-md font-bold transition-all ${
                activeTab === 'settings' 
                  ? 'bg-primary text-on-primary shadow-sm' 
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-2.5 rounded-full font-label-md font-bold transition-all ${
                activeTab === 'reviews' 
                  ? 'bg-primary text-on-primary shadow-sm' 
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              My Reviews
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-4 pb-6">
          {activeTab === 'settings' ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3">
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => router.push('/profile/settings')}
                  className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">settings</span>
                    <span className="font-label-lg text-on-surface">Account Settings</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </button>
                <button 
                  onClick={() => router.push('/profile/quotes')}
                  className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">request_quote</span>
                    <span className="font-label-lg text-on-surface">My Quotes</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </button>
                <button 
                  onClick={() => router.push('/profile/refer')}
                  className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
                    <span className="font-label-lg text-on-surface">Refer & Earn</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </button>
                <button 
                  onClick={() => router.push('/profile/notifications')}
                  className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                    <span className="font-label-lg text-on-surface">Notifications</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </button>
                <button 
                  onClick={() => router.push('/profile/settings/privacy')}
                  className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left border-b border-outline-variant/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">shield</span>
                    <span className="font-label-lg text-on-surface">Privacy & Security</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </button>
                <button 
                  onClick={() => router.push('/profile/support')}
                  className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-surface-container transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">help</span>
                    <span className="font-label-lg text-on-surface">Help & Support</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </button>
              </div>

              <button className="w-full flex items-center justify-center p-4 bg-surface-container-highest hover:bg-surface-container rounded-2xl transition-colors text-on-surface mt-4 font-label-lg font-bold">
                Log Out
              </button>

              <button 
                onClick={() => router.push('/profile/delete-account')}
                className="w-full flex items-center justify-center p-4 bg-error/10 hover:bg-error/20 rounded-2xl transition-colors text-error mt-2 font-label-lg font-bold"
              >
                Delete Account
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {reviewsGiven.length > 0 ? (
                reviewsGiven.map(review => <ReviewCard key={review.id} {...review} />)
              ) : (
                <div className="text-center py-10">
                  <p className="font-body-md text-on-surface-variant">You haven't written any reviews yet.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReferPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  
  const referralCode = 'ARCMART-AMAN-25';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const text = `Join ArcMart to find the best local professionals and suppliers for your home building needs! Use my code ${referralCode} to get 10% off your first booking. https://arcmart.in/invite/${referralCode}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const referrals = [
    { name: 'Rahul Sharma', date: '12 Jul 2026', status: 'completed', reward: '₹500', icon: 'check_circle', color: 'text-[#25D366]' },
    { name: 'Sneha Menon', date: '15 Jul 2026', status: 'pending', reward: '₹500', icon: 'schedule', color: 'text-amber-500' },
    { name: 'Vikram Singh', date: '18 Jul 2026', status: 'pending', reward: '₹500', icon: 'schedule', color: 'text-amber-500' }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe font-sans">
      <header className="px-4 py-4 bg-transparent absolute top-0 w-full z-20 flex items-center justify-between">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-surface/30 backdrop-blur-md text-white hover:bg-surface/50 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface/30 backdrop-blur-md text-white hover:bg-surface/50 transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto">
        {/* Modern Hero Section with Gradient */}
        <div className="relative pt-24 pb-12 px-6 flex flex-col items-center text-center overflow-hidden bg-gradient-to-br from-primary via-primary to-tertiary">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
            />
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-28 h-28 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 relative border border-white/30 shadow-2xl"
          >
            <span className="material-symbols-outlined text-[56px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg border-2 border-primary"
            >
              <span className="font-bold text-primary">₹500</span>
            </motion.div>
          </motion.div>

          <h1 className="font-headline-lg font-bold text-white mb-3 tracking-tight">
            Refer & Earn
          </h1>
          <p className="font-body-lg text-white/90 max-w-[300px] leading-relaxed">
            Invite friends to ArcMart. They get <span className="font-bold text-[#FFD700]">10% off</span> their first booking, and you earn <span className="font-bold text-[#FFD700]">₹500</span> directly in your wallet!
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex px-4 -mt-8 relative z-10 gap-3 mb-8">
          <div className="flex-1 bg-surface-container-lowest rounded-2xl p-4 shadow-lg border border-outline-variant/30 flex flex-col items-center">
            <span className="material-symbols-outlined text-primary mb-1">account_balance_wallet</span>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Earned</span>
            <span className="font-headline-md font-bold text-on-surface">₹500</span>
          </div>
          <div className="flex-1 bg-surface-container-lowest rounded-2xl p-4 shadow-lg border border-outline-variant/30 flex flex-col items-center">
            <span className="material-symbols-outlined text-amber-500 mb-1">pending_actions</span>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Pending</span>
            <span className="font-headline-md font-bold text-on-surface">₹1,000</span>
          </div>
        </div>

        {/* How it works */}
        <div className="px-6 mb-8">
          <h3 className="font-label-md font-bold text-on-surface mb-4 uppercase tracking-wider">How it works</h3>
          <div className="flex justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-6 left-8 right-8 h-0.5 bg-outline-variant/50 -z-10"></div>
            
            <div className="flex flex-col items-center flex-1 z-10">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-2 shadow-sm border border-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">share</span>
              </div>
              <span className="font-label-sm font-bold text-center">Share Link</span>
            </div>
            
            <div className="flex flex-col items-center flex-1 z-10">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-2 shadow-sm border border-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">person_add</span>
              </div>
              <span className="font-label-sm font-bold text-center">Friend Books</span>
            </div>

            <div className="flex flex-col items-center flex-1 z-10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-2 shadow-sm border border-surface text-on-primary">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
              <span className="font-label-sm font-bold text-center">You Earn</span>
            </div>
          </div>
        </div>

        {/* Code Section */}
        <div className="px-6 mb-8">
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-6 shadow-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            
            <h3 className="font-label-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider text-center">Your Unique Code</h3>
            <div className="bg-surface-container-high rounded-2xl p-4 flex items-center justify-between mb-6">
              <span className="font-headline-sm font-bold text-on-surface tracking-widest pl-2 font-mono">
                {referralCode}
              </span>
              <button 
                onClick={handleCopy}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  copied ? 'bg-[#25D366] text-white' : 'bg-surface text-primary shadow-sm hover:bg-surface-container-lowest'
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={copied ? 'check' : 'copy'}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="material-symbols-outlined text-[24px]"
                  >
                    {copied ? 'check' : 'content_copy'}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <button 
              onClick={handleShare}
              className="w-full bg-[#25D366] text-white py-4 rounded-full font-label-lg font-bold shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[24px]">chat</span>
              Invite via WhatsApp
            </button>
          </div>
        </div>

        {/* Track Referrals */}
        <div className="px-6 mb-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-label-md font-bold text-on-surface uppercase tracking-wider">My Referrals</h3>
            <span className="font-label-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">{referrals.length} Friends</span>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-sm">
            {referrals.map((ref, idx) => (
              <div key={idx} className={`p-4 flex items-center justify-between ${idx !== referrals.length - 1 ? 'border-b border-outline-variant/30' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-headline-sm font-bold border border-surface">
                    {ref.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-label-lg font-bold text-on-surface block mb-0.5">{ref.name}</span>
                    <div className="flex items-center gap-1 text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {ref.date}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`font-label-lg font-bold block ${ref.color}`}>
                    {ref.reward}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className={`material-symbols-outlined text-[12px] ${ref.color}`}>{ref.icon}</span>
                    <span className="font-label-sm text-on-surface-variant capitalize">{ref.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

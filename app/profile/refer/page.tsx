'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function ReferPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  
  const referralCode = 'ARCMART-AMAN-25';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://arcmart.in/invite/${referralCode}`;

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
    { 
      name: 'Rahul Sharma', 
      date: '12 Jul 2026', 
      status: 'completed',
      reward: '₹500', 
      steps: [true, true, true] // Joined, Booked, Earned
    },
    { 
      name: 'Sneha Menon', 
      date: '15 Jul 2026', 
      status: 'pending',
      reward: '₹500 (Pending)', 
      steps: [true, false, false] // Joined, Not Booked, Not Earned
    },
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

      <main className="flex-1 overflow-y-auto pb-32">
        {/* Modern Hero Section with Gradient */}
        <div className="relative pt-24 pb-12 px-6 flex flex-col items-center text-center overflow-hidden bg-gradient-to-br from-primary via-primary to-tertiary">
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
            <span className="font-headline-md font-bold text-on-surface">₹500</span>
          </div>
        </div>

        {/* Code & QR Section */}
        <div className="px-6 mb-8">
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col items-center">
            <h3 className="font-label-sm font-bold text-on-surface-variant mb-4 uppercase tracking-wider text-center">Share Your Code</h3>
            
            {/* QR Code */}
            <div className="p-3 bg-white rounded-xl shadow-sm border border-outline-variant mb-6">
              <img src={qrUrl} alt="QR Code" className="w-32 h-32" />
            </div>

            <div className="w-full bg-surface-container-high rounded-2xl p-4 flex items-center justify-between mb-6">
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

        {/* Track Referrals Pipeline */}
        <div className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-label-md font-bold text-on-surface uppercase tracking-wider">My Referrals</h3>
            <span className="font-label-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">{referrals.length} Invites</span>
          </div>
          
          <div className="space-y-4">
            {referrals.map((ref, idx) => (
              <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-bold text-on-surface">{ref.name}</h4>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Invited {ref.date}</p>
                  </div>
                  <div className={`font-bold text-sm ${ref.status === 'completed' ? 'text-success' : 'text-amber-500'}`}>
                    {ref.reward}
                  </div>
                </div>

                {/* Pipeline UI */}
                <div className="relative pt-4">
                  <div className="absolute top-6 left-4 right-4 h-1 bg-surface-variant rounded-full -z-10" />
                  <div 
                    className="absolute top-6 left-4 h-1 bg-primary rounded-full -z-10 transition-all duration-1000"
                    style={{ width: ref.status === 'completed' ? 'calc(100% - 2rem)' : '10%' }}
                  />
                  
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-2 shadow-sm ${ref.steps[0] ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'}`}>
                        {ref.steps[0] && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <span className="text-[10px] font-bold text-on-surface-variant">Joined</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-2 shadow-sm ${ref.steps[1] ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'}`}>
                        {ref.steps[1] ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3 opacity-50" />}
                      </div>
                      <span className="text-[10px] font-bold text-on-surface-variant">1st Booking</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-2 shadow-sm ${ref.steps[2] ? 'bg-success text-white' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'}`}>
                        {ref.steps[2] ? <CheckCircle2 className="w-3 h-3" /> : <div className="w-1.5 h-1.5 bg-on-surface-variant/50 rounded-full" />}
                      </div>
                      <span className="text-[10px] font-bold text-on-surface-variant">₹500 Earned</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms and Conditions (REF-07) */}
        <div className="px-6">
          <button 
            onClick={() => setShowTerms(!showTerms)}
            className="w-full flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-on-surface-variant" />
              <span className="font-bold text-sm text-on-surface">Terms & Conditions</span>
            </div>
            {showTerms ? <ChevronUp className="w-5 h-5 text-on-surface-variant" /> : <ChevronDown className="w-5 h-5 text-on-surface-variant" />}
          </button>
          
          <AnimatePresence>
            {showTerms && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 mt-2 bg-surface-container text-xs text-on-surface-variant rounded-xl leading-relaxed space-y-2">
                  <p>1. The referral bonus of ₹500 is credited only after the referred user completes and pays for their first booking via ArcMart.</p>
                  <p>2. The referred user must be a new user who has never registered on ArcMart before.</p>
                  <p>3. The 10% off coupon for the referred user is valid for 30 days from sign-up and capped at ₹1000.</p>
                  <p>4. ArcMart reserves the right to revoke credits if fraudulent activity (e.g., self-referrals via same IP/device) is detected.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}

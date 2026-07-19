'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Gift, Share2, Copy, CheckCircle2, Info, ChevronDown, ChevronUp, Clock } from 'lucide-react';

export default function Referrals() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const referralCode = 'ARCMART-JAI-123';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://arcmart.in/invite/${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const text = `Take your hardware or building supply business online with ArcMart! Use my code ${referralCode} during sign up to unlock special benefits. https://arcmart.in/invite/${referralCode}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const referrals = [
    { 
      name: 'RK Hardware Store', 
      date: '10 Oct 2026', 
      status: 'completed',
      reward: '+1 Month Free', 
      steps: [true, true, true] 
    },
    { 
      name: 'Shiv Timbers', 
      date: 'Today', 
      status: 'pending',
      reward: 'Pending', 
      steps: [true, false, false] 
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Refer & Earn</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col pb-32">
        {/* Header Graphic */}
        <div className="bg-primary-container pt-8 pb-10 px-6 text-center border-b border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Gift className="w-40 h-40 transform rotate-12 translate-x-8 -translate-y-8" />
          </div>
          <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-primary-container shadow-lg relative z-10">
            <Gift className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-black text-on-primary-container mb-2 relative z-10">Get 1 Month Free!</h1>
          <p className="text-xs text-on-primary-container/80 max-w-[250px] mx-auto leading-relaxed font-semibold relative z-10">
            Invite another supplier to ArcMart. When they upgrade to a Pro plan, you both get 1 month added to your subscription for free.
          </p>
        </div>

        <div className="p-5 flex-1 -mt-6 space-y-6 relative z-20">
          
          <div className="glass-card rounded-3xl p-6 border border-outline-variant shadow-lg text-center flex flex-col items-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Share Your Code</h3>
            
            {/* QR Code */}
            <div className="p-3 bg-white rounded-xl shadow-sm border border-outline-variant mb-4">
              <img src={qrUrl} alt="QR Code" className="w-32 h-32" />
            </div>
            
            <div className="flex items-center justify-center bg-surface-variant rounded-xl p-4 w-full mb-4 border border-outline-variant border-dashed">
              <span className="font-mono text-xl font-black text-primary tracking-wider">{referralCode}</span>
            </div>

            <div className="flex space-x-3 w-full">
              <button 
                onClick={handleCopy}
                className="flex-1 py-3 bg-surface-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-outline-variant transition"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 mr-2 text-success" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button 
                onClick={handleShare}
                className="flex-1 py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-md shadow-primary/30"
              >
                <Share2 className="w-5 h-5 mr-2" /> Share
              </button>
            </div>
          </div>

          <div className="px-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Your Referrals ({referrals.length})</h3>
            
            <div className="space-y-4">
              {referrals.map((ref, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-on-surface">{ref.name}</h4>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase mt-0.5">Joined {ref.date}</p>
                    </div>
                    <div className={`font-black text-sm ${ref.status === 'completed' ? 'text-success' : 'text-amber-500'}`}>
                      {ref.reward}
                    </div>
                  </div>

                  {/* Pipeline Tracker */}
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
                        <span className="text-[9px] font-bold text-on-surface-variant text-center leading-tight">GST<br/>Verified</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-2 shadow-sm ${ref.steps[1] ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'}`}>
                          {ref.steps[1] ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3 opacity-50" />}
                        </div>
                        <span className="text-[9px] font-bold text-on-surface-variant text-center leading-tight">Pro Plan<br/>Active</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-2 shadow-sm ${ref.steps[2] ? 'bg-success text-white' : 'bg-surface-variant text-on-surface-variant border border-outline-variant'}`}>
                          {ref.steps[2] ? <CheckCircle2 className="w-3 h-3" /> : <div className="w-1.5 h-1.5 bg-on-surface-variant/50 rounded-full" />}
                        </div>
                        <span className="text-[9px] font-bold text-on-surface-variant text-center leading-tight">Reward<br/>Applied</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-1 pt-4">
            <button 
              onClick={() => setShowTerms(!showTerms)}
              className="w-full flex items-center justify-between p-4 glass-card border border-outline-variant/50 rounded-2xl shadow-sm hover:bg-surface-variant transition"
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
                  <div className="p-4 mt-2 bg-surface-variant text-xs text-on-surface-variant rounded-xl leading-relaxed space-y-2 border border-outline-variant/30">
                    <p>1. The referred supplier must successfully verify their GSTIN to qualify.</p>
                    <p>2. The 1 Month Free extension is applied automatically to your current billing cycle once the referred supplier upgrades to any paid Pro plan.</p>
                    <p>3. There is no limit to how many suppliers you can refer. 12 successful referrals = 1 year free!</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}

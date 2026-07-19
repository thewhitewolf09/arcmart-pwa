'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, ShieldCheck, Eye, Share2, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BadgeDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isUnlocked = params.id === '1' || params.id === '2';

  return (
    <div className="min-h-screen bg-surface flex flex-col pb-32">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="p-2 -mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-5 pt-8">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center mb-8"
        >
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-xl relative ${
            isUnlocked ? 'bg-primary/10 border-4 border-primary/20' : 'bg-surface-container border-4 border-outline-variant grayscale'
          }`}>
            <Star className={`w-16 h-16 ${isUnlocked ? 'text-yellow-500 fill-yellow-500' : 'text-outline-variant fill-outline-variant/30'}`} />
            {isUnlocked && (
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-success rounded-full flex items-center justify-center border-4 border-surface shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
          
          <h1 className="text-2xl font-black text-on-surface mb-2">Top Rated Pro</h1>
          <p className="text-sm font-medium text-on-surface-variant text-center max-w-[280px]">
            Awarded to professionals who consistently deliver exceptional service and maintain high ratings.
          </p>
        </motion.div>

        {isUnlocked ? (
          <div className="bg-success/10 border border-success/20 rounded-2xl p-5 mb-8 text-center shadow-sm">
            <h2 className="text-success-dark font-black text-sm uppercase tracking-widest mb-1">Badge Unlocked</h2>
            <p className="text-xs font-bold text-success-dark/80">Earned on October 15, 2026</p>
          </div>
        ) : (
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-5 mb-8 shadow-sm">
            <div className="flex justify-between items-end mb-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Progress</h3>
              <p className="text-sm font-black text-primary">64%</p>
            </div>
            <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden mb-3">
              <div className="h-full bg-primary rounded-full" style={{ width: '64%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant">12/20 Jobs with 4.8+ rating</p>
          </div>
        )}

        {/* Benefits */}
        <section className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Badge Benefits</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-surface-container-lowest border border-outline-variant/50 p-4 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface mb-0.5">Profile Boost</h4>
                <p className="text-xs text-on-surface-variant font-medium">Get up to 20% more visibility in customer search results in your area.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-surface-container-lowest border border-outline-variant/50 p-4 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface mb-0.5">Trust Indicator</h4>
                <p className="text-xs text-on-surface-variant font-medium">This badge is displayed prominently on your public profile and quotes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Earn */}
        <section>
          <div className="flex items-center gap-2 mb-4 ml-1">
            <Info className="w-4 h-4 text-on-surface-variant" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">How to maintain</h3>
          </div>
          <ul className="list-disc list-inside text-xs font-medium text-on-surface-variant space-y-2 px-1">
            <li>Complete at least 5 jobs every 30 days.</li>
            <li>Do not let your average rating drop below 4.5.</li>
            <li>Maintain a response rate above 80%.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, MapPin, TrendingUp, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedUpgradePrompt() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">Boost Visibility</span>
        </div>
      </div>

      <div className="flex-1 pb-32">
        
        {/* Hero Section */}
        <div className="bg-[#0b1c30] pt-10 pb-16 px-6 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Star className="w-32 h-32 text-warning-dark transform rotate-12 translate-x-4 -translate-y-4" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning-dark rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,193,7,0.4)]">
              <Star className="w-8 h-8 text-white fill-white" />
            </div>
            
            <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-white/20 text-warning">
              Featured Listing
            </div>
            <h1 className="text-3xl font-black mb-3 tracking-tight">Dominate Your Zone</h1>
            <p className="text-sm text-white/80 max-w-[280px] mx-auto leading-relaxed">
              Secure one of the top 3 spots in your specific pin code and get up to 5x more highly qualified leads.
            </p>
          </div>
        </div>

        <div className="px-5 -mt-8 relative z-10 space-y-4">
          
          <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-lg">
            <h3 className="font-bold text-sm text-on-surface mb-4">Why upgrade to Featured?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center mr-3 shrink-0">
                  <TrendingUp className="w-4 h-4 text-warning-dark" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Top 3 Placement</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Always appear above standard listings when builders search in your zone.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center mr-3 shrink-0">
                  <MapPin className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Hyper-local Targeting</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Pay only for the exact pin codes where you want to supply materials.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-secondary-container/50 rounded-full flex items-center justify-center mr-3 shrink-0">
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Premium "Featured" Badge</p>
                  <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Build instant trust and authority with a verified featured tag on your profile.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-surface-variant/50 border border-outline-variant rounded-2xl p-4 flex items-center">
            <ShieldCheck className="w-8 h-8 text-on-surface-variant mr-3 shrink-0 opacity-50" />
            <p className="text-xs font-semibold text-on-surface-variant leading-relaxed">
              Featured slots are strictly limited to <span className="text-on-surface font-bold">3 suppliers per category per zone</span>. First come, first served.
            </p>
          </div>

        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href="/supplier/featured/zone"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        >
          Check Availability <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, TrendingUp, MapPin, ChevronDown, Calendar, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedListing() {
  const router = useRouter();
  
  const [category, setCategory] = useState('Tiles & Flooring');
  const [zone, setZone] = useState('Noida Sector 18');
  const [duration, setDuration] = useState('1_week');

  const getPrice = () => {
    return duration === '1_week' ? '₹999' : '₹2,999';
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Featured Listing</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        
        {/* Banner */}
        <div className="bg-secondary-container p-6 border-b border-secondary/20 mb-6 text-center">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-secondary/20">
            <TrendingUp className="w-8 h-8 text-secondary-dark" />
          </div>
          <h1 className="text-xl font-black text-secondary-dark mb-2">Rank #1 in Search</h1>
          <p className="text-sm text-secondary-dark/80">Get 10x more profile views and leads by appearing at the top of homeowner search results.</p>
        </div>

        {/* Configuration Form */}
        <div className="px-5 space-y-6">
          
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Select Category
            </label>
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-secondary transition appearance-none"
              >
                <option value="Tiles & Flooring">Tiles & Flooring</option>
                <option value="Sanitaryware">Sanitaryware</option>
              </select>
              <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-on-surface-variant pointer-events-none" />
            </div>
            <p className="text-[10px] text-on-surface-variant mt-2 ml-1">
              You must have active products in this category.
            </p>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Select Target Zone
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="h-4 w-4 text-on-surface-variant" />
              </div>
              <select 
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-secondary transition appearance-none"
              >
                <option value="Noida Sector 18">Noida Sector 18</option>
                <option value="Indirapuram">Indirapuram</option>
                <option value="Greater Noida West">Greater Noida West</option>
              </select>
              <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Duration
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setDuration('1_week')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  duration === '1_week'
                    ? 'border-secondary bg-secondary/10'
                    : 'border-outline-variant hover:bg-surface-variant'
                }`}
              >
                <h4 className="font-bold text-on-surface text-sm mb-1">1 Week</h4>
                <p className="text-xs font-black text-secondary-dark">₹999</p>
              </button>
              
              <button 
                onClick={() => setDuration('1_month')}
                className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                  duration === '1_month'
                    ? 'border-secondary bg-secondary/10'
                    : 'border-outline-variant hover:bg-surface-variant'
                }`}
              >
                <div className="absolute top-0 right-0 bg-secondary text-on-secondary text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-bl">
                  Save 25%
                </div>
                <h4 className="font-bold text-on-surface text-sm mb-1">1 Month</h4>
                <p className="text-xs font-black text-secondary-dark">₹2,999</p>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href={`/supplier/subscription/checkout?item=featured&price=${getPrice()}`}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-between px-6 shadow-lg hover:bg-opacity-90 transition"
        >
          <span className="flex items-center"><CreditCard className="w-5 h-5 mr-2" /> Pay {getPrice()}</span>
          <span className="text-sm font-semibold opacity-80">Checkout</span>
        </Link>
      </div>
    </div>
  );
}

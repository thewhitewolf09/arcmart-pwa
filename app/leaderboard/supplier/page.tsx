'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Trophy, Search, Building2, TrendingUp, MapPin, ChevronDown } from 'lucide-react';

export default function SupplierLeaderboard() {
  const router = useRouter();
  const [category, setCategory] = useState('Tiles & Flooring');

  const topSuppliers = [
    { rank: 1, name: 'Bharat Marble', score: '99.1', contacts: 450, rating: 4.8, initials: 'BM' },
    { rank: 2, name: 'Jai Durga Tiles', score: '96.5', contacts: 382, rating: 4.9, initials: 'JD', isMe: true },
    { rank: 3, name: 'Shree Cement Agency', score: '92.0', contacts: 310, rating: 4.7, initials: 'SC' },
    { rank: 4, name: 'A-One Hardware', score: '88.4', contacts: 256, rating: 4.6, initials: 'AH' },
    { rank: 5, name: 'Laxmi Traders', score: '85.2', contacts: 198, rating: 4.5, initials: 'LT' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      
      {/* Header */}
      <div className="bg-secondary pt-12 pb-8 px-5 rounded-b-[2rem] shadow-lg relative overflow-hidden text-center z-10">
        <button 
          onClick={() => router.back()} 
          className="absolute top-10 left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute top-10 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
          <Search className="w-5 h-5" />
        </div>

        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-2xl font-black text-white mb-2">Top Suppliers</h1>
        <p className="text-sm text-secondary-fixed-dim font-medium max-w-[250px] mx-auto">
          Most contacted and highly rated wholesale suppliers in your region.
        </p>
      </div>

      <div className="flex-1 px-5 pt-6 pb-32">
        
        {/* Filters */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 h-12 bg-surface-container-lowest border border-outline-variant/50 rounded-xl flex items-center justify-between px-4 font-bold text-sm text-on-surface shadow-sm">
            <span className="truncate pr-2">{category}</span>
            <ChevronDown className="w-4 h-4 text-on-surface-variant shrink-0" />
          </button>
          <button className="flex-[0.7] h-12 bg-surface-container-lowest border border-outline-variant/50 rounded-xl flex items-center justify-between px-4 font-bold text-sm text-on-surface shadow-sm">
            <div className="flex items-center gap-2 overflow-hidden">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <span className="truncate">Noida</span>
            </div>
          </button>
        </div>

        {/* Your Rank Banner */}
        <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-5 mb-8 text-white shadow-lg flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Your Ranking</p>
            <h2 className="text-3xl font-black">#2</h2>
            <p className="text-[10px] font-medium text-white/90 mt-1">Top 5% in Tiles & Flooring</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">The Leaderboard</h3>

        {/* List */}
        <div className="space-y-3">
          {topSuppliers.map((sup, idx) => (
            <div 
              key={sup.rank} 
              className={`flex items-center gap-4 p-4 rounded-2xl border ${sup.isMe ? 'bg-secondary/5 border-secondary/30 shadow-md ring-1 ring-secondary/20' : 'bg-surface-container-lowest border-outline-variant/50 shadow-sm'}`}
            >
              <div className="w-6 text-center font-black text-on-surface-variant">
                {sup.rank === 1 ? <Trophy className="w-5 h-5 text-yellow-500 mx-auto" /> : sup.rank}
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${sup.isMe ? 'bg-secondary text-white shadow-inner' : 'bg-surface-container text-on-surface-variant'}`}>
                {sup.initials}
              </div>
              <div className="flex-1 overflow-hidden">
                <h4 className={`font-bold text-sm truncate ${sup.isMe ? 'text-secondary-dark' : 'text-on-surface'}`}>
                  {sup.name} {sup.isMe && '(You)'}
                </h4>
                <div className="flex items-center gap-3 mt-1">
                  <div className="text-[10px] font-bold text-on-surface-variant">
                    {sup.contacts} Contacts
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0 bg-surface-container px-3 py-1.5 rounded-lg">
                <p className="text-xs font-black text-on-surface">{sup.score}</p>
                <p className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant">Score</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

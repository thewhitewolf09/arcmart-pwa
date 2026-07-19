'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Trophy, Star, ChevronDown, MapPin, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProLeaderboard() {
  const router = useRouter();
  const [trade, setTrade] = useState('Plumbers');

  const topPros = [
    { rank: 1, name: 'Rakesh Sharma', score: '98.5', jobs: 142, rating: 4.9, initials: 'RS', trend: 'up' },
    { rank: 2, name: 'Amit Singh', score: '96.2', jobs: 118, rating: 4.8, initials: 'AS', trend: 'same' },
    { rank: 3, name: 'Sunil Kumar', score: '94.0', jobs: 89, rating: 4.8, initials: 'SK', trend: 'up' },
    { rank: 4, name: 'Vikash Plumbing', score: '91.8', jobs: 156, rating: 4.7, initials: 'VP', trend: 'down' },
    { rank: 5, name: 'Ajay Verma', score: '89.5', jobs: 64, rating: 4.9, initials: 'AV', trend: 'up' },
    { rank: 12, name: 'You (Arun Sharma)', score: '78.2', jobs: 42, rating: 4.7, initials: 'AS', trend: 'up', isMe: true },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      
      {/* Header */}
      <div className="bg-primary pt-12 pb-8 px-5 rounded-b-[2rem] shadow-lg relative overflow-hidden text-center z-10">
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
          <Trophy className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-2xl font-black text-white mb-2">Top Professionals</h1>
        <p className="text-sm text-primary-fixed-dim font-medium max-w-[250px] mx-auto">
          See who is leading in your area based on jobs completed and client ratings.
        </p>
      </div>

      <div className="flex-1 px-5 pt-6 pb-32">
        
        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 h-12 bg-surface-container-lowest border border-outline-variant/50 rounded-xl flex items-center justify-between px-4 font-bold text-sm text-on-surface shadow-sm">
            <span>{trade}</span>
            <ChevronDown className="w-4 h-4 text-on-surface-variant" />
          </button>
          <button className="flex-1 h-12 bg-surface-container-lowest border border-outline-variant/50 rounded-xl flex items-center justify-between px-4 font-bold text-sm text-on-surface shadow-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="truncate">Indiranagar</span>
            </div>
            <ChevronDown className="w-4 h-4 text-on-surface-variant shrink-0" />
          </button>
        </div>

        {/* Podium (Top 3) */}
        <div className="flex items-end justify-center gap-2 mb-10 h-48 mt-4">
          {/* Rank 2 */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center w-1/3">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center font-black text-on-surface mb-2 border-2 border-[#C0C0C0]">
              {topPros[1].initials}
            </div>
            <div className="bg-gradient-to-t from-surface-variant to-surface-container-high w-full h-24 rounded-t-lg flex flex-col items-center justify-start pt-3 border-t border-x border-[#C0C0C0]/50 relative">
              <span className="text-2xl font-black text-[#C0C0C0]">2</span>
              <p className="text-[10px] font-bold text-on-surface truncate w-full px-1 text-center mt-1 absolute -bottom-5">{topPros[1].name.split(' ')[0]}</p>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex flex-col items-center w-1/3 z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center font-black text-primary text-xl mb-2 border-4 border-[#FFD700] shadow-xl relative">
              <div className="absolute -top-3 -right-2 w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
                <Trophy className="w-3 h-3 text-yellow-900" />
              </div>
              {topPros[0].initials}
            </div>
            <div className="bg-gradient-to-t from-primary/20 to-primary/10 w-full h-32 rounded-t-lg flex flex-col items-center justify-start pt-2 border-t border-x border-[#FFD700] relative shadow-lg">
              <span className="text-4xl font-black text-[#FFD700] drop-shadow-sm">1</span>
              <p className="text-[10px] font-bold text-primary-dark truncate w-full px-1 text-center mt-1 absolute -bottom-5">{topPros[0].name.split(' ')[0]}</p>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center w-1/3">
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center font-black text-on-surface mb-2 border-2 border-[#CD7F32]">
              {topPros[2].initials}
            </div>
            <div className="bg-gradient-to-t from-surface-variant to-surface-container-high w-full h-20 rounded-t-lg flex flex-col items-center justify-start pt-2 border-t border-x border-[#CD7F32]/50 relative">
              <span className="text-2xl font-black text-[#CD7F32]">3</span>
              <p className="text-[10px] font-bold text-on-surface truncate w-full px-1 text-center mt-1 absolute -bottom-5">{topPros[2].name.split(' ')[0]}</p>
            </div>
          </motion.div>
        </div>

        {/* List */}
        <div className="space-y-3 mt-12">
          {topPros.slice(3).map((pro, idx) => (
            <div 
              key={pro.rank} 
              className={`flex items-center gap-4 p-4 rounded-2xl border ${pro.isMe ? 'bg-primary/5 border-primary/30 shadow-md' : 'bg-surface-container-lowest border-outline-variant/50 shadow-sm'}`}
            >
              <div className="w-6 text-center font-black text-on-surface-variant">
                {pro.rank}
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${pro.isMe ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                {pro.initials}
              </div>
              <div className="flex-1">
                <h4 className={`font-bold text-sm ${pro.isMe ? 'text-primary' : 'text-on-surface'}`}>{pro.name}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center text-[10px] font-bold text-on-surface-variant">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" /> {pro.rating}
                  </div>
                  <div className="text-[10px] font-bold text-on-surface-variant">
                    {pro.jobs} Jobs
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-black text-on-surface">{pro.score}</p>
                <p className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant">Score</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

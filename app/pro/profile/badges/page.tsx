'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Award, Star, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function BadgesAndAchievements() {
  const router = useRouter();

  const achievements = [
    {
      id: 1,
      icon: <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />,
      title: 'Top Rated Pro',
      description: 'Maintain a 4.8+ rating over 20 jobs.',
      unlocked: true,
      date: 'Unlocked Oct 2026',
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-8 h-8 text-success fill-success/20" />,
      title: 'Verified Identity',
      description: 'Complete Aadhaar and Photo verification.',
      unlocked: true,
      date: 'Unlocked Sep 2026',
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8 text-primary fill-primary/20" />,
      title: '100 Jobs Completed',
      description: 'Successfully finish 100 jobs on ArcMart.',
      unlocked: false,
      progress: 64,
      total: 100,
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8 text-orange-500 fill-orange-500/20" />,
      title: 'Lightning Responder',
      description: 'Accept 10 leads within 5 minutes of receiving them.',
      unlocked: false,
      progress: 3,
      total: 10,
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8 text-secondary fill-secondary/20" />,
      title: 'Rising Star',
      description: 'Earn ₹50,000 through ArcMart in a single month.',
      unlocked: false,
      progress: 12000,
      total: 50000,
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
          <span className="font-bold text-on-surface truncate">Achievements</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-safe">
        <div className="bg-primary/5 rounded-3xl p-6 mb-8 border border-primary/10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-on-surface mb-1">Level 4 Pro</h2>
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">2 Unlocked Badges</p>
          </div>
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center relative shadow-inner">
            <Award className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Your Badges</h3>
          
          {achievements.map((badge) => (
            <div 
              key={badge.id}
              className={`glass-card border rounded-2xl p-4 flex items-start ${
                badge.unlocked ? 'border-primary/30 bg-primary/5 shadow-sm' : 'border-outline-variant bg-surface opacity-70 grayscale'
              }`}
            >
              <div className="mr-4 shrink-0 mt-1">
                {badge.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-on-surface">{badge.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed mt-1 mb-2">{badge.description}</p>
                
                {badge.unlocked ? (
                  <p className="text-[10px] font-bold uppercase tracking-widest text-success">{badge.date}</p>
                ) : (
                  <div className="mt-3">
                    <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-outline-variant rounded-full"
                        style={{ width: `${(badge.progress! / badge.total!) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1 text-right">
                      {badge.title === 'Rising Star' ? `₹${badge.progress} / ₹${badge.total}` : `${badge.progress} / ${badge.total}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

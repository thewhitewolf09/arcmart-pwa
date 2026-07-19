'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';

export default function TrendingScreen() {
  const router = useRouter();

  const pros = [
    { id: 5, name: 'Apex Builders', role: 'Contractor', queries: '150+ queries this week', rating: 4.8, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=150&h=150&fit=crop' },
    { id: 2, name: 'Priya Sharma', role: 'Interior Designer', queries: '120+ queries this week', rating: 4.9, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { id: 1, name: 'Vikram Singh', role: 'Architect', queries: '95+ queries this week', rating: 4.8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Trending Near You</span>
      </div>

      <div className="flex-1 p-4 pb-24 space-y-4">
        {pros.map((pro, index) => (
          <Link key={pro.id} href={`/profile/${pro.id}`} className="block glass-card border border-outline-variant rounded-2xl p-4 flex hover:bg-surface-variant transition relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-bl-lg">
              #{index + 1} Trending
            </div>
            
            <img src={pro.image} alt={pro.name} className="w-16 h-16 rounded-xl object-cover border border-outline-variant shrink-0" />
            <div className="ml-4 flex-1 mt-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-on-surface text-sm">{pro.name}</h3>
                <div className="flex items-center text-xs font-bold text-on-surface mt-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                  {pro.rating}
                </div>
              </div>
              <p className="text-xs text-primary font-semibold mt-0.5">{pro.role}</p>
              <div className="flex items-center mt-2 text-warning-dark">
                <TrendingUp className="w-3 h-3 mr-1" />
                <p className="text-[10px] font-bold">{pro.queries}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

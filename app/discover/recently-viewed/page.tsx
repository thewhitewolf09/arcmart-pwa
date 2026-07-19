'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Star } from 'lucide-react';
import Link from 'next/link';

export default function RecentlyViewedScreen() {
  const router = useRouter();

  const pros = [
    { id: 2, name: 'Priya Sharma', role: 'Interior Designer', viewed: '2 hours ago', rating: 4.9, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { id: 4, name: 'Ananya Desai', role: 'Architect', viewed: 'Yesterday', rating: 4.7, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Recently Viewed</span>
      </div>

      <div className="flex-1 p-4 pb-24 space-y-4">
        {pros.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 text-on-surface-variant opacity-50">
            <Clock className="w-12 h-12 mb-4" />
            <p className="text-sm font-bold">No profiles viewed yet.</p>
          </div>
        ) : (
          pros.map((pro) => (
            <Link key={pro.id} href={`/profile/${pro.id}`} className="block glass-card border border-outline-variant rounded-2xl p-4 flex hover:bg-surface-variant transition">
              <img src={pro.image} alt={pro.name} className="w-16 h-16 rounded-xl object-cover border border-outline-variant shrink-0" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-on-surface text-sm">{pro.name}</h3>
                  <div className="flex items-center text-xs font-bold text-on-surface">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                    {pro.rating}
                  </div>
                </div>
                <p className="text-xs text-primary font-semibold mt-0.5">{pro.role}</p>
                <div className="flex items-center mt-2 text-on-surface-variant">
                  <Clock className="w-3 h-3 mr-1" />
                  <p className="text-[10px] font-medium">{pro.viewed}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

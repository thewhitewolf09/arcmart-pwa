'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

export default function NewProfilesScreen() {
  const router = useRouter();

  const pros = [
    { id: 6, name: 'Sanjay Patel', role: 'Architect', joined: 'Joined 2 days ago', rating: null, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' },
    { id: 7, name: 'Lumina Interiors', role: 'Interior Designer', joined: 'Joined today', rating: null, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">New on ArcMart</span>
      </div>

      <div className="flex-1 p-4 pb-24 space-y-4">
        {pros.map((pro) => (
          <Link key={pro.id} href={`/profile/${pro.id}`} className="block glass-card border border-secondary/30 bg-secondary/5 rounded-2xl p-4 flex hover:bg-secondary/10 transition">
            <img src={pro.image} alt={pro.name} className="w-16 h-16 rounded-xl object-cover border border-outline-variant shrink-0" />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-on-surface text-sm">{pro.name}</h3>
                <div className="flex items-center text-xs font-bold text-on-surface-variant">
                  New
                </div>
              </div>
              <p className="text-xs text-primary font-semibold mt-0.5">{pro.role}</p>
              <div className="flex items-center mt-2 text-secondary">
                <Sparkles className="w-3 h-3 mr-1" />
                <p className="text-[10px] font-bold">{pro.joined}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

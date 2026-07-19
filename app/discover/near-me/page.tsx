'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Star, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function NearMeScreen() {
  const router = useRouter();

  const pros = [
    { id: 1, name: 'Vikram Singh', role: 'Architect', distance: '0.8 km away', rating: 4.8, verified: true, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { id: 2, name: 'Priya Sharma', role: 'Interior Designer', distance: '1.2 km away', rating: 4.9, verified: true, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { id: 3, name: 'BuildRight Construction', role: 'Contractor', distance: '2.5 km away', rating: 4.5, verified: false, image: 'https://images.unsplash.com/photo-1541888081600-0870950ce895?w=150&h=150&fit=crop' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-bold text-on-surface leading-tight">Near Me</h1>
          <p className="text-[10px] text-on-surface-variant flex items-center">
            <MapPin className="w-3 h-3 mr-1" /> Auto-detected: Indiranagar
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 pb-24 space-y-4">
        {pros.map((pro) => (
          <Link key={pro.id} href={`/profile/${pro.id}`} className="block glass-card border border-outline-variant rounded-2xl p-4 flex hover:bg-surface-variant transition">
            <img src={pro.image} alt={pro.name} className="w-16 h-16 rounded-xl object-cover border border-outline-variant shrink-0" />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-on-surface text-sm flex items-center">
                  {pro.name}
                  {pro.verified && <ShieldCheck className="w-4 h-4 text-success ml-1" />}
                </h3>
                <div className="flex items-center text-xs font-bold text-on-surface">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                  {pro.rating}
                </div>
              </div>
              <p className="text-xs text-primary font-semibold mt-0.5">{pro.role}</p>
              <p className="text-[10px] text-on-surface-variant mt-2 font-medium">{pro.distance}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

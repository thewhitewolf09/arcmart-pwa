'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Image as ImageIcon, MapPin } from 'lucide-react';

export default function PortfolioGallery() {
  const router = useRouter();

  const works = [
    {
      id: 1,
      title: 'Complete Bathroom Renovation',
      category: 'Plumbing',
      location: 'Sector 50, Noida',
      imagePlaceholder: 'BR'
    },
    {
      id: 2,
      title: 'Kitchen Pipe Replacement',
      category: 'Plumbing',
      location: 'Indirapuram',
      imagePlaceholder: 'KP'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Work Portfolio</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-32">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-black text-on-surface">Showcase Your Work</h2>
            <p className="text-xs text-on-surface-variant max-w-[200px] mt-1">Pros with portfolios get booked 2x more often.</p>
          </div>
          <Link href="/pro/profile/portfolio/add" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition shrink-0">
            <Plus className="w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-4">
          {works.map((work) => (
            <div key={work.id} className="glass-card border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <div className="h-40 bg-surface-variant border-b border-outline-variant flex items-center justify-center relative">
                {/* Simulated Image */}
                <ImageIcon className="w-12 h-12 text-on-surface-variant/30 absolute" />
                <span className="text-4xl font-black text-primary/10 z-10">{work.imagePlaceholder}</span>
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold tracking-widest uppercase">
                  After
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-on-surface mb-1">{work.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold uppercase tracking-wider">{work.category}</span>
                  <span className="text-[10px] text-on-surface-variant font-semibold flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> {work.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Map, Navigation, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ServiceAreaMap() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Service Area Map</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
          {/* Mock Grid for map texture */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Mock Road */}
          <div className="absolute top-1/3 left-0 right-0 h-4 bg-white transform -rotate-12 opacity-80"></div>
          <div className="absolute top-1/4 bottom-0 left-1/3 w-4 bg-white transform rotate-6 opacity-80"></div>

          {/* Central Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
            <div className="bg-primary text-white p-2 rounded-full shadow-lg">
              <Navigation className="w-6 h-6 fill-white" />
            </div>
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
          </div>
          
          {/* Service Area Polygon */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
             <polygon points="50,150 250,100 350,300 100,400" className="fill-primary/20 stroke-primary stroke-2" />
          </svg>
        </div>

        {/* Floating Info Card */}
        <div className="relative z-10 mt-auto p-5 pb-safe">
          <div className="bg-surface/90 backdrop-blur-md border border-outline-variant rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center mb-4">
              <Map className="w-6 h-6 text-primary mr-3" />
              <div>
                <h2 className="text-lg font-black text-on-surface">Your Coverage</h2>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Delhi NCR Region</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm font-bold text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-success mr-2" /> Sector 18, Noida
              </div>
              <div className="flex items-center text-sm font-bold text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-success mr-2" /> Sector 50, Noida
              </div>
              <div className="flex items-center text-sm font-bold text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-success mr-2" /> Indirapuram
              </div>
            </div>

            <Link 
              href="/pro/profile/edit"
              className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl flex items-center justify-center hover:bg-surface-variant transition"
            >
              Edit Service Areas
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

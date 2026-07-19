'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, MapPin, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ZoneSelect() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  const zones = [
    { id: 1, name: 'Noida Sector 150', pincode: '201310', price: '₹12,000', available: 1, traffic: 'High' },
    { id: 2, name: 'Noida Extension', pincode: '201306', price: '₹15,000', available: 0, traffic: 'Very High' },
    { id: 3, name: 'Greater Noida West', pincode: '201308', price: '₹10,000', available: 2, traffic: 'Medium' },
    { id: 4, name: 'Indirapuram', pincode: '201014', price: '₹8,000', available: 3, traffic: 'Medium' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Select Zone</span>
      </div>

      <div className="flex-1 p-5 pb-32 space-y-6">
        
        <div>
          <h2 className="text-xl font-black text-on-surface mb-2">Where do you want to be featured?</h2>
          <p className="text-sm text-on-surface-variant mb-6">Search by locality or pin code to check availability.</p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search locality or pin code..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface-variant border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Available Zones (Cement Category)</h3>
          
          <div className="space-y-3">
            {zones.map((zone) => (
              <div 
                key={zone.id}
                onClick={() => zone.available > 0 && setSelectedZone(zone.id)}
                className={`border-2 rounded-2xl p-4 transition-all ${
                  zone.available === 0 ? 'opacity-60 bg-surface-variant/50 border-outline-variant cursor-not-allowed' :
                  selectedZone === zone.id ? 'border-primary bg-primary/5 cursor-pointer shadow-md' : 'border-outline-variant bg-surface cursor-pointer hover:border-primary/30'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-start">
                    <MapPin className={`w-5 h-5 mr-2 shrink-0 ${zone.available === 0 ? 'text-on-surface-variant' : 'text-primary'}`} />
                    <div>
                      <h4 className="font-bold text-sm text-on-surface">{zone.name}</h4>
                      <p className="text-[10px] text-on-surface-variant font-semibold">PIN: {zone.pincode}</p>
                    </div>
                  </div>
                  {selectedZone === zone.id ? (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant shrink-0"></div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-outline-variant/50">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-black text-on-surface">{zone.price}<span className="text-[10px] text-on-surface-variant font-medium">/mo</span></span>
                    {zone.available > 0 ? (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${zone.available === 1 ? 'bg-warning/20 text-warning-dark' : 'bg-success/10 text-success'}`}>
                        {zone.available} Slot{zone.available > 1 ? 's' : ''} Left
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-surface-dim text-on-surface-variant">
                        Sold Out
                      </span>
                    )}
                  </div>
                  {zone.traffic === 'Very High' && zone.available > 0 && (
                    <span className="text-[10px] font-bold text-error uppercase tracking-widest flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> High Demand
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link 
          href={selectedZone ? `/supplier/subscription/checkout?item=featured&price=${encodeURIComponent(zones.find(z => z.id === selectedZone)?.price || '')}&plan=${zones.find(z => z.id === selectedZone)?.name}` : '#'}
          className={`w-full py-4 font-bold rounded-xl flex items-center justify-center transition shadow-lg ${
            selectedZone ? 'bg-primary text-white hover:bg-primary/90' : 'bg-surface-variant text-on-surface-variant pointer-events-none'
          }`}
        >
          {selectedZone ? 'Proceed to Checkout' : 'Select a Zone'} <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}

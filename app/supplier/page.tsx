'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, ShoppingBag, ShieldCheck, Tag, Plus, Check } from 'lucide-react';
import { useMockStore } from '../../store/mockStore';

export default function SupplierDashboard() {
  const router = useRouter();
  const { user, logout } = useMockStore();
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent-purple/15 flex items-center justify-center text-accent-purple">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-semibold">Supplier Portal</span>
            <span className="text-xs font-bold text-brand-navy">Jai Durga Tiles & Granite</span>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-red-50 hover:text-red-500 text-gray-500 transition"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Online Toggle */}
      <div className="glass-card rounded-card p-4 border border-accent-purple/35 flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-sm text-brand-navy">Store Status</h3>
          <p className="text-[10px] text-gray-600">Accepting quote requests from Noida Sector 18</p>
        </div>
        <button
          onClick={() => setOnline(!online)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
            online 
              ? 'bg-green-50 text-green-600 border border-green-200' 
              : 'bg-gray-100 text-gray-400 border border-gray-200'
          }`}
        >
          {online ? '● Open Store' : '○ Closed'}
        </button>
      </div>

      {/* Incoming Bids */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Incoming Material RFQs</h3>
        <div className="space-y-3">
          <div className="glass-card rounded-card p-4 border border-gray-200 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm text-brand-navy">1200 Sq Ft Vitrified Floor Tiles</h4>
                <p className="text-[10px] text-gray-500">Requested by Anil S. • 1.5 km away</p>
              </div>
              <span className="text-[9px] font-bold bg-accent-purple/10 text-accent-purple border border-accent-purple/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Atta Market
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-normal">
              Looking for double charged vitrified tiles. Size 2x2. Standard glossy finish. Quote needed with delivery to Sector 19.
            </p>
            <div className="pt-2 flex space-x-2">
              <button className="flex-1 bg-accent-purple hover:bg-accent-purple/95 text-white font-bold text-xs py-2 px-3 rounded-lg transition active:scale-95">
                Send Price Bid
              </button>
              <button className="px-3 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg text-xs text-gray-600 transition">
                Ignore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Teaser */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Store Products</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Kajaria Glazed Tile', price: 'Rs. 65 / sq ft' },
            { name: 'Somany Polished Granite', price: 'Rs. 180 / sq ft' }
          ].map((prod, idx) => (
            <div key={idx} className="glass-card rounded-card p-3 border border-gray-200">
              <span className="text-xs font-bold text-brand-navy block truncate mb-1">{prod.name}</span>
              <span className="text-[10px] text-accent-purple font-semibold">{prod.price}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

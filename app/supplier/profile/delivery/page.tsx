'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Truck, Info, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function DeliverySettings() {
  const router = useRouter();
  
  const [offersDelivery, setOffersDelivery] = useState(true);
  const [minOrder, setMinOrder] = useState('5000');
  const [deliveryCharge, setDeliveryCharge] = useState('500');

  const handleSave = () => {
    // Save logic
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Delivery Settings</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          Set up your delivery logistics. Homeowners will see these conditions before placing orders or requesting quotes.
        </p>

        {/* Delivery Toggle */}
        <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-on-surface">Offer Delivery</h3>
              <p className="text-xs text-on-surface-variant">Deliver to customer sites</p>
            </div>
          </div>
          <button 
            onClick={() => setOffersDelivery(!offersDelivery)}
            className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${offersDelivery ? 'bg-primary' : 'bg-outline-variant'}`}
          >
            <span className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${offersDelivery ? 'left-6' : 'left-1'}`} />
          </button>
        </div>

        {/* Delivery Options */}
        {offersDelivery && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-6">
            
            <div>
              <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
                Minimum Order Value (₹)
              </label>
              <input 
                type="number"
                value={minOrder}
                onChange={(e) => setMinOrder(e.target.value)}
                className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. 5000"
              />
              <p className="text-[10px] text-on-surface-variant mt-2 ml-1 flex items-center">
                <Info className="w-3 h-3 mr-1" />
                Orders below this amount must be picked up from the store.
              </p>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
                Flat Delivery Charge (₹)
              </label>
              <input 
                type="number"
                value={deliveryCharge}
                onChange={(e) => setDeliveryCharge(e.target.value)}
                className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. 500"
              />
              <p className="text-[10px] text-on-surface-variant mt-2 ml-1">
                Standard fee for delivery within your service areas.
              </p>
            </div>

            <div className="glass-card rounded-xl p-4 border border-outline-variant bg-surface flex items-start">
              <MapPin className="w-4 h-4 text-on-surface-variant mr-3 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-on-surface">Delivery Coverage</h4>
                <p className="text-xs text-on-surface-variant mb-2 leading-relaxed">
                  Your delivery applies to the locations configured in your Service Areas setting.
                </p>
                <Link href="/supplier/profile/areas" className="text-xs font-bold text-primary hover:underline">
                  Review Service Areas
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Save Settings
        </button>
      </div>
    </div>
  );
}

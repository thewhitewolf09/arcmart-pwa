'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useConnect } from '../../../../context/ConnectContext';

export default function SupplierProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { openConnect } = useConnect();

  const profile = {
    name: 'Elite Stone & Surfaces',
    location: 'Studio 14, Stone Hub, Kishangarh',
    distance: '4.5 km away',
    rating: 4.9,
    reviewsCount: 312,
    priceRange: '₹1,200 — ₹15,000 / sq.ft.',
    leadTime: '3-5 Days',
    storeHours: '9:00 AM - 7:00 PM',
    verified: true,
    isOpen: true,
    logo: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=256&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    about: 'Premium importers and distributors of Italian marble and exotic stones. We specialize in book-matched slabs and custom surface finishes for luxury residential projects.',
    inventory: [
      { id: 1, name: 'Calacatta Borghini', origin: 'Italian Origin', finish: 'Polished', image: 'https://images.unsplash.com/photo-1620215754593-78b172b834db?q=80&w=400&auto=format&fit=crop' },
      { id: 2, name: 'Nero Antico Quartzite', origin: 'Brazilian Origin', finish: 'Honed', image: 'https://images.unsplash.com/photo-1596484552993-9c8e8749774c?q=80&w=400&auto=format&fit=crop' },
      { id: 3, name: 'Sivec White', origin: 'Macedonian Origin', finish: 'Polished', image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=400&auto=format&fit=crop' },
      { id: 4, name: 'Emerald Forest Granite', origin: 'Indian Origin', finish: 'Leathered', image: 'https://images.unsplash.com/photo-1598506161947-fccbf8322744?q=80&w=400&auto=format&fit=crop' },
    ],
    reviews: [
      { id: 1, name: 'Ar. Kabir Mehra', title: 'Studio Mehra & Associates', rating: 5, text: 'Exceptional selection of Italian slabs. We used their Statuario for a penthouse project in Worli, and the book-matching was handled with surgical precision by their team.' },
      { id: 2, name: 'Sanjay Shah', title: 'Contractor, Prime Builds', rating: 5, text: 'Transparent pricing and incredibly fast delivery. The logistics were managed seamlessly from Rajasthan to our site in Pune. Highly recommended.' }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24">
      {/* Floating Header Actions */}
      <div className="fixed top-0 left-0 right-0 pt-safe px-4 py-4 flex items-center justify-between z-30 pointer-events-none">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center border border-outline-variant/20 shadow-sm pointer-events-auto active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center border border-outline-variant/20 shadow-sm pointer-events-auto active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-on-surface">share</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[280px] w-full bg-surface-container-high">
        <img src={profile.coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        
        {/* Logo overlay */}
        <div className="absolute -bottom-10 left-5">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-background bg-surface shadow-md relative">
            <img src={profile.logo} alt={profile.name} className="w-full h-full object-cover" />
          </div>
          {profile.verified && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full border-2 border-background flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          )}
        </div>
      </div>

      {/* Shop Info */}
      <div className="px-5 pt-14">
        <div className="flex justify-between items-start mb-1">
          <h1 className="font-headline-lg text-[22px] font-bold text-on-surface leading-tight pr-2">{profile.name}</h1>
          {profile.isOpen && (
             <span className="inline-flex items-center px-2 py-0.5 rounded bg-success/10 text-success font-label-sm text-[10px] uppercase font-bold tracking-widest border border-success/20 flex-shrink-0">
               Open
             </span>
          )}
        </div>
        
        <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mb-6">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          {profile.location}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
               <span className="material-symbols-outlined text-primary text-[16px]">payments</span>
             </div>
             <div>
               <p className="font-label-sm text-on-surface-variant text-[10px] uppercase">Price Range</p>
               <p className="font-label-md font-bold text-on-surface">{profile.priceRange}</p>
             </div>
          </div>
          <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
               <span className="material-symbols-outlined text-primary text-[16px]">local_shipping</span>
             </div>
             <div>
               <p className="font-label-sm text-on-surface-variant text-[10px] uppercase">Lead Time</p>
               <p className="font-label-md font-bold text-on-surface">{profile.leadTime}</p>
             </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="font-title-md text-[18px] font-bold text-on-surface mb-2">About the Store</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {profile.about}
          </p>
        </div>

        {/* Material Inventory */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-title-md text-[18px] font-bold text-on-surface">Material Inventory</h2>
              <p className="font-body-sm text-on-surface-variant">Curated samples from current stock</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {profile.inventory.map(item => (
              <div key={item.id} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm group cursor-pointer">
                <div className="h-32 w-full overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="font-label-md font-bold text-on-surface mb-0.5 line-clamp-1">{item.name}</h3>
                  <p className="font-body-sm text-on-surface-variant text-[11px] mb-2">{item.origin} • {item.finish}</p>
                  <button className="w-full py-1.5 rounded-lg border border-primary text-primary font-label-sm uppercase tracking-wide hover:bg-primary/5 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <h2 className="font-title-md text-[18px] font-bold text-on-surface mb-4">Client Experiences</h2>
          <div className="space-y-4">
            {profile.reviews.map(review => (
              <div key={review.id} className="p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 relative">
                <span className="material-symbols-outlined absolute top-4 right-4 text-outline-variant/20 text-[40px] pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-[16px] ${i < review.rating ? 'text-primary' : 'text-outline-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface italic mb-4 relative z-10 text-[15px] leading-relaxed">"{review.text}"</p>
                <div className="flex flex-col">
                  <span className="font-label-lg font-bold text-on-surface">{review.name}</span>
                  <span className="font-body-sm text-primary font-medium">{review.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md border-t border-outline-variant p-4 pb-safe flex gap-3 z-30">
        <div className="flex gap-3 max-w-lg mx-auto w-full">
          <button className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-3 rounded-full font-label-lg font-bold flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-[20px]">call</span>
            Call
          </button>
          <button 
            onClick={() => openConnect('supplier', params.id, profile.name)}
            className="flex-[2] bg-[#25D366] text-white py-3 rounded-full font-label-lg font-bold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
}

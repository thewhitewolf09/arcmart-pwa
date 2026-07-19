'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Plus, MapPin, Eye, MessageSquare, IndianRupee } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantProperties() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');

  const properties = [
    {
      id: 'P-101',
      title: 'Luxury 3BHK in Cleo County',
      location: 'Sector 121, Noida',
      price: '₹1.85 Cr',
      type: 'Sale',
      status: 'Active',
      views: 142,
      leads: 12,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      id: 'P-102',
      title: 'Fully Furnished 2BHK',
      location: 'Sector 50, Noida',
      price: '₹45,000 / month',
      type: 'Rent',
      status: 'Active',
      views: 89,
      leads: 5,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d93688?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      id: 'P-103',
      title: 'Commercial Office Space',
      location: 'Sector 62, Noida',
      price: '₹65,000 / month',
      type: 'Rent',
      status: 'Inactive',
      views: 34,
      leads: 0,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300',
    }
  ];

  const filteredProperties = filter === 'All' ? properties : properties.filter(p => p.type === filter);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface pb-24">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-4 flex flex-col space-y-4 border-b border-outline-variant">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-on-surface">My Listings</h1>
          <Link href="/consultant/properties/add" className="p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition shadow-md shadow-primary/20">
            <Plus className="w-5 h-5" />
          </Link>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text"
            placeholder="Search properties..."
            className="w-full bg-surface-variant/50 border border-outline-variant rounded-full py-3 pl-12 pr-4 text-sm font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex space-x-2">
          {['All', 'Sale', 'Rent'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition ${
                filter === f 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-5">
        {filteredProperties.map((prop) => (
          <div key={prop.id} className="glass-card border border-outline-variant rounded-3xl overflow-hidden shadow-sm">
            
            {/* Image & Badges */}
            <div className="h-40 w-full relative">
              <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest text-on-surface shadow-sm">
                For {prop.type}
              </div>
              <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-sm ${
                prop.status === 'Active' ? 'bg-success text-white' : 'bg-error text-white'
              }`}>
                {prop.status}
              </div>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="font-bold text-on-surface text-base mb-1 truncate">{prop.title}</h3>
              <p className="text-xs text-on-surface-variant font-semibold flex items-center mb-3">
                <MapPin className="w-3.5 h-3.5 mr-1" /> {prop.location}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-primary font-black text-lg">
                  <IndianRupee className="w-4 h-4 mr-0.5" /> {prop.price.replace('₹', '')}
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-outline-variant/50">
                <div className="flex space-x-4">
                  <div className="flex items-center text-xs font-bold text-on-surface-variant">
                    <Eye className="w-4 h-4 mr-1.5 text-secondary" /> {prop.views}
                  </div>
                  <Link href={`/consultant/properties/${prop.id}/leads`} className="flex items-center text-xs font-bold text-primary hover:underline">
                    <MessageSquare className="w-4 h-4 mr-1.5" /> {prop.leads} Leads
                  </Link>
                </div>
                <Link href={`/consultant/properties/${prop.id}/edit`} className="text-xs font-bold text-on-surface underline">
                  Edit
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

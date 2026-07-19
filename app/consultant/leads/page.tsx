'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, Phone, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ConsultantLeads() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');

  const leads = [
    {
      id: 'L-9001',
      name: 'Amit Kumar',
      requirement: '3BHK Apartment',
      location: 'Noida Extension',
      budget: '₹80L - 1Cr',
      status: 'New',
      time: '2 hours ago',
    },
    {
      id: 'L-9002',
      name: 'Sneha Reddy',
      requirement: 'Villa / Independent House',
      location: 'Sector 50, Noida',
      budget: '₹2Cr - 3Cr',
      status: 'Contacted',
      time: 'Yesterday',
    },
    {
      id: 'L-9003',
      name: 'Vikas Sharma',
      requirement: 'Commercial Shop',
      location: 'Greater Noida West',
      budget: '₹50L - 75L',
      status: 'Closed',
      time: '3 days ago',
    }
  ];

  const filteredLeads = filter === 'All' ? leads : leads.filter(l => l.status === filter);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface pb-24">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-4 flex flex-col space-y-4 border-b border-outline-variant">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-on-surface">My Leads</h1>
          <button className="p-2 bg-surface-variant rounded-full text-on-surface-variant">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text"
            placeholder="Search leads..."
            className="w-full bg-surface-variant/50 border border-outline-variant rounded-full py-3 pl-12 pr-4 text-sm font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
          {['All', 'New', 'Contacted', 'Site Visit', 'Closed'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition ${
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

      <div className="flex-1 p-4 space-y-4">
        {filteredLeads.map((lead) => (
          <Link href={`/consultant/leads/${lead.id}`} key={lead.id} className="block glass-card border border-outline-variant rounded-3xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-black text-on-surface mb-0.5">{lead.name}</h3>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">{lead.time}</p>
              </div>
              <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${
                lead.status === 'New' ? 'bg-error/10 text-error' :
                lead.status === 'Contacted' ? 'bg-primary/10 text-primary' :
                'bg-success/10 text-success'
              }`}>
                {lead.status}
              </span>
            </div>

            <div className="space-y-2 mb-5">
              <div className="flex items-center text-sm font-semibold text-on-surface">
                <div className="w-6 flex justify-center mr-2"><MapPin className="w-4 h-4 text-on-surface-variant" /></div>
                {lead.location}
              </div>
              <div className="flex items-center text-sm font-semibold text-on-surface">
                <div className="w-6 flex justify-center mr-2"><span className="text-on-surface-variant font-bold">₹</span></div>
                {lead.budget}
              </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-outline-variant/30">
              <button 
                onClick={(e) => { e.preventDefault(); /* Call logic */ }}
                className="flex-1 py-2.5 bg-primary/10 text-primary text-xs font-bold rounded-xl flex items-center justify-center hover:bg-primary/20 transition"
              >
                <Phone className="w-4 h-4 mr-1.5" /> Call
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); /* WhatsApp logic */ }}
                className="flex-1 py-2.5 bg-surface-variant text-on-surface text-xs font-bold rounded-xl flex items-center justify-center hover:bg-outline-variant transition"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 text-success" /> WhatsApp
              </button>
            </div>
          </Link>
        ))}

        {filteredLeads.length === 0 && (
          <div className="text-center py-10 opacity-50">
            <p className="font-bold text-on-surface">No leads found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

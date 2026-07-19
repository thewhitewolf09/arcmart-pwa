'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Phone, MessageSquare, MapPin, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { Footer } from '../../../components/ui/Footer';

export default function LeadsHistory() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  const leads = [
    { id: 'L-1005', name: 'Bathroom Renovation', location: 'Sector 50, Noida', client: 'Rahul S.', status: 'New', time: '10 mins ago', amount: '₹85k - ₹1.2L' },
    { id: 'L-995', name: 'Modular Kitchen Install', location: 'Indirapuram', client: 'Priya K.', status: 'Contacted', time: 'Yesterday', amount: '₹1.5L - ₹2L' },
    { id: 'L-980', name: 'Full House Painting', location: 'Greater Noida West', client: 'Amit V.', status: 'Done', time: '12 Oct', amount: '₹45k' },
    { id: 'L-972', name: 'Plumbing Repair', location: 'Sector 62, Noida', client: 'Neha M.', status: 'Done', time: '10 Oct', amount: '₹2k' },
  ];

  const filteredLeads = activeTab === 'All' ? leads : leads.filter(l => l.status === activeTab);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-5 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-on-surface">Leads History</h1>
        <button 
          onClick={() => setFilterOpen(true)}
          className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface hover:bg-outline-variant transition"
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="px-5 pt-4 pb-24">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search leads by ID, client or area..."
            className="w-full bg-surface-variant/50 border border-outline-variant rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-on-surface focus:outline-none focus:border-primary transition"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2 mb-6">
          {['All', 'New', 'Contacted', 'Done'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                activeTab === tab 
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Lead List */}
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <Link key={lead.id} href={`/pro/leads/${lead.id}`} className="glass-card rounded-3xl p-5 border border-outline-variant shadow-sm block hover:bg-surface-variant transition">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{lead.id}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  lead.status === 'New' ? 'bg-success-container text-success-dark' :
                  lead.status === 'Contacted' ? 'bg-warning-container text-warning-dark' :
                  'bg-surface-variant text-on-surface-variant'
                }`}>
                  {lead.status}
                </span>
              </div>
              <h3 className="font-bold text-base text-on-surface mb-1">{lead.name}</h3>
              <div className="flex items-center text-xs font-semibold text-on-surface-variant mb-4">
                <MapPin className="w-3.5 h-3.5 mr-1" /> {lead.location}
                <span className="mx-2">•</span>
                {lead.client}
              </div>
              
              <div className="flex items-center justify-between border-t border-outline-variant/50 pt-4">
                <span className="text-sm font-black text-on-surface">{lead.amount}</span>
                
                {lead.status !== 'Done' ? (
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center hover:bg-success/20 transition">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center text-[10px] font-bold text-on-surface-variant">
                    <CheckCircle2 className="w-4 h-4 mr-1" /> COMPLETED {lead.time}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Filter Sheet (PRO-06) */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setFilterOpen(false)}></div>
          <div className="bg-surface w-full rounded-t-3xl shadow-2xl relative z-10 p-6 pb-safe animate-in slide-in-from-bottom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filter Leads</h2>
              <button onClick={() => setFilterOpen(false)} className="p-2 bg-surface-variant rounded-full text-on-surface"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Time Range</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-xl text-xs font-bold bg-primary text-white">Any Time</button>
                  <button className="px-4 py-2 rounded-xl text-xs font-bold bg-surface-variant text-on-surface">Last 7 Days</button>
                  <button className="px-4 py-2 rounded-xl text-xs font-bold bg-surface-variant text-on-surface">Last 30 Days</button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Locality</h3>
                <select className="w-full bg-surface-variant border border-outline-variant rounded-xl px-4 py-3 text-sm font-semibold text-on-surface focus:outline-none">
                  <option>All Locations</option>
                  <option>Noida Sector 18</option>
                  <option>Noida Sector 50</option>
                  <option>Indirapuram</option>
                </select>
              </div>

              <button 
                onClick={() => setFilterOpen(false)}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary/90 transition shadow-lg shadow-primary/30"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

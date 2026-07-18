'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMockStore } from '../../../store/mockStore';
import Link from 'next/link';
import { ArrowLeft, SlidersHorizontal, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import LeadsFilterSheet from '../../../components/supplier/LeadsFilterSheet';
import { Footer } from '../../../components/ui/Footer';

const LEADS_DATA = [
  {
    id: 'L-1001',
    title: '1200 Sq Ft Vitrified Floor Tiles',
    customer: 'Anil S.',
    distance: '1.5 km away',
    time: '2h ago',
    description: 'Looking for double charged vitrified tiles. Size 2x2. Standard glossy finish. Quote needed with delivery to Sector 19.',
    status: 'new'
  },
  {
    id: 'L-1002',
    title: 'Black Granite For Kitchen Countertop',
    customer: 'Rahul K.',
    distance: '3.2 km away',
    time: '5h ago',
    description: 'Premium black granite needed for a 15ft L-shaped kitchen counter. Need edge polishing and sink cutout included in price.',
    status: 'new'
  },
  {
    id: 'L-0998',
    title: 'Bathroom Wall Tiles (400 Sq Ft)',
    customer: 'Priya M.',
    distance: '4.0 km away',
    time: '1d ago',
    description: 'Ceramic wall tiles required for 2 bathrooms. Matte finish preferred. Budget around Rs. 40/sqft.',
    status: 'contacted'
  },
  {
    id: 'L-0995',
    title: 'Italian Marble For Living Room',
    customer: 'Vikram D.',
    distance: '5.5 km away',
    time: '3d ago',
    description: 'Dyna or Botticino marble for 800 sq ft area. Quality must be premium. Ready to visit store if price is good.',
    status: 'converted'
  },
];

export default function SupplierLeads() {
  const router = useRouter();
  const { user } = useMockStore();
  const [activeTab, setActiveTab] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (!user) {
    router.push('/auth');
    return null;
  }

  const filteredLeads = LEADS_DATA.filter(lead => {
    if (activeTab === 'all') return true;
    return lead.status === activeTab;
  });

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2xl font-bold text-on-surface tracking-tight">Leads</h1>
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="p-2.5 rounded-lg bg-surface-variant text-on-surface border border-outline-variant flex items-center shadow-sm hover:bg-outline-variant transition"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {['all', 'new', 'contacted', 'converted'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border shadow-sm ${
              activeTab === tab
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Leads List */}
      <div className="space-y-4">
        {filteredLeads.length > 0 ? (
          filteredLeads.map((lead) => (
            <div key={lead.id} className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm relative overflow-hidden flex flex-col">
              {lead.status === 'new' && <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>}
              {lead.status === 'converted' && <div className="absolute top-0 left-0 w-1 h-full bg-success"></div>}
              {lead.status === 'contacted' && <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>}
              
              <div className="flex justify-between items-start mb-3">
                <div className="pr-2">
                  {lead.status === 'new' && (
                    <span className="text-[9px] font-bold bg-error-container text-error px-2 py-1 rounded border border-error/20 uppercase tracking-wider mb-2 inline-flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> Action Required
                    </span>
                  )}
                  {lead.status === 'converted' && (
                    <span className="text-[9px] font-bold bg-success-container text-success px-2 py-1 rounded border border-success/20 uppercase tracking-wider mb-2 inline-flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Won
                    </span>
                  )}
                  {lead.status === 'contacted' && (
                    <span className="text-[9px] font-bold bg-secondary-container text-secondary-dark px-2 py-1 rounded border border-secondary/20 uppercase tracking-wider mb-2 inline-flex items-center">
                      Contacted
                    </span>
                  )}
                  <h4 className="font-bold text-base text-on-surface leading-tight">{lead.title}</h4>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant whitespace-nowrap bg-surface-variant px-2 py-1 rounded border border-outline-variant">{lead.time}</span>
              </div>
              
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
                {lead.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/50">
                <div className="flex items-center text-xs text-on-surface-variant">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary mr-2">
                    {lead.customer.substring(0,2).toUpperCase()}
                  </div>
                  {lead.customer}
                </div>
                <Link href={`/supplier/leads/${lead.id}`} className="bg-surface-variant text-on-surface text-xs font-bold px-4 py-2 rounded-lg border border-outline hover:bg-outline-variant transition">
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-4 border border-outline-variant">
              <SlidersHorizontal className="w-8 h-8 text-on-surface-variant" />
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2">No leads found</h3>
            <p className="text-sm text-on-surface-variant">We couldn't find any leads matching the current filter.</p>
          </div>
        )}
      </div>

      {/* Filter Sheet (SUP-10) */}
      <LeadsFilterSheet isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      
      <Footer />
    </div>
  );
}

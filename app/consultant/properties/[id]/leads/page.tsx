'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, MessageSquare, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function PropertyLeads({ params }: { params: { id: string } }) {
  const router = useRouter();

  const leads = [
    {
      id: 'L-1011',
      name: 'Rohan Gupta',
      time: '2 hours ago',
      status: 'New'
    },
    {
      id: 'L-1012',
      name: 'Pooja Singh',
      time: 'Yesterday',
      status: 'Contacted'
    },
    {
      id: 'L-1013',
      name: 'Rajeev Verma',
      time: '2 days ago',
      status: 'Site Visit'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex flex-col justify-between">
        <div className="flex items-center mb-3">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-on-surface truncate">Leads for {params.id}</h1>
          </div>
        </div>
        
        {/* Context Card */}
        <div className="bg-surface-variant rounded-xl p-3 flex items-center shadow-sm border border-outline-variant/50">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=80&h=80" alt="Property" className="w-12 h-12 rounded-lg object-cover mr-3" />
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-bold text-on-surface truncate">Luxury 3BHK in Cleo County</h2>
            <p className="text-[10px] text-on-surface-variant font-semibold flex items-center mt-0.5">
              <MapPin className="w-3 h-3 mr-1" /> Sector 121, Noida
            </p>
          </div>
          <div className="text-primary font-black text-sm ml-2">₹1.85 Cr</div>
        </div>
      </div>

      <div className="flex-1 p-4 pb-safe space-y-4 pt-5">
        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
          {leads.length} Interested Buyers
        </h3>

        {leads.map((lead) => (
          <Link href={`/consultant/leads/${lead.id}`} key={lead.id} className="block glass-card border border-outline-variant rounded-2xl p-4 shadow-sm hover:border-primary/30 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center mr-3">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">{lead.name}</h4>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{lead.time}</p>
                </div>
              </div>
              <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
                lead.status === 'New' ? 'bg-error/10 text-error' :
                lead.status === 'Contacted' ? 'bg-primary/10 text-primary' :
                'bg-success/10 text-success'
              }`}>
                {lead.status}
              </span>
            </div>

            <div className="flex space-x-3 pt-3 border-t border-outline-variant/30">
              <button 
                onClick={(e) => { e.preventDefault(); }}
                className="flex-1 py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg flex items-center justify-center hover:bg-primary/20 transition"
              >
                <Phone className="w-4 h-4 mr-1.5" /> Call
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); }}
                className="flex-1 py-2 bg-surface-variant text-on-surface text-xs font-bold rounded-lg flex items-center justify-center hover:bg-outline-variant transition"
              >
                <MessageSquare className="w-4 h-4 mr-1.5 text-success" /> WhatsApp
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

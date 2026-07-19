'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Ticket as TicketIcon, Search, Plus } from 'lucide-react';

export default function MyTickets() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'open' | 'closed'>('open');

  const tickets = [
    { id: 'TCK-9921', subject: 'GST Verification Failed', date: 'Today, 10:30 AM', status: 'In Progress', type: 'open', unread: true },
    { id: 'TCK-9840', subject: 'Lead Quality Dispute', date: 'Oct 24, 2026', status: 'Open', type: 'open', unread: false },
    { id: 'TCK-9102', subject: 'Refund Request', date: 'Oct 15, 2026', status: 'Resolved', type: 'closed', unread: false },
    { id: 'TCK-8901', subject: 'Profile photo rejected', date: 'Sep 28, 2026', status: 'Resolved', type: 'closed', unread: false },
  ];

  const filteredTickets = tickets.filter(t => t.type === activeTab);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface">My Tickets</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col pb-safe">
        
        {/* Search & Tabs */}
        <div className="p-4 border-b border-outline-variant/50 bg-surface-container-lowest">
          <div className="relative mb-4">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search ticket ID or subject..."
              className="w-full h-12 pl-10 pr-4 bg-surface-container rounded-xl border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm font-medium transition"
            />
          </div>

          <div className="flex bg-surface-container rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('open')}
              className={`flex-1 py-2 rounded-md text-sm font-bold transition ${activeTab === 'open' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant'}`}
            >
              Open (2)
            </button>
            <button 
              onClick={() => setActiveTab('closed')}
              className={`flex-1 py-2 rounded-md text-sm font-bold transition ${activeTab === 'closed' ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant'}`}
            >
              Closed
            </button>
          </div>
        </div>

        {/* Ticket List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {filteredTickets.map((ticket) => (
              <button 
                key={ticket.id}
                onClick={() => router.push(`/support/ticket/${ticket.id}`)}
                className="w-full text-left bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 hover:border-primary/50 transition relative overflow-hidden"
              >
                {ticket.unread && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full m-4 shadow-sm" />
                )}
                <div className="flex items-center justify-between mb-2 pr-6">
                  <span className="font-mono text-xs font-bold text-primary">{ticket.id}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                    ticket.status === 'Resolved' ? 'bg-success/10 text-success-dark' : 
                    ticket.status === 'In Progress' ? 'bg-warning/10 text-warning-dark' : 
                    'bg-surface-variant text-on-surface-variant'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <h3 className="font-bold text-on-surface text-sm mb-1 pr-6 truncate">{ticket.subject}</h3>
                <p className="text-xs text-on-surface-variant font-medium">{ticket.date}</p>
              </button>
            ))}

            {filteredTickets.length === 0 && (
              <div className="py-12 text-center flex flex-col items-center">
                <TicketIcon className="w-12 h-12 text-outline-variant mb-3" />
                <p className="text-sm font-bold text-on-surface">No tickets found</p>
                <p className="text-xs text-on-surface-variant mt-1">You don't have any {activeTab} tickets.</p>
              </div>
            )}
          </div>
        </div>

        {/* FAB */}
        <div className="p-4 bg-surface border-t border-outline-variant/30 pb-32">
          <button 
            onClick={() => router.push('/support/ticket/new')}
            className="w-full h-14 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition"
          >
            <Plus className="w-5 h-5" /> Submit New Ticket
          </button>
        </div>

      </div>
    </div>
  );
}

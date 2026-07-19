'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Copy, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TicketSuccess() {
  const router = useRouter();
  const ticketId = 'TCK-9921';

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center pb-32">
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mb-6 relative"
        >
          <div className="absolute inset-0 bg-success/20 rounded-full animate-ping opacity-20" />
          <CheckCircle2 className="w-12 h-12 text-success" />
        </motion.div>

        <h1 className="text-2xl font-black text-on-surface mb-2">Ticket Submitted!</h1>
        <p className="text-sm text-on-surface-variant font-medium max-w-[280px] leading-relaxed mb-8">
          Our support team has received your request and will get back to you within 24 hours.
        </p>

        <div className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-5 mb-8 shadow-sm">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Your Reference ID</p>
          <div className="flex items-center justify-center gap-3">
            <span className="font-mono text-xl font-black text-primary tracking-widest">{ticketId}</span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(ticketId);
                alert('Copied to clipboard!');
              }}
              className="p-2 bg-surface-variant rounded-lg text-on-surface-variant hover:text-primary transition"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button 
          onClick={() => router.push(`/support/ticket/${ticketId}`)}
          className="w-full h-14 bg-primary text-white rounded-full font-bold shadow-md shadow-primary/20 flex items-center justify-center mb-4 transition active:scale-95"
        >
          View Ticket Details
        </button>

        <button 
          onClick={() => router.push('/support/tickets')}
          className="w-full h-14 bg-surface border border-outline-variant text-on-surface rounded-full font-bold flex items-center justify-center hover:bg-surface-variant transition active:scale-95"
        >
          Back to My Tickets
        </button>

      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';

function ConnectionCard({ name, profession, date, status, unread }: any) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 active:bg-surface-container transition-colors cursor-pointer shadow-sm relative">
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-outline-variant/30">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        {unread && (
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-surface-container-lowest"></div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-label-lg font-bold text-on-surface truncate pr-2">{name}</h3>
          <span className="font-body-sm text-on-surface-variant flex-shrink-0 text-[12px]">{date}</span>
        </div>
        
        <p className="font-body-sm text-on-surface-variant truncate mb-2">{profession}</p>
        
        <div className="flex items-center gap-2">
          <span className={`font-label-sm font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider ${
            status === 'active' ? 'bg-[#E5F7ED] text-[#147A3B]' : 'bg-surface-container text-on-surface-variant'
          }`}>
            {status === 'active' ? 'Active' : 'Past'}
          </span>
        </div>
      </div>
      
      {/* WhatsApp Action */}
      <div className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366]">
        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
      </div>
    </div>
  );
}

export default function ConnectionsPage() {
  const connections = [
    { id: 1, name: "Ramesh Sharma", profession: "Plumber", date: "Today", status: "active", unread: true },
    { id: 2, name: "Gupta Hardwares", profession: "Material Supplier", date: "Oct 24", status: "past", unread: false },
    { id: 3, name: "Ajay Painters", profession: "Painting Contractor", date: "Sep 15", status: "past", unread: false },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <header className="px-4 pt-12 pb-6 bg-surface border-b border-outline-variant/30 sticky top-0 z-20">
        <h1 className="font-headline-md font-bold text-on-surface">Connections</h1>
        <p className="font-body-sm text-on-surface-variant mt-1">Your recent inquiries and conversations</p>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        {connections.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            {connections.map((item) => (
              <ConnectionCard key={item.id} {...item} />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant">forum</span>
            </div>
            <h2 className="font-label-lg font-bold text-on-surface mb-2">No connections yet</h2>
            <p className="font-body-md text-on-surface-variant max-w-[250px]">
              When you contact a professional or supplier, they will appear here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

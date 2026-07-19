'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bell, Wallet, ShieldCheck, Zap } from 'lucide-react';

export default function Notifications() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      type: 'lead',
      title: 'New Lead: Rajesh from Sector 50',
      message: 'Looking for a plumber for a bathroom fitting. Budget ₹500.',
      time: '10 mins ago',
      read: false,
    },
    {
      id: 2,
      type: 'wallet',
      title: 'Wallet Top-up Successful',
      message: '₹490 has been added to your wallet. You now have 10 leads available.',
      time: '2 hours ago',
      read: true,
    },
    {
      id: 3,
      type: 'system',
      title: 'Profile Approved',
      message: 'Your profile has been verified! Go online to start receiving jobs.',
      time: '1 day ago',
      read: true,
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Notifications</span>
        </div>
      </div>

      <div className="flex-1 p-5 pb-safe">
        {notifications.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-center opacity-50">
            <Bell className="w-12 h-12 mb-3" />
            <p className="font-bold">No notifications yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((note) => (
              <div 
                key={note.id} 
                className={`glass-card border rounded-2xl p-4 flex items-start ${
                  note.read ? 'border-outline-variant/50 bg-surface-variant/30 opacity-70' : 'border-primary/30 bg-primary/5 shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0 ${
                  note.type === 'lead' ? 'bg-primary/20 text-primary' : 
                  note.type === 'wallet' ? 'bg-success/20 text-success' : 
                  'bg-secondary/20 text-secondary'
                }`}>
                  {note.type === 'lead' && <Zap className="w-5 h-5" />}
                  {note.type === 'wallet' && <Wallet className="w-5 h-5" />}
                  {note.type === 'system' && <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-bold text-on-surface mb-1">{note.title}</p>
                    {!note.read && <div className="w-2 h-2 bg-primary rounded-full mt-1.5 ml-2 shrink-0"></div>}
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed mb-1">{note.message}</p>
                  <p className="text-[10px] text-on-surface-variant/70 font-bold uppercase tracking-widest">{note.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bell, Wallet, Home, UserCheck, Zap } from 'lucide-react';

export default function ConsultantNotifications() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      type: 'lead',
      title: 'New Lead: 3BHK in Indiranagar',
      message: 'A buyer is looking for a 3BHK apartment. Budget: ₹1.5 Cr.',
      time: '10 mins ago',
      read: false,
      icon: <UserCheck className="w-5 h-5 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      id: 2,
      type: 'wallet',
      title: 'Welcome Bonus Credited',
      message: '5 Free Leads have been added to your wallet successfully.',
      time: '2 hours ago',
      read: false,
      icon: <Zap className="w-5 h-5 text-success fill-success" />,
      bg: 'bg-success/10'
    },
    {
      id: 3,
      type: 'property',
      title: 'Listing Approved',
      message: 'Your property "Luxury Villa in HSR Layout" is now live on ArcMart.',
      time: 'Yesterday',
      read: true,
      icon: <Home className="w-5 h-5 text-secondary" />,
      bg: 'bg-secondary/10'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Low Balance Alert',
      message: 'You have only 2 leads left. Top up now to avoid missing out on buyers.',
      time: '2 days ago',
      read: true,
      icon: <Wallet className="w-5 h-5 text-error" />,
      bg: 'bg-error/10'
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Notifications</span>
        </div>
      </div>

      <div className="flex-1 p-4 pb-24 space-y-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id}
            className={`glass-card border rounded-2xl p-4 flex gap-4 transition cursor-pointer ${
              notif.read ? 'border-outline-variant bg-surface' : 'border-primary/30 bg-primary/5 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${notif.bg}`}>
              {notif.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h4 className={`text-sm font-bold ${notif.read ? 'text-on-surface' : 'text-primary'}`}>
                  {notif.title}
                </h4>
                {!notif.read && <div className="w-2 h-2 rounded-full bg-primary mt-1 shrink-0"></div>}
              </div>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{notif.message}</p>
              <p className="text-[10px] font-bold text-on-surface-variant/70 mt-2 uppercase tracking-widest">{notif.time}</p>
            </div>
          </div>
        ))}
        
        <div className="flex flex-col items-center justify-center py-10 opacity-50">
          <Bell className="w-12 h-12 text-outline-variant mb-3" />
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">No older notifications</p>
        </div>
      </div>
    </div>
  );
}

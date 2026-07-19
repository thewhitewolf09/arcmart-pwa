'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function NotificationCard({ id, type, title, message, time, isUnread }: any) {
  const router = useRouter();
  
  let icon = 'notifications';
  let iconColor = 'text-primary';
  let bgColor = 'bg-primary/10';

  if (type === 'quote') {
    icon = 'request_quote';
    iconColor = 'text-[#147A3B]';
    bgColor = 'bg-[#E5F7ED]';
  } else if (type === 'review') {
    icon = 'star_rate';
    iconColor = 'text-[#F59E0B]';
    bgColor = 'bg-[#F59E0B]/10';
  }

  return (
    <div 
      onClick={() => router.push(`/notifications/${id}`)}
      className={`relative p-4 mb-2 rounded-2xl cursor-pointer transition-colors active:scale-[0.98] ${
        isUnread ? 'bg-surface-container border border-primary/20' : 'bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container/50'
      }`}
    >
      {isUnread && (
        <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"></div>
      )}
      
      <div className="flex gap-4">
        <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${bgColor}`}>
          <span className={`material-symbols-outlined ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
        
        <div className="flex-1 min-w-0 pr-4">
          <h3 className={`font-label-lg truncate mb-1 ${isUnread ? 'font-bold text-on-surface' : 'font-medium text-on-surface'}`}>
            {title}
          </h3>
          <p className={`font-body-sm line-clamp-2 leading-relaxed mb-2 ${isUnread ? 'text-on-surface' : 'text-on-surface-variant'}`}>
            {message}
          </p>
          <span className="font-label-sm text-on-surface-variant text-[11px] uppercase tracking-wider">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default function NotificationsCenterPage() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      type: 'quote',
      title: 'New Quote Received',
      message: 'Ramesh Sharma (Plumber) has sent you a quote for "Pipe Leakage Repair". Tap to view details.',
      time: '2 hours ago',
      isUnread: true,
    },
    {
      id: 2,
      type: 'review',
      title: 'Leave a Review',
      message: 'Your job with Ajay Painters was completed 3 days ago. How was your experience?',
      time: 'Yesterday',
      isUnread: true,
    },
    {
      id: 3,
      type: 'alert',
      title: 'New Professionals in Indiranagar',
      message: '3 top-rated electricians just joined ArcMart in your area. Check them out for your next project.',
      time: 'Oct 24, 2023',
      isUnread: false,
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-sm font-bold text-on-surface">Notifications</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-primary font-label-md font-bold">
            Mark all read
          </button>
          <button 
            onClick={() => router.push('/account/notifications/settings')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -mr-2"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col"
        >
          {notifications.map((notif, index) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <NotificationCard {...notif} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

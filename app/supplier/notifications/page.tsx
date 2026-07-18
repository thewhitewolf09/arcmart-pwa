'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bell, Star, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function Notifications() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      type: 'warning',
      title: 'Action Required: Low Response Rate',
      message: 'Your response rate has fallen below 50%. Please reply to pending leads within 24 hours to stay active.',
      time: '2 hours ago',
      unread: true,
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'success',
      title: 'Profile Approved!',
      message: 'Your supplier profile has been successfully verified. You are now live on ArcMart.',
      time: '1 day ago',
      unread: true,
      icon: ShieldCheck
    },
    {
      id: 3,
      type: 'info',
      title: 'New Lead Match',
      message: 'Rahul K. is looking for Black Granite in Sector 18. Tap to view details and quote.',
      time: '2 days ago',
      unread: false,
      icon: Zap
    },
    {
      id: 4,
      type: 'review',
      title: 'New 5-Star Review',
      message: 'Anil S. left a review: "Excellent quality tiles and timely delivery!"',
      time: '1 week ago',
      unread: false,
      icon: Star
    }
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
        <button className="text-xs font-bold text-primary hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-3">
        {notifications.map((notif) => {
          const Icon = notif.icon;
          
          let colorClass = 'text-primary bg-primary/10';
          if (notif.type === 'warning') colorClass = 'text-error bg-error-container';
          if (notif.type === 'success') colorClass = 'text-success-dark bg-success-container';
          if (notif.type === 'review') colorClass = 'text-yellow-600 bg-yellow-100';

          return (
            <div 
              key={notif.id} 
              className={`p-4 rounded-2xl border transition relative overflow-hidden ${
                notif.unread 
                  ? 'border-primary/30 bg-primary/5 shadow-sm' 
                  : 'border-outline-variant glass-card hover:bg-surface-variant'
              }`}
            >
              {notif.unread && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              )}
              
              <div className="flex items-start">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0 ${colorClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="pr-6">
                  <h4 className={`text-sm mb-1 ${notif.unread ? 'font-black text-on-surface' : 'font-bold text-on-surface'}`}>
                    {notif.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                    {notif.message}
                  </p>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {notif.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

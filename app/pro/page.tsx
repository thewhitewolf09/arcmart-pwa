'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Power, MapPin, Target, Wallet, TrendingUp, Bell, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../../components/ui/Footer';

export default function ProDashboard() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface relative pb-24">
      {/* Background Pulse Effect when Online */}
      {isOnline && (
        <div className="absolute top-0 left-0 w-full h-64 bg-success/10 blur-[80px] pointer-events-none transition-all duration-1000"></div>
      )}

      {/* Header */}
      <div className="p-5 flex justify-between items-start relative z-10">
        <div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest block font-semibold mb-1">
            Service Professional
          </span>
          <h1 className="text-2xl font-bold text-on-surface tracking-tight">
            Hi, <span className="text-primary">Arun Sharma</span>
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/pro/notifications" className="w-10 h-10 rounded-full bg-secondary-container/30 border border-outline-variant flex items-center justify-center text-on-surface hover:bg-secondary-container transition">
            <Bell className="w-5 h-5" />
          </Link>
          <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-outline font-bold text-on-surface-variant">
            AS
          </div>
        </div>
      </div>

      {/* Online/Offline Toggle Panel */}
      <div className="px-5 mb-8 relative z-10">
        <div className={`rounded-3xl p-6 shadow-sm border transition-all duration-500 flex flex-col items-center justify-center ${
          isOnline 
            ? 'bg-success/10 border-success/30 shadow-[0_0_40px_rgba(37,211,102,0.15)]' 
            : 'glass-card border-outline-variant'
        }`}>
          
          <button 
            onClick={() => setIsOnline(!isOnline)}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl mb-4 relative ${
              isOnline 
                ? 'bg-success text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]' 
                : 'bg-surface-variant text-on-surface hover:bg-outline-variant border border-outline'
            }`}
          >
            {isOnline && (
              <>
                <div className="absolute inset-0 bg-success rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 bg-success rounded-full animate-pulse opacity-40"></div>
              </>
            )}
            <Power className={`w-10 h-10 transition-transform duration-500 ${isOnline ? 'scale-110' : 'scale-100'}`} />
          </button>

          <h2 className={`text-2xl font-black tracking-tight mb-2 ${isOnline ? 'text-success-dark' : 'text-on-surface'}`}>
            {isOnline ? 'You are Online' : 'You are Offline'}
          </h2>
          <p className="text-sm text-center font-semibold text-on-surface-variant max-w-[250px]">
            {isOnline 
              ? 'Actively scanning for new leads in Noida Sector 18. Keep your phone nearby.'
              : 'Go online to start receiving direct job requests from homeowners in your area.'}
          </p>

          {!isOnline && (
            <div className="mt-4 flex items-center text-xs text-on-surface-variant">
              <MapPin className="w-4 h-4 mr-1" />
              Coverage area: Noida
            </div>
          )}
        </div>
      </div>

      <div className="px-5 space-y-8 relative z-10">
        
        {/* Quick Stats */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Today's Summary</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center">
              <Target className="w-5 h-5 text-secondary mb-2" />
              <span className="text-xl font-black text-on-surface leading-tight">4</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Leads Contacted</span>
            </div>
            <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center">
              <Wallet className="w-5 h-5 text-primary mb-2" />
              <span className="text-xl font-black text-on-surface leading-tight">₹4,500</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Earned Today</span>
            </div>
          </div>
        </section>

        {/* Recent Jobs Overview */}
        <section>
          <div className="flex justify-between items-end mb-4 px-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Active Jobs</h3>
            <Link href="/pro/leads" className="text-xs font-bold text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            <Link href="/pro/leads/L-992" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-start flex-1">
                <div className="w-10 h-10 bg-secondary-container/50 rounded-full flex items-center justify-center text-secondary mr-3 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Bathroom Renovation</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 mb-1 truncate max-w-[200px]">Sector 50, Noida • Rahul S.</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-warning-container text-warning-dark rounded uppercase tracking-wider">In Progress</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline shrink-0 ml-2" />
            </Link>
            
            <Link href="/pro/leads/L-995" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-start flex-1">
                <div className="w-10 h-10 bg-secondary-container/50 rounded-full flex items-center justify-center text-secondary mr-3 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Modular Kitchen Install</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 mb-1 truncate max-w-[200px]">Indirapuram • Priya K.</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-error-container text-error rounded uppercase tracking-wider">Follow Up</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline shrink-0 ml-2" />
            </Link>
          </div>
        </section>

        {/* Demo trigger for Incoming Lead (PRO-03) */}
        {isOnline && (
          <section className="pt-4 border-t border-outline-variant/50">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center">
              <h3 className="font-bold text-primary mb-2 text-sm">Developer Tools</h3>
              <p className="text-xs text-on-surface-variant mb-4">Simulate an incoming lead push notification</p>
              <button 
                onClick={() => router.push('/pro/incoming')}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition shadow-sm"
              >
                Trigger Incoming Lead (Demo)
              </button>
            </div>
          </section>
        )}

      </div>
      <Footer />
    </div>
  );
}

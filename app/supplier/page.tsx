'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Store, TrendingUp, Users, ArrowRight, Bell, MapPin, Eye } from 'lucide-react';
import { useMockStore } from '../../store/mockStore';
import Link from 'next/link';
import { Footer } from '../../components/ui/Footer';

export default function SupplierDashboardHome() {
  const router = useRouter();
  const { user, logout } = useMockStore();
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-surface min-h-screen">
      {/* Header section with Greeting */}
      <div className="flex justify-between items-start mb-8 pt-2">
        <div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest block font-semibold mb-1">
            Supplier Dashboard
          </span>
          <h1 className="text-2xl font-bold text-on-surface tracking-tight">
            Good morning,<br/>
            <span className="text-primary">Jai Durga Tiles</span>
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/supplier/notifications" className="w-10 h-10 rounded-full bg-secondary-container/30 border border-outline-variant flex items-center justify-center text-on-surface hover:bg-secondary-container transition">
            <Bell className="w-5 h-5" />
          </Link>
          <button 
            onClick={handleLogout}
            className="w-10 h-10 rounded-full bg-error-container/20 border border-error/20 flex items-center justify-center text-error hover:bg-error-container hover:text-error transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Response Rate Warning (SUP-45) */}
      <div className="mb-6 bg-error-container/50 border border-error/30 rounded-2xl p-4 flex items-start relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
        <div className="flex-1">
          <h3 className="font-bold text-error text-sm mb-1">Low Response Rate</h3>
          <p className="text-xs text-error/80 leading-relaxed">
            Your response rate has fallen below 50%. Please respond to leads within 24h to maintain your listing visibility.
          </p>
        </div>
      </div>

      {/* Online Status Toggle */}
      <div className="glass-card rounded-xl p-4 border border-outline-variant mb-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${online ? 'bg-success animate-pulse' : 'bg-on-surface-variant'}`}></div>
          <div>
            <h3 className="font-bold text-sm text-on-surface">Store Status</h3>
            <p className="text-[11px] text-on-surface-variant flex items-center mt-0.5">
              <MapPin className="w-3 h-3 mr-1" /> Noida Sector 18
            </p>
          </div>
        </div>
        <button
          onClick={() => setOnline(!online)}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
            online 
              ? 'bg-success/10 text-success border border-success/20 hover:bg-success/20' 
              : 'bg-surface-variant text-on-surface-variant border border-outline hover:bg-outline-variant'
          }`}
        >
          {online ? 'Online' : 'Offline'}
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="glass-card rounded-xl p-4 border border-outline-variant flex flex-col items-center justify-center text-center shadow-sm">
          <Eye className="w-5 h-5 text-primary mb-2" />
          <span className="text-lg font-bold text-on-surface">1.2k</span>
          <span className="text-[9px] text-on-surface-variant uppercase tracking-wider font-semibold">Profile Views</span>
        </div>
        <div className="glass-card rounded-xl p-4 border border-outline-variant flex flex-col items-center justify-center text-center shadow-sm">
          <Users className="w-5 h-5 text-secondary mb-2" />
          <span className="text-lg font-bold text-on-surface">45</span>
          <span className="text-[9px] text-on-surface-variant uppercase tracking-wider font-semibold">Total Leads</span>
        </div>
        <div className="glass-card rounded-xl p-4 border border-outline-variant flex flex-col items-center justify-center text-center shadow-sm bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <TrendingUp className="w-5 h-5 text-primary mb-2" />
          <span className="text-lg font-bold text-primary">22%</span>
          <span className="text-[9px] text-primary uppercase tracking-wider font-semibold">Conversion</span>
        </div>
      </div>

      {/* New Leads Highlights */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">New Leads (2)</h3>
          <Link href="/supplier/leads" className="text-xs font-bold text-primary flex items-center hover:underline">
            View All <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
        
        <div className="space-y-4">
          {/* Highlight Card 1 */}
          <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-bold bg-error-container text-error px-2 py-1 rounded border border-error/20 uppercase tracking-wider mb-2 inline-block">
                  New Match
                </span>
                <h4 className="font-bold text-base text-on-surface">1200 Sq Ft Vitrified Floor Tiles</h4>
              </div>
              <span className="text-xs font-bold text-on-surface-variant whitespace-nowrap">2h ago</span>
            </div>
            
            <p className="text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
              Looking for double charged vitrified tiles. Size 2x2. Standard glossy finish. Quote needed with delivery to Sector 19.
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
              <div className="flex items-center text-xs text-on-surface-variant">
                <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-secondary mr-2">
                  AS
                </div>
                Anil S. • 1.5 km away
              </div>
              <Link href="/supplier/leads/L-1001" className="bg-primary text-on-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                View Details
              </Link>
            </div>
          </div>

          {/* Highlight Card 2 */}
          <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-bold bg-error-container text-error px-2 py-1 rounded border border-error/20 uppercase tracking-wider mb-2 inline-block">
                  New Match
                </span>
                <h4 className="font-bold text-base text-on-surface">Black Granite For Kitchen Countertop</h4>
              </div>
              <span className="text-xs font-bold text-on-surface-variant whitespace-nowrap">5h ago</span>
            </div>
            
            <p className="text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
              Premium black granite needed for a 15ft L-shaped kitchen counter. Need edge polishing and sink cutout included in price.
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
              <div className="flex items-center text-xs text-on-surface-variant">
                <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-secondary mr-2">
                  RK
                </div>
                Rahul K. • 3.2 km away
              </div>
              <Link href="/supplier/leads/L-1002" className="bg-primary text-on-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

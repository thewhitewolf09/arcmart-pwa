'use client';

import React from 'react';
import Link from 'next/link';
import { 
  User, Image as ImageIcon, ShieldCheck, Star, 
  Camera, ChevronRight, Settings, HelpCircle, 
  LogOut, Wallet, MapPin, Building2, Bell, Gift, TrendingUp
} from 'lucide-react';
import { Footer } from '../../../components/ui/Footer';

export default function ConsultantProfileHub() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface pb-24">
      {/* Header */}
      <div className="bg-primary pt-10 pb-6 px-5 rounded-b-[2rem] shadow-lg relative overflow-hidden text-center">
        <div className="absolute top-4 right-4 z-20">
          <Link href="/consultant/notifications" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center relative hover:bg-white/20 transition">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-primary"></span>
          </Link>
        </div>
        <h1 className="text-xl font-bold text-white mb-6">Consultant Profile</h1>
        
        <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center mb-3 shadow-md border-4 border-primary-container relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" alt="Profile" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-surface rounded-full flex items-center justify-center shadow border border-outline-variant z-10">
            <ShieldCheck className="w-4 h-4 text-outline" />
          </div>
        </div>
        
        <h2 className="text-2xl font-black text-white">Rohan Gupta</h2>
        <p className="text-xs text-primary-fixed-dim font-bold uppercase tracking-widest mt-1">Real Estate Expert</p>
      </div>

      <div className="px-5 mt-6 space-y-6">
        
        {/* Profile Settings */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Account & Settings</h3>
          <div className="space-y-3">
            <Link href="/consultant/wallet" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <Wallet className="w-5 h-5 text-success mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">My Wallet</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">Balance: ₹398 (2 Leads)</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link href="/consultant/profile/edit" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <User className="w-5 h-5 text-primary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Edit Basic Details</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">Name, bio, specializations</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link href="/consultant/profile/photo" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <Camera className="w-5 h-5 text-secondary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Profile Photo</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">Upload or change photo</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>
          </div>
        </section>

        {/* Verification & Trust */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">Trust & Verification</h3>
          <div className="space-y-3">
            <Link href="/consultant/profile/rera" className="glass-card rounded-2xl p-4 border border-warning/30 bg-warning/5 shadow-sm flex items-center justify-between hover:bg-warning/10 transition">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-warning-dark mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">RERA Verification</p>
                  <p className="text-[10px] text-warning-dark font-bold uppercase tracking-wider">Action Required</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link href="/consultant/profile/reviews" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">My Reviews</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">4.8 Average (12 Reviews)</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>
          </div>
        </section>

        {/* Utilities & Support */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1 mt-6">Utilities & Support</h3>
          <div className="space-y-3">
            <Link href="/consultant/referral" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <Gift className="w-5 h-5 text-primary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Refer & Earn</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">Get 10 Free Leads</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link href="/consultant/insights" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-info mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Market Insights</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">Locality price trends</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link href="/consultant/support" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-secondary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Help & Support</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">FAQs & Contact</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="mt-8">
          <Link href="/consultant/profile/delete" className="glass-card rounded-2xl p-4 border border-error/20 bg-error/5 flex items-center justify-between hover:bg-error/10 transition">
            <div className="flex items-center">
              <LogOut className="w-5 h-5 text-error mr-3" />
              <p className="text-sm font-bold text-error">Delete Account</p>
            </div>
            <ChevronRight className="w-5 h-5 text-error/50" />
          </Link>
        </section>

      </div>
      <Footer />
    </div>
  );
}

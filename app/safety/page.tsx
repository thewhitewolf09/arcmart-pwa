'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ShieldAlert, AlertTriangle, ArrowLeft, ChevronRight, MessageSquare, Phone, Info, CheckCircle2 } from 'lucide-react';

export default function SafetyCenterPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-primary px-4 py-3 flex items-center pt-safe shadow-md">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-white/10 transition-colors flex-shrink-0 text-white">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-lg text-white">Trust & Safety</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-safe">
        
        {/* Header Graphic */}
        <div className="bg-primary px-6 pb-10 pt-4 text-center rounded-b-[2rem] shadow-lg relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10">
            <ShieldCheck className="w-10 h-10 text-primary" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-black text-white relative z-10">ArcMart Safety Center</h1>
          <p className="text-primary-fixed-dim text-sm mt-2 relative z-10 font-medium px-4">
            Your safety is our priority. Learn how we protect you and what to do if things go wrong.
          </p>
        </div>

        <div className="px-5 pt-6 pb-32 space-y-6">

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => router.push('/report')}
              className="bg-error-container border border-error/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-error-container/80 transition shadow-sm active:scale-95"
            >
              <ShieldAlert className="w-8 h-8 text-error mb-2" />
              <span className="font-bold text-sm text-error-dark">Report a User</span>
            </button>
            <button 
              onClick={() => router.push('/dispute')}
              className="bg-warning-container border border-warning/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-warning-container/80 transition shadow-sm active:scale-95"
            >
              <AlertTriangle className="w-8 h-8 text-warning-dark mb-2" />
              <span className="font-bold text-sm text-warning-dark">Start a Dispute</span>
            </button>
          </div>

          {/* What is ArcMart Verified? (TS-13) */}
          <section className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-5 shadow-sm">
            <h2 className="text-lg font-black text-on-surface flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-success" /> What is ArcMart Verified?
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-5 font-medium">
              When you see the green verified badge, it means we have performed rigorous background checks on the professional or supplier.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0 mr-3 mt-0.5">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Identity Check</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">We verify government IDs (Aadhaar/PAN) using facial recognition.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0 mr-3 mt-0.5">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Business Registration</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">For suppliers, we verify active GST numbers and business licenses.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0 mr-3 mt-0.5">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Quality Monitoring</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Accounts dropping below a 3-star rating are suspended.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Tips */}
          <section className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl p-5 shadow-sm">
            <h2 className="text-lg font-black text-on-surface flex items-center gap-2 mb-4">
              <Info className="w-6 h-6 text-primary" /> Hiring Safely
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm text-on-surface-variant"><strong className="text-on-surface">Always use in-app chat.</strong> Keep your communication on ArcMart so we have a record if disputes arise.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm text-on-surface-variant"><strong className="text-on-surface">Get a quote first.</strong> Never let work begin without accepting an official quote through the app.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm text-on-surface-variant"><strong className="text-on-surface">Don't pay upfront.</strong> Unless for materials via an accepted quote, pay only after work is completed.</p>
              </li>
            </ul>
          </section>

          {/* Contact Support */}
          <section className="bg-primary/5 border border-primary/20 rounded-3xl p-5">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">24/7 Support Team</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary transition">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="font-bold text-sm text-on-surface">Chat with Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-outline" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-outline-variant hover:border-primary transition">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-bold text-sm text-on-surface">Emergency Helpline</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant border bg-surface px-2 py-1 rounded-md">1800-ARC-MART</span>
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

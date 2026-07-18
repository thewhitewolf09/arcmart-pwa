"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  X,
  Building2,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function OnboardingLanding() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => router.push("/supplier")}
          className="p-2 -ml-2 rounded-full hover:bg-surface-variant text-on-surface transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-32 px-5">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20 shadow-sm">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-black text-on-surface mb-3 tracking-tight">
            Grow Your Business with ArcMart
          </h1>
          <p className="text-sm text-on-surface-variant leading-relaxed px-4">
            Join India's fastest-growing network of verified construction
            suppliers and get direct access to high-intent homeowners.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4 mb-10">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-success-container flex items-center justify-center mr-3 shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4 text-success-dark" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-on-surface">
                Verified High-Intent Leads
              </h3>
              <p className="text-xs text-on-surface-variant">
                We don't share your contact with random dialers. You only get
                matched with active projects.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-on-surface">
                Zero Commission
              </h3>
              <p className="text-xs text-on-surface-variant">
                We don't take a cut from your sales. You deal directly with the
                homeowner.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Matrix (SUP-42) */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4 text-center">
            ArcMart vs Others
          </h3>

          <div className="glass-card rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 border-b border-outline-variant bg-surface-variant/50 p-3">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center text-[10px] font-bold uppercase tracking-wider text-primary">
                ArcMart
              </div>
              <div className="col-span-1 text-center text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                JustDial etc.
              </div>
            </div>

            <div className="divide-y divide-outline-variant/50 text-sm">
              <div className="grid grid-cols-3 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">
                  Lead Quality
                </div>
                <div className="col-span-1 text-center text-primary font-bold text-xs">
                  High Intent
                </div>
                <div className="col-span-1 text-center text-on-surface-variant font-bold text-xs">
                  Junk/Spam
                </div>
              </div>

              <div className="grid grid-cols-3 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">
                  Commissions
                </div>
                <div className="col-span-1 text-center text-primary font-bold text-xs">
                  0%
                </div>
                <div className="col-span-1 text-center text-error font-bold text-xs">
                  10-15%
                </div>
              </div>

              <div className="grid grid-cols-3 p-3 items-center">
                <div className="col-span-1 font-semibold text-[11px] text-on-surface">
                  Target Audience
                </div>
                <div className="col-span-1 text-center text-primary font-bold text-xs flex justify-center">
                  Construction Only
                </div>
                <div className="col-span-1 text-center text-on-surface-variant font-bold text-xs flex justify-center">
                  Everything
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <Link
          href="/supplier/onboarding/step-1"
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Start Onboarding <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
        <p className="text-center text-[10px] text-on-surface-variant mt-3 font-semibold">
          Takes only 3 minutes to complete.
        </p>
      </div>
    </div>
  );
}

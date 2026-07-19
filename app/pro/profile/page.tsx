"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Image as ImageIcon,
  ShieldCheck,
  Clock,
  Star,
  Camera,
  ChevronRight,
  AlertTriangle,
  Settings,
  HelpCircle,
  LogOut,
  Briefcase,
  Wallet,
  Award,
  Landmark,
  Map,
  Trash2,
  MessageSquare,
  Gift,
  Bell,
  Trophy,
} from "lucide-react";
import { Footer } from "../../../components/ui/Footer";

export default function ProProfileHub() {
  const [emergencyUnavailable, setEmergencyUnavailable] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface pb-24">
      {/* Header */}
      <div className="bg-primary pt-10 pb-6 px-5 rounded-b-[2rem] shadow-lg relative overflow-hidden text-center">
        <h1 className="text-xl font-bold text-white mb-6">Profile Hub</h1>

        <div className="w-24 h-24 mx-auto bg-surface rounded-full flex items-center justify-center mb-3 shadow-md border-4 border-primary-container relative">
          <span className="text-3xl font-black text-primary">AS</span>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-surface rounded-full flex items-center justify-center shadow border border-outline-variant">
            <ShieldCheck className="w-4 h-4 text-success" />
          </div>
        </div>

        <h2 className="text-2xl font-black text-white">Arun Sharma</h2>
        <p className="text-xs text-primary-fixed-dim font-bold uppercase tracking-widest mt-1">
          Plumbing Expert
        </p>
      </div>

      <div className="px-5 mt-6 space-y-6">
        {/* Emergency Unavailable Toggle (PRO-22) */}
        <div
          className={`rounded-2xl p-4 border flex items-center justify-between transition-colors shadow-sm ${
            emergencyUnavailable
              ? "bg-error-container/30 border-error/50"
              : "glass-card border-outline-variant"
          }`}
        >
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0 ${
                emergencyUnavailable
                  ? "bg-error text-white"
                  : "bg-surface-variant text-on-surface-variant"
              }`}
            >
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p
                className={`font-bold text-sm ${emergencyUnavailable ? "text-error-dark" : "text-on-surface"}`}
              >
                Emergency Pause
              </p>
              <p className="text-[10px] text-on-surface-variant font-semibold">
                {emergencyUnavailable
                  ? "Leads paused for today"
                  : "Temporarily stop receiving leads"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setEmergencyUnavailable(!emergencyUnavailable)}
            className={`w-12 h-6 rounded-full relative transition-colors ${
              emergencyUnavailable ? "bg-error" : "bg-outline-variant"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${
                emergencyUnavailable ? "left-7" : "left-1"
              }`}
            ></div>
          </button>
        </div>

        {/* Profile Settings */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
            Profile & Showcase
          </h3>
          <div className="space-y-3">
            <Link
              href="/pro/wallet"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Wallet className="w-5 h-5 text-success mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">My Wallet</p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    Balance: ₹147 (3 Leads)
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/edit"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <User className="w-5 h-5 text-primary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Edit Basic Details
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    Name, trade, services, areas
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/photo"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Camera className="w-5 h-5 text-secondary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Profile Photo
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    Upload or change photo
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/portfolio"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-on-surface-variant mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Work Portfolio
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    Showcase completed jobs
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/badges"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Award className="w-5 h-5 text-secondary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Badges & Achievements
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    2 unlocked badges
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/leaderboard/pro"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Trophy className="w-5 h-5 text-yellow-500 mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Top Pros Leaderboard
                  </p>
                  <p className="text-[10px] text-yellow-600 font-bold uppercase tracking-wider">
                    Rank #12 in Plumbing
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/trust-score"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-success mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Trust Score
                  </p>
                  <p className="text-[10px] text-success font-bold uppercase tracking-wider">
                    Excellent (85)
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>
          </div>
        </section>

        {/* Verification & Schedule */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
            Account & Availability
          </h3>
          <div className="space-y-3">
            <Link
              href="/pro/profile/verification"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-success mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Aadhaar Verification
                  </p>
                  <p className="text-[10px] text-success font-bold uppercase tracking-wider">
                    Verified
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/certificate"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-on-surface-variant mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Trade Certifications
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    Upload licenses & certs
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/schedule"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-on-surface-variant mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Working Schedule
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    Set days & hours
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/reviews"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    My Reviews
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    View client feedback
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/map"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Map className="w-5 h-5 text-on-surface-variant mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Service Area Map
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    View coverage map
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/bank"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Landmark className="w-5 h-5 text-on-surface-variant mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Bank Details
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    For future payouts
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/account/billing"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Landmark className="w-5 h-5 text-on-surface-variant mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Billing & Invoices
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-semibold">
                    GST details & past receipts
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>
          </div>
        </section>

        {/* Support & Settings */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 ml-1">
            Support & More
          </h3>
          <div className="space-y-3">
            <Link
              href="/account/notifications/settings"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-on-surface-variant mr-3" />
                <p className="text-sm font-bold text-on-surface">
                  Notification Settings
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/referral"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <Gift className="w-5 h-5 text-primary mr-3" />
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Refer & Earn
                  </p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider">
                    Get ₹500 Free
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/support"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-on-surface-variant mr-3" />
                <p className="text-sm font-bold text-on-surface">
                  Help & Support
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/safety"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-success mr-3" />
                <p className="text-sm font-bold text-on-surface">
                  Trust & Safety Center
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/feedback"
              className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition"
            >
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 text-on-surface-variant mr-3" />
                <p className="text-sm font-bold text-on-surface">
                  Give Feedback
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-outline" />
            </Link>

            <Link
              href="/pro/profile/delete"
              className="glass-card rounded-2xl p-4 border border-error/20 bg-error/5 shadow-sm flex items-center justify-between hover:bg-error/10 transition mt-6"
            >
              <div className="flex items-center">
                <Trash2 className="w-5 h-5 text-error mr-3" />
                <p className="text-sm font-bold text-error">Delete Account</p>
              </div>
              <ChevronRight className="w-5 h-5 text-error/50" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

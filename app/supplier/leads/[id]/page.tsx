"use client";

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Wallet,
  Phone,
  MessageSquare,
  Clock,
  Edit2,
  CheckCircle2,
  X,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import LeadStatusModals from "../../../../components/supplier/LeadStatusModals";

export default function SupplierLeadDetail() {
  const router = useRouter();
  const params = useParams();
  const leadId = params.id as string;

  const [modalType, setModalType] = useState<
    "contacted" | "converted" | "not-relevant" | null
  >(null);

  // Mock data for this lead based on ID
  const lead = {
    id: leadId,
    title: "1200 Sq Ft Vitrified Floor Tiles",
    customerName: "Anil Sharma",
    locality: "Sector 19, Noida",
    distance: "1.5 km away",
    timePosted: "2 hours ago",
    budget: "₹85,000 - ₹1,00,000",
    timeline: "Within 2 weeks",
    status: "new", // new, contacted, converted, not-relevant
    description:
      "Looking for double charged vitrified tiles. Size 2x2. Standard glossy finish. Quote needed with delivery to Sector 19. Also need 2 boxes of matching skirting tiles.",
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate pr-4">
            Lead {lead.id}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Header Section */}
        <div className="p-5 border-b border-outline-variant bg-surface">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-bold bg-error-container text-error px-2 py-1 rounded border border-error/20 uppercase tracking-wider inline-block">
              New Match
            </span>
            <span className="text-xs font-bold text-on-surface-variant flex items-center">
              <Clock className="w-3 h-3 mr-1" /> {lead.timePosted}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-on-surface leading-tight mb-4">
            {lead.title}
          </h1>

          <div className="flex items-center text-sm text-on-surface-variant font-semibold">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 font-bold">
              {lead.customerName.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-on-surface">{lead.customerName}</p>
              <p className="text-xs flex items-center mt-0.5">
                <MapPin className="w-3 h-3 mr-1" /> {lead.locality} •{" "}
                {lead.distance}
              </p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-5 space-y-6">
          <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm space-y-4">
            <div className="flex items-start">
              <Wallet className="w-5 h-5 text-on-surface-variant mr-3 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant">
                  Estimated Budget
                </p>
                <p className="text-sm font-bold text-on-surface mt-0.5">
                  {lead.budget}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-on-surface-variant mr-3 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant">
                  Timeline
                </p>
                <p className="text-sm font-bold text-on-surface mt-0.5">
                  {lead.timeline}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
              Requirement Details
            </h3>
            <div className="glass-card rounded-2xl p-5 border border-outline-variant shadow-sm text-sm text-on-surface-variant leading-relaxed">
              {lead.description}
            </div>
          </div>

          {/* Action Update Area */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
              Update Status
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setModalType("contacted")}
                className="flex flex-col items-center p-3 rounded-xl border border-outline-variant bg-surface hover:bg-secondary-container/30 transition text-on-surface"
              >
                <MessageSquare className="w-5 h-5 mb-2 text-secondary" />
                <span className="text-[10px] font-bold text-center leading-tight">
                  Mark
                  <br />
                  Contacted
                </span>
              </button>
              <button
                onClick={() => setModalType("converted")}
                className="flex flex-col items-center p-3 rounded-xl border border-outline-variant bg-surface hover:bg-success-container/30 transition text-on-surface"
              >
                <CheckCircle2 className="w-5 h-5 mb-2 text-success" />
                <span className="text-[10px] font-bold text-center leading-tight">
                  Mark
                  <br />
                  Converted
                </span>
              </button>
              <button
                onClick={() => setModalType("not-relevant")}
                className="flex flex-col items-center p-3 rounded-xl border border-outline-variant bg-surface hover:bg-error-container/30 transition text-on-surface"
              >
                <X className="w-5 h-5 mb-2 text-error" />
                <span className="text-[10px] font-bold text-center leading-tight">
                  Not
                  <br />
                  Relevant
                </span>
              </button>
            </div>
          </div>

          {/* Lead Quality Feedback (SUP-46) */}
          <div className="pt-4 border-t border-outline-variant/50">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
              Rate this Lead
            </h3>
            <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between">
              <p className="text-xs text-on-surface-variant font-semibold flex-1 pr-4">
                Was this a good match for your business?
              </p>
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full bg-surface hover:bg-success/10 border border-outline-variant flex items-center justify-center text-on-surface hover:text-success hover:border-success/30 transition">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-surface hover:bg-error/10 border border-outline-variant flex items-center justify-center text-on-surface hover:text-error hover:border-error/30 transition">
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <div className="flex space-x-3">
          <button className="flex-1 py-3.5 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-[#128C7E]/90 transition">
            <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp
          </button>
          <button className="flex-1 py-3.5 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
            <Phone className="w-5 h-5 mr-2" /> Call Now
          </button>
        </div>
      </div>

      <LeadStatusModals
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </div>
  );
}

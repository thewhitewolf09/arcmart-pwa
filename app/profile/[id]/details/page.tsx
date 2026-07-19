'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, IndianRupee, Clock, X, FileText } from 'lucide-react';

export default function ProfileDetailsPlayground({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeSheet, setActiveSheet] = useState<string | null>(null);

  const closeSheet = () => setActiveSheet(null);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Profile Info Modals</span>
      </div>

      <div className="flex-1 p-5 space-y-6 pb-32">
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
          This playground demonstrates the informational bottom sheets that appear when a user taps on specific badges or metrics on a professional's profile.
        </p>

        <section className="space-y-3">
          
          <button onClick={() => setActiveSheet('verified')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-success/50">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-success mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Verified Badge (PR-08)</p>
                <p className="text-[10px] text-on-surface-variant">Tap to explain verification</p>
              </div>
            </div>
          </button>
          
          <button onClick={() => setActiveSheet('price')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-primary/50">
            <div className="flex items-center">
              <IndianRupee className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Price Range (PR-09)</p>
                <p className="text-[10px] text-on-surface-variant">Tap for pricing details</p>
              </div>
            </div>
          </button>

          <button onClick={() => setActiveSheet('response')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-secondary/50">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-secondary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Response Time (PR-10)</p>
                <p className="text-[10px] text-on-surface-variant">Tap for response metrics</p>
              </div>
            </div>
          </button>
        </section>
      </div>

      {/* OVERLAYS & SHEETS */}
      {activeSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={closeSheet}></div>
          
          <div className="w-full bg-surface rounded-t-3xl p-6 relative z-10 animate-slide-up-modal max-h-[90vh] overflow-y-auto pb-safe">
            <div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-6"></div>
            
            <button onClick={closeSheet} className="absolute top-5 right-5 p-2 bg-surface-variant rounded-full text-on-surface-variant hover:text-on-surface transition">
              <X className="w-4 h-4" />
            </button>

            {/* Verified Detail Sheet */}
            {activeSheet === 'verified' && (
              <div className="pb-4">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mr-4">
                    <ShieldCheck className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-on-surface">Verified Professional</h2>
                    <p className="text-xs text-success font-bold uppercase tracking-widest mt-0.5">Trust & Safety</p>
                  </div>
                </div>
                
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  This professional has completed ArcMart's verification process. We have verified the following documents:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center bg-surface-dim p-3 rounded-xl border border-outline-variant">
                    <FileText className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm font-bold text-on-surface">Government ID (Aadhaar/PAN)</span>
                  </li>
                  <li className="flex items-center bg-surface-dim p-3 rounded-xl border border-outline-variant">
                    <FileText className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm font-bold text-on-surface">Business Registration / GST</span>
                  </li>
                  <li className="flex items-center bg-surface-dim p-3 rounded-xl border border-outline-variant">
                    <FileText className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm font-bold text-on-surface">Professional Certification (CoA)</span>
                  </li>
                </ul>
                
                <button onClick={closeSheet} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Got it</button>
              </div>
            )}

            {/* Price Range Detail Sheet */}
            {activeSheet === 'price' && (
              <div className="pb-4">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <IndianRupee className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-on-surface">₹500 - ₹1,200 / sqft</h2>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mt-0.5">Estimated Price</p>
                  </div>
                </div>
                
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  This is a typical price range for interior design services by this professional. 
                  Actual costs may vary based on your specific requirements.
                </p>
                
                <div className="bg-surface-dim p-4 rounded-2xl border border-outline-variant mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">What's generally included</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm font-medium text-on-surface"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span> 3D Designs & Renderings</li>
                    <li className="flex items-center text-sm font-medium text-on-surface"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span> Material Selection</li>
                    <li className="flex items-center text-sm font-medium text-on-surface"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span> Project Management</li>
                  </ul>
                </div>
                
                <button onClick={closeSheet} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Request Custom Quote</button>
              </div>
            )}

            {/* Response Time Detail Sheet */}
            {activeSheet === 'response' && (
              <div className="pb-4">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-on-surface">Responds in ~20 mins</h2>
                    <p className="text-xs text-secondary font-bold uppercase tracking-widest mt-0.5">Highly Responsive</p>
                  </div>
                </div>
                
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  This metric is calculated based on the professional's reply time to new lead inquiries over the last 30 days.
                </p>
                
                <div className="flex items-center justify-between bg-surface-dim p-4 rounded-xl border border-outline-variant mb-6">
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">Messages Replied To</p>
                    <p className="font-bold text-on-surface mt-1">98%</p>
                  </div>
                  <div className="w-px h-8 bg-outline-variant"></div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">Recent Interactions</p>
                    <p className="font-bold text-on-surface mt-1">45</p>
                  </div>
                </div>
                
                <button onClick={closeSheet} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Chat on WhatsApp</button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

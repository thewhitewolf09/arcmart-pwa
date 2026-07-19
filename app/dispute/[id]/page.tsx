'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, MessageSquare, Clock, Phone, AlertCircle } from 'lucide-react';

export default function DisputeTrackingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  // Mock timeline
  const timeline = [
    {
      title: 'Dispute Filed',
      desc: 'You submitted a dispute for "Poor Quality Work".',
      date: 'Oct 26, 10:00 AM',
      status: 'completed'
    },
    {
      title: 'Under Review',
      desc: 'ArcMart Support is reviewing your evidence.',
      date: 'Oct 26, 11:30 AM',
      status: 'completed'
    },
    {
      title: 'Awaiting Professional Response',
      desc: 'We have contacted Arun Sharma for their statement.',
      date: 'Oct 26, 02:00 PM',
      status: 'current'
    },
    {
      title: 'Resolution Decision',
      desc: 'Final verdict and next steps will be provided here.',
      date: 'Pending',
      status: 'upcoming'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-4 py-3 flex items-center pt-safe border-b border-outline-variant shadow-sm">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container transition-colors flex-shrink-0 text-on-surface">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-lg text-on-surface">Dispute #{params.id}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        
        {/* Status Header */}
        <div className="bg-warning/10 border border-warning/30 rounded-3xl p-6 text-center mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-warning/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
          
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm relative z-10">
            <Clock className="w-8 h-8 text-warning-dark" />
          </div>
          <h2 className="text-xl font-black text-warning-dark relative z-10">Action Pending</h2>
          <p className="text-sm font-medium text-warning-dark/80 mt-1 relative z-10 max-w-[250px] mx-auto leading-relaxed">
            We are waiting for a response from the professional before proceeding.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h3 className="font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">Resolution Timeline</h3>
          
          <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-outline-variant before:to-transparent">
            
            {timeline.map((step, idx) => (
              <div key={idx} className="relative flex items-start">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-6 w-6 h-6 rounded-full border-[3px] border-surface flex items-center justify-center z-10 ${
                  step.status === 'completed' ? 'bg-primary' : 
                  step.status === 'current' ? 'bg-warning animate-pulse' : 
                  'bg-outline-variant'
                }`}>
                  {step.status === 'completed' && <CheckCircle2 className="w-3 h-3 text-white" />}
                  {step.status === 'current' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>

                {/* Content */}
                <div className="pl-4 pb-2">
                  <h4 className={`text-sm font-bold ${step.status === 'upcoming' ? 'text-on-surface-variant' : 'text-on-surface'}`}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/70">
                    {step.date}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Support Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-primary shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-on-surface">Need immediate help?</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                If this is an emergency, or you need to provide additional evidence, contact our support team.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 h-10 border border-outline-variant rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-on-surface hover:bg-surface-container transition">
              <MessageSquare className="w-4 h-4" /> Chat
            </button>
            <button className="flex-1 h-10 border border-outline-variant rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-on-surface hover:bg-surface-container transition">
              <Phone className="w-4 h-4" /> Call
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

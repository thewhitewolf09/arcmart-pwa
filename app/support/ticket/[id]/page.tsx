'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Paperclip, Send, User, Headset, FileType } from 'lucide-react';

export default function TicketDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [reply, setReply] = useState('');

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-bold text-on-surface text-sm">Ticket {params.id}</h1>
            <p className="text-[10px] font-bold text-warning-dark uppercase tracking-wider">In Progress</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col pb-[72px]">
        {/* Ticket Header Info */}
        <div className="p-4 bg-surface-container-lowest border-b border-outline-variant/30">
          <h2 className="font-bold text-on-surface mb-1">GST Verification Failed</h2>
          <p className="text-xs text-on-surface-variant font-medium">Category: Account & Profile Verification</p>
        </div>

        {/* Chat Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {/* User Initial Message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
              <User className="w-4 h-4 text-on-surface-variant" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-bold text-on-surface">You</span>
                <span className="text-[10px] text-on-surface-variant">Today, 10:30 AM</span>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl rounded-tl-sm p-3 text-sm text-on-surface leading-relaxed shadow-sm">
                Hi, I tried to verify my GST number for my supplier profile but it keeps getting rejected. The business name matches exactly. I have attached my GST certificate for review. Please help me get this approved so I can buy the Pro plan.
                
                {/* Attachment */}
                <div className="mt-3 flex items-center gap-3 p-2 bg-surface rounded-xl border border-outline-variant/50 w-max pr-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <FileType className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">GST_Cert.pdf</p>
                    <p className="text-[9px] font-medium text-on-surface-variant">1.2 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Reply */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Headset className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-bold text-primary">ArcMart Support</span>
                <span className="text-[10px] text-on-surface-variant">Today, 11:45 AM</span>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl rounded-tl-sm p-3 text-sm text-on-surface leading-relaxed">
                Hello! Thank you for reaching out. We apologize for the inconvenience. 
                <br/><br/>
                Our system rejected it because the GSTIN on the certificate ends with 'Z4', but the number entered in your profile ends with 'Z5'. 
                <br/><br/>
                I have unlocked your profile editing. Could you please correct the GSTIN in your profile settings and click submit again? Let me know once you do!
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Reply Input */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-surface border-t border-outline-variant/50 pb-32 md:hidden">
        <div className="flex items-end gap-2 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-1 pr-2 shadow-sm focus-within:border-primary/50 transition-colors">
          <button className="p-2 text-on-surface-variant hover:text-primary transition shrink-0">
            <Paperclip className="w-5 h-5" />
          </button>
          <textarea 
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your reply..."
            rows={1}
            className="flex-1 bg-transparent py-2.5 outline-none text-sm font-medium text-on-surface resize-none max-h-32"
          />
          <button 
            disabled={!reply.trim()}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mb-0.5 disabled:opacity-50 disabled:bg-surface-variant disabled:text-on-surface-variant transition"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>

    </div>
  );
}

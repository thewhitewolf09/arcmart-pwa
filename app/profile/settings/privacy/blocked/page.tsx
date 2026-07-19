'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserX, ShieldCheck } from 'lucide-react';

export default function BlockedUsersPage() {
  const router = useRouter();
  
  const [blockedUsers, setBlockedUsers] = useState([
    { id: 1, name: 'Aakash Plumbers', type: 'Professional', date: 'Oct 12, 2026', image: null },
    { id: 2, name: 'Ravi Tiles', type: 'Supplier', date: 'Sep 05, 2026', image: null },
  ]);

  const handleUnblock = (id: number) => {
    setBlockedUsers(blockedUsers.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-on-surface">Blocked Users</h1>
        </div>
      </header>

      <main className="flex-1 p-4 pb-32">
        
        <div className="flex gap-3 mb-6 p-4 bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm">
          <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
          <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
            Blocked users cannot see your profile, send you messages, or submit quotes to your requests.
          </p>
        </div>

        <h2 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4 ml-1">
          Blocked Accounts ({blockedUsers.length})
        </h2>

        {blockedUsers.length > 0 ? (
          <div className="space-y-3">
            {blockedUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center overflow-hidden shrink-0">
                    <UserX className="w-5 h-5 text-on-surface-variant" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">{user.name}</h3>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase mt-0.5">{user.type} • Blocked {user.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleUnblock(user.id)}
                  className="px-3 py-1.5 border border-outline-variant text-xs font-bold text-on-surface rounded-lg hover:bg-surface-variant transition"
                >
                  Unblock
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
              <UserX className="w-8 h-8 text-on-surface-variant" />
            </div>
            <h3 className="font-bold text-sm text-on-surface mb-1">No Blocked Users</h3>
            <p className="text-xs text-on-surface-variant">When you block someone, they will appear here.</p>
          </div>
        )}

      </main>
    </div>
  );
}

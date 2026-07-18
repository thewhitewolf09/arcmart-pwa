'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DiscoverLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0 opacity-20"></div>

      {/* Main Content Area */}
      <div className="flex-1 pb-20 relative z-10">
        {children}
      </div>
    </div>
  );
}
